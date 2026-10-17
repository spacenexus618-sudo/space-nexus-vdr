# Kindora SEO — 30-Task Action Plan

Date: July 25, 2026
Site: https://spacenexus.net/kindora
Type: SaaS (Nonprofit Management Software)

---

## Phase 1: Crawlability & Indexation (Tasks 1–5)

### Task 1 — Robots.txt audit and optimization
- **Issue**: No `robots.txt` currently serves the Kindora section explicitly
- **Impact**: High — crawlers may waste budget on irrelevant paths
- **Evidence**: `GET https://spacenexus.net/robots.txt`
- **Fix**: Create `public/robots.txt` allowing all crawlers (`User-agent: *` + `Allow: /`), reference sitemap URL, block non‑Kindora paths from crawling if they are thin or staging
- **Priority**: High
- **Effort**: 15 minutes
- **Success check**: `https://spacenexus.net/robots.txt` returns 200 with correct rules

### Task 2 — XML sitemap creation and submission
- **Issue**: No verified XML sitemap that explicitly prioritises Kindora pages
- **Impact**: High — sitemap is the primary crawl-discovery signal for new pages
- **Evidence**: `GET https://spacenexus.net/sitemap.xml`
- **Fix**: Generate a sitemap that includes all 10 Kindora landing pages + all 17 blog posts. Set `<priority>` and `<changefreq>` values. Submit to Google Search Console and Bing Webmaster Tools
- **Priority**: High
- **Effort**: 30 minutes
- **Success check**: Sitemap submitted and processing without errors in Search Console

### Task 3 — Indexation audit (site: query + GSC)
- **Issue**: Unknown how many Kindora pages are currently indexed vs. expected
- **Impact**: High — indexing gaps mean zero visibility regardless of content quality
- **Evidence**: Run `site:spacenexus.net/kindora/` in Google and Bing; compare against expected 10 pages + 17 blog posts
- **Fix**: Identify missing pages and resolve via sitemap, internal linking, or request indexing in GSC
- **Priority**: High
- **Effort**: 20 minutes
- **Success check**: 27/27 pages indexed in Google

### Task 4 — Canonical tag audit
- **Issue**: Trailing‑slash inconsistency and potential duplicate-page issues across Kindora pages
- **Impact**: Medium — wrong or missing canonicals dilute ranking signals to the correct URL
- **Evidence**: Review each Kindora page's `<link rel="canonical">` via browser DevTools
- **Fix**: Every page must have a self-referencing canonical. Ensure `https://spacenexus.net/kindora` and `https://spacenexus.net/kindora/` resolve consistently (choose one, redirect the other)
- **Priority**: Medium
- **Effort**: 30 minutes
- **Success check**: All 27 pages return self-referencing canonical in `<head>`

### Task 5 — Orphan page audit
- **Issue**: Some Kindora pages may have zero or near‑zero internal inbound links
- **Impact**: Medium — orphans are harder for crawlers to discover and signal less topical importance
- **Evidence**: Run internal-link report via grep / Screaming Frog
- **Fix**: Ensure every Kindora page receives at least 2 internal links from related Kindora content. See Task 21 for link‑building patterns
- **Priority**: Medium
- **Effort**: 1 hour
- **Success check**: No zero‑inbound‑link pages remaining

---

## Phase 2: Technical Foundations (Tasks 6–9)

### Task 6 — Core Web Vitals audit (mobile + desktop)
- **Issue**: LCP, INP, CLS not benchmarked for Kindora pages
- **Impact**: High — CWV is a confirmed ranking signal; poor scores suppress all pages
- **Evidence**: Run PageSpeed Insights on top 5 Kindora pages (homepage, features, pricing, blog, demo)
- **Fix**: For each page scoring below "Good" (LCP > 2.5s, INP > 200ms, CLS > 0.1), identify the root cause (large images, render‑blocking JS, layout shifts) and resolve
- **Priority**: High
- **Effort**: 2–3 hours
- **Success check**: All tested pages score "Good" on all three CWV metrics

