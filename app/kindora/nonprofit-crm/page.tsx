import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nonprofit CRM Software | Donor Management for NGOs | Kindora",
  description:
    "Kindora Nonprofit CRM: donor management, relationship tracking, fundraising campaigns, and impact reporting — all in one platform built for nonprofits and NGOs.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-crm",
  },
  openGraph: {
    title: "Nonprofit CRM Software — Kindora",
    description:
      "Track donors, manage relationships, run campaigns, and report impact with the CRM built specifically for nonprofits.",
    url: "https://spacenexus.net/kindora/nonprofit-crm",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/icononly_transparent_nobuffer.png", width: 1200, height: 630, alt: "Kindora Nonprofit CRM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit CRM Software — Kindora",
    description: "The donor CRM built for nonprofits. Track relationships, manage campaigns, and report impact.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "nonprofit CRM",
    "donor management software",
    "CRM for nonprofits",
    "nonprofit donor tracking",
    "fundraising CRM",
    "donor relationship management",
    "NGO CRM software",
    "nonprofit contact management",
    "charity CRM",
    "donor database software",
    "nonprofit fundraising platform",
    "volunteer CRM",
    "grant management CRM",
  ],
};

const crmFeatures = [
  {
    name: "Donor Profiles",
    description: "Complete donor history, communication logs, giving patterns, and engagement scores — all in one place.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Campaign Management",
    description: "Launch, track, and optimize fundraising campaigns with real-time goal tracking and donor segmentation.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    name: "Communication Hub",
    description: "Email templates, bulk messaging, communication logging, and automated follow-ups — all inside the CRM.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "Grant Tracking",
    description: "Manage the full grant lifecycle — from prospect research to award tracking to compliance reporting.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    name: "Impact Reporting",
    description: "Generate board-ready reports, donor statements, and impact summaries with a single click.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    name: "Segmentation & Tags",
    description: "Segment donors by giving level, interests, geography, or custom tags for targeted outreach.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
  {
    name: "Volunteer Management",
    description: "Track volunteer hours, skills, availability, and engagement alongside your donor data.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    name: "Financial Management",
    description: "Chart of accounts, budgets, expense tracking, and cost allocation built directly into your CRM.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
];

const benefits = [
  {
    title: "Replace Spreadsheets",
    description: "Stop juggling Excel sheets, Google Docs, and sticky notes. Kindora CRM centralizes every donor interaction in one searchable, real-time database.",
    stat: "10+ hrs/week",
    statLabel: "saved on data entry",
  },
  {
    title: "Know Your Donors",
    description: "See every gift, every interaction, every touchpoint. Understand who your supporters are, what they care about, and how to engage them deeper.",
    stat: "360°",
    statLabel: "donor views",
  },
  {
    title: "Grow Fundraising",
    description: "Segment audiences, personalise appeals, track campaign performance, and see exactly which strategies deliver the best ROI.",
    stat: "2.5x",
    statLabel: "higher donor retention",
  },
  {
    title: "Report Instantly",
    description: "Generate impact reports, board summaries, and donor statements in seconds — not days.",
    stat: "90%",
    statLabel: "faster reporting",
  },
];

const faqs = [
  {
    question: "What is a Nonprofit CRM?",
    answer:
      "A Nonprofit CRM (Constituent Relationship Management) is a software system designed specifically for nonprofits to manage relationships with donors, volunteers, grantors, and other stakeholders. Unlike generic CRMs, nonprofit CRM platforms include features like donation tracking, grant management, volunteer coordination, and impact reporting tailored to mission-driven organizations.",
  },
  {
    question: "How is Kindora different from Salesforce Nonprofit?",
    answer:
      "Kindora is purpose-built for nonprofits and significantly more affordable and easier to use than Salesforce Nonprofit Cloud. While Salesforce requires expensive consultants and months of configuration, Kindora is ready to use immediately with built-in donor management, grant tracking, campaign management, and financial features — no customisation needed.",
  },
  {
    question: "Can Kindora replace my donor database?",
    answer:
      "Yes. Kindora is designed to replace legacy donor databases, spreadsheets, and disconnected tools. It provides a complete donor management system with giving history, communication logs, segmentation, campaign tracking, and export-ready reports — all in one platform.",
  },
  {
    question: "Does Kindora include fundraising campaign management?",
    answer:
      "Yes. Kindora includes a complete campaign management module where you can set fundraising goals, track progress in real time, segment audiences, log donations, and measure campaign ROI — all within the CRM.",
  },
  {
    question: "Is Kindora CRM affordable for small nonprofits?",
    answer:
      "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade CRM features at a price nonprofits can afford. Start with a free trial — no credit card required.",
  },
  {
    question: "Can I import my existing donor data?",
    answer:
      "Yes. Kindora supports data import from CSV/Excel files, making it easy to migrate your existing donor database. Our team can also assist with data migration during onboarding.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit CRM",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit CRM software for donor management, fundraising campaigns, grant tracking, and impact reporting — built specifically for nonprofits and NGOs.",
      url: "https://spacenexus.net/kindora/nonprofit-crm",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free trial available" },
      featureList: [
        "Donor Management",
        "Campaign Management",
        "Communication Hub",
        "Grant Tracking",
        "Impact Reporting",
        "Volunteer Management",
        "Financial Management",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function NonprofitCRMPage() {
  return (
    <>
      <Script id="nonprofit-crm-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse mr-2" />
                <span className="text-sm font-medium text-[#2563eb]">Nonprofit CRM Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Nonprofit CRM Built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">Mission-Driven</span>{" "}
                Organizations
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                The donor CRM that helps nonprofits build stronger relationships, run successful campaigns, track grants, and report impact — all without expensive consultants or complex setups.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Demo
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://cad.spaceaiapp.com/kindora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Try for Free
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {["No credit card required", "Set up in 30 minutes", "Cancel anytime"].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Donor Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Total Donors", value: "2,847", change: "+12%", color: "from-blue-500 to-blue-600" },
                    { label: "Active Campaigns", value: "6", change: "+2", color: "from-amber-500 to-amber-600" },
                    { label: "Retention Rate", value: "94%", change: "+5%", color: "from-purple-500 to-purple-600" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-green-600">{stat.change}</span>
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      SOC 2 Secured
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Auto-backup
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Why Kindora CRM</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A nonprofit CRM that actually saves you time
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stop fighting with tools built for for-profit businesses. Kindora CRM is designed from the ground up for nonprofit operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-black text-[#2563eb] mb-2">{b.stat}</div>
                <div className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">{b.statLabel}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Features */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">CRM Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need in a nonprofit CRM
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From donor profiles to impact reports — Kindora CRM covers the full spectrum of nonprofit relationship management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {crmFeatures.map((feature) => (
              <Link
                key={feature.name}
                href={`/kindora/features/${feature.name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#2563eb]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-[#2563eb] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">{feature.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </Link>
            ))}
          </div>

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

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Nonprofit CRM Comparison</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The smarter choice for nonprofit CRM
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how Kindora CRM stacks up against the alternatives — including Salesforce Nonprofit Cloud.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">Feature</th>
                  <th className="px-6 py-4 bg-[#2563eb] text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Best Choice</span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">Salesforce NPC</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">Bloomerang</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">Little Green Light</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Donor Management", kindora: true, salesforce: true, bloomerang: true, lgl: true },
                  { feature: "Grant Lifecycle Tracking", kindora: true, salesforce: "partial", bloomerang: false, lgl: false },
                  { feature: "Campaign Management", kindora: true, salesforce: true, bloomerang: true, lgl: true },
                  { feature: "Client Case Management", kindora: true, salesforce: "partial", bloomerang: false, lgl: false },
                  { feature: "Nonprofit Accounting", kindora: true, salesforce: false, bloomerang: false, lgl: false },
                  { feature: "Volunteer Management", kindora: true, salesforce: "partial", bloomerang: "partial", lgl: false },
                  { feature: "Impact Reporting", kindora: true, salesforce: true, bloomerang: "partial", lgl: "partial" },
                  { feature: "No Consultants Needed", kindora: true, salesforce: false, bloomerang: true, lgl: true },
                  { feature: "Affordable Pricing", kindora: true, salesforce: false, bloomerang: true, lgl: true },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-blue-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2563eb] text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </span>
                    </td>
                    {[row.salesforce, row.bloomerang, row.lgl].map((val, j) => (
                      <td key={j} className="px-6 py-4 text-center">
                        {val === true ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          </span>
                        ) : val === "partial" ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about Kindora Nonprofit CRM.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your donor relationships?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join nonprofits that trust Kindora CRM to manage donors, run campaigns, track grants, and report impact — all from one platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
