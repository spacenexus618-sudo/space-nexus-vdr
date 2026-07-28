import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "M&A Platform 2026 | SpaceNexus",
    description: "Compare the best M&A platform solutions for mergers and acquisitions. AI-powered deal management, virtual data rooms, pipeline tracking, and due diligence workflows.",
    alternates: {
        canonical: "https://spacenexus.net/ma-platform",
    },
    openGraph: {
        title: "M&A Platform 2026 | SpaceNexus",
        description:
            "Compare the best M&A platform solutions for mergers and acquisitions. AI-powered deal management, virtual data rooms, pipeline tracking, and due diligence workflows.",
        url: "https://spacenexus.net/ma-platform",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "M&A Platform 2026 — Complete Guide to M&A Software | SpaceNexus",
        description:
            "Complete guide to M&A platforms in 2026. Compare features, pricing, and security across the top platforms for managing mergers, acquisitions, and divestitures.",
    },
    keywords: [
        "M&A platform",
        "merger and acquisition platform",
        "M&A software",
        "merger acquisition platform",
        "M&A deal platform",
        "M&A management platform",
        "mergers and acquisitions software",
        "M&A technology platform",
        "M&A workflow platform",
        "M&A data room",
    ],
};

const coreFeatures = [
    {
        icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
        title: "M&A Deal Pipeline",
        description: "End-to-end pipeline tracking from origination and screening through due diligence, negotiation, signing, and post-merger integration. Visual kanban and list views with customizable stages.",
        tags: ["Deal pipeline", "Custom stages", "Visual kanban"],
    },
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Secure M&A Data Rooms",
        description: "Purpose-built virtual data rooms for M&A due diligence with granular permission controls, dynamic watermarking, NDA click-through, and tamper-evident audit trails trusted by investment banks and corporate development teams.",
        tags: ["SOC 2 Type II", "Granular permissions", "Dynamic watermarking"],
    },
    {
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
        title: "Due Diligence Q&A",
        description: "Structured Q&A workflow for managing buyer and seller due diligence inquiries. Route questions to subject matter experts, track response times, and maintain a complete auditable record of every inquiry and response.",
        tags: ["Structured Q&A", "Internal routing", "Audit trail"],
    },
    {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "AI Document Intelligence",
        description: "Automatically classify M&A documents by diligence category, redact PII and privileged content, extract key financial and legal terms, and surface documentation gaps before they become deal issues.",
        tags: ["AI redaction", "Auto-classification", "Gap analysis"],
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        title: "Multi-Party Deal Collaboration",
        description: "Collaborate with buy-side, sell-side, legal counsel, lenders, and advisors in a single secure environment. Granular permissions ensure each party accesses only the documents and data relevant to their role in the transaction.",
        tags: ["Multi-party", "Role-based access", "Real-time"],
    },
    {
        icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
        title: "M&A Deal Analytics",
        description: "Real-time analytics on counterparty engagement, pipeline velocity, Q&A responsiveness, and deal health. Data-driven insights help M&A teams prioritize activities, identify risks early, and optimize deal processes.",
        tags: ["Engagement analytics", "Pipeline velocity", "Deal health"],
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Immutable Audit Trail",
        description: "Every document access, Q&A submission, permission change, and deal stage transition logged with timestamp and user identity. Tamper-evident audit trails satisfy regulatory, compliance, and governance requirements for M&A transactions.",
        tags: ["Tamper-evident", "Regulatory compliance", "Full traceability"],
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Post-Merger Integration",
        description: "Dedicated workspace for post-close integration activities including synergy tracking, integration milestones, task management, and secure document sharing between legacy and acquiring entities during the integration phase.",
        tags: ["Integration tracking", "Milestones", "Synergy tracking"],
    },
    {
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
        title: "Deal Sourcing & Origination",
        description: "Track deal sourcing channels, manage target lists, log outreach activities, and score opportunities. Pipeline view shows deal flow from initial contact through LOI, with notes and document history preserved per deal.",
        tags: ["Target tracking", "Deal sourcing", "Opportunity scoring"],
    },
];

