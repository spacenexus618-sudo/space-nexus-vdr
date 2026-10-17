# Kindora Performance Tasks

**File:** `seomachine/kindora-performance-tasks.md`
**Status:** Plan only — no Kindora code has been changed yet.
**Base:** `kindora-skills-action-plan.md` (project root)

This is a verified, directly-implementable task list for the Kindora site (`app/kindora/**`).
Every finding below was confirmed against the repository on 2026-09-10. Completed work
(e.g. the `public/llms.txt` merge) is excluded.

---

## Verified current state

| # | Finding | Evidence |
|---|---------|----------|
| 1 | 9 free-tool pages + `pricing` have **no metadata/canonical/schema** | 11 page files without `metadata`/`generateMetadata`; all `"use client"` |
| 2 | **No GA4/analytics** anywhere in `app/kindora` | 0 matches for analytics identifiers in all `.ts/.tsx` files |
| 3 | `public/llms.txt` has **no free-tools entries** | no `free-tools` URLs in file |
| 4 | Sitemap missing live pages; all `lastModified` = today | `donor-management`, `grant-management`, `volunteer-management`, `nonprofit-financials` absent; `currentDate` used for every URL |
| 5 | Duplicate/self-competing competitor pages | Bloomerang ×3, Bonterra ×3, Salesforce ×3, DonorPerfect ×2, DonorDock ×2, Neon One ×2, Little Green Light ×2, Network for Good ×2 |
| 6 | Blog category pills are non-functional `<span>`s | `blog/page.tsx` — no `href`, no filter behavior |
| 7 | Site-wide OG image is a 512×512 logo served as 1200×630 | `layout.tsx` references `icononly_transparent_nobuffer.png` |
| 8 | Blog posts have no in-body internal links | 0 `/kindora/blog/` cross-links in `posts.ts` content |

---

## A. Metadata & Structured Data

### A1 — Free-tool pages: metadata, canonical, OG
- **Skill used:** `schema-markup`, `seo-audit`
- **Files:** `app/kindora/free-tools/{chart-of-accounts-generator, donation-receipt-generator, donor-retention-calculator, grant-readiness-scorecard, impact-matrix-builder, indirect-cost-allocator, nonprofit-kpi-calculator, nonprofit-software-roi-calculator, volunteer-time-value-calculator}/page.tsx`
- **Change:** Wrap each client calculator in a server component exporting `generateMetadata` (unique title, description, canonical `/kindora/free-tools/<slug>`, OG/Twitter). Keep the interactive widget as a child client component.
- **Benefit:** These 9 URLs currently inherit only the layout default `<title>` — they cannot rank for their target queries ("donor retention calculator", "indirect cost allocator") or show canonical/OG.
- **Priority:** High
- **Success:** Each of the 9 URLs returns a unique `<title>` + `<meta name="description">` + canonical; Rich Results check passes.

### A2 — Free-tool pages: JSON-LD (WebApplication + FAQPage)
- **Skill used:** `schema-markup`
- **Files:** Same 9 files as A1 (shared wrapper component)
- **Change:** Emit `WebApplication` + `FAQPage` JSON-LD (3–4 tool-specific Q&As) in the wrapper.
- **Benefit:** Rich-result eligibility for "nonprofit X calculator" queries; stronger entity/AI-citation signals.
- **Priority:** High
- **Success:** Rich Results Test passes; FAQ text in JSON-LD matches rendered page.

### A3 — Pricing: metadata + Offer/FAQ schema
- **Skill used:** `schema-markup`, `seo-audit`
- **Files:** `app/kindora/pricing/page.tsx`
- **Change:** Server wrapper exporting metadata + client pricing widget. Add `Product`/`Offer` schema per tier (Starter $0; Professional/Enterprise custom) and a 3–4 item `FAQPage`.
- **Benefit:** Pricing is a high-intent query with no metadata or structured data today; gains SERP/rich-result and AI clarity.
- **Priority:** High
- **Success:** Unique title/description/canonical; offers + FAQ validate; structured-data price matches page copy.

### A4 — Blog: enrich BlogPosting schema + per-post OG images
- **Skill used:** `schema-markup`
- **Files:** `app/kindora/blog/[slug]/page.tsx`, `blog/[slug]/layout.tsx`, `blog/data/posts.ts`
- **Change:** Add `image`, `dateModified` (new `BlogPost` field), `wordCount`, `inLanguage`, `articleSection` (= category), `author.url`. Add per-post OG image.
- **Benefit:** Richer article markup → better rich results and a stronger entity graph for AI citation.
- **Priority:** Medium
- **Success:** JSON-LD validates with ≥6 new properties; OG image renders for a sampled post.

### A5 — Real 1200×630 OG image
- **Skill used:** `seo-audit`, `web-quality-audit`
- **Files:** `app/kindora/layout.tsx` + `public/kindora-og.png` (new)
- **Change:** Create a proper 1200×630 branded OG image and reference it in layout + sub-page OG blocks.
- **Benefit:** Social/chat shares render correctly today with an upscaled transparent logo (hurts share CTR).
- **Priority:** Medium
- **Success:** Asset is true 1200×630; LinkedIn/Facebook preview shows full-size image.

