import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Board Document Portal 2026 | SpaceNexus",
    description: "Compare the best board document portal platforms. Securely distribute board packs, share meeting materials, and manage board communications with enterprise-grade security.",
    alternates: {
        canonical: "https://spacenexus.net/board-document-portal",
    },
    openGraph: {
        title: "Board Document Portal 2026 | SpaceNexus",
        description:
            "Compare the best board document portal platforms. Securely distribute board packs, share meeting materials, and manage board communications with enterprise-grade security.",
        url: "https://spacenexus.net/board-document-portal",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Board Document Portal 2026 — Secure Board Portal Platform Guide | SpaceNexus",
        description:
            "Complete guide to board document portals. Compare features, pricing, and security across the top platforms for secure board document distribution and governance.",
    },
    keywords: [
        "board document portal",
        "board portal",
        "board document management",
        "secure board document sharing",
        "board portal software",
        "board document distribution",
        "board pack portal",
        "board governance portal",
        "board meeting document portal",
        "board document platform",
    ],
};

const coreFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Enterprise-Grade Security",
        description: "SOC 2 Type II certified, AES-256 encryption at rest, TLS 1.3 in transit. Board documents are protected with Zero Trust architecture, MFA enforcement, and role-based access controls.",
        tags: ["SOC 2 Type II", "AES-256", "Zero Trust"],
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Granular Board Permissions",
        description: "Control access at the board pack, document, and page level. Restrict view, download, print, and forward rights per director, committee, or board role. Ensure directors see only the materials they are authorized to view.",
        tags: ["Role-based access", "Committee permissions", "Dynamic watermarks"],
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "Board Pack Distribution",
        description: "Securely distribute board packs, meeting agendas, and supporting materials with a single click. Automatic version control ensures all directors access the latest documents. Track who has viewed each document.",
        tags: ["Board packs", "Version control", "View tracking"],
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Director Collaboration",
        description: "Enable directors to annotate documents, share comments, and ask questions within the secure portal — eliminating email chains and ensuring that board discussions remain confidential and auditable.",
        tags: ["Annotations", "Secure comments", "Audit trail"],
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Board Engagement Analytics",
        description: "Track which documents each director has viewed, how much time they spent, and which materials attract the most attention. Identify disengaged directors before the meeting and follow up proactively.",
        tags: ["Per-director analytics", "Engagement tracking", "Read receipts"],
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Immutable Audit Trail",
        description: "Every board document access, annotation, and permission change is logged with timestamp and user identity. Immutable audit logs satisfy governance, compliance, and regulatory requirements.",
        tags: ["Governance", "Compliance", "Immutable logs"],
    },
    {
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "NDA & Confidentiality",
        description: "Require directors to electronically acknowledge confidentiality agreements before accessing board documents. Each acknowledgment is timestamped and logged as part of the governance record.",
        tags: ["Confidentiality", "Acknowledgment", "Timestamped"],
    },
    {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "Full-Text Search",
        description: "Instant search across all board documents, meeting minutes, resolutions, and committee materials. Find any agenda item, decision, or reference across years of board records in seconds.",
        tags: ["Cross-document", "OCR", "Natural language"],
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Multi-Board & Committee Support",
        description: "Manage document portals for multiple boards, committees, and advisory groups from a single platform. Each entity has its own document repository, permission set, and member directory — completely isolated.",
        tags: ["Multi-board", "Committee isolation", "Centralized admin"],
    },
];

