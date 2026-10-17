"""Citation-gap detection and project.yaml support for Space Kindora GEO work.

Parses ``scripts/geo/project.yaml`` with a small stdlib-only YAML subset (no
PyYAML dependency), validates it against the same contract as eGEOagents'
``egeo.workspace.validate_project_config`` (MIT), and converts raw citation
observations into the gaps file ``egeo fix-gaps`` understands.

Input citations file (--citations):
    JSON:  {"entries": [{"query": "...", "domain_cited": "brand.com|", ...}]}
           or a flat JSON array of the same records, or the CSV/JSON tables in
           AI-VISIBILITY-TRACKING.md.
    CSV:   query,cited[,sources]

A gap is any query that is NOT cited (empty "domain_cited" / "cited").

Usage:
    python scripts/geo/citation_gaps.py --validate-only
    python scripts/geo/citation_gaps.py --citations citations.json
    python scripts/geo/citation_gaps.py --citations citations.json --out-dir fix-gaps-input

Exit codes: 0 ok; 1 validation errors / gaps found (report-only); 2 usage error.
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple, Union

PROJECT_SCHEMA_VERSION = 1
_QUERY_CLASSES = {"branded", "generic", "commercial", "informational", "navigational", "other"}
_GUARDRAILS = ("no_duplicate_query_owners", "no_auto_publish_visible_copy",
               "no_fabricated_proof", "require_fresh_crawl_before_verdict")
_PROJECT_ID_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
_HTTP_RE = re.compile(r"^https?://")
_SECRET_RE = re.compile(r"(?i)(password|passwd|token|secret|api[_-]?key|private[_-]?key|access[_-]?key)")


@dataclass
class _Line:
    indent: int
    content: str
    number: int


def _split_key(content: str) -> Tuple[str, str]:
    if ": " in content:
        key, _, value = content.partition(": ")
        return key.strip(), value.strip()
    if content.endswith(":"):
        return content[:-1].strip(), ""
    return "", ""


def scalar(s: str) -> Any:
    s = s.strip()
    if not s:
        return None
    if len(s) >= 2 and s[0] == s[-1] and s[0] in "\"'":
        body = s[1:-1]
        if s[0] == "'":
            return body.replace("''", "'")
        return body.replace('\\"', '"').replace("\\\\", "\\")
    if s.lower() == "true":
        return True
    if s.lower() == "false":
        return False
    if s.startswith("[") and s.endswith("]"):
        inner = s[1:-1].strip()
        if not inner:
            return []
        return [scalar(part) for part in re.split(r",\s*", inner) if part.strip()]
    if re.fullmatch(r"-?\d+", s):
        return int(s)
    return s


def parse_yaml(text: str) -> Any:
    lines: List[_Line] = []
    for no, raw in enumerate(text.splitlines(), start=1):
        stripped = raw.strip()
        if not stripped or stripped.startswith("#"):
            continue
        indent = len(raw) - len(raw.lstrip(" "))
        content = stripped
        if content.startswith("-   "):
            content = "- " + content[4:].lstrip()
        lines.append(_Line(indent, content, no))
    if not lines:
        return {}
    root_indent = min(ln.indent for ln in lines)

    def _block(i: int, indent: int) -> Tuple[Any, int]:
        if i >= len(lines) or lines[i].indent < indent:
            return None, i
        if lines[i].indent > indent:
            return None, i
        content = lines[i].content
        if content.startswith("-"):
            return _seq(i, indent)
        key, value = _split_key(content)
        if key:
            return _mapping(i, indent)
        return scalar(content), i + 1

    def _seq(i: int, indent: int) -> Tuple[List[Any], int]:
        items: List[Any] = []
        key_indent = indent + 2
        while i < len(lines) and lines[i].indent == indent and lines[i].content.startswith("-"):
            rest = lines[i].content[1:].strip()
            if not rest:
                item, i = _block(i + 1, key_indent)
                items.append(item)
                continue
            if ": " in rest or rest.endswith(":"):
                key, value = _split_key(rest)
                member: Dict[str, Any] = {}
                if value:
                    member[key] = scalar(value)
                    i += 1
                else:
                    member[key], i = _block(i + 1, key_indent)
                while i < len(lines) and lines[i].indent == key_indent:
                    k, v = _split_key(lines[i].content)
                    if not k:
                        break
                    if v:
                        member[k] = scalar(v)
                        i += 1
                    else:
                        member[k], i = _block(i + 1, key_indent + 2)
                items.append(member)
                continue
            items.append(scalar(rest))
            i += 1
        return items, i

    def _mapping(i: int, indent: int) -> Tuple[Dict[str, Any], int]:
        data: Dict[str, Any] = {}
        value_indent = indent + 2
        while i < len(lines) and lines[i].indent == indent and not lines[i].content.startswith("-"):
            key, value = _split_key(lines[i].content)
            if not key:
                i += 1
                continue
            if value:
                data[key] = scalar(value)
                i += 1
            else:
                data[key], i = _block(i + 1, value_indent)
        return data, i

    value, _ = _block(0, root_indent)
    return value


def load_project(path: Path) -> Dict[str, Any]:
    return parse_yaml(path.read_text(encoding="utf-8"))


def validate_project_config(data: Any) -> List[str]:
    errors: List[str] = []
    if not isinstance(data, dict):
        return ["root must be a mapping"]
    if data.get("schema_version") != PROJECT_SCHEMA_VERSION:
        errors.append(f"schema_version must be {PROJECT_SCHEMA_VERSION}")

    def _walk(node: Any, path: str = "") -> List[str]:
        found: List[str] = []
        if isinstance(node, dict):
            for k, v in node.items():
                p = f"{path}.{k}" if path else str(k)
                if _SECRET_RE.search(str(k)):
                    found.append(p)
                found.extend(_walk(v, p))
        elif isinstance(node, list):
            for item in node:
                found.extend(_walk(item, path))
        return found

    for p in _walk(data):
        errors.append("credential-like keys are forbidden: " + p)

    project = data.get("project")
    if not isinstance(project, dict):
        errors.append("project must be a mapping")
        project = {}
    for key in ("id", "name", "repository", "canonical_domain", "canonical_url", "language"):
        if not str(project.get(key) or "").strip():
            errors.append(f"project.{key} is required")
    project_id = str(project.get("id") or "")
    if project_id and not _PROJECT_ID_RE.fullmatch(project_id):
        errors.append("project.id must use lowercase letters, digits, and hyphens")
    for key in ("repository", "canonical_url"):
        value = project.get(key)
        if value and not _HTTP_RE.match(str(value)):
            errors.append(f"project.{key} must be an http(s) URL")
    canonical_url = str(project.get("canonical_url") or "")
    canonical_domain = str(project.get("canonical_domain") or "").lower()
    if canonical_url and canonical_domain:
        host = str(canonical_url.split("://", 1)[-1].split("/", 1)[0].split(":", 1)[0]).lower()
        if host != canonical_domain:
            errors.append("project.canonical_domain does not match project.canonical_url")

    pages = data.get("pages", [])
    if not isinstance(pages, list):
        errors.append("pages must be a list")
        pages = []
    page_ids: set = set()
    page_urls: Dict[str, str] = {}
    for index, page in enumerate(pages):
        prefix = f"pages[{index}]"
        if not isinstance(page, dict):
            errors.append(f"{prefix} must be a mapping")
            continue
        page_id = str(page.get("id") or "")
        if not page_id:
            errors.append(f"{prefix}.id is required")
        elif page_id in page_ids:
            errors.append(f"duplicate page id: {page_id}")
        else:
            page_ids.add(page_id)
        if "source" in page and (not isinstance(page["source"], str) or not page["source"].strip()):
            errors.append(f"{prefix}.source must be a non-empty relative path")
        url = page.get("url")
        if not _HTTP_RE.match(str(url or "")):
            errors.append(f"{prefix}.url must be an http(s) URL")
        elif bool(page.get("active", True)):
            normalized = str(url).split("#", 1)[0].rstrip("/") or "/"
            if normalized in page_urls:
                errors.append(f"duplicate active page URL: {page_urls[normalized]} and {page_id}")
            else:
                page_urls[normalized] = page_id

    queries = data.get("queries", [])
    if not isinstance(queries, list):
        errors.append("queries must be a list")
        queries = []
    query_ids: set = set()
    for index, query in enumerate(queries):
        prefix = f"queries[{index}]"
        if not isinstance(query, dict):
            errors.append(f"{prefix} must be a mapping")
            continue
        query_id = str(query.get("id") or "")
        if not query_id:
            errors.append(f"{prefix}.id is required")
        elif query_id in query_ids:
            errors.append(f"duplicate query id: {query_id}")
        else:
            query_ids.add(query_id)
        active = bool(query.get("active", True))
        text = str(query.get("text") or "").strip()
        if active and not text:
            errors.append(f"{prefix}.text is required for active queries")
        query_class = str(query.get("class") or "").strip().lower()
        if active and query_class not in _QUERY_CLASSES:
            errors.append(f"{prefix}.class must be one of {sorted(_QUERY_CLASSES)}")
        target_pages = query.get("target_pages", [])
        if not isinstance(target_pages, list) or any(not isinstance(item, str) for item in target_pages):
            errors.append(f"{prefix}.target_pages must be a list of page IDs")
            target_pages = []
        for page_id in target_pages:
            if page_id not in page_ids:
                errors.append(f"{prefix}.target_pages references unknown page: {page_id}")

    measurement = data.get("measurement")
    if not isinstance(measurement, dict):
        errors.append("measurement must be a mapping")
    else:
        engines = measurement.get("engines")
        if not isinstance(engines, list) or not engines or any(not isinstance(e, str) or not e.strip() for e in engines):
            errors.append("measurement.engines must be a non-empty list of names")
        if not str(measurement.get("cadence") or "").strip():
            errors.append("measurement.cadence is required")

    guardrails = data.get("guardrails")
    if not isinstance(guardrails, dict):
        errors.append("guardrails must be a mapping")
    else:
        for key in _GUARDRAILS:
            if guardrails.get(key) is not True:
                errors.append(f"guardrails.{key} must be true")
    return errors


def normalize_query(text: str) -> str:
    text = re.sub(r"\s+", " ", str(text or "").strip().lower())
    return re.sub(r"[\s?!.,;:¿¡]+$", "", text)


def load_citations(path: Path) -> List[Dict[str, Any]]:
    text = path.read_text(encoding="utf-8-sig")
    if path.suffix.lower() == ".csv":
        rows = list(csv.DictReader(text.splitlines()))
        return [
            {"query": str(r.get("query") or "").strip(),
             "domain_cited": str(r.get("cited") or "").strip(),
             "cited_sources": r.get("sources") if r.get("sources") else []}
            for r in rows
        ]
    data = json.loads(text)
    if isinstance(data, dict) and isinstance(data.get("entries"), list):
        return [
            {"query": str(e.get("query") or "").strip(),
             "domain_cited": str(e.get("domain_cited") or "").strip(),
             "cited_sources": _sources(e.get("cited_sources"))}
            for e in data["entries"]
        ]
    if isinstance(data, list):
        return [
            {"query": str(e.get("query") or "").strip(),
             "domain_cited": str(e.get("domain_cited") or e.get("cited") or "").strip(),
             "cited_sources": _sources(e.get("cited_sources") or e.get("sources"))}
            for e in data if isinstance(e, dict)
        ]
    raise ValueError("citations file must be CSV or JSON with entries[]")


def _sources(value: Any) -> List[str]:
    if isinstance(value, list):
        return [str(v) for v in value if str(v).strip()]
    return [s for s in re.split(r"[\s;|]+", str(value or "")) if s]


def build_gaps_file(project: Dict[str, Any], entries: List[Dict[str, Any]]) -> Dict[str, Any]:
    return {
        "domain": str(project.get("project", {}).get("canonical_domain") or ""),
        "brand": str(project.get("project", {}).get("name") or ""),
        "entries": entries,
    }


def _page_for_query(project: Dict[str, Any], query: str) -> Tuple[str, Optional[str]]:
    pages_by_id = {str(p.get("id")): str(p.get("url") or "") for p in project.get("pages", [])}
    target = normalize_query(query)
    owners: List[str] = []
    for q in project.get("queries", []):
        if normalize_query(str(q.get("text") or "")) == target:
            owners = [str(p) for p in q.get("target_pages", [])]
    held: List[str] = []
    for page_id in owners:
        url = pages_by_id.get(page_id)
        if url:
            held.append(f"{page_id} ({url})")
    return target, (", ".join(held) if held else None)


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Project.yaml validation + citation-gap export.")
    parser.add_argument("--project", default="scripts/geo/project.yaml")
    parser.add_argument("--validate-only", action="store_true", help="Validate project.yaml and exit")
    parser.add_argument("--citations", help="CSV/JSON file of citation observations")
    parser.add_argument("--out-dir", help="Write fix-gaps compatible JSON file here (name only)")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args(argv)

    project_path = Path(args.project)
    if not project_path.is_file():
        print(f"error: project file not found: {project_path}", file=sys.stderr)
        return 2
    data = load_project(project_path)
    errors = validate_project_config(data)

    if errors:
        for err in errors:
            print(f"project.yaml: {err}")
        if args.json:
            print(json.dumps({"valid": False, "errors": errors}, indent=2))
        return 1

    if args.validate_only:
        print(f"project.yaml OK ({len(data.get('pages', []))} pages, {len(data.get('queries', []))} queries)")
        return 0

    if not args.citations:
        parser.error("--citations is required unless --validate-only is given")

    try:
        entries = load_citations(Path(args.citations))
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2

    gap_entries = [e for e in entries if e.get("query") and not e.get("domain_cited")]
    cited = len(entries) - len(gap_entries)
    gaps_file = build_gaps_file(data, entries)

    if args.out_dir:
        out_dir = Path(args.out_dir)
        out_dir.mkdir(parents=True, exist_ok=True)
        project_id = str(data.get("project", {}).get("id") or "project")
        out_path = out_dir / f"{project_id}-fix-gaps-input.json"
        out_path.write_text(json.dumps(gaps_file, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        if not args.json:
            print(f"wrote {out_path}")

    if args.json:
        print(json.dumps({
            "project_valid": True,
            "entries_total": len(entries),
            "cited": cited,
            "gaps": len(gap_entries),
            "gaps_file": gaps_file,
            "mapping": [_page_for_query(data, e["query"]) for e in gap_entries],
        }, indent=2, ensure_ascii=False))
        return 0 if not gap_entries else 1

    print(f"citations: {len(entries)} total, {cited} cited, {len(gap_entries)} gaps")
    for entry in gap_entries:
        query, owner = _page_for_query(data, entry["query"])
        if owner:
            print(f"  - gap: \"{query}\" -> target: {owner}")
        else:
            print(f"  - gap: \"{query}\" -> NO target page (propose_page_owner)")
    return 0 if not gap_entries else 1


if __name__ == "__main__":
    raise SystemExit(main())