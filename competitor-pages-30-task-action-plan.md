# Competitor & Alternative Pages: 30-Task Action Plan

A phased, executable plan to build, maintain, and rank competitor comparison and alternative pages for **Kindora** (nonprofit management platform) — generated from the [competitors skill](.claude/skills/competitors/SKILL.md).

**Known competitor set (already partially built in `/kindora/`):** Bloomerang, Bonterra Apricot, Salesforce Nonprofit Cloud (Salesforce NPC), DonorPerfect, Neon One, DonorDock, Little Green Light, Network for Good.

---

## Phase 0: Foundation — Context, Positioning & Audit (Tasks 1–5)

> **Goal**: Lock down product positioning, honestly assess strengths/weaknesses, and audit what competitor content already exists.

### Task 1 — Create the product-marketing context file
Create `.agents/product-marketing.md` (or `.claude/product-marketing.md`) capturing Kindora's core value proposition, key differentiators, ideal customer profile, pricing model, strengths, and honest weaknesses. This is the single source of truth every comparison page pulls from.

### Task 2 — Document your own product data file
Create `competitor_data/kindora.md` in YAML using the content-architecture template: positioning, target audience, pricing tiers, feature ratings (1–5), strengths, weaknesses, best-for / not-ideal-for, common complaints, migration notes. Be honest — pages that acknowledge limitations convert better.

### Task 3 — Audit existing competitor pages
Inventory the current pages in `app/kindora/` (kindora-vs-*, *-alternative, vs-competitors). For each, record: URL, format (vs/alternative/plural/competitor-vs-competitor), current keyword target, whether pricing is current, and whether the page follows the skill's section structure.

### Task 4 — Verify competitor pricing & feature claims
Research current 2026 pricing and feature sets for all 8 competitors. Flag any stale or inaccurate claims on existing pages. Update the shared data (Task 6) with verified figures and dated "last verified" stamps.

### Task 5 — Define search-intent priority list
Score the competitor keyword set by search volume and commercial intent: "[Competitor] alternative", "alternative to [Competitor]", "best [Competitor] alternatives", "[Competitor] vs [Other]", "Kindora vs [Competitor]". Produce a ranked priority list that drives the build order in Phase 2.

---

## Phase 1: Research & Centralized Data (Tasks 6–10)

> **Goal**: Deep competitor research captured once, reused everywhere.

### Task 6 — Create centralized competitor data files
Create one YAML file per competitor under `competitor_data/` (e.g., `bloomerang.md`, `bonterra.md`, `salesforce-npc.md`, `donorperfect.md`, `neon-one.md`, `donordock.md`, `little-green-light.md`, `network-for-good.md`). Each follows the template: positioning, audience, pricing (free tier, starter, business, enterprise), feature ratings, strengths, weaknesses, best-for, not-ideal-for, common complaints, migration notes.

### Task 7 — Mine review-platform complaints & praise
For each competitor, pull recurring themes from G2, Capterra, and TrustRadius: top 5 praise themes and top 5 complaint themes (with representative quotes). Use these to shape the "why people look for alternatives" sections and honest comparison language.

### Task 8 — Document migration notes per competitor
For each competitor, document: what data transfers (donor records, grant data, financials), what needs reconfiguration, Kindora's migration support (import tools, white-glove service, guides), and realistic timelines.

### Task 9 — Collect switcher social proof
Gather (or create a system to collect) customer quotes from teams who switched to Kindora from each competitor. Capture: what made them switch, what they gained, and quantified results. Tag each quote with the competitor it came from.

### Task 10 — Build the comparison data matrix
Consolidate all competitor + Kindora data into a single comparison matrix (features × competitors with 1–5 ratings and "partial/full/not available" markers). This matrix drives every comparison table on the site, so updates propagate everywhere.

---

## Phase 2: Build — Page Set by Priority (Tasks 11–20)

> **Goal**: Build the highest-ROI competitor pages first, in the right formats.

### Task 11 — Rebuild `Kindora vs [Competitor]` pages (Format 3)
Refresh all 8 `kindora-vs-*` pages (Bloomerang, Bonterra, Salesforce NPC, DonorPerfect, Neon One, DonorDock, Little Green Light, Network for Good) to the full Format 3 structure: TL;DR summary → at-a-glance table → detailed comparison by category (Features, Pricing, Support, Ease of use, Integrations) → who Kindora is best for → who [Competitor] is best for (honest) → switcher testimonials → migration support → CTA.

