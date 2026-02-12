import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Management - Team Access & Permissions Control",
  description:
    "Manage system users, assign roles, control permissions, and maintain secure access to your nonprofit's data with Kindora's user management.",
  alternates: {
    canonical: "/kindora/features/user-management",
  },
};

const roles = [
  {
    name: "Admin",
    description: "Full system access and configuration",
    permissions: "All permissions",
    color: "violet",
  },
  {
    name: "Manager",
    description: "Team oversight and reporting",
    permissions: "Read, write, limited admin",
    color: "blue",
  },
  {
    name: "Staff",
    description: "Day-to-day operations",
    permissions: "Read, write assigned areas",
    color: "emerald",
  },
  {
    name: "Viewer",
    description: "Read-only access",
    permissions: "Read only",
    color: "gray",
  },
];

const features = [
  {
    title: "User Directory",
    description:
      "Maintain a complete list of all system users with contact information, roles, and access status in one central location.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Role-Based Access",
    description:
      "Assign roles to control what each user can see and do. Ensure sensitive data is only accessible to authorized personnel.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Access Activation",
    description:
      "Easily activate or deactivate user accounts. Manage access as team members join, leave, or change roles.",
    icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
  },
  {
    title: "Activity Logging",
    description:
      "Track user actions within the system. Maintain audit trails for compliance and security monitoring.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Secure Authentication",
    description:
      "Password-protected access with security best practices. Keep your organization&apos;s data safe from unauthorized access.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "User Invitations",
    description:
      "Invite new team members with email invitations. Set up their access before they even log in for the first time.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function UserManagementPage() {
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

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium mb-4">
                Administration
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                User Management
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Control who has access to your organization&apos;s data with
                role-based permissions, user activation controls, and
                comprehensive access logging.
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
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Team Members</h3>
                <button className="text-sm text-[#2563eb] font-medium">
                  + Invite User
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { role: "Admin", status: "Active", color: "violet" },
                  { role: "Manager", status: "Active", color: "blue" },
                  { role: "Staff", status: "Active", color: "emerald" },
                  { role: "Viewer", status: "Pending", color: "gray" },
                ].map((user, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-600 font-medium">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <div className="flex-1">
                      <div className="h-4 w-28 bg-gray-200 rounded mb-1" />
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          user.color === "violet"
                            ? "bg-violet-100 text-violet-700"
                            : user.color === "blue"
                              ? "bg-blue-100 text-blue-700"
                              : user.color === "emerald"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </div>
                    <span
                      className={`text-xs ${user.status === "Active" ? "text-emerald-600" : "text-amber-600"}`}
                    >
                      {user.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Role-Based Access Control
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Assign roles to team members based on their responsibilities. Each
              role comes with appropriate permissions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => (
              <div
                key={role.name}
                className={`bg-white rounded-xl border-2 p-6 ${
                  role.color === "violet"
                    ? "border-violet-200"
                    : role.color === "blue"
                      ? "border-blue-200"
                      : role.color === "emerald"
                        ? "border-emerald-200"
                        : "border-gray-200"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    role.color === "violet"
                      ? "bg-violet-100 text-violet-600"
                      : role.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : role.color === "emerald"
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-gray-100 text-gray-600"
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {role.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{role.description}</p>
                <p className="text-xs text-gray-500">{role.permissions}</p>
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
              User Management Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete tools for managing team access and maintaining security.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4">
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

      {/* Security Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Built with Security in Mind
                </h2>
                <p className="text-gray-300 mb-6">
                  Your nonprofit&apos;s data is sensitive. Kindora&apos;s user
                  management ensures only authorized personnel can access what
                  they need.
                </p>
                <ul className="space-y-3">
                  {[
                    "Role-based access control",
                    "User activity logging",
                    "Secure authentication",
                    "Easy access revocation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to secure your team&apos;s access?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Kindora&apos;s user management can help you control access
            and maintain security.
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
