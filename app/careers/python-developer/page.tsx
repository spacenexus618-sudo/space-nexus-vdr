import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Python Developer (AI/LLM) | SpaceNexus Careers",
  description:
    "Join SpaceNexus as a Python Developer building AI/LLM systems, RAG pipelines, and graph database solutions.",
  alternates: {
    canonical: "https://spacenexus.net/careers/python-developer",
  },
};

const responsibilities = [
  {
    category: "AI & LLM Systems",
    items: [
      "Build end-to-end RAG (Retrieval-Augmented Generation) pipelines for context-aware AI responses.",
      "Implement and fine-tune vLLM for efficient inference of large language models (LLMs).",
      "Collaborate with ML engineers to deploy transformer models (e.g., BERT, GPT variants) and vector databases.",
    ],
  },
  {
    category: "Data & Database Architecture",
    items: [
      "Architect and optimize graph database systems (Neo4j) to model project knowledge networks and relationships.",
      "Develop Python-based microservices for data ingestion, processing, and API integrations (FastAPI, Flask).",
    ],
  },
  {
    category: "Performance & Operations",
    items: [
      "Monitor system performance, conduct A/B tests, and ensure low-latency responses in production.",
      "Ensure scalability and efficiency of AI systems.",
    ],
  },
];

const requirementsList = [
  "Proficiency in Python and AI/ML libraries (PyTorch, TensorFlow, Hugging Face Transformers).",
  "Hands-on experience with graph databases, especially Neo4j (Cypher queries, graph algorithms).",
  "Demonstrated work on RAG pipelines (retrieval, reranking, generation) using frameworks like LangChain or LlamaIndex.",
  "Experience with vLLM or similar LLM optimization tools (quantization, distributed inference).",
  "Knowledge of vector databases (e.g., FAISS, Pinecone) and embedding techniques.",
  "Familiarity with cloud platforms (AWS/GCP/Azure) and containerization (Docker, Kubernetes).",
];

const preferredQualifications = [
  "Strong experience with FastAPI or Flask for building high-performance APIs.",
  "Familiarity with MLOps principles and tools (e.g., MLflow, Kubeflow).",
  "Contributions to open-source AI/ML projects.",
  "Experience in performance tuning and A/B testing for AI systems in a production environment.",
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
    { "@type": "ListItem", position: 3, name: "Python Developer", item: "https://spacenexus.net/careers/python-developer" },
  ],
};

export default function PythonDeveloperAiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="python-ai-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-gray-600 bg-gray-200 px-3 py-1.5 rounded-full">
              3 to 5 Years Experience
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Python Developer (AI/LLM)
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
              3 to 5 Years Experience
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
            We&apos;re seeking a Python Developer to join our AI engineering team. You&apos;ll build end-to-end RAG pipelines, fine-tune LLMs with vLLM, architect Neo4j graph databases, and develop Python microservices — powering the intelligent features of our virtual data room platform.
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
          <ul className="space-y-3 mb-6">
            {requirementsList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Preferred Qualifications</h3>
          <ul className="space-y-2 mb-6">
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
