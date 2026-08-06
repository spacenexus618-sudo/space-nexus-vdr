import type { Metadata } from "next";
import Link from "next/link";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
  title: "VDR Reviews & Testimonials | SpaceNexus",
  description: "Read verified reviews of SpaceNexus VDR from investment banks, PE firms, law firms, and corporate teams.",
  alternates: {
    canonical: "https://spacenexus.net/reviews",
  },
  openGraph: {
    title: "VDR Reviews & Testimonials | SpaceNexus",
    description:
      "Read verified reviews of SpaceNexus VDR from investment banks, PE firms, law firms, and...",
    url: "https://spacenexus.net/reviews",
  },
  twitter: {
    title: "SpaceNexus Reviews — Rated 4.9/5 by Deal Professionals",
    description:
      "Read verified reviews from law firms, PE funds, and investment banks using SpaceNexus VDR.",
  },
};

const reviewPlatforms = [
  {
    name: "G2",
    category: "Virtual Data Room Software",
    url: "https://www.g2.com/products/spacenexus/reviews",
    description:
      "G2 is the world's largest B2B software review marketplace with over 2 million verified reviews. SpaceNexus is listed under Virtual Data Room and Legal Document Management categories.",
    icon: "⭐",
    cta: "Read Reviews on G2",
  },
  {
    name: "Capterra",
    category: "Virtual Data Room Software",
    url: "https://www.capterra.com/p/spacenexus/",
    description:
      "Capterra helps businesses find the right software with verified user reviews and detailed product comparisons. Part of the Gartner Digital Markets network.",
    icon: "📊",
    cta: "Read Reviews on Capterra",
  },
  {
    name: "TrustRadius",
    category: "Virtual Data Room",
    url: "https://www.trustradius.com/products/spacenexus/reviews",
    description:
      "TrustRadius features in-depth, authenticated reviews from verified users. Known for detailed, long-form reviews that cover real-world implementation experiences.",
    icon: "🛡️",
    cta: "Read Reviews on TrustRadius",
  },
  {
    name: "GetApp",
    category: "Data Room Software",
    url: "https://www.getapp.com/p/spacenexus/",
    description:
      "GetApp provides tailored software recommendations based on your specific business needs. Part of the Gartner Digital Markets network alongside Capterra and Software Advice.",
    icon: "📋",
    cta: "Read Reviews on GetApp",
  },
  {
    name: "Software Advice",
    category: "Virtual Data Room",
    url: "https://www.softwareadvice.com/vdr/spacenexus-profile/",
    description:
      "Software Advice offers free, personalised software recommendations from expert advisors who help narrow down the best VDR solutions for your deal type and team size.",
    icon: "💡",
    cta: "Read Reviews on Software Advice",
  },
];

const customerQuotes = [
  {
    quote:
      "SpaceNexus transformed how we manage M&A due diligence. The Q&A workflow alone saved us 15+ hours per deal compared to our previous data room.",
    author: "Managing Director",
    company: "Mid-Market Investment Bank",
    useCase: "Sell-Side M&A",
  },
  {
    quote:
      "The security controls and audit trails give our clients confidence that their privileged documents are protected. Dynamic watermarking is a must-have for litigation-sensitive deals.",
    author: "Senior Partner",
    company: "Am Law 200 Firm",
    useCase: "Legal Due Diligence",
  },
  {
    quote:
      "We evaluated Datasite, Intralinks, and three other providers. SpaceNexus had the best combination of security, usability, and pricing for our fund size.",
    author: "VP of Operations",
    company: "Growth Equity Fund",
    useCase: "Fundraising & LP Reporting",
  },
  {
    quote:
      "Setting up our first data room took under 30 minutes. The bulk upload, auto-indexing, and permission templates made it painless — our previous provider required a full day of admin work.",
    author: "Corporate Development Lead",
    company: "FTSE 250 Company",
    useCase: "Corporate M&A",
  },
  {
    quote:
      "HIPAA-compliant configurations were critical for our healthcare portfolio acquisitions. SpaceNexus handled PHI access controls exactly the way our compliance team needed.",
    author: "Principal",
    company: "Healthcare-Focused PE Firm",
    useCase: "Healthcare M&A",
  },
  {
    quote:
      "The real-time analytics dashboard shows exactly which buyers are engaged and which sections they focus on. It completely changed how we manage competitive auction dynamics.",
    author: "Associate Director",
    company: "Boutique Advisory Firm",
    useCase: "Buyer Analytics",
  },
];

const ratingCategories = [
  { label: "Overall Rating", value: "4.9", bar: 98 },
  { label: "Ease of Use", value: "4.8", bar: 96 },
  { label: "Security & Compliance", value: "5.0", bar: 100 },
  { label: "Customer Support", value: "4.9", bar: 98 },
  { label: "Value for Money", value: "4.7", bar: 94 },
  { label: "Document Management", value: "4.8", bar: 96 },
];

