import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../../components/LastUpdated";

export const metadata: Metadata = {
    title: "LP Fundraising Data Room for PE Firms | SpaceNexus",
    description: "Virtual data room for PE fund fundraising. PPM and LPA management, LP due diligence, side letter coordination, and capital call documentation.",
    alternates: { canonical: "https://spacenexus.net/industries/private-equity/lp-fundraising" },
    keywords: ["PE fund data room", "LP fundraising VDR", "PPM data room", "LPA management platform", "PE side letter VDR", "capital call documentation"],
    openGraph: { title: "LP Fundraising Data Room for PE Firms | SpaceNexus", description: "Virtual data room for PE fund fundraising. PPM, LPA, side letters, and LP communications.", url: "https://spacenexus.net/industries/private-equity/lp-fundraising" },
};

const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "LP Fundraising Data Room for PE Firms", description: "Virtual data room for PE fund fundraising. PPM and LPA management, LP due diligence, side letter coordination, and capital call documentation.", url: "https://spacenexus.net/industries/private-equity/lp-fundraising", serviceType: "Virtual Data Room", provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" }, areaServed: { "@type": "Place", name: "Worldwide" }, audience: { "@type": "BusinessAudience", audienceType: "PE fund managers and IR teams" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" }, { "@type": "ListItem", position: 3, name: "Private Equity", item: "https://spacenexus.net/industries/private-equity" }, { "@type": "ListItem", position: 4, name: "LP Fundraising", item: "https://spacenexus.net/industries/private-equity/lp-fundraising" }] };
const faqItems = [
    { question: "How does SpaceNexus support PE fund fundraising?", answer: "SpaceNexus supports the full PE fundraising workflow: pre-marketing materials, PPM and LPA distribution, LP due diligence Q&amp;A, side letter negotiations, capital call documentation, and post-close LP communications. Each LP gets a customized view based on their fund commitment and subscription status." },
    { question: "Can the platform handle multiple LPs with confidential terms?", answer: "Yes. SpaceNexus supports unlimited LPs with per-LP access tiers and confidentiality controls. Side letters are managed individually with each LP, with controls preventing LPs from seeing each other&apos;s negotiated terms. MFN tracking notifies the GP when other LPs receive better terms." },
    { question: "How does SpaceNexus support capital calls and distributions?", answer: "Capital call notices and distribution statements are distributed through the platform with delivery confirmation and read receipts. The platform maintains a complete record of all LP communications, supporting audit and regulatory requirements." },
    { question: "What about ongoing LP reporting after closing?", answer: "The data room becomes the LP portal after closing. Quarterly LP letters, annual audited financials, K-1 tax documents, and ad-hoc communications are distributed through the platform. LPs access historical documents through a dedicated portal with full audit trail." },
    { question: "Can LPs conduct operational due diligence (ODD) on the platform?", answer: "Yes. ODD consultants can access the data room with separate permissions, conduct facility visits (documented with photos and notes in the platform), and submit ODD reports. The data room supports the full ODD workflow with confidentiality controls." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

export default function PELPFundraisingPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="pe-lp-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="pe-lp-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="pe-lp-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link><span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link><span>›</span>
                        <Link href="/industries/private-equity" className="hover:text-[#2563eb] transition-colors">Private Equity</Link><span>›</span>
                        <span className="text-gray-900">LP Fundraising</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Private Equity Practice</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">LP Fundraising Data Room for PE Firms</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">Virtual data room for PE fund fundraising. PPM and LPA management, LP due diligence, side letter coordination, and capital call documentation throughout the fund lifecycle.</p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">PE fundraising is a 12-24 month process</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Raising a PE fund — whether a $250M middle-market fund or a $10B mega-fund — involves extensive pre-marketing, institutional LP due diligence, side letter negotiations, and ongoing LP communications after closing. The data room is central to the entire process.</p>
                        <p className="text-gray-600 leading-relaxed">SpaceNexus gives PE fundraising teams a purpose-built platform for managing LP relationships, due diligence, side letter negotiations, and post-close communications.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Pre-marketing and fund materials</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The fundraising process typically begins with a 12-18 month pre-marketing period:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Pre-marketing deck</strong> — fund strategy, team, and high-level track record</li>
                            <li><strong>Private placement memorandum (PPM)</strong> — comprehensive fund terms and risk factors</li>
                            <li><strong>Limited partnership agreement (LPA)</strong> — fund governance and economic terms</li>
                            <li><strong>Track record verification</strong> — audited returns, attribution, fee history</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">LP due diligence workflow</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Institutional LPs conduct extensive due diligence on PE fund managers. SpaceNexus supports:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Tiered DD access</strong> — initial LPs see summary materials; committed LPs see full DD</li>
                            <li><strong>Operational due diligence (ODD)</strong> — separate access for ODD consultants</li>
                            <li><strong>Q&amp;A workflow</strong> — LP questions routed to the appropriate team member</li>
                            <li><strong>Reference call coordination</strong> — confidential references with existing LPs and portfolio CEOs</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Side letter management</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">PE side letters are individually negotiated and contain different terms (fee discounts, MFN clauses, co-invest rights, GP commitments, ESG provisions). SpaceNexus supports per-LP side letter management with confidentiality controls and MFN tracking.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ongoing LP communications</h2>
                        <p className="text-gray-600 leading-relaxed">After closing, the data room becomes the LP portal. Quarterly LP letters, capital call notices, distribution statements, K-1 tax documents, and ad-hoc communications are all distributed through the platform with full audit trail and delivery confirmation.</p>
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
                            <p className="text-xs text-gray-500 mt-2">The full PE VDR solution overview.</p>
                        </Link>
                        <Link href="/industries/investment-banking/private-capital" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Practice</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Private capital &amp; fundraising →</h3>
                            <p className="text-xs text-gray-500 mt-2">GP fundraising workflows for IB advisors.</p>
                        </Link>
                        <Link href="/checklists/investor-data-room" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Checklist</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Investor data room templates →</h3>
                            <p className="text-xs text-gray-500 mt-2">8 free downloadable templates.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your LP fundraising data room</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">PPM, LPA, side letters, and ongoing LP communications. Most teams are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
