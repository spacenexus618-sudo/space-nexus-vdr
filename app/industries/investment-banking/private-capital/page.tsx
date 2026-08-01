import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Private Capital & Fundraising Data Room for Investment Banks | SpaceNexus",
    description: "Virtual data room for GP fundraising, fund closings, LP reporting, and portfolio company capital raises. Side-letter management, capital call documentation, and LP communications.",
    alternates: { canonical: "https://spacenexus.net/industries/investment-banking/private-capital" },
    keywords: ["GP fundraising data room", "LP reporting platform", "fund closing VDR", "capital call documentation", "side letter management", "private capital VDR"],
    openGraph: {
        title: "Private Capital & Fundraising Data Room for Investment Banks | SpaceNexus",
        description: "Virtual data room for GP fundraising, fund closings, LP reporting, and portfolio company capital raises.",
        url: "https://spacenexus.net/industries/investment-banking/private-capital",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Private Capital & Fundraising Data Room for Investment Banks",
    description: "Virtual data room for GP fundraising, fund closings, LP reporting, and portfolio company capital raises. Side-letter management, capital call documentation, and LP communications.",
    url: "https://spacenexus.net/industries/investment-banking/private-capital",
    serviceType: "Virtual Data Room",
    provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "BusinessAudience", audienceType: "Private capital advisors and GP fundraising teams" },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
        { "@type": "ListItem", position: 3, name: "Investment Banking", item: "https://spacenexus.net/industries/investment-banking" },
        { "@type": "ListItem", position: 4, name: "Private Capital", item: "https://spacenexus.net/industries/investment-banking/private-capital" },
    ],
};

const faqItems = [
    { question: "How does SpaceNexus support GP fundraising?", answer: "SpaceNexus supports the full GP fundraising workflow: fund marketing materials, PPM and LPA drafting, due diligence for prospective LPs, side letter negotiations, capital call documentation, and post-close LP reporting. Each LP gets a customized view of the data room based on their fund commitment, access tier, and subscription status." },
    { question: "Can the data room handle multiple LPs with different access?", answer: "Yes. SpaceNexus supports unlimited LP groups with tiered access. Side letters are managed per-LP with confidentiality controls. Capital call notices, distribution statements, and K-1 tax documents are distributed through the platform with delivery confirmation and read receipts." },
    { question: "How does SpaceNexus support side letter management?", answer: "Side letters are negotiated individually with each LP and contain different terms (fee discounts, MFN clauses, co-invest rights, etc.). SpaceNexus supports per-LP side letter drafting, redlining, execution, and ongoing management, with confidentiality controls preventing LPs from seeing each other&apos;s side letters." },
    { question: "What about portfolio company capital raises?", answer: "Investment banks running capital raises for portfolio companies use SpaceNexus to organize the data room, manage investor access tiers, run Q&amp;A workflows, and track engagement analytics. The platform supports the same multi-bidder process management used in M&amp;A, adapted for the unique requirements of capital raises." },
    { question: "How does the platform support LP reporting?", answer: "Quarterly LP letters, capital call notices, distribution statements, and K-1 tax documents are distributed through the platform with delivery confirmation. LPs can access historical documents through a dedicated LP portal, and the platform maintains a complete record of all communications for regulatory and audit purposes." },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
};

