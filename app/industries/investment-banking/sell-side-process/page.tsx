import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Sell-Side M&A Process Data Room for Investment Banks | SpaceNexus",
    description: "Virtual data room purpose-built for sell-side M&A. The 5-phase process from CIM to closing, with bidder management, Q&A workflows, and engagement analytics.",
    alternates: { canonical: "https://spacenexus.net/industries/investment-banking/sell-side-process" },
    keywords: ["sell-side M&A process", "sell-side data room", "M&A auction process", "CIM data room", "M&A phase management", "sell-side advisory workflow"],
    openGraph: {
        title: "Sell-Side M&A Process Data Room for Investment Banks | SpaceNexus",
        description: "The 5-phase sell-side M&A process from CIM to closing. Bidder management, Q&A workflows, and engagement analytics.",
        url: "https://spacenexus.net/industries/investment-banking/sell-side-process",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sell-Side M&A Process Data Room for Investment Banks",
    description: "Virtual data room purpose-built for sell-side M&A. The 5-phase process from CIM to closing, with bidder management, Q&A workflows, and engagement analytics.",
    url: "https://spacenexus.net/industries/investment-banking/sell-side-process",
    serviceType: "Virtual Data Room",
    provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "BusinessAudience", audienceType: "Sell-side M&A advisors" },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
        { "@type": "ListItem", position: 3, name: "Investment Banking", item: "https://spacenexus.net/industries/investment-banking" },
        { "@type": "ListItem", position: 4, name: "Sell-Side M&A Process", item: "https://spacenexus.net/industries/investment-banking/sell-side-process" },
    ],
};

const faqItems = [
    { question: "What are the 5 phases of a sell-side M&A process?", answer: "The 5 phases are: (1) Preparation — CIM, management presentation, data room setup; (2) Marketing — buyer outreach and teaser distribution; (3) First round — initial bids and management presentations; (4) Second round — detailed diligence, site visits, and refined bids; (5) Final negotiation — exclusivity, definitive agreement, and closing. Each phase has specific data room requirements." },
    { question: "How does SpaceNexus manage the buyer outreach process?", answer: "SpaceNexus supports the full buyer outreach workflow: teaser distribution with NDA click-through, buyer qualification tracking, CIM and management presentation distribution to qualified buyers, and Round 1 invitation management. Engagement analytics show which buyers are most responsive." },
    { question: "What is the typical timeline for a sell-side process?", answer: "A typical sell-side process runs 4-6 months from launch to signing: 1-2 months preparation and marketing, 4-6 weeks Round 1 (initial bids and management presentations), 6-8 weeks Round 2 (detailed diligence), and 4-6 weeks final negotiation. Complex cross-border or regulated transactions can run 9-12 months." },
    { question: "How many bidders should we run in the process?", answer: "Most sell-side processes start with 8-15 initial bidders, narrow to 4-6 in Round 1, and 2-3 in the final round. The right number depends on the size and complexity of the deal, the depth of the buyer universe, and the seller&apos;s preferences for competitive tension. SpaceNexus engagement analytics help advisors identify which bidders to advance." },
    { question: "How does the data room support the final negotiation phase?", answer: "During final negotiation, SpaceNexus supports: definitive agreement drafting and redlining through the platform, exclusivity period management, signature tracking, and pre-closing checklist coordination. The data room becomes the closing binder repository, with all final documentation preserved for the deal record." },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
};