### Task 12 — Build `[Competitor] Alternative` pages (Format 1)
Create singular alternative pages for each of the 8 competitors (`/kindora/[competitor]-alternative`). Structure: why people look for alternatives → quick positioning → detailed comparison → who should switch (and who shouldn't) → migration path → switcher social proof → CTA.

### Task 13 — Build `[Competitor] Alternatives` plural pages (Format 2)
Create plural alternatives pages for the 4 highest-volume competitors. Include **4–7 real alternatives** (Kindora listed first but competitors included honestly). Structure: pain points → what to look for → alternatives list → comparison table → detailed breakdowns → recommendation by use case → CTA.

### Task 14 — Build `[Competitor A] vs [Competitor B]` pages (Format 4)
Create head-to-head pages for high-volume queries where Kindora is the third option (e.g., "Bloomerang vs DonorPerfect", "Salesforce NPC vs Bonterra"). Structure: overview of both → comparison by category → who each is best for → the third option (Kindora) → three-way comparison table → CTA.

### Task 15 — Build the alternatives index page (`/kindora/alternatives`)
Create an index listing every alternative page with competitor name, one-line differentiator vs. that competitor, and link to the full comparison. Include aggregated "common reasons people switch to Kindora" and a CTA.

### Task 16 — Build the vs comparison index page (`/kindora/vs`)
Create a compare index with two sections: "Kindora vs Competitors" (all Format 3 pages) and "Head-to-Head Comparisons" (all Format 4 pages). Include a methodology note and last-updated date.

### Task 17 — Rewrite all comparison tables beyond checkmarks
On every page, replace simple ✓/✗ tables with descriptive cells ("Full support with X" / "Basic support, limitation"). Group features into categories: Core functionality, Collaboration, Integrations, Security & compliance, Support & service. Add star ratings where useful.

### Task 18 — Add TL;DR summaries and paragraph comparisons
Ensure every page starts with a 2–3 sentence TL;DR. For each comparison dimension, add a prose paragraph (not just tables) explaining *why* the differences matter and *when* each option wins.

### Task 19 — Add pricing comparisons with total-cost framing
On each page, add tier-by-tier pricing tables, what's included, hidden costs, and a total-cost calculation for a sample nonprofit team size (e.g., 10-person org). Always frame Kindora's price vs. the competitor's true all-in cost.

### Task 20 — Add "Who should choose" honesty sections
Add explicit "Who should choose [Competitor]" and "Who should choose Kindora" sections to every page, with ideal-customer personas. Honest recommendations build trust with evaluators who will verify claims.

---

## Phase 3: Structure, SEO & Schema (Tasks 21–26)

> **Goal**: Make the pages rank and get discovered.

### Task 21 — Add FAQ sections with schema markup
Add 3–8 FAQ items per page using natural query phrasing (e.g., "What is the best alternative to Bloomerang?"). Implement JSON-LD `FAQPage` schema on all comparison/alternative pages.

### Task 22 — Audit meta tags & headings
Ensure every page has a unique title (50–60 chars) and meta description (150–160 chars) targeting its primary keyword, one `<h1>`, and a logical `h1 → h2 → h3` hierarchy. Include the target keyword format from the skill table.

### Task 23 — Wire internal linking across the cluster
Link index → individual pages and pages → index. Cross-link between related comparisons (e.g., Bloomerang alternative ↔ Kindora vs Bloomerang ↔ Bloomerang vs DonorPerfect). Link from feature pages to relevant comparisons.

### Task 24 — Add competitor footer columns
Add footer columns for the formats actually built: "Kindora vs" (top 8 by search volume), "Alternatives to" (top 8), and "Compare" (head-to-head). Add "View all" links to the index pages. Cap each column at 8 links.

### Task 25 — Implement rating & review schema
Add `AggregateRating` and `Organization` schema where reviews/social proof appear. Consider `Product` schema on comparison pages with "best for" use-case data.

### Task 26 — Verify canonical URLs & robots coverage
Ensure every comparison page has a canonical URL pointing to its preferred version, and that `robots.txt`/sitemap covers all competitor pages. Submit new pages in Google Search Console and Bing Webmaster Tools.

---

## Phase 4: QA, AI-SEO & Review (Tasks 27–29)

> **Goal**: Verify quality, correctness, and AI-answer readiness.

### Task 27 — Fact-check all claims against sources
Review every page for accurate, non-misleading claims. Verify each feature rating and pricing figure against the current research (Task 4). Remove or soften any claim that cannot be sourced. Flag nothing as "the best" without evidence.

### Task 28 — AI-SEO extractability pass
Ensure pages are AI-citation friendly: self-contained first paragraphs, direct-answer definition blocks, structured tables, FAQ sections, statistics with named sources, and visible last-updated dates. Follow the citations-vs-recommendations guidance for plural alternatives pages.

### Task 29 — Full QA review of the page set
Run a review covering: broken links (internal + external), mobile layout (comparison tables scroll properly), consistent styling across all pages, accurate "last updated" dates, and honest tone. Fix all issues before deployment.

---

## Phase 5: Deploy & Maintain (Task 30)

> **Goal**: Ship the set and keep data fresh.

### Task 30 — Deploy and set up an update cadence
Deploy the page set and commit the `competitor_data/` files. Establish maintenance: **quarterly** pricing/feature verification, **on-notification** updates when a customer mentions a competitor change, and an **annual** full refresh. Update index pages whenever a new comparison is added. Track rankings for the priority keyword list (Task 5) monthly.

---

## Summary

| Phase | Tasks | Focus |
|-------|-------|-------|
| 0 | 1–5 | Context, positioning & audit |
| 1 | 6–10 | Research & centralized data |
| 2 | 11–20 | Build page set by priority |
| 3 | 21–26 | Structure, SEO & schema |
| 4 | 27–29 | QA, AI-SEO & review |
| 5 | 30 | Deploy & maintain |

## Priority order (first 10 to execute)

1. Task 1–2 — product context + own data file (foundation for everything)
2. Task 6 — competitor data files (Bloomerang, Salesforce NPC first — highest search volume)
3. Task 11 — rebuild the 8 existing `kindora-vs-*` pages (highest intent)
4. Task 12 — singular alternative pages (Bloomerang, Salesforce NPC first)
5. Task 15–16 — index pages (link equity hub)
6. Task 23–24 — internal linking + footer columns
7. Task 21 — FAQ schema
8. Task 30 — maintenance cadence from day one

---

*Generated from the competitors skill — see `.claude/skills/competitors/SKILL.md`, `references/templates.md`, and `references/content-architecture.md` for source materials.*
