import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "All-in-One Nonprofit Management Platform | Kindora",
  description:
    "One unified platform to manage donors, grants, programs, volunteers, finances, and impact reporting. Replace every disconnected tool with Kindora.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/all-in-one-nonprofit-management-platform",
  },
  openGraph: {
    title: "All-in-One Nonprofit Management Platform — Kindora",
    description:
      "Replace every disconnected tool with one platform. Donor CRM, grant tracking, program delivery, volunteer management, and financial reporting — unified.",
    url: "https://spacenexus.net/all-in-one-nonprofit-management-platform",
    siteName: "Kindora by SpaceNexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/icononly_transparent_nobuffer.png",
        width: 1200,
        height: 630,
        alt: "All-in-One Nonprofit Management Platform — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All-in-One Nonprofit Management Platform — Kindora",
    description:
      "One platform to replace them all. Donors, grants, programs, volunteers, finances — unified in Kindora.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "all-in-one nonprofit management platform",
    "nonprofit management platform",
    "unified nonprofit platform",
    "nonprofit operations platform",
    "nonprofit all-in-one software",
    "nonprofit management system",
    "NGO management platform",
    "nonprofit integrated platform",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — All-in-One Nonprofit Management Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Unified nonprofit management platform that consolidates donor tracking, grant management, client services, volunteer coordination, financial reporting, and impact analytics into a single application.",
    url: "https://spacenexus.net/kindora/all-in-one-nonprofit-management-platform",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free trial available",
      },
      featureList: [
        "Unified Donor & Grant Management",
        "Client Case Management",
        "Volunteer Coordination",
        "Campaign & Fundraising Tools",
        "Nonprofit Accounting & Cost Allocation",
        "Real-Time Dashboards",
        "Export-Ready Reporting",
        "Role-Based Access Control",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an all-in-one nonprofit management platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An all-in-one nonprofit management platform is a single software system that handles every aspect of nonprofit operations — donor management, grant tracking, program delivery, volunteer coordination, financial reporting, and impact analytics — eliminating the need for multiple disconnected tools.",
          },
        },
        {
          "@type": "Question",
          name: "Why choose an all-in-one platform over multiple tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An all-in-one platform eliminates data silos, reduces subscription costs, removes duplicate data entry, and provides a unified view of your organization. Instead of paying for separate donor software, grant tools, accounting systems, and spreadsheets, you get everything in one place with consistent data and reporting.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora compare to Salesforce for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora is purpose-built for nonprofits and ready to use immediately, unlike Salesforce which requires expensive consultants, months of customization, and ongoing maintenance. Kindora includes nonprofit-specific modules like grant lifecycle management, cost allocation, and client case management built in from day one.",
          },
        },
        {
          "@type": "Question",
          name: "Can I migrate from spreadsheets to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora is designed to replace Excel and Google Sheets for nonprofits. The platform includes guided onboarding, data import tools, and training to help you migrate your donor lists, grant records, and program data smoothly.",
          },
        },
        {
          "@type": "Question",
          name: "What modules are included in the platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora includes 12 integrated modules: Donor & Donation Management, Grant Tracking & Receipts, Client Case Management, Program Enrollment, Campaign Management, Volunteer Management, Expense & Bill Management, Chart of Accounts & Budgets, Cost Allocation, Communications Hub, Employee Management, and Reports & Analytics.",
          },
        },
      ],
    },
  ],
};

const modules = [
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    name: "Donor & Donation Management",
    description: "Complete donor CRM with giving history, automated acknowledgments, and retention analytics.",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    name: "Grant Tracking & Receipts",
    description: "Full grant lifecycle — prospect, apply, award, track receipts, and compliance reporting.",
  },
  {
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    name: "Campaign & Fundraising",
    description: "Plan and execute campaigns, track progress in real time, and measure ROI across channels.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    name: "Client & Program Services",
    description: "Track enrollment, case notes, outcomes, and program impact for every participant.",
  },
  {
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    name: "Volunteer Management",
    description: "Recruit, schedule, track hours, and recognize your volunteer workforce.",
  },
  {
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    name: "Nonprofit Accounting",
    description: "Fund accounting, cost allocation, budgets, and financial statements built for nonprofits.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    name: "Reports & Analytics",
    description: "Real-time dashboards, trend charts, and export-ready reports for board and funders.",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    name: "Communications Hub",
    description: "Email campaigns, donor thank-you letters, and program updates — all from one platform.",
  },
];

