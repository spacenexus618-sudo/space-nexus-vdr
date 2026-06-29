import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Virtual Data Room Provider Guide 2026 | Complete Resource | SpaceNexus",
    description: "The ultimate guide to virtual data room providers. Compare features, pricing, security, and select the right VDR for your M&A, fundraising, or legal transaction.",
    alternates: {
        canonical: "https://spacenexus.net/vdr-guide",
    },
    openGraph: {
        title: "Virtual Data Room Provider Guide 2026 | SpaceNexus",
        description:
            "The ultimate guide to virtual data room providers. Compare features, pricing, security, and select the right VDR.",
        url: "https://spacenexus.net/vdr-guide",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Complete Guide to Virtual Data Room Providers 2026 — SpaceNexus",
        description:
            "Learn how to select, implement, and maximize your virtual data room provider. Includes pricing, features, security, and best practices.",
    },
    keywords: [
        "virtual data room provider guide",
        "how to choose a VDR provider",
        "VDR provider selection",
        "virtual data room software guide",
        "VDR best practices",
        "VDR pricing guide",
        "VDR security guide",
        "VDR provider comparison",
        "VDR implementation guide",
        "virtual data room requirements",
        "VDR evaluation checklist",
        "VDR provider review",
    ],
};

const tableOfContents = [
    { id: "what-is-vdr", label: "What is a VDR?", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: "why-vdr-matters", label: "Why VDRs Matter", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { id: "how-to-evaluate", label: "How to Evaluate VDRs", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: "top-providers", label: "Top Providers 2026", icon: "M12 6V4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: "pricing-breakdown", label: "Pricing & Costs", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: "security-compliance", label: "Security & Compliance", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { id: "use-cases", label: "Use Cases by Industry", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { id: "best-practices", label: "Best Practices", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { id: "faq", label: "FAQs", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const evaluationCriteria = [
    {
        number: "01",
        title: "Security Certifications & Compliance",
        description: "Non-negotiable baseline requirements: SOC 2 Type II, ISO 27001, AES-256 encryption, TLS 1.3, MFA, and audit logs.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
        number: "02",
        title: "Pricing Transparency",
        description: "Avoid quote-only pricing and hidden per-page fees. Modern providers publish transparent rates upfront.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
        number: "03",
        title: "AI & Automation Features",
        description: "AI-powered redaction, auto-categorization, and smart indexing are table stakes in 2026. Avoid manual processes.",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
        number: "04",
        title: "Q&A Workflow Management",
        description: "Structured due diligence Q&A with categorization, urgency flags, assignees, and tamper-evident audit trails are essential.",
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
    },
    {
        number: "05",
        title: "Setup Speed & Ease",
        description: "Modern providers enable setup in under 24 hours without requiring dedicated support or onboarding calls.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        number: "06",
        title: "Buyer Analytics & Engagement",
        description: "Real-time engagement tracking (who viewed what, when, how long) is critical for M&A negotiations and investor relations.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
        number: "07",
        title: "User Management & Permissions",
        description: "Granular folder/document-level permissions, privilege walls, ethical walls, and user role management for complex deals.",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3z",
    },
    {
        number: "08",
        title: "Support & Customer Success",
        description: "Responsive support, adequate documentation, and reasonable onboarding assistance. Avoid support black holes.",
        icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    },
];

const providers = [
    {
        rank: 1,
        name: "SpaceNexus",
        tagline: "AI-powered VDR for modern deal teams",
        verdict: "Best for most deals",
        pricing: "Transparent pricing",
        setup: "< 24 hours",
        highlight: true,
        badge: "Top Pick",
        strengths: [
            "AI redaction and auto-categorization included",
            "Real-time buyer engagement analytics",
            "Structured Q&A with full audit trail",
            "Transparent pricing, no per-page fees",
            "SOC 2 Type II + ISO 27001 + SEC/FINRA ready",
            "Self-serve setup — live in under 24 hours",
            "Unlimited users on most plans",
            "No annual lock-in",
        ],
        link: "/demo",
        linkText: "Try SpaceNexus Free",
    },
    {
        rank: 2,
        name: "Datasite",
        tagline: "Legacy enterprise VDR for large-cap M&A",
        verdict: "Best for institutional bulge bracket deals",
        pricing: "Quote only (tens of thousands)",
        setup: "3–5 days",
        highlight: false,
        badge: null,
        strengths: [
            "Established brand at top investment banks",
            "Handles massive document volumes",
            "Large global support team",
            "SEC/FINRA compliance built-in",
        ],
        link: "/competitors/datasite-alternative",
        linkText: "SpaceNexus vs Datasite →",
    },
    {
        rank: 3,
        name: "Intralinks",
        tagline: "Capital markets VDR by SS&C Technologies",
        verdict: "Best for capital markets & fund administration",
        pricing: "Quote only (tens of thousands)",
        setup: "3–5 days",
        highlight: false,
        badge: null,
        strengths: [
            "Strong capital markets workflows",
            "SS&C fund administration integration",
            "Global compliance support",
            "Built-in syndication tools",
        ],
        link: "/competitors/intralinks-alternative",
        linkText: "SpaceNexus vs Intralinks →",
    },
];

const useCases = [
    {
        use_case: "M&A Due Diligence",
        description: "Buy-side and sell-side advisors managing document access, buyer questions, and deal negotiations.",
        recommended: "SpaceNexus",
        key_requirements: [
            "Buyer engagement analytics",
            "Structured Q&A with urgency flags",
            "Audit trail for regulatory review",
            "AI document categorization",
        ],
    },
    {
        use_case: "Fundraising & Investor Due Diligence",
        description: "Founders and CFOs managing investor access during Series A/B/C capital rounds.",
        recommended: "SpaceNexus",
        key_requirements: [
            "Fast setup (deals move at founder speed)",
            "Transparent pricing (no surprise enterprise fees)",
            "Investor engagement tracking",
            "SOC 2 Type II certification",
        ],
    },
    {
        use_case: "Legal Document Management",
        description: "Law firms managing multi-party discovery, regulatory submissions, and confidential counsel documents.",
        recommended: "SpaceNexus",
        key_requirements: [
            "Attorney-client privilege protection",
            "Ethical walls and privilege management",
            "Tamper-evident audit trails",
            "Fine-grained folder permissions",
        ],
    },
    {
        use_case: "Private Equity Portfolio",
        description: "PE firms managing deal pipelines, portfolio company documents, and LP reporting.",
        recommended: "SpaceNexus",
        key_requirements: [
            "Unlimited users across portfolio",
            "Deal pipeline tracking",
            "LP document management",
            "Transparent per-month pricing",
        ],
    },
    {
        use_case: "Real Estate Transactions",
        description: "Real estate professionals managing property documents, due diligence, and loan documentation.",
        recommended: "SpaceNexus or Firmex",
        key_requirements: [
            "Document versioning and tracking",
            "Lender compliance certifications",
            "NDA enforcement at entry",
            "Document watermarking",
        ],
    },
    {
        use_case: "European Cross-Border M&A",
        description: "International deals with multi-language requirements and EU data residency mandates.",
        recommended: "iDeals or SpaceNexus",
        key_requirements: [
            "GDPR compliance and EU data residency",
            "Multi-language interface",
            "DPA and cross-border data transfer compliance",
            "Support for EU time zones",
        ],
    },
];

const bestPractices = [
    {
        title: "Set Up Permissions Before Uploading Documents",
        description:
            "Create your user groups and folder structure before uploading documents. This prevents accidental access and ensures buy-side users see the correct document structure from day one.",
    },
    {
        title: "Organize Documents by Deal Phase",
        description:
            "Use folders organized by due diligence work stream (Financial, Legal, Commercial, Tax, HR, etc.). This makes buyer navigation intuitive and speeds up Q&A response times.",
    },
    {
        title: "Monitor Real-Time Engagement Analytics",
        description:
            "Track which documents buyers are viewing and for how long. Hot documents indicate areas of buyer focus and can signal deal issues or buyer confidence.",
    },
    {
        title: "Implement Structured Q&A Workflow",
        description:
            "Use categories, urgency tags, and assignees for all Q&A. Don't let questions go to a generic inbox — structure ensures accountability and faster response.",
    },
    {
        title: "Leverage AI for Document Processing",
        description:
            "Use AI redaction and auto-categorization features to speed up room setup. Manual indexing wastes deal team hours that could be spent on higher-value M&A work.",
    },
    {
        title: "Set Clear User Access Policies",
        description:
            "Establish who can upload documents, who can modify permissions, and who has read-only access. Clear policies prevent security incidents and support audit trail integrity.",
    },
    {
        title: "Use NDA Click-Through Enforcement",
        description:
            "Require NDA acceptance before document access. This creates legal proof of NDA execution and prevents unauthorized sharing of confidential information.",
    },
    {
        title: "Plan Multi-Round Access",
        description:
            "If running multiple diligence rounds, plan for progressive disclosure. Don't dump all documents at once — phase access as buyer progress through due diligence.",
    },
];

const faqItems = [
    {
        question: "What is a virtual data room (VDR) provider?",
        answer:
            "A virtual data room provider is a secure, cloud-based platform for storing, sharing, and controlling access to confidential documents during high-stakes business transactions. Unlike generic cloud storage (Dropbox, Google Drive), VDRs are purpose-built for M&A due diligence, capital raising, legal proceedings, and real estate transactions. They offer enterprise-grade access controls, mandatory NDA enforcement, tamper-evident audit trails, Q&A workflow management, and security certifications required by financial regulators and legal teams.",
    },
    {
        question: "How do I know which VDR provider to choose?",
        answer:
            "Evaluate based on: (1) Security certifications (SOC 2 Type II, ISO 27001 required), (2) Pricing transparency (avoid quote-only vendors), (3) AI and automation features (redaction, categorization), (4) Setup speed (should be under 24 hours), (5) Buyer analytics capabilities, (6) Q&A workflow sophistication, and (7) User management flexibility. For mid-market M&A and fundraising, SpaceNexus offers the best combination of these factors. For large-cap institutional deals, Datasite is the established choice despite higher costs.",
    },
    {
        question: "How much does a virtual data room provider cost?",
        answer:
            "Pricing varies dramatically. SpaceNexus offers transparent, published monthly pricing starting around $1-3K per month (varies by plan), with no per-page fees or user limits. Legacy providers like Datasite and Intralinks quote-only pricing that typically runs $20K–$100K+ per deal, plus per-page charges. Mid-market providers like Firmex and iDeals offer $5K–$20K per project or monthly subscriptions. When evaluating total cost, account for storage limits, per-page charges, AI features, user caps, and contract lock-in terms.",
    },
    {
        question: "What security certifications does a VDR provider need?",
        answer:
            "Minimum requirements: SOC 2 Type II certification (audited controls for data security, availability, and confidentiality) and ISO 27001 compliance (international information security standard). Additional certifications to look for: SEC and FINRA readiness (for investment banking), HIPAA compliance (healthcare M&A), GDPR compliance (EU deals), and SOC 3 (highest transparency level). At the infrastructure level, require AES-256 encryption at rest, TLS 1.3 in transit, multi-factor authentication, granular folder permissions, and a tamper-evident audit trail.",
    },
    {
        question: "How long does it take to set up a virtual data room?",
        answer:
            "Modern providers like SpaceNexus enable setup in under 24 hours — upload documents, configure permissions, and invite users without any onboarding calls or CSM involvement. Legacy providers like Datasite and Intralinks typically require 3–5 business days and involve dedicated customer success managers for initial setup. For time-sensitive transactions (especially fundraising), setup speed is a critical evaluation factor that often determines deal momentum.",
    },
    {
        question: "What is the difference between a VDR and cloud storage?",
        answer:
            "Virtual data rooms and cloud storage serve fundamentally different purposes. VDRs provide deal-specific controls: granular document-level permissions, automatic NDA click-through enforcement, tamper-evident audit logs (every view/download logged with user, timestamp, duration), structured Q&A workflow, dynamic watermarking, and security certifications required by financial regulators. Cloud storage (Dropbox, SharePoint) lacks these compliance certifications, deal-specific workflows, and audit trail integrity required for M&A due diligence and legal proceedings.",
    },
    {
        question: "Can I see who is viewing my documents in a VDR?",
        answer:
            "Yes — this is one of the core features of a modern VDR provider. Real-time engagement analytics show which users viewed which documents, the timestamp, duration of view, and whether they downloaded the file. This intelligence is critical for M&A sell-side advisors (signals buyer interest) and in-house counsel (tracks who accessed privileged documents). Legacy providers sometimes require premium add-ons for this feature; modern providers include it as standard.",
    },
    {
        question: "Do I need a VDR for a small startup fundraising round?",
        answer:
            "Yes. Even small funding rounds benefit from a VDR. It demonstrates operational maturity to investors, creates a tamper-evident audit trail showing who accessed investor materials and when, allows you to track investor engagement (which investors are digging deep), and provides a professional impression. SpaceNexus is ideal for startups because it offers transparent pricing (no surprise per-page fees), fast setup (critical for founder speed), and engagement analytics that help founders gauge investor interest.",
    },
    {
        question: "What happens if I exceed my document storage limit?",
        answer:
            "This depends on your provider. SpaceNexus offers generous storage limits on most plans and provides clarity on add-on costs if you need more. Legacy providers like Datasite charge per-page fees for documents beyond your included limit, which can add up quickly on large deals. When evaluating providers, clarify storage limits, overage policies, and the difference between \"included\" storage and \"unlimited\" storage claims.",
    },
    {
        question: "Can I integrate a VDR with my existing software tools?",
        answer:
            "Most modern VDR providers offer integrations with common business tools (Salesforce, Slack, Microsoft Teams, etc.). Some providers have open APIs for custom integrations. Ask your vendor about: (1) Which integrations they support natively, (2) API availability for custom builds, (3) Whether integrations are included or cost extra, and (4) Technical support for third-party integrations.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Guide",
    headline: "Virtual Data Room Provider Guide 2026 — Complete Resource",
    description:
        "The ultimate guide to selecting, implementing, and maximizing virtual data room providers. Includes evaluation criteria, pricing analysis, security, use cases, and best practices.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-06-01",
    mainEntityOfPage: "https://spacenexus.net/vdr-guide",
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

export default function VDRGuidePage() {
    return (
        <>
            <Script id="vdr-guide-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="vdr-guide-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Complete 2026 Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                The Complete{" "}
                                <span className="text-[#2563eb]">Virtual Data Room Provider</span> Guide
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Everything you need to select, implement, and maximize a virtual data room provider for M&A, fundraising, legal work, or real estate transactions. This comprehensive guide covers evaluation criteria, pricing, security, use cases, and best practices.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#how-to-evaluate"
                                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200"
                                >
                                    Read Evaluation Guide
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </Link>
                                <Link href="/demo" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    See Top VDR Demo →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Table of Contents */}
                <section className="py-12 bg-[#f8f9fa] border-y border-gray-100 sticky top-[80px] z-40">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">On This Page</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            {tableOfContents.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="text-xs font-medium text-gray-700 hover:text-[#2563eb] hover:underline"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What is a VDR */}
                <section id="what-is-vdr" className="py-16 lg:py-20 bg-white scroll-mt-40">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Virtual Data Room?</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                A virtual data room (VDR) is a secure, cloud-based platform designed specifically for managing confidential documents during high-stakes business transactions. Think of it as a digital version of the physical "deal rooms" that M&A lawyers traditionally used — secure spaces where due diligence materials are stored under strict access controls and audit trails.
                            </p>
                            <p>
                                The key difference between a VDR and generic cloud storage (Dropbox, SharePoint, OneDrive) is purpose and compliance: VDRs are built for regulated transactions with features like mandatory NDA enforcement, document-level permissions, tamper-evident audit logs, Q&A workflow management, and security certifications required by financial regulators and legal teams.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-[#2563eb] p-6 rounded-lg">
                                <p className="font-semibold text-gray-900 mb-2">VDR providers are typically used for:</p>
                                <ul className="space-y-2 text-sm">
                                    <li>• <strong>M&A transactions</strong> — Due diligence document management for buy-side and sell-side advisors</li>
                                    <li>• <strong>Capital fundraising</strong> — Investor access to financial, legal, and operational materials during Series A/B/C rounds</li>
                                    <li>• <strong>Legal proceedings</strong> — Discovery document management, attorney-client privilege protection, and regulatory submissions</li>
                                    <li>• <strong>Real estate transactions</strong> — Property documents, loan documentation, and title management</li>
                                    <li>• <strong>Private equity</strong> — Portfolio company document management and LP reporting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why VDRs Matter */}
                <section id="why-vdr-matters" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-40">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Virtual Data Rooms Matter</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="text-2xl">🔐</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Security & Compliance</h3>
                                        <p className="text-sm text-gray-600">Enterprise-grade encryption, access controls, and audit trails prove compliance to regulators and counterparties.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-2xl">⚡</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Speed & Efficiency</h3>
                                        <p className="text-sm text-gray-600">Set up in hours instead of days. AI automation eliminates manual document processing and indexing.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-2xl">📊</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Deal Intelligence</h3>
                                        <p className="text-sm text-gray-600">Real-time analytics show which documents buyers are viewing — a critical signal of buyer interest and deal risk.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="text-2xl">🎯</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Structured Workflows</h3>
                                        <p className="text-sm text-gray-600">Purpose-built Q&A management, urgency tagging, and assignees ensure accountability and faster responses.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-2xl">💰</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Cost Optimization</h3>
                                        <p className="text-sm text-gray-600">Modern providers offer transparent pricing without surprise per-page fees or hidden enterprise charges.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-2xl">📋</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Audit Trail</h3>
                                        <p className="text-sm text-gray-600">Tamper-evident logs of every document view, download, and action prove regulatory compliance and manage legal risk.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Evaluate */}
                <section id="how-to-evaluate" className="py-16 lg:py-20 bg-white scroll-mt-40">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Evaluate VDR Providers</h2>
                            <p className="text-lg text-gray-600">
                                Use these eight criteria to objectively compare VDR providers against your specific transaction needs.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {evaluationCriteria.map((criterion) => (
                                <div key={criterion.number} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-all">
                                    <div className="text-3xl font-bold text-[#2563eb] mb-3">{criterion.number}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{criterion.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{criterion.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Top Providers */}
                <section id="top-providers" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-40">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top VDR Providers in 2026</h2>
                            <p className="text-lg text-gray-600">
                                A comprehensive overview of the three leading virtual data room providers, with detailed comparisons of features, pricing, and use cases.
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-6">
                            {providers.map((provider) => (
                                <div
                                    key={provider.name}
                                    className={`rounded-2xl border p-8 flex flex-col transition-all duration-300 ${provider.highlight
                                        ? "bg-white border-[#2563eb] shadow-lg shadow-blue-500/10 ring-1 ring-[#2563eb]/20"
                                        : "bg-white border-gray-200 hover:shadow-md hover:border-gray-300"
                                        }`}
                                >
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
                                            {provider.badge && (
                                                <span className="text-xs font-semibold bg-[#2563eb] text-white px-3 py-1 rounded-full">
                                                    {provider.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500 mb-3">{provider.tagline}</p>
                                    </div>
                                    <div className="mb-4 pb-4 border-b border-gray-100">
                                        <p className="text-sm text-[#2563eb] font-semibold mb-1">{provider.verdict}</p>
                                        <p className="text-xs text-gray-500">Pricing: {provider.pricing}</p>
                                        <p className="text-xs text-gray-500">Setup: {provider.setup}</p>
                                    </div>
                                    <div className="mb-6 flex-grow">
                                        <p className="text-xs font-semibold text-green-700 mb-2 uppercase">Key Strengths</p>
                                        <ul className="space-y-2">
                                            {provider.strengths.map((strength) => (
                                                <li key={strength} className="flex gap-2 text-xs text-gray-600">
                                                    <span className="text-green-500 shrink-0">✓</span>
                                                    {strength}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {provider.link && (
                                        <Link
                                            href={provider.link}
                                            className={`inline-flex items-center text-sm font-semibold px-4 py-2 rounded-lg transition-all ${provider.highlight
                                                ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                                                : "text-[#2563eb] hover:underline"
                                                }`}
                                        >
                                            {provider.linkText}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Breakdown */}
                <section id="pricing-breakdown" className="py-16 lg:py-20 bg-white scroll-mt-40">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing & Cost Analysis</h2>
                        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-8 mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Pricing Models Explained</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Transparent Monthly Pricing</p>
                                    <p className="text-sm text-gray-600">Published rates with clear per-month fees. No per-page charges. No surprise enterprise fees. Example: SpaceNexus ($1,500–$5,000/month depending on plan).</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Quote-Only Enterprise Pricing</p>
                                    <p className="text-sm text-gray-600">No published rates. Prices vary widely based on negotiation. Often includes per-page charges and expensive add-ons. Example: Datasite ($20K–$100K+ per deal).</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Per-Project or Subscription Hybrid</p>
                                    <p className="text-sm text-gray-600">Quote-based pricing for individual projects or monthly subscriptions. Example: Firmex, iDeals ($5K–$20K per project).</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                            <p className="font-semibold text-gray-900 mb-2">Total Cost of Ownership: Hidden Fees to Watch</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• <strong>Per-page charges</strong> — Can add $10K–$50K+ on large deals</li>
                                <li>• <strong>AI feature add-ons</strong> — Redaction, categorization sold separately on legacy platforms</li>
                                <li>• <strong>User caps</strong> — Extra fees for adding users mid-deal</li>
                                <li>• <strong>Annual lock-in</strong> — Early termination penalties</li>
                                <li>• <strong>Premium support</strong> — Response time guarantees cost extra</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Security & Compliance */}
                <section id="security-compliance" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-40">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Security & Compliance Checklist</h2>
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl border border-gray-100 p-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Must-Have Certifications</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex gap-3">
                                        <span className="text-lg">✓</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">SOC 2 Type II</p>
                                            <p className="text-sm text-gray-600">Annual audit of data security, availability, and confidentiality controls. The gold standard for cloud security.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-lg">✓</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">ISO 27001</p>
                                            <p className="text-sm text-gray-600">International standard for information security management. Shows compliance with global best practices.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-lg">✓</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">SEC/FINRA Ready</p>
                                            <p className="text-sm text-gray-600">Compliance with US financial regulator requirements. Essential for investment banking deals.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-lg">✓</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">GDPR / CCPA</p>
                                            <p className="text-sm text-gray-600">Data privacy compliance for EU and California transactions. Increasingly important for cross-border deals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-100 p-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Technical Security Requirements</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="text-[#2563eb] font-bold">•</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">AES-256 Encryption at Rest</p>
                                            <p className="text-sm text-gray-600">Industry-standard encryption for stored documents. Non-negotiable baseline.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#2563eb] font-bold">•</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">TLS 1.3 Encryption in Transit</p>
                                            <p className="text-sm text-gray-600">Protects data while being transmitted between your device and the VDR servers.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#2563eb] font-bold">•</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">Multi-Factor Authentication (MFA)</p>
                                            <p className="text-sm text-gray-600">Requires both password and a second factor (phone, authenticator app). Should be standard, not an add-on.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#2563eb] font-bold">•</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">Tamper-Evident Audit Trail</p>
                                            <p className="text-sm text-gray-600">Immutable logs of every action (view, download, share) with user, timestamp, and IP address. Critical for regulatory proof.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section id="use-cases" className="py-16 lg:py-20 bg-white scroll-mt-40">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">VDR Use Cases by Industry & Transaction Type</h2>
                        <div className="space-y-6">
                            {useCases.map((useCase, index) => (
                                <div key={index} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-all">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">{useCase.use_case}</h3>
                                        <span className="text-xs font-semibold bg-[#2563eb] text-white px-3 py-1 rounded-full whitespace-nowrap ml-4">
                                            {useCase.recommended}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Requirements:</p>
                                        <ul className="grid sm:grid-cols-2 gap-2">
                                            {useCase.key_requirements.map((req) => (
                                                <li key={req} className="text-sm text-gray-600 flex gap-2">
                                                    <span className="text-[#2563eb]">→</span> {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Best Practices */}
                <section id="best-practices" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-40">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">Best Practices for VDR Implementation</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {bestPractices.map((practice, index) => (
                                <div key={index} className="bg-white rounded-2xl border border-gray-100 p-6">
                                    <div className="text-2xl font-bold text-[#2563eb] mb-3">{String(index + 1).padStart(2, "0")}</div>
                                    <h3 className="font-bold text-gray-900 mb-2">{practice.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{practice.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section id="faq" className="py-16 lg:py-20 bg-white scroll-mt-40">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {faqItems.map((item, index) => (
                                <div key={index} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-8">
                                    <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Next Steps CTA */}
                <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ready to select your VDR provider?</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            See the leading VDR provider in action. AI-powered features, transparent pricing, and setup in under 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/demo"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
                            >
                                Request a Live Demo
                            </Link>
                            <Link
                                href="/virtual-data-room-providers"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200"
                            >
                                View Provider Comparison →
                            </Link>
                        </div>
                        <p className="text-sm text-gray-400 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                    </div>
                </section>
            </main>
        </>
    );
}