const comparisonRows = [
    { feature: "Document Permissions", spacenexus: { value: "Folder, doc & page level", good: true }, legacy: { value: "Folder-level only", good: false }, generic: { value: "Basic sharing", good: false } },
    { feature: "Board Pack Distribution", spacenexus: { value: "One-click with version control", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Manual email", good: false } },
    { feature: "Director Analytics", spacenexus: { value: "Per-director view tracking", good: true }, legacy: { value: "Limited reporting", good: false }, generic: { value: "Not available", good: false } },
    { feature: "SOC 2 Type II", spacenexus: { value: "Certified", good: true }, legacy: { value: "Certified", good: true }, generic: { value: "Rarely certified", good: false } },
    { feature: "Immutable Audit Trail", spacenexus: { value: "Full governance trail", good: true }, legacy: { value: "Basic activity log", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Director Annotations", spacenexus: { value: "Secure in-portal annotations", good: true }, legacy: { value: "Available", good: true }, generic: { value: "External tools only", good: false } },
    { feature: "NDA Acknowledgment", spacenexus: { value: "Electronic click-through", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Manual process", good: false } },
    { feature: "Setup Time", spacenexus: { value: "Under 24 hours, self-serve", good: true }, legacy: { value: "Weeks, requires onboarding", good: false }, generic: { value: "Instant (limited features)", good: false } },
    { feature: "Pricing Transparency", spacenexus: { value: "Published, transparent", good: true }, legacy: { value: "Quote-only, opaque", good: false }, generic: { value: "Published (limited)", good: true } },
    { feature: "Multi-Board Support", spacenexus: { value: "Unlimited boards", good: true }, legacy: { value: "Per-board licensing", good: false }, generic: { value: "Single workspace", good: false } },
];

const faqItems = [
    {
        question: "What is a board document portal?",
        answer: "A board document portal is a secure, cloud-based platform for distributing, managing, and collaborating on board of directors documents. It replaces the traditional process of emailing board packs as PDF attachments — which creates security, version control, and governance risks — with a centralized portal where directors can securely access meeting materials, annotate documents, and collaborate while maintaining a complete audit trail. Board document portals are essential for corporate governance, regulatory compliance, and efficient board operations.",
    },
    {
        question: "How is a board document portal different from emailing board packs?",
        answer: "A board document portal differs from emailing board packs in several critical ways: (1) Security — documents in a portal are protected with enterprise-grade encryption, MFA, and granular permissions, while email attachments are vulnerable to forwarding, accidental exposure, and data breaches; (2) Version control — portals ensure all directors access the latest version, eliminating the confusion of multiple email threads with updated attachments; (3) Audit trails — every document access, annotation, and permission change is logged for governance compliance; (4) Analytics — directors can see who has reviewed materials and who has not, enabling proactive follow-up before meetings. Email provides none of these capabilities.",
    },
    {
        question: "What features should a board document portal include?",
        answer: "Essential board document portal features include: SOC 2 Type II certification; AES-256 encryption at rest and TLS 1.3 in transit; granular permissions at the board pack, document, and page level; dynamic watermarking with director identity; one-click board pack distribution with automatic version control; per-director engagement analytics and read receipts; secure in-portal document annotations and comments; immutable audit trail for governance compliance; NDA and confidentiality acknowledgment capture; full-text search across all board documents; multi-board and committee support; SSO integration with Okta, Azure AD, and SAML 2.0; and transparent pricing without per-document or per-director fees.",
    },
    {
        question: "How much does a board document portal cost?",
        answer: "Board document portal pricing varies by provider. SpaceNexus offers transparent, published flat-rate pricing with no per-director or per-document fees — all features including AI document processing, analytics, and audit trails are included. Legacy board portal providers like Diligent and Nasdaq Boardvantage operate on quote-only pricing that typically costs thousands per director per year, with additional charges for document storage, meeting materials, and support. A modern board document portal delivers enterprise-grade governance capabilities at a fraction of the cost of legacy solutions.",
    },
    {
        question: "Which board document portal is best for corporate boards?",
        answer: "SpaceNexus is the best board document portal for corporate boards in 2026. It offers secure board pack distribution with version control, per-director engagement analytics, granular document permissions, SOC 2 Type II certification, transparent published pricing with no per-director fees, and setup in under 24 hours. Legacy portals like Diligent and Nasdaq Boardvantage remain options for large public companies with established governance workflows, but they lack the AI capabilities, pricing transparency, and modern architecture that forward-thinking boards increasingly demand.",
    },
    {
        question: "Is a board document portal secure?",
        answer: "Yes. Purpose-built board document portals meet the highest security standards required for board-level confidential materials. SpaceNexus holds SOC 2 Type II certification, aligns with ISO 27001, and provides AES-256 encryption at rest, TLS 1.3 in transit, Zero Trust architecture, MFA enforcement, and dynamic watermarking that embeds director identity on every document page. Every access event is logged in an immutable audit trail. Emailing board packs as PDF attachments or using consumer file-sharing tools does not meet these security standards and creates material governance risk.",
    },
    {
        question: "Can a board document portal support multiple boards and committees?",
        answer: "Yes. Enterprise board document portals like SpaceNexus are designed to support multiple boards, committees, and advisory groups from a single platform. Each board or committee has its own isolated document repository with independent permission sets, member directories, and document libraries. A corporate secretary or board administrator can manage all entities from a central dashboard, assign directors to the appropriate boards and committees, and control access at the entity level. This multi-entity capability is essential for organizations with overlapping board structures, such as holding companies, nonprofit organizations, and private equity firms with multiple portfolio company boards.",
    },
    {
        question: "How quickly can a board document portal be implemented?",
        answer: "Modern board document portals like SpaceNexus can be fully implemented and operational in under 24 hours. Upload board packs, configure director permissions, set up committee structures, and invite board members — all through self-service without dedicated implementation support. Legacy board portal providers typically require weeks of onboarding, including dedicated project managers, director training sessions, and custom configuration. The rapid implementation of modern portals means organizations can improve board governance and security immediately rather than waiting weeks for deployment.",
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
        { "@type": "ListItem", position: 2, name: "Board Document Portal", item: "https://spacenexus.net/board-document-portal" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Board Document Portal 2026 — Complete Guide to Secure Board Portals",
    description: "The complete guide to board document portals in 2026. Compare features, pricing, and security across the top platforms for secure board document distribution, governance, and collaboration.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/board-document-portal",
};

export default function BoardDocumentPortalPage() {
    return (
        <>
            <Script id="bdp-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="bdp-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="bdp-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Board Document Portal</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                2026 Governance Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Board Document Portal{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all board document portals are built the same. This guide covers what to look for, what separates purpose-built board document portals from email and generic file-sharing, and which platform leads in 2026.
                            </p>
                            <p className="text-sm text-gray-400 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers features, pricing, security, governance, and top platforms
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Try SpaceNexus Free
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <a href="#features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    See All Features
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is a board document portal */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a board document portal?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                A board document portal is a secure, cloud-based platform designed specifically for distributing, managing, and collaborating on board of directors materials. It serves as a centralized hub where board administrators can upload board packs, meeting agendas, resolutions, and supporting documents — and where directors can securely access, review, annotate, and discuss those materials in a governed environment with a complete audit trail.
                            </p>
                            <p>
                                What sets a board document portal apart from generic file-sharing tools or email is its governance-focused feature set: granular permission controls ensure directors see only the materials for their specific board or committee, dynamic watermarking deters unauthorized sharing, immutable audit trails satisfy regulatory compliance requirements, and engagement analytics provide visibility into which directors have reviewed materials before meetings. These capabilities are essential for public company governance, nonprofit board oversight, and any organization that takes board confidentiality and compliance seriously.
                            </p>
                            <p>
                                In 2026, the board document portal market is divided between legacy governance platforms (Diligent, Nasdaq Boardvantage) built for large public companies with high per-director pricing and lengthy implementations, and modern platforms like SpaceNexus that deliver the same enterprise-grade security and governance features with AI-powered document processing, transparent pricing, and setup in under 24 hours — making professional board document management accessible to organizations of all sizes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { value: "SOC 2 II", label: "Enterprise security certified" },
                                { value: "< 24hrs", label: "Average portal setup time" },
                                { value: "100%", label: "Immutable audit trail coverage" },
                                { value: "500+", label: "Enterprise teams trust SpaceNexus" },
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
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Feature Breakdown</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                What the best board document portal must include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any serious board document portal platform.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {coreFeatures.map((feature) => (
                                <div key={feature.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{feature.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {feature.tags.map((tag) => (
                                            <span key={tag} className="text-xs bg-blue-50 text-[#2563eb] px-2 py-0.5 rounded-full font-medium border border-blue-100">{tag}</span>
                                        ))}
                                    </div>
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
                                    Recommended Board Document Portal
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — Secure board document portal with transparent pricing
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is a purpose-built board document portal for modern governance teams. Every plan includes secure board pack distribution, per-director engagement analytics, granular document permissions, immutable audit trails, and multi-board support — all with enterprise-grade security and transparent, published pricing.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "Board Pack Distribution", desc: "One-click with version control" },
                                        { label: "Director Analytics", desc: "Real-time engagement tracking" },
                                        { label: "Secure Annotations", desc: "In-portal director comments" },
                                        { label: "Immutable Audit Trail", desc: "Full governance compliance" },
                                        { label: "SOC 2 Type II", desc: "Certified + ISO 27001" },
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
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus board document portal dashboard" className="w-full h-auto" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Board document portal compared: SpaceNexus vs legacy portals vs generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy board portal platforms and generic file-sharing tools on the features that matter most for board governance.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-400 border-l border-gray-700">Legacy Board Portal<br /><span className="text-xs font-normal text-gray-500">(Diligent / Boardvantage)</span></div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-400 border-l border-gray-700">Generic Tools<br /><span className="text-xs font-normal text-gray-500">(Email / Drive)</span></div>
                            </div>
                            {comparisonRows.map((row, i) => (
                                <div key={row.feature} className={`grid grid-cols-4 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                    <div className="px-5 py-3.5 text-sm font-medium text-gray-800">{row.feature}</div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 font-medium ${row.spacenexus.good ? "text-green-700" : "text-red-500"}`}>
                                        {row.spacenexus.good && <span className="inline-flex items-center gap-1"><svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>{row.spacenexus.value}</span>}
                                        {!row.spacenexus.good && row.spacenexus.value}
                                    </div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 ${row.legacy.good ? "text-gray-600" : "text-red-500"}`}>{row.legacy.value}</div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 ${row.generic.good ? "text-gray-600" : "text-red-500"}`}>{row.generic.value}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-3 text-center">Based on publicly available information. Last updated July 2026.</p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about board document portals
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

                {/* Related */}
                <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-4">Related resources</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/board-portal-software" className="text-sm font-semibold text-[#2563eb] hover:underline">Board Portal Software →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/board-portals" className="text-sm font-semibold text-[#2563eb] hover:underline">Board Portals Guide →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/enterprise-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">Enterprise Data Room →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-security" className="text-sm font-semibold text-[#2563eb] hover:underline">Data Room Security →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            See the board document portal built for modern governance
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Secure board pack distribution. Per-director engagement analytics. Immutable audit trails. Transparent published pricing. SOC 2 Type II certified.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                View Pricing
                            </Link>
                        </div>
                        <p className="text-sm text-gray-400 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
                </section>
            </main>
        </>
    );
}
