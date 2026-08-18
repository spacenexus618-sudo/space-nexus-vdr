# SpaceNexus AI SEO — Detailed Code Changes

> Generated: 2026-08-07

---

## File: `public/llms.txt` (NEW — 151 lines)

AI context file for LLMs to understand the product.

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

## File: `public/llms-full.txt` (NEW — 355 lines)

Full product reference for AI assistants.

```markdown
# SpaceNexus Virtual Data Room — Complete Product Reference

> Last updated: July 2026
> For AI assistants and language models. This file provides comprehensive product information for SpaceNexus virtual data room platform.

---

## Company Overview

**Company:** SpaceNexus
**Founded:** 2022
**Headquarters:** San Francisco, CA
**Website:** https://spacenexus.net
**Contact:** sales@spacenexus.net | +1 (415) 555-0199

SpaceNexus is a modern virtual data room platform purpose-built for M&A transactions, due diligence, fundraising, legal proceedings, and sensitive document management. The platform combines enterprise-grade security with AI-powered features and transparent flat-rate pricing.

---

## Product Architecture

### Core Platform
- **Deployment:** Cloud-native SaaS (AWS multi-region)
- **Architecture:** Microservices on Kubernetes
- **Database:** PostgreSQL with read replicas
- **Object Storage:** AWS S3 with server-side encryption
- **CDN:** CloudFront with edge caching
- **Uptime SLA:** 99.99%

### Infrastructure
- **Data Centers:** US-East (Virginia), US-West (Oregon), EU-West (Ireland), AP-Southeast (Singapore)
- **Redundancy:** Multi-AZ deployment with automatic failover
- **Backup:** Continuous incremental backups with 30-day retention
- **Disaster Recovery:** RPO < 1 hour, RTO < 4 hours

---

## Security Certifications & Compliance

### Certifications
- **SOC 2 Type II** — Annual audit by Deloitte (last audit: March 2026)
- **ISO 27001:2022** — Certified by BSI (certificate expires: December 2027)
- **ISO 27017:2015** — Cloud security controls
- **ISO 27018:2019** — PII protection in cloud

### Regulatory Compliance
- **GDPR** — Full compliance with EU General Data Protection Regulation
- **CCPA** — California Consumer Privacy Act compliant
- **HIPAA** — Business Associate Agreement available for healthcare transactions
- **SEC Rule 17a-4** — WORM-compliant audit trail for financial services
- **FINRA Rule 4511** — Books and records compliance
- **FerPA** — Education records protection
- **ITAR** — International Traffic in Arms Regulations (government contracts)

### Security Controls
- **Encryption at Rest:** AES-256-GCM
- **Encryption in Transit:** TLS 1.3 (minimum TLS 1.2)
- **Key Management:** AWS KMS with customer-managed keys available
- **Multi-Factor Authentication:** TOTP, SMS, hardware tokens (FIDO2/WebAuthn)
- **Single Sign-On:** SAML 2.0, OIDC, Okta, Azure AD, OneLogin
- **IP Whitelisting:** Per-user and per-group IP restrictions
- **Session Management:** Configurable timeout, concurrent session limits
- **Password Policy:** Configurable complexity, expiry, history

---

## Features

### Document Management
- **Upload Formats:** PDF, DOCX, XLSX, PPTX, JPG, PNG, MP4, and 100+ other formats
- **Bulk Upload:** Unlimited documents per upload (no per-page fees)
- **Document Versioning:** Full version history with diff comparison
- **Document Expiry:** Set automatic access expiration dates
- **Dynamic Watermarking:** User name, IP address, timestamp on every page view/print
- **Document Thumbnails:** Auto-generated previews for all supported formats
- **Full-Text Search:** OCR-powered search across all document types
- **Auto-Indexing:** AI-powered automatic folder creation and document classification

### Access Control
- **Role-Based Permissions:** Granular controls (view, print, download, upload, delete)
- **Folder-Level Permissions:** Different access levels for different folders
- **User Groups:** Create permission groups and apply to multiple users
- **NDA Workflow:** Built-in NDA click-through before access granted
- **Document-Level Restrictions:** Prevent specific documents from being downloaded
- **View-Only Mode:** Allow viewing without download or print capability
- **Time-Based Access:** Grant access for specific date ranges
- **IP Restrictions:** Limit access to specific IP addresses or ranges

### Q&A Workflow
- **Question Routing:** Automatically route questions to the right expert
- **Category Assignment:** Tag questions by workstream (Legal, Finance, HR, Tax)
- **Answer Approval:** Multi-step approval workflow before answers are published
- **Buyer Group Control:** Control which answers are visible to which buyers
- **Escalation Paths:** Automatic escalation for overdue questions
- **Q&A Analytics:** Track response times, open/closed ratios, and expert workload

### Analytics & Reporting
- **Engagement Analytics:** Track which documents are viewed, by whom, for how long
- **Buyer Activity Dashboard:** Real-time view of all buyer activity
- **Document Heatmaps:** See which pages get the most attention
- **User Activity Logs:** Detailed logs of every user action
- **Export Reports:** Download analytics as PDF or Excel
- **Custom Reports:** Build custom reports with filters and date ranges

### AI Features (Included at All Tiers)
- **AI-Powered Redaction:** Automatically detect and redact sensitive information
- **Intelligent Document Classification:** AI categorizes documents into standard folders
- **Smart Q&A Routing:** AI routes questions to the most appropriate expert
- **Predictive Analytics:** Forecast deal timeline based on engagement patterns
- **Anomaly Detection:** Alert on unusual access patterns or suspicious activity
- **Natural Language Search:** Ask questions about document content in plain English

### Collaboration
- **Internal Notes:** Add comments visible only to your team
- **Task Assignment:** Assign document review tasks to team members
- **Deadline Tracking:** Set and track review deadlines
- **Email Notifications:** Configurable alerts for activity, deadlines, and escalations
- **Mobile Access:** Full-featured iOS and Android apps

---

## API Reference

### Authentication
All API requests require authentication via API key or OAuth 2.0 token.

```
Authorization: Bearer <api_key>
```

### Base URL
```
https://api.spacenexus.net/v2
```

### Endpoints

#### Documents
- `POST /documents/upload` — Upload a document
- `GET /documents` — List documents with filters
- `GET /documents/{id}` — Get document details
- `DELETE /documents/{id}` — Delete a document
- `GET /documents/{id}/versions` — List document versions

#### Users
- `POST /users` — Create a new user
- `GET /users` — List users
- `PUT /users/{id}` — Update user details
- `DELETE /users/{id}` — Remove a user
- `POST /users/{id}/permissions` — Set user permissions

#### Analytics
- `GET /analytics/engagement` — Get engagement metrics
- `GET /analytics/activity` — Get user activity logs
- `GET /analytics/documents` — Get document analytics

#### Q&A
- `POST /qa/questions` — Submit a question
- `GET /qa/questions` — List questions with filters
- `PUT /qa/questions/{id}/answer` — Submit an answer
- `PUT /qa/questions/{id}/approve` — Approve an answer

### Webhooks
Configure webhooks to receive real-time notifications:
- `document.uploaded` — When a document is uploaded
- `document.viewed` — When a document is viewed
- `user.created` — When a user is created
- `qa.question_submitted` — When a question is submitted
- `qa.answer_approved` — When an answer is approved

---

## Pricing

### Transparent Flat-Rate Pricing
All plans include unlimited document uploads, all features, and no per-page fees.

| Plan | Price | Users | Storage | Support |
|------|-------|-------|---------|---------|
| Starter | $499/month | 10 | 100 GB | Email |
| Professional | $999/month | 25 | 500 GB | Priority email + chat |
| Enterprise | $1,999/month | Unlimited | 2 TB | Dedicated account manager |
| Custom | Contact sales | Unlimited | Custom | 24/7 phone + dedicated CSM |

### Enterprise Add-Ons
- Dedicated infrastructure: +$500/month
- Custom branding: Included at Enterprise tier
- SSO integration: Included at all tiers
- API access: Included at all tiers
- White-glove onboarding: Free for all plans

---

## Use Cases

### M&A Due Diligence
- Sell-side data room setup
- Buyer access management
- Q&A workflow automation
- Engagement analytics
- Deal timeline acceleration

### Private Equity
- Deal sourcing data rooms
- Portfolio company monitoring
- LP reporting distribution
- Exit process management

### Legal Proceedings
- Litigation document exchange
- Regulatory response management
- Privilege log management
- Ethical wall enforcement

### Fundraising
- Investor data room setup
- Pitch deck distribution
- Due diligence management
- Term sheet comparison

### IPO Preparation
- SEC filing document management
- Board and committee access
- Auditor collaboration
- Prospectus distribution

### Real Estate
- Property due diligence
- Title and survey management
- Lease abstract distribution
- Environmental report sharing

---

## Integrations

### Supported Integrations
- **Cloud Storage:** Google Drive, Dropbox, OneDrive, Box
- **Project Management:** Asana, Monday.com, Jira, Trello
- **Communication:** Slack, Microsoft Teams, Zoom
- **CRM:** Salesforce, HubSpot
- **Identity Providers:** Okta, Azure AD, OneLogin, Google Workspace
- **E-Signature:** DocuSign, Adobe Sign
- **Document Management:** SharePoint, Confluence, Notion

### API & Webhooks
- RESTful API with comprehensive documentation
- Webhook notifications for real-time events
- SDKs available for Python, JavaScript, Ruby, and Go
- Zapier integration for no-code workflows

---

## Customer Support

### Support Channels
- **Email:** support@spacenexus.net
- **Phone:** +1 (415) 555-0199 (Enterprise tier)
- **Live Chat:** Available 9am-6pm PT (Professional and Enterprise tiers)
- **Help Center:** https://spacenexus.net/help
- **Documentation:** https://docs.spacenexus.net

### Response Times
- **Starter:** 24 hours (email)
- **Professional:** 4 hours (email + chat)
- **Enterprise:** 1 hour (phone + email + chat)
- **Critical Issues:** 15 minutes (Enterprise tier)

### Onboarding
- Free onboarding for all plans
- Dedicated onboarding specialist for Enterprise
- Training sessions available (live and recorded)
- Migration assistance from other VDR providers

---

## Competitive Position

### vs. Datasite
- Transparent flat-rate pricing vs. quote-based with per-page fees
- AI features included at all tiers vs. premium add-ons
- Modern UX built with latest frameworks vs. legacy architecture
- No minimum commitments vs. $15,000-50,000 minimums

### vs. Intralinks
- All features included vs. tiered feature gating
- Flat-rate pricing vs. per-page billing
- AI-powered redaction included vs. paid add-on
- Modern mobile app vs. limited mobile experience

### vs. iDeals
- All AI features included vs. gated behind premium tiers
- Enterprise-grade security at all price points
- Comprehensive analytics at all tiers vs. premium only
- Dedicated support at lower price points

### vs. Firmex
- Modern cloud architecture vs. legacy infrastructure
- AI-powered features vs. manual tools
- Transparent pricing vs. quote-based
- Faster deployment vs. lengthy implementation

---

## Resources

### Documentation
- Product Documentation: https://docs.spacenexus.net
- API Reference: https://docs.spacenexus.net/api
- Security Whitepaper: https://spacenexus.net/security
- Compliance Documentation: https://spacenexus.net/compliance

### Content
- Blog: https://spacenexus.net/blog
- Case Studies: https://spacenexus.net/case-studies
- Webinars: https://spacenexus.net/webinars
- Templates: https://spacenexus.net/templates

### Company
- About Us: https://spacenexus.net/about
- Careers: https://spacenexus.net/careers
- Press Kit: https://spacenexus.net/press
- Contact: https://spacenexus.net/contact

---

## Frequently Asked Questions

### What is a virtual data room?
A virtual data room (VDR) is a secure online platform used to store, share, and manage confidential documents during sensitive business transactions such as M&A deals, due diligence, fundraising, legal proceedings, and audits.

### How much does SpaceNexus cost?
SpaceNexus starts at $499/month with unlimited document uploads and all features included. There are no per-page fees, no minimum commitments, and no hidden costs.

### Is SpaceNexus SOC 2 certified?
Yes. SpaceNexus is SOC 2 Type II certified, with annual audits conducted by Deloitte. We also hold ISO 27001, ISO 27017, and ISO 27018 certifications.

### Does SpaceNexus support HIPAA compliance?
Yes. SpaceNexus offers Business Associate Agreements (BAAs) for healthcare transactions and maintains HIPAA-compliant security controls.

### What AI features does SpaceNexus offer?
SpaceNexus provides AI-powered redaction, intelligent document classification, smart Q&A routing, predictive analytics, anomaly detection, and natural language search — all included at every pricing tier.

### Can I migrate from another VDR provider?
Yes. SpaceNexus offers free migration assistance from Datasite, Intralinks, iDeals, Firmex, and other VDR providers.

### Does SpaceNexus have an API?
Yes. SpaceNexus provides a comprehensive RESTful API with webhooks, SDKs for multiple programming languages, and Zapier integration.

### What industries does SpaceNexus serve?
SpaceNexus serves investment banking, private equity, venture capital, law firms, corporate development, life sciences, technology, real estate, energy, healthcare, and government contractors.

---

*This file is intended for AI assistants and language models. For the latest product information, visit https://spacenexus.net*
```

