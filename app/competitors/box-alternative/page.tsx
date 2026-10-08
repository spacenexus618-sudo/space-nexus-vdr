import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import AnswerBlock from "../../components/AnswerBlock";

export const metadata: Metadata = {
    title: "Box Alternative | SpaceNexus",
    description: "SpaceNexus vs Box: feature-by-feature comparison. AI-powered document management, transparent pricing, modern UX for M&A due diligence.",
    alternates: {
        canonical: "https://spacenexus.net/competitors/box-alternative",
    },
    openGraph: {
        title: "Box Alternative | SpaceNexus",
        description:
            "SpaceNexus vs Box: AI-powered VDR with transparent pricing, modern UX, and faster setup. See why deal teams are switching.",
        url: "https://spacenexus.net/competitors/box-alternative",
    },
    keywords: [
        "Box alternative",
        "Box competitor",
        "alternative to Box",
        "Box vs SpaceNexus",
        "switch from Box",
        "M&A due diligence software",
        "virtual data room alternative",
        "Box VDR alternative",
    ],
};

const comparisonRows = [
    {
        feature: "AI Document Redaction",
        spacenexus: { value: "Built-in, one-click", positive: true },
        box: { value: "Requires Box AI add-on", positive: false },
    },
    {
        feature: "AI Auto-Categorization",
        spacenexus: { value: "Automatic on upload", positive: true },
        box: { value: "Manual folder structure", positive: false },
    },
    {
        feature: "Transparent Pricing",
        spacenexus: { value: "Published monthly pricing", positive: true },
        box: { value: "Enterprise quotes only", positive: false },
    },
    {
        feature: "Q&A Workflow Management",
        spacenexus: { value: "Structured, assigned, tracked", positive: true },
        box: { value: "Not available — generic storage", positive: false },
    },
    {
        feature: "Buyer Engagement Analytics",
        spacenexus: { value: "Real-time per-user heatmaps", positive: true },
        box: { value: "Basic access logs only", positive: false },
    },
    {
        feature: "Setup Time",
        spacenexus: { value: "Live in under 24 hours", positive: true },
        box: { value: "Days — enterprise onboarding", positive: false },
    },
    {
        feature: "SOC 2 Type II",
        spacenexus: { value: "✓ Certified", positive: true },
        box: { value: "✓ Certified", positive: true },
    },
    {
        feature: "Minimum Contract",
        spacenexus: { value: "Monthly — no lock-in", positive: true },
        box: { value: "Annual contracts required", positive: false },
    },
];

const reasons = [
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Built for Deals, Not General Storage",
        description:
            "Box is a general-purpose enterprise content cloud. SpaceNexus is purpose-built for M&A due diligence — with Q&A workflows, bidder tracking, and structured permissions that Box doesn't offer out of the box.",
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Copilot Included — Not an Expensive Add-On",
        description:
            "Every SpaceNexus plan includes AI-powered document redaction, auto-categorization, and smart indexing. Box AI is a premium add-on that significantly increases your per-user cost.",
    },
    {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Real-Time Buyer Intelligence",
        description:
            "SpaceNexus shows exactly which documents each buyer views, how long they spend, and where they disengage — per-user heatmaps. Box only provides basic access logs with no engagement depth.",
    },
    {
        icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Transparent Pricing, No Enterprise Games",
        description:
            "SpaceNexus publishes all pricing upfront with no per-page charges or overage fees. Box's enterprise pricing is opaque, requires sales calls, and often comes with hidden overages.",
    },
];

