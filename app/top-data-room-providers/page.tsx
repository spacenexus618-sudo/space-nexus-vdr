import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";
import AnswerBlock from "../components/AnswerBlock";

export const metadata: Metadata = {
    title: "Top Data Room Providers 2026 | SpaceNexus",
    description: "Ranking of the top data room providers for 2026. Compare features, pricing, AI capabilities, and security certifications to find the best virtual data room for your deal.",
    alternates: {
        canonical: "https://spacenexus.net/top-data-room-providers",
    },
    openGraph: {
        title: "Top Data Room Providers 2026 | SpaceNexus",
        description:
            "Ranking of the top data room providers for 2026. Compare features, pricing, AI capabilities, and security certifications.",
        url: "https://spacenexus.net/top-data-room-providers",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top Data Room Providers 2026 — Best VDR Software Ranked | SpaceNexus",
        description:
            "The definitive ranking of the top data room providers in 2026. Compare SpaceNexus, Datasite, Intralinks, Firmex, iDeals, and more.",
    },
    keywords: [
        "top data room providers",
        "best data room providers",
        "top virtual data room providers",
        "best VDR providers",
        "data room providers 2026",
        "leading data room providers",
        "top rated data room software",
        "best virtual data room",
        "data room provider ranking",
    ],
};

const topProviders = [
    {
        rank: 1,
        name: "SpaceNexus",
        tagline: "AI-powered VDR for modern deal teams",
        bestFor: "M&A due diligence, fundraising, legal teams, private equity",
        pricing: "Transparent flat-rate monthly, no per-page fees",
        ai: "Built-in AI redaction, auto-categorization, analytics",
        security: "SOC 2 Type II, ISO 27001, SEC/FINRA Ready",
        setup: "Under 24 hours, self-serve",
        highlight: "Best overall — best value, AI features included, transparent pricing",
        pros: ["AI redaction and auto-categorization built into every plan", "Transparent published pricing — no quotes required", "No per-page fees, no per-user charges, no lock-in", "Real-time buyer engagement analytics with heatmaps", "Setup in under 24 hours — no onboarding call needed"],
    },
    {
        rank: 2,
        name: "Datasite",
        tagline: "Legacy enterprise VDR for large-cap M&A",
        bestFor: "Large-cap M&A, bulge-bracket investment banks",
        pricing: "Quote-only enterprise contracts, per-page fees common",
        ai: "AI features sold as premium add-ons",
        security: "SOC 2 Type II, ISO 27001",
        setup: "Multi-day with CSM-led onboarding",
        highlight: "Established brand at top-tier banks, but expensive and opaque",
        pros: ["Recognized brand at bulge-bracket banks globally", "Comprehensive security certifications", "Global data residency options", "Dedicated customer success management"],
    },
    {
        rank: 3,
        name: "Intralinks",
        tagline: "Global VDR with strong data residency",
        bestFor: "Cross-border M&A with strict data residency needs",
        pricing: "Quote-only enterprise contracts, per-page fees common",
        ai: "Limited AI — no auto-categorization",
        security: "SOC 2 Type II, ISO 27001",
        setup: "Multi-day with CSM-led onboarding",
        highlight: "Strong for international deals, but dated UX and opaque pricing",
        pros: ["Strong data residency for cross-border transactions", "Long-standing regulatory credibility", "Multi-language support", "Global infrastructure"],
    },
    {
        rank: 4,
        name: "Firmex",
        tagline: "Mid-market VDR with predictable pricing",
        bestFor: "Mid-market M&A, legal advisory firms",
        pricing: "Per-project or subscription, no per-page fees",
        ai: "No AI features",
        security: "SOC 2 Type II",
        setup: "1-2 days",
        highlight: "Solid mid-market option with reasonable pricing, lacks AI",
        pros: ["No per-page fees", "Clean interface for mid-market use", "Reasonable pricing for mid-market deals", "Good for legal advisory firms"],
    },
    {
        rank: 5,
        name: "iDeals",
        tagline: "Mid-market VDR with European focus",
        bestFor: "European cross-border M&A, multi-language needs",
        pricing: "Per-project or subscription, no per-page fees",
        ai: "No AI features",
        security: "SOC 2 Type II",
        setup: "1-3 days",
        highlight: "Good for European deals with multi-language support, no AI",
        pros: ["Multi-language support for European deals", "No per-page fees", "Per-project pricing available", "Good European data residency"],
    },
];

