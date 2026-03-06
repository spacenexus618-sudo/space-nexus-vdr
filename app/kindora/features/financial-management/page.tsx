import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nonprofit Financial Reporting Software — Kindora",
  description:
    "Unified view of donations, grants, expenses, and net income with comprehensive financial reporting for nonprofit organizations.",
  alternates: {
    canonical: "/kindora/features/financial-management",
  },
  openGraph: {
    title: "Nonprofit Financial Reporting Software — Kindora",
    description:
      "Kindora's nonprofit financial reporting software delivers unified donation, grant, and expense tracking with audit-ready reports for NGOs.",
    url: "https://spacenexus.net/kindora/features/financial-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Financial Reporting Software — Kindora",
    description:
      "Unified nonprofit financial reporting: track donations, grants, and expenses in one dashboard. Audit-ready reports for NGOs.",
  },
};

const financialModules = [
  {
    name: "Donations",
    description:
      "Track all incoming donations from individuals, corporations, and foundations",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "emerald",
  },
  {
    name: "Grants",
    description: "Manage grant awards, receipts, and fund utilization",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "blue",
  },
  {
    name: "Expenses",
    description: "Record and categorize all organizational spending",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    color: "rose",
  },
  {
    name: "Net Income",
    description: "Real-time calculation of total income minus expenses",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "violet",
  },
];

const features = [
  {
    title: "Unified Financial Dashboard",
    description:
      "See donations, grants, and expenses in one consolidated view. Understand your organization's financial health at a glance.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Real-Time Net Income",
    description:
      "Automatic calculation of total donations plus grants minus expenses. Always know your current financial position.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Income by Source Analysis",
    description:
      "Break down revenue by donor type, grant source, and campaign. Understand your funding mix and diversify strategically.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    title: "Expense Tracking Integration",
    description:
      "All expenses flow into financial reporting automatically. No double entry or manual reconciliation required.",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
  },
  {
    title: "Monthly Trend Analysis",
    description:
      "View income and expenses over time to identify patterns, seasonality, and growth opportunities.",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
  },
  {
    title: "Board-Ready Reports",
    description:
      "Generate professional financial summaries for board meetings, audits, and stakeholder communications.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

const reports = [
  "Income statement summary",
  "Cash flow analysis",
  "Revenue by source breakdown",
  "Expense by category breakdown",
  "Monthly financial trends",
  "Year-over-year comparison",
  "Fund balance tracking",
  "Program-specific financials",
];

export default function FinancialManagementPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
              { "@type": "ListItem", position: 2, name: "Kindora", item: "https://spacenexus.net/kindora" },
              { "@type": "ListItem", position: 3, name: "Features", item: "https://spacenexus.net/kindora/features" },
              { "@type": "ListItem", position: 4, name: "Nonprofit Financial Reporting", item: "https://spacenexus.net/kindora/features/financial-management" },
            ],
          }),
        }}
      />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/kindora/features"
              className="inline-flex items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Features
            </Link>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-4">
              Financial Management
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Financial Management
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              See the complete financial picture of your organization. Integrate
              donations, grants, and expenses into unified reporting for
              informed decision-making.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Modules */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Integrated Financial Data
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All financial data flows together for a complete picture of
              organizational finances.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialModules.map((module) => (
              <div
                key={module.name}
                className={`bg-white rounded-xl border-2 p-6 transition-all duration-300 ${
                  module.color === "emerald"
                    ? "border-emerald-200 hover:border-emerald-400"
                    : module.color === "blue"
                      ? "border-blue-200 hover:border-blue-400"
                      : module.color === "rose"
                        ? "border-rose-200 hover:border-rose-400"
                        : "border-violet-200 hover:border-violet-400"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    module.color === "emerald"
                      ? "bg-emerald-100 text-emerald-600"
                      : module.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : module.color === "rose"
                          ? "bg-rose-100 text-rose-600"
                          : "bg-violet-100 text-violet-600"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={module.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {module.name}
                </h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Overview Visualization */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Financial Visibility
              </h2>
              <p className="text-gray-600 mb-6">
                Your dashboard shows all key financial metrics in one place.
                Track income, expenses, and net position in real-time.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    metric: "Total Donations",
                    desc: "All individual and corporate giving",
                  },
                  { metric: "Awarded Grants", desc: "Grant funding secured" },
                  { metric: "Total Expenses", desc: "Organizational spending" },
                  { metric: "Net Income", desc: "Income minus expenses" },
                ].map((item) => (
                  <li key={item.metric} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#2563eb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        {item.metric}
                      </span>
                      <span className="text-gray-600"> – {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Financial Overview
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  {
                    label: "Income",
                    trend: "up",
                    color: "text-emerald-600 bg-emerald-50",
                  },
                  {
                    label: "Expenses",
                    trend: "down",
                    color: "text-rose-600 bg-rose-50",
                  },
                  {
                    label: "Net",
                    trend: "up",
                    color: "text-blue-600 bg-blue-50",
                  },
                  {
                    label: "Balance",
                    trend: "neutral",
                    color: "text-violet-600 bg-violet-50",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-xl p-4 ${item.color}`}
                  >
                    <p className="text-xs font-medium opacity-75 mb-1">
                      {item.label}
                    </p>
                    <div className="h-6 w-20 bg-current opacity-10 rounded" />
                  </div>
                ))}
              </div>
              <div className="h-32 bg-gray-50 rounded-xl flex items-end justify-between p-4 gap-2">
                {[35, 45, 30, 55, 48, 60, 52, 65, 58, 70, 62, 75].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col gap-1"
                      style={{ height: `${h}%` }}
                    >
                      <div className="flex-1 bg-emerald-400 rounded-t opacity-80" />
                      <div className="h-1/3 bg-rose-400 rounded-b opacity-80" />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Financial Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for comprehensive nonprofit financial
              management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Financial Reports
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Generate the reports you need for boards, audits, and strategic
              planning.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reports.map((report) => (
              <div
                key={report}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] flex-shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {report}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for complete financial visibility?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Kindora&apos;s integrated financial tools can help you
            manage your organization&apos;s finances with confidence.
          </p>
          <Link
            href="/kindora/contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25"
          >
            Request a Demo
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
