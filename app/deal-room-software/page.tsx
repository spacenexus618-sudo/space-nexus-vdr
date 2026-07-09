import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Deal Room Software 2026 | SpaceNexus",
    description: "Compare the best deal room software platforms for M&A, fundraising, and corporate transactions.",
    alternates: {
        canonical: "https://spacenexus.net/deal-room-software",
    },
    openGraph: {
        title: "Deal Room Software 2026 | SpaceNexus",
        description:
            "Compare the best deal room software platforms for M&A, fundraising, and corporate trans...",
        url: "https://spacenexus.net/deal-room-software",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Deal Room Software 2026 — Best Virtual Deal Room Comparison",
        description:
            "Independent comparison of the best deal room software providers in 2026. Pricing, features, and rankings.",
    },
    keywords: [
        "deal room software",
        "deal room",
        "virtual deal room",
        "online deal room",
        "deal room platform",
        "best deal room software",
        "deal room software comparison",
        "deal room software 2026",
        "M&A deal room",
        "deal room providers",
        "deal room solutions",
        "digital deal room",
        "secure deal room",
        "transaction deal room",
    ],
};

type Provider = {
    rank: number;
    name: string;
    tagline: string;
    bestFor: string;
    founded: string;
    hq: string;
    certifications: string[];
    pros: string[];
    cons: string[];
    highlight?: boolean;
    link?: { href: string; text: string };
};

const providers: Provider[] = [
    {
        rank: 1,
        name: "SpaceNexus",
        tagline: "Best Overall Deal Room Software",
        bestFor: "M&A, fundraising, and transaction teams that want AI automation, transparent pricing, and a 24-hour setup",
        founded: "2022",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001", "SEC/FINRA Ready"],
        pros: [
            "AI redaction, auto-categorization, and smart indexing included on every plan",
            "Structured Q&A with category routing, urgency flags, and full audit trail",
            "Real-time per-buyer engagement analytics with document heatmaps",
            "Setup in under 24 hours — no CSM call required",
            "Transparent flat-rate pricing — no per-page or per-seat surprises",
            "Deal pipeline tracking across multiple active transactions",
        ],
        cons: [
            "Newer vendor than the legacy enterprise providers",
            "Less brand recognition in bulge-bracket investment banking",
        ],
        highlight: true,
        link: { href: "/demo", text: "Try SpaceNexus Free" },
    },
    {
        rank: 2,
        name: "Datasite",
        tagline: "Best for Large-Cap, Enterprise Deal Rooms",
        bestFor: "Bulge-bracket M&A, mega-deals, and enterprise transaction workflows where brand recognition matters",
        founded: "1968",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Recognized brand at every bulge-bracket bank globally",
            "Mature AI redaction and translation modules",
            "Handles extremely high document volumes",
            "Large dedicated customer success team",
        ],
        cons: [
            "Quote-only pricing — opaque and expensive",
            "Per-page upload fees that can 5–10x your bill",
            "Legacy UI with a steep learning curve",
            "Multi-day setup with mandatory onboarding calls",
            "AI features sold as expensive add-ons, not included",
        ],
    },
    {
        rank: 3,
        name: "Intralinks",
        tagline: "Best for Cross-Border, Regulated Deal Rooms",
        bestFor: "Cross-border M&A, syndicated lending, and heavily regulated deal workflows",
        founded: "1996",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Global data residency options (EU, US, APAC)",
            "Strong capital markets workflow tools",
            "Long-standing regulatory credibility",
            "Deep permission model with enterprise SSO",
        ],
        cons: [
            "Most expensive option in this ranking",
            "Outdated interface — limited redesign since 2017",
            "No modern AI features — manual indexing required",
            "Slow customer support response times",
        ],
    },
    {
        rank: 4,
        name: "Firmex",
        tagline: "Best Mid-Market Deal Room",
        bestFor: "Mid-market M&A, PE portfolio transactions, and legal advisory firms",
        founded: "2007",
        hq: "Canada",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Reasonable mid-market pricing",
            "Cleaner interface than legacy enterprise deal rooms",
            "Strong document management fundamentals",
        ],
        cons: [
            "No AI document processing",
            "Limited buyer engagement analytics",
            "Basic Q&A without structured workflow",
        ],
    },
    {
        rank: 5,
        name: "iDeals",
        tagline: "Best for European Cross-Border Deal Rooms",
        bestFor: "European cross-border transactions and mid-market international deals",
        founded: "2008",
        hq: "UK / Lithuania",
        certifications: ["ISO 27001", "SOC 2 Type II"],
        pros: [
            "Multi-language support for EU deals",
            "Modern, clean interface",
            "Competitive mid-market pricing",
        ],
        cons: [
            "Limited US regulatory compliance features",
            "No AI-powered redaction or auto-indexing",
            "Smaller support team for US time zones",
        ],
    },
    {
        rank: 6,
        name: "DocSend (Dropbox)",
        tagline: "Best for Pitch Deck & Pre-Deal Sharing",
        bestFor: "Pre-deal pitch deck sharing, fundraising link tracking, and lightweight document distribution",
        founded: "2013",
        hq: "USA",
        certifications: ["SOC 2 Type II"],
        pros: [
            "Best-in-class per-page PDF analytics",
            "Fast, polished link-sharing UX",
            "Affordable entry-level plan",
        ],
        cons: [
            "Not a true deal room — no folder permissions, no structured Q&A",
            "Limited audit trail and compliance certifications",
            "Many institutional VCs do not accept DocSend links for diligence",
        ],
    },
    {
        rank: 7,
        name: "Google Drive / SharePoint",
        tagline: "Worst Deal Room Choice (But Most Common)",
        bestFor: "Internal team collaboration only — never for external counterparty transactions",
        founded: "—",
        hq: "—",
        certifications: ["Varies"],
        pros: [
            "Free or very cheap",
            "Most teams already know how to use it",
            "Great for internal collaboration",
        ],
        cons: [
            "No mandatory NDA enforcement — forwarded links leak",
            "No document-level audit trail",
            "No Q&A workflow for diligence",
            "Institutional counterparties will not accept a Drive link",
        ],
    },
];

const mustHaveFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "NDA Click-Through Enforcement",
        description:
            "Every counterparty signs an NDA digitally before viewing a single document. The acceptance is timestamped and IP-bound — protecting the seller and forming part of the transaction record.",
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Granular Permission Controls",
        description:
            "Set access at folder, document, and page level. Build separate permission groups for each counterparty — with ethical walls between competing bidders and privileged access for outside counsel.",
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Redaction",
        description:
            "Automatic redaction of PII, financial data, and privileged content saves deal teams dozens of hours per transaction. Modern deal room software includes AI redaction on every plan — not as an expensive add-on.",
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Structured Q&A Workflow",
        description:
            "Route due diligence questions by category, urgency, and subject matter expert. Track every question from submission to answer with a version-controlled audit trail that holds up under legal scrutiny.",
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Real-Time Engagement Analytics",
        description:
            "See which counterparties have reviewed which documents, for how long, and how many times. Engagement heatmaps reveal which sections attract the most interest — critical intelligence during late-stage negotiations.",
    },
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Dynamic Watermarking",
        description:
            "Every PDF a counterparty downloads is automatically stamped with their name, email, IP, and timestamp. If a confidential document leaks, you can trace it back to the source — and the visible deterrent prevents leaks.",
    },
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Tamper-Evident Audit Trail",
        description:
            "Every access event — view, download, print, permission change — is logged with timestamp, IP, and user identity. Immutable audit logs satisfy legal discovery requirements and provide defensible evidence in post-deal disputes.",
    },
    {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "Full-Text Search Across Deal Documents",
        description:
            "Buyers expect to search across thousands of documents in seconds. Modern deal room search includes OCR for scanned files, natural-language queries, and the ability to find any clause, number, or name across the entire deal repository.",
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Bulk Upload & Auto-Indexing",
        description:
            "Deals often involve thousands of documents. The best deal room software supports bulk drag-and-drop upload, automatic folder organization, and AI-generated index numbering — eliminating days of manual filing.",
    },
];

