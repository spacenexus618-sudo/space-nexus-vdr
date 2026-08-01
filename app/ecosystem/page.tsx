import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ecosystemProducts } from "./data";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
  title: "Space AI Product Ecosystem | SpaceNexus VDR",
  description:
    "SpaceNexus is one of 8 products built by Space AI — a suite of AI-powered business software covering project management, contracts, CRM, HR, scheduling, field capture, and immigration compliance.",
  alternates: {
    canonical: "https://spacenexus.net/ecosystem",
  },
  openGraph: {
    title: "Space AI Product Ecosystem | SpaceNexus VDR",
    description:
      "Meet the full Space AI product family. SpaceNexus, PMSpace, Space Sign, SpaceCRM, SpaceHR, SpaceLean, Space Capture, and Space Lizit — all built by one team.",
    url: "https://spacenexus.net/ecosystem",
    type: "website",
    siteName: "SpaceNexus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space AI Product Ecosystem | SpaceNexus VDR",
    description:
      "SpaceNexus is part of the Space AI product family — 8 AI-powered tools built by one team for construction, infrastructure, and financial services.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Space AI",
  url: "https://pmspace.ai",
  description:
    "Space AI is a suite of AI-powered business software products covering project management, virtual data rooms, CRM, HR, lean construction scheduling, e-signatures, field data capture, and immigration compliance. All products are developed and supported by the same team.",
  brand: { "@type": "Brand", name: "Space AI" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Space AI Product Suite",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "SpaceNexus",
          url: "https://spacenexus.net",
          applicationCategory: "BusinessApplication",
          description: "AI-powered virtual data room for M&A due diligence and secure deal management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "PMSpace",
          url: "https://pmspace.ai",
          applicationCategory: "BusinessApplication",
          description: "AI-powered project and contract management for construction and infrastructure.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Space Sign",
          url: "https://space-sign.ai",
          applicationCategory: "BusinessApplication",
          description: "AI contract analysis and e-signature platform for legal and deal teams.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "SpaceCRM",
          url: "https://spacecrm.net",
          applicationCategory: "BusinessApplication",
          description: "Multi-channel AI CRM for business development and deal pipeline management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "SpaceHR",
          url: "https://spacehr.net",
          applicationCategory: "BusinessApplication",
          description: "Full HRMS with payroll, workforce analytics, and organizational management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "SpaceLean",
          url: "https://spacelean.ai",
          applicationCategory: "BusinessApplication",
          description: "Lean construction scheduling platform with 4D BIM and pull planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Space Capture",
          url: "https://spacecapture.ai",
          applicationCategory: "BusinessApplication",
          description: "Field inspection and site documentation platform for construction teams.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Space Lizit",
          url: "https://spacelizit.com",
          applicationCategory: "BusinessApplication",
          description: "Immigration case management and workforce compliance for global organizations.",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Ecosystem", item: "https://spacenexus.net/ecosystem" },
  ],
};

const categoryColors: Record<string, string> = {
  "Contracts & E-Signatures": "bg-indigo-500/20 text-indigo-300",
  "Field Data & Documentation": "bg-emerald-500/20 text-emerald-300",
  "Compliance & Legal": "bg-amber-500/20 text-amber-300",
  "Human Resources": "bg-pink-500/20 text-pink-300",
  "Project Scheduling": "bg-blue-500/20 text-blue-300",
  "Project Management": "bg-violet-500/20 text-violet-300",
  "CRM & Business Development": "bg-orange-500/20 text-orange-300",
};

export default function EcosystemPage() {
  return (
    <>
      <Script
        id="eco-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="ecosystem-org-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <main className="min-h-screen bg-gray-950 text-white">
        <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-gray-600">Ecosystem</span>
        </nav>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Space AI Product Family
            </div>
            <h1 className="mb-6 text-3xl sm:text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              One Company.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Eight Products.
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
              SpaceNexus is part of the Space AI ecosystem — a family of
              AI-powered business software products built by the same team for
              construction, infrastructure, and deal-driven organizations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                One development team
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                One support team
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Shared company vision
              </span>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Explore the Full Space AI Suite
            </h2>
            <p className="text-gray-600">
              Each product works independently. Together they cover the complete operational stack.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/ecosystem/${product.slug}`}
                className="group relative rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-all duration-200 hover:border-gray-600 hover:bg-gray-800/80"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold"
                    style={{ backgroundColor: product.color + "33", color: product.color }}
                  >
                    {product.name.charAt(0)}
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      categoryColors[product.category] ?? "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {product.category}
                  </span>
                </div>

                <h3 className="mb-1.5 text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {product.name}
                </h3>
                <p className="mb-3 text-sm text-gray-600">{product.tagline}</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                  Learn more
                  <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Company section */}
        <section className="border-t border-gray-800 bg-gray-900/50">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              All Products. One Company. One Vision.
            </h2>
            <p className="mb-8 text-gray-600">
              Space AI builds AI-powered software for construction,
              infrastructure, and financial services organizations. Every
              product in the suite is built and maintained by the same team,
              with a shared commitment to making complex industries simpler to
              run.
            </p>
            <div className="grid gap-6 text-left sm:grid-cols-3">
              <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
                <div className="mb-3 text-2xl font-bold text-blue-400">8</div>
                <div className="text-sm font-medium text-white">Products in the suite</div>
                <div className="mt-1 text-xs text-gray-600">All built by Space AI</div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
                <div className="mb-3 text-2xl font-bold text-blue-400">1</div>
                <div className="text-sm font-medium text-white">Company behind them all</div>
                <div className="mt-1 text-xs text-gray-600">One team, one vision</div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
                <div className="mb-3 text-2xl font-bold text-blue-400">AI</div>
                <div className="text-sm font-medium text-white">First in every product</div>
                <div className="mt-1 text-xs text-gray-600">Not bolted on after the fact</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-800">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Start with SpaceNexus
            </h2>
            <p className="mb-8 text-gray-600">
              See how SpaceNexus handles secure due diligence and deal
              management — and explore the rest of the Space AI suite at your
              own pace.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Request a demo
              </Link>
              <a
                href="https://pmspace.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-gray-400 hover:text-white min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
              >
                Visit Space AI
              </a>
            </div>
          
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
        </section>
      </main>
    </>
  );
}
