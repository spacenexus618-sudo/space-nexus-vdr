import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "./components/LastUpdated";
import {
  AnimatedStatsBar,
  AnimatedHowItWorks,
  AnimatedStrengthCards,
  AnimatedComparisonHeader,
  AnimatedTrustBadges,
  AnimatedFeatureGrid,
  AnimatedSectionHeader,
  AnimatedValueProps,
  AnimatedHeroBadge,
  AnimatedHeroHeading,
  AnimatedHeroSubtext,
  AnimatedHeroCTA,
  AnimatedHeroDashboard,
  AnimatedScreenshotGallery,
} from "./components/AnimatedSections";
const lastUpdated = "May 15, 2026";
export const metadata: Metadata = {
  title: {
    absolute: "Kindora | All-in-One Nonprofit Management Software",
  },
  description:
    "Kindora is the modern nonprofit management platform for donor tracking, grant management, client services, and financial reporting — all in one place. Built for small to mid-sized nonprofits.",
  alternates: {
    canonical: "https://spacenexus.net/kindora",
  },
  openGraph: {
    title: "Kindora — All-in-One Nonprofit Management Software",
    description:
      "Manage donors, track grants, deliver programs, and report impact — all from a single platform built specifically for nonprofits.",
    url: "https://spacenexus.net/kindora",
    siteName: "Kindora",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora/og-card.png",
        width: 1200,
        height: 630,
        alt: "Kindora — All-in-One Nonprofit Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora — Nonprofit Management Software",
    description:
      "Replace spreadsheets with one unified nonprofit platform. Donor CRM, grant tracking, client management, and more.",
    images: ["https://spacenexus.net/kindora/og-card.png"],
  },
  keywords: [
    "nonprofit management software",
    "nonprofit CRM",
    "donor management software",
    "grant management software",
    "nonprofit accounting software",
    "case management software nonprofit",
    "volunteer management software",
    "all-in-one nonprofit platform",
    "nonprofit donor tracking",
    "grant tracking software for nonprofits",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "All-in-one nonprofit management software for donor tracking, grant management, client services, volunteer coordination, and financial reporting.",
      url: "https://spacenexus.net/kindora",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free trial available",
      },
      featureList: [
        "Donor Management",
        "Grant Tracking",
        "Client Case Management",
        "Volunteer Management",
        "Campaign Management",
        "Nonprofit Accounting",
        "Cost Allocation",
        "Reports & Analytics",
      ],
    },
    {
      "@type": "Organization",
      name: "Kindora",
      url: "https://spacenexus.net/kindora",
      description: "Nonprofit management software platform",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora is an all-in-one nonprofit management software platform that replaces disconnected spreadsheets and siloed tools with a single unified web application. It manages donor relationships, grant tracking, client services, financial management, volunteer coordination, and team collaboration.",
          },
        },
        {
          "@type": "Question",
          name: "What does Kindora do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora helps nonprofits run their entire organization in one platform: manage donors and donations, run fundraising campaigns, track grants from application to compliance reporting, deliver client programs and case management, oversee volunteers, and handle nonprofit accounting and financial reports.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Kindora for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora is designed for small to mid-sized nonprofits including social service agencies, community development organizations, youth-serving nonprofits, housing assistance organizations, food banks, and educational nonprofits. Primary users include Executive Directors, Development Directors, Program Managers, and Finance Officers.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora compare to Salesforce Nonprofit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora is purpose-built for nonprofits and is significantly more affordable and easier to use than Salesforce Nonprofit. While Salesforce requires expensive consultants and months of setup, Kindora is ready to use immediately with nonprofit-specific modules like grant lifecycle management, client case management, and cost allocation built in from day one.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora handle grant management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora includes a complete grant lifecycle management system — track grants from prospect to award, manage grantor relationships, record grant receipts, set deadline reminders, and allocate costs across multiple grants for compliance reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora affordable for small nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade features at a price nonprofits can afford. A free trial is available so you can explore the platform before committing.",
          },
        },
        {
          "@type": "Question",
          name: "Can I try Kindora for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can start a free trial of Kindora at cad.spaceaiapp.com/kindora with no credit card required. You can also request a personalized demo to see how Kindora fits your organization's specific needs.",
          },
        },
        {
          "@type": "Question",
          name: "What modules does Kindora include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora includes: Donor & Donation Management, Grant Tracking & Receipts, Client Case Management, Program Enrollment, Campaign Management, Volunteer Management, Expense & Bill Management, Chart of Accounts & Budgets, Cost Allocation, Communications Hub, Employee Management, and Reports & Analytics.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora replace spreadsheets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora is designed to replace Excel and Google Sheets for nonprofits. It provides automated tracking, real-time dashboards, and export-ready reports — eliminating manual data entry errors and saving your team hours every week.",
          },
        },
      ],
    },
  ],
};

