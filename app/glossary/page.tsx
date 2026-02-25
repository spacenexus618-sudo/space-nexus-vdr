import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "M&A & Due Diligence Glossary — VDR Terms Explained | Space Nexus",
    description:
        "Plain-English definitions of the most important M&A and virtual data room terms: Virtual Data Room, Clean Room, Redacting, Sell-Side vs Buy-Side Due Diligence, Q&A Workflow, Watermarking, and Audit Trail.",
    alternates: {
        canonical: "https://spacenexus.net/glossary",
    },
    openGraph: {
        title: "M&A & Due Diligence Glossary | Space Nexus",
        description: "Understand the terminology of M&A due diligence and virtual data rooms — from Clean Rooms to Audit Trails, explained in plain English.",
        url: "https://spacenexus.net/glossary",
    },
    keywords: [
        "M&A glossary",
        "due diligence terms",
        "virtual data room glossary",
        "what is a clean room M&A",
        "sell-side vs buy-side due diligence",
        "what is redacting documents",
        "audit trail definition",
        "watermarking documents",
        "Q&A workflow due diligence",
    ],
};

const terms = [
    {
        id: "virtual-data-room",
        term: "Virtual Data Room (VDR)",
        shortDef: "A secure, cloud-based repository for sharing sensitive documents during business transactions.",
        definition: `A Virtual Data Room (VDR) is an online secure repository used to store and share confidential business documents during high-stakes transactions such as mergers and acquisitions, capital raises, IPOs, and legal due diligence.

Unlike email attachments or shared drives, a VDR provides granular access controls, tamper-evident audit logs, dynamic watermarking, and structured Q&A workflows — giving the document owner full visibility and control over who sees what.

Modern VDRs like Space Nexus also include AI capabilities (automatic redaction, document categorization, and OCR full-text search) that dramatically reduce the time required to prepare and manage a deal data room.`,
        relatedLinks: [
            { label: "What is a Virtual Data Room? Full Guide", href: "/blog/what-is-a-virtual-data-room" },
            { label: "Space Nexus VDR Features", href: "/features" },
        ],
        color: "border-blue-200 bg-blue-50/40",
        badge: "bg-blue-100 text-blue-700",
    },
    {
        id: "clean-room",
        term: "Clean Room",
        shortDef: "A controlled environment where competing parties can analyze shared data under strict confidentiality rules.",
        definition: `In M&A contexts, a Clean Room (also called a "data clean room") is a controlled environment in which competitively sensitive information can be shared between two parties — typically a buyer and a seller — under strict protocols that prevent misuse of the shared data.

Clean rooms are commonly used when antitrust regulations prevent full data sharing before regulatory approval. A designated "clean team" (usually external advisors or lawyers) reviews the data and provides aggregated insights to the deal team, without revealing raw competitive data.

In a VDR context, clean room access is implemented using a separate, access-restricted folder structure visible only to the clean team. Space Nexus supports this through granular role-based permissions and isolated data room groups.`,
        relatedLinks: [
            { label: "Granular Access Controls — Space Nexus", href: "/features/users-permissions" },
        ],
        color: "border-purple-200 bg-purple-50/40",
        badge: "bg-purple-100 text-purple-700",
    },
    {
        id: "redacting",
        term: "Redacting",
        shortDef: "The process of permanently obscuring sensitive information in a document before sharing it with another party.",
        definition: `Redacting is the process of obscuring or removing sensitive information from a document before it is shared with another party. In M&A and legal due diligence, redaction is used to:

• Protect privileged information (attorney-client privilege, trade secrets)
• Remove personally identifiable information (PII) before production
• Comply with confidentiality agreements and regulatory requirements
• Exclude commercially sensitive data from early-stage bidder packages

Traditional redaction is manual and error-prone — a redacted document can be unredacted if only covered with a black box rather than permanently removed. 

Space Nexus includes AI-powered Redaction that automatically identifies and permanently removes sensitive content (names, financial figures, email addresses) across entire document sets with a single click, eliminating manual error risk.`,
        relatedLinks: [
            { label: "AI Redaction — Space Nexus Feature", href: "/features/data-room" },
        ],
        color: "border-red-200 bg-red-50/40",
        badge: "bg-red-100 text-red-700",
    },
    {
        id: "sell-side-due-diligence",
        term: "Sell-Side Due Diligence",
        shortDef: "Due diligence conducted by the seller to prepare disclosure materials before buyer access.",
        definition: `Sell-side due diligence (SSDD) is the process by which a seller — typically engaged by their M&A advisor or investment bank — proactively reviews and prepares disclosure materials before granting buyer access to the data room.

The goal of SSDD is to:
• Identify and resolve issues before buyers discover them ("clean up the house before showing it")
• Create a Vendor Due Diligence (VDD) report that answers anticipated buyer questions
• Accelerate the buyer due diligence process by providing comprehensive, well-organized materials
• Protect against aggressive price reductions or deal collapse triggered by unexpected findings

A sell-side data room built on Space Nexus typically contains:
Financial statements, tax records, legal contracts, IP documentation, management accounts, and key commercial agreements — all organized by AI Auto-Categorization and protected by granular access controls.`,
        relatedLinks: [
            { label: "Investment Banking VDR", href: "/industries/investment-banking" },
            { label: "M&A VDR Solution", href: "/solutions/mergers-and-acquisitions-vdr" },
        ],
        color: "border-orange-200 bg-orange-50/40",
        badge: "bg-orange-100 text-orange-700",
    },
    {
        id: "buy-side-due-diligence",
        term: "Buy-Side Due Diligence",
        shortDef: "Due diligence conducted by the acquirer to validate claims made by the target company.",
        definition: `Buy-side due diligence is the investigative process conducted by an acquirer (and their advisors) to independently verify the claims, financial health, and risks associated with a target company before completing an acquisition.

Buy-side due diligence typically covers:
• Financial DD — validating historical financials, forecasts, working capital
• Legal DD — reviewing contracts, litigation exposure, IP ownership
• Commercial DD — testing market assumptions, customer concentration
• Technology DD — assessing tech stack, IP, and cybersecurity posture
• HR / Management DD — reviewing employment agreements, key person risks

The buyer's team accesses the seller's data room under NDA. Each workstream (Finance, Legal, Commercial) has its own document access permissions. Questions raised during review are channeled through the Q&A workflow in the VDR.

Space Nexus provides buyers with full-text search across 100+ document formats, AI-assisted document categorization, and a structured Q&A interface to centralize all due diligence communication.`,
        relatedLinks: [
            { label: "M&A Due Diligence Checklist 2025", href: "/blog/ma-due-diligence-checklist-2025" },
            { label: "Free M&A Checklist", href: "/checklists" },
        ],
        color: "border-teal-200 bg-teal-50/40",
        badge: "bg-teal-100 text-teal-700",
    },
    {
        id: "qa-workflow",
        term: "Q&A Workflow",
        shortDef: "A structured process for managing due diligence questions and answers between deal parties.",
        definition: `A Q&A Workflow (Questions & Answers Workflow) is the structured process by which a buyer's due diligence team submits questions, and the seller's team responds — all within the virtual data room platform.

Without a structured Q&A workflow, due diligence questions are managed via email — leading to version confusion, missed questions, inadvertent privilege waiver, and significant time loss.

A well-structured VDR Q&A workflow includes:
• Question submission with category tagging (Finance, Legal, Technical)
• Urgency flags for time-sensitive items
• Assignment of each question to the appropriate subject matter expert
• Response threading with full version history
• Status tracking (Open / Answered / Pending) for all parties
• Tamper-evident audit trail of all Q&A activity

Space Nexus Q&A is purpose-built for M&A due diligence — with category filters, urgency indicators, direct assignment, and a complete audit log that satisfies regulatory scrutiny.`,
        relatedLinks: [
            { label: "Q&A Feature — Space Nexus", href: "/features/qa" },
            { label: "Law Firms — Due Diligence", href: "/industries/law-firms" },
        ],
        color: "border-amber-200 bg-amber-50/40",
        badge: "bg-amber-100 text-amber-700",
    },
    {
        id: "watermarking",
        term: "Watermarking (Dynamic Watermarking)",
        shortDef: "The automatic embedding of recipient identity into every downloaded document to deter and trace unauthorized sharing.",
        definition: `Watermarking in a VDR context refers to the automatic embedding of identifying information (typically the recipient's name, email address, timestamp, and IP address) into every document that a user downloads or prints from the data room.

Dynamic watermarking is distinct from static watermarks because it:
• Applies automatically to every download — no manual setup per document
• Embeds different identifying information for each recipient
• Creates a traceable "fingerprint" that enables leak detection if a document is shared outside the deal

Why watermarking matters in M&A:
In competitive auction processes, CIMs and financial models often leak to the press or rival bidders. Dynamic watermarks allow the transaction counsel to identify the source of any leak — which creates a powerful deterrent effect and protects the seller throughout the process.

Space Nexus applies dynamic watermarking automatically on every download, with the recipient's name, email, and access timestamp — across PDF, Word, Excel, and image formats.`,
        relatedLinks: [
            { label: "Security & Compliance Features", href: "/features/security-compliance" },
            { label: "VDR Security Guide", href: "/blog/vdr-security-what-to-look-for" },
        ],
        color: "border-indigo-200 bg-indigo-50/40",
        badge: "bg-indigo-100 text-indigo-700",
    },
    {
        id: "audit-trail",
        term: "Audit Trail (Tamper-Evident Audit Log)",
        shortDef: "A chronological, immutable record of every action taken within the data room — used for compliance and deal governance.",
        definition: `An audit trail (also called an audit log) in a virtual data room is a continuous, chronological record of every action taken within the platform: document views, downloads, permission changes, Q&A activity, login events, and administrative changes.

In regulated transactions (M&A, fundraising, IPOs, litigation), audit trails serve three critical functions:

1. **Compliance proof** — Auditors and regulators require evidence that confidential materials were disclosed only to authorized parties under documented controls.

2. **Deal governance** — Bid process letters in auction sales specify what information was shown to which bidders at what times. An immutable audit log proves process fairness.

3. **Post-deal accountability** — If a dispute arises after closing, the audit log provides a court-admissible record of exactly what each party accessed and when.

A tamper-evident audit trail cannot be modified after the fact — unlike simple activity logs in shared drives or email. Space Nexus produces immutable audit logs that capture all activity with user-level, document-level, and timestamp precision, exportable for legal review.`,
        relatedLinks: [
            { label: "Activity & Analytics — Space Nexus", href: "/features/activity-analytics" },
            { label: "Security & Compliance", href: "/features/security-compliance" },
        ],
        color: "border-slate-200 bg-slate-50/40",
        badge: "bg-slate-100 text-slate-700",
    },
];

