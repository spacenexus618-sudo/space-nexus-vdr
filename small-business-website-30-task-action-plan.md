# Small Business Website — 30-Task Action Plan

Generated from the [small-business-website skill](small-business-website-skill). Builds a polished, mobile-first static marketing site (HTML + Tailwind CSS via CDN + vanilla JS) from discovery through Vercel deployment.

---

## How to use

- Work phases in order — each phase depends on the previous.
- Mark each task with `[x]` when complete.
- After Phase 5 (Build), run the self-check before showing the user any draft.
- Run the review cycles (Tasks 24–27) before deploying.

---

## Phase 1: Discovery Interview (Tasks 1–4)

- [ ] **1. Gather business essentials.** Collect business name, type, address, phone, hours (note irregular days), online ordering/booking link, social media URLs, and Google listing.
- [ ] **2. Define audience & vibe.** Identify target customers. Ask for 3 words describing the intended feel of the site. Note any existing brand colors or logo. List competitors or admired sites.
- [ ] **3. Inventory content.** Document available photos (interior, products, team), the top 3–4 featured products/services, notable Google reviews, and the single most important visitor action (order, book, visit, call).
- [ ] **4. Confirm technical setup.** Verify domain ownership, where photos are stored, and the deployment target (Vercel).

## Phase 2: Competitive Research (Tasks 5–7)

- [ ] **5. Curate top competitor sites.** Search the category (e.g., "best cafe websites", "top salon websites") and list the top 10 sites — local competitors plus well-known brands.
- [ ] **6. Analyze strengths & weaknesses.** Dispatch parallel sub-agents (2–3 sites each) to evaluate layout, hero design, CTAs, mobile UX, photography, copy tone, trust signals, and failures (slow load, buried contact, weak mobile, missing hours/location).
- [ ] **7. Synthesize patterns.** Consolidate into a pros/cons table. Extract actionable patterns: section layouts that work, high-engagement CTAs, effective trust signals, photography style, and common weaknesses to avoid. Present to the user for sign-off.

## Phase 3: Brainstorm & Design Direction (Tasks 8–10)

- [ ] **8. Generate 2–3 design directions.** For each: a mood name (e.g., "Warm Editorial"), a 6-color palette with hex codes and semantic roles (Background, Text, Accent, Secondary, Highlight, Muted), a display + body Google Fonts pairing, and a one-sentence vibe description.
- [ ] **9. Validate the direction.** Run the chosen direction through a UI/UX review agent — check palette library, font pairings, and style references — and refine.
- [ ] **10. Lock the direction.** Get the user's pick. Define the palette in a Tailwind CDN config block in the HTML `<head>`.

## Phase 4: Plan the Build (Tasks 11–14)

- [ ] **11. Create the implementation plan.** Section order: Head, Navbar, Hero, About, Featured Items, Menu/Services Preview, Reviews, Visit/Contact, Footer, Mobile Sticky CTA.
- [ ] **12. Define mobile-first technical patterns.** Navbar transparent→solid on scroll (`~80px`); mobile menu as a **sibling of `<nav>`** (WebKit backdrop-filter bug); featured cards horizontal scroll + `scroll-snap` on mobile, CSS grid on desktop; hours compact mobile / editorial desktop (`md:hidden` / `hidden md:block`); sticky CTA via `IntersectionObserver`.
- [ ] **13. Scaffold project structure.** Create `index.html`, `css/styles.css`, `js/main.js`, `assets/` (logo, images). Set up git.
- [ ] **14. Build the Head.** Meta/OG tags, Tailwind CDN config, Google Fonts, favicon.

## Phase 5: Build (Tasks 15–23)

