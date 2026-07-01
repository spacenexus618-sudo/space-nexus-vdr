import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Series A Fundraising Data Room | SpaceNexus",
    description: "Purpose-built VDR for Series A raises. Organize investor materials, control VC access, track engagement, and manage due diligence Q&A.",
    alternates: {
        canonical: "https://spacenexus.net/solutions/series-a-fundraising-data-room",
    },
    openGraph: {
        title: "Series A Fundraising Data Room | SpaceNexus",
        description: "Purpose-built VDR for Series A raises. Organize investor materials, control VC access, ...",
        url: "https://spacenexus.net/solutions/series-a-fundraising-data-room",
    },
    keywords: [
        "Series A data room",
        "fundraising data room",
        "startup due diligence",
        "investor data room",
        "Series A due diligence",
        "startup data room software",
        "venture capital data room",
    ],
};

const vcChecklist = [
    { category: "Company Overview", items: ["Pitch deck", "Executive summary", "Company overview memo", "Cap table"] },
    { category: "Financials", items: ["3-year historical P&L", "Monthly MRR / ARR breakdown", "12-month cash flow forecast", "Unit economics model"] },
    { category: "Legal", items: ["Certificate of incorporation", "Shareholder agreements", "IP assignments", "Key contracts + NDAs"] },
    { category: "Product & Technology", items: ["Product roadmap", "Architecture overview", "Security certifications", "Key metrics dashboard"] },
    { category: "Team", items: ["Org chart", "Founder bios & LinkedIn", "Key hire plans", "Advisory board profiles"] },
    { category: "Market", items: ["TAM / SAM / SOM analysis", "Competitive landscape", "Customer testimonials or LOIs", "Reference customer list"] },
];

const steps = [
    {
        step: "1",
        title: "Upload your investor materials",
        description: "Drag and drop your pitch deck, financials, cap table, and legal documents. AI Auto-Categorization organizes everything into the right folders instantly.",
    },
    {
        step: "2",
        title: "Invite VCs with controlled access",
        description: "Create separate access groups per investor firm. Control exactly which folders each VC can see — and require NDA signature before viewing sensitive materials.",
    },
    {
        step: "3",
        title: "Track which VCs are engaged",
        description: "See which VCs spent the most time on your financials, who came back for a second look at the cap table, and who hasn't opened the deck yet.",
    },
    {
        step: "4",
        title: "Answer due diligence questions",
        description: "VCs submit questions directly through the platform. You respond in-thread with full version control — no more hunting through email chains.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Series A Fundraising Data Room",
    description: "A purpose-built virtual data room for Series A fundraising. Organize investor materials, control VC access with NDA workflows, track engagement, and manage due diligence Q&A in one secure platform.",
    url: "https://spacenexus.net/solutions/series-a-fundraising-data-room",
    serviceType: "Virtual Data Room",
    provider: {
        "@type": "Organization",
        name: "SpaceNexus",
        url: "https://spacenexus.net",
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: {
        "@type": "BusinessAudience",
        audienceType: "Startups raising Series A",
    },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for pricing tailored to round size and investor count.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is a Series A fundraising data room?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A Series A fundraising data room is a secure virtual repository where startups organize and share due diligence materials with prospective venture capital investors. It includes pitch decks, financial models, cap tables, legal documents, product roadmaps, and team bios — all accessible under controlled, NDA-protected permissions so founders can manage VC access and track investor engagement.",
            },
        },
        {
            "@type": "Question",
            name: "What documents should startups include in a Series A data room?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A Series A data room typically includes the pitch deck, executive summary, 3-year historical P&L, monthly MRR/ARR breakdown, 12-month cash flow forecast, unit economics model, cap table, certificate of incorporation, shareholder agreements, IP assignments, key contracts, product roadmap, architecture overview, security certifications, org chart, founder bios, TAM/SAM/SOM analysis, competitive landscape, and customer references.",
            },
        },
        {
            "@type": "Question",
            name: "How does a data room help with Series A fundraising?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A data room accelerates Series A fundraising by centralizing all due diligence materials in one secure location, letting founders control which VCs see what, tracking which investors are most engaged through real-time analytics, and managing Q&A directly on the platform instead of scattered email chains. This reduces fundraising timelines and keeps the process organized for both founders and investors.",
            },
        },
        {
            "@type": "Question",
            name: "How do VCs access a startup's data room?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Founders invite VCs via email directly from the SpaceNexus platform. Each VC firm receives unique login credentials with permissions scoped to their access tier. Founders can require NDA signature before entry, set view-only or download permissions per folder, and revoke access instantly if a VC passes or the round closes. No software installation is required — VCs access the room from any browser.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://spacenexus.net/solutions" },
        { "@type": "ListItem", position: 3, name: "Series A Fundraising Data Room", item: "https://spacenexus.net/solutions/series-a-fundraising-data-room" },
    ],
};

