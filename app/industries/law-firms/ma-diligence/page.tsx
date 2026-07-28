import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../../components/LastUpdated";

export const metadata: Metadata = {
    title: "M&A Due Diligence for Law Firms | SpaceNexus",
    description: "Virtual data room built for M&A counsel. Privilege-protected, ethical-wall enforced, and court-admissible. Used by Am Law 100 firms for buy-side and sell-side diligence.",
    alternates: {
        canonical: "https://spacenexus.net/industries/law-firms/ma-diligence",
    },
    keywords: [
        "M&A due diligence law firm",
        "legal due diligence VDR",
        "attorney M&A data room",
        "M&A counsel VDR",
        "buy-side due diligence platform",
        "sell-side due diligence data room",
    ],
    openGraph: {
        title: "M&A Due Diligence for Law Firms | SpaceNexus",
        description: "Virtual data room built for M&A counsel. Privilege-protected, ethical-wall enforced, and court-admissible.",
        url: "https://spacenexus.net/industries/law-firms/ma-diligence",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "M&A Due Diligence Data Room for Law Firms",
    description: "Virtual data room purpose-built for M&A counsel. Privilege-protected, ethical-wall enforced, court-admissible audit trails, and granular control over document production.",
    url: "https://spacenexus.net/industries/law-firms/ma-diligence",
    serviceType: "Virtual Data Room",
    provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "BusinessAudience", audienceType: "M&A counsel and law firm deal teams" },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for pricing tailored to deal size and document volume.",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
        { "@type": "ListItem", position: 3, name: "Law Firms", item: "https://spacenexus.net/industries/law-firms" },
        { "@type": "ListItem", position: 4, name: "M&A Due Diligence", item: "https://spacenexus.net/industries/law-firms/ma-diligence" },
    ],
};

