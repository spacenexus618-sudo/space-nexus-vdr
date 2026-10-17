# Kindora Performance Fix Tasks

Generated: 2026-08-07
Source: SiteSpeed.io coach run against the Kindora site (/kindora baseline).

Three failing checks (each scored 0/100):
1. **Don't scale images in the browser** — 10 images scaled more than 100 px.
2. **Fast first contentful paint** — FCP 3.500 s (poor), high TTFB 1.005 s.
3. **Avoid Google Tag Manager** — page loads gtag from googletagmanager.com.

Each task lists concrete files/lines. Verify each fix with `npx tsc --noEmit`, then
`npm run build`, restart `next start`, and re-run the audit.

---

## Task 1 — Remove the eager logo preload (FCP / TTFB)

**Why:** `app/layout.tsx:125-130` adds
`<link rel="preload" href="/icononly_transparent_nobuffer.png" as="image">`.
This is a **143 KB, 1280x1612 PNG** used only as a small nav/header logo (rendered
~32-40 px). Preloading it on **every** page competes with the LCP image and fonts
for bandwidth, inflating FCP on the tested page (FCP 3.500 s / TTFB 1.005 s).

**Do:**
- Remove the `<link rel="preload" ...>` for `/icononly_transparent_nobuffer.png` in `app/layout.tsx`.
- The nav header already uses `next/image` with `priority`, so it loads on its own.

**Verify:** re-run audit — TTFB/FCP should drop.

---

## Task 2 — Replace the 143 KB source logo with an optimized asset (FCP / weight)

**Why:** `/icononly_transparent_nobuffer.png` is 143 KB at 1280x1612 but displayed at
32-40 px in `Header.tsx`, `KindoraNav.tsx` (L122, L384), and the footer. Several public
files are byte-identical copies of it.

**Do:**
- Export an SVG/PNG nav logo (~8-15 KB) at display size and swap the `next/image` `src`
  values AND the manifest icon entries (`app/manifest.ts`) to it.
- Keep a high-res `.png` only where social (`og:` / JSON-LD) images truly need it.

**Verify:** page weight drops by hundreds of KB across the copies.

---

## Task 3 — Stop scaling images in the browser (P1)

**Audit finding:** "10 images scaled more than 100 px. Send images sized so the browser
doesn't have to scale them."

**Do:**
- `GlobalLocations.tsx:128,173` — flag `<img>`s (w-8 h-6 / w-6 h-[18px]) are rendered much
  smaller than their source. Use `next/image` with real `width`/`height` (or `fill` +
  `sizes`) so a correctly sized variant is served, and add `loading="lazy"`.
- `AnimatedSections.tsx:484-492` — screenshot uses `width={1200} height={720}` with `priority`
  below the fold. Keep eager only where it is the LCP; otherwise lazy-load and let
  `next/image` serve the right size via `sizes`.
- Sweep the ~6 software pages (budget, expense, financial-reporting, cost-allocation,
  association-management, church-management) that re-render the `vdr-dashboard.png`
  `<Image width={1200} height={720} priority>` and apply the same rule.

**Verify:** audit "scaled more than 100 px" count drops to ~0.

---

## Task 4 — Move Google Analytics behind `lazyOnload` (GTM / TTFB)

**Why:** `app/layout.tsx:164-177` loads
`https://www.googletagmanager.com/gtag/js?id=G-18DD7WWPHE` with
`strategy="afterInteractive"` plus gtag `dns-prefetch`/`preconnect` (`layout.tsx:133-136`).
Analytics is non-blocking marketing code; it shouldn't compete with core content on the
critical path. Note: this is direct GA4 (G-...), not a GTM container, but the audit flags it.

**Do:**
- Change the analytics `<Script>` elements to `strategy="lazyOnload"` so gtag loads only
  after the page is interactive.
- Remove the gtag `dns-prefetch`/`preconnect` `<link>` lines unless a measurement shows benefit.
- Confirm the tracking ID is the intended property, or drop the tag if unused.

**Verify:** FCP/TTFB improvement; gtag still fires on scroll/idle.

---

## Task 5 — Reduce TTFB on SSR pages (if still slow after Task 1)

**Do (after Task 1):**
- Confirm Kindora pages are static/SSG (they are): don't turn them into dynamic.
- Look for `useSearchParams` / cookies / external API calls forcing SSR on the tested page;
  move them off the critical path.

**Verify:** re-run TTFB.

---

## Priority summary
| # | Task | Priority | Files |
|---|------|----------|-------|
| 1 | Remove eager logo preload | P1 | `app/layout.tsx:125-130` |
| 2 | Optimize/replace 143 KB logo | P1 | header/nav/footer/manifest |
| 3 | Stop image scaling | P1 | `GlobalLocations.tsx:128,173`, `AnimatedSections.tsx:484`, 6 software pages |
| 4 | gtag → lazyOnload + trim preconnect | P1 | `app/layout.tsx:133-136,164-177` |
| 5 | Reduce TTFB on dynamic pages | P2 | Kindora page components |

## Definition of done
- [ ] Remove eager `preload` PNG in `app/layout.tsx`.
- [ ] Swap the 143 KB PNG for an optimized logo (Header/Footer/Nav/manifest).
- [ ] No `<img>`/`<Image>` scaled >100 px; correct `width`/`height`/`sizes` everywhere.
- [ ] gtag switched to lazy-load and preconnect trimmed.
- [ ] Re-run SiteSpeed: FCP < 1.8 s, TTFB < 0.8 s, scaled-images ~0.