### Task 7 — Image optimisation pass
- **Issue**: Images may be unoptimised (large file sizes, no WebP, missing alt text)
- **Impact**: Medium — unoptimised images increase LCP and waste bandwidth
- **Evidence**: Audit all `<img>` elements across Kindora pages for format, size, and alt attribution
- **Fix**: Convert to WebP/AVIF where supported; set explicit width/height to prevent CLS; add descriptive alt text on every image; implement lazy loading (`loading="lazy"`)
- **Priority**: Medium
- **Effort**: 1–2 hours
- **Success check**: All images < 100 KB, use modern format, have alt text, and include dimensions

### Task 8 — HTTPS and mixed‑content verification
- **Issue**: Mixed‑content warnings (HTTP resources loaded on HTTPS page) break security signals
- **Impact**: Medium — mixed content can cause browser warnings that damage Trustworthiness (E‑E‑A‑T)
- **Evidence**: Open browser DevTools Console on each Kindora page; search for "Mixed Content" errors
- **Fix**: Update any `http://` resource references to `https://`; enable HSTS header
- **Priority**: Medium
- **Effort**: 30 minutes
- **Success check**: Zero mixed‑content warnings across all Kindora pages

### Task 9 — Mobile‑friendliness audit
- **Issue**: Kindora pages may have mobile usability issues (tap targets, viewport, font size)
- **Impact**: High — Google is mobile‑first indexed; mobile issues block ranking
- **Evidence**: Run Google's Mobile‑Friendly Test on top 5 Kindora pages; check GSC Mobile Usability report
- **Fix**: Ensure responsive design, minimum tap target 48px, no horizontal scroll, readable font sizes (≥ 16px on body text)
- **Priority**: High
- **Effort**: 1–2 hours
- **Success check**: Zero mobile usability errors in GSC

---

## Phase 3: On-Page SEO (Tasks 10–16)

### Task 10 — Title tag optimisation (all 27 pages)
- **Issue**: Titles may be missing keywords, be duplicate, or exceed 60 characters
- **Impact**: High — title is the #1 on‑page ranking signal
- **Evidence**: Audit all 10 landing‑page titles + 17 blog‑post titles for length, keyword inclusion, uniqueness
- **Fix**: Rewrite titles to: primary keyword near start, 50–60 chars, unique per page, brand at end
- **Priority**: High
- **Effort**: 1 hour
- **Success check**: Every page has a unique, optimised title tag

### Task 11 — Meta description optimisation (all 27 pages)
- **Issue**: Descriptions may be missing, duplicate, or lack a clear value proposition
- **Impact**: Medium — meta descriptions influence CTR from SERPs
- **Evidence**: Audit all pages for description presence, length (150–160 chars), keyword inclusion, and call‑to‑action
- **Fix**: Write unique descriptions with primary keyword, clear benefit, and a CTA for each page
- **Priority**: Medium
- **Effort**: 1 hour
- **Success check**: All pages have unique, compelling meta descriptions

### Task 12 — Heading structure audit (H1 → H2 → H3)
- **Issue**: Pages may have missing H1, multiple H1s, or skipped heading levels
- **Impact**: Medium — headings help search engines understand content hierarchy
- **Evidence**: Inspect each Kindora page's DOM for heading elements
- **Fix**: Ensure exactly one H1 per page containing primary keyword; logical H2/H3 hierarchy; no level‑skipping
- **Priority**: Medium
- **Effort**: 1 hour
- **Success check**: All pages pass heading‑structure audit

