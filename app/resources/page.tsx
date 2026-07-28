import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Resources — Guides, Templates & Industry Research | SpaceNexus",
    description: "Free resources for M&A, due diligence, and VDR professionals. Downloadable templates, industry guides, SEO playbooks, and knowledge hub content.",
    alternates: { canonical: "https://spacenexus.net/resources" },
    keywords: [
        "VDR resources", "due diligence guides", "M&A templates", "NPL guide",
        "data room knowledge hub", "VDR playbook", "industry research",
    ],
    openGraph: {
        title: "Resources — Guides, Templates & Industry Research | SpaceNexus",
        description: "Free resources for M&A, due diligence, and VDR professionals.",
        url: "https://spacenexus.net/resources",
    },
};

const categories = [
    {
        title: "Industry Guides",
        description: "In-depth guides covering specific deal types and due diligence processes.",
        resources: [
            {
                title: "NPL Due Diligence Guide",
                description: "The complete playbook for non-performing loan portfolio due diligence — loan-level data, collateral valuation, legal review, and pricing.",
                href: "/resources/npl-guide",
                tag: "Guide",
                icon: "📋",
            },
        ],
    },
    {
        title: "SEO & Content Strategy",
        description: "Internal playbooks for SpaceNexus content marketing and search visibility.",
        resources: [
            {
                title: "VDR Backlink Outreach Strategy",
                description: "Target publication list, email templates, linkable asset ideas, and measurement framework for building domain authority.",
                href: "/resources/backlink-strategy",
                tag: "Playbook",
                icon: "🔗",
            },
            {
                title: "VDR Keyword Tracking & Content Updates",
                description: "Keyword tracking methodology, target keyword list, and quarterly content update process for VDR search terms.",
                href: "/resources/keyword-tracking",
                tag: "Playbook",
                icon: "📊",
            },
        ],
    },
    {
        title: "Template Downloads",
        description: "Free, ready-to-use templates for due diligence and deal management.",
        resources: [
            {
                title: "Due Diligence Templates (CSV)",
                description: "8 free CSV templates for M&A buy-side, sell-side, financials, legal, tech, and risk register.",
                href: "/checklists/templates",
                tag: "Templates",
                icon: "📁",
            },
            {
                title: "NPL Due Diligence Checklist (CSV)",
                description: "50-item CSV template covering loan-level data, collateral, borrower info, legal status, and portfolio metrics.",
                href: "/templates/npl-due-diligence-checklist.csv",
                tag: "Download",
                icon: "⬇️",
            },
        ],
    },
];

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SpaceNexus Resources",
    description: "Free resources for M&A, due diligence, and VDR professionals.",
    numberOfItems: categories.reduce((sum, c) => sum + c.resources.length, 0),
    itemListElement: categories.flatMap((cat, ci) =>
        cat.resources.map((r, ri) => ({
            "@type": "ListItem",
            position: ci * 10 + ri + 1,
            name: r.title,
            description: r.description,
            url: `https://spacenexus.net${r.href}`,
        }))
    ),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://spacenexus.net/resources" },
    ],
};

export default function ResourcesIndexPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="resources-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            <Script id="resources-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-gray-900">Resources</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Knowledge Hub</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Resources</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">Free guides, downloadable templates, and industry research for M&A, due diligence, and VDR professionals. Use these resources to run better deals, faster.</p>
                </div>
            </section>

            {categories.map((cat, ci) => (
                <section key={ci} className="py-12 lg:py-16">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-2">{cat.title}</p>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{cat.title}</h2>
                        <p className="text-sm text-gray-600 mb-8">{cat.description}</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {cat.resources.map((r, ri) => (
                                <Link
                                    key={ri}
                                    href={r.href}
                                    className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#2563eb] hover:shadow-lg transition-all"
                                >
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                                            {r.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider">{r.tag}</span>
                                                {r.href.endsWith('.csv') && (
                                                    <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded font-medium">CSV</span>
                                                )}
                                            </div>
                                            <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">{r.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{r.description}</p>
                                    <p className="text-sm font-semibold text-[#2563eb] mt-4 group-hover:underline">
                                        {r.href.endsWith('.csv') ? 'Download →' : 'Read guide →'}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <section className="py-14 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">More Learning</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore more content</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/blog" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Blog</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Read our blog →</h3>
                            <p className="text-xs text-gray-600 mt-2">M&A insights, industry trends, and guides.</p>
                        </Link>
                        <Link href="/tutorials" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Tutorials</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Watch tutorials →</h3>
                            <p className="text-xs text-gray-600 mt-2">Step-by-step platform walkthroughs.</p>
                        </Link>
                        <Link href="/checklists" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Checklists</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Browse checklists →</h3>
                            <p className="text-xs text-gray-600 mt-2">Due diligence checklists and templates.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need a tailored solution?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Every deal is different. Book a demo and see how SpaceNexus adapts to your specific requirements.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
