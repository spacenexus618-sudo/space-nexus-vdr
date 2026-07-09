import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "VDR Providers 2026 | SpaceNexus",
    description: "Top virtual data room (VDR) providers compared. Pricing, security, AI features, and best fit by use case.",
    alternates: {
        canonical: "https://spacenexus.net/vdr-providers",
    },
    openGraph: {
        title: "VDR Providers 2026 | SpaceNexus",
        description:
            "Top virtual data room (VDR) providers compared. Pricing, security, AI features, and bes...",
        url: "https://spacenexus.net/vdr-providers",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "VDR Providers 2026 — Compare Top Virtual Data Room Vendors | SpaceNexus",
        description:
            "Honest comparison of the top VDR providers. Pricing, AI features, security certifications, and best-fit recommendations.",
    },
    keywords: [
        "VDR providers",
        "VDR provider comparison",
        "best VDR providers",
        "top VDR providers",
        "VDR vendors",
        "virtual data room vendors",
        "VDR provider 2026",
        "VDR software providers",
        "M&A VDR providers",
        "compare VDR providers",
        "VDR provider pricing",
        "VDR provider reviews",
    ],
};

const providers = [
    {
        rank: 1,
        name: "SpaceNexus",
        tagline: "AI-powered VDR for modern deal teams",
        verdict: "Best for most deals",
        pricing: "Transparent pricing",
        contract: "Monthly",
        setup: "< 24 hours",
        aiFeatures: true,
        highlight: true,
        badge: "Top Pick",
        pros: [
            "AI redaction and auto-categorization included",
            "Real-time buyer engagement analytics",
            "Structured Q&A with full audit trail",
            "Transparent pricing, no per-page fees",
            "SOC 2 Type II + ISO 27001 + SEC/FINRA ready",
            "Self-serve setup — live in under 24 hours",
        ],
        cons: [
            "Newer brand vs. legacy institutional providers",
            "Less name recognition at bulge bracket banks",
        ],
        link: "/demo",
        linkText: "Try SpaceNexus Free",
        detailLink: null,
    },
    {
        rank: 2,
        name: "Datasite",
        tagline: "Legacy enterprise VDR (fka Merrill Datasites)",
        verdict: "Best for large-cap bulge bracket M&A",
        pricing: "Quote only",
        contract: "Annual",
        setup: "3–5 days",
        aiFeatures: false,
        highlight: false,
        badge: null,
        pros: [
            "Established brand at top investment banks",
            "Handles high document volumes",
            "Large global support team",
        ],
        cons: [
            "Per-page pricing — costs spike on large deals",
            "AI features are expensive add-ons",
            "Legacy UI with steep learning curve",
            "Annual contracts with exit penalties",
        ],
        link: "/competitors/datasite-alternative",
        linkText: "SpaceNexus vs Datasite →",
        detailLink: "/competitors/datasite-alternative",
    },
    {
        rank: 3,
        name: "Intralinks",
        tagline: "Capital markets VDR by SS&C Technologies",
        verdict: "Best for capital markets & fund admin",
        pricing: "Quote only",
        contract: "Annual",
        setup: "3–5 days",
        aiFeatures: false,
        highlight: false,
        badge: null,
        pros: [
            "Strong capital markets workflow",
            "SS&C fund administration integration",
            "Global compliance support",
        ],
        cons: [
            "Expensive for mid-market deals",
            "Outdated interface",
            "Limited AI or automation features",
            "Slow support response times",
        ],
        link: "/competitors/intralinks-alternative",
        linkText: "SpaceNexus vs Intralinks →",
        detailLink: "/competitors/intralinks-alternative",
    },
    {
        rank: 4,
        name: "Firmex",
        tagline: "Mid-market Canadian VDR provider",
        verdict: "Best for Canada & mid-market Europe",
        pricing: "Quote-based",
        contract: "Monthly available",
        setup: "< 24 hours",
        aiFeatures: false,
        highlight: false,
        badge: null,
        pros: [
            "Solid mid-market pricing",
            "Clean interface for smaller teams",
            "Per-project pricing available",
        ],
        cons: [
            "No AI document processing",
            "Limited buyer analytics",
            "Basic Q&A workflow",
        ],
        link: null,
        linkText: null,
        detailLink: null,
    },
    {
        rank: 5,
        name: "iDeals",
        tagline: "European VDR for cross-border deals",
        verdict: "Best for EU cross-border transactions",
        pricing: "Quote-based",
        contract: "Monthly available",
        setup: "< 24 hours",
        aiFeatures: false,
        highlight: false,
        badge: null,
        pros: [
            "Multi-language support for EU deals",
            "Clean, modern interface",
            "Competitive mid-market pricing",
        ],
        cons: [
            "Limited US regulatory compliance",
            "No AI redaction or auto-indexing",
            "Smaller support team for US time zones",
        ],
        link: null,
        linkText: null,
        detailLink: null,
    },
    {
        rank: 6,
        name: "Ansarada",
        tagline: "Australia-based VDR with governance tools",
        verdict: "Best for APAC deals & board governance",
        pricing: "Quote-based",
        contract: "Subscription",
        setup: "< 24 hours",
        aiFeatures: false,
        highlight: false,
        badge: null,
        pros: [
            "Deal workflow management built-in",
            "Board and governance modules",
            "Strong APAC market presence",
        ],
        cons: [
            "Limited US M&A traction",
            "No AI document redaction",
            "Enterprise features gated behind higher tiers",
        ],
        link: null,
        linkText: null,
        detailLink: null,
    },
];

