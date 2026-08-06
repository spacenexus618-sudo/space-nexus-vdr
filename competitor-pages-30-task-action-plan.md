# Competitor Pages — 30-Task Action Plan

> **RECREATED Aug 5, 2026.** The original file was deleted from disk (not in git history) and has been rebuilt from session records. Task titles/statuses reflect the work actually performed; entries marked "reconstructed" are best-effort restorations.

Site: https://spacenexus.net/kindora
Type: Competitor comparison pages (vs pages, alternative pages, plural roundups)

---

## Phase 1: Research & Data (Tasks 1–6)

> **Goal**: Build a verified research foundation so every claim on the pages is accurate and sourced.

### Task 1 — Create competitor data files
Create per-competitor data files (Blomerang, Bonterra, DonorPerfect, DonorDock, Little Green Light, Neon One, Network for Good, Salesforce NPC) capturing features, pricing, target market, strengths, weaknesses, and positioning.

> **STATUS: DONE** — `competitor_data/` created. NOTE: directory now empty on disk (deleted); must be rebuilt.

### Task 2 — Add product-marketing context
Document Kindora's own positioning, honest weaknesses, and unverified claims (`[TODO/unverified]`) so pages never overclaim.

> **STATUS: DONE** — `.agents/product-marketing.md` (also deleted; needs rebuild). Kindora facts: Starter free (≤5 members), Professional/Enterprise = "Custom" `[TODO/unverified]`, "setup in 30 minutes". Paid-tier prices, migration support unverified — never invent numbers.

### Task 3 — (reconstructed) Research competitor feature matrices
Gather feature-level detail for the comparison tables on each vs page.

> **STATUS: DONE** — feature matrices live in each `kindora-vs-*` page.

### Task 4 — Verify pricing figures against current research
Pull current (2026) pricing from vendor sites; stamp verified figures.

> **STATUS: DONE** — `competitor_data/verified-pricing-2026.md` (deleted; needs rebuild). Verified 2026 figures:
> - Salesforce NPC: $60/$100/$325 per user/mo + Power of Us (10 free Enterprise licenses)
> - DonorPerfect: tiered ~$99–$119 Core / $199 Plus / $499–$649 Pro (NOT per-user)
> - Neon One: $99 Essentials / ~$199 Impact / ~$399 Empower + modular add-ons (+10%/+20%)
> - Bloomerang: ~$79–$125/mo
> - Little Green Light: $45–$135/mo, unlimited users
> - DonorDock: $500/mo + $3,800 onboarding
> - Bonterra Apricot, Network for Good: custom quote

### Task 5 — Keyword priority research
Rank target keywords by search volume to prioritize which pages/columns appear where.

> **STATUS: DONE** — `competitor_data/keyword-priority.md` (deleted; needs rebuild). Drives Task 24 column selection and footer ordering.

### Task 6 — (reconstructed) Migration notes per competitor
Capture switch-from-X migration considerations (data export, import paths).

> **STATUS: DONE** — migration notes summarized in `competitor_data/migration-notes-summary.md` (deleted; needs rebuild). NOTE: Kindora migration support remains unverified — do not claim specifics.

---

## Phase 2: Content (Tasks 7–20)

> **Goal**: Build and polish the pages.

### Task 7 — Review mining
Mine review sites for the real complaints/praise about each competitor to ground the pages.

> **STATUS: UNRESOLVED** — no user decision received. Recommend skip (Task 11 accuracy pass covers the substance).

### Task 8 — (partial) Audit existing alternative pages
Review the 8 singular alternative pages for accuracy and coverage.

> **STATUS: PARTIAL** — accuracy fixes rolled into Task 11.

### Task 9 — Migration notes content (reconstructed)
Add migration guidance content to pages.

> **STATUS: SKIPPED** — migration support unverified; would require inventing claims.

### Task 10 — Comparison matrix
Build a unified head-to-head feature matrix across all competitors.

> **STATUS: UNRESOLVED** — no user decision received. Recommend skip (per-page tables already cover it).

### Task 11 — Accuracy fixes sweep
Remove stale/inaccurate claims (outdated Salesforce $60/$150/quote pricing, etc.) across all 6 affected pages and sweep others.

> **STATUS: DONE** — fixed `kindora-vs-salesforce-nonprofit-cloud`, `kindora-vs-donorperfect`, `kindora-vs-neon-one`, `salesforce-nonprofit-cloud-alternative`, `donorperfect-alternative`, `neon-one-alternative`; later sweep fixed `salesforce-crm-for-nonprofits` and `constituent-relationship-management`. All stale `$60–$150|$10K–$50K|quote-based|per-user` claims eliminated (grep-verified).

### Task 12 — Create missing singular alternative pages
> **STATUS: SKIPPED** — all 8 singular alternative pages already exist; Task 11 handled accuracy.

