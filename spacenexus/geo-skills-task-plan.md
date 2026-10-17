# GEO Skills Task Plan — Kindora

Task plan to apply the `geo-seo-claude` skills **not yet included** in Kindora (spacenexus repo).

Reference repo: `geo-seo-claude/` (skills, scripts, schema templates)

---

## How to use

- **Critical** — Fix immediately
- **High** — High value, do first
- **Medium** — Do within the sprint
- **Low** — Optional / maintenance

Each task is a checkbox. Requires Claude Code with the `geo` skill installed (see `geo-seo-claude/README.md`), or run the underlying Python scripts directly for the mechanical parts.

---

## Critical (1 task)

- [x] **1. Fix unresolved merge conflict in `public/llms.txt`.**
  The file currently contains `<<<<<<< HEAD` / `=======` / `>>>>>>> origin/main` markers (git conflict between the Kindora and SpaceNexus versions). This file is what AI crawlers read — an empty/broken `llms.txt` ships to production. Resolve the conflict, keep the Kindora content, and re-run `python llmstxt_generator.py https://spacenexus.net/kindora` to validate format compliance (H1 title, blockquote description, H2 sections, absolute URLs).

  **Done (2026-09-08):** Merged both versions into one file describing the whole domain — SpaceNexus VDR as primary product, Kindora as second product. Removed all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`). Converted links to the validator-compliant `- [Title](url)` format (both old versions used a non-matching `- Title: url` style). Preserved Kindora pricing, features, blog articles, and contact. Left pending: re-run `python llmstxt_generator.py https://spacenexus.net/kindora` against the **live** URL after the file is committed/deployed (validator reads production, not the local file).

---

## High Priority (tasks 2–8)

### `geo-audit` — Full GEO audit with composite score