const pricingRows = [
    { label: "Starting Price", spacenexus: "Transparent (Published)", datasite: "Quote (tens of Ks/deal)", intralinks: "Quote (tens of Ks/deal)", firmex: "Quote-based", ideals: "Quote-based" },
    { label: "Pricing Model", spacenexus: "Monthly subscription", datasite: "Quote + per-page", intralinks: "Quote + per-page", firmex: "Monthly / project", ideals: "Monthly / project" },
    { label: "Per-Page Fees", spacenexus: "None", datasite: "Yes", intralinks: "Yes", firmex: "No", ideals: "No" },
    { label: "AI Features", spacenexus: "Included", datasite: "Add-on", intralinks: "Limited", firmex: "None", ideals: "None" },
    { label: "Contract", spacenexus: "Monthly, no lock-in", datasite: "Annual", intralinks: "Annual", firmex: "Flexible", ideals: "Flexible" },
    { label: "Setup Time", spacenexus: "< 24 hours", datasite: "3–5 days", intralinks: "3–5 days", firmex: "< 24 hours", ideals: "< 24 hours" },
];

const quickPicks = [
    {
        scenario: "Mid-market M&A ($10M–$500M)",
        pick: "SpaceNexus",
        reason: "AI automation, transparent published pricing, and 24-hour setup eliminate the overhead that makes legacy VDR providers expensive on mid-market mandates.",
        link: "/solutions/mergers-and-acquisitions-vdr",
    },
    {
        scenario: "Large-cap M&A ($500M+) at bulge bracket banks",
        pick: "Datasite or SpaceNexus",
        reason: "Datasite for mandates where brand recognition with institutional counterparties matters. SpaceNexus for advisors who want AI features and cost efficiency without sacrificing compliance.",
        link: "/industries/investment-banking",
    },
    {
        scenario: "Series A–C Fundraising",
        pick: "SpaceNexus",
        reason: "Founders get transparent monthly pricing, investor engagement analytics to track VC interest, and self-serve setup without needing a CSM — critical when deal timing is tight.",
        link: "/solutions/series-a-fundraising-data-room",
    },
    {
        scenario: "Law Firm Due Diligence",
        pick: "SpaceNexus",
        reason: "Privilege wall management, ethical walls between deal parties, tamper-evident audit trails, and SOC 2 Type II certification meet law firm risk and oversight requirements.",
        link: "/industries/law-firms",
    },
    {
        scenario: "European Cross-Border Deals",
        pick: "iDeals or SpaceNexus",
        reason: "iDeals for deals where multi-language EU support is the primary requirement. SpaceNexus for teams that want AI features alongside EU data residency options.",
        link: null,
    },
    {
        scenario: "Private Equity Portfolio Management",
        pick: "SpaceNexus",
        reason: "Unlimited users, deal pipeline tracking, LP reporting, and per-month pricing make SpaceNexus the only VDR provider built for ongoing PE portfolio workflows rather than single transactions.",
        link: "/industries/private-equity",
    },
];