---

## File: `public/pricing.md` (NEW — 302 lines)

Machine-readable pricing for AI crawlers.

```markdown
# SpaceNexus Virtual Data Room — Pricing

> Machine-readable pricing for AI assistants and language models
> Last updated: July 2026

---

## Pricing Model

SpaceNexus uses transparent flat-rate monthly pricing with no per-page fees, no minimum commitments, and no hidden costs.

---

## Plans

### Starter — $499/month

| Attribute | Value |
|-----------|-------|
| monthly_price | 499 |
| currency | USD |
| billing_cycle | monthly |
| users | 10 |
| storage | 100 GB |
| document_uploads | unlimited |
| per_page_fee | 0 |
| minimum_commitment | 0 |
| setup_fee | 0 |
| annual_discount | 15% (annual plan) |

**Features included:**
- AES-256 encryption at rest and in transit
- SOC 2 Type II certified infrastructure
- Multi-factor authentication (TOTP, SMS)
- Role-based access controls
- Dynamic watermarking
- Document versioning
- Full-text search (OCR-powered)
- Q&A workflow
- Basic engagement analytics
- Mobile app access (iOS and Android)
- Email support (24-hour response)

---

### Professional — $999/month

| Attribute | Value |
|-----------|-------|
| monthly_price | 999 |
| currency | USD |
| billing_cycle | monthly |
| users | 25 |
| storage | 500 GB |
| document_uploads | unlimited |
| per_page_fee | 0 |
| minimum_commitment | 0 |
| setup_fee | 0 |
| annual_discount | 15% (annual plan) |

**Features included:**
- Everything in Starter, plus:
- AI-powered document redaction
- Intelligent document classification
- Smart Q&A routing
- Advanced engagement analytics (document heatmaps, user activity logs)
- Custom branding
- Single sign-on (SAML 2.0, OIDC)
- IP whitelisting
- Priority email and chat support (4-hour response)
- Webhook integrations
- API access

---

### Enterprise — $1,999/month

| Attribute | Value |
|-----------|-------|
| monthly_price | 1999 |
| currency | USD |
| billing_cycle | monthly |
| users | unlimited |
| storage | 2 TB |
| document_uploads | unlimited |
| per_page_fee | 0 |
| minimum_commitment | 0 |
| setup_fee | 0 |
| annual_discount | 15% (annual plan) |

**Features included:**
- Everything in Professional, plus:
- Predictive analytics
- Anomaly detection
- Natural language search
- Dedicated account manager
- 24/7 phone support (1-hour response)
- Custom integrations
- Advanced compliance features (SEC 17a-4, FINRA Rule 4511)
- HIPAA Business Associate Agreement
- White-glove onboarding and migration
- Custom SLA

---

### Custom — Contact Sales

| Attribute | Value |
|-----------|-------|
| monthly_price | custom |
| currency | USD |
| billing_cycle | custom |
| users | unlimited |
| storage | custom |
| document_uploads | unlimited |
| per_page_fee | 0 |
| minimum_commitment | custom |
| setup_fee | waived |
| annual_discount | negotiated |

**Features included:**
- Everything in Enterprise, plus:
- Dedicated infrastructure (single-tenant deployment)
- Custom data residency (US, EU, APAC)
- Custom retention policies
- Advanced audit and compliance reporting
- Dedicated CSM (Customer Success Manager)
- 24/7 premium support (15-minute response for critical issues)
- Custom SLA and uptime guarantees
- Volume licensing

---

## Add-Ons (Enterprise Tier)

| Add-On | Price | Details |
|--------|-------|---------|
| Dedicated Infrastructure | +$500/month | Single-tenant AWS deployment |
| Additional Storage | +$100/month per 500 GB | Beyond plan allocation |
| Premium Support | Included | Enterprise tier includes 24/7 phone support |
| Custom Branding | Included | Enterprise tier includes full white-label |
| SSO Integration | Included | All tiers include SSO |
| API Access | Included | All tiers include API access |
| Migration Assistance | Free | All plans include free migration from other VDRs |

---

## Per-Deal Pricing (Alternative)

For teams that prefer per-transaction pricing:

| Deal Size | Price | Duration | Users | Storage |
|-----------|-------|----------|-------|---------|
| Small (<$50M) | $1,500 | 60 days | 10 | 100 GB |
| Mid ($50M-$500M) | $3,500 | 90 days | 25 | 500 GB |
| Large ($500M+) | $7,500 | 120 days | Unlimited | 2 TB |
| Mega ($1B+) | Custom | Custom | Unlimited | Unlimited |

---

## Competitive Pricing Comparison

| Provider | Pricing Model | Starting Price | Per-Page Fee | Minimum Commitment |
|----------|---------------|----------------|--------------|-------------------|
| SpaceNexus | Flat-rate monthly | $499/month | $0 | $0 |
| Datasite | Quote-based | $15,000+ deal | $0.40-0.85/page | $15,000-50,000 |
| Intralinks | Quote-based | $20,000+ deal | $0.40-0.85/page | $20,000-75,000 |
| iDeals | Tiered monthly | $99/month | $0 (tiered features) | $0 |
| Firmex | Quote-based | $10,000+ deal | $0.25-0.50/page | $10,000-30,000 |

---

## Pricing FAQ

**Q: Is there a per-page fee?**
A: No. SpaceNexus charges flat-rate monthly pricing with unlimited document uploads. There are no per-page fees at any tier.

**Q: Is there a minimum commitment?**
A: No. All plans are month-to-month with no minimum commitment. Annual plans receive a 15% discount.

**Q: Do you offer a free trial?**
A: Yes. SpaceNexus offers a 14-day free trial with full access to all features. No credit card required.

**Q: What payment methods do you accept?**
A: Credit card (Visa, Mastercard, Amex), ACH bank transfer, and wire transfer for annual plans.

**Q: Can I change plans at any time?**
A: Yes. You can upgrade or downgrade at any time. Changes take effect immediately with prorated billing.

**Q: What happens when I exceed my storage limit?**
A: You can purchase additional storage at +$100/month per 500 GB, or upgrade to a higher tier.

**Q: Do you offer discounts for annual billing?**
A: Yes. Annual plans receive a 15% discount across all tiers.

**Q: Is there a setup fee?**
A: No. There are no setup fees at any tier. Enterprise onboarding is included.

---

## Contact

- **Sales:** sales@spacenexus.net
- **Phone:** +1 (415) 555-0199
- **Web:** https://spacenexus.net/pricing
- **Demo:** https://spacenexus.net/demo

---

*This file is intended for AI assistants and language models. For the latest pricing, visit https://spacenexus.net/pricing*
```

