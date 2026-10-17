# eGEOagents × Space Kindora — Analysis & Integration Plan

**Scope:** Analysis of the cloned `spacenexus/eGEOagents` repository against Space Kindora's existing GEO/SEO system.
**Basis:** Actual source code and documents in both repositories (no guessing). Key claims are cited with file paths and line numbers.
**Date:** 2026-10-07
**Status:** Analysis only — no files in Space Kindora or eGEOagents were modified.

**Paths referenced in this document:**

| Short name | Absolute path |
|---|---|
| `eGEOagents/` | `C:\Users\gopika\Desktop\spaceai\nexusRepo\spacenexus\eGEOagents\` |
| `spacenexus/` (Space Kindora repo) | `C:\Users\gopika\Desktop\spaceai\nexusRepo\spacenexus\` |

---

## 1. eGEOagents Overview

### 1.1 What it is

E-GEO (repo `mverab/eGEOagents`, package `egeo` v2.2.0, MIT) is an open-source **Generative Engine Optimization (GEO) / Answer Engine Optimization (AEO)** toolkit — its stated goal (per `eGEOagents/AGENTS.md`): *"A zero-effort system to optimize website content for AI-powered search engines (ChatGPT, Perplexity, Claude, Gemini)."* It is based on a research preprint (arXiv:2511.20867, building on Aggarwal et al., Princeton/KDD 2024) and marketed both as an open-source CLI (`pip install egeo`) and a paid "Pro Pack" (`eGEOagents/GEO-SYSTEM-BLUEPRINT.md` §13, "$49 one-time").

It ships **two interoperable faces**:

1. **A Python CLI package** (`egeo/` + `geo_eval.py` + `llm_client.py`) — headless, runtime-agnostic, testable (`tests/` has 16 test files, CI via `.github/workflows/ci.yml`).
2. **A Claude Code configuration** (`.claude/` — 5 agents, 7 commands, 5 skills, 1 output style) — the "interactive" face that does the actual content interpretation.

### 1.2 Design principles (verified in code/docs)

- **"Collectors write data. Agents write knowledge."** (`eGEOagents/collectors/README.md`) — measurement is deterministic and LLM-free; interpretation is delegated to agents.
- **LLM-free seams by design**: `egeo loop` planning (`egeo/loop.py:1-22`), the decision layer (`egeo/decide.py:1-5`), collectors, and `substrate_lint` never call an LLM — they run under cron/CI with only stdlib + `pyyaml`/`jsonschema`.
- **Honest about proxies**: the offline ranking is explicitly labeled. `egeo/pipeline.py:408-409`: *"**Honest scope:** competitor stubs and the analyzer score are an offline proxy, not a measurement of real AI-engine rankings."* The rewriter/eval docs (`eGEOagents/docs/evaluation.md`) say the same: *"It does not query ChatGPT, Perplexity, Claude, or Gemini."*
- **Non-destructive by default**: `fix-gaps` never touches source files (`egeo/gaps.py:7`, verified by `tests/test_gaps.py:194-214`); prompt optimization writes `rewriter_user.candidate.txt` unless `--apply` (`geo_eval.py:429-434`); the decision layer *"never publishes/merges or sets `status=applied`"* (`egeo/decide.py:1-5`).
- **Guardrails are hard requirements**: `workspace.validate_project_config` refuses to load a `project.yaml` unless all four guardrails are true — `no_duplicate_query_owners, no_auto_publish_visible_copy, no_fabricated_proof, require_fresh_crawl_before_verdict` (`egeo/workspace.py:402`).

### 1.3 Honest limitations (matters for reuse)

| Limitation | Evidence |
|---|---|
| Before/after ranking delta is a **designed proxy**, not measurement — 3 synthetic competitor stubs ("Established Market Leader", "Budget Alternative", "Niche Specialist") | `egeo/pipeline.py:32-60`, honesty note `:408-410` |
| Prompts are **e-commerce framed** ("product re-ranking engine", "product description") and reused verbatim for generic pages | `egeo/resources/prompts/ranker_system.txt`, `rewriter_system.txt` |
| Analyzer keyword lists are **English-only** heuristics | `egeo/agents.py:156-162` |
| Section-mode fix-gaps was **pre-registered as NOT passing its own gate**: `mean_auc 0.619`, `gate_auc 0.65`, `gate_passed: false` (2026-09-25) | `egeo/gaps.py:279-291` |
| Demo artifacts are stale/hard-coded: report is for `aiflowork.com`, dated `2025-01-18`, lists files that don't exist on disk | `eGEOagents/geo-output/report.md`, `schema/IMPLEMENTATION.md` |
| Extra paid dependency for section mode: JEV judging via `https://api.typesafe.ai/v1/systemone` (`TYPESAFE_API_KEY`) | `egeo/jev.py:52-54` |
| `ClaudeCodeRuntime` is a **descriptor only** — all four factories raise `RuntimeUnsupportedError` | `egeo/runtimes.py:164-210` |
| Loop interpretive work is out-of-process: `egeo loop run` only prints a plan; Claude Code must execute `.claude/skills/geo-loop/SKILL.md` | `egeo/loop.py:11-16`, `.claude/commands/geo-loop.md` |

### 1.4 External dependencies / API keys

| Key | Used by | Required? |
|---|---|---|
| `OPENAI_API_KEY` (+ optional `OPENAI_BASE_URL`) | `llm_client.py:39` — ranker, rewriter, section rewriter | Real runs; **not needed under `GEO_EVAL_MOCK=1`** |
| `BRAVE_API_KEY` / `SERPBASE_API_KEY` / `SERPLY_API_KEY` | `collectors/serp.py:57-63` — SERP position history | Loop collection (one of them, or `--fixture`) |
| `TYPESAFE_API_KEY` | `egeo/jev.py` — JEV judge | Section-mode fix-gaps only |
| `EGEO_HOME` | `egeo/workspace.py:37` — workspace root (default `~/.egeo`) | Optional |

