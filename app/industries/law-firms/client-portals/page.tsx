import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Client Portals for Law Firms | SpaceNexus",
    description: "Secure client collaboration portals for ongoing legal matters. Document sharing, signature workflows, and matter status — all with privilege protection and audit trails.",
    alternates: {
        canonical: "https://spacenexus.net/industries/law-firms/client-portals",
    },
    keywords: [
        "law firm client portal",
        "attorney client portal",
        "legal client collaboration",
        "client document sharing law firm",
        "matter management portal",
        "secure client communication",
    ],
    openGraph: {
        title: "Client Portals for Law Firms | SpaceNexus",
        description: "Secure client collaboration portals for ongoing matters. Document sharing, signature workflows, and matter status.",
        url: "https://spacenexus.net/industries/law-firms/client-portals",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Client Portal for Law Firms",
    description: "Secure client collaboration portal for law firms. Document sharing, signature workflows, matter status, and privilege protection with audit trails.",
    url: "https://spacenexus.net/industries/law-firms/client-portals",
    serviceType: "Client Portal",
    provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "BusinessAudience", audienceType: "Law firms and corporate legal departments" },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for pricing tailored to client count and matter volume.",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
        { "@type": "ListItem", position: 3, name: "Law Firms", item: "https://spacenexus.net/industries/law-firms" },
        { "@type": "ListItem", position: 4, name: "Client Portals", item: "https://spacenexus.net/industries/law-firms/client-portals" },
    ],
};

const faqItems = [
    {
        question: "What is a law firm client portal?",
        answer: "A law firm client portal is a secure online workspace where clients and their attorneys collaborate on legal matters. Unlike email or consumer file sharing, client portals provide encryption, access controls, audit trails, and workflow tools designed for legal practice. They support ongoing matter collaboration — not just one-time document transfers.",
    },
    {
        question: "How does SpaceNexus protect privileged communications in client portals?",
        answer: "SpaceNexus provides end-to-end encryption, granular access controls by matter and user, dynamic watermarking on all documents, and immutable audit trails. Communications and documents in the portal are protected with the same controls as in a litigation or M&A data room. Privilege designation at the document level ensures privileged materials are visible only to authorized parties.",
    },
    {
        question: "Can clients use the portal on mobile devices?",
        answer: "Yes. SpaceNexus is fully responsive and works on any device with a browser. Clients can view, sign, and comment on documents from their phone or tablet. Mobile access is essential for client satisfaction and for time-sensitive matters where clients need to review and approve documents on the go.",
    },
    {
        question: "How do client portals integrate with practice management systems?",
        answer: "SpaceNexus integrates with major practice management systems via API. Matter creation, document upload, and client invitations can be automated from PMS workflows. Activity in the portal syncs back to the matter record, giving attorneys a complete view of client engagement and document handling.",
    },
    {
        question: "What workflows does the client portal support?",
        answer: "The portal supports document review and approval workflows, electronic signatures, secure messaging, calendar and deadline sharing, invoice viewing and payment, and matter status updates. Custom workflows can be configured for specific practice areas or client requirements.",
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

export default function LawFirmClientPortalsPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="lf-cp-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="lf-cp-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="lf-cp-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link>
                        <span>›</span>
                        <Link href="/industries/law-firms" className="hover:text-[#2563eb] transition-colors">Law Firms</Link>
                        <span>›</span>
                        <span className="text-gray-900">Client Portals</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Law Firm Practice</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Client Portals for Law Firms</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Secure client collaboration portals for ongoing legal matters. Document sharing, signature workflows, and matter status — all with privilege protection and audit trails.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Beyond email: the client collaboration gap</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Most law firms still rely on email for client communication and document exchange. Email is convenient, but it is not secure, not auditable, and not designed for legal collaboration. Documents are scattered across inboxes, version control is impossible, and there is no record of who saw what.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Client portals solve these problems. They give clients a single secure workspace for the entire matter, with all the controls law firms need to protect privilege and serve clients well.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What law firm client portals do</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Modern client portals support the full matter lifecycle:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Document exchange</strong> — secure upload, download, and version control for all matter documents</li>
                            <li><strong>Secure messaging</strong> — encrypted communication channel between client and legal team, replacing email for matter correspondence</li>
                            <li><strong>E-signature workflows</strong> — built-in electronic signature for engagement letters, settlement agreements, authorizations, and other documents</li>
                            <li><strong>Matter status</strong> — visible status updates, deadlines, and next steps for clients</li>
                            <li><strong>Document review and approval</strong> — clients review and approve draft documents in a controlled workflow</li>
                            <li><strong>Invoice viewing and payment</strong> — secure invoice delivery and online payment</li>
                            <li><strong>Calendar and deadline sharing</strong> — shared matter calendar with key dates and reminders</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why client portals beat email</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The shift from email to client portals is one of the most impactful changes a law firm can make:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Security</strong> — portals encrypt at rest and in transit; email does not</li>
                            <li><strong>Privilege</strong> — portals provide privilege designation and ethical walls; email has no such controls</li>
                            <li><strong>Audit trail</strong> — portals record who saw what; email records are incomplete and easy to manipulate</li>
                            <li><strong>Version control</strong> — portals show the current version of every document; email has multiple versions scattered across threads</li>
                            <li><strong>Client experience</strong> — portals are easier to use than email attachments; clients see a clean interface instead of confusing reply chains</li>
                            <li><strong>Compliance</strong> — portals help meet regulatory and ethical obligations for client data handling</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Practice management integration</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            A client portal that does not integrate with the practice management system creates double data entry and process gaps. SpaceNexus integrates with major PMS platforms via API to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li>Auto-create matters in the portal when matters are opened in the PMS</li>
                            <li>Auto-invite clients with appropriate permissions based on matter type</li>
                            <li>Sync document activity back to the matter record</li>
                            <li>Surface portal activity in attorney dashboards and matter timelines</li>
                            <li>Generate client-facing status reports from PMS data</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Multi-matter client experience</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Most clients work with their law firm on multiple matters simultaneously. A good client portal organizes everything by matter, with a clear dashboard showing all active engagements, recent activity, pending actions, and upcoming deadlines.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Clients should never have to search for the right document, the right person to contact, or the right status update. The portal surfaces what matters, when it matters.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Security and compliance foundation</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Client portals must meet the same security standards as any other law firm data handling:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li>SOC 2 Type II certified infrastructure</li>
                            <li>AES-256 encryption at rest, TLS 1.3 in transit</li>
                            <li>Multi-factor authentication for all users</li>
                            <li>SSO integration with firm identity providers</li>
                            <li>Immutable audit trails for all access and activity</li>
                            <li>Compliance with state bar data security requirements</li>
                        </ul>
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
                        <Link href="/solutions/law-firm-document-exchange" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Solution</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Law firm document exchange →</h3>
                            <p className="text-xs text-gray-500 mt-2">Counsel-to-counsel document exchange workflows.</p>
                        </Link>
                        <Link href="/legal-document-management" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Solution</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Legal document management →</h3>
                            <p className="text-xs text-gray-500 mt-2">Manage legal documents at scale.</p>
                        </Link>
                        <Link href="/industries/law-firms" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Industry</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data rooms for law firms →</h3>
                            <p className="text-xs text-gray-500 mt-2">The full law firm data room solution overview.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your client portal</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Privilege-protected, audit-trailed, client-friendly. Most firms are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
