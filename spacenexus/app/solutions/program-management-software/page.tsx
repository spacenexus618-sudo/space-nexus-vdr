import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Program Management Software | SpaceNexus",
    description: "Centralized program management software for cross-functional teams. Track milestones, manage dependencies, and deliver complex programs on time and within budget.",
    alternates: {
        canonical: "https://spacenexus.net/solutions/program-management-software",
    },
    openGraph: {
        title: "Program Management Software | SpaceNexus",
        description: "Centralized program management software for cross-functional teams. Track milestones, manage dependencies, and deliver complex programs on time.",
        url: "https://spacenexus.net/solutions/program-management-software",
    },
    keywords: [
        "program management software",
        "program management tool",
        "program delivery platform",
        "multi-project management",
        "program portfolio management",
        "program tracking software",
        "program governance tool",
        "cross-functional program management",
    ],
};

const capabilities = [
    {
        stage: "1",
        title: "Program Planning & Scoping",
        description: "Define program objectives, map stakeholder alignment, and create work breakdown structures across all dependent projects. AI-assisted resource planning ensures realistic timelines from day one.",
        features: ["Program charter and scope templates", "Cross-project dependency mapping", "AI resource capacity planning"],
        color: "bg-blue-50 border-blue-200 text-blue-700",
        dot: "bg-blue-500",
    },
    {
        stage: "2",
        title: "Milestone & Dependency Tracking",
        description: "Monitor milestones across every workstream in a unified dashboard. Identify bottleneck dependencies before they derail the timeline with automated alerts and critical path visualization.",
        features: ["Unified milestone dashboard across projects", "Critical path analysis and alerts", "Dependency chain visualization"],
        color: "bg-purple-50 border-purple-200 text-purple-700",
        dot: "bg-purple-500",
    },
    {
        stage: "3",
        title: "Cross-Functional Collaboration",
        description: "Break silos between engineering, operations, legal, and leadership. Structured status updates, threaded discussions, and shared document spaces keep every team aligned without endless meetings.",
        features: ["Structured cross-team status reports", "Threaded discussions with @mentions", "Centralized program document repository"],
        color: "bg-orange-50 border-orange-200 text-orange-700",
        dot: "bg-orange-500",
    },
    {
        stage: "4",
        title: "Program Governance & Reporting",
        description: "Automated executive dashboards and health scores give leadership real-time visibility into program status. Risk registers, issue trackers, and change request workflows maintain governance without bottlenecks.",
        features: ["Automated executive dashboards", "Risk registers with mitigation tracking", "Change request approval workflows"],
        color: "bg-green-50 border-green-200 text-green-700",
        dot: "bg-green-500",
    },
];

const features = [
    { title: "Multi-Project Dashboards", desc: "View progress, budget, and status across every project within a program — all in one place." },
    { title: "Dependency Mapping", desc: "Visualize cross-project dependencies and get alerted when a delay in one project threatens another." },
    { title: "Resource Allocation", desc: "Balance workloads across teams and programs with capacity planning and reallocation tools." },
    { title: "Risk & Issue Management", desc: "Track program-level risks, assign owners, and monitor mitigation progress in real time." },
    { title: "Automated Status Reports", desc: "Generate weekly program health reports and executive summaries without manual data gathering." },
    { title: "Audit Trail & Compliance", desc: "Every decision, approval, and change is logged — ideal for regulated industries and governance requirements." },
];

const benefits = [
    { metric: "35%", label: "faster program delivery" },
    { metric: "28%", label: "reduction in scope creep" },
    { metric: "40%", label: "less time spent on status reporting" },
    { metric: "92%", label: "stakeholder satisfaction rate" },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Program Management Software",
    description: "Centralized program management software for cross-functional teams. Track milestones, manage dependencies, and deliver complex programs on time and within budget.",
    url: "https://spacenexus.net/solutions/program-management-software",
    serviceType: "Program Management Software",
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
        description: "Contact for custom pricing tailored to program size and team structure.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is program management software?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Program management software is a centralized platform that coordinates multiple related projects toward a shared strategic objective. Unlike single-project tools, it provides cross-project dependency tracking, unified dashboards, resource allocation across teams, risk management at the program level, and automated governance reporting — giving leadership full visibility into complex, multi-workstream initiatives.",
            },
        },
        {
            "@type": "Question",
            name: "How does program management differ from project management?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Project management focuses on delivering a single project with defined scope, timeline, and budget. Program management oversees a portfolio of related projects that together deliver a larger strategic outcome. Program management software adds cross-project dependency mapping, consolidated resource planning, program-level risk tracking, and executive governance reporting that single-project tools lack.",
            },
        },
        {
            "@type": "Question",
            name: "What types of organizations benefit from program management software?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Program management software benefits any organization running multiple concurrent projects with shared resources and interdependencies. This includes enterprise IT departments managing digital transformation, construction firms coordinating multi-phase builds, government agencies executing large-scale initiatives, healthcare organizations rolling out compliance programs, and professional services firms managing client engagements across teams.",
            },
        },
        {
            "@type": "Question",
            name: "How quickly can we get started with SpaceNexus program management?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "SpaceNexus program management software can be set up within 24 hours. You can import existing project data, configure program structures and permissions, invite team members, and begin tracking milestones immediately. Pre-built templates for common program types accelerate onboarding without requiring IT support or lengthy implementation cycles.",
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
        { "@type": "ListItem", position: 3, name: "Program Management Software", item: "https://spacenexus.net/solutions/program-management-software" },
    ],
};

