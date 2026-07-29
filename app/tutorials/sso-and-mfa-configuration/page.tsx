import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "SSO and MFA Configuration — SpaceNexus Video Tutorial | SpaceNexus",
    description: "Video tutorial on configuring single sign-on with Okta, Azure AD, or Google Workspace. Enable phishing-resistant MFA for enterprise security.",
    alternates: { canonical: "https://spacenexus.net/tutorials/sso-and-mfa-configuration" },
    keywords: ["VDR SSO setup", "MFA configuration VDR", "Okta SAML VDR", "Azure AD SSO", "phishing-resistant MFA"],
    openGraph: { title: "SSO and MFA Configuration — SpaceNexus Video Tutorial", description: "Video tutorial on SSO and MFA configuration.", url: "https://spacenexus.net/tutorials/sso-and-mfa-configuration" },
};

const videoSchema = { "@context": "https://schema.org", "@type": "VideoObject", name: "SSO and MFA Configuration", description: "Tutorial on configuring single sign-on and multi-factor authentication.", thumbnailUrl: "https://spacenexus.net/tutorials/sso-and-mfa-configuration/thumbnail.png", uploadDate: "2026-06-02", duration: "PT13M", contentUrl: "https://spacenexus.net/tutorials/sso-and-mfa-configuration", embedUrl: "https://spacenexus.net/tutorials/sso-and-mfa-configuration", publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Tutorials", item: "https://spacenexus.net/tutorials" }, { "@type": "ListItem", position: 3, name: "SSO and MFA", item: "https://spacenexus.net/tutorials/sso-and-mfa-configuration" }] };

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Configure SSO and MFA for Enterprise Security",
    description: "Set up single sign-on with Okta, Azure AD, or Google Workspace and enable phishing-resistant MFA for enterprise VDR security.",
    totalTime: "PT13M",
    step: [
        { "@type": "HowToStep", name: "Configure SSO with Okta", text: "Set up SAML 2.0 SSO with Okta, including user provisioning and deprovisioning." },
        { "@type": "HowToStep", name: "Configure SSO with Azure AD", text: "Set up SSO with Microsoft Entra ID (formerly Azure AD) for enterprise customers." },
        { "@type": "HowToStep", name: "Configure SSO with Google Workspace", text: "Set up SSO for Google Workspace customers and handle Google-specific considerations." },
        { "@type": "HowToStep", name: "Enable FIDO2 MFA", text: "Enable hardware security keys (YubiKey, Titan) for the highest level of phishing-resistant authentication." },
        { "@type": "HowToStep", name: "Set enforcement policies", text: "Require MFA for all users, block legacy authentication, and enforce conditional access policies." },
    ],
};

const steps = [
    { time: "0:00", title: "SSO and MFA fundamentals", desc: "Why single sign-on and multi-factor authentication are foundational for enterprise VDR security." },
    { time: "1:30", title: "SSO with Okta", desc: "Configuring SAML 2.0 SSO with Okta, including user provisioning and deprovisioning." },
    { time: "4:00", title: "SSO with Azure AD / Microsoft Entra", desc: "Configuring SSO with Microsoft Entra ID (formerly Azure AD) for enterprise customers." },
    { time: "6:30", title: "SSO with Google Workspace", desc: "Configuring SSO for Google Workspace customers and the unique considerations for Google environments." },
    { time: "8:30", title: "Phishing-resistant MFA with FIDO2", desc: "Enabling hardware security keys (YubiKey, Titan) for the highest level of phishing-resistant authentication." },
    { time: "11:00", title: "Enforcement policies", desc: "Requiring MFA for all users, blocking legacy authentication, and enforcing conditional access policies." },
];

export default function SSOMFAConfigPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="tut-sso-video" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <Script id="tut-sso-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="tut-sso-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <section className="pt-28 pb-12 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link><span>›</span>
                        <Link href="/tutorials" className="hover:text-[#2563eb] transition-colors">Tutorials</Link><span>›</span>
                        <span className="text-gray-900">SSO and MFA</span>
                    </nav>
                    <div className="flex flex-wrap items-center gap-2 text-xs mb-4">
                        <span className="font-mono bg-blue-50 text-[#2563eb] px-2 py-0.5 rounded">VIDEO TUTORIAL</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600">13 min</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600">Advanced</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">SSO and MFA Configuration</h1>
                    <p className="text-xl text-gray-600">Configure single sign-on with Okta, Azure AD, or Google Workspace. Enable phishing-resistant MFA for enterprise security.</p>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/spacenexus/screenshots/security.png')] bg-cover bg-center opacity-20"></div>
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                            <p className="text-white/80 text-sm font-medium">Video tutorial</p>
                            <p className="text-white/60 text-xs mt-1">13 min · SSO &amp; MFA</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What you&apos;ll learn</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">Configure enterprise-grade authentication that integrates with your existing identity provider and protects against the most common attack vectors.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>SSO configuration with Okta, Azure AD, and Google Workspace</li>
                        <li>Phishing-resistant MFA with FIDO2 hardware keys</li>
                        <li>SCIM provisioning for automated user lifecycle management</li>
                        <li>Enforcement policies and conditional access</li>
                    </ul>
                </div>
            </section>
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-step walkthrough</h2>
                    <div className="space-y-6">
                        {steps.map((step, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="shrink-0 w-16 text-sm font-mono text-[#2563eb] font-semibold">{step.time}</div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">See SpaceNexus live</h2>
                    <p className="text-blue-100 mb-6">Book a personalized demo with our team.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