const featureComparison = [
    { feature: "AI Document Redaction", spacenexus: "✓", datasite: "Add-on", intralinks: "✗", firmex: "✗", ideals: "✗", ansarada: "✗" },
    { feature: "AI Auto-Categorization", spacenexus: "✓", datasite: "✗", intralinks: "✗", firmex: "✗", ideals: "✗", ansarada: "✗" },
    { feature: "Buyer Engagement Analytics", spacenexus: "✓", datasite: "Add-on", intralinks: "✓", firmex: "Basic", ideals: "✓", ansarada: "✓" },
    { feature: "Structured Q&A Workflow", spacenexus: "✓", datasite: "Basic", intralinks: "Basic", firmex: "Basic", ideals: "✓", ansarada: "✓" },
    { feature: "Dynamic Watermarking", spacenexus: "✓", datasite: "✓", intralinks: "✓", firmex: "✓", ideals: "✓", ansarada: "✓" },
    { feature: "SOC 2 Type II", spacenexus: "✓", datasite: "✓", intralinks: "✓", firmex: "✓", ideals: "✓", ansarada: "✓" },
    { feature: "SEC/FINRA Ready", spacenexus: "✓", datasite: "✓", intralinks: "✓", firmex: "✗", ideals: "✗", ansarada: "✗" },
    { feature: "Transparent Pricing", spacenexus: "✓", datasite: "✗", intralinks: "✗", firmex: "Partial", ideals: "Partial", ansarada: "Partial" },
    { feature: "Monthly Contracts", spacenexus: "✓", datasite: "✗", intralinks: "✗", firmex: "✓", ideals: "✓", ansarada: "✓" },
    { feature: "Setup Under 24 Hours", spacenexus: "✓", datasite: "✗", intralinks: "✗", firmex: "✓", ideals: "✓", ansarada: "✓" },
];

const faqItems = [
    {
        question: "What is a VDR provider?",
        answer: "A VDR provider (virtual data room provider) is a company that delivers secure, cloud-based software for storing and sharing confidential documents during business transactions. VDR providers are purpose-built for M&A due diligence, fundraising, IPOs, real estate transactions, and legal proceedings — providing NDA enforcement, granular document permissions, tamper-evident audit trails, structured Q&A workflows, and compliance certifications (SOC 2 Type II, ISO 27001) that general file-sharing tools do not offer.",
    },
    {
        question: "Which VDR provider is best in 2026?",
        answer: "For most deal teams in 2026, SpaceNexus is the best VDR provider — combining AI-powered features (redaction, auto-categorization, buyer analytics), transparent published pricing, SOC 2 Type II certification, and self-serve setup in under 24 hours. For large-cap M&A at bulge bracket investment banks where institutional brand recognition matters, Datasite remains an established choice — though at significantly higher cost. For European cross-border deals, iDeals offers solid multi-language support at competitive mid-market pricing.",
    },
    {
        question: "How do VDR providers charge for their software?",
        answer: "VDR providers use three main pricing models: (1) Monthly subscription — SpaceNexus offers transparent monthly pricing with all features included, no per-page fees, and no annual contract required. (2) Per-deal quote pricing — Datasite and Intralinks provide custom quotes that typically run tens of thousands per transaction, often with additional per-page upload charges. (3) Project-based pricing — Firmex and iDeals offer per-project rates alongside monthly subscriptions. When comparing VDR providers, always ask about per-page fees, user license charges, storage caps, and add-on costs for AI features.",
    },
    {
        question: "What should I look for when comparing VDR providers?",
        answer: "When comparing VDR providers, evaluate six key areas: (1) Security — SOC 2 Type II and ISO 27001 are the minimum; AES-256 encryption, TLS 1.3, and MFA are required. (2) Pricing transparency — avoid quote-only providers with per-page charges. (3) AI capabilities — redaction, auto-categorization, and buyer analytics should be included, not sold as add-ons. (4) Q&A workflow — structured due diligence Q&A with audit trails separates VDR providers from generic tools. (5) Setup speed — modern VDR providers launch in under 24 hours. (6) Contract flexibility — monthly contracts without annual lock-in protect your deal economics.",
    },
    {
        question: "Is SpaceNexus a good VDR provider for M&A?",
        answer: "Yes. SpaceNexus is one of the top-rated VDR providers for M&A due diligence in 2026. It includes AI document redaction and auto-categorization as standard features (not add-ons), real-time buyer engagement analytics per document, structured Q&A with full audit trail, and SOC 2 Type II + ISO 27001 certification — all with transparent monthly pricing. Setup takes under 24 hours without onboarding calls. Compared to legacy VDR providers like Datasite and Intralinks, SpaceNexus delivers the same compliance and security at a fraction of the cost, with superior AI automation.",
    },
    {
        question: "How do VDR providers differ from cloud storage?",
        answer: "VDR providers and cloud storage tools (Dropbox, Google Drive, SharePoint) serve fundamentally different purposes. VDR providers include transaction-specific features that cloud storage lacks: mandatory NDA click-through enforcement at room entry, document-level and page-level permission controls, an immutable audit trail for legal defensibility, structured Q&A workflow management, dynamic watermarking, and compliance certifications (SOC 2 Type II, ISO 27001) required by financial regulators. Using cloud storage for M&A due diligence or securities-related document sharing creates legal, compliance, and security exposure.",
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
        { "@type": "ListItem", position: 2, name: "VDR Providers", item: "https://spacenexus.net/vdr-providers" },
    ],
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "VDR Providers 2026 — Compare Top Virtual Data Room Vendors",
    description:
        "Honest comparison of the top 6 VDR providers in 2026. Pricing, AI features, security certifications, and best-fit use cases.",
    author: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-06-01",
    mainEntityOfPage: "https://spacenexus.net/vdr-providers",
};

