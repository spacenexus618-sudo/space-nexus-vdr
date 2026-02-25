"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        image: "/spacenexus/screenshots/vdr-dashboard.png",
        headline: "Deal Command Center",
        description:
            "Every live deal in one view. Track active deals, document counts, open Q&As, and buyer activity — with AI-powered features like redaction and auto-categorization running in the background.",
        features: [
            "Real-time deal pipeline across stages",
            "AI Redaction & Auto-Categorization — always active",
            "One-click access to Data Room, Q&A, and Reports",
            "Live user activity feed",
        ],
        badge: "bg-blue-100 text-blue-700",
        color: "from-blue-500 to-blue-700",
        href: "/features",
    },
    {
        id: "deals",
        label: "Deals",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        image: "/spacenexus/screenshots/vdr-deals.png",
        headline: "Deals Management",
        description:
            "Track every transaction from discovery to close. See combined deal value, stage progression, and per-deal document counts at a glance. Filter by stage — Due Diligence, Negotiation, Closed.",
        features: [
            "$450M+ in deals tracked across all stages",
            "Per-deal document import and management",
            "Deal stage pipeline with one-click filters",
            "Quick 'Create Deal' for instant deal room setup",
        ],
        badge: "bg-purple-100 text-purple-700",
        color: "from-purple-500 to-purple-700",
        href: "/industries/investment-banking",
    },
    {
        id: "qa",
        label: "Q&A",
        icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        image: "/spacenexus/screenshots/vdr-qa.png",
        headline: "Due Diligence Q&A",
        description:
            "Structured Q&A workflow for buy-side and sell-side teams. Questions are tagged by category (Finance, Technical), urgency, and status — with direct assignment to responsible parties.",
        features: [
            "Categorized questions by Finance, Legal, Technical",
            "Urgent flag with visual priority indicators",
            "Direct assignment to deal team members",
            "Answered / Open / Urgent status tracking",
        ],
        badge: "bg-orange-100 text-orange-700",
        color: "from-orange-500 to-orange-700",
        href: "/features",
    },
    {
        id: "analytics",
        label: "Analytics",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        image: "/spacenexus/screenshots/vdr-analytics.png",
        headline: "Buyer Intelligence",
        description:
            "Know exactly who is reading what and for how long. Buyer engagement scores, document view heatmaps, and per-party analytics give your deal team a decisive negotiation advantage.",
        features: [
            "Per-buyer engagement scores (Acme Corp 85%)",
            "Most-viewed document rankings",
            "Unique viewers, downloads, avg. time spent",
            "Export full reports for deal team briefings",
        ],
        badge: "bg-green-100 text-green-700",
        color: "from-emerald-500 to-emerald-700",
        href: "/features",
    },
    {
        id: "emails",
        label: "Space Mail",
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        image: "/spacenexus/screenshots/vdr-emails.png",
        headline: "Integrated Deal Mail",
        description:
            "A built-in inbox keeps all deal correspondence in one place — no switching between Gmail and your data room. Star, archive, and search across every message thread tied to your transactions.",
        features: [
            "Deal-specific inbox — no email juggling",
            "Compose, star, archive, trash",
            "Purchase requests, NDAs, and approvals in one thread",
            "Search across all messages instantly",
        ],
        badge: "bg-sky-100 text-sky-700",
        color: "from-sky-500 to-sky-700",
        href: "/features",
    },
    {
        id: "reports",
        label: "Reports",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        image: "/spacenexus/screenshots/vdr-rports.png",
        headline: "Audit & Compliance Reports",
        description:
            "Full document access logs, user activity reports, and compliance exports — all ready for board presentations, legal review, or regulatory submissions.",
        features: [
            "Full audit trail with timestamped access logs",
            "Per-user and per-document activity reports",
            "Export to PDF or Excel for legal compliance",
            "Board-ready report templates",
        ],
        badge: "bg-rose-100 text-rose-700",
        color: "from-rose-500 to-rose-700",
        href: "/features",
    },
];

export default function VDRScreenshotGallery() {
    const [activeTab, setActiveTab] = useState(0);
    const active = tabs[activeTab];

    return (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#f8f9fa] border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                        Real Product Screenshots
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        See Space Nexus in action
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        No mock-ups. No stock art. Every screen you see is the live Space
                        Nexus platform — built for M&amp;A deal teams.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(i)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === i
                                    ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/30 scale-105"
                                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#2563eb]/40 hover:text-[#2563eb]"
                                }`}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d={tab.icon}
                                />
                            </svg>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                    {/* Left: info */}
                    <div key={`info-${active.id}`} className="lg:col-span-2 order-2 lg:order-1">
                        <div
                            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${active.badge}`}
                        >
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={active.icon}
                                />
                            </svg>
                            {active.label}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                            {active.headline}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {active.description}
                        </p>
                        <ul className="space-y-2.5 mb-8">
                            {active.features.map((f) => (
                                <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                                    <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <svg
                                            className="w-3 h-3 text-[#2563eb]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href={active.href}
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                        >
                            Learn more
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Right: screenshot */}
                    <div key={`img-${active.id}`} className="lg:col-span-3 order-1 lg:order-2">
                        <div className="relative">
                            {/* Browser chrome frame */}
                            <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                                    app.spacenexus.net
                                </div>
                            </div>
                            {/* Screenshot */}
                            <div className="relative border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/15">
                                <Image
                                    src={active.image}
                                    alt={`Space Nexus ${active.label} screenshot`}
                                    width={1280}
                                    height={800}
                                    className="w-full h-auto object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"
                                    priority={activeTab === 0}
                                />
                            </div>
                            {/* Glow */}
                            <div
                                className={`absolute -inset-4 bg-gradient-to-r ${active.color} opacity-10 blur-2xl rounded-3xl -z-10`}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 text-center">
                    <p className="text-sm text-gray-500 mb-4">
                        Ready to see it live with your own documents?
                    </p>
                    <Link
                        href="/demo"
                        className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
                    >
                        Request a Live Demo
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
