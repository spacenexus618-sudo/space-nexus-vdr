import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";
import AnswerBlock from "../components/AnswerBlock";

export const metadata: Metadata = {
    title: "Data Room Provider Comparison 2026 — Top 10 Ranked | SpaceNexus",
    description: "Compare the top 10 data room providers. Pricing, AI features, security certifications, and best use cases by industry.",
    alternates: {
        canonical: "https://spacenexus.net/data-room-providers",
    },
    openGraph: {
        title: "Data Room Provider Comparison 2026 | SpaceNexus",
        description:
            "Compare the top 10 data room providers. Pricing, AI features, security certifications, and best use cases.",
        url: "https://spacenexus.net/data-room-providers",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Room Provider Comparison 2026 — Top 10 Ranked | SpaceNexus",
        description:
            "Expert comparison of the top data room providers in 2026. Pricing, features, security, and use cases.",
    },
    keywords: [
        "data room provider comparison",
        "best data room providers",
        "top 10 data room providers",
        "data room for M&A",
        "secure data room",
        "due diligence data room",
        "data room comparison 2026",
        "data room services",
        "M&A data room software",
        "data room solutions",
    ],
};

const providers = [
    {
        name: "SpaceNexus",
        tagline: "AI-powered data room for modern deal teams",
        pricing: "Transparent pricing",
        pricingNote: "Transparent public pricing",
        bestFor: "M&A due diligence, fundraising, law firms, PE firms",
        founded: "2022",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001", "SEC/FINRA Ready"],
        pros: [
            "AI document redaction and auto-categorization",
            "Structured Q&A with full audit trail",
            "Real-time buyer engagement analytics",
            "Setup in under 24 hours, no onboarding call",
            "Transparent pricing, no per-page fees",
            "Unlimited users on most plans",
        ],
        cons: [
            "Newer platform vs. legacy enterprise providers",
            "Smaller brand recognition in bulge bracket banking",
        ],
        highlight: true,
        link: "/demo",
        linkText: "Try SpaceNexus Free",
        badge: "Recommended",
    },
    {
        name: "Datasite",
        tagline: "Legacy enterprise data room for large-cap M&A",
        pricing: "Quote only",
        pricingNote: "Tens of thousands per deal",
        bestFor: "Large-cap M&A at bulge bracket investment banks",
        founded: "1968",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Established brand in institutional investment banking",
            "Handles very high document volumes",
            "Large dedicated support team",
        ],
        cons: [
            "Quote-only pricing with per-page charges",
            "Legacy UI and steep learning curve",
            "AI features are expensive add-ons",
            "Multi-day setup requiring CSM involvement",
        ],
        highlight: false,
        link: "/competitors/datasite-alternative",
        linkText: "SpaceNexus vs Datasite →",
        badge: null,
    },
    {
        name: "Intralinks",
        tagline: "Capital markets data room by SS&C Technologies",
        pricing: "Quote only",
        pricingNote: "Tens of thousands per deal",
        bestFor: "Capital raising, syndicated lending, fund administration",
        founded: "1996",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Strong capital markets workflow tools",
            "SS&C fund administration integration",
            "Global compliance support",
        ],
        cons: [
            "Complex and outdated interface",
            "Expensive for small-to-mid transactions",
            "Limited AI and automation",
            "Slow customer support response times",
        ],
        highlight: false,
        link: "/competitors/intralinks-alternative",
        linkText: "SpaceNexus vs Intralinks →",
        badge: null,
    },
    {
        name: "Firmex",
        tagline: "Mid-market Canadian data room provider",
        pricing: "Quote-based",
        pricingNote: "Per-project pricing available",
        bestFor: "Mid-market M&A in Canada and Europe",
        founded: "2007",
        hq: "Canada",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Reasonable mid-market pricing",
            "Clean interface for smaller teams",
            "Strong document management basics",
        ],
        cons: [
            "No AI document processing",
            "Limited buyer analytics",
            "Basic Q&A without workflow automation",
        ],
        highlight: false,
        link: null,
        linkText: null,
        badge: null,
    },
    {
        name: "iDeals",
        tagline: "European data room for cross-border deals",
        pricing: "Quote-based",
        pricingNote: "Per-project or subscription",
        bestFor: "European cross-border M&A, mid-market transactions",
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
        name: "Ansarada",
        tagline: "Australia-based data room with deal workflow tools",
        pricing: "Quote-based",
        pricingNote: "Subscription-based",
        bestFor: "Asia-Pacific deals and board governance",
        founded: "2005",
        hq: "Australia",
        certifications: ["ISO 27001", "SOC 2 Type II"],
        pros: [
            "Built-in deal workflow management",
            "Board and governance modules",
            "Strong APAC market presence",
        ],
        cons: [
            "Limited US M&A traction",
            "No AI document redaction",
            "Enterprise features only on higher tiers",
        ],
        highlight: false,
        link: null,
        linkText: null,
        badge: null,
    },
];

