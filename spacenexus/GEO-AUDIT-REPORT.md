# GEO Audit Report: Kindora

**Audit Date:** 2026-10-08
**URL:** https://spacenexus.net/kindora
**Business Type:** SaaS — nonprofit management software (all-in-one NGO OS)
**Pages Analyzed:** 16 (homepage, /kindora + 15 representative routes fetched live; full sitemap of 184 /kindora/* URLs reviewed)

---

## Executive Summary

**Overall GEO Score: 66/100 (Fair)**

Kindora has a strong technical foundation — every major AI crawler (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) is explicitly allowed, llms.txt exists at both the root and Kindora levels, and pages are server-rendered with real JSON-LD. Its biggest weaknesses are trust-related: placeholder stats render as zeros, a blog author name collides with a testimonial reviewer (fabricated-persona risk), zero third-party expert quotes, and the global footer brands every /kindora/* page as SpaceNexus VDR — diluting Kindora's entity in AI crawls.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 74/100 | 25% | 18.5 |
| Brand Authority | 50/100 | 20% | 10.0 |
| Content E-E-A-T | 55/100 | 20% | 11.0 |
| Technical GEO | 82/100 | 15% | 12.3 |
| Schema & Structured Data | 62/100 | 10% | 6.2 |
| Platform Optimization | 78/100 | 10% | 7.8 |
| **Overall GEO Score** | | | **66/100** |

---

## Critical Issues (Fix Immediately)

1. **Placeholder stats render as zeros on /kindora** — `0+ Nonprofits Served`, `$0M+ Grants Tracked`, `0hrs Saved`, `0 Integrated Modules` are client-side counters with zero data; AI crawlers extract "0". Server-render real numbers. (Also mismatched with /kindora/pricing which shows "500+ nonprofits" / "$2M".)
2. **SpaceNexus VDR footer on every /kindora page** — global footer + "Ask for a Summary" widget describe and prompt AI to summarize **SpaceNexus VDR**, not Kindora. Copies of /kindora/* pages would confuse entity attribution. Replace footer/widget with Kindora entity JSON-LD + Kindora-specific AI prompts.

---

## High Priority Issues

1. **Persona collision suggests fabricated personas** — blog author "Sarah Mitchell" also appears as testimonial reviewer ("Executive Director, Community First Alliance") on /kindora/consumer-review. Either use real, disambiguated people or remove.
2. **No article-level citations in blog guides** — 0 external links across the 3 flagship guides despite stats like retention percentages. Link the ~45% retention stat (NTEN / Fundraising Effectiveness Project) and cost claims to sources.
3. **Mojibake encoding on blog** — `/kindora/blog/complete-guide-nonprofit-management-software` renders `â€"` instead of em-dashes. Fix UTF-8 encoding.
4. **Missing FAQPage schema on /kindora/faq** — the page has real Q&A HTML but emits only Organization/SoftwareApplication JSON-LD.
5. **Missing Article schema on blog posts** — guides lack BlogPosting/Article with headline, datePublished/dateModified, author (Person) linked to publisher, speakable.

---

## Medium Priority Issues

1. **Dangling footnotes** — `[1] [2]` on /kindora/consumer-review have no reference list; "89% Capterra survey" and "4.5★ G2" unverifiable.
2. **Blog date conflicts** — posts dated Feb 2025 titled "in 2025" but homepage cards label them "in 2026". Unify dates/titles.
3. **llms-full.txt fact conflicts** — San Francisco vs Sacramento HQ, differing phone numbers; LLMs will cite mutual contradictions. Single source of truth.
4. **10 broken llms.txt URLs** + `/kindora/why-kindora-over-bloomerang` linked in llms.txt but absent from sitemap.
5. **No third-party expert quotes anywhere** — add industry voices for authority.
6. **Missing comparison schema** — /kindora/vs-competitors has tables but no ItemList/BreadcrumbList.
7. **Granular pricing schema missing** — /kindora/pricing has SoftwareApplication offers but no tiered Product/Offer with availability.
8. **No team names on /kindora/about** — "Co-Founders" photo without names/credentials.
9. **Uptime inconsistency** — "99.9%" on homepage vs "99.99%" in footer.

---

## Low Priority Issues

1. Missing BreadcrumbList across inner pages (features, solutions, blog).
2. Heavy HTML (~292 KB /kindora) from inline JSON bloat; add fetchpriority="high" to LCP image, more lazy-loading.
3. CSP uses unsafe-inline/unsafe-eval; HSTS lacks includeSubDomains; preload.
4. No explicit OAI-SearchBot/CCBot rules (falls under `*` allow — harmless, future-proof).
5. No Reddit/Wikipedia third-party kindora-relevant content; only brand YouTube.
6. `0+` counters also harm mobile/JS-disabled rendering.

---

## Category Deep Dives

### AI Citability (74/100)
Homepage has a high-quality answer-first block: "The Short Answer / What is Kindora? Kindora is an all-in-one nonprofit management software that replaces disconnected spreadsheets and siloed tools with a single unified platform." Strong, self-contained, quotable. Consistent "Kindora" entity naming across H1/H2/FAQ. The FAQ block is highly extractable. Weak points: the deep footer entity noise (SpaceNexus VDR), zeroed counters, and blog mojibake all degrade what an AI extracts from copied content.

### Brand Authority (50/100)
On-site signals are strong: explicit crawler allows, dedicated /kindora/llms.txt + llms-full.txt, Organization schema with sameAs (no Wikipedia/Wikidata/G2 — intentionally skipped). Third-party footprint is weak: no Wikipedia, no Wikipedia/Wikidata, no G2/Capterra verified presence, blog sees no external citations, and the persona collision undermines entity credibility. AI models have little independent signal that "Kindora" is a real recognized entity.

### Content E-E-A-T (55/100)
Authors have real names/titles/bios (Sarah Mitchell, James Carter, Priya Kalani, Marcus Lee). Third-party sources cited on homepage (Nonprofit Finance Fund 2024 68% demand; Giving USA 2024 $557B — accurate). Freshness markers present ("Last updated: July 19, 2026"). Red flags dominate: no article-level citations, dangling footnotes, persona collision, self-sourced "10 hours/week saved, per Kindora platform data," unverifiable review stats, uptime mismatch.

### Technical GEO (82/100)
Best category. Universal crawler allow (7 of 7 target crawlers), dual sitemaps (184 /kindora URLs), SSR confirmed via X-Nextjs-Prerender, ~20 JSON-LD blocks per page, canonical/meta/OG/twitter present, WebP image pipeline, full security headers. Fixes: llms.txt fact conflicts, heavy payload, HSTS/CSP hardening, stale blog lastmod.

### Schema & Structured Data (62/100)
Server-rendered, valid JSON-LD with Organization (Kindora, parent SpaceNexus, sameAs, contactPoint), WebSite + SearchAction, SoftwareApplication across pages. Missing: FAQPage on /faq, Article/speakable on blog, ItemList on vs-competitors, Product/Offer tiers on pricing, BreadcrumbList on inner pages, aggregateRating/screenshots on SoftwareApplication.

### Platform Optimization (78/100)
Google AI Overviews: Good (FAQ, comparison tables, freshness). ChatGPT: Good (GPTBot allowed, llms.txt, vs-pages). Perplexity: Good (crawler allowed, on-page citations). Gemini: Fair (structured data unverified). Bing Copilot: Fair (weak external citation footprint). The comparison tables (vs Bloomerang/Salesforce/Bonterra/Instrumentl) are exactly what AI platforms cite.

---

## Quick Wins (Implement This Week)

1. Server-render the 4 stat counters on /kindora with real numbers (impact: removes "0+" extraction, fixes trust).
2. Swap the footer AI-summary widget to a Kindora-specific prompt on /kindora/*.
3. Add FAQPage JSON-LD to /kindora/faq (HTML already has Q&A — minutes of work).
4. Add Article + author + speakable JSON-LD to the blog template.
5. Fix UTF-8 mojibake in blog posts + reconcile 2025/2026 dates.

## 30-Day Action Plan

### Week 1: Trust & Entity
- [ ] Fix /kindora stat counters to server-rendered real numbers
- [ ] Replace SpaceNexus footer/prompt with Kindora entity + Kindora AI prompts
- [ ] Resolve persona collision (rename/disambiguate testimonial reviewer)

### Week 2: Schema
- [ ] FAQPage on /kindora/faq
- [ ] Article/BlogPosting + author + speakable on blog template
- [ ] ItemList + BreadcrumbList on /kindora/vs-competitors
- [ ] Product/Offer tiered pricing schema on /kindora/pricing
- [ ] BreadcrumbList on inner pages

### Week 3: Citations & Content
- [ ] Add linked source citations to all blog guides
- [ ] Repair dangling footnotes on /kindora/consumer-review
- [ ] Fix blog mojibake + unify 2025/2026 publication labels
- [ ] Unify llms.txt vs llms-full.txt company facts (HQ, phone)

### Week 4: Authority & Polish
- [ ] Add named co-founder bios with credentials to /kindora/about
- [ ] Add third-party expert quotes to flagship guides
- [ ] Add G2/Capterra verified profile links
- [ ] Fix llms.txt broken URLs; add why-kindora-over-bloomerang to sitemap
- [ ] Consensus uptime (99.9%), HSTS preload, CSP hardening

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| /kindora | All-in-One Nonprofit Management Software | Zeroed counters; VDR footer; faq block strong |
| /kindora/features | Features | Missing FAQPage/HowTo/BreadcrumbList |
| /kindora/pricing | Pricing | SoftwareApplication only; missing Product/Offer tiers |
| /kindora/vs-competitors | vs competitors | Missing ItemList/BreadcrumbList |
| /kindora/faq | FAQ | Missing FAQPage schema; title duplication |
| /kindora/about | About | No named team bios |
| /kindora/consumer-review | Reviews | Dangling footnotes; persona collision |
| /kindora/blog/complete-guide-nonprofit-management-software | Complete Guide | Mojibake; no Article schema; 0 citations; date conflict |
| /kindora/blog/how-to-choose-donor-management-software | Buyer's Guide | No Article schema; 0 citations |
| /kindora/blog/grant-management-101-track-win-more-grants | Grant Mgmt 101 | No Article schema; 0 citations |
| /kindora/sitemap.xml | (184 /kindora URLs) | why-kindora-over-bloomerang absent |
| robots.txt | (root) | All AI crawlers allowed |
| llms.txt | (root) | Valid; 10 broken URLs |
| llms-full.txt | (root) | Deep; fact conflicts vs llms.txt |
| /kindora/llms.txt | Kindora index | Present, well-structured |
| /kindora/llms-full.txt | Kindora full | Present |

*Confidence note: live fetches against spacenexus.net succeeded (production). No BRAVE_API_KEY or chrome-devtools MCP — item-level claims verified via raw HTML/WebFetch; external-marketing claims (Wikipedia/Reddit/G2 presence) are assessed from on-page evidence and flagged low-confidence where not directly verifiable.*