const dealRoomVsDataRoom = {
    dealRoom: {
        title: "Deal Room",
        definition:
            "A secure, cloud-based platform built specifically for managing the lifecycle of a single transaction — from initial setup through due diligence, Q&A, negotiation, and post-close.",
        focus: [
            "Transaction lifecycle workflow (setup → diligence → close)",
            "Counterparty management (buyers, investors, counsel)",
            "Q&A management and deal-team collaboration",
            "Engagement analytics to gauge buyer/investor interest",
            "Multi-deal pipeline for advisors running concurrent transactions",
        ],
    },
    dataRoom: {
        title: "Data Room (Virtual Data Room / VDR)",
        definition:
            "The broader category of secure document-sharing platforms used for any confidential document exchange — M&A, fundraising, legal discovery, board reporting, and compliance audits.",
        focus: [
            "General-purpose confidential document storage and sharing",
            "Compliance and audit-trail rigor for any document type",
            "Permission controls and NDA enforcement",
            "Long-term document archival and access",
            "Cross-functional use across legal, finance, and operations",
        ],
    },
};

const useCases = [
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Mergers & Acquisitions (M&A)",
        description:
            "Sell-side and buy-side deal teams use deal room software to manage the full M&A lifecycle — from teaser distribution through due diligence, negotiation, and signing.",
        link: "/solutions/mergers-and-acquisitions-vdr",
    },
    {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Startup Fundraising",
        description:
            "Founders use deal room software to share cap tables, financials, and pitch materials with VCs during pre-seed through Series C rounds — with per-investor analytics to gauge interest.",
        link: "/solutions/series-a-fundraising-data-room",
    },
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Private Equity Deal Pipeline",
        description:
            "PE firms use deal room software to manage portfolio company diligence, run multiple simultaneous transactions, and coordinate between deal teams, portfolio management, and LP reporting.",
        link: "/industries/private-equity",
    },
    {
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        title: "Legal & Law Firm Transactions",
        description:
            "Law firms use deal room software to manage privilege walls between deal parties, maintain tamper-evident document trails for litigation, and securely exchange sensitive materials across counsel during complex transactions.",
        link: "/industries/law-firms",
    },
    {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        title: "Real Estate Transactions",
        description:
            "Real estate professionals use deal room software to share property records, environmental reports, lease agreements, and title documentation with buyers, lenders, and legal counsel during asset sales.",
        link: "/industries/real-estate",
    },
    {
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        title: "Life Sciences & Pharma M&A",
        description:
            "Pharma and biotech companies use deal room software to share clinical trial data, regulatory filings, and IP portfolios during licensing deals, partnerships, and acquisition processes under strict HIPAA compliance.",
        link: "/industries/life-sciences",
    },
];

const selectionCriteria = [
    {
        title: "Transaction-specific workflow features",
        description:
            "Look for built-in Q&A workflow, deal pipeline tracking, counterparty management, and per-deal permissions — not just generic file-sharing. The best deal room software is purpose-built for transaction workflows, not retrofitted from cloud storage.",
    },
    {
        title: "AI redaction & auto-categorization",
        description:
            "Deals involve thousands of documents with sensitive PII and financial data. The best providers include AI-powered redaction and auto-organization as standard — not as expensive add-ons that inflate the bill mid-deal.",
    },
    {
        title: "Real-time engagement analytics",
        description:
            "Per-counterparty heatmaps showing which documents were reviewed, for how long, and how many times are critical for late-stage deal intelligence. Generic file-sharing tools do not provide this.",
    },
    {
        title: "Transparent, predictable pricing",
        description:
            "Per-page fees and quote-only enterprise contracts are deal-killers for mid-market transactions. We prioritize vendors that publish pricing, include AI features in the base price, and let you pay monthly.",
    },
    {
        title: "Setup speed",
        description:
            "Deal timelines are unforgiving. Deal room software must be live in hours, not days. We heavily weighted < 24-hour self-serve setup over multi-day CSM-led implementations.",
    },
    {
        title: "Security & compliance certifications",
        description:
            "SOC 2 Type II, ISO 27001, AES-256 encryption, MFA enforcement, and SEC/FINRA readiness are table-stakes for any deal room. Vendors missing these were ranked lower regardless of other features.",
    },
];

