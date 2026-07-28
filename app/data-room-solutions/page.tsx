import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Data Room Solutions by Use Case 2026 — M&A, Fundraising & Legal | SpaceNexus",
    description: "Compare the best data room solutions for M&A, fundraising, legal deals, and secure document sharing. AI-powered, SOC 2 Type II, transparent pricing.",
    alternates: {
        canonical: "https://spacenexus.net/data-room-solutions",
    },
    openGraph: {
        title: "Data Room Solutions by Use Case 2026 | SpaceNexus",
        description:
            "Compare the best data room solutions for M&A, fundraising, legal deals, and secure document sharing.",
        url: "https://spacenexus.net/data-room-solutions",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Room Solutions by Use Case 2026 — M&A, Fundraising & Legal | SpaceNexus",
        description:
            "Complete guide to data room solutions by use case. Compare features, pricing, and security certifications.",
    },
    keywords: [
        "data room solutions by use case",
        "M&A data room solutions",
        "fundraising data room",
        "legal data room solutions",
        "due diligence data room solutions",
        "online data room solutions",
        "best data room solutions",
        "data room for business",
        "enterprise data room solutions",
    ],
};

const solutions = [
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "M&A Due Diligence",
        description: "Securely exchange thousands of documents — financial models, contracts, IP records, and employment agreements — under strict permission controls and NDA enforcement during sell-side and buy-side transactions.",
        features: ["AI auto-indexing of due diligence docs", "Granular folder and document permissions", "Structured Q&A with audit trail", "Buyer engagement heatmaps"],
        link: "/solutions/mergers-and-acquisitions-vdr",
        linkText: "M&A Data Room Solutions →",
    },
    {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Fundraising & Capital Raising",
        description: "Share investor materials — cap tables, financial projections, customer data, and IP portfolios — with VC and PE firms during Series A through pre-IPO fundraising rounds.",
        features: ["Per-investor engagement tracking", "Secure document sharing with NDAs", "Real-time analytics on investor interest", "Drag-and-drop data room setup"],
        link: "/solutions/series-a-fundraising-data-room",
        linkText: "Fundraising Data Room Solutions →",
    },
    {
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        title: "Legal & Law Firm Solutions",
        description: "Maintain privilege walls between deal parties, exchange sensitive discovery documents, and manage transactional document sets with full audit trails that satisfy evidentiary standards.",
        features: ["Privilege wall management", "Immutable audit trail for compliance", "Dynamic watermarking on all documents", "Document expiry and remote wipe"],
        link: "/industries/law-firms",
        linkText: "Legal Data Room Solutions →",
    },
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Private Equity Solutions",
        description: "Manage portfolio company documents, run LP reporting, and orchestrate acquisition due diligence across multiple simultaneous transactions with deal pipeline tracking.",
        features: ["Multi-deal pipeline management", "Portfolio company document consolidation", "LP reporting and analytics", "Deal-level dashboards"],
        link: "/industries/private-equity",
        linkText: "PE Data Room Solutions →",
    },
    {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        title: "Real Estate Transactions",
        description: "Share property records, title documents, environmental reports, and lease agreements with buyers, lenders, and counsel during asset sale processes and portfolio acquisitions.",
        features: ["Property-level document organization", "Secure buyer and lender access", "Environmental and title document management", "Deal room templating for repeat transactions"],
        link: "/industries/real-estate",
        linkText: "Real Estate Data Room Solutions →",
    },
    {
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        title: "Life Sciences & Biotech",
        description: "Share clinical trial data, regulatory filings, and IP portfolios under HIPAA compliance during licensing deals, partnerships, and strategic acquisitions.",
        features: ["HIPAA-compliant document management", "Clinical trial data security", "Regulatory filing organization", "IP portfolio management"],
        link: "/industries/life-sciences",
        linkText: "Life Sciences Data Room Solutions →",
    },
];

