# GEO Schema & Structured Data Report — spacenexus.net

Date: 2026-10-12
Audit scope: full site (SpaceNexus VDR + Kindora)

## Schema Score

| Entity | Score |
|---|---|
| SpaceNexus VDR (root `/`) | **95/100** |
| Kindora (`/kindora`) | **90/100** |

Score tracked in `GEO-OPTIMIZER-ACTION-PLAN.md` Task 24. Recompute on next monthly baseline.
Add G2 / Capterra / Wikipedia / Wikidata to `sameAs` once profiles exist (see below).

## Detected Schemas

| Page / Template | Schema Types | Format | Status | Notes |
|---|---|---|---|---|
| `/` (JsonLd.tsx) | Organization, SoftwareApplication, WebSite, BreadcrumbList | JSON-LD | Valid | sameAs fixed (see below) |
| `/kindora` (KindoraJsonLd.tsx) | Organization, WebSite, SoftwareApplication, SoftwareApplication (VeritasGraph) | JSON-LD | Valid | foundingDate + address added |
| `/blog/[slug]` | BlogPosting (+ FAQPage where present) | JSON-LD | Valid | author = Person w/ LinkedIn sameAs |
| `/kindora/blog/[slug]` | BlogPosting | JSON-LD | Valid | author = name + url (no sameAs) |
| `/what-is-a-virtual-data-room` | WebPage, FAQPage, BreadcrumbList, speakable | JSON-LD | Valid | |
| `/faq/*`, `/faq/data-room`, `/faq/vdr-*` | FAQPage + speakable | JSON-LD | Valid | |
| `/tutorials/*` (10 pages) | HowTo, VideoObject, BreadcrumbList | JSON-LD | Valid | HowTo deprecated-status (see notes) |
| `/kindora/free-tools/*` (9 tools) | tool-schemas module (WebApplication, FAQPage, SoftwareApplication) | JSON-LD | Valid | from `tool-schemas.ts` (Task 22) |
| All 337 routes | at least one JSON-LD block | JSON-LD | Valid | see Validation Results |

## Validation Results

- `pages_total`: **337** (337 with JSON-LD, **0 without**) — Task 23.
- Validation errors: **0** (`schema_validator.py --root app --root public`: errors=[]).
- Server-rendered: **yes** — all JSON-LD is emitted in static `<script>` markup from `page.tsx` / `layout.tsx` components (no client-side JS injection). Meets Google's December 2025 guidance.
- 217 blocks the parser marks "dynamic" (arrow-function/template-literal construction) were manually reviewed in **Task 22** and are all valid JSON-LD at render time — no new unresolved blocks found.

## sameAs Audit

### SpaceNexus VDR (`app/components/JsonLd.tsx`)

| Platform | URL | Status | Action |
|---|---|---|---|
| X / Twitter | `https://x.com/space__nexus` | 200, site-listed (Footer) | **In schema (fixed)** — was fabricated `twitter.com/spacenexus` |
| LinkedIn | `https://www.linkedin.com/in/space-nexus/` | 200, site-listed (Footer) | **In schema (fixed)** — was unverified `linkedin.com/company/spacenexus` |
| YouTube | `https://www.youtube.com/@spacenexus-v1g` | 200, site-listed (Footer) | **In schema (added)** |
| Instagram | `https://www.instagram.com/spacenexus7/` | 200, site-listed (Footer) | **In schema (added)** |
| ProvenExpert | `https://www.provenexpert.com/space-nexus/` | 200, site-listed (social pages) | **In schema (added)** |
| SaaSHub | `https://www.saashub.com/u/spacenexus` | 200, site-listed | **In schema (added)** |
| StartupXplore | `https://startupxplore.com/en/person/space-nexus` | 200, site-listed | **In schema (added)** |
| Crunchbase | `https://www.crunchbase.com/organization/spacenexus` | 403 (existence unproven; site never links) | **Removed** — add once profile exists |
| G2 | `https://www.g2.com/products/spacenexus/reviews` | 403 (fabricated; plan lists as future) | **Removed** — add once profile exists |
| Capterra | `https://www.capterra.com/p/spacenexus/` | 403 (fabricated) | **Removed** — add once profile exists |
| TrustRadius | `https://www.trustradius.com/products/spacenexus/reviews` | 403 (fabricated) | **Removed** — add once profile exists |
| GetApp | `https://www.getapp.com/p/spacenexus/` | 403 (fabricated) | **Removed** — add once profile exists |
| Wikipedia | — | Missing | Add once article exists |
| Wikidata | — | Missing | Add once item exists |

