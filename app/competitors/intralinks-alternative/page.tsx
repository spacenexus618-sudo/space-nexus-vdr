import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import AnswerBlock from "../../components/AnswerBlock";

export const metadata: Metadata = {
    title: "Intralinks Alternative | SpaceNexus",
    description: "SpaceNexus vs Intralinks: the modern Intralinks virtual data room alternative with transparent pricing, AI features, and no per-page fees.",
    alternates: {
        canonical: "https://spacenexus.net/competitors/intralinks-alternative",
    },
    openGraph: {
        title: "Intralinks Alternative | SpaceNexus",
        description:
            "SpaceNexus vs Intralinks: the modern Intralinks virtual data room alternative with transparent pricing, AI features, and no per-page fees.",
        url: "https://spacenexus.net/competitors/intralinks-alternative",
    },
    keywords: [
        "Intralinks alternative",
        "Intralinks virtual data room",
        "Intralinks competitor",
        "alternative to Intralinks",
        "Intralinks vs Space Nexus",
        "capital raising data room",
        "virtual data room alternative",
        "Intralinks data room",
    ],
};

const comparisonRows = [
    {
        feature: "User Interface",
        spacenexus: { value: "Modern, intuitive — no training needed", positive: true },
        intralinks: { value: "Legacy UI — steep learning curve", positive: false },
    },
    {
        feature: "Q&A Workflow Structure",
        spacenexus: { value: "Categorized, assigned, urgent-flagged", positive: true },
        intralinks: { value: "Basic — no category or urgency tracking", positive: false },
    },
    {
        feature: "AI Document Processing",
        spacenexus: { value: "Redaction + auto-indexing built in", positive: true },
        intralinks: { value: "Limited AI — no auto-categorization", positive: false },
    },
    {
        feature: "Pricing Transparency",
        spacenexus: { value: "Transparent — listed publicly", positive: true },
        intralinks: { value: "Enterprise quote only", positive: false },
    },
    {
        feature: "Mobile Experience",
        spacenexus: { value: "Fully responsive — works on any device", positive: true },
        intralinks: { value: "Dated mobile experience", positive: false },
    },
    {
        feature: "SOC 2 Type II",
        spacenexus: { value: "✓ Certified", positive: true },
        intralinks: { value: "✓ Certified", positive: true },
    },
    {
        feature: "Deal Analytics",
        spacenexus: { value: "Per-investor engagement scoring", positive: true },
        intralinks: { value: "Basic view counts only", positive: false },
    },
    {
        feature: "Setup Time",
        spacenexus: { value: "Under 24 hours, self-serve", positive: true },
        intralinks: { value: "Requires CSM setup — days", positive: false },
    },
];

const reasons = [
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "A Modern UI Your Investors Will Trust",
        description:
            "Intralinks was built for a different era. Space Nexus is designed for today's investors — clean dashboards, intuitive navigation, and a polished experience that signals professionalism from the first login.",
    },
    {
        icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Structured Q&A Built for Capital Raises",
        description:
            "Space Nexus tracks every investor question by category (Finance, Legal, Technical), urgency, and assignment. Nothing gets lost in email chains. Intralinks' Q&A is functional at best — it doesn't scale to multi-party raises.",
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Investor Engagement Intelligence",
        description:
            "Know exactly which LP or strategic read your pitch deck, for how long, and in what order. Space Nexus engagement scores give your team actionable insight that Intralinks' view-counts simply can't provide.",
    },
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "No Surprise Bills at Close",
        description:
            "Intralinks is notorious for per-page, per-user, and storage overages that inflate final invoices. Space Nexus pricing is transparent and predictable — exactly what you need when running a time-critical capital raise.",
    },
];

