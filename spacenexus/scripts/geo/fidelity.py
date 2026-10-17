"""Deterministic rewrite-fidelity rules for GEO content optimization.

Adapted from eGEOagents (MIT) - egeo/fidelity.py. A rewrite may change wording,
order and emphasis. It may NOT change facts:

- heading_changed        : first line is a heading in the original and differs
- link_removed:<url>     : URL in original missing from rewrite
- link_added:<url>       : URL in rewrite not in original
- number_removed:<n>     : normalized number in original missing from rewrite
- number_added:<n>       : normalized number in rewrite not in original
- table_rows_decreased   : fewer lines starting with |
- code_block_changed     : fenced code blocks differ
- too_short / too_long   : word ratio outside 0.8-1.6 (original >= 20 words)

Usage:
    python scripts/geo/fidelity.py --original before.md --rewritten after.md
    python scripts/geo/fidelity.py --original before.md --rewritten after.md --json

Exit codes: 0 pass, 1 violations found, 2 usage error.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import FrozenSet, List, Optional, Tuple

MIN_RATIO = 0.8
MAX_RATIO = 1.6
MIN_WORDS_FOR_RATIO = 20

_MD_LINK = re.compile(r"!?\[[^\]]*\]\(([^\s)]+)")
_AUTOLINK = re.compile(r"<(https?://[^>\s]+)>")
_BARE = re.compile(r"https?://[^\s)>\]\"']+")
_NUM = re.compile(r"(?<![\w.])[$€£]?\d[\d,]*(?:\.\d+)?%?")
_WORD = re.compile(r"\w+")


@dataclass(frozen=True)
class Invariants:
    heading_line: str
    links: FrozenSet[str]
    numbers: FrozenSet[str]
    table_rows: int
    code_blocks: Tuple[str, ...]
    word_count: int


@dataclass(frozen=True)
class FidelityResult:
    passed: bool
    violations: Tuple[str, ...]


def _code_blocks(text: str) -> Tuple[str, ...]:
    blocks: List[str] = []
    cur: List[str] = []
    fence: Optional[str] = None
    for line in text.split("\n"):
        st = line.strip()
        m = re.match(r"^(`{3,}|~{3,})", st)
        if fence is None:
            if m:
                fence = m.group(1)
                cur = [line]
        else:
            cur.append(line)
            if m and m.group(1)[0] == fence[0] and len(m.group(1)) >= len(fence) and st == m.group(1):
                blocks.append("\n".join(cur))
                cur, fence = [], None
    return tuple(blocks)


def _links(text: str) -> FrozenSet[str]:
    found = set(_MD_LINK.findall(text)) | set(_AUTOLINK.findall(text))
    for u in _BARE.findall(text):
        found.add(u.rstrip(".,;:"))
    return frozenset(found)


def extract_invariants(text: str) -> Invariants:
    first = text.split("\n", 1)[0]
    heading = first.strip() if re.match(r"^#{1,6}[ \t]", first) else ""
    blocks = _code_blocks(text)
    prose = text
    for b in blocks:
        prose = prose.replace(b, " ")
    links = _links(prose)
    for u in sorted(links, key=len, reverse=True):
        prose = prose.replace(u, " ")
    numbers = frozenset(re.sub(r"[$€£,]", "", n) for n in _NUM.findall(prose))
    rows = sum(1 for ln in text.split("\n") if ln.strip().startswith("|"))
    return Invariants(heading, links, numbers, rows, blocks, len(_WORD.findall(text)))


def check_fidelity(original: str, rewritten: str, *,
                   min_ratio: float = MIN_RATIO,
                   max_ratio: float = MAX_RATIO) -> FidelityResult:
    a = extract_invariants(original)
    b = extract_invariants(rewritten)
    v: List[str] = []
    if a.heading_line and a.heading_line != b.heading_line:
        v.append("heading_changed")
    v += [f"link_removed:{u}" for u in sorted(a.links - b.links)]
    v += [f"link_added:{u}" for u in sorted(b.links - a.links)]
    v += [f"number_removed:{n}" for n in sorted(a.numbers - b.numbers)]
    v += [f"number_added:{n}" for n in sorted(b.numbers - a.numbers)]
    if b.table_rows < a.table_rows:
        v.append("table_rows_decreased")
    if a.code_blocks != b.code_blocks:
        v.append("code_block_changed")
    if a.word_count >= MIN_WORDS_FOR_RATIO:
        r = b.word_count / a.word_count
        if r < min_ratio:
            v.append("too_short")
        elif r > max_ratio:
            v.append("too_long")
    return FidelityResult(passed=not v, violations=tuple(v))


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Check that a rewrite preserved facts.")
    parser.add_argument("--original", required=True)
    parser.add_argument("--rewritten", required=True)
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args(argv)

    try:
        original = Path(args.original).read_text(encoding="utf-8")
        rewritten = Path(args.rewritten).read_text(encoding="utf-8")
    except OSError as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2

    result = check_fidelity(original, rewritten)
    if args.json:
        print(json.dumps({"passed": result.passed, "violations": list(result.violations)}, indent=2))
    else:
        if result.passed:
            print(f"PASS  {args.original} -> {args.rewritten}")
        else:
            print(f"FAIL  {args.original} -> {args.rewritten}")
            for violation in result.violations:
                print(f"  - {violation}")
    return 0 if result.passed else 1


if __name__ == "__main__":
    raise SystemExit(main())
