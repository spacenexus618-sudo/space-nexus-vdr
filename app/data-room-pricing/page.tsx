import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Data Room Pricing 2026 | SpaceNexus",
    description: "Complete guide to data room pricing. Compare flat-rate, per-page, and quote-only pricing models across top VDR providers. No hidden fees.",
    alternates: {
        canonical: "https://spacenexus.net/data-room-pricing",
    },
    openGraph: {
        title: "Data Room Pricing 2026 | SpaceNexus",
        description:
            "Complete guide to data room pricing. Compare flat-rate, per-page, and quote-only pricing models across top VDR providers.",
        url: "https://spacenexus.net/data-room-pricing",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Room Pricing 2026 — VDR Cost Comparison Guide | SpaceNexus",
        description:
            "How much does a data room cost? Compare pricing models, hidden fees, and total cost across the leading virtual data room providers.",
    },
    keywords: [
        "data room pricing",
        "virtual data room pricing",
        "data room cost",
        "VDR pricing comparison",
        "data room pricing models",
        "how much does a data room cost",
        "data room pricing per page",
        "affordable data room pricing",
        "transparent data room pricing",
        "data room subscription pricing",
    ],
};

const pricingModels = [
    {
        model: "Flat-Rate Monthly Subscription",
        description: "A single monthly fee for unlimited pages, users, and storage. All features included in the base price. No per-page fees, no overages, no surprise charges.",
        providers: "SpaceNexus, Firmex (some plans)",
        transparency: "Fully transparent — published pricing",
        bestFor: "Mid-market M&A, fundraising, legal teams, and any organization that wants predictable costs",
    },
    {
        model: "Per-Project Pricing",
        description: "A single fee per transaction or project. Usually includes a fixed number of users and storage, with overage charges for exceeding caps.",
        providers: "iDeals, Firmex (some plans)",
        transparency: "Partial — pricing available on request",
        bestFor: "Boutique advisory firms and legal practices that handle discrete transactions",
    },
    {
        model: "Quote-Only Enterprise Contracts",
        description: "Custom pricing negotiated per deal or per year. Typically includes per-page upload fees, per-user licensing, and AI features as add-ons. Requires sales consultation to get a price.",
        providers: "Datasite, Intralinks, Drooms",
        transparency: "Opaque — pricing varies by deal and negotiation",
        bestFor: "Large-cap M&A where brand recognition and global scale are the primary factors",
    },
    {
        model: "Entry-Level Subscription",
        description: "Low-cost monthly or annual subscription with basic features. Designed for startups, pitch deck sharing, and simple document sharing needs.",
        providers: "DocSend, Google Drive, Dropbox",
        transparency: "Transparent — published pricing with fixed tiers",
        bestFor: "Pre-seed and seed-stage startups, basic document sharing",
    },
];

const pricingComparison = [
    {
        provider: "SpaceNexus",
        model: "Flat-rate monthly",
        startingPrice: "Transparent, published",
        perPage: "None",
        aiIncluded: "Yes — all plans",
        users: "Unlimited",
        setupFee: "None",
        contract: "Monthly, no lock-in",
    },
    {
        provider: "Datasite",
        model: "Quote-only enterprise",
        startingPrice: "Request only",
        perPage: "Common",
        aiIncluded: "Add-on ($$$)",
        users: "Per-seat licensing",
        setupFee: "Sometimes",
        contract: "Annual",
    },
    {
        provider: "Intralinks",
        model: "Quote-only enterprise",
        startingPrice: "Request only",
        perPage: "Common",
        aiIncluded: "No",
        users: "Per-seat licensing",
        setupFee: "Sometimes",
        contract: "Annual",
    },
    {
        provider: "Firmex",
        model: "Per-project or subscription",
        startingPrice: "Request only",
        perPage: "None",
        aiIncluded: "No",
        users: "Per-project caps",
        setupFee: "None",
        contract: "Monthly or annual",
    },
    {
        provider: "iDeals",
        model: "Per-project or subscription",
        startingPrice: "Request only",
        perPage: "None",
        aiIncluded: "No",
        users: "Per-project caps",
        setupFee: "None",
        contract: "Monthly or annual",
    },
    {
        provider: "Drooms",
        model: "Quote-only enterprise",
        startingPrice: "Request only",
        perPage: "Common",
        aiIncluded: "No",
        users: "Per-seat licensing",
        setupFee: "Sometimes",
        contract: "Annual",
    },
];

