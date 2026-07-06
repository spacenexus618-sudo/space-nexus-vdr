import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nonprofit Operations Platform | Unified Operations Software | Kindora",
  description:
    "One platform to manage donors, grants, programs, volunteers, finances, and impact reporting. Replace every disconnected tool with Kindora's nonprofit operations platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-operations-platform",
  },
  openGraph: {
    title: "Nonprofit Operations Platform — Kindora",
    description:
      "One unified platform for nonprofit operations. Donor CRM, grant tracking, program delivery, volunteer management, financial reporting, and impact analytics — all in one place.",
    url: "https://spacenexus.net/kindora/nonprofit-operations-platform",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/icononly_transparent_nobuffer.png",
        width: 1200,
        height: 630,
        alt: "Nonprofit Operations Platform — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Operations Platform — Kindora",
    description:
      "The complete nonprofit operations platform. Donors, grants, programs, volunteers, finances — unified in one system.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "nonprofit operations platform",
    "nonprofit operations software",
    "nonprofit management platform",
    "nonprofit operating system",
    "NGO operations platform",
    "nonprofit all-in-one software",
    "nonprofit management software",
    "unified nonprofit platform",
    "nonprofit operations management",
    "nonprofit technology platform",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Nonprofit Operations Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "The complete nonprofit operations platform. Donor CRM, grant tracking, client case management, volunteer coordination, nonprofit accounting, and impact analytics — unified in one application.",
      url: "https://spacenexus.net/kindora/nonprofit-operations-platform",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free trial available",
      },
      featureList: [
        "Donor & Donation Management",
        "Grant Lifecycle Tracking",
        "Client Case Management",
        "Volunteer Coordination",
        "Nonprofit Accounting & Cost Allocation",
        "Campaign & Fundraising Tools",
        "Communications Hub",
        "Impact Analytics & Reporting",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a nonprofit operations platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A nonprofit operations platform is a single software system that manages every aspect of nonprofit operations — donor management, grant tracking, program delivery, volunteer coordination, financial reporting, and impact analytics. It replaces multiple disconnected tools with one unified system.",
          },
        },
        {
          "@type": "Question",
          name: "Why do nonprofits need an operations platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nonprofits typically use 5–10 separate tools for donors, grants, programs, accounting, volunteers, and reporting. This creates data silos, duplicate data entry, and inconsistent reporting. An operations platform consolidates everything into one system, reducing costs and improving efficiency.",
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
          name: "What modules are included in Kindora?",
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
    link: "/kindora/features/donor-management",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    name: "Grant Tracking & Receipts",
    description: "Full grant lifecycle — prospect, apply, award, track receipts, and compliance reporting.",
    link: "/kindora/features/grant-management",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    name: "Client & Program Services",
    description: "Track enrollment, case notes, outcomes, and program impact for every participant.",
    link: "/kindora/features/client-management",
  },
  {
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    name: "Volunteer Management",
    description: "Recruit, schedule, track hours, and recognize your volunteer workforce.",
    link: "/kindora/volunteer-management-software",
  },
  {
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    name: "Nonprofit Accounting",
    description: "Built-in accounting with cost allocation, fund accounting, and board-ready financial reports.",
    link: "/kindora/features/financial-management",
  },
  {
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    name: "Campaign & Fundraising",
    description: "Plan and execute campaigns, track progress in real time, and measure ROI across channels.",
    link: "/kindora/features/campaign-management",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    name: "Communications Hub",
    description: "Centralized email, SMS, and internal messaging with donor and stakeholder workflows.",
    link: "/kindora/features/communications",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    name: "Impact Analytics & Reporting",
    description: "Real-time dashboards, custom reports, and export-ready formats for board and funders.",
    link: "/kindora/features/reporting",
  },
];

const problems = [
  {
    problem: "Data Silos",
    description: "Donor data in one tool, grant data in another, program data in spreadsheets. No single source of truth.",
    solution: "One unified database. Every interaction — donor, grant, client, volunteer — connected in one place.",
  },
  {
    problem: "Duplicate Data Entry",
    description: "Staff re-entering the same information across multiple systems. Wasted hours, introduction of errors.",
    solution: "Enter data once. Every module sees the same record. No duplication, no inconsistencies.",
  },
  {
    problem: "Fragmented Reporting",
    description: "Stitching together reports from 5+ tools for board meetings. Incomplete picture of organizational health.",
    solution: "One-click reports pulling from all modules. Board-ready, funder-ready, audit-ready.",
  },
  {
    problem: "Tool Sprawl",
    description: "Paying for 5–10 separate subscriptions. Training staff on multiple interfaces. Managing multiple logins.",
    solution: "One platform, one login, one subscription. Every feature your nonprofit needs, built in.",
  },
];

