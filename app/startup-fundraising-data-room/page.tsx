import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Startup Fundraising Data Room 2026 | SpaceNexus",
    description: "Create a startup fundraising data room in under 24 hours. Share pitch decks, financials, and cap tables with investors. AI-powered, SOC 2 Type II, transparent pricing.",
    alternates: {
        canonical: "https://spacenexus.net/startup-fundraising-data-room",
    },
    openGraph: {
        title: "Startup Fundraising Data Room 2026 | SpaceNexus",
        description:
            "Create a startup fundraising data room in under 24 hours. Share pitch decks, financials, and cap tables with investors. AI-powered, SOC 2 Type II.",
        url: "https://spacenexus.net/startup-fundraising-data-room",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Startup Fundraising Data Room 2026 — Raise Capital Faster | SpaceNexus",
        description:
            "The complete guide to startup fundraising data rooms. What to include, how to organize, and which platform to use for pre-seed through Series A.",
    },
    keywords: [
        "startup fundraising data room",
        "fundraising data room",
        "startup data room",
        "data room for fundraising",
        "investor data room",
        "VC data room",
        "seed round data room",
        "Series A data room",
        "founder data room",
        "startup due diligence data room",
    ],
};

const checklist = [
    {
        category: "Company Overview",
        items: [
            "Investor pitch deck (PDF, 15-20 slides)",
            "Executive summary (1-2 pages)",
            "Founder bios and team org chart",
            "Company one-pager / fact sheet",
            "Product demo video or walkthrough",
        ],
    },
    {
        category: "Financials",
        items: [
            "Historical financials (3 years P&L, balance sheet, cash flow)",
            "Financial projections (3-5 year model)",
            "Unit economics breakdown (CAC, LTV, gross margin)",
            "Current KPIs and metrics dashboard",
            "Capitalization table (current and pro-forma)",
            "Use of funds analysis",
        ],
    },
    {
        category: "Commercial",
        items: [
            "Customer and revenue data",
            "Customer references and case studies",
            "Sales pipeline and funnel metrics",
            "Churn analysis and cohort retention",
            "Market analysis and TAM/SAM/SOM",
            "Competitive landscape comparison",
        ],
    },
    {
        category: "Product & Technology",
        items: [
            "Product roadmap and feature pipeline",
            "Technology architecture overview",
            "Security whitepaper and SOC 2 audit reports",
            "IP and patent portfolio",
            "Data privacy and compliance documentation",
            "Engineering team overview",
        ],
    },
    {
        category: "Legal & Governance",
        items: [
            "Certificate of incorporation and bylaws",
            "IP assignments and employment agreements",
            "Material contracts (customer, supplier, partnership)",
            "Regulatory filings and licenses",
            "Board meeting minutes (key decisions)",
            "Insurance certificates",
        ],
    },
    {
        category: "Fundraising-Specific",
        items: [
            "Term sheet history and current offer terms",
            "Investor update templates",
            "Data room FAQ (common investor questions)",
            "Past investor communications",
            "Co-investment and syndicate materials",
            "Post-close integration plan",
        ],
    },
];

const platformFeatures = [
    {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Investor Engagement Analytics",
        description: "See exactly which investors viewed your pitch deck, for how long, and which documents they focused on. Know who is genuinely interested before the follow-up call.",
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Organization",
        description: "Upload your existing Google Drive or Dropbox folders and SpaceNexus AI auto-organizes everything into a professional fundraising data room structure — no manual filing required.",
    },
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Per-Investor NDA Gating",
        description: "Require each VC or angel to sign an NDA before accessing your data room. Separate NDAs per investor, timestamped and logged. Your data stays protected.",
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Structured Investor Q&A",
        description: "Never lose an investor question in email again. Route questions by topic to the right team member, track response times, and provide a professional diligence experience.",
    },
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Transparent Pricing",
        description: "No per-page fees, no per-investor charges, no surprise overages. SpaceNexus uses flat-rate monthly pricing that's published publicly — so you know exactly what you'll pay.",
    },
    {
        icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
        title: "Quick Setup — Under 24 Hours",
        description: "Spin up a professional fundraising data room in hours, not days. Upload your documents, invite investors, and start fundraising — no onboarding call needed.",
    },
];

