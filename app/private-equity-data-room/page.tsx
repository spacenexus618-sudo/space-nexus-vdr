import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Private Equity Data Room 2026 | SpaceNexus",
    description: "Compare the best private equity data room platforms. Secure VDRs for PE deal sourcing, buy-side diligence, portfolio management, LP reporting, and exit transactions.",
    alternates: {
        canonical: "https://spacenexus.net/private-equity-data-room",
    },
    openGraph: {
        title: "Private Equity Data Room 2026 | SpaceNexus",
        description:
            "Compare the best private equity data room platforms. Secure VDRs for PE deal sourcing, buy-side diligence, portfolio management, LP reporting, and exit transactions.",
        url: "https://spacenexus.net/private-equity-data-room",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Private Equity Data Room 2026 — PE VDR Platform Guide | SpaceNexus",
        description:
            "Complete guide to private equity data rooms. Compare features, pricing, and security across the top platforms for PE deal management, diligence, and portfolio oversight.",
    },
    keywords: [
        "private equity data room",
        "PE data room",
        "PE VDR",
        "private equity virtual data room",
        "PE deal room",
        "private equity due diligence data room",
        "PE portfolio data room",
        "private equity deal management software",
        "PE fundraising data room",
        "buy-side data room",
    ],
};

const coreFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Bank-Grade Security",
        description: "AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II and ISO 27001 certification. Zero Trust architecture with MFA enforcement protects every deal and portfolio document.",
        tags: ["SOC 2 Type II", "ISO 27001", "AES-256"],
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Multi-Deal Pipeline Management",
        description: "Track every deal through its lifecycle — from sourcing and LOI to buy-side diligence, closing, and portfolio onboarding. Visual pipeline views give PE firms real-time visibility into deal flow and bottlenecks.",
        tags: ["Deal pipeline", "Stage tracking", "Deal flow"],
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Processing",
        description: "Automatically redact PII, sensitive financials, and privileged information across buy-side and sell-side documents. AI auto-categorizes uploaded files into the correct due diligence folder structure.",
        tags: ["Auto-redaction", "Auto-categorization", "Smart indexing"],
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
        description: "Track document views, downloads, and time-on-page per buyer in real time. Engagement heatmaps reveal which data room sections attract the most interest during PE deal negotiations.",
        tags: ["Per-user heatmaps", "Time-on-page", "Download tracking"],
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Tamper-Evident Audit Trail",
        description: "Every access event — view, download, print, permission change — is logged with timestamp, IP address, and user identity. Immutable logs satisfy SEC, regulatory, and LP reporting requirements.",
        tags: ["SEC 17a-4", "LP reporting", "Immutable logs"],
    },
    {
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "NDA Enforcement",
        description: "Require all external parties to electronically accept a non-disclosure agreement before accessing deal documents. Each acceptance is timestamped and logged — essential for PE deal processes.",
        tags: ["Click-through NDA", "E-signature", "Timestamped"],
    },
    {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "Portfolio Company Oversight",
        description: "Manage documents across your entire portfolio from a single platform. Access portfolio company financials, board materials, compliance reports, and performance data with role-based permissions.",
        tags: ["Portfolio management", "Board materials", "Compliance reports"],
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "LP Reporting & Fund Documents",
        description: "Securely share fund performance reports, capital call notices, distribution statements, and annual meeting materials with limited partners. Granular permissions ensure LPs see only their fund data.",
        tags: ["LP reporting", "Capital calls", "Fund documents"],
    },
];

