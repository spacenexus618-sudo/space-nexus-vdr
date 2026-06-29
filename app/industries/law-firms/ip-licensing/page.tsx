import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "IP & Licensing Practice Data Room for Law Firms | SpaceNexus",
    description: "Virtual data room for IP counsel. Patent portfolio management, licensing transactions, trademark prosecution, and trade secret protection with chain-of-title documentation.",
    alternates: {
        canonical: "https://spacenexus.net/industries/law-firms/ip-licensing",
    },
    keywords: [
        "IP licensing data room",
        "patent transaction VDR",
        "trademark prosecution platform",
        "trade secret protection VDR",
        "IP portfolio management",
        "technology transfer data room",
    ],
    openGraph: {
        title: "IP & Licensing Practice Data Room for Law Firms | SpaceNexus",
        description: "Virtual data room for IP counsel. Patent portfolio management, licensing transactions, and trade secret protection.",
        url: "https://spacenexus.net/industries/law-firms/ip-licensing",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IP & Licensing Practice Data Room for Law Firms",
    description: "Virtual data room for IP counsel. Patent portfolio management, licensing transactions, trademark prosecution, and trade secret protection with chain-of-title documentation.",
    url: "https://spacenexus.net/industries/law-firms/ip-licensing",
    serviceType: "Virtual Data Room",
    provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "BusinessAudience", audienceType: "IP counsel and licensing professionals" },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for pricing tailored to IP portfolio size and transaction volume.",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
        { "@type": "ListItem", position: 3, name: "Law Firms", item: "https://spacenexus.net/industries/law-firms" },
        { "@type": "ListItem", position: 4, name: "IP & Licensing", item: "https://spacenexus.net/industries/law-firms/ip-licensing" },
    ],
};

