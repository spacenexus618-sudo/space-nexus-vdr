import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "虛擬資料室 | M&A 盡職調查平台 | SpaceNexus",
  description: "安全的虛擬資料室，支援繁體中文、GDPR、PDPA 與 SOC 2 認證，適用於 M&A、IPO 與跨境交易。",
  keywords: [
    "虛擬資料室",
    "台灣 VDR",
    "繁體中文資料室",
    "virtual data room Taiwan",
    "Taiwan VDR",
    "Asia Pacific data room",
  ],
  alternates: {
    canonical: "https://spacenexus.net/solutions/virtual-data-room-taiwan",
    languages: {
      "zh-Hant-TW": "https://spacenexus.net/solutions/virtual-data-room-taiwan",
      "en-US": "https://spacenexus.net",
      "x-default": "https://spacenexus.net",
    },
  },
  openGraph: {
    title: "虛擬資料室 | M&A 盡職調查平台 | SpaceNexus",
    description: "安全的虛擬資料室，支援繁體中文、GDPR、PDPA 與 SOC 2 認證，適用於 M&A、IPO 與跨境交易。",
    url: "https://spacenexus.net/solutions/virtual-data-room-taiwan",
    locale: "zh_TW",
  },
  other: {
    "geo.region": "TW",
    "geo.placename": "Taiwan",
  },
};

const features = [
  { title: "SOC 2 Type II 認證", description: "經獨立第三方稽核驗證的安全控制，符合國際金融機構要求。" },
  { title: "AES-256 加密", description: "靜態與傳輸中的資料皆採用軍事等級加密，確保機密文件安全。" },
  { title: "動態浮水印", description: "每一頁自動嵌入檢視者姓名、email 和 IP 位址，防止文件外洩。" },
  { title: "精細權限控制", description: "依文件、資料夾或使用者群組設定檢視、下載、列印權限。" },
  { title: "即時買方分析", description: "追蹤買方/投資人活動：文件瀏覽次數、停留時間、下載紀錄。" },
  { title: "結構化問答（Q&A）", description: "盡職調查問答流程完整保留在資料室中，附帶完整稽核軌跡。" },
];

const useCases = [
  { title: "企業併購（M&A）", description: "支援賣方拍賣流程、買方盡職調查，以及台灣與跨境交易文件管理。" },
  { title: "IPO 與資本市場", description: "上市前文件共享、承銷商/會計師資料存取、符合證交所法規要求。" },
  { title: "私募股權與創投", description: "募資資料室、LP 報告、投組公司退場交易文件管理。" },
  { title: "法律盡職調查", description: "律師事務所管理特權文件、利益衝突隔離牆，以及法院認證稽核軌跡。" },
];

const faqs = [
  {
    question: "SpaceNexus 支援台灣個資法嗎？",
    answer: "SpaceNexus 透過 AES-256 加密、精細存取控制、資料外洩通知機制與可配置的資料保留政策，支援台灣個人資料保護法的合規要求。我們的 SOC 2 Type II 認證提供獨立的安全控制保證。",
  },
  {
    question: "SpaceNexus 提供亞太區資料存放選項嗎？",
    answer: "SpaceNexus 提供包含亞太區資料中心的資料存放選項。如需特定地區的資料存放配置，請聯繫我們的團隊。",
  },
  {
    question: "SpaceNexus 支援中文文件嗎？",
    answer: "SpaceNexus 支援所有語言的文件上傳與全文搜尋，包括繁體中文和簡體中文。介面支援多語言操作環境。",
  },
  {
    question: "如何開始使用 SpaceNexus？",
    answer: "預約免費 Demo，我們的團隊將為您展示如何在 30 分鐘內設定第一個資料室，並根據您的交易需求配置安全與權限設定。",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "虛擬資料室 (Virtual Data Room for Taiwan)",
  description: "Secure virtual data room for Taiwan M&A, due diligence, and IPO transactions. SOC 2 certified with Traditional Chinese language support.",
  url: "https://spacenexus.net/solutions/virtual-data-room-taiwan",
  serviceType: "Virtual Data Room",
  provider: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
  },
  areaServed: {
    "@type": "Country",
    name: "Taiwan",
  },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    description: "Contact for pricing tailored to transaction size and document volume.",
  },
};

export default function TaiwanVDRPage() {
  return (
    <>
      <Script
        id="taiwan-vdr-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
                  { "@type": "ListItem", position: 2, name: "台灣虛擬資料室", item: "https://spacenexus.net/solutions/virtual-data-room-taiwan" },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f0f4ff] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#2563eb] tracking-wide uppercase mb-4">🇹🇼 台灣</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            台灣企業信賴的虛擬資料室
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            專為台灣併購、IPO、私募股權與法律盡職調查設計的安全虛擬資料室。SOC 2 Type II 認證、AES-256 加密、即時買方分析。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25">
              預約免費 Demo
            </Link>
            <Link href="/pricing" className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-300">
              查看方案價格
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <span>SOC 2 Type II</span><span>ISO 27001</span><span>AES-256</span><span>個資法合規</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">企業級安全功能</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">應用場景</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-600">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">常見問題</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">準備好開始了嗎？</h2>
          <p className="text-gray-600 mb-8 text-lg">預約 Demo，了解 SpaceNexus 如何為您的交易提供安全的文件管理方案。</p>
          <Link href="/demo" className="inline-block px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25">
            預約免費 Demo →
          </Link>
        </div>
      </section>
                {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/solutions/mergers-and-acquisitions-vdr"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Cross-border M&A workflows.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                        </Link>
                        <Link
                            href="/industries/technology"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Semiconductor and hardware.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For technology →</h3>
                        </Link>
                        <Link
                            href="/industries/private-equity"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">PE-backed transactions.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For private equity →</h3>
                        </Link>
                        <Link
                            href="/features/security-compliance"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">SOC 2, ISO 27001, PDPA.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Security & compliance →</h3>
                        </Link>
                    </div>
                </div>
            </section>

</>
  );
}
