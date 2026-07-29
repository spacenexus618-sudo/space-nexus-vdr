import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DemoRequest from "@/app/components/DemoRequest";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
  title: "Generate More M&A & Fundraising Leads | SpaceNexus VDR",
  description:
    "Close more deals faster with SpaceNexus VDR. Secure data rooms with AI auto-indexing, granular permissions, and bank-grade security. Start your free trial today.",
  alternates: {
    canonical: "https://spacenexus.net/lead-generation",
  },
  keywords: [
    "lead generation VDR", "M&A lead generation", "deal generation",
    "virtual data room for leads", "secure deal room", "fundraising lead generation",
  ],
  openGraph: {
    title: "Generate More M&A & Fundraising Leads with SpaceNexus",
    description: "Close more deals faster with AI-powered virtual data rooms. Bank-grade security, 24-hour setup, flat-rate pricing.",
    url: "https://spacenexus.net/lead-generation",
  },
};

const benefits = [
  {
    title: "AI-Powered Auto-Indexing",
    description: "Upload documents and let AI automatically categorize them into the right folders. Save hours of manual organization.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "Granular Permission Tiers",
    description: "Control exactly who sees what. Set permission levels for bidders, advisors, and counsel in one click.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  },
  {
    title: "24-Hour Setup",
    description: "Go from signup to a fully organized data room with NDA workflows in under a day. Ready for your next deal.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Bank-Grade Security",
    description: "SOC 2 Type II, ISO 27001, AES-256 encryption, dynamic watermarking, and immutable audit trails.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: "AI Redaction & OCR Search",
    description: "Automatically redact sensitive information and search every document including scanned PDFs with OCR.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  },
  {
    title: "Flat-Rate Pricing",
    description: "No per-page fees, no hidden costs. Transparent flat-rate pricing that scales with your deal volume.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
];

const stats = [
  { value: "500+", label: "Deals Closed" },
  { value: "4.9/5", label: "Customer Rating" },
  { value: "24h", label: "Average Setup Time" },
  { value: "99.9%", label: "Uptime SLA" },
];

const faqs = [
  { question: "How quickly can I set up a data room for a new deal?", answer: "Most teams have their data room live in under 24 hours. AI auto-indexing and pre-built folder templates mean you can upload documents and share them the same day." },
  { question: "Can I control who sees which documents?", answer: "Yes. SpaceNexus provides granular permission tiers so you can control exactly who sees what. Set up different access levels for initial bidders, shortlisted bidders, final round bidders, and advisors." },
  { question: "What security certifications does SpaceNexus have?", answer: "SpaceNexus is SOC 2 Type II certified with AES-256 encryption at rest, TLS 1.3 in transit, dynamic watermarking, and immutable audit trails. We also support HIPAA compliance with BAA execution." },
  { question: "How does AI auto-indexing work?", answer: "When you upload documents, our AI analyzes the filename and content to automatically categorize them into the correct folder. For example, a PDF named 'Acme_2024_Financials.pdf' is automatically routed to the Financial folder." },
  { question: "Is there a free trial available?", answer: "Yes. Start a free 14-day trial with full access to all features including unlimited storage, user permissions, and analytics. No credit card required." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Lead Generation", item: "https://spacenexus.net/lead-generation" },
  ],
};

export default function LeadGenerationPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script id="leadgen-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="leadgen-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:pr-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-200/20 text-blue-200 text-sm font-medium mb-6">
                Close More Deals Faster
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Generate More M&A &<br />
                <span className="text-blue-200">Fundraising Leads</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                SpaceNexus helps investment bankers, private equity firms, and corporate development teams close more deals with AI-powered virtual data rooms. Set up a secure deal room in hours, not days.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/30 text-blue-200 flex items-center justify-center shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{b.title}</h3>
                      <p className="text-blue-200 text-sm">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-blue-400/30">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-blue-200">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-blue-200">14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-blue-200">Cancel anytime</span>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-1 text-center">Get Started Today</p>
                <p className="text-xs text-gray-600 mb-6 text-center">Fill in your details and start generating more leads.</p>
                <DemoRequest />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#2563eb] mb-1">{s.value}</p>
                <p className="text-sm text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-2">Why SpaceNexus</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by deal teams worldwide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From boutique investment banks to global private equity firms, hundreds of deal teams rely on SpaceNexus to manage their most sensitive transactions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Investment Bankers</h3>
              <p className="text-sm text-gray-600">Run competitive auctions with tiered access, automated Q&A, and comprehensive audit trails that give your clients confidence.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Private Equity</h3>
              <p className="text-sm text-gray-600">Manage your entire deal pipeline from sourcing to exit with secure data rooms, portfolio monitoring, and investor reporting.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate Development</h3>
              <p className="text-sm text-gray-600">Execute M&A, partnerships, and strategic investments with bank-grade security and AI-powered efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about using SpaceNexus for lead generation and deal management.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </main>
  );
}