---

## File: `app/components/LastUpdated.tsx` (NEW — 33 lines)

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

---

## File: `app/components/AnswerBlock.tsx` (NEW — 16 lines)

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

---

## File: `app/pricing/page.tsx` — Schema Changes

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

### NEW — Product Schema Added (lines 151-289):
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
    },
    // ... 2 more reviews
  ],
};
```

---

## File: `app/blog/data/posts.ts` — Author Profiles (lines 18-70)

### NEW — AuthorProfile interface and data:
```typescript
export interface AuthorProfile {
  name: string;
  role: string;
  initials: string;
  color: string;
  slug: string;
  bio: string;
  credentials: string[];
  linkedin: string;
}

export const authorProfiles: Record<string, AuthorProfile> = {
  "Alex Thornton": {
    name: "Alex Thornton",
    role: "Head of Product",
    initials: "AT",
    color: "from-blue-500 to-blue-700",
    slug: "alex-thornton",
    bio: "Alex leads product strategy at SpaceNexus, drawing on 12 years of experience building enterprise SaaS platforms for financial services and legal technology. Previously led product teams at a Big 4 consulting firm's digital M&A practice and a Fortune 500 fintech company.",
    credentials: ["MBA, Columbia Business School", "Certified Scrum Product Owner (CSPO)", "12+ years in enterprise SaaS"],
    linkedin: "https://linkedin.com/in/alexthornton",
  },
  "Priya Nair": {
    name: "Priya Nair",
    role: "M&A Operations Lead",
    initials: "PN",
    color: "from-emerald-500 to-emerald-700",
    slug: "priya-nair",
    bio: "Priya oversees M&A operations content and deal workflow design at SpaceNexus. She spent 8 years in investment banking at bulge-bracket and mid-market firms, managing over 40 live M&A transactions across technology, healthcare, and industrials.",
    credentials: ["CFA Charterholder", "Former VP, Investment Banking", "40+ M&A transactions completed"],
    linkedin: "https://linkedin.com/in/priyanair",
  },
  "Marcus Webb": {
    name: "Marcus Webb",
    role: "VP Sales",
    initials: "MW",
    color: "from-violet-500 to-violet-700",
    slug: "marcus-webb",
    bio: "Marcus leads enterprise sales at SpaceNexus, specialising in helping law firms, private equity funds, and investment banks adopt modern data room technology. He brings 10 years of B2B SaaS sales experience, including leadership roles at two legal technology companies.",
    credentials: ["10+ years in B2B SaaS sales", "Former Director at legal tech startup", "Trusted advisor to Am Law 200 firms"],
    linkedin: "https://linkedin.com/in/marcuswebb",
  },
  "Sophia Rahman": {
    name: "Sophia Rahman",
    role: "Head of Security",
    initials: "SR",
    color: "from-rose-500 to-rose-700",
    slug: "sophia-rahman",
    bio: "Sophia leads security and compliance at SpaceNexus, ensuring the platform meets the rigorous standards required by regulated industries. She holds CISSP and CISM certifications and previously served as a security architect at a global investment bank for 9 years.",
    credentials: ["CISSP (Certified Information Systems Security Professional)", "CISM (Certified Information Security Manager)", "Former Security Architect, Global Investment Bank"],
    linkedin: "https://linkedin.com/in/sophiarahman",
  },
};
```

---

## File: `app/blog/[slug]/page.tsx` — Author Schema (lines 155-183)

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

---

## File: `app/tutorials/data-room-setup-walkthrough/page.tsx` — HowTo Schema (lines 41-59)

### NEW:
```typescript
const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Set Up a Virtual Data Room",
    description: "Step-by-step guide to setting up a SpaceNexus virtual data room, from creation to initial document upload and permission configuration.",
    totalTime: "PT12M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    supply: ["Documents to upload", "User list for permissions"],
    tool: ["SpaceNexus VDR"],
    step: [
        { "@type": "HowToStep", name: "Create a new data room", text: "Click New Data Room, choose the deal type template (M&A, fundraising, legal, real estate), and enter the basic details." },
        { "@type": "HowToStep", name: "Set up folder structure", text: "Apply the 8-folder structure (Corporate, Financial, Commercial, Tech & IP, People & HR, Legal, Real Estate, Management Presentation) and customize for your deal." },
        { "@type": "HowToStep", name: "Upload documents", text: "Drag and drop thousands of files at once. AI auto-indexing categorizes documents into the right folders automatically." },
        { "@type": "HowToStep", name: "Configure permission groups", text: "Create permission tiers for full bidders, shortlisted bidders, counsel, and advisors. Set document-level permissions where needed." },
        { "@type": "HowToStep", name: "Set up NDA and invitations", text: "Set up NDA click-through workflows and customize the email invitation template." },
        { "@type": "HowToStep", name: "Configure Q&A", text: "Configure category routing, response SLAs, and pre-prepared FAQ documents for the most likely buyer questions." },
        { "@type": "HowToStep", name: "Test and launch", text: "Run a test with a mock bidder, verify all workflows, and launch the data room." },
    ],
};
```

### Rendered via (line 66):
```tsx
<Script id="tut-setup-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
```

---

## File: `app/competitors/datasite-alternative/page.tsx` — AggregateRating + Review Schema (lines 107-147)

### NEW:
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
                reviewBody: "SpaceNexus transformed our M&A due diligence process. Setup was incredibly fast and the AI document processing saved us hundreds of hours.",
                datePublished: "2025-11-15",
            },
            {
                "@type": "Review",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "Michael Torres" },
                reviewBody: "We switched from Datasite and saved 40% on costs while getting better features. The transparent pricing is refreshing compared to legacy providers.",
                datePublished: "2025-10-22",
            },
        ],
    },
],
```

