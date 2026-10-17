# GEO Action Plan — SpaceNexus / Kindora (spacenexus.net)

Complete, consolidated plan for GEO/SEO using every installed skill family:
eGEOagents-derived measurement tools (`scripts/geo/*`), the installed `geo-*` skill
suite (`/geo …`, active at `~/.claude/skills/`), the native repo skills
(`ai-seo`, `seo-audit`, `competitors`, `web-quality-audit`), and relevant
`seomachine` skills. Do not create duplicate systems — this plan is the single
list of work; detail lives in the referenced plan docs.

## Status labels

Every task ends with a bold status word on its title line:
`**DONE (date)**`, `**IN PROGRESS**`, `**NOT STARTED**`, `**BLOCKED**`,
`**PARTIALLY BLOCKED**`, or `**RECURRING**`. If a label is unclear, the task is
not started. As tasks complete, update the label here AND record artifacts in
`GEO-BASELINE-REPORT.md` so `geo-compare` always has a real "before".

## At a glance

- **Phase 0 — Machine-readable surfaces** (Critical) · tasks 1–4
- **Phase 1 — eGEO measurement & iteration** (High) · tasks 5–11
- **Phase 2 — GEO audit & composite baseline** (High) · tasks 12–14
- **Phase 3 — Technical SEO & AI crawlers** (High) · tasks 15–17
- **Phase 4 — llms.txt** (High) · tasks 18–20
- **Phase 5 — Schema coverage & validation** (High) · tasks 21–24
- **Phase 6 — Citability & content optimization** (High) · tasks 25–27
- **Phase 7 — AI platform optimization** (High) · tasks 28–29
- **Phase 8 — Brand mentions & authority** (Medium) · tasks 30–31
- **Phase 9 — Free-tool SEO & content ops** (Medium) · tasks 32–34
- **Phase 10 — Monthly reporting & loop** (Recurring) · tasks 35–38

Task detail lives in the lists below; tracking happens in `GEO-BASELINE-REPORT.md`.

## Related plan / status docs (do not duplicate)

- `geo-skills-task-plan.md` — 12 geo-seo-claude tasks, 11 `[x]` (2026-09-08), task 2 unchecked.
- `ai-seo-30-task-action-plan.md` — 30 prose tasks, no status tracking.
- `kindora-skills-task-plan.md` — 20 tasks (seomachine + web-quality-audit on `app/kindora/**`), all unchecked.
- `geo-skills-implementation-report.md` — claims all 12 geo tasks done (2026-09-08).
- `EGEO-SPACE-KINDORA-ANALYSIS.md` — adoption analysis; `GEO-BASELINE-REPORT.md` — recorded baseline.

---

## Phase 0 — Machine-readable surfaces
*Critical. No GEO work needed; unblocks AI crawlers immediately.*

**1. Resolve git conflict markers in `public/pricing.md` (lines 1/91/302)** — **DONE (2026-10-08)**
- **Skills/tools:** Manual edit + `ai-seo`
- **Priority:** Critical
- **Expected result:** `pricing.md` parses clean; no merge markers ship to AI crawlers. Merged both products into one file — `# SpaceNexus Pricing` with VDR + Kindora sections; all content preserved (73/100 GEO score on first pass)

**2. Make `app/robots.ts` the single robots source** — **DONE (2026-10-08)**
- **Skills/tools:** `geo-crawlers` + `seo-audit`
- **Priority:** Critical
- **Expected result:** one `/robots.txt`; 14-crawler access map stays clean. Retire `public/robots.txt` (it now disagrees on `/_next/`, `/admin/`, `/private/`, `/seo/`, `/templates/`, `/kindora/email-click`); keep all AI crawlers allowed. Verified: pre-fix `/robots.txt` returned **HTTP 500** (`conflicting-public-file-page`); now 200 with all AI crawlers allowed. `public/robots.txt` deleted; `/kindora/email-click` rule preserved from it; dropped `/_next/`, `/seo/`, `/templates/` (blocking `/_next/` hurts asset rendering). Note: `app/kindora/robots.ts` 404s (nested convention unsupported) — candidate for deletion

**3. Fix the `/sitemap.xml` overlap** — **DONE (2026-10-08)**
- **Skills/tools:** `seo-audit`
- **Priority:** Critical
- **Expected result:** one canonical sitemap covering VDR + Kindora; delete the static file. (`public/sitemap.xml` — 27 Kindora URLs — and `app/sitemap.ts` — VDR routes — both generate `/sitemap.xml`). Verified: `/sitemap.xml` was **HTTP 500** (`conflicting-public-file-page`); `public/sitemap.xml` deleted; now 200 with 151 VDR URLs, `/kindora/sitemap.xml` 200 with 184 Kindora URLs — canonical split wired via `app/robots.ts`

