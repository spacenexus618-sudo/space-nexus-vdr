# SEO/Content Skills Task Plan — Kindora

Task plan to apply the available SEO, GEO, content, technical, and CRO skills to Kindora
(`app/kindora/**`, spacenexus repo), formatted like the `geo-skills-task-plan.md`.

Reference docs: `kindora-skills-action-plan.md` (project root), `seomachine/kindora-performance-tasks.md`,
`seomachine/` (skills, commands, agents).

---

## How to use

- **Critical** — Fix immediately
- **High** — High value, do first
- **Medium** — Do within the sprint
- **Low** — Optional / maintenance

Each task is a checkbox. Tasks are verified against the Kindora repo (2026-09-10) and map 1:1 to
`seomachine/kindora-performance-tasks.md`. The mechanical parts can run via the seomachine Python
modules (`content-analyzer`, `seo_quality_rater`) or the GEO/`ai-seo` skills installed in Claude Code.

---

## High Priority (tasks 1–7)

### `analytics-tracking` — Measure everything

- [ ] **1. Install GA4 + conversion events.**
  Add the GA4 snippet to `app/kindora/layout.tsx` and fire events on: demo-request submit (`KindoraDemoRequest.tsx`), first calculation on any free-tool page, clicks on external `cad.spaceaiapp.com` CTAs, and newsletter subscribe. Today `app/kindora` has **zero analytics** — no baseline, no conversion data.
  **Benefit:** Unblocks all measurement-dependent work (`/priorities`, `performance-review`, A/B tests, CRO verdicts below). **Success:** events visible in GA4 DebugView within 48h + `createDemoRequest` conversion goal defined.

### `schema-markup` — Missing metadata & structured data (9 pages + pricing)

- [ ] **2. Free-tool pages: metadata, canonical, OG.**
  All 9 `app/kindora/free-tools/*/page.tsx` are `"use client"` and export **no metadata/canonical/OG** — they render only the layout-default `<title>`. Wrap each calculator in a server component exporting `generateMetadata` (unique title, description, canonical `/kindora/free-tools/<slug>`, OG/Twitter) with the widget kept as a client child.
  **Benefit:** these URLs become rankable for "donor retention calculator", "indirect cost allocator", etc. **Success:** each of the 9 URLs returns a unique `<title>` + description + canonical; Rich Results check passes.

- [ ] **3. Free-tool pages: JSON-LD (WebApplication + FAQPage).**
  In the same wrapper, emit `WebApplication` (offers: free, applicationCategory, url) + `FAQPage` with 3–4 tool-specific Q&As whose answers match rendered text.
  **Benefit:** rich-result eligibility and stronger AI/entity signals for "nonprofit X calculator" queries. **Success:** Rich Results Test passes; FAQ text parity confirmed.

- [ ] **4. Pricing page: metadata + Offer/FAQ schema.**
  `app/kindora/pricing/page.tsx` is `"use client"` with no metadata. Convert to a server wrapper + client widget exporting title ("Kindora Pricing — Free & Nonprofit-Friendly Plans"), description, canonical; add `Product`/`Offer` JSON-LD per tier (Starter $0, Professional/Enterprise custom) and a 3–4 item `FAQPage` (free forever? setup time? nonprofit discount?).
  **Benefit:** pricing is high-intent; gains SERP rich results and AI clarity. **Success:** structured-data price matches page copy; unique metadata present.

### `seo-audit` — Indexation completeness

- [ ] **5. Add missing live pages to the sitemap.**
  `app/kindora/sitemap.ts` omits live routes — at minimum `donor-management`, `grant-management`, `volunteer-management`, `nonprofit-financials`. Audit every `page.tsx` under `app/kindora` for full coverage.
  **Benefit:** closes indexation gaps for pages currently relying on crawl discovery alone. **Success:** every route dir appears exactly once in the generated sitemap.

### `competitor-alternatives`/`seo-audit` — Stop self-competition

- [ ] **6. De-duplicate competitor/alternative pages.**
  Multiple Kindora pages target the same competitor query: Bloomerang ×3, Bonterra ×3, Salesforce ×3, DonorPerfect ×2, DonorDock ×2, Neon One ×2, Little Green Light ×2, Network for Good ×2 (in `kindora-vs-*`, `*-alternative`, `why-kindora-over-*`, `better-alternative-to-*`). Keep one primary URL per competitor per intent, differentiate angles/CTAs, merge duplicates with 301 + self-referencing canonicals.
  **Benefit:** concentrates authority and conversion paths instead of dividing them. **Success:** no two indexed pages target the same primary competitor keyword; 301s correct; no co-ranking in GSC.

