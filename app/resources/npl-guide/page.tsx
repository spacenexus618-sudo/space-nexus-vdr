import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "NPL Due Diligence Guide — Non-Performing Loan Portfolio Analysis | SpaceNexus",
    description: "The complete guide to NPL due diligence. Loan-level analysis, collateral valuation, legal review, and portfolio aggregation for buyers and sellers of non-performing loan portfolios.",
    alternates: { canonical: "https://spacenexus.net/resources/npl-guide" },
    keywords: [
        "NPL due diligence", "non-performing loan guide", "NPL portfolio analysis",
        "distressed debt due diligence", "loan portfolio review", "NPL valuation",
        "non-performing loan checklist", "NPL data room", "distressed debt guide",
    ],
    openGraph: {
        title: "NPL Due Diligence Guide — Non-Performing Loan Portfolio Analysis",
        description: "Complete guide to NPL due diligence: loan-level analysis, collateral valuation, legal review, and portfolio aggregation.",
        url: "https://spacenexus.net/resources/npl-guide",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "NPL Due Diligence Guide — Non-Performing Loan Portfolio Analysis",
    description: "The complete guide to non-performing loan due diligence. Loan-level data analysis, collateral valuation, legal document review, and portfolio-level aggregation for NPL buyers and sellers.",
    author: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    datePublished: "2026-06-30",
    dateModified: "2026-06-30",
};

const faqItems = [
    {
        question: "What is NPL due diligence?",
        answer: "NPL (non-performing loan) due diligence is the systematic review of loan-level data, collateral documentation, legal standing, and portfolio metrics conducted by buyers or sellers of distressed debt portfolios. It evaluates the quality, enforceability, and expected recovery value of each loan in the pool.",
    },
    {
        question: "How long does NPL due diligence take?",
        answer: "A standard NPL due diligence process for a portfolio of 100-500 loans takes 4-8 weeks. Loan-level data review and validation takes 1-2 weeks, documentation review 2-3 weeks, and portfolio aggregation and pricing 1-2 weeks. Larger portfolios (1,000+ loans) may require 8-12 weeks with a dedicated deal team.",
    },
    {
        question: "What documents are needed for NPL due diligence?",
        answer: "Core documents include: the promissory note, mortgage/deed of trust, assignment of mortgage, title report, UCC filings, foreclosure judgment (if applicable), bankruptcy filings, insurance policies, appraisal reports, payment history, and borrower correspondence. Each loan should have a complete document package organized in a consistent folder structure.",
    },
    {
        question: "What is the difference between NPL due diligence and standard M&A due diligence?",
        answer: "NPL due diligence focuses on asset-level enforceability and recovery value rather than business operations. The key differences: (1) loan-level data analysis vs. company financials, (2) collateral valuation and condition vs. asset valuation, (3) legal standing and chain of title vs. corporate legal structure, (4) foreclosure and workout timelines vs. integration planning, and (5) portfolio aggregation and pricing models vs. enterprise valuation.",
    },
    {
        question: "What are the most common NPL due diligence findings that affect pricing?",
        answer: "The most common value-impacting findings: (1) missing or defective promissory notes (can reduce value 20-50%), (2) chain-of-title gaps (30-60% discount), (3) expired or missing insurance (5-15% haircut on collateral value), (4) bankruptcy stays delaying foreclosure (6-18 month delay), (5) statute of limitations issues (potentially zero recovery), and (6) environmental liability on commercial collateral (remediation costs often exceed collateral value).",
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

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://spacenexus.net/resources" },
        { "@type": "ListItem", position: 3, name: "NPL Guide", item: "https://spacenexus.net/resources/npl-guide" },
    ],
};

const ddPhases = [
    {
        title: "Phase 1: Loan-Level Data Review",
        description: "Validate every data field in the loan tape against source documents. Common errors include incorrect principal balances, wrong interest rate types, miscoded payment statuses, and missing maturity dates. Flag discrepancies for seller cure or price adjustment.",
        keyItems: [
            "Reconcile UPB against note amounts",
            "Verify interest rate and index/spread",
            "Confirm payment status and delinquency history",
            "Validate origination and maturity dates",
            "Check modification history",
        ],
    },
    {
        title: "Phase 2: Collateral Valuation",
        description: "Assess the quality and value of the underlying collateral. For residential loans, use BPOs, AVMs, and broker price opinions. For commercial loans, require current appraisals and environmental assessments. Cross-reference LTV ratios against current estimated values.",
        keyItems: [
            "Order current BPOs on a statistical sample (10-20% of pool)",
            "Review existing appraisals for date and methodology",
            "Calculate current LTV using updated collateral values",
            "Identify collateral with environmental exposure (commercial)",
            "Check insurance coverage and flood zone status",
        ],
    },
    {
        title: "Phase 3: Legal Document Review",
        description: "Verify that each loan has a complete, enforceable legal package. Chain of title is the most critical element — missing assignments or flawed endorsements can render a loan unenforceable. Review all foreclosure documents for procedural compliance.",
        keyItems: [
            "Verify original promissory note and allonges",
            "Confirm chain of title through assignments",
            "Review mortgage/deed of trust recording",
            "Check UCC filings and continuations",
            "Assess foreclosure readiness and SOL",
        ],
    },
    {
        title: "Phase 4: Portfolio Aggregation & Pricing",
        description: "Aggregate findings from loan-level, collateral, and legal reviews into portfolio-level metrics. Develop expected recovery curves by delinquency bucket, collateral type, and legal status. Apply waterfall adjustments based on due diligence findings to arrive at a final bid price.",
        keyItems: [
            "Weighted average recovery estimation",
            "Due diligence findings waterfall adjustment",
            "Timing-adjusted NPV modeling",
            "Concentration and correlation analysis",
            "Final bid price range determination",
        ],
    },
];