const useCases = [
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "M&A Due Diligence",
        description:
            "Sell-side and buy-side deal teams use data rooms to share financial models, contracts, IP records, and HR documentation with potential acquirers under strict NDA enforcement and granular permission controls.",
        link: "/solutions/mergers-and-acquisitions-vdr",
    },
    {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Fundraising & Capital Raising",
        description:
            "Founders and CFOs use data rooms to share cap tables, financials, and due diligence materials with investors during Series A through pre-IPO rounds — with real-time analytics to track investor engagement.",
        link: "/solutions/series-a-fundraising-data-room",
    },
    {
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        title: "Legal & Law Firm Transactions",
        description:
            "Law firms use data rooms to manage privilege walls between deal parties, maintain tamper-evident document trails for litigation, and securely exchange sensitive materials across counsel during complex transactions.",
        link: "/industries/law-firms",
    },
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Private Equity & Fund Management",
        description:
            "PE firms use data rooms to manage portfolio company due diligence, LP reporting, and fund document distribution — with unlimited users and deal pipeline tracking across multiple active transactions.",
        link: "/industries/private-equity",
    },
    {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        title: "Real Estate Transactions",
        description:
            "Real estate professionals use data rooms to share property records, environmental reports, lease agreements, and title documentation with buyers, lenders, and legal counsel during asset sales.",
        link: "/industries/real-estate",
    },
    {
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        title: "Life Sciences & Healthcare M&A",
        description:
            "Pharma and biotech companies use data rooms to share clinical trial data, regulatory filings, and IP portfolios during licensing deals, partnerships, and acquisition processes under strict HIPAA compliance.",
        link: "/industries/life-sciences",
    },
];