### `web-quality-audit` — Core Web Vitals

- [ ] **7. Lighthouse/CWV audit + fixes on top 10 pages.**
  Run the `web-quality-audit` skill on Home, pricing, demo, blog index, a blog post, one feature, one programmatic, one free-tool, contact, about; fix top findings in `app/kindora` (lazy-load below-fold images, reserve space for hero blur elements to prevent CLS, reduce hydration on calculator pages).
  **Benefit:** CWV is a ranking and AI-crawl factor; faster tools = more conversions. **Success:** LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms on all 10 URLs; Lighthouse Performance ≥ 90.

---

## Medium Priority (tasks 8–20)

### `schema-markup` — Content markup & social previews

- [ ] **8. Enrich BlogPosting schema + per-post OG images.**
  Extend the existing `BlogPosting` in `app/kindora/blog/[slug]/page.tsx` with `image`, `dateModified` (new field in `blog/data/posts.ts`), `wordCount`, `inLanguage`, `articleSection` (= category), `author.url`; add a per-post OG image and reference it in `blog/[slug]/layout.tsx`.
  **Benefit:** richer article rich results and entity graph for AI citation. **Success:** JSON-LD validates with ≥6 new props; OG renders on a sampled post.

- [ ] **9. Real 1200×630 OG image site-wide.**
  `app/kindora/layout.tsx` serves the 512×512 transparent logo upscaled to 1200×630 for every share. Create `public/kindora-og.png` (branded, 1200×630) and reference it in layout + sub-page OG blocks.
  **Benefit:** correct social/chat previews lift share CTR. **Success:** asset is true 1200×630; LinkedIn/Facebook debugger shows full-size preview.

### `seo-audit` — Sitemap hygiene

- [ ] **10. Per-page `lastModified` instead of `currentDate`.**
  `sitemap.ts` stamps today's date on all 300+ URLs. Maintain real per-page dates (reuse `posts.ts.publishedAt` and `LastUpdated` data); omit `lastmod` when unknown.
  **Benefit:** honest freshness signals; avoids crawl-budget waste. **Success:** distinct/absent `lastmod`; no false today-stamps.

### internal linking / `content-strategy` — Clusters & links

- [ ] **11. Make blog category filters real links.**
  The category pills in `app/kindora/blog/page.tsx` are non-functional `<span>`s with `cursor-pointer`. Convert to `<Link href="/kindora/blog?category=<cat>">` and implement `searchParams` filtering.
  **Benefit:** working UX + a11y, plus per-category URLs that can target cluster keywords. **Success:** pills filter the grid, update the URL, and are keyboard-focusable links.

- [ ] **12. Add contextual in-body internal links to blog posts.**
  `blog/data/posts.ts` content currently has zero `/kindora/blog/` cross-links. Add 1–3 natural links per post (sibling posts, `features/*`, `free-tools/*`, product pages) via a new optional `relatedLinks` field, guided by the internal-links-map.
  **Benefit:** authority distribution and topical relevance — a top SEO/GEO lever. **Success:** ≥60% of posts have ≥2 distinct internal links; no self-links.

- [ ] **13. Cross-link free tools ↔ features and siblings.**
  Each tool page links only back to `free-tools` + one demo CTA. Add a "Related tools" block (2–3 siblings) and a "How Kindora helps with X" section linking to `features/*` and blog posts.
  **Benefit:** turns the tool cluster into a linked asset web with more paths to demo. **Success:** each tool has ≥3 internal links, click-tracked via GA4 (task 1).

### `seo-audit`/`programmatic-seo` — Near-duplicate routes

- [ ] **14. Merge near-duplicate feature/solution routes.**
  Consolidate `features/financial-management` vs `features/financials`; `solutions/program-management-software` vs `/program-management-software`; `solutions/program-outcome-tracking` vs `/program-outcome-tracking`. Keep the higher-intent URL, 301/canonical the loser, update sitemap + internal links.
  **Benefit:** removes top cannibalization risks and cleans topic mapping. **Success:** one URL per topic survives; old URLs 301/canonicalize.

