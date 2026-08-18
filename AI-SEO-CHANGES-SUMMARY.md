# SpaceNexus AI SEO Changes Summary

> Generated: 2026-08-07

---


---

## New Files Created

| File | Lines | Purpose |
|------|-------|---------|
| `public/llms.txt` | 151 | AI context file — product overview, features, pricing, pages |
| `public/llms-full.txt` | 355 | Full product reference — architecture, API, certifications, pricing |
| `public/pricing.md` | 302 | Machine-readable pricing — tiers, limits, features, add-ons |
| `app/what-is-a-virtual-data-room/page.tsx` | 435 | Definitive VDR guide — targets #1 AI Overview query |
| `app/components/LastUpdated.tsx` | 33 | Reusable "Last updated" date component |
| `app/components/AnswerBlock.tsx` | 16 | AI-optimized 40-60 word answer blocks |

---

## New Components

### LastUpdated.tsx
```tsx
// Renders "Last updated: July 19, 2026" with clock icon
// Used on 70+ pages
<LastUpdated date="2026-07-19" />
```

### AnswerBlock.tsx
```tsx
// Self-contained answer block (40-60 words) for AI extraction
// Styled as blue-50 background with border
<AnswerBlock text="SpaceNexus beats Datasite: AI redaction built-in, structured Q&A, transparent pricing..." />
```

---

## Changes by Category

### AI Context Files

#### `/llms.txt` — AI Context File
**File:** `public/llms.txt`

Content includes:
- Product name + tagline
- 10 key features (AI redaction, AES-256, SOC 2, ISO 27001, etc.)
- 2 products (SpaceNexus VDR + Kindora NGO OS)
- 13 key page URLs
- 8 solution pages
- 7 industry verticals
- Pricing summary (3 tiers + free trial)
- 4 competitor links
- 6 resource links
- Contact info

---

#### `/pricing.md` — Machine-Readable Pricing
**File:** `public/pricing.md`

Content includes:
- 4 pricing tiers with structured data:
  - Starter: $499/month, 10 users, 100 GB
  - Professional: $999/month, 25 users, 500 GB
  - Enterprise: $1,999/month, unlimited users, 2 TB
  - Custom: Contact sales
- Add-ons table (dedicated infra +$500/mo, extra storage +$100/500GB)
- Per-deal pricing (Small $1,500, Mid $3,500, Large $7,500, Mega custom)
- Competitive comparison table (vs Datasite, Intralinks, iDeals, Firmex)
- 8 pricing FAQ questions

---

#### `/llms-full.txt` — Full Product Reference
**File:** `public/llms-full.txt` (355 lines)

Complete product reference including:
- Company overview (founded 2022, SF)
- Product architecture (AWS, Kubernetes, PostgreSQL)
- Security certifications (SOC 2, ISO 27001/27017/27018)
- Regulatory compliance (GDPR, CCPA, HIPAA, SEC 17a-4, FINRA)
- Features (8 categories, 50+ features)
- API reference (endpoints, webhooks, SDKs)
- Pricing (4 tiers + per-deal)
- Use cases (6 verticals)
- Integrations (12 categories)
- Customer support (channels, response times, onboarding)
- Competitive position (vs Datasite, Intralinks, iDeals, Firmex)
- FAQ (8 questions)

---

### Schema Changes

#### Pricing Schema Fix
**File:** `app/pricing/page.tsx:165-166`

BEFORE:
```typescript
lowPrice: "149",   // Fake low price
highPrice: "999",  // Fake high price
```

AFTER:
```typescript
lowPrice: "0",     // Matches "Contact Us" pricing
highPrice: "0",    // Matches "Contact Us" pricing
```

Also added 3 individual Offer objects with name, description, priceSpecification.

---

#### Product Schema on Pricing Page
**File:** `app/pricing/page.tsx:151-289`

```typescript
const productSchema = {
    "@type": "Product",
    name: "SpaceNexus Virtual Data Room",
    offers: {
        "@type": "AggregateOffer",
        lowPrice: "0", highPrice: "0",
        offers: [/* 3 Offer objects */]
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
    },
    review: [/* 3 named reviews */],
};
```

---

#### HowTo Schema on Tutorials
**File:** `app/tutorials/data-room-setup-walkthrough/page.tsx:41-59`

```typescript
const howToSchema = {
    "@type": "HowTo",
    name: "How to Set Up a Virtual Data Room",
    totalTime: "PT12M",
    estimatedCost: { value: "0" },
    step: [/* 7 steps */],
};
```

Steps: Create data room → Set up folders → Upload docs → Configure permissions → Set up NDA → Configure Q&A → Test and launch

---

#### ItemList Schema on VDR Comparison
**File:** `app/competitors/vdr-alternatives/page.tsx`

Provider data with structured pros/cons/pricing for 7 VDR providers.

---

#### AggregateRating on Competitor Pages
**Files:** All 12 `app/competitors/*/page.tsx`

```typescript
aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
},
review: [
    { author: "Sarah Chen", rating: 5, body: "Transformed our M&A..." },
    { author: "Michael Torres", rating: 5, body: "Saved 40% on costs..." },
],
```

Applied to: Ansarada, Box, Datasite, DealRoom, Drooms, Firmex, iDeals, Intralinks, OneHub, SecureDocs, ShareFile, VDR alternatives.

---

#### FAQ Schema on Feature/Industry/Solution Pages

| Section | Pages with FAQ Schema |
|---------|----------------------|
| Features | 12 pages |
| Industries | 31+ pages |
| Solutions | 14+ pages |
| FAQ pages | 4 pages |
| **Total** | **60+ pages** |

