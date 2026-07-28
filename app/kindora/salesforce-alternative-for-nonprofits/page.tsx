import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Salesforce Alternative for Nonprofits",
  description:
    "Kindora is the all-in-one Salesforce alternative for nonprofits — donor management, fundraising, grants, volunteers, and reporting without the complexity or consulting fees.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/salesforce-alternative-for-nonprofits",
  },
  openGraph: {
    title: "Salesforce Alternative for Nonprofits",
    description: "All-in-one nonprofit software without Salesforce complexity — donor management, fundraising, grants, and volunteers.",
    url: "https://spacenexus.net/kindora/salesforce-alternative-for-nonprofits",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/icononly_transparent_nobuffer.png", width: 1200, height: 630, alt: "Kindora Salesforce Alternative for Nonprofits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Alternative for Nonprofits",
    description: "All-in-one nonprofit software without Salesforce complexity — donor management, fundraising, grants, and volunteers.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "salesforce alternative for nonprofits",
    "salesforce nonprofit alternative",
    "alternative to salesforce for nonprofits",
    "nonprofit crm alternative to salesforce",
    "salesforce nonprofit cloud alternative",
    "cheaper salesforce alternative nonprofits",
    "easy salesforce alternative nonprofit",
    "salesforce nonprofit competitor",
    "donor management alternative salesforce",
    "nonprofit software alternative salesforce",
    "salesforce npo alternative",
    "best salesforce alternative nonprofits",
    "salesforce replacement nonprofits",
    "nonprofit crm not salesforce",
    "simple salesforce alternative",
  ],
};

