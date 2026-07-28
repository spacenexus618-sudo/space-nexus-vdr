import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "VDR Data Room Features | SpaceNexus",
    description: "AI redaction, structured Q&A, real-time engagement analytics, dynamic watermarking. The features of a modern VDR.",
    keywords: [
        "VDR features",
        "virtual data room platform",
        "AI redaction software",
        "Q&A workflow VDR",
        "data room features",
        "dynamic watermarking VDR",
    ],
    alternates: {
        canonical: "https://spacenexus.net/features/vdr-data-room",
    },
    openGraph: {
        title: "VDR Data Room Features | SpaceNexus",
        description:
            "AI redaction, structured Q&A, real-time engagement analytics, dynamic watermarking. The...",
        url: "https://spacenexus.net/features/vdr-data-room",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "VDR Data Room — Virtual Data Room Platform | Space Nexus",
        description:
            "Secure virtual data room for M&A, due diligence, and fundraising. AI redaction, structured Q&A, and real-time engagement analytics.",
    },
};

const features = [
    {
        title: "Virtual Data Room Infrastructure",
        description:
            "A purpose-built VDR (virtual data room) engineered specifically for the document workflows of M&A, fundraising, and legal transactions — not retrofitted from generic cloud storage.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
        ),
    },
    {
        title: "NDA Click-Through Enforcement",
        description:
            "Every counterparty electronically accepts a non-disclosure agreement before they can view any document. The click-through acceptance is timestamped and IP-bound, forming part of the transaction record.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: "Granular Permission Controls",
        description:
            "Set access at the folder, document, and page level. Build separate permission groups for each counterparty, counsel team, and advisor — with ethical walls between competing bidders.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
    {
        title: "AI-Powered Document Redaction",
        description:
            "Automatically detect and redact PII, financial figures, and privileged information across PDFs, Word documents, and scanned files. Modern VDR platforms include AI redaction as standard — not as an expensive add-on.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
        ),
    },
    {
        title: "Structured Q&A Workflow",
        description:
            "Route due diligence questions by category (financial, legal, commercial, HR), urgency, and subject matter expert. Track every question from submission to answer with a version-controlled audit trail.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
            </svg>
        ),
    },
    {
        title: "Real-Time Engagement Analytics",
        description:
            "See which counterparties have reviewed which documents, for how long, and how many times. Per-user heatmaps reveal which sections attract the most interest — critical intelligence during negotiations.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        title: "Tamper-Evident Audit Trail",
        description:
            "Every access event — view, download, print, permission change — is logged with timestamp, IP, and user identity. Immutable audit logs satisfy legal discovery and regulatory requirements.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        title: "Dynamic Watermarking",
        description:
            "Every PDF a counterparty downloads is automatically stamped with their name, email, IP, and timestamp. If a confidential document leaks, you can trace it back to the source — and the visible deterrent prevents leaks in the first place.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
    {
        title: "Bulk Upload & Auto-Indexing",
        description:
            "M&A deals often involve thousands of documents. The VDR supports bulk drag-and-drop upload, automatic folder organization, and AI-generated index numbering — eliminating days of manual filing.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
    },
    {
        title: "OCR Full-Text Search",
        description:
            "Search across thousands of documents in seconds. OCR processes scanned files and images, enabling natural-language queries to find any clause, number, or name across the entire deal repository.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        title: "SOC 2 Type II & ISO 27001 Certified",
        description:
            "Enterprise-grade security certifications required by institutional investors, outside counsel, and regulators. AES-256 encryption at rest, TLS 1.3 in transit, MFA enforcement, and Zero Trust architecture.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: "Multi-Party Ethical Walls",
        description:
            "Run competitive processes with strict separation between bidders, separate access for counsel vs. management, and privilege protection that satisfies ethical wall requirements.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
];

const useCases = [
    {
        title: "M&A Due Diligence",
        description: "Sell-side and buy-side deal teams exchange thousands of documents under strict permission controls, NDA enforcement, and ethical wall management.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        title: "Startup Fundraising",
        description: "Founders share cap tables, financials, and pitch materials with VCs during pre-seed through Series C — with per-investor engagement analytics.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
    {
        title: "Legal & Law Firm Transactions",
        description: "Attorneys maintain privilege walls between deal parties, exchange sensitive discovery documents, and preserve tamper-evident document trails.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
    },
    {
        title: "Private Equity & LP Reporting",
        description: "PE firms manage portfolio company diligence, run multiple simultaneous transactions, and coordinate between deal teams and LP reporting.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Real Estate Transactions",
        description: "Real estate professionals share property records, environmental reports, lease agreements, and title documents with buyers and lenders.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        title: "Life Sciences & Pharma M&A",
        description: "Pharma and biotech companies share clinical trial data, regulatory filings, and IP portfolios under HIPAA compliance during licensing deals.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a modern virtual data room (VDR)?",
      acceptedAnswer: { "@type": "Answer", text: "A modern virtual data room (VDR) is a secure online repository designed for the document workflows of M&A, fundraising, and legal transactions. Unlike generic cloud storage, a VDR provides granular access controls, NDA enforcement, AI-powered redaction, structured Q&A workflows, dynamic watermarking, and tamper-evident audit logs purpose-built for deal-making." },
    },
    {
      "@type": "Question",
      name: "How does AI redaction work in SpaceNexus VDR?",
      acceptedAnswer: { "@type": "Answer", text: "SpaceNexus AI redaction automatically detects and redacts personally identifiable information (PII), financial figures, privileged legal content, and other sensitive data across PDFs, Word documents, and scanned files. The AI runs on every upload, and redactions can be reviewed and adjusted before documents are shared with external parties." },
    },
    {
      "@type": "Question",
      name: "What is structured Q&A in a virtual data room?",
      acceptedAnswer: { "@type": "Answer", text: "Structured Q&A is a workflow that routes due diligence questions by category (Financial, Legal, Technical, Commercial), urgency level, and subject matter expert. Each question is tracked from submission to answer with a version-controlled audit trail. This replaces scattered email threads and spreadsheets with a single, auditable question management system." },
    },
    {
      "@type": "Question",
      name: "How does NDA click-through enforcement work?",
      acceptedAnswer: { "@type": "Answer", text: "In SpaceNexus, every counterparty must electronically accept a non-disclosure agreement (NDA) before they can view any document. The click-through acceptance is timestamped and IP-bound, forming part of the permanent transaction record. This ensures legal compliance and protects deal confidentiality from the first access event." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
    { "@type": "ListItem", position: 3, name: "VDR Data Room", item: "https://spacenexus.net/features/vdr-data-room" },
  ],
};

export default function VDRDataRoomPage() {
    return (
        <main className="pt-20 lg:pt-24">
            <Script
                id="vdr-data-room-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Breadcrumb JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
                            { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
                            { "@type": "ListItem", position: 3, name: "VDR Data Room", item: "https://spacenexus.net/features/vdr-data-room" },
                        ],
                    }),
                }}
            />

            {/* Hero Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Copy */}
                        <div>
                            <Link
                                href="/features"
                                className="inline-flex mr-7 items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
                            >
                                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Features
                            </Link>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#2563eb] text-sm font-medium mb-4">
                                Virtual Data Room
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                                VDR Data Room
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                The VDR Data Room is Space Nexus&apos;s purpose-built virtual data room — engineered for M&amp;A due diligence, fundraising, legal transactions, and any high-stakes document exchange. It replaces physical data rooms and ad-hoc cloud storage with a single secure environment that combines transaction-grade compliance, AI-powered automation, and real-time counterparty engagement analytics.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "NDA click-through enforcement before any document is viewable",
                                    "Per-counterparty permission groups with ethical wall support",
                                    "AI redaction, auto-categorization, and OCR full-text search",
                                    "Structured Q&A workflow with full version-controlled audit trail",
                                    "Real-time engagement analytics showing what each counterparty reads",
                                    "SOC 2 Type II, ISO 27001, SEC/FINRA ready",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                        <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/demo"
                                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
                            >
                                Request a Demo
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Right: Screenshot */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
                            <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                                    app.spacenexus.net / data-room
                                </div>
                            </div>
                            <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                <img
                                    src="/spacenexus/screenshots/vdr-dashboard.png"
                                    alt="SpaceNexus VDR Data Room — virtual data room dashboard for M&A and fundraising"
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is a VDR Data Room */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a VDR data room?</h2>
                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                        <p>
                            A VDR data room (virtual data room) is a secure, cloud-based platform purpose-built for managing confidential document exchange during business transactions. The category emerged from physical data rooms — locked facilities where deal parties would visit in person to review sensitive documents under supervision. Modern VDR platforms have replaced this with online environments that deliver the same security controls digitally, at a fraction of the cost and with far greater efficiency.
                        </p>
                        <p>
                            What separates a VDR from general file-sharing tools like SharePoint, Google Drive, or Dropbox is the transaction-specific compliance layer: mandatory NDA click-through enforcement, granular permission controls at folder and document level, an immutable audit trail logging every view and download, structured Q&amp;A workflow management, dynamic per-viewer watermarking, and security certifications (SOC 2 Type II, ISO 27001) required by institutional counterparties, outside counsel, and regulators.
                        </p>
                        <p>
                            Space Nexus is the modern VDR data room — purpose-built for the speed of today&apos;s transactions, with AI redaction, auto-categorization, and engagement analytics included as standard. Legacy enterprise VDRs were designed in the 1990s for bulge-bracket M&amp;A; Space Nexus is designed for the way mid-market deal teams actually work today.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="py-16 lg:py-24 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Everything a Transaction-Grade VDR Must Have
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            These twelve capabilities are the baseline for any serious VDR data room. Anything missing is a red flag for counterparties, counsel, and regulators.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            From Setup to Close — In One Platform
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Space Nexus VDR data room is designed to be live in under 24 hours. The four-step process replaces weeks of manual setup and CSM-led onboarding.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Configure the Room",
                                description:
                                    "Set up permission groups for each counterparty, configure your NDA, and choose between AI auto-categorization and manual folder structures.",
                            },
                            {
                                step: "2",
                                title: "Upload & Organize",
                                description:
                                    "Drag in thousands of documents. AI auto-categorization sorts everything into the right folders — no manual filing required.",
                            },
                            {
                                step: "3",
                                title: "Invite Counterparties",
                                description:
                                    "Send invitations to each buyer, counsel team, or investor. NDA click-through is enforced before any document becomes viewable.",
                            },
                            {
                                step: "4",
                                title: "Track & Close",
                                description:
                                    "Monitor real-time engagement analytics, answer structured Q&A, and maintain a tamper-evident audit trail from first invite to final close.",
                            },
                        ].map((step) => (
                            <div key={step.step} className="relative pl-12">
                                <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-bold">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-16 lg:py-24 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Use a VDR Data Room</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            VDR data rooms are used across industries whenever confidential documents need to be shared securely with external counterparties during a structured transaction.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((uc) => (
                            <div key={uc.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                                    {uc.icon}
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-2">{uc.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{uc.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VDR vs Generic Cloud Storage */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">VDR Data Room vs. Generic Cloud Storage</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Cloud storage tools like Google Drive, Dropbox, and SharePoint are not suitable replacements for a VDR data room in transactional contexts. Here&apos;s why.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                        <div className="grid grid-cols-3 bg-gray-900 text-white">
                            <div className="px-5 py-4 text-sm font-semibold text-gray-300">Capability</div>
                            <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">VDR Data Room<br /><span className="text-xs font-normal text-gray-400">(Space Nexus)</span></div>
                            <div className="px-5 py-4 text-sm font-semibold text-center text-gray-400 border-l border-gray-700">Generic Cloud Storage<br /><span className="text-xs font-normal text-gray-500">(Drive / SharePoint)</span></div>
                        </div>
                        {[
                            { feature: "NDA click-through enforcement", vdr: "✓ Built-in", generic: "✗ Manual" },
                            { feature: "Granular folder & document permissions", vdr: "✓ Per-user, per-group", generic: "Partial — link-based" },
                            { feature: "Tamper-evident audit trail", vdr: "✓ Immutable logs", generic: "Basic activity only" },
                            { feature: "Structured Q&A workflow", vdr: "✓ Categorized + assigned", generic: "✗ Email only" },
                            { feature: "AI redaction & auto-categorization", vdr: "✓ Included", generic: "✗ Not available" },
                            { feature: "Engagement analytics & heatmaps", vdr: "✓ Real-time per user", generic: "Limited" },
                            { feature: "Dynamic watermarking", vdr: "✓ Per-viewer", generic: "✗ Manual / static" },
                            { feature: "SOC 2 Type II & ISO 27001", vdr: "✓ Certified", generic: "Varies" },
                            { feature: "Institutional counterparty acceptance", vdr: "✓ Standard", generic: "Often rejected" },
                        ].map((row, i) => (
                            <div key={row.feature} className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                <div className="px-5 py-3.5 text-sm font-medium text-gray-800">{row.feature}</div>
                                <div className="px-5 py-3.5 text-xs text-center border-l border-gray-100 font-medium text-green-700">{row.vdr}</div>
                                <div className="px-5 py-3.5 text-xs text-center border-l border-gray-100 text-red-500">{row.generic}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Features */}
            <section className="py-12 bg-[#f8f9fa] border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">
                        Explore More Features
                    </p>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { title: "Secure Data Room — Document Management", href: "/features/data-room" },
                            { title: "Security & Compliance", href: "/features/security-compliance" },
                            { title: "Users & Permissions", href: "/features/users-permissions" },
                            { title: "Activity & Analytics", href: "/features/activity-analytics" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-sm font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors">
                                    {link.title}
                                </p>
                                <svg className="w-4 h-4 text-gray-400 group-hover:text-[#2563eb] transition-colors shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 border border-blue-100">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            See the VDR Data Room in Action
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            Schedule a personalized demo and see how Space Nexus combines transaction-grade VDR security with AI redaction, structured Q&amp;A, and real-time engagement analytics.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/demo"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
                            >
                                Request a Demo
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link
                                href="/features"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                View All Features
                            </Link>
                        </div>
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
            </section>
        </main>
    );
}