export default function BoxAlternativePage() {
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
                                    { "@type": "ListItem", position: 3, name: "Box Alternative", item: "https://spacenexus.net/competitors/box-alternative" },
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
                                        author: { "@type": "Person", name: "Jason Lee" },
                                        reviewBody: "Box worked for general file storage but it was never built for M&A. SpaceNexus gave us Q&A tracking, buyer analytics, and AI redaction on day one. The difference is massive.",
                                        datePublished: "2025-10-05",
                                    },
                                    {
                                        "@type": "Review",
                                        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                                        author: { "@type": "Person", name: "Maria Garcia" },
                                        reviewBody: "We switched from Box to SpaceNexus for our deal pipeline. Box AI was expensive and limited. SpaceNexus AI is built-in and handles document redaction automatically.",
                                        datePublished: "2026-03-12",
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            Box Alternative
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            The Modern{" "}
                            <span className="text-[#2563eb]">Box Alternative</span>{" "}
                            for M&amp;A Due Diligence
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Box is a general enterprise content cloud. SpaceNexus is a purpose-built VDR with AI redaction, structured Q&A, buyer analytics, and transparent pricing — everything deal teams actually need.
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

            <AnswerBlock text="SpaceNexus is the modern alternative to Box for M&A due diligence. Box is a general enterprise content cloud without deal-specific features. SpaceNexus offers AI document redaction, structured Q&A workflows, per-user buyer analytics, and transparent published pricing purpose-built for M&A transactions." />

            {/* Why Switch */}
            <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why M&amp;A teams switch from Box to SpaceNexus
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Deal teams at investment banks, PE firms, and advisory practices outgrow Box quickly. Here&apos;s why they choose SpaceNexus instead.
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
                            SpaceNexus vs Box — Feature Comparison
                        </h2>
                        <p className="text-gray-600">
                            An objective, side-by-side look at the capabilities that matter most for M&amp;A due diligence.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                        {/* Table header */}
                        <div className="grid grid-cols-3 bg-gray-900 text-white">
                            <div className="px-6 py-4 text-sm font-semibold text-gray-300">Feature</div>
                            <div className="px-6 py-4 text-sm font-bold text-center text-white border-l border-gray-700">
                                <span className="text-[#60a5fa]">SpaceNexus</span>
                            </div>
                            <div className="px-6 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">
                                Box
                            </div>
                        </div>
                        {/* Rows */}
                        {comparisonRows.map((row, i) => (
                            <div
                                key={row.feature}
                                className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}
                            >
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
                                <div className={`px-6 py-4 text-sm text-center border-l border-gray-100 ${row.box.positive ? "text-gray-700" : "text-red-600"}`}>
                                    {row.box.value}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-600 mt-4 text-center">
                        Based on publicly available information. Last updated October 2026. Sources: <a href="https://www.box.com" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline">Box official site</a>.
                    </p>
                </div>
            </section>

            {/* Who Should Switch */}
            <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Who should switch from Box?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            SpaceNexus isn&apos;t for everyone. Here&apos;s an honest look at who benefits most from switching.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl border border-green-200 p-7">
                            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-5">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">You should switch if…</h3>
                            <ul className="space-y-2.5">
                                {[
                                    "You use Box for M&A deals but need deal-specific features",
                                    "You need AI document redaction and auto-categorization",
                                    "You want real-time buyer engagement analytics",
                                    "You're tired of enterprise pricing games and hidden fees",
                                    "You need structured Q&A with assignment and tracking",
                                    "You want a VDR, not a general content cloud",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                        <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl border border-orange-200 p-7">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Box might be better if…</h3>
                            <ul className="space-y-2.5">
                                {[
                                    "You need general enterprise content management, not a VDR",
                                    "Your team is deeply integrated with Box's ecosystem",
                                    "You don't run M&A transactions or due diligence workflows",
                                    "You need Box's extensive third-party integrations",
                                    "Your IT department has standardized on Box company-wide",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                        <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshot callout */}
            <section className="py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                See the platform Box users are switching to
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Live deal pipeline, AI-powered features, and real-time buyer intelligence — all in one dashboard. Built for the speed of modern M&amp;A.
                            </p>
                            <ul className="space-y-2.5 mb-8">
                                {[
                                    "AI Redaction runs automatically on every upload",
                                    "Auto-categorization eliminates manual folder setup",
                                    "Structured Q&A with urgency tagging and assignment",
                                    "24-hour setup — no IT approval chain needed",
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
                                <Image src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus VDR dashboard — Box alternative" width={1200} height={675} className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Migration Path */}
            <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            How to migrate from Box to SpaceNexus
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Most teams complete the full migration in under a week. Here&apos;s what the process looks like.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Export from Box", desc: "Download your documents and folder structure from Box. We provide a Box-specific migration checklist." },
                            { step: "02", title: "Upload to SpaceNexus", desc: "Drag-and-drop bulk upload with automatic AI categorization. No manual folder rebuilding needed." },
                            { step: "03", title: "Configure permissions", desc: "Rebuild access groups in minutes. Set up deal-specific permission tiers with granular controls." },
                            { step: "04", title: "Invite bidders", desc: "Send invitations from the new platform. Buyers see a modern, branded VDR experience." },
                        ].map((item) => (
                            <div key={item.step} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                                    {item.step}
                                </div>
                                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            What teams say after switching from Box
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {[
                            {
                                quote: "Box is great for general file storage, but it was never designed for M&A. SpaceNexus gave us buyer analytics, Q&A tracking, and AI redaction on day one. The switch was worth it.",
                                author: "Daniel Park",
                                role: "Partner, law firm",
                            },
                            {
                                quote: "We were paying for Box AI as an add-on and it still couldn't do what SpaceNexus does out of the box. The auto-categorization alone saves us hours per deal.",
                                author: "Samantha Chen",
                                role: "Associate, investment bank",
                            },
                        ].map((testimonial) => (
                            <div key={testimonial.author} className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-7">
                                <svg className="w-8 h-8 text-[#2563eb]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                                </svg>
                                <p className="text-gray-700 leading-relaxed mb-4 text-sm">{testimonial.quote}</p>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
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
                        <Link href="/competitors/firmex-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs Firmex →
                        </Link>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <Link href="/competitors/sharefile-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs ShareFile →
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

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to leave Box behind?
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
                        <LastUpdated date="2026-07-31" />
                    </div>
                </div>
            </section>
        </main>
    );
}
