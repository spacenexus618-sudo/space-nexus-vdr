import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - Space Nexus",
  description:
    "Explore the complete feature set of Space Nexus Virtual Data Room. From secure document management to AI-powered analytics, discover everything you need for successful M&A transactions.",
  alternates: {
    canonical: "/features",
  },
};

const features = [
  {
    id: "deals",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Deals",
    subtitle: "Transaction management",
    description:
      "Each deal acts as a secure workspace containing documents, users, Q&A, and analytics.",
    features: ["Active deals", "Archived deals", "Deal templates"],
    color: "blue",
    href: "/features/deals",
  },
  {
    id: "data-room",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Data Room",
    subtitle: "Secure document management",
    description:
      "Designed to handle high document volumes with strict access control.",
    features: [
      "Structured folder index",
      "Bulk document upload",
      "Version control",
      "Redaction and watermarking",
      "Full-text search and preview",
    ],
    color: "emerald",
    href: "/features/data-room",
  },
  {
    id: "qa",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Q&A",
    subtitle: "Due diligence communication",
    description: "Ensures a clear, auditable diligence process.",
    features: [
      "Centralized question management",
      "Role-based visibility",
      "Question categorization (Legal, Finance, HR, Tax)",
      "Controlled publishing of answers",
    ],
    color: "violet",
    href: "/features/qa",
  },
  {
    id: "users-permissions",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Users & Permissions",
    subtitle: "Enterprise-grade access control",
    description:
      "Provides confidence when sharing sensitive information with multiple parties.",
    features: [
      "Users and groups",
      "Role-based permissions",
      "Folder-level access",
      "Time-limited and restricted access",
    ],
    color: "amber",
    href: "/features/users-permissions",
  },
  {
    id: "activity-analytics",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Activity & Analytics",
    subtitle: "Buyer intelligence",
    description:
      "Helps sellers and advisors identify serious bidders and monitor deal momentum.",
    features: [
      "Document views and engagement",
      "User activity tracking",
      "Buyer comparison insights",
      "Engagement heatmaps",
    ],
    color: "cyan",
    href: "/features/activity-analytics",
  },
  {
    id: "reports",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Reports",
    subtitle: "Audit and compliance reporting",
    description:
      "Supports legal, regulatory, and internal review requirements.",
    features: [
      "Access logs",
      "Document activity reports",
      "Q&A exports",
      "Regulator-ready audit trails",
    ],
    color: "rose",
    href: "/features/reports",
  },
  {
    id: "integrations",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    title: "Integrations",
    subtitle: "Enterprise ecosystem",
    description: "Designed to fit seamlessly into existing deal workflows.",
    features: [
      "e-Signature platforms",
      "Cloud storage providers",
      "CRM systems",
      "Identity and SSO providers",
    ],
    color: "indigo",
    href: "/features/integrations",
  },
  {
    id: "security-compliance",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
    title: "Security & Compliance",
    subtitle: "Trust foundation",
    description: "Security is embedded at every layer of the platform.",
    features: [
      "Encryption at rest and in transit",
      "Multi-factor authentication",
      "Data residency controls",
      "Industry certifications",
    ],
    color: "green",
    href: "/features/security-compliance",
  },
  {
    id: "billing-plans",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    title: "Billing & Plans",
    subtitle: "Commercial flexibility",
    description: "Supports scalable monetization across customer segments.",
    features: [
      "Deal-based pricing",
      "Usage tracking",
      "Subscription management",
      "Invoicing",
    ],
    color: "orange",
    href: "/features/billing-plans",
  },
  {
    id: "settings",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Settings",
    subtitle: "Organization management",
    description: "Customize Space Nexus to match your organization's needs.",
    features: [
      "Company profile",
      "Branding",
      "Notifications",
      "Language and regional settings",
    ],
    color: "slate",
    href: "/features/settings",
  },
  {
    id: "support",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Support",
    subtitle: "Customer success",
    description: "Get help when you need it, how you need it.",
    features: ["Help center", "Live support", "System status"],
    color: "teal",
    href: "/features/support",
  },
];

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string; hover: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    hover: "group-hover:bg-blue-600",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    hover: "group-hover:bg-emerald-600",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    hover: "group-hover:bg-violet-600",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
    hover: "group-hover:bg-amber-600",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-200",
    hover: "group-hover:bg-cyan-600",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-200",
    hover: "group-hover:bg-rose-600",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200",
    hover: "group-hover:bg-indigo-600",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
    hover: "group-hover:bg-green-600",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
    hover: "group-hover:bg-orange-600",
  },
  slate: {
    bg: "bg-slate-50",
    text: "text-slate-600",
    border: "border-slate-200",
    hover: "group-hover:bg-slate-600",
  },
  teal: {
    bg: "bg-teal-50",
    text: "text-teal-600",
    border: "border-teal-200",
    hover: "group-hover:bg-teal-600",
  },
};

export default function FeaturesPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Platform Features
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for{" "}
              <span className="text-gradient">Secure Deals</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A comprehensive suite of tools designed to streamline M&A
              transactions, capital raises, and due diligence workflows. Built
              for enterprise teams who demand security, speed, and simplicity.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Request a Demo
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => {
              const colors = colorClasses[feature.color];
              return (
                <Link
                  key={feature.id}
                  href={feature.href}
                  className="group bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-[#2563eb]/30 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-5 transition-all duration-300 ${colors.hover} group-hover:text-white`}
                  >
                    {feature.icon}
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#2563eb] transition-colors">
                    {feature.title}
                  </h2>
                  <p className={`text-sm font-medium ${colors.text} mb-3`}>
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-2">
                    {feature.features.slice(0, 3).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                    {feature.features.length > 3 && (
                      <li className="text-sm text-gray-400">
                        +{feature.features.length - 3} more
                      </li>
                    )}
                  </ul>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-[#2563eb] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to See Space Nexus in Action?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo to explore how our features can
              transform your deal workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
