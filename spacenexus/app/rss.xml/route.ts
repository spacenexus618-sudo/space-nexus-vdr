const SITE_URL = "https://spacenexus.net";

const ITEMS = [
  {
    title: "AI-Powered Virtual Data Room Software for M&A, Fundraising & Legal Deals",
    link: `${SITE_URL}/`,
    description:
      "SpaceNexus is the AI-powered virtual data room for M&A due diligence, fundraising & legal deals. SOC 2 Type II certified, transparent flat-rate pricing & 24-hour setup.",
    pubDate: "2026-10-06",
  },
  {
    title: "SpaceNexus Features — AI document processing, redaction, buyer analytics",
    link: `${SITE_URL}/features`,
    description:
      "AI-powered document processing and auto-redaction, AES-256 encryption, granular permissions, dynamic watermarking, real-time buyer analytics and Q&A workflows.",
    pubDate: "2026-10-06",
  },
  {
    title: "SpaceNexus Pricing — transparent flat-rate VDR plans",
    link: `${SITE_URL}/pricing`,
    description:
      "Transparent, published pricing for virtual data rooms. Enterprise plans available. Pricing as of October 2026 — see the pricing page for current plans.",
    pubDate: "2026-10-06",
  },
  {
    title: "SpaceNexus Security — SOC 2 Type II, ISO 27001, GDPR, HIPAA",
    link: `${SITE_URL}/security`,
    description:
      "Zero Trust architecture, AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II certified with ISO 27001, GDPR, HIPAA and SEC 17a-4 alignment.",
    pubDate: "2026-10-06",
  },
];

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(): Promise<Response> {
  const itemsXml = ITEMS.map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid>${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${new Date(item.pubDate).toUTCString()}</pubDate>
    </item>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>SpaceNexus</title>
    <link>${SITE_URL}</link>
    <description>AI-powered virtual data room for M&amp;A due diligence, fundraising &amp; legal deals.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date("2026-10-06").toUTCString()}</lastBuildDate>
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
