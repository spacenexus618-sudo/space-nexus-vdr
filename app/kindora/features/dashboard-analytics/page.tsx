import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard & Analytics - Real-Time Nonprofit Insights",
  description:
    "Interactive dashboard with KPI cards, donation trend charts, campaign progress tracking, and real-time activity feeds for data-driven nonprofit management.",
  alternates: {
    canonical: "/kindora/features/dashboard-analytics",
  },
};

const kpiCards = [
  {
    name: "Total Donations",
    description:
      "Track cumulative donation amounts with trend indicators showing growth over time",
  },
  {
    name: "Active Donors",
    description:
      "Monitor your active donor base with status distribution insights",
  },
  {
    name: "Active Clients",
    description: "View client engagement across your programs and services",
  },
  {
    name: "Net Income",
    description:
      "Calculate donations minus expenses for real-time financial health",
  },
  {
    name: "Awarded Grants",
    description: "Track total grant funding secured by your organization",
  },
  {
    name: "Active Enrollments",
    description: "Monitor service participation across all programs",
  },
  {
    name: "Active Volunteers",
    description: "View volunteer engagement and availability status",
  },
  {
    name: "Total Expenses",
    description: "Track organizational spending with category breakdowns",
  },
];

const features = [
  {
    title: "Interactive KPI Dashboard",
    description:
      "Eight key performance indicator cards display your most critical metrics at a glance. Each card shows current values with trend indicators (up/down/neutral) and percentage changes from previous periods.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Monthly Donation Trends",
    description:
      "Visualize donation patterns with bar charts showing monthly giving trends. Identify peak donation periods and seasonal patterns to optimize your fundraising calendar.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Donor Distribution Charts",
    description:
      "Pie charts break down your donor base by type—Individual, Corporate, Foundation, Government, and more—helping you understand and diversify your funding sources.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    title: "Campaign Progress Tracking",
    description:
      "See all active campaigns with visual goal-vs-raised progress bars. Track campaign status, performance percentages, and remaining amounts to goal.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Recent Activity Feed",
    description:
      "A live feed displays the latest system actions—new donations, client enrollments, grant updates, and more—keeping your team informed of organizational activity.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Real-Time Data Refresh",
    description:
      "Dashboard data updates in real-time as new information enters the system. No manual refresh needed—always see the current state of your organization.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
];

export default function DashboardAnalyticsPage() {
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

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-4">
              Financial Management
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Dashboard & Analytics
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Make data-driven decisions with a comprehensive dashboard that
              puts your most important metrics front and center. Real-time KPIs,
              trend charts, and activity feeds give you complete visibility into
              organizational performance.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
              >
                Request a Demo
              </Link>
              <Link
                href="/kindora/pricing"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-gray-700 border-2 border-gray-200 rounded-full hover:border-gray-300 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Cards Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Eight Key Performance Indicators
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your dashboard displays these essential metrics, each with trend
              indicators showing how performance is changing over time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiCards.map((kpi) => (
              <div
                key={kpi.name}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-[#2563eb]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-500">
                    {kpi.name}
                  </span>
                  <div className="flex items-center text-emerald-600 text-xs">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    Trend
                  </div>
                </div>
                <div className="h-8 w-24 bg-gray-100 rounded mb-3" />
                <p className="text-xs text-gray-500">{kpi.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dashboard Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to understand your organization&apos;s
              performance at a glance.
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to see your data come to life?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a demo to see how Kindora&apos;s dashboard can give you
            instant visibility into your nonprofit&apos;s performance.
          </p>
          <Link
            href="/kindora/contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300"
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