### Kindora (`app/kindora/components/KindoraJsonLd.tsx`)

| Platform | URL | Status | Action |
|---|---|---|---|
| YouTube | `https://www.youtube.com/@KindoraNGOOS1` | 200, site-listed | **Already in schema** |
| Instagram | `https://www.instagram.com/space_kindora_/` | 200, site-listed | **Already in schema** |
| X | `https://x.com/space_kindora` | 200, site-listed | **Already in schema** |
| LinkedIn | `https://www.linkedin.com/company/space-kindora/` | 200, site-listed | **Already in schema** |
| Facebook | `https://www.facebook.com/kindora.ngo.os` | 200, site-listed | **Already in schema** |

Kindora `sameAs` already matched the site's own social-media pages 1:1 — no changes needed.

## Defects Found & Fixed (Task 24)

1. **foundingDate conflict** — `JsonLd.tsx` Organization said `2020`; site About page + llms.txt say **founded 2022** → fixed to `2022`.
2. **Address conflict** — Organization schema said New York, NY; site HQ everywhere is **2500 Marconi Ave, Ste 101, Sacramento, CA 95821** → fixed to full PostalAddress.
3. **Phone conflict** — schema `contactPoint.telephone` = vanity `+1-800-SPACENEXUS`; site-published phone is **+1 646 421 5740** → fixed; added `contact@spacenexus.net` (site-published) as second contactPoint email.
4. **sameAs fabrication** — 5 of 7 VDR sameAs URLs (Crunchbase/G2/Capterra/TrustRadius/GetApp) and the Twitter/LinkedIn handles were not linked anywhere on the site; the 403 statuses left existence unproven. Task 24's own plan note says "add G2/Capterra/Wikipedia once profiles exist" → **removed the unverified links**, replaced with the 7 live-200, site-listed profiles. All still resolve to 200.
5. **Kindora Organization completeness** — added `foundingDate: 2024` (VDR About timeline: "2024 — Launched Kindora NGO OS") and HQ `address` (same PostalAddress).

Re-run after fixes: `schema_validator.py --root app --root public` → **errors=[]**, **337/337 pages with schema**, exit 0.

## Missing Recommended Schemas

- **speakable** on Article/BlogPosting schemas — present only on 4 root pages (`/what-is-a-virtual-data-room`, `/faq/data-room`, `/faq/vdr-security`, `/faq/vdr-compliance`); recommend adding to blog Article schemas via a `cssSelector` on summary/key-takeaway blocks.
- **Author sameAs on Kindora blog** — author is `Person` with name + URL only; add LinkedIn/X sameAs per author for stronger E-E-A-T.
- **Wikipedia/Wikidata/G2/Capterra sameAs** — pending external profile creation; plan entry already tracks this.

## Notes / Recommendations

- **HowTo schemas** on `/tutorials/*` are flagged deprecated-status (rich results removed Aug 2023) but remain useful for AI parsing — keep, but do not promise rich results. No action required.
- **`aggregateRating` 4.9 / 500** on VDR SoftwareApplication matches the site's own `/reviews` page claim exactly — schema is consistent with published content; verify the review count/rating accuracy with the business owner before relying on it as a GEO signal (not a schema-validity issue).
- All JSON-LD is **server-rendered** (static scripts) — no JS-injection compliance risk.
- JSON-LD is the only structured-data format in use (no Microdata/RDFa).
- Re-audit trigger: any new social/profile URL or pricing/founding/address change should re-run the sameAs table above.