const comparisonData = [
    { feature: "AI Document Redaction", spacenexus: { value: "Built-in, one-click", good: true }, legacy: { value: "Add-on or manual", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Auto-Categorization", spacenexus: { value: "AI-powered on upload", good: true }, legacy: { value: "Manual indexing required", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Transparent Pricing", spacenexus: { value: "Published, transparent", good: true }, legacy: { value: "Quote-only, opaque", good: false }, generic: { value: "Not purpose-built", good: false } },
    { feature: "SOC 2 Type II", spacenexus: { value: "Certified", good: true }, legacy: { value: "Certified", good: true }, generic: { value: "Rarely certified", good: false } },
    { feature: "Structured Q&A Workflow", spacenexus: { value: "Full workflow + audit trail", good: true }, legacy: { value: "Basic module", good: false }, generic: { value: "Email only", good: false } },
    { feature: "Buyer Engagement Analytics", spacenexus: { value: "Real-time per-user heatmaps", good: true }, legacy: { value: "Add-on or limited", good: false }, generic: { value: "Not available", good: false } },
    { feature: "NDA Enforcement", spacenexus: { value: "Click-through at room entry", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Manual process", good: false } },
    { feature: "Setup Time", spacenexus: { value: "Under 24 hours, self-serve", good: true }, legacy: { value: "Days, requires CSM", good: false }, generic: { value: "Hours (no VDR features)", good: false } },
    { feature: "Contract Flexibility", spacenexus: { value: "Monthly, no lock-in", good: true }, legacy: { value: "Annual, exit fees", good: false }, generic: { value: "Monthly available", good: true } },
    { feature: "Per-Page Charges", spacenexus: { value: "None", good: true }, legacy: { value: "Common", good: false }, generic: { value: "None", good: true } },
];

const capabilities = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Bank-Grade Security",
        description: "AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II and ISO 27001 certification. Zero Trust architecture with MFA enforcement and IP-based access restrictions.",
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Granular Permission Controls",
        description: "Set access at the folder, document, and page level. Restrict view-only, download, print, and copy rights per user or group. Apply dynamic watermarks with viewer identity embedded automatically.",
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Processing",
        description: "Automatically redact PII, sensitive financials, and privileged information. AI auto-categorizes uploaded documents into the correct folder structure and generates smart index numbers.",
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Structured Q&A Workflow",
        description: "Route due diligence questions to the right subject matter expert by category, urgency, and department. Track every question from submission to answer with a version-controlled audit trail.",
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Real-Time Engagement Analytics",
        description: "Track every document view, download, and time-on-page per buyer in real time. Engagement heatmaps reveal which sections attract the most interest during negotiations.",
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Tamper-Evident Audit Trail",
        description: "Every access event is logged with timestamp, IP address, and user identity. Immutable audit logs satisfy legal discovery and regulatory requirements.",
    },
];

const faqItems = [
    {
        question: "What are data room solutions?",
        answer: "Data room solutions are secure, cloud-based platforms purpose-built for storing, managing, and sharing confidential documents during business transactions. They provide enterprise-grade security controls, compliance certifications, and transaction-specific workflow features — including NDA enforcement, granular permissions, tamper-evident audit trails, structured Q&A, and buyer analytics — that generic file-sharing tools cannot offer. Data room solutions are essential for M&A due diligence, fundraising, legal proceedings, and other high-stakes document exchanges.",
    },
    {
        question: "How do data room solutions differ from file-sharing tools?",
        answer: "Data room solutions differ from tools like SharePoint, Dropbox, or Google Drive in three critical ways: (1) Compliance — data room solutions hold SOC 2 Type II, ISO 27001, and regulatory certifications; (2) Transaction controls — NDA click-through enforcement, dynamic watermarking, document expiry, and remote wipe are data room-specific features; (3) Deal workflow — structured Q&A with audit trails, buyer engagement analytics, and privilege wall management are absent from generic productivity tools. Using file-sharing tools for M&A due diligence creates legal and compliance exposure.",
    },
    {
        question: "What features should a data room solution include?",
        answer: "Essential features for any data room solution include: SOC 2 Type II and ISO 27001 certification; AES-256 encryption at rest and TLS 1.3 in transit; NDA click-through enforcement; granular permissions at the folder, document, and page level; dynamic watermarking; a tamper-evident immutable audit trail; structured Q&A workflow management; full-text search across 100+ file types; bulk upload with AI auto-indexing; real-time buyer engagement analytics; and transparent pricing without per-page charges. Modern platforms like SpaceNexus also include AI document redaction and auto-categorization.",
    },
    {
        question: "How much do data room solutions cost?",
        answer: "Data room solution pricing varies significantly by provider. SpaceNexus offers transparent, published pricing starting with no per-page fees — AI redaction, buyer analytics, and Q&A workflow are all included. Legacy enterprise platforms like Datasite and Intralinks operate on quote-only pricing that typically ranges in the tens of thousands per deal, with additional charges for AI features and user licenses. When evaluating costs, account for per-page upload fees, user caps, storage overages, and add-on charges that inflate legacy platform bills.",
    },
    {
        question: "Which data room solution is best for M&A?",
        answer: "The best data room solution for M&A depends on your specific needs, but SpaceNexus is the leading choice for modern deal teams. It offers AI-powered document redaction and auto-categorization, structured Q&A workflows, real-time buyer engagement analytics, transparent published pricing with no per-page fees, SOC 2 Type II certification, and setup in under 24 hours. Legacy platforms like Datasite and Intralinks remain options for enterprises with established workflows, but they lack the AI capabilities and pricing transparency that modern deal teams demand.",
    },
    {
        question: "Can data room solutions integrate with other tools?",
        answer: "Most modern data room solutions support integrations with enterprise tools. SpaceNexus integrates with DocuSign for e-signatures, Salesforce for CRM deal tracking, Microsoft 365 for document collaboration, and Slack for deal team notifications. Key integrations to look for include e-signature platforms (DocuSign, Adobe Sign), CRM systems (Salesforce, HubSpot), identity providers (Okta, Azure AD) for SSO, and cloud storage platforms for document import.",
    },
    {
        question: "How quickly can a data room solution be set up?",
        answer: "Modern data room solutions like SpaceNexus can be fully configured and live in under 24 hours — without onboarding calls or dedicated implementation support. Upload documents via bulk drag-and-drop, configure permission groups, set the NDA, and send invitations to buyers or counsel within hours. Legacy platforms require multiple days and dedicated customer success manager involvement for initial setup, which can delay deal timelines.",
    },
    {
        question: "Are data room solutions secure enough for confidential transactions?",
        answer: "Purpose-built data room solutions meet the highest security standards required for confidential transactions. SpaceNexus holds SOC 2 Type II certification, aligns with ISO 27001, and is SEC/FINRA ready for US investment banking transactions. The platform uses AES-256 encryption at rest, TLS 1.3 in transit, Zero Trust architecture, and multi-factor authentication. Every document access event is logged in an immutable audit trail. Generic file-sharing tools do not meet these requirements and should not be used for confidential deal materials.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Data Room Solutions", item: "https://spacenexus.net/data-room-solutions" },
    ],
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

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Data Room Solutions 2026 — Complete Guide to Secure Virtual Data Rooms",
    description: "The complete guide to data room solutions in 2026. Compare features, pricing, and security certifications across the top platforms for M&A, fundraising, and legal deals.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/data-room-solutions",
};

