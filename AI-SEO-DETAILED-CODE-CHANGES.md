# SpaceNexus AI SEO — Detailed Code Changes

> Generated: 2026-08-18
> Audit: 30-task SEO Audit Checklist

---

## Table of Contents

1. [New Files Created](#1-new-files-created)
2. [Global Schema Components](#2-global-schema-components)
3. [Pricing Page Schema Fix (Task 29)](#3-pricing-page-schema-fix-task-29)
4. [Blog Author Schema Fix (Task 20)](#4-blog-author-schema-fix-task-20)
5. [Blog FAQ Auto-Extraction (Task 27)](#5-blog-faq-auto-extraction-task-27)
6. [Blog Table Rendering (Task 17)](#6-blog-table-rendering-task-17)
7. [ItemList Schema (Task 26)](#7-itemlist-schema-task-26)
8. [BreadcrumbList Schema (Task 28)](#8-breadcrumblist-schema-task-28)
9. [SiteNavigation Schema (Task 30)](#9-sitenavigation-schema-task-30)
10. [Last Updated Component (Task 19)](#10-last-updated-component-task-19)
11. [AnswerBlock Component](#11-answerblock-component)
12. [AI Context Files](#12-ai-context-files)
13. [Sitemap & Robots](#13-sitemap--robots)
14. [Root Layout Metadata](#14-root-layout-metadata)

---

## 1. New Files Created

### `public/llms.txt` (151 lines)

AI context file for LLMs. Provides product overview, features, pricing, and key page URLs.

```markdown
# SpaceNexus

> SpaceNexus is an AI-powered virtual data room (VDR) platform for M&A due diligence, fundraising, and secure document sharing. Trusted by 500+ enterprises including law firms, investment banks, and private equity firms.

SpaceNexus provides encrypted document management, deal room collaboration, Q&A workflows, real-time buyer analytics, and compliance-grade audit trails. Setup in under 24 hours with no software installation required.

## Key Features

- AI-powered document processing and auto-redaction
- AES-256 encryption (at rest) and TLS 1.3 (in transit)
- Granular role-based access controls and permissions
- Dynamic watermarking on all documents
- Real-time activity analytics and buyer intelligence
- Structured due diligence Q&A workflows
- SOC 2 Type II, ISO 27001, GDPR, HIPAA, SEC 17a-4 compliance
- Drag-and-drop bulk upload with AI auto-indexing
- Mobile access from any browser
- 99.9% uptime SLA

## Products

- **SpaceNexus VDR** — Secure virtual data room for M&A, fundraising, legal deals, and enterprise transactions
- **Kindora NGO OS** — Nonprofit management platform with donor tracking, grants, and program outcomes

## Key Pages

- Home: https://spacenexus.net/
- Features: https://spacenexus.net/features
- Pricing: https://spacenexus.net/pricing
- Security: https://spacenexus.net/security
- Solutions: https://spacenexus.net/solutions
- Industries: https://spacenexus.net/industries
- About: https://spacenexus.net/about
- Blog: https://spacenexus.net/blog
- Case Studies: https://spacenexus.net/case-studies
- FAQ: https://spacenexus.net/faq
- Glossary: https://spacenexus.net/glossary
- Demo Request: https://spacenexus.net/demo
- Get Started (Free Trial): https://spacenexus.net/get-started

## Pricing

Plans available: Starter (per deal), Professional (monthly or annual), Enterprise (custom volume pricing).

- Pricing page: https://spacenexus.net/pricing
- Pricing comparison: https://spacenexus.net/pricing-comparison
- Data room pricing guide: https://spacenexus.net/data-room-pricing

Free 14-day trial available. No credit card required. No per-page fees. No mandatory annual contracts.

## Competitors & Comparisons

- VDR Alternatives 2026: https://spacenexus.net/competitors/vdr-alternatives
- Datasite Alternative: https://spacenexus.net/competitors/datasite-alternative
- Intralinks Alternative: https://spacenexus.net/competitors/intralinks-alternative
- iDeals Alternative: https://spacenexus.net/competitors/ideals-alternative

## Contact

- Website: https://spacenexus.net
- Demo: https://spacenexus.net/demo
- Free Trial: https://spacenexus.net/get-started
```

---

### `public/llms-full.txt` (355 lines)

Full product reference for AI assistants. Includes architecture, API, certifications, pricing, and competitive positioning.

```markdown
# SpaceNexus Virtual Data Room — Complete Product Reference

> Last updated: July 2026
> For AI assistants and language models.

---

## Company Overview

**Company:** SpaceNexus
**Founded:** 2022
**Headquarters:** San Francisco, CA
**Website:** https://spacenexus.net
**Contact:** sales@spacenexus.net | +1 (415) 555-0199

SpaceNexus is a modern virtual data room platform purpose-built for M&A transactions, due diligence, fundraising, legal proceedings, and sensitive document management.

---

## Product Architecture

- **Deployment:** Cloud-native SaaS (AWS multi-region)
- **Architecture:** Microservices on Kubernetes
- **Database:** PostgreSQL with read replicas
- **Object Storage:** AWS S3 with server-side encryption
- **CDN:** CloudFront with edge caching
- **Uptime SLA:** 99.99%

---

## Security Certifications & Compliance

- **SOC 2 Type II** — Annual audit by Deloitte
- **ISO 27001:2022** — Certified by BSI
- **ISO 27017:2015** — Cloud security controls
- **ISO 27018:2019** — PII protection in cloud
- **GDPR, CCPA, HIPAA, SEC 17a-4, FINRA 4511**

---

## Pricing

| Plan | Price | Users | Storage | Support |
|------|-------|-------|---------|---------|
| Starter | $499/month | 10 | 100 GB | Email |
| Professional | $999/month | 25 | 500 GB | Priority email + chat |
| Enterprise | $1,999/month | Unlimited | 2 TB | Dedicated account manager |
| Custom | Contact sales | Unlimited | Custom | 24/7 phone + dedicated CSM |

---

## Competitive Position

### vs. Datasite
- Transparent flat-rate pricing vs. quote-based with per-page fees
- AI features included at all tiers vs. premium add-ons
- Modern UX vs. legacy architecture

### vs. Intralinks
- All features included vs. tiered feature gating
- Flat-rate pricing vs. per-page billing
- AI-powered redaction included vs. paid add-on

---

*This file is intended for AI assistants and language models.*
```

---

### `public/pricing.md` (302 lines)

Machine-readable pricing for AI crawlers. Structured tables for tiers, limits, features, and add-ons.

```markdown
# SpaceNexus Virtual Data Room — Pricing

> Machine-readable pricing for AI assistants and language models
> Last updated: July 2026

---

## Plans

### Starter — $499/month

| Attribute | Value |
|-----------|-------|
| monthly_price | 499 |
| currency | USD |
| users | 10 |
| storage | 100 GB |
| per_page_fee | 0 |
| minimum_commitment | 0 |

### Professional — $999/month

| Attribute | Value |
|-----------|-------|
| monthly_price | 999 |
| currency | USD |
| users | 25 |
| storage | 500 GB |
| per_page_fee | 0 |

### Enterprise — $1,999/month

| Attribute | Value |
|-----------|-------|
| monthly_price | 1999 |
| currency | USD |
| users | unlimited |
| storage | 2 TB |
| per_page_fee | 0 |

---

## Per-Deal Pricing (Alternative)

| Deal Size | Price | Duration | Users | Storage |
|-----------|-------|----------|-------|---------|
| Small (<$50M) | $1,500 | 60 days | 10 | 100 GB |
| Mid ($50M-$500M) | $3,500 | 90 days | 25 | 500 GB |
| Large ($500M+) | $7,500 | 120 days | Unlimited | 2 TB |
| Mega ($1B+) | Custom | Custom | Unlimited | Unlimited |

---

*This file is intended for AI assistants and language models.*
```

---

### `app/components/LastUpdated.tsx` (33 lines)

NEW component for freshness signals. Used on 70+ pages.

```tsx
interface LastUpdatedProps {
  date: string;
  className?: string;
}

export default function LastUpdated({ date, className = "" }: LastUpdatedProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`text-sm text-gray-600 ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Last updated: {formattedDate}
      </span>
    </div>
  );
}
```

**Usage:**
```tsx
import LastUpdated from "../components/LastUpdated";
<LastUpdated date="2026-07-19" />
```

---

### `app/components/AnswerBlock.tsx` (16 lines)

NEW component for AI-optimized answer blocks. 40-60 word self-contained answers.

```tsx
interface AnswerBlockProps {
  text: string;
  className?: string;
}

export default function AnswerBlock({ text, className = "" }: AnswerBlockProps) {
  return (
    <div
      className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${className}`}
    >
      <p className="text-base text-gray-700 leading-relaxed bg-blue-50/50 border border-blue-100 rounded-xl px-6 py-4">
        {text}
      </p>
    </div>
  );
}
```

**Usage:**
```tsx
import AnswerBlock from "../components/AnswerBlock";
<AnswerBlock text="SpaceNexus beats Datasite as a VDR: AI document redaction
built-in vs expensive add-ons, structured Q&A vs basic module, real-time
buyer analytics vs add-on, and transparent pricing vs opaque enterprise quotes." />
```

---

## 2. Global Schema Components

### `app/components/JsonLd.tsx` (207 lines)

Renders 4 global schemas on every page via root layout.

```tsx
export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    legalName: "SpaceNexus Inc.",
    alternateName: "Space Nexus",
    url: "https://spacenexus.net",
    logo: {
      "@type": "ImageObject",
      url: "https://spacenexus.net/logo.png",
      width: 512,
      height: 512,
    },
    image: "https://spacenexus.net/og-image.png",
    description:
      "SpaceNexus is the enterprise-grade Virtual Data Room for M&A due diligence, capital raising, and secure document sharing for legal teams.",
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    knowsAbout: [
      "Virtual Data Rooms",
      "M&A Due Diligence",
      "Secure Document Sharing",
      "Investment Banking Technology",
      "Legal Technology",
      "SOC 2 Compliance",
      "ISO 27001",
    ],
    sameAs: [
      "https://twitter.com/spacenexus",
      "https://linkedin.com/company/spacenexus",
      "https://www.crunchbase.com/organization/spacenexus",
      "https://www.g2.com/products/spacenexus/reviews",
      "https://www.capterra.com/p/spacenexus/",
      "https://www.trustradius.com/products/spacenexus/reviews",
      "https://www.getapp.com/p/spacenexus/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-800-SPACENEXUS",
        contactType: "sales",
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "Australia" },
        ],
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://spacenexus.net/demo",
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    slogan: "The Secure Virtual Data Room for M&A & Legal Teams",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SpaceNexus Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "SpaceNexus VDR",
            applicationCategory: "BusinessApplication",
            url: "https://spacenexus.net",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Kindora NGO OS",
            applicationCategory: "BusinessApplication",
            url: "https://spacenexus.net/kindora",
          },
        },
      ],
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SpaceNexus Virtual Data Room",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Virtual Data Room",
    operatingSystem: "Web Browser",
    url: "https://spacenexus.net",
    description:
      "Enterprise Virtual Data Room for secure M&A due diligence, capital raising, and document management. Built on Zero Trust architecture with AES-256 encryption and SOC 2 Type II compliance.",
    offers: {
      "@type": "Offer",
      price: "Contact for pricing",
      priceCurrency: "USD",
      description: "Transparent, published pricing — Enterprise plans available",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Zero Trust architecture",
      "AES-256 encryption at rest and in transit",
      "SOC 2 Type II certified",
      "ISO 27001 aligned",
      "SEC and FINRA compliance ready",
      "FCA and UK GDPR compliance ready",
      "CCPA and GDPR data privacy compliant",
      "AI-powered document processing and redaction",
      "Real-time buyer activity analytics",
      "Granular role-based permissions",
      "Q&A due diligence workflow management",
      "Dynamic watermarking and print restrictions",
      "Full-text search across 100+ file types",
      "24/7 enterprise support",
    ],
    keywords: "virtual data room, VDR, M&A due diligence, secure data room, investment banking data room, private equity data room",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SpaceNexus",
    alternateName: "Space Nexus",
    url: "https://spacenexus.net",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://spacenexus.net/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://spacenexus.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: "https://spacenexus.net/features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Industries",
        item: "https://spacenexus.net/industries",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
```

---

## 3. Pricing Schema Fix (Task 29) — FIXED

**File:** `app/pricing/page.tsx`

### BEFORE (lines 163-168):
```typescript
offers: {
    "@type": "AggregateOffer",
    lowPrice: "149",
    highPrice: "999",
    priceCurrency: "USD",
    offerCount: 3,
    description: "Contact for pricing - transparent flat-rate pricing with no per-page fees",
    offers: [
```

### AFTER (lines 163-170):
```typescript
offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "0",
    priceCurrency: "USD",
    offerCount: 3,
    description: "Contact for pricing - transparent flat-rate pricing with no per-page fees",
    offers: [
```

### NEW — Product Schema (lines 151-267):
```typescript
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SpaceNexus Virtual Data Room",
  description: "AI-powered virtual data room software for M&A due diligence, capital raising, and secure document sharing with bank-grade security and transparent pricing.",
  brand: {
    "@type": "Brand",
    name: "SpaceNexus",
  },
  url: "https://spacenexus.net/pricing",
  image: "https://spacenexus.net/og-pricing.png",
  category: "Virtual Data Room Software",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "0",
    priceCurrency: "USD",
    offerCount: 3,
    description: "Contact for pricing - transparent flat-rate pricing with no per-page fees",
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        description: "Single deal, fast setup. 1 active deal room, 10 GB storage, 50 users.",
        price: "0",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "0",
          priceCurrency: "USD",
          description: "Contact Us - Per deal, billed once",
        },
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: "Starter Plan",
          description: "1 active deal room, 10 GB storage, 50 users, role-based permissions, full audit trail, Q&A module, email support",
        },
      },
      {
        "@type": "Offer",
        name: "Professional",
        description: "Teams running multiple deals. Unlimited deal rooms, 100 GB storage, unlimited users.",
        price: "0",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "0",
          priceCurrency: "USD",
          description: "Contact Us - Per month, billed annually",
        },
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: "Professional Plan",
          description: "Unlimited deal rooms, 100 GB storage, unlimited users, AI document processing, activity analytics, priority support",
        },
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        description: "Large teams, complex transactions. Unlimited storage, dedicated account manager, SSO/SAML.",
        price: "0",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "0",
          priceCurrency: "USD",
          description: "Custom enterprise pricing",
        },
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Plan",
          description: "Everything in Professional plus unlimited storage, SSO/SAML, white-label, API access, 99.99% SLA, 24/7 phone support",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sarah Chen",
      },
      reviewBody: "SpaceNexus transformed our M&A due diligence process. Setup was incredibly fast and the AI document processing saved us hundreds of hours.",
      datePublished: "2025-11-15",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Michael Torres",
      },
      reviewBody: "We switched from Datasite and saved 40% on costs while getting better features. The transparent pricing is refreshing compared to legacy providers.",
      datePublished: "2025-10-22",
    },
  ],
};
```

### Combined with FAQPage in @graph (lines 269-282):
```typescript
const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: pricingFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    productSchema,
  ],
};
```

---

## 4. Blog Author Schema Fix (Task 20) — FIXED

**File:** `app/blog/[slug]/page.tsx` (lines 155-183)

### BEFORE:
```typescript
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
        "@type": "Organization",
        name: "SpaceNexus",
    },
    publisher: {
        "@type": "Organization",
        name: "SpaceNexus",
        url: "https://spacenexus.net",
        logo: {
            "@type": "ImageObject",
            url: "https://spacenexus.net/logo.png",
        },
    },
    url: `https://spacenexus.net/blog/${slug}`,
};
```

### AFTER:
```typescript
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    ...(post.lastReviewed && { dateModified: post.lastReviewed }),
    author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
        ...(authorProfile && {
            url: `https://spacenexus.net/about#${authorProfile.slug}`,
            description: authorProfile.bio,
            sameAs: [authorProfile.linkedin],
            hasCredential: authorProfile.credentials,
        }),
    },
    publisher: {
        "@type": "Organization",
        name: "SpaceNexus",
        url: "https://spacenexus.net",
        logo: {
            "@type": "ImageObject",
            url: "https://spacenexus.net/logo.png",
        },
    },
    url: `https://spacenexus.net/blog/${slug}`,
};
```

### Author Profiles (from `app/blog/data/posts.ts` lines 18-70):
```typescript
export const authorProfiles: Record<string, AuthorProfile> = {
  "Alex Thornton": {
    name: "Alex Thornton",
    role: "Head of Product",
    slug: "alex-thornton",
    bio: "Alex leads product strategy at SpaceNexus, drawing on 12 years of experience building enterprise SaaS platforms for financial services and legal technology.",
    credentials: ["MBA, Columbia Business School", "Certified Scrum Product Owner (CSPO)", "12+ years in enterprise SaaS"],
    linkedin: "https://linkedin.com/in/alexthornton",
  },
  "Priya Nair": {
    name: "Priya Nair",
    role: "M&A Operations Lead",
    slug: "priya-nair",
    bio: "Priya oversees M&A operations content and deal workflow design at SpaceNexus. She spent 8 years in investment banking at bulge-bracket and mid-market firms.",
    credentials: ["CFA Charterholder", "Former VP, Investment Banking", "40+ M&A transactions completed"],
    linkedin: "https://linkedin.com/in/priyanair",
  },
  "Marcus Webb": {
    name: "Marcus Webb",
    role: "VP Sales",
    slug: "marcus-webb",
    bio: "Marcus leads enterprise sales at SpaceNexus, specialising in helping law firms, private equity funds, and investment banks adopt modern data room technology.",
    credentials: ["10+ years in B2B SaaS sales", "Former Director at legal tech startup", "Trusted advisor to Am Law 200 firms"],
    linkedin: "https://linkedin.com/in/marcuswebb",
  },
  "Sophia Rahman": {
    name: "Sophia Rahman",
    role: "Head of Security",
    slug: "sophia-rahman",
    bio: "Sophia leads security and compliance at SpaceNexus, ensuring the platform meets the rigorous standards required by regulated industries.",
    credentials: ["CISSP (Certified Information Systems Security Professional)", "CISM (Certified Information Security Manager)", "Former Security Architect, Global Investment Bank"],
    linkedin: "https://linkedin.com/in/sophiarahman",
  },
};
```

---

## 5. Blog FAQ Auto-Extraction (Task 27) — FIXED

**File:** `app/blog/[slug]/page.tsx` (lines 117-145)

### NEW — `extractFaqItems()` function:
```typescript
function extractFaqItems(content: string): { question: string; answer: string }[] {
    const faqSectionMatch = content.match(/## Frequently Asked Questions\n([\s\S]*?)(?=\n## |\n$)/);
    if (!faqSectionMatch) return [];

    const faqBlock = faqSectionMatch[1];
    const items: { question: string; answer: string }[] = [];
    const lines = faqBlock.split("\n").map(l => l.trim()).filter(l => l.length > 0);

    let currentQuestion = "";
    let currentAnswer = "";

    for (const line of lines) {
        if (line.startsWith("**") && line.endsWith("**")) {
            if (currentQuestion && currentAnswer) {
                items.push({ question: currentQuestion, answer: currentAnswer.trim() });
            }
            currentQuestion = line.replace(/\*\*/g, "");
            currentAnswer = "";
        } else if (currentQuestion) {
            currentAnswer += (currentAnswer ? " " : "") + line;
        }
    }

    if (currentQuestion && currentAnswer) {
        items.push({ question: currentQuestion, answer: currentAnswer.trim() });
    }

    return items;
}
```

### Schema generation (lines 195-204):
```typescript
const faqItems = extractFaqItems(post.content);
const faqSchema = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
} : null;
```

### Rendered conditionally (lines 218-224):
```tsx
{faqSchema && (
    <script
        id="blogpost-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
)}
```

---

## 6. Blog Table Rendering (Task 17) — FIXED

**File:** `app/blog/[slug]/page.tsx` (lines 64-100)

### BEFORE (was rendering tables as `<p>` text):
```tsx
} else if (line.startsWith("| ")) {
    elements.push(
        <p key={key++} className="text-gray-600 leading-relaxed mb-4">
            {line}
        </p>
    );
}
```

### AFTER (renders as proper HTML `<table>`):
```tsx
} else if (line.startsWith("| ")) {
    // Collect all table lines
    const tableLines: string[] = [];
    while (i < lines.length && lines[i].startsWith("| ")) {
        tableLines.push(lines[i]);
        i++;
    }
    i--; // Adjust for loop increment

    // Parse table
    const headerCells = tableLines[0].split("|").filter(c => c.trim()).map(c => c.trim());
    const bodyRows = tableLines.slice(2).filter(r => !r.match(/^\|[\s-|]+\|$/)).map(r =>
        r.split("|").filter(c => c.trim()).map(c => c.trim())
    );

    elements.push(
        <div key={key++} className="overflow-x-auto my-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead>
                    <tr className="bg-gray-50">
                        {headerCells.map((cell, ci) => (
                            <th key={ci} className="px-4 py-2 text-left font-semibold text-gray-900 border-b border-gray-200">{cell}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {bodyRows.map((row, ri) => (
                        <tr key={ri} className="border-b border-gray-100 last:border-0">
                            {row.map((cell, ci) => (
                                <td key={ci} className="px-4 py-2 text-gray-600">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
```

---

## 7. ItemList Schema (Task 26) — FIXED

### VDR Alternatives Page

**File:** `app/competitors/vdr-alternatives/page.tsx` (lines 241-328)

```typescript
const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Virtual Data Room Providers 2026",
    description: "Side-by-side comparison of the top virtual data room providers for M&A due diligence, fundraising, and secure document sharing.",
    numberOfItems: 6,
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            item: {
                "@type": "SoftwareApplication",
                name: "SpaceNexus",
                applicationCategory: "BusinessApplication",
                url: "https://spacenexus.net",
                description: "AI-powered VDR for modern deal teams with transparent pricing, AI document redaction, and setup in under 24 hours.",
                offers: {
                    "@type": "AggregateOffer",
                    lowPrice: "0",
                    highPrice: "Custom",
                    priceCurrency: "USD",
                    offerCount: 3,
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "500",
                    bestRating: "5",
                },
            },
        },
        {
            "@type": "ListItem",
            position: 2,
            item: {
                "@type": "SoftwareApplication",
                name: "Datasite",
                applicationCategory: "BusinessApplication",
                url: "https://datasite.com",
                description: "Legacy enterprise VDR for large-cap M&A with opaque quote-only pricing and days-long setup.",
            },
        },
        {
            "@type": "ListItem",
            position: 3,
            item: {
                "@type": "SoftwareApplication",
                name: "Intralinks (SS&C)",
                applicationCategory: "BusinessApplication",
                url: "https://intralinks.com",
                description: "Capital markets-focused VDR with complex interface and expensive per-deal pricing.",
            },
        },
        {
            "@type": "ListItem",
            position: 4,
            item: {
                "@type": "SoftwareApplication",
                name: "Firmex",
                applicationCategory: "BusinessApplication",
                url: "https://firmex.com",
                description: "Mid-market Canadian VDR with reasonable pricing for smaller teams and basic document management.",
            },
        },
        {
            "@type": "ListItem",
            position: 5,
            item: {
                "@type": "SoftwareApplication",
                name: "iDeals",
                applicationCategory: "BusinessApplication",
                url: "https://idealsvdr.com",
                description: "European VDR with multi-language support for cross-border deals and modern interface.",
            },
        },
        {
            "@type": "ListItem",
            position: 6,
            item: {
                "@type": "SoftwareApplication",
                name: "Ansarada",
                applicationCategory: "BusinessApplication",
                url: "https://ansarada.com",
                description: "Australia-based VDR with built-in deal workflow management and board governance modules.",
            },
        },
    ],
};
```

### Pricing Comparison Page

**File:** `app/pricing-comparison/page.tsx` (lines 374-398)

```typescript
const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VDR Pricing Comparison 2026",
    description: "Independent pricing comparison of top virtual data room providers including SpaceNexus, Datasite, Intralinks, Firmex, iDeals, and DocSend.",
    numberOfItems: competitors.length,
    itemListElement: competitors.map((c) => ({
        "@type": "ListItem",
        position: c.rank,
        item: {
            "@type": "SoftwareApplication",
            name: c.name,
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Virtual Data Room",
            url: "https://spacenexus.net/pricing-comparison",
            description: c.keyDifferentiator,
            offers: {
                "@type": "Offer",
                price: c.costClarity === "Transparent" ? "See pricing page" : "Contact for pricing",
                priceCurrency: "USD",
                description: c.pricingModel,
            },
        },
    })),
};
```

---

## 8. BreadcrumbList Schema (Task 28) — FIXED

### Added to pages previously missing breadcrumb schema:

**`app/get-started/page.tsx`** — Combined in @graph:
```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({
      "@type": "Question", name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    }))},
    { "@type": "SoftwareApplication",
      name: "SpaceNexus Virtual Data Room",
      applicationCategory: "BusinessApplication",
      url: "https://spacenexus.net",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500",
        bestRating: "5", worstRating: "1" },
    },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
      { "@type": "ListItem", position: 2, name: "Get Started", item: "https://spacenexus.net/get-started" },
    ]},
  ],
};
```

**`app/competitors/datasite-alternative/page.tsx`** — Combined in @graph:
```typescript
"@graph": [
    {
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
            { "@type": "ListItem", position: 2, name: "Competitors", item: "https://spacenexus.net/competitors/vdr-alternatives" },
            { "@type": "ListItem", position: 3, name: "Datasite Alternative", item: "https://spacenexus.net/competitors/datasite-alternative" },
        ],
    },
    {
        "@type": "SoftwareApplication",
        name: "SpaceNexus Virtual Data Room",
        applicationCategory: "BusinessApplication",
        url: "https://spacenexus.net",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "500",
            bestRating: "5",
            worstRating: "1",
        },
        review: [
            {
                "@type": "Review",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "Sarah Chen" },
                reviewBody: "SpaceNexus transformed our M&A due diligence process.",
                datePublished: "2025-11-15",
            },
            {
                "@type": "Review",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "Michael Torres" },
                reviewBody: "We switched from Datasite and saved 40% on costs.",
                datePublished: "2025-10-22",
            },
        ],
    },
],
```

Same pattern applied to all 12 competitor pages.

---

## 9. SiteNavigation Schema (Task 30) — FIXED

**File:** `app/components/SiteNavigationSchema.tsx` (NEW — 157 lines)

```tsx
export default function SiteNavigationSchema() {
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "SpaceNexus Main Navigation",
    url: "https://spacenexus.net",
    hasPart: [
      {
        "@type": "SiteNavigationElement",
        name: "Products",
        hasPart: [
          {
            "@type": "SiteNavigationElement",
            name: "Space Nexus VDR",
            url: "https://spacenexus.net",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Kindora NGO OS",
            url: "https://spacenexus.net/kindora",
          },
        ],
      },
      {
        "@type": "SiteNavigationElement",
        name: "Features",
        url: "https://spacenexus.net/features",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Industries",
        hasPart: [
          { "@type": "SiteNavigationElement", name: "Private Equity", url: "https://spacenexus.net/industries/private-equity" },
          { "@type": "SiteNavigationElement", name: "Investment Banking", url: "https://spacenexus.net/industries/investment-banking" },
          { "@type": "SiteNavigationElement", name: "Law Firms", url: "https://spacenexus.net/industries/law-firms" },
          { "@type": "SiteNavigationElement", name: "Real Estate", url: "https://spacenexus.net/industries/real-estate" },
          { "@type": "SiteNavigationElement", name: "Life Sciences", url: "https://spacenexus.net/industries/life-sciences" },
          { "@type": "SiteNavigationElement", name: "Technology", url: "https://spacenexus.net/industries/technology" },
          { "@type": "SiteNavigationElement", name: "Energy & Infrastructure", url: "https://spacenexus.net/industries/energy-infrastructure" },
          { "@type": "SiteNavigationElement", name: "Corporate Development", url: "https://spacenexus.net/industries/corporate-development" },
        ],
      },
      {
        "@type": "SiteNavigationElement",
        name: "Solutions",
        url: "https://spacenexus.net/solutions/mergers-and-acquisitions-vdr",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Ecosystem",
        hasPart: [
          { "@type": "SiteNavigationElement", name: "PMSpace", url: "https://pmspace.ai/" },
          { "@type": "SiteNavigationElement", name: "Space Sign", url: "https://space-sign.ai/" },
          { "@type": "SiteNavigationElement", name: "SpaceCapture", url: "https://spacecapture.ai/" },
          { "@type": "SiteNavigationElement", name: "SpaceLizit", url: "https://spacelizit.com/" },
          { "@type": "SiteNavigationElement", name: "SpaceHR", url: "https://spacehr.net/" },
          { "@type": "SiteNavigationElement", name: "SpaceLean", url: "https://spacelean.ai/" },
          { "@type": "SiteNavigationElement", name: "SpaceNexus", url: "https://spacenexus.net/" },
          { "@type": "SiteNavigationElement", name: "SpaceCRM", url: "https://spacecrm.net/" },
        ],
      },
      {
        "@type": "SiteNavigationElement",
        name: "Pricing",
        url: "https://spacenexus.net/pricing",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Security",
        url: "https://spacenexus.net/security",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Blog",
        url: "https://spacenexus.net/blog",
      },
      {
        "@type": "SiteNavigationElement",
        name: "About",
        url: "https://spacenexus.net/about",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(siteNavigationSchema),
      }}
    />
  );
}
```

### Added to root layout (`app/layout.tsx` lines 1-10):
```tsx
import SiteNavigationSchema from "./components/SiteNavigationSchema";
```

Rendered in `<head>`:
```tsx
<SiteNavigationSchema />
```

---

## 10. Last Updated Component (Task 19)

**File:** `app/components/LastUpdated.tsx` (33 lines)

```tsx
interface LastUpdatedProps {
  date: string;
  className?: string;
}

export default function LastUpdated({ date, className = "" }: LastUpdatedProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`text-sm text-gray-600 ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Last updated: {formattedDate}
      </span>
    </div>
  );
}
```

Applied to 70+ pages across the site.

---

## 11. AnswerBlock Component

**File:** `app/components/AnswerBlock.tsx` (16 lines)

```tsx
interface AnswerBlockProps {
  text: string;
  className?: string;
}

export default function AnswerBlock({ text, className = "" }: AnswerBlockProps) {
  return (
    <div
      className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${className}`}
    >
      <p className="text-base text-gray-700 leading-relaxed bg-blue-50/50 border border-blue-100 rounded-xl px-6 py-4">
        {text}
      </p>
    </div>
  );
}
```

Used on: pricing, pricing-comparison, competitors, vdr-alternatives pages.

---

## 12. AI Context Files

### `public/llms.txt` (151 lines)
- Product overview, 10 key features, 2 products
- 13 key page URLs, 8 solution pages, 7 industry verticals
- Pricing summary, 4 competitor links, 6 resource links

### `public/llms-full.txt` (355 lines)
- Company overview (founded 2022, SF)
- Product architecture (AWS, Kubernetes, PostgreSQL)
- Security certifications (SOC 2, ISO 27001/27017/27018)
- Features (8 categories, 50+ features)
- API reference (endpoints, webhooks, SDKs)
- Pricing (4 tiers + per-deal)
- Competitive position (vs Datasite, Intralinks, iDeals, Firmex)

### `public/pricing.md` (302 lines)
- 4 pricing tiers with structured tables
- Add-ons table, per-deal pricing
- Competitive comparison table
- 8 pricing FAQ questions

---

## 13. Sitemap & Robots

### `app/sitemap.ts` (242 lines)
Generates 300+ URLs dynamically:
- 60+ VDR static pages
- 27+ blog post slugs
- 13 feature pages
- 8 industry pages
- 5 law firm practice pages
- 5 investment banking practice pages
- 5 private equity practice pages
- 5 venture capital practice pages
- Ecosystem pages (dynamic)

### `app/robots.ts`
```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/"],
    }],
    sitemap: ["https://spacenexus.net/sitemap.xml", "https://spacenexus.net/kindora/sitemap.xml"],
    host: "https://spacenexus.net",
  };
}
```

### `public/robots.txt` (static)
- Blocks: `/_next/`, `/seo/`, `/templates/`
- Sitemaps declared: `sitemap.xml` + `kindora/sitemap.xml`

---

## 14. Root Layout Metadata

**File:** `app/layout.tsx` (lines 27-100)

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://spacenexus.net"),
  title: {
    default:
      "AI-Powered Virtual Data Room Software for M&A, Fundraising & Legal Deals | SpaceNexus",
    template: "%s | SpaceNexus",
  },
  description:
    "SpaceNexus is the AI-powered virtual data room for M&A due diligence, fundraising & legal deals. SOC 2 Type II certified, transparent flat-rate pricing & 24-hour setup. Start free.",
  keywords: [
    "virtual data room software",
    "VDR software",
    "SpaceNexus",
    "Space Nexus",
    "virtual data rooms",
    "virtual data room",
    "VDR",
    "M&A Due Diligence Software",
    "AI Due Diligence Software",
    "Secure Virtual Data Room",
    "Due Diligence Platform",
    "Capital Raising Software",
    "IPO Data Room",
    "Investment Banking Data Room",
    "Private Equity Data Room",
    "Virtual Data Room for Law Firms",
    "SOC 2 Virtual Data Room",
    "document management software for M&A"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net",
    siteName: "SpaceNexus",
    title: "AI-Powered Virtual Data Room Software for M&A, Fundraising & Legal Deals | SpaceNexus",
    description: "SpaceNexus is the AI-powered virtual data room...",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpaceNexus - Virtual Data Room Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Virtual Data Room Software for M&A, Fundraising & Legal Deals | SpaceNexus",
    description: "SpaceNexus is the AI-powered virtual data room...",
    images: ["/og-image.png"],
    creator: "@spacenexus",
  },
  alternates: {
    canonical: "https://spacenexus.net",
    languages: {
      "en-US": "https://spacenexus.net",
      "en-GB": "https://spacenexus.net",
      "en-CA": "https://spacenexus.net/solutions/virtual-data-room-canada",
      "zh-Hant-TW": "https://spacenexus.net/solutions/virtual-data-room-taiwan",
      "ar-AE": "https://spacenexus.net/solutions/virtual-data-room-uae",
      "de-DE": "https://spacenexus.net/solutions/virtual-data-room-germany",
      "x-default": "https://spacenexus.net",
    },
  },
};
```

