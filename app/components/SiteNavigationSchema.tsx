export default function SiteNavigationSchema() {
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "SpaceNexus Main Navigation",
    url: "https://spacenexus.net",
    hasPart: [
      {
        "@type": "SiteNavigationElement",
        name: "Products",
        hasPart: [
          {
            "@type": "SiteNavigationElement",
            name: "Space Nexus VDR",
            url: "https://spacenexus.net",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Kindora NGO OS",
            url: "https://spacenexus.net/kindora",
          },
        ],
      },
      {
        "@type": "SiteNavigationElement",
        name: "Features",
        url: "https://spacenexus.net/features",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Industries",
        hasPart: [
          {
            "@type": "SiteNavigationElement",
            name: "Private Equity",
            url: "https://spacenexus.net/industries/private-equity",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Investment Banking",
            url: "https://spacenexus.net/industries/investment-banking",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Law Firms",
            url: "https://spacenexus.net/industries/law-firms",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Real Estate",
            url: "https://spacenexus.net/industries/real-estate",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Life Sciences",
            url: "https://spacenexus.net/industries/life-sciences",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Technology",
            url: "https://spacenexus.net/industries/technology",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Energy & Infrastructure",
            url: "https://spacenexus.net/industries/energy-infrastructure",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Corporate Development",
            url: "https://spacenexus.net/industries/corporate-development",
          },
        ],
      },
      {
        "@type": "SiteNavigationElement",
        name: "Solutions",
        url: "https://spacenexus.net/solutions/mergers-and-acquisitions-vdr",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Ecosystem",
        hasPart: [
          {
            "@type": "SiteNavigationElement",
            name: "PMSpace",
            url: "https://pmspace.ai/",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Space Sign",
            url: "https://space-sign.ai/",
          },
          {
            "@type": "SiteNavigationElement",
            name: "SpaceCapture",
            url: "https://spacecapture.ai/",
          },
          {
            "@type": "SiteNavigationElement",
            name: "SpaceLizit",
            url: "https://spacelizit.com/",
          },
          {
            "@type": "SiteNavigationElement",
            name: "SpaceHR",
            url: "https://spacehr.net/",
          },
          {
            "@type": "SiteNavigationElement",
            name: "SpaceLean",
            url: "https://spacelean.ai/",
          },
          {
            "@type": "SiteNavigationElement",
            name: "SpaceNexus",
            url: "https://spacenexus.net/",
          },
          {
            "@type": "SiteNavigationElement",
            name: "SpaceCRM",
            url: "https://spacecrm.net/",
          },
        ],
      },
      {
        "@type": "SiteNavigationElement",
        name: "Pricing",
        url: "https://spacenexus.net/pricing",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Security",
        url: "https://spacenexus.net/security",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Blog",
        url: "https://spacenexus.net/blog",
      },
      {
        "@type": "SiteNavigationElement",
        name: "About",
        url: "https://spacenexus.net/about",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(siteNavigationSchema),
      }}
    />
  );
}
