import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Free Due Diligence Checklists | SpaceNexus",
    description: "Free M&A and Series A due diligence checklists. 40+ M&A items, 25 Series A items, organized by workstream.",
    alternates: {
        canonical: "https://spacenexus.net/checklists",
    },
    openGraph: {
        title: "Free Due Diligence Checklists | SpaceNexus",
        description: "Free M&A and Series A due diligence checklists. 40+ M&A items, 25 Series A items, organ...",
        url: "https://spacenexus.net/checklists",
    },
    keywords: [
        "M&A due diligence checklist",
        "free due diligence checklist",
        "Series A due diligence checklist",
        "startup data room checklist",
        "virtual data room checklist",
        "M&A checklist template",
        "due diligence template free",
    ],
};

const maChecklist = {
    title: "Comprehensive M&A Due Diligence Checklist",
    description: "A 40+ item checklist covering every workstream of a standard M&A\u00a0due diligence process — from legal formation through post-close integration. Used by investment banks, PE firms, and M&A counsel.",
    badge: "M&A Due Diligence",
    badgeColor: "bg-blue-100 text-blue-700",
    accentColor: "border-blue-200",
    ctaColor: "bg-[#2563eb] hover:bg-[#1d4ed8]",
    sections: [
        {
            category: "🏛️ Corporate & Legal",
            items: [
                "Certificate of incorporation and all amendments",
                "Shareholder agreements and cap table",
                "Board and shareholder meeting minutes (last 3 years)",
                "All subsidiary organization documents",
                "Material contracts (top 20 by value)",
                "Change of control provisions in key agreements",
                "Litigation history and pending claims",
                "Regulatory and government filings",
            ],
        },
        {
            category: "💰 Financial",
            items: [
                "Audited financial statements (3 years)",
                "Management accounts (current year, monthly)",
                "Working capital analysis",
                "Cash flow statements and projections",
                "Revenue by customer, product, and geography",
                "Accounts receivable aging schedule",
                "Accounts payable schedule",
                "Debt schedule and credit facilities",
                "Off-balance sheet obligations",
                "Tax returns (3 years) and open tax positions",
            ],
        },
        {
            category: "📋 Commercial",
            items: [
                "Customer concentration analysis (top 10 customers = % of revenue)",
                "Customer contracts — term, renewal, termination rights",
                "Supplier contracts — key dependencies",
                "Pipeline and backlog breakdown",
                "Sales process and go-to-market documentation",
                "NPS or customer satisfaction data",
                "Market size analysis and competitive positioning",
            ],
        },
        {
            category: "💻 Technology & IP",
            items: [
                "Source code repository access (escrow or review)",
                "Technology architecture overview",
                "IP ownership — patents, trademarks, copyrights",
                "IP assignment agreements from founders and employees",
                "Open source license audit",
                "Cybersecurity certifications (SOC 2, ISO 27001)",
                "Data breach history and incident response plan",
                "Privacy policy and GDPR/CCPA compliance",
            ],
        },
        {
            category: "👥 Human Resources",
            items: [
                "Organizational chart and headcount by function",
                "Employment agreements — key executives",
                "Non-compete and non-solicitation agreements",
                "Compensation structure (salary, bonus, equity)",
                "Employee equity plan and vesting schedules",
                "Key person dependencies and retention risk",
                "Benefits plans and pension obligations",
            ],
        },
        {
            category: "🏢 Operations & Real Estate",
            items: [
                "Office and facility lease agreements",
                "Insurance policies (D&O, E&O, cyber, general liability)",
                "Manufacturing or service delivery process documentation",
                "Key vendor relationships and dependencies",
                "Environmental compliance and permits",
            ],
        },
    ],
};

const seriesAChecklist = {
    title: "Startup Series A Fundraising Data Room Checklist",
    description: "A 25-item checklist of what VCs expect in a Series A data room. Organize these materials in Space Nexus and share with investors in a professional, controlled environment.",
    badge: "Series A Fundraising",
    badgeColor: "bg-emerald-100 text-emerald-700",
    accentColor: "border-emerald-200",
    ctaColor: "bg-emerald-600 hover:bg-emerald-700",
    sections: [
        {
            category: "📊 Company Overview",
            items: [
                "Investor pitch deck (latest version)",
                "Executive summary (1-pager)",
                "Company overview memo",
                "Founding story and mission statement",
            ],
        },
        {
            category: "💰 Financials",
            items: [
                "Historical P&L (since founding or last 2 years)",
                "Monthly MRR / ARR chart with annotations",
                "Gross margin by product line",
                "12-month cash flow model",
                "Unit economics (CAC, LTV, payback period)",
                "Cap table — current and post-Series A",
            ],
        },
        {
            category: "⚖️ Legal",
            items: [
                "Certificate of incorporation",
                "Shareholder agreement and investor rights agreements",
                "IP assignment agreements (founders + all early employees)",
                "Key customer contracts",
                "Existing investor SAFEs, convertible notes, or equity rounds",
            ],
        },
        {
            category: "🚀 Product & Technology",
            items: [
                "Product roadmap (12-month)",
                "Technology architecture diagram",
                "Security overview or SOC 2 certification",
                "Key product metrics dashboard",
            ],
        },
        {
            category: "👥 Team",
            items: [
                "Org chart — current and planned",
                "Founder and key hire bios",
                "Advisory board profiles",
                "Key hiring plan for use of proceeds",
            ],
        },
        {
            category: "🌍 Market",
            items: [
                "TAM / SAM / SOM analysis",
                "Competitive landscape overview",
                "Reference customers or LOIs",
            ],
        },
    ],
};

