import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Merger Acquisition Software 2026 | SpaceNexus",
    description: "Compare the best merger and acquisition software platforms. Streamline M&A deal workflow, due diligence, document management, and post-merger integration with AI-powered tools.",
    alternates: {
        canonical: "https://spacenexus.net/merger-acquisition-software",
    },
    openGraph: {
        title: "Merger Acquisition Software 2026 | SpaceNexus",
        description:
            "Compare the best merger and acquisition software platforms. Streamline M&A deal workflow, due diligence, document management, and post-merger integration.",
        url: "https://spacenexus.net/merger-acquisition-software",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Merger Acquisition Software 2026 — M&A Platform Guide | SpaceNexus",
        description:
            "Complete guide to merger and acquisition software. Compare features, pricing, and security across the top platforms for managing M&A deals end-to-end.",
    },
    keywords: [
        "merger acquisition software",
        "merger and acquisition software",
        "M&A software",
        "M&A deal management software",
        "merger software",
        "acquisition software",
        "M&A due diligence software",
        "merger integration software",
        "M&A workflow software",
        "acquisition deal management",
    ],
};

const coreFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Bank-Grade Security",
        description: "AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II and ISO 27001 certification. Zero Trust architecture with MFA enforcement protects every M&A document across the deal lifecycle.",
        tags: ["SOC 2 Type II", "ISO 27001", "AES-256"],
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Granular Permission Controls",
        description: "Set access at the folder, document, and page level across buy-side and sell-side teams. Restrict view-only, download, print, and copy rights per user or group. Apply dynamic watermarks with viewer identity embedded automatically.",
        tags: ["Folder-level", "Page-level", "Dynamic watermarks"],
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Processing",
        description: "Automatically redact PII, sensitive financials, and privileged information across M&A documents. AI auto-categorizes uploaded files into the correct due diligence folder structure and generates smart index numbers.",
        tags: ["Auto-redaction", "Auto-categorization", "Smart indexing"],
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Structured Q&A Workflow",
        description: "Route due diligence questions to the right subject matter expert by category, urgency, and department. Track every question from submission to answer with a version-controlled audit trail across the M&A deal team.",
        tags: ["Category routing", "Urgency flags", "Audit trail"],
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Buyer Engagement Analytics",
        description: "Track every document view, download, and time-on-page per buyer in real time. Engagement heatmaps reveal which sections of your M&A data room attract the most interest — critical intelligence during negotiations.",
        tags: ["Per-user heatmaps", "Time-on-page", "Download tracking"],
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Tamper-Evident Audit Trail",
        description: "Every access event — view, download, print, permission change — is logged with timestamp, IP address, and user identity. Immutable audit logs satisfy legal discovery, SEC, and regulatory requirements.",
        tags: ["Immutable logs", "Legal discovery", "Compliance-ready"],
    },
    {
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "NDA Enforcement",
        description: "Require all external parties to electronically accept a non-disclosure agreement before accessing M&A documents. Each acceptance is timestamped and logged — forming part of the transaction record.",
        tags: ["Click-through NDA", "E-signature", "Timestamped"],
    },
    {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "Full-Text Search",
        description: "Instant search across 100+ file types including PDFs, Word documents, Excel spreadsheets, and presentations with OCR. Find any clause, number, or name across thousands of M&A documents in seconds.",
        tags: ["100+ file types", "OCR", "Natural language"],
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Bulk Upload & Auto-Index",
        description: "Upload thousands of M&A documents in a single drag-and-drop. The software automatically organizes files into a logical due diligence index structure — eliminating the manual filing that delays deal launch.",
        tags: ["Bulk upload", "Auto-index", "Drag-and-drop"],
    },
];

