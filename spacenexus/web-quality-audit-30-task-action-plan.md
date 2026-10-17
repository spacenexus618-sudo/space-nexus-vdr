# Web Quality Audit — 30-Task Action Plan

Generated from the [web-quality-audit skill](.agents/skills/web-quality-audit/SKILL.md). Covers Performance, Accessibility, SEO, and Best Practices across four priority tiers.

---

## How to use

- **Critical** — Fix immediately (security, complete failures)
- **High** — Fix before launch (Core Web Vitals, major a11y barriers)
- **Medium** — Fix within sprint (optimizations, SEO improvements)
- **Low** — Fix when convenient (minor polish, code quality)

Each task includes a check-box so you can track progress.

---

## Critical (0 found — 0 tasks)

No critical issues expected in a typical pre-audit state. If the audit reveals any, insert them here.

---

## High Priority (15 tasks)

### Performance — Core Web Vitals (Tasks 1–5)

- [ ] **1. Optimize LCP element.** Identify the largest contentful paint element (usually hero image or heading). Ensure it renders within **2.5s**. Preload the LCP image, optimize server response time, and remove render-blocking resources.
- [ ] **2. Improve INP below 200ms.** Profile long tasks in the main thread. Break up heavy JavaScript execution with `yield`/`setTimeout`/`scheduler.postTask()`. Reduce third-party script impact.
- [ ] **3. Eliminate layout shifts (CLS < 0.1).** Set explicit `width` and `height` on all images, videos, and iframes. Reserve space for ads and dynamically injected content. Avoid inserting content above existing content without user interaction.
- [ ] **4. Serve images in next-gen formats.** Convert all raster images to **WebP** or **AVIF** with JPEG/PNG fallbacks. Use `<picture>` with `type` attributes for browser negotiation. Automate via build pipeline.
- [ ] **5. Implement responsive images.** Add `srcset` and `sizes` attributes to every `<img>` so browsers download only the resolution they need. Serve appropriately sized images based on viewport.

### Accessibility — Perceivable & Operable (Tasks 6–10)

- [ ] **6. Fix missing / poor alt text.** Every `<img>` must have meaningful `alt` text. Decorative images get `alt=""`. Audit all icons, SVGs, and background images with text equivalents.
- [ ] **7. Ensure 4.5:1 color contrast (AA).** Check all text against its background using a tool (axe, Lighthouse, or Contrast Checker). Fix low-contrast text, placeholders, and disabled states.
- [ ] **8. Guarantee full keyboard operability.** Tab through every interactive element. Fix keyboard traps, ensure focus order matches visual order, and provide visible focus indicators (`:focus-visible`).
- [ ] **9. Add skip navigation link.** Insert a "Skip to main content" link as the first focusable element on every page. Ensure it becomes visible on focus for keyboard users.
- [ ] **10. Associate form labels correctly.** Every `<input>`, `<select>`, and `<textarea>` must have an associated `<label>` (either via `for`/`id` or wrapping). Fix placeholder-only inputs.

### SEO — Crawlability & On-Page (Tasks 11–15)

- [ ] **11. Add unique `<title>` tags.** Every page gets a unique, descriptive title (50–60 characters). Include primary keyword near the front. Avoid generic titles like "Home" or "Untitled".
- [ ] **12. Write compelling meta descriptions.** Each page needs a unique meta description (150–160 characters) that summarizes the content and includes a call-to-action.
- [ ] **13. Fix heading hierarchy.** One `<h1>` per page. Headings descend logically (`h1 → h2 → h3`) without skipping levels. Headings describe the content that follows.
- [ ] **14. Create and submit XML sitemap.** Generate a `sitemap.xml` listing all canonical pages with correct `lastmod` and `priority`. Submit to Google Search Console and Bing Webmaster Tools.
- [ ] **15. Review robots.txt.** Ensure `robots.txt` doesn't block CSS, JS, or images needed for rendering. Allow all important pages. Disallow only irrelevant paths (admin, staging, etc.).

---

## Medium Priority (10 tasks)