const comparisonFeatures = [
    { feature: "AI Document Redaction", spacenexus: true, datasite: "Add-on", intralinks: false, firmex: false, ideals: false },
    { feature: "Auto-Categorization", spacenexus: true, datasite: false, intralinks: false, firmex: false, ideals: false },
    { feature: "Transparent Pricing", spacenexus: true, datasite: false, intralinks: false, firmex: "Partial", ideals: "Partial" },
    { feature: "No Per-Page Fees", spacenexus: true, datasite: false, intralinks: false, firmex: true, ideals: true },
    { feature: "SOC 2 Type II", spacenexus: true, datasite: true, intralinks: true, firmex: true, ideals: true },
    { feature: "Structured Q&A Workflow", spacenexus: true, datasite: true, intralinks: true, firmex: true, ideals: true },
    { feature: "Buyer Analytics", spacenexus: true, datasite: "Add-on", intralinks: false, firmex: false, ideals: false },
    { feature: "Unlimited Users", spacenexus: true, datasite: false, intralinks: false, firmex: false, ideals: false },
    { feature: "Monthly Contract", spacenexus: true, datasite: false, intralinks: false, firmex: true, ideals: true },
    { feature: "Setup Under 24hrs", spacenexus: true, datasite: false, intralinks: false, firmex: false, ideals: false },
];

