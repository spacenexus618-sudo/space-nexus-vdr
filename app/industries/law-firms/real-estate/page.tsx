import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Real Estate Practice Data Room for Law Firms | SpaceNexus",
    description: "Virtual data room for real estate counsel. Title and survey review, closing binder assembly, multi-party access for buyers/sellers/lenders/brokers, and post-closing retention.",
    alternates: {
        canonical: "https://spacenexus.net/industries/law-firms/real-estate",
    },
    keywords: [
        "real estate closing data room",
        "REIT data room",
        "title review platform",
        "closing binder VDR",
        "real estate due diligence VDR",
        "property transaction data room",
    ],
    openGraph: {
        title: "Real Estate Practice Data Room for Law Firms | SpaceNexus",
        description: "Virtual data room for real estate counsel. Title review, closing binder, and multi-party access management.",
        url: "https://spacenexus.net/industries/law-firms/real-estate",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Real Estate Practice Data Room for Law Firms",
    description: "Virtual data room for real estate counsel. Title and survey review, closing binder assembly, multi-party access, and post-closing retention.",
    url: "https://spacenexus.net/industries/law-firms/real-estate",
    serviceType: "Virtual Data Room",
    provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "BusinessAudience", audienceType: "Real estate counsel and title companies" },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for pricing tailored to transaction volume and document count.",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
        { "@type": "ListItem", position: 3, name: "Law Firms", item: "https://spacenexus.net/industries/law-firms" },
        { "@type": "ListItem", position: 4, name: "Real Estate", item: "https://spacenexus.net/industries/law-firms/real-estate" },
    ],
};

