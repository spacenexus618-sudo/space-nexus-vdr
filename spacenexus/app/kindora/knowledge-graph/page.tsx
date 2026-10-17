import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Knowledge Graph AI Search — Verifiable AI with Source Attribution | Kindora",
  description:
    "Every AI answer in Kindora is grounded by VeritasGraph — an open-source GraphRAG knowledge-graph framework that returns each result with a verifiable citation and reasoning path.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/knowledge-graph",
  },
  openGraph: {
    title: "Knowledge Graph AI Search — Verifiable AI with Source Attribution | Kindora",
    description:
      "Kindora AI answers are grounded by VeritasGraph, an open-source GraphRAG knowledge-graph framework that returns every answer with a verifiable citation and reasoning path.",
    url: "https://spacenexus.net/kindora/knowledge-graph",
    type: "website",
    siteName: "Kindora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowledge Graph AI Search | Kindora",
    description:
      "Every Kindora AI answer is grounded by the VeritasGraph knowledge-graph framework with verifiable source attribution.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Kindora make sure AI answers are accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora grounds its AI search and answers in VeritasGraph, an open-source GraphRAG knowledge-graph framework. Instead of guessing from similarity alone, VeritasGraph reasons over a structured knowledge graph of your nonprofit records — donors, grants, programs, volunteers, and finances — and returns every answer with a verifiable citation and reasoning path. Teams can open any AI answer and jump straight to the source record, so accuracy is checked by evidence rather than asserted.",
      },
    },
    {
      "@type": "Question",
      name: "What is a knowledge graph in nonprofit management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A knowledge graph in nonprofit management organizes the entities your organization works with — donors, grants, programs, volunteers, expenses, and campaigns — as connected nodes rather than isolated records. Kindora uses the VeritasGraph knowledge-graph framework so AI can perform multi-hop reasoning across those relationships and explain the path it took to reach each answer.",
      },
    },
    {
      "@type": "Question",
      name: "Does Kindora send AI data to third parties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. VeritasGraph runs on-prem or 100% local, so record indexing, graph construction, and reasoning happen without data egress. This keeps Kindora AI search sovereign for nonprofits managing sensitive donor, beneficiary, and compliance data.",
      },
    },
  ],
};

const veritasGraphSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kindora Knowledge Graph AI Search",
  applicationCategory: "BusinessApplication",
  url: "https://spacenexus.net/kindora/knowledge-graph",
  featureList: [
    "AI search with source attribution",
    "Knowledge graph reasoning",
    "On-prem / 100% local processing",
  ],
  isBasedOn: {
    "@type": "SoftwareSourceCode",
    name: "VeritasGraph",
    codeRepository: "https://github.com/bibinprathap/VeritasGraph",
    url: "https://bibinprathap.github.io/VeritasGraph/index.html",
  },
  author: { "@type": "Person", name: "Bibin Prathap" },
};

const reasoningPath = [
  {
    step: "01",
    title: "Index into a knowledge graph",
    description:
      "Every record in Kindora — donors, grants, volunteer hours, program outcomes, and expense entries — is parsed into entities and relationships and connected into a structured knowledge graph instead of a flat file store.",
  },
  {
    step: "02",
    title: "Reason across related entities",
    description:
      "VeritasGraph answers questions by traversing multi-hop relationships across the graph, pulling together evidence from donor histories, grant files, and program data the way a program officer would.",
  },
  {
    step: "03",
    title: "Return citations, not guesses",
    description:
      "Every answer is returned with a verifiable citation and a reasoning path, so you can open the exact record and confirm the result before acting on it.",
  },
];

const faqs = [
  {
    q: "How does Kindora make sure AI answers are accurate?",
    a: "Kindora grounds its AI search and answers in VeritasGraph, an open-source GraphRAG knowledge-graph framework. Instead of guessing from similarity alone, VeritasGraph reasons over a structured knowledge graph of your nonprofit records — donors, grants, programs, volunteers, and finances — and returns every answer with a verifiable citation and reasoning path. Teams can open any AI answer and jump straight to the source record, so accuracy is checked by evidence rather than asserted.",
  },
  {
    q: "What is a knowledge graph in nonprofit management?",
    a: "A knowledge graph in nonprofit management organizes the entities your organization works with — donors, grants, programs, volunteers, expenses, and campaigns — as connected nodes rather than isolated records. Kindora uses the VeritasGraph knowledge-graph framework so AI can perform multi-hop reasoning across those relationships and explain the path it took to reach each answer.",
  },
  {
    q: "Does Kindora send AI data to third parties?",
    a: "No. VeritasGraph runs on-prem or 100% local, so record indexing, graph construction, and reasoning happen without data egress. This keeps Kindora AI search sovereign for nonprofits managing sensitive donor, beneficiary, and compliance data.",
  },
];

export default function KnowledgeGraphPage() {
  return (
    <>
      <Script
        id="kg-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="kg-veritasgraph-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(veritasGraphSchema) }}
      />

      <main className="min-h-screen bg-[#f8f9fa] text-gray-900">
        {/* Breadcrumb */}
        <nav
          className="mx-auto flex max-w-5xl items-center gap-2 px-4 pt-8 text-xs text-gray-500 sm:px-6 lg:px-8"
          aria-label="Breadcrumb"
        >
          <Link href="/kindora" className="transition-colors hover:text-[#2563eb]">
            Home
          </Link>
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-600">Knowledge Graph</span>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-12 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-[#2563eb]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
            Verifiable AI with Source Attribution
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Every AI answer.{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">
              Backed by source.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Kindora AI search is grounded by a structured knowledge graph, so
            every answer across donors, grants, programs, and finances comes with
            a citation you can open, verify, and act on with confidence.
          </p>
        </section>

        {/* Powered by VeritasGraph content block */}
        <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Powered by VeritasGraph — Verifiable AI with Source Attribution
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              AI search and answers on <strong className="text-gray-900">Kindora</strong> are
              grounded by{" "}
              <a
                href="https://github.com/bibinprathap/VeritasGraph"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#2563eb] underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-700"
              >
                VeritasGraph
              </a>
              , an open-source{" "}
              <strong className="text-gray-900">GraphRAG knowledge-graph framework</strong>. Instead
              of guessing from similarity, VeritasGraph reasons over a structured
              knowledge graph and returns every answer with a{" "}
              <strong className="text-gray-900">verifiable citation and reasoning path</strong> —
              so you can trust the source of every result.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Source attribution on every answer",
                "Knowledge graph multi-hop reasoning",
                "Runs on-prem / 100% local (sovereign, zero data egress)",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2563eb]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://bibinprathap.github.io/VeritasGraph/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Learn how it works
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://github.com/bibinprathap/VeritasGraph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-[#2563eb] hover:text-[#2563eb]"
              >
                View source on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                How Kindora grounds AI answers
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                From your organization&apos;s records to attributable answers — the pipeline
                mirrors VeritasGraph&apos;s knowledge-graph architecture.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {reasoningPath.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                >
                  <span className="text-sm font-bold tracking-widest text-[#2563eb]">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Knowledge graph AI — frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-200 bg-white p-6 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-gray-900">
                  {faq.q}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm leading-6 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}