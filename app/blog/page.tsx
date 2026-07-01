import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { blogPosts } from "./data/posts";

export const metadata: Metadata = {
    title: "SpaceNexus Blog — Virtual Data Room Insights, Legal Security Guides & VDR Tips",
    description:
        "Expert guides on virtual data rooms, M&A due diligence, VDR security, and secure document sharing for law firms, private equity, and investment banking teams.",
    alternates: { canonical: "https://spacenexus.net/blog" },
    keywords: [
        "virtual data room blog",
        "VDR guides",
        "M&A due diligence tips",
        "data room security",
        "secure file sharing legal",
        "virtual data room comparison",
    ],
    openGraph: {
        title: "SpaceNexus Blog — VDR Insights, Security Guides & M&A Tips",
        description:
            "Practical guides on virtual data rooms, due diligence checklists, VDR security, and dealmaking — written by M&A practitioners.",
        url: "https://spacenexus.net/blog",
    },
};

const categoryColors: Record<string, string> = {
    Guides: "bg-blue-50 text-blue-700 border-blue-100",
    "M&A": "bg-violet-50 text-violet-700 border-violet-100",
    "M&A Insights": "bg-violet-50 text-violet-700 border-violet-100",
    "Private Equity": "bg-emerald-50 text-emerald-700 border-emerald-100",
    Security: "bg-rose-50 text-rose-700 border-rose-100",
    "Security & Compliance": "bg-rose-50 text-rose-700 border-rose-100",
    "Startup Fundraising": "bg-amber-50 text-amber-700 border-amber-100",
    "Distressed Debt": "bg-amber-50 text-amber-700 border-amber-100",
};

const topicClusters = [
    {
        label: "All",
        slug: null,
        icon: "📚",
    },
    {
        label: "VDR & Due Diligence",
        slug: "vdr",
        icon: "🔍",
        categories: ["Guides"],
    },
    {
        label: "M&A",
        slug: "ma",
        icon: "🤝",
        categories: ["M&A", "M&A Insights"],
    },
    {
        label: "Security & Compliance",
        slug: "security",
        icon: "🔐",
        categories: ["Security", "Security & Compliance"],
    },
    {
        label: "Private Equity",
        slug: "pe",
        icon: "📊",
        categories: ["Private Equity"],
    },
    {
        label: "Fundraising",
        slug: "fundraising",
        icon: "🚀",
        categories: ["Startup Fundraising"],
    },
];

