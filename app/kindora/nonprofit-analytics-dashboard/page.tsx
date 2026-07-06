import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nonprofit Analytics Dashboard | Metrics & KPIs | Kindora",
  description:
    "Kindora nonprofit analytics dashboard provides real-time visibility into fundraising performance, donor trends, program impact, and financial health — all in one customizable dashboard.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-analytics-dashboard",
  },
  openGraph: {
    title: "Nonprofit Analytics Dashboard — Kindora",
    description: "Real-time visibility into fundraising, donor trends, program impact, and financial health with Kindora.",
    url: "https://spacenexus.net/kindora/nonprofit-analytics-dashboard",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/icononly_transparent_nobuffer.png", width: 1200, height: 630, alt: "Kindora Nonprofit Analytics Dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Analytics Dashboard — Kindora",
    description: "Real-time dashboard for fundraising, donor trends, program impact, and financial KPIs.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "nonprofit analytics dashboard",
    "nonprofit dashboard software",
    "nonprofit KPI dashboard",
    "nonprofit metrics dashboard",
    "fundraising dashboard",
    "nonprofit data dashboard",
    "nonprofit performance dashboard",
    "nonprofit analytics platform",
    "nonprofit reporting dashboard",
    "nonprofit real-time dashboard",
    "nonprofit executive dashboard",
    "nonprofit visualization dashboard",
    "nonprofit impact dashboard",
    "nonprofit management dashboard",
    "nonprofit analytics tools",
  ],
};

const dashboardFeatures = [
  {
    title: "Fundraising Overview",
    description: "Real-time view of total raised, campaign performance, revenue by source, and fundraising KPIs.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Donor Trends",
    description: "Track donor acquisition, retention rates, lifetime value, and giving patterns over time.",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
  },
  {
    title: "Program Metrics",
    description: "Monitor program KPIs, participant numbers, outcomes, and budget utilization per program.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Financial Health",
    description: "Income vs expenses, budget variance, cash flow trends, and financial ratio monitoring.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Custom Widgets",
    description: "Drag-and-drop widgets to build the perfect dashboard for your role and reporting needs.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Real-Time Updates",
    description: "Data refreshes in real time. See donations come in, goals update, and KPIs change as events happen.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Comparative Periods",
    description: "Compare performance month-over-month, year-over-year, and against budget with visual indicators.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Export & Share",
    description: "Export dashboard views as PDF or images. Share links with board members and stakeholders.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  },
];

const stats = [
  { metric: "Real-time", label: "Data updates" },
  { metric: "Custom", label: "Widget builder" },
  { metric: "Multi-area", label: "Analytics views" },
  { metric: "Shareable", label: "Dashboard links" },
];

const faqs = [
  {
    question: "What is a nonprofit analytics dashboard?",
    answer:
      "A nonprofit analytics dashboard provides real-time visualization of your organization's key metrics — fundraising performance, donor trends, program impact, and financial health — all in one customizable view.",
  },
  {
    question: "What metrics can I track on the Kindora dashboard?",
    answer:
      "You can track fundraising revenue, campaign progress, donor acquisition and retention, program KPIs, budget vs actuals, and any custom metrics specific to your organization.",
  },
  {
    question: "Can I customize my dashboard?",
    answer:
      "Yes. Kindora has a drag-and-drop widget builder that lets you create custom dashboards tailored to your role, department, or reporting needs.",
  },
  {
    question: "Does the dashboard update in real time?",
    answer:
      "Yes. Dashboard data refreshes in real time, so you see donations, goal progress, and KPIs update as events happen.",
  },
  {
    question: "Can I share the dashboard with my board?",
    answer:
      "Yes. You can share dashboard views via links or export them as PDFs and images for board meetings and stakeholder presentations.",
  },
  {
    question: "Can I compare periods on the dashboard?",
    answer:
      "Yes. The dashboard supports month-over-month, year-over-year, and budget comparisons with visual indicators to highlight trends and variances.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit Analytics Dashboard",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit analytics dashboard — real-time visibility into fundraising, donor trends, program impact, and financial KPIs.",
      url: "https://spacenexus.net/kindora/nonprofit-analytics-dashboard",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free trial available" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function NonprofitAnalyticsDashboardPage() {
  return (
    <>
      <Script id="nonprofit-analytics-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-slate-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-500/10 border border-gray-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-gray-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-gray-600">Nonprofit Analytics Dashboard</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Your Organization{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-slate-600">at a Glance</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Real-time visibility into every aspect of your nonprofit. Kindora analytics dashboard brings together fundraising, donors, programs, and finances in one customizable view.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-gray-500 to-slate-600 hover:from-slate-600 hover:to-gray-700 rounded-full shadow-xl shadow-gray-500/30 hover:shadow-gray-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Demo
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://cad.spaceaiapp.com/kindora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Try for Free
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {["No credit card required", "Set up in 30 minutes", "Cancel anytime"].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-500 to-slate-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Executive Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    Real-time
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "YTD Revenue", value: "Fundraising" },
                    { label: "Active Donors", value: "All-time" },
                    { label: "Retention Rate", value: "Loyal" },
                    { label: "Programs Active", value: "YTD" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quick Views</p>
                  {[
                    { name: "Fundraising Performance", icon: "Up", status: "+18% vs last year" },
                    { name: "Donor Health", icon: "Stable", status: "Retention at 84%" },
                    { name: "Budget Status", icon: "On track", status: "94% of budget utilized" },
                  ].map((v) => (
                    <div key={v.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-sm font-semibold text-gray-900">{v.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{v.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-gray-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything in one dashboard</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fundraising, donors, programs, and finances — unified in real time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dashboardFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-500/10 flex items-center justify-center mb-4 group-hover:bg-gray-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From log in to informed decision</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A dashboard built for clarity.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "View", description: "See your organization's health at a glance." },
              { step: "02", title: "Drill", description: "Click into any metric for deeper analysis." },
              { step: "03", title: "Compare", description: "Measure performance against past periods and goals." },
              { step: "04", title: "Share", description: "Export and share insights with your team and board." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-gray-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about nonprofit analytics dashboards.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to see the big picture?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora nonprofit analytics dashboard today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-gray-500 to-slate-600 hover:from-slate-600 hover:to-gray-700 rounded-full shadow-xl shadow-gray-500/30 hover:shadow-gray-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
