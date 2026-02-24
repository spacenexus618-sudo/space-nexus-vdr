import Script from "next/script";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import ProductEcosystem from "./components/ProductEcosystem";
import IDPSection from "./components/IDPSection";
import TransformationTable from "./components/TransformationTable";
import BenefitsSection from "./components/BenefitsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";

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
        text: "Yes. Space Nexus meets enterprise-grade security standards including SOC 2 Type II compliance, ISO 27001 alignment, and GDPR readiness. All data is encrypted in transit (TLS 1.3) and at rest (AES-256) with 99.9% uptime SLA.",
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
        text: "VDRs are used across M&A deals, private equity fundraising, IPO preparation, debt financing, real estate transactions, life sciences licensing, and legal due diligence. Space Nexus supports investment banking, private equity, law firms, corporate development, and real estate.",
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
      <ProductEcosystem />

      {/* Intelligent Document Processing Feature */}
      <IDPSection />

      {/* Before/After Transformation Table */}
      <TransformationTable />

      {/* Benefits & ROI Section */}
      <BenefitsSection />

      {/* Testimonials / Social Proof */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