const comparisonRows = [
    { feature: "M&A Deal Pipeline", spacenexus: { value: "Full lifecycle tracking", good: true }, legacy: { value: "Basic stage tracking", good: false }, generic: { value: "CRM-based, limited", good: false } },
    { feature: "Virtual Data Rooms", spacenexus: { value: "Per-deal with full controls", good: true }, legacy: { value: "Per-deal rooms", good: true }, generic: { value: "Folder sharing only", good: false } },
    { feature: "Due Diligence Q&A", spacenexus: { value: "Structured w/ routing", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Email-based", good: false } },
    { feature: "AI Document Processing", spacenexus: { value: "Included (redaction, classification)", good: true }, legacy: { value: "Add-on, costly", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Post-Merger Integration", spacenexus: { value: "Dedicated workspace", good: true }, legacy: { value: "Not available", good: false }, generic: { value: "Basic project mgmt", good: false } },
    { feature: "SOC 2 Type II", spacenexus: { value: "Certified", good: true }, legacy: { value: "Certified", good: true }, generic: { value: "Rarely certified", good: false } },
    { feature: "Immutable Audit Trail", spacenexus: { value: "Full tamper-evident trail", good: true }, legacy: { value: "Basic activity log", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Deal Sourcing", spacenexus: { value: "Built-in target tracking", good: true }, legacy: { value: "Not available", good: false }, generic: { value: "CRM-based", good: false } },
    { feature: "Pricing Transparency", spacenexus: { value: "Published, transparent", good: true }, legacy: { value: "Quote-only, opaque", good: false }, generic: { value: "Published (limited)", good: true } },
    { feature: "Setup Time", spacenexus: { value: "Under 24 hours, self-serve", good: true }, legacy: { value: "Weeks, requires onboarding", good: false }, generic: { value: "Instant (limited features)", good: false } },
];

const faqItems = [
    {
        question: "What is an M&A platform?",
        answer: "An M&A platform is a comprehensive software solution designed to support the full lifecycle of mergers and acquisitions — from deal sourcing and origination through due diligence, negotiation, signing, and post-merger integration. Unlike point solutions that address only one aspect of the deal process (such as a virtual data room for document sharing), an M&A platform provides an integrated environment with deal pipeline management, secure data rooms, due diligence Q&A workflows, AI document intelligence, multi-party collaboration tools, and deal analytics — all within a single, governed platform with enterprise-grade security.",
    },
    {
        question: "How is an M&A platform different from a virtual data room?",
        answer: "A virtual data room (VDR) is a component of an M&A platform — it provides secure document storage and sharing during the due diligence phase. An M&A platform, however, encompasses the entire M&A lifecycle beyond just document sharing. It includes deal pipeline tracking from sourcing through integration, deal sourcing and target management, structured Q&A workflows with automated routing, AI-powered document redaction and classification, post-merger integration workspaces, multi-party collaboration with role-based permissions, and cross-deal analytics. While a VDR is a document-centric tool for a specific phase, an M&A platform is an end-to-end deal management solution for the entire M&A process.",
    },
    {
        question: "What features should an M&A platform include?",
        answer: "Essential M&A platform features include: end-to-end deal pipeline management with customizable stages; secure virtual data rooms with granular permissions, dynamic watermarking, and NDA enforcement; structured due diligence Q&A workflow with routing and audit trails; AI-powered document processing including automatic redaction, classification, and gap analysis; multi-party collaboration with role-based access controls; M&A deal analytics and reporting on engagement, pipeline velocity, and deal health; post-merger integration workspace with synergy tracking; deal sourcing and target management; immutable tamper-evident audit trails; SOC 2 Type II certification; AES-256 encryption at rest and TLS 1.3 in transit; SSO integration with Okta, Azure AD, and SAML 2.0; and transparent pricing without per-page or per-user fees.",
    },
    {
        question: "How much does an M&A platform cost?",
        answer: "M&A platform pricing varies significantly by provider and feature set. SpaceNexus offers transparent, published flat-rate pricing with no per-page, per-user, or per-deal fees — including pipeline management, data rooms, Q&A workflows, AI document processing, and analytics. Legacy providers like Datasite and Intralinks charge per-page uploaded (typically $0.50–$2.00 per page) plus per-user monthly fees, with additional costs for Q&A, analytics, and AI as add-ons. A comprehensive M&A platform should deliver end-to-end deal management at a predictable, affordable monthly price without surprise fees.",
    },
    {
        question: "Which M&A platform is best for corporate development teams?",
        answer: "SpaceNexus is the best M&A platform for corporate development teams in 2026. It combines end-to-end deal pipeline management, AI-powered due diligence, secure virtual data rooms, structured Q&A, post-merger integration workspaces, and per-party engagement analytics — all with enterprise-grade security (SOC 2 Type II, ISO 27001) and transparent published pricing. For large institutions running bulge-bracket cross-border transactions where brand recognition is paramount, Datasite and Intralinks remain options, but at significantly higher cost and without the unified platform approach that modern corporate development teams need to manage their full M&A lifecycle efficiently.",
    },
    {
        question: "Can I use an M&A platform for both buy-side and sell-side deals?",
        answer: "Yes. A well-designed M&A platform like SpaceNexus supports both buy-side and sell-side workflows. On the buy-side, it enables target sourcing, acquisition pipeline management, due diligence review with structured Q&A, and integration planning. On the sell-side, it supports data room preparation with AI VDD report generation, multi-buyer management with isolated data rooms and engagement comparison, and bid management. The ability to manage both sides of the transaction from a single platform is a key advantage for investment banks, M&A advisory firms, and corporate development teams that work on both buy and sell mandates.",
    },
    {
        question: "How long does it take to implement an M&A platform?",
        answer: "With a modern M&A platform like SpaceNexus, implementation takes under 24 hours. Set up your deal pipeline stages, configure user permissions, upload diligence documents, enable Q&A workflows, and invite deal participants — all through self-service without dedicated implementation support. Legacy providers like Datasite and Intralinks typically require 3–7 days of CSM-led setup and onboarding, followed by training sessions for deal teams. In fast-moving M&A environments where new deals can arise at any moment, the self-service model of modern platforms provides a critical speed advantage.",
    },
    {
        question: "How does an M&A platform improve deal outcomes?",
        answer: "An M&A platform improves deal outcomes through: (1) Faster deal cycles — AI document processing, structured workflows, and automated Q&A routing reduce average deal timelines by 30–50%; (2) Better deal intelligence — engagement analytics reveal which counterparties are most active and which documents attract attention, helping teams prioritize; (3) Reduced risk — granular permission controls, NDA enforcement, and immutable audit trails prevent data leaks and ensure compliance; (4) Improved collaboration — centralized platform eliminates email chaos and ensures all deal team members have real-time visibility into deal status; (5) Portfolio visibility — cross-deal dashboards give leadership real-time insight into all active transactions; (6) Seamless integration — post-merger workspaces ensure a smooth transition from due diligence to integration execution.",
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
        { "@type": "ListItem", position: 2, name: "M&A Platform", item: "https://spacenexus.net/ma-platform" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "M&A Platform 2026 — Complete Guide to M&A Software",
    description: "The complete guide to M&A platforms in 2026. Compare features, pricing, and security across the top platforms for managing mergers, acquisitions, and divestitures.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/ma-platform",
};

export default function MaPlatformPage() {
    return (
        <>
            <Script id="map-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="map-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="map-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">M&A Platform</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                </svg>
                                2026 M&A Platform Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                M&A Platform{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all M&A platforms are built the same. This guide covers what to look for, how an integrated platform transforms the M&A lifecycle, and which solution leads in 2026.
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
                                <a href="#features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    See All Features
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is an M&A platform */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is an M&A platform?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                An M&A platform is a comprehensive software solution designed to manage the full lifecycle of mergers and acquisitions — from deal sourcing and origination through due diligence, negotiation, signing, and post-merger integration. It replaces the fragmented toolkit of email, spreadsheets, separate data rooms, and project management tools with a single, integrated environment where every aspect of the deal process is tracked, secured, and auditable.
                            </p>
                            <p>
                                What distinguishes a true M&A platform from a collection of point solutions is its integrated approach to the deal lifecycle: deal pipeline management with sourcing and origination tracking, secure virtual data rooms with granular multi-party permissions, structured due diligence Q&A with automated routing, AI-powered document intelligence for redaction and classification, post-merger integration workspaces, real-time deal analytics, and cross-deal portfolio dashboards. These capabilities work together to eliminate data silos, reduce manual handoffs, and provide deal teams with a single source of truth for every transaction.
                            </p>
                            <p>
                                In 2026, the M&A platform market is divided between legacy providers (Datasite, Intralinks) that offer fragmented tools with opaque quote-based pricing, and modern integrated platforms like SpaceNexus that deliver end-to-end M&A capabilities with AI, transparent pricing, and setup in under 24 hours — making professional M&A technology accessible to corporate development teams, investment banks, private equity firms, and M&A advisors of all sizes.
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
                                { value: "< 24hrs", label: "Average M&A workspace setup" },
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
                                What the best M&A platform must include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any serious M&A platform.
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
                                    Recommended M&A Platform
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — Integrated M&A platform with transparent pricing
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is a purpose-built M&A platform for the full deal lifecycle. Every plan includes deal pipeline management, secure virtual data rooms, AI document intelligence, structured Q&A workflows, multi-party collaboration, post-merger integration tools, and deal analytics — all with enterprise-grade security and transparent, published pricing.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "Deal Pipeline", desc: "End-to-end lifecycle tracking" },
                                        { label: "AI Document Intelligence", desc: "Redaction & classification included" },
                                        { label: "Due Diligence Q&A", desc: "Built-in with routing" },
                                        { label: "Post-Merger Integration", desc: "Dedicated workspace" },
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
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus M&A platform dashboard" className="w-full h-auto" loading="lazy" />
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
                                M&A platform compared: SpaceNexus vs legacy providers vs generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy M&A data room providers and generic productivity tools on the features that matter most for mergers and acquisitions.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Legacy VDR<br /><span className="text-xs font-normal text-gray-600">(Datasite / Intralinks)</span></div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Generic Tools<br /><span className="text-xs font-normal text-gray-600">(Email / Sheets / Drive)</span></div>
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
                            Frequently asked questions about M&A platforms
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
                            <Link href="/merger-acquisition-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Merger & Acquisition Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/m-a-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">M&A Data Room Providers →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/deal-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Deal Management Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">Virtual Data Room Providers →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Try the M&A platform built for modern deal teams
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Deal pipeline management. AI document intelligence. Due diligence Q&A. Post-merger integration. SOC 2 Type II certified. Transparent published pricing.
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
