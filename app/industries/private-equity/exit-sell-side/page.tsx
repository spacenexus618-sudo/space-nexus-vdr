import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Exit & Sell-Side Data Room for PE Firms | SpaceNexus",
    description: "Virtual data room for PE exit preparation. Portfolio company sale processes, exit readiness assessments, and multi-party buyer management.",
    alternates: { canonical: "https://spacenexus.net/industries/private-equity/exit-sell-side" },
    keywords: ["PE exit data room", "portfolio company sale VDR", "PE sell-side process", "exit readiness VDR", "secondaries platform", "GP-led continuation"],
    openGraph: { title: "Exit & Sell-Side Data Room for PE Firms | SpaceNexus", description: "Virtual data room for PE exit preparation. Portfolio company sale processes, exit readiness, and multi-party buyer management.", url: "https://spacenexus.net/industries/private-equity/exit-sell-side" },
};

const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Exit & Sell-Side Data Room for PE Firms", description: "Virtual data room for PE exit preparation. Portfolio company sale processes, exit readiness assessments, and multi-party buyer management.", url: "https://spacenexus.net/industries/private-equity/exit-sell-side", serviceType: "Virtual Data Room", provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" }, areaServed: { "@type": "Place", name: "Worldwide" }, audience: { "@type": "BusinessAudience", audienceType: "PE exit teams and portfolio management" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" }, { "@type": "ListItem", position: 3, name: "Private Equity", item: "https://spacenexus.net/industries/private-equity" }, { "@type": "ListItem", position: 4, name: "Exit & Sell-Side", item: "https://spacenexus.net/industries/private-equity/exit-sell-side" }] };
const faqItems = [
    { question: "How does SpaceNexus support PE exit preparation?", answer: "SpaceNexus supports the full exit preparation workflow: exit readiness assessment, CIM and management presentation drafting, data room population, sell-side process management, multi-party buyer coordination, and post-close transition. The platform manages the information flow between the PE team, portfolio company leadership, sell-side advisor, and prospective buyers." },
    { question: "What is an exit readiness assessment?", answer: "An exit readiness assessment identifies gaps in the portfolio company&apos;s documentation, processes, and reporting that could slow or derail a sell-side process. SpaceNexus supports exit readiness with gap analysis templates, data room audit checklists, and buyer-question pre-emption through the Q&amp;A workflow." },
    { question: "How does the platform support GP-led continuation vehicles?", answer: "GP-led continuation funds are an increasingly common exit alternative. SpaceNexus supports the data room for continuation fund formation, including confidential investor materials, LP consent solicitation, and ongoing reporting for the new vehicle. Each LP (rollover vs. cash-out) has separate access and disclosure rights." },
    { question: "Can SpaceNexus support secondaries transactions?", answer: "Yes. Secondaries transactions (LP portfolio sales, tender offers, strip sales) involve confidential data sharing with prospective buyers. SpaceNexus supports the secondaries process with secure data rooms, anonymized portfolio information, and bid management workflows." },
    { question: "What about post-close transition and continuing obligations?", answer: "After closing, SpaceNexus supports post-close transition with the new owner, continuing obligations (rep and warranty survival, post-closing covenants), and any earnout or seller financing arrangements. The audit trail supports any post-close disputes or adjustments." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

export default function PEExitSellSidePage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="pe-exit-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="pe-exit-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="pe-exit-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link><span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link><span>›</span>
                        <Link href="/industries/private-equity" className="hover:text-[#2563eb] transition-colors">Private Equity</Link><span>›</span>
                        <span className="text-gray-900">Exit &amp; Sell-Side</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Private Equity Practice</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Exit &amp; Sell-Side Data Room for PE Firms</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">Virtual data room for PE exit preparation. Portfolio company sale processes, exit readiness assessments, and multi-party buyer management throughout the exit lifecycle.</p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">PE exit is the realization event</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">For most PE firms, the exit is the single most important event in the fund lifecycle — the moment when value created over 3-7 years converts to realized returns for the LPs. The data room is the operational platform for the entire exit process.</p>
                        <p className="text-gray-600 leading-relaxed">SpaceNexus gives PE exit teams a purpose-built platform for managing every aspect of the exit, from initial readiness through final close and post-close transition.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Exit readiness and preparation</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The exit preparation process typically begins 12-18 months before the planned exit:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Exit readiness assessment</strong> — gap analysis of documentation, processes, and reporting</li>
                            <li><strong>Data room population</strong> — building the comprehensive portfolio company data room</li>
                            <li><strong>CIM and management presentation</strong> — sell-side marketing materials drafting</li>
                            <li><strong>Financial model preparation</strong> — three-statement model and projections</li>
                            <li><strong>Coordination with sell-side advisor</strong> — engagement letter, process design, buyer list</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Sell-side process management</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">SpaceNexus supports the full sell-side process for PE exits:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Multi-bidder coordination</strong> with tiered access based on bid stage</li>
                            <li><strong>Engagement analytics</strong> showing which buyers are most serious</li>
                            <li><strong>Structured Q&amp;A</strong> with routing to the portfolio company and PE team</li>
                            <li><strong>Management presentation coordination</strong> with multiple bidders</li>
                            <li><strong>Reference call management</strong> with portfolio company customers and partners</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">GP-led continuation vehicles</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">GP-led continuation funds are an increasingly common exit alternative. SpaceNexus supports the continuation fund formation process:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Confidential investor materials</strong> for prospective continuation fund LPs</li>
                            <li><strong>LP consent solicitation</strong> with separate access for rollover vs. cash-out LPs</li>
                            <li><strong>Ongoing reporting</strong> for the new continuation vehicle</li>
                            <li><strong>Conflict management</strong> between existing fund LPs and continuation fund LPs</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Secondaries transactions</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Secondaries — LP portfolio sales, tender offers, strip sales — involve confidential data sharing with prospective buyers. SpaceNexus supports the secondaries workflow with secure data rooms, anonymized portfolio information, and bid management.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Post-close transition and continuing obligations</h2>
                        <p className="text-gray-600 leading-relaxed">After the exit closes, the data room supports post-close transition with the new owner, including rep and warranty survival periods, post-closing covenants, earnout or seller financing arrangements, and any ongoing PE involvement.</p>
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
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&amp;A virtual data room →</h3>
                            <p className="text-xs text-gray-500 mt-2">For portfolio company exits.</p>
                        </Link>
                        <Link href="/industries/private-equity/portfolio-management" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Practice</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Portfolio management →</h3>
                            <p className="text-xs text-gray-500 mt-2">Pre-exit value creation and monitoring.</p>
                        </Link>
                        <Link href="/checklists/due-diligence-checklist" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Checklist</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&amp;A due diligence checklist →</h3>
                            <p className="text-xs text-gray-500 mt-2">200+ items across every workstream.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your exit data room</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Exit readiness, sell-side process management, continuation funds. Most teams are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        </div>
    );
}
