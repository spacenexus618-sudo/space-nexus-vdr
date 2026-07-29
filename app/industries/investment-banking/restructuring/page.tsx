import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Restructuring Data Room for Investment Banks | SpaceNexus",
    description: "Virtual data room for distressed M&A, Chapter 11, and creditor negotiations. Information barrier enforcement, creditor group access, and court-admissible audit trails.",
    alternates: { canonical: "https://spacenexus.net/industries/investment-banking/restructuring" },
    keywords: ["restructuring data room", "Chapter 11 VDR", "distressed M&A platform", "creditor data room", "special situations VDR", "bankruptcy data room"],
    openGraph: {
        title: "Restructuring Data Room for Investment Banks | SpaceNexus",
        description: "Virtual data room for distressed M&A, Chapter 11, and creditor negotiations.",
        url: "https://spacenexus.net/industries/investment-banking/restructuring",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Restructuring Data Room for Investment Banks",
    description: "Virtual data room for distressed M&A, Chapter 11, and creditor negotiations. Information barrier enforcement, creditor group access, and court-admissible audit trails.",
    url: "https://spacenexus.net/industries/investment-banking/restructuring",
    serviceType: "Virtual Data Room",
    provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "BusinessAudience", audienceType: "Restructuring advisors and special situations teams" },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
        { "@type": "ListItem", position: 3, name: "Investment Banking", item: "https://spacenexus.net/industries/investment-banking" },
        { "@type": "ListItem", position: 4, name: "Restructuring", item: "https://spacenexus.net/industries/investment-banking/restructuring" },
    ],
};

const faqItems = [
    { question: "How does SpaceNexus support Chapter 11 processes?", answer: "SpaceNexus supports the full Chapter 11 workflow: pre-petition financing diligence, debtor-in-possession financing, plan of reorganization, disclosure statement preparation, and creditor voting. The platform manages access for the debtor, creditors&apos; committee, secured creditors, and individual creditor groups, each with separate permissions and audit trails." },
    { question: "Can SpaceNexus handle multiple creditor groups with different access?", answer: "Yes. SpaceNexus supports unlimited creditor groups, each with separate access tiers. Secured creditors see collateral documents and priority analysis. Unsecured creditors see general unsecured recovery information. The official creditors&apos; committee has broader access. DIP lenders see financing-specific materials. Each group is isolated and audited." },
    { question: "What information barrier support does SpaceNexus provide for restructuring?", answer: "Investment banks in restructuring routinely advise on both the debtor and creditor sides of different transactions, or on competing bids for the same distressed company. SpaceNexus supports information barriers (Chinese walls) between deal teams, with technical controls and audit trails documenting any barrier violations or attempts." },
    { question: "How does the data room support 363 asset sales?", answer: "Section 363 asset sales in bankruptcy require court approval and often involve competitive bidding. SpaceNexus supports the full 363 process: stalking horse review, bid procedures, qualified bidder designations, auction coordination, and court filing packages. The audit trail supports the court&apos;s review of the sale process." },
    { question: "What about debtor-in-possession (DIP) financing?", answer: "DIP financing involves detailed financial disclosure to existing and potential lenders, with tight timelines and court oversight. SpaceNexus supports DIP lender data rooms with rolling 13-week cash flow forecasts, weekly budget-to-actual reporting, and the security perfection documentation required by bankruptcy courts." },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
};

