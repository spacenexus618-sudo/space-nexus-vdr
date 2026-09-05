import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MERN Stack Developer | SpaceNexus Careers",
  description:
    "Join SpaceNexus as a MERN Stack Developer. Build scalable web applications using React, Next.js, MongoDB, NestJS, GraphQL, and Node.js.",
  alternates: {
    canonical: "https://spacenexus.net/careers/mern-developer",
  },
};

const responsibilities = [
  {
    category: "Core Development",
    items: [
      "Design and implement scalable and efficient software solutions.",
      "Collaborate with cross-functional teams to identify and prioritize project requirements.",
      "Ensure high-quality code delivery, adhering to best practices and coding standards.",
      "Troubleshoot and resolve technical issues, providing timely and effective solutions.",
    ],
  },
];

const requirementsList = [
  "Freshers are welcome to apply. Candidates with 1+ years of relevant experience will be given additional consideration.",
  "Excellent problem-solving skills, with the ability to analyze complex technical issues and provide effective solutions.",
  "Strong communication and collaboration skills, with experience working with cross-functional teams.",
];

const whatWeOffer = [
  "Opportunity to work with a cutting-edge AI startup, transforming the construction industry.",
  "Collaborative and dynamic work environment, with a team of passionate and talented individuals.",
  "Competitive compensation and benefits package, with a focus on growth and development.",
];

const applicationQuestions = [
  "Have you applied to SpaceNexus before?",
  "Are you okay to work for salary offered in job listing?",
  "Ready to contribute to SPACE AI for Min 1 year?",
  "Have you completed any graduate / Diploma studies?",
  "Are you willing to take up on small task assignment as a pre requisite for interview?",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://spacenexus.net/careers" },
    { "@type": "ListItem", position: 3, name: "MERN Stack Developer", item: "https://spacenexus.net/careers/mern-developer" },
  ],
};

export default function MernDeveloperPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="mern-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero / Job Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Careers
        </Link>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-10">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-gray-600 bg-gray-200 px-3 py-1.5 rounded-full">
              Freshers Welcome
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            MERN Stack Developer
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Full-time
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Freshers Welcome (1+ Years Preferred)
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              WFH
            </div>
          </div>

          <h2 className="text-lg font-bold text-gray-900 mb-3">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We&apos;re seeking an experienced MERN Stack Developer to join our development team, focusing on Next.js, Node.js, MongoDB, and GraphQL. As a developer, you&apos;ll be responsible for Coding (100%): Developing high-quality software solutions using Next.js, Node.js, MongoDB, and GraphQL.
          </p>

        </div>
      </div>

      {/* Key Responsibilities */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h2>
          {responsibilities.map((section) => (
            <div key={section.category} className="mb-6 last:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.category}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
          <ul className="space-y-3">
            {requirementsList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* What We Offer */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <ul className="space-y-3">
            {whatWeOffer.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Application Questions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Questions</h2>
          <ul className="space-y-3">
            {applicationQuestions.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <p className="text-gray-600 mb-6">Don&apos;t see a position that fits your skills?</p>
        <a
          href="mailto:careers@spacenexus.net"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 rounded-full transition-all duration-300 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Send us your resume
        </a>
      </div>
    </div>
  );
}
