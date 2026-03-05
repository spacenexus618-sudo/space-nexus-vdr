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
    operatingSystem: "Web Browser",
    description:
      "Enterprise Virtual Data Room for secure M&A due diligence, capital raising, and document management.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Contact for enterprise pricing",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Bank-grade security with AES-256 encryption",
      "AI-powered document processing",
      "Real-time activity analytics",
      "Granular user permissions",
      "Q&A workflow management",
      "Customizable branding",
      "API integrations",
      "24/7 enterprise support",
    ],
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