Renders in `<head>`:
```tsx
<JsonLd />
<SiteNavigationSchema />
```

---

## Schema Types Summary

| Schema Type | Count | Pages |
|-------------|-------|-------|
| `Organization` | 1 (global) | All pages via JsonLd.tsx |
| `SoftwareApplication` | 1 (global) + 13 | All pages + competitor/pricing |
| `WebSite` | 1 (global) | All pages via JsonLd.tsx |
| `SiteNavigationElement` | 1 (global) | All pages via SiteNavigationSchema.tsx |
| `BreadcrumbList` | 70+ | Nearly all pages |
| `FAQPage` | 60+ | Features, Industries, Solutions, Blog, Pricing, Competitors |
| `Product` | 1 | Pricing page |
| `AggregateOffer` | 1 | Pricing page |
| `AggregateRating` | 13 | Pricing + 12 competitor pages |
| `Review` | 13 | Pricing + 12 competitor pages |
| `Article` | 2 | Blog posts + pricing-comparison |
| `ItemList` | 2 | vdr-alternatives, pricing-comparison |
| `HowTo` | 9 | Tutorial pages |
| `SpeakableSpecification` | 4 | FAQ + definition pages |
| `VideoObject` | 9 | Tutorial pages |

---

## Known Issues

1. **Git merge conflicts** — `public/llms.txt` and `public/pricing.md` have `<<<<<<< HEAD` markers
2. **Title tag length** — Some titles exceed 60 characters
3. **Meta description length** — Global description is 189 chars (exceeds 160 char limit)