- [ ] **15. Assemble base HTML shell.** Document skeleton, semantic landmarks, skip-link placeholder, and main section containers.
- [ ] **16. Set up base CSS/JS files.** `styles.css` and `main.js` wired in; Tailwind CDN + fonts loaded; scroll-reveal groundwork.
- [ ] **17. Prepare content assets.** Write hero/about copy using authentic customer language from research (e.g., "hidden gem", "cozy", "worth the trip"). Stage photos and review content.
- [ ] **18. Build Navbar.** Fixed top navbar with transparent→solid state on scroll. Desktop links + CTA button. Mobile hamburger toggle (3-line animation). Logo with business name.
- [ ] **19. Build mobile slide-in menu.** Render as a **sibling of `<nav>`** (not child) to avoid the WebKit backdrop-filter compositing bug. Include close button, numbered links, CTA, phone. Wire open/close JS with overlay tap, close button, and link click handlers.
- [ ] **20. Build Hero section.** Full-bleed background image with gradient overlay. Bottom-aligned editorial content layout. Headline, subtitle, trust badges (hours dot, rating), dual CTAs (primary + secondary), scroll-down indicator animation.
- [ ] **21. Build About + Featured Items.** Business story with photo. 3–4 product/service cards with horizontal scroll on mobile (`scroll-snap`), CSS grid on desktop. Per-item image cropping (`object-position`).
- [ ] **22. Build Reviews + Visit/Contact + Footer.** Google Reviews integration (live API or static fallback). Address, hours (compact mobile / editorial desktop), phone, social links, amenity pills. Footer with logo, address, links, copyright.
- [ ] **23. Write custom CSS + JS.** Scroll-reveal animations (`IntersectionObserver`), sticky CTA bar (appears after hero scrolls past), hamburger animation classes, grain texture overlay, `::selection`, `focus-visible` outlines.

### Self-check after every code change

- [ ] Verify structural integrity: unclosed tags, broken links, missing assets, inconsistent class names.
- [ ] Evaluate mobile aesthetics at 375px: layout flow, readable fonts, image cropping, CTA above the fold.
- [ ] Evaluate desktop aesthetics at 1440px: space usage, grid alignment, hover states, typography hierarchy.
- [ ] Check all colors come from the defined 6-color palette — no hardcoded off-brand grays.
- [ ] Validate mobile menu: sibling of `<nav>`, inline styles for background, close handlers wired.
- [ ] Flag anything generic/AI-looking and rewrite with more personality.

## Phase 6: UI/UX Review Cycles (Tasks 24–27)

- [ ] **24. Mobile UX audit.** Verify: scroll flow without getting stuck, readable text without zooming, images fit without awkward crops, hamburger menu works from any scroll position, tap targets ≥44×44px, sticky CTA doesn't overlap content, hours/address/phone easy to find. Menu background always solid/opaque.
- [ ] **25. Desktop UX audit.** Verify: layout uses full width effectively, hover states present and consistent, navbar transition is smooth, typography hierarchy is clear, cards/grids align properly.
- [ ] **26. Content review.** Does copy use authentic, specific language? Are business hours correct and prominent? Is the primary CTA above the fold? Does the meta description include local search terms?
- [ ] **27. Code review + checkpoint.** Run a code-review agent to validate changes against the plan. Create backups (`cp index.html index.html.bak`). Commit current state. Present a change summary to the user for approval. Repeat cycles until satisfied.

## Phase 7: Deploy (Tasks 28–30)

- [ ] **28. Initial deployment.** Commit all files. Create the GitHub repo (`gh repo create --public --source=. --push`). Connect to Vercel (auto-deploys from `main`).
- [ ] **29. Post-deploy checklist.** Update `og:image` to absolute URL with live domain. Update `og:url` to live domain. Connect custom domain in Vercel settings. Test on an actual phone.
- [ ] **30. Production verification.** Verify Google Reviews API loads correctly in production. Run a final Lighthouse audit. Confirm zero console errors.

---

## Summary

| Phase | Tasks | Description |
|-------|-------|-------------|
| 1 | 1–4 | Discovery Interview |
| 2 | 5–7 | Competitive Research |
| 3 | 8–10 | Brainstorm & Design Direction |
| 4 | 11–14 | Plan the Build |
| 5 | 15–23 | Build (Head → Sticky CTA) |
| 6 | 24–27 | UI/UX Review Cycles |
| 7 | 28–30 | Deploy |

## Pitfalls to avoid

1. **WebKit backdrop-filter bug** — mobile menu inside a nav with `backdrop-filter` gets transparent backgrounds on iOS. Keep menu outside nav.
2. **`touch-action: pan-x` scroll trap** — blocks vertical scrolling, trapping users in horizontal scroll sections. Don't use it.
3. **Tailwind CDN custom colors failing on mobile** — use inline `style=""` with hardcoded hex for critical elements.
4. **Image cropping in cards** — `object-cover` can cut off important parts. Adjust per-image with `object-top`, `object-center`, or `scale-110`.
5. **Mobile menu only works at page top** — scroll-dependent nav styles can break the menu at other positions. Keep menu as nav sibling.
6. **Hours display cramped on mobile** — large editorial numbers don't fit small screens. Use separate mobile/desktop layouts with responsive classes.