const hiddenCosts = [
    {
        cost: "Per-Page Upload Fees",
        detail: "The most punishing cost in VDR pricing. Legacy providers charge per page uploaded or viewed. A mid-sized deal with 5,000 pages can generate tens of thousands in page-fee events — multiplying your original quote 5-10x.",
    },
    {
        cost: "AI Feature Add-Ons",
        detail: "AI redaction, auto-categorization, and analytics are often sold as premium add-ons by legacy VDRs. These can double or triple your platform cost mid-deal when you realize you need them.",
    },
    {
        cost: "Per-User Licensing Overages",
        detail: "When your deal team exceeds the included user cap, legacy VDRs charge premium rates per additional user. This creates a perverse incentive to limit team access.",
    },
    {
        cost: "Storage Overages",
        detail: "Exceeding the storage cap triggers per-GB charges. Large M&A deals with extensive documentation can easily exceed standard allocations.",
    },
    {
        cost: "Setup and Onboarding Fees",
        detail: "One-time setup fees ranging from hundreds to thousands of dollars per deal. Often non-refundable and billed on the first invoice.",
    },
    {
        cost: "Annual Lock-In and Cancellation Fees",
        detail: "Annual contracts with early termination penalties. If a deal closes early or you want to switch providers, you may face material cancellation fees.",
    },
];

const faqItems = [
    {
        question: "How much does a data room cost?",
        answer: "Data room pricing varies widely by provider. Modern flat-rate platforms like SpaceNexus offer transparent monthly pricing with no per-page fees. Mid-market providers like Firmex and iDeals use per-project pricing typically ranging from a few thousand dollars per deal. Legacy enterprise VDRs like Datasite and Intralinks use quote-only pricing that can run tens of thousands per deal, with per-page fees and AI add-ons inflating the final bill. The total cost depends on deal size, duration, number of users, and whether AI features are included or sold as add-ons.",
    },
    {
        question: "What is the average cost of a virtual data room?",
        answer: "The average cost of a virtual data room ranges from a few hundred dollars per month on a flat-rate plan to tens of thousands per deal on legacy enterprise contracts. SpaceNexus offers published flat-rate monthly pricing with no per-page fees. For a typical mid-market M&A deal (8-12 weeks, 15-25 users), the total cost ranges dramatically: $1,000-3,000 on a flat-rate platform versus $15,000-50,000+ on a legacy enterprise VDR with per-page fees and add-ons.",
    },
    {
        question: "Which data room provider has the best pricing?",
        answer: "SpaceNexus offers the best value in data room pricing with transparent flat-rate monthly subscriptions, no per-page fees, unlimited users, and AI features included on every plan. For organizations that need enterprise-grade security and AI capabilities without enterprise pricing, SpaceNexus delivers 90% of the functionality at less than 10% of the cost of legacy providers like Datasite and Intralinks.",
    },
    {
        question: "Are per-page fees common in data room pricing?",
        answer: "Per-page fees are common at legacy enterprise VDRs (Datasite, Intralinks, Drooms) but are being eliminated by modern platforms. SpaceNexus, Firmex, and iDeals do not charge per-page fees. Per-page fees are the most common hidden cost in VDR pricing and can multiply your bill 5-10x on a mid-sized deal. Always confirm whether the provider charges per-page fees before signing a contract.",
    },
    {
        question: "Do data room providers charge for AI features?",
        answer: "Legacy enterprise VDRs typically sell AI features — redaction, auto-categorization, analytics — as premium add-ons that can double or triple the platform cost. Modern AI-powered platforms like SpaceNexus include AI features in the base price. When comparing data room pricing, always check whether AI capabilities are included or sold separately.",
    },
    {
        question: "What is the cheapest data room provider?",
        answer: "The cheapest options are consumer cloud storage platforms (Google Drive, Dropbox) and entry-level services (DocSend). However, these lack the security certifications, compliance features, and transaction-specific workflows required for M&A and institutional fundraising. For professional transactions, SpaceNexus offers the best value with transparent flat-rate pricing that includes AI features, unlimited users, and no per-page fees.",
    },
    {
        question: "How can I compare data room pricing across providers?",
        answer: "To compare data room pricing accurately, look at total cost of ownership: base subscription or per-project fee, per-page upload charges, per-user licensing costs, AI feature add-ons, setup fees, storage overages, and contract termination penalties. SpaceNexus simplifies this comparison by publishing transparent flat-rate pricing with all features included — no hidden fees, no overages, no surprises.",
    },
    {
        question: "Does SpaceNexus offer transparent data room pricing?",
        answer: "Yes. SpaceNexus publishes its data room pricing publicly with flat-rate monthly subscriptions. There are no per-page fees, no per-user charges, no setup fees, and no AI add-on costs. All plans include AI document redaction, auto-categorization, buyer engagement analytics, structured Q&A, and SOC 2 Type II security. You can see the exact pricing on the SpaceNexus pricing page without talking to a sales representative.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Data Room Pricing 2026 — Complete Cost Comparison Guide",
    description: "How much does a data room cost? Compare flat-rate, per-page, and quote-only pricing models. Learn about hidden fees and how to choose the right pricing model.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/data-room-pricing",
};

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
        { "@type": "ListItem", position: 2, name: "Data Room Pricing", item: "https://spacenexus.net/data-room-pricing" },
    ],
};

