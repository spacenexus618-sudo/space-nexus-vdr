import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Investor Data Room Software 2026 | SpaceNexus",
    description: "Best VDR for fundraising: Series A, growth equity, LP reporting. Compare top platforms, pricing, features, and security.",
    alternates: {
        canonical: "https://spacenexus.net/solutions/investor-data-room",
    },
    openGraph: {
        title: "Investor Data Room Software 2026 | SpaceNexus",
        description:
            "Best VDR for fundraising: Series A, growth equity, LP reporting. Compare top platforms,...",
        url: "https://spacenexus.net/solutions/investor-data-room",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Investor Data Room Software 2026 — Best VDR for Fundraising | SpaceNexus",
        description:
            "Comprehensive guide to the best investor data room software. Compare pricing, features, security certifications, and use cases for every capital raise stage.",
    },
    keywords: [
        "investor data room",
        "investor data room software",
        "fundraising data room",
        "VC data room",
        "investor relations data room",
        "data room for investors",
        "Series A data room",
        "Series B data room",
        "pre-IPO data room",
        "LP data room",
        "virtual data room fundraising",
        "investor due diligence data room",
        "best investor data room 2026",
    ],
};

const platforms = [
    {
        name: "SpaceNexus",
        tagline: "AI-powered investor data room built for modern capital raises",
        pricing: "Transparent pricing",
        pricingNote: "Transparent, public pricing",
        bestFor: "Series A–C fundraising, PE secondaries, LP reporting, pre-IPO",
        founded: "2022",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001", "SEC/FINRA Ready"],
        pros: [
            "AI auto-categorization organizes documents on upload",
            "Per-investor engagement scores and session analytics",
            "Structured Q&A with urgency flags and audit trail",
            "Mandatory NDA click-through per investor group",
            "Setup in under 24 hours — no onboarding calls",
            "Transparent monthly pricing, no per-page fees",
        ],
        cons: [
            "Newer platform vs. legacy enterprise VDR brands",
            "Smaller recognition at bulge-bracket banks",
        ],
        highlight: true,
        link: "/demo",
        linkText: "Try SpaceNexus Free",
        badge: "Recommended",
    },
    {
        name: "Datasite",
        tagline: "Legacy enterprise VDR for large-cap institutional transactions",
        pricing: "Quote only",
        pricingNote: "Tens of thousands per deal",
        bestFor: "Large-cap M&A at bulge-bracket investment banks",
        founded: "1968",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Established institutional brand recognition",
            "Handles very high document volumes",
            "Dedicated support team for large deals",
        ],
        cons: [
            "Opaque quote-only pricing with per-page charges",
            "Multi-day setup requiring CSM involvement",
            "AI features sold as expensive add-ons",
            "Steep learning curve for first-time users",
        ],
        highlight: false,
        link: "/competitors/datasite-alternative",
        linkText: "SpaceNexus vs Datasite →",
        badge: null,
    },
    {
        name: "Intralinks",
        tagline: "Capital markets VDR by SS&C Technologies",
        pricing: "Quote only",
        pricingNote: "Tens of thousands per deal",
        bestFor: "Capital raising, syndicated lending, fund administration",
        founded: "1996",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Strong capital markets workflow tools",
            "SS&C fund administration platform integration",
            "Established global compliance support",
        ],
        cons: [
            "Complex, dated interface",
            "Expensive for seed and early-stage rounds",
            "Limited AI and automation features",
            "Slow customer support response times",
        ],
        highlight: false,
        link: "/competitors/intralinks-alternative",
        linkText: "SpaceNexus vs Intralinks →",
        badge: null,
    },
    {
        name: "Dropbox / Google Drive",
        tagline: "General-purpose cloud storage — not a VDR",
        pricing: "Free / low cost",
        pricingNote: "Not purpose-built for investor due diligence",
        bestFor: "Internal file sharing only — not investor due diligence",
        founded: "—",
        hq: "USA",
        certifications: ["SOC 2 Type II (limited scope)"],
        pros: [
            "Familiarity — most teams already use it",
            "Very low cost for basic storage",
        ],
        cons: [
            "No NDA enforcement before document access",
            "No investor engagement analytics",
            "No structured Q&A workflow",
            "No tamper-evident audit trail",
            "Creates legal exposure via shareable links",
            "Not accepted by institutional investors or their counsel",
        ],
        highlight: false,
        link: null,
        linkText: null,
        badge: "Not Recommended",
        badgeColor: "bg-red-100 text-red-700",
    },
    {
        name: "iDeals",
        tagline: "European VDR with clean UI for cross-border raises",
        pricing: "Quote-based",
        pricingNote: "Per-project or subscription",
        bestFor: "European cross-border fundraising, mid-market deals",
        founded: "2008",
        hq: "UK / Lithuania",
        certifications: ["ISO 27001", "SOC 2 Type II"],
        pros: [
            "Multi-language support for EU deals",
            "Clean, modern interface",
            "Competitive mid-market pricing",
        ],
        cons: [
            "Limited US regulatory compliance features",
            "No AI-powered redaction or auto-indexing",
            "Smaller support team for US time zones",
        ],
        highlight: false,
        link: null,
        linkText: null,
        badge: null,
    },
    {
        name: "Firmex",
        tagline: "Canadian mid-market VDR provider",
        pricing: "Quote-based",
        pricingNote: "Per-project pricing available",
        bestFor: "Mid-market M&A and fundraising in Canada and Europe",
        founded: "2007",
        hq: "Canada",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Reasonable mid-market pricing",
            "Clean interface for smaller teams",
            "Good document management fundamentals",
        ],
        cons: [
            "No AI document processing",
            "Limited investor engagement analytics",
            "Basic Q&A without workflow automation",
        ],
        highlight: false,
        link: null,
        linkText: null,
        badge: null,
    },
];

