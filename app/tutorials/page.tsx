import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "SpaceNexus Video Tutorials — Platform Feature Walkthroughs | SpaceNexus",
    description: "Step-by-step video tutorials for SpaceNexus VDR features. Data room setup, bidder access management, Q&A workflows, watermarking, engagement analytics, and security configuration.",
    alternates: { canonical: "https://spacenexus.net/tutorials" },
    keywords: ["VDR video tutorials", "SpaceNexus tutorials", "data room tutorial", "VDR feature walkthrough", "M&A data room training", "VDR platform demo"],
    openGraph: {
        title: "SpaceNexus Video Tutorials — Platform Feature Walkthroughs",
        description: "Step-by-step video tutorials for SpaceNexus VDR features.",
        url: "https://spacenexus.net/tutorials",
    },
};

const tutorials = [
    {
        title: "Data Room Setup Walkthrough",
        description: "Set up a new virtual data room from scratch. Folder structure, document upload, AI auto-indexing, and initial permissions configuration.",
        duration: "12 min",
        slug: "data-room-setup-walkthrough",
        level: "Beginner",
        icon: "🚀",
    },
    {
        title: "Managing Bidder Access",
        description: "Configure tiered bidder permissions for sell-side M&A processes. Initial bidders, shortlisted bidders, and final-round access management.",
        duration: "10 min",
        slug: "managing-bidder-access",
        level: "Intermediate",
        icon: "👥",
    },
    {
        title: "Structured Q&A Workflow",
        description: "Set up and manage the structured Q&A workflow. Routing rules, SLAs, escalation paths, and pre-prepared FAQ strategies.",
        duration: "15 min",
        slug: "structured-qa-workflow",
        level: "Intermediate",
        icon: "❓",
    },
    {
        title: "Dynamic Watermarking Setup",
        description: "Configure dynamic watermarks with viewer identity, IP, and timestamp. Best practices for document protection in M&A and legal workflows.",
        duration: "8 min",
        slug: "dynamic-watermarking-setup",
        level: "Beginner",
        icon: "💧",
    },
    {
        title: "Engagement Analytics for Sell-Side",
        description: "Use engagement analytics to identify the most serious bidders. Read heatmaps, time-on-document metrics, and bidder comparison dashboards.",
        duration: "11 min",
        slug: "engagement-analytics",
        level: "Intermediate",
        icon: "📊",
    },
    {
        title: "Permission Management Deep Dive",
        description: "Master granular permission controls. Per-user, per-group, per-folder, and per-document permissions. Time-limited and IP-restricted access.",
        duration: "14 min",
        slug: "permission-management",
        level: "Advanced",
        icon: "🔐",
    },
    {
        title: "Audit Log Export and Compliance",
        description: "Export immutable audit logs for court-admissible evidence, regulatory inquiries, and internal compliance reviews.",
        duration: "9 min",
        slug: "audit-log-export",
        level: "Intermediate",
        icon: "📋",
    },
    {
        title: "SSO and MFA Configuration",
        description: "Configure single sign-on with Okta, Azure AD, or Google Workspace. Enable phishing-resistant MFA for enterprise security.",
        duration: "13 min",
        slug: "sso-and-mfa-configuration",
        level: "Advanced",
        icon: "🔑",
    },
];

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SpaceNexus Video Tutorials",
    description: "Step-by-step video tutorials for SpaceNexus VDR features.",
    numberOfItems: tutorials.length,
    itemListElement: tutorials.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.title,
        description: t.description,
        url: `https://spacenexus.net/tutorials/${t.slug}`,
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Tutorials", item: "https://spacenexus.net/tutorials" },
    ],
};

export default function TutorialsIndexPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="tutorials-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            <Script id="tutorials-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-gray-900">Tutorials</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Video Library</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">SpaceNexus Video Tutorials</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">Step-by-step video tutorials for SpaceNexus VDR features. From initial data room setup to advanced security configuration — learn the platform through hands-on walkthroughs.</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <a href="https://youtu.be/Y-26yBbAINA?si=y_tWtiLTRk7u2hIV" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#2563eb] hover:shadow-lg transition-all">
                            <div className="aspect-video relative">
                                <img src="/spacenexus/tutorials/vdr-walkthrough-thumbnail.jpg" alt="SpaceNexus Enterprise Data Room" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">SpaceNexus Enterprise Data Room (VDR) — Complete Product Walkthrough</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Watch the complete product walkthrough covering our secure document collaboration platform for M&amp;A, fundraising, and legal transactions.</p>
                            </div>
                        </a>
                        <a href="https://youtube.com/shorts/ZjQ9C1KNjB4?si=pNuRta-_MM5bhf25" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#2563eb] hover:shadow-lg transition-all">
                            <div className="aspect-video relative">
                                <img src="/spacenexus/tutorials/vdr-short-thumbnail.jpg" alt="Space AI Tutorial" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">Secure Your Documents with SpaceNexus VDR</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">A comprehensive tutorial on Forms, Files, and User Management functionalities within SpaceNexus.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related Resources</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue learning</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/demo" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Demo</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Request a personalized demo →</h3>
                            <p className="text-xs text-gray-600 mt-2">See SpaceNexus in action with your deal scenario.</p>
                        </Link>
                        <Link href="/features" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Features</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Browse all features →</h3>
                            <p className="text-xs text-gray-600 mt-2">Complete feature catalog.</p>
                        </Link>
                        <Link href="/blog/ma-due-diligence-checklist-2026" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Guide</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">14-day prep checklist →</h3>
                            <p className="text-xs text-gray-600 mt-2">Practical launch timeline.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to see it live?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Book a personalized demo and see how SpaceNexus handles your specific deal scenario.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
    );
}