export default function DataRoomPricingPage() {
    return (
        <>
            <Script id="drp-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="drp-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="drp-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Data Room Pricing</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                2026 Pricing Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Data Room Pricing{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                How much does a data room cost? This guide breaks down every pricing model — flat-rate, per-page, per-project, and quote-only — so you can compare providers on total cost, not just the headline number.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers pricing models, hidden costs, and provider comparisons
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#pricing-models" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Compare Pricing Models
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a href="#hidden-costs" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Hidden Costs to Watch
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">How data room pricing works</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Data room pricing is not standardized. Unlike most SaaS products where you can see the price on a webpage, many data room providers hide their pricing behind sales calls and enterprise quotes — making it nearly impossible to compare costs across providers without investing hours in sales conversations.
                            </p>
                            <p>
                                The data room pricing landscape in 2026 falls into four main models: flat-rate monthly subscriptions, per-project pricing, quote-only enterprise contracts, and entry-level subscriptions. Each model has different implications for total cost, predictability, and hidden fees. Understanding these models is the first step to finding the right data room pricing for your needs.
                            </p>
                            <p>
                                <strong>The single most important factor in data room pricing is whether the provider charges per-page fees.</strong> Per-page fees can multiply your final bill 5-10x on a mid-sized deal — turning what looked like a reasonable quote into an unexpectedly large invoice. Always confirm per-page fee policies before signing any data room contract.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Models */}
                <section id="pricing-models" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Pricing Models</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                The 4 data room pricing models explained
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Not all data room pricing is created equal. Here is how the four main models compare on transparency, predictability, and total cost.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {pricingModels.map((pm) => (
                                <div key={pm.model} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pm.model}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{pm.description}</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs font-semibold text-gray-600 shrink-0 w-20">Providers:</span>
                                            <span className="text-gray-700">{pm.providers}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs font-semibold text-gray-600 shrink-0 w-20">Transparency:</span>
                                            <span className="text-gray-700">{pm.transparency}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs font-semibold text-gray-600 shrink-0 w-20">Best for:</span>
                                            <span className="text-gray-700">{pm.bestFor}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { value: "Published", label: "Transparent, listed pricing — no quotes" },
                                { value: "0", label: "Per-page fees on any plan" },
                                { value: "SOC 2 II", label: "Security certification standard" },
                                { value: "No lock-in", label: "Monthly contracts, cancel anytime" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                                    <div className="text-xs text-blue-200 leading-snug">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Data room pricing comparison by provider
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Side-by-side comparison of how the leading data room providers structure their pricing. Look beyond the headline model to understand total cost.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-900 text-white">
                                            <th className="px-5 py-4 text-left font-semibold">Provider</th>
                                            <th className="px-5 py-4 text-center font-semibold border-l border-gray-700">Pricing Model</th>
                                            <th className="px-5 py-4 text-center font-semibold border-l border-gray-700">Starting Price</th>
                                            <th className="px-5 py-4 text-center font-semibold border-l border-gray-700">Per-Page Fees</th>
                                            <th className="px-5 py-4 text-center font-semibold border-l border-gray-700">AI Included</th>
                                            <th className="px-5 py-4 text-center font-semibold border-l border-gray-700">Users</th>
                                            <th className="px-5 py-4 text-center font-semibold border-l border-gray-700">Setup Fee</th>
                                            <th className="px-5 py-4 text-center font-semibold border-l border-gray-700">Contract</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pricingComparison.map((row, i) => (
                                            <tr key={row.provider} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-t border-gray-100 ${row.provider === "SpaceNexus" ? "bg-blue-50/30" : ""}`}>
                                                <td className={`px-5 py-3.5 font-semibold ${row.provider === "SpaceNexus" ? "text-[#2563eb]" : "text-gray-900"}`}>{row.provider}</td>
                                                <td className="px-5 py-3.5 text-center border-l border-gray-100 text-gray-700">{row.model}</td>
                                                <td className="px-5 py-3.5 text-center border-l border-gray-100">{row.startingPrice}</td>
                                                <td className={`px-5 py-3.5 text-center border-l border-gray-100 font-medium ${row.perPage === "None" ? "text-green-600" : "text-red-500"}`}>{row.perPage}</td>
                                                <td className={`px-5 py-3.5 text-center border-l border-gray-100 font-medium ${row.aiIncluded.startsWith("Yes") ? "text-green-600" : row.aiIncluded.startsWith("Add-on") ? "text-amber-600" : "text-red-500"}`}>{row.aiIncluded}</td>
                                                <td className="px-5 py-3.5 text-center border-l border-gray-100 text-gray-700">{row.users}</td>
                                                <td className={`px-5 py-3.5 text-center border-l border-gray-100 font-medium ${row.setupFee === "None" ? "text-green-600" : "text-red-500"}`}>{row.setupFee}</td>
                                                <td className="px-5 py-3.5 text-center border-l border-gray-100 text-gray-700">{row.contract}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 mt-3 text-center">Based on publicly available information. Last updated July 2026.</p>
                    </div>
                </section>

                {/* SpaceNexus Callout */}
                <section className="py-14 bg-[#f8f9fa] border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Transparent Data Room Pricing
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — flat-rate data room pricing with no hidden fees
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus offers transparent, published flat-rate monthly pricing with no per-page fees, no per-user charges, no setup costs, and no AI add-ons. Every plan includes AI redaction, auto-categorization, buyer analytics, and SOC 2 Type II security.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "No Per-Page Fees", desc: "Upload unlimited pages" },
                                        { label: "Unlimited Users", desc: "No per-seat licensing" },
                                        { label: "AI Included", desc: "Redaction, categorization, analytics" },
                                        { label: "No Lock-In", desc: "Monthly contracts, cancel anytime" },
                                        { label: "SOC 2 Type II", desc: "Enterprise security included" },
                                        { label: "24hr Setup", desc: "Self-serve, no onboarding fee" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-start gap-2.5 bg-white rounded-xl p-3 border border-gray-100">
                                            <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                    <Link href="/pricing" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                        View SpaceNexus Pricing
                                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                    <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                        Request a Demo
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
                                    <Image src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus data room pricing dashboard" width={1200} height={675} className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hidden Costs */}
                <section id="hidden-costs" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Watch Out</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Hidden costs in data room pricing
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The headline price is only part of the story. These hidden costs are where legacy data room pricing catches customers off guard.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {hiddenCosts.map((hc) => (
                                <div key={hc.cost} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-5">
                                    <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                        </svg>
                                        {hc.cost}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{hc.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about data room pricing
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
                        <p className="text-sm font-semibold text-gray-700 mb-4">Related resources</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/pricing-comparison" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                VDR Pricing Comparison →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/pricing" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus Pricing →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Virtual Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Software →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            See transparent data room pricing
                        </h2>
                        <p className="text-gray-600 mb-8">
                            No per-page fees. No AI add-ons. No hidden costs. SpaceNexus pricing is published and transparent — see exactly what you pay before you sign up.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                View Pricing
                            </Link>
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                Request a Demo
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
