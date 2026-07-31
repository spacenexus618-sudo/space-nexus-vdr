"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        question: "What are virtual data rooms?",
        answer:
            "Virtual data rooms (VDRs) are secure, cloud-based platforms for storing and sharing confidential documents during business transactions. Unlike generic file storage, virtual data rooms provide NDA enforcement at room entry, document-level permission controls, a tamper-evident audit trail, structured Q&A workflow management, dynamic watermarking, and compliance certifications (SOC 2 Type II, ISO 27001) required for M&A due diligence, capital raising, IPOs, and legal proceedings.",
    },
    {
        question: "What is a Virtual Data Room (VDR)?",
        answer:
            "A Virtual Data Room (VDR) is a secure online repository used to store and share confidential documents during high-stakes transactions like M&A due diligence, capital raising, and corporate restructuring. Unlike generic cloud storage, a VDR offers granular access controls, full audit trails, NDA management, and AI-powered document processing designed specifically for deal teams.",
    },
    {
        question: "How is Space Nexus different from Dropbox or Google Drive?",
        answer:
            "Dropbox and Google Drive are general-purpose file storage — they lack the security controls, compliance features, and deal-specific functionality that M&A transactions require. Space Nexus provides bank-grade 256-bit AES encryption, granular user permissions (view, download, print, watermark), full audit trails, Q&A workflows, and AI document processing. These are non-negotiable for enterprise deals.",
    },
    {
        question: "How quickly can we set up a data room?",
        answer:
            "Most deal rooms are operational within 24 hours. Our drag-and-drop bulk uploader and AI-powered auto-indexing dramatically reduces setup time compared to traditional VDRs. Invite buyers and advisors with a single click — they can access documents immediately via any browser, no software installation required.",
    },
    {
        question: "Is Space Nexus SOC 2 compliant?",
        answer:
            "Yes. Space Nexus meets enterprise-grade security standards including SOC 2 Type II compliance, ISO 27001 alignment, and GDPR readiness. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Our infrastructure runs on enterprise cloud providers with 99.9% uptime SLA and real-time backup.",
    },
    {
        question: "What industries use virtual data rooms?",
        answer:
            "VDRs are used across M&A deals, private equity fundraising, IPO preparation, debt financing, real estate transactions, life sciences licensing, and legal due diligence. Space Nexus is purpose-built for investment banking, private equity, law firms, corporate development teams, and real estate investment managers.",
    },
    {
        question: "Can I control who sees which documents?",
        answer:
            "Yes — Space Nexus offers the most granular permission system in the market. You can control access at the folder or individual file level, restrict downloads or printing, apply dynamic watermarks with viewer identity, set document expiry dates, and revoke access instantly at any time. All activity is logged in real time.",
    },
    {
        question: "How does the pricing work?",
        answer:
            "Space Nexus offers flexible plans based on deal volume and storage. Our Starter plan covers single deals, while Professional and Enterprise plans cover unlimited concurrent deal rooms, advanced analytics, and dedicated support. Contact our team for a custom quote tailored to your transaction volume.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 lg:py-28 bg-white border-t border-gray-100" aria-labelledby="faq-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                        Got Questions?
                    </p>
                    <h2
                        id="faq-heading"
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Frequently asked questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything deal teams need to know about virtual data rooms and choosing the right provider.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-xl border transition-all duration-200 ${openIndex === i
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
                                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === i
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

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4 text-sm">Still have questions?</p>
                    <Link
                        href="/demo"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-colors shadow-lg shadow-blue-500/20"
                    >
                        Talk to Our Team
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
