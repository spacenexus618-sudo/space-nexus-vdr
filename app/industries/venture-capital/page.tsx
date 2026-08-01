import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "VDR for Venture Capital | VC Data Room | SpaceNexus",
  description: "Virtual data room for venture capital firms. Early-stage diligence, LP communications, portfolio support, exits & secondaries — SOC 2, secure, ready in minutes.",
  keywords: ["VC data room", "venture capital VDR", "VC due diligence", "LP data room VC", "VC portfolio management", "startup diligence VDR"],
  alternates: { canonical: "https://spacenexus.net/industries/venture-capital" },
  openGraph: { title: "VDR for Venture Capital | SpaceNexus", description: "Virtual data room for venture capital firms — early-stage diligence, LP communications, portfolio support, and exits.", url: "https://spacenexus.net/industries/venture-capital" },
};

const capabilities = [
  {
    title: "Early-Stage Diligence",
    description: "Evaluate seed through Series B opportunities with stage-appropriate data rooms. Founder materials, financials, references, and rapid IC cycles.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: "Fund Operations",
    description: "Centralize fund documentation, track capital calls, manage distributions, and maintain compliance records across all fund vehicles.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  },
  {
    title: "LP Communications",
    description: "Share fund performance, quarterly reports, and capital call notices with limited partners through secure, branded portals with full audit trails.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  },
  {
    title: "Portfolio Support",
    description: "Maintain ongoing data rooms for portfolio companies — board packs, financials, operational updates — all organized and accessible to your deal team.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    title: "Exits & Secondaries",
    description: "Prepare comprehensive exit data rooms for portfolio exits and secondary transactions. Track buyer engagement and accelerate due diligence.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  },
];

const vcSubPages = [
  { title: "Early-Stage Diligence", href: "/industries/venture-capital/early-stage-diligence", description: "Seed through Series B evaluation" },
  { title: "Fund Operations", href: "/industries/venture-capital/fund-operations", description: "Fund admin & compliance" },
  { title: "LP Communications", href: "/industries/venture-capital/lp-communications", description: "Secure LP reporting" },
  { title: "Portfolio Support", href: "/industries/venture-capital/portfolio-support", description: "Portfolio company docs" },
  { title: "Exits & Secondaries", href: "/industries/venture-capital/exits-secondaries", description: "Exit prep & secondary sales" },
];

const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Venture Capital Virtual Data Room", description: "Virtual data room for venture capital firms — early-stage diligence, LP communications, portfolio support, and exit preparation.", url: "https://spacenexus.net/industries/venture-capital", serviceType: "Virtual Data Room", provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" }, areaServed: { "@type": "Place", name: "Worldwide" }, audience: { "@type": "BusinessAudience", audienceType: "Venture capital investment teams" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" }, { "@type": "ListItem", position: 3, name: "Venture Capital", item: "https://spacenexus.net/industries/venture-capital" }] };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a VC data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A VC data room is a secure virtual repository where venture capital firms and startups share confidential documents during fundraising, due diligence, and portfolio management workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How does SpaceNexus help VC firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus provides LP reporting dashboards, portfolio company document management, deal pipeline tracking, and investor engagement analytics for VC fund operations.",
      },
    },
    {
      "@type": "Question",
      name: "Can startups use SpaceNexus for fundraising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SpaceNexus offers startup-friendly templates for Series A through Series C fundraising with automated NDA workflows and investor Q&A management.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is a VC data room?",
    answer: "A VC data room is a secure virtual repository where venture capital firms and startups share confidential documents during fundraising, due diligence, and portfolio management workflows.",
  },
  {
    question: "How does SpaceNexus help VC firms?",
    answer: "SpaceNexus provides LP reporting dashboards, portfolio company document management, deal pipeline tracking, and investor engagement analytics for VC fund operations.",
  },
  {
    question: "Can startups use SpaceNexus for fundraising?",
    answer: "Yes. SpaceNexus offers startup-friendly templates for Series A through Series C fundraising with automated NDA workflows and investor Q&A management.",
  },
];

export default function VentureCapitalPage() {
  return (
    <>
      <Script id="vc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="vc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="pt-20 lg:pt-24">
        <Script
          id="vc-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href="/industries" className="inline-flex items-center text-sm text-gray-600 hover:text-[#2563eb] mb-6 transition-colors">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  All Industries
                </Link>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">Venture Capital</div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Data Rooms Built for VC Workflows</h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">From early-stage diligence to portfolio exits, SpaceNexus provides venture capital firms with the secure, efficient platform they need to evaluate opportunities, communicate with LPs, and support portfolio companies.</p>
                <Link href="/demo" className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                  Request a Demo
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl" />
                <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">VC Deal Management</h3>
                      <p className="text-sm text-gray-600">Full investment lifecycle</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["Early-Stage Diligence", "Fund Operations", "LP Reporting", "Portfolio Support", "Exits & Secondaries"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Purpose-Built for Venture Capital</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Every feature designed to support the unique demands of VC deal-making.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">{capability.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Venture Capital Firms Choose SpaceNexus</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">Venture capital firms operate at a different speed than any other investor class. Deals move fast, decisions are conviction-driven, and the quality of information flow can make or break an investment. SpaceNexus was purpose-built for this environment — providing VC teams with the tools to evaluate early-stage companies, manage fund operations, and support portfolio companies.</p>
              <p className="mb-6">For early-stage diligence, the platform supports stage-appropriate data rooms that adapt to the company's maturity. Pre-seed companies share pitch decks and founder materials, while Series B companies provide full financials, technology documentation, and legal records. The structured Q&A module keeps founder conversations organized, and real-time analytics show which documents are getting the most attention — helping you prioritize your highest-conviction opportunities.</p>
              <p className="mb-6">Fund administration is equally streamlined. LP communications, capital call notices, distribution memos, and quarterly reports can be shared through branded portals that reinforce your firm identity while providing investors with secure access to their documents. Every interaction is logged, creating a complete audit trail for compliance purposes.</p>
              <p>When it is time to exit a portfolio company or execute a secondary transaction, your sell-side data room is already populated with years of well-organized documentation. Buyer engagement analytics give you negotiating leverage, and the structured Q&A process keeps due diligence moving efficiently.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3 text-center">Explore VC Practice Areas</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Venture Capital Data Room Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vcSubPages.map((page) => (
                <Link key={page.href} href={page.href} className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">{page.title} →</h3>
                  <p className="text-xs text-gray-600 mt-2">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Set up your VC data room</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Stage-appropriate diligence, fast Q&A, LP portals. Most teams are live in under 24 hours.</p>
            <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
          
        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
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

            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
        </section>
      </main>
    </>
  );
}