const comparisons = [
  {
    tool: "Spreadsheets",
    issues: ["No audit trail", "No permission controls", "Version control chaos", "No automation"],
    kindora: "Secure, auditable, permission-controlled, automated — with real-time dashboards.",
  },
  {
    tool: "Salesforce Nonprofit Cloud",
    issues: ["Expensive consultants", "Months of setup", "Ongoing maintenance", "Not purpose-built"],
    kindora: "Ready in 30 minutes. No consultants. Purpose-built for nonprofits from day one.",
  },
  {
    tool: "Multiple Point Solutions",
    issues: ["Data silos", "Duplicate entry", "Fragmented reporting", "High total cost"],
    kindora: "One unified platform. One database. One subscription. Complete visibility.",
  },
];

const faqs = [
  {
    question: "What is a nonprofit operations platform?",
    answer:
      "A nonprofit operations platform is a single software system that manages every aspect of nonprofit operations — donor management, grant tracking, program delivery, volunteer coordination, financial reporting, and impact analytics. It replaces multiple disconnected tools with one unified system.",
  },
  {
    question: "Why do nonprofits need an operations platform?",
    answer:
      "Nonprofits typically use 5–10 separate tools for donors, grants, programs, accounting, volunteers, and reporting. This creates data silos, duplicate data entry, and inconsistent reporting. An operations platform consolidates everything into one system, reducing costs and improving efficiency.",
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
    question: "What modules are included in Kindora?",
    answer:
      "Kindora includes 12 integrated modules: Donor & Donation Management, Grant Tracking & Receipts, Client Case Management, Program Enrollment, Campaign Management, Volunteer Management, Expense & Bill Management, Chart of Accounts & Budgets, Cost Allocation, Communications Hub, Employee Management, and Reports & Analytics.",
  },
  {
    question: "How long does it take to get started with Kindora?",
    answer:
      "Most nonprofits are live on Kindora within 30 minutes. No consultants, no implementation fees, no months of setup. The platform is designed to be intuitive and ready to use immediately.",
  },
];

export default function NonprofitOperationsPlatformPage() {
  return (
    <>
      <Script
        id="nonprofit-operations-platform-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-600">
                Nonprofit Operations Platform
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                Nonprofit Operations Platform
              </span>{" "}
              That Replaces Everything
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Donor CRM. Grant tracking. Case management. Volunteer
              coordination. Nonprofit accounting. Impact reporting. One unified
              platform — no more tool sprawl.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://cad.spaceaiapp.com/kindora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Try Kindora Free
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/kindora/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                Request a Demo
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              {[
                "No credit card required",
                "Setup in 30 minutes",
                "Cancel anytime",
              ].map((text) => (
                <span key={text} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">
              The Problem
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your nonprofit is running on too many tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most nonprofits juggle 5–10 separate tools for donors, grants,
              programs, accounting, and reporting. It&apos;s expensive,
              inefficient, and impossible to get a complete picture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((item) => (
              <div
                key={item.problem}
                className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{item.problem}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <svg className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-blue-700 font-medium">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Everything You Need
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              8 integrated modules. One platform.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every module shares the same database. Enter data once, see it
              everywhere. No duplicate entry, no data silos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod) => (
              <Link
                key={mod.name}
                href={mod.link}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 text-[#2563eb] group-hover:text-white transition-colors"
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
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">
                  {mod.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {mod.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Why Not the Alternatives?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Kindora compares to other approaches
            </h2>
          </div>

          <div className="space-y-6">
            {comparisons.map((comp) => (
              <div
                key={comp.tool}
                className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8"
              >
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900">{comp.tool}</h3>
                    </div>
                    <ul className="space-y-2">
                      {comp.issues.map((issue) => (
                        <li key={issue} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-4 h-4 rounded-full bg-red-100 text-red-400 flex items-center justify-center shrink-0">
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-xs">K</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2563eb] mb-1">Kindora</p>
                        <p className="text-sm text-blue-700">{comp.kindora}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#2563eb] to-[#1d4ed8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-white mb-2">12</div>
              <div className="text-base font-semibold text-blue-100">Integrated Modules</div>
              <div className="text-sm text-blue-200 mt-1">Everything your nonprofit needs</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">30min</div>
              <div className="text-base font-semibold text-blue-100">Setup Time</div>
              <div className="text-sm text-blue-200 mt-1">No consultants required</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">1</div>
              <div className="text-base font-semibold text-blue-100">Platform</div>
              <div className="text-sm text-blue-200 mt-1">Replaces 5–10 tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about nonprofit operations platforms.
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to unify your nonprofit operations?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora today. Replace every disconnected tool
            with one unified operations platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Start Free — No Credit Card Required
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Free trial · No credit card · Setup in 30 minutes · Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
