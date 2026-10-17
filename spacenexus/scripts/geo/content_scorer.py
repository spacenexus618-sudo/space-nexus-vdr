"""Deterministic GEO content scorer (10-feature, 0-100).

Adapted from eGEOagents (MIT) - egeo/agents.py Analyzer and
.claude/skills/content-scoring/SKILL.md. Offline: no API key, no LLM.

Usage:
    python scripts/geo/content_scorer.py FILE [FILE ...]
    python scripts/geo/content_scorer.py FILE --json
    python scripts/geo/content_scorer.py FILE --title "Custom title" --min-score 60

Exit codes: 0 ok, 1 when --min-score is given and a file scores below it.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Sequence

GEO_FEATURES: List[str] = [
    "ranking_emphasis",
    "user_intent",
    "competitive_diff",
    "social_proof",
    "narrative",
    "authority",
    "usps",
    "urgency",
    "scannable",
    "factual",
]

FEATURE_LABELS: Dict[str, str] = {
    "ranking_emphasis": "Ranking Emphasis",
    "user_intent": "User Intent",
    "competitive_diff": "Competitive Diff",
    "social_proof": "Social Proof",
    "narrative": "Narrative",
    "authority": "Authority",
    "usps": "USPs",
    "urgency": "Urgency",
    "scannable": "Scannable",
    "factual": "Factual",
}

RECOMMENDATIONS: Dict[str, str] = {
    "ranking_emphasis": "Frame the content as a top/leading choice (e.g. 'best for ...').",
    "user_intent": "Open by directly answering the user's likely question or use case.",
    "competitive_diff": "Call out concrete advantages over typical alternatives (no competitor names needed).",
    "social_proof": "Add trust signals: customer counts, ratings, or testimonials (never fabricated).",
    "narrative": "Tighten the flow into a persuasive, benefit-led story.",
    "authority": "Add expert, confident phrasing and verifiable credentials or specifics.",
    "usps": "Make the unique selling points explicit and scannable as bullets.",
    "urgency": "Add a genuine urgency or scarcity signal where appropriate.",
    "scannable": "Add headings, bullet lists, and short paragraphs for easy parsing.",
    "factual": "Keep concrete, verifiable facts (numbers, units) and avoid vague hype.",
}

RANKING_WORDS = ("best", "top", "#1", "number one", "leading", "premier", "ultimate", "trusted", "award")
INTENT_WORDS = ("best for", "ideal for", "designed for", "perfect for", "how to", "what is", "use case", "for businesses", "for teams")
DIFF_WORDS = ("unlike", "compared to", "vs ", "versus", "alternative", "unique", "differentiat", "better than", "outperform")
PROOF_WORDS = ("customer", "users", "rated", "rating", "review", "testimonial", "trusted by", "case study", "%", "stars")
AUTHORITY_WORDS = ("expert", "certified", "proven", "industry", "research", "years", "award-winning", "official", "data shows")
URGENCY_WORDS = ("now", "today", "limited", "offer", "hurry", "deadline", "while supplies", "act fast", "don't miss", "ends ")
NARRATIVE_WORDS = ("because", "so that", "imagine", "whether", "that's why", "which means", "helps you", "you can")

FEATURE_WORDS: Dict[str, Sequence[str]] = {
    "ranking_emphasis": RANKING_WORDS,
    "user_intent": INTENT_WORDS,
    "competitive_diff": DIFF_WORDS,
    "social_proof": PROOF_WORDS,
    "narrative": NARRATIVE_WORDS,
    "authority": AUTHORITY_WORDS,
    "urgency": URGENCY_WORDS,
}


def strip_frontmatter(text: str) -> str:
    m = re.match(r"^---\s*\n.*?\n---\s*(?:\n|$)", text, re.DOTALL)
    if m:
        return text[m.end():]
    m = re.match(r"^\+\+\+\s*\n.*?\n\+\+\+\s*(?:\n|$)", text, re.DOTALL)
    if m:
        return text[m.end():]
    return text


def clamp(value: int, low: int = 0, high: int = 10) -> int:
    return max(low, min(high, value))


def keyword_score(lower: str, keywords: Sequence[str], cap: int = 3) -> int:
    hits = sum(lower.count(k) for k in keywords)
    return clamp(min(hits, cap) * (10 // cap) + (2 if hits else 0))


def extract_evidence(body: str, feature: str, limit: int = 2) -> List[str]:
    words = FEATURE_WORDS.get(feature)
    if not words:
        return []
    evidence: List[str] = []
    for line in body.splitlines():
        stripped = line.strip()
        if not stripped or stripped in evidence:
            continue
        low = stripped.lower()
        if any(w in low for w in words):
            evidence.append(stripped[:110])
            if len(evidence) >= limit:
                break
    return evidence


def analyze(content: str, *, title: Optional[str] = None) -> Dict:
    body = strip_frontmatter(content)
    lower = body.lower()
    lines = body.splitlines()
    non_empty = [ln for ln in lines if ln.strip()]
    word_count = len(re.findall(r"[A-Za-z0-9#%']+", lower))

    if not title:
        heading = next((ln for ln in lines if ln.strip().startswith("#")), "")
        title = heading.lstrip("#").strip() or (non_empty[0].strip() if non_empty else "Untitled")

    bullets = sum(1 for ln in lines if ln.strip().startswith(("-", "*", "•")) or re.match(r"^\s*\d+\.", ln))
    headings = sum(1 for ln in lines if ln.strip().startswith("#"))
    numbers = len(re.findall(r"\b\d[\d,\.]*\b", body))

    scores: Dict[str, int] = {
        "ranking_emphasis": keyword_score(lower, RANKING_WORDS),
        "user_intent": keyword_score(lower, INTENT_WORDS),
        "competitive_diff": keyword_score(lower, DIFF_WORDS),
        "social_proof": clamp(keyword_score(lower, PROOF_WORDS) + (2 if numbers >= 2 else 0)),
        "narrative": clamp(keyword_score(lower, NARRATIVE_WORDS) + (2 if word_count > 80 else 0)),
        "authority": keyword_score(lower, AUTHORITY_WORDS),
        "usps": clamp((6 if bullets >= 3 else bullets * 2) + (2 if "feature" in lower or "benefit" in lower else 0)),
        "urgency": keyword_score(lower, URGENCY_WORDS),
        "scannable": clamp((4 if headings >= 1 else 0) + (4 if bullets >= 2 else bullets * 2) + (2 if len(non_empty) >= 4 else 0)),
        "factual": clamp(3 + min(numbers, 5) + (2 if numbers >= 3 else 0)),
    }

    total = sum(scores.values())
    gaps = [
        {
            "feature": feat,
            "current": f"Low signal (score {scores[feat]}/10)",
            "recommendation": RECOMMENDATIONS[feat],
            "evidence": extract_evidence(body, feat),
        }
        for feat in GEO_FEATURES
        if scores[feat] < 5
    ]
    strengths = [feat for feat in GEO_FEATURES if scores[feat] >= 7]
    priority = sorted(GEO_FEATURES, key=lambda f: scores[f])[:3]

    return {
        "title": title,
        "content_length": len(body),
        "word_count": word_count,
        "scores": scores,
        "total_score": total,
        "gaps": gaps,
        "strengths": strengths,
        "priority_actions": [RECOMMENDATIONS[f] for f in priority],
        "evidence": {feat: extract_evidence(body, feat, limit=1) for feat in GEO_FEATURES},
    }


def render_markdown(path: str, result: Dict) -> str:
    out: List[str] = []
    out.append(f"## {path}")
    out.append("")
    out.append(f"**{result['title']}** - GEO score **{result['total_score']}/100** "
               f"({result['content_length']} chars, {result['word_count']} words)")
    out.append("")
    out.append("| # | Criterion | Score | Evidence (first hit) |")
    out.append("|---|-----------|-------|----------------------|")
    for i, feat in enumerate(GEO_FEATURES, 1):
        score = result["scores"][feat]
        ev = result["evidence"].get(feat) or []
        ev_text = (ev[0] if ev else "- none -").replace("|", "\\|")
        marker = " **(gap)**" if score < 5 else (" ~~strong~~" if score >= 7 else "")
        out.append(f"| {i} | {FEATURE_LABELS[feat]} | {score}/10{marker} | {ev_text} |")
    out.append("")
    if result["gaps"]:
        out.append("**Gaps & fixes:**")
        for gap in result["gaps"]:
            out.append(f"- **{FEATURE_LABELS[gap['feature']]}** ({gap['current']}): {gap['recommendation']}")
    else:
        out.append("**Gaps:** none (all criteria >= 5)")
    out.append("")
    out.append("**Top priorities:**")
    for i, action in enumerate(result["priority_actions"], 1):
        out.append(f"{i}. {action}")
    out.append("")
    return "\n".join(out)


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Score content against the 10 GEO criteria (deterministic).")
    parser.add_argument("files", nargs="+", help="Markdown/text files to score")
    parser.add_argument("--json", action="store_true", help="Emit JSON instead of Markdown")
    parser.add_argument("--title", help="Override the derived title (single file only)")
    parser.add_argument("--min-score", type=int, default=None, help="Exit 1 if any file scores below this")
    args = parser.parse_args(argv)

    if args.title and len(args.files) > 1:
        parser.error("--title can only be used with a single file")

    results = []
    failed = False
    for file in args.files:
        path = Path(file)
        if not path.is_file():
            print(f"error: not a file: {file}", file=sys.stderr)
            return 2
        text = path.read_text(encoding="utf-8", errors="replace")
        result = analyze(text, title=args.title)
        result["file"] = str(path).replace("\\", "/")
        results.append(result)
        if args.min_score is not None and result["total_score"] < args.min_score:
            failed = True

    if args.json:
        print(json.dumps(results if len(results) > 1 else results[0], indent=2, ensure_ascii=False))
    else:
        for result in results:
            print(render_markdown(result["file"], result))
        if args.min_score is not None:
            print(f"Threshold: {args.min_score} -> {'FAIL' if failed else 'PASS'}")

    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
