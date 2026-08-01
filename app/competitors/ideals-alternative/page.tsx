import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "iDeals Alternative | SpaceNexus",
    description: "SpaceNexus vs iDeals: modern VDR with transparent pricing, AI redaction, and no per-page fees.",
    alternates: {
        canonical: "https://spacenexus.net/competitors/ideals-alternative",
    },
    openGraph: {
        title: "iDeals Alternative | SpaceNexus",
        description:
            "SpaceNexus vs iDeals: modern VDR with transparent pricing, AI redaction, and no per-page fees.",
        url: "https://spacenexus.net/competitors/ideals-alternative",
    },
    keywords: [
        "iDeals alternative",
        "iDeals virtual data room",
        "alternative to iDeals",
        "iDeals vs SpaceNexus",
        "virtual data room provider",
        "iDeals data room",
    ],
};

const comparisonRows = [
    {
        feature: "AI Document Redaction",
        spacenexus: { value: "Built-in, one-click on upload", positive: true },
        ideals: { value: "Not included — manual redaction only", positive: false },
    },
    {
        feature: "Transparent Pricing",
        spacenexus: { value: "Published, transparent monthly pricing", positive: true },
        ideals: { value: "Quote-based — no public pricing", positive: false },
    },
    {
        feature: "Q&A Workflow Management",
        spacenexus: { value: "Categorized, assigned, urgency-tracked", positive: true },
        ideals: { value: "Basic Q&A — limited structure", positive: false },
    },
    {
        feature: "Per-Page Upload Charges",
        spacenexus: { value: "None — unlimited uploads", positive: true },
        ideals: { value: "Per-page fees on some plans", positive: false },
    },
    {
        feature: "Buyer Engagement Analytics",
        spacenexus: { value: "Real-time per-user heatmaps", positive: true },
        ideals: { value: "Basic download tracking only", positive: false },
    },
    {
        feature: "SOC 2 Type II",
        spacenexus: { value: "✓ Certified", positive: true },
        ideals: { value: "✓ Certified", positive: true },
    },
    {
        feature: "Setup Time",
        spacenexus: { value: "Under 24 hours, self-serve", positive: true },
        ideals: { value: "Requires onboarding — days to weeks", positive: false },
    },
    {
        feature: "AI Auto-Categorization",
        spacenexus: { value: "Automatic on upload", positive: true },
        ideals: { value: "Manual indexing required", positive: false },
    },
];

const reasons = [
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Transparent, Predictable Pricing",
        description:
            "SpaceNexus publishes its pricing publicly — no quotes, no negotiations, no hidden per-page fees. iDeals operates on quote-based pricing where the final cost depends on deal size, page count, and negotiation leverage. With SpaceNexus, you know exactly what you'll pay from day one.",
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Features Included — Not an Add-On",
        description:
            "Every SpaceNexus plan includes AI-powered redaction, auto-categorization, and smart document indexing at no extra cost. With iDeals, AI capabilities are limited or unavailable — leaving your team to manually redact and organize thousands of documents.",
    },
    {
        icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Structured Q&A for Complex Deals",
        description:
            "SpaceNexus tracks every due diligence question by category, urgency, and assignee — with a full audit trail. iDeals' Q&A module covers the basics but lacks the structured workflow and categorization that M&A advisors need for complex multi-party transactions.",
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Real-Time Buyer Engagement Analytics",
        description:
            "Know exactly which documents each buyer viewed, for how long, and in what sequence. SpaceNexus provides per-user engagement heatmaps that reveal buyer intent — intelligence that iDeals' basic view counts simply cannot match.",
    },
];