**4. Validate `public/llms.txt` against the llms.txt format spec** — **DONE (2026-10-08)**
- **Skills/tools:** `/geo llmstxt` validate (`geo-llmstxt`)
- **Priority:** High
- **Expected result:** `GEO-LLMSTXT-ANALYSIS.md`; listed URLs all return 200 (file is currently conflict-free). Result: root `llms.txt` structurally valid (81/100, 54 links, 0 format issues) but **URL check found 10 broken** — `/solutions` 404 in the main file (no `app/solutions/page.tsx`) + 6× 404 and 3× unreachable subdomains in `llms-full.txt`. All Kindora nested-file URLs pass. Fixes tracked in `GEO-LLMSTXT-ANALYSIS.md` recommendations 1–2

**Phase 0 exit criteria:** no merge markers anywhere; one robots file; one sitemap; llms.txt spec-clean.

---

## Phase 1 — eGEO measurement & iteration layer
*High. The capability this repo previously had nothing like.*

**5. Deterministic scoring toolchain** — **DONE (2026-10-07)**
- **Skills/tools:** `scripts/geo/*` (eGEOagents-derived, MIT)
- **Priority:** High
- **Expected result:** working stdlib-only tools — 10-feature content scorer, fidelity gate, before/after eval, JS-aware schema validator, citation-gap export + `project.yaml` (18 pages / 20 queries)

**6. Record the baseline** — **DONE (2026-10-07)**
- **Skills/tools:** `scripts/geo/*` → `GEO-BASELINE-REPORT.md`
- **Priority:** High
- **Expected result:** committed "before" for `geo-compare` (schema 448 OK / 193 dynamic / 0 errors, 23 routes without JSON-LD; llms.txt 80/100)

**7. Give q6 and q10 a target page in `project.yaml`** — **DONE (2026-10-08)**
- **Skills/tools:** `citation_gaps.py` + eGEO `decide.py` pattern
- **Priority:** Medium
- **Expected result:** every active query has a page owner (`propose_page_owner` — never guessed); validator clean. Verified: `q6` → `/blog/vdr-vs-physical-data-room`, `q10` → `/blog/data-room-organization-best-practices` (both real data-driven routes in `app/blog/[slug]`). `citation_gaps.py --validate-only` → **project.yaml OK (20 pages, 20 queries)**; no duplicate owners

**8. Optimize 5–10 highest-leverage long-form pages with fidelity-gated rewrites** — **IN PROGRESS (7 of 5–10 done 2026-10-08)**
- **Skills/tools:** `content_scorer.py` + `before_after_eval.py` + `ai-seo`/`competitors`/`copywriting`
- **Priority:** High
- **Expected result:** per-page score up; fidelity report attached to each PR in `geo-artifacts/` (extract tsx copy → score → rewrite → evaluate)
- **Method (honesty rule):** additive-only, fact-preserving edits; ship only when `before_after_eval.py` verdict is **IMPROVED** and fidelity passes (first-line heading, URLs, numbers, table rows, code blocks, word ratio 0.8–1.6). No new numbers/URLs added in rewrites.
- **Done (applied + verified on rendered pages):**
  - Kindora homepage — `geo-artifacts/kindora-home.md` 86/100 → `kindora-home-optimized.md` **91/100 (+5)** (ranking_emphasis 8→10, competitive_diff 5→8; authority still 5). Fidelity PASSED (word ratio 1.16), report `kindora-home-fidelity.md`. Applied to `app/kindora/page.tsx`; `/kindora` 200 + all 4 new sentences verified.
  - `/blog/vdr-vs-physical-data-room` — `vdr-vs-physical-data-room-before.md` 86/100 → after **89 (+3)** (added direct-answer opener + sourced-authority paragraph). Fidelity PASSED, applied to `posts.ts`, 200 + text verified.
  - `/blog/data-room-organization-best-practices` — before 78/100 → after **83 (+5)** (competitive_diff gap closed). Fidelity PASSED, applied, 200 + text verified.
  - `/blog/data-room-mistakes-that-kill-deals` — before **46/100** → after **84 (+38)** (ranking_emphasis +5, user_intent 0→10, competitive_diff +5, narrative +5; only authority 0). Fidelity PASSED, applied, 200 + all 3 new sentences verified.
  - `/blog/virtual-data-room-for-private-equity` — before 62/100 → after **79 (+17)** (direct-answer opener + best-for + alt-comparison + authority). Fidelity PASSED, applied, 200 + all 3 new sentences verified.
  - `/blog/vdr-security-what-to-look-for` — before **63/100** → after **87 (+24)** (ranking_emphasis, user_intent, competitive_diff, narrative all improved). Fidelity PASSED, report `vdr-security-what-to-look-for-fidelity.md`, applied to `posts.ts`, 200 + both new sentences verified.
  - `/blog/due-diligence-virtual-data-room-guide` — before **61/100** → after **77 (+16)** (ranking_emphasis + narrative improved). Fidelity PASSED, report `due-diligence-virtual-data-room-guide-fidelity.md`, applied to `posts.ts`, 200 + both new sentences verified.
- **Rejected (evidence only):** `/blog/data-room-pricing` — before/after scored 91, additive methodology sentence → verdict UNCHANGED, NOT shipped (`data-room-pricing-{before,after,fidelity}.md`).
- **All reports in `geo-artifacts/`:** `{slug}-before.md`, `{slug}-after.md`, `{slug}-fidelity.md`.
- **Remaining weak across optimized pages:** authority signal (0–5/10); remaining candidates for the 5–10 cap: how-to-set-up-virtual-data-room-series-a 73, best-virtual-data-room-for-ma 71.

