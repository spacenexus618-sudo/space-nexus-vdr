import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Donor Management Software | Nonprofit Donor Tracking | Kindora",
  description:
    "Kindora donor management software helps nonprofits track donations, manage donor relationships, run campaigns, and report impact — all in one platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donor-management-software",
  },
  openGraph: {
    title: "Donor Management Software — Kindora",
    description: "Track donations, manage relationships, run campaigns, and report impact with Kindora donor management software.",
    url: "https://spacenexus.net/kindora/donor-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/icononly_transparent_nobuffer.png", width: 1200, height: 630, alt: "Kindora Donor Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Management Software — Kindora",
    description: "Donor management software built for nonprofits. Track, engage, and grow your supporter base.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "donor management software",
    "donor tracking software",
    "nonprofit donor management",
    "donor database",
    "donation management system",
    "fundraising software",
    "donor relationship management",
    "nonprofit donation tracking",
    "donor management platform",
    "online donation tracking",
    "donor engagement software",
    "charity donor management",
    "NGO donor software",
    "donor management system",
    "fundraising donor tracking",
  ],
};

const features = [
  {
    name: "Donor Profiles",
    description: "Complete donor history with giving patterns, communication logs, engagement scores, and custom fields.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Donation Tracking",
    description: "Record one-time and recurring donations, pledge tracking, in-kind gifts, and matching gifts.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    name: "Campaign Management",
    description: "Set fundraising goals, segment audiences, track progress, and measure campaign performance in real time.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    name: "Segmentation & Tags",
    description: "Segment donors by giving level, interests, geography, or custom tags for targeted outreach.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
  {
    name: "Communication Log",
    description: "Log emails, calls, meetings, and mailings. Set follow-up reminders and track every donor interaction.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "Impact Reporting",
    description: "Generate donor statements, campaign reports, and impact summaries ready for board meetings and grant compliance.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    name: "Grant Management",
    description: "Track grantors, deadlines, receipts, and compliance reporting alongside your donor management.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    name: "Data Import & Export",
    description: "Import donor data from CSV/Excel and export reports, donor lists, and statements in multiple formats.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
];

const benefits = [
  {
    title: "Replace Spreadsheets Forever",
    description: "Stop managing donors in Excel. Kindora gives you a proper donor database with automated tracking, searchable records, and real-time updates.",
    stat: "10+ hrs/week",
    statLabel: "saved on manual entry",
  },
  {
    title: "Know Every Donor Deeply",
    description: "See giving history, communication logs, engagement patterns, and personal details — all in one searchable profile.",
    stat: "360°",
    statLabel: "donor visibility",
  },
  {
    title: "Grow Donor Retention",
    description: "Segment, personalise, and automate follow-ups. Turn one-time donors into lifelong supporters.",
    stat: "2.5x",
    statLabel: "higher retention",
  },
  {
    title: "Report in Seconds",
    description: "Generate donor statements, campaign reports, and board summaries instantly — no manual data gathering.",
    stat: "90%",
    statLabel: "faster reporting",
  },
];

const crmComparison = [
  { feature: "Donor Profiles & History", kindora: true, bloomerang: true, salesforce: true, lgl: true },
  { feature: "Donation Tracking (All Types)", kindora: true, bloomerang: true, salesforce: "partial", lgl: true },
  { feature: "Campaign Goal Tracking", kindora: true, bloomerang: true, salesforce: true, lgl: true },
  { feature: "Advanced Segmentation", kindora: true, bloomerang: true, salesforce: true, lgl: "partial" },
  { feature: "Grant Lifecycle Management", kindora: true, bloomerang: false, salesforce: "partial", lgl: false },
  { feature: "Communication Logging", kindora: true, bloomerang: "partial", salesforce: true, lgl: true },
  { feature: "Volunteer Management", kindora: true, bloomerang: "partial", salesforce: "partial", lgl: false },
  { feature: "Nonprofit Accounting", kindora: true, bloomerang: false, salesforce: false, lgl: false },
  { feature: "Impact Reporting", kindora: true, bloomerang: "partial", salesforce: true, lgl: "partial" },
  { feature: "Client Case Management", kindora: true, bloomerang: false, salesforce: "partial", lgl: false },
  { feature: "Affordable for Small Nonprofits", kindora: true, bloomerang: true, salesforce: false, lgl: true },
  { feature: "No Consultants Required", kindora: true, bloomerang: true, salesforce: false, lgl: true },
];

const faqs = [
  {
    question: "What is donor management software?",
    answer:
      "Donor management software is a platform that helps nonprofits track and manage relationships with their donors. It centralizes donor contact information, giving history, communication logs, and engagement data in one searchable database. Advanced donor management tools also include campaign tracking, segmentation, reporting, and automated communications.",
  },
  {
    question: "How is Kindora different from other donor management tools?",
    answer:
      "Kindora combines donor management with grant tracking, volunteer coordination, accounting, and client case management — all in one platform. While tools like Bloomerang focus only on fundraising, Kindora gives you a complete nonprofit operating system at a similar price point.",
  },
  {
    question: "Can I import my existing donor data into Kindora?",
    answer:
      "Yes. Kindora supports importing donor data from CSV and Excel files. Whether you're migrating from spreadsheets, Bloomerang, Salesforce, or another system, we make the transition smooth.",
  },
  {
    question: "Does Kindora track recurring donations?",
    answer:
      "Yes. Kindora tracks one-time donations, recurring gifts, pledge payments, in-kind contributions, and matching gifts — with full history for each donor.",
  },
  {
    question: "Is Kindora donor management software affordable?",
    answer:
      "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade donor management features at a price nonprofits can afford. A free trial is available with no credit card required.",
  },
  {
    question: "Can I generate donor statements and tax receipts?",
    answer:
      "Yes. Kindora can generate donor statements, tax receipts, and impact summaries ready for distribution to your supporters.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donor Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donor management software for nonprofits — track donations, manage relationships, run campaigns, and report impact.",
      url: "https://spacenexus.net/kindora/donor-management-software",
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

export default function DonorManagementSoftwarePage() {
  return (
    <>
      <Script id="donor-management-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-rose-600">Donor Management Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Donor Management Software That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Deepens Relationships</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Track donations, manage donor profiles, run fundraising campaigns, and generate impact reports — all from one intuitive platform built specifically for nonprofits.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-700 rounded-full shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Donor Overview</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { initials: "JD", name: "Jane Doe", tier: "Major Donor", color: "from-rose-400 to-rose-500" },
                    { initials: "RS", name: "Robert Smith", tier: "Sustainer", color: "from-amber-400 to-amber-500" },
                    { initials: "MJ", name: "Maria Johnson", tier: "Monthly", color: "from-emerald-400 to-emerald-500" },
                    { initials: "TK", name: "Tom Kim", tier: "New", color: "from-blue-400 to-blue-500" },
                  ].map((donor) => (
                    <div key={donor.initials} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${donor.color} flex items-center justify-center text-white text-sm font-bold`}>
                        {donor.initials}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">{donor.name}</p>
                        <p className="text-xs text-gray-500">{donor.tier}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Encrypted & secure
                  </span>
                  <span>Updated in real time</span>
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
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">Why Kindora</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Donor management that works as hard as you do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stop fighting with spreadsheets and disconnected tools. Kindora gives you everything you need to manage donors effectively.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-black text-rose-500 mb-2">{b.stat}</div>
                <div className="text-xs font-semibold text-rose-500 uppercase tracking-wider mb-4">{b.statLabel}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything you need to manage donors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From donor profiles to impact reports — Kindora covers every aspect of donor management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-rose-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-rose-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">{feature.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">Comparison</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How Kindora compares</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how Kindora donor management software stacks up against the alternatives.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">Feature</th>
                  <th className="px-6 py-4 bg-rose-500 text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Best Choice</span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">Bloomerang</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">Salesforce NPC</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">Little Green Light</th>
                </tr>
              </thead>
              <tbody>
                {crmComparison.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-rose-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-500 text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </span>
                    </td>
                    {[row.bloomerang, row.salesforce, row.lgl].map((val, j) => (
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
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about donor management software.</p>
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
            Ready to transform your donor management?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join nonprofits that trust Kindora to manage their donors, track donations, and grow their impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-700 rounded-full shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-rose-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-rose-500 bg-rose-50 hover:bg-rose-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