Python deps are minimal: `pyyaml>=6.0`, `jsonschema>=4.0` (+ optional `markdown`, `tomli`); everything else is stdlib (`urllib`, `html.parser`).

---

## 2. Important Files and Their Purpose

### 2.1 Python core (`egeo/`)

| File | Purpose | Key symbols |
|---|---|---|
| `egeo/cli.py` | CLI entry (`egeo = egeo.cli:main`, `pyproject.toml:19-22`). Dispatch: `optimize, evaluate, optimize-prompts, runtimes, fix-gaps, loop` (`cli.py:225-232`) | `build_parser` `:207`, `main` `:235` |
| `egeo/pipeline.py` | The one-shot pipeline: **analyze → rank(before) → rewrite → rank(after) → index → write artifacts** (`:4-5`) | `optimize_content` `:414`, `DEFAULT_COMPETITORS` `:32`, report builder `_build_report` `:357` |
| `egeo/agents.py` | The four-agent contract; Analyzer is **heuristic/LLM-free** (10 GEO features, max 100), Ranker/Rewriter delegate to `geo_eval`, Indexer fills JSON-LD templates | `GEO_FEATURES` `:43`, `Analyzer.analyze` `:164`, `Indexer` `:306` |
| `egeo/gaps.py` | `fix-gaps` command: consumes a citation-tracker export (JSON/CSV), maps queries→target pages→sources, runs page mode or experimental section mode | `load_gaps` `:106`, `plan_fixes` `:144`, `run_fix_gaps` `:200`, `SECTION_STATUSES` `:251` |
| `egeo/sections.py` | Byte-exact ATX heading split/join/replace (`join(body)==body` invariant) | `split_sections` `:50`, `replace_section` `:83` |
| `egeo/section_rewriter.py` | Rewrites **one section** under 7 hard rules (keep heading/links/numbers/tables, length 80–160%, no new facts) | `rewrite_section` `:52`, `REWRITE_TEMPERATURE = 0.2` |
| `egeo/sources.py` | Fetches competitor sources cited by AI answers; stdlib HTML→excerpt, JSONL cache | `fetch_sources` `:155`, `html_to_excerpt` `:110` |
| `egeo/judge.py` | JEV-based decisions: which candidate is best, was a rewrite faithful (gate 0.6), did it improve (delta 0.05). *"Jev judges; it never writes"* (`:3`) | `diagnose` `:136`, `judge_fidelity` `:148`, `verify` `:154` |
| `egeo/fidelity.py` | Deterministic rewrite-fidelity rules: links/numbers/tables/code must survive; length ratio 0.8–1.6 | `check_fidelity` `:103` |
| `egeo/jev.py` | Client for the TypeSafe "JEV" hosted judging model (contract documented at `:1-46`) | `JevClient.ask` `:168`, `MockJevTransport` `:139` |
| `egeo/loop.py` | Loop mode: charter parsing, collector deltas, mechanical candidate signals, plan builder, `doctor` | `candidate_signals` `:149`, `build_plan` `:178`, `diagnose` `:243` |
| `egeo/decide.py` | **Deterministic decision layer** — priority order: `collect_fresh → wait_for_window → grade_outcome → escalate_absent → propose_page_owner → propose_schema → no_op` (`:145,169,212,232,249,270`) | `rank_action` `:135`, `apply_decision` `:350` |
| `egeo/runtimes.py` | Runtime adapters: `PythonRuntime` (works) and `ClaudeCodeRuntime` (descriptor only, factories raise) | `_RUNTIME_CLASSES` `:217` |
| `egeo/substrate_lint.py` | Mechanical lint of the `$EGEO_HOME` knowledge base (frontmatter fields, domain charter sections, `LOG.md` grammar) | `lint` `:272`, `LOG_RE` `:33` |
| `egeo/workspace.py` | `$EGEO_HOME` layout/bootstrap, `project.yaml` validation (schema v1, secret-key rejection, guardrails) | `validate_project_config` `:292`, `bootstrap` `:185` |
| `geo_eval.py` | Evaluation harness: rank→rewrite→re-rank; metrics `n, avg_rank_improvement, stderr_rank_improvement, win_rate` (`:288-294`); meta-prompt optimizer | `evaluate` `:198`, `optimize` `:301` |
| `llm_client.py` | OpenAI-compatible client (urllib, 3 retries), `MockClient` for offline runs via `GEO_EVAL_MOCK=1` | `from_env` `:38`, `get_client` `:224` |
| `scripts/validate_jsonld.py` | Structural JSON-LD validator (schema.org `@context`, JSON-Schema Draft7) | `main` `:134` |

### 2.2 Agents, commands, skills (`.claude/`)

| Kind | Files | Role |
|---|---|---|
| **Agents (5)** | `geo-analyzer` (sonnet), `geo-ranker` (sonnet), `geo-rewriter` (opus), `geo-indexer` (haiku), `coder` (out-of-pipeline) | Analyzer is the single source of truth; ranker/rewriter/indexer all receive analyzer output as input (`.claude/commands/geo.md` steps 3–6) |
| **Commands (7)** | `geo` (full pipeline), `geo:audit` (analysis only), `geo:optimize` (local files, preserves frontmatter), `geo:batch`, `geo:compete`, `geo:report`, `geo:loop` | `/geo <target>` runs validate→extract→analyze→rank→rewrite→index→report |
| **Skills (5)** | `content-scoring` (10 criteria, evidence-quoted), `competitive-analysis` (5 archetypes + matrix), `schema-generator` (10 content types + checklist), `validation-doctor` (MCP probes, "Low Confidence" policy), `geo-loop` (one bounded loop iteration, 6 non-negotiables) | Auto-triggered procedure packs |
| **Output style** | `geo-optimizer.md` | Auto-delegation rules by request type |

