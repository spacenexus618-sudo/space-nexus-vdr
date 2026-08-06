# Kindora Performance Fix Tasks

Generated from a SiteSpeed.io coach run against the Kindora site (2026-08-06).

Three failing checks (each scored 0/100):
1. **Fast first contentful paint** — FCP 3.264 s (poor), TTFB 1.216 s.
2. **Avoid Google Tag Manager** — page loads gtag from googletagmanager.com.
3. **Lazy-load below-the-fold images** — 9 below-the-fold images lack `loading="lazy"`.

---

## Task 1 — Audit & remove the eager logo preload (FCP/TTFB)

**Why:** `app/layout.tsx:125-130` adds
`<link rel="preload" href="/icononly_transparent_nobuffer.png" as="image">`.
This is a **143 KB, 1280×1612 PNG** used only as a small nav/header logo (rendered
~32–40 px). Preloading it on **every** page competes with the LCP image and fonts
for bandwidth, inflating FCP on the tested page.

**Do:**
- Remove the `<link rel="preload" ...>` for `/icononly_transparent_nobuffer.png` in `app/layout.tsx`.
- The nav header already uses `next/image` with `priority`, so it loads on its own.

**Verify:** re-run SiteSpeed → TTFB/FCP should drop.

---

## Task 2 — Replace the 143 KB source logo with an optimized asset (FCP/LCP)

**Why:** `/icononly_transparent_nobuffer.png` is 143 KB at 1280×1612 but displayed
at 32–40 px in `Header.tsx` (L418, L442), `KindoraNav.tsx` (L123, L378), and
`Footer.tsx` (L264). Four public files are byte-identical copies of it:
`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `icononly_transparent_nobuffer.png`.

**Do:**
- Export a SVG/png nav logo (~8–15 KB) at display size and swap the 5 `next/image`
  `src` values AND the manifest icon entries (`app/manifest.ts`) to it.
- Keep 1 high-res `.png` only where social (`og:`/JSON-LD) images truly need it.

**Verify:** page weight `~` drops by ~400 KB across the 4 copies.

---

## Task 3 — Move gtag behind `lazyOnload` (GTM / TTFB contention)

**Why:** `app/layout.tsx:165-177` loads
`https://www.googletagmanager.com/gtag/js?id=G-18DD7WWPHE` with
`strategy="afterInteractive"` plus `dns-prefetch`/`preconnect` links
(`layout.tsx:133-136`). Analytics is non-blocking marketing code; it shouldn't
compete with core content on the critical path.

**Do:**
- Change both analytics `<Script>` to `strategy="lazyOnload"` so gtag loads only
  after the page is interactive.
- Remove the gtag `dns-prefetch`/`preconnect` `<link>` (keep them only if a
  spike-measure shows benefit).
- Confirm the GTM id is a real container or drop the tag if unused.

**Verify:** FCP/TTFB improvement and gtag still firing on scroll/idle.

---

## Task 4 — Make logo & screenshot images lazy where allowed (below-the-fold)

**Why:** `AnimatedSections.tsx:484-492` marks a below-the-fold screenshot
`priority` on `app/kindora/page.tsx` and sibling pages. Combined with the header
logo `priority`, that's ~9 eager images below the fold.

**Do:**
- In `AnimatedSections.tsx`, drop `priority` on the tab screenshot (`:491`) —
  it scrolls below the fold on most viewports.
- Add `loading="lazy"` (or rely on default lazy `next/image`) to any `<img>`
  strictly below the fold in `GlobalLocations.tsx:128,173` flags and other
  repeatable banners.
- Keep `priority` ONLY on the LCP hero image and the header logo.

**Verify:** `Loading ...` appears on html, `<img ... loading="lazy">` for screenshots.

---

## Task 5 — Reduce TTFB on dynamic/SSR pages (if still slow)

**Do (after Task 1):**
- Confirm Kindora pages are static/SSG (they are): don't turn them into dynamic.
- Look for `useSearchParams` / cookies / external API calls forcing SSR on the
  tested page; move them to client-only.

**Verify:** re-run TTFB.

---

## Definition of done

- [ ] Remove eager `preload` PNG in `app/layout.tsx`.
- [ ] Swap 143 KB PNG for an optimized logo (Header/Footer/Nav/manifest).
- [ ] gtag switched to lazy-load and preconnect trimmed.
- [ ] No `priority` on below-the-fold images; lazy flags added.
- [ ] Re-run SiteSpeed: FCP < 1.8 s, TTFB < 0.8 s, all 3 checks pass/exceed 90.