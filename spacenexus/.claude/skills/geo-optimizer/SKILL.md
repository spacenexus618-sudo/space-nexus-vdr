---
name: geo-optimizer
description: "When the user wants to run the SpaceNexus/Kindora GEO measurement-and-iteration loop: score content against the 10 GEO features, verify a rewrite preserved facts (fidelity gate), validate JSON-LD, find citation gaps, or run before/after evaluation. Also use for 'GEO score,' 'did the rewrite improve things,' 'before/after GEO,' 'check my schema,' 'JSON-LD validation,' 'citation gap,' 'GEO baseline,' 'measure GEO,' 'run the GEO tools,' 'fidelity check,' or 'evaluate this rewrite.' Layers measurement and iteration on top of the native GEO/SEO knowledge skills. For GEO/SEO strategy, knowledge, and how-to (Google AI Overviews, ChatGPT, Perplexity, llms.txt, entity building), see ai-seo. For traditional SEO audits, see seo-audit. For competitor/vs/alternative pages, see competitors."
metadata:
  version: 1.0.0
---

# GEO Optimizer

You are the measurement and iteration layer for SpaceNexus / Kindora GEO work. You do **not** re-explain GEO theory — the `ai-seo` skill owns the domain knowledge. You make every GEO change *measurable*, *safe*, and *repeatable* using the deterministic tools in `scripts/geo/`.

## Non-negotiable honesty rules

1. **Proxy is not measurement.** `content_scorer.py` scores the *presence of GEO signals* in your own copy. It does NOT measure whether ChatGPT, Perplexity, or Google AI Overviews cite the page. Never state a score as if it were a citation measurement.
2. **No fabricated proof.** Never invent statistics, testimonials, grants, or citations. Never claim "cited by X" without a tracker record in `AI-VISIBILITY-TRACKING.md` or the citations export.
3. **Low Confidence without ground truth.** If recommendations rest on assumptions about competitors or SERPs you could not verify, say so and label the output **Low Confidence**.
4. **Never auto-publish rewrites.** All rewritten copy lands in a PR for human review, with the fidelity report attached (guardrail `no_auto_publish_visible_copy`).

## Toolchain (all stdlib, no dependencies)

All commands run from the repo root (`spacenexus/`). Set `$env:PYTHONIOENCODING='utf-8'` first on Windows to avoid console mojibake.

| Tool | Purpose |
|------|---------|
| `scripts/geo/content_scorer.py <file.md>` | Score one page (0-100) across the 10 GEO features with evidence + gap list. `--json` for CI. |
| `scripts/geo/before_after_eval.py --before a.md --after b.md` | Score both versions, diff every feature, and RUN THE FIDELITY GATE. Exit 2 = facts changed, do not apply. `--report out.md` writes a review copy-paste report. |
| `scripts/geo/fidelity.py --original a.md --rewritten b.md` | Standalone fact-preservation check (links, numbers, table rows, code blocks, headings). |
| `scripts/geo/schema_validator.py --root app` | Parse + validate all JSON-LD via the repo's `dangerouslySetInnerHTML` pattern. Resolves JS object literals, never guesses: dynamic blocks (template literals, `.map`, spreads) are reported as "manual review." Lists `page.tsx` routes without JSON-LD. |
| `scripts/geo/citation_gaps.py --validate-only` | Validate `scripts/geo/project.yaml` against the eGEO project contract. |
| `scripts/geo/citation_gaps.py --citations cit.json` | Turn raw citation observations into the gaps file `egeo fix-gaps` consumes. Exit 1 when gaps exist. `--out-dir` writes the JSON file. |
| `scripts/geo/project.yaml` | The 20 tracked queries (from `AI-VISIBILITY-TRACKING.md`) mapped to pages. Edit here, not in markdown tracker prose. |

## The six focus areas

### 1. Score content (10 GEO features)

`content_scorer.py` covers: Ranking Emphasis, User Intent, Competitive Differentiation, Social Proof, Compelling Narrative, Authoritativeness, Unique Selling Points, Urgency Signals, Scannable Format, Factual Accuracy. It flags gaps below 5/10 (0-2 weak, 3-4 low, 5-6 moderate, 7-8 strong, 9-10 excellent).

Run it on a page before proposing changes. Report: score/100, the 2-4 largest gaps, and concrete fixes. Do NOT re-score the same page more than once per session without a content change — the tool is deterministic, so a re-run is noise.

### 2. Rewrite safely, prove you did

The `competitors` skill and `ai-seo` give you the "what to say"; `before_after_eval.py` proves the "no facts were broken":

