import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Portfolio Support Data Room for VC Firms | SpaceNexus",
    description: "Virtual data room for VC portfolio company support. Board materials, follow-on funding coordination, founder onboarding, and value creation tracking.",
    alternates: { canonical: "https://spacenexus.net/industries/venture-capital/portfolio-support" },
    keywords: ["VC portfolio support", "startup board materials VDR", "follow-on funding coordination", "VC value creation VDR", "founder onboarding VDR", "portfolio company reporting"],
    openGraph: { title: "Portfolio Support Data Room for VC Firms | SpaceNexus", description: "Virtual data room for VC portfolio support. Board materials, follow-on funding, and value creation tracking.", url: "https://spacenexus.net/industries/venture-capital/portfolio-support" },
};

const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Portfolio Support Data Room for VC Firms", description: "Virtual data room for VC portfolio company support. Board materials, follow-on funding coordination, founder onboarding, and value creation tracking.", url: "https://spacenexus.net/industries/venture-capital/portfolio-support", serviceType: "Virtual Data Room", provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" }, areaServed: { "@type": "Place", name: "Worldwide" }, audience: { "@type": "BusinessAudience", audienceType: "Venture capital portfolio support teams" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" }, { "@type": "ListItem", position: 3, name: "Venture Capital", item: "https://spacenexus.net/industries/venture-capital" }, { "@type": "ListItem", position: 4, name: "Portfolio Support", item: "https://spacenexus.net/industries/venture-capital/portfolio-support" }] };
const faqItems = [
    { question: "How does SpaceNexus support VC portfolio companies?", answer: "SpaceNexus provides each portfolio company with a dedicated workspace for board materials, monthly reporting, follow-on fundraising, and value creation initiatives. The VC partner and platform team access the workspace, while the founder/CEO controls what is shared. The platform supports the unique needs of high-growth startups that are scaling rapidly." },
    { question: "What board materials does the platform support?", answer: "SpaceNexus supports monthly board decks, financial packages (actual vs. budget, runway, key metrics), KPI dashboards, strategic initiative updates, and supporting analyses. Board books are assembled with version control and distributed to board members through the platform with read receipts." },
    { question: "How does the platform support follow-on funding rounds?", answer: "When portfolio companies raise follow-on rounds, the data room from the initial investment becomes the basis for the new round. SpaceNexus supports the follow-on process with new investor onboarding, updated diligence materials, and coordination between existing and new investors." },
    { question: "Can VCs share playbooks and best practices across portfolio companies?", answer: "Yes. SpaceNexus supports portfolio-wide resource sharing: hiring templates, board deck templates, fundraising materials, and best-practice documents can be shared across portfolio companies while maintaining company-specific confidentiality for sensitive materials." },
    { question: "What about founder onboarding and support?", answer: "When a VC makes a new investment, SpaceNexus hosts the founder onboarding materials: investment terms, board governance, reporting templates, intro to other portfolio founders, and VC resources. Founders can access these materials through a secure founder portal." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

export default function VCPortfolioSupportPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="vc-ps-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="vc-ps-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="vc-ps-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link><span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link><span>›</span>
                        <Link href="/industries/venture-capital" className="hover:text-[#2563eb] transition-colors">Venture Capital</Link><span>›</span>
                        <span className="text-gray-900">Portfolio Support</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Venture Capital Practice</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Portfolio Support Data Room for VC Firms</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">Virtual data room for VC portfolio company support. Board materials, follow-on funding coordination, founder onboarding, and value creation tracking.</p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">VC value creation is hands-on</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Modern VC firms — especially early-stage and growth funds — are actively involved in supporting portfolio companies. The platform team works with founders on hiring, fundraising, strategic partnerships, and operational challenges. The data room is the operational backbone for this support.</p>
                        <p className="text-gray-600 leading-relaxed">SpaceNexus gives VC firms a purpose-built platform for managing the ongoing relationship with portfolio companies — from board reporting through follow-on funding and exit preparation.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Board materials and monthly reporting</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">The platform supports the monthly board cadence typical of VC-backed companies:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Monthly board decks</strong> with financial actuals, runway analysis, KPI dashboards</li>
                            <li><strong>Board books</strong> assembled with all supporting materials in one package</li>
                            <li><strong>Board resolutions and consents</strong> with e-signature workflows</li>
                            <li><strong>Strategic initiative tracking</strong> with milestone updates</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Follow-on funding coordination</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Most successful startups raise multiple rounds. SpaceNexus supports:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li>Transition from existing data room to new investor data room</li>
                            <li>Updated financials and KPIs for new round</li>
                            <li>Bridge or SAFE note documentation</li>
                            <li>Coordination between existing investors and new investors</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Founder onboarding and support</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">When a VC makes a new investment, SpaceNexus supports founder onboarding with:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li>Investment terms summary and board governance documents</li>
                            <li>Reporting templates and monthly cadence setup</li>
                            <li>Introduction to other portfolio founders</li>
                            <li>VC resources: hiring, fundraising, GTM playbooks</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Portfolio-wide resource sharing</h2>
                        <p className="text-gray-600 leading-relaxed">VCs share playbooks, templates, and best practices across portfolio companies. SpaceNexus supports portfolio-wide resource sharing while maintaining company-specific confidentiality for sensitive materials like financial details, customer lists, and strategic plans.</p>
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
                        <Link href="/solutions/investor-data-room" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Solution</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Investor data room →</h3>
                            <p className="text-xs text-gray-600 mt-2">For portfolio company fundraising rounds.</p>
                        </Link>
                        <Link href="/industries/venture-capital" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Industry</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR for venture capital →</h3>
                            <p className="text-xs text-gray-600 mt-2">The full VC VDR solution overview.</p>
                        </Link>
                        <Link href="/industries/venture-capital/early-stage-diligence" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Practice</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Early-stage diligence →</h3>
                            <p className="text-xs text-gray-600 mt-2">Pre-investment evaluation.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your portfolio support workspace</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Board materials, follow-on funding, founder onboarding. Most teams are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
    );
}