const comparisonFeatures = [
    { feature: "AI Document Redaction", values: ["✓", "Add-on", "✗", "✗", "✗", "✗"] },
    { feature: "AI Auto-Categorization", values: ["✓", "✗", "✗", "✗", "✗", "✗"] },
    { feature: "Structured Q&A Workflow", values: ["✓", "Basic", "Basic", "Basic", "✓", "✓"] },
    { feature: "Real-Time Buyer Analytics", values: ["✓", "Add-on", "✓", "Basic", "✓", "✓"] },
    { feature: "Dynamic Watermarking", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
    { feature: "SOC 2 Type II", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
    { feature: "ISO 27001", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
    { feature: "SEC/FINRA Ready", values: ["✓", "✓", "✓", "✗", "✗", "✗"] },
    { feature: "Transparent Pricing", values: ["✓", "✗", "✗", "Partial", "Partial", "Partial"] },
    { feature: "No Per-Page Charges", values: ["✓", "✗", "✗", "✓", "✓", "✓"] },
    { feature: "Setup Under 24 Hours", values: ["✓", "✗", "✗", "✓", "✓", "✓"] },
    { feature: "Unlimited Users", values: ["✓", "✗", "✗", "✗", "✓", "Plan-dep."] },
    { feature: "NDA Click-Through Gate", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
    { feature: "Privilege / Ethical Walls", values: ["✓", "✓", "✓", "✗", "✗", "✗"] },
    { feature: "Monthly Contracts", values: ["✓", "✗", "✗", "✓", "✓", "✓"] },
];

const providerNames = ["SpaceNexus", "Datasite", "Intralinks", "Firmex", "iDeals", "Ansarada"];

const keyFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Granular Access Controls",
        description:
            "Folder-level and document-level permissions allow precise control over who sees what. Separate permission groups for different buyer parties, counsel, and advisors — with an immutable audit trail on every access event.",
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "NDA Enforcement at Entry",
        description:
            "Require prospective buyers and counterparties to accept a non-disclosure agreement before they can view any documents — with each acceptance logged with a timestamp and IP address.",
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
        title: "Structured Q&A Management",
        description:
            "Route due diligence questions by category, urgency, and subject matter expert — with version-controlled responses and a full thread history that forms part of the transaction record.",
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Engagement Analytics",
        description:
            "See which documents each buyer has viewed, for how long, and how many times — in real time. Use engagement heatmaps to gauge buyer interest during negotiations and prioritize follow-up accordingly.",
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Processing",
        description:
            "AI-powered redaction, auto-categorization, and smart indexing eliminate the manual document preparation work that can add days to data room setup. Modern data room providers include this as standard — not an add-on.",
    },
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Dynamic Watermarking",
        description:
            "Automatically embed user identity, access date, and IP address as a visible or invisible watermark on every viewed document — deterring unauthorized distribution and creating a traceable leak trail.",
    },
];

const faqItems = [
    {
        question: "What is a data room provider?",
        answer:
            "A data room provider supplies a secure, cloud-based platform for storing and sharing confidential documents during business transactions. Unlike generic file-sharing tools, data room providers are purpose-built with the security, compliance, and workflow features required for M&A due diligence, fundraising, legal proceedings, and real estate transactions. Core capabilities include NDA enforcement at room entry, granular permission controls, a tamper-evident audit trail, structured Q&A workflow management, and security certifications such as SOC 2 Type II and ISO 27001.",
    },
    {
        question: "What is the difference between a data room and a virtual data room?",
        answer:
            "The terms are used interchangeably in modern usage. 'Virtual data room' (VDR) originated to distinguish online platforms from the original physical data rooms — secure facilities where deal parties would visit in person to review printed documents. Today, all data rooms are virtual. 'Data room provider' and 'virtual data room provider' refer to the same category of software. The key distinction that matters is between dedicated data room platforms (which have transaction-specific features and compliance certifications) and general cloud storage tools, which lack the security controls and audit capabilities required for regulated transactions.",
    },
    {
        question: "How much does a data room provider cost?",
        answer:
            "Data room provider pricing varies from transparent, published monthly pricing for modern platforms like SpaceNexus to tens of thousands per deal for legacy enterprise providers like Datasite and Intralinks. SpaceNexus publishes transparent monthly pricing with no per-page fees. Legacy providers operate on opaque quote-based pricing that typically includes per-page upload charges, user license fees, and premium add-ons for AI features. When comparing total cost, account for storage limits, the number of users, deal duration, and any add-ons required to access AI redaction or analytics.",
    },
    {
        question: "What security certifications should a data room provider have?",
        answer:
            "The minimum standard is SOC 2 Type II certification and ISO 27001 compliance. These cover audit trail integrity, data access controls, and information security management. For US investment banking and capital markets transactions, also require SEC and FINRA readiness. For healthcare M&A, require HIPAA compliance. At the infrastructure level, look for AES-256 encryption at rest, TLS 1.3 in transit, MFA enforcement, and a data center with ISO 27001-certified hosting. Avoid providers who cannot produce current SOC 2 audit reports on request.",
    },
    {
        question: "Can I use cloud storage instead of a dedicated data room provider?",
        answer:
            "Cloud storage tools like Google Drive, Dropbox, or SharePoint are not suitable replacements for dedicated data room providers in transactional contexts. They lack NDA click-through enforcement, document-level permission controls that persist after sharing, a legally defensible tamper-evident audit trail, Q&A workflow management, dynamic watermarking, and the regulatory compliance certifications (SOC 2 Type II, ISO 27001) that counterparties, counsel, and regulators require. Using cloud storage for M&A due diligence or securities-related document sharing creates legal, compliance, and security exposure.",
    },
    {
        question: "How quickly can a data room be set up?",
        answer:
            "With modern data room providers like SpaceNexus, a fully configured data room can be live in under 24 hours — without any onboarding calls or CSM involvement. Upload documents, configure permission groups, and send invitations to buyers or counsel within hours. Legacy providers like Datasite and Intralinks often require multiple days and dedicated implementation support for initial setup. In fast-moving transactions, setup speed is a material factor: your data room infrastructure should never delay deal execution.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Data Room Providers 2026 — Complete Buyer's Guide",
    description:
        "The definitive guide to data room providers in 2026. Compare features, pricing, security, and use cases across the top providers.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-06-01",
    mainEntityOfPage: "https://spacenexus.net/data-room-providers",
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
        { "@type": "ListItem", position: 2, name: "Data Room Providers", item: "https://spacenexus.net/data-room-providers" },
    ],
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
};

export default function DataRoomProvidersPage() {
    return (
        <>
            <Script id="drp-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="drp-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="drp-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="drp-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Data Room Providers</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                2026 Buyer&apos;s Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Data Room Providers{" "}
                                <span className="text-[#2563eb]">— The 2026 Buyer&apos;s Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Choosing the right data room provider can define how fast your deal closes — and how much it costs. This guide covers what data rooms do, what to look for in a provider, and which platforms lead the market in 2026.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                Last updated: June 2026 &nbsp;·&nbsp; Covers: SpaceNexus, Datasite, Intralinks, Firmex, iDeals, Ansarada
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#providers" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Compare Providers
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a href="#comparison-table" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Feature Comparison
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <AnswerBlock text="SpaceNexus is a leading virtual data room provider with AI-powered features, transparent pricing, and SOC 2 Type II certification. It serves M&A teams, law firms, and investment banks with automatic document indexing, structured Q&A, and buyer engagement analytics." />

                {/* What is a Data Room Provider */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a data room provider?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                A data room provider delivers secure, cloud-hosted software for managing confidential document sharing during business transactions. The category emerged from physical data rooms — locked facilities where deal parties would visit in person to review sensitive documents under supervision. Modern data room providers have replaced this with online platforms that offer the same security controls digitally, at a fraction of the cost and with far greater efficiency.
                            </p>
                            <p>
                                What separates a dedicated data room provider from a general file-sharing tool is the transaction-specific compliance layer: mandatory NDA enforcement before document access, granular permission controls at the folder and document level, an immutable audit trail logging every view and download, structured Q&A workflow management, dynamic watermarking, and security certifications required by financial regulators and legal counterparties.
                            </p>
                            <p>
                                The market in 2026 spans legacy enterprise platforms charging tens of thousands per deal (Datasite, Intralinks) and a newer generation of AI-powered providers like SpaceNexus that deliver the same security and compliance at transparent, published monthly pricing — with AI redaction, auto-categorization, and buyer analytics included as standard.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                What every data room provider must offer
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These are the core capabilities that define a purpose-built data room platform — and distinguish it from generic file-sharing tools.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {keyFeatures.map((feature) => (
                                <div key={feature.title} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-5">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Provider Cards */}
                <section id="providers" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Top data room providers in 2026
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                An objective breakdown of the six leading data room providers — pricing, certifications, strengths, and limitations.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {providers.map((p) => (
                                <div
                                    key={p.name}
                                    className={`rounded-2xl border p-7 flex flex-col transition-all duration-300 ${
                                        p.highlight
                                            ? "bg-white border-[#2563eb] shadow-lg shadow-blue-500/10 ring-1 ring-[#2563eb]/20"
                                            : "bg-white border-gray-200 hover:shadow-md hover:border-gray-300"
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                                        {p.badge && (
                                            <span className="text-xs font-semibold bg-[#2563eb] text-white px-2.5 py-1 rounded-full">{p.badge}</span>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-600 mb-4">Est. {p.founded} &nbsp;·&nbsp; {p.hq}</p>
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
                                                className={`inline-flex items-center text-sm font-semibold ${
                                                    p.highlight
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

                {/* Feature Comparison Table */}
                <section id="comparison-table" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Data room provider feature comparison
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Side-by-side view of security, AI capabilities, pricing, compliance, and usability across all six providers.
                            </p>
                        </div>
                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                            <table className="w-full text-sm min-w-[820px]">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left px-4 py-4 font-semibold text-gray-900 border-b border-gray-200 sticky left-0 bg-gray-50 z-10 min-w-[185px]">Feature</th>
                                        {providerNames.map((name, i) => (
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
                        {/* Mobile Card Layout */}
                        <div className="md:hidden space-y-4">
                            {comparisonFeatures.map((row) => (
                                <div key={row.feature} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">{row.feature}</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {row.values.map((val, ci) => (
                                            <div key={ci} className={`flex items-center justify-between px-3 py-2 rounded-lg ${ci === 0 ? "bg-blue-50/50" : "bg-gray-50"}`}>
                                                <span className={`text-xs font-medium ${ci === 0 ? "text-[#2563eb]" : "text-gray-600"}`}>{providerNames[ci]}</span>
                                                {val === "✓" ? (
                                                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-50 text-green-600">
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                    </span>
                                                ) : val === "✗" ? (
                                                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-red-400">
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                                    </span>
                                                ) : (
                                                    <span className="text-xs text-gray-600 font-medium">{val}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-600 mt-3 text-center">
                            Based on publicly available information. Last updated June 2026.
                        </p>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                When do businesses use a data room?
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Data rooms are used across industries whenever confidential documents need to be shared securely with external parties during a structured process.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {useCases.map((uc) => (
                                <div key={uc.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:border-[#2563eb]/20 hover:shadow-sm transition-all duration-300">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={uc.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{uc.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{uc.description}</p>
                                    {uc.link && (
                                        <Link href={uc.link} className="text-xs font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1">
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
                                    Top-Rated Data Room Provider
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    The data room built for the speed of modern deals
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus combines enterprise-grade security with AI-powered automation and transparent pricing — so your deal team spends less time on administration and more time closing.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "AI redaction and auto-categorization on every upload",
                                        "Structured Q&A with urgency tagging and full audit trail",
                                        "Real-time buyer engagement analytics per document",
                                        "SOC 2 Type II · ISO 27001 · SEC/FINRA ready",
                                        "Transparent pricing — no per-page fees, no annual lock-in",
                                        "Live in under 24 hours — no onboarding call required",
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
                                    <Link href="/pricing" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                        View Pricing
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">app.spacenexus.net / dashboard</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/spacenexus/screenshots/vdr-dashboard.png"
                                        alt="SpaceNexus data room dashboard"
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about data room providers
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
                        <p className="text-sm font-semibold text-gray-700 mb-4">Related guides</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/m-a-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&amp;A Data Room Providers (2026 Ranking) →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Virtual Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/vdr-alternatives" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Best VDR Comparison 2026 →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/datasite-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus vs Datasite →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/intralinks-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus vs Intralinks →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to see why teams choose SpaceNexus?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            AI-powered redaction. Transparent published pricing. Setup in under 24 hours. SOC 2 Type II certified. No annual lock-in.
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
                            href="/virtual-data-room-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Complete directory.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">All virtual data room providers →</h3>
                        </Link>
                        <Link
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers ranked.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
                        </Link>
                        <Link
                            href="/m-a-data-room-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Top providers for M&A.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A data room providers →</h3>
                        </Link>
                        <Link
                            href="/vdr-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">All VDR providers compared.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR providers →</h3>
                        </Link>
                        <Link
                            href="/data-room-software"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Software platform comparison.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data room software →</h3>
                        </Link>
                        <Link
                            href="/pricing-comparison"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transparent pricing.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR pricing comparison →</h3>
                        </Link>
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
            </section>

</main>
        </>
    );
}
