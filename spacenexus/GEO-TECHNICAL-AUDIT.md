# GEO Technical SEO Audit — spacenexus.net/kindora
Date: 2026-10-08
Target: https://spacenexus.net/kindora (+ /kindora/features, /kindora/pricing)
Server: Netlify Edge (SSR per `X-Nextjs-Prerender`), Next.js, HTTP 200

## Technical Score: 86/100 (Good)

## Score Breakdown
| Category | Score | Status |
|---|---|---|
| Crawlability | 15/15 | Pass |
| Indexability | 12/12 | Pass |
| Security | 9/10 | Pass |
| URL Structure | 8/8 | Pass |
| Mobile Optimization | 10/10 | Pass |
| Core Web Vitals | 10/15 | Warn |
| Server-Side Rendering | 10/15 | Warn |
| Page Speed & Server | 12/15 | Pass |

Status: Pass = 80%+ of category points, Warn = 50-79%, Fail = <50%

## AI Crawler Access (robots.txt, verified live)
| Crawler | User-Agent | Status | Recommendation |
|---|---|---|---|
| GPTBot | GPTBot | Allowed (explicit) | Keep |
| OpenAI ChatGPT-User | ChatGPT-User | Allowed (explicit) | Keep |
| Google Search + AI Overviews | Googlebot | Allowed (via `*`) | Add explicit rule |
| Google AI training | Google-Extended | Allowed (explicit) | Keep |
| Bing / Copilot | Bingbot | Allowed (explicit) | Keep |
| Perplexity AI | PerplexityBot | Allowed (explicit) | Keep |
| Claude / Anthropic | ClaudeBot, anthropic-ai | Allowed (explicit) | Keep |
| Amazon AI | Amazonbot | Allowed (via `*`) | Add explicit rule |
| Common Crawl | CCBot | Allowed (via `*`) | Add explicit rule |
| Meta AI | FacebookExternalHit | Allowed (via `*`) | Add explicit rule |
| TikTok AI | Bytespider | Allowed (via `*`) | Add explicit rule |
| Apple Intelligence | Applebot-Extended | Allowed (via `*`) | Add explicit rule |

Sitemaps: `/sitemap.xml` (151 VDR URLs) + `/kindora/sitemap.xml` (184 URLs), both 200. Disallows only `/api/ /admin/ /private/ /seo/ /templates/ /_next/`.

## Critical Issues (fix immediately)

1. **JS stat counters render as `0+ Nonprofits`, `$0M+`, `0hrs` in raw HTML** — Kindora homepage `/kindora` hydrates its four headline stats client-side; server-sent HTML (what GPTBot/ClaudeBot/PerplexityBot parse) contains zeros. AI crawlers do not execute JS, so they extract fabricated "0" data that contradicts the real numbers on `/kindora/pricing` (500+ / $2M). **Fix: server-render the stat values as static text.**
2. **HSTS missing `includeSubDomains; preload`** — header is `Strict-Transport-Security: max-age=31536000` only. Subdomain AI crawler calls and security posture weakened.

## Warnings (fix this month)

1. **TTFB 1.2–1.8s on key pages** (measured from client vantage: home 1.78s, features 1.31s, pricing 1.24s) — exceeds 800ms target. Add `fetchpriority="high"` + `<link rel="preload">` on the LCP hero, trim inline JSON.
2. **Homepage HTML weight 292KB** (features 157KB, pricing 176KB) — well under 2MB but heavy for a landing page; loose inline JSON is the culprit.
3. **No IndexNow key file** (`.well-known/indexnow-key.txt` and `indexnow.txt` both 404) — no instant Bing pickup; ChatGPT and Bing Copilot index via Bing.
4. **Markdown content negotiation not supported** — `Accept: text/markdown` returns `Content-Type: text/html`. Cloudflare "Markdown for Agents" not in play (Netlify host).
5. **Images lack explicit dimensions** — hero logo and one content image ship without width/height (CLS risk); only 2 of 3 imgs lazy-loaded, none prioritized.
6. **CSP uses `unsafe-inline` + `unsafe-eval`** for scripts — acceptable for Next.js hydration but reduces XSS hardening.
7. **No `noindex` tagging of thin/utility pages** — `/kindora/faq` covers only AI topics; consider canonical consolidation.