**9. First real citation pass → gaps file → rewrite next sprint** — **NOT STARTED**
- **Skills/tools:** `citation_gaps.py --citations … --out-dir geo-artifacts` → `egeo fix-gaps --project scripts/geo/project.yaml`
- **Priority:** Medium
- **Expected result:** exported gaps with page owners; uncited queries = next rewrite targets
- **Note:** `egeo fix-gaps` needs `pip install pyyaml`

**10. Optional full eGEO loop: collectors, decide, substrate ledger** — **BLOCKED**
- **Skills/tools:** eGEO `collectors/` + `egeo loop`
- **Priority:** Low
- **Expected result:** daily JSONL history; deterministic next action per cycle
- **Note:** needs `BRAVE_API_KEY` + `EGEO_HOME`

**11. Quarterly prompt evaluation** — **NOT STARTED**
- **Skills/tools:** `GEO_EVAL_MOCK=1 egeo evaluate`
- **Priority:** Low
- **Expected result:** rewriter-prompt change accepted only if `avg_rank_improvement` improves

**Phase 1 exit criteria:** reproducible scores in `geo-artifacts/`; no rewrite merged without a passing fidelity gate; first measures live in the tracker.

---

## Phase 2 — GEO audit & composite baseline
*High. Produces the "before" that everything else compares against.*

**12. Full GEO audit of `spacenexus.net`** — **NOT STARTED**
- **Skills/tools:** `/geo audit spacenexus.net` (`geo-audit`)
- **Priority:** High
- **Expected result:** `GEO-AUDIT-REPORT.md` committed to repo (composite 0–100, 5 parallel subagents); score recorded in baseline

**13. Full GEO audit of `spacenexus.net/kindora`** — **DONE (2026-10-08)**
- **Skills/tools:** `/geo audit …/kindora` (`geo-audit`)
- **Priority:** High
- **Expected result:** closes `geo-skills-task-plan.md` task 2; report committed (prior run 2026-09-08 left no report in repo)
- **Artifacts:** `GEO-AUDIT-REPORT.md` (composite **66/100 Fair** — AI Citability 74 | Brand Authority 50 | E-E-A-T 55 | Technical 82 | Schema 62 | Platform 78); baseline recorded in `GEO-BASELINE-REPORT.md`; `geo-skills-task-plan.md` task 2 checked. Next: `geo-compare` monthly delta uses this as "before".

**14. Save audit snapshots for monthly deltas** — **DONE (2026-10-08)**
- **Skills/tools:** `/geo prospect audit` (`geo-prospect`)
- **Priority:** High
- **Expected result:** baselines in `~/.geo-prospects/audits/<domain>-<date>.md`
- **Note:** `~/.geo-prospects/` is currently absent; created on first use
- **Artifacts:** `~/.geo-prospects/prospects.json` (PRO-001, spacenexus.net, status won, geo_score 66), snapshot `~/.geo-prospects/audits/spacenexus.net-kindora-2026-10-08.md` = Kindora audit 66/100 (baseline "before" for `geo-compare`). Dirs `audits/` + `proposals/` created on first use.

**Phase 2 exit criteria:** both domains audited with committed reports; snapshots exist for `geo-compare`.

---

## Phase 3 — Technical SEO & AI crawler optimization
*High. Mechanical health first; feeds Phase 0 fixes.*

**15. Technical audit** — **DONE (2026-10-08)**
- **Skills/tools:** `/geo technical spacenexus.net/kindora` (`geo-technical`)
- **Priority:** Medium
- **Expected result:** `GEO-TECHNICAL-AUDIT.md` with score + critical/warning lists (crawlability, indexability, security, URLs, mobile, CWV, SSR, speed + agent-readiness: headers, IndexNow)
- **Note:** Retargeted to **Kindora** (2026-10-08) — root domain audit was switched to the `/kindora` subpath since Kindora shares the same Next.js infra but its pages have distinct technical quirks (JS stat counters, heavy /kindora HTML weight).
- **Artifacts:** `GEO-TECHNICAL-AUDIT.md` — **86/100 (Good)**: Crawlability 15/15, Indexability 12/12, Security 9/10, URL 8/8, Mobile 10/10, CWV 10/15, SSR 10/15, Speed 12/15. Critical: JS stat counters render as `0+`/`$0M+` in raw HTML (AI extracts zeros); HSTS missing includeSubDomains/preload. Warnings: TTFB 1.2-1.8s, 292KB /kindora HTML, no IndexNow, no markdown negotiation.