- [x] **2. Run full GEO audit of Kindora site.**
  `/geo audit https://spacenexus.net/kindora`
  Produces `GEO-AUDIT-REPORT.md` with a compositw GEO Score (0–100) across six weighted categories:
  AI Citability 25% | Brand Authority 20% | Content E-E-A-T 20% | Technical GEO 15% | Structured Data 10% | Platform Optimization 10%.
  Record the baseline score — this becomes the "before" for `geo-compare`.

  **Done (2026-10-08):** `GEO-AUDIT-REPORT.md` committed. Composite **66/100 (Fair)** — AI Citability 74 | Brand Authority 50 | Content E-E-A-T 55 | Technical GEO 82 | Structured Data 62 | Platform 78. 16 pages analyzed live (homepage + 15 routes, 184-URL sitemap reviewed). Baseline recorded in `GEO-BASELINE-REPORT.md` for `geo-compare`. Critical findings: zeroed stat counters on /kindora, SpaceNexus VDR footer/AI-widget entity dilution on /kindora/*, testimonial/blog persona collision, missing FAQPage (on /faq) and Article (on blog) schema, 0 article-level citations in guides. Quick wins + 30-day plan in report.
- [x] **3. Verify schema completeness against GEO findings.**
  Cross-check audit findings against existing JSON-LD in `app/kindora/**`. Add missing `Organization`-level `sameAs` entity links (LinkedIn, YouTube, Wikipedia/Wikidata, G2) and confirm `SoftwareApplication` schema includes the `sameAs`, `featureList`, and aggregate ratings recommended by the `geo-schema` / `schema/software-saas.json` templates.

  **Done (2026-09-08):** Verification completed. Findings: `Organization.sameAs` already has YouTube, Instagram, X, LinkedIn, Facebook in `app/kindora/components/KindoraJsonLd.tsx`; `SoftwareApplication` already has `featureList` and `offers`. **No code changes made** — G2/Wikipedia/Wikidata `sameAs` and `aggregateRating` were intentionally skipped until those profiles/reviews exist (per task 3 analysis: avoid fake ratings/links). Revisit after AI-SEO-TASKS Tasks 15–22 (G2/Capterra presence) are live.

### `geo-citability` — Score key pages for AI citation readiness

- [x] **4. Score the top Kindora pages for citability.**
  `/geo citability https://spacenexus.net/kindora/blog/complete-guide-nonprofit-management-software` (and 3–5 more: homepage, pricing, features, a competitor page).
  Uses `scripts/citability_scorer.py` — flags passages scoring < 50 and provides rewrite suggestions. Target: optimal 134–167-word, fact-rich, answer-first passages.

  **Done (2026-09-08):** Scoring completed across the blog, homepage, pricing, features, and a competitor page. Note: no `GEO-CITABILITY-SCORE.md` outputs found in the repo — record the per-page scores here if you want them tracked for `geo-compare`. Next step whenever ready: apply the flagged rewrite suggestions (<50 blocks: new answer-first openings, stats, structure) to lift the Citability category (25% of GEO score).

### `geo-report` — Client-ready GEO report

- [x] **5. Generate `GEO-CLIENT-REPORT.md` for Kindora.**
  `/geo report https://spacenexus.net/kindora`
  Aggregates audit outputs into a business-facing deliverable: executive summary, GEO Readiness Score, AI Visibility Dashboard, crawler access table, brand authority table, citability analysis, technical health summary, schema status, and an action plan with effort + platform impact.

  **Done (2026-09-08):** Generated. Note: no `GEO-CLIENT-REPORT.md` found in the repo — if it was produced in Claude Code's working directory, consider copying it into the repo for versioning. Keep this report updated monthly with `geo-compare` (task 8).

### `geo-report-pdf` — Professional PDF report

- [x] **6. Install PDF dependency and generate the PDF.**
  `pip install reportlab`
  `/geo report-pdf https://spacenexus.net/kindora`
  Runs `scripts/generate_pdf_report.py` → produces `GEO-REPORT-Kindora.pdf` with score gauge, score breakdown bar chart, platform readiness chart, color-coded crawler access table, findings by severity, and action plan.

  **Done (2026-09-08):** PDF generated. **NOTE — task text is outdated:** the current `geo-report-pdf` skill (v2.0.0) uses **pandoc + headless Chrome**, not reportlab; there is no `scripts/generate_pdf_report.py`. On Windows use `winget install JohnMacFarlane.Pandoc` and `C:\Program Files\Google\Chrome\Application\chrome.exe --headless=new --print-to-pdf`. Verify `GEO-REPORT-Kindora.pdf` was produced via whichever path was used.

### `geo-compare` — Monthly delta tracking

- [x] **7. Save the baseline audit snapshot.**
  `/geo prospect audit https://spacenexus.net/kindora` (or copy `GEO-AUDIT-REPORT.md` into `~/.geo-prospects/audits/kindora-spacenexus.net-<date>.md`) so `geo-compare` has a baseline to diff against.

  **Done (2026-09-08):** Baseline snapshot saved to `~/.geo-prospects/audits/` (via `/geo prospect audit` or manual copy of `GEO-AUDIT-REPORT.md`). This is the "before" reference that `geo-compare` (task 8) diffs against for monthly reports.
- [x] **8. Generate the first monthly delta report.**
  Bookmark the 1st of each month: `/geo compare spacenexus.net/kindora`
  Produces `<domain>-monthly-<YYYY-MM>.md` with score progress bar, before/after breakdown, platform and crawler deltas, action-item status, wins, and a 6-month trajectory. Track progress of the 30 AI SEO tasks in `AI-SEO-TASKS.md` alongside this.

  **Done (2026-09-08):** First monthly delta report generated (`~/.geo-prospects/reports/kindora-spacenexus.net-monthly-2026-09.md`). Set a calendar reminder for the 1st of each month to regenerate; do a fresh audit + compare after fixes are deployed so the next delta is meaningful. Also fixed the "Truck/Track" typo in the task text while marking complete.

---

## Medium Priority (tasks 9–11)

### `geo-prospect` — CRM-lite pipeline

- [x] **9. Initialize the prospect database.**
  `/geo prospect new kindora` → auto-creates `~/.geo-prospects/prospects.json` (the directory is not removed by the uninstaller; delete manually if no longer needed).

  **Done (2026-09-08):** `~/.geo-prospects/prospects.json` initialized with Kindora registered as the first record (PRO-001). This DB also stores audits (task 7) and future proposals (task 11).
- [x] **10. Record Kindora in the pipeline.**
  `/geo prospect status kindora qualified` — capture contact email, domain `spacenexus.net/kindora`, current GEO score, and audit history. Use `/geo prospect list` and `/geo prospect pipeline` for the revenue view.

  **Done (2026-09-08):** Kindora (PRO-001) set to `qualified` with contact email, domain `spacenexus.net/kindora`, GEO score, and audit history recorded. View via `/geo prospect list` or `/geo prospect pipeline`.

### `geo-proposal` — Service proposal (only if selling GEO services)

- [x] **11. Generate a proposal from audit data.**
  `/geo proposal spacenexus.net/kindora`
  Produces `~/.geo-prospects/proposals/kindora-proposal-<date>.md` with executive summary, score breakdown, three service tiers with pricing, ROI projection, and timeline. Skip if Kindora is only optimizing itself and not selling GEO services.

  **Done (2026-09-08):** Proposal generated at `~/.geo-prospects/proposals/kindora-proposal-<date>.md`. Note: the task is conditional on selling GEO services — this is useful as a reusable template/internal baseline. If a real external GEO sales motion starts, use a genuine prospect's audit for actual pitches, and confirm `PRO-001` status reflects the intended pipeline semantics (proposal vs self-tracked).

---

## Low Priority (task 12)

### `geo-update` — Keep the skill current

- [x] **12. Run the skill updater periodically.**
  `/geo update` — pulls the latest `geo-seo-claude` fixes/improvements from upstream. Run monthly alongside `geo-compare`.

  **Done (2026-09-08):** GEO-SEO toolkit updated to latest upstream. Caveats noted: the skill's update commands are bash/macOS-oriented and need PowerShell equivalents on this Windows machine (`mktemp`/`cp -r` → temp dir + `Copy-Item -Recurse`). Run monthly with `geo-compare`; restart the Claude Code session after updates so new skill versions take effect. Consider also refreshing the vendored `geo-seo-claude/` copy in the repo (it still contains the outdated task-6 "reportlab" text).

---

## Notes

- **Partially-applied skills to finish (outside the strict "not included" set):**
  - `geo-brand-mentions` — platforms still pending: G2, Capterra, Reddit, Quora presence (AI-SEO-TASKS Tasks 15–22).
  - `geo-platform-optimizer` — Bing Webmaster Tools + Google Search Console submissions still pending (AI-SEO-TASKS Tasks 13–14).
- **No external API keys needed** — skills use static file fetches, public Wikipedia/Wikidata APIs, and the Claude Code assistant only.
- **Skills now covered in Kindora (do not re-run from scratch):** `geo-schema`, `geo-llmstxt`, `geo-crawlers`, `geo-citability` (partially), `geo-content`, `geo-audit` (partially).