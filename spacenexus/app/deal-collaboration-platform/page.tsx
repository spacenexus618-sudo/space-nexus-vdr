import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Deal Collaboration Platform 2026 | SpaceNexus",
    description: "Compare the best deal collaboration platforms. Securely collaborate on M&A, fundraising, and deal execution with enterprise-grade security, real-time Q&A, and AI-powered document management.",
    alternates: {
        canonical: "https://spacenexus.net/deal-collaboration-platform",
    },
    openGraph: {
        title: "Deal Collaboration Platform 2026 | SpaceNexus",
        description:
            "Compare the best deal collaboration platforms. Securely collaborate on M&A, fundraising, and deal execution with enterprise-grade security, real-time Q&A, and AI-powered document management.",
        url: "https://spacenexus.net/deal-collaboration-platform",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Deal Collaboration Platform 2026 — Secure Deal Collaboration Guide | SpaceNexus",
        description:
            "Complete guide to deal collaboration platforms. Compare features, pricing, and security across the top platforms for secure deal collaboration and transaction management.",
    },
    keywords: [
        "deal collaboration platform",
        "deal collaboration software",
        "secure deal collaboration",
        "M&A collaboration platform",
        "deal management collaboration",
        "transaction collaboration platform",
        "deal team collaboration",
        "virtual data room collaboration",
        "deal workflow platform",
        "deal collaboration tools",
    ],
};

const coreFeatures = [
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        title: "Multi-Party Deal Collaboration",
        description: "Collaborate in real-time with buy-side, sell-side, legal counsel, and advisors — all in a single secure platform. Granular permissions ensure each party sees only the documents relevant to their role in the transaction.",
        tags: ["Real-time", "Multi-party", "Granular permissions"],
    },
    {
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
        title: "Structured Q&A Workflows",
        description: "Built-in Q&A workflow routes questions to the right deal team members, tracks responses, and maintains a complete audit trail of every inquiry. Reduce response times and eliminate email-based Q&A chaos.",
        tags: ["Structured Q&A", "Routing", "Audit trail"],
    },
    {
        icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
        title: "Deal Pipeline Management",
        description: "Track every deal from origination through due diligence, negotiation, and close. Visual pipeline view shows deal status, counterparty engagement, and outstanding Q&A items at a glance.",
        tags: ["Pipeline view", "Stage tracking", "Deal health"],
    },
    {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "AI Document Intelligence",
        description: "Automatically classify, redact PII, and extract key terms from deal documents. AI-powered smart search finds any clause, financial figure, or legal term across thousands of documents in seconds.",
        tags: ["AI redaction", "Auto-classification", "Smart search"],
    },
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Enterprise-Grade Security",
        description: "SOC 2 Type II certified, AES-256 encryption at rest and TLS 1.3 in transit. Dynamic watermarking, MFA enforcement, and role-based access controls ensure deal documents remain confidential.",
        tags: ["SOC 2 Type II", "AES-256", "Dynamic watermarking"],
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Immutable Audit Trail",
        description: "Every document view, download, Q&A submission, and permission change is logged with timestamp and user identity. Tamper-evident audit trails support regulatory compliance and internal governance.",
        tags: ["Tamper-evident", "Compliance", "Full traceability"],
    },
    {
        icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
        title: "Real-Time Notifications & Alerts",
        description: "Stay informed with real-time alerts when documents are viewed, Q&A items are submitted, or deal milestones are reached. Configurable notifications keep deal teams responsive without email overload.",
        tags: ["Real-time alerts", "Configurable", "Deal milestones"],
    },
    {
        icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        title: "Visual Data Room Analytics",
        description: "See which counterparties are most engaged, which documents attract the most attention, and where deal momentum is strongest. Per-party analytics help deal teams prioritize follow-ups and gauge buyer interest.",
        tags: ["Engagement analytics", "Per-party", "Deal intelligence"],
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Multi-Deal Management",
        description: "Manage multiple simultaneous transactions from a single platform. Each deal has its own isolated data room, permission set, and counterparty list — with a unified dashboard for cross-deal oversight.",
        tags: ["Multi-deal", "Isolated rooms", "Unified dashboard"],
    },
];

