import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CRM for Nonprofits | Donor Relationship Management Software | Kindora",
  description:
    "Kindora is the CRM for nonprofits — donor management, fundraising campaigns, grant tracking, volunteer coordination, and impact reporting in one affordable platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/crm-for-nonprofits",
  },
  openGraph: {
    title: "CRM for Nonprofits — Kindora",
    description:
      "The CRM purpose-built for nonprofits. Manage donors, run campaigns, track grants, and report impact — all in one platform.",
    url: "https://spacenexus.net/kindora/crm-for-nonprofits",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/icononly_transparent_nobuffer.png", width: 1200, height: 630, alt: "Kindora CRM for Nonprofits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM for Nonprofits — Kindora",
    description: "The CRM purpose-built for nonprofits. Donor management, campaigns, grants, and impact reporting.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "CRM for nonprofits",
    "nonprofit donor management",
    "donor CRM",
    "nonprofit fundraising software",
    "constituent relationship management",
    "nonprofit contact database",
    "NGO donor tracking",
    "charity CRM software",
    "fundraising CRM for nonprofits",
    "donor engagement platform",
    "nonprofit donor analytics",
    "grant management CRM",
    "volunteer management CRM",
    "affordable nonprofit CRM",
  ],
};

const capabilities = [
  {
    title: "Donor Management",
    description: "Complete donor profiles with giving history, communication logs, engagement scoring, and segmentation.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Fundraising Campaigns",
    description: "Set goals, segment audiences, track donations, and measure campaign ROI in real time.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Grant Lifecycle Management",
    description: "Track grants from prospect to close-out with deadline reminders, receipt tracking, and compliance reporting.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Communication Tools",
    description: "Email templates, bulk messaging, communication logging, and automated follow-up sequences.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Volunteer Coordination",
    description: "Track volunteer hours, skills, availability, and engagement alongside donor data.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Impact & Board Reporting",
    description: "Generate professional reports, donor statements, and impact summaries ready for board meetings.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Nonprofit Accounting",
    description: "Chart of accounts, budgets, expense tracking, and cost allocation built into your CRM.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Data Import & Export",
    description: "Import existing donor data from CSV/Excel and export reports in PDF or Excel format.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
];

const whyChoose = [
  { number: "01", title: "Built for nonprofits, not enterprises", description: "Kindora CRM is designed specifically for nonprofit workflows — not a scaled-down version of an enterprise CRM." },
  { number: "02", title: "Affordable from day one", description: "Enterprise-grade features at a price nonprofits can actually afford. Free trial available — no credit card needed." },
  { number: "03", title: "Ready in minutes, not months", description: "No consultants, no customisation, no complex setup. Start using Kindora CRM in under 30 minutes." },
  { number: "04", title: "All-in-one platform", description: "Donor management, campaigns, grants, accounting, volunteers, and reporting — all in one unified system." },
  { number: "05", title: "Real-time insights", description: "Live dashboards, donor analytics, and campaign tracking so you always know where you stand." },
  { number: "06", title: "Enterprise-grade security", description: "SOC 2 compliant, encrypted data, role-based access control, and automated backups." },
];

const faqs = [
  {
    question: "What is a CRM for nonprofits?",
    answer:
      "A CRM (Constituent Relationship Management) for nonprofits is a software platform that helps organizations manage interactions with donors, volunteers, grantors, and other stakeholders. Unlike business CRMs, nonprofit CRMs include features like donation tracking, fundraising campaign management, grant lifecycle management, volunteer coordination, and impact reporting.",
  },
  {
    question: "Why do nonprofits need a dedicated CRM?",
    answer:
      "Generic CRMs like Salesforce or HubSpot are designed for sales teams and for-profit businesses. Nonprofits need specialized features like donor segmentation, campaign goal tracking, grant compliance reporting, volunteer hour tracking, and cost allocation — features that purpose-built nonprofit CRMs like Kindora provide out of the box.",
  },
  {
    question: "How is Kindora different from Salesforce Nonprofit Cloud?",
    answer:
      "Salesforce Nonprofit Cloud requires expensive consultants, months of setup, and ongoing customisation costs. Kindora is ready to use immediately, costs a fraction of the price, and includes nonprofit-specific features like grant lifecycle management, client case management, and cost allocation — features that require expensive add-ons in Salesforce.",
  },
  {
    question: "Can Kindora replace my current donor database?",
    answer:
      "Yes. Kindora is a complete donor management system that can replace legacy databases, spreadsheets, and multiple disconnected tools. Import your existing data via CSV/Excel and get started quickly with a unified CRM.",
  },
  {
    question: "Is Kindora suitable for small nonprofits?",
    answer:
      "Absolutely. Kindora is designed for small to mid-sized nonprofits. It's affordable, easy to set up, and includes all the features you need without requiring a dedicated IT team or expensive consultants.",
  },
  {
    question: "Does Kindora integrate with other tools?",
    answer:
      "Kindora supports data import/export via CSV and Excel. As an all-in-one platform, it reduces the need for integrations by including donor management, campaigns, grants, accounting, and reporting in a single system.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora CRM for Nonprofits",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "CRM for nonprofits: donor management, fundraising campaigns, grant tracking, volunteer coordination, and impact reporting in one affordable platform.",
      url: "https://spacenexus.net/kindora/crm-for-nonprofits",
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

export default function CRMForNonprofitsPage() {
  return (
    <>
      <Script id="crm-for-nonprofits-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse mr-2" />
              <span className="text-sm font-medium text-[#2563eb]">CRM for Nonprofits</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              The CRM for Nonprofits Built{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">Different</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Kindora is the CRM purpose-built for nonprofits. Manage donor relationships, run fundraising campaigns, track grants, coordinate volunteers, and report impact — all without enterprise complexity or enterprise pricing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Set up in 30 minutes
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                SOC 2 compliant
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "12+", label: "Core CRM Modules" },
              { value: "100%", label: "Cloud-based" },
              { value: "30 min", label: "Average Setup Time" },
              { value: "Free", label: "Trial Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-[#2563eb] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">CRM Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything a nonprofit CRM should be
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kindora combines donor management, fundraising, grants, volunteers, finances, and reporting into one seamless platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#2563eb]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-[#2563eb] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cap.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">{cap.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Why Choose Kindora</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The CRM built by nonprofit people, for nonprofit people
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the challenges nonprofits face — because we&apos;ve been there. Kindora CRM is designed to solve them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div key={item.number} className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#2563eb]/20 hover:shadow-md transition-all duration-300">
                <div className="text-4xl font-black text-[#2563eb]/20 mb-3">{item.number}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">CRM Comparison</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Kindora compares to other nonprofit CRMs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Not all CRMs are created equal. See why Kindora is the smarter choice for nonprofits.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">Capability</th>
                  <th className="px-6 py-4 bg-[#2563eb] text-white font-bold text-center min-w-[140px]">
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
                  { feature: "Grant Tracking", kindora: true, sf: "partial", bloomerang: false, hubspot: false },
                  { feature: "Fundraising Campaigns", kindora: true, sf: true, bloomerang: true, hubspot: "partial" },
                  { feature: "Client Case Management", kindora: true, sf: "partial", bloomerang: false, hubspot: false },
                  { feature: "Nonprofit Accounting", kindora: true, sf: false, bloomerang: false, hubspot: false },
                  { feature: "Volunteer Management", kindora: true, sf: "partial", bloomerang: "partial", hubspot: false },
                  { feature: "Impact Reporting", kindora: true, sf: true, bloomerang: "partial", hubspot: false },
                  { feature: "Nonprofit-Specific", kindora: true, sf: "partial", bloomerang: true, hubspot: false },
                  { feature: "Affordable Pricing", kindora: true, sf: false, bloomerang: true, hubspot: "partial" },
                  { feature: "Quick Setup (No Consultants)", kindora: true, sf: false, bloomerang: true, hubspot: true },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-blue-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2563eb] text-white">
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

      {/* Use Cases */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Who It&apos;s For</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A CRM for every type of nonprofit
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re a social service agency, community organization, or faith-based nonprofit — Kindora adapts to your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Social Services", description: "Manage client intake, case notes, program enrollments, and outcome tracking alongside donor data." },
              { name: "Community Organizations", description: "Track membership, event participation, donations, and volunteer engagement all in one CRM." },
              { name: "Youth & Education", description: "Enroll participants, track program outcomes, manage grants, and communicate with families." },
              { name: "Faith-Based Nonprofits", description: "Manage congregant giving, event registrations, volunteer rosters, and community outreach programs." },
              { name: "Housing & Homeless Services", description: "Coordinate client services, track grant compliance, manage donations, and report program impact." },
              { name: "Health & Human Services", description: "Secure client records, grant reporting, volunteer scheduling, and donor management in one platform." },
            ].map((useCase) => (
              <div key={useCase.name} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <h3 className="font-bold text-gray-900 mb-2">{useCase.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about Kindora CRM for nonprofits.</p>
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
            Ready to find the CRM your nonprofit deserves?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Stop fighting with tools built for businesses. Start using a CRM built for your mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Request a Demo
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