---

## B. Sitemap & Indexation

### B1 — Add missing live pages to sitemap
- **Skill used:** `seo-audit`
- **Files:** `app/kindora/sitemap.ts`
- **Change:** Add at minimum `donor-management`, `grant-management`, `volunteer-management`, `nonprofit-financials`; then audit every dir under `app/kindora/**` for completeness.
- **Benefit:** Removes indexation gaps for live pages currently relying on crawl discovery alone.
- **Priority:** High
- **Success:** Every route dir (excluding route groups) appears exactly once in the generated sitemap.

### B2 — Per-page `lastModified` instead of `currentDate`
- **Skill used:** `seo-audit` (technical)
- **Files:** `app/kindora/sitemap.ts`
- **Change:** Maintain real per-page dates (reuse `posts.ts.publishedAt`, `LastUpdated` data); omit `lastmod` when unknown.
- **Benefit:** Honest freshness signals; avoids crawl-budget waste from "modified today" on all 300+ URLs.
- **Priority:** Medium
- **Success:** Distinct/absent `lastmod` values; no false today-stamps.

---

## C. Internal Linking & Clusters

### C1 — Blog category filters as real links
- **Skill used:** internal linking, `content-strategy`
- **Files:** `app/kindora/blog/page.tsx` (category pills)
- **Change:** Convert `<span>` pills to `<Link href="/kindora/blog?category=<cat>">` and implement searchParams filtering.
- **Benefit:** Working UX + a11y; category URLs that can each target a cluster keyword.
- **Priority:** Medium
- **Success:** Pills filter the grid, update the URL, and are keyboard-focusable `<a>` elements.

### C2 — In-body internal links in blog posts
- **Skill used:** internal-linker agent, `content-strategy`
- **Files:** `app/kindora/blog/data/posts.ts`, `BlogPostContent.tsx`
- **Change:** Add 1–3 natural internal links per post (siblings, `features/*`, `free-tools/*`, product pages) via a new optional `relatedLinks` field, guided by the internal-links-map.
- **Benefit:** Authority distribution, lower bounce, topical relevance — a top SEO/GEO lever.
- **Priority:** Medium
- **Success:** ≥60% of posts have ≥2 distinct internal links; no self-links.

### C3 — Cross-link free tools ↔ features and siblings
- **Skill used:** `free-tool-strategy`, internal linking
- **Files:** 9 free-tool pages + `free-tools/page.tsx`
- **Change:** Add "Related tools" block (2–3 siblings) + "How Kindora helps" section linking to `features/*` and blog posts (currently only a back-link + demo CTA).
- **Benefit:** Turns the tool cluster into a linked asset web and adds paths to the demo.
- **Priority:** Medium
- **Success:** Each tool has ≥3 internal links; links click-tracked via GA4 (F1).

---

## D. Cannibalization & Duplicates

### D1 — De-duplicate competitor/alternative pages
- **Skill used:** `competitor-alternatives` / `competitors`, `seo-audit`
- **Files:** `kindora-vs-*`, `*-alternative`, `why-kindora-over-*`, `better-alternative-to-*`, `salesforce-alternative-for-nonprofits`, `vs-competitors`
- **Change:** One primary URL per competitor per intent; differentiate angles/CTAs; merge duplicates with 301 + self-referencing canonicals.
- **Benefit:** Stops Kindora pages competing against each other for the same competitor query.
- **Priority:** High
- **Success:** No two indexed pages target the same primary competitor keyword; 301s correct; no co-ranking in GSC.

### D2 — Merge near-duplicate feature/solution routes
- **Skill used:** `seo-audit`, `programmatic-seo`
- **Files:** `features/financial-management` vs `features/financials`; `solutions/program-management-software` vs `/program-management-software`; `solutions/program-outcome-tracking` vs `/program-outcome-tracking`
- **Change:** Consolidate each pair, keep the higher-intent URL, 301/canonical the loser, update sitemap + internal links.
- **Benefit:** Removes top cannibalization risks and cleans topic mapping for AI understanding.
- **Priority:** Medium
- **Success:** One URL per topic survives; old URLs 301/canonicalize; sitemap lists survivors only.

---

## E. Core Web Vitals & Accessibility

### E1 — Lighthouse/CWV audit + fix on top 10 pages
- **Skill used:** `web-quality-audit`
- **Files:** Home, pricing, demo, blog index, blog post, one feature, one programmatic, one free-tool, contact, about
- **Change:** Run Lighthouse on the 10 URLs; fix top findings — lazy-load below-fold images, reserve space for hero blur elements (CLS), optimize SVG hydration on calculators.
- **Benefit:** CWV is a ranking and AI-crawl factor; faster tools = more conversions.
- **Priority:** High
- **Success:** LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms on all 10 URLs; Lighthouse ≥ 90 Performance.