const faqItems = [
    {
        question: "How does SpaceNexus support patent portfolio management?",
        answer: "SpaceNexus organizes patent portfolios with chain-of-title documentation, assignment records, inventor declarations, and prosecution history. Each patent can be linked to its family members, continuations, and related applications. The platform supports portfolio valuation, due diligence for portfolio sales, and licensing transaction documentation.",
    },
    {
        question: "Can IP counsel use SpaceNexus for licensing transactions?",
        answer: "Yes. SpaceNexus supports the full licensing transaction workflow: term sheet, due diligence on the IP, license agreement negotiation, execution, and post-closing administration. Multi-party access controls ensure each party — licensor, licensee, and their counsel — sees only the documents relevant to their role.",
    },
    {
        question: "How does SpaceNexus protect trade secrets?",
        answer: "SpaceNexus provides view-only mode with screenshot protection, dynamic watermarking, NDA click-through gates, and time-limited access. Trade secret materials are protected with the highest security tier, and every access is logged in the immutable audit trail. The platform supports trade secret protection programs that meet the requirements of the Defend Trade Secrets Act and state trade secret laws.",
    },
    {
        question: "Can the data room support trademark prosecution workflows?",
        answer: "Yes. SpaceNexus supports trademark portfolio management with application status tracking, office action responses, declaration of use evidence, renewal reminders, and assignment recording. Multi-jurisdictional portfolios are organized by country or region with consistent folder structures.",
    },
    {
        question: "How does SpaceNexus support technology transfer and university IP?",
        answer: "SpaceNexus supports technology transfer offices at universities, research institutions, and government labs. The platform manages invention disclosures, patent applications, licensing to industry partners, royalty tracking, and compliance with Bayh-Dole and similar regulations. Multi-party access supports inventor, institution, and licensee coordination.",
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

export default function LawFirmIPLicensingPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="lf-ip-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="lf-ip-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="lf-ip-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link>
                        <span>›</span>
                        <Link href="/industries/law-firms" className="hover:text-[#2563eb] transition-colors">Law Firms</Link>
                        <span>›</span>
                        <span className="text-gray-900">IP & Licensing</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Law Firm Practice</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">IP & Licensing Practice Data Room for Law Firms</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Virtual data room for IP counsel. Patent portfolio management, licensing transactions, trademark prosecution, and trade secret protection — with chain-of-title documentation throughout.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">IP transactions require precision</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Intellectual property transactions — patent sales, technology licensing, trademark assignments, trade secret transfers — require meticulous documentation. A missing assignment, an incomplete chain of title, or a poorly maintained licensing record can render an IP asset unmarketable.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            SpaceNexus gives IP counsel a purpose-built platform for managing IP portfolios and transactions. Every assignment, every license, every disclosure is documented in an immutable record that supports the most demanding IP transactions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Patent portfolio management</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Patent portfolios are complex assets with deep documentation requirements. SpaceNexus supports:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Chain of title documentation</strong> — inventor assignments, employer assignments, transfers from prior owners</li>
                            <li><strong>Prosecution history</strong> — every office action response, restriction, amendment, and appeal</li>
                            <li><strong>Family management</strong> — link continuations, divisionals, PCT national stages, and foreign counterparts</li>
                            <li><strong>Maintenance fee tracking</strong> — renewal deadlines, annuity payments, lapse monitoring</li>
                            <li><strong>Portfolio valuation</strong> — organize documentation for IP valuation and portfolio sale</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Licensing transactions</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Licensing transactions involve complex multi-party negotiations and documentation:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Term sheet</strong> — draft and negotiate key terms with version control and redlining</li>
                            <li><strong>IP due diligence</strong> — comprehensive review of the IP being licensed, including chain of title and freedom-to-operate</li>
                            <li><strong>License agreement</strong> — draft, negotiate, and execute the full agreement with all schedules and exhibits</li>
                            <li><strong>Closing</strong> — execute the agreement, deliver any required materials, and complete post-closing obligations</li>
                            <li><strong>Royalty administration</strong> — track royalties, audits, and reporting obligations over the life of the license</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            SpaceNexus supports the full licensing lifecycle in a single platform with multi-party access controls and a complete audit trail.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Trade secret protection programs</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Trade secrets require the highest level of confidentiality. SpaceNexus supports trade secret protection with:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>View-only mode with screenshot protection</strong> for the most sensitive materials</li>
                            <li><strong>Dynamic watermarking</strong> identifying every viewer of every page</li>
                            <li><strong>NDA enforcement</strong> before any access to trade secret materials</li>
                            <li><strong>Time-limited access</strong> with automatic expiration</li>
                            <li><strong>Detailed access logs</strong> supporting Defend Trade Secrets Act litigation</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Trademark portfolio management</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Trademark portfolios require consistent management across jurisdictions:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Application status tracking</strong> across all jurisdictions</li>
                            <li><strong>Office action response management</strong> with deadline tracking</li>
                            <li><strong>Declaration of use evidence</strong> with organized specimens</li>
                            <li><strong>Renewal reminders</strong> with annuity fee tracking</li>
                            <li><strong>Assignment recording</strong> with chain of title documentation</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Technology transfer and university IP</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Technology transfer offices at universities and research institutions have unique IP management needs. SpaceNexus supports:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Invention disclosure management</strong> with inventor declarations and conflict checks</li>
                            <li><strong>Patent application coordination</strong> between university, outside counsel, and patent counsel</li>
                            <li><strong>Licensing to industry partners</strong> with standard terms and negotiated exceptions</li>
                            <li><strong>Royalty distribution</strong> to inventors and institutions per policy</li>
                            <li><strong>Bayh-Dole compliance</strong> for federally funded inventions</li>
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
                        <Link href="/industries/law-firms" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Industry</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data rooms for law firms →</h3>
                            <p className="text-xs text-gray-500 mt-2">The full law firm data room solution overview.</p>
                        </Link>
                        <Link href="/solutions/mergers-and-acquisitions-vdr" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Solution</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                            <p className="text-xs text-gray-500 mt-2">For IP-rich M&A and technology transactions.</p>
                        </Link>
                        <Link href="/industries/law-firms/ma-diligence" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Practice</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A due diligence for law firms →</h3>
                            <p className="text-xs text-gray-500 mt-2">Counsel workflows for IP-heavy diligence.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your IP data room</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Patent portfolio management, licensing transactions, trade secret protection. Most firms are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        </div>
    );
}