export default function DataRoomSolutionsPage() {
    return (
        <>
            <Script id="drs-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="drs-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="drs-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Data Room Solutions</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                2026 Solutions Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Data Room Solutions{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                From M&amp;A due diligence to fundraising and legal deals, the right data room solution keeps your documents secure, your deal organized, and your team moving fast. This guide covers everything you need to know.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers features, pricing, security, use cases, and top providers
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Try SpaceNexus Free
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <a href="#solutions" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    Explore Solutions
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What are data room solutions */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What are data room solutions?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Data room solutions are secure, cloud-hosted platforms designed for storing, organizing, and sharing confidential documents during business transactions. The category evolved from physical data rooms — supervised rooms where deal parties reviewed printed documents — into a digital ecosystem that provides superior security controls, greater efficiency, and global accessibility at a fraction of the cost.
                            </p>
                            <p>
                                What sets data room solutions apart from general-purpose file-sharing tools is their transaction-specific compliance layer: NDA enforcement at room entry, document-level access controls, an immutable audit trail logging every view and download, structured Q&amp;A workflow management, and security certifications (SOC 2 Type II, ISO 27001) required by financial regulators and legal counterparties. These capabilities make data room solutions the standard for M&amp;A due diligence, capital raising, legal proceedings, and corporate transactions.
                            </p>
                            <p>
                                In 2026, the data room solutions market is divided between legacy enterprise platforms (Datasite, Intralinks) built in the 1990s with opaque quote-based pricing, and a new generation of AI-powered platforms like SpaceNexus that deliver enterprise-grade security with AI redaction, auto-categorization, and buyer analytics at transparent, published prices.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { value: "Published", label: "Transparent, listed pricing — no quotes" },
                                { value: "< 24hrs", label: "Average data room setup time" },
                                { value: "SOC 2 II", label: "Security certification standard" },
                                { value: "500+", label: "Enterprise deal teams trust SpaceNexus" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                                    <div className="text-xs text-blue-200 leading-snug">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions by use case */}
                <section id="solutions" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Use Cases</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Data room solutions by use case
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Every transaction type has unique requirements. Here is how data room solutions serve each major use case.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {solutions.map((sol) => (
                                <div key={sol.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300 flex flex-col">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4 shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={sol.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{sol.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{sol.description}</p>
                                    <ul className="space-y-1.5 mb-4 flex-1">
                                        {sol.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                                                <svg className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={sol.link} className="text-xs font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1 mt-auto">
                                        {sol.linkText}
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SpaceNexus callout */}
                <section className="py-14 bg-white border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Recommended Data Room Solution
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — The AI-powered data room solution with transparent pricing
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is a modern data room solution built for today&apos;s deal teams. Every plan includes AI document redaction, auto-categorization, buyer engagement analytics, and structured Q&amp;A — features that legacy platforms sell as expensive add-ons.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "AI Redaction", desc: "One-click, auto on upload" },
                                        { label: "Buyer Analytics", desc: "Real-time per-user heatmaps" },
                                        { label: "Structured Q&A", desc: "Routed, tracked, audited" },
                                        { label: "SOC 2 Type II", desc: "Certified + ISO 27001" },
                                        { label: "Setup Time", desc: "Under 24 hours, self-serve" },
                                        { label: "Pricing", desc: "Transparent, no lock-in" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-start gap-2.5 bg-[#f8f9fa] rounded-xl p-3">
                                            <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-900">{item.label}</p>
                                                <p className="text-xs text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                        Request a Demo
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
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus data room solution dashboard" className="w-full h-auto" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison table */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Data room solutions compared: SpaceNexus vs legacy vs generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy enterprise VDR platforms and generic file-sharing tools on the features that matter most.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Legacy VDR<br /><span className="text-xs font-normal text-gray-600">(Datasite / Intralinks)</span></div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Generic Tools<br /><span className="text-xs font-normal text-gray-600">(Drive / SharePoint)</span></div>
                            </div>
                            {comparisonData.map((row, i) => (
                                <div key={row.feature} className={`grid grid-cols-4 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                    <div className="px-5 py-3.5 text-sm font-medium text-gray-800">{row.feature}</div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 font-medium ${row.spacenexus.good ? "text-green-700" : "text-red-500"}`}>
                                        {row.spacenexus.good && (
                                            <span className="inline-flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                {row.spacenexus.value}
                                            </span>
                                        )}
                                        {!row.spacenexus.good && row.spacenexus.value}
                                    </div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 ${row.legacy.good ? "text-gray-600" : "text-red-500"}`}>{row.legacy.value}</div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 ${row.generic.good ? "text-gray-600" : "text-red-500"}`}>{row.generic.value}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-600 mt-3 text-center">Based on publicly available information. Last updated July 2026.</p>
                    </div>
                </section>

                {/* Capabilities */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Core Capabilities</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                What the best data room solutions include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These six capabilities are the baseline for any serious data room solution. Anything less is a compromise.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {capabilities.map((cap) => (
                                <div key={cap.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cap.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{cap.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{cap.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about data room solutions
                        </h2>
                        <div className="space-y-5">
                            {faqItems.map((item) => (
                                <div key={item.question} className="bg-white rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Links */}
                <section className="py-10 bg-white border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-4">Related resources</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/data-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Software →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Virtual Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/vdr-alternatives" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Best VDR Comparison 2026 →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/features/data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus Features →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Find the right data room solution for your deal
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
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
                </section>
            </main>
        </>
    );
}
