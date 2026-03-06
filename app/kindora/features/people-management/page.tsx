import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer Management System for Nonprofits — Kindora",
  description:
    "Manage employees and volunteers with unified profiles, role assignments, availability tracking, and comprehensive team coordination tools.",
  alternates: {
    canonical: "/kindora/features/people-management",
  },
  openGraph: {
    title: "Volunteer Management System for Nonprofits — Kindora",
    description:
      "Kindora's volunteer management system unifies staff and volunteer profiles, role assignments, and availability tracking for nonprofit organizations.",
    url: "https://spacenexus.net/kindora/features/people-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer Management System for Nonprofits — Kindora",
    description:
      "Unified volunteer management system: track staff, volunteers, roles, and availability — purpose-built for nonprofits.",
  },
};

const peopleTypes = [
  {
    name: "Employees",
    description: "Full-time and part-time staff members",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "Volunteers",
    description: "Community members who donate their time",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

const statuses = ["Active", "Inactive", "On Leave", "Pending"];

const features = [
  {
    title: "Unified People Directory",
    description:
      "Manage both employees and volunteers in one place. Maintain comprehensive profiles with contact info, roles, and assignments.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Role Management",
    description:
      "Define and assign roles to team members. Track who does what within your organization for clear accountability.",
    icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
  },
  {
    title: "Availability Tracking",
    description:
      "Track when volunteers are available. Schedule shifts and manage capacity for programs and events.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Status Management",
    description:
      "Monitor engagement with status tracking: Active, Inactive, On Leave, or Pending. Keep your team roster current.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Emergency Contacts",
    description:
      "Store emergency contact information for all team members. Keep critical information accessible when needed.",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    title: "Team Analytics",
    description:
      "View team composition, volunteer hours, and engagement metrics. Understand your human resources at a glance.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const reports = [
  "Active employees and volunteers count",
  "Team composition breakdown",
  "Volunteer availability calendar",
  "Role distribution analysis",
  "Engagement status tracking",
  "Hours contributed summary",
];

export default function PeopleManagementPage() {
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
              { "@type": "ListItem", position: 4, name: "Volunteer Management System", item: "https://spacenexus.net/kindora/features/people-management" },
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

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-medium mb-4">
              Program Operations
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              People Management
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Coordinate your entire team—employees and volunteers—with unified
              profiles, role assignments, and availability tracking in one
              integrated system.
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

      {/* People Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Two Sides of Your Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Manage paid staff and volunteers with tailored features for each
              while keeping everyone in one unified directory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {peopleTypes.map((type) => (
              <div
                key={type.name}
                className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl p-8 border border-gray-200"
              >
                <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-600 mb-6">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={type.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {type.name}
                </h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Tracking */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Engagement Status Tracking
              </h2>
              <p className="text-gray-600 mb-6">
                Keep your roster current with clear status indicators. Know
                who&apos;s actively engaged, who&apos;s on leave, and who needs
                follow-up.
              </p>
              <div className="flex flex-wrap gap-3">
                {statuses.map((status) => (
                  <span
                    key={status}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                      status === "Active"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : status === "On Leave"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : status === "Pending"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-gray-50 text-gray-700 border-gray-200"
                    }`}
                  >
                    {status}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Team Overview
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Active Employees", color: "bg-blue-500" },
                  { label: "Active Volunteers", color: "bg-violet-500" },
                  { label: "On Leave", color: "bg-amber-500" },
                  { label: "Pending", color: "bg-gray-400" },
                ].map((item, idx) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm text-gray-700 flex-1">
                      {item.label}
                    </span>
                    <div className="h-4 w-8 bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Total Team Members
                  </span>
                  <div className="h-5 w-12 bg-gray-100 rounded" />
                </div>
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
              People Management Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete tools for coordinating your team and maximizing their
              impact.
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
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Team Composition
              </h3>
              <div className="flex items-center justify-center gap-8">
                <div className="relative">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="12"
                      strokeDasharray="211"
                      strokeDashoffset="63"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="12"
                      strokeDasharray="211"
                      strokeDashoffset="158"
                      className="origin-center"
                      style={{
                        transform: "rotate(160deg)",
                        transformOrigin: "center",
                      }}
                    />
                  </svg>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-sm text-gray-700">Employees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-violet-500" />
                    <span className="text-sm text-gray-700">Volunteers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Team Reports
              </h2>
              <p className="text-gray-600 mb-6">
                Gain insights into your team composition, engagement, and
                capacity.
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to better coordinate your team?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Kindora can help you manage employees and volunteers in one
            unified system.
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