export default function IBSellSideProcessPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="ib-ss-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="ib-ss-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="ib-ss-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link>
                        <span>›</span>
                        <Link href="/industries/investment-banking" className="hover:text-[#2563eb] transition-colors">Investment Banking</Link>
                        <span>›</span>
                        <span className="text-gray-900">Sell-Side Process</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Investment Banking Practice</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Sell-Side M&amp;A Process Data Room</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Virtual data room purpose-built for sell-side M&amp;A. The 5-phase process from CIM to closing, with bidder management, Q&amp;A workflows, and engagement analytics throughout.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The sell-side process in 5 phases</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The sell-side M&amp;A process follows a predictable structure. Each phase has specific deliverables, participants, and data room requirements. Understanding the phases — and having the data room support each one — is the difference between a smooth process and a chaotic one.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Phase 1: Preparation (1-2 months)</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The preparation phase sets the foundation for the entire process. Most deals fail here — not because of market conditions or buyer demand, but because of inadequate preparation.</p>
                        <p className="text-gray-600 leading-relaxed mb-4">Key deliverables:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Confidential information memorandum (CIM)</strong> — the primary marketing document, typically 30-50 pages</li>
                            <li><strong>Management presentation</strong> — the in-person meeting deck, typically 30-50 slides</li>
                            <li><strong>Financial model</strong> — detailed model with historicals, projections, and transaction scenarios</li>
                            <li><strong>Data room</strong> — organized for buyer review with staged disclosure</li>
                            <li><strong>Teaser</strong> — anonymous one-page summary for initial outreach</li>
                            <li><strong>Buyer list</strong> — comprehensive universe of strategic and financial buyers</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">The data room should be 80%+ complete before the formal process launches. Buyers who see a sparse data room on day one start with a negative bias.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Phase 2: Marketing (3-4 weeks)</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The marketing phase creates competitive tension and identifies the bidders who will move forward:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Teaser distribution</strong> — anonymous one-pager to identified buyer universe</li>
                            <li><strong>NDA execution</strong> — NDA click-through workflow in the data room</li>
                            <li><strong>CIM distribution</strong> — full marketing document to NDAed buyers</li>
                            <li><strong>First management presentations</strong> — typically 2-3 weeks of buyer meetings</li>
                            <li><strong>Initial indications of interest</strong> — non-binding first-round bids</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">SpaceNexus engagement analytics show which buyers are most engaged — who has read the CIM, who is asking questions, and who is ready to move to the next phase.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Phase 3: First round (4-6 weeks)</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The first round narrows the field and produces more detailed indications of interest:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Data room access</strong> — first-round bidders see the full data room</li>
                            <li><strong>Management presentations</strong> — detailed sessions with each bidder</li>
                            <li><strong>Q&amp;A workflow</strong> — structured questions routed to the deal team</li>
                            <li><strong>Site visits</strong> — facility tours and management meetings</li>
                            <li><strong>Non-binding LOIs</strong> — first-round bids with proposed valuation and structure</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">The Q&amp;A workflow is critical during this phase. Pre-prepared FAQ documents, response SLAs, and routing rules keep the process moving and identify the most serious bidders.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Phase 4: Second round (6-8 weeks)</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The second round is the detailed diligence phase:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Deep diligence</strong> — full financial, commercial, legal, and operational review</li>
                            <li><strong>Expert sessions</strong> — specialized sessions with functional experts (CFO, CTO, head of sales)</li>
                            <li><strong>Site visits and operational due diligence</strong></li>
                            <li><strong>Reference calls</strong> — customer, supplier, and partner references</li>
                            <li><strong>Management interviews</strong> — broader team interviews</li>
                            <li><strong>Mark-up of definitive agreement</strong> — bidders submit markup of the draft purchase agreement</li>
                            <li><strong>Refined bids</strong> — improved valuation and structure based on diligence</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">The data room serves as the central repository for all second-round materials, including confidential information that was withheld from first-round bidders.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Phase 5: Final negotiation and closing (4-6 weeks)</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The final phase converts the best bid into a closed deal:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Exclusivity period</strong> — typically 30-60 days of exclusive negotiation with the winning bidder</li>
                            <li><strong>Final purchase agreement negotiation</strong> — resolution of all markups and outstanding issues</li>
                            <li><strong>Definitive agreement execution</strong> — signing of the purchase agreement and ancillary documents</li>
                            <li><strong>Pre-closing conditions</strong> — regulatory approvals, third-party consents, financing</li>
                            <li><strong>Closing</strong> — wire transfers, document delivery, transition kickoff</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">The data room remains active through closing, with the final documentation preserved for post-close reference and any subsequent disputes.</p>
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
                            <p className="text-xs text-gray-500 mt-2">The platform built for the full sell-side process.</p>
                        </Link>
                        <Link href="/blog/seller-data-room-prep-checklist-14-days" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Guide</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Seller 14-day prep checklist →</h3>
                            <p className="text-xs text-gray-500 mt-2">The countdown to launching your data room.</p>
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
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your sell-side data room</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Built for the 5-phase sell-side process. Most teams are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        </div>
    );
}
