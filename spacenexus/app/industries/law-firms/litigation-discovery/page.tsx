import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Litigation & E-Discovery for Law Firms | SpaceNexus",
    description: "Secure document review, production, and privilege protection for litigation. Rule 26 compliant, court-admissible audit trails, and redaction tools built for trial teams.",
    alternates: {
        canonical: "https://spacenexus.net/industries/law-firms/litigation-discovery",
    },
    keywords: [
        "litigation data room",
        "e-discovery VDR",
        "document production platform",
        "Rule 26 e-discovery",
        "litigation document review",
        "privilege log VDR",
    ],
    openGraph: {
        title: "Litigation & E-Discovery for Law Firms | SpaceNexus",
        description: "Secure document review, production, and privilege protection for litigation. Rule 26 compliant with court-admissible audit trails.",
        url: "https://spacenexus.net/industries/law-firms/litigation-discovery",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Litigation & E-Discovery Data Room for Law Firms",
    description: "Virtual data room for litigation document review, e-discovery production, privilege protection, and redaction. Rule 26 compliant with court-admissible audit trails.",
    url: "https://spacenexus.net/industries/law-firms/litigation-discovery",
    serviceType: "Virtual Data Room",
    provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "BusinessAudience", audienceType: "Litigation counsel and trial teams" },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for pricing tailored to matter volume and document count.",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
        { "@type": "ListItem", position: 3, name: "Law Firms", item: "https://spacenexus.net/industries/law-firms" },
        { "@type": "ListItem", position: 4, name: "Litigation & E-Discovery", item: "https://spacenexus.net/industries/law-firms/litigation-discovery" },
    ],
};

