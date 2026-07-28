import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "CLO Advisory Data Room | SpaceNexus",
  description: "Secure data room for CLO advisory, collateralized loan obligation transactions, and structured credit diligence. Portfolio-level analytics, warehouse facility management, and investor reporting.",
  alternates: {
    canonical: "https://spacenexus.net/solutions/clo-advisory",
  },
  keywords: [
    "CLO data room",
    "collateralized loan obligation",
    "CLO advisory",
    "CLO portfolio diligence",
    "CLO warehouse facility",
    "structured credit data room",
    "CLO investor reporting",
  ],
  openGraph: {
    title: "CLO Advisory Data Room | SpaceNexus",
    description: "Secure data room for CLO advisory, structured credit diligence, and warehouse facility management.",
    url: "https://spacenexus.net/solutions/clo-advisory",
    type: "website",
  },
};

const useCases = [
  {
    title: "CLO New Issue Diligence",
    description: "Arrangers and co-managers preparing CLO new issues use SpaceNexus to distribute the offering circular, portfolio cut, and waterfall modeling to prospective investors under tiered access.",
  },
  {
    title: "Warehouse Facility Management",
    description: "CLO equity sponsors managing warehouse facilities share loan-level data, ramp progress, and compliance reports with warehouse lenders and rating agencies.",
  },
  {
    title: "Refinancing & Reset Transactions",
    description: "Refinancing or resetting an existing CLO requires lender consent and rating agency re-confirmation. SpaceNexus coordinates the consent solicitation, amendment distribution, and back-up documentation.",
  },
  {
    title: "Portfolio Trading & Bilateral Sales",
    description: "Secondary market CLO trading and bilateral portfolio sales use SpaceNexus to exchange KYC, transfer documentation, and loan-level portfolio files between counterparties.",
  },
];

const features = [
  {
    title: "Loan Tape Distribution",
    desc: "Secure distribution of loan tapes with millions of rows, supporting CLO-specific attributes: facility size, drawn amount, Moody’s/S&P/Fitch ratings, recovery rates, WARF, WAL, and diversity scores.",
  },
  {
    title: "Waterfall Modeling Access",
    desc: "Tiered access to Intex, Trepp, or proprietary waterfall models. Each investor tier sees the version relevant to their subscription status — protecting arranger proprietary models.",
  },
  {
    title: "Rating Agency Workflows",
    desc: "Dedicated access for Moody's, S&P, and Fitch analysts. Separate credentialed access with audit trails supporting surveillance and rating confirmation requirements.",
  },
  {
    title: "Compliance Test Reporting",
    desc: "Built-in OC, IC, and portfolio profile tests with automated calculation. Compliance certificates distributed to trustees, investors, and rating agencies on scheduled dates.",
  },
  {
    title: "KYC & AML Onboarding",
    desc: "Capture KYC documentation, AML checks, and tax forms for all CLO investors, lenders, and counterparties. Stored centrally for the life of the deal and all future resets.",
  },
  {
    title: "Investor Reporting",
    description: "Monthly investor reports, quarterly distribution statements, and annual tax documents distributed through the data room. Version control ensures all parties see the same data.",
    desc2: "",
  },
  {
    title: "Trustee Coordination",
    desc: "Secure communication with the trustee for payment dates, waterfall calculations, and event notices. Immutable audit trail supports post-closing dispute resolution.",
  },
  {
    title: "Regulatory Compliance",
    desc: "SEC, CFTC, EU Securitization Regulation, and UK STS compliance supported. Risk retention documentation, transparency requirements, and reporting all managed in-platform.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CLO Advisory Data Room",
  description: "Secure virtual data room for collateralized loan obligation advisory, structured credit diligence, and warehouse facility management.",
  url: "https://spacenexus.net/solutions/clo-advisory",
  serviceType: "Virtual Data Room",
  provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "CLO arrangers, managers, investors, trustees, and rating agencies",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a CLO data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CLO data room is a secure workspace for sharing offering materials, loan tapes, warehouse reports, compliance tests, and investor communications during CLO issuance and refinancing.",
      },
    },
    {
      "@type": "Question",
      name: "How does SpaceNexus help CLO teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus helps CLO arrangers, managers, trustees, and rating agencies coordinate portfolio diligence, investor access, and compliance reporting with controlled permissions and audit trails.",
      },
    },
    {
      "@type": "Question",
      name: "Can CLO investors access only the materials they need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tiered permissions let each investor group access the right documents while protecting proprietary modeling, portfolio data, and confidential transaction materials.",
      },
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SpaceNexus",
  url: "https://spacenexus.net",
  description: "SpaceNexus provides secure virtual data rooms and collaboration software for structured credit, private credit, ESG, and M&A workflows.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://spacenexus.net/solutions" },
    { "@type": "ListItem", position: 3, name: "CLO Advisory", item: "https://spacenexus.net/solutions/clo-advisory" },
  ],
};

const relatedSolutions = [
  {
    title: "Private Credit",
    description: "Coordinate direct lending origination, lender reporting, and portfolio monitoring in one secure workspace.",
    href: "/solutions/private-credit",
  },
  {
    title: "Distressed Debt",
    description: "Support restructuring, claims management, and creditor coordination with audit-ready workflows.",
    href: "/solutions/distressed-debt",
  },
  {
    title: "Syndicated Lending",
    description: "Run deal rooms for lender syndication, diligence, and credit approvals with controlled access.",
    href: "/solutions/syndicated-lending",
  },
];

export default function CLOAdvisoryPage() {
  return (
    <>
      <Script id="sol-clo-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="clo-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="clo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="clo-organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <main className="pt-20 lg:pt-24">
        <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <Link href="/features" className="hover:text-[#2563eb] transition-colors">Solutions</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-gray-600">CLO Advisory</span>
        </nav>
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link href="/features" className="inline-flex items-center text-sm text-gray-600 hover:text-[#2563eb] mb-6 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Solutions
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                CLO Advisory
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Data room for CLO advisory and structured credit transactions
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CLO arrangers, managers, investors, trustees, and rating agencies use SpaceNexus to coordinate collateralized loan obligation transactions — with portfolio-level analytics, waterfall modeling access, warehouse facility management, and full SEC/EU Securitization Regulation compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/demo" className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                  Request CLO Demo
                </Link>
                <Link href="/solutions/syndicated-lending" className="inline-flex items-center px-6 py-3 text-base font-semibold text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-full">
                  Syndicated Lending
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Built for the CLO transaction lifecycle</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Purpose-built for structured credit workflows</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc || f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-8">
              <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-2">Related solutions</p>
              <h2 className="text-3xl font-bold text-gray-900">Explore adjacent workflows</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedSolutions.map((item) => (
                <Link key={item.href} href={item.href} className="group block rounded-2xl border border-gray-200 bg-[#f8f9fa] p-6 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  <p className="mt-4 text-sm font-semibold text-[#2563eb]">Explore →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coordinate your next CLO transaction</h2>
            <p className="text-lg text-gray-600 mb-8">Set up your CLO data room in under 24 hours with pre-built warehouse, refinancing, and new issue templates.</p>
            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
              Request CLO Demo
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