### Performance — Resource Optimization (Tasks 16–19)

- [ ] **16. Minify and tree-shake JavaScript.** Remove dead code. Split bundles by route/component (code splitting). Defer non-critical scripts with `type="module"` or `defer`.
- [ ] **17. Extract and inline critical CSS.** Identify above-the-fold styles and inline them in `<head>`. Load remaining CSS asynchronously. Remove unused CSS rules.
- [ ] **18. Preconnect to third-party origins.** Add `<link rel="preconnect" href="…">` for analytics, CDN, font, and API origins. Use `dns-prefetch` as fallback for older browsers.
- [ ] **19. Implement efficient font loading.** Use `font-display: swap` on all `@font-face` declarations. Subset fonts to needed characters. Preload critical font files. Avoid loading multiple weights unnecessarily.

### Accessibility — Understandable & Robust (Tasks 20–22)

- [ ] **20. Validate HTML.** Run the W3C HTML validator. Fix duplicate IDs, improperly nested elements, and missing required attributes. Ensure ARIA attributes are used correctly (prefer native semantics).
- [ ] **21. Set page language and ensure consistent navigation.** Verify `<html lang="…">` is correct on every page. Navigation order and labels must be identical across all pages.
- [ ] **22. Provide clear error messages and instructions.** Form validation errors must be programmatically associated with their input (`aria-describedby`). Instructions near required fields using `aria-required` or visual cues.

### SEO — Technical & Structured Data (Tasks 23–25)

- [ ] **23. Implement JSON-LD structured data.** Add schema.org markup for the primary page type (Article, Product, FAQ, Organization, etc.). Test with Google's Rich Results Test.
- [ ] **24. Set canonical URLs.** Every page must have a `<link rel="canonical" href="…">` pointing to the preferred version. Prevent duplicate content from URL parameters or www/non-www variations.
- [ ] **25. Ensure mobile-friendly tap targets.** All interactive elements (buttons, links, form controls) must be at least **48×48px** with adequate spacing. Test with Chrome DevTools mobile emulation.

---

## Low Priority (5 tasks)

### Best Practices — Security & Modern Standards (Tasks 26–30)

- [ ] **26. Add Content Security Policy (CSP).** Set a `Content-Security-Policy` HTTP header to mitigate XSS. Start with report-only mode, then enforce. Whitelist only required origins.
- [ ] **27. Enable HSTS and enforce HTTPS.** Redirect all HTTP traffic to HTTPS. Add `Strict-Transport-Security` header. Fix any mixed-content warnings (passive and active).
- [ ] **28. Remove deprecated APIs.** Replace `document.write()`, synchronous XHR, and `MutationEvents`. Move from `unload` to `pagehide`/`visibilitychange`.
- [ ] **29. Keep dependencies up to date.** Run `npm audit` (or equivalent). Update or replace vulnerable packages. Remove unused dependencies.
- [ ] **30. Clean console and fix CORS issues.** Ensure zero browser console errors (warnings are acceptable but aim to reduce them). Fix CORS misconfigurations on API endpoints and font/CDN resources.

---

## Summary

| Category       | High | Medium | Low | Total |
|----------------|------|--------|-----|-------|
| Performance    | 5    | 4      | —   | 9     |
| Accessibility  | 5    | 3      | —   | 8     |
| SEO            | 5    | 3      | —   | 8     |
| Best Practices | —    | —      | 5   | 5     |
| **Total**      | **15** | **10** | **5** | **30** |

## Recommended execution order

1. **Tasks 1–5** (High — Performance Core Web Vitals) — Directly impacts UX and search ranking.
2. **Tasks 6–10** (High — Accessibility) — Legal requirement and broadest user impact.
3. **Tasks 11–15** (High — SEO) — Gets your pages indexed and found.
4. **Tasks 16–25** (Medium) — Deeper optimizations once the basics are solid.
5. **Tasks 26–30** (Low) — Security hardening and housekeeping.

After completing all 30 tasks, run a full Lighthouse audit to verify improvements and identify any remaining issues.