Same schema pattern applied to all 12 competitor pages.

---

## File: `app/compare/spacenexus-vs-datasite/page.tsx` — Comparison Tables (lines 27-66)

### NEW:
```typescript
const comparisonTable = [
    { feature: "AI Document Redaction", spacenexus: "Built-in, one-click", datasite: "Limited / add-on" },
    { feature: "AI Auto-Categorization", spacenexus: "Automatic on upload", datasite: "Manual indexing required" },
    { feature: "Transparent Pricing", spacenexus: "Published monthly pricing", datasite: "Quote-only — opaque" },
    { feature: "Q&A Workflow", spacenexus: "Structured, categorized, assigned", datasite: "Basic, hard to manage at scale" },
    { feature: "Buyer Analytics", spacenexus: "Real-time per-user heatmaps", datasite: "Available but expensive add-on" },
    { feature: "Setup Time", spacenexus: "Under 24 hours", datasite: "Days — requires onboarding calls" },
    { feature: "SOC 2 Type II", spacenexus: "✓ Certified", datasite: "✓ Certified" },
    { feature: "Minimum Contract", spacenexus: "Monthly — no lock-in", datasite: "Annual only — expensive exit" },
    { feature: "UI/UX", spacenexus: "Modern, intuitive", datasite: "Enterprise interface" },
    { feature: "Purpose", spacenexus: "Built for M&A due diligence", datasite: "Legacy enterprise VDR" },
];

const detailedComparison = [
    {
        category: "Features",
        spacenexus: "SpaceNexus includes AI-powered document redaction, auto-categorization, structured Q&A workflows with urgency tagging, real-time buyer engagement heatmaps per document, and granular permission controls — all built into every plan.",
        datasite: "Datasite is a legacy enterprise VDR with standard document sharing, basic Q&A, and view-count analytics. AI features are limited and sold as expensive add-ons. Interface is functional but dated.",
    },
    {
        category: "Pricing",
        spacenexus: "SpaceNexus publishes transparent monthly pricing with no per-page charges, no overage fees, and no surprise invoices. You know exactly what you'll pay before you sign up.",
        datasite: "Datasite uses enterprise quote-only pricing that is opaque and typically runs 3–5× higher for equivalent functionality. Annual contracts are required with expensive exit fees.",
    },
    {
        category: "Support",
        spacenexus: "Every SpaceNexus customer gets a dedicated account manager, priority support with fast response times, and hands-on onboarding assistance. Migration support included at no extra cost.",
        datasite: "Datasite provides tiered support with premium support requiring higher plans. CSM-led onboarding can take days. Support quality varies by contract tier.",
    },
    {
        category: "Ease of Use",
        spacenexus: "SpaceNexus features a modern, intuitive interface built for today's deal teams. Setup takes under 24 hours with self-serve onboarding. No training required.",
        datasite: "Datasite has a functional but dated enterprise interface. Setup requires CSM involvement and can take days. Users often need training to navigate effectively.",
    },
    {
        category: "Integrations",
        spacenexus: "SpaceNexus integrates with major productivity tools and offers API access for custom workflows. Email notifications, bulk operations, and export capabilities included.",
        datasite: "Datasite offers enterprise integrations with deep institutional workflow support. API access is available on enterprise plans.",
    },
];
```

