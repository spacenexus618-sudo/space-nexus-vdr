import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./data/posts";

export const metadata: Metadata = {
    title: "Blog — Space Nexus Virtual Data Room",
    description:
        "Expert insights on M&A due diligence, virtual data rooms, private equity, and dealmaking. Practical guides from the Space Nexus team.",
    alternates: { canonical: "https://spacenexus.net/blog" },
    openGraph: {
        title: "Blog — Space Nexus VDR",
        description:
            "M&A insights, VDR guides, and due diligence best practices from the Space Nexus team.",
        url: "https://spacenexus.net/blog",
    },
};

const categoryColors: Record<string, string> = {
    Guides: "bg-blue-50 text-blue-700 border-blue-100",
    "M&A": "bg-violet-50 text-violet-700 border-violet-100",
    "Private Equity": "bg-emerald-50 text-emerald-700 border-emerald-100",
    Security: "bg-rose-50 text-rose-700 border-rose-100",
    "Startup Fundraising": "bg-amber-50 text-amber-700 border-amber-100",
};

export default function BlogPage() {
    const [featured, ...rest] = blogPosts;

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            {/* Hero */}
            <section className="pt-28 pb-16 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">
                        Blog
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        M&amp;A insights from the deal room
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Practical guides on virtual data rooms, due diligence, and dealmaking — written by practitioners.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Featured Post */}
                    <div className="mb-12">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            Featured Article
                        </p>
                        <Link
                            href={`/blog/${featured.slug}`}
                            className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="md:flex">
                                <div className="md:w-2/3 p-8 lg:p-10">
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${categoryColors[featured.category] || "bg-gray-50 text-gray-600 border-gray-100"
                                            }`}
                                    >
                                        {featured.category}
                                    </span>
                                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-3">
                                        {featured.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{featured.description}</p>
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-9 h-9 rounded-full bg-gradient-to-br ${featured.author.color} flex items-center justify-center text-white text-xs font-bold`}
                                        >
                                            {featured.author.initials}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{featured.author.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                                                    month: "long",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}{" "}
                                                · {featured.readTime}
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
                    </div>

                    {/* Post Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {rest.map((post) => {
                            const catColor = categoryColors[post.category] || "bg-gray-50 text-gray-600 border-gray-100";
                            return (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${catColor}`}>
                                        {post.category}
                                    </span>
                                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-2 grow">
                                        {post.title}
                                    </h2>
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
                                                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}{" "}
                                                · {post.readTime}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
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