export default function SeriesADataRoomPage() {
    return (
        <>
            <Script
                id="series-a-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="series-a-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="series-a-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <main className="pt-20 lg:pt-24">
            {/* Hero */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Startup Fundraising
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            The Data Room That Helps Startups{" "}
                            <span className="text-[#2563eb]">Close Series A</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Organize your investor materials, control VC access, track engagement, and answer due diligence questions — all in one secure platform. Launch your data room in under an hour.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Launch My Data Room
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/checklists" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                Free Series A Checklist
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 Steps */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">From first upload to term sheet — in one platform</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">Set up your data room once. Reuse it across every VC conversation.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((s) => (
                            <div key={s.step} className="relative">
                                <div className="w-10 h-10 rounded-full bg-[#2563eb] text-white text-sm font-bold flex items-center justify-center mb-4">{s.step}</div>
                                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VC Due Diligence Checklist */}
            <section className="py-16 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What VCs expect in your Series A data room</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            A complete Series A data room covers 6 categories. Space Nexus helps you organize and share each one — with full access control per investor.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {vcChecklist.map((cat) => (
                            <div key={cat.category} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-sm font-bold text-[#2563eb] uppercase tracking-wider mb-3">{cat.category}</h3>
                                <ul className="space-y-1.5">
                                    {cat.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                            <svg className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/checklists" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:underline">
                            Download the full Series A prep checklist (free)
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Analytics screenshot */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.spacenexus.net / analytics</div>
                            </div>
                            <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                <img src="/spacenexus/screenshots/vdr-analytics.png" alt="SpaceNexus investor engagement analytics for Series A" className="w-full h-auto" loading="lazy" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                Know your most interested investors — before they call
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Space Nexus shows you exactly which VC spent 45 minutes on your financial model, or who came back three times to the cap table. Use that intelligence to time your follow-ups perfectly and prioritize the conversations that matter.
                            </p>
                            <ul className="space-y-2.5 mb-8">
                                {["Per-investor engagement scores updated in real time", "Most-viewed documents ranked automatically", "Time-on-page per document section", "Instant notifications when a new investor opens the deck"].map(item => (
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
                                Start your fundraising data room
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-10 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Continue exploring</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/best-data-room-for-startups" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            Best Data Room for Startups (2026 Ranking) →
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/solutions/startup-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            Startup Data Room →
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/solutions/investor-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            Investor Data Room Guide →
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/checklists/due-diligence-checklist" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            Due Diligence Checklist (200+ items) →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#f8f9fa]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Series A data room — live in under an hour</h2>
                    <p className="text-gray-600 mb-8">Most founders spend 2–3 weeks pulling together investor materials. With Space Nexus, you go from zero to a professional data room in an afternoon.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">Request a Demo</Link>
                        <Link href="/checklists" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">Free Series A Checklist</Link>
                    </div>
                    <p className="text-sm text-gray-400 mt-6">SOC 2 Type II · AES-256 encryption at rest · Granular access control</p>
                </div>
            </section>
                    {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/solutions/investor-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">General-purpose investor VDR.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Investor data room →</h3>
                        </Link>
                        <Link
                            href="/solutions/startup-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Founder-friendly platform.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Startup data room →</h3>
                        </Link>
                        <Link
                            href="/checklists/investor-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Pre-Seed, Seed, and Series B+ indexes.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Free investor data room templates →</h3>
                        </Link>
                        <Link
                            href="/checklists"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">M&A and Series A checklists.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Free due diligence checklists →</h3>
                        </Link>
                        <Link
                            href="/blog/how-to-set-up-virtual-data-room-series-a"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Step-by-step guide.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">How to set up a Series A data room →</h3>
                        </Link>
                        <Link
                            href="/industries/technology"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Source code, IP, and AI diligence workflows.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For technology companies →</h3>
                        </Link>
                    </div>
                </div>
            </section>

</main>
        </>
    );
}