export default function GlossaryPage() {
    return (
        <main className="pt-20 lg:pt-24">
            {/* Hero */}
            <section className="py-14 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Glossary</p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
                            M&amp;A &amp; Due Diligence{" "}
                            <span className="text-[#2563eb]">Glossary</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Plain-English explanations of the terms every deal team should know — from Virtual Data Rooms to Tamper-Evident Audit Logs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick jump links */}
            <section className="py-6 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {terms.map((t) => (
                            <a
                                key={t.id}
                                href={`#${t.id}`}
                                className="text-xs font-medium text-gray-600 hover:text-[#2563eb] px-3 py-1.5 rounded-full bg-gray-100 hover:bg-blue-50 transition-colors"
                            >
                                {t.term.split(" (")[0]}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terms */}
            <section className="py-14 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    {terms.map((t) => (
                        <div key={t.id} id={t.id} className={`rounded-2xl border p-8 scroll-mt-32 ${t.color}`}>
                            <div className="flex items-start gap-4 mb-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${t.badge}`}>
                                    VDR Term
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.term}</h2>
                            <p className="text-base font-medium text-gray-700 mb-5 italic">{t.shortDef}</p>
                            <div className="prose prose-sm prose-gray max-w-none">
                                {t.definition.split("\n\n").map((para, i) => (
                                    <p key={i} className="text-gray-600 leading-relaxed mb-3 whitespace-pre-line">
                                        {para}
                                    </p>
                                ))}
                            </div>
                            {t.relatedLinks.length > 0 && (
                                <div className="mt-6 pt-5 border-t border-gray-200/60">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Related</p>
                                    <div className="flex flex-wrap gap-3">
                                        {t.relatedLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="text-sm text-[#2563eb] font-medium hover:underline flex items-center gap-1"
                                            >
                                                {link.label}
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to see these concepts in action?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Space Nexus puts every term in this glossary — AI Redaction, structured Q&A, tamper-evident audit logs, dynamic watermarking — into a single platform designed for M&amp;A deal teams.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                            Request a Live Demo
                        </Link>
                        <Link href="/checklists" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                            Free Due Diligence Checklists
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
