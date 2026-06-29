import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Startup Data Room — Founder VDR | SpaceNexus",
    description: "Founder-friendly virtual data room for fundraising. AI organization, per-VC NDA gating, engagement analytics. Setup in under an hour.",
    alternates: {
        canonical: "https://spacenexus.net/solutions/startup-data-room",
    },
    openGraph: {
        title: "Startup Data Room — Founder VDR | SpaceNexus",
        description:
            "Founder-friendly virtual data room for fundraising. AI organization, per-VC NDA gating,...",
        url: "https://spacenexus.net/solutions/startup-data-room",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Startup Data Room — Founder-Friendly VDR | SpaceNexus",
        description:
            "The data room built for startups raising pre-seed through Series A. AI-powered, transparent pricing, setup in under 24 hours.",
    },
    keywords: [
        "startup data room",
        "startup virtual data room",
        "founder data room",
        "pre-seed data room",
        "seed round data room",
        "Series A data room",
        "startup fundraising data room",
        "startup due diligence",
        "founder VDR",
        "data room software for startups",
    ],
};

const startupChecklist = [
    {
        category: "Company Overview",
        items: ["Pitch deck", "Executive summary", "Mission & vision memo", "Current cap table"],
    },
    {
        category: "Financials",
        items: ["Historical P&L (or current burn)", "Monthly MRR / revenue breakdown", "12-month cash runway forecast", "Unit economics summary"],
    },
    {
        category: "Legal",
        items: ["Certificate of incorporation", "Founder agreements", "IP assignment letters", "Vendor & customer contracts"],
    },
    {
        category: "Product & Technology",
        items: ["Product roadmap", "Tech stack overview", "Security & data handling", "Key product metrics"],
    },
    {
        category: "Team",
        items: ["Founder bios & LinkedIn", "Org chart", "Key hire plan", "Advisory board"],
    },
    {
        category: "Market",
        items: ["TAM / SAM / SOM", "Competitor analysis", "Customer testimonials or LOIs", "Go-to-market strategy"],
    },
];

const steps = [
    {
        step: "1",
        title: "Upload your founder materials",
        description:
            "Drag in your pitch deck, financials, cap table, and legal docs. AI Auto-Categorization sorts everything into the right investor folder instantly — no manual filing.",
    },
    {
        step: "2",
        title: "Invite VCs with NDA gating",
        description:
            "Create a separate access group for each investor firm. Require NDA click-through before any document is viewable, and control which folders each VC sees.",
    },
    {
        step: "3",
        title: "See which VCs are engaged",
        description:
            "Track which investors spent 40 minutes on your financial model, who came back twice to the cap table, and who hasn't opened the deck yet — all in real time.",
    },
    {
        step: "4",
        title: "Answer due diligence in one place",
        description:
            "VCs submit questions directly inside the data room. Your team responds in-thread with full version control — no more email chains or lost Google Docs.",
    },
];

const founderFeatures = [
    {
        title: "AI Auto-Categorization",
        description:
            "Drop a stack of 50 PDFs into your room and the AI sorts them into Company, Financials, Legal, Product, Team, and Market folders automatically.",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
        title: "Per-VC NDA Click-Through",
        description:
            "Every investor signs your NDA digitally before viewing a single document. No chasing signatures, no legal exposure from forwarded links.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
        title: "Real-Time Engagement Analytics",
        description:
            "Know exactly which VCs read your deck, which slides got the most time, and who came back for a second session — before they email you back.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
        title: "Structured DD Q&A",
        description:
            "VCs submit questions in categorized threads. You assign them to founders, set urgency, and reply with documents attached — full audit trail included.",
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
    },
    {
        title: "Dynamic Watermarking",
        description:
            "Every PDF a VC downloads is stamped with their name, email, IP, and timestamp. Leaked documents are traceable back to the source — and a strong deterrent.",
        icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
        title: "Cap Table & Document Viewer",
        description:
            "Built-in viewer for pitch decks, financials, and cap tables. VCs don't need to download anything to review — and you keep full control of every view.",
        icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    },
];

