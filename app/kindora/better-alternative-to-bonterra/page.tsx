import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Better Alternative to Bonterra | All-in-One Nonprofit Platform",
  description:
    "Bonterra handles case management — but ignores your donors, grants, and finances. Kindora is the better alternative: case management, donor CRM, grant tracking, and accounting in one platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/better-alternative-to-bonterra",
  },
  openGraph: {
    title: "Better Alternative to Bonterra",
    description:
      "Bonterra only handles case management. Kindora is the better alternative — case management, donor CRM, grant tracking, and nonprofit accounting in one affordable platform.",
    url: "https://spacenexus.net/kindora/better-alternative-to-bonterra",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/icononly_transparent_nobuffer.png",
        width: 1200,
        height: 630,
        alt: "Better Alternative to Bonterra — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Alternative to Bonterra",
    description:
      "Why nonprofits are choosing Kindora over Bonterra. Case management + donor CRM + grants + accounting — one platform, one price.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "better alternative to bonterra",
    "bonterra alternative",
    "bonterra competitor",
    "switch from bonterra",
    "bonterra vs kindora",
    "bonterra apricot alternative",
    "nonprofit case management alternative",
    "bonterra replacement",
    "best bonterra alternative 2026",
    "bonterra pricing alternative",
    "affordable bonterra alternative",
    "bonterra vs",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Better Alternative to Bonterra",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "The better alternative to Bonterra. Case management, donor CRM, grant tracking, nonprofit accounting, and volunteer management — all in one affordable platform.",
      url: "https://spacenexus.net/kindora/better-alternative-to-bonterra",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free trial available",
      },
      featureList: [
        "Client case management",
        "Donor CRM & engagement scoring",
        "Grant lifecycle management",
        "Nonprofit accounting with cost allocation",
        "Volunteer management",
        "Communications hub",
        "Campaign & fundraising tools",
        "Outcome tracking & reporting",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is Kindora a better alternative to Bonterra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bonterra only handles case management. If your nonprofit also fundraises, manages grants, or needs accounting, you'll end up paying for 3–4 separate tools. Kindora does all of that in one platform at an affordable price — making it the better choice for organizations that need more than just case management.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora have the same case management as Bonterra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora includes client intake, service delivery tracking, outcome measurement, and program reporting — everything Bonterra Apricot offers. Plus Kindora adds donor CRM, grant management, accounting, and volunteer tools that Bonterra doesn't have.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Kindora cost compared to Bonterra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora is priced for small to mid-sized nonprofits and includes features that would require separate subscriptions with Bonterra. You get case management, donor CRM, grant tracking, and accounting in one subscription — saving money compared to Bonterra plus additional tools.",
          },
        },
        {
          "@type": "Question",
          name: "Can I switch from Bonterra to Kindora easily?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports data import from Bonterra and other case management platforms. Our team helps you migrate client records, program data, and outcome measurements. Most organizations are live on Kindora within a week.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Kindora different from Bonterra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bonterra is a case management tool with basic donor tracking bolted on. Kindora is a complete nonprofit operating system — purpose-built to handle case management, donor relationships, grant management, accounting, volunteers, and communications in one integrated platform.",
          },
        },
      ],
    },
  ],
};

const comparisonRows = [
  {
    feature: "Client Case Management",
    kindora: { value: "Full intake, services, and outcomes", positive: true },
    bonterra: { value: "Strong case management", positive: true },
  },
  {
    feature: "Donor CRM & Engagement",
    kindora: { value: "Full CRM with scoring & alerts", positive: true },
    bonterra: { value: "Not available", positive: false },
  },
  {
    feature: "Grant Lifecycle Management",
    kindora: { value: "Prospect to award to compliance", positive: true },
    bonterra: { value: "Not available", positive: false },
  },
  {
    feature: "Nonprofit Accounting",
    kindora: { value: "Built-in with cost allocation", positive: true },
    bonterra: { value: "Not available", positive: false },
  },
  {
    feature: "Volunteer Management",
    kindora: { value: "Scheduling, hours, recognition", positive: true },
    bonterra: { value: "Not available", positive: false },
  },
  {
    feature: "Communications Hub",
    kindora: { value: "Built-in email & bulk messaging", positive: true },
    bonterra: { value: "Not available", positive: false },
  },
  {
    feature: "Campaign & Fundraising",
    kindora: { value: "Full campaign creation & tracking", positive: true },
    bonterra: { value: "Not available", positive: false },
  },
  {
    feature: "Outcome Tracking",
    kindora: { value: "Program outcomes with dashboards", positive: true },
    bonterra: { value: "Strong outcome reporting", positive: true },
  },
  {
    feature: "Setup Time",
    kindora: { value: "30 minutes — no consultants", positive: true },
    bonterra: { value: "Weeks — requires implementation", positive: false },
  },
  {
    feature: "Pricing",
    kindora: { value: "Affordable for small nonprofits", positive: true },
    bonterra: { value: "Expensive for small teams", positive: false },
  },
];

