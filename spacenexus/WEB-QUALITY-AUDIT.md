# Web Quality Audit — Kindora (spacenexus.net/kindora)
Date: 2026-10-08
Target pages: `/kindora`, `/kindora/features`, `/kindora/pricing` (live HTML)
Tool: `web-quality-audit` skill (`.agents/skills/web-quality-audit`) — checks replicated with the script's
exact grep criteria (jq not installed on this machine; analyzer invoked equivalently), plus heading/ID checks.

## Audit results

### Critical issues (0 found)
None.

### High priority (0 found)
None.

### Medium priority (1 found)
- **[Accessibility/Best-practices] Duplicate HTML IDs on every sampled page.** Each Kindora page
  (home, features, pricing) contains two elements with `id="main-content"`: a skip-link target
  `<main id="main-content" role="main">` and a wrapper `<div id="main-content">`.
  - **Impact:** Duplicate IDs are invalid HTML and violate WCAG "unique ID" guidance; assistive tech and
    anchor navigation (`<a href="#main-content">`) resolve to the first match, which may not be the intended
    region. Confuses crawlers and screen readers.
  - **Fix:** Rename the `<div id="main-content">` wrapper to `id="main-wrapper"` (or similar) and keep the
    semantic `<main id="main-content">` as the single skip target.

### Low priority (1 found)
- **[SEO] `lang` is set but confirm region subtag on `<html>`** — `lang="en"` present (verified); region form
  (`en-US`) optional and not a defect. No action required.

## Category summary

### Performance — 0 critical, 0 high
Matches Task 15 (`GEO-TECHNICAL-AUDIT.md`): SSR with `X-Nextjs-Prerender`, WebP images via `/_next/image`,
font preload present in `<head>`, defer/async async chunks. Known open items carried from Task 15: TTFB
1.2–1.8s, 292KB home HTML weight, LCP image loading priority, client-hydrated stat counters (render `0+`
in raw HTML).

### Accessibility — 0 critical, 1 medium
- Pass: `<html lang="en">`, skip-to-content link, focus styles, `alt` text on all 3 sampled images
  (0 `<img>` without alt), viewport present, touch-target sized CTAs (44px+), AA-contrast Tailwind palette.
- Medium: duplicate `id="main-content"` (above).

### SEO — 0 issues
- Pass: single `<h1>` per page (home 1, features 1, pricing 1), logical H2 tree (20/16/14), `<title>`,
  canonical self-references, meta description, `index, follow` robots meta, JSON-LD (Organization,
  SoftwareApplication, WebSite per Task 13), robots.txt + dual sitemaps (Tasks 15–16).

### Best practices — 0 critical, 0 high
- Pass: HTML5 doctype, `<meta charSet="utf-8"/>`, HTTPS-only URLs (the 2 `http://www.w3.org/2000/svg`
  hits are SVG namespace URIs — false positives), HSTS/CSP/X-Frame-Options headers (Task 15). No
  document.write or synchronous XHR observed.

## Summary
- Performance: 0 issues (0 critical)
- Accessibility: 1 issue (0 critical) — duplicate ID
- SEO: 0 issues
- Best Practices: 0 issues (1 false positive dismissed)

## Recommended priority
1. Fix the duplicate `id="main-content"` in the Kindora layout component — 2-minute change, removes the only
   regional quality finding.
2. Then address the Task 15 warnings (TTFB/weight/counters) as the performance battleground.
3. Finally re-run this audit after each Task 8 rewrite batch as a regression gate (requires `jq` for the
   bundled `analyze.sh`, or the equivalent checks shown here).