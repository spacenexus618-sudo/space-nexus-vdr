import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Capital Markets Data Room for Investment Banks | SpaceNexus",
    description: "Virtual data room for IPO, debt offerings, and ECM/DCM workflows. Underwriter due diligence, legal counsel review, and SEC-compliant audit trails.",
    alternates: { canonical: "https://spacenexus.net/industries/investment-banking/capital-markets" },
    keywords: ["capital markets data room", "IPO VDR", "debt offering data room", "underwriter due diligence", "ECM DCM VDR", "securities offering platform"],
    openGraph: {
        title: "Capital Markets Data Room for Investment Banks | SpaceNexus",
        description: "Virtual data room for IPO, debt offerings, and ECM/DCM workflows. Underwriter due diligence and SEC-compliant audit trails.",
        url: "https://spacenexus.net/industries/investment-banking/capital-markets",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Capital Markets Data Room for Investment Banks",
    description: "Virtual data room for IPO, debt offerings, and ECM/DCM workflows. Underwriter due diligence, legal counsel review, and SEC-compliant audit trails.",
    url: "https://spacenexus.net/industries/investment-banking/capital-markets",
    serviceType: "Virtual Data Room",
    provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "BusinessAudience", audienceType: "Capital markets bankers and underwriters" },
    offers: {
        "@type": "Offer", url: "https://spacenexus.net/pricing", availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for pricing tailored to offering size and document volume.",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
        { "@type": "ListItem", position: 3, name: "Investment Banking", item: "https://spacenexus.net/industries/investment-banking" },
        { "@type": "ListItem", position: 4, name: "Capital Markets", item: "https://spacenexus.net/industries/investment-banking/capital-markets" },
    ],
};

const faqItems = [
    { question: "How does SpaceNexus support IPO due diligence?", answer: "SpaceNexus supports the full IPO due diligence process: organization documents, financial statements (3+ years audited), MD&A, business descriptions, risk factors, related party transactions, and management bios. The underwriter team, legal counsel, auditors, and financial printer all access the data room with tiered permissions. Pre-IPO confidential submissions are protected with view-only mode and dynamic watermarking." },
    { question: "Can SpaceNexus support confidential SEC submissions?", answer: "Yes. SpaceNexus supports confidential draft registration statements, testing-the-waters communications, and confidential pre-IPO submissions. The platform provides the access controls and audit trails required for Reg D, Reg S, and other private placement exemptions, plus SEC Rule 17a-4 record retention." },
    { question: "What about debt offerings and high-yield bond deals?", answer: "Debt offerings involve large deal teams (underwriters, co-managers, issuer counsel, underwriter counsel, trustee) and complex document sets (indentures, credit agreements, security agreements, offering memoranda, financial statements). SpaceNexus supports multi-party access with deal-team-specific permissions and SEC-compliant audit trails." },
    { question: "How does the VDR support ECM roadshows?", answer: "SpaceNexus supports the roadshow workflow with secure document distribution to prospective investors, including preliminary prospectuses, investor presentations, and marketing materials. Engagement analytics show which investors are most engaged — intelligence that informs follow-up and pricing decisions." },
    { question: "Is the VDR compliant with FINRA and SEC record retention?", answer: "Yes. SpaceNexus supports SEC Rule 17a-4 record retention, FINRA Rule 3110 supervisory requirements, and Regulation FD compliance. Audit trails are immutable, retention periods are configurable, and the data room maintains a complete record of all communications and document access." },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
};