export default function ProgramManagementSoftwarePage() {
    return (
        <>
            <Script
                id="program-mgmt-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="program-mgmt-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="program-mgmt-faq-schema"
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
                        <span className="text-gray-900 font-medium">Program Management Software</span>
                    </nav>
                </div>

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                </svg>
                                Program Delivery Solution
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Program Management Software for{" "}
                                <span className="text-[#2563eb]">Complex, Multi-Project Delivery</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                Coordinate cross-functional teams, track interdependent milestones, and deliver strategic programs on time — all from a single, unified platform. Trusted by organizations managing programs from <strong>5 to 500+ projects</strong>.
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

                {/* Benefits Strip */}
                <section className="py-12 bg-white border-y border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {benefits.map((b) => (
                                <div key={b.label} className="text-center">
                                    <p className="text-3xl sm:text-4xl font-bold text-[#2563eb] mb-1">{b.metric}</p>
                                    <p className="text-sm text-gray-600">{b.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Program Delivery Stages */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                How SpaceNexus powers every program phase
                            </h2>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                From initial scoping through final delivery — one platform manages the entire program lifecycle.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {capabilities.map((s) => (
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-5">Your program command center</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    See the health of every project in your program at a glance. Automated dashboards surface risks, dependency delays, and resource conflicts — so your PMO team stays proactive, not reactive.
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
                                    See it with your programs
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">app.spacenexus.net / programs</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus program management dashboard" className="w-full h-auto" loading="lazy" />
                                </div>
                                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: "What is program management software?", a: "Program management software is a centralized platform that coordinates multiple related projects toward a shared strategic objective. It provides cross-project dependency tracking, unified dashboards, resource allocation across teams, and automated governance reporting that single-project tools lack." },
                                { q: "How does program management differ from project management?", a: "Project management focuses on delivering a single project with defined scope and timeline. Program management oversees a portfolio of related projects delivering a larger strategic outcome. Program management software adds cross-project dependency mapping, consolidated resource planning, and program-level risk tracking." },
                                { q: "What types of organizations benefit from program management software?", a: "Any organization running multiple concurrent projects with shared resources and interdependencies benefits — including enterprise IT, construction firms, government agencies, healthcare organizations, and professional services firms." },
                                { q: "How quickly can we get started?", a: "SpaceNexus program management software can be set up within 24 hours. Import existing project data, configure program structures, invite team members, and begin tracking milestones immediately." },
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
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Launch your program management workspace in 24 hours</h2>
                        <p className="text-gray-600 mb-8">No lengthy onboarding. Configure your program structure, invite teams, and start tracking milestones the same day.</p>
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
                            <Link href="/features/dashboard" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Real-time program dashboards and KPIs.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Dashboard & Analytics →</h3>
                            </Link>
                            <Link href="/features/reports" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Automated governance and executive reporting.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Program Reports →</h3>
                            </Link>
                            <Link href="/features/users-permissions" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Role-based access for cross-functional teams.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Team Permissions →</h3>
                            </Link>
                            <Link href="/solutions/mergers-and-acquisitions-vdr" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">M&A transaction and deal program management.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A Virtual Data Room →</h3>
                            </Link>
                            <Link href="/features/activity-analytics" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track team engagement and program activity.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Activity Analytics →</h3>
                            </Link>
                            <Link href="/pricing" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transparent pricing for teams of every size.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">View Pricing →</h3>
                            </Link>
                        </div>
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
                </section>
            </main>
        </>
    );
}
