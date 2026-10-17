"""Before/after GEO evaluation for a rewritten page.

Combines the deterministic 10-feature scorer (content_scorer.py) with the
fidelity gate (fidelity.py), in the style of eGEOagents (MIT) evaluate/fix-gaps
reporting: score both versions, diff every criterion, and reject rewrites that
change facts.

Usage:
    python scripts/geo/before_after_eval.py --before old.md --after new.md
    python scripts/geo/before_after_eval.py --before old.md --after new.md --report out.md
    python scripts/geo/before_after_eval.py --before old.md --after new.md --json

Exit codes: 0 ok and improved; 1 total score regressed or --min-delta not met;
2 fidelity gate failed (rewrite must not be applied); 3 usage error.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import List, Optional

from content_scorer import GEO_FEATURES, FEATURE_LABELS, analyze
from fidelity import check_fidelity


def evaluate(before_text: str, after_text: str, *, title: Optional[str] = None) -> dict:
    before = analyze(before_text, title=title)
    after = analyze(after_text, title=title)
    fidelity = check_fidelity(before_text, after_text)
    deltas = {
        feat: after["scores"][feat] - before["scores"][feat]
        for feat in GEO_FEATURES
    }
    total_delta = after["total_score"] - before["total_score"]
    if not fidelity.passed:
        verdict = "REJECTED - fidelity gate failed (facts changed)"
    elif total_delta > 0:
        verdict = "IMPROVED"
    elif total_delta == 0:
        verdict = "UNCHANGED"
    else:
        verdict = "REGRESSED"
    return {
        "title": after["title"],
        "before": before,
        "after": after,
        "total_delta": total_delta,
        "deltas": deltas,
        "fidelity": {
            "passed": fidelity.passed,
            "violations": list(fidelity.violations),
        },
        "verdict": verdict,
    }


def render_markdown(result: dict, *, before_label: str, after_label: str) -> str:
    before = result["before"]
    after = result["after"]
    out: List[str] = []
    out.append(f"# Before/After GEO Evaluation: {result['title']}")
    out.append("")
    out.append(f"- **Before:** {before_label} - {before['total_score']}/100")
    out.append(f"- **After:** {after_label} - {after['total_score']}/100 "
               f"(**{result['total_delta']:+d}**)")
    fid = result["fidelity"]
    status = "PASS" if fid["passed"] else "FAIL"
    out.append(f"- **Fidelity gate:** {status}")
    out.append(f"- **Verdict:** {result['verdict']}")
    out.append("")
    out.append("| Criterion | Before | After | Delta |")
    out.append("|-----------|--------|-------|-------|")
    for feat in GEO_FEATURES:
        delta = result["deltas"][feat]
        marker = " <--" if delta else ""
        out.append(f"| {FEATURE_LABELS[feat]} | {before['scores'][feat]} | "
                   f"{after['scores'][feat]} | {delta:+d}{marker} |")
    out.append("")
    if not fid["passed"]:
        out.append("**Fidelity violations (must be fixed before applying):**")
        for violation in fid["violations"]:
            out.append(f"- `{violation}`")
        out.append("")
    gained = [f for f in GEO_FEATURES if result["deltas"][f] > 0]
    lost = [f for f in GEO_FEATURES if result["deltas"][f] < 0]
    if gained:
        out.append("**Improved:** " + ", ".join(FEATURE_LABELS[f] for f in gained))
    if lost:
        out.append("**Regressed:** " + ", ".join(FEATURE_LABELS[f] for f in lost))
    out.append("")
    out.append("Scores are a deterministic proxy of GEO-signal presence, not a "
               "measurement of real AI-engine rankings.")
    out.append("")
    return "\n".join(out)


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Score and compare two versions of a page.")
    parser.add_argument("--before", required=True)
    parser.add_argument("--after", required=True)
    parser.add_argument("--title")
    parser.add_argument("--report", help="Write the Markdown report to this path")
    parser.add_argument("--json", action="store_true")
    parser.add_argument("--min-delta", type=int, default=0,
                        help="Exit 1 if total score delta is below this value")
    args = parser.parse_args(argv)

    try:
        before_text = Path(args.before).read_text(encoding="utf-8")
        after_text = Path(args.after).read_text(encoding="utf-8")
    except OSError as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 3

    result = evaluate(before_text, after_text, title=args.title)

    if args.json:
        payload = json.dumps(result, indent=2, ensure_ascii=False)
        print(payload)
        if args.report:
            Path(args.report).write_text(payload + "\n", encoding="utf-8")
    else:
        report = render_markdown(result, before_label=args.before, after_label=args.after)
        print(report)
        if args.report:
            Path(args.report).write_text(report, encoding="utf-8")

    if not result["fidelity"]["passed"]:
        return 2
    if result["total_delta"] < args.min_delta:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