export default function IBCapitalMarketsPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="ib-cm-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="ib-cm-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="ib-cm-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link>
                        <span>›</span>
                        <Link href="/industries/investment-banking" className="hover:text-[#2563eb] transition-colors">Investment Banking</Link>
                        <span>›</span>
                        <span className="text-gray-900">Capital Markets</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Investment Banking Practice</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Capital Markets Data Room for Investment Banks</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Virtual data room for IPO, debt offerings, and ECM/DCM workflows. Underwriter due diligence, legal counsel review, and SEC-compliant audit trails throughout the offering lifecycle.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Capital markets transactions require regulatory precision</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">IPO, debt offerings, and other capital markets transactions are governed by extensive SEC and FINRA regulations. Every document, every communication, and every disclosure must be tracked and retained. The data room is a critical component of regulatory compliance — supporting SEC Rule 17a-4 record retention, FINRA Rule 3110 supervision, and Regulation FD fair disclosure.</p>
                        <p className="text-gray-600 leading-relaxed">SpaceNexus gives capital markets teams a purpose-built platform that combines underwriter workflow with the audit trail and compliance controls regulators require.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">IPO due diligence workflow</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The IPO process involves extensive due diligence by the underwriter, legal counsel, and auditors. SpaceNexus supports the full workflow:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Business and legal due diligence</strong> — corporate records, material contracts, IP portfolio, litigation history</li>
                            <li><strong>Financial due diligence</strong> — audited financials (3+ years), MD&A, working capital analysis, segment reporting</li>
                            <li><strong>Underwriting documentation</strong> — comfort letters, opinions, agreements among underwriters</li>
                            <li><strong>Marketing materials</strong> — preliminary prospectus, roadshow presentation, investor education materials</li>
                            <li><strong>Testing-the-waters</strong> — confidential communications with qualified institutional buyers</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Debt offerings and high-yield bonds</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Debt offerings involve large deal teams and complex document sets. SpaceNexus supports:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Indenture and credit agreement</strong> drafting, negotiation, and execution</li>
                            <li><strong>Security documents</strong> including mortgages, security agreements, and guarantees</li>
                            <li><strong>Offering memorandum</strong> for private placements and 144A deals</li>
                            <li><strong>Trustee coordination</strong> with separate access for the indenture trustee</li>
                            <li><strong>Rating agency coordination</strong> with confidential rating presentations</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Multi-party access coordination</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Capital markets transactions involve numerous parties with distinct roles:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Issuer and issuer counsel</strong> — full access to all materials</li>
                            <li><strong>Underwriters and counsel</strong> — full access for due diligence</li>
                            <li><strong>Auditors</strong> — access to financial documents and supporting schedules</li>
                            <li><strong>Financial printer</strong> — access to typesetting and final materials</li>
                            <li><strong>Trustee</strong> — access to indenture and security documents</li>
                            <li><strong>Rating agencies</strong> — confidential access to rating materials</li>
                            <li><strong>Listing exchange</strong> — access to listing application materials</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">SpaceNexus permission tiers ensure each party sees only what they need, and the immutable audit trail supports SEC and FINRA compliance.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Confidential pre-IPO and testing the waters</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Pre-IPO communications and confidential draft registration statements require the highest level of access control:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li>View-only mode with screenshot protection for confidential materials</li>
                            <li>Dynamic watermarking identifying every viewer</li>
                            <li>Time-limited access with automatic expiration</li>
                            <li>Complete audit trail supporting Reg FD compliance</li>
                            <li>Selective disclosure controls preventing unauthorized parties from seeing confidential materials</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Post-closing retention and compliance</h2>
                        <p className="text-gray-600 leading-relaxed">Capital markets records must be retained for years or decades under SEC Rule 17a-4 and FINRA requirements. SpaceNexus retention policies support:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li>Configurable retention periods (typically 3-7 years for offering documents)</li>
                            <li>Immutable record storage preventing unauthorized modification</li>
                            <li>Export capabilities for SEC examinations and FINRA audits</li>
                            <li>Cryptographic deletion verification when retention periods expire</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
                    <div className="space-y-3">{faqItems.map((item, i) => (
                        <details key={i} className="group bg-white rounded-xl border border-gray-200 hover:border-[#2563eb]/30 transition-all">
                            <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                                <h3 className="text-base font-semibold text-gray-900 leading-snug pr-2">{item.question}</h3>
                                <svg className="shrink-0 w-5 h-5 text-[#2563eb] mt-0.5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="px-5 pb-5 -mt-2 text-sm text-gray-600 leading-relaxed">{item.answer}</div>
                        </details>
                    ))}</div>
                </div>
            </section>

            <section className="py-14 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related VDR Resources</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue exploring</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/solutions/mergers-and-acquisitions-vdr" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Solution</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                            <p className="text-xs text-gray-600 mt-2">The M&A VDR platform for capital markets.</p>
                        </Link>
                        <Link href="/industries/investment-banking" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Industry</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR for investment banking →</h3>
                            <p className="text-xs text-gray-600 mt-2">The full IB VDR solution overview.</p>
                        </Link>
                        <Link href="/blog/best-virtual-data-room-for-ma" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Guide</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR software for IB →</h3>
                            <p className="text-xs text-gray-600 mt-2">Practical guide for investment banking teams.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your capital markets data room</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">SEC-compliant, multi-party, with complete audit trail. Most teams are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
