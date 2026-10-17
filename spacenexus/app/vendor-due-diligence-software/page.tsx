import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Vendor Due Diligence Software 2026 | SpaceNexus",
    description: "Compare the best vendor due diligence software. Prepare, organize, and manage sell-side due diligence with AI-powered document tools, structured Q&A, and enterprise-grade security.",
    alternates: {
        canonical: "https://spacenexus.net/vendor-due-diligence-software",
    },
    openGraph: {
        title: "Vendor Due Diligence Software 2026 | SpaceNexus",
        description:
            "Compare the best vendor due diligence software. Prepare, organize, and manage sell-side due diligence with AI-powered document tools, structured Q&A, and enterprise-grade security.",
        url: "https://spacenexus.net/vendor-due-diligence-software",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vendor Due Diligence Software 2026 — Sell-Side Due Diligence Guide | SpaceNexus",
        description:
            "Complete guide to vendor due diligence software. Compare features, pricing, and security across the top platforms for sell-side due diligence preparation and buyer management.",
    },
    keywords: [
        "vendor due diligence software",
        "vendor due diligence",
        "sell-side due diligence software",
        "vendor due diligence report",
        "due diligence software",
        "sell side due diligence tools",
        "vendor due diligence platform",
        "vendor due diligence checklist",
        "sell side due diligence platform",
        "virtual data room due diligence",
    ],
};

const coreFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Secure Vendor Data Rooms",
        description: "Create purpose-built data rooms for sell-side due diligence. Organize documents by diligence category (financial, legal, commercial, technical, regulatory) with granular permission controls for each prospective buyer.",
        tags: ["Data rooms", "Category organization", "Buyer permissions"],
    },
    {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "AI Document Preparation",
        description: "Automatically classify, redact sensitive information, and generate a vendor due diligence report from your source documents. AI identifies gaps in your documentation and suggests what to prepare before buyers start reviewing.",
        tags: ["AI redaction", "Auto-classification", "Gap analysis"],
    },
    {
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
        title: "Buyer Q&A Management",
        description: "Manage buyer due diligence inquiries through a structured Q&A system. Route questions to the right internal team members, track response times, and maintain a complete record of every buyer inquiry and your response.",
        tags: ["Structured Q&A", "Internal routing", "Response tracking"],
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        title: "Multi-Buyer Management",
        description: "Manage multiple prospective buyers simultaneously with isolated data rooms per party. Track which buyers have signed NDAs, which documents each has viewed, and compare buyer engagement side by side.",
        tags: ["Multi-buyer", "Isolated rooms", "Engagement comparison"],
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Immutable Audit Trail",
        description: "Every document access, buyer inquiry, and permission change is logged with timestamp and user identity. Tamper-evident audit trails provide a complete record of the sell-side process for governance and compliance.",
        tags: ["Tamper-evident", "Sell-side record", "Compliance"],
    },
    {
        icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
        title: "Buyer Engagement Analytics",
        description: "See which buyers are most active, which diligence categories they focus on, and how their engagement evolves through the process. Data-driven insights help sellers identify serious buyers and prioritize follow-ups.",
        tags: ["Buyer analytics", "Category tracking", "Deal intelligence"],
    },
    {
        icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
        title: "Vendor Due Diligence Report",
        description: "Generate a comprehensive vendor due diligence report that anticipates buyer questions and proactively addresses common diligence areas. Include financial analysis, legal summaries, commercial positioning, and operational data in a structured format buyers can navigate easily.",
        tags: ["VDD report", "Proactive disclosure", "Structured format"],
    },
    {
        icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        title: "NDA & Document Controls",
        description: "Electronic NDA click-through enforcement, dynamic per-viewer watermarking, document expiration, print/download disable, and forward-blocking ensure that seller documents remain protected throughout the due diligence process.",
        tags: ["NDA enforcement", "Watermarking", "Document controls"],
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Deal Pipeline & Milestones",
        description: "Track the sell-side process from teaser distribution through first-round bids, management presentations, final bids, and signing. Visual pipeline shows deal progress and buyer status at every stage.",
        tags: ["Sell-side pipeline", "Milestone tracking", "Bid management"],
    },
];