### 2.3 Workflow-defining documents

| File | Purpose |
|---|---|
| `GEO-SYSTEM-BLUEPRINT.md` | Product blueprint; §3 defines the canonical stage list: `0 validation-doctor → 1 analyzer → 2 ranker → 3 rewriter → 4 indexer → 5 reporter` (note: blueprint tree has drifted from the actual repo — it lists unprefixed agent names and omits `geo.md`/`geo-loop`) |
| `SUBSTRATE.md` | Normative knowledge-base contract for `$EGEO_HOME`: `signals/` (kind: signal, frequency-deduped), `docs/` (kind: doc), `data/<collector>/*.jsonl`, `domains/<loop>/README.md` charters with `Charter/Cadence/Current focus/Backlog/Timeline`, append-only `LOG.md` grammar |
| `USAGE.md`, `docs/how-it-works.md`, `docs/evaluation.md` | User-facing workflow and the proxy-metric caveats |
| `egeo/resources/examples/project.yaml` | The `project.yaml` contract: `project` (id/domain/url/language), `queries[]` (class, target_pages), `pages[]` (source), `measurement` (engines, cadence), `guardrails` |

### 2.4 Data collection (`collectors/`, vendored again under `egeo/resources/collectors/`)

- **`serp.py`** — SERP position history for tracked queries from Brave (default) / SerpBase / Serply; append-only JSONL with `{ts, query, engine, results, target_domain, target_position}`; hard budget enforcement (`budgets.queries_per_day`, fails loudly rather than truncating, `serp.py:345-353`); `--fixture` mode for offline runs.
- **`page.py`** — own-page drift: `{ts, url, status, content_hash (SHA-256), title, meta_description, jsonld_types, word_count}`; stdlib-only HTML parsing.
- Both are deterministic, LLM-free, idempotent, emit one `LOG.md` line per pass.

### 2.5 Tests (behavioral proof)

`eGEOagents/tests/` — 16 files: `test_pipeline, test_gaps, test_gaps_sections, test_decide, test_judge, test_jev, test_fidelity, test_sections, test_section_rewriter, test_sources, test_cli, test_project_config, test_resources, test_jev_selection_eval, test_jev_selection/run.py`. This is the most reliable behavioral spec in the repo and the strongest reusable asset after the pipeline itself.

---

## 3. GEO Workflow

### 3.1 Mode A — One-shot optimization (`egeo optimize` / `/geo`)

```
input (md/html + frontmatter)
  │
  ├─ 0. validation-doctor skill      → MCP probes; if Brave/Chrome missing → mark outputs "Low Confidence"
  ├─ frontmatter extraction          → held back from analyzer/rewriter, re-prepended on export (geo.md steps 1/4)
  ├─ 1. ANALYZE   geo-analyzer       → 10 GEO features 0–10 each, total/100, gaps[], strengths[], priority_actions[]
  │      (Python equivalent: agents.py Analyzer.analyze — keyword hits + structural bonuses, LLM-free)
  ├─ 2. RANK      geo-ranker         → baseline position vs 4–5 hypothetical competitors (weights: intent 30/completeness 20/trust 20/actionability 15/clarity 15)
  │      (Python: geo_eval._rank_candidates with prompts ranker_system/user.txt; exact-permutation output validated)
  ├─ 3. REWRITE   geo-rewriter       → GEO rewrite: lead with "Best for…", scannable, competitive framing, NO new facts
  │      (Python: geo_eval._rewrite_description with rewriter_system/user.txt)
  ├─ 3b. RANK again                  → rank_after; rank_improvement = rank_before − rank_after (proxy!)
  ├─ 4. SCHEMA    geo-indexer        → JSON-LD template fill (Article/Product/Service/Organization/FAQPage) w/ [FILL: …] placeholders
  └─ 5. REPORT                       → geo-output/{report.md, analysis.json, optimized/<slug>.md, schema/<slug>.json}
```

CLI: `egeo optimize <input> [--out-dir geo-output] [--query …] [--schema-type Article] [--format markdown|html] [--runtime python] [--json]` (`cli.py:61-83`).

### 3.2 Mode B — Evaluation (`egeo evaluate` / `egeo optimize-prompts`)

Per example in a JSONL dataset (`eval/datasets/geo_smoke.jsonl`: `query_id, query, target_id, candidates[]`):

1. rank candidates → `rank_before`
2. rewrite target description → re-rank → `rank_after`
3. metrics: `avg_rank_improvement`, `stderr_rank_improvement`, `win_rate` (`geo_eval.py:288-294`)

`optimize-prompts` loops this and asks a meta-model to rewrite the rewriter prompt itself; keeps the best by validation `avg_rank_improvement`; non-destructive by default (`geo_eval.py:429-434`). Runs fully offline under `GEO_EVAL_MOCK=1` (deterministic `MockClient`).

### 3.3 Mode C — Citation-gap fixing (`egeo fix-gaps`)

Input: a citation tracker export (e.g. `geo citations … --format json`, or any CSV/JSON with `query` + `domain_cited`/`cited`).

