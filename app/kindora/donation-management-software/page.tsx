import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Donation Management Software | Track & Manage Gifts | Kindora",
  description:
    "Kindora donation management software helps nonprofits track one-time and recurring donations, pledges, in-kind gifts, and matching gifts — all in one platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donation-management-software",
  },
  openGraph: {
    title: "Donation Management Software — Kindora",
    description: "Track every gift with Kindora's donation management software — one-time, recurring, pledges, in-kind, and more.",
    url: "https://spacenexus.net/kindora/donation-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/icononly_transparent_nobuffer.png", width: 1200, height: 630, alt: "Kindora Donation Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donation Management Software — Kindora",
    description: "Track and manage all donation types with Kindora — one-time, recurring, pledges, and in-kind gifts.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "donation management software",
    "donation tracking system",
    "nonprofit donation management",
    "online donation tracking",
    "gift management software",
    "pledge management system",
    "recurring donation tracking",
    "donation management platform",
    "fundraising donation tracking",
    "charity donation software",
    "NGO donation management",
    "donation recording software",
    "gift entry software",
    "donation database",
    "nonprofit gift tracking",
  ],
};

const donationFeatures = [
  {
    title: "One-Time Donations",
    description: "Record single gifts with full donor details, payment method, and campaign attribution.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Recurring Gifts",
    description: "Manage monthly, quarterly, and annual giving programs. Track active, paused, and lapsed subscriptions.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Pledge Management",
    description: "Track pledges, payment schedules, fulfillment status, and send automated payment reminders.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "In-Kind Contributions",
    description: "Record non-cash donations including goods, services, and pro-bono work with fair market value tracking.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Matching Gifts",
    description: "Track corporate matching gift programs, eligibility, and fulfillment status.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Campaign Attribution",
    description: "Track which campaigns drive donations. Measure fundraising performance and ROI by campaign.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Donor Receipting",
    description: "Generate tax receipts and donor statements automatically. Customizable templates for any donation type.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Donation Reports",
    description: "Generate giving summaries, campaign reports, donor statements, and financial reports in seconds.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const donationStats = [
  { metric: "All", label: "Donation types supported" },
  { metric: "Real-time", label: "Tracking & reporting" },
  { metric: "Auto", label: "Receipt generation" },
  { metric: "1-click", label: "Report exports" },
];

const faqs = [
  {
    question: "What is donation management software?",
    answer:
      "Donation management software helps nonprofits track, manage, and report on all types of donations — one-time gifts, recurring donations, pledges, in-kind contributions, and matching gifts. It centralizes donation data, automates receipting, and provides real-time reporting on fundraising performance.",
  },
  {
    question: "What types of donations can Kindora track?",
    answer:
      "Kindora tracks one-time donations, recurring gifts (monthly, quarterly, annual), pledge payments, in-kind contributions (goods and services), and corporate matching gifts — all with full donor attribution and campaign tracking.",
  },
  {
    question: "Does Kindora generate donation receipts?",
    answer:
      "Yes. Kindora automatically generates tax receipts and donor statements with customizable templates. Receipts can be generated for any donation type and exported or sent to donors.",
  },
  {
    question: "Can Kindora track recurring donation programs?",
    answer:
      "Yes. Kindora fully supports recurring donation management — track active subscribers, payment histories, paused or lapsed subscriptions, and total recurring revenue over time.",
  },
  {
    question: "Does Kindora support pledge management?",
    answer:
      "Yes. Kindora includes a complete pledge management system. Track pledged amounts, payment schedules, fulfillment status, and send automated reminders for upcoming or overdue payments.",
  },
  {
    question: "How does Kindora handle in-kind donations?",
    answer:
      "Kindora records in-kind contributions including goods, services, and pro-bono work. Track donor details, item descriptions, fair market values, and generate appropriate receipts and reports.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donation Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donation management software for nonprofits — track one-time, recurring, pledge, in-kind, and matching gift donations.",
      url: "https://spacenexus.net/kindora/donation-management-software",
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

export default function DonationManagementSoftwarePage() {
  return (
    <>
      <Script id="donation-management-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-teal-600">Donation Management Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Track Every Gift with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">Confidence</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                One-time donations, recurring gifts, pledges, in-kind contributions, and matching gifts — Kindora tracks them all in one unified system with automated receipting and real-time reporting.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 rounded-full shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Donation Activity</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { type: "One-time", donor: "Jane Doe", amount: "5,000", campaign: "Annual Gala", status: "Completed", color: "from-teal-400 to-teal-500" },
                    { type: "Recurring", donor: "Robert Smith", amount: "100/mo", campaign: "Monthly Giving", status: "Active", color: "from-emerald-400 to-emerald-500" },
                    { type: "Pledge", donor: "Maria Johnson", amount: "2,500", campaign: "Capital Campaign", status: "Partial", color: "from-amber-400 to-amber-500" },
                    { type: "In-Kind", donor: "Tech Corp", amount: "Services", campaign: "Pro-Bono", status: "Completed", color: "from-blue-400 to-blue-500" },
                  ].map((item) => (
                    <div key={item.donor} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {item.type.split("-")[0].slice(0, 2).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{item.donor}</p>
                        <p className="text-xs text-gray-500 truncate">{item.campaign}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-900">{item.amount}</p>
                        <p className={`text-xs font-medium ${item.status === "Active" || item.status === "Completed" ? "text-emerald-600" : "text-amber-600"}`}>{item.status}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    SOC 2 compliant
                  </span>
                  <span>Real-time donation feed</span>
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
            {donationStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-teal-500 mb-1">{stat.metric}</div>
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
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete donation management, one platform</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every donation type, every payment method, every report — all in one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {donationFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-teal-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-teal-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From donation to receipt in seconds</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A seamless workflow that saves your team hours every week.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Record Gift", description: "Enter donation details — donor, amount, type, and campaign." },
              { step: "02", title: "Auto-Receipt", description: "Tax receipt generated instantly and sent to donor." },
              { step: "03", title: "Update Records", description: "Donor profile, campaign progress, and financials update in real time." },
              { step: "04", title: "Report & Analyze", description: "Generate reports, track trends, and measure fundraising performance." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-teal-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about donation management software.</p>
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
            Ready to streamline your donation tracking?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Start managing all your donations in one place with Kindora.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 rounded-full shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-teal-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-teal-500 bg-teal-50 hover:bg-teal-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