function PostCard({ post, size = "default" }: { post: (typeof blogPosts)[0]; size?: "featured" | "default" }) {
    const catColor = categoryColors[post.category] || "bg-gray-50 text-gray-600 border-gray-100";

    if (size === "featured") {
        return (
            <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
                <div className="md:flex">
                    <div className="md:w-2/3 p-8 lg:p-10">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${catColor}`}>
                            {post.category}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-3">
                            {post.title}
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{post.description}</p>
                        <div className="flex items-center gap-4">
                            <div
                                className={`w-9 h-9 rounded-full bg-gradient-to-br ${post.author.color} flex items-center justify-center text-white text-xs font-bold`}
                            >
                                {post.author.initials}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
                                <p className="text-xs text-gray-500">
                                    {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {post.readTime}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-12 min-h-[200px]">
                        <svg className="w-20 h-20 text-[#2563eb]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
            <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${catColor}`}>
                {post.category}
            </span>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-2 grow">
                {post.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2 mb-5">
                {post.description}
            </p>
            <div className="flex items-center gap-3 mt-auto">
                <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${post.author.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                    {post.author.initials}
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-900">{post.author.name}</p>
                    <p className="text-xs text-gray-400">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {post.readTime}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default function BlogPage() {
    const [featured, ...rest] = blogPosts;
    const categories = [...new Set(blogPosts.map((p) => p.category))];

    const clusterMap: Record<string, (typeof blogPosts)[0][]> = {};
    for (const cluster of topicClusters) {
        if (!cluster.categories) continue;
        clusterMap[cluster.label] = blogPosts.filter((p) => cluster.categories!.includes(p.category));
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://spacenexus.net/blog" },
        ],
    };

    const blogListSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "SpaceNexus Blog",
        description: "Expert guides on virtual data rooms, M&A due diligence, VDR security, and secure document sharing.",
        url: "https://spacenexus.net/blog",
        mainEntity: {
            "@type": "ItemList",
            itemListElement: blogPosts.map((post, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `https://spacenexus.net/blog/${post.slug}`,
                name: post.title,
            })),
        },
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script
                id="blog-breadcrumb"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="blog-list-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
            />
            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <span className="text-gray-600">Blog</span>
            </nav>

            {/* Hero */}
            <section className="pt-28 pb-16 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">
                        SpaceNexus Blog
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Virtual Data Room Insights &amp; M&amp;A Guides
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Actionable guides on VDR security, due diligence checklists, and dealmaking best practices — written by M&amp;A practitioners.
                    </p>
                </div>
            </section>

            {/* Topic Clusters */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Blog topics" className="flex gap-2 py-4 overflow-x-auto no-scrollbar">
                        {topicClusters.map((cluster) => (
                            <a
                                key={cluster.label}
                                href={cluster.slug ? `#topic-${cluster.slug}` : "#featured"}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 bg-gray-50 text-gray-700 hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all whitespace-nowrap"
                            >
                                <span>{cluster.icon}</span>
                                {cluster.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Featured Post */}
                    <div id="featured" className="mb-16 scroll-mt-24">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            Featured Article
                        </p>
                        <PostCard post={featured} size="featured" />
                    </div>

                    {/* Topic Cluster Sections */}
                    {topicClusters.filter((c) => c.categories).map((cluster) => {
                        const posts = clusterMap[cluster.label];
                        if (!posts || posts.length === 0) return null;
                        return (
                            <div key={cluster.slug} id={`topic-${cluster.slug}`} className="mb-16 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-2xl">{cluster.icon}</span>
                                    <h2 className="text-2xl font-bold text-gray-900">{cluster.label}</h2>
                                    <span className="text-sm text-gray-400 font-medium">({posts.length} {posts.length === 1 ? "article" : "articles"})</span>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {posts.map((post) => (
                                        <PostCard key={post.slug} post={post} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* Internal Links to Related Resources */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-16">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">📌 Related Resources</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Link href="/checklists" className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#2563eb]/30 hover:bg-blue-50/50 transition-all">
                                <span className="text-xl">📋</span>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb]">Due Diligence Checklists</p>
                                    <p className="text-xs text-gray-500">M&amp;A &amp; Series A</p>
                                </div>
                            </Link>
                            <Link href="/glossary" className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#2563eb]/30 hover:bg-blue-50/50 transition-all">
                                <span className="text-xl">📖</span>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb]">M&amp;A Glossary</p>
                                    <p className="text-xs text-gray-500">100+ terms</p>
                                </div>
                            </Link>
                            <Link href="/competitors/vdr-alternatives" className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#2563eb]/30 hover:bg-blue-50/50 transition-all">
                                <span className="text-xl">⚖️</span>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb]">VDR Comparison 2026</p>
                                    <p className="text-xs text-gray-500">6 providers ranked</p>
                                </div>
                            </Link>
                            <Link href="/features/security-compliance" className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#2563eb]/30 hover:bg-blue-50/50 transition-all">
                                <span className="text-xl">🛡️</span>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb]">Security &amp; Compliance</p>
                                    <p className="text-xs text-gray-500">SOC 2, ISO 27001</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        Ready to close your next deal?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Set up your virtual data room in under 24 hours.
                    </p>
                    <Link
                        href="/demo"
                        className="inline-flex items-center px-6 py-3.5 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25"
                    >
                        Talk to Founders →
                    </Link>
                </div>
            </section>
        </div>
    );
}