const comparisonRows = [
    { feature: "Setup time", spacenexus: "Under 24 hours", enterprise: "Multi-day with CSM calls" },
    { feature: "Pricing", spacenexus: "Transparent, published", enterprise: "Quote-only, tens of thousands per deal" },
    { feature: "Per-page fees", spacenexus: "None", enterprise: "Common — can 5–10x your bill" },
    { feature: "AI features", spacenexus: "Included", enterprise: "Sold as expensive add-ons" },
    { feature: "Onboarding", spacenexus: "Self-serve", enterprise: "Dedicated CSM required" },
    { feature: "Contract length", spacenexus: "Monthly, cancel anytime", enterprise: "Annual lock-in" },
    { feature: "Built for", spacenexus: "Founders & deal teams", enterprise: "Bulge-bracket IBs" },
    { feature: "Learning curve", spacenexus: "Minutes", enterprise: "Days of training" },
];

const faqItems = [
    {
        question: "What is a startup data room?",
        answer:
            "A startup data room is a secure online workspace where a founder organizes and shares confidential documents with prospective investors during a fundraise. Unlike Google Drive or Dropbox, a startup data room enforces NDA click-through before access, gives you per-investor permissions, logs every view and download in a tamper-evident audit trail, and shows you which investors are actually engaging with your materials.",
    },
    {
        question: "When should a startup open a data room?",
        answer:
            "Open your data room before your first VC meeting — not after you receive a term sheet. Serious investors expect a data room to be available on request, and having one ready signals operational maturity. For pre-seed and seed rounds, a basic data room is usually enough. For Series A and beyond, expect detailed financial, legal, and commercial diligence that requires a fully populated room.",
    },
    {
        question: "What documents do startups need in a data room?",
        answer:
            "A complete startup data room covers six categories: Company Overview (pitch deck, executive summary, cap table), Financials (P&L, MRR/ARR, cash forecast, unit economics), Legal (incorporation, founder agreements, IP assignments, key contracts), Product & Technology (roadmap, tech stack, security), Team (founder bios, org chart, advisors), and Market (TAM/SAM/SOM, competitor analysis, customer references).",
    },
    {
        question: "Can I use Google Drive or Dropbox instead of a VDR?",
        answer:
            "You can — but you shouldn't for investor diligence. Google Drive and Dropbox lack mandatory NDA enforcement, document-level permissions, a tamper-evident audit trail, and structured Q&A workflows. They also create legal exposure: a single forwarded link and your financials are out of your control. Most institutional VCs will not accept a Drive link in place of a proper data room.",
    },
    {
        question: "How much does a startup data room cost?",
        answer:
            "Modern startup data rooms like SpaceNexus offer transparent, published monthly pricing with no per-page fees and no annual lock-in. Legacy enterprise VDRs (Datasite, Intralinks) typically quote tens of thousands per transaction with additional per-page charges. For a startup raising a seed or Series A round, SpaceNexus delivers the same institutional-grade security at a fraction of the cost.",
    },
    {
        question: "How long does it take to set up a startup data room?",
        answer:
            "With SpaceNexus, you can launch a fully functional startup data room in under an hour — drag in your documents, set up investor access groups, and you're ready to share. The full platform, including NDA workflows and engagement analytics, is live within 24 hours. Legacy VDRs typically require multiple CSM calls and several days of onboarding before you can send a single invite.",
    },
    {
        question: "Is SpaceNexus secure enough for institutional VCs?",
        answer:
            "Yes. SpaceNexus is SOC 2 Type II certified, ISO 27001 compliant, and SEC/FINRA ready. Documents are protected with AES-256 encryption at rest, TLS 1.3 in transit, multi-factor authentication, dynamic watermarking, and a tamper-evident audit trail. Institutional investors and their outside counsel accept SpaceNexus for seed, venture, and growth rounds.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Startup Data Room — Founder-Friendly VDR for Fundraising",
    description:
        "The data room built for startups. AI-powered organization, per-VC NDA gating, real-time engagement analytics, and transparent published pricing.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-06-24",
    mainEntityOfPage: "https://spacenexus.net/solutions/startup-data-room",
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
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://spacenexus.net/solutions" },
        { "@type": "ListItem", position: 3, name: "Startup Data Room", item: "https://spacenexus.net/solutions/startup-data-room" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Startup Data Room",
    description: "Founder-friendly virtual data room for startup fundraising. AI-powered organization, per-VC NDA gating, real-time engagement analytics, and structured Q&A for due diligence.",
    url: "https://spacenexus.net/solutions/startup-data-room",
    serviceType: "Virtual Data Room",
    provider: {
        "@type": "Organization",
        name: "SpaceNexus",
        url: "https://spacenexus.net",
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: {
        "@type": "BusinessAudience",
        audienceType: "Startup founders and fundraising teams",
    },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for pricing tailored to round size and investor count.",
    },
};

export default function StartupDataRoomPage() {
    return (
        <>
            <Script id="sdr-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="sdr-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="sdr-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="sdr-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-500">Solutions</span>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Startup Data Room</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                For Startups &amp; Founders
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Data Room Built for{" "}
                                <span className="text-[#2563eb]">Founders Raising Capital</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                Organize your pitch deck, financials, and cap table. Control VC access, track who is actually reading your materials, and answer due diligence questions — all in one secure platform designed for startups. Live in under an hour.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Launch My Data Room
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    See Pricing
                                </Link>
                            </div>
                            <p className="text-xs text-gray-400 mt-6">Transparent monthly pricing · No per-page fees · Setup in under 24 hours</p>
                        </div>
                    </div>
                </section>

                {/* What is a startup data room */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a startup data room?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                A startup data room is a secure, cloud-based workspace where a founder organizes and shares confidential documents with prospective investors during a fundraise. It replaces unsecured email attachments and generic cloud-storage folders with a purpose-built environment that enforces NDAs, controls who sees what, and gives the founder real-time visibility into how investors are engaging with the materials.
                            </p>
                            <p>
                                Unlike consumer file-sharing tools, a startup data room is built for the specific workflow of an early-stage raise: NDA click-through before access, per-investor permission groups, a structured Q&A workflow for due diligence questions, dynamic watermarking on every PDF a VC downloads, and an engagement-analytics dashboard that tells you which investors are serious — and which have gone quiet.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4 Steps */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">From first upload to term sheet — in one afternoon</h2>
                            <p className="text-gray-600 max-w-xl mx-auto">Most founders spend 2–3 weeks assembling investor materials. SpaceNexus gets you to a professional data room in hours.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {steps.map((s) => (
                                <div key={s.step} className="relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-full bg-[#2563eb] text-white text-sm font-bold flex items-center justify-center mb-4">{s.step}</div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Startup Document Checklist */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What investors expect in your startup data room</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                A complete startup data room covers 6 categories. SpaceNexus gives you pre-built folder structures and AI auto-categorization to keep everything in the right place from day one.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {startupChecklist.map((cat) => (
                                <div key={cat.category} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
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
                                Download the full founder prep checklist (free)
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Founder Features Grid */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why founders choose SpaceNexus</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Purpose-built features for early-stage teams. No CSM calls, no per-page fees, no 90-page contract.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {founderFeatures.map((f) => (
                                <div key={f.title} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
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

                {/* Analytics Screenshot */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative order-2 lg:order-1">
                                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.spacenexus.net / analytics</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                    <img
                                        src="/spacenexus/screenshots/vdr-analytics.png"
                                        alt="SpaceNexus investor engagement analytics for startup fundraising"
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Know which VCs are actually interested — before they email you back
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus shows you exactly which investor spent 45 minutes on your financial model, who came back three times to the cap table, and who opened the deck once and disappeared. Use that signal to time your follow-ups and prioritize the conversations that matter.
                                </p>
                                <ul className="space-y-2.5 mb-8">
                                    {[
                                        "Per-investor engagement scores updated in real time",
                                        "Most-viewed documents ranked automatically",
                                        "Time-on-page per document section",
                                        "Instant notifications when a new VC opens the deck",
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
                                    Start your startup data room
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Table: SpaceNexus vs Legacy Enterprise VDR */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for founders, not bulge-bracket banks</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Legacy enterprise VDRs were designed in the 1990s for billion-dollar M&amp;A. SpaceNexus is designed for the way startups actually raise capital.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                                <div className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-[#2563eb] text-center border-l border-gray-200">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-bold text-gray-500 text-center border-l border-gray-200">Legacy Enterprise VDR</div>
                            </div>
                            {comparisonRows.map((row, i) => (
                                <div key={row.feature} className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} ${i < comparisonRows.length - 1 ? "border-b border-gray-100" : ""}`}>
                                    <div className="px-5 py-4 text-sm text-gray-700 font-medium">{row.feature}</div>
                                    <div className="px-5 py-4 text-sm text-gray-900 text-center border-l border-gray-100 font-medium">{row.spacenexus}</div>
                                    <div className="px-5 py-4 text-sm text-gray-500 text-center border-l border-gray-100">{row.enterprise}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-3 text-center">
                            Comparison based on publicly available information for Datasite, Intralinks, and similar legacy providers.
                        </p>
                    </div>
                </section>

                {/* Pricing Callout */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-8 lg:p-12 text-center">
                            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Founder-Friendly Pricing
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent pricing. No surprises.</h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                No per-page upload fees. No per-seat charges. No annual lock-in. No quote-only pricing games. Pay monthly, scale as you grow, and walk away whenever the round closes.
                            </p>
                            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-left">
                                {[
                                    { label: "Setup cost", value: "None" },
                                    { label: "Per-page fees", value: "None" },
                                    { label: "Contract", value: "Monthly" },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5">
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                See Full Pricing
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Recommended Platform Callout */}
                <section className="py-14 bg-[#f8f9fa] border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Recommended for Startups
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Why SpaceNexus is the data room founders actually pick
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is the modern data room built for the speed of today&apos;s fundraising market. AI-powered from the ground up, with transparent pricing and a setup experience that doesn&apos;t require a CSM or a week of onboarding.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Per-investor engagement scores — know who is serious before they call",
                                        "AI auto-categorization organizes every upload into the right folder",
                                        "Structured Q&A with urgency tagging and full audit trail",
                                        "Mandatory NDA click-through per investor firm",
                                        "SOC 2 Type II · ISO 27001 · SEC/FINRA ready",
                                        "Transparent pricing — no per-page fees, no annual lock-in",
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
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                        See SpaceNexus in Action
                                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                    <Link href="/solutions/series-a-fundraising-data-room" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                        See Series A Page →
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.spacenexus.net / data-room</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                    <img
                                        src="/spacenexus/screenshots/vdr-analytics.png"
                                        alt="SpaceNexus startup data room dashboard"
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about startup data rooms
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
                        <p className="text-sm font-semibold text-gray-700 mb-4">Continue exploring</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/best-data-room-for-startups" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Best Data Room for Startups (2026 Ranking) →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/series-a-fundraising-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Series A Fundraising Data Room →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/investor-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Investor Data Room Guide →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/checklists/due-diligence-checklist" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Due Diligence Checklist (200+ items) →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/pricing" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Pricing →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your startup data room — live in under an hour</h2>
                        <p className="text-gray-600 mb-8">
                            Stop sending PDFs over email. Launch a professional, secure, investor-grade data room today — and walk into your next VC meeting with full visibility into who&apos;s engaged.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/checklists" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                Free Founder Prep Checklist
                            </Link>
                        </div>
                        <p className="text-sm text-gray-400 mt-6">SOC 2 Type II · AES-256 encryption at rest · Granular per-VC access control</p>
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
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">NDA-gated investor access.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Investor data room →</h3>
                        </Link>
                        <Link
                            href="/solutions/series-a-fundraising-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Diligence-ready for institutional investors.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Series A fundraising room →</h3>
                        </Link>
                        <Link
                            href="/checklists/investor-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">8 downloadable fundraising templates.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Free investor data room templates →</h3>
                        </Link>
                        <Link
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers ranked for founders.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
                        </Link>
                        <Link
                            href="/blog/how-to-set-up-virtual-data-room-series-a"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Step-by-step founder guide.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">How to set up a Series A data room →</h3>
                        </Link>
                    </div>
                </div>
            </section>

</main>
        </>
    );
}