### Task 13 — Create plural alternative roundups
Build "Best X Alternatives" pages (top competitors by search volume).

> **STATUS: DONE — PAGES DELETED, MUST REBUILD.** Created `best-salesforce-alternatives`, `best-bloomerang-alternatives`, `best-donorperfect-alternatives`. Format: hero → pain points → criteria → 6–7 alternatives (Kindora first, honest) → comparison table → recommendations → FAQ (SoftwareApplication + FAQPage JSON-LD) → CTA; pricing stamped "verified August 2026". The 3 page.tsx files are now missing from disk.

### Task 14 — Create competitor-vs-competitor pages (A vs B)
> **STATUS: SKIPPED** (marked in plan). No "Bloomerang vs DonorPerfect"-style pages built.

### Task 15 — Create alternatives index
> **STATUS: DONE — PAGE DELETED, MUST REBUILD.** `/kindora/alternatives` hub with 8 singular + 3 plural cards, "Common reasons nonprofits move to Kindora", CollectionPage JSON-LD, sticky jump-nav. page.tsx now missing from disk.

### Task 16 — (reconstructed) Alternatives hub content
> **STATUS: SKIPPED** — redundant with existing `vs-competitors` page.

### Task 17 — Descriptive table cells
Ensure comparison tables use descriptive `{ value, positive }` cells, not bare ✓/✗.

> **STATUS: SKIPPED** — already satisfied; all pages use `{ value, positive }`.

### Task 18 — TL;DR / summary blocks
> **STATUS: SKIPPED** — heroes already serve as de-facto TL;DR.

### Task 19 — Pricing totals / cost framing
> **STATUS: SKIPPED** — blocked by unverified Kindora paid pricing; qualitative cost framing already exists.

### Task 20 — "Best for" sections
> **STATUS: SKIPPED** — "best for" honesty sections already on all 16+ pages.

---

## Phase 3: Structure & SEO (Tasks 21–26)

> **Goal**: Make the pages rank and get discovered.

### Task 21 — Add FAQ sections with schema markup
Add 3–8 FAQ items per page using natural query phrasing (e.g., "What is the best alternative to Bloomerang?"). Implement JSON-LD `FAQPage` schema on all comparison/alternative pages.

> **STATUS: DONE — already satisfied** (confirmed Aug 1, 2026). All comparison/alternative pages already ship `"@type": "FAQPage"` JSON-LD with 4–7 natural-phrase questions: all 8 `kindora-vs-*` pages, all 8 `*-alternative` pages, `vs-competitors`, and the 3 new plural pages. FAQ answers were included in the Task 11 accuracy sweep. No changes needed. NOTE: recreated plural pages must re-add this.

### Task 22 — Audit meta tags & headings
Ensure every page has a unique title (50–60 chars) and meta description (150–160 chars) targeting its primary keyword, one `<h1>`, and a logical `h1 → h2 → h3` hierarchy. Include the target keyword format from the skill table.

> **STATUS: OPEN** — not yet run. One-pass grep/audit of all comparison page titles/descriptions/headings; fix only failures.

### Task 23 — Wire internal linking across the cluster
Link index → individual pages and pages → index. Cross-link between related comparisons (e.g., Bloomerang alternative ↔ Kindora vs Bloomerang). Link from feature pages to relevant comparisons.

> **STATUS: DONE** (Aug 1, 2026) — scoped per recommendation (full feature-page linking deferred). Completed: (1) `/kindora/alternatives` index links all 8 singular + 3 plural pages (Task 15); (2) each of the 3 plural pages links to its matching alternative page, vs page, and the index; (3) `bloomerang-alternative` + `salesforce-nonprofit-cloud-alternative` + `kindora-vs-bloomerang` + `kindora-vs-donorperfect` + `kindora-vs-salesforce-nonprofit-cloud` gained "Related Comparisons" cross-link blocks (alt ↔ vs ↔ plural ↔ index); (4) `vs-competitors` hub links to the index + all 3 plural pages; (5) fixed 2 broken links on `donorperfect-alternative` (`kindora-vs-salesforce`, `kindora-vs-blackbaud` → real pages) and added plural/index links there. Footer already covers all pages. Note: "A vs B" cross-links (e.g., Bloomerang vs DonorPerfect) don't exist since Task 14 was skipped. `npx tsc --noEmit` clean; all new hrefs verified to resolve. NOTE: recreated pages must re-wire these links.

### Task 24 — Add competitor footer columns
Add footer columns for the formats actually built: "Kindora vs" (top 8 by search volume), "Alternatives to" (top 8), and "Compare" (head-to-head). Add "View all" links to the index pages. Cap each column at 8 links.

> **STATUS: DONE** (Aug 5, 2026) — Added two rendered footer columns to `KindoraFooter.tsx`: "Kindora vs" (8 links, View All → `/kindora/vs-competitors`) and "Alternatives to" (8 links, View All → `/kindora/alternatives`). Replaced the previously dead `compare` array with `vs` + `alternativesTo` arrays. All 18 links verified to exist; `npx tsc --noEmit` clean.