const painPoints = [
  {
    title: "No Consulting Fees",
    description: "Salesforce often requires expensive consultants for setup and customisation. Kindora works out of the box.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "No Complex Setup",
    description: "Salesforce takes months to configure. Kindora sets up in 30 minutes with guided onboarding.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Purpose-Built for Nonprofits",
    description: "Salesforce is generic software adapted for nonprofits. Kindora is built specifically for nonprofit workflows.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "All-in-One Platform",
    description: "Donor management, fundraising, grants, volunteers, programmes, and financials — everything in one system.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];

const features = [
  {
    title: "Donor Management",
    description: "Complete donor profiles, giving history, engagement scoring, and communication tracking.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Fundraising",
    description: "Campaign pages, peer-to-peer, recurring giving, text-to-give, and event fundraising.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Grant Management",
    description: "Track applications, deadlines, budgets, reports, and compliance in one place.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Volunteer Management",
    description: "Recruit, schedule, track hours, and recognise volunteers — all connected to your CRM.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Programme Management",
    description: "Track programme outcomes, beneficiary data, and service delivery alongside fundraising.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Financial Management",
    description: "Budget tracking, expense management, financial reporting, and fund accounting built in.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Reporting & Analytics",
    description: "Real-time dashboards, custom reports, and analytics across all operations.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Email & Communication",
    description: "Email marketing, automated sequences, and communication tracking — no third-party tools needed.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

const comparisonData = [
  { feature: "Setup Time", kindora: "30 minutes", salesforce: "3-6 months", blackbaud: "1-3 months", neontwo: "1-2 weeks" },
  { feature: "Consulting Required", kindora: "No", salesforce: "Often", blackbaud: "Sometimes", neontwo: "No" },
  { feature: "Donor Management", kindora: true, salesforce: true, blackbaud: true, neontwo: true },
  { feature: "Fundraising", kindora: true, salesforce: true, blackbaud: true, neontwo: true },
  { feature: "Grant Management", kindora: true, salesforce: true, blackbaud: "partial", neontwo: false },
  { feature: "Volunteer Management", kindora: true, salesforce: true, blackbaud: false, neontwo: true },
  { feature: "Programme Management", kindora: true, salesforce: true, blackbaud: "partial", neontwo: false },
  { feature: "Financial Management", kindora: true, salesforce: false, blackbaud: true, neontwo: false },
];

const faqs = [
  {
    question: "Why switch from Salesforce to Kindora?",
    answer:
      "Salesforce is powerful but complex, expensive, and often requires consultants. Kindora provides the same core functionality — donor management, fundraising, grants, and volunteers — in an all-in-one platform that sets up in 30 minutes without consulting fees.",
  },
  {
    question: "Does Kindora have everything Salesforce offers?",
    answer:
      "Kindora covers all core nonprofit operations: donor management, fundraising, grant management, volunteer tracking, programme reporting, and financial management. For advanced CRM customisation or enterprise needs, Salesforce may still be appropriate.",
  },
  {
    question: "How much does Kindora cost compared to Salesforce?",
    answer:
      "Kindora is significantly more affordable than Salesforce. Salesforce requires licences, add-ons, and often consulting fees. Kindora provides all-in-one pricing with no hidden costs.",
  },
  {
    question: "Can I migrate data from Salesforce to Kindora?",
    answer:
      "Yes. Kindora provides data import tools and migration support to help you move your donor data, donation history, and campaign records from Salesforce.",
  },
  {
    question: "Is Kindora easier to use than Salesforce?",
    answer:
      "Yes. Kindora is purpose-built for nonprofits with intuitive workflows. Salesforce is a general-purpose CRM that requires significant customisation for nonprofit use.",
  },
  {
    question: "Does Kindora integrate with other tools?",
    answer:
      "Yes. Kindora includes API access and integrates with popular tools for email, accounting, and websites — though the all-in-one approach means you need fewer integrations.",
  },
];

const platformStats = [
  { metric: "30 min", label: "Setup time" },
  { metric: "0", label: "Consulting fees" },
  { metric: "All-in-one", label: "Platform" },
  { metric: "10x", label: "Easier to use" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora - Salesforce Alternative for Nonprofits",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Salesforce alternative for nonprofits \u2014 all-in-one donor management, fundraising, grants, volunteers, and reporting.",
      url: "https://spacenexus.net/kindora/salesforce-alternative-for-nonprofits",
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

export default function SalesforceAlternativeForNonprofitsPage() {
  return (
    <>
      <Script id="salesforce-alternative-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-indigo-600">Salesforce Alternative</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                The Salesforce Alternative{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">Built for Nonprofits</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                All the power of Salesforce without the complexity, consulting fees, or months of setup. Donor management, fundraising, grants, volunteers, and reporting — all in one platform that works out of the box.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://cad.spaceaiapp.com/kindora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-indigo-700 rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Try for Free
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Request a Demo
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {["No credit card required", "Set up in 30 minutes", "No consulting fees"].map((text) => (
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
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Why Switch?</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {painPoints.map((point) => (
                    <div key={point.title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={point.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{point.title}</p>
                        <p className="text-xs text-gray-500">{point.description}</p>
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
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-indigo-500 mb-1">{stat.metric}</div>
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
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">All-in-One Platform</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything Salesforce Does, Without the Complexity</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Donor management, fundraising, grants, volunteers, programmes, and financials — all built in, not bolted on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-indigo-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-indigo-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">How We Compare</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Salesforce for Nonprofits</h2>
            <p className="text-lg text-gray-600">See why nonprofits are switching from Salesforce to Kindora.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-indigo-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Salesforce</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Blackbaud</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Neon CRM</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i < comparisonData.length - 1 ? "border-b border-gray-50" : ""}>
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{row.feature}</td>
                      {(["kindora", "salesforce", "blackbaud", "neontwo"] as const).map((key) => {
                        const val = row[key];
                        if (typeof val === "string") {
                          return <td key={key} className="py-4 px-6 text-center text-sm text-gray-600">{val}</td>;
                        }
                        return (
                          <td key={key} className="py-4 px-6 text-center">
                            {val ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Switch from Salesforce?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join nonprofits that switched from Salesforce to Kindora for simpler, more affordable operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-indigo-600 bg-white hover:bg-indigo-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Free Trial
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300"
            >
              Request a Demo
            </Link>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
