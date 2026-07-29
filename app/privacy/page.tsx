import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SpaceNexus",
  description: "SpaceNexus privacy policy explaining how we collect, use, and protect your data.",
  alternates: {
    canonical: "https://spacenexus.net/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-[#2563eb] mb-8 transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: July 19, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>SpaceNexus (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our virtual data room platform and related services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Information</h3>
              <p>When you create an account, we collect your name, email address, company name, job title, and password.</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Transaction Data</h3>
              <p>When you use the Service, we store documents you upload, access logs, Q&A communications, and analytics data related to your transactions.</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Usage Data</h3>
              <p>We automatically collect information about how you interact with the Service, including IP address, browser type, pages visited, and time spent on the platform.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve the Service</li>
                <li>To process transactions and send related information</li>
                <li>To send technical notices, updates, and security alerts</li>
                <li>To respond to your comments and customer service requests</li>
                <li>To monitor and analyze usage trends and preferences</li>
                <li>To detect, prevent, and address fraud and security issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AES-256 encryption at rest</li>
                <li>TLS 1.3 encryption in transit</li>
                <li>SOC 2 Type II certified controls</li>
                <li>Multi-factor authentication</li>
                <li>Immutable audit trails</li>
                <li>Regular penetration testing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing</h2>
              <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in operating the Service (under strict confidentiality agreements)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p>We retain your data for as long as your account is active or as needed to provide the Service. You may request deletion of your data at any time by contacting us.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and receive a copy of your data</li>
                <li>Rectify inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. GDPR Compliance</h2>
              <p>For users in the European Economic Area (EEA), we process data in accordance with the General Data Protection Regulation (GDPR). We act as a data processor for documents uploaded by data controllers (our customers) to the virtual data room.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. CCPA Compliance</h2>
              <p>For California residents, we comply with the California Consumer Privacy Act (CCPA). You have the right to know what personal information we collect, request deletion, and opt-out of the sale of personal information (we do not sell personal information).</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies</h2>
              <p>We use cookies and similar technologies to maintain your session, remember your preferences, and analyze usage patterns. You can control cookies through your browser settings.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@spacenexus.net" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">privacy@spacenexus.net</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
