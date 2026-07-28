import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Investor Data Room Checklist — Free Templates 2026 | SpaceNexus",
    description: "Free investor data room checklist and templates for every fundraising stage. Pre-Seed, Seed, Series B+ indexes, DD questions, cap table templates, and more.",
    alternates: {
        canonical: "https://spacenexus.net/checklists/investor-data-room",
    },
    keywords: [
        "investor data room checklist",
        "investor data room",
        "fundraising data room checklist",
        "pre-seed data room",
        "seed data room checklist",
        "Series B data room",
        "investor due diligence checklist",
        "Series A data room index",
        "free investor data room template",
        "fundraising checklist",
    ],
    openGraph: {
        title: "Investor Data Room Checklist — Free Templates 2026 | SpaceNexus",
        description:
            "Free investor data room checklist and templates for every fundraising stage. Pre-Seed, Seed, Series B+ indexes, DD questions, cap table templates.",
        url: "https://spacenexus.net/checklists/investor-data-room",
        type: "website",
    },
};

interface Template {
    title: string;
    description: string;
    file: string;
    fileSize: string;
    rowCount: number;
    sections: string[];
    bestFor: string;
    icon: string;
    accent: "blue" | "violet" | "emerald" | "rose" | "amber";
}

const templates: Template[] = [
    {
        title: "Pre-Seed Data Room Checklist",
        description:
            "A 64-row minimum-viable data room for pre-seed raises. Cover the essentials — pitch, company formation, product, market, financials, and team — without overbuilding for a small round.",
        file: "/templates/preseed-data-room-checklist.csv",
        fileSize: "6 KB",
        rowCount: 64,
        sections: ["Executive Summary", "Company & Formation", "Product & Technology", "Market & Customers", "Financials", "Team", "Legal & Compliance"],
        bestFor: "Pre-seed founders raising their first institutional capital",
        icon: "🌱",
        accent: "emerald",
    },
    {
        title: "Seed Round Data Room Index",
        description:
            "A 91-row data room index for seed-stage raises. Comprehensive enough to handle sophisticated seed investors while staying focused on what matters at this stage.",
        file: "/templates/seed-data-room-index.csv",
        fileSize: "9 KB",
        rowCount: 91,
        sections: ["Executive Summary", "Company & Formation", "Financial", "Product & Technology", "Customers & Market", "Team", "Legal & Compliance"],
        bestFor: "Seed-stage founders preparing for institutional diligence",
        icon: "🌿",
        accent: "emerald",
    },
    {
        title: "Series B+ Data Room Index",
        description:
            "A 120-row data room for growth-stage raises. Covers audited financials, detailed commercial metrics, full legal and HR diligence, security and compliance — everything growth investors expect.",
        file: "/templates/series-b-data-room-index.csv",
        fileSize: "12 KB",
        rowCount: 120,
        sections: ["Executive Summary", "Corporate & Legal", "Financial", "Commercial", "Product & Technology", "People & HR", "Operations", "Management Presentation"],
        bestFor: "Series B+ founders managing sophisticated institutional diligence",
        icon: "📈",
        accent: "blue",
    },
    {
        title: "Investor DD Question Bank",
        description:
            "79 questions across 10 categories that investors ask during due diligence. Pre-empt the questions by putting the answers in your data room before they ask.",
        file: "/templates/investor-dd-question-bank.csv",
        fileSize: "9 KB",
        rowCount: 79,
        sections: ["Team & Founders", "Market & Timing", "Product & Technology", "Traction & Metrics", "Customers & Sales", "Financials & Projections", "Competition & Moat", "Security & Compliance", "Legal & Governance", "Exit & Returns"],
        bestFor: "Founders who want to pre-empt investor questions and move faster",
        icon: "❓",
        accent: "violet",
    },
    {
        title: "Monthly Investor Update Template",
        description:
            "47 metrics and prompts to populate your monthly investor update. Tracks headline KPIs, sales pipeline, product metrics, hiring, and asks. Send the same update to all investors on the same schedule.",
        file: "/templates/monthly-investor-update-template.csv",
        fileSize: "5 KB",
        rowCount: 47,
        sections: ["Headline KPIs", "Sales & Pipeline", "Product & Engineering", "Team & Hiring", "Highlights", "Lowlights", "Asks & Help Needed", "Outlook"],
        bestFor: "Founders running a disciplined investor communications cadence",
        icon: "📬",
        accent: "blue",
    },
    {
        title: "Cap Table Reconciliation Template",
        description:
            "A 34-row cap table template for reconciling founder shares, option pool, prior rounds, SAFEs, convertibles, and warrants. Includes the formulas and totals investors expect to see.",
        file: "/templates/cap-table-reconciliation-template.csv",
        fileSize: "4 KB",
        rowCount: 34,
        sections: ["Founders", "Option Pool", "Issued Options", "Advisors", "Pre-Seed Investors", "Seed Investors", "Strategic Investors", "Warrants & Convertibles", "Totals & Reconciliation"],
        bestFor: "Founders preparing cap tables for due diligence or new rounds",
        icon: "🧮",
        accent: "amber",
    },
    {
        title: "Term Sheet Comparison Template",
        description:
            "44-row template for comparing term sheets side-by-side. Every economic term, control term, investor right, founder term, and closing provision — compare up to 4 term sheets at once.",
        file: "/templates/term-sheet-comparison-template.csv",
        fileSize: "5 KB",
        rowCount: 44,
        sections: ["Economic Terms", "Control Terms", "Investor Rights", "Founder Terms", "Anti-Dilution", "Conversion & Redemption", "Closing Terms", "Other"],
        bestFor: "Founders evaluating and negotiating term sheets from multiple investors",
        icon: "📜",
        accent: "violet",
    },
    {
        title: "Fundraising Pipeline Tracker",
        description:
            "39-row pipeline tracker organized by tier and stage. Track investor outreach, meetings, diligence status, term sheet stage, and closed commitments. Pre-categorized by fund type.",
        file: "/templates/fundraising-pipeline-tracker.csv",
        fileSize: "5 KB",
        rowCount: 39,
        sections: ["Tier 1: Top Priority", "Tier 2: High Fit", "Tier 3: Sector Specialists", "Tier 4: Strategic / Corporate", "Tier 5: Angels", "Meetings Scheduled", "In Diligence", "Term Sheet Stage", "Closed / Committed", "Passed / No Response"],
        bestFor: "Founders running a structured fundraising process across multiple investor tiers",
        icon: "🎯",
        accent: "rose",
    },
];