const comparisonFeatures = [
    { feature: "NDA Enforcement Before Access", values: ["✓", "✓", "✓", "✗", "✓", "✓"] },
    { feature: "Per-Investor Engagement Analytics", values: ["✓", "Add-on", "✓", "✗", "✓", "Basic"] },
    { feature: "AI Auto-Categorization", values: ["✓", "✗", "✗", "✗", "✗", "✗"] },
    { feature: "AI Document Redaction", values: ["✓", "Add-on", "✗", "✗", "✗", "✗"] },
    { feature: "Structured Q&A Workflow", values: ["✓", "Basic", "Basic", "✗", "✓", "Basic"] },
    { feature: "Document-Level Permissions", values: ["✓", "✓", "✓", "✗", "✓", "✓"] },
    { feature: "Dynamic Watermarking", values: ["✓", "✓", "✓", "✗", "✓", "✓"] },
    { feature: "Tamper-Evident Audit Trail", values: ["✓", "✓", "✓", "✗", "✓", "✓"] },
    { feature: "SOC 2 Type II", values: ["✓", "✓", "✓", "Partial", "✓", "✓"] },
    { feature: "SEC/FINRA Ready", values: ["✓", "✓", "✓", "✗", "✗", "✗"] },
    { feature: "Transparent Monthly Pricing", values: ["✓", "✗", "✗", "✓", "Partial", "Partial"] },
    { feature: "No Per-Page Charges", values: ["✓", "✗", "✗", "✓", "✓", "✓"] },
    { feature: "Setup Under 24 Hours", values: ["✓", "✗", "✗", "✓", "✓", "✓"] },
    { feature: "Monthly Contracts (No Lock-in)", values: ["✓", "✗", "✗", "✓", "✓", "✓"] },
];

const platformNames = ["SpaceNexus", "Datasite", "Intralinks", "Drive/Dropbox", "iDeals", "Firmex"];

