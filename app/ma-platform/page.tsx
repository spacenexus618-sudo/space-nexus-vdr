import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "M&A Platform 2026 | Mergers & Acquisitions Software | SpaceNexus",
    description: "Compare the best M&A platforms for mergers and acquisitions. Manage deal flow, due diligence, document exchange, and post-merger integration with AI-powered tools.",
    alternates: {
        canonical: "https://spacenexus.net/ma-platform",
    },
    openGraph: {
        title: "M&A Platform 2026 | Mergers & Acquisitions Software | SpaceNexus",
        description:
            "Compare the best M&A platforms for mergers and acquisitions. Manage deal flow, due diligence, document exchange, and post-merger integration with AI-powered tools.",
        url: "https://spacenexus.net/ma-platform",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "M&A Platform 2026 — Mergers & Acquisitions Software Guide | SpaceNexus",
        description:
            "Complete guide to M&A platforms. Compare features, pricing, and security across the top mergers and acquisitions software for deal teams.",
    },
    keywords: [
        "M&A platform",
        "M&A software",
        "mergers and acquisitions software",
        "M&A deal management",
        "M&A deal platform",
        "merger acquisition platform",
        "M&A due diligence platform",
        "M&A document management",
        "M&A workflow software",
        "M&A transaction platform",
    ],
};

const coreFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Enterprise-Grade Security",
        description: "SOC 2 Type II certified, ISO 27001 aligned, AES-256 encryption at rest, TLS 1.3 in transit. Zero Trust architecture protects every M&A document from first look through post-close.",
        tags: ["SOC 2 Type II", "ISO 27001", "AES-256"],
    },
    {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "AI-Powered Document Processing",
        description: "Automatically redact PII and sensitive data, classify documents into the correct due diligence folder structure, and generate smart indexes across thousands of M&A documents.",
        tags: ["AI redaction", "Auto-classification", "Smart indexing"],
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        title: "Multi-Deal Pipeline Management",
        description: "Track every M&A transaction through its lifecycle — from target identification and LOI through due diligence, signing, and post-merger integration. Visual pipeline views give deal teams real-time visibility.",
        tags: ["Pipeline views", "Stage tracking", "Multi-deal"],
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Structured Q&A Workflow",
        description: "Route due diligence questions to the right deal team member by category, urgency, and workstream. Track every question from submission to answer with a version-controlled audit trail.",
        tags: ["Category routing", "Urgency flags", "Audit trail"],
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Buyer Engagement Analytics",
        description: "Track every document view, download, and time-on-page per counterparty in real time. Engagement heatmaps reveal which deal data room sections attract the most interest during negotiations.",
        tags: ["Per-user heatmaps", "Time-on-page", "Download tracking"],
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Tamper-Evident Audit Trail",
        description: "Every access event — view, download, print, permission change — is logged with timestamp, IP address, and user identity. Immutable audit logs satisfy legal and regulatory requirements.",
        tags: ["Immutable logs", "Legal discovery", "Compliance-ready"],
    },
    {
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "NDA Enforcement",
        description: "Require all external parties to electronically accept a non-disclosure agreement before accessing deal documents. Each acceptance is timestamped and logged for the transaction record.",
        tags: ["Click-through NDA", "E-signature", "Timestamped"],
    },
    {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "Full-Text Search & OCR",
        description: "Instant search across 100+ file types including PDFs, Word documents, Excel files, and presentations with OCR. Find any clause, number, or name across thousands of deal documents in seconds.",
        tags: ["100+ file types", "OCR", "Natural language"],
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Post-Merger Integration",
        description: "Manage post-close integration with dedicated workspaces for combining teams, systems, and processes. Securely share integration plans, track milestones, and maintain an audit trail of integration activities.",
        tags: ["Integration planning", "Milestone tracking", "Team collaboration"],
    },
];

