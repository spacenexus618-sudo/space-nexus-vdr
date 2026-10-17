"""JSON-LD schema validation for Space Kindora pages.

Adapted from eGEOagents (MIT) - scripts/validate_jsonld.py - extended to read
the Next.js pattern used in this repo:

    <script type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(someSchema) }} />

The tool resolves ``someSchema`` from the same file, converts the JS object
literal to JSON (string/comment-aware), then validates structure:

- parses as JSON
- ``@context`` mentions schema.org
- every node has an ``@type`` (root or each ``@graph`` entry)
- required keys per known @type (FAQPage -> mainEntity, Article -> headline...)
- no ``[FILL: ...]`` placeholders, no git conflict markers

JS literals it cannot convert safely (template literals, spreads, unresolved
variables) are reported as "dynamic - manual review", never guessed.

Usage:
    python scripts/geo/schema_validator.py
    python scripts/geo/schema_validator.py --root app --root public --json
    python scripts/geo/schema_validator.py --report schema-report.md

Exit codes: 0 ok, 1 validation errors found, 2 usage error.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import date
from pathlib import Path
from typing import Dict, List, Optional, Tuple

LD_TAG = "application/ld+json"
REQUIRED_KEYS: Dict[str, List[str]] = {
    "FAQPage": ["mainEntity"],
    "Article": ["headline"],
    "NewsArticle": ["headline"],
    "Organization": ["name"],
    "Corporation": ["name"],
    "Product": ["name"],
    "Service": ["name"],
    "SoftwareApplication": ["name"],
    "WebSite": ["name"],
    "BreadcrumbList": ["itemListElement"],
    "HowTo": ["step"],
}
SCAN_SUFFIXES = {".tsx", ".ts", ".jsx", ".js", ".json", ".html", ".htm"}


class DynamicSchemaError(Exception):
    pass


def _balanced(text: str, start: int) -> str:
    if start >= len(text) or text[start] != "{":
        raise DynamicSchemaError("expected '{'")
    depth = 0
    i = start
    in_str: Optional[str] = None
    escape = False
    while i < len(text):
        c = text[i]
        if in_str:
            if escape:
                escape = False
            elif c == "\\":
                escape = True
            elif c == in_str:
                in_str = None
            elif c == "`" and in_str == '"':
                pass
        else:
            if c in "\"'`":
                in_str = c
            elif c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    return text[start:i + 1]
        i += 1
    raise DynamicSchemaError("unbalanced braces")


def js_to_json(src: str) -> str:
    out: List[str] = []
    i = 0
    n = len(src)
    last_sig = ""
    single_map = {"b": "\\b", "f": "\\f", "n": "\\n", "r": "\\r", "t": "\\t", "v": "\\v", "0": "\\0"}
    while i < n:
        c = src[i]
        if c in "\"'":
            quote = c
            j = i + 1
            buf: List[str] = []
            closed = False
            while j < n:
                cj = src[j]
                if cj == "\\":
                    nxt = src[j + 1] if j + 1 < n else ""
                    if nxt == "u":
                        hex_digits = src[j + 2:j + 6]
                        if len(hex_digits) == 4 and all(h in "0123456789abcdefABCDEF" for h in hex_digits):
                            buf.append("\\u" + hex_digits)
                            j += 6
                            continue
                        raise DynamicSchemaError("bad unicode escape")
                    if quote == "'":
                        if nxt == "'":
                            buf.append("'")
                        elif nxt == '"':
                            buf.append('\\"')
                        elif nxt == "\\":
                            buf.append("\\\\")
                        elif nxt in single_map:
                            buf.append(single_map[nxt])
                        elif nxt == "\n":
                            j += 2
                            continue
                        else:
                            buf.append(nxt)
                    else:
                        if nxt in "\"\\/bfnrt":
                            buf.append("\\" + nxt)
                        elif nxt == "\n":
                            j += 2
                            continue
                        else:
                            buf.append("\\" + nxt)
                    j += 2
                    continue
                if cj == quote:
                    closed = True
                    break
                if cj == "\n":
                    raise DynamicSchemaError("unterminated string")
                buf.append(cj)
                j += 1
            if not closed:
                raise DynamicSchemaError("unterminated string")
            out.append('"' + "".join(buf) + '"')
            last_sig = '"'
            i = j + 1
            continue
        if c == "`":
            raise DynamicSchemaError("template literal")
        if c == "/" and i + 1 < n and src[i + 1] == "/":
            while i < n and src[i] != "\n":
                i += 1
            continue
        if c == "/" and i + 1 < n and src[i + 1] == "*":
            end = src.find("*/", i + 2)
            if end == -1:
                raise DynamicSchemaError("unterminated comment")
            i = end + 2
            continue
        if c.isalpha() or c in "_$":
            j = i
            while j < n and (src[j].isalnum() or src[j] in "_$"):
                j += 1
            ident = src[i:j]
            k = j
            while k < n and src[k] in " \t\n\r":
                k += 1
            is_key = k < n and src[k] == ":" and last_sig in "{[,"
            if ident in ("true", "false", "null"):
                out.append(ident)
                last_sig = ident[-1]
            elif ident == "undefined":
                raise DynamicSchemaError("undefined value")
            elif is_key:
                out.append('"' + ident + '"')
                last_sig = '"'
            else:
                out.append(ident)
                last_sig = ident[-1]
            i = j
            continue
        if c == "=" and i + 1 < n and src[i + 1] == ">":
            raise DynamicSchemaError("arrow function")
        if c == ",":
            k = i + 1
            while k < n and src[k] in " \t\n\r":
                k += 1
            if k < n and src[k] in "}]":
                i += 1
                continue
            out.append(",")
            last_sig = ","
            i += 1
            continue
        if not c.isspace():
            last_sig = c
        out.append(c)
        i += 1
    return "".join(out)


def resolve_var(text: str, name: str) -> str:
    m = re.search(r"(?:const|let|var)?\s*" + re.escape(name) + r"\s*=\s*\{", text)
    if not m:
        raise DynamicSchemaError(f"definition of '{name}' not found in file")
    brace_at = text.index("{", m.start())
    return _balanced(text, brace_at)


def find_blocks(text: str) -> List[Tuple[int, int, str, str]]:
    blocks: List[Tuple[int, int, str, str]] = []
    for tag_match in re.finditer(re.escape(LD_TAG), text):
        line_no = text.count("\n", 0, tag_match.start()) + 1
        window = text[tag_match.end():tag_match.end() + 800]
        sm = re.search(r"JSON\.stringify\(\s*", window)
        close_tag = window.find("</script>")
        if sm and (close_tag == -1 or sm.start() < close_tag):
            arg_at = tag_match.end() + sm.end()
            first = text[arg_at:arg_at + 1].strip()
            if first == "{":
                blocks.append((line_no, tag_match.start(), "inline", _balanced(text, arg_at)))
                continue
            vm = re.match(r"([A-Za-z_$][\w$]*)", text[arg_at:])
            if vm:
                name = vm.group(1)
                try:
                    blocks.append((line_no, tag_match.start(), "var:" + name, resolve_var(text, name)))
                except DynamicSchemaError as exc:
                    blocks.append((line_no, tag_match.start(), "dynamic", str(exc)))
                continue
            blocks.append((line_no, tag_match.start(), "dynamic", "unrecognized JSON.stringify argument"))
            continue
        if close_tag != -1:
            open_end = window.find(">")
            content = window[open_end + 1:close_tag].strip() if open_end != -1 else ""
            if content:
                blocks.append((line_no, tag_match.start(), "raw", content))
                continue
        blocks.append((line_no, tag_match.start(), "dynamic", "no JSON.stringify target found near tag"))
    return blocks


def validate_doc(doc, raw: str) -> List[str]:
    errors: List[str] = []
    if "[FILL:" in raw:
        errors.append("contains [FILL: placeholder")
    if "<<<<<<<" in raw or ">>>>>>>" in raw:
        errors.append("contains git conflict markers")
    if not isinstance(doc, (dict, list)):
        return errors + ["root must be an object or array"]
    nodes = doc if isinstance(doc, list) else (doc.get("@graph") if isinstance(doc, dict) and "@graph" in doc else [doc])
    root = nodes[0] if isinstance(doc, dict) else None
    context = json.dumps(doc.get("@context", "")) if isinstance(doc, dict) else ""
    if isinstance(doc, dict) and "schema.org" not in context:
        errors.append("@context does not mention schema.org")
    for index, node in enumerate(nodes):
        if not isinstance(node, dict):
            errors.append(f"node [{index}] is not an object")
            continue
        node_type = node.get("@type")
        if not node_type:
            errors.append(f"node [{index}] missing @type")
            continue
        types = node_type if isinstance(node_type, list) else [node_type]
        for known in types:
            for key in REQUIRED_KEYS.get(str(known), []):
                if key not in node:
                    errors.append(f"node [{index}] @{known} missing required key '{key}'")
    if root is not None and not isinstance(doc, dict):
        pass
    return errors


def collect_files(roots: List[Path]) -> List[Path]:
    files: List[Path] = []
    for root in roots:
        if root.is_file():
            files.append(root)
        elif root.is_dir():
            for suffix in SCAN_SUFFIXES:
                files.extend(p for p in root.rglob(f"*{suffix}") if p.is_file())
    return sorted(set(files))


def run(roots: List[Path]) -> Dict:
    files = collect_files(roots)
    results = {"ok": [], "dynamic": [], "errors": []}
    pages_with: set = set()
    pages_without: set = set()
    for path in files:
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        rel = str(path).replace("\\", "/")
        if path.suffix == ".json":
            if '"@context"' in text and "schema.org" in text:
                try:
                    doc = json.loads(text)
                except json.JSONDecodeError as exc:
                    results["errors"].append({"file": rel, "line": exc.lineno, "msg": f"invalid JSON: {exc.msg}"})
                    continue
                errs = validate_doc(doc, text)
                if errs:
                    for e in errs:
                        results["errors"].append({"file": rel, "line": 1, "msg": e})
                else:
                    results["ok"].append({"file": rel, "line": 1, "type": "json-file"})
            continue
        if LD_TAG not in text:
            if path.name == "page.tsx":
                pages_without.add(rel)
            continue
        if path.name == "page.tsx":
            pages_with.add(rel)
        for line_no, _offset, kind, payload in find_blocks(text):
            if kind == "dynamic":
                results["dynamic"].append({"file": rel, "line": line_no, "reason": payload})
                continue
            try:
                doc = json.loads(js_to_json(payload))
            except DynamicSchemaError as exc:
                results["dynamic"].append({"file": rel, "line": line_no, "reason": str(exc)})
                continue
            except json.JSONDecodeError as exc:
                results["dynamic"].append({"file": rel, "line": line_no,
                                           "reason": f"unresolved JS expression ({exc.msg})"})
                continue
            errs = validate_doc(doc, payload)
            if errs:
                for e in errs:
                    results["errors"].append({"file": rel, "line": line_no, "msg": e})
            else:
                node = doc.get("@type", "?") if isinstance(doc, dict) else "?"
                results["ok"].append({"file": rel, "line": line_no, "type": str(node)})
    total_pages = len(pages_with | pages_without)
    return {
        "files_scanned": len(files),
        "ok": results["ok"],
        "dynamic": results["dynamic"],
        "errors": results["errors"],
        "pages_total": total_pages,
        "pages_with_schema": sorted(pages_with),
        "pages_without_schema": sorted(pages_without),
    }


def render_markdown(report: Dict) -> str:
    out: List[str] = []
    out.append("# Schema Validation Report")
    out.append("")
    out.append(f"Generated by `scripts/geo/schema_validator.py` on {date.today().isoformat()}")
    out.append("")
    out.append("## Summary")
    out.append("")
    out.append(f"- Files scanned: **{report['files_scanned']}**")
    out.append(f"- JSON-LD blocks validated OK: **{len(report['ok'])}**")
    out.append(f"- Dynamic / manual review needed: **{len(report['dynamic'])}**")
    out.append(f"- Validation errors: **{len(report['errors'])}**")
    out.append(f"- `page.tsx` routes: **{report['pages_total']}** "
               f"({len(report['pages_with_schema'])} with JSON-LD, "
               f"{len(report['pages_without_schema'])} without)")
    if report["errors"]:
        out.append("")
        out.append("## Errors")
        out.append("")
        for err in report["errors"]:
            out.append(f"- `{err['file']}:{err['line']}` - {err['msg']}")
    if report["dynamic"]:
        out.append("")
        out.append("## Dynamic blocks (manual review - parser refused to guess)")
        out.append("")
        for item in report["dynamic"][:60]:
            out.append(f"- `{item['file']}:{item['line']}` - {item['reason']}")
        if len(report["dynamic"]) > 60:
            out.append(f"- ... and {len(report['dynamic']) - 60} more")
    if report["pages_without_schema"]:
        out.append("")
        out.append("## page.tsx routes without JSON-LD (schema coverage gaps)")
        out.append("")
        for page in report["pages_without_schema"][:60]:
            out.append(f"- `{page}`")
        if len(report["pages_without_schema"]) > 60:
            out.append(f"- ... and {len(report['pages_without_schema']) - 60} more")
    out.append("")
    return "\n".join(out)


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Validate JSON-LD in this repository.")
    parser.add_argument("--root", action="append", default=None,
                        help="Directory or file to scan (repeatable). Default: app, public")
    parser.add_argument("--report", help="Write the Markdown report to this path")
    parser.add_argument("--json", action="store_true")
    parser.add_argument("--no-fail", action="store_true", help="Always exit 0")
    args = parser.parse_args(argv)

    roots = [Path(r) for r in (args.root or ["app", "public"])]
    missing = [str(r) for r in roots if not r.exists()]
    if missing:
        print(f"error: root not found: {', '.join(missing)}", file=sys.stderr)
        return 2

    report = run(roots)
    payload = json.dumps(report, indent=2, ensure_ascii=False)
    if args.json:
        print(payload)
    else:
        print(render_markdown(report))
    if args.report:
        Path(args.report).write_text(payload if args.json else render_markdown(report),
                                     encoding="utf-8")
    if report["errors"] and not args.no_fail:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