export default function IdealsAlternativePage() {
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
                                    { "@type": "ListItem", position: 3, name: "iDeals Alternative", item: "https://spacenexus.net/competitors/ideals-alternative" },
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
                                        author: { "@type": "Person", name: "Luca Fontana" },
                                        reviewBody: "We moved from iDeals to SpaceNexus for cross-border M&A. The AI auto-categorization and modern interface made the transition seamless for our global team.",
                                        datePublished: "2025-10-10",
                                    },
                                    {
                                        "@type": "Review",
                                        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                                        author: { "@type": "Person", name: "Emily Zhang" },
                                        reviewBody: "SpaceNexus pricing is refreshingly transparent compared to iDeals. No per-page fees, no surprises. The Q&A workflow is exactly what our deal team needed.",
                                        datePublished: "2025-12-01",
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
                            iDeals Alternative
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            The Modern{" "}
                            <span className="text-[#2563eb]">iDeals Alternative</span>{" "}
                            for M&amp;A Due Diligence
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            SpaceNexus delivers everything your deal team needs — AI redaction, structured Q&amp;A, real-time buyer analytics, and transparent pricing — without per-page fees or opaque enterprise quotes.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/demo"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
                            >
                                See SpaceNexus in Action
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200"
                            >
                                View Transparent Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Switch */}
            <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why deal teams switch from iDeals to SpaceNexus
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            M&amp;A advisors, PE firms, and corporate development teams are choosing SpaceNexus for AI capabilities, pricing transparency, and faster setup.
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
                            SpaceNexus vs iDeals — Feature Comparison
                        </h2>
                        <p className="text-gray-600">
                            An objective, side-by-side look at the capabilities that matter most for M&amp;A due diligence and capital raises.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                        <div className="grid grid-cols-3 bg-gray-900 text-white">
                            <div className="px-6 py-4 text-sm font-semibold text-gray-300">Feature</div>
                            <div className="px-6 py-4 text-sm font-bold text-center border-l border-gray-700">
                                <span className="text-[#60a5fa]">SpaceNexus</span>
                            </div>
                            <div className="px-6 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">
                                iDeals
                            </div>
                        </div>
                        {comparisonRows.map((row, i) => (
                            <div key={row.feature} className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}>
                                <div className="px-6 py-4 text-sm font-medium text-gray-800">{row.feature}</div>
                                <div className={`px-6 py-4 text-sm text-center border-l border-gray-100 font-medium ${row.spacenexus.positive ? "text-green-700" : "text-gray-600"}`}>
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
                                <div className={`px-6 py-4 text-sm text-center border-l border-gray-100 ${row.ideals.positive ? "text-gray-700" : "text-red-600"}`}>
                                    {row.ideals.value}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-600 mt-4 text-center">Based on publicly available information. Last updated July 2026.</p>
                </div>
            </section>

            {/* Screenshot callout */}
            <section className="py-14 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                See the platform iDeals users are switching to
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Live deal pipeline, AI-powered redaction, and real-time buyer intelligence — all in one modern dashboard. Built for the speed of today&apos;s M&amp;A.
                            </p>
                            <ul className="space-y-2.5 mb-8">
                                {[
                                    "AI redaction runs automatically on every upload",
                                    "Structured Q&A with urgency tagging and assignment",
                                    "Buyer engagement heatmaps per document",
                                    "24-hour setup — no onboarding call needed",
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
                                Start Free Trial
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">app.spacenexus.net / dashboard</div>
                            </div>
                            <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl">
                                <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus VDR dashboard — iDeals alternative" className="w-full h-auto" loading="lazy" />
                            </div>
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
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <Link href="/competitors/firmex-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs Firmex →
                        </Link>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <Link href="/competitors/sharefile-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs ShareFile →
                        </Link>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <Link href="/competitors/box-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs Box →
                        </Link>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <Link href="/competitors/onehub-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs Onehub →
                        </Link>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <Link href="/competitors/securedocs-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs SecureDocs →
                        </Link>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <Link href="/competitors/ansarada-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs Ansarada →
                        </Link>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <Link href="/competitors/dealroom-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs Dealroom →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Continue exploring</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/m-a-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            M&amp;A Data Room Providers (2026 Ranking) →
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            All Virtual Data Room Providers →
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/competitors/intralinks-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs Intralinks →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to switch from iDeals?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Most teams migrate in under a week. Our onboarding team handles the transition — and you keep full data ownership throughout.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                            Request a Live Demo
                        </Link>
                        <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                            See Pricing
                        </Link>
                    </div>
                    <p className="text-sm text-gray-600 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
            </section>
        </main>
    );
}
