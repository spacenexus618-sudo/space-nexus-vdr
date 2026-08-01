import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Data Room Setup Walkthrough — SpaceNexus Video Tutorial | SpaceNexus",
    description: "Step-by-step video tutorial for setting up a SpaceNexus virtual data room. Create the data room, configure folder structure, upload documents, and configure initial permissions.",
    alternates: { canonical: "https://spacenexus.net/tutorials/data-room-setup-walkthrough" },
    keywords: ["SpaceNexus data room setup", "VDR setup tutorial", "data room walkthrough", "VDR configuration video", "create virtual data room", "M&A data room setup"],
    openGraph: {
        title: "Data Room Setup Walkthrough — SpaceNexus Video Tutorial",
        description: "Step-by-step video tutorial for setting up a SpaceNexus virtual data room.",
        url: "https://spacenexus.net/tutorials/data-room-setup-walkthrough",
    },
};

const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Data Room Setup Walkthrough",
    description: "Step-by-step walkthrough of setting up a SpaceNexus virtual data room, from creation to initial document upload and permission configuration.",
    thumbnailUrl: "https://spacenexus.net/tutorials/data-room-setup-walkthrough/thumbnail.png",
    uploadDate: "2026-06-20",
    duration: "PT12M",
    contentUrl: "https://spacenexus.net/tutorials/data-room-setup-walkthrough",
    embedUrl: "https://spacenexus.net/tutorials/data-room-setup-walkthrough",
    publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Tutorials", item: "https://spacenexus.net/tutorials" },
        { "@type": "ListItem", position: 3, name: "Data Room Setup Walkthrough", item: "https://spacenexus.net/tutorials/data-room-setup-walkthrough" },
    ],
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Set Up a Virtual Data Room",
    description: "Step-by-step guide to setting up a SpaceNexus virtual data room, from creation to initial document upload and permission configuration.",
    totalTime: "PT12M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    supply: ["Documents to upload", "User list for permissions"],
    tool: ["SpaceNexus VDR"],
    step: [
        { "@type": "HowToStep", name: "Create a new data room", text: "Click New Data Room, choose the deal type template (M&A, fundraising, legal, real estate), and enter the basic details." },
        { "@type": "HowToStep", name: "Set up folder structure", text: "Apply the 8-folder structure (Corporate, Financial, Commercial, Tech & IP, People & HR, Legal, Real Estate, Management Presentation) and customize for your deal." },
        { "@type": "HowToStep", name: "Upload documents", text: "Drag and drop thousands of files at once. AI auto-indexing categorizes documents into the right folders automatically." },
        { "@type": "HowToStep", name: "Configure permission groups", text: "Create permission tiers for full bidders, shortlisted bidders, counsel, and advisors. Set document-level permissions where needed." },
        { "@type": "HowToStep", name: "Set up NDA and invitations", text: "Set up NDA click-through workflows and customize the email invitation template." },
        { "@type": "HowToStep", name: "Configure Q&A", text: "Configure category routing, response SLAs, and pre-prepared FAQ documents for the most likely buyer questions." },
        { "@type": "HowToStep", name: "Test and launch", text: "Run a test with a mock bidder, verify all workflows, and launch the data room." },
    ],
};

export default function DataRoomSetupWalkthroughPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="tut-setup-video" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <Script id="tut-setup-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="tut-setup-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

            <section className="pt-28 pb-12 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/tutorials" className="hover:text-[#2563eb] transition-colors">Tutorials</Link>
                        <span>›</span>
                        <span className="text-gray-900">Data Room Setup</span>
                    </nav>
                    <div className="flex flex-wrap items-center gap-2 text-xs mb-4">
                        <span className="font-mono bg-blue-50 text-[#2563eb] px-2 py-0.5 rounded">VIDEO TUTORIAL</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600">12 min</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600">Beginner</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Data Room Setup Walkthrough</h1>
                    <p className="text-xl text-gray-600">Set up a new virtual data room from scratch. Folder structure, document upload, AI auto-indexing, and initial permissions configuration.</p>
                </div>
            </section>

            {/* Video player placeholder */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/spacenexus/screenshots/deals.png')] bg-cover bg-center opacity-20"></div>
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <p className="text-white/80 text-sm font-medium">Video tutorial</p>
                            <p className="text-white/60 text-xs mt-1">12 min · SpaceNexus platform walkthrough</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What you&apos;ll learn</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">This tutorial walks through the complete data room setup process from start to finish. By the end, you&apos;ll have a fully configured data room ready for bidders or counterparties.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Creating a new data room and choosing the right template for your deal type</li>
                        <li>Setting up the 8-folder structure that works for every M&amp;A and fundraising deal</li>
                        <li>Bulk uploading documents with drag-and-drop and AI auto-indexing</li>
                        <li>Configuring initial permission groups (full bidder, shortlisted bidder, counsel, advisor)</li>
                        <li>Setting up NDA click-through workflows and email invitations</li>
                        <li>Configuring structured Q&amp;A with category routing</li>
                    </ul>
                </div>
            </section>

            <section className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-step walkthrough</h2>
                    <div className="space-y-6">
                        {[
                            { time: "0:00", title: "Introduction and overview", desc: "What you will build in this tutorial and the key decisions you will make along the way." },
                            { time: "0:45", title: "Creating a new data room", desc: "Click New Data Room, choose the deal type template (M&A, fundraising, legal, real estate), and enter the basic details." },
                            { time: "2:30", title: "Setting up the folder structure", desc: "Apply the 8-folder structure (Corporate, Financial, Commercial, Tech & IP, People & HR, Legal, Real Estate, Management Presentation) and customize for your deal." },
                            { time: "4:15", title: "Bulk document upload", desc: "Drag and drop thousands of files at once. AI auto-indexing categorizes documents into the right folders automatically." },
                            { time: "6:00", title: "Configuring permission groups", desc: "Create permission tiers for full bidders, shortlisted bidders, counsel, and advisors. Set document-level permissions where needed." },
                            { time: "8:30", title: "NDA and email invitations", desc: "Set up NDA click-through workflows and customize the email invitation template." },
                            { time: "10:00", title: "Structured Q&A setup", desc: "Configure category routing, response SLAs, and pre-prepared FAQ documents for the most likely buyer questions." },
                            { time: "11:30", title: "Testing and going live", desc: "Run a test with a mock bidder, verify all workflows, and launch the data room." },
                        ].map((step, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="shrink-0 w-16 text-sm font-mono text-[#2563eb] font-semibold">{step.time}</div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Related tutorials</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/tutorials/managing-bidder-access" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Managing bidder access →</h3>
                            <p className="text-xs text-gray-600 mt-2">Configure tiered bidder permissions for sell-side processes.</p>
                        </Link>
                        <Link href="/tutorials/structured-qa-workflow" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Structured Q&amp;A workflow →</h3>
                            <p className="text-xs text-gray-600 mt-2">Set up routing, SLAs, and pre-prepared FAQs.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">See SpaceNexus live</h2>
                    <p className="text-blue-100 mb-6">Book a personalized demo with our team.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
    );
}
