import type { Metadata } from 'next'
import Link from 'next/link'
import LastUpdated from '@/app/components/LastUpdated'
import AnswerBlock from '@/app/components/AnswerBlock'

export const metadata: Metadata = {
  title: 'SpaceNexus vs Dealroom | Feature Comparison 2026',
  description: 'SpaceNexus vs Dealroom side-by-side. Compare features, security, pricing, and fit for fundraising, M&A, and portfolio management in the space industry.',
  openGraph: {
    title: 'SpaceNexus vs Dealroom | Feature Comparison 2026',
    description: 'Compare SpaceNexus and Dealroom for deal management in the space sector.',
    url: 'https://spacenexus.net/compare/spacenexus-vs-dealroom',
  },
  alternates: {
    canonical: 'https://spacenexus.net/compare/spacenexus-vs-dealroom'
  },
  keywords: [
    'spacenexus vs dealroom',
    'dealroom vs spacenexus',
    'spacenexus dealroom comparison',
    'best VDR 2026',
    'virtual data room comparison',
  ],
}

export default function CompareSpaceNexusVsDealroom() {
  const today = new Date().toISOString().split('T')[0]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Should I use SpaceNexus or Dealroom?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use Dealroom if you want a modern, well-adopted startup fundraising platform. Use SpaceNexus if you need aerospace-grade security with ITAR compliance, domain-specific templates, and space industry support beyond standard deal management.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Dealroom better than SpaceNexus for fundraising?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dealroom offers superior dealroom templates, pitch deck sharing, and startup-focused workflows. SpaceNexus provides aerospace-grade security, ITAR compliance, and space industry-specific features that Dealroom lacks.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the price difference between SpaceNexus and Dealroom?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dealroom offers free and low-cost tiers (€0-20/month) with paid plans. SpaceNexus pricing is not publicly listed. Dealroom is more affordable for startups; SpaceNexus targets larger organizations needing enterprise security.'
        }
      }
    ]
  }

  const comparisonTable = [
    { feature: "Best for", spacenexus: "Space industry M&A, fundraising, licensing", dealroom: "Startup fundraising, seed to Series B+" },
    { feature: "ITAR compliance", spacenexus: "✓ Full compliance", dealroom: "✗ Not available" },
    { feature: "Space-specific templates", spacenexus: "✓ 100+ templates", dealroom: "✗ None" },
    { feature: "Pitch deck sharing", spacenexus: "Basic", dealroom: "✓ Advanced with analytics" },
    { feature: "Startup workflows", spacenexus: "Standard", dealroom: "✓ Fundraising-focused" },
    { feature: "European presence", spacenexus: "Limited", dealroom: "✓ Strong EU focus" },
    { feature: "Military/aerospace docs", spacenexus: "✓ Full support", dealroom: "✗ Not supported" },
    { feature: "Pricing", spacenexus: "Contact sales", dealroom: "Free tier + paid plans" },
    { feature: "AI features", spacenexus: "✓ Secure AI assistant", dealroom: "Limited" },
  ]

  return (
    <main className="pt-20 lg:pt-24 min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span>⚡ Feature Comparison</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">SpaceNexus vs Dealroom</h1>
          <p className="text-lg text-gray-600 mb-4">
            Dealroom is a well-adopted startup fundraising platform with strong European presence.
            SpaceNexus is a secure virtual data room built specifically for space industry transactions.
          </p>
          <LastUpdated date={today} />
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/demo"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-full transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <AnswerBlock text="SpaceNexus is better for space companies needing aerospace-grade security and ITAR compliance. Dealroom is better for startups wanting a modern, affordable fundraising platform. The choice depends on your industry, security requirements, and transaction type." />

      {/* At-a-Glance Comparison Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">At-a-Glance Comparison</h2>
          <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-gray-100">
              <div className="px-5 py-3 text-sm font-semibold text-gray-700">Feature</div>
              <div className="px-5 py-3 text-sm font-bold text-center border-l border-gray-200 text-[#2563eb]">SpaceNexus</div>
              <div className="px-5 py-3 text-sm font-semibold text-center text-gray-700 border-l border-gray-200">Dealroom</div>
            </div>
            {comparisonTable.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}
              >
                <div className="px-5 py-3 text-sm font-medium text-gray-800">{row.feature}</div>
                <div className="px-5 py-3 text-sm text-center border-l border-gray-100 text-green-700 font-medium">
                  <span className="inline-flex items-center gap-1">
                    {row.spacenexus}
                  </span>
                </div>
                <div className="px-5 py-3 text-sm text-center border-l border-gray-100 text-gray-600">
                  {row.dealroom}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mb-4">
                <h3 className="font-semibold text-[#2563eb]">Security & Compliance</h3>
              </div>
              <p className="text-gray-600">
                SpaceNexus provides aerospace-grade security with ITAR compliance, end-to-end encryption,
                and access controls designed for defense contractors. Dealroom offers solid security for startups
                but lacks ITAR compliance and military-grade features.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="p-4 bg-gray-100 rounded-xl border border-gray-200 mb-4">
                <h3 className="font-semibold text-gray-700">Templates & Content</h3>
              </div>
              <p className="text-gray-600">
                SpaceNexus includes 100+ space industry templates covering satellite manufacturing,
                launch services, and aerospace M&A. Dealroom excels with pitch deck sharing, data room templates,
                and startup-focused content management.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mb-4">
                <h3 className="font-semibold text-[#2563eb]">Workflows & User Experience</h3>
              </div>
              <p className="text-gray-600">
                Dealroom is built for startup fundraising workflows with intuitive design and strong
                European adoption. SpaceNexus offers standard VDR workflows plus space-specific features
                like satellite constellation tracking and launch window management.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="p-4 bg-gray-100 rounded-xl border border-gray-200 mb-4">
                <h3 className="font-semibold text-gray-700">Pricing</h3>
              </div>
              <p className="text-gray-600">
                Dealroom is more accessible with free tiers and affordable paid plans for startups.
                SpaceNexus targets enterprise pricing for organizations requiring aerospace-grade security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Choose */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Who Should Choose SpaceNexus?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Space companies handling ITAR-controlled technical data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Organizations needing military-grade document security
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Teams requiring space industry-specific templates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Companies with active satellite constellations or launch contracts
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Who Should Choose Dealroom?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Startups seeking affordable fundraising data room software
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Teams wanting modern dealroom templates and pitch deck sharing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  European companies needing strong local support
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Seed to Series B+ startups with standard document needs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Support */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-7">
            <div className="w-12 h-12 rounded-xl bg-[#2563eb] text-white flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Migration Support</h3>
            <p className="text-gray-600">
              Moving from Dealroom? SpaceNexus provides guided migration with dedicated support
              to ensure smooth transition of your deal data and document structure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Compare?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            See how SpaceNexus handles the complexity of space industry transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-full transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