const comparisonRows = [
    { feature: "AI Document Redaction", spacenexus: { value: "Built-in, one-click", good: true }, legacy: { value: "Add-on or manual", good: false }, generic: { value: "Not available", good: false } },
    { feature: "M&A Deal Pipeline", spacenexus: { value: "Visual multi-deal pipeline", good: true }, legacy: { value: "Single-deal view only", good: false }, generic: { value: "Limited", good: false } },
    { feature: "Granular Permissions", spacenexus: { value: "Folder, doc & page level", good: true }, legacy: { value: "Folder-level only", good: false }, generic: { value: "Basic sharing", good: false } },
    { feature: "SOC 2 Type II", spacenexus: { value: "Certified", good: true }, legacy: { value: "Certified", good: true }, generic: { value: "Rarely certified", good: false } },
    { feature: "Structured Q&A", spacenexus: { value: "Full workflow + audit trail", good: true }, legacy: { value: "Basic module", good: false }, generic: { value: "Email only", good: false } },
    { feature: "Buyer Analytics", spacenexus: { value: "Real-time per-user heatmaps", good: true }, legacy: { value: "Add-on or limited", good: false }, generic: { value: "Not available", good: false } },
    { feature: "NDA Enforcement", spacenexus: { value: "Click-through at room entry", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Manual process", good: false } },
    { feature: "Setup Time", spacenexus: { value: "Under 24 hours, self-serve", good: true }, legacy: { value: "Days, requires CSM", good: false }, generic: { value: "Hours (no M&A features)", good: false } },
    { feature: "Contract Flexibility", spacenexus: { value: "Monthly, no lock-in", good: true }, legacy: { value: "Annual, exit fees", good: false }, generic: { value: "Monthly available", good: true } },
    { feature: "Transparent Pricing", spacenexus: { value: "Published, transparent", good: true }, legacy: { value: "Quote-only, opaque", good: false }, generic: { value: "Not purpose-built", good: false } },
];

const faqItems = [
    {
        question: "What is merger and acquisition software?",
        answer: "Merger and acquisition (M&A) software is a platform designed to manage the end-to-end lifecycle of M&A transactions — from deal sourcing and pipeline management through due diligence, document exchange, Q&A, closing, and post-merger integration. Purpose-built M&A software provides enterprise-grade security controls, compliance certifications, and transaction-specific workflow features — including NDA enforcement, granular permissions, tamper-evident audit trails, structured Q&A, and buyer analytics — that generic project management and file-sharing tools cannot offer. Modern M&A platforms like SpaceNexus also include AI document redaction and auto-categorization to accelerate deal timelines.",
    },
    {
        question: "How is M&A software different from generic project management tools?",
        answer: "M&A software differs from project management tools (Asana, Monday.com, Jira) in three critical ways: (1) Security and compliance — M&A platforms hold SOC 2 Type II and ISO 27001 certifications, provide AES-256 encryption, and maintain immutable audit trails required by financial regulators and legal counterparties; (2) Transaction-specific controls — NDA click-through enforcement, dynamic watermarking, privilege wall management, and buyer engagement analytics are unique to M&A software; (3) Deal workflow — structured Q&A with audit trails, document-level permissions, and due diligence index management are absent from generic productivity tools. Using PM tools for M&A transactions creates legal and compliance exposure.",
    },
    {
        question: "What features should merger acquisition software include?",
        answer: "Essential features for merger acquisition software include: SOC 2 Type II and ISO 27001 certification; AES-256 encryption at rest and TLS 1.3 in transit; NDA click-through enforcement; granular permissions at the folder, document, and page level; dynamic watermarking; a tamper-evident immutable audit trail; structured Q&A workflow management; full-text search across 100+ file types; bulk upload with AI auto-indexing; real-time buyer engagement analytics; multi-deal pipeline management; and transparent pricing without per-page charges. Modern platforms like SpaceNexus also include AI document redaction and auto-categorization as standard features.",
    },
    {
        question: "How much does M&A software cost?",
        answer: "M&A software pricing varies significantly by provider. SpaceNexus offers transparent, published flat-rate pricing with no per-page fees — AI redaction, buyer analytics, and Q&A workflow are all included. Legacy enterprise platforms like Datasite and Intralinks operate on quote-only pricing that typically ranges from tens of thousands per deal, with additional charges for AI features and user licenses. When comparing costs, account for per-page upload fees, user caps, storage overages, and add-on charges that inflate legacy platform bills. Modern platforms deliver superior M&A capabilities at a fraction of the cost of legacy solutions.",
    },
    {
        question: "Which merger acquisition software is best for M&A?",
        answer: "SpaceNexus is the best merger acquisition software for M&A in 2026. It offers AI-powered document redaction and auto-categorization, visual multi-deal pipeline management, structured Q&A workflows, real-time buyer engagement analytics, transparent published pricing with no per-page fees, SOC 2 Type II certification, and setup in under 24 hours. Legacy platforms like Datasite and Intralinks remain options for large-cap deals where brand recognition is the primary factor, but they lack the AI capabilities, pipeline management, and pricing transparency that modern M&A teams demand.",
    },
    {
        question: "Can M&A software handle buy-side and sell-side transactions?",
        answer: "Yes. Purpose-built M&A software like SpaceNexus supports both buy-side and sell-side transactions with the same platform. For sell-side deals, it provides virtual data rooms for buyer due diligence, engagement analytics to track buyer interest, and structured Q&A to manage information requests. For buy-side deals, it enables target document review, team collaboration, and integration planning. Permission controls ensure that buy-side and sell-side teams only see the information relevant to their role, with privilege walls maintained throughout the transaction.",
    },
    {
        question: "Is merger acquisition software secure enough for confidential M&A transactions?",
        answer: "Purpose-built M&A software meets the highest security standards required for confidential transactions. SpaceNexus holds SOC 2 Type II certification, aligns with ISO 27001, and is SEC/FINRA ready for US investment banking transactions. The platform uses AES-256 encryption at rest, TLS 1.3 in transit, Zero Trust architecture, and multi-factor authentication. Every document access event is logged in an immutable audit trail. Generic file-sharing and project management tools do not meet these requirements and should not be used for confidential M&A deal materials.",
    },
    {
        question: "How quickly can M&A software be set up for a new deal?",
        answer: "Modern M&A software like SpaceNexus can be fully configured and operational in under 24 hours — without onboarding calls or dedicated implementation support. Upload documents via bulk drag-and-drop, configure permission groups, set NDAs, invite buyers or sellers, and launch the data room within hours. This rapid setup is critical in competitive M&A processes where delays can cost deals. Legacy platforms require multiple days and dedicated customer success manager involvement for initial setup, creating friction in time-sensitive transactions.",
    },
];

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
        { "@type": "ListItem", position: 2, name: "Merger Acquisition Software", item: "https://spacenexus.net/merger-acquisition-software" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Merger Acquisition Software 2026 — Complete Guide to M&A Platforms",
    description: "The complete guide to merger and acquisition software in 2026. Compare features, pricing, and security across the top platforms for managing M&A deals end-to-end.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/merger-acquisition-software",
};

export default function MergerAcquisitionSoftwarePage() {
    return (
        <>
            <Script id="mas-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="mas-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="mas-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Merger Acquisition Software</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                2026 Software Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Merger Acquisition Software{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all merger and acquisition software is built the same. This guide covers what to look for, what separates purpose-built M&A platforms from generic tools, and which solution leads in 2026.
                            </p>
                            <p className="text-sm text-gray-400 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers features, pricing, security, due diligence, and top M&A platforms
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Try SpaceNexus Free
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <a href="#features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    See All Features
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is merger acquisition software */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is merger and acquisition software?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Merger and acquisition (M&A) software is a secure, cloud-hosted platform for managing the full lifecycle of M&A transactions — from deal origination and pipeline tracking through due diligence, document exchange, Q&amp;A, closing, and post-merger integration. The category evolved from physical data rooms and basic file-sharing into a comprehensive digital ecosystem that provides enterprise-grade security controls, compliance certifications, and transaction-specific workflow features.
                            </p>
                            <p>
                                What sets M&A software apart from generic tools is its transaction-specific compliance layer: NDA enforcement at deal room entry, document-level access controls across buy-side and sell-side teams, an immutable audit trail logging every view and download, structured Q&amp;A workflow management, and security certifications (SOC 2 Type II, ISO 27001) required by financial regulators and legal counterparties. These capabilities are absent from general-purpose tools like Asana, SharePoint, or Google Drive.
                            </p>
                            <p>
                                In 2026, the M&A software market divides into two tiers: legacy enterprise platforms (Datasite, Intralinks) built in the 1990s with opaque quote-based pricing, and a new generation of AI-powered platforms like SpaceNexus that deliver enterprise-grade security with AI redaction, auto-categorization, multi-deal pipeline management, and buyer analytics at transparent, published prices.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { value: "Published", label: "Transparent, listed pricing — no quotes" },
                                { value: "< 24hrs", label: "Average M&A room setup time" },
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

                {/* Features */}
                <section id="features" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Feature Breakdown</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                What the best M&A software must include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any serious merger and acquisition software platform.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {coreFeatures.map((feature) => (
                                <div key={feature.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{feature.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {feature.tags.map((tag) => (
                                            <span key={tag} className="text-xs bg-blue-50 text-[#2563eb] px-2 py-0.5 rounded-full font-medium border border-blue-100">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SpaceNexus Callout */}
                <section className="py-14 bg-white border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Recommended M&A Software
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — AI-powered M&A software with transparent, published pricing
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is purpose-built merger and acquisition software for modern deal teams. Every plan includes AI document redaction, auto-categorization, buyer engagement analytics, structured Q&amp;A, and multi-deal pipeline management — features that legacy M&A software charges as expensive add-ons.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "AI Redaction", desc: "One-click, auto on upload" },
                                        { label: "Multi-Deal Pipeline", desc: "Visual M&A pipeline" },
                                        { label: "Buyer Analytics", desc: "Real-time per-user heatmaps" },
                                        { label: "Structured Q&A", desc: "Routed, tracked, audited" },
                                        { label: "SOC 2 Type II", desc: "Certified + ISO 27001" },
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
                                                <p className="text-xs text-gray-500">{item.desc}</p>
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
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.spacenexus.net / dashboard</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl">
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus M&A software dashboard" className="w-full h-auto" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                M&A software vs. legacy platforms vs. generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy enterprise M&A platforms and generic project management tools on the features that matter most for mergers and acquisitions.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-400 border-l border-gray-700">Legacy M&A Platforms<br /><span className="text-xs font-normal text-gray-500">(Datasite / Intralinks)</span></div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-400 border-l border-gray-700">Generic Tools<br /><span className="text-xs font-normal text-gray-500">(Asana / Drive)</span></div>
                            </div>
                            {comparisonRows.map((row, i) => (
                                <div key={row.feature} className={`grid grid-cols-4 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                    <div className="px-5 py-3.5 text-sm font-medium text-gray-800">{row.feature}</div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 font-medium ${row.spacenexus.good ? "text-green-700" : "text-red-500"}`}>
                                        {row.spacenexus.good && <span className="inline-flex items-center gap-1"><svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>{row.spacenexus.value}</span>}
                                        {!row.spacenexus.good && row.spacenexus.value}
                                    </div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 ${row.legacy.good ? "text-gray-600" : "text-red-500"}`}>{row.legacy.value}</div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 ${row.generic.good ? "text-gray-600" : "text-red-500"}`}>{row.generic.value}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-3 text-center">Based on publicly available information. Last updated July 2026.</p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about merger acquisition software
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

                {/* Related */}
                <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-4">Related guides</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/deal-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Deal Management Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/mergers-and-acquisitions-vdr" className="text-sm font-semibold text-[#2563eb] hover:underline">M&A VDR Solutions →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/ma-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">M&A Data Room Providers →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-due-diligence" className="text-sm font-semibold text-[#2563eb] hover:underline">Data Room Due Diligence →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            See the M&A software built for modern transactions
                        </h2>
                        <p className="text-gray-600 mb-8">
                            AI-powered redaction. Multi-deal pipeline management. Transparent published pricing. Setup in under 24 hours. SOC 2 Type II certified.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                View Pricing
                            </Link>
                        </div>
                        <p className="text-sm text-gray-400 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                    </div>
                </section>
            </main>
        </>
    );
}
