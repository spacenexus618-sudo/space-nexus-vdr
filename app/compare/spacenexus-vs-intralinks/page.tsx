import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import AnswerBlock from "../../components/AnswerBlock";

export const metadata: Metadata = {
    title: "SpaceNexus vs Intralinks | Feature Comparison 2026",
    description: "SpaceNexus vs Intralinks: side-by-side comparison of features, pricing, support, and ease of use. See which VDR is right for your deal team.",
    alternates: {
        canonical: "https://spacenexus.net/compare/spacenexus-vs-intralinks",
    },
    openGraph: {
        title: "SpaceNexus vs Intralinks | Feature Comparison 2026",
        description:
            "Side-by-side comparison of SpaceNexus vs Intralinks. Modern AI-powered VDR with transparent pricing vs legacy enterprise platform.",
        url: "https://spacenexus.net/compare/spacenexus-vs-intralinks",
    },
    keywords: [
        "spacenexus vs intralinks",
        "intralinks vs spacenexus",
        "spacenexus intralinks comparison",
        "best VDR 2026",
        "virtual data room comparison",
    ],
};

const comparisonTable = [
    { feature: "User Interface", spacenexus: "Modern, intuitive — no training needed", intralinks: "Legacy UI — steep learning curve" },
    { feature: "Q&A Workflow", spacenexus: "Categorized, assigned, urgent-flagged", intralinks: "Basic — no category or urgency tracking" },
    { feature: "AI Document Processing", spacenexus: "Redaction + auto-indexing built in", intralinks: "Limited AI — no auto-categorization" },
    { feature: "Pricing Transparency", spacenexus: "Transparent — listed publicly", intralinks: "Enterprise quote only" },
    { feature: "Mobile Experience", spacenexus: "Fully responsive — works on any device", intralinks: "Dated mobile experience" },
    { feature: "SOC 2 Type II", spacenexus: "✓ Certified", intralinks: "✓ Certified" },
    { feature: "Deal Analytics", spacenexus: "Per-investor engagement scoring", intralinks: "Basic view counts only" },
    { feature: "Setup Time", spacenexus: "Under 24 hours, self-serve", intralinks: "Requires CSM setup — days" },
    { feature: "Minimum Contract", spacenexus: "Monthly — no lock-in", intralinks: "Annual contracts required" },
    { feature: "Purpose", spacenexus: "Built for M&A due diligence", intralinks: "Legacy enterprise VDR" },
];

const detailedComparison = [
    {
        category: "Features",
        spacenexus: "SpaceNexus includes AI-powered document redaction, auto-categorization, structured Q&A workflows with category routing and urgency tagging, real-time per-investor engagement scoring, and granular permission controls — all built into every plan.",
        intralinks: "Intralinks is a legacy enterprise VDR with basic document sharing, limited Q&A functionality, and view-count analytics. AI capabilities are limited with no auto-categorization. Interface is dated and requires training.",
    },
    {
        category: "Pricing",
        spacenexus: "SpaceNexus publishes transparent monthly pricing with no per-page charges, no per-user overages, and no surprise invoices. You know exactly what you'll pay before you sign up.",
        intralinks: "Intralinks uses enterprise quote-only pricing with per-page, per-user, and storage overages that inflate final invoices. Costs are unpredictable and can escalate significantly during active transactions.",
    },
    {
        category: "Support",
        spacenexus: "Every SpaceNexus customer gets a dedicated account manager, priority support with fast response times, and hands-on onboarding assistance. Migration support included at no extra cost.",
        intralinks: "Intralinks provides tiered support with premium support requiring higher plans. CSM-led setup can take days. Support quality varies by contract tier.",
    },
    {
        category: "Ease of Use",
        spacenexus: "SpaceNexus features a modern, intuitive interface built for today's deal teams. Setup takes under 24 hours with self-serve onboarding. No training required — clean dashboards and intuitive navigation.",
        intralinks: "Intralinks has a legacy interface with a steep learning curve. Setup requires CSM involvement and can take days. Mobile experience is dated. Users often need training to navigate effectively.",
    },
    {
        category: "Integrations",
        spacenexus: "SpaceNexus integrates with major productivity tools and offers API access for custom workflows. Email notifications, bulk operations, and export capabilities included.",
        intralinks: "Intralinks offers enterprise integrations and has deep SS&C integration for institutional workflows. API access is available on enterprise plans.",
    },
];