1. Extract the page copy to Markdown (see §Bridge below).
2. Score the before copy.
3. Rewrite per `ai-seo`/`competitors` guidance. **Do not add or remove facts** — headline, URLs, numbers, table rows, and code blocks must survive (that is the fidelity contract).
4. Run `before_after_eval.py`. Attach the default Markdown report to the PR. Total score must go up (`--min-delta` can enforce it); stop if the fidelity gate fails.

### 3. Validate schema

Run `schema_validator.py` over `app/` and `public/` before any production push that touches structured data, and after generating new JSON-LD. Treat as two tiers:

- **Hard errors (blockers):** invalid JSON, missing `@context`/`@type`, missing required keys for FAQPage/Article/Organization/Product/BreadcrumbList/HowTo, `[FILL:` placeholders, git conflict markers.
- **Dynamic blocks (manual review):** schema built with `.map`, template literals, or unresolved variables (e.g. FAQ generated from an array). These are legitimate but must never be silently assumed — verify the rendered output renders valid JSON-LD (browser DevTools, Rich Results Test).

Note: `app/robots.ts` vs `public/robots.txt` must not conflict (see known defects below).

### 4. Find citation gaps

`AI-VISIBILITY-TRACKING.md` holds the 20 tracked queries; `scripts/geo/project.yaml` maps each to its page. Flow:

1. After a monthly check (manual LLM pass per `ai-seo`, or a tracker like Otterly/Peec/ZipTie), export observations as JSON `{"entries":[{"query":"...","domain_cited":"brand.com|...","cited_sources":[...]}]}` — or CSV `query,cited`.
2. Run `citation_gaps.py --citations <file>`.
3. Uncited queries are gaps. Queries with no `target_pages` in `project.yaml` are flagged "NO target page (propose_page_owner)" — surface those to the user instead of inventing a URL.
4. Feed the written gaps file to `egeo fix-gaps --project scripts/geo/project.yaml` when you want the rewrite suggestions with page-level diffs. (`egeo fix-gaps` needs PyYAML: `pip install pyyaml` — the Space Kindora tools themselves are stdlib-only.)

### 5. Competitive positioning

For "vs"/"alternative" work, use the `competitors` skill. When scoring, expect `Competitive Differentiation` to come from the comparison that page already contains. The five competitor archetypes (Market Leader, Specialist, Budget, Innovator, Content King) are the lens for *which* angle a query needs — not an excuse to fabricate competitor data. Without live SERP data, mark competitor claims **Low Confidence**.

### 6. Close the loop, record the baseline

- Before/after numbers and gap runs belong in `AI-VISIBILITY-TRACKING.md` or `GEO-BASELINE-REPORT.md`, committed to git — not in throwaway output folders.
- Re-measure citations on the next monthly cadence (`measurement.cadence` in `project.yaml`). Only a later, real citation change is proof the rewrite worked.
- Never let a one-off score replace the tracked history: record deltas, keep the append-only ledger habit.

## Bridge: tsx -> Markdown

`content_scorer.py`/`before_after_eval.py` consume Markdown. For `.tsx` pages (this repo), pass the **visible copy** as Markdown including: main heading, H2/H3 structure, comparison tables, FAQ blocks (questions and answers), stats with sources. Include the canonical URL in the heading area. Do not paste Tailwind class soup.

## Known defects (flag, do NOT silently fix)

- `public/pricing.md` has git conflict markers at lines 1/91/302 — run `schema_validator.py` style "never guess" on it; it is a copy-quality surface for AI crawlers.
- `app/robots.ts` and `public/robots.txt` both exist and conflict — reconcile to one source of truth.
- Baseline GEO score is not yet recorded in `scripts/geo/` — the first full run below creates `GEO-BASELINE-REPORT.md`.

## Quick start (one-run)

```powershell
$env:PYTHONIOENCODING='utf-8'
python scripts/geo/citation_gaps.py --validate-only
python scripts/geo/schema_validator.py --root app --root public
python scripts/geo/content_scorer.py public/llms.txt --title llms.txt
python scripts/geo/before_after_eval.py --before old.md --after new.md --report geo-artifacts/<page>-before-after.md
```

## Related skills (single responsibility)

- `ai-seo` — GEO/SEO domain knowledge, AI-search landscape, llms.txt (use it to decide WHAT is worth writing).
- `seo-audit` — traditional technical/on-page SEO audit (use it for crawlability/ranking outside AI engines).
- `competitors` — competitor/vs/alternative page content (use it to write the copy you then score here).
- `geo-seo-claude` compatible canvases — site-level GEO score & findings; this skill is per-page/per-change, not a full site audit.