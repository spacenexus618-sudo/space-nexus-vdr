# Kindora Ranking & Performance Action Plan

Source: Search Console Keyword Report (2026-09-01) — ~50 impressions, 1 click.
Reality: only branded/navigational terms are in reach. Win those to #1 first, then build authority for head terms.

Current positions worth targeting:
- `how to add users in kindora` — 2.5 (closest to #1)
- `what is kindora` — 4.25
- `kindora for ngos` — 4.5 (the ONLY keyword that ever got a click)
- `kindora vs instrumentl` — 4.5 (NO dedicated page exists yet — gap)
- `kindora` — 8.84 (brand home)
- `kindora team`, `kindora leads`, `kindora funder`, `sp kindora`, `kindora, inc.` — 7–9.5

Context confirmed in codebase:
- No `app/kindora/kindora-for-ngos/` page exists.
- No `app/kindora/kindora-vs-instrumentl/` page exists (Instrumentl only mentioned in AnimatedSections.tsx).
- Homepage (`app/kindora/page.tsx`) has no "What is Kindora" heading.
- Root components (AppFooter, Header, KindoraCallout, JsonLd, SiteNavigationSchema) already link to /kindora.

---

## Phase 1 — Own the branded & navigational terms (fastest #1s)

### T1. "How to add users in Kindora" step page (rank 2.5 → #1)
- [ ] Create `app/kindora/help/how-to-add-users/` (or `app/kindora/how-to-add-users/`) page.
- [ ] Numbered step list (login → People/Users module → Invite → roles/permissions → save).
- [ ] Add `HowTo` JSON-LD schema with steps.
- [ ] Add route to `app/kindora/sitemap.ts`.
- [ ] Link it from the homepage + pricing/footer.

### T2. "Kindora vs Instrumentl" comparison page (rank 4.5 → #1)
- [ ] Create `app/kindora/kindora-vs-instrumentl/page.tsx`.
- [ ] H1 = "Kindora vs Instrumentl".
- [ ] Feature comparison table (donor, grants, case, accounting, price).
- [ ] Matching metadata (title/description/canonical/openGraph) + FAQPage schema.
- [ ] Add route to `app/kindora/sitemap.ts`.

### T3. "What is Kindora?" block on homepage (rank 4.25 → #1)
- [ ] Add H2 "What is Kindora?" with direct 2–3 sentence definition near top of `app/kindora/page.tsx`.
- [ ] Add FAQPage schema ("What is Kindora?", "What does Kindora do?", "Who is Kindora for?").
- [ ] Ensure homepage `<title>` contains exact "Kindora".

### T4. "Kindora for NGOs" literal content (rank 4.5 → #1, the only click)
- [ ] Create `app/kindora/kindora-for-ngos/` page (H1 = "Kindora for NGOs").
- [ ] Use exact phrase "kindora for ngos" naturally in body + H2.
- [ ] Add route to `app/kindora/sitemap.ts`.
- [ ] Link from homepage + footer.

### T5. Clean up remaining navigational terms
- [ ] `kindora team` → link About page team/meetup section clearly.
- [ ] `kindora funder` / `kindora funder` → clarify pricing/funder-facing copy on pricing or a funder page.
- [ ] `kindora` / `kindora, inc.` / `sp kindora` → ensure brand title/OG consistent (see T9).

---

## Phase 2 — Convert impressions into clicks & trust

### T6. Rich brand card (fix the 0% CTR problem on branded SERPs)
- [ ] Add dedicated `og:image` (non-generic) for `/kindora` — real brand/social card, not the 512×512 logo.
- [ ] Add `twitter:card`/`twitter:image` consistent with og.
- [ ] Verify `og:url`, `og:title`, `og:description` all self-reference `/kindora` and match on-page title.

### T7. Strengthen E-E-A-T / authority
- [ ] Confirm real team + contact + About linked from homepage (About page exists).
- [ ] Add SEO-relevant reviews presence (G2/Capterra — claim, request, embed aggregate where real).

### T8. Internal linking
- [ ] Add homepage-level code fix links (any page that should link /kindora that doesn't — audit root Header/Footer nav).
- [ ] Ensure every Kindora page footer links back to `/kindora`.

### T9. Sitewide title/brand consistency
- [ ] Standardize brand append ("Kindora" / "Kindora by Space Nexus") across all Kindora titles to reduce cannibalization of the brand name.

---

## Phase 3 — Content & authority to lift head terms (ongoing)

### T10. Publish real, useful content (not thin synonym pages)
- [ ] Write 4–6 non-salesy articles: donor retention, grant management 101, nonprofit CRM buying guide, etc.
- [ ] Each targeting ONE head term with genuine depth (these are what Google ranks for head keywords).

### T11. Backlinks
- [ ] Submit to nonprofit directories (TechSoup, Candid/Guidestar, relevant lists).
- [ ] LinkedIn/partner/guest content linking to /kindora.
- [ ] This is the ONLY thing that raises the whole domain for broad terms.

---

## Phase 4 — Technical / indexing follow-up

### T12. Indexing
- [ ] After deploying the above, request indexing in GSC (URL Inspection) for:
  - `https://spacenexus.net/kindora`
  - new Instrumentl page, new help page, new kindora-for-ngos page.
- [ ] Address the 1 "Page with redirect" + 2 "Duplicate, Google chose different canonical" URLs flagged in GSC.

### T13. Deploy flow
- [ ] Commit changes on branch `about`.
- [ ] PR `about` → `main` → redeploy (live site is what Google crawls).
- [ ] Re-run keyword report after 2 weeks to measure position changes.

---

## Priority order (recommended execution)
1. T2 (Instrumentl page) + T1 (how-to-add-users page) — concrete new pages, highest win probability.
2. T3 (What is Kindora?) + T4 (Kindora for NGOs).
3. T6 (rich brand card) + T12 (request indexing).
4. T7/T8/T9 (trust + linking + consistency).
5. T10/T11 (content + backlinks) — ongoing.