export default function SpaceNexusVsIntralinksPage() {
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
                                    { "@type": "ListItem", position: 2, name: "Compare", item: "https://spacenexus.net/compare" },
                                    { "@type": "ListItem", position: 3, name: "SpaceNexus vs Intralinks", item: "https://spacenexus.net/compare/spacenexus-vs-intralinks" },
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
                            },
                        ],
                    }),
                }}
            />
            {/* TL;DR Summary */}
            <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        Head-to-Head Comparison
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="text-[#2563eb]">SpaceNexus</span> vs <span className="text-gray-600">Intralinks</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        SpaceNexus is a modern VDR with AI redaction, structured Q&A, and buyer analytics. Intralinks is a legacy enterprise platform. Here&apos;s a detailed comparison to help you decide.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link
                            href="/demo"
                            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
                        >
                            Try SpaceNexus Free
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href="/competitors/intralinks-alternative"
                            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200"
                        >
                            Full Intralinks Alternative Page →
                        </Link>
                    </div>
                </div>
            </section>

            <AnswerBlock text="SpaceNexus beats Intralinks as a VDR: modern UI with no training needed vs legacy interface with steep learning curve, structured Q&A with category routing vs basic Q&A, per-investor engagement scoring vs basic view counts, and transparent pricing vs enterprise quotes with per-page overages." />

            {/* At-a-Glance Comparison Table */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">At-a-Glance Comparison</h2>
                    <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                        <div className="grid grid-cols-3 bg-gray-100">
                            <div className="px-5 py-3 text-sm font-semibold text-gray-700">Feature</div>
                            <div className="px-5 py-3 text-sm font-bold text-center border-l border-gray-200">
                                <span className="text-[#2563eb]">SpaceNexus</span>
                            </div>
                            <div className="px-5 py-3 text-sm font-semibold text-center text-gray-700 border-l border-gray-200">Intralinks</div>
                        </div>
                        {comparisonTable.map((row, i) => (
                            <div
                                key={row.feature}
                                className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}
                            >
                                <div className="px-5 py-3 text-sm font-medium text-gray-800">{row.feature}</div>
                                <div className="px-5 py-3 text-sm text-center border-l border-gray-100 text-green-700 font-medium">
                                    <span className="inline-flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {row.spacenexus}
                                    </span>
                                </div>
                                <div className="px-5 py-3 text-sm text-center border-l border-gray-100 text-red-600">
                                    {row.intralinks}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Comparison by Category */}
            <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Comparison</h2>
                    <div className="space-y-6">
                        {detailedComparison.map((item) => (
                            <div key={item.category} className="bg-white rounded-2xl border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.category}</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                        <p className="text-xs font-semibold text-[#2563eb] mb-2">SpaceNexus</p>
                                        <p className="text-sm text-gray-700 leading-relaxed">{item.spacenexus}</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                        <p className="text-xs font-semibold text-gray-500 mb-2">Intralinks</p>
                                        <p className="text-sm text-gray-700 leading-relaxed">{item.intralinks}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Is SpaceNexus Best For */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-7">
                            <div className="w-12 h-12 rounded-xl bg-[#2563eb] text-white flex items-center justify-center mb-5">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">SpaceNexus is best for…</h3>
                            <ul className="space-y-2">
                                {[
                                    "Teams that need a modern UI without training requirements",
                                    "Firms that want transparent, predictable pricing",
                                    "Deal teams that need per-investor engagement analytics",
                                    "Organizations that need structured Q&A with category routing",
                                    "Companies that need fast self-serve setup",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                        <svg className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-7">
                            <div className="w-12 h-12 rounded-xl bg-gray-600 text-white flex items-center justify-center mb-5">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Intralinks is best for…</h3>
                            <ul className="space-y-2">
                                {[
                                    "Large-cap deals at bulge bracket banks",
                                    "Teams deeply integrated with SS&C ecosystem",
                                    "Organizations with existing Intralinks contracts",
                                    "Firms that need institutional brand recognition",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                        <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Customers Say */}
            <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">What Customers Say</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                quote: "We replaced Intralinks with SpaceNexus for our capital raise. The modern UI and structured Q&A workflow impressed every LP who logged in.",
                                author: "James Whitfield",
                                role: "Partner, PE fund",
                            },
                            {
                                quote: "The per-user engagement analytics gave us visibility into buyer intent that Intralinks never provided. Setup took less than a day.",
                                author: "Rachel Kim",
                                role: "Associate, investment bank",
                            },
                        ].map((t) => (
                            <div key={t.author} className="bg-white rounded-2xl border border-gray-200 p-6">
                                <svg className="w-7 h-7 text-[#2563eb]/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                                </svg>
                                <p className="text-gray-700 leading-relaxed mb-3 text-sm">{t.quote}</p>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
                                    <p className="text-gray-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Migration Support */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Migration Support</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Switching from Intralinks? Our onboarding team handles the full migration — document transfer, permission setup, and bidder invitations. Most teams go live in under a week.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Free Migration", desc: "We handle the full transition at no extra cost" },
                            { title: "Data Ownership", desc: "You keep full ownership of all your data throughout" },
                            { title: "Dedicated Support", desc: "Account manager guides you through every step" },
                        ].map((item) => (
                            <div key={item.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-5 text-center">
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                                <p className="text-gray-600 text-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to compare?</h2>
                    <p className="text-gray-600 mb-8">Try SpaceNexus free and see the difference for yourself.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                            Request a Live Demo
                        </Link>
                        <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                            See Pricing
                        </Link>
                    </div>
                    <p className="text-sm text-gray-600 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>

                    <div className="py-6 text-center border-t border-gray-100 mt-8">
                        <LastUpdated date="2026-07-31" />
                    </div>
                </div>
            </section>
        </main>
    );
}
