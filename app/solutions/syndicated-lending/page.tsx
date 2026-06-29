import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Syndicated Lending Data Room | SpaceNexus",
  description: "Secure data room for syndicated loan transactions. Lender coordination, due diligence packs, credit agreement distribution, and ongoing portfolio reporting for arranger-led and club deals.",
  alternates: {
    canonical: "https://spacenexus.net/solutions/syndicated-lending",
  },
  keywords: [
    "syndicated lending data room",
    "syndicated loan data room",
    "loan syndication platform",
    "arranger data room",
    "club deal data room",
    "lender onboarding",
    "credit agreement distribution",
  ],
  openGraph: {
    title: "Syndicated Lending Data Room | SpaceNexus",
    description: "Secure data room for syndicated loan transactions, arranger coordination, and lender onboarding.",
    url: "https://spacenexus.net/solutions/syndicated-lending",
    type: "website",
  },
};

const useCases = [
  {
    title: "Arranger-Led Syndication",
    description: "Lead arrangers distribute confidential information memoranda, financial models, and credit agreements to prospective syndicate lenders in a structured tiered-access workflow.",
  },
  {
    title: "Club Deal Coordination",
    description: "Multi-lender club deals use SpaceNexus to coordinate due diligence, KYC documentation, and inter-creditor documentation with full audit trails.",
  },
  {
    title: "Primary Market Origination",
    description: "Arrangers originating leveraged loans, project finance, or asset-based facilities share the borrower pitch, term sheet, and full credit pack with syndicate participants.",
  },
  {
    title: "Secondary Market Trading",
    description: "Loan traders and brokers use SpaceNexus to facilitate loan transfer documentation, KYC exchange, and consent solicitation in the secondary loan market.",
  },
];

const features = [
  {
    title: "Tiered Lender Access",
    desc: "Initial syndicate participants see the teaser and term sheet. Committed lenders unlock full credit memo, financial model, and security package. Confidentiality tier controlled per lender.",
  },
  {
    title: "KYC & AML Workflows",
    desc: "Built-in KYC collection, AML checks, and tax documentation workflows. Lender onboarding documents captured and stored for the life of the facility.",
  },
  {
    title: "Credit Agreement Negotiation",
    desc: "Version-controlled credit agreement markup with comparison tools. Track all comments, redlines, and acceptance status — replaces email threads for covenant negotiations.",
  },
  {
    title: "Inter-Creditor Documentation",
    desc: "Secure distribution of inter-creditor agreements, subordination terms, and security perfection documents. Coordinated with all facility parties.",
  },
  {
    title: "Ongoing Facility Reporting",
    desc: "Post-closing, the data room becomes the agent's permanent record — covenant compliance certificates, borrower reporting, and lender communications in one place.",
  },
  {
    title: "Regulatory Compliance",
    desc: "LMA-standard documentation, EU and US regulatory compliance, and reporting aligned with LCR, NSFR, and BCBS requirements for syndicated exposures.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Syndicated Lending Data Room",
  description: "Secure virtual data room for syndicated loan origination, club deals, and arranger-led syndications. Lender coordination, KYC workflows, and credit agreement negotiation.",
  url: "https://spacenexus.net/solutions/syndicated-lending",
  serviceType: "Virtual Data Room",
  provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Lead arrangers, syndicate lenders, club deal participants, and loan traders",
  },
};

export default function SyndicatedLendingPage() {
  return (
    <>
      <Script id="syndicated-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="pt-20 lg:pt-24">
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link href="/solutions" className="inline-flex items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Solutions
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Syndicated Lending
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Data room for syndicated lending and arranger-led deals
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Lead arrangers, syndicate lenders, and club deal participants use SpaceNexus to coordinate syndicated loan origination, KYC onboarding, credit agreement negotiation, and ongoing facility reporting — with tiered lender access and full LMA-aligned documentation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/demo" className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                  Request Demo
                </Link>
                <Link href="/solutions/investor-data-room" className="inline-flex items-center px-6 py-3 text-base font-semibold text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-full">
                  Investor Data Room
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">End-to-end support for the syndicated loan lifecycle</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((uc) => (
                <div key={uc.title} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{uc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Purpose-built for arranger workflows</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coordinate your next syndicated deal</h2>
            <p className="text-lg text-gray-600 mb-8">Set up your syndicated lending data room in under 24 hours with pre-built LMA templates and KYC workflows.</p>
            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
              Request Demo
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