const faqItems = [
    {
        question: "How does SpaceNexus support real estate closings?",
        answer: "SpaceNexus provides a centralized workspace for all parties to a real estate closing — buyer, seller, lender, title company, brokers, and counsel. Documents are organized by category (title, survey, environmental, contracts, financing), permissions control who sees what, and the closing binder can be assembled in-platform with all required signatures tracked.",
    },
    {
        question: "Can the data room handle title and survey review?",
        answer: "Yes. Title commitments, title policies, surveys, environmental reports, and zoning documents can be uploaded in any common format. The data room supports redlining and annotation for review comments, version control for document iterations, and full-text search across all documents.",
    },
    {
        question: "How does SpaceNexus support multi-party real estate transactions?",
        answer: "Each party — buyer, seller, lender, broker, title company, surveyor, environmental consultant — has a separate access tier with permissions tied to their role. Lenders see the loan documents and title commitment but not the seller is financial details. Brokers see the listing materials but not the lender is confidential terms. Everyone sees what they need; nothing more.",
    },
    {
        question: "What about post-closing retention?",
        answer: "Real estate transactions are retained for decades — often for the life of the property. SpaceNexus retention policies can be configured for 10, 20, or 30+ years, with cryptographic deletion verification when retention periods expire. The closing binder is preserved as a permanent record.",
    },
    {
        question: "Can lenders use the data room for loan document management?",
        answer: "Yes. Lenders use SpaceNexus to manage loan documentation throughout the real estate transaction lifecycle. Loan documents, title insurance, appraisals, and environmental reports are organized in lender-specific folders, and the data room supports the audit and reporting requirements of post-closing loan servicing.",
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

export default function LawFirmRealEstatePage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="lf-re-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="lf-re-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="lf-re-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link>
                        <span>›</span>
                        <Link href="/industries/law-firms" className="hover:text-[#2563eb] transition-colors">Law Firms</Link>
                        <span>›</span>
                        <span className="text-gray-900">Real Estate</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Law Firm Practice</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Real Estate Practice Data Room for Law Firms</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Virtual data room for real estate counsel. Title and survey review, closing binder assembly, multi-party access for buyers, sellers, lenders, and brokers — and post-closing retention.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Real estate transactions are coordination problems</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            A typical commercial real estate transaction involves the buyer, the seller, the lender, the title company, brokers, surveyors, environmental consultants, appraisers, and often multiple counsel. Coordinating the document flow between all of these parties is one of the most time-consuming aspects of any real estate practice.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Email and shared drives cannot handle this coordination reliably. Documents get lost, versions proliferate, and the closing binder is assembled in a last-minute scramble. A purpose-built data room gives everyone a single source of truth from listing to closing and beyond.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Title and survey review workflows</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Title and survey review is the heart of real estate diligence. SpaceNexus supports the full review workflow:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Title commitment review</strong> — upload title commitments and policies, annotate exceptions and requirements, and track resolution</li>
                            <li><strong>Survey review</strong> — upload ALTA surveys, environmental reports, and zoning documentation with full-text search</li>
                            <li><strong>Endorsement tracking</strong> — track which title endorsements have been requested, received, and approved</li>
                            <li><strong>Redlining and markup</strong> — review and comment on documents with private annotations visible only to your team</li>
                            <li><strong>Version control</strong> — maintain a single current version of every document with full version history</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Multi-party access management</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Each party to a real estate transaction has a different role and needs different documents:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Buyer</strong> — purchase agreement, due diligence materials, financing commitments</li>
                            <li><strong>Seller</strong> — listing agreement, existing leases, environmental reports, financial statements</li>
                            <li><strong>Lender</strong> — title commitment, appraisal, environmental, loan documents</li>
                            <li><strong>Title company</strong> — title commitments, policies, endorsements, survey</li>
                            <li><strong>Brokers</strong> — listing materials, marketing materials, commission agreements</li>
                            <li><strong>Counsel</strong> — all transaction documents, work product, privileged communications</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            SpaceNexus permission tiers ensure each party sees only what they need. The audit trail records exactly who accessed which document and when, providing the chain of custody that title disputes may require years later.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Closing binder assembly</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The closing binder is the permanent record of the transaction. SpaceNexus supports in-platform closing binder assembly:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Document organization</strong> — folders for deeds, mortgages, assignments, title policies, and other closing documents</li>
                            <li><strong>Signature tracking</strong> — which documents are signed, by whom, when, and with what method</li>
                            <li><strong>Recording tracking</strong> — which documents have been recorded with the county, with recording confirmation</li>
                            <li><strong>Final version locking</strong> — closing documents are locked from further modification after recording</li>
                            <li><strong>Distribution to parties</strong> — each party receives a complete copy of the closing binder they need</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">REIT and portfolio transactions</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            REIT transactions and portfolio sales involve dozens or hundreds of properties, each with its own title, survey, environmental, and lease documentation. SpaceNexus handles the complexity:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Property-level organization</strong> — separate folders for each property in a portfolio transaction</li>
                            <li><strong>Bulk upload</strong> — thousands of documents uploaded at once with AI auto-indexing</li>
                            <li><strong>Cross-property analytics</strong> — see due diligence progress across all properties in the portfolio</li>
                            <li><strong>Bulk permission management</strong> — grant or revoke access to property groups</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Post-closing retention</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Real estate transactions are retained for the life of the property — often 20-30+ years. SpaceNexus retention policies are configurable for any period, with cryptographic deletion verification when retention periods expire. The closing binder is preserved as a permanent, searchable record that can be retrieved at any time during the property lifecycle.
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
                        <Link href="/industries/real-estate" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Industry</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR for real estate →</h3>
                            <p className="text-xs text-gray-500 mt-2">The full real estate VDR solution overview.</p>
                        </Link>
                        <Link href="/solutions/mergers-and-acquisitions-vdr" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Solution</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                            <p className="text-xs text-gray-500 mt-2">REIT M&A and portfolio transactions.</p>
                        </Link>
                        <Link href="/industries/law-firms/ma-diligence" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Practice</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A due diligence for law firms →</h3>
                            <p className="text-xs text-gray-500 mt-2">Counsel workflows for M&A diligence.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your real estate data room</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Multi-party access, title and survey review, closing binder assembly. Most firms are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        </div>
    );
}