const comparisons = [
  {
    feature: "Donor CRM",
    kindora: true,
    spreadsheets: "partial",
    salesforce: true,
    bloomerang: true,
  },
  {
    feature: "Grant Lifecycle Management",
    kindora: true,
    spreadsheets: false,
    salesforce: "partial",
    bloomerang: false,
  },
  {
    feature: "Client Case Management",
    kindora: true,
    spreadsheets: false,
    salesforce: "partial",
    bloomerang: false,
  },
  {
    feature: "Volunteer Management",
    kindora: true,
    spreadsheets: false,
    salesforce: "partial",
    bloomerang: "partial",
  },
  {
    feature: "Nonprofit Accounting",
    kindora: true,
    spreadsheets: "partial",
    salesforce: false,
    bloomerang: false,
  },
  {
    feature: "Cost Allocation",
    kindora: true,
    spreadsheets: false,
    salesforce: false,
    bloomerang: false,
  },
  {
    feature: "Real-Time Dashboards",
    kindora: true,
    spreadsheets: false,
    salesforce: true,
    bloomerang: true,
  },
  {
    feature: "Ready in 30 Minutes",
    kindora: true,
    spreadsheets: true,
    salesforce: false,
    bloomerang: true,
  },
];

const faqs = [
  {
    question: "What is an all-in-one nonprofit management platform?",
    answer:
      "An all-in-one nonprofit management platform is a single software system that handles every aspect of nonprofit operations — donor management, grant tracking, program delivery, volunteer coordination, financial reporting, and impact analytics — eliminating the need for multiple disconnected tools.",
  },
  {
    question: "Why choose an all-in-one platform over multiple tools?",
    answer:
      "An all-in-one platform eliminates data silos, reduces subscription costs, removes duplicate data entry, and provides a unified view of your organization. Instead of paying for separate donor software, grant tools, accounting systems, and spreadsheets, you get everything in one place with consistent data and reporting.",
  },
  {
    question: "How does Kindora compare to Salesforce for nonprofits?",
    answer:
      "Kindora is purpose-built for nonprofits and ready to use immediately, unlike Salesforce which requires expensive consultants, months of customization, and ongoing maintenance. Kindora includes nonprofit-specific modules like grant lifecycle management, cost allocation, and client case management built in from day one.",
  },
  {
    question: "Can I migrate from spreadsheets to Kindora?",
    answer:
      "Yes. Kindora is designed to replace Excel and Google Sheets for nonprofits. The platform includes guided onboarding, data import tools, and training to help you migrate your donor lists, grant records, and program data smoothly.",
  },
  {
    question: "What modules are included in the platform?",
    answer:
      "Kindora includes 12 integrated modules: Donor & Donation Management, Grant Tracking & Receipts, Client Case Management, Program Enrollment, Campaign Management, Volunteer Management, Expense & Bill Management, Chart of Accounts & Budgets, Cost Allocation, Communications Hub, Employee Management, and Reports & Analytics.",
  },
  {
    question: "Is Kindora affordable for small nonprofits?",
    answer:
      "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade features at a price nonprofits can afford. A free trial is available so you can explore the platform before committing.",
  },
];