### `web-quality-audit` — Accessibility

- [ ] **15. A11y pass on interactive controls.**
  Fix non-semantic interactive elements (`blog` pills), visible `:focus-visible` indicators, programmatic labels in `KindoraDemoRequest.tsx`, and AA-contrast state colors (red/green numbers on dark free-tool pages).
  **Benefit:** WCAG AA; measured by Google and many nonprofit procurement checklists. **Success:** Lighthouse Accessibility ≥ 95; axe shows 0 critical violations on the 10 URLs.

### `form-cro` — Demo conversion

- [ ] **16. Demo form friction reduction.**
  `app/kindora/components/KindoraDemoRequest.tsx` has 7 fields. Collapse to the 4 required, add inline trust ("No credit card · Response within 24h") + a demo value anchor; optional fields behind progressive disclosure.
  **Benefit:** higher completion; measurable once GA4 (task 1) ships. **Success:** submit-rate vs visitors trends up over 2 weeks.

### `page-cro` — Pricing conversion

- [ ] **17. Pricing page CRO pass.**
  Above-fold tier clarity, price anchor for "Professional — Custom" (align with "from $49/mo" offer in schema), feature comparison table, reinforced CTAs.
  **Benefit:** higher signup intent on the most commercially valuable page. **Success:** price anchor above fold; CTA click events firing (task 1).

### `ai-seo`/`geo-llmstxt` — AI visibility

- [ ] **18. Add free-tool entries to `public/llms.txt`.**
  The file (recently merged, see GEO task 1) has **no free-tool URLs**. Append the 9 tools + free-tools index in the existing `- [Title](url)` format.
  **Benefit:** calculator URLs are ideal AI-citation assets — currently invisible via llms.txt. **Success:** live file shows 9 tool entries; curl-valid; syntax matches.

- [ ] **19. Answer-first FAQ passages on top programmatic pages.**
  On the top 10 programmatic pages' `faqs` arrays (e.g. `best-crm-for-nonprofits`), ensure each accepted answer is a self-contained 134–167-word passage matching the rendered text (schema/content parity); add FAQs where arrays are absent.
  **Benefit:** creates citable blocks for AI search engines — the main lever for "best nonprofit CRM" AI answers. **Success:** ≥60% of answers self-contained; `geo-citability` +20 on sampled pages.

### `content-analyzer` (seomachine agent) — Content depth

- [ ] **20. Programmatic page depth/readability audit.**
  Run the Content Analyzer pipeline (`search_intent_analyzer` → `keyword_analyzer` → `readability_scorer` → `seo_quality_rater`) on a sample of 20 of the 150+ programmatic `page.tsx` files; fix thin copy (<600 words), keyword-stuffed metas, missing comparison depth, intent mismatches.
  **Benefit:** moves the long tail out of "thin/duplicate" territory — the penalty Google targets in mass-page sites. **Success:** ≤3 sampled pages below the 600-word floor; `seo_quality_rater` ≥ 70 on fixed pages.

---

## Low Priority

None yet — the task set above covers all verified findings. Future candidates from `kindora-skills-action-plan.md`
(once prerequisites exist): `ab-test-setup` (needs GA4), in-product CRO skills (needs product analytics),
`email-sequence`/`social-content` (needs channel tools).

---

## Notes

- **Requires external credentials (only for follow-ups):** GA4/GSC service account + DataForSEO for `analytics-tracking` measurement, `/priorities`, `performance-review`, and `research-*` commands. All code edits (tasks 2–17, 19–20) need no API keys.
- **Already-completed items (do not re-run from scratch):** `public/llms.txt` merge/format fix (GEO task 1), schema verification of `KindoraJsonLd.tsx` (GEO task 3), GEO citability/audit baseline captures.
- **Skills fully applicable to the Kindora repo:** `schema-markup`, `seo-audit`, `web-quality-audit`, `competitor-alternatives`/`competitors`, `content-strategy`, `free-tool-strategy`, `form-cro`, `page-cro`, `ai-seo`, seomachine `content-analyzer`/`internal-linker` agents.
- **Where outputs go:** tasks reference the seomachine pipeline for agent/Python analysis; mark each checkbox with a `**Done (YYYY-MM-DD):**` note like the GEO plan when implemented, and update `seomachine/kindora-performance-tasks.md` accordingly.