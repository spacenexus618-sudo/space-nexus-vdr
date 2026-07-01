import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Investment Data Room 2026 | SpaceNexus",
    description: "Secure investment data room for VC, PE, and angel investors. Share due diligence documents, cap tables, financials, and investor updates with confidence.",
    alternates: {
        canonical: "https://spacenexus.net/investment-data-room",
    },
    openGraph: {
        title: "Investment Data Room 2026 | SpaceNexus",
        description:
            "Secure investment data room for VC, PE, and angel investors. Share due diligence documents, cap tables, financials, and investor updates.",
        url: "https://spacenexus.net/investment-data-room",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Investment Data Room 2026 — Secure Investor Documentation | SpaceNexus",
        description:
            "Complete guide to investment data rooms. Securely share due diligence, cap tables, and financials with investors during fundraising and deal evaluation.",
    },
    keywords: [
        "investment data room",
        "investor data room",
        "VC data room",
        "PE data room",
        "investment due diligence data room",
        "secure investment data room",
        "data room for investors",
        "fundraising data room",
        "private equity data room",
        "venture capital data room",
    ],
};

const investmentUseCases = [
    {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Startup Fundraising",
        description: "Founders use investment data rooms to share pitch decks, cap tables, financial projections, customer data, and IP portfolios with VC and PE firms during pre-seed through Series C rounds.",
        features: ["Per-investor engagement analytics", "Secure cap table sharing", "NDA-enforced document access", "Drag-and-drop data room setup"],
    },
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Private Equity Deal Pipeline",
        description: "PE firms use investment data rooms to manage portfolio company documents, run LP reporting, and orchestrate acquisition due diligence across multiple simultaneous transactions.",
        features: ["Multi-deal pipeline management", "LP reporting dashboards", "Portfolio document consolidation", "Deal-level permission controls"],
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Angel & Family Office Investments",
        description: "Angel investors and family offices use investment data rooms to evaluate early-stage opportunities, conduct diligence, and manage their portfolio of private company investments.",
        features: ["Deal flow management", "Diligence request tracking", "Portfolio performance monitoring", "Secure document exchange"],
    },
    {
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        title: "Venture Capital Fund Operations",
        description: "VC firms use investment data rooms to manage fund operations, LP communications, deal flow tracking, and portfolio company reporting in a single secure platform.",
        features: ["Fund-level document management", "LP secure portal access", "Deal flow pipeline tracking", "Portfolio reporting automation"],
    },
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "M&A Due Diligence",
        description: "Investment bankers and corporate development teams use investment data rooms to manage sell-side and buy-side diligence processes with multiple counterparties.",
        features: ["Virtual data room for M&A", "Buyer engagement analytics", "Structured Q&A workflow", "Competitive bidder management"],
    },
    {
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        title: "Real Estate Investment",
        description: "Real estate investment firms use investment data rooms to share property financials, due diligence reports, and legal documents with co-investors and lenders.",
        features: ["Property-level document organization", "Co-investor secure access", "Environmental and legal document management", "Deal room templating"],
    },
];

const keyFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Bank-Grade Security",
        description: "AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II and ISO 27001 certification. Zero Trust architecture with MFA enforcement.",
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Investor Engagement Analytics",
        description: "Track which investors viewed which documents, for how long, and in what order. Engagement heatmaps reveal investor interest and help prioritize follow-ups.",
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Processing",
        description: "Automatically redact PII and sensitive financials. AI auto-categorizes documents into the correct folder structure and generates smart index numbers for quick navigation.",
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Structured Q&A Workflow",
        description: "Investor questions are routed by category and urgency to the right team member. Every question is tracked from submission to answer with a full audit trail.",
    },
    {
        icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
        title: "NDA & Permission Controls",
        description: "Require investors to accept NDAs before accessing documents. Set granular permissions at the folder, document, and page level for each investor or investor group.",
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Tamper-Evident Audit Trail",
        description: "Every access event is logged with timestamp, IP address, and user identity. Immutable audit logs satisfy LP reporting and regulatory requirements.",
    },
];