const comparisonRows = [
    { feature: "Real-Time Collaboration", spacenexus: { value: "Built-in, multi-party", good: true }, legacy: { value: "Limited", good: false }, generic: { value: "Basic sharing", good: false } },
    { feature: "Structured Q&A Workflow", spacenexus: { value: "Built-in with routing", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Not available", good: false } },
    { feature: "AI Document Processing", spacenexus: { value: "Included (redaction, classification)", good: true }, legacy: { value: "Add-on, costly", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Deal Pipeline Tracking", spacenexus: { value: "Visual pipeline, all deals", good: true }, legacy: { value: "Basic status only", good: false }, generic: { value: "Not available", good: false } },
    { feature: "SOC 2 Type II", spacenexus: { value: "Certified", good: true }, legacy: { value: "Certified", good: true }, generic: { value: "Rarely certified", good: false } },
    { feature: "Immutable Audit Trail", spacenexus: { value: "Full tamper-evident trail", good: true }, legacy: { value: "Basic activity log", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Dynamic Watermarking", spacenexus: { value: "Per-viewer, persistent", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Not available", good: false } },
    { feature: "Setup Time", spacenexus: { value: "Under 24 hours, self-serve", good: true }, legacy: { value: "Weeks, requires onboarding", good: false }, generic: { value: "Instant (limited features)", good: false } },
    { feature: "Pricing Transparency", spacenexus: { value: "Published, transparent", good: true }, legacy: { value: "Quote-only, opaque", good: false }, generic: { value: "Published (limited)", good: true } },
    { feature: "Cross-Deal Analytics", spacenexus: { value: "Per-party engagement", good: true }, legacy: { value: "Per-room only", good: false }, generic: { value: "Not available", good: false } },
];

const faqItems = [
    {
        question: "What is a deal collaboration platform?",
        answer: "A deal collaboration platform is a secure, cloud-based solution designed for teams to work together on business transactions — including M&A, fundraising, joint ventures, and asset sales. Unlike generic file-sharing tools, a deal collaboration platform provides structured Q&A workflows, granular multi-party permissions, real-time notifications, deal pipeline tracking, and an immutable audit trail. It serves as a central workspace where deal team members, counterparties, legal counsel, and advisors can securely share documents, exchange questions and answers, track deal progress, and maintain a complete record of every interaction — all in one governed environment with enterprise-grade security.",
    },
    {
        question: "How is a deal collaboration platform different from a virtual data room?",
        answer: "A virtual data room (VDR) is a core component of a deal collaboration platform — it provides secure document storage, permission controls, and audit trails. However, a deal collaboration platform extends beyond document sharing to include structured Q&A workflows, task management, deal pipeline tracking, real-time collaboration features, and cross-deal analytics. While a VDR is focused primarily on secure document access during due diligence, a deal collaboration platform supports the full deal lifecycle — from origination and teaser distribution through due diligence, negotiation, signing, and post-close integration. The best platforms (including SpaceNexus) deliver both sets of capabilities in a single solution.",
    },
    {
        question: "What features should a deal collaboration platform include?",
        answer: "Essential deal collaboration platform features include: multi-party collaboration with granular permission controls; structured Q&A workflow with automated routing and audit trails; AI-powered document processing including automatic redaction and classification; deal pipeline management with visual stage tracking; real-time notifications and alerts; SOC 2 Type II certification; AES-256 encryption at rest and TLS 1.3 in transit; dynamic per-viewer watermarking; immutable tamper-evident audit trails; per-party engagement analytics; dynamic watermarking; SSO integration with Okta, Azure AD, and SAML 2.0; cross-deal dashboards; and transparent pricing without per-page or per-user fees.",
    },
    {
        question: "How much does a deal collaboration platform cost?",
        answer: "Deal collaboration platform pricing varies significantly by provider. SpaceNexus offers transparent, published flat-rate pricing with no per-page, per-user, or per-deal fees — all features including AI document processing, Q&A workflows, and deal pipeline management are included on every plan. Legacy providers like Datasite and Intralinks operate on quote-only pricing that typically charges per-page uploaded, per-user per-month, and per-deal, making costs unpredictable and expensive for firms managing multiple simultaneous transactions. Modern platforms like SpaceNexus deliver enterprise-grade deal collaboration capabilities at a predictable, affordable price.",
    },
    {
        question: "Which deal collaboration platform is best for M&A teams?",
        answer: "SpaceNexus is the best deal collaboration platform for M&A teams in 2026. It combines enterprise-grade security (SOC 2 Type II, ISO 27001) with real-time multi-party collaboration, structured Q&A workflows with automated routing, AI-powered document redaction and classification, visual deal pipeline tracking, per-party engagement analytics, and transparent published pricing — all with setup in under 24 hours. For bulge-bracket cross-border deals where brand recognition matters, Datasite and Intralinks remain options, but at significantly higher cost and with less collaboration and AI capabilities.",
    },
    {
        question: "Can Google Drive or Microsoft Teams be used as a deal collaboration platform?",
        answer: "Google Drive, Microsoft Teams, and SharePoint are not suitable replacements for a purpose-built deal collaboration platform in transactional contexts. They lack structured Q&A workflows with routing and audit trails, NDA click-through enforcement, document-level permission controls that persist after sharing, tamper-evident audit trails required for regulatory compliance, dynamic per-viewer watermarking, per-party engagement analytics, and the security certifications (SOC 2 Type II, ISO 27001) that counterparties and regulators require. Using collaboration tools designed for general office productivity creates legal, compliance, and security exposure in deal environments.",
    },
    {
        question: "How long does it take to set up a deal collaboration platform?",
        answer: "With a modern deal collaboration platform like SpaceNexus, a new deal workspace can be fully configured in under 24 hours. Upload documents, set up permission groups for each counterparty, configure NDA requirements, enable Q&A workflows, and start inviting deal participants — all through self-service without dedicated implementation support. Legacy providers like Datasite and Intralinks often require 3–7 days of CSM-led setup. For fast-moving transactions where speed matters, the self-service model of modern platforms provides a meaningful advantage.",
    },
    {
        question: "How does a deal collaboration platform protect confidentiality?",
        answer: "Deal collaboration platforms protect confidentiality through multiple security layers: SOC 2 Type II certification ensuring enterprise-grade security controls; AES-256 encryption at rest and TLS 1.3 in transit; mandatory NDA click-through before document access; granular multi-party permissions at the folder and document level; dynamic per-viewer watermarking that deters unauthorized sharing; an immutable audit trail logging every access event with timestamp and user identity; MFA enforcement; and Zero Trust architecture. These protections ensure that deal documents remain confidential and that all access is auditable for legal and regulatory purposes.",
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
        { "@type": "ListItem", position: 2, name: "Deal Collaboration Platform", item: "https://spacenexus.net/deal-collaboration-platform" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Deal Collaboration Platform 2026 — Complete Guide to Secure Deal Collaboration",
    description: "The complete guide to deal collaboration platforms in 2026. Compare features, pricing, and security across the top platforms for secure collaboration on M&A, fundraising, and transactions.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/deal-collaboration-platform",
};

export default function DealCollaborationPlatformPage() {
    return (
        <>
            <Script id="dcp-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="dcp-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="dcp-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Deal Collaboration Platform</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                2026 Deal Collaboration Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Deal Collaboration Platform{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all deal collaboration platforms are built the same. This guide covers what to look for, what separates purpose-built platforms from generic tools, and which solution leads in 2026.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers features, pricing, security, and top platforms
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Try SpaceNexus Free
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <a href="#features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    See All Features
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is a deal collaboration platform */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a deal collaboration platform?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                A deal collaboration platform is a secure, cloud-based workspace purpose-built for teams to work together on business transactions — from M&A and fundraising to joint ventures and asset sales. Unlike generic file-sharing or messaging tools, a deal collaboration platform combines secure document management with structured Q&A workflows, deal pipeline tracking, real-time notifications, and multi-party collaboration — all governed by enterprise-grade security controls and a complete audit trail.
                            </p>
                            <p>
                                What distinguishes a deal collaboration platform from general-purpose collaboration tools like Teams or Slack is its transaction-specific feature set: mandatory NDA enforcement before document access, granular multi-party permissions that ensure each counterparty sees only their designated documents, structured Q&A with automated routing to the right deal team members, dynamic per-viewer watermarking, and per-party engagement analytics that show who is most engaged in the deal. These capabilities are essential for M&A advisors, investment bankers, private equity firms, corporate development teams, and law firms managing sensitive transactions.
                            </p>
                            <p>
                                In 2026, the deal collaboration platform market is divided between legacy enterprise providers (Datasite, Intralinks) built for large cross-border transactions with high costs and long setup times, and a new generation of AI-powered platforms like SpaceNexus that deliver enterprise-grade security and collaboration features with transparent pricing, AI document intelligence, and setup in under 24 hours — making professional deal collaboration accessible to firms of all sizes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { value: "SOC 2 II", label: "Enterprise security certified" },
                                { value: "< 24hrs", label: "Average deal workspace setup" },
                                { value: "100%", label: "Audit trail coverage" },
                                { value: "500+", label: "Enterprise teams trust SpaceNexus" },
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
                                What the best deal collaboration platform must include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any serious deal collaboration platform.
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
                                    Recommended Deal Collaboration Platform
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — AI-powered deal collaboration with transparent pricing
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is a purpose-built deal collaboration platform for M&A, fundraising, and transaction teams. Every plan includes real-time multi-party collaboration, structured Q&A workflows, AI document processing, deal pipeline management, and per-party engagement analytics — all with enterprise-grade security and transparent, published pricing.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "Multi-Party Collaboration", desc: "Real-time, granular permissions" },
                                        { label: "Structured Q&A", desc: "Built-in with automated routing" },
                                        { label: "AI Document Intelligence", desc: "Redaction & classification included" },
                                        { label: "Deal Pipeline Tracking", desc: "Visual cross-deal dashboard" },
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
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus deal collaboration platform dashboard" className="w-full h-auto" loading="lazy" />
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
                                Deal collaboration platform compared: SpaceNexus vs legacy VDRs vs generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy virtual data room providers and generic collaboration tools on the features that matter most for deal execution.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Legacy VDR<br /><span className="text-xs font-normal text-gray-600">(Datasite / Intralinks)</span></div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Generic Tools<br /><span className="text-xs font-normal text-gray-600">(Drive / Teams)</span></div>
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
                        <p className="text-xs text-gray-600 mt-3 text-center">Based on publicly available information. Last updated July 2026.</p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about deal collaboration platforms
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
                        <p className="text-sm font-semibold text-gray-700 mb-4">Related resources</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/deal-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Deal Room Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">Virtual Data Room Providers →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/deal-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Deal Management Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/online-due-diligence-platform" className="text-sm font-semibold text-[#2563eb] hover:underline">Online Due Diligence Platform →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Try the deal collaboration platform built for modern deal teams
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Multi-party collaboration. Structured Q&A. AI document intelligence. Deal pipeline tracking. SOC 2 Type II certified. Transparent published pricing.
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
                <LastUpdated date="2026-08-01" />
            </div></div>
                </section>
            </main>
        </>
    );
}