function ChecklistCard({ checklist }: { checklist: typeof maChecklist }) {
    const totalItems = checklist.sections.reduce((sum, s) => sum + s.items.length, 0);

    return (
        <div className={`bg-white rounded-2xl border-2 ${checklist.accentColor} overflow-hidden shadow-sm`}>
            {/* Header */}
            <div className="p-8 pb-6">
                <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${checklist.badgeColor}`}>
                    {checklist.badge}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{checklist.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{checklist.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        {totalItems}+ items
                    </span>
                    <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        {checklist.sections.length} categories
                    </span>
                </div>
            </div>

            {/* Checklist items */}
            <div className="px-8 pb-6 space-y-6">
                {checklist.sections.map((section) => (
                    <div key={section.category}>
                        <h3 className="text-sm font-bold text-gray-900 mb-3">{section.category}</h3>
                        <ul className="space-y-2">
                            {section.items.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="w-4 h-4 rounded border-2 border-gray-300 mt-0.5 shrink-0 flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="px-8 pb-8 pt-2 border-t border-gray-100 mt-2">
                <p className="text-sm text-gray-600 mb-4">
                    Execute this checklist securely inside Space Nexus — track progress, share documents, and manage due diligence Q&A in one platform.
                </p>
                <Link
                    href="/demo"
                    className={`inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-full transition-all duration-200 shadow-lg ${checklist.ctaColor}`}
                >
                    Execute in Space Nexus
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Checklists", item: "https://spacenexus.net/checklists" },
    ],
};

export default function ChecklistsPage() {
    return (
        <main className="pt-20 lg:pt-24">
            <Script
                id="cl-breadcrumb"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <span className="text-gray-600">Checklists</span>
            </nav>
            {/* Hero */}
            <section className="py-14 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                            Free Resources
                        </p>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                            Free Due Diligence{" "}
                            <span className="text-[#2563eb]">Checklists</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Comprehensive, field-tested checklists for M&amp;A due diligence and Series A fundraising. Use them as-is, or execute them directly inside Space Nexus for a fully tracked, auditable process.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                            {[
                                "✓ 40+ item M&A checklist",
                                "✓ 25-item Series A checklist",
                                "✓ Free — no email required",
                                "✓ Organized by workstream",
                            ].map((item) => (
                                <span key={item} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Checklists */}
            <section className="py-14 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                        <ChecklistCard checklist={maChecklist} />
                        <ChecklistCard checklist={seriesAChecklist} />
                    </div>
                </div>
            </section>

            {/* Downloadable Templates CTA */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/checklists/templates"
                        className="group block bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 hover:border-blue-400 p-7 sm:p-9 transition-all duration-200 hover:shadow-lg"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                            <div>
                                <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-2">Free Downloads</p>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-2">
                                    Need editable CSV templates?
                                </h2>
                                <p className="text-gray-600 max-w-2xl">
                                    Download 8 professional-grade due diligence templates — buy-side &amp; sell-side checklists, financial and legal workbooks, tech diligence, Q&amp;A tracker, and risk register. CSV format, opens in Excel or Google Sheets.
                                </p>
                            </div>
                            <div className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#2563eb] text-white text-sm font-semibold rounded-full group-hover:bg-[#1d4ed8] transition-colors">
                                Browse templates
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Why Space Nexus */}
            <section className="py-14 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            From checklist to closed deal — in one platform
                        </h2>
                        <p className="text-gray-600">
                            Most teams manage due diligence across SharePoint, email, and spreadsheets. Space Nexus consolidates everything.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", title: "Organized Document Repository", desc: "Upload all checklist documents. AI Auto-Categorization puts them in the right folder automatically." },
                            { icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Structured Q&A Management", desc: "Track every due diligence question from request through resolution — no email required." },
                            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Tamper-Evident Audit Trail", desc: "Every document access is logged with a timestamp. Audit logs are court-admissible and regulator-ready." },
                        ].map((item) => (
                            <div key={item.title} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related resources */}
            <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related Resources</p>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Due Diligence Checklist 2026 — Complete Guide (200+ Items)", href: "/checklists/due-diligence-checklist", label: "Guide" },
                            { title: "Free DD Templates + Investor Data Room Checklists (CSV)", href: "/checklists/templates", label: "Templates" },
                            { title: "M&A VDR — Virtual Data Room for Mergers", href: "/solutions/mergers-and-acquisitions-vdr", label: "Solution" },
                        ].map((post) => (
                            <Link key={post.href} href={post.href} className="group flex flex-col p-5 border border-gray-200 bg-white rounded-xl hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-200">
                                <span className="text-xs font-semibold text-[#2563eb] mb-2">{post.label}</span>
                                <p className="text-sm font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">{post.title} →</p>
                            </Link>
                        ))}
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
            </section>
        </main>
    );
}