const faqItems = [
    {
        question: "What is deal room software?",
        answer:
            "Deal room software is a secure, cloud-based platform purpose-built for managing the lifecycle of a business transaction — from initial setup through due diligence, structured Q&A, and post-close. Unlike generic file-sharing tools, deal room software enforces NDA click-through, provides granular permission controls for each counterparty, logs every access event in a tamper-evident audit trail, supports structured Q&A workflows, and offers engagement analytics that show which counterparties are most engaged. Top providers like SpaceNexus, Datasite, Intralinks, Firmex, iDeals, and DocSend specialize in deal workflows and are accepted by investment banks, PE firms, and corporate development teams worldwide.",
    },
    {
        question: "What is the difference between deal room software and a virtual data room (VDR)?",
        answer:
            "The terms overlap significantly and are often used interchangeably. A virtual data room (VDR) is the broader category of secure document-sharing platforms — used for M&A, fundraising, legal discovery, board reporting, and compliance audits. Deal room software is a more transaction-focused subset of VDRs, purpose-built for managing the full lifecycle of a single deal — from setup through due diligence, Q&A, negotiation, and post-close. Most modern VDRs (including SpaceNexus, Datasite, and Intralinks) include both sets of capabilities, so the distinction is largely semantic.",
    },
    {
        question: "How much does deal room software cost?",
        answer:
            "Deal room software pricing varies significantly. Modern providers like SpaceNexus use transparent flat-rate monthly pricing with no per-page fees. Mid-market platforms like Firmex and iDeals use a similar flat-rate model. Legacy enterprise VDRs like Datasite and Intralinks use quote-only pricing that typically runs tens of thousands of dollars per deal, with per-page upload charges and AI features sold as premium add-ons. For mid-market transactions, modern providers deliver 90% of the functionality at less than 10% of the cost.",
    },
    {
        question: "What features should deal room software have?",
        answer:
            "Deal room software must include: (1) SOC 2 Type II and ISO 27001 certifications; (2) AES-256 encryption at rest and TLS 1.3 in transit; (3) NDA click-through enforcement at room entry; (4) granular permissions at folder, document, and page level; (5) AI-powered redaction and auto-categorization; (6) structured Q&A with category routing, urgency flags, and full audit trail; (7) real-time counterparty engagement analytics; (8) dynamic watermarking on every downloaded PDF; (9) tamper-evident audit trail; (10) bulk upload with AI auto-indexing; and (11) full-text search with OCR across 100+ file types.",
    },
    {
        question: "Which deal room software is best for small to mid-market transactions?",
        answer:
            "SpaceNexus is the best deal room software for small to mid-market transactions in 2026. It combines enterprise-grade security (SOC 2 Type II, ISO 27001, SEC/FINRA ready) with AI redaction, auto-categorization, and structured Q&A included on every plan. Pricing is transparent with no per-page fees, and the platform is live in under 24 hours without an onboarding call. For larger transactions where bulge-bracket brand recognition matters, Datasite and Intralinks remain the standard — but at significantly higher cost.",
    },
    {
        question: "How long does it take to set up deal room software?",
        answer:
            "With modern deal room software like SpaceNexus, a deal room can be fully configured in under 24 hours. Upload all diligence documents via bulk drag-and-drop, set up permission groups for each counterparty, configure the NDA, and start sending invitations. Legacy providers like Datasite and Intralinks often require 3–7 days of CSM-led setup before any documents can be shared. In fast-moving transactions, this difference can materially impact deal timelines.",
    },
    {
        question: "Can Google Drive or Dropbox be used as deal room software?",
        answer:
            "Google Drive, Dropbox, and SharePoint are not suitable replacements for deal room software in transactional contexts. They lack NDA click-through enforcement, document-level permission controls that persist after sharing, a legally defensible tamper-evident audit trail, Q&A workflow management, dynamic watermarking, and the regulatory compliance certifications (SOC 2 Type II, ISO 27001) that counterparties, counsel, and regulators require. Using cloud storage for M&A or fundraising creates legal, compliance, and security exposure.",
    },
    {
        question: "How does deal room software protect confidentiality?",
        answer:
            "Deal room software protects confidentiality through multiple layers: (1) NDA click-through enforcement at room entry with timestamped acceptance; (2) AES-256 encryption at rest and TLS 1.3 in transit; (3) granular permission controls with ethical walls between competing bidders; (4) dynamic per-viewer watermarking on every downloaded PDF; (5) tamper-evident audit trail logging every access event; (6) IP-based access restrictions and device binding; (7) MFA enforcement for all users; and (8) remote wipe capability for revoked access. The best providers also offer forensic watermarking that survives photocopying and screenshots.",
    },
];

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Deal Room Software 2026",
    description: "Independent ranking of the top deal room software providers in 2026.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: providers.length,
    itemListElement: providers.map((p) => ({
        "@type": "ListItem",
        position: p.rank,
        name: p.name,
        description: p.tagline,
        url: p.link?.href
            ? `https://spacenexus.net${p.link.href}`
            : `https://spacenexus.net/deal-room-software#provider-${p.rank}`,
    })),
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Deal Room Software 2026 — Best Virtual Deal Room Comparison",
    description:
        "Independent comparison and ranking of the 7 best deal room software providers in 2026. Pricing, AI features, security, and which one deal teams actually pick.",
    author: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    datePublished: "2026-06-23",
    dateModified: "2026-06-25",
    mainEntityOfPage: "https://spacenexus.net/deal-room-software",
};

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
        { "@type": "ListItem", position: 2, name: "Deal Room Software", item: "https://spacenexus.net/deal-room-software" },
    ],
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
};

