import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Electronic Data Room 2026 | SpaceNexus",
    description: "Complete guide to electronic data rooms (EDR). Secure online data room for M&A, fundraising, and legal deals. AI-powered, SOC 2 Type II, transparent pricing.",
    alternates: {
        canonical: "https://spacenexus.net/electronic-data-room",
    },
    openGraph: {
        title: "Electronic Data Room 2026 | SpaceNexus",
        description:
            "Complete guide to electronic data rooms (EDR). Secure online data room for M&A, fundraising, and legal deals.",
        url: "https://spacenexus.net/electronic-data-room",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Electronic Data Room 2026 — Secure Online VDR | SpaceNexus",
        description:
            "What is an electronic data room? Compare the best EDR platforms for secure document sharing, due diligence, and deal management.",
    },
    keywords: [
        "electronic data room",
        "EDR data room",
        "online data room",
        "electronic data room software",
        "electronic virtual data room",
        "secure electronic data room",
        "electronic data room M&A",
        "best electronic data room",
        "electronic document room",
        "digital data room",
    ],
};

const features = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Bank-Grade Security",
        description: "AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II and ISO 27001 certification. Zero Trust architecture with MFA enforcement and IP-based access restrictions.",
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Granular Permission Controls",
        description: "Set access at the folder, document, and page level. Restrict view-only, download, print, and copy rights per user or group. Apply dynamic watermarks with viewer identity embedded automatically.",
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Processing",
        description: "Automatically redact PII, sensitive financials, and privileged information. AI auto-categorizes uploaded documents into the correct folder structure and generates smart index numbers.",
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Structured Q&A Workflow",
        description: "Route due diligence questions to the right subject matter expert by category, urgency, and department. Track every question from submission to answer with a version-controlled audit trail.",
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Real-Time Engagement Analytics",
        description: "Track every document view, download, and time-on-page per buyer in real time. Engagement heatmaps reveal which sections attract the most interest during negotiations.",
    },
    {
        icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
        title: "NDA Enforcement",
        description: "Require all external parties to electronically accept a non-disclosure agreement before accessing any documents. Each acceptance is timestamped and logged for the transaction record.",
    },
];

const useCases = [
    {
        title: "M&A Due Diligence",
        description: "Sell-side and buy-side teams use electronic data rooms to securely exchange thousands of documents during mergers and acquisitions.",
    },
    {
        title: "Fundraising & Capital Raising",
        description: "Founders and CFOs use EDR platforms to share investor materials with VC and PE firms during fundraising rounds.",
    },
    {
        title: "Legal Document Management",
        description: "Law firms use electronic data rooms to manage privilege walls, exchange discovery documents, and maintain audit trails.",
    },
    {
        title: "Private Equity",
        description: "PE firms use EDR solutions to manage portfolio company documents, run LP reporting, and orchestrate acquisition due diligence.",
    },
    {
        title: "Real Estate Transactions",
        description: "Real estate professionals use electronic data rooms to share property records, title documents, and lease agreements.",
    },
    {
        title: "Board Communications",
        description: "Corporate boards use EDR platforms to distribute board materials, minutes, and confidential reports securely.",
    },
];

