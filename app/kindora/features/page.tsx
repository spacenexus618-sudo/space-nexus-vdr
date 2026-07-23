import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Features - Complete Nonprofit Management Tools",
  description:
    "Explore Kindora's comprehensive feature set: donor management, grant tracking, program delivery, financial reporting, volunteer coordination, and more.",
  keywords: [
    "nonprofit software features",
    "NGO management tools",
    "donor management features",
    "grant tracking features",
    "nonprofit platform capabilities",
  ],
  alternates: {
    canonical: "https://spacenexus.net/kindora/features",
  },
  openGraph: {
    title: "Features - Complete Nonprofit Management Tools",
    description:
      "Explore Kindora's comprehensive feature set: donor management, grant tracking, program delivery, financial reporting, volunteer coordination, and more.",
    url: "https://spacenexus.net/kindora/features",
    type: "website",
  },
};

const featureCategories = [
  {
    category: "Financial Management",
    color: "emerald",
    features: [
      {
        name: "Dashboard & Analytics",
        href: "/kindora/features/dashboard-analytics",
        description:
          "Centralized overview of donations, net income, campaigns, donor distribution, and activity — all in one powerful view.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
      {
        name: "Financials",
        href: "/kindora/features/financials",
        description:
          "Manage donors, donations, campaigns, grants, vendors, expenses, and financial reports — all in one unified financial platform.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      },
      {
        name: "Finance",
        href: "/kindora/features/financial-management",
        description:
          "Manage a structured chart of accounts, create budgets for programs and operations, and track financial allocations.",
        icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      },
    ],
  },
  {
    category: "Program Management",
    color: "violet",
    features: [
      {
        name: "Programs",
        href: "/kindora/features/client-management",
        description:
          "Manage client services, track enrollments, monitor program performance, and measure community impact.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      },
      {
        name: "People",
        href: "/kindora/features/people-management",
        description:
          "Manage employees, volunteers, and communications — with staff records, participation tracking, and interaction logs.",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      },
    ],
  },
  {
    category: "Communications",
    color: "blue",
    features: [
      {
        name: "Communications & Email",
        href: "/kindora/features/communications",
        description:
          "Built-in email system with templates, bulk sending, and complete communication logging.",
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      },
    ],
  },
  {
    category: "Reporting",
    color: "amber",
    features: [
      {
        name: "Reports",
        href: "/kindora/features/reporting",
        description:
          "View key metrics, analyze income vs expenses, track donation trends, monitor program outcomes, and export financial data.",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      },
    ],
  },
  {
    category: "Administration",
    color: "rose",
    features: [
      {
        name: "Users",
        href: "/kindora/features/user-management",
        description:
          "Create user accounts, assign role-based access levels — Admin, Manager, Staff, Viewer — and control module permissions.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        name: "File Management",
        href: "/kindora/features/file-management",
        description:
          "Drag-and-drop uploads, support for documents and images, file attachments on any entity.",
        icon: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
      },
      {
        name: "Settings & Customization",
        href: "/kindora/features/settings",
        description:
          "Theme modes, language selection, timezone, currency, date formats, and notification preferences.",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      },
    ],
  },
];

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string; hover: string }
> = {
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    hover: "hover:border-emerald-300 hover:bg-emerald-50/50",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    hover: "hover:border-violet-300 hover:bg-violet-50/50",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    hover: "hover:border-blue-300 hover:bg-blue-50/50",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
    hover: "hover:border-amber-300 hover:bg-amber-50/50",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-200",
    hover: "hover:border-rose-300 hover:bg-rose-50/50",
  },
};

export default function FeaturesPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Platform Features
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to run your nonprofit
            </h1>
            <p className="text-lg text-gray-600">
              Kindora NGO OS provides a comprehensive suite of tools designed
              specifically for nonprofit organizations. Explore our features
              organized by function.
            </p>
          </div>

          {/* Feature Categories */}
          {featureCategories.map((category) => {
            const colors = colorClasses[category.color];
            return (
              <div key={category.category} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-3 h-3 rounded-full ${colors.bg} ${colors.text}`}
                  >
                    <div
                      className={`w-full h-full rounded-full ${colors.text} bg-current`}
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {category.category}
                  </h2>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {category.features.map((feature) => (
                    <Link
                      key={feature.name}
                      href={feature.href}
                      className={`group relative bg-white rounded-xl border ${colors.border} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${colors.hover}`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} mb-4 group-hover:scale-110 transition-transform`}
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
                            d={feature.icon}
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">
                        {feature.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          className={`w-5 h-5 ${colors.text}`}
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
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Built specifically for nonprofit needs
              </h2>
              <p className="text-gray-600 mb-8">
                Unlike generic CRM or accounting software, Kindora is designed
                from the ground up with nonprofit workflows, terminology, and
                compliance requirements in mind.
              </p>

              <div className="space-y-4">
                {[
                  "Nonprofit-standard chart of accounts included",
                  "Grant lifecycle and compliance tracking",
                  "Cost allocation across programs and grants",
                  "Statement of Activities report generation",
                  "Donor acknowledgment and receipt management",
                  "Client intake with demographics tracking",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
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
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#2563eb]/5 to-violet-500/5 rounded-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "User Roles", value: "4 access levels" },
                    { label: "Donor Types", value: "8 categories" },
                    { label: "Expense Categories", value: "10 types" },
                    { label: "Service Categories", value: "8 types" },
                    { label: "Payment Methods", value: "7 options" },
                    { label: "Languages", value: "4 supported" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-xl p-4 border border-gray-100"
                    >
                      <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                  ))}
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
            Ready to see Kindora in action?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a personalized demo to see how Kindora can transform your
            nonprofit operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300"
            >
              Request a Demo
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              View Pricing
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
          <div className="mt-8 flex justify-center">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </main>
  );
}
