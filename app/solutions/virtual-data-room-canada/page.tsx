import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Virtual Data Room for Canada | SpaceNexus",
  description: "PIPEDA-compliant VDR for Canadian M&A, PE, and real estate. SOC 2 certified with Canadian data residency options.",
  alternates: {
    canonical: "https://spacenexus.net/solutions/virtual-data-room-canada",
  },
  openGraph: {
    title: "Virtual Data Room for Canada | SpaceNexus",
    description:
      "PIPEDA-compliant VDR for Canadian M&A, PE, and real estate. SOC 2 certified with Canadi...",
    url: "https://spacenexus.net/solutions/virtual-data-room-canada",
  },
  keywords: [
    "virtual data room Canada",
    "Canadian data room",
    "PIPEDA compliant VDR",
    "TSX data room",
    "Canadian M&A data room",
    "secure document sharing Canada",
    "Canadian law firm data room",
  ],
};

const regulations = [
  {
    name: "PIPEDA",
    fullName: "Personal Information Protection and Electronic Documents Act",
    description: "Canada's federal privacy law governs how private-sector organisations collect, use, and disclose personal information. SpaceNexus supports PIPEDA through encryption, access controls, breach notification infrastructure, and data subject rights management.",
  },
  {
    name: "CASL",
    fullName: "Canada's Anti-Spam Legislation",
    description: "CASL regulates commercial electronic messages. SpaceNexus's secure Q&A workflow keeps all deal communications within the data room — avoiding CASL compliance concerns that arise from email-based document sharing.",
  },
  {
    name: "Provincial Privacy Laws",
    fullName: "Alberta PIPA, British Columbia PIPA, Quebec Law 25",
    description: "Several provinces have their own privacy legislation. Quebec's Law 25 (modernised in 2023) imposes GDPR-like requirements including privacy impact assessments and data portability. SpaceNexus supports these requirements through configurable data handling policies.",
  },
  {
    name: "OSC / CSA",
    fullName: "Ontario Securities Commission / Canadian Securities Administrators",
    description: "For TSX and TSX-V listed company transactions, SpaceNexus provides the immutable audit trails, record retention, and information barrier controls required by Canadian securities regulators.",
  },
  {
    name: "Competition Act",
    fullName: "Competition Bureau Review",
    description: "Canadian M&A transactions above the notification threshold require Competition Bureau review. SpaceNexus data rooms support secure document production for merger review filings with segregated access for regulatory submissions.",
  },
];

const comparisonData = [
  { feature: "PIPEDA compliance", spacenexus: true, generic: "Partial" },
  { feature: "Quebec Law 25 support", spacenexus: true, generic: "No" },
  { feature: "Canadian data residency option", spacenexus: true, generic: "Varies" },
  { feature: "SOC 2 Type II certified", spacenexus: true, generic: "Varies" },
  { feature: "ISO 27001 accredited", spacenexus: true, generic: "Varies" },
  { feature: "Bilingual support (EN/FR)", spacenexus: true, generic: "Rare" },
  { feature: "TSX/OSC compliant audit trails", spacenexus: true, generic: "No" },
  { feature: "Dynamic watermarking", spacenexus: true, generic: "Rare" },
  { feature: "Competition Act filing support", spacenexus: true, generic: "No" },
  { feature: "Cross-border US–Canada compliance", spacenexus: true, generic: "No" },
];

const useCases = [
  {
    title: "Bay Street M&A",
    description: "Toronto-based investment banks and law firms managing sell-side auctions, buy-side due diligence, and cross-border Canada–US transactions.",
  },
  {
    title: "TSX & TSX-V IPOs",
    description: "Going-public transactions requiring secure document sharing with underwriters, auditors, and securities counsel — with OSC-compliant audit trails.",
  },
  {
    title: "Mining & Natural Resources",
    description: "Canadian resource companies managing project financings, joint ventures, and asset dispositions with geological data, environmental assessments, and First Nations consultation records.",
  },
  {
    title: "Cannabis Industry Transactions",
    description: "Licenced cannabis producers managing M&A, licensing transfers, and investor due diligence under Health Canada's strict regulatory framework.",
  },
  {
    title: "Real Estate & REITs",
    description: "Canadian REIT transactions, property portfolio dispositions, and commercial real estate due diligence with multi-party access management.",
  },
  {
    title: "Private Equity & Venture Capital",
    description: "Canadian PE funds and VC firms managing fundraising data rooms, portfolio company exits, and LP reporting with institutional-grade security.",
  },
];