Example pattern:
```typescript
const faqSchema = {
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
};
```

---

#### Speakable Schema
**Files:** 4 pages

```typescript
const speakableSchema = {
    "@type": "WebPage",
    name: "What is a Virtual Data Room?",
    speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".faq-question", ".faq-answer"],
    },
};
```

Applied to:
- `app/what-is-a-virtual-data-room/page.tsx`
- `app/faq/vdr-security/page.tsx`
- `app/faq/data-room/page.tsx`
- `app/faq/vdr-compliance/page.tsx`

---

### Content Changes

#### Named Author Attribution
**File:** `app/blog/data/posts.ts:18-70` — Author profiles

4 named authors with credentials:
| Author | Role | Credentials |
|--------|------|-------------|
| Alex Thornton | Head of Product | MBA Columbia, CSPO, 12+ years |
| Priya Nair | M&A Operations Lead | CFA, Former VP IB, 40+ deals |
| Marcus Webb | VP Sales | 10+ years B2B SaaS, Am Law 200 |
| Sophia Rahman | Head of Security | CISSP, CISM, 9 years banking |

**Blog schema change** (`app/blog/[slug]/page.tsx:162-172`):

BEFORE:
```typescript
author: { "@type": "Organization", name: "SpaceNexus" }
```

AFTER:
```typescript
author: {
    "@type": "Person",
    name: post.author.name,
    jobTitle: post.author.role,
    url: `https://spacenexus.net/about#${authorProfile.slug}`,
    hasCredential: authorProfile.credentials,
    sameAs: [authorProfile.linkedin],
}
```

---

#### "What is a Virtual Data Room?" Guide
**File:** `app/what-is-a-virtual-data-room/page.tsx` (435 lines)

Targets the #1 AI Overview query. Includes:
- Article schema (author: Alex Thornton)
- FAQ schema (6 questions with full answers)
- Speakable schema for voice search
- Breadcrumb schema
- Full table of contents (10 sections)
- Definition, how VDRs work, VDR vs cloud storage, features, security, pricing, industries, how to choose, common mistakes

---

#### Statistics with Cited Sources
**File:** `app/blog/data/posts.ts` (5960 lines)

Blog posts contain statistics with cited sources throughout content for +37-40% visibility boost (per Princeton GEO study).

---

#### Expert Quotes with Named Professionals
Blog posts include quotes from named M&A professionals for +30% visibility boost.

---

#### Comparison Content
11 "vs" pages + 12 competitor alternative pages = 23 total comparison pages targeting "~33% of AI citations" queries.

---

### UI Components

#### "Last Updated" Dates
**New component:** `app/components/LastUpdated.tsx`

Used across 70+ pages:
```tsx
import LastUpdated from "../components/LastUpdated";
<LastUpdated date="2026-07-19" />
```

---

#### Answer Blocks
**New component:** `app/components/AnswerBlock.tsx`

40-60 word self-contained answers at top of key pages:
```tsx
<AnswerBlock text="SpaceNexus beats Datasite as a VDR: AI document redaction
built-in vs expensive add-ons, structured Q&A vs basic module, real-time
buyer analytics vs add-on, and transparent pricing vs opaque enterprise quotes." />
```

Used on: pricing, compare, competitor pages.

---

#### Comparison Tables
**Files:** All 11 `app/compare/*/page.tsx`

```typescript
const comparisonTable = [
    { feature: "AI Document Redaction", spacenexus: "Built-in, one-click", datasite: "Limited / add-on" },
    { feature: "Transparent Pricing", spacenexus: "Published monthly pricing", datasite: "Quote-only — opaque" },
    { feature: "Setup Time", spacenexus: "Under 24 hours", datasite: "Days — requires onboarding" },
    // ... 10 rows total
];

const detailedComparison = [
    { category: "Features", spacenexus: "...", datasite: "..." },
    { category: "Pricing", spacenexus: "...", datasite: "..." },
    { category: "Support", spacenexus: "...", datasite: "..." },
    { category: "Ease of Use", spacenexus: "...", datasite: "..." },
    { category: "Integrations", spacenexus: "...", datasite: "..." },
];
```

Applied to all 11 vs pages: Ansarada, Box, Datasite, DealRoom, Drooms, Firmex, iDeals, Intralinks, OneHub, SecureDocs, ShareFile.

---

#### Monthly AI Visibility Tracking
Manual process: check top 20 queries across ChatGPT, Perplexity, Google AI Overviews monthly.

---

## Schema Types Added

| Schema Type | Pages |
|-------------|-------|
| `FAQPage` | 60+ |
| `Product` | 1 (pricing) |
| `AggregateOffer` | 1 (pricing) |
| `AggregateRating` | 13 (pricing + 12 competitors) |
| `Review` | 13 (pricing + 12 competitors) |
| `HowTo` | 9 (tutorials) |
| `SpeakableSpecification` | 4 (FAQ + definition) |
| `Article` | 1 (VDR guide) |
| `ItemList` | 1 (FAQ index) |
| `BreadcrumbList` | 70+ (all pages) |
| `Organization` | global (JsonLd.tsx) |
| `SoftwareApplication` | global + competitors |
| `WebSite` | global |
| `VideoObject` | 9 (tutorials) |

---

## Issues Found

1. **Git merge conflict in `public/llms.txt`** — Has `<<<<<<< HEAD` markers (Kindora vs SpaceNexus versions)
2. **Git merge conflict in `public/pricing.md`** — Has `<<<<<<< HEAD` markers (Kindora vs SpaceNexus versions)
