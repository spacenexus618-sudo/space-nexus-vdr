import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Program Outcome Tracking Software | SpaceNexus",
    description: "Measure and improve program impact with real-time outcome tracking. Link activities to results, visualize KPIs, and prove program effectiveness to stakeholders.",
    alternates: {
        canonical: "https://spacenexus.net/solutions/program-outcome-tracking",
    },
    openGraph: {
        title: "Program Outcome Tracking Software | SpaceNexus",
        description: "Measure and improve program impact with real-time outcome tracking. Link activities to results and prove program effectiveness.",
        url: "https://spacenexus.net/solutions/program-outcome-tracking",
    },
    keywords: [
        "program outcome tracking",
        "outcome measurement software",
        "program impact tracking",
        "program KPI tracking",
        "results-based management software",
        "program evaluation tool",
        "impact measurement platform",
        "program performance tracking",
    ],
};

const workflowStages = [
    {
        stage: "1",
        title: "Define Outcomes & KPIs",
        description: "Establish your theory of change, set measurable outcomes, and configure custom KPIs for each program. Align indicators with strategic goals and stakeholder requirements from day one.",
        features: ["Theory of change builder", "Custom KPI frameworks per program", "Stakeholder-aligned indicator definitions"],
        color: "bg-blue-50 border-blue-200 text-blue-700",
        dot: "bg-blue-500",
    },
    {
        stage: "2",
        title: "Collect & Aggregate Data",
        description: "Automate data collection from program activities, surveys, beneficiaries, and third-party systems. Real-time aggregation ensures your outcome data is always current and comprehensive.",
        features: ["Automated data pipelines from activities", "Survey and beneficiary data integration", "Real-time aggregation across data sources"],
        color: "bg-purple-50 border-purple-200 text-purple-700",
        dot: "bg-purple-500",
    },
    {
        stage: "3",
        title: "Analyze & Visualize Impact",
        description: "See outcome trends, attribution patterns, and cohort comparisons in interactive dashboards. AI-powered analysis surfaces insights that would take analysts weeks to produce manually.",
        features: ["Interactive outcome dashboards", "AI-powered impact analysis", "Cohort and demographic comparisons"],
        color: "bg-orange-50 border-orange-200 text-orange-700",
        dot: "bg-orange-500",
    },
    {
        stage: "4",
        title: "Report & Improve",
        description: "Generate board-ready impact reports in one click. Outcome data feeds directly into improvement cycles — identify what's working, adjust what isn't, and demonstrate accountability to funders and stakeholders.",
        features: ["One-click impact report generation", "Funder-specific compliance reports", "Continuous improvement feedback loops"],
        color: "bg-green-50 border-green-200 text-green-700",
        dot: "bg-green-500",
    },
];

const features = [
    { title: "Outcome Logic Models", desc: "Map inputs, activities, outputs, and outcomes in visual logic models that guide your measurement strategy." },
    { title: "Custom KPI Dashboards", desc: "Build program-specific dashboards with the metrics that matter — no generic templates, full customization." },
    { title: "Attribution Analysis", desc: "Distinguish program impact from external factors with quasi-experimental and comparative analysis tools." },
    { title: "Beneficiary Tracking", desc: "Track individual and cohort outcomes over time with longitudinal data collection and analysis." },
    { title: "Automated Data Pipelines", desc: "Connect surveys, activities, and third-party data sources into a unified outcome dataset automatically." },
    { title: "Compliance Reporting", desc: "Generate funder-specific reports that meet USAID, DFID, foundations, and government reporting requirements." },
];

const outcomes = [
    { metric: "Real-time", label: "outcome visibility across all programs" },
    { metric: "60%", label: "faster report generation" },
    { metric: "3x", label: "more actionable insights per quarter" },
    { metric: "100%", label: "funder compliance reporting accuracy" },
];

const useCases = [
    {
        title: "Nonprofit Program Impact",
        description: "Track beneficiary outcomes, measure social impact, and generate funder reports that demonstrate program effectiveness and accountability.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
    {
        title: "Government & Public Programs",
        description: "Measure policy outcomes, track public service delivery metrics, and provide transparency to citizens and oversight bodies with auditable data.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "Enterprise Initiative Tracking",
        description: "Link strategic initiatives to measurable business outcomes. Prove ROI on transformation programs, innovation projects, and organizational change efforts.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Program Outcome Tracking Software",
    description: "Measure and improve program impact with real-time outcome tracking. Link activities to results, visualize KPIs, and prove program effectiveness to stakeholders.",
    url: "https://spacenexus.net/solutions/program-outcome-tracking",
    serviceType: "Program Outcome Tracking Software",
    provider: {
        "@type": "Organization",
        name: "SpaceNexus",
        url: "https://spacenexus.net",
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for custom pricing tailored to program count and data volume.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is program outcome tracking?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Program outcome tracking is the systematic process of measuring, analyzing, and reporting the results and impact of a program. It goes beyond activity monitoring by linking program inputs and activities to measurable changes in the target population or environment. Outcome tracking software automates data collection, provides real-time dashboards, and generates compliance-ready reports for funders and stakeholders.",
            },
        },
        {
            "@type": "Question",
            name: "How does outcome tracking differ from activity monitoring?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Activity monitoring tracks what your program does (outputs) — number of workshops held, participants served, or resources distributed. Outcome tracking measures what actually changed as a result (outcomes) — improvements in knowledge, behavior, health, or economic conditions. Outcome tracking software connects activities to results, enabling organizations to prove effectiveness rather than just reporting effort.",
            },
        },
        {
            "@type": "Question",
            name: "Can outcome tracking software handle multiple programs simultaneously?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Program outcome tracking software like SpaceNexus is designed to manage outcomes across multiple programs from a single platform. Each program has its own KPIs, logic models, and data sources, while leadership dashboards aggregate outcomes across the entire portfolio. This gives executives portfolio-level impact visibility while program teams maintain focused measurement views.",
            },
        },
        {
            "@type": "Question",
            name: "What reporting formats does outcome tracking software support?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Modern outcome tracking software supports multiple reporting formats: interactive dashboards for real-time monitoring, exportable PDF and Excel reports for board presentations, funder-specific compliance templates (USAID, DFID, foundation formats), and API access for integration with external reporting systems. SpaceNexus generates all of these from a single outcome dataset — no manual report assembly required.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://spacenexus.net/solutions/mergers-and-acquisitions-vdr" },
        { "@type": "ListItem", position: 3, name: "Program Outcome Tracking", item: "https://spacenexus.net/solutions/program-outcome-tracking" },
    ],
};

