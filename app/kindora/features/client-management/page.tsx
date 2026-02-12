import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Management - Community Service Tracking",
  description:
    "Track clients, manage program enrollments, record service deliveries, and maintain comprehensive case records for community service organizations.",
  alternates: {
    canonical: "/kindora/features/client-management",
  },
};

const clientStatuses = ["Active", "Inactive", "Prospect", "Archived"];

const serviceCategories = [
  "Case Management",
  "Housing Assistance",
  "Food Services",
  "Job Training",
  "Mental Health",
  "Youth Programs",
  "Senior Services",
  "Education",
];

const features = [
  {
    title: "Client Profiles",
    description:
      "Maintain comprehensive profiles with demographics, contact information, household details, and service history for every client.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Program Enrollments",
    description:
      "Track client participation in multiple programs. Monitor enrollment dates, status, and outcomes for each program.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    title: "Service Tracking",
    description:
      "Record individual service deliveries with date, type, provider, and notes. Build a complete picture of client engagement.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Enrollment Management",
    description:
      "Manage the full enrollment lifecycle from initial intake to program completion or exit. Track enrollment status and dates.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Case Notes",
    description:
      "Document client interactions, progress updates, and important observations. Maintain detailed case records for compliance.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "Client Analytics",
    description:
      "View client demographics, program participation rates, and service delivery metrics. Make data-driven program decisions.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const reports = [
  "Active clients by program",
  "Client demographics breakdown",
  "Service delivery summary",
  "Enrollment trends over time",
  "Program participation rates",
  "Client outcome tracking",
];

export default function ClientManagementPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-medium mb-4">
                Program Operations
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Client Management
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Track the people you serve with comprehensive client profiles,
                program enrollments, and service delivery records. Build lasting
                relationships and demonstrate impact.
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

            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  C
                </div>
                <div className="flex-1">
                  <div className="h-5 w-36 bg-gray-200 rounded mb-2" />
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded">
                      Active
                    </span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      Housing
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Programs</p>
                  <div className="h-5 w-8 bg-gray-200 rounded" />
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Services</p>
                  <div className="h-5 w-12 bg-gray-200 rounded" />
                </div>
              </div>
              <p className="text-sm font-medium text-gray-700 mb-3">
                Recent Services
              </p>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-violet-500" />
                    <div className="h-3 flex-1 bg-gray-200 rounded" />
                    <div className="h-3 w-16 bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Statuses & Service Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl p-6 lg:p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Client Status Tracking
              </h3>
              <p className="text-gray-600 mb-6">
                Monitor client engagement with clear status indicators to
                prioritize outreach and services.
              </p>
              <div className="flex flex-wrap gap-3">
                {clientStatuses.map((status) => (
                  <span
                    key={status}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                      status === "Active"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : status === "Inactive"
                          ? "bg-gray-50 text-gray-700 border-gray-200"
                          : status === "Prospect"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-gray-100 text-gray-500 border-gray-200"
                    }`}
                  >
                    {status}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl p-6 lg:p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Service Categories
              </h3>
              <p className="text-gray-600 mb-6">
                Track services across multiple categories to understand client
                needs and program effectiveness.
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceCategories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Client Management Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools for managing clients and delivering impactful
              services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-600 mb-4">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Clients by Program
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Housing Assistance", value: 35 },
                  { name: "Case Management", value: 28 },
                  { name: "Food Services", value: 22 },
                  { name: "Youth Programs", value: 15 },
                ].map((program) => (
                  <div key={program.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{program.name}</span>
                      <span className="text-gray-500">{program.value}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-violet-500 rounded-full"
                        style={{ width: `${program.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Client Reports
              </h2>
              <p className="text-gray-600 mb-6">
                Generate reports to understand who you serve, track outcomes,
                and demonstrate impact to funders.
              </p>
              <ul className="space-y-3">
                {reports.map((report) => (
                  <li key={report} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-violet-600"
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
                    <span className="text-gray-700">{report}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to better serve your clients?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Kindora can help you manage client relationships, track
            services, and demonstrate impact.
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