export default function NPLGuidePage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="npl-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="npl-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="npl-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/resources" className="hover:text-[#2563eb] transition-colors">Resources</Link>
                        <span>›</span>
                        <span className="text-gray-900">NPL Guide</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Industry Guide</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">NPL Due Diligence Guide</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">The complete playbook for non-performing loan portfolio due diligence. Loan-level data validation, collateral valuation, legal document review, and portfolio aggregation — everything you need to evaluate and price an NPL pool.</p>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Introduction to NPL Due Diligence</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Non-performing loan (NPL) portfolios are complex assets requiring systematic due diligence to determine true value. Unlike standard M&A due diligence which focuses on a going concern, NPL due diligence evaluates a pool of individual distressed loans — each with unique collateral, legal standing, and recovery potential.</p>
                        <p className="text-gray-600 leading-relaxed mb-4">The NPL market has grown significantly as banks and credit unions seek to offload legacy distressed assets, and institutional investors deploy capital into credit-driven strategies. Whether you are buying or selling an NPL portfolio, a structured due diligence process is essential to identify risks, negotiate price adjustments, and maximize recovery value.</p>
                        <p className="text-gray-600 leading-relaxed">This guide covers the four phases of NPL due diligence and includes a downloadable CSV template you can use to organize your loan-level review across every category — from loan data and collateral to legal documentation and portfolio metrics.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Four Phases of NPL Due Diligence</h2>
                        <div className="space-y-8">
                            {ddPhases.map((phase, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-8">
                                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-2">Phase {i + 1} of 4</p>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{phase.description}</p>
                                    <ul className="space-y-2">
                                        {phase.keyItems.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                                                <span className="text-[#2563eb] shrink-0 mt-0.5">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl p-8 sm:p-10 text-center">
                        <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">Free Download</p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">NPL Due Diligence Checklist (CSV)</h2>
                        <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto">A comprehensive 50-item CSV template covering loan-level data, collateral details, borrower information, legal status, valuation inputs, and portfolio-level metrics. Use it to organize your next NPL review.</p>
                        <a
                            href="/templates/npl-due-diligence-checklist.csv"
                            download
                            className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download CSV Template
                        </a>
                        <p className="text-blue-200 text-xs mt-3">50 rows · 12 categories · Ready for import</p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Common Value-Impacting Findings</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">The following issues are frequently discovered during NPL due diligence and should be factored into pricing:</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-gray-600 border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="text-left font-semibold text-gray-900 p-3">Finding</th>
                                        <th className="text-left font-semibold text-gray-900 p-3">Impact</th>
                                        <th className="text-left font-semibold text-gray-900 p-3">Typical Discount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr><td className="p-3">Missing promissory note</td><td className="p-3">Loan may be unenforceable</td><td className="p-3">20-50%</td></tr>
                                    <tr><td className="p-3">Chain of title gap</td><td className="p-3">Standing to foreclose challenged</td><td className="p-3">30-60%</td></tr>
                                    <tr><td className="p-3">Expired/lapsed insurance</td><td className="p-3">Collateral at risk</td><td className="p-3">5-15%</td></tr>
                                    <tr><td className="p-3">Active bankruptcy stay</td><td className="p-3">Foreclosure delayed</td><td className="p-3">10-25% (time-value)</td></tr>
                                    <tr><td className="p-3">Statute of limitations expired</td><td className="p-3">Zero legal remedy</td><td className="p-3">50-100%</td></tr>
                                    <tr><td className="p-3">Environmental liability (commercial)</td><td className="p-3">Remediation costs exceed value</td><td className="p-3">30-80%</td></tr>
                                    <tr><td className="p-3">Junior lien encumbrance</td><td className="p-3">Reduced recovery priority</td><td className="p-3">10-40%</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-3">
                            {faqItems.map((item, i) => (
                                <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                                        {item.question}
                                        <span className="shrink-0 ml-2 text-gray-600 group-open:rotate-180 transition-transform">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                                        </span>
                                    </summary>
                                    <p className="p-4 pt-0 text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related Resources</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue learning</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/solutions/npl-portfolio" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Solution</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">NPL Portfolio VDR Solution →</h3>
                            <p className="text-xs text-gray-600 mt-2">SpaceNexus for distressed debt transactions.</p>
                        </Link>
                        <Link href="/solutions/distressed-debt" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Solution</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Distressed Debt VDR Solution →</h3>
                            <p className="text-xs text-gray-600 mt-2">Secure data rooms for distressed M&A.</p>
                        </Link>
                        <Link href="/checklists/templates" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Templates</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Free DD Templates →</h3>
                            <p className="text-xs text-gray-600 mt-2">8 downloadable due diligence templates.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to run your NPL deal?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Set up a secure data room for your NPD due diligence in under 24 hours. Flat-rate pricing with no per-page fees.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