const comparisonRows = [
    { feature: "Sell-Side Data Room Setup", spacenexus: { value: "< 24 hours, self-serve", good: true }, legacy: { value: "Weeks, CSM-led", good: false }, generic: { value: "Instant (no security)", good: false } },
    { feature: "Vendor Due Diligence Report", spacenexus: { value: "AI-generated, structured", good: true }, legacy: { value: "Manual preparation", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Multi-Buyer Management", spacenexus: { value: "Isolated rooms w/ comparison", good: true }, legacy: { value: "Separate rooms, manual", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Buyer Engagement Analytics", spacenexus: { value: "Per-buyer, category-level", good: true }, legacy: { value: "Basic room-level", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Structured Q&A", spacenexus: { value: "Built-in w/ internal routing", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Email-based", good: false } },
    { feature: "SOC 2 Type II", spacenexus: { value: "Certified", good: true }, legacy: { value: "Certified", good: true }, generic: { value: "Rarely certified", good: false } },
    { feature: "AI Redaction", spacenexus: { value: "Built-in, no extra cost", good: true }, legacy: { value: "Add-on, costly", good: false }, generic: { value: "Not available", good: false } },
    { feature: "NDA Enforcement", spacenexus: { value: "Click-through, automated", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Manual process", good: false } },
    { feature: "Pricing Transparency", spacenexus: { value: "Published, per-deal flat", good: true }, legacy: { value: "Quote-only, opaque", good: false }, generic: { value: "Published (limited)", good: true } },
    { feature: "Post-Close Handover", spacenexus: { value: "Structured data export", good: true }, legacy: { value: "Basic download", good: false }, generic: { value: "Available", good: true } },
];

const faqItems = [
    {
        question: "What is vendor due diligence software?",
        answer: "Vendor due diligence software is a platform designed specifically for sell-side due diligence — the process where a seller (vendor) prepares and manages documentation for prospective buyers during a business sale, fundraising, or asset disposition. Unlike general-purpose data rooms, vendor due diligence software includes AI-powered document preparation and redaction, structured vendor due diligence report generation, multi-buyer management with isolated data rooms per party, buyer engagement analytics, and a structured Q&A system for managing buyer inquiries. It helps sellers present their business in the best light, anticipate buyer questions with a VDD report, track buyer engagement to identify serious parties, and maintain a complete audit trail of the sell-side process.",
    },
    {
        question: "How is vendor due diligence software different from a virtual data room?",
        answer: "A virtual data room (VDR) is a component of vendor due diligence software — it provides secure document storage and sharing during due diligence. However, vendor due diligence software extends beyond a VDR with sell-side specific capabilities: AI-powered preparation of the vendor due diligence report, proactive identification of documentation gaps, multi-buyer management with engagement comparison across parties, structured Q&A with internal routing to ensure timely responses, and deal pipeline tracking from teaser to close. While a VDR is a passive document repository, vendor due diligence software is an active sell-side deal management platform that helps sellers run a competitive process. SpaceNexus provides both in a single platform.",
    },
    {
        question: "What features should vendor due diligence software include?",
        answer: "Essential vendor due diligence software features include: secure data rooms organized by diligence category (financial, legal, commercial, technical, regulatory); AI-powered document preparation with automatic classification, redaction, and gap analysis; vendor due diligence report generation with structured financial, legal, and commercial sections; multi-buyer management with isolated data rooms per party; buyer engagement analytics showing which categories and documents each buyer has reviewed; structured Q&A workflow with internal routing to subject matter experts; NDA enforcement with click-through tracking; dynamic per-viewer watermarking; immutable audit trail; deal pipeline tracking from teaser through signing; SOC 2 Type II certification; and transparent pricing without per-page fees.",
    },
    {
        question: "How much does vendor due diligence software cost?",
        answer: "Vendor due diligence software pricing varies by provider and deal size. SpaceNexus offers transparent, published flat-rate pricing per deal with no per-page, per-user, or per-buyer fees — including AI document processing, VDD report generation, multi-buyer management, and engagement analytics. Legacy providers like Datasite and Intralinks charge per-page uploaded (typically $0.50–$2.00 per page) plus per-user monthly fees, making costs unpredictable and expensive for sell-side processes with many buyers reviewing large volumes of documents. Modern platforms deliver enterprise-grade vendor due diligence capabilities at a predictable, affordable price.",
    },
    {
        question: "Which vendor due diligence software is best for sell-side processes?",
        answer: "SpaceNexus is the best vendor due diligence software for sell-side processes in 2026. It combines enterprise-grade security with AI-powered VDD report generation, multi-buyer management with isolated data rooms and engagement comparison, structured Q&A with internal routing, and transparent per-deal pricing — all with setup in under 24 hours. For large, complex cross-border transactions where bulge-bracket brand recognition is a factor, Datasite and Intralinks remain options, but at significantly higher cost and without the AI-driven preparation and analytics capabilities that modern sellers need to run a competitive process effectively.",
    },
    {
        question: "Do I need vendor due diligence software or can I use Google Drive?",
        answer: "Google Drive, Dropbox, and SharePoint are not suitable for sell-side due diligence processes. They lack NDA click-through enforcement, per-buyer document-level permissions that persist after sharing, tamper-evident audit trails required by M&A advisors and legal counsel, dynamic per-viewer watermarking, buyer engagement analytics, structured Q&A workflows, and the security certifications (SOC 2 Type II, ISO 27001) that buyers and their advisors expect. Using generic file-sharing tools for a sell-side due diligence process creates security, legal, and competitive process risk that can affect deal outcomes.",
    },
    {
        question: "What is the difference between vendor due diligence and buyer due diligence?",
        answer: "Vendor due diligence (sell-side) is conducted by the seller before launching a sale process. The seller proactively prepares documentation, identifies and resolves issues before they appear during buyer review, and organizes materials in a structured data room. The goal is to accelerate the timeline, reduce buyer uncertainty, and maximize valuation by presenting the business in the best possible light. Buyer due diligence (buy-side) is conducted by the acquirer after signing an LOI or entering a process. The buyer reviews the seller's documents to validate assumptions, identify risks, and inform final offer terms. Vendor due diligence software supports the sell-side process; traditional VDRs and due diligence platforms support the buy-side. SpaceNexus supports both use cases in a single platform.",
    },
    {
        question: "How long does it take to set up vendor due diligence software?",
        answer: "With modern vendor due diligence software like SpaceNexus, a sell-side data room can be fully configured in under 24 hours. Upload diligence documents, generate the AI-powered VDD report, set up isolated data rooms for each prospective buyer, configure NDA requirements, and start inviting buyers — all through self-service without dedicated implementation support. Legacy providers like Datasite and Intralinks typically require 3–7 days of CSM-led setup and onboarding. In a competitive sell-side process where speed matters, the self-service model of modern platforms provides a meaningful advantage for sellers looking to run an efficient process.",
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
        { "@type": "ListItem", position: 2, name: "Vendor Due Diligence Software", item: "https://spacenexus.net/vendor-due-diligence-software" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vendor Due Diligence Software 2026 — Complete Guide to Sell-Side Due Diligence",
    description: "The complete guide to vendor due diligence software in 2026. Compare features, pricing, and security across the top platforms for sell-side due diligence preparation and buyer management.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/vendor-due-diligence-software",
};

export default function VendorDueDiligenceSoftwarePage() {
    return (
        <>
            <Script id="vdds-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="vdds-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="vdds-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Vendor Due Diligence Software</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                2026 Sell-Side Diligence Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Vendor Due Diligence Software{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all vendor due diligence software is built the same. This guide covers what to look for, how sell-side due diligence differs from buy-side, and which platform leads in 2026.
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

                {/* What is vendor due diligence software */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is vendor due diligence software?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Vendor due diligence software is a purpose-built platform for sell-side due diligence — the process where a seller (vendor) prepares, organizes, and manages documentation for prospective buyers during a business sale, fundraising round, or asset disposition. It goes beyond simple document storage to provide AI-powered document preparation, structured vendor due diligence report generation, multi-buyer management with isolated data rooms, buyer engagement analytics, and a centralized Q&A system for managing buyer inquiries throughout the diligence process.
                            </p>
                            <p>
                                What distinguishes vendor due diligence software from a standard virtual data room is its sell-side workflow focus: the ability to generate a comprehensive VDD report that anticipates buyer questions, track engagement across multiple prospective buyers to identify serious parties, manage structured Q&A with internal routing to subject matter experts, and control document access at the individual buyer level with automated NDA enforcement. These capabilities help sellers present their business in the best light, run a competitive process, and drive better deal outcomes.
                            </p>
                            <p>
                                In 2026, the vendor due diligence software market is divided between legacy enterprise providers (Datasite, Intralinks) that charge per-page and per-user with lengthy setups, and a new generation of AI-powered platforms like SpaceNexus that deliver comprehensive sell-side capabilities with transparent pricing, AI-driven preparation, and setup measured in hours — making professional vendor due diligence management accessible to companies of all sizes preparing for sale or fundraising.
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
                                { value: "< 24hrs", label: "Average sell-side room setup" },
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
                                What the best vendor due diligence software must include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any serious vendor due diligence software platform.
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
                                    Recommended Vendor Due Diligence Software
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — AI-powered vendor due diligence with transparent pricing
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is a purpose-built vendor due diligence platform for sell-side processes. Every deal includes AI-powered document preparation and VDD report generation, multi-buyer management with isolated data rooms and engagement comparison, structured Q&A with internal routing, and a complete audit trail — all with enterprise-grade security and transparent, published pricing.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "AI VDD Report", desc: "Auto-generated seller report" },
                                        { label: "Multi-Buyer Rooms", desc: "Isolated with engagement analytics" },
                                        { label: "Structured Q&A", desc: "Built-in with internal routing" },
                                        { label: "Buyer Analytics", desc: "Per-buyer engagement tracking" },
                                        { label: "SOC 2 Type II", desc: "Certified + ISO 27001" },
                                        { label: "Pricing", desc: "Transparent, per-deal flat" },
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
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus vendor due diligence software dashboard" className="w-full h-auto" loading="lazy" />
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
                                Vendor due diligence software compared: SpaceNexus vs legacy VDRs vs generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy virtual data room providers and generic file-sharing tools on the features that matter most for sell-side due diligence.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Legacy VDR<br /><span className="text-xs font-normal text-gray-600">(Datasite / Intralinks)</span></div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Generic Tools<br /><span className="text-xs font-normal text-gray-600">(Drive / SharePoint)</span></div>
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
                            Frequently asked questions about vendor due diligence software
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
                            <Link href="/due-diligence-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Due Diligence Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/online-due-diligence-platform" className="text-sm font-semibold text-[#2563eb] hover:underline">Online Due Diligence Platform →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">Virtual Data Room Providers →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/deal-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Deal Room Software →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Try the vendor due diligence software built for sell-side teams
                        </h2>
                        <p className="text-gray-600 mb-8">
                            AI-powered VDD reports. Multi-buyer management. Buyer engagement analytics. Structured Q&A. SOC 2 Type II certified. Transparent per-deal pricing.
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