## Recommendations (optimize this quarter)

1. Add explicit `User-Agent` allow rules for Googlebot, OAI-SearchBot, Amazonbot, CCBot, Applebot-Extended, Bytespider (currently inherited via `*`).
2. Implement IndexNow: add key file + server-side ping on publish. Single-key Bing/Yandex/Seznam/Naver coverage.
3. Add `Link: </.well-known/api-catalog>; rel="api-catalog"` once API docs exist — currently no Link headers, and no public API → section omitted per skill guidance for standard business sites.
4. Add `speakable` markup + reduce LCP chain: Netlify Edge TTFB is dominated by HTML size; consider stale-while-revalidate tuning (`X-Nextjs-Stale-Time: 300` already set).
5. Refresh stale blog `lastmod` dates (2024–2025 posts) — freshness signals.

## Agent-Readiness Signals (non-scoring)

### RFC 8288 Link Headers (Service Discovery)
**Status:** Absent — standard business site (no public API / MCP surface). Omitted per skill guidance.

### Markdown Content Negotiation
**Status:** Not Supported
**Test:** GET https://spacenexus.net/kindora with `Accept: text/markdown`
**Response Content-Type:** `text/html; charset=utf-8`
**Forward-Looking Recommendation:** Netlify host; not yet implementable with the Cloudflare one-liner. Monitor framework adoption; HTML is already SSR'd and well-structured, so extraction loss is minimal.

### IndexNow
**Status:** Not Implemented (`/kindora/indexnow-key.txt` 404)
**Recommendation:** Implement to get instant Bing/Copilot indexing of Kindora content changes. Not Google-supported (Googlebot allowed via `*` covers AI Overviews).

## Detailed Findings

### Crawlability (15/15)
robots.txt valid; universal AI allow; dual sitemaps (both 200); homepage links hit all major sections within 3 clicks; `index, follow` robots meta (no erroneous noindex).

### Indexability (12/12)
Self-referencing canonicals on all sampled pages (`/kindora` → itself, `/kindora/features` → itself); single www/non-www + https posture via Netlify; no param-duplicates (image `?url=` params are `/_next/image`, non-indexable); single-language site (hreflang N/A); no index bloat (184 sitemap URLs, all meaningful).

### Security (9/10)
HTTPS enforced, valid cert; CSP with `frame-ancestors 'self'`; `X-Content-Type-Options: nosniff`; `X-Frame-Options: SAMEORIGIN`; `Referrer-Policy: strict-origin-when-cross-origin`; `Permissions-Policy` restricted; `X-Xss-Protection`. −1: HSTS lacks includeSubDomains/preload.

### URL Structure (8/8)
Clean lowercase kebab-case paths (`/kindora/free-tools/x`, `/kindora/features/y`), logical hierarchy, no redirect chains observed (all sampled 200 direct), no indexable parameter pages.

### Mobile Optimization (10/10)
Proper viewport; Tailwind responsive grid (no horizontal scroll constructs); text scale AA contrast; mobile-usable nav.

### Core Web Vitals (10/15 — estimated, no CrUX field data)
- LCP ~3/5: HTML-heavy hero, no preload/fetchpriority; TTFB 1.2-1.8s pushes LCP past 2.5s in this vantage.
- INP ~4/5: server-rendered pages, moderate hydration; some client JS counters.
- CLS ~3/5: images missing implicit dimensions on hero.

### Server-Side Rendering (10/15)
Key content SSR'd: H1, H2s, paragraphs, FAQs, JSON-LD (Organization, SoftwareApplication, BreadcrumbList, Offer, WebSite; **FAQPage absent on /kindora** despite FAQ block), canonicals, meta all present in raw HTML. −5: the four homepage stat counters are JS-only and render as zeros — AI crawlers parse wrong data. This is the single most important GEO defect on the site.

### Page Speed & Server (12/15)
Netlify Edge CDN; brotli/compressed transfer; cache correct (`Cache-Control: public,max-age=0,must-revalidate` for HTML, hashed assets long-cached); WebP via `/_next/image`; TTFB exceeds 800ms vantage (−2); hero image not preloaded (−1). HTML size 292KB (inside 2MB, flagged as warning above).