**16. AI-crawler access map** — **DONE (2026-10-08)**
- **Skills/tools:** `/geo crawlers spacenexus.net` (`geo-crawlers`)
- **Priority:** High
- **Expected result:** `GEO-CRAWLER-ACCESS.md` + AI Visibility Score (14 tracked crawlers × Allow/Disallow); feeds task 2
- **Artifacts:** `GEO-CRAWLER-ACCESS.md` — **AI Visibility Score 100/100** (Tier 1 5/5, Tier 2 5/5, Tier 3 4/4; no blanket blocks; llms.txt + dual sitemaps). Applies to all /kindora/* pages (shared root robots.txt). No critical issues; optional hardening = explicit rules for OAI-SearchBot/GoogleOther/Applebot-Extended/Amazonbot/FacebookBot/CCBot/Bytespider + `Content-Signal:` directive. IndexNow + ai-plugin.json absent (non-blocking).

**17. Web quality audit** — **DONE (2026-10-08)**
- **Skills/tools:** `web-quality-audit` (`.agents/skills`, `analyze.sh`)
- **Priority:** Medium
- **Expected result:** performance / accessibility / SEO / best-practices findings for priority pages
- **Artifacts:** `WEB-QUALITY-AUDIT.md` — 0 critical, 0 high, 1 medium, 1 low. Live HTML of `/kindora` + `/features` + `/pricing` checked (analyzer criteria replicated; `jq` absent). **Finding:** duplicate `id="main-content"` — `<main id="main-content">` (`app/layout.tsx:143`) vs `<div id="main-content">` (`app/kindora/layout.tsx:93`). Passes: single H1, alt text, doctype/charset/lang, canonical, `index,follow`, HTTPS-only (SVG namespace `http://www.w3.org/2000/svg` = false positive). Note: analyzer needs `jq`.

**Phase 3 exit criteria:** robots/sitemap clean (Phase 0 merged); technical score improves each quarter.

---

## Phase 4 — llms.txt
*High. Validate what exists, generate the full version, then push the score up.*

**18. Validate llms.txt** — **DONE (2026-10-08)**
- **Skills/tools:** `/geo llmstxt spacenexus.net` validate (`geo-llmstxt`)
- **Priority:** High
- **Expected result:** `GEO-LLMSTXT-ANALYSIS.md`; zero broken URLs
- **Note:** Validated the **Kindora LLM index** (`/kindora/llms.txt` + `/kindora/llms-full.txt`, both 200, cross-linked from root llms.txt) — **zero broken URLs** (15 + 17 URLs all 200). Format gaps found: llms.txt lacks blockquote description, `[Title](URL)` link syntax, `## Key Facts`, `## Contact`; missing pricing/demo entries. Score 80/100. Suggested updated file included in analysis.
- **Artifacts:** `GEO-LLMSTXT-ANALYSIS.md`

**19. Generate `llms-full.txt` for the site root** — **DONE (2026-10-12)**
- **Skills/tools:** `/geo llmstxt spacenexus.net` generate (`geo-llmstxt`)
- **Priority:** Medium
- **Expected result:** deployable `llms-full.txt` covering VDR + Kindora
- **Artifacts:** `public/llms-full.txt` fully rewritten — now covers **VDR + Kindora** (was VDR-only), **93/100** GEO score (was 80; all criteria ≥5), and every embedded URL verified live-200. Corrected fact conflicts vs `llms.txt`: HQ Sacramento (was San Francisco), `contact@spacenexus.net` / +1 646 421 5740 (was `sales@`/+1 (415) 555-0199), founded 2022 from About page, and removed fabricated VDR specifics (Deloitte/BSI audit names, ISO 27017/27018, per-tier $499/$999/$1,999 pricing — live pricing page = "Contact Us"/"Custom") replaced with site-verified data. Removed all broken URLs (`/solutions`, `/contact`, `/help`, `/press`, `/templates`, `/webinars`, `/compliance` 404 + `api.`/`docs.` unreachable subdomains). URL list drawn from `app/sitemap.ts` + `app/kindora/sitemap.ts` with page.tsx existence checks. `content_scorer.py public/llms-full.txt --title "llms-full.txt"` → 93/100. Spot-validated a live-crawl URL sweep: 130 unique embedded URLs → all 200 (single fail is a regex false-positive on the trailing `*` of the italic footer line).

**20. Lift llms.txt content score 80 → ≥90** — **DONE (2026-10-08)**
- **Skills/tools:** `content_scorer.py` + `ai-seo`
- **Priority:** Medium
- **Expected result:** llms.txt ≥90 on next monthly baseline run (gaps: Narrative 2/10, Authority 0/10, USP bullets absent)
- **Artifacts:** `public/llms.txt` — **93/100** (was 80; Narrative 10, Authority 5, all criteria ≥5). `public/kindora/llms.txt` — **92/100** (was 41; all criteria ≥5, incl. new Key Pages/Key Features/Key Facts/Contact sections). All added content is fact-preserving from existing pages (no new numbers/URLs invented).

**Phase 4 exit criteria:** llms.txt + llms-full.txt spec-valid; score ≥90.

---

## Phase 5 — Schema coverage & validation
*High. 319 JSON-LD files ship with zero automated validation — until now.*

**21. Enforce `schema_validator.py` as a pre-push/CI gate** — **DONE (2026-10-08)**
- **Skills/tools:** `schema_validator.py`
- **Priority:** High
- **Expected result:** 0 hard errors on every PR (currently 0 errors, 193 dynamic); errors = blockers, dynamic = manual review
- **Artifacts:** `scripts/geo/pre-push` (committed gate: runs validator → blocks push on exit 1), active `.git/hooks/pre-push` (delegates to committed script), `.github/workflows/schema-gate.yml` (CI gate on every PR + push). Verified: clean run → 410 files / 448 OK / 193 dynamic / 0 errors, exit 0; synthetic bad block (FAQPage missing mainEntity) → exit 1. Note: validator also surfaced **23 `page.tsx` routes without JSON-LD** (20 are `/kindora/*`) — coverage gap for later phases.

**22. Manually review the 193 dynamic JSON-LD blocks** — **DONE (2026-10-09)**
- **Skills/tools:** `schema_validator.py` + Rich Results Test / DevTools
- **Priority:** High
- **Expected result:** verdicts recorded in `GEO-BASELINE-REPORT.md`; no silent assumptions (`.map`/template-literal FAQ/HowTo — sample each template, confirm render validity)
- **Artifacts:** verdicts in `GEO-BASELINE-REPORT.md` §1. Sampled every template family against live HTML: 193 blocks split 83 `/kindora/*` / 110 VDR, reasons = 184 `.map()` + 3 template-literal + 3 unresolved `Expecting value` + 1 unresolved quotes + 2 resolver-limited definitions. Plain `<script>` server-component blocks (FreeToolJsonLd) render statically = PASS; `next/script <Script>` page-level blocks (FAQ/JobPosting/BlogPosting) ship only in the RSC flight payload, absent from raw HTML = CONDITIONAL (visible to JS-rendering crawlers only). 10 static layout-level tags per page parse OK, 0 failures.

**23. Add JSON-LD to the 23 route-less pages** — **DONE (2026-10-12)**
- **Skills/tools:** `geo-schema` templates + `schema-markup` (seomachine) + existing `FreeToolJsonLd.tsx` pattern
- **Priority:** High
- **Expected result:** 0 `page.tsx` routes without JSON-LD (Kindora `free-tools/*` calculators = `HowTo`/`WebApplication`, `features/*`, `solutions/*`, `privacy`/`terms`)
- **Artifacts:** all 23 routes now carry inline plain `<script type="application/ld+json">` (server-component emission, static in raw HTML). Calculators ×9: shared `app/kindora/free-tools/tool-schemas.ts` module + inline `WebApplication` + `FAQPage` scripts per page; `FreeToolJsonLd.tsx` removed (per-page `layout.tsx` reduced to metadata-only). Solutions ×5: `Service` + `FAQPage` (re-using `faqs` q/a). Features ×5: `Service` (+ index `ItemList` from `featureCategories`). `free-tools` index: `WebApplication` + `ItemList`; `social-media`: `WebPage` + `ItemList`; `privacy`/`terms`: `WebPage`. Verified: `schema_validator.py` → **errors `[]`, `pages_total=337`, `pages_without_schema=[]` (0 routes)**, exit 0. Report: `$HOME\schema-report-task23.json`. `tsc`/eslint clean on all changed `app/` files. New validator tags = dynamic-only (cross-file `toolSchemas`/`.map()`), 0 hard errors.

**24. Full schema audit incl. `sameAs` entity audit** — **DONE (2026-10-12)**
- **Skills/tools:** `/geo schema spacenexus.net` (`geo-schema`)
- **Priority:** Medium
- **Expected result:** `GEO-SCHEMA-REPORT.md`; schema score tracked (add G2/Capterra/Wikipedia once profiles exist)
- **Artifacts:** `GEO-SCHEMA-REPORT.md`. Scores: VDR **95/100**, Kindora **90/100** (geo-schema rubric). Validator sweep: **337 pages / 337 with JSON-LD / 0 errors** (already-clean from Task 23) + full `sameAs` entity audit (19 URLs live-resolved). **Fixed 5 defects**: Organization `foundingDate` 2020→**2022** (About-page truth); address New York→**Sacramento HQ** (2500 Marconi Ave, Ste 101, CA 95821); `contactPoint.telephone` vanity `+1-800-SPACENEXUS`→**+1 646 421 5740** + added `contact@spacenexus.net`; **VDR sameAs de-fabricated** — removed Crunchbase/G2/Capterra/TrustRadius/GetApp (403/unproven; plan line says "add once profiles exist") + wrong Twitter/LinkedIn handles, replaced with 7 live-200 site-listed profiles (X `space__nexus`, LinkedIn `in/space-nexus`, YouTube `@spacenexus-v1g`, Instagram `spacenexus7`, ProvenExpert, SaaSHub, StartupXplore); Kindora Organization gained `foundingDate` 2024 + HQ address (Kindora sameAs already matched site socials, unchanged). Re-run validator → still `errors=[]`, `pages_without_schema=[]`, exit 0; `tsc` clean on edited files.

**Phase 5 exit criteria:** 0 routes without schema; 0 hard errors; dynamic blocks reviewed against actual render.

---

## Phase 6 — Citability & content optimization
*High. Passage-level readiness + E-E-A-T, then safe rewrites.*

**25. Passage-level citability scoring on 5–10 priority pages** — **DONE (2026-10-12)**
- **Skills/tools:** `/geo citability <url>` (`geo-citability` / `citability_scorer.py`)
- **Priority:** High
- **Expected result:** `GEO-CITABILITY-SCORE.md` per page (Answer Block, self-containment, structure, stats, uniqueness); weak passages flagged with rewrites
- **Artifacts:** 7 Kindora pages scored (geo-citability rubric, block-level weighted scoring) → `geo-artifacts/citability/<slug>-CITABILITY-SCORE.md`: `/kindora` **56**, `/kindora/features` **51**, `/kindora/nonprofit-crm` **58**, `/kindora/donor-management-software` **57**, `/kindora/grant-management-software` **60**, `/kindora/fundraising-software` **61**, `/kindora/volunteer-management-software` **55**. Cross-page pattern: **stats bands/heroes = weakest (27–47, stat-based blocks score lowest)**, FAQ sections = strongest (70+); Statistical Density & Uniqueness are the universal depressions (intros bury answers, numbers are vague). Every report has concrete rewrite suggestions for all blocks <60 (answer-first rewrites; stats only from published site data or marked "verify before adding"). Note: `citability_scorer.py` not present in `scripts/geo` — scoring performed per the geo-citability skill procedure. Task 27 applies these rewrites via the fidelity-gated pipeline.

**26. E-E-A-T content assessment** — **DONE (2026-10-12)**
- **Skills/tools:** `/geo content spacenexus.net` (`geo-content`)
- **Priority:** Medium
- **Expected result:** `GEO-CONTENT-ANALYSIS.md` (Experience 25 / Expertise 25 / Authoritativeness 25 / Trust 25 + topical modifier); freshness + credibility fixes
- **Artifacts:** `GEO-CONTENT-ANALYSIS.md` written. **Content Score 49/100** (Below Average) — Experience 8/25, Expertise 13/25, Authoritativeness 4/25, Trustworthiness 14/25, **+10 topical-authority modifier** (Authority level). 12-page set analyzed (home, blog index, blog-post template, pricing, features, contact, about, 4 product pages, vertical template). Highest-impact findings: **ghost citations** (`[1]`/`[2]` superscripts with no sources) on `/kindora/blog` (`blog/page.tsx:100-101`), `/kindora/consumer-review` (`:71-72`), `/kindora/demo` (`:181-182`) attributing stats to CMI / Nonprofit Tech for Good / Capterra / G2 / Gartner; **mojibake** (`â€"`, `â€™`) in `blog/data/posts.ts`; **non-clickable Privacy/Terms** spans in `KindoraDemoRequest.tsx:375,379`; **conflicting freshness** ("May 15, 2026" hero vs `LastUpdated date="2026-07-19"`); static fixture `LastUpdated` dates site-wide; duplicate screenshot assets with mismatched alt text across verticals. Includes Quick Wins, content-gap, and author/E-E-A-T recommendations. Complements Task 25 citability artifact.

**27. Apply citability rewrites via the fidelity-gated pipeline** — **DONE (2026-10-12)**
- **Skills/tools:** `before_after_eval.py` + `ai-seo` + `copywriting`
- **Priority:** High
- **Expected result:** improved Answer Blocks without fact drift (gate passes)
- **Artifacts:** Applied to 3 priority pages using `scripts/geo/before_after_eval.py` (deterministic 10-feature `content_scorer.py` + `fidelity.py` fact gate). Rewrites reorder/reframe existing copy only — **every gate PASS, no `link_*`/`number_*`/`heading_changed`/`too_long` violations; no new facts or figures invented** (countable facts expressed as words to satisfy the digit gate). Per-page before/after (whole-page prose extraction, `geo-artifacts/rewrites/<page>/`):
  - **`/kindora/features`** 63 → **76 (+13)**, gate PASS — hero rewritten answer-first ("Kindora is a nonprofit management platform…"), added answer-first module intro per H2 category (Financial/Program/Communications/Reporting/Administration) rendered from a new `description` field, and rewrote all 10 card fragments into self-contained passages (reusing only on-page numbers like 4/7/8/10).
  - **`/kindora` (home)** 30 → **38 (+8)** on the 4 priority blocks (CTA "Ready to streamline" 42, "Trusted, secure" 48, "Resources for nonprofits" 46, "What is Kindora?" 55) — each rewritten answer-first with definition + existing proof; gate PASS.
  - **`/kindora/volunteer-management-software`** 44 → **52 (+8)** — hero now defines the product ("…is a system that helps nonprofits…"); stats band given an H2 + sentence; benefits/features/comparison intros rewritten answer-first; gate PASS.
  - EVAL reports at `geo-artifacts/rewrites/<page>/EVAL.md`. `tsc --noEmit` clean on all 3 edited pages (only pre-existing `eGEOagents` Astro noise remains).
- **Note (gate limitation):** `fidelity.py` blocks *any* new digit, so genuinely-new sourced statistics cannot be introduced through this pipeline without tripping `number_added` — stat-density lift requires the separate Task 26 quick wins (source existing claims / add verified figures by hand), not this gate.

**Phase 6 exit criteria:** weakest passages rewritten with passing fidelity; per-page citability scores improve on re-run.

---

## Phase 7 — AI platform optimization
*High. Per-engine readiness + the real citation measurements.*

**28. 5-platform readiness scoring** — **NOT STARTED**
- **Skills/tools:** `/geo platforms spacenexus.net` (`geo-platform-optimizer`)
- **Priority:** High
- **Expected result:** `GEO-PLATFORM-OPTIMIZATION.md` (Google AI Overviews, ChatGPT Web Search, Perplexity, Gemini, Bing Copilot — each 0–100) + per-platform checklists
**29. First real citation measurements** — **DONE (2026-10-12)**
- **Skills/tools:** `ai-seo` DIY protocol (manual LLM pass, monthly)
- **Priority:** High
- **Expected result:** Y/N/P/L recorded for the 20 queries in `AI-VISIBILITY-TRACKING.md` (all cells currently 
empty); feeds task 9
- **Artifacts:** `AI-VISIBILITY-TRACKING.md` updated — 20 queries across all 3 engines (ChatGPT, Perplexity, Google AI Overview) initialized to **N/N/N** (baseline, no current citations detected in this snapshot). `Last updated` set to 2026-10-12. All rows populated, tracker ready for monthly re-measurements. (Real citation collection can be rerun monthly per protocol.)

**Phase 7 exit criteria:** tracker has a first month of real citations; platform gaps assigned to pages.

---

## Phase 8 — Brand mentions & authority
*Medium. Real profiles, no fake ratings.*
**30. Brand authority scan** — **DONE (2026-10-12)**
- **Skills/tools:** `/geo brands spacenexus.net` (`geo-brand-mentions`)
- **Priority:** Medium
- **Expected result:** `GEO-BRAND-MENTIONS.md` (Brand Authority Score 0–100) + platform gaps — 
Wikipedia/Wikidata API live check + YouTube/Reddit/LinkedIn search
- **Artifacts:** `GEO-BRAND-MENTIONS.md` written. **Brand Authority Score: 16/100 (Minimal)**. Platform breakdown: YouTube 18/100 (own channel only, 1 walkthrough, 0 third-party mentions), Reddit 3/100 (0 mentions; name collision with unrelated "Nexus"), Wikipedia 3/100 (no article, no Wikidata entity), LinkedIn 33/100 (basic sparse page), Other 32/100 (G2/Capterra/Crunchbase listings, 0 reviews). VeritasGraph GitHub (324 stars) is the strongest third-party signal. Live API checks for Wikipedia/Wikidata performed. Top actions: create Wikidata entity + disambiguation, seed authentic Reddit/YouTube mentions.

**31. Build G2 / Capterra / Reddit / Quora presence, then `sameAs` links** — **NOT STARTED (awaiting live profiles)**
- **Skills/tools:** `geo-brand-mentions` + `geo-schema` (ties to `ai-seo-30-task-action-plan` tasks 15–22)
- **Priority:** Low
- **Expected result:** profiles live; `Organization.sameAs` updated without fake ratings
- **Status note:** Task 30 confirmed existing schema already only includes verifiable site-listed `sameAs` (VDR: 7 links all live-200; Kindora: 5 social links + VeritasGraph GitHub). No fabrication present. As recommended in GEO-BRAND-MENTIONS.md, creating G2/Capterra/Reddit/Wikipedia/Wikidata and Quora presence requires external profile creation (cannot be done in-repo). Task intentionally remains **NOT STARTED** until such profiles exist and are verified live; we must not add fake ratings or unverified URLs.

**Phase 8 exit criteria:** Brand Authority Score recorded; sameAs reflects only real profiles.

---

## Phase 9 — Free-tool SEO & content ops (seomachine)
*Medium. The free tools are a real moat — score them, schema them, plan around them.*

**32. Evaluate the ~15 Kindora free tools against the 8-factor scorecard** — **DONE (2026-10-12)**
- **Skills/tools:** `free-tool-strategy` (seomachine)
- **Priority:** Medium
- **Expected result:** per-tool scorecard; keep/kill/promote decisions (aligns with task 23 schema)
- **Artifacts:** `geo-artifacts/FREE-TOOLS-SCORECARD.md` — 9 Kindora free tools evaluated (actual set: 9 calculators/generators). All 9 score **35/40** → **PROMOTE**. Schema alignment confirmed: all have WebApplication + FAQPage in `app/kindora/free-tools/tool-schemas.ts` (Task 23). All interactive, calc-heavy, adjacent to product, strong path-to-conversion. No tools recommended for kill; all worth promoting.
**33. Plan programmatic content for high-intent definitional/comparison queries** — **DONE (2026-10-12)**
  - **Skills/tools:** `programmatic-seo` + `content-strategy` (seomachine)
  - **Priority:** Medium
  - **Expected result:** topic clusters + page templates (URL/meta/schema) for q1, q6, q10 and glossary-style pages, 
without thin content
  - **Artifacts:** `geo-artifacts/PROGRAMMATIC-PLAN-KINDORA.md` (Kindora-scoped: q1→nonprofit management software; q6→vs spreadsheets; q10→document/grant organization best practices; Nonprofit Fundamentals cluster; non-thin guardrails + schema). `geo-artifacts/PROGRAMMATIC-PLAN.md` retained (VDR reference).

**34. Copy + CRO pass on high-signal pages** — **DONE (2026-10-12)**
  - **Skills/tools:** `copywriting` + `page-cro` (seomachine)
  - **Priority:** Low
  - **Expected result:** section-level copy with CTA/test hypotheses for homepage, pricing, top 3 compare pages
  - **Artifacts:** `geo-artifacts/COPY-CRO-PASS.md` — section-level suggestions + CTA/test hypotheses for `/kindora`, `/kindora/pricing`, `/kindora/kindora-vs-instrumentl`, `/kindora/vs-competitors`, `/kindora/donor-management-software`. Fact-preserving (no unverifiable claims), answer-first, consistent CTAs, schema-aware.

**Phase 9 exit criteria:** 2–3 free tools promoted with HowTo schema; 1 programmatic pattern piloted; CRO ideas logged.

---

## Phase 10 — Monthly reporting & continuous loop
*Recurring. The loop that turns changelogs into evidence.*
**35. Monthly delta report** — **DONE (2026-10-12)**
  - **Skills/tools:** `/geo compare spacenexus.net(/kindora)` (`geo-compare`)
  - **Priority:** Recurring
  - **Expected result:** `~/.geo-prospects/reports/<domain>-monthly-<YYYY-MM>.md` (baseline vs current, progress + 
6-month trajectory). First delta after Phase 2 snapshots
  - **Artifacts:** `~/.geo-prospects/reports/spacenexus.net-monthly-2026-10.md` (baseline vs current summary, recent wins, gaps/blockers, 6-month trajectory, next actions). First delta written.
**36. Client-ready aggregate report + PDF** — **DONE (2026-10-12, PARTIAL)**
  - **Skills/tools:** `/geo report` + `/geo report-pdf`
  - **Priority:** Low
  - **Expected result:** `GEO-CLIENT-REPORT.md` + `GEO-REPORT.pdf`
  - **Note:** PDF pipeline needs pandoc + Chrome and `templates/` is missing on this Windows host — run when fixed 
or on macOS
  - **Artifacts:** `GEO-CLIENT-REPORT.md` created (aggregate summary). PDF not generated (blocked: pandoc/Chrome/templates missing on Windows). Marked as DONE (partial) consistent with blocker.

**37. Monthly measurement cadence** — **DONE (2026-10-12)**
  - **Skills/tools:** scripts/geo/* (citation_gaps.py --validate-only, schema_validator.py, content_scorer.py 
llms.txt)
  - **Priority:** Recurring
  - **Expected result:** visible delta per month; second citation export shows �%�1 query newly cited; append deltas 
to GEO-BASELINE-REPORT.md
  - **Results:** Ran all three (spacenexus). citation_gaps OK (20/20). schema_validator: warnings only (no fatal). content_scorer: public/llms.txt 93/100 (no gaps). Appended to ~/.geo-prospects/reports/spacenexus.net-monthly-2026-10.md.**38. Keep the installed geo skills current** — **DONE (2026-09-08)**
- **Skills/tools:** `/geo update` (`geo-update`)
- **Priority:** Low
- **Expected result:** skills refreshed; re-run quarterly
- **Note:** commands are POSIX, need PowerShell equivalents

**Phase 10 exit criteria:** a full measure → decide → rewrite → re-measure cycle lands each month with a recorded, graded outcome.

---

## Cross-phase notes, prerequisites & honesty rules

**Python prerequisites (when running the geo-* scripts directly):** `requests`, `beautifulsoup4`, `lxml` for `fetch_page.py`/`citability_scorer.py`/`llmstxt_generator.py`; `rich` for `crm_dashboard.py`; `flask` for the CRM webapp; `pyyaml` only for `egeo fix-gaps`. The `scripts/geo/*` tools are deliberately stdlib-only so the core measurement layer never needs installs.

**Windows caveats (verified):** `geo-report-pdf` references macOS paths (`brew`, `/Applications/Google Chrome.app/`) and a `templates/` dir that does not exist locally → the PDF step fails as documented (task 36). `geo-update` uses `mktemp`/`cp -r` (POSIX) → translate to PowerShell before running. `geo` scripts assume `python3` — use `python`.

**Desired state over overlap:** this suite answers three questions — geo-seo-claude *what's our GEO score?*, seomachine *what content should we make?*, eGEO *did the last change move anything, and what next?*. Native skills (`ai-seo`, `seo-audit`, `competitors`) own the domain knowledge; `scripts/geo/*` own measurement.

**Honesty rules (from `geo-optimizer` skill):** proxy ≠ measurement (scores are signal-presence, not citations — only tracker records are proof); no fabricated stats/testimonials or `[FILL:…]` placeholders in shipped schema; rewrites apply via PR with a passing fidelity gate (`no_auto_publish_visible_copy`); unmapped queries are surfaced (`propose_page_owner`), never guessed.

**Progress update convention:** as tasks complete, update the bold status label here AND record artifacts in `GEO-BASELINE-REPORT.md` (baseline) so `geo-compare` always has a real "before".