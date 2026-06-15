import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtueller Datenraum — Sichere Plattform für M&A und Due Diligence | SpaceNexus",
  description:
    "SpaceNexus bietet einen sicheren virtuellen Datenraum (VDR) für deutsche Unternehmen. SOC 2 Type II zertifiziert, ISO 27001, DSGVO-konform. Ideal für M&A-Transaktionen, Due Diligence, Unternehmensverkäufe und Kapitalmarktgeschäfte.",
  alternates: {
    canonical: "https://spacenexus.net/solutions/virtual-data-room-germany",
    languages: {
      "de-DE": "https://spacenexus.net/solutions/virtual-data-room-germany",
      "en-US": "https://spacenexus.net",
      "x-default": "https://spacenexus.net",
    },
  },
  openGraph: {
    title: "Virtueller Datenraum Deutschland — SpaceNexus",
    description: "SOC 2 zertifizierter virtueller Datenraum für M&A, Due Diligence und Unternehmenstransaktionen. DSGVO-konform mit EU-Datenresidenz.",
    url: "https://spacenexus.net/solutions/virtual-data-room-germany",
    locale: "de_DE",
  },
  other: {
    "geo.region": "DE",
    "geo.placename": "Germany",
  },
};

const features = [
  { title: "SOC 2 Type II Zertifiziert", description: "Unabhängig geprüfte Sicherheitskontrollen, die den Anforderungen internationaler Finanzinstitutionen entsprechen." },
  { title: "DSGVO-Konformität", description: "Vollständige Einhaltung der Datenschutz-Grundverordnung mit EU-Datenresidenz, Auftragsverarbeitungsvertrag und Datenlöschung auf Anfrage." },
  { title: "AES-256 Verschlüsselung", description: "Militärstandard-Verschlüsselung für ruhende und übertragene Daten. Zusätzliche Kundenverwaltete Schlüssel (CMEK) für Unternehmen." },
  { title: "Dynamisches Wasserzeichen", description: "Automatische Einbettung von Name, E-Mail und IP-Adresse des Betrachters auf jeder Seite — serverseitig gerendert." },
  { title: "Granulare Berechtigungen", description: "Dokument-, ordner- und benutzerbasierte Zugriffskontrollen mit Chinese-Wall-Durchsetzung für Interessenkonflikte." },
  { title: "Unveränderliche Audit-Protokolle", description: "Lückenlose Protokollierung aller Benutzeraktionen — gerichtsfest und konform mit handelsrechtlichen Aufbewahrungspflichten." },
];

const regulations = [
  { name: "DSGVO", fullName: "Datenschutz-Grundverordnung", description: "SpaceNexus unterstützt die vollständige DSGVO-Konformität: Auftragsverarbeitungsvertrag (AVV), Recht auf Löschung, Datenportabilität, 72-Stunden-Meldepflicht bei Datenschutzverletzungen und EU-Datenresidenz." },
  { name: "BaFin", fullName: "Bundesanstalt für Finanzdienstleistungsaufsicht", description: "Für regulierte Finanztransaktionen bietet SpaceNexus unveränderliche Audit-Protokolle und Aufbewahrungsrichtlinien, die den Anforderungen der BaFin für elektronische Aufzeichnungen entsprechen." },
  { name: "HGB", fullName: "Handelsgesetzbuch — Aufbewahrungspflichten", description: "Das HGB schreibt 6- bis 10-jährige Aufbewahrungsfristen für Handelsbriefe und Buchungsbelege vor. SpaceNexus unterstützt konfigurierbare Aufbewahrungsrichtlinien für diese Anforderungen." },
  { name: "GWB", fullName: "Gesetz gegen Wettbewerbsbeschränkungen", description: "Bei meldepflichtigen Zusammenschlüssen unterstützt SpaceNexus die sichere Dokumentenbereitstellung für das Bundeskartellamt mit segregiertem Zugriff für behördliche Einreichungen." },
];