function CheckIcon() {
    return (
        <svg className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

function ProviderCard({ provider }: { provider: Provider }) {
    const isWinner = provider.highlight;
    return (
        <article
            id={`provider-${provider.rank}`}
            className={`relative bg-white rounded-2xl border ${isWinner ? "border-[#2563eb] ring-2 ring-[#2563eb]/10 shadow-xl" : "border-gray-200 shadow-sm"} overflow-hidden scroll-mt-24`}
        >
            {isWinner && (
                <div className="absolute top-0 inset-x-0 bg-[#2563eb] text-white text-center text-xs font-bold py-2 tracking-wider uppercase">
                    Editor&apos;s Choice · #1 Best Deal Room Software
                </div>
            )}
            <div className={`p-6 lg:p-8 ${isWinner ? "pt-14" : ""}`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-6">
                    <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black ${isWinner ? "bg-[#2563eb] text-white" : "bg-gray-100 text-gray-700"}`}>
                        #{provider.rank}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{provider.name}</h3>
                        <p className={`text-sm font-semibold mb-3 ${isWinner ? "text-[#2563eb]" : "text-gray-700"}`}>{provider.tagline}</p>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{provider.bestFor}</p>
                        {provider.hq !== "—" && (
                            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                                <span>Est. {provider.founded}</span>
                                <span>·</span>
                                <span>{provider.hq}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-[#f8f9fa] rounded-lg p-3 mb-6">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Certifications</p>
                    <div className="flex flex-wrap gap-1.5">
                        {provider.certifications.map((cert) => (
                            <span key={cert} className="text-[10px] bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full font-medium">
                                {cert}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">Pros</p>
                        <ul className="space-y-2">
                            {provider.pros.map((p) => (
                                <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                                    <CheckIcon />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">Cons</p>
                        <ul className="space-y-2">
                            {provider.cons.map((c) => (
                                <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                                    <XIcon />
                                    <span>{c}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {provider.link && (
                    <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                        <Link
                            href={provider.link.href}
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-md shadow-blue-500/20"
                        >
                            {provider.link.text}
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200"
                        >
                            See Pricing
                        </Link>
                    </div>
                )}
            </div>
        </article>
    );
}

export default function DealRoomSoftwarePage() {
    return (
        <>
            <Script id="drs-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="drs-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="drs-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="drs-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="drs-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Deal Room Software</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                2026 Comparison &amp; Ranking
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Best Deal Room Software{" "}
                                <span className="text-[#2563eb]">— 2026 Comparison</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                                We compared 2026&apos;s top 7 deal room software platforms on AI features, security, transaction workflow, and total cost. Here&apos;s who made the list — and which one deal teams actually pick.
                            </p>
                            <p className="text-sm text-gray-400 mb-10">
                                14-minute read &nbsp;·&nbsp; Last updated: June 25, 2026 &nbsp;·&nbsp; Pricing verified monthly
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="#provider-1" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    See the #1 Pick
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <a href="#deal-room-vs-data-room" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    Deal Room vs Data Room
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Summary Box */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 lg:p-8">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">TL;DR · Quick Summary</p>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">The 30-second answer</h2>
                            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                                <p>
                                    <strong>SpaceNexus is the best deal room software in 2026.</strong> It is purpose-built for the transaction lifecycle, includes AI redaction, structured Q&amp;A, and per-counterparty engagement analytics on every plan, and uses transparent monthly pricing with no per-page fees.
                                </p>
                                <p>
                                    <strong>For large-cap and bulge-bracket deals</strong>, Datasite and Intralinks remain the standard — but expect opaque pricing and per-page fees. <strong>For pre-deal pitch deck sharing</strong>, DocSend offers the best per-page PDF analytics at a low price point. <strong>Avoid</strong> Google Drive and SharePoint entirely for external counterparty transactions — they lack the NDA enforcement, audit trails, and analytics that deal workflows require.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is deal room software */}
                <section className="py-14 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is deal room software?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Deal room software is a secure, cloud-based platform purpose-built for managing the lifecycle of a business transaction — from initial setup through due diligence, structured Q&amp;A, negotiation, and post-close. The category emerged from physical data rooms — locked facilities where deal parties would visit in person to review sensitive documents under supervision. Modern deal room software has replaced this with online platforms that offer the same security controls digitally, at a fraction of the cost and with far greater efficiency.
                            </p>
                            <p>
                                What separates dedicated deal room software from a general file-sharing tool is the transaction-specific compliance layer: mandatory NDA enforcement before document access, granular permission controls at the folder and document level, an immutable audit trail logging every view and download, structured Q&amp;A workflow management with category routing, dynamic per-viewer watermarking, and security certifications (SOC 2 Type II, ISO 27001, SEC/FINRA readiness) required by institutional counterparties, outside counsel, and regulators.
                            </p>
                            <p>
                                The deal room software market in 2026 spans legacy enterprise platforms (Datasite, Intralinks) and a newer generation of AI-powered providers like SpaceNexus that deliver the same security and compliance — plus AI redaction, auto-categorization, and engagement analytics included as standard — on transparent monthly pricing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Deal Room vs Data Room */}
                <section id="deal-room-vs-data-room" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Terminology</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Deal room vs. data room — what&apos;s the difference?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The terms &quot;deal room&quot; and &quot;data room&quot; (or &quot;virtual data room&quot;) are used interchangeably in most modern contexts — but there are subtle differences worth understanding.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-7">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{dealRoomVsDataRoom.dealRoom.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">{dealRoomVsDataRoom.dealRoom.definition}</p>
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Focus areas</p>
                                <ul className="space-y-2">
                                    {dealRoomVsDataRoom.dealRoom.focus.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                                            <CheckIcon />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-7">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{dealRoomVsDataRoom.dataRoom.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">{dealRoomVsDataRoom.dataRoom.definition}</p>
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Focus areas</p>
                                <ul className="space-y-2">
                                    {dealRoomVsDataRoom.dataRoom.focus.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                                            <CheckIcon />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-6 text-center max-w-3xl mx-auto">
                            In practice, the best platforms (including SpaceNexus, Datasite, and Intralinks) deliver both sets of capabilities — so the distinction is largely semantic. When evaluating a deal room software provider, focus on the specific features and pricing that match your transaction workflow.
                        </p>
                    </div>
                </section>

                {/* The Full Ranking */}
                <section id="ranking" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">The Full Ranking</p>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Best deal room software, ranked
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Each provider below was evaluated on AI redaction, structured Q&amp;A, engagement analytics, security certifications, transparent pricing, and setup speed.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {providers.map((p) => (
                                <ProviderCard key={p.rank} provider={p} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Side-by-Side Comparison Table */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Deal room software comparison</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                All seven providers at a glance on the features that matter most for transaction workflows.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm min-w-[680px]">
                                    <thead className="bg-gray-900 text-white">
                                        <tr>
                                            <th className="text-left font-semibold text-gray-300 px-4 py-4">Provider</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">AI Redaction</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">Engagement Analytics</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">NDA Click-Through</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">Per-Page Fees</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">SOC 2</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {providers.map((p, i) => (
                                            <tr key={p.name} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-t border-gray-100`}>
                                                <td className="px-4 py-3.5 font-bold text-gray-900 flex items-center gap-2 min-w-[180px]">
                                                    <span className={`w-6 h-6 rounded-full text-xs font-black flex items-center justify-center shrink-0 ${p.highlight ? "bg-[#2563eb] text-white" : "bg-gray-200 text-gray-700"}`}>{p.rank}</span>
                                                    {p.name}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.pros.some((pr) => pr.toLowerCase().includes("redaction") || pr.toLowerCase().includes("ai")) ? (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">✗</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.pros.some((pr) => pr.toLowerCase().includes("analytics") || pr.toLowerCase().includes("heatmap") || pr.toLowerCase().includes("pdf analytics")) ? (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">✗</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.cons.some((c) => c.toLowerCase().includes("no mandatory nda") || c.toLowerCase().includes("no folder permissions")) ? (
                                                        <span className="text-red-500 font-bold">✗</span>
                                                    ) : (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.cons.some((c) => c.toLowerCase().includes("per-page")) ? (
                                                        <span className="text-red-500 font-bold">Yes</span>
                                                    ) : (
                                                        <span className="text-green-600 font-bold">No</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center text-xs text-gray-700">{p.certifications.some((c) => c.includes("SOC 2") || c === "Varies") ? "✓" : "—"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-3 text-center">
                            Comparison based on publicly available information as of June 2026. Always confirm current details with the vendor.
                        </p>
                    </div>
                </section>

                {/* Must-Have Features */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Feature Checklist</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-have features for deal room software</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any deal-room-grade platform. Anything missing is a red flag.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mustHaveFeatures.map((feature) => (
                                <div key={feature.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How We Picked */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Methodology</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How we picked the best deal room software</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We evaluated 14 deal room and VDR providers against 12 criteria specific to transaction workflows. The 7 listed above best serve M&amp;A advisors, PE firms, and corporate development teams.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {selectionCriteria.map((c) => (
                                <div key={c.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-start gap-2">
                                        <span className="w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">✓</span>
                                        {c.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{c.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to use deal room software</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Deal room software is used across industries whenever confidential transaction documents need to be shared securely with external counterparties during a structured process.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {useCases.map((uc) => (
                                <div key={uc.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300 flex flex-col">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4 shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={uc.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{uc.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{uc.description}</p>
                                    {uc.link && (
                                        <Link href={uc.link} className="text-xs font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1 mt-auto">
                                            Learn more
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why SpaceNexus Wins */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Why SpaceNexus is #1
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Built for the speed of modern transactions
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is the only deal room on this list that was purpose-built for the way mid-market deal teams actually work. AI redaction and auto-categorization run on every upload, structured Q&amp;A routes to the right SME, and engagement analytics tell you which counterparties are serious — on transparent monthly pricing with no per-page fees.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "AI redaction, auto-categorization, and smart indexing — included on every plan",
                                        "Structured Q&A with category routing, urgency flags, and version-controlled audit trail",
                                        "Real-time per-counterparty engagement heatmaps",
                                        "Ethical wall / privilege support for multi-party deals",
                                        "Dynamic watermarking on every downloaded PDF",
                                    "SOC 2 Type II · ISO 27001 · SEC/FINRA ready",
                                    "Transparent flat-rate pricing — no per-page fees, no annual lock-in, no CSM call",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                            <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                        Try SpaceNexus Free
                                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                    <Link href="/data-room-software" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                        See the data room software guide →
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.spacenexus.net / deals</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                    <img
                                        src="/spacenexus/screenshots/vdr-deals.png"
                                        alt="SpaceNexus deal room software — deal pipeline"
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about deal room software
                        </h2>
                        <div className="space-y-5">
                            {faqItems.map((item) => (
                                <div key={item.question} className="bg-white rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Links */}
                <section className="py-10 bg-white border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-4">Continue exploring</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/due-diligence-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Due Diligence Software →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Software Guide →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/m-a-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&amp;A Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Virtual Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/datasite-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus vs Datasite →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Launch your deal room in under 24 hours
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Stop running transaction diligence on email, shared drives, or legacy enterprise VDRs. Get a purpose-built deal room live today — with AI redaction, structured Q&amp;A, and per-counterparty analytics on every plan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                See Pricing
                            </Link>
                        </div>
                        <p className="text-sm text-gray-400 mt-6">SOC 2 Type II · ISO 27001 · SEC/FINRA ready · No credit card required · Cancel anytime</p>
                    </div>
                </section>
                        {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/data-room-software"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Software platform comparison.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data room software →</h3>
                        </Link>
                        <Link
                            href="/due-diligence-software"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Diligence automation.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Due diligence software →</h3>
                        </Link>
                        <Link
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers ranked.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
                        </Link>
                        <Link
                            href="/virtual-data-room-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Complete directory.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">All virtual data room providers →</h3>
                        </Link>
                        <Link
                            href="/pricing-comparison"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transparent pricing.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR pricing comparison →</h3>
                        </Link>
                    </div>
                </div>
            </section>

</main>
        </>
    );
}