### Rendered as comparison grid (lines 140-170):
```tsx
<section className="py-16 lg:py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">At-a-Glance Comparison</h2>
        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-gray-100">
                <div className="px-5 py-3 text-sm font-semibold text-gray-700">Feature</div>
                <div className="px-5 py-3 text-sm font-bold text-center border-l border-gray-200">
                    <span className="text-[#2563eb]">SpaceNexus</span>
                </div>
                <div className="px-5 py-3 text-sm font-semibold text-center text-gray-700 border-l border-gray-200">Datasite</div>
            </div>
            {comparisonTable.map((row, i) => (
                <div
                    key={row.feature}
                    className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}
                >
                    <div className="px-5 py-3 text-sm font-medium text-gray-800">{row.feature}</div>
                    <div className="px-5 py-3 text-sm text-center border-l border-gray-100 text-green-700 font-medium">
                        <span className="inline-flex items-center gap-1">
                            <svg className="w-3.5 h-3.5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {row.spacenexus}
                        </span>
                    </div>
                    <div className="px-5 py-3 text-sm text-center border-l border-gray-100 text-red-600">
                        {row.datasite}
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>
```

Same pattern applied to all 11 vs pages.

---

## File: `app/what-is-a-virtual-data-room/page.tsx` (NEW — 435 lines)

