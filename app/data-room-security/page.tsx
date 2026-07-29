import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Data Room Security 2026 — Encryption, Compliance & Best Practices | SpaceNexus",
    description: "Complete guide to data room security. Learn about AES-256 encryption, SOC 2 Type II, ISO 27001, access controls, and how to protect confidential deal documents.",
    alternates: {
        canonical: "https://spacenexus.net/data-room-security",
    },
    openGraph: {
        title: "Data Room Security 2026 — Encryption, Compliance & Best Practices | SpaceNexus",
        description:
            "Complete guide to data room security. Learn about AES-256 encryption, SOC 2 Type II, ISO 27001, access controls, and how to protect confidential deal documents.",
        url: "https://spacenexus.net/data-room-security",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Room Security 2026 — Encryption, Compliance & Best Practices | SpaceNexus",
        description:
            "Complete guide to data room security. Compare encryption standards, compliance certifications, access controls, and security features across top VDR platforms.",
    },
    keywords: [
        "data room security",
        "virtual data room security",
        "VDR security",
        "data room encryption",
        "secure data room",
        "data room compliance",
        "VDR security certifications",
        "data room access control",
        "data room security best practices",
        "secure virtual data room",
    ],
};

const securityFeatures = [
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "AES-256 Encryption",
        description: "All data is encrypted at rest using AES-256, the same standard used by financial institutions and government agencies. Data in transit is protected by TLS 1.3, ensuring end-to-end encryption between every user and the platform.",
        tags: ["AES-256 at rest", "TLS 1.3 in transit", "End-to-end"],
    },
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "SOC 2 Type II Certification",
        description: "SpaceNexus is SOC 2 Type II certified — the gold standard for service organization security. This certification validates that our security controls, policies, and procedures have been audited by an independent third party over an extended period.",
        tags: ["SOC 2 Type II", "Third-party audited", "Annual recertification"],
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Immutable Audit Trail",
        description: "Every document access event — view, download, print, permission change, and user login — is logged with timestamp, IP address, and user identity. Logs are immutable and cannot be modified or deleted, satisfying legal discovery and regulatory compliance requirements.",
        tags: ["Immutable logs", "Legal discovery", "SEC 17a-4 ready"],
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Granular Access Controls",
        description: "Set permissions at the folder, document, and individual page level. Restrict view-only, download, print, forward, and copy rights per user or group. Dynamic watermarks embed viewer identity, timestamp, and IP address on every document page.",
        tags: ["Folder-level", "Page-level", "Dynamic watermarks"],
    },
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Multi-Factor Authentication",
        description: "MFA enforcement for all users, with support for authenticator apps, SMS codes, hardware security keys, and biometric authentication. SSO integration with SAML 2.0, OAuth 2.0, Okta, Azure AD, and OneLogin enables centralized identity management.",
        tags: ["MFA enforcement", "SAML 2.0 / OAuth 2.0", "Okta / Azure AD"],
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI-Powered Document Security",
        description: "AI automatically detects and redacts PII, financial data, and privileged information before documents are shared. Smart classification flags sensitive content and applies the appropriate security restrictions based on document type and content analysis.",
        tags: ["Auto-redaction", "Sensitive content detection", "Smart classification"],
    },
    {
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "NDA Click-Through Enforcement",
        description: "Require all external parties to electronically accept a non-disclosure agreement before accessing any documents. Each acceptance is timestamped, logged in the audit trail, and stored as part of the transaction record. Customizable NDA templates with e-signature capture.",
        tags: ["Click-through NDA", "E-signature", "Custom templates"],
    },
    {
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        title: "Zero Trust Architecture",
        description: "No user or device is trusted by default — every access request is authenticated, authorized, and encrypted before access is granted. IP-based access restrictions, device posture checks, and session timeouts provide additional security layers for sensitive deal rooms.",
        tags: ["Zero Trust", "IP restrictions", "Device posture checks"],
    },
    {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "ISO 27001 Alignment",
        description: "SpaceNexus aligns with ISO 27001 information security management standards, ensuring a systematic approach to managing sensitive company information. This includes risk assessment, security policies, asset management, and continuous monitoring.",
        tags: ["ISO 27001", "Risk management", "Continuous monitoring"],
    },
];

