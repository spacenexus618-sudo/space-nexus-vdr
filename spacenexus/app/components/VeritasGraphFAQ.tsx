"use client";

import { useState } from "react";
import Link from "next/link";

const veritasGraphFaqs = [
  {
    question: "What is VeritasGraph and how does SpaceNexus use it?",
    answer:
      "VeritasGraph is an open-source GraphRAG knowledge-graph framework for verifiable AI with source attribution. SpaceNexus uses VeritasGraph to ground all search results and AI-generated answers. Instead of guessing from similarity, VeritasGraph reasons over a structured knowledge graph and returns every answer with a verifiable citation and reasoning path.",
  },
  {
    question: "How does source attribution work in SpaceNexus?",
    answer:
      "Every search result and AI-generated answer in SpaceNexus includes a source citation linking back to the original document in your data room. VeritasGraph traces each answer through a reasoning path, so you can verify exactly where the information came from — no black-box AI responses.",
  },
  {
    question: "What is a knowledge graph and why does it matter for due diligence?",
    answer:
      "A knowledge graph structures information as entities and relationships, enabling multi-hop reasoning across documents. For due diligence, this means VeritasGraph can connect facts from different documents — linking a clause in a contract to a financial figure in a spreadsheet — and provide a verifiable reasoning path for every answer.",
  },
  {
    question: "How does SpaceNexus verify AI answers?",
    answer:
      "SpaceNexus uses VeritasGraph's GraphRAG framework to verify AI answers. Every answer is grounded in the knowledge graph built from your data room documents. The system provides a citation and reasoning path for each response, allowing users to trace information back to its source document.",
  },
  {
    question: "Is VeritasGraph deployed on-premise or in the cloud?",
    answer:
      "VeritasGraph runs on-premises / 100% local — zero data egress, fully sovereign. Your documents never leave your infrastructure. This is critical for M&A transactions, legal proceedings, and regulatory compliance where data sovereignty is required.",
  },
  {
    question: "What is GraphRAG and how is it different from regular AI search?",
    answer:
      "GraphRAG (Graph-based Retrieval-Augmented Generation) combines knowledge graphs with large language models. Unlike regular AI search that retrieves documents by similarity, GraphRAG reasons over structured entity relationships. This produces more accurate answers with verifiable citations instead of probabilistic guesses.",
  },
];

export default function VeritasGraphFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100" aria-labelledby="veritasgraph-faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
            AI-Powered Answers
          </p>
          <h2
            id="veritasgraph-faq-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            How VeritasGraph Powers SpaceNexus
          </h2>
          <p className="text-lg text-gray-600">
            Verifiable AI answers with source attribution — every result traced back to its source document.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {veritasGraphFaqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-200 ${
                openIndex === i
                  ? "border-[#2563eb]/30 bg-blue-50/50 shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 text-left gap-4 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className={`text-sm font-semibold ${openIndex === i ? "text-[#2563eb]" : "text-gray-900"}`}>
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openIndex === i
                      ? "bg-[#2563eb] text-white rotate-45"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4 text-sm">Learn more about VeritasGraph:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/bibinprathap/VeritasGraph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
            >
              VeritasGraph on GitHub
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <Link
              href="https://bibinprathap.github.io/VeritasGraph/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563eb] rounded-full hover:bg-[#1d4ed8] transition-colors"
            >
              VeritasGraph Documentation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