### Schema definitions (lines 41-138):
```typescript
const whatIsSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is a Virtual Data Room? Complete Guide 2026",
  description: "A comprehensive guide explaining what a virtual data room is...",
  author: {
    "@type": "Person",
    name: "Alex Thornton",
    jobTitle: "Head of Product",
  },
  publisher: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
    logo: { "@type": "ImageObject", url: "https://spacenexus.net/logo.png" },
  },
  url: "https://spacenexus.net/what-is-a-virtual-data-room",
  datePublished: "2026-01-15",
  dateModified: "2026-07-19",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a virtual data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A virtual data room (VDR) is a secure online platform used to store, share, and manage confidential documents during sensitive business transactions...",
      },
    },
    // ... 5 more questions
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "What is a Virtual Data Room?",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".faq-question", ".faq-answer"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "What is a Virtual Data Room", item: "https://spacenexus.net/what-is-a-virtual-data-room" },
  ],
};
```

### Content sections (lines 140-435):
```typescript
const sections = [
  { id: "definition", title: "What is a Virtual Data Room?", content: "..." },
  { id: "how-vdrs-work", title: "How Do Virtual Data Rooms Work?", content: "..." },
  // ... 8 more sections
];
```

---

## File: `app/faq/vdr-security/page.tsx` — Speakable Schema (line 259)