export default function AllInOneNonprofitManagementPlatformPage() {
  return (
    <>
      <Script
        id="all-in-one-platform-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-violet-700">
                All-in-One Nonprofit Platform
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              The All-in-One{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                Nonprofit Management Platform
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Replace every disconnected tool with one unified platform. Manage
              donors, track grants, deliver programs, coordinate volunteers, and
              report impact — all from a single source of truth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-full shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Free Trial
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
              <Link
                href="/kindora/features"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                Explore Modules
              </Link>
            </div>
          </div>

          {/* Platform Visual */}
          <div className="mt-16 lg:mt-24 relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-violet-100/60 via-purple-50/40 to-fuchsia-100/40 rounded-[3rem] blur-2xl -z-10" />
            <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-gray-200 p-8 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-violet-100 rounded-full px-4 py-1.5 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                  </span>
                  <span className="text-xs font-semibold text-violet-700">
                    Live Platform Preview
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {modules.map((mod, i) => (
                  <div
                    key={i}
                    className="bg-[#f8f9fa] rounded-xl p-4 text-center hover:bg-violet-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 mx-auto mb-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={mod.icon}
                        />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-900">
                      {mod.name.split(" ")[0]}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-violet-600"
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
                  12 integrated modules
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-violet-600"
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
                  Single source of truth
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-violet-600"
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
                  No consultants needed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">
              The Problem
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Too Many Tools. Too Many Silos. Too Much Wasted Time.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most nonprofits use 5+ disconnected tools to run their operations.
              The result: duplicate data entry, missed deadlines, and zero
              visibility across the organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-50 rounded-2xl border border-red-100 p-8">
              <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Without an All-in-One Platform
              </h3>
              <ul className="space-y-3 text-sm text-red-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  Donor data in one spreadsheet, grant info in another
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  Manual data entry across 5+ disconnected tools
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  No real-time visibility into organizational performance
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  Missed grant deadlines and compliance deadlines
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  Board reports take days to compile
                </li>
              </ul>
            </div>
            <div className="bg-violet-50 rounded-2xl border border-violet-100 p-8">
              <h3 className="text-lg font-bold text-violet-700 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
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
                With Kindora&apos;s All-in-One Platform
              </h3>
              <ul className="space-y-3 text-sm text-violet-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  All data unified in one secure platform
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  Automated workflows eliminate duplicate entry
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  Real-time dashboards for complete organizational visibility
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  Automated reminders never miss a deadline
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  Board-ready reports generated in minutes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">
              Platform Modules
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              12 Integrated Modules. One Unified Platform.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every module shares the same data, so your donor records connect
              to grants, grants connect to programs, and programs connect to
              financial outcomes — automatically.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-violet-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 mb-4 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
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
                      d={mod.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                  {mod.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/kindora/features"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
            >
              See all features
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">
              Why Kindora
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Kindora Compares
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how Kindora&apos;s all-in-one platform stacks up against
              spreadsheets, Salesforce, and single-purpose tools.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">
                    Feature
                  </th>
                  <th className="px-6 py-4 bg-violet-600 text-white font-bold text-center min-w-[130px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                        Best Choice
                      </span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">
                    Spreadsheets
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">
                    Salesforce NPC
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">
                    Bloomerang
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center bg-violet-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-violet-600 text-white">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                    </td>
                    {[row.spreadsheets, row.salesforce, row.bloomerang].map(
                      (val, j) => (
                        <td key={j} className="px-6 py-4 text-center">
                          {val === true ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                          ) : val === "partial" ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M20 12H4"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </span>
                          )}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td colSpan={5} className="px-6 py-3">
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-violet-600 text-white">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        Full support
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-yellow-600">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M20 12H4"
                            />
                          </svg>
                        </span>
                        Partial / add-on required
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-400">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                        Not available
                      </span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Trusted, Secure, and Built for Nonprofits
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Enterprise-grade security at a nonprofit-friendly price. Your
              data is always safe.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "SOC 2 Type II",
                description: "Enterprise-grade security certification",
              },
              {
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                title: "256-bit Encryption",
                description: "AES-256 encryption at rest and in transit",
              },
              {
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                title: "Full Audit Trail",
                description: "Every action logged and traceable",
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "GDPR & CCPA Ready",
                description: "Built-in compliance for data privacy regulations",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-2xl border border-white/10 p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400 mx-auto mb-4">
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
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/10">
            {[
              "Free trial — no credit card required",
              "Set up in under 30 minutes",
              "Cancel anytime",
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Kindora&apos;s all-in-one
              nonprofit management platform.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Unify Your Nonprofit Operations?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join organizations that trust Kindora&apos;s all-in-one platform to
            manage every aspect of their operations — from donors to financials
            to impact reporting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-full shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300"
            >
              Start Free Trial
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
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-violet-600 transition-colors"
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
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The All-in-One Nonprofit Management Platform for Every Organization
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kindora is the leading{" "}
            <Link
              href="/nonprofit-management-software"
              className="text-violet-600 hover:underline"
            >
              nonprofit management software
            </Link>{" "}
            and{" "}
            <Link
              href="/kindora/features/donor-management"
              className="text-violet-600 hover:underline"
            >
              donor management platform
            </Link>{" "}
            trusted by organizations nationwide. Our comprehensive{" "}
            <Link
              href="/kindora/features/grant-management"
              className="text-violet-600 hover:underline"
            >
              grant management platform
            </Link>{" "}
            handles the full lifecycle from prospecting to compliance reporting.
            Whether you need{" "}
            <Link
              href="/kindora/features/client-management"
              className="text-violet-600 hover:underline"
            >
              client case management
            </Link>
            ,{" "}
            <Link
              href="/kindora/features/people-management"
              className="text-violet-600 hover:underline"
            >
              volunteer management
            </Link>
            , or{" "}
            <Link
              href="/kindora/features/financial-management"
              className="text-violet-600 hover:underline"
            >
              nonprofit accounting
            </Link>
            , Kindora delivers everything in one unified platform at a price
            nonprofits can afford. Unlike fragmented tool stacks or enterprise
            platforms requiring consultants, our{" "}
            <strong>all-in-one nonprofit management platform</strong> is
            purpose-built for the unique needs of mission-driven organizations
            — with donor CRM, grant tracking, program delivery, volunteer
            coordination, financial reporting, and impact analytics built in
            from day one.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/kindora"
              className="text-violet-600 hover:underline font-medium"
            >
              Kindora Home →
            </Link>
            <Link
              href="/kindora/features"
              className="text-violet-600 hover:underline font-medium"
            >
              All Features →
            </Link>
            <Link
              href="/kindora/pricing"
              className="text-violet-600 hover:underline font-medium"
            >
              Pricing →
            </Link>
            <Link
              href="/kindora/contact"
              className="text-violet-600 hover:underline font-medium"
            >
              Request Demo →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