const evaluationCriteria = [
    {
        number: "01",
        title: "NDA Enforcement & Access Control",
        description:
            "Every investor in your data room should click through an NDA before viewing a single document. Look for document-level permissions (not just folder-level), IP address restrictions, and expiring access links — not just a shared Dropbox folder with a password.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
    {
        number: "02",
        title: "Investor Engagement Analytics",
        description:
            "Real-time analytics showing who opened your deck, which financial slides received the most time, and when investors come back for a second session are decisive advantages in fundraising. This is not a nice-to-have — it directly informs your follow-up strategy.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
        number: "03",
        title: "Structured Q&A Workflow",
        description:
            "Investor due diligence generates dozens of questions. A purpose-built Q&A workflow with topic categorization, assignment to your team, urgency flags, and a full audit trail eliminates the email chaos that kills deal momentum. The Q&A log also becomes your disclosure schedule.",
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
    },
    {
        number: "04",
        title: "Security Certifications",
        description:
            "SOC 2 Type II and ISO 27001 are the minimum baseline. Institutional investors and their counsel will ask about your data room's security before reviewing any documents. AES-256 encryption, MFA, dynamic watermarking, and a tamper-evident audit trail should all be standard — not add-ons.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
        number: "05",
        title: "Setup Speed",
        description:
            "Your data room should be live before your first investor meeting — not after you receive a term sheet. Modern investor data room platforms are operational within 24 hours without onboarding calls. If a provider requires days of CSM setup, it's built for a different era.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        number: "06",
        title: "Transparent Pricing",
        description:
            "Legacy providers use opaque, quote-only pricing with per-page upload charges that balloon costs mid-deal. For a startup raising Series A or a PE firm managing multiple portfolio rooms, unpredictable fees destroy budget planning. Require published pricing before selecting a platform.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
];

const useCase = [
    {
        scenario: "Series A Fundraising",
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        recommended: "SpaceNexus",
        reason: "Fast setup, pre-built folder templates, per-VC engagement scoring, and NDA gating. Launch a professional data room before your first partner meeting.",
        link: "/solutions/series-a-fundraising-data-room",
    },
    {
        scenario: "Series B / Growth Equity",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        recommended: "SpaceNexus",
        reason: "Growth equity requires deeper commercial diligence. Staged document release, per-group permissions, and structured Q&A handle the increased complexity without increasing cost.",
        link: null,
    },
    {
        scenario: "PE Secondary & Recapitalization",
        icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
        recommended: "SpaceNexus",
        reason: "Isolated access groups for each bidder protect your negotiating position. Full audit trail and ethical walls keep each party's diligence separate throughout the process.",
        link: "/solutions/mergers-and-acquisitions-vdr",
    },
    {
        scenario: "LP Reporting & Fund Admin",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        recommended: "SpaceNexus",
        reason: "Distribute K-1s, capital call notices, and quarterly reports to individual LPs with per-LP permissions. Each LP sees only their materials, with a full delivery audit trail.",
        link: "/industries/private-equity",
    },
    {
        scenario: "Pre-IPO / Roadshow",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        recommended: "SpaceNexus or Datasite",
        reason: "SpaceNexus for speed and cost. Datasite for large-cap IPOs where institutional brand recognition and dedicated SEC filing support are required by underwriters.",
        link: null,
    },
    {
        scenario: "European / Cross-Border Raises",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        recommended: "SpaceNexus or iDeals",
        reason: "SpaceNexus for GDPR-compliant processes with US investor participation. iDeals for raises centered in the EU with multi-language requirements and EU data residency.",
        link: null,
    },
];

const faqItems = [
    {
        question: "What is an investor data room?",
        answer: "An investor data room is a secure, cloud-based platform where a company organizes and shares confidential financial, legal, and operational documents with prospective investors during a capital raise. It replaces unsecured email file-sharing and gives management full control over who sees what — with NDA enforcement, document-level permissions, a tamper-evident audit trail, and real-time analytics showing which investors are engaging with which materials.",
    },
    {
        question: "How much does an investor data room cost?",
        answer: "Investor data room costs vary significantly by provider. SpaceNexus offers transparent, published monthly pricing with no per-page fees or annual lock-in. Legacy providers like Datasite and Intralinks quote tens of thousands per transaction, with additional per-page charges. Mid-market providers like iDeals and Firmex use quote-based subscription or per-project pricing. For most startups and PE-backed companies, a modern platform like SpaceNexus delivers institutional-grade security at a fraction of legacy VDR cost.",
    },
    {
        question: "What documents should be in an investor data room?",
        answer: "An investor data room should contain: pitch deck and executive summary, historical financials (P&L, balance sheet, cash flow), financial model and projections, cap table (current and post-round), customer list and key contracts, IP ownership documentation, product roadmap and technology architecture, org chart and key employee bios, corporate formation documents, and any existing investor agreements (SAFEs, convertible notes, prior equity rounds).",
    },
    {
        question: "When should I open an investor data room?",
        answer: "Open your investor data room before your first investor meeting — not after receiving an initial term sheet. Serious investors expect a data room to be available when they request one. A well-organized data room at the first meeting signals operational maturity and can accelerate due diligence by weeks. For structured fundraising processes (Series A and above), have your data room 80% populated before launching outreach.",
    },
    {
        question: "How is an investor data room different from Google Drive?",
        answer: "Google Drive and Dropbox lack four critical features investor due diligence requires: (1) Mandatory NDA click-through before any document access; (2) Document-level access permissions — not just folder-level sharing; (3) A tamper-evident audit trail logging every view and download with a timestamp; (4) Structured Q&A to manage due diligence requests. Using Drive for investor due diligence also creates legal exposure — once a document is shared via a shareable link, you have no control over who forwards it.",
    },
    {
        question: "What security certifications should an investor data room have?",
        answer: "The minimum baseline is SOC 2 Type II certification and ISO 27001 compliance. For US-based transactions, look for SEC/FINRA readiness. At the infrastructure level, require AES-256 encryption at rest, TLS 1.3 in transit, multi-factor authentication, dynamic watermarking, and a tamper-evident audit trail. Institutional investors and their legal counsel will ask about these certifications before reviewing any documents.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Investor Data Room Software 2026 — Complete Guide",
    description:
        "The definitive guide to investor data room software in 2026. Compare top VDR platforms for Series A, growth equity, LP reporting, and pre-IPO fundraising.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-06-01",
    mainEntityOfPage: "https://spacenexus.net/solutions/investor-data-room",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://spacenexus.net/solutions" },
        { "@type": "ListItem", position: 3, name: "Investor Data Room", item: "https://spacenexus.net/solutions/investor-data-room" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Investor Data Room",
    description: "Virtual data room for investor communications during fundraising. Nda-gated access, engagement analytics, structured Q&A, and secure document sharing for investor due diligence.",
    url: "https://spacenexus.net/solutions/investor-data-room",
    serviceType: "Virtual Data Room",
    provider: {
        "@type": "Organization",
        name: "SpaceNexus",
        url: "https://spacenexus.net",
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: {
        "@type": "BusinessAudience",
        audienceType: "Founders, fundraising teams, and investor relations",
    },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for pricing tailored to round size and investor count.",
    },
};

export default function InvestorDataRoomPage() {
    return (
        <>
            <Script id="idr-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="idr-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="idr-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="idr-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Solutions</span>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Investor Data Room</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                2026 Investor Data Room Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Investor Data Room Software{" "}
                                <span className="text-[#2563eb]">— The 2026 Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all investor data rooms are built the same. This guide covers what an investor data room is, how to evaluate platforms, and which solutions lead the market in 2026 — across pricing, security, AI features, and investor analytics.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                Last updated: June 2026 &nbsp;·&nbsp; Covers: SpaceNexus, Datasite, Intralinks, iDeals, Firmex, Google Drive
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#platforms" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    See All Platforms
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a href="#comparison-table" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Jump to Comparison
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is an investor data room */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is an investor data room?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                An investor data room is a secure, cloud-based platform where a company organizes and shares confidential financial, legal, and operational documents with prospective investors during a capital raise. Unlike general-purpose file sharing tools, investor data room platforms are purpose-built for the security, compliance, and workflow requirements of due diligence — from early-stage VC rounds to pre-IPO processes.
                            </p>
                            <p>
                                The defining characteristics of an investor data room — as distinct from ordinary cloud storage — are mandatory NDA enforcement at room entry, granular document-level access permissions, a tamper-evident audit trail logging every view and download, structured Q&A workflow management for due diligence questions, and real-time engagement analytics showing which investors are spending the most time on which materials.
                            </p>
                            <p>
                                The market has bifurcated: legacy enterprise platforms built in the 1990s and early 2000s (Datasite, Intralinks) serve large-cap institutional transactions with opaque pricing and complex setup, while a new generation of modern platforms like SpaceNexus delivers AI-powered automation, transparent pricing, and rapid self-serve deployment for the broader fundraising market.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Platform Cards */}
                <section id="platforms" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Top investor data room platforms in 2026
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                An honest breakdown of the leading platforms — what they offer, who they serve, and what the real costs look like.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {platforms.map((p) => (
                                <div
                                    key={p.name}
                                    className={`rounded-2xl border p-7 flex flex-col transition-all duration-300 ${p.highlight
                                        ? "bg-white border-[#2563eb] shadow-lg shadow-blue-500/10 ring-1 ring-[#2563eb]/20"
                                        : "bg-white border-gray-200 hover:shadow-md hover:border-gray-300"
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                                        {p.badge && (
                                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.badgeColor ?? "bg-[#2563eb] text-white"}`}>
                                                {p.badge}
                                            </span>
                                        )}
                                    </div>
                                    {p.founded !== "—" && (
                                        <p className="text-xs text-gray-600 mb-4">Est. {p.founded} &nbsp;·&nbsp; {p.hq}</p>
                                    )}
                                    <p className="text-sm text-gray-600 mb-4">{p.tagline}</p>
                                    <div className="mb-3">
                                        <span className="text-2xl font-bold text-gray-900">{p.pricing}</span>
                                        <span className="text-xs text-gray-600 ml-2">{p.pricingNote}</span>
                                    </div>
                                    <p className="text-xs font-medium text-gray-600 mb-3">Best for: {p.bestFor}</p>
                                    <div className="mb-3">
                                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Certifications</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {p.certifications.map((cert) => (
                                                <span key={cert} className="text-xs bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full font-medium">{cert}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-green-700 mb-1.5">Strengths</p>
                                        <ul className="space-y-1">
                                            {p.pros.map((pro) => (
                                                <li key={pro} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                                                    {pro}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-5">
                                        <p className="text-xs font-semibold text-red-600 mb-1.5">Limitations</p>
                                        <ul className="space-y-1">
                                            {p.cons.map((con) => (
                                                <li key={con} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                                                    {con}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {p.link && (
                                        <div className="mt-auto">
                                            <Link
                                                href={p.link}
                                                className={`inline-flex items-center text-sm font-semibold ${p.highlight
                                                    ? "text-white bg-[#2563eb] hover:bg-[#1d4ed8] px-5 py-2.5 rounded-full shadow-md"
                                                    : "text-[#2563eb] hover:underline"
                                                    }`}
                                            >
                                                {p.linkText}
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section id="comparison-table" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Investor data room feature comparison
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Side-by-side comparison of investor features, security, AI capabilities, pricing, and compliance across all platforms.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm min-w-[820px]">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left px-4 py-4 font-semibold text-gray-900 border-b border-gray-200 sticky left-0 bg-gray-50 z-10 min-w-[210px]">Feature</th>
                                        {platformNames.map((name, i) => (
                                            <th
                                                key={name}
                                                className={`text-center px-3 py-4 font-semibold border-b border-gray-200 min-w-[100px] ${i === 0 ? "text-[#2563eb] bg-blue-50/50" : "text-gray-600"}`}
                                            >
                                                {name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((row, ri) => (
                                        <tr key={row.feature} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                            <td className="px-4 py-3 text-gray-700 font-medium border-b border-gray-100 sticky left-0 bg-inherit z-10">{row.feature}</td>
                                            {row.values.map((val, ci) => (
                                                <td key={ci} className={`px-3 py-3 text-center border-b border-gray-100 ${ci === 0 ? "bg-blue-50/30" : ""}`}>
                                                    {val === "✓" ? (
                                                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                        </span>
                                                    ) : val === "✗" ? (
                                                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                                        </span>
                                                    ) : (
                                                        <span className="text-xs text-gray-600 font-medium">{val}</span>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-600 mt-3 text-center">
                            Based on publicly available information. Last updated June 2026.
                        </p>
                    </div>
                </section>

                {/* How to Evaluate */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                How to evaluate investor data room software
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Six criteria that separate purpose-built investor data rooms from generic file-sharing tools and legacy platforms.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {evaluationCriteria.map((criterion) => (
                                <div key={criterion.title} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-3xl font-black text-blue-100">{criterion.number}</span>
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={criterion.icon} />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{criterion.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{criterion.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Best platform by use case */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Best investor data room by use case
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Different fundraising stages and investor types have different requirements. Here is our recommendation for each major scenario.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {useCase.map((item) => (
                                <div key={item.scenario} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:border-[#2563eb]/20 hover:shadow-sm transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                            </svg>
                                        </div>
                                        <h3 className="text-base font-bold text-gray-900">{item.scenario}</h3>
                                    </div>
                                    <p className="text-sm font-semibold text-[#2563eb] mb-2">Recommended: {item.recommended}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.reason}</p>
                                    {item.link && (
                                        <Link href={item.link} className="text-xs font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1">
                                            Learn more
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SpaceNexus Callout */}
                <section className="py-14 bg-[#f8f9fa] border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Recommended Platform
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Why founders and deal teams choose SpaceNexus
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is the modern investor data room built for the speed of today&apos;s fundraising market. AI-powered from the ground up, with transparent pricing and a setup experience that doesn&apos;t require a CSM or a week of onboarding.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Per-investor engagement scores — know who is serious before they call",
                                        "AI auto-categorization organizes every upload into the right folder",
                                        "Structured Q&A with urgency tagging and full audit trail",
                                        "Mandatory NDA click-through per investor firm",
                                        "SOC 2 Type II · ISO 27001 · SEC/FINRA ready",
                                        "Transparent pricing — no per-page fees, no annual lock-in",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                            <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                        See SpaceNexus in Action
                                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                    <Link href="/competitors/vdr-alternatives" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                        Full Provider Comparison →
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">app.spacenexus.net / analytics</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                    <img
                                        src="/spacenexus/screenshots/vdr-analytics.png"
                                        alt="SpaceNexus investor engagement analytics dashboard"
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about investor data rooms
                        </h2>
                        <div className="space-y-5">
                            {faqItems.map((item) => (
                                <div key={item.question} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Links */}
                <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-4">Continue reading</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/best-data-room-for-startups" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Best Data Room for Startups (2026 Ranking) →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/series-a-fundraising-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Series A Fundraising Data Room →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/mergers-and-acquisitions-vdr" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&A Virtual Data Room →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/datasite-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus vs Datasite →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/checklists/due-diligence-checklist" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Due Diligence Checklist (200+ items) →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to launch your investor data room?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            AI-powered investor analytics. Transparent published pricing. Setup in under 24 hours. SOC 2 Type II certified. No annual lock-in.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                View Pricing
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                    </div>
                </section>

                        {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/solutions/series-a-fundraising-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Purpose-built for Series A diligence.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Series A fundraising room →</h3>
                        </Link>
                        <Link
                            href="/solutions/startup-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Founder-friendly VDR for fundraising.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Startup data room →</h3>
                        </Link>
                        <Link
                            href="/checklists/investor-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">8 downloadable templates — Pre-Seed, Seed, Series B+.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Free investor data room templates →</h3>
                        </Link>
                        <Link
                            href="/blog/how-to-set-up-virtual-data-room-series-a"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Step-by-step guide from SpaceNexus.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">How to set up a Series A data room →</h3>
                        </Link>
                        <Link
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers compared for founders.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
                        </Link>
                        <Link
                            href="/features/activity-analytics"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">See which VCs are actually reading your deck.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Engagement analytics →</h3>
                        </Link>
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
            </section>

</main>
        </>
    );
}