const faqs = [
  {
    question: "Is SpaceNexus compliant with PIPEDA?",
    answer: "Yes. SpaceNexus supports PIPEDA compliance through AES-256 encryption, granular access controls, breach notification infrastructure, configurable data retention policies, and data subject rights management. Our SOC 2 Type II certification provides independent assurance of our security controls.",
  },
  {
    question: "Does SpaceNexus offer Canadian data residency?",
    answer: "SpaceNexus offers data residency options that include North American data centres. For organisations requiring data to remain in Canada, we can configure data storage to meet your jurisdictional requirements. Contact our team to discuss specific data residency needs.",
  },
  {
    question: "Can SpaceNexus handle bilingual (English/French) documents?",
    answer: "Yes. SpaceNexus supports full-text search across documents in both English and French, and our interface supports bilingual workflows. This is particularly important for Quebec-based transactions and federal government-related due diligence.",
  },
  {
    question: "How does SpaceNexus support cross-border Canada–US transactions?",
    answer: "SpaceNexus simultaneously complies with PIPEDA (Canada), CCPA/state privacy laws (US), and SEC/FINRA regulations (US). Our data room supports information barriers between Canadian and US deal teams, dual-jurisdiction audit trails, and configurable data residency across both countries.",
  },
  {
    question: "What Canadian industries does SpaceNexus serve?",
    answer: "SpaceNexus is used by Canadian law firms (Bay Street and national firms), investment banks, PE/VC funds, mining and resource companies, REITs, cannabis companies, technology firms, and corporate development teams across all provinces.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual Data Room for Canada",
  description: "PIPEDA-compliant virtual data room for Canadian M&A, capital markets, mining, real estate, and PE transactions. SOC 2 certified with Canadian data residency options.",
  url: "https://spacenexus.net/solutions/virtual-data-room-canada",
  serviceType: "Virtual Data Room",
  provider: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
  },
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "CAD",
    description: "Contact for pricing tailored to transaction size and document volume.",
  },
};

export default function CanadaVDRPage() {
  return (
    <>
      <Script
        id="canada-vdr-service-schema"
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
                  { "@type": "ListItem", position: 2, name: "Solutions", item: "https://spacenexus.net/solutions/mergers-and-acquisitions-vdr" },
                  { "@type": "ListItem", position: 3, name: "Canada", item: "https://spacenexus.net/solutions/virtual-data-room-canada" },
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
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f0f4ff] to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#2563eb] tracking-wide uppercase mb-4">
            🇨🇦 Canada
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            The Virtual Data Room for Canadian Transactions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            PIPEDA compliant, SOC 2 Type II certified, and built for the way Canadian
            law firms, investment banks, and PE firms run deals — from Bay Street M&A
            to cross-border Canada–US transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-300"
            >
              View Pricing
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <span>PIPEDA</span>
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>Quebec Law 25</span>
            <span>OSC Compliant</span>
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Canadian Regulatory Requirements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Canadian M&A transactions operate under a layered regulatory framework.
              SpaceNexus supports compliance at every level.
            </p>
          </div>
          <div className="space-y-4">
            {regulations.map((reg) => (
              <div key={reg.name} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded-full">{reg.name}</span>
                  <h3 className="font-bold text-gray-900">{reg.fullName}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{reg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SpaceNexus vs Generic Cloud Storage for Canadian Deals
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left p-4 font-semibold text-gray-900">Requirement</th>
                  <th className="text-center p-4 font-semibold text-[#2563eb]">SpaceNexus</th>
                  <th className="text-center p-4 font-semibold text-gray-500">Generic Tools</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center">{row.spacenexus ? "✅" : "❌"}</td>
                    <td className="p-4 text-center text-gray-500">{row.generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Canadian Industry Use Cases
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Run Your Next Canadian Deal on SpaceNexus?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Book a demo and see how SpaceNexus supports PIPEDA compliance,
            cross-border workflows, and bilingual document management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/security"
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-300"
            >
              See Security Features
            </Link>
          </div>
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
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">PIPEDA-compliant M&A workflows.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                        </Link>
                        <Link
                            href="/solutions/investor-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Canadian-resident investor comms.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Investor data room →</h3>
                        </Link>
                        <Link
                            href="/industries/private-equity"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">TSX-listed and PE deals.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For private equity →</h3>
                        </Link>
                        <Link
                            href="/industries/real-estate"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">REIT and CRE due diligence.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For real estate →</h3>
                        </Link>
                        <Link
                            href="/industries/energy-infrastructure"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Mining, oil & gas, and infrastructure.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For energy & infrastructure →</h3>
                        </Link>
                    </div>
                </div>
            </section>

</>
  );
}
