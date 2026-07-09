import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Data Room 2026 | SpaceNexus",
    description: "Compare the best enterprise data room platforms. Scalable, secure virtual data rooms for Fortune 500 M&A, capital markets, and global deal teams with SOC 2 Type II, SSO, and dedicated support.",
    alternates: {
        canonical: "https://spacenexus.net/enterprise-data-room",
    },
    openGraph: {
        title: "Enterprise Data Room 2026 | SpaceNexus",
        description:
            "Compare the best enterprise data room platforms. Scalable, secure virtual data rooms for Fortune 500 M&A, capital markets, and global deal teams with SOC 2 Type II, SSO, and dedicated support.",
        url: "https://spacenexus.net/enterprise-data-room",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Data Room 2026 — Enterprise VDR Platform Guide | SpaceNexus",
        description:
            "Complete guide to enterprise data rooms. Compare features, pricing, security, and scalability across the top platforms for large-scale M&A, capital markets, and global deal management.",
    },
    keywords: [
        "enterprise data room",
        "enterprise virtual data room",
        "enterprise VDR",
        "enterprise deal room",
        "enterprise M&A data room",
        "enterprise data room software",
        "enterprise grade data room",
        "enterprise VDR solution",
        "large enterprise data room",
        "enterprise secure data room",
    ],
};

const coreFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Enterprise-Grade Security",
        description: "SOC 2 Type II certified, ISO 27001 aligned, AES-256 encryption at rest, TLS 1.3 in transit. Zero Trust architecture with MFA enforcement, SSO/SAML 2.0, SCIM provisioning, and FIDO2 hardware key support.",
        tags: ["SOC 2 Type II", "ISO 27001", "FIDO2 MFA"],
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Granular Permission Controls",
        description: "Set access at the folder, document, and page level across buy-side and sell-side teams. Restrict view-only, download, print, and copy rights per user or group. Dynamic watermarks with viewer identity on every page.",
        tags: ["Folder-level", "Page-level", "Dynamic watermarks"],
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Processing",
        description: "Enterprise-scale AI redaction of PII, financials, and privileged information across thousands of documents. Auto-categorization with smart indexing and bulk processing for large deal volumes.",
        tags: ["Auto-redaction", "Bulk processing", "Smart indexing"],
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Structured Q&A Workflow",
        description: "Route due diligence questions to the right subject matter expert by category, urgency, and department. Track every question from submission to answer with a version-controlled audit trail across large deal teams.",
        tags: ["Category routing", "Urgency flags", "Audit trail"],
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Advanced Buyer Analytics",
        description: "Track every document view, download, and time-on-page per buyer across multiple concurrent bidders. Enterprise-grade engagement heatmaps and consolidated reporting across your entire deal pipeline.",
        tags: ["Per-user heatmaps", "Pipeline analytics", "Download tracking"],
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Tamper-Evident Audit Trail",
        description: "Every access event — view, download, print, permission change — is logged with timestamp, IP address, and user identity. Immutable audit logs satisfy SEC 17a-4, legal discovery, and regulatory requirements.",
        tags: ["SEC 17a-4", "Legal discovery", "Immutable logs"],
    },
    {
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "NDA Enforcement",
        description: "Require all external parties to electronically accept a non-disclosure agreement before accessing documents. Each acceptance is timestamped and logged — forming part of the transaction record.",
        tags: ["Click-through NDA", "E-signature", "Timestamped"],
    },
    {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "Full-Text Search & Discovery",
        description: "Instant search across 100+ file types including PDFs, Word documents, Excel files, and presentations with OCR. Find any clause, number, or name across thousands of documents in seconds.",
        tags: ["100+ file types", "OCR", "Natural language"],
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Enterprise Integrations & API",
        description: "RESTful API and webhooks for integration with CRM (Salesforce), e-signature (DocuSign), identity providers (Okta, Azure AD), and enterprise workflow tools. Custom integrations available for enterprise customers.",
        tags: ["REST API", "Webhooks", "Okta / Azure AD"],
    },
];