const faqItems = [
    {
        question: "What is a startup fundraising data room?",
        answer: "A startup fundraising data room is a secure online repository where founders share confidential documents with potential investors during the fundraising process. It typically includes the pitch deck, financial statements, cap table, customer data, product information, IP documentation, and key contracts. A well-organized fundraising data room signals professionalism to investors and speeds up the due diligence process.",
    },
    {
        question: "What should I include in my fundraising data room?",
        answer: "A complete fundraising data room covers six workstreams: (1) Company — pitch deck, executive summary, founder bios; (2) Financials — historical financials, projections, unit economics, cap table; (3) Commercial — customer data, references, pipeline, competitive analysis; (4) Product — roadmap, architecture, security docs, IP; (5) Legal — incorporation, contracts, regulatory filings; (6) Fundraising-specific — term sheet history, investor FAQ, use of funds. Modern AI-powered platforms like SpaceNexus can auto-organize these from your existing cloud storage.",
    },
    {
        question: "When should I create a startup fundraising data room?",
        answer: "Create your fundraising data room before you start reaching out to investors. Ideally, have it ready 2-4 weeks before your first investor meeting. This gives you time to organize documents, review for completeness, and ensure everything is investor-ready. Having the data room ready from day one lets you respond to investor interest immediately — which is critical in competitive fundraising processes.",
    },
    {
        question: "How is a fundraising data room different from a regular data room?",
        answer: "A fundraising data room is optimized for the startup fundraising workflow: it prioritizes investor engagement analytics (who viewed what and when), per-investor NDA gating, quick setup, and transparent pricing. A general-purpose VDR may focus more on M&A workflows, complex permission structures, and enterprise features. For fundraising, you want a platform that makes it easy to share materials with multiple investors simultaneously while tracking who is most engaged.",
    },
    {
        question: "How much does a startup fundraising data room cost?",
        answer: "SpaceNexus offers transparent flat-rate monthly pricing with no per-page fees, no per-investor charges, and AI features included. Legacy enterprise VDRs can cost tens of thousands per deal with opaque pricing. For startups raising pre-seed through Series A, SpaceNexus provides enterprise-grade security at a fraction of the cost — with the ability to scale up or down month-to-month.",
    },
    {
        question: "Can I use Google Drive as a fundraising data room?",
        answer: "While many startups start with Google Drive, it is not recommended for professional fundraising. Google Drive lacks NDA enforcement, investor engagement analytics, granular permission controls, and the compliance certifications (SOC 2 Type II) that institutional investors expect. Using a dedicated fundraising data room platform signals professionalism and provides the security and analytics that serious investors require.",
    },
    {
        question: "How do I share my fundraising data room with investors?",
        answer: "With SpaceNexus, you invite investors via email — they receive a secure link, accept an NDA if required, and access your data room through a branded portal. You can send individual invites per investor, track who has accepted, and monitor engagement in real time. No attachments, no unsecured links, no confusion about which version of a document an investor is reviewing.",
    },
    {
        question: "What investor analytics should a fundraising data room provide?",
        answer: "A good fundraising data room should show: which investors have accepted their NDA and accessed the room, which documents each investor has viewed and for how long, which sections of your pitch deck got the most attention, how many times investors returned to review materials, and which investors haven't engaged yet (so you can follow up). SpaceNexus provides all of this in real-time dashboards.",
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
        { "@type": "ListItem", position: 2, name: "Startup Fundraising Data Room", item: "https://spacenexus.net/startup-fundraising-data-room" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Startup Fundraising Data Room 2026 — Complete Guide for Founders",
    description: "The complete guide to creating a startup fundraising data room. What to include, how to organize, investor engagement tips, and best practices for pre-seed through Series A.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/startup-fundraising-data-room",
};

export default function StartupFundraisingDataRoomPage() {
    return (
        <>
            <Script id="sfdr-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="sfdr-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="sfdr-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Startup Fundraising Data Room</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                Founder&apos;s Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Startup Fundraising Data Room{" "}
                                <span className="text-[#2563eb]">— The 2026 Founder&apos;s Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                A well-organized fundraising data room can be the difference between a fast close and a stalled process. This guide covers exactly what to include, how to organize it, and which platform to use.
                            </p>
                            <p className="text-sm text-gray-400 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers pre-seed through Series A fundraising
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Create Your Data Room
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <a href="#checklist" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    See the Checklist
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a startup fundraising data room?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                A startup fundraising data room is a secure online repository where founders organize and share confidential documents with potential investors during a fundraising round. It is the digital equivalent of the physical due diligence room — but accessible 24/7 from anywhere, with granular access controls and real-time analytics on investor engagement.
                            </p>
                            <p>
                                For pre-seed through Series A startups, the fundraising data room typically includes the pitch deck, financial statements, cap table, customer data, product documentation, IP records, and legal contracts. A well-organized data room signals professionalism, builds investor confidence, and can significantly accelerate the due diligence process.
                            </p>
                            <p>
                                Modern fundraising data rooms go beyond simple document storage. The best platforms — like SpaceNexus — offer AI-powered document organization, per-investor NDA gating, real-time engagement analytics, and structured Q&amp;A workflows that give founders a decisive edge in competitive fundraising processes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { value: "< 24hrs", label: "Data room setup time" },
                                { value: "AI-Powered", label: "Auto-organization from cloud storage" },
                                { value: "Real-time", label: "Investor engagement analytics" },
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

                {/* Checklist */}
                <section id="checklist" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Checklist</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                What to include in your fundraising data room
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                A complete fundraising data room covers six workstreams. Use this checklist to ensure nothing is missed.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {checklist.map((section) => (
                                <div key={section.category} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                                    <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                                        {section.category}
                                    </h3>
                                    <ul className="space-y-2">
                                        {section.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                                                <svg className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {item}
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
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Platform Features</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Why founders choose SpaceNexus for fundraising
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                SpaceNexus is the fundraising data room built for founders — combining AI-powered organization, investor analytics, and transparent pricing.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {platformFeatures.map((f) => (
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

                {/* Callout */}
                <section className="py-14 bg-[#f8f9fa] border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Built for Fundraising
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Create your fundraising data room in hours, not weeks
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Upload your existing documents — from Google Drive, Dropbox, or your computer — and SpaceNexus AI auto-organizes everything into a professional fundraising data room. Set per-investor NDAs, invite VCs, and track engagement in real time.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "Auto-Organization", desc: "AI sorts your documents" },
                                        { label: "Investor Analytics", desc: "See who viewed what and when" },
                                        { label: "Per-Investor NDAs", desc: "Separate NDAs for each VC" },
                                        { label: "24hr Setup", desc: "No onboarding call needed" },
                                        { label: "Transparent Pricing", desc: "No per-page fees" },
                                        { label: "SOC 2 Type II", desc: "Enterprise security" },
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
                                        Start Free Trial
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
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus startup fundraising data room dashboard" className="w-full h-auto" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about startup fundraising data rooms
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
                            <Link href="/solutions/startup-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">Startup Data Room →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/series-a-fundraising-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">Series A Fundraising →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/investment-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">Investment Data Room →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/best-data-room-for-startups" className="text-sm font-semibold text-[#2563eb] hover:underline">Best Data Room for Startups →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to raise your next round?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Create a professional fundraising data room in under 24 hours. AI-powered organization, investor analytics, transparent pricing.
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