const useCases = [
  { title: "Unternehmensverkäufe & M&A", description: "Sell-Side-Auktionen, Buy-Side Due Diligence und Cross-Border-Transaktionen für den deutschen Mittelstand und Großunternehmen." },
  { title: "Kapitalmarktgeschäfte & IPOs", description: "Datenräume für Börsengänge an der Frankfurter Wertpapierbörse, mit sicherer Dokumentenfreigabe an Konsortialbanken und Wirtschaftsprüfer." },
  { title: "Private Equity & Venture Capital", description: "Fundraising-Datenräume, Portfolio-Company-Exits und LP-Reporting mit institutioneller Sicherheit." },
  { title: "Automobilindustrie & Maschinenbau", description: "Technologie-Lizenzierungen, Joint Ventures und Asset-Transaktionen mit Schutz für geistiges Eigentum und technische Dokumentation." },
];

const faqs = [
  {
    question: "Ist SpaceNexus DSGVO-konform?",
    answer: "Ja. SpaceNexus unterstützt die vollständige DSGVO-Konformität durch AES-256-Verschlüsselung, granulare Zugriffskontrollen, Auftragsverarbeitungsvertrag (AVV), Recht auf Löschung, Datenportabilität und 72-Stunden-Meldepflicht bei Datenschutzverletzungen. Wir bieten EU-Datenresidenz für europäische Mandanten.",
  },
  {
    question: "Bietet SpaceNexus Datenresidenz in der EU an?",
    answer: "Ja. SpaceNexus bietet EU-basierte Rechenzentren für die Datenspeicherung. Deutsche Unternehmen können sicherstellen, dass ihre Transaktionsdaten innerhalb der EU verbleiben und allen DSGVO-Anforderungen zur Datenresidenz entsprechen.",
  },
  {
    question: "Unterstützt SpaceNexus deutschsprachige Dokumente?",
    answer: "Ja. SpaceNexus unterstützt Volltextsuche und Dokumentenmanagement in allen Sprachen, einschließlich Deutsch. Die Plattform kann sowohl deutsche als auch englische Dokumente im selben Datenraum verwalten.",
  },
  {
    question: "Wie starte ich mit SpaceNexus?",
    answer: "Vereinbaren Sie eine kostenlose Demo. Unser Team zeigt Ihnen, wie Sie Ihren ersten Datenraum in unter 30 Minuten einrichten und für deutsche regulatorische Anforderungen konfigurieren können.",
  },
];

export default function GermanyVDRPage() {
  return (
    <>
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
                  { "@type": "ListItem", position: 2, name: "Virtueller Datenraum", item: "https://spacenexus.net/solutions/virtual-data-room-germany" },
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
          <p className="text-sm font-semibold text-[#2563eb] tracking-wide uppercase mb-4">🇩🇪 Deutschland</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Virtueller Datenraum für deutsche Transaktionen
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            DSGVO-konform, SOC 2 Type II zertifiziert — der sichere virtuelle Datenraum
            für M&A, Due Diligence, Kapitalmarktgeschäfte und Unternehmensverkäufe in Deutschland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25">
              Kostenlose Demo vereinbaren
            </Link>
            <Link href="/pricing" className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-300">
              Preise ansehen
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <span>DSGVO</span><span>SOC 2 Type II</span><span>ISO 27001</span><span>BaFin</span><span>EU-Datenresidenz</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Sicherheitsfunktionen</h2>
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

      {/* Regulations */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Regulatorische Konformität</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regulations.map((reg) => (
              <div key={reg.name} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded-full">{reg.name}</span>
                  <h3 className="font-bold text-gray-900 text-sm">{reg.fullName}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{reg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Anwendungsfälle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-600">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Häufig gestellte Fragen</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bereit loszulegen?</h2>
          <p className="text-gray-600 mb-8 text-lg">Vereinbaren Sie eine kostenlose Demo und erfahren Sie, wie SpaceNexus Ihre Transaktionen sicher unterstützt.</p>
          <Link href="/demo" className="inline-block px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25">
            Kostenlose Demo vereinbaren →
          </Link>
        </div>
      </section>
    </>
  );
}
