import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Case Studies — Client Success Stories | SpaceNexus",
    description: "Real-world case studies from SpaceNexus clients. Startup fundraising, M&A transactions, and enterprise deal success stories — with metrics and outcomes.",
    alternates: { canonical: "https://spacenexus.net/case-studies" },
    keywords: [
        "SpaceNexus case studies", "VDR success stories", "data room case study",
        "M&A case study", "fundraising case study", "client success",
    ],
    openGraph: {
        title: "Case Studies — Client Success Stories | SpaceNexus",
        description: "Real-world case studies from SpaceNexus clients. Startup fundraising, M&A transactions, and enterprise deal success stories.",
        url: "https://spacenexus.net/case-studies",
    },
};

const categories = [
    {
        title: "Startup Fundraising",
        description: "How startups from pre-seed to Series C used SpaceNexus to raise capital with confidence.",
        tag: "Fundraising",
        href: "/case-studies/startup-fundraising",
        icon: "🚀",
        stat: "6 rounds",
        highlights: [
            "Pre-seed through Series C rounds",
            "Stealth-mode AI company case study",
            "Investor engagement analytics in action",
        ],
    },
    {
        title: "M&A Transactions",
        description: "How deal teams ran sell-side and buy-side M&A processes with secure data rooms.",
        tag: "M&A",
        href: "/ma-case-studies",
        icon: "🤝",
        stat: "6 deals",
        highlights: [
            "Enterprise SaaS to Real Estate deals",
            "Cross-border transaction workflows",
            "Bidder management and Q&A at scale",
        ],
    },
];

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SpaceNexus Case Studies",
    description: "Real-world client success stories across startup fundraising and M&A transactions.",
    numberOfItems: categories.length,
    itemListElement: categories.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.title,
        description: c.description,
        url: `https://spacenexus.net${c.href}`,
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://spacenexus.net/case-studies" },
    ],
};

export default function CaseStudiesIndexPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="case-studies-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            <Script id="case-studies-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-gray-900">Case Studies</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Client Success</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Case Studies</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">Real-world results from SpaceNexus clients. See how deal teams across startup fundraising and M&A transactions use our platform to close faster, stay organized, and impress their counterparties.</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {categories.map((cat, i) => (
                            <Link
                                key={i}
                                href={cat.href}
                                className="group block bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#2563eb] hover:shadow-lg transition-all"
                            >
                                <div className="flex items-start gap-4 mb-5">
                                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl">
                                        {cat.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider">{cat.tag}</span>
                                        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mt-1">{cat.title}</h2>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">{cat.description}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                                    <span className="font-semibold text-[#2563eb]">{cat.stat}</span>
                                    <span>·</span>
                                    <span>Read full stories →</span>
                                </div>
                                <ul className="space-y-1.5">
                                    {cat.highlights.map((h, j) => (
                                        <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                                            <span className="text-[#2563eb] shrink-0 mt-0.5">✓</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">More Resources</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore related content</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/resources" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Resources</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Browse resources →</h3>
                            <p className="text-xs text-gray-500 mt-2">Guides, templates, and industry research.</p>
                        </Link>
                        <Link href="/blog" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Blog</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Read our blog →</h3>
                            <p className="text-xs text-gray-500 mt-2">M&A insights and industry trends.</p>
                        </Link>
                        <Link href="/demo" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Demo</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Request a demo →</h3>
                            <p className="text-xs text-gray-500 mt-2">See SpaceNexus in action.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want to be our next success story?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join hundreds of deal teams using SpaceNexus to close faster. Set up your data room in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
