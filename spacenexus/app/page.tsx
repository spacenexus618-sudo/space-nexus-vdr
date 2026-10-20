import type { Metadata } from "next";
import Script from "next/script";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import ProductEcosystem from "./components/ProductEcosystem";
import VDRScreenshotGallery from "./components/VDRScreenshotGallery";
import IDPSection from "./components/IDPSection";
import TransformationTable from "./components/TransformationTable";
import BenefitsSection from "./components/BenefitsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import VeritasGraphFAQ from "./components/VeritasGraphFAQ";
import KindoraCallout from "./components/KindoraCallout";
import GlobalPresence from "./components/GlobalPresence";
import LastUpdated from "./components/LastUpdated";
import AnswerBlock from "./components/AnswerBlock";

export const metadata: Metadata = {
  title: "AI-Powered Virtual Data Room Software for M&A, Fundraising & Legal Deals | SpaceNexus",
  description:
    "SpaceNexus is the AI-powered virtual data room for M&A due diligence, fundraising & legal deals. SOC 2 Type II certified, transparent flat-rate pricing & 24-hour setup. Start free.",
  alternates: {
    canonical: "https://spacenexus.net",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SpaceNexus Virtual Data Room Software",
  "description": "AI-powered virtual data room software for M&A due diligence, capital raising, and secure document sharing with bank-grade security and transparent pricing",
  "url": "https://spacenexus.net",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "500"
  },
  "author": {
    "@type": "Organization",
    "name": "SpaceNexus"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is virtual data room software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtual data room software is enterprise-grade, cloud-based document collaboration and management software designed specifically for high-stakes business transactions. SpaceNexus virtual data room software combines secure document storage with advanced features like granular access controls, real-time buyer analytics, AI-powered document processing, audit trails, and Q&A workflows. Unlike generic file storage software, virtual data room software is built for M&A due diligence, capital raising, IPOs, and legal transactions with bank-grade security, compliance certifications (SOC 2 Type II, ISO 27001), and deal-specific workflows.",
      },
    },
    {
      "@type": "Question",
      name: "What are virtual data rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtual data rooms (VDRs) are secure, cloud-based platforms for storing and sharing confidential documents during business transactions. Unlike generic cloud storage, virtual data rooms provide NDA enforcement at room entry, granular document-level permission controls, a tamper-evident audit trail, structured Q&A workflow management, dynamic watermarking, and compliance certifications (SOC 2 Type II, ISO 27001) required for M&A due diligence, capital raising, IPOs, and legal proceedings.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Virtual Data Room (VDR)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Virtual Data Room (VDR) is a secure online repository used to store and share confidential documents during high-stakes transactions like M&A due diligence, capital raising, and corporate restructuring. SpaceNexus provides bank-grade security, granular access controls, full audit trails, and AI-powered document processing — with transparent, published pricing and no per-page fees.",
      },
    },
    {
      "@type": "Question",
      name: "How much do virtual data rooms cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtual data rooms range from transparent, published monthly pricing (SpaceNexus) to quote-based per-deal pricing for legacy enterprise providers like Datasite and Intralinks. SpaceNexus includes AI redaction, buyer analytics, and structured Q&A as standard features — not add-ons. There are no per-page charges, no mandatory annual contracts, and setup takes under 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "How is SpaceNexus different from Dropbox or Google Drive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dropbox and Google Drive are general-purpose file storage that lack the security controls, compliance certifications, and deal-specific features required for M&A transactions. SpaceNexus virtual data rooms provide 256-bit AES encryption, granular user permissions, full audit trails, Q&A workflows, NDA enforcement, and SOC 2 Type II certification — features that generic cloud storage simply does not offer.",
      },
    },
    {
      "@type": "Question",
      name: "Is SpaceNexus SOC 2 compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SpaceNexus meets enterprise-grade security standards including SOC 2 Type II compliance, ISO 27001 alignment, GDPR readiness, and CCPA compliance. The platform supports SEC regulatory requirements for IPO data rooms and FINRA compliance for investment banking transactions. All data is encrypted in transit (TLS 1.3) and at rest (AES-256) with 99.9% uptime SLA.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we set up a virtual data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus virtual data rooms are operational within 24 hours. The drag-and-drop bulk uploader and AI-powered auto-indexing dramatically reduces setup time compared to legacy VDR providers. Invite buyers and advisors with a single click — no software installation required, accessible from any browser.",
      },
    },
    {
      "@type": "Question",
      name: "What industries use virtual data rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtual data rooms are used across M&A deals, private equity fundraising, IPO preparation, debt financing, real estate transactions, life sciences licensing, and legal due diligence. SpaceNexus supports US investment banks, private equity firms, Am Law 100 law firms, corporate development teams, and real estate companies nationwide.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* AI Answer Block */}
      <AnswerBlock text="SpaceNexus is an AI-powered virtual data room platform for M&A due diligence, capital raising, and secure document sharing. It offers transparent pricing, AI document redaction, structured Q&A workflows, and real-time buyer analytics with SOC 2 Type II certification." />

      {/* Trust Bar - Security Features */}
      <TrustBar />

      {/* Core Product Ecosystem - 12 Modules */}
      <div className="content-auto">
        <ProductEcosystem />
      </div>

      {/* Real Product Screenshots - Interactive Gallery */}
      <div className="content-auto">
        <VDRScreenshotGallery />
      </div>

      {/* Intelligent Document Processing Feature */}
      <div className="content-auto">
        <IDPSection />
      </div>

      {/* Before/After Transformation Table */}
      <div className="content-auto">
        <TransformationTable />
      </div>

      {/* Benefits & ROI Section */}
      <div className="content-auto">
        <BenefitsSection />
      </div>

      {/* Testimonials / Social Proof */}
      <div className="content-auto">
        <TestimonialsSection />
      </div>

      {/* Kindora — Nonprofit Management Platform (cross-product + link equity) */}
      <div className="content-auto">
        <KindoraCallout />
      </div>

      {/* FAQ Section */}
      <div className="content-auto">
        <FAQSection />
      </div>

      {/* VeritasGraph FAQ / GEO Section */}
      <div className="content-auto">
        <VeritasGraphFAQ />
      </div>

      {/* Global Presence - Office Locations */}
      <div className="content-auto">
        <GlobalPresence />
      </div>

      {/* SEO Content Block - Virtual Data Room Software Focus */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Virtual Data Room Software for Enterprise M&amp;A, Capital Raising &amp; Legal Transactions
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            SpaceNexus is the leading{" "}
            <strong>virtual data room software</strong>
            {" "}platform trusted by 500+ enterprises for secure document collaboration during high-stakes business transactions. Our advanced{" "}
            <a href="/features/data-room" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              virtual data room software
            </a>{" "}
            features AI-powered document processing, real-time buyer analytics, granular permission controls, and tamper-evident audit trails. Unlike legacy{" "}
            <a href="/competitors/vdr-alternatives" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              virtual data room providers
            </a>
            , our software delivers{" "}
            <a href="/features/security-compliance" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              bank-grade AES-256 encryption
            </a>
            , SOC 2 Type II compliance, and transparent published pricing with no per-page fees.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The SpaceNexus <strong>virtual data room software</strong> is purpose-built for deal teams across investment banking, private equity, law firms, and corporate development. Our{" "}
            <a href="/features/data-room" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              secure document sharing software
            </a>{" "}
            eliminates the friction of traditional VDR platforms — set up in under 24 hours, no installation required, accessible from any browser. Whether you need{" "}
            <a href="/solutions/mergers-and-acquisitions-vdr" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              M&amp;A data room software
            </a>
            ,{" "}
            <a href="/solutions/series-a-fundraising-data-room" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              fundraising platform software
            </a>
            , or{" "}
            <a href="/industries/law-firms" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              legal document management software
            </a>
            , SpaceNexus delivers enterprise-grade security, deal-specific workflows, and competitive advantages that close deals faster. Experience why leading law firms, investment banks, and PE firms choose SpaceNexus virtual data room software.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="/virtual-data-room-providers" className="text-[#2563eb] hover:underline font-medium min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              Virtual Data Room Providers →
            </a>
            <a href="/data-room-providers" className="text-[#2563eb] hover:underline font-medium min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              Data Room Providers →
            </a>
            <a href="/competitors/vdr-alternatives" className="text-[#2563eb] hover:underline font-medium min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              VDR Comparison 2026 →
            </a>
            <a href="/competitors/datasite-alternative" className="text-[#2563eb] hover:underline font-medium min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              Datasite Alternative →
            </a>
            <a href="/competitors/intralinks-alternative" className="text-[#2563eb] hover:underline font-medium min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              Intralinks Alternative →
            </a>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
      </section>
    </>
  );
}