const valueProps = [
  {
    title: "Unified Nonprofit Management",
    description:
      "Replace scattered spreadsheets and disconnected tools with one integrated platform covering finances, programs, and people.",
    icon: (
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
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    title: "Real-Time Dashboards & Analytics",
    description:
      "KPI cards, donation trend charts, campaign progress trackers, and program enrollment metrics updated in real time.",
    icon: (
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Role-Based Access Control",
    description:
      "Four access levels (Admin, Manager, Staff, Viewer) ensure every team member sees exactly what they need — nothing more, nothing less.",
    icon: (
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Export-Ready Reporting",
    description:
      "Generate PDF statements of activities, Excel data exports, and visual reports for board meetings and grant compliance.",
    icon: (
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
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

const featureGrid = [
  {
    name: "Donor & Donation Management",
    href: "/kindora/features/donor-management",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Grant Tracking & Receipts",
    href: "/kindora/features/grant-management",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    name: "Campaign Management",
    href: "/kindora/features/campaign-management",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    name: "Client & Program Services",
    href: "/kindora/features/client-management",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    name: "Employee & Volunteer Management",
    href: "/kindora/features/people-management",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    name: "Chart of Accounts & Budgets",
    href: "/kindora/features/financial-management",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    name: "Cost Allocation",
    href: "/kindora/features/financial-management",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    name: "Communications & Email",
    href: "/kindora/features/communications",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "Reports & Analytics",
    href: "/kindora/features/reporting",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    name: "File Attachments & Documents",
    href: "/kindora/features/file-management",
    icon: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
  },
  {
    name: "Expense & Bill Management",
    href: "/kindora/features/expense-management",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    name: "Settings & Administration",
    href: "/kindora/features/settings",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const faqs = [
  {
    question: "What is Kindora?",
    answer:
      "Kindora is an all-in-one nonprofit management software platform that replaces disconnected spreadsheets and siloed tools with a single unified web application. It manages donor relationships, grant tracking, client services, financial management, volunteer coordination, and team collaboration.",
  },
  {
    question: "What does Kindora do?",
    answer:
      "Kindora helps nonprofits run their entire organization in one platform: manage donors and donations, run fundraising campaigns, track grants from application to compliance reporting, deliver client programs and case management, oversee volunteers, and handle nonprofit accounting and financial reports.",
  },
  {
    question: "Who is Kindora for?",
    answer:
      "Kindora is designed for small to mid-sized nonprofits — social service agencies, community development organizations, youth-serving nonprofits, housing assistance organizations, food banks, and educational nonprofits. Primary users include Executive Directors, Development Directors, Program Managers, and Finance Officers.",
  },
  {
    question: "How does Kindora compare to Salesforce Nonprofit?",
    answer:
      "Kindora is purpose-built for nonprofits and is significantly more affordable and easier to use than Salesforce Nonprofit. While Salesforce requires expensive consultants and months of setup, Kindora is ready to use immediately with nonprofit-specific modules like grant lifecycle management, client case management, and cost allocation built in from day one.",
  },
  {
    question: "Does Kindora handle grant management?",
    answer:
      "Yes. Kindora includes a complete grant lifecycle management system — track grants from prospect to award, manage grantor relationships, record grant receipts, set deadline reminders, and allocate costs across multiple grants for compliance reporting.",
  },
  {
    question: "Is Kindora affordable for small nonprofits?",
    answer:
      "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade features at a price nonprofits can afford. A free trial is available so you can explore the platform before committing.",
  },
  {
    question: "Can I try Kindora for free?",
    answer:
      "Yes! You can start a free trial with no credit card required. You can also request a personalized demo to see how Kindora fits your organization's specific needs.",
  },
  {
    question: "What modules does Kindora include?",
    answer:
      "Kindora includes: Donor & Donation Management, Grant Tracking & Receipts, Client Case Management, Program Enrollment, Campaign Management, Volunteer Management, Expense & Bill Management, Chart of Accounts & Budgets, Cost Allocation, Communications Hub, Employee Management, and Reports & Analytics.",
  },
  {
    question: "Does Kindora replace spreadsheets?",
    answer:
      "Yes. Kindora is designed to replace Excel and Google Sheets for nonprofits. It provides automated tracking, real-time dashboards, and export-ready reports — eliminating manual data entry errors and saving your team hours every week.",
  },
];

export default function KindoraHomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="kindora-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse mr-2" />
              <span className="text-sm font-medium text-[#2563eb]">
                Nonprofit Management Platform
              </span>
            </div>

            {/* H1 — updated with primary keyword */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              All-in-One{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                Nonprofit Management
              </span>{" "}
              Software
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Manage donors, track grants, deliver programs, and report impact —
              all from a single, intuitive platform designed specifically for
              nonprofit organizations.
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-10">
               According to the Nonprofit Finance Fund&apos;s 2024 State of the Nonprofit Sector Survey, 68% of nonprofits reported increased demand for services. Kindora helps organizations meet that demand by replacing disconnected spreadsheets with one unified platform — saving teams an average of 10 hours per week, per Kindora platform data.
            </p>
            <p className="text-xs text-gray-400 mb-4">Last updated: {lastUpdated}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <Link
                href="/kindora/features"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                <svg
                  className="mr-2 w-5 h-5 text-[#2563eb]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Explore Features
              </Link>
            </div>
          </div>

          {/* Dashboard Preview — GIF Showcase */}
          <div className="mt-16 lg:mt-24 relative">

            {/* Warm glow backdrops */}
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-100/60 via-indigo-50/40 to-purple-100/40 rounded-[3rem] blur-2xl -z-10" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-blue-200/40 blur-2xl rounded-full -z-10" />

            {/* Floating trust badge — top left */}
            {/* <div className="absolute -top-5 left-6 z-20 hidden sm:flex items-center gap-2 bg-white rounded-2xl shadow-lg shadow-blue-100 border border-blue-100 px-4 py-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 leading-tight">Trusted by Nonprofits</p>
                <p className="text-[10px] text-gray-500">Mission-ready platform</p>
              </div>
            </div> */}

            {/* Floating live badge — top right */}
            <div className="absolute -top-5 right-6 z-20 hidden sm:flex items-center gap-2 bg-white rounded-2xl shadow-lg shadow-emerald-100 border border-emerald-100 px-4 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-gray-700">Live Platform Preview</span>
            </div>

            {/* Browser mockup wrapper */}
            <div className="relative rounded-2xl lg:rounded-3xl shadow-[0_30px_80px_-15px_rgba(37,99,235,0.25)] border border-white/60 overflow-hidden mx-auto max-w-6xl ring-1 ring-blue-100">

              {/* Browser chrome bar */}
              <div className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-5 py-1.5 bg-white rounded-lg text-xs text-gray-500 border border-gray-200 shadow-sm w-full max-w-xs">
                    <svg className="w-3 h-3 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="truncate">cad.spaceaiapp.com/kindora</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 hidden sm:flex">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Secure
                </div>
              </div>

              {/* Video preview */}
              <div className="relative bg-[#f0f4ff] aspect-video">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/kindora-demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Bottom caption strip */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              {[
                { icon: "M5 13l4 4L19 7", label: "No credit card required" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Set up in 30 minutes" },
                { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Built for nonprofits" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is Kindora? */}
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
            The Short Answer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            What is Kindora?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-3">
            Kindora is an all-in-one nonprofit management software that replaces
            disconnected spreadsheets and siloed tools with a single unified
            platform. It handles donor relationships, grant tracking, client
            programs, finances, and volunteers — so your team runs the whole
            organization from one place.
          </p>
          <p className="text-base text-gray-500">
            Purpose-built for small to mid-sized nonprofits, Kindora removes the
            need for 3–4 separate subscriptions and the manual data entry between
            them.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mt-7">
            {[
              "Donor CRM & Fundraising",
              "Grant Lifecycle Tracking",
              "Client Case Management",
              "Nonprofit Accounting",
              "Volunteer Management",
              "Reports & Dashboards",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm">
            <Link href="/kindora/about#team" className="font-semibold text-[#2563eb] hover:text-[#1d4ed8] hover:underline">
              Meet the Kindora team →
            </Link>
            <Link href="/kindora/about" className="text-gray-500 hover:text-[#2563eb] hover:underline">
              About Kindora, Inc.
            </Link>
          </div>
        </div>
      </section>

      <AnimatedStatsBar />

      {/* Value Propositions */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSectionHeader
            eyebrow="Why Kindora"
            heading="Everything your nonprofit needs in one place"
            subtext="Stop juggling multiple tools. Kindora unifies your operations so you can focus on your mission."
          />
          <AnimatedValueProps valueProps={valueProps} />
        </div>
      </section>

      <AnimatedHowItWorks />


      {/* Feature Grid */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSectionHeader
            eyebrow="Comprehensive Features"
            heading="Built for every aspect of nonprofit operations"
            subtext="From donor management to financial reporting, Kindora has you covered."
          />
          <AnimatedFeatureGrid features={featureGrid} />
          <div className="text-center mt-12">
            <Link
              href="/kindora/features"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
            >
              See all features
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Competitor Comparison Section */}
      <section className="py-20 lg:py-28 bg-white" id="why-kindora">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedComparisonHeader />

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-16">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">
                    Feature
                  </th>
                  {/* Kindora column — highlighted */}
                  <th className="px-6 py-4 bg-[#2563eb] text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                        Best Choice
                      </span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">
                    Bloomerang
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">
                    Salesforce NPC
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">
                    Bonterra Apricot
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">
                    Spreadsheets
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Donor CRM & Tracking",
                    kindora: true,
                    bloomerang: true,
                    salesforce: true,
                    bonterra: false,
                    sheets: false,
                  },
                  {
                    feature: "Grant Lifecycle Management",
                    kindora: true,
                    bloomerang: false,
                    salesforce: "partial",
                    bonterra: false,
                    sheets: false,
                  },
                  {
                    feature: "Client Case Management",
                    kindora: true,
                    bloomerang: false,
                    salesforce: "partial",
                    bonterra: true,
                    sheets: false,
                  },
                  {
                    feature: "Nonprofit Accounting & Cost Allocation",
                    kindora: true,
                    bloomerang: false,
                    salesforce: false,
                    bonterra: false,
                    sheets: false,
                  },
                  {
                    feature: "Volunteer Management",
                    kindora: true,
                    bloomerang: "partial",
                    salesforce: "partial",
                    bonterra: false,
                    sheets: false,
                  },
                  {
                    feature: "Campaign & Fundraising Tools",
                    kindora: true,
                    bloomerang: true,
                    salesforce: true,
                    bonterra: false,
                    sheets: false,
                  },
                  {
                    feature: "Built-in Communications Hub",
                    kindora: true,
                    bloomerang: "partial",
                    salesforce: "partial",
                    bonterra: false,
                    sheets: false,
                  },
                  {
                    feature: "Affordable for Small Nonprofits",
                    kindora: true,
                    bloomerang: true,
                    salesforce: false,
                    bonterra: false,
                    sheets: true,
                  },
                  {
                    feature: "Ready in Minutes (No Consultants)",
                    kindora: true,
                    bloomerang: true,
                    salesforce: false,
                    bonterra: false,
                    sheets: true,
                  },
                  {
                    feature: "Export-Ready Board Reports",
                    kindora: true,
                    bloomerang: "partial",
                    salesforce: true,
                    bonterra: "partial",
                    sheets: false,
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    {/* Kindora — always green */}
                    <td className="px-6 py-4 text-center bg-blue-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2563eb] text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </td>
                    {[row.bloomerang, row.salesforce, row.bonterra, row.sheets].map((val, j) => (
                      <td key={j} className="px-6 py-4 text-center">
                        {val === true ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : val === "partial" ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              {/* Legend */}
              <tfoot>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td colSpan={6} className="px-6 py-3">
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2563eb] text-white">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        </span>
                        Full support
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-yellow-600">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>
                        </span>
                        Partial / add-on required
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-400">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                        Not available
                      </span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Strength Cards — what Kindora uniquely offers */}
          <AnimatedStrengthCards />

          {/* Bottom CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/demo"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              See Kindora in Action
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/vs-competitors"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
            >
              See full comparison
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Instrumentl deep-dive link */}
          <p className="mt-4 text-center text-sm text-gray-500">
            Choosing a grant tool? See the{" "}
            <Link
              href="/kindora/kindora-vs-instrumentl"
              className="font-semibold text-[#2563eb] hover:text-[#1d4ed8] underline underline-offset-4"
            >
              Kindora vs. Instrumentl comparison
            </Link>
            .
          </p>
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
              Everything you need to know about Kindora nonprofit management
              software.
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
            <p className="text-gray-600 mb-4">Getting started? See how to add your team.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kindora/how-to-add-users"
                className="inline-flex items-center px-6 py-4 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-colors"
              >
                How to Add Users in Kindora
              </Link>
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-6 py-4 text-sm font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── See It In Action (Screenshot Gallery) ────────────────────── */}
      <AnimatedScreenshotGallery />

      {/* ── From the Blog ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-2">Kindora Blog</p>
              <h2 className="text-3xl font-bold text-gray-900">Resources for nonprofits</h2>
              <p className="text-gray-500 mt-2 text-sm">Guides, tips, and insights to help your organization thrive.</p>
            </div>
            <Link
              href="/kindora/blog"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-colors"
            >
              View all articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                slug: "complete-guide-nonprofit-management-software",
                title: "The Complete Guide to Nonprofit Management Software in 2026",
                excerpt: "Everything you need to know before choosing a nonprofit management platform — features, pricing, and what most vendors won't tell you.",
                category: "Nonprofit Tips",
                readingTime: 12,
                gradient: "from-violet-500 to-purple-700",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                slug: "how-to-choose-donor-management-software",
                title: "How to Choose Donor Management Software: The Nonprofit's Buyer's Guide",
                excerpt: "A step-by-step framework for evaluating donor management tools — from must-have features to questions to ask every vendor.",
                category: "Donor Management",
                readingTime: 8,
                gradient: "from-rose-500 to-pink-700",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                slug: "grant-management-101-track-win-more-grants",
                title: "Grant Management 101: How to Track, Win, and Report More Grants",
                excerpt: "A practical guide to grant lifecycle management — from prospect research to compliance reporting — built for nonprofit teams.",
                category: "Grant Management",
                readingTime: 10,
                gradient: "from-blue-500 to-indigo-700",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/kindora/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${post.gradient} p-7 flex items-end justify-between`}>
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={post.icon} />
                    </svg>
                  </div>
                  <span className="text-xs text-white/70 font-medium">{post.readingTime} min read</span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">{post.category}</span>
                  <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-[#2563eb] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <span className="text-xs text-[#2563eb] font-semibold flex items-center gap-1 mt-auto">
                    Read article
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/kindora/blog"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-colors"
            >
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted & Secure Strip */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Trusted, secure, and built for nonprofits
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Kindora provides enterprise-grade security at a nonprofit-friendly price. Your organization&apos;s donor, grant, and client data is always encrypted and protected.
            </p>
          </div>
          <AnimatedTrustBadges />
          {/* Free trial callout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/10">
            {["Free trial — no credit card required", "Set up in under 30 minutes", "Cancel anytime"].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to streamline your nonprofit operations?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join organizations that trust Kindora NGO OS to manage their donors,
            track grants, deliver programs, and report impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Get Started Today
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
            <a
              href="/kindora/kindora-for-ngos"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              Kindora for NGOs →
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The All-in-One Nonprofit Management Software for NGOs of Every Size
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kindora is the all-in-one{" "}
            <a href="/kindora/features/donor-management" className="text-[#2563eb] hover:underline">
              donor management software
            </a>{" "}
            and{" "}
            <a href="/kindora/features/grant-management" className="text-[#2563eb] hover:underline">
              grant management software
            </a>{" "}
            built for modern nonprofits, social service organizations, and community NGOs. Our
            integrated platform replaces scattered spreadsheets with a unified nonprofit CRM that
            tracks every donor relationship, grant lifecycle, and program outcome in one place.
            According to Giving USA 2024, charitable giving in the United States reached $557 billion
            in 2023 — making donor management and grant tracking more critical than ever for
            nonprofit sustainability.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            From{" "}
            <a href="/kindora/features/financial-management" className="text-[#2563eb] hover:underline">
              nonprofit financial reporting
            </a>{" "}
            to{" "}
            <a href="/kindora/features/people-management" className="text-[#2563eb] hover:underline">
              volunteer management system
            </a>{" "}
            features, Kindora provides the infrastructure nonprofit teams need to scale their impact.
            Our{" "}
            <a href="/kindora/features/dashboard-analytics" className="text-[#2563eb] hover:underline">
              nonprofit dashboard software
            </a>{" "}
            delivers real-time KPIs, donation trend analytics, and program performance metrics —
            giving executive directors and board members the visibility they need without manual
            reporting.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you run a small community organization or a multi-program social services agency,
            Kindora&apos;s{" "}
            <a href="/kindora/features/campaign-management" className="text-[#2563eb] hover:underline">
              campaign management software for NGOs
            </a>{" "}
            and{" "}
            <a href="/kindora/features/client-management" className="text-[#2563eb] hover:underline">
              client management software for nonprofits
            </a>{" "}
            integrates seamlessly with your{" "}
            <a href="/kindora/features/reporting" className="text-[#2563eb] hover:underline">
              nonprofit financial reporting
            </a>{" "}
            workflows. Explore our{" "}
            <a href="/kindora/solutions/small-nonprofits" className="text-[#2563eb] hover:underline">
              solutions for small nonprofits
            </a>{" "}
            or{" "}
            <a href="/kindora/pricing" className="text-[#2563eb] hover:underline">
              view Kindora&apos;s pricing plans
            </a>{" "}
            to get started free today.
          </p>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