### Task 13 — Keyword cannibalisation check
- **Issue**: Multiple Kindora pages may target the same primary keyword (e.g., "donor management software")
- **Impact**: Medium — cannibalisation confuses search engines and dilutes ranking potential
- **Evidence**: Build a keyword‑to‑page mapping; flag overlapping targets
- **Fix**: Consolidate or differentiate pages targeting the same keyword; use internal linking to signal the primary page
- **Priority**: Medium
- **Effort**: 1 hour
- **Success check**: No two Kindora pages target the same primary keyword

### Task 14 — URL structure audit
- **Issue**: URLs may contain parameters, be too long, or use inconsistent casing
- **Impact**: Low‑Medium — clean URLs improve crawlability and user trust
- **Evidence**: Review all 27 Kindora‑section URLs
- **Fix**: Ensure lowercase, hyphen‑separated, keyword‑friendly URLs; remove unnecessary parameters; maintain trailing‑slash consistency
- **Priority**: Low
- **Effort**: 30 minutes
- **Success check**: All Kindora URLs follow a consistent, readable pattern

### Task 15 — Schema markup audit + enrichment
- **Issue**: Some pages may lack relevant schema types (FAQPage, Product, Article, BreadcrumbList)
- **Impact**: High — schema enables rich results and feeds AI Overviews extraction
- **Evidence**: Inspect each page's `script[type="application/ld+json"]` via browser DevTools (not curl; schema is JS‑injected)
- **Fix**: Implement missing schema types: Organization on homepage, Product on pricing, FAQPage on Q&A pages, Article on blog posts, BreadcrumbList site‑wide
- **Priority**: High
- **Effort**: 3–4 hours
- **Success check**: Every page passes Google Rich Results Test for at least one schema type

### Task 16 — Open Graph + Twitter Card audit
- **Issue**: Social‑sharing previews may be missing or incomplete
- **Impact**: Low — indirect SEO signal, but good for social CTR and brand consistency
- **Evidence**: Inspect `<meta property="og:*">` and `<meta name="twitter:*">` tags on each page
- **Fix**: Ensure title, description, image, and URL are set for both OG and Twitter on all pages
- **Priority**: Low
- **Effort**: 30 minutes
- **Success check**: Sharing any Kindora URL on social platforms generates a rich preview

---

## Phase 4: Content Quality & E‑E‑A‑T (Tasks 17–21)

### Task 17 — Author credentials on blog posts
- **Issue**: Blog posts may lack named authors with credentials (E‑E‑A‑T signal)
- **Impact**: Medium — Google's E‑E‑A‑T framework heavily weights author expertise
- **Evidence**: Inspect each blog post page for author byline, bio, and credentials
- **Fix**: Add named author with photo, credentials bio, and links to professional profiles on every blog post
- **Priority**: Medium
- **Effort**: 1–2 hours
- **Success check**: Every blog post displays an author card with credentials

### Task 18 — Original research / data asset creation
- **Issue**: Kindora lacks original data that AI systems and journalists can cite
- **Impact**: Medium — original research is uniquely citable because no alternative source exists
- **Evidence**: Current blog has 17 posts but zero original datasets
- **Fix**: Publish one "State of Nonprofit Operations" report with anonymised platform usage data. Format as a blog post + downloadable PDF
- **Priority**: Medium
- **Effort**: 4–8 hours
- **Success check**: Report published, linked from homepage, and indexed in Google

### Task 19 — Thin‑content page review
- **Issue**: Some Kindora pages may lack sufficient unique content depth to rank
- **Impact**: Medium — thin content is filtered out of AI overviews and ranks poorly
- **Evidence**: Compare word count and depth of each Kindora page against top‑ranking competitors
- **Fix**: Expand thin pages (aim for 800+ words of substantive content for informational pages, 300+ for transactional)
- **Priority**: Medium
- **Effort**: 3–5 hours
- **Success check**: All pages meet minimum content‑depth thresholds

