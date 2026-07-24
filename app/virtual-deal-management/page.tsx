import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Virtual Deal Management 2026 | SpaceNexus",
    description: "Manage deals from origination to close with virtual deal management software. AI-powered pipeline tracking, secure document sharing, Q&A workflows, and real-time collaboration.",
    alternates: {
        canonical: "https://spacenexus.net/virtual-deal-management",
    },
    openGraph: {
        title: "Virtual Deal Management 2026 | SpaceNexus",
        description:
            "Manage deals from origination to close with virtual deal management software. AI-powered pipeline tracking, secure document sharing, Q&A workflows, and real-time collaboration.",
        url: "https://spacenexus.net/virtual-deal-management",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Virtual Deal Management 2026 — End-to-End Deal Management Guide | SpaceNexus",
        description:
            "Complete guide to virtual deal management. Compare features, pricing, and security across top platforms for managing M&A, fundraising, and transaction workflows digitally.",
    },
    keywords: [
        "virtual deal management",
        "deal management software",
        "virtual deal management software",
        "deal pipeline management",
        "virtual deal room",
        "deal management platform",
        "virtual transaction management",
        "deal workflow software",
        "online deal management",
        "deal lifecycle management",
    ],
};

const coreFeatures = [
    {
        icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
        title: "Deal Pipeline Tracking",
        description: "Visual pipeline view of every deal from origination through due diligence, negotiation, and close. Track deal status, stage duration, and bottleneck identification across your entire portfolio.",
        tags: ["Visual pipeline", "Stage tracking", "Bottleneck alerts"],
    },
    {
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
        title: "Structured Q&A Workflows",
        description: "Built-in Q&A system routes due diligence inquiries to the right team members, tracks response times, and maintains a complete audit trail. Eliminate email-based Q&A chaos across multiple counterparties.",
        tags: ["Structured Q&A", "Automated routing", "Audit trail"],
    },
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Secure Virtual Data Rooms",
        description: "Purpose-built data rooms for each deal with granular permission controls, dynamic watermarking, NDA click-through enforcement, and tamper-evident audit trails. Every document access is logged and traceable.",
        tags: ["Granular permissions", "Dynamic watermarking", "NDA enforcement"],
    },
    {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "AI Document Intelligence",
        description: "Automatically classify, redact sensitive information, and extract key terms from deal documents. AI-powered smart search finds any clause, financial figure, or legal term across thousands of documents instantly.",
        tags: ["AI redaction", "Auto-classification", "Smart search"],
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        title: "Multi-Party Collaboration",
        description: "Collaborate in real-time with buy-side, sell-side, legal counsel, and advisors in a single secure environment. Granular permissions ensure each party sees only the documents and data relevant to their role.",
        tags: ["Real-time", "Multi-party", "Role-based access"],
    },
    {
        icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
        title: "Deal Analytics & Reporting",
        description: "Real-time dashboards showing counterparty engagement, pipeline velocity, Q&A response metrics, and deal health scores. Data-driven insights help deal teams prioritize follow-ups and optimize processes.",
        tags: ["Engagement analytics", "Pipeline velocity", "Deal health"],
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Immutable Audit Trail",
        description: "Every document view, download, Q&A submission, permission change, and deal stage transition is logged with timestamp and user identity. Tamper-evident audit trails support compliance and governance.",
        tags: ["Tamper-evident", "Compliance", "Full traceability"],
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Multi-Deal Portfolio View",
        description: "Manage all deals from a single dashboard. Unified view across active transactions shows pipeline status, team workloads, key milestones, and upcoming deadlines for every deal in your portfolio.",
        tags: ["Unified dashboard", "Cross-deal view", "Milestone tracking"],
    },
    {
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "Secure Document Sharing",
        description: "Share deal documents securely with counterparties, investors, and advisors with granular controls over view, download, print, and forward permissions. Dynamic watermarks deter unauthorized redistribution.",
        tags: ["Granular controls", "Secure sharing", "Watermarking"],
    },
];