const comparisonRows = [
    { feature: "AI Document Redaction", spacenexus: { value: "Built-in, one-click", good: true }, legacy: { value: "Add-on or manual", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Multi-Deal Pipeline", spacenexus: { value: "Visual multi-deal tracking", good: true }, legacy: { value: "Single-deal view only", good: false }, generic: { value: "Limited", good: false } },
    { feature: "Granular Permissions", spacenexus: { value: "Folder, doc & page level", good: true }, legacy: { value: "Folder-level only", good: false }, generic: { value: "Basic sharing", good: false } },
    { feature: "SOC 2 Type II", spacenexus: { value: "Certified", good: true }, legacy: { value: "Certified", good: true }, generic: { value: "Rarely certified", good: false } },
    { feature: "Structured Q&A", spacenexus: { value: "Full workflow + audit trail", good: true }, legacy: { value: "Basic module", good: false }, generic: { value: "Email only", good: false } },
    { feature: "Buyer Analytics", spacenexus: { value: "Real-time per-user heatmaps", good: true }, legacy: { value: "Add-on or limited", good: false }, generic: { value: "Not available", good: false } },
    { feature: "NDA Enforcement", spacenexus: { value: "Click-through at room entry", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Manual process", good: false } },
    { feature: "Setup Time", spacenexus: { value: "Under 24 hours, self-serve", good: true }, legacy: { value: "Days, requires CSM", good: false }, generic: { value: "Hours (no M&A features)", good: false } },
    { feature: "Post-Merger Integration", spacenexus: { value: "Dedicated workspaces", good: true }, legacy: { value: "Not included", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Transparent Pricing", spacenexus: { value: "Published, no lock-in", good: true }, legacy: { value: "Quote-only, opaque", good: false }, generic: { value: "Not purpose-built", good: false } },
];

const faqItems = [
    {
        question: "What is an M&A platform?",
        answer: "An M&A platform (mergers and acquisitions platform) is a software solution designed to manage the end-to-end lifecycle of merger and acquisition transactions. It replaces the fragmented toolkit of spreadsheets, email, and generic file-sharing tools that deal teams traditionally relied on with purpose-built capabilities: secure data rooms with granular permissions, AI document processing and redaction, multi-deal pipeline management, structured Q&A workflows, buyer engagement analytics, NDA enforcement, tamper-evident audit trails, and post-merger integration workspaces. M&A platforms serve investment banks, private equity firms, corporate development teams, law firms, and advisors managing buy-side, sell-side, and bilateral transactions.",
    },
    {
        question: "How is an M&A platform different from a virtual data room?",
        answer: "A virtual data room (VDR) is a component of an M&A platform — it provides secure document storage and sharing during due diligence. However, an M&A platform extends beyond a VDR with transaction-specific capabilities: multi-deal pipeline management for tracking multiple transactions simultaneously, AI-powered document processing with redaction and auto-categorization, structured Q&A workflows with internal routing, buyer engagement analytics showing which documents drive interest, post-merger integration workspaces, and cross-deal reporting. While a VDR is a passive document repository, an M&A platform is an active deal management system that helps teams run competitive processes, evaluate counterparties, and manage integration — all from a single platform.",
    },
    {
        question: "What features should an M&A platform include?",
        answer: "Essential M&A platform features include: SOC 2 Type II and ISO 27001 certification; AES-256 encryption at rest and TLS 1.3 in transit; NDA click-through enforcement; granular permissions at the folder, document, and page level; dynamic watermarking; a tamper-evident immutable audit trail; AI document redaction and auto-categorization; structured Q&A workflow management; full-text search across 100+ file types; bulk upload with AI auto-indexing; real-time buyer engagement analytics; multi-deal pipeline management; post-merger integration workspaces; and transparent pricing without per-page charges.",
    },
    {
        question: "How much does M&A platform software cost?",
        answer: "M&A platform pricing varies significantly by provider and deal volume. SpaceNexus offers transparent, published flat-rate pricing with no per-page fees — AI redaction, buyer analytics, Q&A workflow, and pipeline management are all included. Legacy enterprise platforms like Datasite and Intralinks operate on quote-only pricing that typically starts at tens of thousands per year, with additional charges for AI features, user licenses, and per-page upload fees. When comparing M&A platform costs, account for per-page upload fees, user caps, storage overages, and add-on charges that inflate legacy platform total cost of ownership.",
    },
    {
        question: "Which M&A platform is best for deal teams?",
        answer: "SpaceNexus is the best M&A platform for deal teams in 2026. It offers AI-powered document redaction and auto-categorization, visual multi-deal pipeline management, structured Q&A workflows, real-time buyer engagement analytics, post-merger integration workspaces, transparent published pricing with no per-page fees, SOC 2 Type II certification, and setup in under 24 hours. Legacy platforms like Datasite and Intralinks lack the buy-side workflow support, AI-driven processing, and modern cloud architecture that contemporary deal teams require. For large, complex cross-border transactions, legacy platforms remain an option — but at significantly higher cost and longer implementation timelines.",
    },
    {
        question: "Can an M&A platform handle both buy-side and sell-side deals?",
        answer: "Yes. Purpose-built M&A platforms like SpaceNexus support both buy-side and sell-side transactions in a single platform. Buy-side teams use multi-deal pipeline management to track multiple target companies, conduct due diligence across targets simultaneously, and manage post-acquisition integration. Sell-side teams use isolated data rooms per prospective buyer, buyer engagement analytics to identify serious parties, and structured Q&A to manage buyer inquiries. The same platform serves investment banks advising both sides, corporate development teams managing acquisitions, and PE firms running competitive sell-side exits. This dual capability eliminates the need for separate tools for buy-side and sell-side processes.",
    },
    {
        question: "How quickly can an M&A platform be set up?",
        answer: "Modern M&A platforms like SpaceNexus can be fully configured and operational in under 24 hours — without onboarding calls or dedicated implementation support. Set up your deal pipeline, upload target company documents via bulk drag-and-drop, configure permission groups, set NDAs, and invite deal participants within hours. Legacy platforms require multiple days and dedicated customer success manager involvement for initial setup, which can delay time-sensitive M&A timelines. In competitive deal situations where speed matters, the self-service model of modern platforms provides a meaningful advantage.",
    },
    {
        question: "Is an M&A platform secure enough for confidential transactions?",
        answer: "Yes. Purpose-built M&A platforms meet the highest security standards required for confidential transactions. SpaceNexus holds SOC 2 Type II certification, aligns with ISO 27001, and is SEC/FINRA ready. The platform uses AES-256 encryption at rest, TLS 1.3 in transit, Zero Trust architecture, and multi-factor authentication. Every document access event is logged in an immutable audit trail. Dynamic per-viewer watermarking, document expiration, print/download disable, and forward-blocking ensure deal documents remain protected. Generic file-sharing and project management tools do not meet these requirements and should not be used for confidential M&A activities.",
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
    headline: "M&A Platform 2026 — Complete Guide to Mergers & Acquisitions Software",
    description: "The complete guide to M&A platforms in 2026. Compare features, pricing, and security across the top mergers and acquisitions software for deal teams.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-09-01",
    mainEntityOfPage: "https://spacenexus.net/ma-platform",
};

export default function MAPlatformPage() {
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                2026 M&A Software Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                M&A Platform{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all M&A platforms are built the same. This guide covers what to look for, how modern platforms differ from legacy VDRs, and which solution leads in 2026.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                Last updated: September 2026 &nbsp;·&nbsp; Covers features, pricing, security, pipeline management, and top platforms
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

                {/* What is an M&A platform */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is an M&A platform?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                An M&A platform (mergers and acquisitions platform) is a secure, cloud-hosted software solution for managing the full lifecycle of merger and acquisition transactions — from target identification and pipeline tracking through due diligence, document exchange, Q&amp;A, signing, and post-merger integration. The category emerged to replace the fragmented toolkit of spreadsheets, email, and generic file-sharing that deal teams traditionally relied on.
                            </p>
                            <p>
                                What sets an M&A platform apart from standard virtual data rooms is its transaction-focused workflow: multi-deal pipeline management for tracking multiple targets simultaneously, AI-powered document processing with redaction and auto-categorization, structured Q&amp;A workflows with internal routing, buyer engagement analytics that reveal which documents drive deal interest, and post-merger integration workspaces for combining teams and systems. These capabilities are absent from standard VDRs built primarily as passive document repositories.
                            </p>
                            <p>
                                In 2026, the M&A platform market is divided between legacy enterprise platforms (Datasite, Intralinks) built for single-deal M&amp;A that charge per-page and per-user with lengthy setups, and a new generation of AI-powered platforms like SpaceNexus that deliver purpose-built M&amp;A tools — multi-deal pipelines, AI document processing, buyer analytics, and integration planning — with transparent pricing and modern cloud architecture that setup in hours, not weeks.
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
                                { value: "< 24hrs", label: "Average M&A room setup" },
                                { value: "100%", label: "Audit trail coverage" },
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
                                What the best M&A platform must include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any serious mergers and acquisitions platform.
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
                                    SpaceNexus — AI-powered M&A platform with transparent pricing
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is a purpose-built M&A platform for modern deal teams. Every plan includes AI document redaction, multi-deal pipeline management, buyer engagement analytics, structured Q&amp;A, and post-merger integration workspaces — features that legacy software charges as expensive add-ons or does not offer at all.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "AI Redaction", desc: "One-click, auto on upload" },
                                        { label: "Deal Pipeline", desc: "Visual multi-deal tracking" },
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
                                    <Image src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus M&A platform dashboard" width={1200} height={675} className="w-full h-auto" />
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
                                M&A platform comparison: SpaceNexus vs legacy platforms vs generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy enterprise VDRs and generic project management tools on the features that matter most for M&A transactions.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Legacy Platforms<br /><span className="text-xs font-normal text-gray-600">(Datasite / Intralinks)</span></div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Generic Tools<br /><span className="text-xs font-normal text-gray-600">(Asana / Drive)</span></div>
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
                        <p className="text-xs text-gray-600 mt-3 text-center">Based on publicly available information. Last updated September 2026.</p>
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
                            <Link href="/merger-acquisition-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Merger &amp; Acquisition Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/business-acquisition-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Business Acquisition Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/vendor-due-diligence-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Vendor Due Diligence Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/due-diligence-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Due Diligence Software →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            See the M&A platform built for modern deal teams
                        </h2>
                        <p className="text-gray-600 mb-8">
                            AI-powered redaction. Multi-deal pipeline. Buyer engagement analytics. Post-merger integration. Transparent published pricing. Setup in under 24 hours.
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
                            <LastUpdated date="2026-09-01" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