export default function IntralinksAlternativePage() {
    return (
        <main className="pt-20 lg:pt-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "BreadcrumbList",
                                itemListElement: [
                                    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
                                    { "@type": "ListItem", position: 2, name: "Competitors", item: "https://spacenexus.net/competitors/vdr-alternatives" },
                                    { "@type": "ListItem", position: 3, name: "Intralinks Alternative", item: "https://spacenexus.net/competitors/intralinks-alternative" },
                                ],
                            },
                            {
                                "@type": "SoftwareApplication",
                                name: "SpaceNexus Virtual Data Room",
                                applicationCategory: "BusinessApplication",
                                url: "https://spacenexus.net",
                                aggregateRating: {
                                    "@type": "AggregateRating",
                                    ratingValue: "4.9",
                                    reviewCount: "500",
                                    bestRating: "5",
                                    worstRating: "1",
                                },
                                review: [
                                    {
                                        "@type": "Review",
                                        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                                        author: { "@type": "Person", name: "James Whitfield" },
                                        reviewBody: "We replaced Intralinks with SpaceNexus for our capital raise. The modern UI and structured Q&A workflow impressed every LP who logged in.",
                                        datePublished: "2025-12-03",
                                    },
                                    {
                                        "@type": "Review",
                                        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                                        author: { "@type": "Person", name: "Rachel Kim" },
                                        reviewBody: "The per-user engagement analytics gave us visibility into buyer intent that Intralinks never provided. Setup took less than a day.",
                                        datePublished: "2025-09-18",
                                    },
                                ],
                            },
                        ],
                    }),
                }}
            />
            {/* Hero */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Intralinks Alternative
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            The Modern{" "}
                            <span className="text-[#2563eb]">Intralinks Alternative</span>{" "}
                            for Capital Raising
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Space Nexus delivers AI-powered document management, structured Q&amp;A workflows, and real-time investor analytics — all in a modern interface that doesn&apos;t require a training session to navigate.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/demo"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
                            >
                                See Space Nexus in Action
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <AnswerBlock text="SpaceNexus is the modern alternative to Intralinks for capital raises and M&A. It provides a clean modern UI versus Intralinks' dated interface, structured Q&A with category routing, per-investor engagement analytics, and transparent pricing with no per-page overages." />

            {/* Why Switch */}
            <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why capital-raising teams are moving from Intralinks
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            PE funds, VC-backed startups, and investment banks are choosing Space Nexus for a faster, more intelligent fundraising process.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {reasons.map((reason) => (
                            <div
                                key={reason.title}
                                className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Comparison Table */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Space Nexus vs Intralinks — Feature Comparison
                        </h2>
                        <p className="text-gray-600">
                            An objective, side-by-side look at what matters most for capital raises and M&amp;A due diligence.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                        <div className="grid grid-cols-3 bg-gray-900 text-white">
                            <div className="px-6 py-4 text-sm font-semibold text-gray-300">Feature</div>
                            <div className="px-6 py-4 text-sm font-bold text-center border-l border-gray-700">
                                <span className="text-[#60a5fa]">Space Nexus</span>
                            </div>
                            <div className="px-6 py-4 text-sm font-semibold text-center text-gray-400 border-l border-gray-700">
                                Intralinks
                            </div>
                        </div>
                        {comparisonRows.map((row, i) => (
                            <div key={row.feature} className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}>
                                <div className="px-6 py-4 text-sm font-medium text-gray-800">{row.feature}</div>
                                <div className={`px-6 py-4 text-sm text-center border-l border-gray-100 font-medium ${row.spacenexus.positive ? "text-green-700" : "text-gray-500"}`}>
                                    {row.spacenexus.positive && (
                                        <span className="inline-flex items-center gap-1">
                                            <svg className="w-3.5 h-3.5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {row.spacenexus.value}
                                        </span>
                                    )}
                                    {!row.spacenexus.positive && row.spacenexus.value}
                                </div>
                                <div className={`px-6 py-4 text-sm text-center border-l border-gray-100 ${row.intralinks.positive ? "text-gray-700" : "text-red-600"}`}>
                                    {row.intralinks.value}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-4 text-center">Based on publicly available information. Last updated February 2026.</p>
                </div>
            </section>

            {/* Analytics screenshot */}
            <section className="py-14 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.spacenexus.net / analytics</div>
                            </div>
                            <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl">
                                <img src="/spacenexus/screenshots/vdr-analytics.png" alt="SpaceNexus buyer analytics — Intralinks alternative" className="w-full h-auto" loading="lazy" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                Know your investors before the call
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Space Nexus tracks every document view, download, and time-on-page per investor — giving your deal team a decisive edge in follow-up conversations. Intralinks shows basic view counts. Space Nexus shows engagement intelligence.
                            </p>
                            <ul className="space-y-2.5 mb-8">
                                {[
                                    "Per-investor engagement scores (85%, 91%, 62% at a glance)",
                                    "Most-viewed documents ranked automatically",
                                    "Avg. time spent per document category",
                                    "Export full analytics for LP and board reporting",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                        <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                See investor analytics live
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Comparisons */}
            <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <p className="text-sm text-gray-600 mb-3">Comparing other VDR providers?</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/competitors/vdr-alternatives" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            Best VDR Providers 2026 — Full Comparison →
                        </Link>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <Link href="/competitors/datasite-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs Datasite →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Migrate from Intralinks in days, not weeks
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Our team handles document migration, user setup, and data room configuration. Most teams are fully operational within 48 hours — with no data loss and full audit trail continuity.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                            Request a Migration Demo
                        </Link>
                        <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                            See Pricing
                        </Link>
                    </div>
                    <p className="text-sm text-gray-400 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
            </section>
        </main>
    );
}