const whyKindoraWins = [
  {
    title: "Case Management + Donor CRM",
    description:
      "Bonterra handles cases but ignores donors. Kindora does both — track clients AND fundraise from one platform.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Grant Tracking Built In",
    description:
      "Track grants from prospect to award to compliance — directly connected to your case management data.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Nonprofit Accounting",
    description:
      "Built-in accounting with cost allocation, fund accounting, and board-ready financial reports. No QuickBooks needed.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "One Platform, One Price",
    description:
      "Stop paying for Bonterra plus a donor CRM, grant tracker, and accounting tool. Kindora replaces them all.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const faqs = [
  {
    question: "Why is Kindora a better alternative to Bonterra?",
    answer:
      "Bonterra only handles case management. If your nonprofit also fundraises, manages grants, or needs accounting, you'll end up paying for 3–4 separate tools. Kindora does all of that in one platform at an affordable price — making it the better choice for organizations that need more than just case management.",
  },
  {
    question: "Does Kindora have the same case management as Bonterra?",
    answer:
      "Yes. Kindora includes client intake, service delivery tracking, outcome measurement, and program reporting — everything Bonterra Apricot offers. Plus Kindora adds donor CRM, grant management, accounting, and volunteer tools that Bonterra doesn't have.",
  },
  {
    question: "How much does Kindora cost compared to Bonterra?",
    answer:
      "Kindora is priced for small to mid-sized nonprofits and includes features that would require separate subscriptions with Bonterra. You get case management, donor CRM, grant tracking, and accounting in one subscription — saving money compared to Bonterra plus additional tools.",
  },
  {
    question: "Can I switch from Bonterra to Kindora easily?",
    answer:
      "Yes. Kindora supports data import from Bonterra and other case management platforms. Our team helps you migrate client records, program data, and outcome measurements. Most organizations are live on Kindora within a week.",
  },
  {
    question: "What makes Kindora different from Bonterra?",
    answer:
      "Bonterra is a case management tool with basic donor tracking bolted on. Kindora is a complete nonprofit operating system — purpose-built to handle case management, donor relationships, grant management, accounting, volunteers, and communications in one integrated platform.",
  },
  {
    question: "What does Kindora do that Bonterra doesn't?",
    answer:
      "Kindora adds donor CRM with engagement scoring, grant lifecycle management, nonprofit accounting with cost allocation, volunteer management, campaign tools, and a built-in communications hub. These are features Bonterra simply doesn't offer.",
  },
];

export default function BetterAlternativeToBonterraPage() {
  return (
    <>
      <Script
        id="better-alternative-to-bonterra-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/30 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-orange-600">
                  Better Than Bonterra
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                A{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                  Better Alternative
                </span>{" "}
                to Bonterra
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Bonterra handles case management — but ignores your donors,
                grants, and finances. Kindora is the better choice: case
                management, donor CRM, grant tracking, and accounting in one
                affordable platform.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://cad.spaceaiapp.com/kindora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Try Kindora Free
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
                </a>
                <Link
                  href="/kindora/demo"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Request a Demo
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {[
                  "No credit card required",
                  "Setup in 30 minutes",
                  "Cancel anytime",
                ].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-green-500"
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
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual - The Problem with Bonterra */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-gray-900">
                    The Bonterra Problem
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                    Incomplete
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { feature: "Case Management", bonterra: true, kindora: true },
                    { feature: "Donor CRM", bonterra: false, kindora: true },
                    { feature: "Grant Tracking", bonterra: false, kindora: true },
                    { feature: "Nonprofit Accounting", bonterra: false, kindora: true },
                    { feature: "Volunteer Tools", bonterra: false, kindora: true },
                    { feature: "Communications", bonterra: false, kindora: true },
                    { feature: "Campaign Tools", bonterra: false, kindora: true },
                    { feature: "Board Reports", bonterra: false, kindora: true },
                  ].map((row) => (
                    <div
                      key={row.feature}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {row.feature}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500 w-16 text-right">
                          Bonterra
                        </span>
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${row.bonterra ? "bg-green-100 text-green-600" : "bg-red-100 text-red-400"}`}
                        >
                          {row.bonterra ? (
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </span>
                        <span className="text-xs text-gray-500 w-16 text-right">
                          Kindora
                        </span>
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${row.kindora ? "bg-[#2563eb] text-white" : "bg-red-100 text-red-400"}`}
                        >
                          {row.kindora ? (
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <span className="text-sm text-gray-500">
                    Bonterra:{" "}
                    <span className="font-bold text-orange-500">1/8</span>{" "}
                    features · Kindora:{" "}
                    <span className="font-bold text-[#2563eb]">8/8</span>{" "}
                    features
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kindora Wins Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Why Kindora Wins
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bonterra does cases. Kindora does everything.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If your nonprofit also fundraises, manages grants, or needs
              accounting — you&apos;ve outgrown Bonterra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyKindoraWins.map((reason) => (
              <div
                key={reason.title}
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
                      d={reason.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
              <span>Feature Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Kindora vs Bonterra — Feature by Feature
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              See why Kindora is the better choice for nonprofits that need
              more than case management.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">
                    Feature
                  </th>
                  <th className="px-6 py-4 bg-[#2563eb] text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                        Better Choice
                      </span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[140px]">
                    Bonterra
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50/50">
                      {row.kindora.positive ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2563eb] text-white">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                      <span className="block text-xs text-gray-500 mt-1 max-w-[160px] mx-auto">
                        {row.kindora.value}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.bonterra.positive ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                      <span className="block text-xs text-gray-500 mt-1 max-w-[160px] mx-auto">
                        {row.bonterra.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td colSpan={3} className="px-6 py-3">
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2563eb] text-white">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        Full support
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-400">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
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

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Switch to Kindora — Free Trial
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
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
              Common questions about switching from Bonterra to Kindora.
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
            Ready to choose the better alternative?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora today. Everything Bonterra does for case
            management — plus donor CRM, grants, accounting, and more.
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