export default function ProgramOutcomeTrackingPage() {
    return (
        <>
            <Script
                id="outcome-tracking-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="outcome-tracking-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="outcome-tracking-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <main className="pt-20 lg:pt-24">
                {/* Breadcrumb */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/solutions/mergers-and-acquisitions-vdr" className="hover:text-[#2563eb] transition-colors">Solutions</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Program Outcome Tracking</span>
                    </nav>
                </div>

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                Impact Measurement Solution
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Program Outcome Tracking That{" "}
                                <span className="text-[#2563eb]">Proves What Works</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                Stop guessing whether your programs deliver results. Measure outcomes in real time, link activities to impact, and generate funder-ready reports in one click. Trusted by organizations managing programs from <strong>community initiatives to enterprise transformations</strong>.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Request a Demo
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link href="/features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    Explore Features
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Metrics Strip */}
                <section className="py-12 bg-white border-y border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {outcomes.map((o) => (
                                <div key={o.label} className="text-center">
                                    <p className="text-3xl sm:text-4xl font-bold text-[#2563eb] mb-1">{o.metric}</p>
                                    <p className="text-sm text-gray-600">{o.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow Stages */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                How outcome tracking works in SpaceNexus
                            </h2>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                From defining outcomes to demonstrating impact — a complete measurement workflow.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {workflowStages.map((s) => (
                                <div key={s.stage} className={`rounded-2xl border p-7 ${s.color}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`w-8 h-8 rounded-full ${s.dot} text-white text-sm font-bold flex items-center justify-center`}>{s.stage}</span>
                                        <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                                    <ul className="space-y-1.5">
                                        {s.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                                                <svg className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-5">Your outcome command center</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    See the impact of every program in one place. AI-powered analysis identifies which activities drive the strongest outcomes — so your team can double down on what works and cut what doesn&apos;t.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {features.map((f) => (
                                        <div key={f.title} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <p className="text-sm font-bold text-gray-900 mb-1">{f.title}</p>
                                            <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                    See your outcomes live
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">app.spacenexus.net / outcomes</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                    <img src="/spacenexus/screenshots/vdr-analytics.png" alt="SpaceNexus program outcome tracking dashboard" className="w-full h-auto" loading="lazy" />
                                </div>
                                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for every outcome-driven organization</h2>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                Whether you&apos;re measuring social impact, policy outcomes, or business transformation — SpaceNexus adapts to your measurement framework.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {useCases.map((uc) => (
                                <div key={uc.title} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-5">
                                        {uc.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{uc.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{uc.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: "What is program outcome tracking?", a: "Program outcome tracking is the systematic process of measuring, analyzing, and reporting the results and impact of a program. It connects activities to measurable changes — going beyond activity monitoring to prove what actually worked." },
                                { q: "How does outcome tracking differ from activity monitoring?", a: "Activity monitoring tracks outputs (workshops held, participants served). Outcome tracking measures what actually changed as a result (knowledge gained, behaviors changed, conditions improved). It proves effectiveness rather than just reporting effort." },
                                { q: "Can outcome tracking handle multiple programs?", a: "Yes. SpaceNexus manages outcomes across multiple programs from a single platform. Each program has its own KPIs and data sources, while leadership dashboards aggregate outcomes across the entire portfolio." },
                                { q: "What reporting formats are supported?", a: "SpaceNexus supports interactive dashboards, PDF and Excel reports, funder-specific compliance templates (USAID, DFID, foundation formats), and API access for integration with external systems." },
                            ].map((faq) => (
                                <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:text-[#2563eb] transition-colors flex items-center justify-between">
                                        {faq.q}
                                        <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Start measuring program outcomes today</h2>
                        <p className="text-gray-600 mb-8">Configure your outcome framework, connect data sources, and start generating impact insights within 24 hours.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">Request a Demo</Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">View Pricing</Link>
                        </div>
                        <p className="text-sm text-gray-600 mt-6">SOC 2 Type II · AES-256 encryption · Tamper-evident audit logs</p>
                    </div>
                </section>

                {/* Related Resources */}
                <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related Resources</p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Link href="/features/activity-analytics" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track program engagement and activity metrics.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Activity Analytics →</h3>
                            </Link>
                            <Link href="/features/reports" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Automated outcome and compliance reports.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Program Reports →</h3>
                            </Link>
                            <Link href="/features/dashboard" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Real-time outcome dashboards and KPIs.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Dashboard & Analytics →</h3>
                            </Link>
                            <Link href="/solutions/program-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Coordinate complex multi-project programs.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Program Management Software →</h3>
                            </Link>
                            <Link href="/features/integrations" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Connect outcome data from any source.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data Integrations →</h3>
                            </Link>
                            <Link href="/pricing" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transparent pricing for outcome tracking.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">View Pricing →</h3>
                            </Link>
                        </div>
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
                </section>
            </main>
        </>
    );
}