const comparisonRows = [
    { feature: "Enterprise SSO / SCIM", spacenexus: { value: "SAML 2.0, OAuth, SCIM", good: true }, legacy: { value: "SAML 2.0 only", good: false }, generic: { value: "Limited", good: false } },
    { feature: "AI Document Redaction", spacenexus: { value: "Built-in, one-click", good: true }, legacy: { value: "Add-on or manual", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Granular Permissions", spacenexus: { value: "Folder, doc & page level", good: true }, legacy: { value: "Folder-level only", good: false }, generic: { value: "Basic sharing", good: false } },
    { feature: "SOC 2 Type II", spacenexus: { value: "Certified", good: true }, legacy: { value: "Certified", good: true }, generic: { value: "Rarely certified", good: false } },
    { feature: "Structured Q&A", spacenexus: { value: "Full workflow + audit trail", good: true }, legacy: { value: "Basic module", good: false }, generic: { value: "Email only", good: false } },
    { feature: "Buyer Analytics", spacenexus: { value: "Real-time per-user heatmaps", good: true }, legacy: { value: "Add-on or limited", good: false }, generic: { value: "Not available", good: false } },
    { feature: "NDA Enforcement", spacenexus: { value: "Click-through at room entry", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Manual process", good: false } },
    { feature: "Setup Time", spacenexus: { value: "Under 24 hours, self-serve", good: true }, legacy: { value: "Days, requires CSM", good: false }, generic: { value: "Instant (limited features)", good: false } },
    { feature: "Contract Flexibility", spacenexus: { value: "Monthly, no lock-in", good: true }, legacy: { value: "Annual, exit fees", good: false }, generic: { value: "Monthly available", good: true } },
    { feature: "Custom SLA", spacenexus: { value: "99.9% uptime SLA", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Not available", good: false } },
];

const faqItems = [
    {
        question: "What is an enterprise data room?",
        answer: "An enterprise data room is a virtual data room platform designed to meet the security, compliance, scalability, and workflow requirements of large organizations. Enterprise data rooms provide advanced features beyond standard VDR offerings: dedicated infrastructure options, custom SLAs (99.9%+ uptime), enterprise SSO with SCIM provisioning, FIDO2 hardware MFA support, data residency controls, customer-managed encryption keys, dedicated support teams, advanced audit and reporting, API access for custom integrations, and the ability to manage hundreds of concurrent users across multiple simultaneous transactions. Enterprise data rooms are used by Fortune 500 companies, global investment banks, top law firms, and large private equity firms for their most sensitive and complex transactions.",
    },
    {
        question: "How is an enterprise data room different from a standard VDR?",
        answer: "Enterprise data rooms differ from standard VDRs across five key dimensions: (1) Security — enterprise data rooms offer customer-managed encryption keys, FIDO2 hardware MFA, dedicated tenant isolation, and data residency controls; (2) Identity — enterprise SSO with SAML 2.0, OAuth, SCIM provisioning, and integration with Okta, Azure AD, and OneLogin; (3) Scale — enterprise platforms support hundreds of concurrent users across dozens of simultaneous data rooms with custom SLAs; (4) Support — dedicated customer success managers, 24/7 priority support, and custom onboarding; (5) Integration — RESTful APIs, webhooks, and pre-built integrations with Salesforce, DocuSign, and enterprise workflow tools. SpaceNexus delivers all of these enterprise capabilities with the added advantage of transparent pricing and AI-powered features.",
    },
    {
        question: "What features should an enterprise data room include?",
        answer: "Essential enterprise data room features include: SOC 2 Type II and ISO 27001 certification; AES-256 encryption with customer-managed key options; enterprise SSO with SAML 2.0, OAuth, and SCIM provisioning; FIDO2 hardware MFA support; granular permissions at the folder, document, and page level; dynamic watermarking; immutable audit trails (SEC 17a-4 compliant); structured Q&A workflow management; full-text search across 100+ file types with OCR; AI document redaction and auto-categorization; real-time buyer engagement analytics; RESTful API and webhooks for enterprise integration; dedicated tenant or data residency options; custom uptime SLA (99.9%+); 24/7 dedicated support; and transparent pricing without per-page fees.",
    },
    {
        question: "How much does an enterprise data room cost?",
        answer: "Enterprise data room pricing varies significantly by provider. SpaceNexus offers transparent, published flat-rate pricing with no per-page fees — AI redaction, buyer analytics, Q&A workflow, SSO, and API access are all included. Legacy enterprise platforms like Datasite and Intralinks operate on quote-only pricing that typically starts at tens of thousands per deal, with additional charges for AI features, API access, SSO integration, and dedicated support. When comparing enterprise data room costs, account for per-page upload fees, per-user licensing, setup fees, integration costs, and annual contract lock-in that significantly inflate legacy platform total cost of ownership.",
    },
    {
        question: "Which enterprise data room is best for large M&A deals?",
        answer: "SpaceNexus is the best enterprise data room for large M&A deals in 2026. It offers AI-powered document redaction and auto-categorization, enterprise SSO with SCIM provisioning, structured Q&A workflows, real-time buyer engagement analytics, transparent published pricing with no per-page fees, SOC 2 Type II certification, and setup in under 24 hours. For organizations that require dedicated tenant isolation, custom encryption keys, or specific data residency, SpaceNexus offers enterprise configurations. Legacy platforms like Datasite and Intralinks remain options for firms that require their specific infrastructure, but they lack the AI capabilities, modern architecture, and pricing transparency that enterprise deal teams increasingly demand.",
    },
    {
        question: "Is an enterprise data room secure enough for Fortune 500 transactions?",
        answer: "Yes. Purpose-built enterprise data rooms meet the most stringent security requirements of Fortune 500 companies, global investment banks, and top law firms. SpaceNexus holds SOC 2 Type II certification, aligns with ISO 27001, GDPR, HIPAA, and SEC 17a-4 requirements. The platform uses AES-256 encryption at rest, TLS 1.3 in transit, Zero Trust architecture, FIDO2 hardware MFA support, and enterprise SSO with SCIM provisioning. Every document access event is logged in an immutable audit trail. For organizations with specific security requirements, SpaceNexus offers customer-managed encryption keys, dedicated tenant options, and data residency controls.",
    },
    {
        question: "Can an enterprise data room integrate with existing enterprise tools?",
        answer: "Yes. Enterprise data rooms are designed to integrate with an organization's existing technology stack. SpaceNexus provides a RESTful API and webhooks for custom integrations, plus pre-built integrations with Salesforce (CRM deal tracking), DocuSign (e-signatures), Okta and Azure AD (identity provider for SSO), Microsoft 365 (document collaboration), and Slack (deal team notifications). Enterprise SSO with SAML 2.0 and SCIM provisioning enables centralized user management and automated provisioning. For enterprise customers with unique requirements, custom integrations can be developed through the SpaceNexus API.",
    },
    {
        question: "How quickly can an enterprise data room be deployed?",
        answer: "Modern enterprise data rooms like SpaceNexus can be fully deployed and operational in under 24 hours — even for large, complex transactions. Enterprise SSO integration, permission group configuration, NDA templates, and document uploads can all be completed through self-service without dedicated implementation support. SpaceNexus also offers dedicated onboarding for enterprise customers who prefer guided setup. Legacy enterprise VDR platforms require multiple days or weeks for deployment, with dedicated project managers, custom configuration, and extensive training — adding significant time and cost to the deal timeline.",
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
        { "@type": "ListItem", position: 2, name: "Enterprise Data Room", item: "https://spacenexus.net/enterprise-data-room" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Enterprise Data Room 2026 — Complete Guide to Enterprise VDRs",
    description: "The complete guide to enterprise data rooms in 2026. Compare features, pricing, security, and scalability across the top platforms for Fortune 500 M&A, capital markets, and global deal management.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/enterprise-data-room",
};

export default function EnterpriseDataRoomPage() {
    return (
        <>
            <Script id="edr-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="edr-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="edr-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Enterprise Data Room</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                2026 Enterprise Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Enterprise Data Room{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all enterprise data rooms are built the same. This guide covers what large organizations need, what separates enterprise-grade platforms from standard VDRs, and which solution leads in 2026.
                            </p>
                            <p className="text-sm text-gray-400 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers features, pricing, security, SSO, integrations, and top enterprise platforms
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

                {/* What is an enterprise data room */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is an enterprise data room?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                An enterprise data room is a virtual data room platform designed to meet the advanced security, compliance, scalability, and integration requirements of large organizations. While standard VDRs serve the needs of mid-market transactions and fundraising rounds, enterprise data rooms provide additional capabilities: dedicated infrastructure and data residency options, enterprise identity management (SSO with SAML 2.0, OAuth, SCIM provisioning), FIDO2 hardware MFA support, customer-managed encryption keys, custom uptime SLAs (99.9%+), dedicated support teams, advanced audit and reporting, and API access for enterprise workflow integration.
                            </p>
                            <p>
                                What distinguishes an enterprise data room from a standard VDR is its ability to operate within the existing security and compliance framework of a large organization. Enterprise data rooms integrate with corporate identity providers (Okta, Azure AD, OneLogin) for centralized user management, comply with regional data residency requirements, support single-tenant deployment options, and provide the audit and reporting capabilities required by internal compliance teams and external regulators. These features are essential for Fortune 500 companies, global investment banks, top law firms, and large private equity firms.
                            </p>
                            <p>
                                In 2026, the enterprise data room market is undergoing a transformation. Legacy enterprise platforms (Datasite, Intralinks) built in the 1990s still dominate at the largest institutions, but their opaque quote-based pricing, limited AI capabilities, and outdated architecture are driving enterprise deal teams to modern alternatives like SpaceNexus — which delivers enterprise-grade security, SSO, SCIM, and API access at a transparent, published price with AI-powered features included as standard.
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
                                { value: "99.9%", label: "Uptime SLA guarantee" },
                                { value: "SSO + SCIM", label: "Enterprise identity management" },
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
                                What the best enterprise data room must include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any serious enterprise data room platform.
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
                                    Enterprise Data Room Platform
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — Enterprise data room with transparent pricing and AI built in
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is an enterprise data room platform that combines Fortune 500-grade security with modern AI capabilities and transparent pricing. Enterprise SSO, SCIM provisioning, FIDO2 MFA, AI redaction, and buyer analytics are all included — no expensive add-ons or opaque enterprise contracts.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "Enterprise SSO", desc: "SAML 2.0, OAuth, SCIM" },
                                        { label: "AI Redaction", desc: "One-click, auto on upload" },
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
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus enterprise data room dashboard" className="w-full h-auto" loading="lazy" />
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
                                Enterprise data room compared: SpaceNexus vs legacy platforms vs generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy enterprise VDRs and generic cloud storage on the features that matter most for large organizations.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-400 border-l border-gray-700">Legacy Enterprise VDR<br /><span className="text-xs font-normal text-gray-500">(Datasite / Intralinks)</span></div>
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
                            Frequently asked questions about enterprise data rooms
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
                            <Link href="/enterprise" className="text-sm font-semibold text-[#2563eb] hover:underline">Enterprise VDR Solutions →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-security" className="text-sm font-semibold text-[#2563eb] hover:underline">Data Room Security →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/cloud-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">Cloud Data Room →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/features/security-compliance" className="text-sm font-semibold text-[#2563eb] hover:underline">Security Features →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            See the enterprise data room built for your organization
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Enterprise SSO. AI-powered redaction. Transparent published pricing. SOC 2 Type II certified. No expensive add-ons or enterprise lock-in.
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