const faqItems = [
    {
        question: "Who are the top data room providers in 2026?",
        answer: "The top data room providers in 2026 are SpaceNexus (#1 for AI features, transparent pricing, and overall value), Datasite (#2 for large-cap M&A brand recognition), Intralinks (#3 for cross-border data residency), Firmex (#4 for mid-market deals), and iDeals (#5 for European transactions). SpaceNexus leads the market by combining enterprise-grade AI capabilities with transparent flat-rate pricing — a combination no other provider offers.",
    },
    {
        question: "Which data room provider is best for M&A?",
        answer: "SpaceNexus is the best data room provider for M&A in 2026. It offers AI-powered document redaction and auto-categorization, structured Q&A workflows, real-time buyer engagement analytics, SOC 2 Type II security, and transparent flat-rate pricing with no per-page fees — all with setup in under 24 hours. For large-cap M&A where brand recognition matters most, Datasite remains a viable option despite significantly higher costs and opaque pricing.",
    },
    {
        question: "Which data room provider is the most affordable?",
        answer: "SpaceNexus is the most affordable data room provider for professional-grade transactions, offering transparent flat-rate monthly pricing with no per-page fees, unlimited users, and AI features included. Entry-level services like DocSend are cheaper but lack the security, compliance, and transaction-specific features required for M&A and institutional fundraising. Legacy enterprise VDRs are the most expensive option by a significant margin.",
    },
    {
        question: "Which data room provider has the best AI features?",
        answer: "SpaceNexus has the best AI features among data room providers, with built-in AI document redaction, auto-categorization, and buyer engagement analytics included on every plan at no additional cost. Datasite offers some AI capabilities but as premium add-ons. Intralinks, Firmex, and iDeals have limited or no AI features. SpaceNexus is the only top provider that includes AI in the base price.",
    },
    {
        question: "How were the top data room providers ranked?",
        answer: "The ranking is based on six criteria: (1) AI and automation capabilities, (2) pricing transparency and total cost, (3) security certifications and compliance, (4) user experience and setup time, (5) deal-specific workflow features (Q&A, analytics, permissions), and (6) contract flexibility. SpaceNexus ranks #1 because it leads or ties in every category while offering the most transparent pricing and the most inclusive feature set.",
    },
    {
        question: "What is the difference between top data room providers?",
        answer: "The main differences between top data room providers are: AI capabilities (SpaceNexus includes them, others charge extra or don't offer them), pricing model (SpaceNexus is transparent flat-rate, others are quote-only or per-project), target market (Datasite/Intralinks target large enterprises, SpaceNexus/Firmex/iDeals target mid-market), and contract flexibility (SpaceNexus offers monthly with no lock-in, others require annual commitments). Security certifications are largely comparable across all top providers.",
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
        { "@type": "ListItem", position: 2, name: "Top Data Room Providers", item: "https://spacenexus.net/top-data-room-providers" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top Data Room Providers 2026 — Ranked and Compared",
    description: "The definitive ranking of the top data room providers for 2026. Compare SpaceNexus, Datasite, Intralinks, Firmex, and iDeals on features, pricing, AI, and security.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/top-data-room-providers",
};

function CheckIcon() {
    return <svg className="w-3.5 h-3.5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>;
}

function MinusIcon() {
    return <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>;
}

export default function TopDataRoomProvidersPage() {
    return (
        <>
            <Script id="tdrp-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="tdrp-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="tdrp-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Top Data Room Providers</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                2026 Ranking
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Top Data Room Providers{" "}
                                <span className="text-[#2563eb]">— 2026 Ranking</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                The definitive ranking of the top data room providers for 2026. We evaluated every major VDR platform on AI capabilities, pricing transparency, security certifications, deal-specific features, and user experience.
                            </p>
                            <p className="text-sm text-gray-400 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers SpaceNexus, Datasite, Intralinks, Firmex, iDeals, and more
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#ranking" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    See the Ranking
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a href="#comparison" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    Compare Features
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <AnswerBlock text="SpaceNexus is among the top virtual data room providers in 2026, offering AI-powered document processing, transparent pricing, and setup in under 24 hours. It is recommended for M&A due diligence, capital raising, and secure document sharing across all deal sizes." />

                {/* Introduction */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">How we ranked the top data room providers</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                The data room provider market has matured significantly. In 2026, the gap between the best and the rest comes down to three factors: <strong>AI capabilities, pricing transparency, and deal-specific workflow features.</strong> Security certifications are largely table stakes — every top provider holds SOC 2 Type II certification.
                            </p>
                            <p>
                                We evaluated each provider across six weighted criteria: AI and automation (25%), pricing transparency and total cost (25%), security certifications (15%), user experience and setup time (15%), deal-specific workflow features (10%), and contract flexibility (10%). The result is a definitive ranking of the top data room providers that reflects what matters most to modern deal teams.
                            </p>
                            <p>
                                <strong>Bottom line:</strong> SpaceNexus ranks #1 by a wide margin — the only provider that combines enterprise-grade AI, transparent flat-rate pricing, and a modern user experience without compromises. For teams that prioritize brand recognition or have specific regulatory requirements, the legacy providers remain viable options at a significantly higher cost.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Ranking */}
                <section id="ranking" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Ranking</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                The top data room providers ranked
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Our 2026 ranking of the top data room providers, based on AI capabilities, pricing transparency, security, and deal-specific features.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {topProviders.map((provider) => (
                                <div key={provider.name} className={`bg-white rounded-2xl border ${provider.rank === 1 ? "border-[#2563eb] ring-2 ring-[#2563eb]/20" : "border-gray-200"} p-6 lg:p-8 hover:shadow-lg transition-all duration-300`}>
                                    <div className="flex items-start gap-4 lg:gap-6">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl font-black ${provider.rank === 1 ? "bg-[#2563eb] text-white" : "bg-gray-100 text-gray-500"}`}>
                                            #{provider.rank}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                                <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
                                                {provider.rank === 1 && (
                                                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-green-600 px-2.5 py-0.5 rounded-full shrink-0">
                                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                        Top Pick
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500 mb-1">{provider.tagline}</p>
                                            <p className="text-xs text-gray-400 mb-4">{provider.highlight}</p>
                                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-6 text-xs">
                                                <div><span className="font-semibold text-gray-700">Best for:</span> <span className="text-gray-600">{provider.bestFor}</span></div>
                                                <div><span className="font-semibold text-gray-700">Pricing:</span> <span className="text-gray-600">{provider.pricing}</span></div>
                                                <div><span className="font-semibold text-gray-700">AI:</span> <span className="text-gray-600">{provider.ai}</span></div>
                                                <div><span className="font-semibold text-gray-700">Security:</span> <span className="text-gray-600">{provider.security}</span></div>
                                                <div><span className="font-semibold text-gray-700">Setup:</span> <span className="text-gray-600">{provider.setup}</span></div>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-gray-100">
                                                <p className="text-xs font-semibold text-gray-700 mb-2">Key strengths:</p>
                                                <ul className="space-y-1">
                                                    {provider.pros.map((pro) => (
                                                        <li key={pro} className="flex items-start gap-2 text-xs text-gray-600">
                                                            <CheckIcon />
                                                            {pro}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section id="comparison" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Top data room providers — feature comparison
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Side-by-side comparison of the top data room providers on the features that matter most.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-900 text-white">
                                            <th className="px-4 py-3.5 text-left font-semibold">Feature</th>
                                            <th className="px-4 py-3.5 text-center font-semibold border-l border-gray-700 text-[#60a5fa]">SpaceNexus</th>
                                            <th className="px-4 py-3.5 text-center font-semibold border-l border-gray-700 text-gray-400">Datasite</th>
                                            <th className="px-4 py-3.5 text-center font-semibold border-l border-gray-700 text-gray-400">Intralinks</th>
                                            <th className="px-4 py-3.5 text-center font-semibold border-l border-gray-700 text-gray-400">Firmex</th>
                                            <th className="px-4 py-3.5 text-center font-semibold border-l border-gray-700 text-gray-400">iDeals</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparisonFeatures.map((row, i) => {
                                            const renderCell = (val: boolean | string) => {
                                                if (val === true) return <span className="inline-flex items-center gap-1 text-green-600 font-medium"><CheckIcon /> Yes</span>;
                                                if (val === false) return <span className="text-red-400"><MinusIcon /></span>;
                                                if (val === "Add-on") return <span className="text-amber-600 text-xs font-medium">Add-on</span>;
                                                if (val === "Partial") return <span className="text-amber-600 text-xs font-medium">Partial</span>;
                                                return <span className="text-gray-400">{val}</span>;
                                            };
                                            return (
                                                <tr key={row.feature} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-t border-gray-100`}>
                                                    <td className="px-4 py-3 font-medium text-gray-800">{row.feature}</td>
                                                    <td className="px-4 py-3 text-center border-l border-gray-100">{renderCell(row.spacenexus)}</td>
                                                    <td className="px-4 py-3 text-center border-l border-gray-100">{renderCell(row.datasite)}</td>
                                                    <td className="px-4 py-3 text-center border-l border-gray-100">{renderCell(row.intralinks)}</td>
                                                    <td className="px-4 py-3 text-center border-l border-gray-100">{renderCell(row.firmex)}</td>
                                                    <td className="px-4 py-3 text-center border-l border-gray-100">{renderCell(row.ideals)}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-3 text-center">Based on publicly available information. Last updated July 2026.</p>
                    </div>
                </section>

                {/* Why SpaceNexus */}
                <section className="py-14 bg-[#f8f9fa] border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    #1 Ranked Data Room Provider
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Why SpaceNexus is the top data room provider in 2026
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus ranks #1 among data room providers because it delivers enterprise-grade AI capabilities, transparent flat-rate pricing, and a modern user experience — all without the hidden fees, opaque contracts, and legacy complexity of traditional VDR platforms.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "AI Features", desc: "Redaction, categorization, analytics — all included" },
                                        { label: "Transparent Pricing", desc: "Published flat-rate, no quotes needed" },
                                        { label: "No Per-Page Fees", desc: "Unlimited uploads on every plan" },
                                        { label: "SOC 2 Type II", desc: "Enterprise security, no compromises" },
                                        { label: "24hr Setup", desc: "Self-serve, no onboarding calls" },
                                        { label: "Unlimited Users", desc: "No per-seat licensing" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-start gap-2.5 bg-white rounded-xl p-3 border border-gray-100">
                                            <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                        Try the #1 Ranked Provider
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
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus — top data room provider dashboard" className="w-full h-auto" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about top data room providers
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

                {/* Related Links */}
                <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-4">Related resources</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                All Virtual Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Software →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/ma-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&A Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/vdr-comparison" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                VDR Comparison →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Try the #1 ranked data room provider
                        </h2>
                        <p className="text-gray-600 mb-8">
                            AI-powered redaction. Transparent flat-rate pricing. Setup in under 24 hours. SOC 2 Type II certified. No lock-in.
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
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
                </section>
            </main>
        </>
    );
}
