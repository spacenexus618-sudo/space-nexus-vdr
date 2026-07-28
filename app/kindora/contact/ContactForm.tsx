"use client";

import { useState } from "react";

const primaryNeeds = [
  "Donor Management",
  "Grant Tracking",
  "Program Management",
  "Financial Reporting",
  "Volunteer Management",
  "All of the Above",
];

interface FormErrors {
  organizationName?: string;
  contactName?: string;
  email?: string;
}

function validate(formData: { organizationName: string; contactName: string; email: string }): FormErrors {
  const errors: FormErrors = {};
  if (!formData.organizationName.trim()) errors.organizationName = "Organization name is required";
  if (!formData.contactName.trim()) errors.contactName = "Contact name is required";
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Enter a valid email address";
  }
  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    organizationSize: "",
    currentTools: "",
    needs: [] as string[],
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNeedToggle = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter((n) => n !== need)
        : [...prev.needs, need],
    }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => new Set(prev).add(field));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched(new Set(["organizationName", "contactName", "email"]));
    if (Object.keys(validationErrors).length > 0) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="pt-20 lg:pt-24">
        <section className="py-20 lg:py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank you for your interest!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;ve received your demo request. Our team will be in touch
              within one business day to schedule your personalized
              demonstration.
            </p>
            <a
              href="/kindora"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Return to Home
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form Column */}
            <div>
              <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                Request a Demo
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                See Kindora in action
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will reach out to schedule
                a personalized demonstration of Kindora NGO OS.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="organizationName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      id="organizationName"
                      required
                      aria-required="true"
                      aria-invalid={touched.has("organizationName") && !!errors.organizationName}
                      aria-describedby={errors.organizationName ? "orgName-error" : undefined}
                      value={formData.organizationName}
                      onChange={(e) => {
                        setFormData({ ...formData, organizationName: e.target.value });
                        if (touched.has("organizationName")) setErrors(validate({ ...formData, organizationName: e.target.value }));
                      }}
                      onBlur={() => handleBlur("organizationName")}
                      className={`w-full px-4 py-3.5 rounded-xl border outline-none transition-all ${touched.has("organizationName") && errors.organizationName ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-gray-300 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"}`}
                      placeholder="Your nonprofit name"
                    />
                    {touched.has("organizationName") && errors.organizationName && (
                      <p id="orgName-error" role="alert" className="text-red-600 text-xs mt-1">{errors.organizationName}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      required
                      aria-required="true"
                      aria-invalid={touched.has("contactName") && !!errors.contactName}
                      aria-describedby={errors.contactName ? "contactName-error" : undefined}
                      value={formData.contactName}
                      onChange={(e) => {
                        setFormData({ ...formData, contactName: e.target.value });
                        if (touched.has("contactName")) setErrors(validate({ ...formData, contactName: e.target.value }));
                      }}
                      onBlur={() => handleBlur("contactName")}
                      className={`w-full px-4 py-3.5 rounded-xl border outline-none transition-all ${touched.has("contactName") && errors.contactName ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-gray-300 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"}`}
                      placeholder="Your name"
                    />
                    {touched.has("contactName") && errors.contactName && (
                      <p id="contactName-error" role="alert" className="text-red-600 text-xs mt-1">{errors.contactName}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      aria-required="true"
                      aria-invalid={touched.has("email") && !!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (touched.has("email")) setErrors(validate({ ...formData, email: e.target.value }));
                      }}
                      onBlur={() => handleBlur("email")}
                      className={`w-full px-4 py-3.5 rounded-xl border outline-none transition-all ${touched.has("email") && errors.email ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-gray-300 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"}`}
                      placeholder="email@organization.org"
                    />
                    {touched.has("email") && errors.email && (
                      <p id="email-error" role="alert" className="text-red-600 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="organizationSize"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Organization Size
                    </label>
                    <select
                      id="organizationSize"
                      value={formData.organizationSize}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organizationSize: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select size</option>
                      <option value="1-5">1-5 staff/volunteers</option>
                      <option value="6-15">6-15 staff/volunteers</option>
                      <option value="16-50">16-50 staff/volunteers</option>
                      <option value="51-100">51-100 staff/volunteers</option>
                      <option value="100+">100+ staff/volunteers</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="currentTools"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Current Tools Used
                    </label>
                    <input
                      type="text"
                      id="currentTools"
                      value={formData.currentTools}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          currentTools: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all"
                      placeholder="e.g., Spreadsheets, QuickBooks"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Primary Needs (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {primaryNeeds.map((need) => (
                      <button
                        key={need}
                        type="button"
                        onClick={() => handleNeedToggle(need)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${formData.needs.includes(need)
                            ? "bg-[#2563eb] text-white border-[#2563eb]"
                            : "bg-white text-gray-700 border-gray-300 hover:border-[#2563eb] hover:text-[#2563eb]"
                          }`}
                      >
                        {need}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your organization and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Your Demo
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Column */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a
                        href="mailto:contact@spacenexus.net"
                        className="text-gray-900 font-medium hover:text-[#2563eb] transition-colors"
                      >
                        contact@spacenexus.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Support Hours
                      </p>
                      <p className="text-gray-900 font-medium">
                        Monday - Friday, 9am - 6pm EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2563eb]/5 to-violet-500/5 rounded-2xl border border-gray-200 p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What to expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "Personalized demo tailored to your needs",
                    "Live walkthrough of key features",
                    "Q&A with our product specialists",
                    "Discussion of implementation timeline",
                    "No pressure, no obligations",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-[#2563eb] flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#2563eb]/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#2563eb]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    SpaceAI App
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  Kindora NGO OS is a product of SpaceAI App. We&apos;re
                  committed to building technology that empowers mission-driven
                  organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
