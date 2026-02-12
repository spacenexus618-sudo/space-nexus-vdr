import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reporting & Analytics - Comprehensive Nonprofit Insights",
  description:
    "Generate financial reports, donor analytics, client metrics, and program performance reports with Kindora's comprehensive reporting suite.",
  alternates: {
    canonical: "/kindora/features/reporting",
  },
};

const reportCategories = [
  {
    name: "Financial Reports",
    color: "emerald",
    reports: [
      "Income statement summary",
      "Cash flow analysis",
      "Budget vs actual",
      "Monthly trends",
    ],
  },
  {
    name: "Donation Reports",
    color: "blue",
    reports: [
      "Donation trends",
      "Donor type breakdown",
      "Top donors",
      "Payment method analysis",
    ],
  },
  {
    name: "Grant Reports",
    color: "violet",
    reports: [
      "Awarded vs received",
      "Grant pipeline",
      "Grantor analysis",
      "Deadline tracking",
    ],
  },
  {
    name: "Program Reports",
    color: "amber",
    reports: [
      "Client demographics",
      "Program enrollment",
      "Service delivery",
      "Outcome tracking",
    ],
  },
];

const features = [
  {
    title: "Pre-Built Reports",
    description:
      "Access a library of ready-to-use reports designed specifically for nonprofit operations and compliance requirements.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Visual Dashboards",
    description:
      "Interactive charts and graphs bring your data to life. Understand trends at a glance with intuitive visualizations.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    title: "Date Range Filters",
    description:
      "View data for any time period. Compare months, quarters, or years to identify trends and measure progress.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Export Options",
    description:
      "Download reports in multiple formats for board presentations, grant applications, and stakeholder communications.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  },
  {
    title: "Real-Time Data",
    description:
      "Reports reflect the current state of your data. No waiting for overnight updates—see your metrics as they change.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Board-Ready Format",
    description:
      "Professional formatting suitable for board meetings, audits, and funder reports. Present your data with confidence.",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  },
];

export default function ReportingPage() {
  return (
    <main className="pt-20 lg:pt-24">
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

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">
              Communication & Engagement
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Reporting & Analytics
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Transform your data into actionable insights. Generate
              comprehensive reports for boards, funders, and internal
              decision-making with a few clicks.
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

      {/* Report Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reports for Every Need
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive reporting across all areas of your nonprofit
              operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportCategories.map((category) => (
              <div
                key={category.name}
                className={`bg-white rounded-xl border-2 p-6 ${
                  category.color === "emerald"
                    ? "border-emerald-200"
                    : category.color === "blue"
                      ? "border-blue-200"
                      : category.color === "violet"
                        ? "border-violet-200"
                        : "border-amber-200"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${
                    category.color === "emerald"
                      ? "text-emerald-700"
                      : category.color === "blue"
                        ? "text-blue-700"
                        : category.color === "violet"
                          ? "text-violet-700"
                          : "text-amber-700"
                  }`}
                >
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.reports.map((report) => (
                    <li
                      key={report}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          category.color === "emerald"
                            ? "bg-emerald-500"
                            : category.color === "blue"
                              ? "bg-blue-500"
                              : category.color === "violet"
                                ? "bg-violet-500"
                                : "bg-amber-500"
                        }`}
                      />
                      {report}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visual Analytics
              </h2>
              <p className="text-gray-600 mb-6">
                Data comes to life with interactive charts and visualizations.
                Understand your organization&apos;s performance at a glance.
              </p>
              <ul className="space-y-3">
                {[
                  "Bar charts for trends over time",
                  "Pie charts for distribution analysis",
                  "Progress bars for goal tracking",
                  "Tables for detailed data",
                  "KPI cards for quick metrics",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
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
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">
                  Monthly Overview
                </h3>
                <select className="text-sm text-gray-500 border border-gray-200 rounded-lg px-2 py-1">
                  <option>This Year</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Total Income", color: "emerald" },
                  { label: "Total Expenses", color: "rose" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-xl p-4 ${
                      item.color === "emerald" ? "bg-emerald-50" : "bg-rose-50"
                    }`}
                  >
                    <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                    <div
                      className={`h-6 w-20 rounded ${
                        item.color === "emerald"
                          ? "bg-emerald-200"
                          : "bg-rose-200"
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div className="h-32 flex items-end gap-2">
                {[40, 55, 45, 70, 60, 80, 65, 90, 75, 85, 70, 95].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#2563eb] to-[#2563eb]/50 rounded-t"
                      style={{ height: `${h}%` }}
                    />
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
              Reporting Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful tools to extract insights from your data.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4">
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to unlock your data&apos;s potential?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Kindora&apos;s reporting tools can help you make data-driven
            decisions.
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