const comparisonRows = [
    { feature: "Encryption Standard", spacenexus: { value: "AES-256 + TLS 1.3", good: true }, legacy: { value: "AES-256 + TLS 1.2", good: true }, generic: { value: "Varies, often basic", good: false } },
    { feature: "SOC 2 Type II", spacenexus: { value: "Certified", good: true }, legacy: { value: "Certified", good: true }, generic: { value: "Rarely certified", good: false } },
    { feature: "Granular Permissions", spacenexus: { value: "Folder, doc & page level", good: true }, legacy: { value: "Folder-level only", good: false }, generic: { value: "Basic sharing", good: false } },
    { feature: "Dynamic Watermarking", spacenexus: { value: "Auto on every page", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Not available", good: false } },
    { feature: "Immutable Audit Trail", spacenexus: { value: "Immutable + SEC 17a-4", good: true }, legacy: { value: "Immutable", good: true }, generic: { value: "Basic activity log", good: false } },
    { feature: "AI Redaction", spacenexus: { value: "Built-in, one-click", good: true }, legacy: { value: "Add-on or manual", good: false }, generic: { value: "Not available", good: false } },
    { feature: "Zero Trust Architecture", spacenexus: { value: "Full implementation", good: true }, legacy: { value: "Partial", good: false }, generic: { value: "None", good: false } },
    { feature: "MFA Enforcement", spacenexus: { value: "All users, multiple methods", good: true }, legacy: { value: "Available", good: true }, generic: { value: "Optional", good: false } },
    { feature: "SSO Integration", spacenexus: { value: "SAML 2.0, OAuth, Okta, Azure AD", good: true }, legacy: { value: "SAML 2.0", good: true }, generic: { value: "Varies", good: false } },
    { feature: "Compliance Certifications", spacenexus: { value: "SOC 2 II, ISO 27001, GDPR, HIPAA, SEC", good: true }, legacy: { value: "SOC 2 II, ISO 27001", good: true }, generic: { value: "Minimal", good: false } },
];

const faqItems = [
    {
        question: "What is data room security?",
        answer: "Data room security refers to the set of technologies, policies, and procedures that protect confidential documents stored in a virtual data room. This includes encryption (AES-256 at rest, TLS 1.3 in transit), access controls (granular permissions, dynamic watermarking), authentication (MFA, SSO), audit logging (immutable tracking of every access event), compliance certifications (SOC 2 Type II, ISO 27001), and deal-specific security features (NDA enforcement, document expiry, remote wipe). Data room security is fundamentally different from generic cloud storage security because it is designed to meet the legal, regulatory, and compliance requirements of high-stakes business transactions.",
    },
    {
        question: "How secure is a virtual data room?",
        answer: "Purpose-built virtual data rooms are the most secure method for sharing confidential deal documents. SpaceNexus, for example, uses AES-256 encryption at rest and TLS 1.3 in transit, SOC 2 Type II certification, ISO 27001 alignment, Zero Trust architecture, MFA enforcement, and immutable audit trails. Every document access event is logged and cannot be modified or deleted. Dynamic watermarks embed viewer identity on every page. Compared to email, file-sharing tools, and cloud storage platforms — which lack these transaction-specific security controls — VDRs provide enterprise-grade security that meets the requirements of financial regulators, legal counsel, and compliance officers.",
    },
    {
        question: "What encryption standards do data rooms use?",
        answer: "Enterprise data rooms use AES-256 encryption for data at rest — the same standard used by the US government for classified information — and TLS 1.3 (or at minimum TLS 1.2) for data in transit. AES-256 is the most widely adopted symmetric encryption algorithm and is approved by the National Security Agency (NSA) for top-secret information. TLS 1.3 is the latest version of the transport layer security protocol, providing faster and more secure connections than its predecessors. Some legacy VDRs still use TLS 1.2; modern platforms like SpaceNexus use TLS 1.3 as the default.",
    },
    {
        question: "What compliance certifications should a data room have?",
        answer: "The essential compliance certifications for a virtual data room are SOC 2 Type II (the gold standard for service organization security, audited annually by an independent third party) and ISO 27001 (international standard for information security management systems). Depending on your industry and transaction type, additional certifications may include HIPAA (for healthcare and life sciences deals), GDPR compliance (for transactions involving EU personal data), SEC 17a-4 (for US investment banking and broker-dealer records retention), and FedRAMP (for government-related transactions). SpaceNexus holds SOC 2 Type II and aligns with ISO 27001, HIPAA, GDPR, and SEC 17a-4 requirements.",
    },
    {
        question: "What are the most important data room security features?",
        answer: "The most important data room security features are: (1) AES-256 encryption at rest and TLS 1.3 in transit; (2) SOC 2 Type II certification with independent auditing; (3) granular permission controls at the folder, document, and page level; (4) dynamic watermarking with viewer identity embedded on every page; (5) immutable audit trail logging every access event; (6) MFA enforcement for all users; (7) NDA click-through enforcement at room entry; (8) Zero Trust architecture with IP-based access restrictions; (9) document expiry and remote wipe capabilities; and (10) AI-powered redaction to prevent accidental sharing of sensitive information. These features together provide defense-in-depth security for confidential transactions.",
    },
    {
        question: "How do data rooms prevent unauthorized access?",
        answer: "Data rooms prevent unauthorized access through a multi-layered approach: (1) Authentication — MFA enforcement ensures users prove their identity through multiple factors; (2) Authorization — granular permissions restrict access to specific folders, documents, or pages based on user role and deal team membership; (3) Encryption — AES-256 and TLS 1.3 ensure that even if data is intercepted, it cannot be read; (4) Dynamic watermarking — every page displays the viewer's identity, discouraging and tracing unauthorized sharing; (5) Session controls — automatic timeout, device posture checks, and IP-based restrictions limit access to authorized devices and locations; (6) NDA enforcement — external parties must accept a legally binding NDA before accessing any content.",
    },
    {
        question: "Is SpaceNexus data room security SOC 2 certified?",
        answer: "Yes. SpaceNexus holds SOC 2 Type II certification, which means an independent auditing firm has verified that our security controls, policies, and procedures meet the AICPA's Trust Services Criteria for security, availability, processing integrity, confidentiality, and privacy. This certification is conducted annually and includes testing of controls over an extended period (typically 6-12 months). SpaceNexus also aligns with ISO 27001, GDPR, HIPAA, and SEC 17a-4 requirements. You can request our SOC 2 Type II report during the evaluation process — we make it available under NDA to qualified prospects and customers.",
    },
    {
        question: "What data room security standards do M&A deals require?",
        answer: "M&A transactions require the highest level of data room security because they involve sensitive financial data, intellectual property, trade secrets, and personally identifiable information. The standard requirements include: SOC 2 Type II certification (required by most investment banks and corporate development teams); AES-256 encryption; immutable audit trails (required for SEC 17a-4 compliance at US financial institutions); NDA enforcement (standard legal requirement for buyer access); granular permission controls (to maintain privilege walls between competing bidders); dynamic watermarking (to trace document leaks); and MFA enforcement. SpaceNexus meets all of these standards and is used by deal teams at major investment banks, PE firms, and law firms.",
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
        { "@type": "ListItem", position: 2, name: "Data Room Security", item: "https://spacenexus.net/data-room-security" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Data Room Security 2026 — Complete Guide to Protecting Deal Documents",
    description: "The complete guide to data room security in 2026. Learn about encryption standards, compliance certifications, access controls, and best practices for protecting confidential M&A, fundraising, and legal documents.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-07-01",
    mainEntityOfPage: "https://spacenexus.net/data-room-security",
};

export default function DataRoomSecurityPage() {
    return (
        <>
            <Script id="drs-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="drs-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="drs-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Data Room Security</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                2026 Security Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Data Room Security{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all data rooms are equally secure. This guide covers encryption standards, compliance certifications, access controls, and how to choose a platform that protects your most sensitive deal documents.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                Last updated: July 2026 &nbsp;·&nbsp; Covers encryption, compliance, access control, audit trails, and security best practices
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Try SpaceNexus Free
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <a href="#features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Explore Security Features
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is data room security */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is data room security?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Data room security is the comprehensive framework of encryption, access controls, authentication, audit logging, compliance certifications, and deal-specific protections that safeguard confidential documents in a virtual data room. Unlike general cloud security, data room security is purpose-built for the legal, regulatory, and compliance demands of high-stakes business transactions — M&A due diligence, fundraising, legal proceedings, and corporate restructurings.
                            </p>
                            <p>
                                A secure data room must provide protection across multiple layers: at the infrastructure level (AES-256 encryption, TLS 1.3, SOC 2 Type II certified data centers), at the access level (MFA, SSO, granular permissions, Zero Trust architecture), at the document level (dynamic watermarking, AI redaction, document expiry), and at the compliance level (immutable audit trails, NDA enforcement, regulatory certifications). Each layer addresses specific threats — from external cyberattacks and insider threats to accidental data leaks and regulatory non-compliance.
                            </p>
                            <p>
                                The cost of inadequate data room security is severe: leaked deal terms can destroy transaction value, exposed intellectual property can erode competitive advantage, and compliance failures can result in regulatory penalties and legal liability. This is why financial regulators, investment banks, law firms, and corporate development teams mandate specific security standards for their transaction data rooms — and why generic file-sharing tools like Google Drive or Dropbox are never acceptable substitutes for purpose-built data room security.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { value: "AES-256", label: "Encryption at rest & TLS 1.3 in transit" },
                                { value: "SOC 2 II", label: "Independently audited annually" },
                                { value: "Zero Trust", label: "Every access request verified" },
                                { value: "100%", label: "Immutable audit trail coverage" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                                    <div className="text-xs text-blue-200 leading-snug">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Security Features */}
                <section id="features" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Security Features</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                What data room security must include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine security capabilities form the baseline for any enterprise-grade virtual data room.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {securityFeatures.map((feature) => (
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
                                    Enterprise Data Room Security
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — SOC 2 Type II certified data room security with transparent pricing
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus provides enterprise-grade data room security with AES-256 encryption, SOC 2 Type II certification, Zero Trust architecture, immutable audit trails, and AI-powered document protection — all included at a transparent, published price.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "SOC 2 Type II", desc: "Independently audited annually" },
                                        { label: "AES-256 + TLS 1.3", desc: "End-to-end encryption" },
                                        { label: "Zero Trust", desc: "Verify every access request" },
                                        { label: "AI Redaction", desc: "Auto-detect and redact PII" },
                                        { label: "Immutable Audit", desc: "SEC 17a-4 ready" },
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
                                                <p className="text-xs text-gray-600">{item.desc}</p>
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
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">app.spacenexus.net / dashboard</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl">
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus data room security dashboard" className="w-full h-auto" loading="lazy" />
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
                                Data room security compared: SpaceNexus vs legacy VDRs vs generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy enterprise VDR platforms and generic cloud storage on the security features that matter most for confidential transactions.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Security Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Legacy VDR<br /><span className="text-xs font-normal text-gray-600">(Datasite / Intralinks)</span></div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Generic Tools<br /><span className="text-xs font-normal text-gray-600">(Drive / SharePoint)</span></div>
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
                        <p className="text-xs text-gray-600 mt-3 text-center">Based on publicly available information. Last updated July 2026.</p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about data room security
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
                            <Link href="/security" className="text-sm font-semibold text-[#2563eb] hover:underline">VDR Security & Compliance →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/faq/vdr-security" className="text-sm font-semibold text-[#2563eb] hover:underline">VDR Security FAQ →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/features/security-compliance" className="text-sm font-semibold text-[#2563eb] hover:underline">Security Features →</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-due-diligence" className="text-sm font-semibold text-[#2563eb] hover:underline">Due Diligence Data Room →</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Experience enterprise-grade data room security
                        </h2>
                        <p className="text-gray-600 mb-8">
                            SOC 2 Type II certified. AES-256 encryption. Immutable audit trails. Zero Trust architecture. AI-powered redaction. See why 500+ deal teams trust SpaceNexus for data room security.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                View Pricing
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
                </section>
            </main>
        </>
    );
}