const faqItems = [
    {
        question: "What is an investment data room?",
        answer: "An investment data room is a secure online platform used by investors (VCs, PE firms, angel investors, family offices) and companies seeking investment to store, manage, and share confidential documents during the investment process. It serves as a central repository for due diligence materials, financial statements, cap tables, legal documents, and investor updates — all protected by enterprise-grade security and compliance controls.",
    },
    {
        question: "Who uses an investment data room?",
        answer: "Investment data rooms are used by venture capital firms, private equity firms, angel investors, family offices, investment banks, corporate development teams, startup founders, and CFOs. Any party involved in evaluating, making, or managing investments can benefit from a dedicated investment data room.",
    },
    {
        question: "What documents go in an investment data room?",
        answer: "An investment data room typically includes: pitch decks and executive summaries, cap tables and ownership structures, financial statements (P&L, balance sheet, cash flow), financial projections and models, customer and revenue data, product and technology documentation, IP portfolios, key contracts and agreements, team bios and organizational structure, market analysis and competitive landscape, legal and regulatory filings, and investor updates and board materials.",
    },
    {
        question: "How is an investment data room different from a virtual data room?",
        answer: "An investment data room is a specialized type of virtual data room tailored for the investment lifecycle. While a general VDR covers M&A, legal, and compliance use cases, an investment data room is optimized for fundraising workflows, investor engagement tracking, cap table management, and LP communications. Both share the same security foundation — encryption, NDAs, audit trails — but an investment data room focuses on the specific needs of investors and companies seeking capital.",
    },
    {
        question: "What features should an investment data room have?",
        answer: "Key features for an investment data room include: bank-grade security with SOC 2 Type II certification; investor engagement analytics showing which documents each investor viewed; NDA click-through enforcement; granular permission controls; AI-powered document redaction and categorization; structured Q&A workflow for investor diligence questions; a tamper-evident audit trail; and transparent pricing without per-page fees.",
    },
    {
        question: "How does SpaceNexus help with fundraising?",
        answer: "SpaceNexus helps founders and investors manage the full fundraising lifecycle. Founders can create a professional investment data room in under 24 hours, share pitch decks and due diligence materials with multiple investors simultaneously, track which investors are most engaged with real-time analytics, and manage investor Q&A through a structured workflow. Investors get a secure, organized view of each opportunity with the ability to conduct thorough diligence in a controlled environment.",
    },
    {
        question: "Is an investment data room secure?",
        answer: "Yes, a purpose-built investment data room is highly secure. SpaceNexus holds SOC 2 Type II certification, aligns with ISO 27001, and uses AES-256 encryption at rest, TLS 1.3 in transit, Zero Trust architecture, and multi-factor authentication. Every document access is logged in an immutable audit trail. NDAs are enforced before any document access, and dynamic watermarking deters unauthorized sharing.",
    },
    {
        question: "How much does an investment data room cost?",
        answer: "Investment data room pricing varies. SpaceNexus offers transparent flat-rate monthly pricing with no per-page fees, no per-user charges, and AI features included. Legacy VDRs use quote-only pricing that can run thousands per deal. For fundraising, SpaceNexus provides enterprise-grade security at a fraction of the cost of traditional providers.",
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
        { "@type": "ListItem", position: 2, name: "Investment Data Room", item: "https://spacenexus.net/investment-data-room" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Investment Data Room 2026 — Secure Platform for Investor Due Diligence",
    description: "Complete guide to investment data rooms. Securely share due diligence, cap tables, and financials with investors during fundraising and deal evaluation.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/investment-data-room",
};

export default function InvestmentDataRoomPage() {
    return (
        <>
            <Script id="idr-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="idr-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="idr-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Investment Data Room</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                2026 Complete Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Investment Data Room{" "}
                                <span className="text-[#2563eb]">— Secure Investor Collaboration</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                An investment data room is the central hub for sharing confidential documents with investors during fundraising, due diligence, and portfolio management. This guide covers everything you need to know.
                            </p>
                            <p className="text-sm text-gray-400 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers features, use cases, security, and best practices
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Try SpaceNexus Free
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <a href="#use-cases" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    Explore Use Cases
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is an investment data room?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                An investment data room is a secure, cloud-based platform used throughout the investment lifecycle — from initial deal sourcing and fundraising through due diligence, closing, and ongoing portfolio management. It serves as a single source of truth where companies share confidential documents with potential investors, and where investors conduct thorough due diligence before committing capital.
                            </p>
                            <p>
                                Unlike generic file-sharing tools, an investment data room provides the security, compliance, and workflow features that professional investors require: NDA enforcement before document access, granular permission controls, investor engagement analytics, structured Q&amp;A workflows, and tamper-evident audit trails. These capabilities are essential for maintaining confidentiality and professionalism throughout the investment process.
                            </p>
                            <p>
                                In 2026, investment data rooms are used by venture capital firms, private equity firms, angel investors, family offices, investment banks, and corporate development teams. The best platforms combine enterprise-grade security with AI-powered features that streamline the due diligence process and provide actionable intelligence on investor engagement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { value: "24hr", label: "Investment data room setup time" },
                                { value: "SOC 2 II", label: "Enterprise security certification" },
                                { value: "Real-time", label: "Investor engagement analytics" },
                                { value: "500+", label: "Deal teams trust SpaceNexus" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                                    <div className="text-xs text-blue-200 leading-snug">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section id="use-cases" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Use Cases</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Investment data room use cases
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                From startup fundraising to PE portfolio management, investment data rooms serve every stage of the investment lifecycle.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {investmentUseCases.map((uc) => (
                                <div key={uc.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300 flex flex-col">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4 shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={uc.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{uc.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{uc.description}</p>
                                    <ul className="space-y-1.5 mt-auto">
                                        {uc.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                                                <svg className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Features</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Key features of an investment data room
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These six capabilities are essential for any investment-grade data room platform.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {keyFeatures.map((f) => (
                                <div key={f.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
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
                                    Recommended Investment Data Room
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — The modern investment data room
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is purpose-built for the investment lifecycle. Every plan includes AI document redaction, investor engagement analytics, structured Q&amp;A, and SOC 2 Type II security — all at a transparent, published price with no per-page fees.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "Investor Analytics", desc: "See who viewed what and when" },
                                        { label: "AI Redaction", desc: "Auto-redact sensitive financials" },
                                        { label: "Structured Q&A", desc: "Track investor diligence questions" },
                                        { label: "SOC 2 Type II", desc: "Certified + ISO 27001" },
                                        { label: "Setup Time", desc: "Under 24 hours, self-serve" },
                                        { label: "Pricing", desc: "Transparent, no lock-in" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-start gap-2.5 bg-white rounded-xl p-3 border border-gray-100">
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
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus investment data room dashboard" className="w-full h-auto" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about investment data rooms
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
                            <Link href="/solutions/investor-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">Investor Data Room Solutions →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/series-a-fundraising-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">Series A Fundraising →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">VDR Providers →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/industries/venture-capital" className="text-sm font-semibold text-[#2563eb] hover:underline">Venture Capital →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Create your investment data room today
                        </h2>
                        <p className="text-gray-600 mb-8">
                            AI-powered redaction. Investor engagement analytics. Transparent pricing. Setup in under 24 hours. SOC 2 Type II certified.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Start Free Trial
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
