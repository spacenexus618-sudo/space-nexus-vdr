export default function KindoraJsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/kindora/#organization",
    name: "Kindora",
    alternateName: "Kindora NGO OS",
    url: "https://spacenexus.net/kindora",
    logo: {
      "@type": "ImageObject",
      url: "https://spacenexus.net/icononly_transparent_nobuffer.png",
      width: 512,
      height: 512,
    },
    description:
      "Kindora is the all-in-one nonprofit management platform for donors, grants, programs, finances, volunteers, and impact reporting.",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2500 Marconi Ave, Ste 101",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      postalCode: "95821",
      addressCountry: "US",
    },
    knowsAbout: [
      "Nonprofit Management Software",
      "Donor Management",
      "Grant Management",
      "Fundraising Software",
      "Volunteer Management",
      "Nonprofit CRM",
      "Program Management",
      "Financial Management for Nonprofits",
    ],
    sameAs: [
      "https://www.youtube.com/@KindoraNGOOS1",
      "https://www.instagram.com/space_kindora_/",
      "https://x.com/space_kindora",
      "https://www.linkedin.com/company/space-kindora/",
      "https://www.facebook.com/kindora.ngo.os",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://spacenexus.net/kindora/contact",
      availableLanguage: ["English"],
    },
    parentOrganization: {
      "@type": "Organization",
      name: "SpaceNexus",
      url: "https://spacenexus.net",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://spacenexus.net/kindora/#website",
    name: "Kindora",
    alternateName: "Kindora NGO OS",
    url: "https://spacenexus.net/kindora",
    publisher: { "@id": "https://spacenexus.net/kindora/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://spacenexus.net/kindora/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kindora NGO OS",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Nonprofit Management",
    operatingSystem: "Web Browser",
    url: "https://spacenexus.net/kindora",
    description:
      "All-in-one nonprofit operating system with donor management, grant tracking, program delivery, financial reporting, and volunteer coordination.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free starter plan available — paid plans start at $49/month",
    },
    featureList: [
      "Donor & Donation Management",
      "Grant Lifecycle Management",
      "Client & Case Management",
      "Financial Management & Reporting",
      "Fundraising Campaign Management",
      "Volunteer Management",
      "Communications Hub",
      "Dashboard & Analytics",
      "Expense Tracking",
      "File Management",
    ],
    keywords: "nonprofit management software, NGO platform, donor CRM, grant management, nonprofit operating system",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