const faqItems = [
    {
        question: "What is an electronic data room?",
        answer: "An electronic data room (EDR), also known as a virtual data room (VDR), is a secure online repository for storing, managing, and sharing confidential documents during business transactions. Electronic data rooms replaced physical data rooms — supervised rooms where deal parties reviewed printed documents — with a digital platform that provides superior security, global accessibility, and workflow automation. EDRs are essential for M&A due diligence, fundraising, legal proceedings, and any high-stakes document exchange.",
    },
    {
        question: "How does an electronic data room work?",
        answer: "An electronic data room works by providing a secure cloud-based platform where authorized users can upload, organize, and share confidential documents. Administrators set granular permission controls at the folder, document, or page level. External parties must accept an NDA before accessing any content. Every action — view, download, print — is logged in an immutable audit trail. Modern EDR platforms like SpaceNexus add AI-powered features like automatic document redaction, categorization, and buyer engagement analytics.",
    },
    {
        question: "What is the difference between an electronic data room and cloud storage?",
        answer: "An electronic data room differs from cloud storage (Google Drive, Dropbox, SharePoint) in critical ways: (1) Mandatory NDA click-through enforcement before document access; (2) Granular permission controls at the folder, document, and page level; (3) A tamper-evident immutable audit trail; (4) Dynamic watermarking on every downloaded document; (5) Structured Q&A workflow management; (6) Security certifications (SOC 2 Type II, ISO 27001) required by institutional counterparties; and (7) Document expiry and remote wipe capabilities. Cloud storage tools lack these transaction-specific features and should not be used for confidential deal materials.",
    },
    {
        question: "What are the benefits of an electronic data room?",
        answer: "Key benefits of electronic data rooms include: (1) 24/7 global access from any device; (2) Enterprise-grade security with encryption, MFA, and compliance certifications; (3) Significant cost savings vs. physical data rooms; (4) Faster deal timelines through instant document sharing; (5) Detailed audit trails for compliance and legal defense; (6) AI-powered automation for redaction and categorization; (7) Real-time buyer engagement analytics; and (8) Structured workflows that keep due diligence organized.",
    },
    {
        question: "How much does an electronic data room cost?",
        answer: "Electronic data room pricing varies by provider. Modern platforms like SpaceNexus offer transparent flat-rate monthly pricing with no per-page fees. Legacy enterprise providers like Datasite and Intralinks use quote-only pricing that can run tens of thousands per deal, with per-page fees and AI add-ons. Mid-market platforms offer per-project or subscription pricing. When evaluating EDR pricing, always check for hidden costs like per-page fees, user overages, and AI feature add-ons.",
    },
    {
        question: "Which electronic data room is best for M&A?",
        answer: "SpaceNexus is the best electronic data room for M&A in 2026. It offers AI-powered document redaction and auto-categorization, structured Q&A workflows, real-time buyer engagement analytics, SOC 2 Type II security, and transparent flat-rate pricing. Legacy platforms like Datasite and Intralinks remain options for large-cap deals where brand recognition is the primary factor, but they lack the AI capabilities and pricing transparency that modern deal teams demand.",
    },
    {
        question: "Is an electronic data room secure?",
        answer: "A purpose-built electronic data room is highly secure. SpaceNexus holds SOC 2 Type II certification, aligns with ISO 27001, and is SEC/FINRA ready. The platform uses AES-256 encryption at rest and TLS 1.3 in transit, Zero Trust architecture, multi-factor authentication, and dynamic watermarking. Every access event is logged in an immutable audit trail. Generic file-sharing tools do not meet these security standards and should not be used for confidential transactions.",
    },
    {
        question: "Who uses electronic data rooms?",
        answer: "Electronic data rooms are used by investment banks, private equity firms, corporate development teams, law firms, venture capital firms, real estate companies, life sciences organizations, and startup founders. Any organization that needs to securely share confidential documents with external parties during a business transaction can benefit from an EDR platform.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Electronic Data Room", item: "https://spacenexus.net/electronic-data-room" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Electronic Data Room 2026 — Complete Guide to Secure Online Data Rooms",
    description: "What is an electronic data room? Complete guide to EDR platforms for M&A, fundraising, and legal deals. Compare features, pricing, security, and top providers.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/electronic-data-room",
};

export default function ElectronicDataRoomPage() {
    return (
        <>
            <Script id="edr-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="edr-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="edr-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Electronic Data Room</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                2026 Complete Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Electronic Data Room{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                An electronic data room (EDR) is the modern replacement for physical data rooms — a secure online platform for sharing confidential documents during M&amp;A, fundraising, and legal transactions. This guide covers everything you need to know.
                            </p>
                            <p className="text-sm text-gray-400 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers features, pricing, security, use cases, and top providers
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Try SpaceNexus Free
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <a href="#features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    Key Features
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is an electronic data room */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is an electronic data room?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                An <strong>electronic data room (EDR)</strong> — also called a virtual data room (VDR) or online data room — is a secure, cloud-based platform for storing, organizing, and sharing confidential documents during business transactions. The term "electronic data room" emerged in the late 1990s as an alternative to physical data rooms: locked, supervised rooms where deal parties would travel to review printed documents in person.
                            </p>
                            <p>
                                Today, electronic data rooms have almost entirely replaced physical data rooms for M&amp;A due diligence, fundraising, legal proceedings, and other high-stakes document exchanges. Modern EDR platforms provide superior security controls, global accessibility, AI-powered automation, and real-time analytics — capabilities that physical data rooms could never offer.
                            </p>
                            <p>
                                The defining feature of an electronic data room is its transaction-specific compliance and security layer: mandatory NDA enforcement before document access, granular permission controls, a tamper-evident audit trail logging every view and download, structured Q&amp;A workflows, dynamic watermarking, and compliance certifications (SOC 2 Type II, ISO 27001) required by financial regulators and legal counterparties.
                            </p>
                            <p>
                                In 2026, the electronic data room market includes legacy enterprise platforms (Datasite, Intralinks) and a newer generation of AI-powered providers like SpaceNexus that deliver enterprise-grade security with AI redaction, auto-categorization, and buyer analytics at transparent, published prices.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { value: "Digital", label: "Replaced physical data rooms globally" },
                                { value: "SOC 2 II", label: "Enterprise security certification" },
                                { value: "AI-Powered", label: "Redaction, categorization, analytics" },
                                { value: "24hr Setup", label: "Go live in under a day" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                                    <div className="text-xs text-blue-200 leading-snug">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section id="features" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Features</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                What an electronic data room should include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These six capabilities are the baseline for any modern electronic data room platform.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((f) => (
                                <div key={f.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SpaceNexus Callout */}
                <section className="py-14 bg-white border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Recommended EDR Platform
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — The AI-powered electronic data room
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is a modern electronic data room designed for today's deal teams. Every plan includes AI document redaction, auto-categorization, buyer engagement analytics, structured Q&amp;A, and SOC 2 Type II security — all at a transparent, published price.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "AI Redaction", desc: "One-click, auto on upload" },
                                        { label: "Buyer Analytics", desc: "Real-time per-user heatmaps" },
                                        { label: "Structured Q&A", desc: "Routed, tracked, audited" },
                                        { label: "SOC 2 Type II", desc: "Certified + ISO 27001" },
                                        { label: "Setup Time", desc: "Under 24 hours, self-serve" },
                                        { label: "Pricing", desc: "Transparent, no lock-in" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-start gap-2.5 bg-[#f8f9fa] rounded-xl p-3">
                                            <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-900">{item.label}</p>
                                                <p className="text-xs text-gray-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                        Request a Demo
                                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                    <Link href="/pricing" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                        View Pricing
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.spacenexus.net / dashboard</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl">
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus electronic data room dashboard" className="w-full h-auto" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Use Cases</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Electronic data room use cases
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Electronic data rooms serve a wide range of business transactions and document-sharing needs.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {useCases.map((uc) => (
                                <div key={uc.title} className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <h3 className="text-sm font-bold text-gray-900 mb-2">{uc.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{uc.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about electronic data rooms
                        </h2>
                        <div className="space-y-5">
                            {faqItems.map((item) => (
                                <div key={item.question} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Links */}
                <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-4">Related resources</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Virtual Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Software →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-solutions" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Solutions →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-due-diligence" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Due Diligence Data Room →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Try the modern electronic data room
                        </h2>
                        <p className="text-gray-600 mb-8">
                            AI-powered redaction. Transparent published pricing. Setup in under 24 hours. SOC 2 Type II certified. No lock-in.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Start Free Trial
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                View Pricing
                            </Link>
                        </div>
                        <p className="text-sm text-gray-400 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                    </div>
                </section>
            </main>
        </>
    );
}