export default function IBRestructuringPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="ib-rs-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="ib-rs-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="ib-rs-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/industries" className="hover:text-[#2563eb] transition-colors">Industries</Link>
                        <span>›</span>
                        <Link href="/industries/investment-banking" className="hover:text-[#2563eb] transition-colors">Investment Banking</Link>
                        <span>›</span>
                        <span className="text-gray-900">Restructuring</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Investment Banking Practice</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Restructuring Data Room for Investment Banks</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Virtual data room for distressed M&amp;A, Chapter 11, and creditor negotiations. Information barrier enforcement, creditor group access, and court-admissible audit trails.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Restructuring is the most complex financial process</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Restructuring and special situations work is fundamentally different from standard M&amp;A. The stakeholder universe is larger and more diverse — debtors, secured creditors, unsecured creditors, official committees, equity holders, regulators, courts. Information is asymmetric by design, with different parties entitled to different levels of disclosure.</p>
                        <p className="text-gray-600 leading-relaxed">SpaceNexus gives restructuring teams a purpose-built platform for managing the information flows, information barriers, and court-admissible documentation that restructuring demands.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Chapter 11 workflow support</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">SpaceNexus supports the full Chapter 11 process:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Pre-petition planning</strong> — confidential due diligence for prospective DIP lenders and acquirers</li>
                            <li><strong>First-day motions</strong> — DIP financing, cash management, critical vendor payments</li>
                            <li><strong>Operating during Chapter 11</strong> — rolling 13-week cash flow forecasts, weekly reporting to creditors&apos; committee and DIP lenders</li>
                            <li><strong>Plan and disclosure statement</strong> — preparation, negotiation, and creditor voting</li>
                            <li><strong>Plan confirmation and emergence</strong> — emergence financing, asset sales, and post-emergence reporting</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Multi-creditor access management</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Restructuring requires precise access control across creditor classes:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Secured creditors</strong> see collateral packages, perfection documentation, and priority analysis</li>
                            <li><strong>Unsecured creditors</strong> see general unsecured recovery analysis and pro rata calculations</li>
                            <li><strong>Official creditors&apos; committee</strong> has broader access with their own advisors</li>
                            <li><strong>DIP lenders</strong> see financing-specific materials, cash flow forecasts, and budget reports</li>
                            <li><strong>Prospective acquirers</strong> see 363 sale materials with tiered access</li>
                            <li><strong>Equity holders</strong> see equity recovery analysis and plan voting materials</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">Each group is isolated from the others, with the audit trail recording all access for creditor and court review.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Information barriers across deal teams</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Restructuring creates unique information barrier challenges. Banks may advise:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li>The debtor (as restructuring advisor)</li>
                            <li>The creditors&apos; committee (separate mandate)</li>
                            <li>Secured creditors (as lender advisor)</li>
                            <li>Prospective acquirers (as M&amp;A advisor)</li>
                            <li>The DIP lender (as financing advisor)</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">SpaceNexus information barriers (Chinese walls) prevent cross-team access, with technical controls and audit trails supporting regulatory compliance and firm conflict policies.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Section 363 asset sales</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">363 sales in bankruptcy require court approval and often involve competitive bidding. SpaceNexus supports:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Stalking horse review</strong> — confidential diligence for the initial bidder</li>
                            <li><strong>Bid procedures</strong> — qualified bidder designations, deposit requirements, and bid forms</li>
                            <li><strong>Auction coordination</strong> — round-by-round bid tracking with deadline management</li>
                            <li><strong>Court filing packages</strong> — sale motion, asset purchase agreement, and supporting declarations</li>
                            <li><strong>Closing mechanics</strong> — wire instructions, document execution, and post-closing transition</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Court-admissible documentation</h2>
                        <p className="text-gray-600 leading-relaxed">Restructuring frequently involves court proceedings — DIP hearings, plan confirmation, 363 sale approvals, and adversary proceedings. The data room audit trail provides:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li>Immutable records of all creditor access and communications</li>
                            <li>Documentation of disclosure adequacy for plan confirmation</li>
                            <li>Evidence of compliance with bidding procedures for 363 sales</li>
                            <li>Records supporting fee applications and interim compensation</li>
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
                            <p className="text-xs text-gray-600 mt-2">For distressed M&amp;A and special situations.</p>
                        </Link>
                        <Link href="/industries/investment-banking" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Industry</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR for investment banking →</h3>
                            <p className="text-xs text-gray-600 mt-2">The full IB VDR solution overview.</p>
                        </Link>
                        <Link href="/checklists/due-diligence-checklist" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Checklist</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A due diligence checklist →</h3>
                            <p className="text-xs text-gray-600 mt-2">200+ items across every workstream.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your restructuring data room</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Multi-creditor access, information barriers, court-admissible audit trails. Most teams are live in under 24 hours.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