### Task 20 — Freshness audit (last‑updated dates)
- **Issue**: Outdated content gets cited at 1/3 the rate of content updated within 30 days (ChatGPT data)
- **Impact**: Medium — freshness is a direct AI citation signal
- **Evidence**: Check `lastUpdated` dates across all pages
- **Fix**: Implement visible "Last updated: [date]" on every content page; set a quarterly refresh calendar
- **Priority**: Medium
- **Effort**: 1 hour initial + 1 hour/quarter
- **Success check**: Every page shows a recent last‑updated date

### Task 21 — Factual‑density and citation audit
- **Issue**: Claims without supporting sources reduce trustworthiness for both search and AI
- **Impact**: Medium — Claude and Perplexity particularly favour fact‑dense, well‑sourced content
- **Evidence**: Scan pages for unsupported claims (e.g., "50% faster", "most affordable")
- **Fix**: Add inline citations (`[1]`, `[2]`) linking to authoritative sources for every quantitative or comparative claim
- **Priority**: Low
- **Effort**: 2–3 hours
- **Success check**: No unsupported promotional claims remain on Kindora pages

---

## Phase 5: Authority & Links (Tasks 22–26)

### Task 22 — Internal linking optimisation
- **Issue**: Some Kindora pages may be poorly linked from related content
- **Impact**: High — internal links distribute authority and build topical clusters
- **Evidence**: Run internal‑link matrix; identify pages with ≤ 2 internal inbound links
- **Fix**: Add contextual links from pillar pages to supporting cluster pages; add blog‑post links to relevant product pages
- **Priority**: High
- **Effort**: 2 hours
- **Success check**: Every Kindora page has ≥ 3 contextual internal links

### Task 23 — Topical cluster pillar page creation
- **Issue**: Kindora's content may lack a clear pillar–cluster structure around core topics
- **Impact**: Medium — topical clusters signal deep expertise to Google and AI platforms
- **Evidence**: Map current content against key topics (donor management, grant tracking, case management, nonprofit accounting, volunteer management)
- **Fix**: Create pillar pages for each core topic that link out to detailed sub‑pages/blog posts; ensure each cluster page links back to its pillar
- **Priority**: Medium
- **Effort**: 4–6 hours
- **Success check**: 5 topical clusters exist with clear pillar → cluster → pillar linking

### Task 24 — Broken‑link audit
- **Issue**: Internal or external broken links harm user experience and crawl efficiency
- **Impact**: Medium — broken links waste crawl budget and damage trust
- **Evidence**: Run a crawler (Screaming Frog / Ahrefs) on the Kindora section; collect 404s
- **Fix**: Replace or remove each broken link; set up 301 redirects for any moved content
- **Priority**: Medium
- **Effort**: 1 hour
- **Success check**: Zero broken links on any Kindora page

### Task 25 — Backlink profile assessment
- **Issue**: Unknown how many external sites link to Kindora pages
- **Impact**: High — backlinks are Google's core authority signal
- **Evidence**: Run a backlink report in Ahrefs / Semrush for `spacenexus.net/kindora/*`
- **Fix**: Identify top linking opportunities (nonprofit directories, tech roundups, guest posts, industry publications); build a systematic outreach plan
- **Priority**: High
- **Effort**: Ongoing
- **Success check**: Backlink count grows month‑over‑month by ≥ 5 high‑quality links

### Task 26 — Competitor content gap analysis
- **Issue**: Kindora may be missing pages or topics that competitors rank for
- **Impact**: Medium — content gaps are missed traffic opportunities
- **Evidence**: Run a keyword‑gap analysis in Ahrefs/Semrush comparing Kindora vs. Bloomerang, Bonterra, Keela for shared nonprofit keywords
- **Fix**: Create content targeting keywords where competitors rank but Kindora does not
- **Priority**: Medium
- **Effort**: 3–5 hours
- **Success check**: Content gap list reduced by 50% over 3 months

---

## Phase 6: AI Search & Platform-Specific (Tasks 27–30)

