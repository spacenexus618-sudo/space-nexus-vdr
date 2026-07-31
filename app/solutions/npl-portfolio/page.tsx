import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Non-Performing Loans (NPL) Data Room | SpaceNexus",
  description: "Secure data room for non-performing loan portfolio transactions. Servicer onboarding, due diligence packs, asset-level documentation, and buyer/lender coordination for NPL sales and securitizations.",
  alternates: {
    canonical: "https://spacenexus.net/solutions/npl-portfolio",
  },
  keywords: [
    "non-performing loans data room",
    "NPL data room",
    "NPL portfolio sale",
    "NPL securitization data room",
    "loan portfolio diligence",
    "NPL servicer onboarding",
    "distressed debt data room",
  ],
  openGraph: {
    title: "Non-Performing Loans (NPL) Data Room | SpaceNexus",
    description: "Secure data room for NPL portfolio transactions, servicer onboarding, and distressed debt diligence.",
    url: "https://spacenexus.net/solutions/npl-portfolio",
    type: "website",
  },
};

const nplUseCases = [
  {
    title: "NPL Portfolio Sale",
    description: "Banks and originators selling pools of non-performing loans use SpaceNexus to share borrower files, loan tapes, collateral documentation, and servicer reports with prospective buyers under strict access controls.",
  },
  {
    title: "Securitization Diligence",
    description: "Issuers and arrangers preparing NPL-backed securitizations (ABS, RMBS, CLO) coordinate investor diligence, legal review, and rating agency access through a single secure platform.",
  },
  {
    title: "Loan Portfolio Acquisition",
    description: "PE firms, debt funds, and specialty investors evaluating NPL portfolios conduct asset-level review, servicer analysis, and recovery modeling in a structured Q&A workflow.",
  },
  {
    title: "Servicer Onboarding & Reporting",
    description: "Special servicers onboarding purchased NPL portfolios receive standardized diligence packs and use ongoing data rooms for borrower correspondence, recovery actions, and investor reporting.",
  },
];

const features = [
  {
    title: "Loan Tape Integration",
    desc: "Upload and index loan tapes with millions of rows. Bulk upload with automatic portfolio-level analytics — outstanding balance, delinquency, LTV, geography, and collateral type.",
  },
  {
    title: "Asset-Level Folder Structure",
    desc: "Standardized per-borrower folders with documents auto-organized by loan type (mortgage, consumer, commercial, SME). Each loan is a navigable workspace for buyers.",
  },
  {
    title: "Granular Buyer Access Tiers",
    desc: "Stage access: teaser review → indicative bid → full diligence → final binding bid. Each tier unlocks additional documents and Q&A permissions automatically.",
  },
  {
    title: "Servicer Coordination",
    desc: "Separate workspaces for special servicers, master servicers, and trustees. Recovery action logs, borrower contact tracking, and payment history all in one place.",
  },
  {
    title: "Redaction & PII Protection",
    desc: "AI-powered redaction of borrower PII (names, addresses, account numbers) for early-stage teaser distribution. Full unredacted access only after binding bid and NDA.",
  },
  {
    title: "Regulatory Compliance",
    desc: "GDPR, local banking secrecy, and consumer credit regulations supported. EU data residency options and configurable retention aligned with ECB and EBA guidelines.",
  },
];

const nplSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Non-Performing Loans Data Room",
  description: "Secure virtual data room for NPL portfolio sales, securitizations, and distressed debt transactions. Asset-level diligence, servicer coordination, and regulatory compliance.",
  url: "https://spacenexus.net/solutions/npl-portfolio",
  serviceType: "Virtual Data Room",
  provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Banks, debt funds, PE firms, special servicers, and securitization arrangers",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://spacenexus.net/solutions" },
    { "@type": "ListItem", position: 3, name: "NPL Portfolio", item: "https://spacenexus.net/solutions/npl-portfolio" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an NPL data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An NPL (Non-Performing Loan) data room is a secure virtual repository for managing loan portfolio sales, securitizations, and distressed debt transactions. It centralizes loan tapes, borrower files, collateral documentation, servicer reports, and legal materials under strict access controls so banks, debt funds, and arrangers can conduct asset-level diligence efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "How does an NPL data room help with loan portfolio sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus NPL data rooms accelerate portfolio sales by providing pre-built loan tape integration, standardized per-borrower folder structures, staged buyer access tiers (teaser → indicative bid → full diligence → final bid), AI-powered PII redaction for early-stage distribution, and full servicer coordination workspaces — all with tamper-evident audit trails for regulatory compliance.",
      },
    },
    {
      "@type": "Question",
      name: "What security features protect NPL transaction data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus protects NPL transaction data with AES-256 encryption at rest, TLS 1.3 in transit, granular user-level and document-level permissions, IP restriction controls, dynamic watermarking, NDA enforcement at room entry, and tamper-evident audit logs. The platform is SOC 2 Type II certified and supports GDPR, ECB, and EBA regulatory requirements with EU data residency options.",
      },
    },
    {
      "@type": "Question",
      name: "Who uses an NPL data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NPL data rooms are used by banks and originators selling loan portfolios, private equity firms and debt funds acquiring NPL pools, securitization arrangers preparing ABS/RMBS/CLO transactions, special servicers managing purchased portfolios, rating agencies conducting due diligence, and legal counsel reviewing loan-level documentation — all within a single, permissioned platform.",
      },
    },
  ],
};

export default function NPLPage() {
  return (
    <>
      <Script id="sol-npl-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="npl-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nplSchema) }} />
      <Script id="npl-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20 lg:pt-24">
        <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <Link href="/features" className="hover:text-[#2563eb] transition-colors">Solutions</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-gray-600">NPL Portfolio</span>
        </nav>
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link href="/features" className="inline-flex items-center text-sm text-gray-600 hover:text-[#2563eb] mb-6 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Solutions
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Non-Performing Loans
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Secure data room for non-performing loan transactions
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Banks, debt funds, and securitization arrangers use SpaceNexus to coordinate NPL portfolio sales, distressed debt diligence, and servicer onboarding — with asset-level access control, PII redaction, and full regulatory compliance built in.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/demo" className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                  Request NPL Demo
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Built for the full NPL transaction lifecycle</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {nplUseCases.map((uc) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Purpose-built for distressed debt workflows</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to streamline your NPL transaction?</h2>
            <p className="text-lg text-gray-600 mb-8">Set up your NPL data room in under 24 hours with pre-built loan tape templates and servicer onboarding workflows.</p>
            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
              Request NPL Demo
            </Link>
          
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
        </section>
      </main>
    </>
  );
}