const accentClasses: Record<Template["accent"], { border: string; badge: string; iconBg: string; iconText: string }> = {
    blue: { border: "border-blue-200 hover:border-blue-400", badge: "bg-blue-50 text-blue-700", iconBg: "bg-blue-50", iconText: "text-blue-600" },
    violet: { border: "border-violet-200 hover:border-violet-400", badge: "bg-violet-50 text-violet-700", iconBg: "bg-violet-50", iconText: "text-violet-600" },
    emerald: { border: "border-emerald-200 hover:border-emerald-400", badge: "bg-emerald-50 text-emerald-700", iconBg: "bg-emerald-50", iconText: "text-emerald-600" },
    rose: { border: "border-rose-200 hover:border-rose-400", badge: "bg-rose-50 text-rose-700", iconBg: "bg-rose-50", iconText: "text-rose-600" },
    amber: { border: "border-amber-200 hover:border-amber-400", badge: "bg-amber-50 text-amber-700", iconBg: "bg-amber-50", iconText: "text-amber-600" },
};

export default function InvestorDataRoomPage() {
    const totalRows = templates.reduce((sum, t) => sum + t.rowCount, 0);

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Investor Data Room Checklist",
        description: "Free downloadable CSV templates for fundraising data rooms at every stage.",
        numberOfItems: templates.length,
        itemListElement: templates.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.title,
            description: t.description,
            url: `https://spacenexus.net/checklists/investor-data-room#${t.file.split("/").pop()?.replace(".csv", "")}`,
        })),
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is an investor data room checklist?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "An investor data room is a secure, organized repository of company documents shared with prospective investors during a fundraising round. It typically includes pitch materials, financials, cap table, product information, customer evidence, team bios, and legal documents. A well-organized data room signals professionalism and accelerates diligence.",
                },
            },
            {
                "@type": "Question",
                name: "When should I set up an investor data room?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You should set up an investor data room 2-3 months before you plan to start formal investor conversations. Having a ready data room demonstrates founder preparedness and lets you move quickly when an investor says 'send me more' — which is the moment many fundraising momentum is lost.",
                },
            },
            {
                "@type": "Question",
                name: "What is the difference between pre-seed, seed, and Series B+ data rooms?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pre-seed data rooms are minimum-viable — covering the essentials without overbuilding. Seed data rooms add audited financials, customer evidence, and full team information. Series B+ data rooms include detailed commercial metrics, security and compliance documentation, HR and equity details, and full legal and regulatory materials expected by institutional investors.",
                },
            },
            {
                "@type": "Question",
                name: "Can I use these templates with SpaceNexus?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Upload the templates as project tracking documents in your SpaceNexus data room, or use the data room indexes to plan your folder structure. SpaceNexus also includes AI-powered auto-indexing, investor engagement analytics, NDA workflows, and structured Q&A — all the tools you need to run a professional fundraise.",
                },
            },
            {
                "@type": "Question",
                name: "Are these templates really free?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All 8 investor data room templates are completely free to download and use. No signup, no email gate, no payment required. Just click download and the CSV opens in Excel, Google Sheets, or Numbers.",
                },
            },
        ],
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
            { "@type": "ListItem", position: 2, name: "Checklists", item: "https://spacenexus.net/checklists" },
            { "@type": "ListItem", position: 3, name: "Investor Data Room Checklist", item: "https://spacenexus.net/checklists/investor-data-room" },
        ],
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="investor-templates-itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            <Script id="investor-templates-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="cl-ird-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero */}
            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/checklists" className="hover:text-[#2563eb] transition-colors">Checklists</Link>
                        <span>›</span>
                        <span className="text-gray-900">Investor Data Room</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">
                        Free Downloads
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Investor Data Room Checklist
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mb-8">
                        A complete investor data room checklist with {templates.length} free, professional-grade templates for fundraising data rooms at every stage — from pre-seed to Series B+. Plus the investor DD question bank, monthly update template, cap table, term sheet comparison, and pipeline tracker.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            100% free
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            No signup required
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            CSV — Excel, Sheets, Numbers
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {totalRows}+ checklist rows
                        </span>
                    </div>
                </div>
            </section>

            {/* Templates Grid */}
            <section className="py-16 lg:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        {templates.map((t) => {
                            const accent = accentClasses[t.accent];
                            const slug = t.file.split("/").pop()?.replace(".csv", "") || "";
                            return (
                                <article
                                    key={t.file}
                                    id={slug}
                                    className={`bg-white rounded-2xl border-2 ${accent.border} p-7 transition-all duration-200 hover:shadow-lg flex flex-col`}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`shrink-0 w-12 h-12 rounded-xl ${accent.iconBg} flex items-center justify-center text-2xl`}>
                                            {t.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h2 className="text-lg font-bold text-gray-900 leading-snug mb-1.5">
                                                {t.title}
                                            </h2>
                                            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
                                                <span className="font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded">CSV</span>
                                                <span>·</span>
                                                <span>{t.fileSize}</span>
                                                <span>·</span>
                                                <span>{t.rowCount} rows</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{t.description}</p>

                                    <div className="mb-5">
                                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Sections</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {t.sections.map((s) => (
                                                <span key={s} className={`text-xs font-medium px-2 py-0.5 rounded-full ${accent.badge}`}>
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-5 border-t border-gray-100">
                                        <a
                                            href={t.file}
                                            download
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold rounded-full transition-colors shadow-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Download CSV
                                        </a>
                                        <a
                                            href={t.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 hover:text-[#2563eb] rounded-full transition-colors"
                                        >
                                            Preview
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>

                                    <p className="text-xs text-gray-600 mt-4 italic">
                                        Best for: {t.bestFor}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How to use */}
            <section className="py-16 lg:py-20 bg-white border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">How to use these templates</h2>
                    <p className="text-gray-600 mb-12 max-w-2xl">
                        Pick the data room index for your stage, customize it for your company, and use it as the folder structure inside SpaceNexus.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "1", title: "Pick your stage", desc: "Pre-Seed, Seed, or Series B+ — choose the data room index that matches the size and sophistication of your round." },
                            { step: "2", title: "Customize", desc: "Add or remove rows, tailor the scope for your company, and translate into a SpaceNexus folder structure on day one." },
                            { step: "3", title: "Pre-empt diligence", desc: "Use the Investor DD Question Bank to anticipate every question and pre-load the answers into your data room." },
                        ].map((s) => (
                            <div key={s.step} className="text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#2563eb] text-white font-bold mb-4">
                                    {s.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stage guidance */}
            <section className="py-16 lg:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Which data room do you need?</h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
                        Different stages of fundraising require different depths of documentation. Match the data room to your round.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { stage: "Pre-Seed", size: "64 rows", desc: "Minimum viable data room. Covers pitch, formation, product, market, and team. Used by first-time founders raising their first institutional capital.", icon: "🌱", accent: "emerald" },
                            { stage: "Seed", size: "91 rows", desc: "Comprehensive enough for sophisticated seed investors. Adds audited financials, customer evidence, and full team and legal details.", icon: "🌿", accent: "emerald" },
                            { stage: "Series B+", size: "120 rows", desc: "Institutional-grade data room. Detailed commercial metrics, security and compliance documentation, full HR and equity details, regulatory materials.", icon: "📈", accent: "blue" },
                        ].map((s) => {
                            const accent = accentClasses[s.accent as Template["accent"]];
                            return (
                                <div key={s.stage} className={`bg-white rounded-2xl border-2 ${accent.border} p-6 transition-all duration-200`}>
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${accent.iconBg} text-2xl mb-4`}>
                                        {s.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{s.stage}</h3>
                                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-4">{s.size}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Cross-link to related pages */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/checklists/templates" className="group block bg-white rounded-2xl border-2 border-gray-200 hover:border-[#2563eb] p-6 transition-all duration-200">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">M&A Templates</p>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-2">
                                M&A due diligence templates →
                            </h3>
                            <p className="text-sm text-gray-600">
                                Buy-side and sell-side checklists, financial and legal workbooks, tech diligence, Q&amp;A tracker, and risk register.
                            </p>
                        </Link>
                        <Link href="/checklists" className="group block bg-white rounded-2xl border-2 border-gray-200 hover:border-[#2563eb] p-6 transition-all duration-200">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Narrative Version</p>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-2">
                                Read the full checklist library →
                            </h3>
                            <p className="text-sm text-gray-600">
                                Comprehensive M&amp;A and Series A checklists with explanations for every item.
                            </p>
                        </Link>
                        <Link href="/solutions/series-a-fundraising-data-room" className="group block bg-white rounded-2xl border-2 border-gray-200 hover:border-[#2563eb] p-6 transition-all duration-200">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Solution</p>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-2">
                                Series A data room on SpaceNexus →
                            </h3>
                            <p className="text-sm text-gray-600">
                                AI auto-indexing, investor engagement analytics, NDA workflows, and structured Q&amp;A.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Skip the templates — set up your investor data room
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        SpaceNexus comes with built-in fundraising workflows, AI-powered auto-indexing, investor engagement analytics, NDA workflows, and the security infrastructure that institutional investors expect.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/demo"
                            className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors"
                        >
                            Request a demo →
                        </Link>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center px-8 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            See pricing
                        </Link>
                    </div>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