### Task 27 — /llms.txt file creation
- **Issue**: AI crawlers lack a structured entry point to understand Kindora's content and priorities
- **Impact**: High — llms.txt is the most direct AI SEO signal available
- **Evidence**: Check `https://spacenexus.net/llms.txt` — currently absent
- **Fix**: Create `public/llms.txt` following llmstxt.org spec with site overview, audience, key URLs, and top articles
- **Priority**: High
- **Effort**: 15 minutes
- **Success check**: `llms.txt` accessible at domain root and parsable by AI crawlers

### Task 28 — /pricing.md file creation
- **Issue**: AI agents comparing products programmatically cannot parse JS‑rendered pricing tables
- **Impact**: Medium — AI product‑comparison queries may exclude Kindora if pricing is not in plain text
- **Evidence**: Current pricing is React‑rendered; no plain‑text fallback
- **Fix**: Create `public/pricing.md` with structured tier, price, limits, and feature data
- **Priority**: Medium
- **Effort**: 15 minutes
- **Success check**: `pricing.md` accessible and parsable at domain root

### Task 29 — Google AI Overviews readiness check
- **Issue**: Kindora may not be structured for AI Overviews extraction (self‑contained answers, FAQ schema, factual density)
- **Impact**: High — AI Overviews citation drives zero‑click visibility
- **Evidence**: Manually test 10 priority queries in Google Search to check whether Kindora appears in the AI Overview; review competitor citations
- **Fix**: Ensure every priority page opens with a 40–60 word self‑contained answer block; verify FAQ schema is live; increase factual density with sourced statistics
- **Priority**: High
- **Effort**: 2 hours
- **Success check**: Kindora cited in AI Overviews for ≥ 3 of 10 priority queries within 30 days

### Task 30 — Perplexity + ChatGPT optimisation pass
- **Issue**: Perplexity favours public PDFs and FAQ schema; ChatGPT rewards recent, authoritative content
- **Impact**: Medium — these platforms are growing citation sources
- **Evidence**: Test 10 priority queries on Perplexity and ChatGPT; log whether Kindora is cited
- **Fix**: Publish one downloadable PDF guide on Perplexity‑targeted topics (e.g., "Nonprofit Software Buyer's Guide"); ensure blog content is updated ≤ 30 days; verify FAQPage schema on Q&A pages
- **Priority**: Medium
- **Effort**: 3–4 hours
- **Success check**: Kindora cited on both Perplexity and ChatGPT for ≥ 3 priority queries

---

## AI SEO Quick‑Win Summary (Top 5 by impact ÷ effort)

| # | Task | Impact | Effort | Ratio |
|---|------|--------|--------|-------|
| 1 | Task 1 — Robots.txt | High | 15 min | ⭐⭐⭐⭐⭐ |
| 2 | Task 27 — /llms.txt | High | 15 min | ⭐⭐⭐⭐⭐ |
| 3 | Task 2 — XML sitemap | High | 30 min | ⭐⭐⭐⭐ |
| 4 | Task 15 — Schema markup | High | 3–4 h | ⭐⭐⭐⭐ |
| 5 | Task 22 — Internal linking | High | 2 h | ⭐⭐⭐⭐ |

---

## Quarterly Maintenance Cadence

**Every month (15 min):**
- Check Search Console for new crawl errors, manual actions, or index coverage drops
- Verify `robots.txt` and sitemap are accessible
- Quick manual test of 5 priority queries on Google, ChatGPT, Perplexity

**Every quarter (1–2 hours):**
- Refresh "Last updated" dates on all content pages
- Add recent reviews / testimonials
- Publish one new blog post targeting a priority keyword
- Review backlink profile; identify new link opportunities

**Every year (4–8 hours):**
- Full E‑E‑A‑T refresh: update author bios, credentials, and company information
- Major content audit: thin pages, cannibalisation, gaps vs. competitors
- Update /llms.txt and /pricing.md with latest product changes
- Publish updated original research dataset
