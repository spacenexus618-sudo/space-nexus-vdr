import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import ProductEcosystem from "./components/ProductEcosystem";
import IDPSection from "./components/IDPSection";
import TransformationTable from "./components/TransformationTable";
import BenefitsSection from "./components/BenefitsSection";

export default function Home() {
  return (
    <>
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
    </>
  );
}