export default function IBPrivateCapitalPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="ib-pc-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="ib-pc-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="ib-pc-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link>
                        <span>›</span>
                        <Link href="/industries/investment-banking" className="hover:text-[#2563eb] transition-colors">Investment Banking</Link>
                        <span>›</span>
                        <span className="text-gray-900">Private Capital</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Investment Banking Practice</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Private Capital &amp; Fundraising Data Room</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Virtual data room for GP fundraising, fund closings, LP reporting, and portfolio company capital raises. Side-letter management, capital call documentation, and LP communications throughout the fund lifecycle.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">GP fundraising is a long, complex process</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Raising a fund — whether a $50M emerging manager fund or a $5B mega-fund — is a 12-24 month process involving marketing, due diligence by prospective LPs, side-letter negotiations, regulatory filings, and ongoing LP communications after closing. The data room is central to the entire process.</p>
                        <p className="text-gray-600 leading-relaxed">SpaceNexus gives GP fundraising teams a purpose-built platform for managing the full lifecycle: from initial LP outreach through final close and beyond.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Fund marketing and pre-marketing</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The GP fundraising process typically begins with a 12-18 month pre-marketing period:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Pre-marketing deck</strong> — initial fund strategy, team, and track record</li>
                            <li><strong>Private placement memorandum (PPM)</strong> — comprehensive fund terms and risk factors</li>
                            <li><strong>Limited partnership agreement (LPA)</strong> — fund governance and economic terms</li>
                            <li><strong>Team DD package</strong> — bios, prior fund performance, key person backgrounds</li>
                            <li><strong>Track record verification</strong> — audited returns, attribution analysis, fee/carry history</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">Each tier of materials is gated by LP commitment size and subscription status.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">LP due diligence workflow</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Institutional LPs conduct extensive due diligence before committing to a fund. SpaceNexus supports the LP DD process:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Tiered DD access</strong> — initial LPs see summary materials; committed LPs see full DD</li>
                            <li><strong>Q&amp;A workflow</strong> — LP questions routed to the appropriate fund team member</li>
                            <li><strong>Reference call coordination</strong> — confidential reference calls with existing LPs and portfolio CEOs</li>
                            <li><strong>Operational due diligence (ODD)</strong> — separate access for ODD consultants reviewing fund operations</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Side letter management</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Side letters are individually negotiated with each LP and contain different terms — fee discounts, MFN clauses, co-invest rights, GP commitments, ESG provisions, key person requirements. SpaceNexus supports:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Per-LP side letter drafting</strong> with confidentiality controls preventing LPs from seeing each other&apos;s terms</li>
                            <li><strong>Side letter redlining and execution</strong> through the platform</li>
                            <li><strong>MFN tracking</strong> — automatic notifications when other LPs receive better terms that may trigger MFN</li>
                            <li><strong>Ongoing side letter management</strong> — amendments, fee calculations, and reporting</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Closing mechanics</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Fund closings involve the execution of subscription documents, capital call notices, and wire transfers. SpaceNexus supports the closing process:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Subscription document execution</strong> with e-signature workflows</li>
                            <li><strong>Capital call notices</strong> distributed through the platform with delivery confirmation</li>
                            <li><strong>Wire transfer tracking</strong> with confirmation receipts</li>
                            <li><strong>Closing certificates</strong> and final fund documentation</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ongoing LP communications</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The data room becomes the LP portal after closing. SpaceNexus supports ongoing LP communications:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Quarterly LP letters</strong> distributed through the platform</li>
                            <li><strong>Capital call and distribution notices</strong> with delivery confirmation</li>
                            <li><strong>Annual audited financials and tax documents (K-1s)</strong></li>
                            <li><strong>Investor day materials and recordings</strong></li>
                            <li><strong>Ad-hoc LP communications</strong> with full audit trail</li>
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
                        <Link href="/industries/private-equity" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Industry</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR for private equity →</h3>
                            <p className="text-xs text-gray-600 mt-2">Buy-side, sell-side, and LP workflows for PE.</p>
                        </Link>
                        <Link href="/industries/investment-banking" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Industry</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR for investment banking →</h3>
                            <p className="text-xs text-gray-600 mt-2">The full IB VDR solution overview.</p>
                        </Link>
                        <Link href="/solutions/mergers-and-acquisitions-vdr" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Solution</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&amp;A virtual data room →</h3>
                            <p className="text-xs text-gray-600 mt-2">For portfolio company capital raises.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your private capital data room</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">GP fundraising, LP reporting, side-letter management. Most teams are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
    );
}
