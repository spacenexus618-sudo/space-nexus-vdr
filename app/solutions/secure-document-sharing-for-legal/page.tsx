import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Secure Document Sharing for Legal | SpaceNexus",
    description: "Encrypted legal file sharing with court-admissible audit trails, ethical wall enforcement, and SOC 2 / ISO 27001 compliance.",
    alternates: {
        canonical: "https://spacenexus.net/solutions/secure-document-sharing-for-legal",
    },
    openGraph: {
        title: "Secure Document Sharing for Legal | SpaceNexus",
        description:
            "Encrypted legal file sharing with court-admissible audit trails, ethical wall enforceme...",
        url: "https://spacenexus.net/solutions/secure-document-sharing-for-legal",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Secure Document Sharing for Law Firms — SpaceNexus Legal VDR",
        description:
            "Purpose-built legal VDR with privilege protection, structured Q&A, tamper-evident audit logs, and SOC 2 Type II compliance.",
    },
    keywords: [
        "secure document sharing for law firms",
        "legal due diligence software",
        "law firm virtual data room",
        "legal data room",
        "attorney-client privilege VDR",
        "legal VDR",
        "due diligence Q&A workflow",
        "law firm document management",
        "secure legal document platform",
        "legal document sharing software",
        "SOC 2 data room for law firms",
        "M&A legal document sharing",
    ],
};

const faqItems = [
    {
        question: "What is secure document sharing for law firms?",
        answer: "Secure document sharing for law firms is a specialized Virtual Data Room (VDR) platform that allows attorneys to share confidential documents with clients, opposing counsel, and deal parties while maintaining attorney-client privilege. Unlike generic file-sharing tools, a legal VDR provides granular access controls, tamper-evident audit trails, dynamic watermarking, and NDA gates — all features required for regulatory compliance and courtroom admissibility.",
    },
    {
        question: "How does SpaceNexus protect attorney-client privilege?",
        answer: "SpaceNexus protects attorney-client privilege through dedicated privilege and non-privilege folder hierarchies with separate permission sets, ensuring only authorized attorneys can view protected materials. Privilege logs are maintained automatically, access is restricted at the document, folder, and user level, and every interaction is recorded in an immutable audit trail — preventing inadvertent waiver of privilege during due diligence.",
    },
    {
        question: "Is SpaceNexus compliant with SOC 2, ISO 27001, and GDPR?",
        answer: "Yes. SpaceNexus is independently audited and SOC 2 Type II certified. The platform aligns with ISO 27001 information security standards and is GDPR-ready for firms operating in or with European clients. All data is encrypted with AES-256 at rest and TLS 1.3 in transit, with data residency options available to meet jurisdictional requirements.",
    },
    {
        question: "How is a legal VDR different from Dropbox or Google Drive?",
        answer: "Generic cloud storage like Dropbox or Google Drive lacks the security controls law firms require: there are no granular permission hierarchies, no tamper-evident audit logs accepted by courts, no dynamic watermarking, no NDA click-through gates, and no privilege log management. A legal VDR like SpaceNexus is purpose-built for regulated industries where document security, access control, and compliance are non-negotiable.",
    },
    {
        question: "What types of legal transactions use SpaceNexus?",
        answer: "SpaceNexus is used for M&A due diligence, litigation and e-discovery document production, corporate restructuring, IPO preparation, real estate closings, joint ventures, and licensing agreements. Any legal workflow that involves sharing confidential or privileged documents with external parties benefits from a secure, audit-ready data room.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
        },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://spacenexus.net",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: "https://spacenexus.net/solutions",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Secure Document Sharing for Legal",
            item: "https://spacenexus.net/solutions/secure-document-sharing-for-legal",
        },
    ],
};