const comparisonRows = [
    { feature: "AI Document Redaction", spacenexus: { value: "Built-in, one-click", good: true }, legacy: { value: "Add-on or manual", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Multi-Deal Pipeline", spacenexus: { value: "Visual PE deal pipeline", good: true }, legacy: { value: "Single-deal view only", good: false }, generic: { value: "Limited", good: false } },
    { feature: "Granular Permissions", spacenexus: { value: "Folder, doc & page level", good: true }, legacy: { value: "Folder-level only", good: false }, generic: { value: "Basic sharing", good: false } },
    { feature: "SOC 2 Type II", spacenexus: { value: "Certified", good: true }, legacy: { value: "Certified", good: true }, generic: { value: "Rarely certified", good: false } },
    { feature: "Structured Q&A", spacenexus: { value: "Full workflow + audit trail", good: true }, legacy: { value: "Basic module", good: false }, generic: { value: "Email only", good: false } },
    { feature: "Buyer Analytics", spacenexus: { value: "Real-time per-user heatmaps", good: true }, legacy: { value: "Add-on or limited", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Portfolio Management", spacenexus: { value: "Multi-portfolio dashboard", good: true }, legacy: { value: "Not available", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Setup Time", spacenexus: { value: "Under 24 hours, self-serve", good: true }, legacy: { value: "Days, requires CSM", good: false }, generic: { value: "Hours (no PE features)", good: false } },
    { feature: "Contract Flexibility", spacenexus: { value: "Monthly, no lock-in", good: true }, legacy: { value: "Annual, exit fees", good: false }, generic: { value: "Monthly available", good: true } },
    { feature: "Transparent Pricing", spacenexus: { value: "Published, transparent", good: true }, legacy: { value: "Quote-only, opaque", good: false }, generic: { value: "Not purpose-built", good: false } },
];

const faqItems = [
    {
        question: "What is a private equity data room?",
        answer: "A private equity data room is a secure virtual data room designed for the specific workflows of private equity firms — deal sourcing and pipeline management, buy-side due diligence, portfolio company document management, LP reporting, and exit transactions. Unlike standard VDRs used for single M&A deals, PE data rooms must support multiple concurrent transactions, portfolio-wide document management, LP communications with granular permissions, and integrations with PE-specific tools for deal flow tracking and fund administration. Purpose-built PE data rooms like SpaceNexus provide these capabilities with enterprise-grade security, AI-powered document processing, and transparent pricing.",
    },
    {
        question: "How is a PE data room different from a standard VDR?",
        answer: "PE data rooms differ from standard VDRs in several important ways: (1) Multi-deal pipeline management — PE firms manage dozens of simultaneous opportunities, requiring pipeline views, deal-level dashboards, and the ability to switch between active transactions instantly; (2) Portfolio company management — PE firms need ongoing document sharing with portfolio companies for board reporting, compliance, and performance monitoring beyond the initial deal; (3) LP communications — secure distribution of fund performance reports, capital call notices, and annual meeting materials with LP-specific permissions; (4) Buy-side workflows — PE firms spend most of their time on buy-side diligence, reviewing target company documents rather than hosting sell-side data rooms. Standard VDRs built primarily for sell-side M&A lack these PE-specific capabilities.",
    },
    {
        question: "What features should a private equity data room include?",
        answer: "Essential PE data room features include: SOC 2 Type II and ISO 27001 certification; AES-256 encryption with enterprise SSO and SCIM provisioning; multi-deal pipeline management with visual deal flow tracking; granular permissions at the folder, document, and page level for buy-side and sell-side teams; AI document redaction and auto-categorization; structured Q&A workflow with category routing; real-time buyer engagement analytics; portfolio company document management with role-based access; LP reporting and fund document distribution; tamper-evident immutable audit trails; full-text search across 100+ file types; RESTful API for PE tool integration; and transparent pricing without per-page fees.",
    },
    {
        question: "How do PE firms use data rooms for buy-side diligence?",
        answer: "In buy-side diligence, the PE firm is the reviewer — accessing the target company's data room to evaluate the acquisition. The PE firm uses the data room to: review financial statements, contracts, customer data, IP, and legal documents; submit due diligence questions through structured Q&A workflows; track which documents have been reviewed and by whom; collaborate internally with deal team members; and maintain an audit trail of all diligence activity for the investment committee memorandum. SpaceNexus supports buy-side workflows with dedicated buyer analytics, structured Q&A, and team collaboration features that legacy VDRs lack.",
    },
    {
        question: "Which private equity data room is best for PE firms?",
        answer: "SpaceNexus is the best private equity data room for PE firms in 2026. It offers AI-powered document redaction and auto-categorization, multi-deal pipeline management, structured Q&A workflows, buyer engagement analytics, portfolio company document management, LP reporting capabilities, enterprise SSO with SCIM provisioning, transparent published pricing with no per-page fees, SOC 2 Type II certification, and setup in under 24 hours. Legacy platforms like Datasite and Intralinks remain options for sell-side processes, but they lack the multi-deal pipeline, portfolio management, and buy-side workflow features that PE firms require.",
    },
    {
        question: "Can a PE data room integrate with existing PE tools?",
        answer: "Yes. Purpose-built PE data rooms integrate with the technology stack that private equity firms use daily. SpaceNexus provides RESTful API and webhooks for custom integrations, plus pre-built integrations with Salesforce (deal flow and CRM), DocuSign (e-signatures for deal documents), Okta and Azure AD (identity provider for SSO), and Microsoft 365 (document collaboration). For PE firms with custom workflows, the SpaceNexus API enables integration with fund administration platforms, CRM systems, and portfolio monitoring tools.",
    },
    {
        question: "Is a private equity data room secure?",
        answer: "Yes. Purpose-built PE data rooms meet the highest security standards required by institutional investors and regulators. SpaceNexus holds SOC 2 Type II certification, aligns with ISO 27001, and is SEC/FINRA ready. The platform uses AES-256 encryption at rest, TLS 1.3 in transit, Zero Trust architecture, enterprise SSO with SCIM provisioning, and FIDO2 hardware MFA support. Every document access event is logged in an immutable audit trail. Generic file-sharing tools do not meet these requirements and should not be used for confidential PE transactions.",
    },
    {
        question: "How quickly can a PE data room be deployed?",
        answer: "Modern PE data rooms like SpaceNexus can be fully deployed and operational in under 24 hours — even for complex multi-deal configurations. Set up your deal pipeline, configure permission groups for buy-side and sell-side teams, upload portfolio documents, create LP reporting rooms, and invite users — all through self-service. Legacy enterprise VDRs require multiple days or weeks for deployment, with dedicated project managers and custom configuration. For PE firms, the ability to spin up a new deal room in hours rather than days is a significant competitive advantage.",
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
        { "@type": "ListItem", position: 2, name: "Private Equity Data Room", item: "https://spacenexus.net/private-equity-data-room" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Private Equity Data Room 2026 — Complete Guide to PE VDRs",
    description: "The complete guide to private equity data rooms in 2026. Compare features, pricing, and security across top platforms for PE deal management, buy-side diligence, portfolio oversight, and LP reporting.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/private-equity-data-room",
};

export default function PrivateEquityDataRoomPage() {
    return (
        <>
            <Script id="pedr-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="pedr-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="pedr-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Private Equity Data Room</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                2026 PE Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Private Equity Data Room{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all private equity data rooms are built the same. This guide covers what PE firms need, what separates purpose-built PE data rooms from standard VDRs, and which platform leads in 2026.
                            </p>
                            <p className="text-sm text-gray-400 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers features, pricing, security, buy-side workflows, portfolio management, and top platforms
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

                {/* What is a PE data room */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a private equity data room?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                A private equity data room is a secure, cloud-based virtual data room platform designed specifically for the unique workflows of private equity firms. While any VDR can host documents for a single M&A deal, PE data rooms are built to support the full range of PE activities: deal sourcing and pipeline management, buy-side due diligence across multiple targets simultaneously, portfolio company document management and board reporting, LP communications and fund administration, and sell-side exit processes.
                            </p>
                            <p>
                                What sets PE data rooms apart from standard VDRs is their ability to manage multiple concurrent deal processes, maintain ongoing document relationships with portfolio companies, provide LP-specific access to fund documents, and integrate with PE technology stacks — all within a single platform. Standard VDRs were designed for single-transaction sell-side processes and lack the multi-deal pipeline, portfolio management, and LP reporting capabilities that PE firms require.
                            </p>
                            <p>
                                In 2026, the PE data room market is divided between legacy enterprise platforms built for single-deal M&A (Datasite, Intralinks) that PE firms have adapted for their use, and a new generation of purpose-built platforms like SpaceNexus that deliver PE-specific features — multi-deal pipelines, portfolio dashboards, LP reporting, buy-side analytics, and AI-powered document processing — with transparent pricing and modern cloud architecture.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { value: "Multi-Deal", label: "Pipeline management for PE firms" },
                                { value: "< 24hrs", label: "Average PE data room setup" },
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
                                What the best private equity data room must include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any serious PE data room platform.
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
                                    Recommended PE Data Room
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — The private equity data room built for modern PE workflows
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is a purpose-built private equity data room platform. Every plan includes AI document redaction, multi-deal pipeline management, buyer engagement analytics, structured Q&amp;A, portfolio company oversight, and LP reporting — features that legacy platforms charge as expensive add-ons or do not offer at all.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "Multi-Deal Pipeline", desc: "Visual PE deal flow management" },
                                        { label: "AI Redaction", desc: "One-click, auto on upload" },
                                        { label: "Portfolio Oversight", desc: "Multi-portfolio dashboard" },
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
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus private equity data room dashboard" className="w-full h-auto" loading="lazy" />
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
                                PE data room compared: SpaceNexus vs legacy VDRs vs generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy enterprise VDRs and generic cloud storage on the features that matter most for private equity firms.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-400 border-l border-gray-700">Legacy VDR<br /><span className="text-xs font-normal text-gray-500">(Datasite / Intralinks)</span></div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-400 border-l border-gray-700">Generic Tools<br /><span className="text-xs font-normal text-gray-500">(Drive / SharePoint)</span></div>
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
                            Frequently asked questions about private equity data rooms
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
                            <Link href="/industries/private-equity" className="text-sm font-semibold text-[#2563eb] hover:underline">VDR for Private Equity →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/investment-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">Investment Data Room →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-pricing" className="text-sm font-semibold text-[#2563eb] hover:underline">Data Room Pricing →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/enterprise-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">Enterprise Data Room →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            See the private equity data room built for your firm
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Multi-deal pipeline management. Portfolio company oversight. LP reporting. AI-powered redaction. Transparent published pricing. SOC 2 Type II certified.
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
