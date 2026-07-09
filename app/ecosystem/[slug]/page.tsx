import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ecosystemProducts, getProductBySlug } from "../data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ecosystemProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found | Space AI Ecosystem" };
  }

  const canonical = `https://spacenexus.net/ecosystem/${slug}`;

  return {
    title: `${product.name} — Space AI Product | SpaceNexus`,
    description: `${product.description} Part of the Space AI product family alongside SpaceNexus.`,
    alternates: { canonical },
    openGraph: {
      title: `${product.name} — Space AI Product`,
      description: product.description,
      url: canonical,
      type: "website",
      siteName: "SpaceNexus",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — Space AI Product`,
      description: product.description,
    },
  };
}

export default async function EcosystemProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const currentIndex = ecosystemProducts.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? ecosystemProducts[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < ecosystemProducts.length - 1
      ? ecosystemProducts[currentIndex + 1]
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${product.name} — Space AI Product`,
    url: `https://spacenexus.net/ecosystem/${slug}`,
    description: product.longDescription,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "SpaceNexus", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Space AI Ecosystem", item: "https://spacenexus.net/ecosystem" },
        { "@type": "ListItem", position: 3, name: product.name, item: `https://spacenexus.net/ecosystem/${slug}` },
      ],
    },
    about: {
      "@type": "SoftwareApplication",
      name: product.name,
      url: product.url,
      applicationCategory: "BusinessApplication",
      description: product.longDescription,
      publisher: {
        "@type": "Organization",
        name: "Space AI",
        url: "https://pmspace.ai",
        brand: { "@type": "Brand", name: "Space AI" },
      },
    },
  };

  return (
    <>
      <Script
        id={`ecosystem-${slug}-schema`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gray-950 text-white">
        {/* Breadcrumb */}
        <div className="border-b border-gray-800 bg-gray-900/50">
          <div className="mx-auto max-w-5xl px-6 py-3 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">SpaceNexus</Link>
            <span className="mx-2">/</span>
            <Link href="/ecosystem" className="hover:text-gray-300 transition-colors">Space AI Ecosystem</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">{product.name}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-6 py-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-4 py-1.5 text-sm text-gray-400">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: product.color }}
              />
              Space AI Product — {product.category}
            </div>

            <div
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold"
              style={{ backgroundColor: product.color + "33", color: product.color, border: `1px solid ${product.color}44` }}
            >
              {product.name.charAt(0)}
            </div>

            <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mb-3 text-lg font-medium" style={{ color: product.color }}>
              {product.tagline}
            </p>
            <p className="mb-8 max-w-2xl text-gray-400">
              {product.longDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition"
                style={{ backgroundColor: product.color }}
              >
                Visit {product.name}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/ecosystem"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-5 py-2.5 text-sm font-semibold text-gray-300 transition hover:border-gray-400 hover:text-white"
              >
                All ecosystem products
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold text-white">What {product.name} Does</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {product.keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-gray-800 bg-gray-900 p-4"
              >
                <div
                  className="mt-0.5 h-5 w-5 shrink-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: product.color + "33" }}
                >
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: product.color }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why it complements SpaceNexus */}
        <section className="border-t border-gray-800 bg-gray-900/30">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="mb-3 text-2xl font-bold text-white">
              Why SpaceNexus Users Also Use {product.name}
            </h2>
            <p className="mb-8 text-gray-500 text-sm">
              These are independent products — each works on its own. Here is
              why organizations that use SpaceNexus often find {product.name}{" "}
              useful too.
            </p>
            <div className="space-y-4">
              {product.whyItComplements.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-gray-800 bg-gray-900 p-5"
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                    style={{ backgroundColor: product.color + "44" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-300">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold text-white">Key Benefits</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {product.highlights.map((highlight, i) => (
              <div key={i} className="rounded-xl border border-gray-800 bg-gray-900 p-5">
                <div
                  className="mb-3 h-1.5 w-8 rounded-full"
                  style={{ backgroundColor: product.color }}
                />
                <p className="text-sm text-gray-300">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prev / Next navigation */}
        <section className="border-t border-gray-800">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <div className="flex items-center justify-between gap-4">
              {prevProduct ? (
                <Link
                  href={`/ecosystem/${prevProduct.slug}`}
                  className="flex items-center gap-2 rounded-xl border border-gray-800 bg-gray-900 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-gray-600 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  {prevProduct.name}
                </Link>
              ) : (
                <div />
              )}

              <Link
                href="/ecosystem"
                className="text-sm text-gray-500 transition hover:text-gray-300"
              >
                All products
              </Link>

              {nextProduct ? (
                <Link
                  href={`/ecosystem/${nextProduct.slug}`}
                  className="flex items-center gap-2 rounded-xl border border-gray-800 bg-gray-900 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-gray-600 hover:text-white"
                >
                  {nextProduct.name}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-800 bg-gray-900/50">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white">
              Interested in SpaceNexus?
            </h2>
            <p className="mb-8 text-gray-400">
              SpaceNexus is the virtual data room in the Space AI family. Request
              a demo to see how it handles secure deal management and due
              diligence.
            </p>
            <Link
              href="/demo"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Request a SpaceNexus demo
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