const faqItems = [
    {
        question: "Is SpaceNexus compliant with Federal Rule of Civil Procedure 26?",
        answer: "Yes. SpaceNexus supports Rule 26 disclosure obligations with comprehensive access logs, privilege designation, redaction tools, and production format options. The audit trail records every access to discoverable information, supporting chain-of-custody requirements and meeting proportionality considerations.",
    },
    {
        question: "How does SpaceNexus protect privileged documents during discovery?",
        answer: "SpaceNexus provides dedicated privilege designation at the document and folder level with separate permission sets. Privilege logs are automatically maintained, and redaction tools remove privileged content before production. Clawback procedures support FRE 502(d) orders and quick recovery of inadvertently produced privileged documents.",
    },
    {
        question: "Can litigation teams use SpaceNexus for multi-party matters?",
        answer: "Yes. SpaceNexus supports multi-party litigation with separate access for co-counsel, local counsel, expert witnesses, clients, opposing counsel, and the court. Ethical walls prevent information from crossing matter boundaries, and granular permissions control who sees what at each stage of the matter.",
    },
    {
        question: "How does SpaceNexus handle large document collections?",
        answer: "SpaceNexus supports bulk upload with drag-and-drop and AI auto-indexing for millions of documents. Full-text search across all file formats, OCR for scanned documents, and predictive coding integrations help review teams process large collections efficiently. Bulk download with dynamic watermarking supports offline review.",
    },
    {
        question: "Can the audit trail be used as evidence in court?",
        answer: "Yes. SpaceNexus audit logs are immutable, cryptographically chained, and exportable as court-ready exhibits. The logs support chain-of-custody requirements, sanctions motions (including Rule 37(e) for spoliation), and privilege disputes. Law firms have used SpaceNexus audit trails in discovery sanctions hearings and spoliation motions.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

export default function LawFirmLitigationPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="lf-litigation-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="lf-litigation-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="lf-litigation-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link>
                        <span>›</span>
                        <Link href="/industries/law-firms" className="hover:text-[#2563eb] transition-colors">Law Firms</Link>
                        <span>›</span>
                        <span className="text-gray-900">Litigation & E-Discovery</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Law Firm Practice</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Litigation & E-Discovery for Law Firms</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Secure document review, e-discovery production, and privilege protection for litigation teams. Rule 26 compliant, court-admissible audit trails, and redaction tools built for trial work.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The litigation document challenge</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Modern litigation involves document collections that can run into millions of pages — emails, contracts, financial records, internal communications, social media, cloud storage, mobile devices. Managing this volume while protecting privilege, producing responsive documents, and meeting tight court deadlines requires more than email and shared drives.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            SpaceNexus gives litigation teams a purpose-built platform for the entire document lifecycle: collection, review, redaction, production, and trial exhibit management. All with the privilege protection and audit trails that courts increasingly require.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">E-discovery workflow on SpaceNexus</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The e-discovery process moves through predictable stages, each with specific tool requirements:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Collection and ingestion</strong> — bulk upload of collected documents with hash-based deduplication and full-text search indexing</li>
                            <li><strong>Processing and review</strong> — OCR for scanned documents, email threading, near-deduplication, and predictive coding integrations</li>
                            <li><strong>Privilege review</strong> — designated privilege workflows with automatic logging, batch tagging, and second-level review</li>
                            <li><strong>Redaction</strong> — inline redaction tools with privilege, PII, and trade secret categories</li>
                            <li><strong>Production</strong> — formatted production sets with metadata, load files, and privilege logs</li>
                            <li><strong>Trial exhibit management</strong> — exhibit numbering, annotation, and courtroom display workflows</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            SpaceNexus supports the entire workflow in a single platform, eliminating handoffs between tools and reducing the risk of errors during production.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Privilege protection and clawback</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Inadvertent disclosure of privileged documents is one of the most serious risks in litigation. SpaceNexus privilege protection includes:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Privilege designation at the document level</strong> with independent permission sets</li>
                            <li><strong>Automatic privilege logging</strong> for every access to designated privileged material</li>
                            <li><strong>Redaction tools</strong> that remove privileged content while preserving the document for production</li>
                            <li><strong>FRE 502(d) order support</strong> — clawback procedures with quick recovery of inadvertently produced privileged documents</li>
                            <li><strong>Quick-peek agreements</strong> — protocols for opposing counsel to review inadvertently produced privileged documents without waiver</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            These controls are designed to meet the standard articulated in <em>Freeman v. Pittsburgh Glass Works</em> and to support Rule 502(d) orders in federal court.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Production workflows that scale</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Production is where most e-discovery projects succeed or fail. The combination of volume, deadline, and accuracy requirements creates significant operational pressure. SpaceNexus production features include:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Format flexibility</strong> — native, single-page TIFF, or PDF productions with full metadata</li>
                            <li><strong>Load file generation</strong> — Concordance, Relativity, and custom load file formats</li>
                            <li><strong>Privilege log export</strong> — formatted privilege logs in standard formats</li>
                            <li><strong>Bates numbering</strong> — consistent, court-acceptable numbering across productions</li>
                            <li><strong>Production tracking</strong> — who received what, when, and with what format</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            The production process becomes a controlled, repeatable workflow rather than a manual, error-prone scramble.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Spoliation and chain of custody</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Rule 37(e) sanctions for spoliation of electronically stored information are a significant risk. SpaceNexus helps mitigate this risk through:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Immutable access logs</strong> showing who accessed what, when, and from where</li>
                            <li><strong>Litigation hold documentation</strong> with retention tracking and defensible disposal procedures</li>
                            <li><strong>Chain of custody</strong> for all uploaded documents with hash verification</li>
                            <li><strong>Reasonable access controls</strong> with audit trail for any access modifications</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            When spoliation motions are filed, the audit trail provides the evidence needed to defend the firm&apos;s document handling practices.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Multi-party matter coordination</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Complex litigation routinely involves co-counsel, local counsel, expert witnesses, e-discovery vendors, and the client. SpaceNexus supports multi-party coordination with separate access tiers, ethical wall enforcement, and granular permission management. Each party sees only the documents and workstreams relevant to their role, and the audit trail records which party accessed which document — critical for engagement letter scope and fee allocation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
                    <div className="space-y-3">
                        {faqItems.map((item, i) => (
                            <details key={i} className="group bg-white rounded-xl border border-gray-200 hover:border-[#2563eb]/30 transition-all">
                                <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                                    <h3 className="text-base font-semibold text-gray-900 leading-snug pr-2">{item.question}</h3>
                                    <svg className="shrink-0 w-5 h-5 text-[#2563eb] mt-0.5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-5 pb-5 -mt-2 text-sm text-gray-600 leading-relaxed">{item.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related VDR Resources</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue exploring</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/solutions/secure-document-sharing-for-legal" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Solution</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Secure document sharing for legal →</h3>
                            <p className="text-xs text-gray-600 mt-2">Encrypted legal file sharing with court-admissible audit trails.</p>
                        </Link>
                        <Link href="/blog/secure-platforms-for-legal-due-diligence" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Guide</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Secure platforms for legal DD →</h3>
                            <p className="text-xs text-gray-600 mt-2">What attorneys need in 2026 secure platforms.</p>
                        </Link>
                        <Link href="/checklists" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Checklist</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Free due diligence checklists →</h3>
                            <p className="text-xs text-gray-600 mt-2">M&A and Series A checklists.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your litigation data room</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Rule 26 compliant, court-admissible audit trails, privilege-protected. Most teams are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
    );
}
