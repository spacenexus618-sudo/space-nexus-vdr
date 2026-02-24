export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Space Nexus",
    url: "https://spacenexus.net",
    logo: "https://spacenexus.net/logo.png",
    description:
      "Enterprise-grade Virtual Data Room for M&A due diligence, capital raising, and secure document sharing.",
    foundingDate: "2020",
    sameAs: [
      "https://twitter.com/spacenexus",
      "https://linkedin.com/company/spacenexus",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-SPACENEXUS",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Space Nexus Virtual Data Room",
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
    name: "Space Nexus",
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