1. `load_gaps` → gap list (+ `skipped: tracker_error` entries)
2. `plan_fixes` → normalized query → `project.yaml` `queries[].target_pages` → `pages[].source`; **explicit unmatched reasons** (`query_not_in_project`, `no_target_page`, `page_has_no_source`, `source_not_found`) — never guesses
3. **Page mode** (stable): run `optimize_content` per page into `fix-gaps-output/<page_id>/`, write `fix-gaps.json` + `remeasure` command hints
4. **Section mode** (experimental, pre-registered failing gate): split sections → fetch cited competitor sources → `judge.diagnose` (`already_best` → advice = go earn mentions off-page, don't rewrite) → rewrite losing section → gates: `fidelity.check_fidelity` rules → JEV fidelity verdict (≥0.6) → JEV re-verify (not `worse`) → write `section.diff` + `diagnosis.json`
5. Sources are never modified (`gaps.py:7`)

### 3.4 Mode D — Continuous loop (`egeo loop` + `/geo:loop`)

The measurement/monitoring layer — **this is the part Space Kindora has no equivalent for**:

```
collectors (cron, LLM-free)
  serp.py → $EGEO_HOME/data/serp/<query>.jsonl   (position history)
  page.py → $EGEO_HOME/data/page/<page>.jsonl    (content/schema drift)
        │
        ▼
egeo loop run <domain> --dry-run     → deterministic plan (nothing written)
  • charter parse (Charter/Cadence/Current focus/Backlog/Timeline)
  • deltas (position_delta, content_changed, jsonld_types)
  • mechanical signals: |position move| ≥ 3; absent from top-10 across ≥3 observations; content hash changed; no JSON-LD (loop.py:149-175)
        │
        ▼
Agent executes ONE bounded unit (.claude/skills/geo-loop/SKILL.md)
  reuses content-scoring / competitive-analysis / schema-generator skills
        │
        ▼
Writes into $EGEO_HOME (never the repo tree):
  signals/<slug>.md (deduped via frequency++) or docs/<slug>.md
  exactly one "### YYYY-MM-DD run" Timeline entry ending "Outcome: success|partial|failure|no-op"
  exactly one LOG.md line
        │
        ▼
verify: python -m egeo.substrate_lint  +  egeo loop doctor
```

Decision layer (`egeo loop decide`, LLM-free) picks **at most one** action per run in strict priority (`decide.py:145-270`):

1. `collect_fresh` — streams missing or staler than cadence
2. `wait_for_window` — open ledger row younger than 7 days
3. `grade_outcome` — window (7/14/28 days) reached → grade `verified|unchanged`
4. `escalate_absent` — target absent from top-10 in last 3 observations
5. `propose_page_owner` — generic/informational query with no owning page
6. `propose_schema` — latest page crawl has empty `jsonld_types`
7. `no_op`

It writes *at most* one ledger row (`data/outcomes/ledger.jsonl`), one proposal doc, one `LOG.md` line — and **never applies anything itself** (`decide.py:1-5`).

### 3.5 Layer map (who does what)

| Layer | LLM? | Components |
|---|---|---|
| Collection | No | `collectors/serp.py`, `collectors/page.py`, fixtures |
| Interpretation | Yes | `.claude/agents/*`, `.claude/skills/*`, prompts (ranker/rewriter/section/meta) |
| Determinism/QA | No | `fidelity.py`, `substrate_lint.py`, `decide.py`, `validate_jsonld.py`, tests |
| Evaluation | Optional | `geo_eval.py` + `llm_client.py` (mockable), `eval/jev_selection/` (AUC + bootstrap CI gates) |

---

## 4. Space Kindora Compatibility

### 4.1 What Space Kindora is

`spacenexus/` is a **Next.js 16 App Router / React 19 / TypeScript / Tailwind** app (`package.json`, name `spacevdr`) hosting two products on `spacenexus.net`:
- **SpaceNexus** — AI-powered Virtual Data Room (root)
- **Kindora** (`/kindora`) — nonprofit management platform (donor CRM, grants, case management, accounting, volunteers); JSON-LD parent org `SpaceNexus` (`app/kindora/components/KindoraJsonLd.tsx`)

~393 `.tsx` pages (VDR landing pages, ~180 Kindora pages, blogs, 9 free tools, compare/glossary/tutorial clusters). LLM reasoning in-app is VeritasGraph (product feature, unrelated to GEO tooling).

### 4.2 Space Kindora's existing GEO/SEO stack

**Native (in repo, hand-maintained):**

| Capability | Where | State |
|---|---|---|
| JSON-LD | **319 of 393 `.tsx` files** contain `application/ld+json`; global `app/components/JsonLd.tsx`, `app/kindora/components/KindoraJsonLd.tsx`, `BreadcrumbSchema.tsx`, `FreeToolJsonLd.tsx` | Strong |
| Metadata/OG/hreflang | `app/layout.tsx`, `app/kindora/layout.tsx`, per-page `generateMetadata` | Strong |
| Sitemaps | `app/sitemap.ts` + `app/sitemap-dates.ts` + `app/kindora/sitemap.ts` (+ stale static `public/sitemap.xml`) | Good, duplicated |
| robots | `app/robots.ts` **and** `public/robots.txt` — **conflicting rules** (verified: `robots.ts` disallows `/api/ /admin/ /private/`; `robots.txt` disallows `/api/ /_next/ /seo/ /templates/ /kindora/email-click`) | ⚠ Broken |
| llms.txt family | `public/llms.txt`, `llms-full.txt`, `kindora/llms.txt`, `kindora/llms-full.txt` | Done |
| Machine-readable pricing | `public/pricing.md` — **live git conflict markers at lines 1, 91, 302** (verified) | ⚠ Broken |
| GEO-shaped components | `AnswerBlock.tsx`, `AskForSummary.tsx`, `LastUpdated.tsx`, `FAQSection.tsx` | Done |
| E-E-A-T content | cited statistics, original-research post, buyers guide, competitor keywords (`Keyword/*.csv`) | Partial |

**Claude-Code tooling (project level):**
- `.claude/skills/ai-seo/SKILL.md` (v2.2, 492 lines — full AEO/GEO playbook incl. Princeton GEO research table, AI-bot robots checks, monitoring guidance) + `seo-audit` + `competitors`, each with `evals/evals.json`
- `.agents/skills/web-quality-audit`
- **No `.claude/commands/` and no `.claude/agents/` at root** — everything requires an interactive session.

**Vendored third-party toolkits (both with their own `.git`):**
- `geo-seo-claude/` — `/geo` router + 14 skills + 5 parallel audit agents + Python tools (`citability_scorer.py`, `llmstxt_generator.py`, `brand_scanner.py`, `fetch_page.py`), composite **GEO Score 0–100** weighted: Citability 25 / Brand 20 / E-E-A-T 20 / Technical 15 / Schema 10 / Platform 10 (`geo-seo-claude/docs/scoring-methodology.md`)
- `seomachine/` — 26 commands, 11 agents, ~26 skills, 27 Python analysis modules, GA4/GSC/DataForSEO integrations; GEO-relevant: `/research-ai-citations`, `schema-markup`, `aeo-geo-patterns.md`

**Plans/docs (root `.md` files):** `AI-SEO-TASKS.md` (19/30 done), `SEO-AUDIT-CHECKLIST.md` (29/30), `geo-skills-task-plan.md` (11/12, **baseline GEO score never recorded**), `AI-VISIBILITY-TRACKING.md` (**manual spreadsheet, every result cell empty**), `kindora-rank-performance-action-plan.md` (all unchecked), `kindora-seo-30-task-action-plan.md` (never executed as checklist).

### 4.3 Compatibility assessment

| Dimension | Verdict | Notes |
|---|---|---|
| Language/runtime | ✅ Compatible | eGEOagents is stdlib-first Python CLI; no conflict with Next.js. Invoke from terminal/CI only. |
| Output isolation | ✅ Compatible | Writes to `geo-output/`, `fix-gaps-output/`, `$EGEO_HOME` — can be kept out of `app/` and `public/`. |
| Content format | ⚠ Needs adaptation | Pipeline consumes Markdown files with frontmatter. Kindora pages are `.tsx` — must extract visible copy first (see §6.3). |
| Domain model | ⚠ Needs adaptation | `project.yaml` must be authored for `spacenexus.net` with `canonical_domain`, queries, target_pages, page sources. Example at `egeo/resources/examples/project.yaml`. |
| Prompts | ⚠ Needs adaptation | E-commerce framing ("product re-ranking", "Best for buyers") must be re-framed for SaaS/nonprofit copy. |
| Ranking claims | ⚠ Must keep caveats | Never present the pipeline's `rank_improvement` as real AI-search measurement (per `pipeline.py:408`). |
| Claude Code layer | ✅ Drop-in possible | `.claude/` could be merged with spacenexus `.claude/skills/`, but risks colliding with existing `ai-seo`/`seo-audit` skills and the vendored toolkits. |
| Licensing | ✅ MIT | Reuse OK; keep attribution (LICENSE, README credit). |
| Substrate/loop workspace | ⚠ Decide deliberately | `$EGEO_HOME` is a *per-user* workspace outside the repo — good fit for keeping GEO history out of git (a gap SK currently has). |

---

## 5. Gap Analysis

### 5.1 Capability matrix

| Capability | Space Kindora today | eGEOagents | geo-seo-claude (vendored) | seomachine (vendored) |
|---|---|---|---|---|
| On-page SEO/schema | ✅ Strong (319 files w/ JSON-LD) | ⚠ Template-fill only | ✅ Templates + audit | ✅ `schema-markup` skill |
| llms.txt / machine-readable | ✅ Done (but `pricing.md` conflicted) | ❌ | ✅ generator script | ❌ |
| Content audit/scoring | ⚠ LLM skill only, no repo score | ✅ Heuristic 10-feature scorer (deterministic) + skill | ✅ 0–100 composite (LLM) | ✅ 0–100 Python rater |
| **Rewrite with fidelity gates** | ❌ | ✅ `fidelity.py` + JEV gates + diffs | ❌ (advice only) | ⚠ Commands only |
| **Ranking evaluation harness** | ❌ | ✅ `geo_eval.py` + datasets + metrics + prompt optimizer | ❌ | ❌ |
| **SERP position tracking (API)** | ❌ (empty spreadsheet) | ✅ `collectors/serp.py` (Brave/SerpBase/Serply, budgets, fixtures) | ❌ (MCP-only, manual) | ⚠ DataForSEO (paid, creds needed) |
| **Page drift/schema-drift tracking** | ❌ | ✅ `collectors/page.py` (content_hash, jsonld_types) | ❌ | ❌ |
| **Closed-loop measurement** (collect → decide → act → grade) | ❌ | ✅ `loop.py` + `decide.py` + outcomes ledger | ❌ | ❌ |
| Citation-gap fixing from tracker exports | ❌ | ✅ `fix-gaps` (page mode stable) | ❌ | ❌ |
| AI-visibility measurement (which AI cites you) | ⚠ Manual spreadsheet, empty | ⚠ Indirect (assumes external tracker feeds `fix-gaps`) | ✅ brand/citability audits | ✅ `/research-ai-citations` (manual) |
| CI / automated QA | ❌ (no SEO scripts, no CI gates) | ✅ pytest + GitHub Actions + `substrate_lint` + `validate_jsonld` | ⚠ tests only | ⚠ 3 test files |
| Competitor keyword data | ✅ `Keyword/*.csv` | ❌ | ❌ | ✅ DataForSEO |
| Report/PDF deliverables | ⚠ Claimed but artifacts outside repo | ✅ `report.md` generator (proxy-honest) | ✅ HTML→PDF template | ⚠ Markdown |

### 5.2 What eGEOagents has that Space Kindora lacks (the real gaps)

1. **Any measurement at all.** SK's `AI-VISIBILITY-TRACKING.md` is an empty manual sheet; eGEOagents has API collectors with budgets, JSONL history, drift detection and a grading ledger.
2. **A deterministic content score in-repo.** SK's GEO score lives only inside interactive Claude sessions and the baseline was never recorded (`geo-skills-task-plan.md` Task 2 unchecked); eGEOagents' Analyzer runs headless and reproducibly.
3. **Fidelity-gated rewriting.** Nothing in SK prevents an agent from silently dropping links/numbers/tables during a "GEO rewrite". `fidelity.py` + section gates exist precisely for this.
4. **A decision layer** that picks one bounded, evidence-backed action per cycle instead of a 30-task plan document that nobody marks off.
5. **Evaluation of the optimization itself** (does our rewrite prompt actually move ranks?) — `geo_eval.py` + `geo_smoke.jsonl` + `optimize-prompts`.
6. **CI-verifiable QA**: `validate_jsonld.py`, `substrate_lint`, 16 pytest files. SK has zero SEO/GEO scripts in `scripts/`.
7. **Honest confidence policy**: "Low Confidence when no Brave data" is a discipline SK's audits currently lack.

### 5.3 What Space Kindora has that eGEOagents lacks

1. **Real schema depth**: 319 files with page-specific JSON-LD, components, hreflang, sitemaps — vs eGEOagents' 5 placeholder templates.
2. **A mature GEO knowledge skill** (`.claude/skills/ai-seo`) with platform matrix, AI-bot crawler checks, Princeton research table — richer *domain knowledge* than eGEOagents' `.claude/CLAUDE.md`.
3. **Composite site-level GEO score** (geo-seo-claude, 6 weighted categories) vs eGEOagents' *page-level* 10-feature score — different altitude; they complement rather than compete.
4. **Real content inventory** (blogs, free tools, comparison pages, original research) to optimize — eGEOagents ships only a stale demo (`aiflowork.com`).
5. **Existing brand/authority plan** (G2, Capterra, TrustRadius pending) — eGEOagents has no off-page component beyond the "already_best → go earn mentions" nudge.
6. **Live product site + GA4/GSC wiring** (via `lib/analytics.ts`, verification metas) — eGEOagents has none.

### 5.4 Existing defects in Space Kindora that no tool fixes automatically (fix these first — cheap, independent)

| # | Defect | Evidence | Severity |
|---|---|---|---|
| 1 | `public/pricing.md` ships git conflict markers (lines 1, 91, 302) — machine-readable file is garbage to AI parsers | verified directly | **High** |
| 2 | Two conflicting robots sources (`app/robots.ts` vs `public/robots.txt`) + stale `public/sitemap.xml` beside generated sitemaps | verified directly | **High** |
| 3 | No explicit AI-crawler rules (GPTBot/PerplexityBot/ClaudeBot/Google-Extended) despite `ai-seo` skill requiring the check | `app/robots.ts` | Medium |
| 4 | Baseline GEO score never recorded → `geo-compare` has no "before" | `geo-skills-task-plan.md` | Medium |
| 5 | GEO reports/PDFs live outside git; no versioned GEO artifacts | `geo-skills-implementation-report.md` | Medium |
| 6 | Referenced skills (`schema`, `content-strategy`, `cro`, `analytics`…) don't exist | `.claude/skills/*` cross-refs | Low |

---

## 6. Recommended Integration Approach

**Guiding principle:** *Do not adopt eGEOagents as a second parallel GEO stack.* Space Kindora already has two vendored toolkits plus native skills — the marginal value is not in more skills, it's in **measurement, evaluation, and closed-loop iteration**, which is exactly what eGEOagents uniquely provides and SK uniquely lacks.

### 6.1 Reuse directly (copy/adapt as-is, minimal changes)

| Asset | Why | Adaptation needed |
|---|---|---|
| `collectors/serp.py` + `collectors/page.py` + fixtures | Only real SERP/drift collectors in either codebase; stdlib; budgets; offline fixtures | Set `BRAVE_API_KEY`; write a `project.yaml` for `spacenexus.net`; change `USER_AGENT` (`_common.py:26`) to a SK-branded agent |
| `egeo/workspace.py` + `SUBSTRATE.md` + `substrate_lint.py` | Gives SK the versioned, linted, append-only GEO history it currently lacks (reports live outside git today) | Run with `EGEO_HOME` pointed at a SK-owned workspace (e.g. `~/.space-kindora-geo` or a repo-external dir); author `domains/spacenexus/README.md` and `domains/kindora/README.md` charters |
| `egeo/decide.py` + `loop.py` (plan/doctor) | Replaces "30-task plan markdown nobody updates" with a deterministic next-action engine | Seed `project.yaml` queries from `Keyword/*.csv` + `AI-VISIBILITY-TRACKING.md` (20 tracked queries already defined!) |
| `egeo/fidelity.py` | Zero-dependency rewrite guard — apply to *any* rewrite (including Claude-driven ones) | None (pure functions) |
| `scripts/validate_jsonld.py` | CI gate over generated schema; SK has 319 JSON-LD files and zero automated validation | Add to a CI step / npm script invocation |
| `geo_eval.py` + `llm_client.py` + `eval/datasets/` + prompts | The only offline evaluation harness; `GEO_EVAL_MOCK=1` makes it CI-safe with no key | Retarget prompts from e-commerce to SaaS/nonprofit (see 6.4) |
| `tests/` (16 files) | Behavioral spec + regression safety for anything reused | Copy alongside the modules reused |
| `egeo/sections.py` + `section_rewriter.py` | Exact-preserving section surgery (useful for fixing one section of a long Kindora guide) | Rewrite `section_rewriter_system.txt` rules for SK voice |
| Honesty conventions | "Low Confidence without ground truth", "proxy not measurement" — import as team policy into SK's audits | Write into `.claude/skills/ai-seo/SKILL.md` audit output format |

### 6.2 Adapt with meaningful work

| Asset | What's needed |
|---|---|
| `project.yaml` | Author for `spacenexus.net`: `canonical_domain`, both product trees, 20 queries (from `AI-VISIBILITY-TRACKING.md` classes: branded/generic/commercial/informational), `target_pages` per query, `measurement.engines`, weekly cadence, all 4 guardrails |
| Prompts (`egeo/resources/prompts/*.txt`) | De-productize: "product re-ranking engine" → "B2B SaaS ranking engine"; rewrite `rewriter_user.txt` guidelines for VDR/nonprofit voice; keep the hard constraint "Do not add new facts" |
| `fix-gaps` input | SK has no citation tracker yet. Either (a) run a manual/LLM monthly check per `ai-seo` skill's DIY protocol and export to the accepted JSON shape (`entries[].query` + `domain_cited`), or (b) wire an existing tracker (Otterly/Peec/ZipTie per `ai-seo` skill) to export that shape |
| `.claude/commands/*` | If adopted, **rename/namespace** (`/sk-geo:…`) to avoid collisions with geo-seo-claude's `/geo *` router and seomachine commands |
| `geo-output/` destination | Redirect to a dedicated folder (e.g. `geo-artifacts/`) that is git-tracked (solving gap 5.4-5) and `.gitignore`-d for transient runs |
| `DEFAULT_COMPETITORS` stubs (`pipeline.py:32-58`) | Replace with real SERP-derived competitors from `collectors/serp.py` output as soon as a Brave key exists — this upgrades the "proxy" toward ground truth |

### 6.3 Content extraction bridge (the one real engineering task)

Kindora pages are `.tsx`; the pipeline consumes Markdown. Recommended adapter (new, small — ~100 lines, e.g. `scripts/extract-page-copy.mjs`):

1. Pull visible copy from a page's source (or render via existing tooling) → Markdown with frontmatter (`title`, `description`, `canonical`).
2. Feed to `egeo optimize` / `fix-gaps`.
3. Apply rewritten copy **manually via PR** — never auto-publish (guardrail `no_auto_publish_visible_copy`).

Priority targets: long-form educational pages (`what-is-a-virtual-data-room`, guides, blog posts, comparison pages) — the content type AI engines actually cite. Skip tool pages and app UI copy.

### 6.4 What NOT to take (explicitly unnecessary for Space Kindora)

| Skip | Reason |
|---|---|
| `ClaudeCodeRuntime` | Descriptor that raises `RuntimeUnsupportedError` (`runtimes.py:191-210`) — no functionality |
| JEV / `TYPESAFE_API_KEY` / `egeo/jev.py`, `judge.py`, section-mode `fix-gaps` | Extra paid API; section mode's own gate is **failed** (`gaps.py:279-291`, `gate_passed: false`); page mode gives 90% of value without it |
| `GEO-SYSTEM-BLUEPRINT.md` pricing/Gumroad phases, `site/` (Astro marketing site), `.github/launch-materials/` | Commercial/open-source-launch material, irrelevant to SK |
| `geo-output/` demo artifacts (aiflowork.com report, stale IMPLEMENTATION.md with author's absolute `/Users/mverab/…` path) | Stale demo data — regenerate, don't copy |
| The `.claude/` agent set **as-is** | Would collide with existing `ai-seo`/`seo-audit` skills and the vendored `geo-seo-claude` `/geo` router; adopt the *pattern* (analyzer-as-source-of-truth fan-out) instead of the files |
| `coder.md` agent | Explicitly "not part of the E-GEO optimization pipeline" |
| `egeo loop interpretive` auto-writing into SK repo | Substrate rule: loop state never enters the repo tree — keep it in `$EGEO_HOME` |

### 6.5 How the three toolkits should relate (no overlap)

```
┌────────────────────────────────────────────────────────────────┐
│ NATIVE SKILLS (.claude/skills/ai-seo, seo-audit, competitors)  │  ← domain knowledge / "how to think"
├────────────────────────────────────────────────────────────────┤
│ DIAGNOSTICS  geo-seo-claude  (/geo audit, citability, crawlers)│  ← site-level score & findings (monthly)
│ CONTENT OPS  seomachine      (/research-ai-citations, schema)  │  ← keyword/content production
├────────────────────────────────────────────────────────────────┤
│ MEASUREMENT & ITERATION  eGEOagents                            │  ← collectors, decide loop, fidelity,
│   collectors + project.yaml + decide + eval + fix-gaps (page)  │     eval harness, JSON-LD lint (weekly)
└────────────────────────────────────────────────────────────────┘
```

Rule of thumb: **geo-seo-claude answers "what's our GEO score?", seomachine answers "what content should we make?", eGEOagents answers "did the last change move anything, and what exactly should we do next?".**

---

## 7. Priority Implementation Roadmap

### Phase 0 — Fix broken machine-readable surfaces (1–2 hours, no eGEOagents needed)

1. Resolve `public/pricing.md` git conflict markers (lines 1/91/302).
2. Reconcile `app/robots.ts` vs `public/robots.txt` (single source of truth; delete or generate the static one), retire stale `public/sitemap.xml`.
3. Add explicit AI-crawler block (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, Bingbot) per `ai-seo` skill Step 4.
4. *Exit criteria:* `pricing.md` parses clean; one robots source; `validate_jsonld.py`-style checks pass on shipped files.

### Phase 1 — Stand up measurement (highest unique value) — 1–2 days

1. Create `project.yaml` for `spacenexus.net` using `egeo/resources/examples/project.yaml` as contract; seed **20 queries from `AI-VISIBILITY-TRACKING.md`** and pages from `app/sitemap.ts`.
2. Set `EGEO_HOME`, run `egeo loop bootstrap` (via `workspace.bootstrap`), write charters for `domains/spacenexus/` and `domains/kindora/`.
3. Get `BRAVE_API_KEY`; run `egeo loop collect serp --fixture` first, then live; add key `pages` to `page.py` (Kindora + VDR priority URLs).
4. Run `egeo loop doctor` + `python -m egeo.substrate_lint` until clean.
5. *Exit criteria:* JSONL position history accruing daily; `egeo loop decide` returns a deterministic action; baseline recorded (**closes `geo-skills-task-plan.md` Task 2**).

### Phase 2 — Score + evaluate (1 day)

1. Run `GEO_EVAL_MOCK=1 egeo optimize <page>` end-to-end on 2–3 extracted Kindora pages to validate the bridge (§6.3) offline.
2. Commit a proper **baseline**: `geo-artifacts/baseline-YYYY-MM-DD/{analysis.json, report.md}` (closes §5.4-4/5 — artifacts now in git).
3. Add CI (GitHub Actions): pytest for reused modules + `validate_jsonld.py` over generated schema + a conflict-marker lint (catches the `pricing.md` class of bug forever).
4. *Exit criteria:* reproducible score in repo; CI green.

### Phase 3 — Rewrite safely + fix gaps (2–3 days)

1. Adapt prompts (§6.4) for SaaS/nonprofit voice; keep "no new facts".
2. Extract copy for the 5–10 highest-opportunity long-form pages; run page-mode `fix-gaps`/`optimize`; apply via PRs with `fidelity.py` output attached as proof.
3. Export AI-citation checks (monthly manual pass or tracker) into `fix-gaps` JSON shape; wire `remeasure` commands into the monthly cadence.
4. *Exit criteria:* ≥1 full collect→decide→rewrite→re-collect cycle completed with graded outcome in `data/outcomes/ledger.jsonl`.

### Phase 4 — Continuous loop (ongoing, low effort)

1. Weekly: `egeo loop run <domain>` → one bounded unit (signal or proposal) → lint + doctor → 3-line report — exactly per `.claude/skills/geo-loop/SKILL.md`.
2. Monthly: re-run `geo-seo-claude` composite audit → compare vs git-tracked baseline (`geo-compare` finally has a "before").
3. Quarterly: `egeo evaluate` on the rewriter prompt; only `--apply` a candidate prompt if val `avg_rank_improvement` improves.

**Suggested order rationale:** Phase 0 is free and unblocks AI crawlers immediately; Phase 1 is the only capability SK has *nothing* like; Phases 3–4 deliver value only on top of Phase 1's history.

---

## 8. Final Recommendation

**Adopt eGEOagents as Space Kindora's measurement and iteration layer — not as its GEO stack.**

1. **Keep what SK already does well.** Native JSON-LD (319 files), sitemaps, llms.txt, and the `ai-seo` skill are ahead of eGEOagents on the *publishing* side. Do not regress to its 5 placeholder schema templates.

2. **Take the four things SK demonstrably lacks**, all of which are reusable with light adaptation and have test coverage:
   - **Collectors** (`serp.py`, `page.py`) — replaces the empty `AI-VISIBILITY-TRACKING.md` spreadsheet with API-backed history
   - **Decision layer** (`decide.py` + `loop.py` + `substrate_lint`) — replaces never-updated 30-task plan docs with one evidence-backed next action per cycle
   - **Fidelity-gated rewriting + evaluation harness** (`fidelity.py`, `geo_eval.py`, `GEO_EVAL_MOCK` offline mode) — makes every GEO rewrite safe and every prompt change measurable
   - **`validate_jsonld.py` + pytest/CI pattern** — the repo currently has zero SEO/GEO automation in `scripts/`

3. **Skip the failed/extraneous parts deliberately:** JEV/section-mode fix-gaps (self-documented failing gate), `ClaudeCodeRuntime` (raises on use), demo artifacts, launch/marketing material, and the `.claude/` files as-is (name collisions with two already-vendored toolkits).

4. **Fix the two live defects first** — conflicted `pricing.md` and duplicated robots sources — since they actively harm AI-crawlability today and need no integration work.

5. **Consolidate around clear ownership** (§6.5): native skills = knowledge, geo-seo-claude = site scoring, seomachine = content ops, eGEOagents = measurement/iteration. Given geo-seo-claude and seomachine are *also* vendored clones with their own `.git`, a follow-up decision should be made on pruning overlap — but that is out of scope for this analysis.

**Bottom line:** ~80% of eGEOagents' value for Space Kindora sits in ~15% of its code (collectors, decide/loop, fidelity, eval harness, JSON-LD lint, tests). Reuse that selectively, adapt `project.yaml` and prompts to `spacenexus.net`, bridge `.tsx`→Markdown for long-form pages, and you gain the closed loop (measure → decide → rewrite → verify) that neither Space Kindora nor its two existing GEO toolkits can currently provide.

---

*Analysis based on: `eGEOagents/egeo/*` (17 modules), `.claude/*` (5 agents, 7 commands, 5 skills), `collectors/*`, `tests/*` (16 files), `geo_eval.py`, `llm_client.py`, root docs (`README.md`, `AGENTS.md`, `GEO-SYSTEM-BLUEPRINT.md`, `SUBSTRATE.md`, `USAGE.md`, `docs/*`), and Space Kindora's `spacenexus/` (native app code, `.claude/skills/*`, `geo-seo-claude/`, `seomachine/`, root plan documents). Verified spot checks: `pipeline.py` stage order + honesty note, `cli.py` dispatch, `decide.py` action priority, `public/pricing.md` conflict markers, `app/robots.ts` vs `public/robots.txt`.*