const securityFeatures = [
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Attorney-Client Privilege Protection",
        description:
            "Separate privilege and non-privilege document sets with granular folder-level permissions. Dedicated privilege log management ensures only authorized attorneys access protected materials, preventing inadvertent waiver during due diligence proceedings.",
    },
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Tamper-Evident Audit Logs",
        description:
            "Every document access, download, print, and permission change is logged with cryptographic certainty. Audit logs are immutable, timestamped to the millisecond, and generate court-admissible reports that regulators and judges accept as evidence of compliance.",
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Dynamic Watermarking",
        description:
            "Every downloaded or printed document is automatically watermarked with the recipient's name, email, IP address, and timestamp — deterring unauthorized sharing and enabling immediate leak source identification if confidential materials surface externally.",
    },
    {
        icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
        title: "Granular Access Control",
        description:
            "Role-based permissions at the document, folder, and individual user level. Set automatic access expiry dates, restrict downloads per party, limit printing, enforce view-only modes for sensitive materials, and revoke access instantly when engagement terms change.",
    },
    {
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "NDA Click-Through Gate",
        description:
            "Require every external party to sign an NDA or confidentiality agreement before accessing any data room materials. Signed agreements are automatically stored with timestamps, IP addresses, and digital signatures in the deal record for future reference.",
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "SOC 2 Type II Certification",
        description:
            "SpaceNexus is independently audited and SOC 2 Type II certified, with ISO 27001 alignment and GDPR readiness. Client data is protected by AES-256 encryption at rest, TLS 1.3 in transit, and infrastructure hosted in SOC 2 certified data centers with 99.9% uptime SLA.",
    },
];

const comparisonData = [
    { feature: "Attorney-Client Privilege Folders", spacenexus: true, generic: false, legacy: true },
    { feature: "Tamper-Evident Audit Logs", spacenexus: true, generic: false, legacy: true },
    { feature: "Dynamic Watermarking", spacenexus: true, generic: false, legacy: true },
    { feature: "NDA Click-Through Gate", spacenexus: true, generic: false, legacy: false },
    { feature: "Granular Folder-Level Permissions", spacenexus: true, generic: false, legacy: true },
    { feature: "Structured Q&A with Audit Trail", spacenexus: true, generic: false, legacy: true },
    { feature: "SOC 2 Type II Certified", spacenexus: true, generic: false, legacy: true },
    { feature: "ISO 27001 Aligned", spacenexus: true, generic: false, legacy: false },
    { feature: "AI-Powered Document Processing", spacenexus: true, generic: false, legacy: false },
    { feature: "Real-Time Activity Analytics", spacenexus: true, generic: false, legacy: false },
    { feature: "Unlimited Users & Storage", spacenexus: true, generic: true, legacy: false },
    { feature: "24-Hour Data Room Setup", spacenexus: true, generic: true, legacy: false },
];

const workflowSteps = [
    {
        step: "1",
        title: "Set Up Your Secure Legal Data Room",
        description:
            "Create a new data room in minutes. Define your folder structure with separate privilege and non-privilege hierarchies, upload documents in bulk with drag-and-drop, and let AI auto-index your files by category.",
    },
    {
        step: "2",
        title: "Configure Access & NDA Requirements",
        description:
            "Invite deal parties, opposing counsel, or client teams. Set granular permissions at the folder and document level, enable NDA click-through gates, and configure access expiry dates for each party.",
    },
    {
        step: "3",
        title: "Manage Due Diligence Q&A",
        description:
            "Buyers or opposing counsel submit questions directly in the data room. Questions are routed by department (Finance, Legal, Technical), assigned to subject-matter experts, and tracked from Open through to Answered with full version control.",
    },
    {
        step: "4",
        title: "Monitor Activity & Generate Reports",
        description:
            "Track every document view, download, and print in real-time. Generate court-admissible audit reports, identify which parties have reviewed which materials, and export compliance-ready logs for regulators or oversight committees.",
    },
];

