import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | SpaceNexus",
  description: "SpaceNexus terms of service governing use of our virtual data room platform and related services.",
  alternates: {
    canonical: "https://spacenexus.net/terms",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service | SpaceNexus",
  description:
    "SpaceNexus terms of service governing use of our virtual data room platform and related services.",
  url: "https://spacenexus.net/terms",
  isPartOf: {
    "@type": "WebSite",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
  },
};

export default function TermsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-[#2563eb] mb-8 transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: July 19, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using the SpaceNexus platform (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Service.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p>SpaceNexus provides an enterprise-grade virtual data room platform for secure document sharing, M&A due diligence, fundraising, legal proceedings, and other high-stakes business transactions. The Service includes document management, access controls, audit logging, Q&A workflows, and analytics.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
              <p>To use the Service, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Transmit malware, viruses, or other harmful code</li>
                <li>Share your account credentials with unauthorized parties</li>
                <li>Use the Service to store or share content that violates applicable laws</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are owned by SpaceNexus and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Content</h2>
              <p>You retain ownership of any content you upload to the Service. By uploading content, you grant SpaceNexus a limited license to store, process, and display your content solely for the purpose of providing the Service to you.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
              <p>SpaceNexus implements industry-standard security measures including AES-256 encryption, TLS 1.3 in transit, SOC 2 Type II certified controls, and immutable audit trails. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Payment Terms</h2>
              <p>Paid plans are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. SpaceNexus reserves the right to modify pricing with 30 days&apos; notice.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, SpaceNexus shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p>We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we determine, in our sole discretion, violates these Terms or is harmful to other users, us, or third parties.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the &quot;Last updated&quot; date.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at <a href="mailto:legal@spacenexus.net" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">legal@spacenexus.net</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
