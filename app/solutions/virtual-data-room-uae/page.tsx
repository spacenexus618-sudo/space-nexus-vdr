import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Virtual Data Room for UAE | SpaceNexus",
  description: "DIFC and ADGM compliant VDR for UAE M&A, capital markets, and family office transactions. SOC 2 certified with Arabic support.",
  keywords: [
    "virtual data room UAE",
    "DIFC compliant VDR",
    "ADGM data room",
    "UAE M&A data room",
    "Middle East VDR",
    "Dubai virtual data room",
  ],
  alternates: {
    canonical: "https://spacenexus.net/solutions/virtual-data-room-uae",
    languages: {
      "ar-AE": "https://spacenexus.net/solutions/virtual-data-room-uae",
      "en-US": "https://spacenexus.net",
      "x-default": "https://spacenexus.net",
    },
  },
  openGraph: {
    title: "Virtual Data Room for UAE | SpaceNexus",
    description: "DIFC and ADGM compliant VDR for UAE M&A, capital markets, and family office transaction...",
    url: "https://spacenexus.net/solutions/virtual-data-room-uae",
    locale: "ar_AE",
  },
  other: {
    "geo.region": "AE",
    "geo.placename": "United Arab Emirates",
  },
};

const regulations = [
  { name: "SCA", fullName: "Securities & Commodities Authority", description: "SpaceNexus provides immutable audit trails and record retention capabilities required by the SCA for regulated securities transactions in the UAE." },
  { name: "DIFC", fullName: "Dubai International Financial Centre", description: "For transactions under DIFC jurisdiction, SpaceNexus supports the DIFC Data Protection Law 2020 through encryption, access controls, and configurable data residency." },
  { name: "ADGM", fullName: "Abu Dhabi Global Market", description: "SpaceNexus supports ADGM Data Protection Regulations 2021 compliance for financial services transactions conducted under Abu Dhabi's international financial centre framework." },
  { name: "UAE PDPL", fullName: "Personal Data Protection Law (Federal Decree-Law No. 45/2021)", description: "SpaceNexus supports UAE PDPL compliance through consent management, data subject rights, breach notification, and cross-border data transfer controls." },
];

const useCases = [
  { title: "M&A & Private Equity — الاندماج والاستحواذ", description: "Secure document sharing for sell-side auctions, buy-side due diligence, and cross-border GCC transactions. Support for Arabic and English documentation." },
  { title: "Real Estate & Infrastructure — العقارات", description: "Property portfolio dispositions, REIT transactions, and infrastructure project financings with multi-party access management for developers, investors, and government entities." },
  { title: "Capital Markets & IPOs — أسواق المال", description: "IPO data rooms for DFM, ADX, and Nasdaq Dubai listings. Secure document sharing with underwriters, auditors, and legal counsel." },
  { title: "Family Office Transactions — مكاتب عائلية", description: "Succession planning, family business restructurings, and private wealth transactions with the highest levels of confidentiality and access control." },
  { title: "Energy & Oil & Gas — الطاقة", description: "Joint venture agreements, asset dispositions, and licensing transactions for UAE energy companies with enterprise-grade document security." },
  { title: "Government & Sovereign Wealth — صناديق الثروة", description: "Secure document management for sovereign wealth fund investments, government privatisations, and public-private partnership transactions." },
];

const faqs = [
  {
    question: "Is SpaceNexus compliant with UAE data protection laws?",
    answer: "Yes. SpaceNexus supports compliance with the UAE Federal PDPL, DIFC Data Protection Law, and ADGM Data Protection Regulations through AES-256 encryption, granular access controls, breach notification infrastructure, and configurable data residency options.",
  },
  {
    question: "Does SpaceNexus support Arabic language documents?",
    answer: "Yes. SpaceNexus supports full-text search and document management across all languages including Arabic. Documents in Arabic, English, and any other language can be uploaded, indexed, searched, and shared within the same data room.",
  },
  {
    question: "Can SpaceNexus handle cross-border GCC transactions?",
    answer: "Yes. SpaceNexus supports multi-jurisdictional compliance for transactions spanning the UAE, Saudi Arabia, and other GCC states. Our data room supports multiple regulatory frameworks simultaneously with configurable data residency and access controls.",
  },
  {
    question: "How do I get started with SpaceNexus in the UAE?",
    answer: "Book a free demo with our team. We will show you how to set up your first data room in under 30 minutes and configure it for UAE regulatory requirements, including DIFC and ADGM compliance settings.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual Data Room for UAE",
  description: "DIFC and ADGM compliant virtual data room for UAE M&A, capital markets, real estate, and family office transactions. SOC 2 Type II certified with Arabic language support.",
  url: "https://spacenexus.net/solutions/virtual-data-room-uae",
  serviceType: "Virtual Data Room",
  provider: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
  },
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    description: "Contact for pricing tailored to transaction size and document volume.",
  },
};

export default function UAEVDRPage() {
  return (
    <>
      <Script
        id="uae-vdr-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
                  { "@type": "ListItem", position: 2, name: "UAE Virtual Data Room", item: "https://spacenexus.net/solutions/virtual-data-room-uae" },
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
          }),
        }}
      />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f0f4ff] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#2563eb] tracking-wide uppercase mb-4">🇦🇪 United Arab Emirates</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            غرفة البيانات الافتراضية الآمنة للإمارات
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            The Secure Virtual Data Room for UAE Transactions
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            SOC 2 Type II certified, DIFC and ADGM compliant — built for M&A, capital markets,
            real estate, and family office transactions across the UAE and GCC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25">
              Book a Free Demo
            </Link>
            <Link href="/pricing" className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-300">
              View Pricing
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <span>SOC 2 Type II</span><span>DIFC</span><span>ADGM</span><span>UAE PDPL</span><span>ISO 27001</span>
          </div>
        </div>
      </section>

      {/* Regulations */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">UAE Regulatory Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regulations.map((reg) => (
              <div key={reg.name} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded-full">{reg.name}</span>
                  <h3 className="font-bold text-gray-900 text-sm">{reg.fullName}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{reg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">UAE Industry Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{uc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 text-lg">Book a demo and see how SpaceNexus supports UAE regulatory requirements for secure deal management.</p>
          <Link href="/demo" className="inline-block px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25">
            Book a Free Demo →
          </Link>
        </div>
      </section>
                {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/solutions/mergers-and-acquisitions-vdr"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">DIFC and ADGM compliant.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                        </Link>
                        <Link
                            href="/industries/real-estate"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Dubai property and GCC real estate.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For real estate →</h3>
                        </Link>
                        <Link
                            href="/industries/private-equity"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">GCC PE and family office.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For private equity →</h3>
                        </Link>
                        <Link
                            href="/industries/energy-infrastructure"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Oil & gas, renewables.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For energy & infrastructure →</h3>
                        </Link>
                        <Link
                            href="/features/security-compliance"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">DIFC, ADGM, UAE PDPL.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Security & compliance →</h3>
                        </Link>
                    </div>
                </div>
            </section>

</>
  );
}
