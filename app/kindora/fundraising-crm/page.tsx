import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Fundraising CRM | Donor & Campaign Management | Kindora",
  description:
    "Kindora Fundraising CRM combines donor relationship management with campaign tracking, donation management, and impact reporting in one platform built for nonprofits.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/fundraising-crm",
  },
  openGraph: {
    title: "Fundraising CRM — Kindora",
    description: "Fundraising CRM for nonprofits — manage donors, run campaigns, track gifts, and report impact from one platform.",
    url: "https://spacenexus.net/kindora/fundraising-crm",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/icononly_transparent_nobuffer.png", width: 1200, height: 630, alt: "Kindora Fundraising CRM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundraising CRM — Kindora",
    description: "Fundraising CRM for nonprofits. Donor management, campaign tracking, and impact reporting — all in one.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "fundraising CRM",
    "fundraising donor management",
    "nonprofit fundraising CRM",
    "campaign CRM",
    "donor CRM fundraising",
    "fundraising relationship management",
    "nonprofit campaign CRM",
    "donor management for fundraising",
    "fundraising platform CRM",
    "charity fundraising CRM",
    "NGO fundraising CRM",
    "fundraising database",
    "fundraising donor tracking",
    "campaign donor management",
    "fundraising engagement CRM",
  ],
};

const crmFeatures = [
  {
    title: "Donor Relationship Management",
    description: "Complete donor profiles with giving history, communication logs, engagement scoring, and segmentation for targeted outreach.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Campaign Management",
    description: "Create, launch, and track multiple fundraising campaigns with real-time progress toward goals.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Donation Tracking",
    description: "Record and manage all gift types — one-time, recurring, pledges, in-kind, and matching gifts.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Segmentation & Targeting",
    description: "Segment donors by giving level, interests, location, engagement, and custom criteria for personalized outreach.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
  {
    title: "Communication Hub",
    description: "Email templates, bulk messaging, automated follow-ups, and full communication logging integrated with donor profiles.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Grant Management",
    description: "Track grantors, application deadlines, award amounts, receipts, and compliance alongside fundraising data.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Event Fundraising",
    description: "Manage fundraising events, sell tickets, track attendance, and measure event ROI within your CRM.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Analytics & Reporting",
    description: "Campaign performance, donor lifetime value, retention rates, and board-ready reports in seconds.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stats = [
  { metric: "8+", label: "CRM modules" },
  { metric: "360°", label: "Donor views" },
  { metric: "All", label: "Donation types" },
  { metric: "1", label: "Platform" },
];

const faqs = [
  {
    question: "What is a Fundraising CRM?",
    answer:
      "A Fundraising CRM is a customer relationship management platform designed specifically for nonprofit fundraising. It combines donor management with campaign tracking, donation processing, communication tools, and reporting — giving fundraising teams a complete view of their supporters and campaigns.",
  },
  {
    question: "How is Kindora different from Salesforce for fundraising?",
    answer:
      "Salesforce requires expensive consultants, extensive customization, and ongoing maintenance. Kindora is purpose-built for nonprofits, ready to use in minutes, and includes fundraising-specific features like grant tracking, cost allocation, and client case management that Salesforce charges extra for.",
  },
  {
    question: "Can Kindora track donor engagement across campaigns?",
    answer:
      "Yes. Kindora tracks every donor interaction — donations, communications, event attendance, volunteer hours — across all campaigns. You can see a donor's complete history in one profile.",
  },
  {
    question: "Does Kindora support multi-campaign fundraising?",
    answer:
      "Yes. Kindora lets you run multiple campaigns simultaneously with separate goals, tracking, and reporting. Donors can contribute to multiple campaigns with full attribution.",
  },
  {
    question: "Can I generate reports for my board?",
    answer:
      "Yes. Kindora includes reporting tools that generate campaign summaries, donor analytics, giving trends, and impact reports — all ready for board meetings and stakeholder presentations.",
  },
  {
    question: "Is Kindora affordable for small fundraising teams?",
    answer:
      "Absolutely. Kindora is priced for small to mid-sized nonprofits. You get enterprise-grade fundraising CRM features without enterprise pricing or implementation costs.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Fundraising CRM",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Fundraising CRM for nonprofits — donor management, campaign tracking, donation management, and reporting in one platform.",
      url: "https://spacenexus.net/kindora/fundraising-crm",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free trial available" },
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

export default function FundraisingCRMPage() {
  return (
    <>
      <Script id="fundraising-crm-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-pink-600">Fundraising CRM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Fundraising CRM That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">Knows Your Donors</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                A Fundraising CRM that combines donor relationship management, campaign tracking, donation processing, and impact reporting — giving your team one place to manage every aspect of fundraising.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-700 rounded-full shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Fundraising CRM</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Active Campaigns", value: "6" },
                    { label: "Total Donors", value: "2,847" },
                    { label: "Gifts This Month", value: "412" },
                    { label: "Retention Rate", value: "94%" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-0.5">{stat.label}</p>
                      <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Top Donors</p>
                  {[
                    { name: "Jane D.", tier: "Major Donor", gifts: "12" },
                    { name: "Robert S.", tier: "Sustainer", gifts: "24" },
                    { name: "Maria J.", tier: "Monthly", gifts: "8" },
                  ].map((donor) => (
                    <div key={donor.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                        <span className="text-sm font-semibold text-gray-900">{donor.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500">{donor.tier}</span>
                        <span className="text-xs text-gray-400 ml-2">{donor.gifts} gifts</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-pink-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-pink-500 uppercase tracking-wider mb-3">CRM Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">The fundraising CRM built for nonprofits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Donor management, campaigns, communications, and analytics — all connected in one CRM.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {crmFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-pink-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-pink-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-pink-500 uppercase tracking-wider mb-3">CRM Comparison</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Kindora wins for fundraising</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how Kindora Fundraising CRM compares to the alternatives.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">Feature</th>
                  <th className="px-6 py-4 bg-pink-500 text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Best Value</span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">Salesforce</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">Bloomerang</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">HubSpot</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Donor Management", kindora: true, sf: true, bloomerang: true, hubspot: true },
                  { feature: "Campaign Tracking", kindora: true, sf: true, bloomerang: true, hubspot: "partial" },
                  { feature: "Donation Processing", kindora: true, sf: "partial", bloomerang: true, hubspot: false },
                  { feature: "Grant Lifecycle Management", kindora: true, sf: "partial", bloomerang: false, hubspot: false },
                  { feature: "Client Case Management", kindora: true, sf: "partial", bloomerang: false, hubspot: false },
                  { feature: "Nonprofit Accounting", kindora: true, sf: false, bloomerang: false, hubspot: false },
                  { feature: "Volunteer Management", kindora: true, sf: "partial", bloomerang: "partial", hubspot: false },
                  { feature: "Impact Reporting", kindora: true, sf: true, bloomerang: "partial", hubspot: false },
                  { feature: "Cost Allocation", kindora: true, sf: false, bloomerang: false, hubspot: false },
                  { feature: "Affordable Pricing", kindora: true, sf: false, bloomerang: true, hubspot: "partial" },
                  { feature: "No Consultants Needed", kindora: true, sf: false, bloomerang: true, hubspot: true },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-pink-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-pink-500 text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </span>
                    </td>
                    {[row.sf, row.bloomerang, row.hubspot].map((val, j) => (
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
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-pink-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about Kindora Fundraising CRM.</p>
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
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your fundraising with a real CRM?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Stop juggling spreadsheets and disconnected tools. Start using a Fundraising CRM built for nonprofits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-700 rounded-full shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-pink-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-pink-500 bg-pink-50 hover:bg-pink-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