const useCases = [
    {
        title: "M&A Transaction Counsel",
        desc: "Manage buyer and seller document flows across multiple deal parties — with separate privilege sets, controlled Q&A, complete closing binder archiving, and real-time visibility into buyer engagement with key transaction documents.",
        link: "/solutions/mergers-and-acquisitions-vdr",
    },
    {
        title: "Litigation & E-Discovery",
        desc: "Share discovery documents with opposing counsel under court-mandated protective orders. Tamper-evident audit logs demonstrate compliance with production requirements, and dynamic watermarking deters unauthorized distribution of sensitive materials.",
        link: "/features/activity-analytics",
    },
    {
        title: "Corporate Transactions",
        desc: "Real estate closings, joint ventures, licensing agreements, and corporate restructuring — all require controlled document sharing where privileged materials are protected throughout the transaction lifecycle with full regulatory audit trails.",
        link: "/industries/law-firms",
    },
    {
        title: "IPO & Capital Markets",
        desc: "Prepare and share prospectus drafts, financial statements, and regulatory filings with underwriters, auditors, and legal advisors in a secure environment that meets SEC and financial regulatory requirements.",
        link: "/solutions/series-a-fundraising-data-room",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Secure Document Sharing for Legal",
    description: "Secure document sharing solution for legal teams. Encrypted file exchange, granular access controls, immutable audit trails, and compliance with legal industry regulations including GDPR, HIPAA, and SOC 2.",
    url: "https://spacenexus.net/solutions/secure-document-sharing-for-legal",
    serviceType: "Secure Document Sharing",
    provider: {
        "@type": "Organization",
        name: "SpaceNexus",
        url: "https://spacenexus.net",
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: {
        "@type": "BusinessAudience",
        audienceType: "Legal professionals and law firms",
    },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for pricing tailored to team size and document volume.",
    },
};

export default function SecureDocumentSharingLegalPage() {
    return (
        <>
            <Script
                id="legal-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="legal-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="legal-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                                Legal Solution
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Secure Document Sharing{" "}
                                <span className="text-[#2563eb]">Built for Law Firms</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                SpaceNexus provides secure document sharing purpose-built for law firms and legal teams. Protect attorney-client privilege, manage structured due diligence Q&amp;A workflows, and maintain tamper-evident audit logs — all within a SOC 2 Type II certified Virtual Data Room platform that courts and regulators accept.
                            </p>
                            <p className="text-base text-gray-600 mb-10 leading-relaxed">
                                Whether your firm handles M&amp;A transactions, litigation discovery, corporate restructuring, or IPO preparation, SpaceNexus delivers the security infrastructure and compliance certifications that legal oversight committees demand.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Request Legal Demo
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link href="/features/security-compliance" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    View Security Certifications
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Badges */}
                <section className="py-10 bg-white border-b border-gray-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-sm font-medium text-gray-600 mb-6">
                            Trusted by law firms worldwide — certified and compliant
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { label: "SOC 2 Type II", detail: "Independently audited", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                                { label: "ISO 27001", detail: "Information security", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
                                { label: "GDPR Ready", detail: "Data protection", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                                { label: "AES-256 + TLS 1.3", detail: "Bank-grade encryption", icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" },
                            ].map((badge) => (
                                <div key={badge.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-[#f8f9fa] border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-3">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={badge.icon} />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">{badge.label}</span>
                                    <span className="text-xs text-gray-600 mt-0.5">{badge.detail}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Law Firms Need a Dedicated VDR */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Why law firms need a dedicated Virtual Data Room
                        </h2>
                        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Law firms operate under unique regulatory and ethical obligations that generic file-sharing platforms were never designed to address. When attorneys share documents through consumer-grade tools like Dropbox, Google Drive, or email attachments, they risk inadvertent waiver of attorney-client privilege, loss of work-product protections, and regulatory violations that can result in sanctions, malpractice claims, or disqualification from proceedings.
                            </p>
                            <p>
                                A dedicated legal Virtual Data Room like SpaceNexus solves these problems by providing the infrastructure that legal workflows demand: separate privilege and non-privilege folder hierarchies, tamper-evident audit trails that courts accept as evidence, dynamic watermarking that deters and traces leaks, NDA click-through gates that enforce confidentiality before any materials are viewed, and granular access controls that let administrators restrict access down to the individual document level.
                            </p>
                            <p>
                                For firms managing M&amp;A due diligence, litigation discovery, or multi-party corporate transactions, the difference between a general-purpose cloud storage platform and a purpose-built legal VDR is the difference between compliance and exposure. SpaceNexus was designed from the ground up for the security standards, audit requirements, and privilege protections that law firms and their oversight committees require.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Security Features */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Security features built for the standards law firms require
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Every feature in SpaceNexus was designed with legal privilege, regulatory compliance, and courtroom admissibility in mind. Here is how we protect your firm and your clients.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {securityFeatures.map((feat) => (
                                <div key={feat.title} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-5">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feat.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{feat.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Q&A Screenshot */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Structured Q&amp;A — engineered for legal due diligence
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    The SpaceNexus Q&amp;A module transforms how law firms handle due diligence communication. Instead of scattered email threads where privilege risks multiply, every question and response lives in a centralized, auditable workspace.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Questions are categorized by department (Finance, Legal, Technical, Commercial), flagged by urgency, and assigned to the right subject matter expert. Every response is version-controlled with a full audit trail. No more hunting through email chains — and no risk of inadvertent waiver of privilege through misdirected responses.
                                </p>
                                <ul className="space-y-2.5 mb-8">
                                    {[
                                        "Privilege log visible only to authorized attorneys",
                                        "Finance / Legal / Technical / Commercial category tags",
                                        "Urgency flags with visual status indicators",
                                        "Full Q&A audit trail for regulator review",
                                        "Version-controlled responses with edit history",
                                        "Bulk export of Q&A logs for closing binders",
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
                                <Link href="/features/qa" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                    Explore Q&amp;A Features
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">app.spacenexus.net / qa</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                    <img src="/spacenexus/screenshots/vdr-qa.png" alt="SpaceNexus Q&A management interface for legal due diligence workflows" className="w-full h-auto" loading="lazy" />
                                </div>
                                <div className="absolute -inset-4 bg-orange-500/10 blur-2xl rounded-3xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                SpaceNexus vs. generic cloud storage vs. legacy data rooms
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                See how SpaceNexus compares to consumer file-sharing tools and traditional data room providers on the features that matter most to law firms.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left px-6 py-4 font-semibold text-gray-900 border-b border-gray-200">Feature</th>
                                        <th className="text-center px-6 py-4 font-semibold text-[#2563eb] border-b border-gray-200">SpaceNexus</th>
                                        <th className="text-center px-6 py-4 font-semibold text-gray-600 border-b border-gray-200">Generic Cloud Storage</th>
                                        <th className="text-center px-6 py-4 font-semibold text-gray-600 border-b border-gray-200">Legacy Data Rooms</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                            <td className="px-6 py-3.5 text-gray-700 border-b border-gray-100 font-medium">{row.feature}</td>
                                            <td className="px-6 py-3.5 text-center border-b border-gray-100">
                                                {row.spacenexus ? (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-3.5 text-center border-b border-gray-100">
                                                {row.generic ? (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-3.5 text-center border-b border-gray-100">
                                                {row.legacy ? (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Workflow Steps */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                How to set up a secure legal data room in four steps
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Most law firms have their SpaceNexus data room operational within 24 hours. Here is the typical setup workflow for legal teams.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {workflowSteps.map((ws) => (
                                <div key={ws.step} className="relative flex gap-5 p-6 bg-[#f8f9fa] rounded-2xl border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-sm shrink-0">
                                        {ws.step}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900 mb-2">{ws.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{ws.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-14 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal use cases for secure document sharing</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                From billion-dollar M&amp;A transactions to routine corporate filings, law firms use SpaceNexus across every practice area that involves confidential document exchange.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {useCases.map((uc) => (
                                <Link key={uc.title} href={uc.link} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-200">
                                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-2">{uc.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{uc.desc}</p>
                                    <span className="text-xs font-semibold text-[#2563eb] flex items-center gap-1">
                                        Learn more
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about secure legal document sharing
                        </h2>
                        <div className="space-y-6">
                            {faqItems.map((item) => (
                                <div key={item.question} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-b from-[#f8f9fa] to-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Set up a secure legal data room today</h2>
                        <p className="text-gray-600 mb-8">
                            SOC 2 Type II certified. ISO 27001 aligned. AES-256 encryption. Tamper-evident audit logs. Dynamic watermarking. NDA gates. Everything your firm&apos;s oversight committee requires — operational within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Demo
                            </Link>
                            <Link href="/features/security-compliance" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                Security Details
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600 mt-6">SOC 2 Type II · ISO 27001 · GDPR · AES-256 · TLS 1.3 · Dynamic watermarking · NDA gate</p>
                    </div>
                </section>
                        {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/solutions/law-firm-document-exchange"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Counsel-to-counsel document exchange.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Law firm document exchange →</h3>
                        </Link>
                        <Link
                            href="/industries/law-firms"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Practice-wide VDR deployment.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For law firms →</h3>
                        </Link>
                        <Link
                            href="/features/security-compliance"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">SOC 2, ISO 27001, GDPR, HIPAA, SEC 17a-4.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Security & compliance →</h3>
                        </Link>
                        <Link
                            href="/secure-document-sharing"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">General-purpose secure sharing.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Secure document sharing →</h3>
                        </Link>
                        <Link
                            href="/legal-document-management"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Manage legal documents at scale.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Legal document management →</h3>
                        </Link>
                        <Link
                            href="/blog/secure-file-sharing-for-lawyers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">What to look for in 2026.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Secure file sharing for lawyers →</h3>
                        </Link>
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
            </section>

</main>
        </>
    );
}