const faqItems = [
    {
        question: "What features do M&A counsel need in a VDR?",
        answer: "M&A counsel need: privilege hierarchies separating privileged and non-privileged materials, ethical walls between conflict parties, structured Q&A with category routing, granular per-document permissions, dynamic watermarking, immutable audit trails, NDA click-through gates, and redaction tools. SpaceNexus provides all of these with purpose-built legal workflows.",
    },
    {
        question: "How does SpaceNexus protect attorney-client privilege during M&A diligence?",
        answer: "SpaceNexus provides dedicated privilege and non-privilege folder hierarchies with separate permission sets, ensuring only authorized attorneys can view protected materials. Privilege logs are maintained automatically, every access is recorded in an immutable audit trail, and ethical walls prevent information from crossing matter boundaries — preventing inadvertent waiver of privilege during due diligence.",
    },
    {
        question: "Can law firms use SpaceNexus for both buy-side and sell-side M&A?",
        answer: "Yes. Buy-side counsel use SpaceNexus to review target company documents, coordinate diligence workstreams, and prepare investment committee memos. Sell-side counsel use it to organize the data room, manage Q&A, control bidder access tiers, and produce responsive documents under confidentiality protections. Both workflows are supported natively.",
    },
    {
        question: "How does the VDR support co-counsel coordination?",
        answer: "SpaceNexus supports multi-firm collaboration with separate access for lead counsel, local counsel, and specialist advisors. Each party sees only the documents and workstreams relevant to their role. Cross-firm Q&A threads maintain a single source of truth, and the audit trail records which firm accessed which document — critical for engagement letter scope disputes and fee allocation.",
    },
    {
        question: "Is the audit trail court-admissible?",
        answer: "Yes. SpaceNexus is audit logs are immutable, cryptographically chained, and exportable as court-admissible evidence. The logs record every login, document view, download, print, permission change, and Q&A exchange. Law firms have successfully used SpaceNexus audit trails in litigation discovery disputes, privilege log challenges, and regulatory investigations.",
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

export default function LawFirmMADiligencePage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="lf-ma-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="lf-ma-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="lf-ma-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link>
                        <span>›</span>
                        <Link href="/industries/law-firms" className="hover:text-[#2563eb] transition-colors">Law Firms</Link>
                        <span>›</span>
                        <span className="text-gray-900">M&A Due Diligence</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Law Firm Practice</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">M&A Due Diligence for Law Firms</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mb-8">
                        The virtual data room built for M&A counsel. Privilege-protected document sharing, ethical wall enforcement, court-admissible audit trails, and structured Q&A — used by Am Law 100 firms for buy-side and sell-side diligence.
                    </p>
                </div>
            </section>

            {/* Content sections */}
            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why M&A counsel need a purpose-built VDR</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            M&A transactions are the most document-intensive work most law firms do. A single mid-market deal can involve 50,000+ documents across financial, commercial, legal, HR, IP, and operational workstreams — often shared with multiple bidders, co-counsel, and advisors in multiple jurisdictions.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Consumer cloud tools (SharePoint, Dropbox, Google Drive) were not built for this. They lack privilege hierarchies, ethical walls, structured Q&A, and court-admissible audit trails. Purpose-built VDRs like SpaceNexus give M&A counsel the control, compliance, and efficiency that deal work demands.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Buy-side M&A diligence workflow</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Buy-side counsel use SpaceNexus to coordinate the buyer&apos;s diligence team across workstreams. The platform supports tiered access for different reviewers (lead deal team, workstream leads, IC members, co-counsel), with permissions tied to specific folders and document types.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Review tools include full-text search across all document formats, OCR for scanned PDFs, and bulk download with dynamic watermarking for offline review. Counsel can mark up documents privately, with annotations visible only to their own deal team.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The Q&A workflow lets buy-side counsel submit questions to the seller in structured threads — with each question linked to the relevant document and routed to the appropriate workstream. Response SLAs are tracked automatically, and unanswered questions are flagged before they become deal-killing gaps.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Sell-side M&A diligence workflow</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Sell-side counsel use SpaceNexus to organize the data room on behalf of the seller. Pre-built folder structures (Corporate, Financial, Commercial, Legal, HR, Tax, Technology, IP) match standard diligence indexes, so bidders find what they need without asking.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Permission tiers control what each bidder group sees. Initial bidders may see only the CIM and management presentation. Shortlisted bidders get the full data room. Final-round bidders can access confidential materials that were withheld earlier in the process. The seller maintains complete control over disclosure throughout the deal.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Engagement analytics show which bidders are most active, which documents they are spending the most time on, and which questions they are asking. This intelligence helps the sell-side team prioritize follow-up with the most serious buyers.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Privilege and ethical wall protection</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Attorney-client privilege is the foundation of legal practice. Inadvertent waiver during M&A diligence can destroy the value of an acquisition or expose the firm to malpractice liability. SpaceNexus privilege hierarchies prevent this by:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Separate privilege folders</strong> with independent permission sets — privileged materials are visible only to authorized counsel</li>
                            <li><strong>Automatic privilege logging</strong> — every access to privileged material is recorded with timestamp and user identity</li>
                            <li><strong>Ethical wall enforcement</strong> — technical barriers prevent information from crossing matter or party boundaries</li>
                            <li><strong>Redaction tools</strong> — redact privileged content before sharing with non-privileged parties</li>
                            <li><strong>Clawback procedures</strong> — recover inadvertently produced privileged documents</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            These controls are designed to meet the standard articulated in <em>Freeman v. Pittsburgh Glass Works</em> and other key cases on inadvertent disclosure and clawback.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Co-counsel and advisor coordination</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            M&A deals routinely involve multiple law firms: lead counsel, local counsel in each jurisdiction, specialist IP or employment counsel, and financial advisors. SpaceNexus supports multi-firm collaboration with separate access for each party.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Each firm sees only the documents and workstreams relevant to their role. The audit trail records which firm accessed which document, which is critical for engagement letter scope disputes, fee allocation, and the rare case of conflicts between firms.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Cross-firm Q&A threads maintain a single source of truth across all advisors. No more email chains between firms, no more conflicting interpretations, no more version control issues. The deal team works from one coordinated platform.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Court-admissible audit trail</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            M&A disputes increasingly end up in court — whether through post-closing indemnification claims, appraisal proceedings, or shareholder suits. The data room is often the central piece of evidence. SpaceNexus audit trails are:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Immutable</strong> — entries cannot be modified or deleted by any user, including administrators</li>
                            <li><strong>Cryptographically chained</strong> — any tampering is detectable</li>
                            <li><strong>Comprehensive</strong> — every login, view, download, print, permission change, and Q&A exchange is recorded</li>
                            <li><strong>Exportable</strong> — as court-ready exhibits with proper chain-of-custody documentation</li>
                            <li><strong>Retained</strong> — for the duration required by the deal and any subsequent litigation (typically 7-10 years)</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            Law firms have used SpaceNexus audit trails successfully in litigation discovery disputes, privilege log challenges, post-closing indemnification claims, and regulatory investigations.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
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

            {/* Cross-links */}
            <section className="py-14 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related VDR Resources</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue exploring</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/solutions/mergers-and-acquisitions-vdr" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Solution</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                            <p className="text-xs text-gray-600 mt-2">The complete M&A VDR platform for buy-side and sell-side workflows.</p>
                        </Link>
                        <Link href="/industries/law-firms" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Industry</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data rooms for law firms →</h3>
                            <p className="text-xs text-gray-600 mt-2">The full law firm data room solution overview.</p>
                        </Link>
                        <Link href="/checklists/due-diligence-checklist" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Checklist</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A due diligence checklist →</h3>
                            <p className="text-xs text-gray-600 mt-2">200+ items across every workstream.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your M&A data room</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Privilege-protected, ethical-wall enforced, court-admissible. Most firms are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
