import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Exits & Secondaries Data Room for VC Firms | SpaceNexus",
    description: "Virtual data room for VC exit preparation. IPO readiness, M&A exits, secondary sales, tender offers, and GP-led continuation vehicles for venture-backed companies.",
    alternates: { canonical: "https://spacenexus.net/industries/venture-capital/exits-secondaries" },
    keywords: ["VC exit data room", "startup IPO VDR", "secondary sale VDR", "tender offer VDR", "GP-led continuation VC", "portfolio company exit"],
    openGraph: { title: "Exits & Secondaries Data Room for VC Firms | SpaceNexus", description: "Virtual data room for VC exits. IPO readiness, M&A, secondaries, and continuation vehicles.", url: "https://spacenexus.net/industries/venture-capital/exits-secondaries" },
};

const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Exits & Secondaries Data Room for VC Firms", description: "Virtual data room for VC exit preparation. IPO readiness, M&A exits, secondary sales, tender offers, and GP-led continuation vehicles for venture-backed companies.", url: "https://spacenexus.net/industries/venture-capital/exits-secondaries", serviceType: "Virtual Data Room", provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" }, areaServed: { "@type": "Place", name: "Worldwide" }, audience: { "@type": "BusinessAudience", audienceType: "VC exit teams and portfolio company leadership" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" }, { "@type": "ListItem", position: 3, name: "Venture Capital", item: "https://spacenexus.net/industries/venture-capital" }, { "@type": "ListItem", position: 4, name: "Exits & Secondaries", item: "https://spacenexus.net/industries/venture-capital/exits-secondaries" }] };
const faqItems = [
    { question: "How does SpaceNexus support VC exit preparation?", answer: "SpaceNexus supports the full exit preparation process: exit readiness assessment, data room population for M&amp;A or IPO, management presentation and CIM drafting, buy-side and underwriter coordination, and post-close transition. The platform is the operational backbone for portfolio company exits at every stage." },
    { question: "What does an IPO readiness data room include?", answer: "IPO readiness requires comprehensive documentation: corporate records, audited financials (3+ years), MD&amp;A, board and committee minutes, material contracts, IP documentation, litigation history, regulatory compliance, related party transactions, and management bios. SpaceNexus supports the full S-1 preparation process with secure underwriter access and SEC-compliant audit trails." },
    { question: "How does SpaceNexus support secondaries and tender offers?", answer: "Secondaries (LP portfolio sales, tender offers, strip sales) involve confidential data sharing with prospective buyers. SpaceNexus supports the secondaries process with secure data rooms, anonymized portfolio information, bid management workflows, and LP consent solicitation." },
    { question: "What about GP-led continuation vehicles for VC?", answer: "GP-led continuation funds are an increasingly common exit alternative for VC. SpaceNexus supports continuation fund formation with confidential investor materials, LP consent solicitation (rollover vs. cash-out), and ongoing reporting for the new vehicle. Each LP group has separate access and disclosure rights." },
    { question: "How does SpaceNexus support strategic M&A exits?", answer: "For portfolio company strategic acquisitions, SpaceNexus supports the full sell-side process: CIM and management presentation, multi-bidder coordination with tiered access, structured Q&amp;A, and post-close transition. The platform&apos;s audit trail supports the deal record and post-close obligations." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

export default function VCExitsSecondariesPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="vc-exit-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="vc-exit-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="vc-exit-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link><span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link><span>›</span>
                        <Link href="/industries/venture-capital" className="hover:text-[#2563eb] transition-colors">Venture Capital</Link><span>›</span>
                        <span className="text-gray-900">Exits &amp; Secondaries</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Venture Capital Practice</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Exits &amp; Secondaries Data Room for VC Firms</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">Virtual data room for VC exit preparation. IPO readiness, M&amp;A exits, secondary sales, tender offers, and GP-led continuation vehicles for venture-backed companies.</p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">VC exits are the realization event</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">For VC firms, exits are the moment when the value created over 5-10 years converts to realized returns for LPs. The data room is the operational platform for the entire exit process, whether the exit is an IPO, strategic M&amp;A, secondary sale, or GP-led continuation.</p>
                        <p className="text-gray-600 leading-relaxed">SpaceNexus gives VC exit teams a purpose-built platform for managing every aspect of the exit, from initial readiness through final close and post-close transition.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">IPO readiness and execution</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">IPO preparation is a 12-18 month process. SpaceNexus supports:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>S-1 preparation</strong> with comprehensive corporate and financial documentation</li>
                            <li><strong>Underwriter due diligence</strong> with secure data room access</li>
                            <li><strong>Auditor coordination</strong> with quarterly reviews and comfort letters</li>
                            <li><strong>Legal counsel coordination</strong> with multi-firm collaboration</li>
                            <li><strong>Testing-the-waters communications</strong> with confidential investor outreach</li>
                            <li><strong>Roadshow support</strong> with secure document distribution</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Strategic M&A exits</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Many successful VC exits are strategic acquisitions rather than IPOs. SpaceNexus supports the strategic M&amp;A process:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Multi-bidder coordination</strong> with tiered access</li>
                            <li><strong>Engagement analytics</strong> showing bidder interest</li>
                            <li><strong>Structured Q&amp;A</strong> with routing to the right team</li>
                            <li><strong>Management presentation coordination</strong></li>
                            <li><strong>Reference call management</strong> with customers and partners</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Secondaries and tender offers</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The secondaries market has grown significantly as LPs seek liquidity and GPs seek to extend successful investments. SpaceNexus supports secondaries transactions with confidential data rooms, anonymized portfolio information, and bid management workflows.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">GP-led continuation vehicles</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">GP-led continuation funds are an increasingly common exit alternative. SpaceNexus supports continuation fund formation with confidential investor materials, LP consent solicitation, and ongoing reporting for the new vehicle. Each LP (rollover vs. cash-out) has separate access and disclosure rights.</p>
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
                            <p className="text-xs text-gray-600 mt-2">For portfolio company strategic exits.</p>
                        </Link>
                        <Link href="/industries/venture-capital" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Industry</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR for venture capital →</h3>
                            <p className="text-xs text-gray-600 mt-2">The full VC VDR solution overview.</p>
                        </Link>
                        <Link href="/industries/venture-capital/portfolio-support" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Practice</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Portfolio support →</h3>
                            <p className="text-xs text-gray-600 mt-2">Pre-exit value creation and monitoring.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your exit data room</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">IPO, M&amp;A, secondaries, continuation vehicles. Most teams are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