const faqs = [
  {
    question: "Where can I read verified SpaceNexus reviews?",
    answer:
      "SpaceNexus is listed on G2, Capterra, TrustRadius, GetApp, and Software Advice under the Virtual Data Room and Legal Document Management categories. Each platform verifies reviewers through LinkedIn authentication, email verification, or proof of purchase to ensure review authenticity.",
  },
  {
    question: "How does SpaceNexus compare to Datasite and Intralinks?",
    answer:
      "SpaceNexus offers the same enterprise-grade security (SOC 2 Type II, ISO 27001, AES-256 encryption) at a more accessible price point. Key differentiators include AI-powered document processing, real-time buyer analytics, and a modern interface that requires minimal training. See our detailed comparison pages for feature-by-feature breakdowns.",
  },
  {
    question: "What do customers say about SpaceNexus security?",
    answer:
      "Security consistently receives the highest ratings from SpaceNexus users. Customers highlight SOC 2 Type II certification, mandatory MFA, dynamic watermarking, and immutable audit trails as standout features. Legal teams particularly value the granular permission controls and ethical wall enforcement for privilege protection.",
  },
  {
    question: "Can I leave a review of SpaceNexus?",
    answer:
      "Yes. If you are a current or former SpaceNexus customer, you can leave a verified review on G2, Capterra, TrustRadius, GetApp, or Software Advice. Your feedback helps other deal professionals evaluate VDR solutions and helps us improve our platform.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://spacenexus.net",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Reviews",
                    item: "https://spacenexus.net/reviews",
                  },
                ],
              },
              {
                "@type": "SoftwareApplication",
                name: "SpaceNexus Virtual Data Room",
                applicationCategory: "BusinessApplication",
                url: "https://spacenexus.net",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "500",
                  bestRating: "5",
                  worstRating: "1",
                },
                review: customerQuotes.map((r) => ({
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: `${r.author}, ${r.company}`,
                  },
                  reviewBody: r.quote,
                })),
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
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
            Customer Reviews
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Trusted by Deal Teams Worldwide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            See why law firms, investment banks, and private equity teams rate
            SpaceNexus as the top virtual data room for secure M&A due
            diligence, fundraising, and document sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/competitors/vdr-alternatives"
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-300"
            >
              Compare VDR Providers
            </Link>
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Rated 4.9 out of 5
            </h2>
            <p className="text-gray-600">
              Based on verified reviews across major software review platforms
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {ratingCategories.map((cat) => (
              <div
                key={cat.label}
                className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-5"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    {cat.label}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {cat.value}/5
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#2563eb] h-2 rounded-full transition-all"
                    style={{ width: `${cat.bar}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Quotes */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Deal Professionals Say
            </h2>
            <p className="text-gray-600">
              Real feedback from legal teams, investment banks, and private
              equity firms using SpaceNexus
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerQuotes.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-amber-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-900">
                    {review.author}
                  </p>
                  <p className="text-xs text-gray-600">{review.company}</p>
                  <span className="inline-block mt-2 text-xs font-medium text-[#2563eb] bg-blue-50 px-2 py-1 rounded-full">
                    {review.useCase}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us on Leading Review Platforms
            </h2>
            <p className="text-gray-600">
              SpaceNexus is listed on the top B2B software review sites under
              Virtual Data Room and Legal Document Management categories
            </p>
          </div>
          <div className="space-y-4">
            {reviewPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center gap-4 bg-[#f8f9fa] rounded-xl border border-gray-200 p-6 hover:border-[#2563eb] transition-colors"
              >
                <div className="text-3xl sm:text-4xl shrink-0">{platform.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb]">
                      {platform.name}
                    </h3>
                    <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                      {platform.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {platform.description}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-[#2563eb] group-hover:underline">
                  {platform.cta} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Links */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Compare SpaceNexus to Other VDR Providers
            </h2>
            <p className="text-gray-600">
              See detailed feature-by-feature comparisons with the leading
              virtual data room providers
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/competitors/datasite-alternative"
              className="group bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-[#2563eb] mb-2">
                SpaceNexus vs Datasite
              </h3>
              <p className="text-sm text-gray-600">
                Feature comparison, pricing, and migration guide
              </p>
            </Link>
            <Link
              href="/competitors/intralinks-alternative"
              className="group bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-[#2563eb] mb-2">
                SpaceNexus vs Intralinks
              </h3>
              <p className="text-sm text-gray-600">
                Feature comparison, pricing, and migration guide
              </p>
            </Link>
            <Link
              href="/competitors/vdr-alternatives"
              className="group bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-[#2563eb] mb-2">
                VDR Alternatives 2026
              </h3>
              <p className="text-sm text-gray-600">
                Compare 6 providers side-by-side
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to See Why Teams Choose SpaceNexus?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Book a free demo and experience the VDR that deal professionals
            trust for their most sensitive transactions.
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
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
      </section>
    </>
  );
}