const comparisonRows = [
    { feature: "Deal Pipeline Tracking", spacenexus: { value: "Visual, multi-deal pipeline", good: true }, legacy: { value: "Basic status tracking", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Virtual Data Rooms", spacenexus: { value: "Per-deal with full controls", good: true }, legacy: { value: "Per-deal rooms", good: true }, generic: { value: "Folder sharing only", good: false } },
    { feature: "Structured Q&A", spacenexus: { value: "Built-in with routing", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Email-based", good: false } },
    { feature: "AI Document Processing", spacenexus: { value: "Included (redaction, classification)", good: true }, legacy: { value: "Add-on, costly", good: false }, generic: { value: "Not available", good: false } },
    { feature: "SOC 2 Type II", spacenexus: { value: "Certified", good: true }, legacy: { value: "Certified", good: true }, generic: { value: "Rarely certified", good: false } },
    { feature: "Immutable Audit Trail", spacenexus: { value: "Full tamper-evident trail", good: true }, legacy: { value: "Basic activity log", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Deal Analytics", spacenexus: { value: "Per-party engagement & pipeline", good: true }, legacy: { value: "Per-room only", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Setup Time", spacenexus: { value: "Under 24 hours, self-serve", good: true }, legacy: { value: "Weeks, requires onboarding", good: false }, generic: { value: "Instant (limited features)", good: false } },
    { feature: "Pricing Transparency", spacenexus: { value: "Published, transparent", good: true }, legacy: { value: "Quote-only, opaque", good: false }, generic: { value: "Published (limited)", good: true } },
    { feature: "Multi-Deal Portfolio", spacenexus: { value: "Unified dashboard, all deals", good: true }, legacy: { value: "Separate rooms per deal", good: false }, generic: { value: "Single workspace", good: false } },
];

const faqItems = [
    {
        question: "What is virtual deal management?",
        answer: "Virtual deal management is the practice of managing the full lifecycle of a business transaction — from origination and pipeline tracking through due diligence, Q&A, negotiation, and close — using a secure, cloud-based platform. Unlike managing deals through a combination of email, spreadsheets, and generic file-sharing tools, virtual deal management brings all deal activities into a single governed environment with structured workflows, real-time collaboration, granular security controls, and a complete audit trail. It enables deal teams to manage multiple transactions simultaneously, track counterparty engagement, automate document workflows with AI, and maintain compliance throughout the deal lifecycle.",
    },
    {
        question: "How is virtual deal management different from a virtual data room?",
        answer: "A virtual data room (VDR) is a component of virtual deal management — it provides secure document storage and sharing during due diligence. Virtual deal management, however, encompasses the entire deal lifecycle beyond document sharing. It includes deal pipeline tracking from origination through close, structured Q&A workflows with automated routing, AI-powered document intelligence (redaction, classification, smart search), multi-party collaboration with role-based permissions, deal analytics and reporting, and multi-deal portfolio management. While a VDR is focused on secure document access during a specific phase, virtual deal management supports end-to-end deal execution across your entire portfolio.",
    },
    {
        question: "What features should virtual deal management software include?",
        answer: "Essential virtual deal management features include: visual deal pipeline tracking with stage management; secure virtual data rooms with granular permissions and NDA enforcement; structured Q&A workflow with automated routing and audit trails; AI-powered document processing including automatic redaction and classification; real-time multi-party collaboration; per-deal and cross-deal analytics and reporting; immutable tamper-evident audit trails; dynamic per-viewer watermarking; SOC 2 Type II certification; AES-256 encryption at rest and TLS 1.3 in transit; multi-deal portfolio dashboard; SSO integration with Okta, Azure AD, and SAML 2.0; and transparent pricing without per-page or per-user fees.",
    },
    {
        question: "How much does virtual deal management software cost?",
        answer: "Virtual deal management software pricing varies by provider and the breadth of features. SpaceNexus offers transparent, published flat-rate pricing with no per-page, per-user, or per-deal fees — including pipeline tracking, virtual data rooms, Q&A workflows, AI document processing, and analytics. Legacy providers like Datasite and Intralinks charge per-page uploaded (typically $0.50–$2.00 per page) plus per-user monthly fees, with additional costs for Q&A, analytics, and AI features as add-ons. Modern virtual deal management platforms deliver comprehensive deal lifecycle capabilities at a predictable, affordable monthly price.",
    },
    {
        question: "Which virtual deal management platform is best for deal teams?",
        answer: "SpaceNexus is the best virtual deal management platform for deal teams in 2026. It combines end-to-end deal pipeline tracking, AI-powered virtual data rooms, structured Q&A workflows, multi-party collaboration, and per-party engagement analytics — all with enterprise-grade security (SOC 2 Type II, ISO 27001) and transparent published pricing. Legacy platforms like Datasite and Intralinks remain options for large institutions with established workflows, but they lack the unified deal management approach, AI capabilities, and pricing transparency that modern deal teams increasingly demand.",
    },
    {
        question: "Can I use CRM software for virtual deal management?",
        answer: "CRM software like Salesforce, HubSpot, and Pipedrive is designed for sales pipeline management and customer relationship tracking, not for virtual deal management in transactional contexts. CRMs lack secure document sharing with NDA enforcement and granular permissions, structured due diligence Q&A workflows, tamper-evident audit trails required for regulatory compliance, dynamic per-viewer watermarking, and the security certifications (SOC 2 Type II, ISO 27001) that counterparties and regulators require. While a CRM can track deal stage and value, it cannot replace a purpose-built virtual deal management platform for managing confidential transaction documents and diligence workflows.",
    },
    {
        question: "How long does it take to set up virtual deal management software?",
        answer: "With a modern virtual deal management platform like SpaceNexus, a new deal workspace can be fully configured in under 24 hours. Set up deal pipeline stages, upload documents, configure permission groups, enable Q&A workflows, and invite deal participants — all through self-service without dedicated implementation support. Legacy providers like Datasite and Intralinks typically require 3–7 days of CSM-led setup and onboarding. In fast-moving deal environments, the self-service model of modern platforms provides a meaningful speed advantage.",
    },
    {
        question: "How does virtual deal management improve deal outcomes?",
        answer: "Virtual deal management improves deal outcomes through several mechanisms: (1) Faster deal cycles — structured workflows and AI document processing eliminate manual bottlenecks, reducing average deal timelines by 30–50%; (2) Better counterparty intelligence — engagement analytics show which parties are most active and which documents attract attention, helping deal teams prioritize follow-ups; (3) Reduced risk — granular permission controls, NDA enforcement, and immutable audit trails prevent data leaks and ensure compliance; (4) Improved team collaboration — structured Q&A and real-time collaboration eliminate email chaos and ensure nothing falls through the cracks; (5) Portfolio visibility — multi-deal dashboards give leadership real-time visibility into all active transactions and their status.",
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
        { "@type": "ListItem", position: 2, name: "Virtual Deal Management", item: "https://spacenexus.net/virtual-deal-management" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Virtual Deal Management 2026 — Complete Guide to Digital Deal Execution",
    description: "The complete guide to virtual deal management in 2026. Compare features, pricing, and security across top platforms for managing M&A, fundraising, and transaction workflows digitally.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/virtual-deal-management",
};

export default function VirtualDealManagementPage() {
    return (
        <>
            <Script id="vdm-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="vdm-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="vdm-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Virtual Deal Management</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                </svg>
                                2026 Deal Management Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Virtual Deal Management{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all virtual deal management platforms are built the same. This guide covers what to look for, how digital deal execution transforms transaction workflows, and which platform leads in 2026.
                            </p>
                            <p className="text-sm text-gray-400 mb-10">
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

                {/* What is virtual deal management */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is virtual deal management?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Virtual deal management is the practice of managing the full lifecycle of a business transaction — including M&A, fundraising, joint ventures, and asset sales — through a secure, cloud-based platform that replaces the traditional combination of email, spreadsheets, physical data rooms, and in-person meetings with a single digital workspace.
                            </p>
                            <p>
                                What distinguishes virtual deal management from simply using a virtual data room is its comprehensive approach to the deal lifecycle: visual pipeline tracking from origination to close, AI-powered document preparation and redaction, structured Q&A workflows with automated routing, real-time multi-party collaboration, per-party engagement analytics, and cross-deal portfolio dashboards. These capabilities transform deal execution from a fragmented, manual process into a streamlined, data-driven operation where every interaction is tracked, every document is secure, and every team member has real-time visibility into deal status.
                            </p>
                            <p>
                                In 2026, the virtual deal management market is divided between legacy providers (Datasite, Intralinks) that offer fragmented tools at high, opaque prices, and modern integrated platforms like SpaceNexus that deliver end-to-end deal management with AI capabilities, transparent pricing, and setup in under 24 hours — making professional virtual deal management accessible to deal teams of all sizes, from boutique advisory firms to corporate development departments at global enterprises.
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
                                What the best virtual deal management platform must include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any serious virtual deal management platform.
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
                                    Recommended Virtual Deal Management Platform
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — End-to-end virtual deal management with transparent pricing
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is a purpose-built virtual deal management platform for M&A, fundraising, and transaction teams. Every plan includes deal pipeline tracking, secure virtual data rooms, AI document processing, structured Q&A workflows, multi-party collaboration, and per-party engagement analytics — all with enterprise-grade security and transparent, published pricing.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "Deal Pipeline", desc: "Visual cross-deal tracking" },
                                        { label: "AI Document Intelligence", desc: "Redaction & classification included" },
                                        { label: "Structured Q&A", desc: "Built-in with automated routing" },
                                        { label: "Deal Analytics", desc: "Per-party engagement tracking" },
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
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus virtual deal management dashboard" className="w-full h-auto" loading="lazy" />
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
                                Virtual deal management compared: SpaceNexus vs legacy VDRs vs generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy virtual data room providers and generic productivity tools on the features that matter most for end-to-end deal management.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-400 border-l border-gray-700">Legacy VDR<br /><span className="text-xs font-normal text-gray-500">(Datasite / Intralinks)</span></div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-400 border-l border-gray-700">Generic Tools<br /><span className="text-xs font-normal text-gray-500">(Email / Sheets)</span></div>
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
                            Frequently asked questions about virtual deal management
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
                            <Link href="/deal-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Deal Management Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/deal-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Deal Room Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">Virtual Data Room Providers →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/merger-acquisition-software" className="text-sm font-semibold text-[#2563eb] hover:underline">M&A Software →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Try the virtual deal management platform built for modern deal teams
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Deal pipeline tracking. AI document intelligence. Structured Q&A. Multi-party collaboration. SOC 2 Type II certified. Transparent published pricing.
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
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
                </section>
            </main>
        </>
    );
}
