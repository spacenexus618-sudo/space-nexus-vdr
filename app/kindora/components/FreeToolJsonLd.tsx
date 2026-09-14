interface FaqItem {
  question: string;
  answer: string;
}

interface FreeToolJsonLdProps {
  name: string;
  description: string;
  url: string;
  faqs: FaqItem[];
}

export default function FreeToolJsonLd({ name, description, url, faqs }: FreeToolJsonLdProps) {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url,
    description,
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: { "@id": "https://spacenexus.net/kindora/#organization" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}