### E2 — Accessibility pass on interactive controls
- **Skill used:** `web-quality-audit` (a11y)
- **Files:** `blog/page.tsx` pills, `KindoraDemoRequest.tsx`, `KindoraNav`, free-tool calculators (color-only states)
- **Change:** Semantic interactive elements, `:focus-visible` indicators, programmatic labels, AA-contrast state colors on dark tool pages.
- **Benefit:** WCAG AA; matches nonprofit procurement checklists; measured by Google.
- **Priority:** Medium
- **Success:** Lighthouse Accessibility ≥ 95; axe reports 0 critical violations on the 10 URLs.

---

## F. Analytics & CRO

### F1 — Install GA4 + conversion events
- **Skill used:** `analytics-tracking`
- **Files:** `app/kindora/layout.tsx`, `KindoraDemoRequest.tsx`, free-tool pages, CTA buttons
- **Change:** Add GA4 snippet; fire events on demo submit, free-tool first calculation, external `cad.spaceaiapp.com` CTA clicks, newsletter subscribe.
- **Benefit:** Unblocks all measurement — unlocks `/priorities`, `performance-review`, A/B testing, and every CRO decision below.
- **Priority:** High
- **Success:** Events visible in GA4 DebugView within 48h; `createDemoRequest` conversion goal defined.

### F2 — Demo form friction reduction
- **Skill used:** `form-cro`
- **Files:** `app/kindora/components/KindoraDemoRequest.tsx`
- **Change:** Collapse to the 4 required fields, add inline trust ("No credit card · Response within 24h") + demo value anchor; optional fields behind progressive disclosure.
- **Benefit:** Higher completion on a site with zero CRO data; measurable once F1 ships.
- **Priority:** Medium
- **Success:** Submit-rate vs. visitors trends up over 2 weeks post-ship (F1 data).

### F3 — Pricing page CRO pass
- **Skill used:** `page-cro`
- **Files:** `app/kindora/pricing/page.tsx`
- **Change:** Above-fold tier clarity, "Professional — Custom" price anchor ("from $49/mo"), feature comparison table, CTA reinforcement.
- **Benefit:** Higher signup intent on the most commercially valuable page.
- **Priority:** Medium
- **Success:** Price anchor visible above fold; CTA click events firing; conversion checklist complete.

---

## G. GEO / AI Visibility

### G1 — Add free-tool entries to `public/llms.txt`
- **Skill used:** `ai-seo` / `geo-llmstxt`
- **Files:** `public/llms.txt`
- **Change:** Append the 9 tool URLs + free-tools index to the Kindora section in the existing `- [Title](url)` format.
- **Benefit:** Calculator URLs are ideal AI-citation assets; currently invisible via llms.txt.
- **Priority:** Medium
- **Success:** Live file shows 9 tool entries; curl-valid; syntax matches existing pattern.

### G2 — Answer-first FAQ passages on top programmatic pages
- **Skill used:** `ai-seo`
- **Files:** Top 10 programmatic pages (e.g. `best-crm-for-nonprofits`, `nonprofit-crm`, `donor-management-software`); their `faqs` arrays
- **Change:** Ensure FAQ answers are self-contained 134–167-word passages matching rendered text (schema/content parity); add FAQs where missing.
- **Benefit:** Creates citable blocks for AI search engines — the main lever for "best nonprofit CRM" answers.
- **Priority:** Medium
- **Success:** ≥60% of answers are self-contained passages; `geo-citability` +20 on sampled pages.

---

## H. Content Depth & Quality

### H1 — Programmatic page depth/readability audit
- **Skill used:** content-analyzer agent (`search_intent_analyzer` → `keyword_analyzer` → `readability_scorer` → `seo_quality_rater`)
- **Files:** Sample of 20 of 150+ programmatic `page.tsx` files
- **Change:** Run the seomachine Content Analyzer pipeline; fix thin copy (<600 words), keyword-stuffed metas, missing comparison depth, intent mismatches.
- **Benefit:** Moves the long tail out of "thin/duplicate" territory — the penalty Google targets in mass-page sites.
- **Priority:** Medium
- **Success:** Root-cause report produced; ≤3 sampled pages below the 600-word floor; `seo_quality_rater` ≥ 70 on fixed pages.

---

## Execution order (by priority)

| Step | Task | Rationale |
|------|------|-----------|
| 1 | **F1** GA4 events | Unblocks measurement everywhere |
| 2 | **A1 + A2** free-tool metadata + schema | 9 pages become rankable |
| 3 | **A3** pricing metadata + schema | Highest-intent page fixed |
| 4 | **B1** sitemap gaps | Indexation completeness |
| 5 | **D1** competitor de-duplication | Stop self-competition |
| 6 | **E1** CWV audit/fixes | Core Web Vitals + crawl health |
| 7+ | A5, A4, B2, D2, E2, C1–C3, G1–G2, H1, F2, F3 | Remaining medium items |

**Ongoing, per change:** `seo-audit` on touched pages · `web-quality-audit` after template edits · `geo-citability`/`ai-seo` on new content · GA4 (F1) as source of truth for conversion work.