### Task 25 — Implement rating & review schema
Add `AggregateRating` and `Organization` schema where reviews/social proof appear. Consider `Product` schema on comparison pages with "best for" use-case data.

> **STATUS: RECOMMEND SKIP (do not add)** — Organization/Product/SoftwareApplication schema already present. Existing AggregateRating values are fabricated (`best-donor-management-software` 4.9/220; `consumer-review` invented personas + "Real reviews from real organizations"). Google forbids self-serving/unsupported ratings. Correct action = REMOVE fabricated rating markup (see Task 27), not add more.

### Task 26 — Verify canonical URLs & robots coverage
Ensure every comparison page has a canonical URL pointing to its preferred version, and that `robots.txt`/sitemap covers all competitor pages. Submit new pages in Google Search Console and Bing Webmaster Tools.

> **STATUS: DONE (code side, Aug 5, 2026)** — canonicals already present on all pages ✅. Sitemap: added `indexAndRoundupPages` array (4 recreated routes, priority 0.9) spliced into `allPages` in `app/kindora/sitemap.ts` ✅. robots.txt: added `Sitemap: https://spacenexus.net/kindora/sitemap.xml` to `public/robots.txt` ✅. GSC/Bing submission: still manual — requires user credentials.

---

## Phase 4: QA, AI-SEO & Review (Tasks 27–29)

> **Goal**: Verify quality, correctness, and AI-answer readiness.

### Task 27 — Fact-check all claims against sources
Review every page for accurate, non-misleading claims. Verify each feature rating and pricing figure against the current research (Task 4). Remove or soften any claim that cannot be sourced. Flag nothing as "the best" without evidence.

> **STATUS: DONE** (Aug 5, 2026) — Removed all fabricated `AggregateRating` schema (best-donor-management-software 4.9/220, best-nonprofit-crm 4.9/250, donor-database-for-nonprofits 4.9/190, small-nonprofit-crm 4.9/180, consumer-review 4.8/150). Removed invented review personas from consumer-review (now computes `avgRating` from the in-page reviews array) and softened its "Real reviews from real organizations" claim. Softened "the best" / "#1 Rated" / "Top Rated" / "4.9/5" / "10K+ users" / "124.8K raised" / "trusted by thousands" claims across best-crm-for-nonprofits, best-crm-for-small-nonprofits, best-nonprofit-crm, best-donor-management-software, best-fundraising-software, small-nonprofit-crm, donor-database-for-nonprofits (badges, stats, FAQ questions, metadata, OG/twitter descriptions). `grep` confirms zero remaining `aggregateRating|ratingValue|ratingCount|reviewCount`. `npx tsc --noEmit` clean; all 13 edited pages return HTTP 200.

### Task 28 — AI-SEO extractability pass
Ensure pages are AI-citation friendly: self-contained first paragraphs, direct-answer definition blocks, structured tables, FAQ sections, statistics with named sources, and visible last-updated dates. Follow the citations-vs-recommendations guidance for plural alternatives pages.

> **STATUS: MOSTLY SATISFIED.** FAQ + JSON-LD + tables already exist. Visible last-updated dates are already present site-wide via the `<LastUpdated date="2026-07-19" />` component on all 8 vs pages, all 8 alternative pages, and feature pages (grep-verified Aug 5, 2026). Remaining: recreated plural pages/index must include the `LastUpdated` component — DONE Aug 5, 2026 (recreated pages use `<LastUpdated date="2026-08-05" />`); attribute any statistics to named sources. Recommend: fold remaining bits into Task 27/29.

### Task 29 — Full QA review of the page set
Run a review covering: broken links (internal + external), mobile layout (comparison tables scroll properly), consistent styling across all pages, accurate "last updated" dates, and honest tone. Fix all issues before deployment.

> **STATUS: OPEN** — run after Tasks 26–28.

---

## Phase 5: Final (Task 30)

### Task 30 — (reconstructed) Deployment & monitoring handoff
Verify the rebuilt pages render (dev server HTTP 200), sitemap regenerates, and no build errors (`npx tsc --noEmit`). Submit recreated pages to Google Search Console / Bing Webmaster Tools and set a monitoring cadence.

> **STATUS: OPEN** — original task 30 text lost; reconstructed from phase structure.

---

## Current Status Summary (Aug 5, 2026)

- **DONE:** 1–6, 8 (partial), 11, 13*, 15*, 21, 23*  (* = deliverables deleted, must rebuild)
- **SKIPPED:** 9, 12, 14, 16, 17, 18, 19, 20
- **UNRESOLVED:** 7, 10 (recommend skip)
- **OPEN:** 22, 24, 25 (recommend skip → cleanup instead), 26, 27, 28, 29, 30
