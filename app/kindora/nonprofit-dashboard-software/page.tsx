import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nonprofit Dashboard Software | Executive Dashboard | Kindora",
  description:
    "Kindora nonprofit dashboard software provides executives and managers with real-time visibility into fundraising, donor engagement, program performance, and financial health — all in one customizable view.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-dashboard-software",
  },
  openGraph: {
    title: "Nonprofit Dashboard Software — Kindora",
    description: "Executive dashboard with real-time visibility into fundraising, donors, programs, and finances.",
    url: "https://spacenexus.net/kindora/nonprofit-dashboard-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/icononly_transparent_nobuffer.png", width: 1200, height: 630, alt: "Kindora Nonprofit Dashboard Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Dashboard Software — Kindora",
    description: "Executive dashboard for fundraising, donors, programs, and finances in one view.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "nonprofit dashboard software",
    "nonprofit executive dashboard",
    "nonprofit KPI dashboard",
    "nonprofit management dashboard",
    "nonprofit performance dashboard",
    "nonprofit analytics dashboard",
    "nonprofit operations dashboard",
    "nonprofit CEO dashboard",
    "nonprofit director dashboard",
    "nonprofit metrics dashboard",
    "nonprofit data dashboard",
    "nonprofit reporting dashboard",
    "nonprofit overview dashboard",
    "nonprofit command center",
    "nonprofit dashboard platform",
  ],
};

const dashboardSoftwareFeatures = [
  {
    title: "Executive Overview",
    description: "High-level view of your organization's health — revenue, donors, programs, and key metrics at a glance.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Fundraising Tracking",
    description: "Real-time fundraising progress, campaign performance, revenue by source, and goal achievement.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Donor Insights",
    description: "Active donor counts, retention trends, new acquisitions, and donor engagement metrics.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Program Performance",
    description: "Track program KPIs, participant numbers, budget utilization, and outcome metrics per program.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Financial Health",
    description: "Income vs expenses, budget variance, cash position, and financial ratios — updated in real time.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Customizable Widgets",
    description: "Drag-and-drop widgets to build the dashboard that matters most for your role and organization.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z",
  },
  {
    title: "Real-Time Data",
    description: "Live data refreshes so you always see the most current picture of your organization.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Role-Based Views",
    description: "Create different dashboards for executive directors, development directors, program managers, and board members.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const stats = [
  { metric: "Real-time", label: "Data dashboard" },
  { metric: "Custom", label: "Widget configuration" },
  { metric: "Multi-role", label: "Dashboard views" },
  { metric: "Centralized", label: "Organization overview" },
];

const faqs = [
  {
    question: "What is nonprofit dashboard software?",
    answer:
      "Nonprofit dashboard software provides executives and managers with a centralized, real-time view of key organizational metrics — fundraising, donors, programs, and finances — in one customizable interface.",
  },
  {
    question: "What metrics can I see on the Kindora dashboard?",
    answer:
      "You can see fundraising revenue and progress, donor counts and retention, program KPIs, budget vs actuals, and any custom metrics specific to your organization.",
  },
  {
    question: "Can I create different dashboards for different roles?",
    answer:
      "Yes. Kindora supports role-based dashboard views — create separate dashboards for executive directors, development directors, program managers, and board members.",
  },
  {
    question: "Does the dashboard update in real time?",
    answer:
      "Yes. The dashboard refreshes with live data, so you always see the most current picture of your organization's performance.",
  },
  {
    question: "Can I customize my dashboard layout?",
    answer:
      "Yes. Kindora features a drag-and-drop widget builder that lets you arrange and configure your dashboard exactly how you need it.",
  },
  {
    question: "Can board members access the dashboard?",
    answer:
      "Yes. You can create a board-specific dashboard view with high-level KPIs and share access with board members.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit Dashboard Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit dashboard software — real-time visibility into fundraising, donors, programs, and finances in one customizable view.",
      url: "https://spacenexus.net/kindora/nonprofit-dashboard-software",
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

export default function NonprofitDashboardSoftwarePage() {
  return (
    <>
      <Script id="nonprofit-dashboard-software-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
                <span className="text-sm font-medium text-gray-600">Nonprofit Dashboard Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Your Organization{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-slate-600">Command Center</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                See your entire organization at a glance. Kindora nonprofit dashboard software brings fundraising, donors, programs, and finances into one real-time, customizable view.
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
                    { label: "Fundraising YTD", value: "Year to date" },
                    { label: "Active Donors", value: "All-time" },
                    { label: "Retention Rate", value: "Loyalty" },
                    { label: "Programs", value: "Active" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Dashboard Sections</p>
                  {[
                    { name: "Fundraising Overview", status: "18% above target" },
                    { name: "Donor Health", status: "84% retention" },
                    { name: "Budget Status", status: "On track" },
                    { name: "Program Delivery", status: "12 programs active" },
                  ].map((d) => (
                    <div key={d.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-sm font-semibold text-gray-900">{d.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{d.status}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your entire organization in one view</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-time dashboards customized for every role in your organization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dashboardSoftwareFeatures.map((feature) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From login to informed action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A dashboard designed for clarity and speed.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Open", description: "See your organization's performance instantly." },
              { step: "02", title: "Explore", description: "Click into any metric for deeper context." },
              { step: "03", title: "Compare", description: "Benchmark against goals and past periods." },
              { step: "04", title: "Share", description: "Export views or share links with stakeholders." },
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
            <p className="text-lg text-gray-600">Everything you need to know about nonprofit dashboard software.</p>
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
            Ready to see the full picture?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora nonprofit dashboard software today.
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