export default function VdrProvidersPage() {
    return (
        <>
            <Script id="vdrp-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="vdrp-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="vdrp-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="vdrp-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">VDR Providers</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                2026 VDR Provider Comparison
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                VDR Providers{" "}
                                <span className="text-[#2563eb]">Compared for 2026</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Six VDR providers. One honest comparison. We break down pricing, AI features, security certifications, and best-fit use cases — so you can choose the right provider without sitting through six sales calls.
                            </p>

                            {/* Quick verdict strip */}
                            <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 text-sm font-medium px-5 py-3 rounded-full mb-10">
                                <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Top pick for most deals: <span className="font-bold">SpaceNexus</span> — transparent pricing, AI-powered, SOC 2 certified
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#providers" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Compare All Providers
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a href="#pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    Compare Pricing
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Provider Cards */}
                <section id="providers" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">The 6 leading VDR providers in 2026</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Pricing, strengths, limitations, and our honest verdict on each provider.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {providers.map((p) => (
                                <div key={p.name} className={`rounded-2xl border p-7 flex flex-col transition-all duration-300 ${p.highlight ? "bg-white border-[#2563eb] shadow-lg shadow-blue-500/10 ring-1 ring-[#2563eb]/20" : "bg-white border-gray-200 hover:shadow-md hover:border-gray-300"}`}>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-gray-400">#{p.rank}</span>
                                            <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                                        </div>
                                        {p.badge && (
                                            <span className="text-xs font-semibold bg-[#2563eb] text-white px-2.5 py-1 rounded-full">{p.badge}</span>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-500 italic mb-1">{p.tagline}</p>
                                    <p className="text-xs font-semibold text-[#2563eb] mb-4">{p.verdict}</p>

                                    {/* Quick stats */}
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        {[
                                            { label: "Pricing", value: p.pricing },
                                            { label: "Contract", value: p.contract },
                                            { label: "Setup", value: p.setup },
                                            { label: "AI Features", value: p.aiFeatures ? "Included" : "Limited / None" },
                                        ].map((stat) => (
                                            <div key={stat.label} className="bg-gray-50 rounded-lg px-3 py-2">
                                                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{stat.label}</p>
                                                <p className={`text-xs font-semibold ${stat.label === "AI Features" && !p.aiFeatures ? "text-red-500" : stat.label === "AI Features" && p.aiFeatures ? "text-green-700" : "text-gray-800"}`}>{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-3">
                                        <p className="text-xs font-semibold text-green-700 mb-1.5">Strengths</p>
                                        <ul className="space-y-1">
                                            {p.pros.map((pro) => (
                                                <li key={pro} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>{pro}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-5">
                                        <p className="text-xs font-semibold text-red-600 mb-1.5">Limitations</p>
                                        <ul className="space-y-1">
                                            {p.cons.map((con) => (
                                                <li key={con} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>{con}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {p.link && (
                                        <div className="mt-auto">
                                            <Link href={p.link} className={`inline-flex items-center text-sm font-semibold ${p.highlight ? "text-white bg-[#2563eb] hover:bg-[#1d4ed8] px-5 py-2.5 rounded-full shadow-md" : "text-[#2563eb] hover:underline"}`}>
                                                {p.linkText}
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Comparison */}
                <section id="pricing" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">VDR provider pricing comparison</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Pricing is where VDR providers differ most dramatically. Legacy platforms hide true costs behind per-page fees and mandatory add-ons.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm min-w-[720px]">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="text-left px-5 py-4 font-semibold text-gray-300 min-w-[160px]"></th>
                                        <th className="text-center px-4 py-4 font-bold text-[#60a5fa] border-l border-gray-700">SpaceNexus</th>
                                        <th className="text-center px-4 py-4 font-semibold text-gray-400 border-l border-gray-700 text-xs">Datasite</th>
                                        <th className="text-center px-4 py-4 font-semibold text-gray-400 border-l border-gray-700 text-xs">Intralinks</th>
                                        <th className="text-center px-4 py-4 font-semibold text-gray-400 border-l border-gray-700 text-xs">Firmex</th>
                                        <th className="text-center px-4 py-4 font-semibold text-gray-400 border-l border-gray-700 text-xs">iDeals</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pricingRows.map((row, i) => (
                                        <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                            <td className="px-5 py-3.5 text-sm font-medium text-gray-800 border-b border-gray-100">{row.label}</td>
                                            <td className="px-4 py-3.5 text-xs text-center font-semibold text-green-700 border-b border-gray-100 border-l border-gray-100 bg-blue-50/30">{row.spacenexus}</td>
                                            <td className="px-4 py-3.5 text-xs text-center text-red-500 border-b border-gray-100 border-l border-gray-100">{row.datasite}</td>
                                            <td className="px-4 py-3.5 text-xs text-center text-red-500 border-b border-gray-100 border-l border-gray-100">{row.intralinks}</td>
                                            <td className="px-4 py-3.5 text-xs text-center text-gray-600 border-b border-gray-100 border-l border-gray-100">{row.firmex}</td>
                                            <td className="px-4 py-3.5 text-xs text-center text-gray-600 border-b border-gray-100 border-l border-gray-100">{row.ideals}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-400 mt-3 text-center">Based on publicly available information. Last updated June 2026.</p>
                    </div>
                </section>

                {/* Feature Comparison */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">VDR provider feature comparison</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Side-by-side view of the features that matter most when choosing a VDR provider.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                            <table className="w-full text-sm min-w-[720px]">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="text-left px-5 py-4 font-semibold text-gray-900 min-w-[185px]">Feature</th>
                                        {["SpaceNexus", "Datasite", "Intralinks", "Firmex", "iDeals", "Ansarada"].map((name, i) => (
                                            <th key={name} className={`text-center px-3 py-4 font-semibold border-l border-gray-100 min-w-[90px] ${i === 0 ? "text-[#2563eb] bg-blue-50/50" : "text-gray-500"}`}>
                                                {name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {featureComparison.map((row, ri) => (
                                        <tr key={row.feature} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/30"}>
                                            <td className="px-5 py-3 text-gray-700 font-medium border-b border-gray-100 text-sm">{row.feature}</td>
                                            {[row.spacenexus, row.datasite, row.intralinks, row.firmex, row.ideals, row.ansarada].map((val, ci) => (
                                                <td key={ci} className={`px-3 py-3 text-center border-b border-gray-100 border-l border-gray-100 ${ci === 0 ? "bg-blue-50/30" : ""}`}>
                                                    {val === "✓" ? (
                                                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                        </span>
                                                    ) : val === "✗" ? (
                                                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                                        </span>
                                                    ) : (
                                                        <span className="text-xs text-gray-500 font-medium">{val}</span>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Quick Picks */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Which VDR provider is right for your deal?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Our recommendation for each transaction type — no sales call required.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {quickPicks.map((pick) => (
                                <div key={pick.scenario} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:border-[#2563eb]/20 hover:shadow-sm transition-all duration-300">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{pick.scenario}</p>
                                    <p className="text-base font-bold text-[#2563eb] mb-2">→ {pick.pick}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{pick.reason}</p>
                                    {pick.link && (
                                        <Link href={pick.link} className="text-xs font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1">
                                            Learn more
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about VDR providers
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
                        <p className="text-sm font-semibold text-gray-700 mb-4">Keep comparing</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">Virtual Data Room Providers →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">Data Room Providers →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Data Room Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/vdr-alternatives" className="text-sm font-semibold text-[#2563eb] hover:underline">Full VDR Comparison →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/datasite-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">Datasite Alternative →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to see the top-rated VDR provider in action?
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
                        <p className="text-sm text-gray-400 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                    </div>
                </section>

                        {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/virtual-data-room-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Complete directory.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">All virtual data room providers →</h3>
                        </Link>
                        <Link
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers ranked.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
                        </Link>
                        <Link
                            href="/m-a-data-room-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Top providers for M&A.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A data room providers →</h3>
                        </Link>
                        <Link
                            href="/data-room-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Comprehensive provider list.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data room providers →</h3>
                        </Link>
                        <Link
                            href="/data-room-software"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Software platform comparison.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data room software →</h3>
                        </Link>
                    </div>
                </div>
            </section>

</main>
        </>
    );
}
