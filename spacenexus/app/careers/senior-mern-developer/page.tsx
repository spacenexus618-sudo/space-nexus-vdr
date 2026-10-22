import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Senior MERN Stack Developer | SpaceNexus Careers",
  description:
    "Lead development of cutting-edge web applications at SpaceNexus with expertise in the MERN stack and related technologies.",
  alternates: {
    canonical: "https://spacenexus.net/careers/senior-mern-developer",
  },
};

const responsibilities = [
  {
    category: "Frontend Development",
    items: [
      "Develop interactive and responsive user interfaces using React and Next.js.",
      "Implement server-side rendering (SSR) and static site generation (SSG) using Next.js.",
      "Optimize application performance for speed and SEO.",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Build robust RESTful APIs and GraphQL endpoints using NestJS and Node.js.",
      "Design and implement scalable backend services with a focus on performance and security.",
      "Integrate third-party APIs and microservices.",
    ],
  },
  {
    category: "Database Management",
    items: [
      "Design and manage efficient database schemas using MongoDB.",
      "Optimize database queries and ensure data consistency.",
      "Manage backups, migrations, and database monitoring.",
    ],
  },
  {
    category: "API Development and Integration",
    items: [
      "Develop and maintain GraphQL schemas, queries, and mutations.",
      "Ensure seamless communication between frontend and backend services.",
    ],
  },
  {
    category: "Code Quality and Collaboration",
    items: [
      "Write clean, reusable, and maintainable code adhering to best practices.",
      "Conduct code reviews and participate in collaborative team sessions.",
      "Document development workflows, processes, and key components.",
    ],
  },
  {
    category: "Testing and Deployment",
    items: [
      "Implement unit tests, integration tests, and end-to-end tests using modern testing frameworks.",
      "Deploy applications to cloud platforms and monitor for performance and issues.",
      "Utilize CI/CD pipelines to streamline development and deployment workflows.",
    ],
  },
];

const requirementsList = [
  {
    category: "Frontend",
    items: [
      "Proficiency in React, Next.js, and modern JavaScript (ES6+).",
    ],
  },
  {
    category: "Backend",
    items: [
      "Strong knowledge of Node.js, NestJS, and TypeScript.",
    ],
  },
  {
    category: "Database",
    items: [
      "Experience with MongoDB, including schema design and optimization.",
    ],
  },
  {
    category: "API Development",
    items: [
      "Hands-on experience with GraphQL, REST APIs, and their integration.",
      "Familiarity with server-side rendering (SSR) and static site generation (SSG) in Next.js.",
    ],
  },
  {
    category: "General",
    items: [
      "Knowledge of version control systems, particularly Git.",
      "Experience with testing frameworks such as Jest, Cypress, or Mocha.",
    ],
  },
];

const preferredQualifications = [
  "Experience with cloud services like AWS, Azure, or Google Cloud Platform.",
  "Familiarity with Docker and Kubernetes for containerization and orchestration.",
  "Knowledge of authentication mechanisms like OAuth2, JWT, and session management.",
  "Understanding of performance optimization and caching strategies (e.g., Redis).",
  "Familiarity with Agile and Scrum development methodologies.",
];

const softSkills = [
  "Strong analytical and problem-solving skills.",
  "Excellent communication and team collaboration abilities.",
  "Self-motivated with the ability to work independently and as part of a team.",
];

const whatWeOffer = [
  "Competitive salary and performance-based bonuses.",
  "Flexible working hours with remote work options.",
  "Opportunities for professional development and skill enhancement.",
  "Collaborative and inclusive work environment.",
  "Paid sick time",
  "Paid time off",
  "Provident Fund",
  "Performance bonus",
  "Yearly bonus",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://spacenexus.net/careers" },
    { "@type": "ListItem", position: 3, name: "Senior MERN Stack Developer", item: "https://spacenexus.net/careers/senior-mern-developer" },
  ],
};

export default function SeniorMernDeveloperPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="senior-mern-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-400 flex items-center justify-center text-white">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-gray-600 bg-gray-200 px-3 py-1.5 rounded-full">
              5 to 10 Years Experience
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Senior MERN Stack Developer
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Full-time, Part-time
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              5 to 10 Years Experience
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Remote
            </div>
          </div>

          <h2 className="text-lg font-bold text-gray-900 mb-3">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We&apos;re seeking a Senior MERN Stack Developer to lead our development team, focusing on Next.js, Node.js, MongoDB, and GraphQL. As a senior developer, you&apos;ll drive architectural decisions, mentor team members, and build scalable, high-performance web applications for our AI-powered virtual data room platform.
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
          {requirementsList.map((section) => (
            <div key={section.category} className="mb-4 last:mb-0">
              <h3 className="text-base font-semibold text-gray-900 mb-2">{section.category}</h3>
              <ul className="space-y-2 mb-4">
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

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Preferred Qualifications</h3>
          <ul className="space-y-2 mb-4">
            {preferredQualifications.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Soft Skills</h3>
          <ul className="space-y-2">
            {softSkills.map((item) => (
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
