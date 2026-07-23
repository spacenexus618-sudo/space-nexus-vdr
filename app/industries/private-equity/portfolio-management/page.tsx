import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Portfolio Management Data Room for PE Firms | SpaceNexus",
    description: "Virtual data room for PE portfolio monitoring. Board materials, quarterly reporting, KPI tracking, and 100-day plans for portfolio companies.",
    alternates: { canonical: "https://spacenexus.net/industries/private-equity/portfolio-management" },
    keywords: ["PE portfolio management", "portfolio company board materials", "PE quarterly reporting", "portfolio KPI tracking", "100-day plan VDR", "operating partner portal"],
    openGraph: {
        title: "Portfolio Management Data Room for PE Firms | SpaceNexus",
        description: "Virtual data room for PE portfolio monitoring. Board materials, quarterly reporting, and 100-day plans.",
        url: "https://spacenexus.net/industries/private-equity/portfolio-management",
    },
};

const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Portfolio Management Data Room for PE Firms", description: "Virtual data room for PE portfolio monitoring. Board materials, quarterly reporting, KPI tracking, and 100-day plans.", url: "https://spacenexus.net/industries/private-equity/portfolio-management", serviceType: "Virtual Data Room", provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" }, areaServed: { "@type": "Place", name: "Worldwide" }, audience: { "@type": "BusinessAudience", audienceType: "PE operating partners and portfolio management teams" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" }, { "@type": "ListItem", position: 3, name: "Private Equity", item: "https://spacenexus.net/industries/private-equity" }, { "@type": "ListItem", position: 4, name: "Portfolio Management", item: "https://spacenexus.net/industries/private-equity/portfolio-management" }] };
const faqItems = [
    { question: "How does SpaceNexus support PE portfolio management?", answer: "SpaceNexus provides a dedicated workspace for each portfolio company, with board materials, monthly financial reporting, KPI dashboards, 100-day plans, value creation initiatives, and exit planning documents. The PE operating partner team accesses all portfolio companies from a single platform, with separate permissions and ethical walls between companies." },
    { question: "What board materials does the platform support?", answer: "SpaceNexus supports the full board reporting workflow: board decks, financial packages, KPI dashboards, strategic initiative updates, and supporting analyses. The platform provides version control, board book assembly, and secure distribution to board members with read receipts." },
    { question: "Can operating partners and portfolio CEOs collaborate?", answer: "Yes. SpaceNexus supports secure collaboration between operating partners and portfolio company leadership, with structured Q&amp;A for value creation initiatives, document sharing for strategic planning, and integration support during transitions." },
    { question: "How does the platform handle multiple portfolio companies?", answer: "Each portfolio company has its own dedicated workspace with separate permissions, separate audit trails, and separate user groups. PE deal teams and operating partners can access all portfolio companies from a single login, with clear visual separation between companies." },
    { question: "What about exit planning and preparation?", answer: "SpaceNexus supports the exit preparation process: exit readiness assessments, VDR preparation for sell-side processes, management presentations, CIM drafting, and coordination with sell-side advisors. The platform&apos;s audit trail supports the deal record and post-close transition." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

export default function PEPortfolioManagementPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="pe-pm-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="pe-pm-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="pe-pm-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link><span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link><span>›</span>
                        <Link href="/industries/private-equity" className="hover:text-[#2563eb] transition-colors">Private Equity</Link><span>›</span>
                        <span className="text-gray-900">Portfolio Management</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Private Equity Practice</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Portfolio Management Data Room for PE Firms</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">Virtual data room for PE portfolio monitoring. Board materials, quarterly reporting, KPI tracking, and 100-day plans for portfolio companies.</p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The PE value creation lifecycle</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">PE ownership is typically a 3-7 year value creation journey. During that period, the operating partner team works with portfolio company leadership on strategic initiatives, operational improvements, and growth investments — all documented in a centralized workspace.</p>
                        <p className="text-gray-600 leading-relaxed">SpaceNexus gives PE firms a purpose-built platform for the entire portfolio management lifecycle, from initial 100-day plan through exit preparation.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Board materials and reporting</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The platform supports the full board reporting workflow:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Board decks</strong> with version control, board book assembly, and secure distribution</li>
                            <li><strong>Financial packages</strong> — monthly financials, quarterly reports, annual budgets</li>
                            <li><strong>KPI dashboards</strong> — operational and financial metrics tracked over time</li>
                            <li><strong>Strategic initiative updates</strong> — value creation project tracking</li>
                            <li><strong>Board resolutions and consents</strong> — e-signature workflows for board approvals</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">100-day plans and value creation</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The first 100 days set the trajectory for the entire hold period. SpaceNexus supports:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>100-day plan documentation</strong> with milestone tracking</li>
                            <li><strong>Operating partner assessments</strong> of functional areas (sales, ops, finance, HR, tech)</li>
                            <li><strong>Quick-win initiatives</strong> with delivery tracking</li>
                            <li><strong>Long-term value creation roadmap</strong> with quarterly checkpoints</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Multi-portfolio management</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">PE firms typically manage 10-50 portfolio companies simultaneously. SpaceNexus supports:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li>Per-portfolio-company dedicated workspaces with separate permissions</li>
                            <li>Cross-portfolio benchmarking and best practice sharing</li>
                            <li>PE deal team and operating partner coordination</li>
                            <li>Aggregate portfolio reporting for fund-level updates</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Exit readiness and preparation</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">As the hold period matures, the focus shifts to exit preparation. SpaceNexus supports:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li>Exit readiness assessments with gap analysis</li>
                            <li>Data room preparation for sell-side processes</li>
                            <li>CIM and management presentation drafting</li>
                            <li>Coordination with sell-side advisors and potential buyers</li>
                            <li>Post-close transition planning and documentation</li>
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
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&amp;A virtual data room →</h3>
                            <p className="text-xs text-gray-500 mt-2">For portfolio company exits and acquisitions.</p>
                        </Link>
                        <Link href="/industries/private-equity" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Industry</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR for private equity →</h3>
                            <p className="text-xs text-gray-500 mt-2">The full PE VDR solution overview.</p>
                        </Link>
                        <Link href="/industries/private-equity/exit-sell-side" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Practice</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Exit &amp; sell-side →</h3>
                            <p className="text-xs text-gray-500 mt-2">PE exit preparation and execution.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your portfolio management workspace</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Board materials, KPIs, value creation tracking. Most teams are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
