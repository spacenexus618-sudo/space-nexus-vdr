import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Free DD Templates (CSV) | SpaceNexus",
    description: "8 free due diligence templates in CSV format. M&A checklists, financial workbook, legal, tech, Q&A, risk register.",
    alternates: {
        canonical: "https://spacenexus.net/checklists/templates",
    },
    keywords: [
        "due diligence templates",
        "M&A checklist template",
        "free due diligence checklist",
        "data room template",
        "Series A checklist template",
        "risk register template",
        "Q&A tracker template",
        "CSV checklist",
        "downloadable DD template",
        "M&A workbook",
    ],
    openGraph: {
        title: "Free DD Templates (CSV) | SpaceNexus",
        description:
            "8 free due diligence templates in CSV format. M&A checklists, financial workbook, legal...",
        url: "https://spacenexus.net/checklists/templates",
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
        title: "M&A Buy-Side Due Diligence Request List",
        description:
            "A 120-row request list covering every workstream of a buy-side M&A process — corporate, financial, commercial, tech/IP, HR, and operations. Identifies exactly what to ask the seller for, with required-vs-optional and priority tags.",
        file: "/templates/ma-buy-side-due-diligence-request-list.csv",
        fileSize: "10 KB",
        rowCount: 120,
        sections: ["Corporate & Legal", "Financial", "Commercial", "Technology & IP", "Human Resources", "Operations"],
        bestFor: "Buy-side M&A teams and PE deal teams",
        icon: "📋",
        accent: "blue",
    },
    {
        title: "M&A Sell-Side Data Room Index",
        description:
            "The 133-row folder structure and document list that sellers use to organize a sell-side data room — every document, every folder, with purpose notes. Map directly into your VDR's folder structure on day one.",
        file: "/templates/ma-sell-side-data-room-index.csv",
        fileSize: "14 KB",
        rowCount: 133,
        sections: ["Corporate", "Financial", "Commercial", "Technology & IP", "People & HR", "Legal & Compliance", "Real Estate & Operations", "Management Presentation"],
        bestFor: "Sell-side advisors and corporate development teams",
        icon: "📁",
        accent: "violet",
    },
    {
        title: "Financial Due Diligence Workbook",
        description:
            "134-row financial workbook covering the full P&L, balance sheet, cash flow, working capital, SaaS KPIs, and projections. Use it to standardize the financial information you request from sellers, or to prepare your own financials for sale.",
        file: "/templates/financial-due-diligence-workbook.csv",
        fileSize: "7 KB",
        rowCount: 134,
        sections: ["Income Statement", "Balance Sheet", "Cash Flow", "Working Capital", "KPIs", "Projections"],
        bestFor: "CFOs, controllers, and financial due diligence teams",
        icon: "💰",
        accent: "emerald",
    },
    {
        title: "Legal Due Diligence Checklist",
        description:
            "98-row legal checklist covering corporate records, material contracts, litigation, IP, regulatory compliance, employment, real estate, and insurance. The complete due diligence request list for any legal team.",
        file: "/templates/legal-due-diligence-checklist.csv",
        fileSize: "9 KB",
        rowCount: 98,
        sections: ["Corporate Records", "Material Contracts", "Litigation & Disputes", "Intellectual Property", "Regulatory & Compliance", "Employment & Labor", "Real Estate", "Insurance"],
        bestFor: "In-house counsel, outside law firms, and M&A attorneys",
        icon: "⚖️",
        accent: "blue",
    },
    {
        title: "Technology & Cybersecurity Diligence",
        description:
            "77-row technical and security checklist covering architecture, infrastructure, software development, security controls, compliance certifications, privacy, and engineering team. Built for SaaS, AI, and tech-enabled businesses.",
        file: "/templates/technology-cybersecurity-diligence.csv",
        fileSize: "7 KB",
        rowCount: 77,
        sections: ["Architecture & Infrastructure", "Software Development", "Security & Compliance", "Data Privacy", "Product & Engineering Team"],
        bestFor: "Technical diligence teams, CISOs, and CTOs",
        icon: "🔐",
        accent: "rose",
    },
    {
        title: "Series A Data Room Index",
        description:
            "86-row data room index for early-stage fundraising. Organized by what VCs actually ask for — executive summary, company overview, financials, product, customers, team, and legal. From pre-seed to Series A.",
        file: "/templates/series-a-data-room-index.csv",
        fileSize: "8 KB",
        rowCount: 86,
        sections: ["Executive Summary", "Company Overview", "Financial", "Product & Technology", "Customers & Market", "Team", "Legal & Compliance"],
        bestFor: "Founders raising a Series A and their advisors",
        icon: "🚀",
        accent: "amber",
    },
    {
        title: "Diligence Q&A Tracker",
        description:
            "Pre-built Q&A tracker with 25 sample questions covering every workstream. Track questions by category, owner, due date, priority, and answer status. Replaces chaotic email threads during due diligence.",
        file: "/templates/diligence-qa-tracker.csv",
        fileSize: "4 KB",
        rowCount: 25,
        sections: ["Question ID", "Category", "Asked By", "Assigned To", "Date Asked", "Due Date", "Status", "Priority", "Answer Summary"],
        bestFor: "Deal teams managing high-volume Q&A during due diligence",
        icon: "❓",
        accent: "violet",
    },
    {
        title: "Risk Register",
        description:
            "25-row risk register template with pre-populated M&A diligence risks. Score risks by likelihood and impact, assign owners, and track mitigation status. Use it as a starting point and customize for your deal.",
        file: "/templates/risk-register.csv",
        fileSize: "5 KB",
        rowCount: 25,
        sections: ["Risk ID", "Category", "Likelihood (1-5)", "Impact (1-5)", "Score", "Owner", "Mitigation", "Status", "Review Date"],
        bestFor: "Deal teams tracking diligence findings and post-close risks",
        icon: "⚠️",
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

export default function TemplatesPage() {
    const totalRows = templates.reduce((sum, t) => sum + t.rowCount, 0);

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Free Due Diligence Templates",
        description: "8 downloadable CSV templates for M&A due diligence, fundraising, and deal management.",
        numberOfItems: templates.length,
        itemListElement: templates.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.title,
            description: t.description,
            url: `https://spacenexus.net/checklists/templates#${t.file.split("/").pop()?.replace(".csv", "")}`,
        })),
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Are these due diligence templates really free?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All 8 templates are completely free to download and use. No signup, no email gate, no payment required. Just click download and the CSV opens in Excel, Google Sheets, or Numbers.",
                },
            },
            {
                "@type": "Question",
                name: "What format are the templates in?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "All templates are CSV (Comma-Separated Values) files. They open in Microsoft Excel, Google Sheets, Apple Numbers, and any other spreadsheet application. CSV is the most portable and flexible format for working checklists.",
                },
            },
            {
                "@type": "Question",
                name: "Can I customize the templates for my specific deal?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the templates are designed to be customized. Add or remove rows, change categories, and tailor the scope to your transaction. The columns are structured for easy editing and sorting.",
                },
            },
            {
                "@type": "Question",
                name: "What is the difference between the buy-side and sell-side templates?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The buy-side template is structured around what a buyer asks the seller for during due diligence, organized by workstream. The sell-side template is structured as a data room index — the folder and document structure the seller uses to organize the documents in response to those requests.",
                },
            },
            {
                "@type": "Question",
                name: "How do I use these templates with SpaceNexus?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Upload the templates into your SpaceNexus data room as project tracking documents, or use the sell-side index to plan your folder structure. SpaceNexus also has a built-in Q&A module that replaces the need for the standalone Q&A tracker.",
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
            { "@type": "ListItem", position: 3, name: "Templates", item: "https://spacenexus.net/checklists/templates" },
        ],
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="templates-itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            <Script id="templates-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="cl-tpl-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero */}
            <section className="pt-28 pb-16 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/checklists" className="hover:text-[#2563eb] transition-colors">Checklists</Link>
                        <span>›</span>
                        <span className="text-gray-900">Templates</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">
                        Free Downloads
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Due Diligence Templates
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mb-8">
                        {templates.length} professional-grade due diligence templates in CSV format. Used by investment banks, PE firms, and corporate development teams. Download, customize, and execute.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            100% free
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            No signup required
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            CSV format — Excel, Sheets, Numbers
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {totalRows}+ checklist rows total
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
                                            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
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
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Sections</p>
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

                                    <p className="text-xs text-gray-400 mt-4 italic">
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
                        All templates are CSV files — open them in Excel, Google Sheets, or Numbers. Customize the rows for your transaction, then execute the diligence in a virtual data room.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "1", title: "Download", desc: "Click any download button to get the CSV file. No signup, no email gate, no payment." },
                            { step: "2", title: "Customize", desc: "Open in your spreadsheet app, add or remove rows, and tailor the scope for your specific deal." },
                            { step: "3", title: "Execute", desc: "Use the sell-side index to structure your data room, or the buy-side list to drive your diligence process." },
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

            {/* Cross-link to VDR / Checklists */}
            <section className="py-16 lg:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/checklists/investor-data-room" className="group block bg-white rounded-2xl border-2 border-gray-200 hover:border-[#2563eb] p-7 transition-all duration-200">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Fundraising?</p>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-2">
                                Investor data room templates →
                            </h3>
                            <p className="text-sm text-gray-600">
                                Pre-Seed, Seed, and Series B+ data room indexes plus investor DD question bank, monthly update, cap table, and term sheet comparison.
                            </p>
                        </Link>
                        <Link href="/checklists" className="group block bg-white rounded-2xl border-2 border-gray-200 hover:border-[#2563eb] p-7 transition-all duration-200">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Need the narrative version?</p>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-2">
                                Browse the full checklist library →
                            </h3>
                            <p className="text-sm text-gray-600">
                                Read the comprehensive M&amp;A and Series A checklists online, with explanations for every item.
                            </p>
                        </Link>
                        <Link href="/checklists/due-diligence-checklist" className="group block bg-white rounded-2xl border-2 border-gray-200 hover:border-[#2563eb] p-7 transition-all duration-200">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">The 200+ item guide</p>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-2">
                                Complete Due Diligence Guide →
                            </h3>
                            <p className="text-sm text-gray-600">
                                The most complete due diligence checklist online — 200+ items across every workstream.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Skip the templates — start your data room
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        SpaceNexus comes with built-in due diligence workflows, AI-powered auto-indexing, structured Q&A, and the security infrastructure that deal teams need.
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
        </div>
    );
}