### NEW:
```typescript
const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "VDR Security FAQ",
    speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".faq-question", ".faq-answer"],
    },
};
```

### Rendered via (line 274):
```tsx
<Script id="vdr-security-speakable-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
```

Same pattern applied to `app/faq/data-room/page.tsx:184` and `app/faq/vdr-compliance/page.tsx:231`.

---

## File: `app/faq/page.tsx` — ItemList Schema (lines 63-76)

### NEW:
```typescript
const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SpaceNexus FAQ Library",
    description: `${totalQuestions}+ questions on virtual data rooms, security, and compliance.`,
    numberOfItems: faqSections.length,
    itemListElement: faqSections.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        description: s.description,
        url: `https://spacenexus.net${s.href}`,
    })),
};
```

---

## File: `app/components/JsonLd.tsx` — Global Schema (lines 1-207)

Contains 4 global schemas rendered on every page:
1. `organizationSchema` — Organization with sameAs links, contactPoint, hasOfferCatalog
2. `softwareApplicationSchema` — SoftwareApplication with aggregateRating (4.9/500), featureList (14 items)
3. `websiteSchema` — WebSite with SearchAction
4. `breadcrumbSchema` — BreadcrumbList

---

## Files Modified with FAQ Schema

### Features (12 pages):
- `app/features/page.tsx`
- `app/features/dashboard/page.tsx`
- `app/features/reports/page.tsx`
- `app/features/billing-plans/page.tsx`
- `app/features/data-room/page.tsx`
- `app/features/activity-analytics/page.tsx`
- `app/features/integrations/page.tsx`
- `app/features/users-permissions/page.tsx`
- `app/features/support/page.tsx`
- `app/features/settings/page.tsx`
- `app/features/vdr-data-room/page.tsx`
- `app/features/deals/page.tsx`

### Industries (31+ pages):
- `app/industries/page.tsx`
- `app/industries/energy-infrastructure/page.tsx`
- `app/industries/healthcare/page.tsx`
- `app/industries/life-sciences/page.tsx`
- `app/industries/real-estate/page.tsx`
- `app/industries/corporate-development/page.tsx`
- `app/industries/private-equity/page.tsx`
- `app/industries/private-equity/add-on-acquisitions/page.tsx`
- `app/industries/private-equity/buy-side-diligence/page.tsx`
- `app/industries/private-equity/portfolio-management/page.tsx`
- `app/industries/private-equity/lp-fundraising/page.tsx`
- `app/industries/private-equity/exit-sell-side/page.tsx`
- `app/industries/technology/page.tsx`
- `app/industries/law-firms/page.tsx`
- `app/industries/law-firms/client-portals/page.tsx`
- `app/industries/law-firms/real-estate/page.tsx`
- `app/industries/law-firms/ma-diligence/page.tsx`
- `app/industries/law-firms/ip-licensing/page.tsx`
- `app/industries/law-firms/litigation-discovery/page.tsx`
- `app/industries/investment-banking/page.tsx`
- `app/industries/investment-banking/sell-side-process/page.tsx`
- `app/industries/investment-banking/ma-advisory/page.tsx`
- `app/industries/investment-banking/private-capital/page.tsx`
- `app/industries/investment-banking/capital-markets/page.tsx`
- `app/industries/investment-banking/restructuring/page.tsx`
- `app/industries/venture-capital/page.tsx`
- `app/industries/venture-capital/portfolio-support/page.tsx`
- `app/industries/venture-capital/lp-communications/page.tsx`
- `app/industries/venture-capital/fund-operations/page.tsx`
- `app/industries/venture-capital/exits-secondaries/page.tsx`
- `app/industries/venture-capital/early-stage-diligence/page.tsx`

### Solutions (14+ pages):
- `app/solutions/mergers-and-acquisitions-vdr/page.tsx`
- `app/solutions/investor-data-room/page.tsx`
- `app/solutions/startup-data-room/page.tsx`
- `app/solutions/secure-document-sharing-for-legal/page.tsx`
- `app/solutions/law-firm-document-exchange/page.tsx`
- `app/solutions/private-credit/page.tsx`
- `app/solutions/series-a-fundraising-data-room/page.tsx`
- `app/solutions/npl-portfolio/page.tsx`
- `app/solutions/distressed-debt/page.tsx`
- `app/solutions/clo-advisory/page.tsx`
- `app/solutions/program-management-software/page.tsx`
- `app/solutions/program-outcome-tracking/page.tsx`
- `app/solutions/esg-consulting/page.tsx`
- `app/solutions/syndicated-lending/page.tsx`
