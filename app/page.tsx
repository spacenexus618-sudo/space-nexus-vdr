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
import KindoraCallout from "./components/KindoraCallout";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Virtual Data Room (VDR)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Virtual Data Room (VDR) is a secure online repository used to store and share confidential documents during high-stakes transactions like M&A due diligence, capital raising, and corporate restructuring. Space Nexus provides bank-grade security, granular access controls, full audit trails, and AI-powered document processing.",
      },
    },
    {
      "@type": "Question",
      name: "How is Space Nexus different from Dropbox or Google Drive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Space Nexus provides bank-grade 256-bit AES encryption, granular user permissions, full audit trails, Q&A workflows, and AI document processing — features that generic cloud storage like Dropbox or Google Drive simply do not offer for enterprise M&A transactions.",
      },
    },
    {
      "@type": "Question",
      name: "Is Space Nexus SOC 2 compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SpaceNexus meets enterprise-grade security standards including SOC 2 Type II compliance, ISO 27001 alignment, GDPR readiness, and CCPA compliance. The platform supports SEC regulatory requirements for IPO data rooms and FINRA compliance for investment banking transactions. All data is encrypted in transit (TLS 1.3) and at rest (AES-256) with 99.9% uptime SLA.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we set up a data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most deal rooms are operational within 24 hours. Our drag-and-drop bulk uploader and AI-powered auto-indexing significantly reduces setup time. Invite buyers and advisors with a single click — no software installation required.",
      },
    },
    {
      "@type": "Question",
      name: "What industries use virtual data rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VDRs are used across M&A deals, private equity fundraising, IPO preparation, debt financing, real estate transactions, life sciences licensing, and legal due diligence. SpaceNexus supports US investment banks, private equity firms, Am Law 100 law firms, corporate development teams, and real estate companies nationwide.",
      },
    },
    {
      "@type": "Question",
      name: "How does Q&A management work in a Virtual Data Room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus provides a dedicated Virtual Data Room Q&A module where buyers submit due diligence questions, sellers categorize them by department (Technical, Finance, HR, Commercial), assign to team members, and track status from Open through to Answered. Every question and response is logged in a full audit trail for compliance and transparency.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <HeroSection />

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

      {/* SEO Content Block */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Enterprise Virtual Data Room for M&amp;A and Due Diligence
          </h2>
          <p className="text-gray-600 leading-relaxed">
            SpaceNexus is the enterprise{" "}
            <a href="/features/data-room" className="text-[#2563eb] hover:underline">
              virtual data room
            </a>{" "}
            trusted by M&amp;A advisors, investment bankers, private equity firms, and legal teams
            worldwide. Our{" "}
            <a href="/features/security-compliance" className="text-[#2563eb] hover:underline">
              secure data room
            </a>{" "}
            platform delivers bank-grade encrypted file sharing, AI-powered{" "}
            <a href="/features/data-room" className="text-[#2563eb] hover:underline">
              due diligence automation
            </a>
            , and granular access controls — everything deal teams need for complex transactions.
            Whether you need an{" "}
            <a href="/industries/investment-banking" className="text-[#2563eb] hover:underline">
              M&amp;A data room
            </a>{" "}
            for a cross-border acquisition,{" "}
            <a href="/industries/healthcare" className="text-[#2563eb] hover:underline">
              HIPAA compliant file sharing
            </a>{" "}
            for healthcare deals, or{" "}
            <a href="/features/security-compliance" className="text-[#2563eb] hover:underline">
              confidential document sharing
            </a>{" "}
            for capital raises, SpaceNexus delivers speed, security, and compliance. Trusted by
            500+ enterprises as the best{" "}
            <a href="/features/security-compliance" className="text-[#2563eb] hover:underline">
              secure virtual data room
            </a>{" "}
            for high-stakes transactions.
          </p>
        </div>
      </section>
    </>
  );
}
