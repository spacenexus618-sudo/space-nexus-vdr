export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    legalName: "SpaceNexus Inc.",
    alternateName: "Space Nexus",
    url: "https://spacenexus.net",
    logo: {
      "@type": "ImageObject",
      url: "https://spacenexus.net/logo.png",
      width: 512,
      height: 512,
    },
    image: "https://spacenexus.net/og-image.png",
    description:
      "SpaceNexus is the enterprise-grade Virtual Data Room for M&A due diligence, capital raising, and secure document sharing for legal teams.",
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    knowsAbout: [
      "Virtual Data Rooms",
      "M&A Due Diligence",
      "Secure Document Sharing",
      "Investment Banking Technology",
      "Legal Technology",
      "SOC 2 Compliance",
      "ISO 27001",
    ],
    sameAs: [
      "https://twitter.com/spacenexus",
      "https://linkedin.com/company/spacenexus",
      "https://www.crunchbase.com/organization/spacenexus",
      "https://www.g2.com/products/spacenexus/reviews",
      "https://www.capterra.com/p/spacenexus/",
      "https://www.trustradius.com/products/spacenexus/reviews",
      "https://www.getapp.com/p/spacenexus/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-800-SPACENEXUS",
        contactType: "sales",
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "Australia" },
        ],
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://spacenexus.net/demo",
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    slogan: "The Secure Virtual Data Room for M&A & Legal Teams",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SpaceNexus Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "SpaceNexus VDR",
            applicationCategory: "BusinessApplication",
            url: "https://spacenexus.net",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Kindora NGO OS",
            applicationCategory: "BusinessApplication",
            url: "https://spacenexus.net/kindora",
          },
        },
      ],
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SpaceNexus Virtual Data Room",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Virtual Data Room",
    operatingSystem: "Web Browser",
    url: "https://spacenexus.net",
    description:
      "Enterprise Virtual Data Room for secure M&A due diligence, capital raising, and document management. Built on Zero Trust architecture with AES-256 encryption and SOC 2 Type II compliance.",
    offers: {
      "@type": "Offer",
      price: "149",
      priceCurrency: "USD",
      description: "Starting from $149/month — Enterprise pricing available",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Zero Trust architecture",
      "AES-256 encryption at rest and in transit",
      "SOC 2 Type II certified",
      "ISO 27001 aligned",
      "SEC and FINRA compliance ready",
      "FCA and UK GDPR compliance ready",
      "CCPA and GDPR data privacy compliant",
      "AI-powered document processing and redaction",
      "Real-time buyer activity analytics",
      "Granular role-based permissions",
      "Q&A due diligence workflow management",
      "Dynamic watermarking and print restrictions",
      "Full-text search across 100+ file types",
      "24/7 enterprise support",
    ],
    keywords: "virtual data room, VDR, M&A due diligence, secure data room, investment banking data room, private equity data room",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SpaceNexus",
    alternateName: "Space Nexus",
    url: "https://spacenexus.net",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://spacenexus.net/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://spacenexus.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: "https://spacenexus.net/features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Industries",
        item: "https://spacenexus.net/industries",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
