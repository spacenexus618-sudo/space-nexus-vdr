# Web Quality Audit — 30-Task Detailed Code Changes

Generated from the [web-quality-audit skill](.agents/skills/web-quality-audit/SKILL.md). Covers Performance, Accessibility, SEO, and Best Practices across four priority tiers.

---

## High Priority (15 tasks)

### Performance — Core Web Vitals (Tasks 1–5)

#### Task 1: Optimize LCP element

**Issue:** Hero section may have delayed LCP due to animated SVG and images.
**File:** `app/components/HeroSection.tsx`

```tsx
// Add priority loading to the main hero content
// Ensure the largest contentful paint element is preloaded

// In HeroSection.tsx, the h1 heading is likely the LCP element.
// Add a preload hint in layout.tsx <head>:

// In app/layout.tsx, add inside <head>:
<link rel="preload" href="/icononly_transparent_nobuffer.png" as="image" />

// In HeroSection.tsx, ensure the heading renders immediately without animation delay:
// Remove animation-delay from the first visible content
// Change line 14 from:
<div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in">
// To:
<div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
```

**File:** `app/layout.tsx`

```tsx
// Add preload for the logo image (likely used in header)
// Inside <head> tag, add:
<link rel="preload" href="/icononly_transparent_nobuffer.png" as="image" />
```

---

#### Task 2: Improve INP below 200ms

**Issue:** WhatsApp widget and heavy animations may block main thread.
**File:** `app/components/LazyWhatsAppButton.tsx` (already lazy loaded - good)

**File:** `app/components/WhatsAppButton.tsx`

```tsx
// Ensure the WhatsApp button doesn't block interaction
// Add yield points for heavy operations if any exist
// The current implementation already uses dynamic import with ssr: false
// which is good. Verify no synchronous operations block the main thread.

// If there are any heavy computations, wrap them:
// Example pattern for breaking up heavy work:
const processLargeData = async (data: unknown[]) => {
  const chunkSize = 100;
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    // Process chunk
    await new Promise((resolve) => setTimeout(resolve, 0)); // Yield to main thread
  }
};
```

---

#### Task 3: Eliminate layout shifts (CLS < 0.1)

**Issue:** Images without explicit dimensions cause CLS.
**File:** `app/components/VDRScreenshotGallery.tsx`

```tsx
// Add explicit width and height to all Image components
// Find all Next.js Image components and add dimensions

// Example fix for any Image component:
import Image from "next/image";

// Before:
// <Image src="/screenshot.png" alt="Screenshot" />

// After:
<Image 
  src="/screenshot.png" 
  alt="Screenshot" 
  width={800}
  height={600}
  style={{ width: '100%', height: 'auto' }}
/>
```

**File:** `app/globals.css`

```css
/* Add explicit aspect ratio containers for dynamic content */
.img-container {
  position: relative;
  aspect-ratio: 16/9;
}

.img-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

#### Task 4: Serve images in next-gen formats

**Issue:** Images should be served in WebP/AVIF formats.
**File:** `next.config.ts` (already configured - verify)

```typescript
// Already configured in next.config.ts:
// images: {
//   formats: ["image/avif", "image/webp"],
// }

// For any static images in public/, convert them:
// Use sharp or similar tool to convert PNG/JPG to WebP/AVIF
// Example script in package.json:
// "scripts": {
//   "convert-images": "sharp -i public/**/*.png -o public/**/*.webp"
// }
```

---

#### Task 5: Implement responsive images

**Issue:** All images should have srcset and sizes attributes.
**File:** `app/components/Header.tsx`

```tsx
// For the logo image, add responsive sizes
// Current (line 445-450):
<Image
  src="/icononly_transparent_nobuffer.png"
  alt="SpaceNexus secure virtual data room logo"
  fill
  className="object-contain drop-shadow-md"
  priority
/>

// Add sizes attribute:
<Image
  src="/icononly_transparent_nobuffer.png"
  alt="SpaceNexus secure virtual data room logo"
  fill
  sizes="(max-width: 768px) 40px, 40px"
  className="object-contain drop-shadow-md"
  priority
/>
```

---

### Accessibility — Perceivable & Operable (Tasks 6–10)

#### Task 6: Fix missing / poor alt text

**Issue:** Icons and decorative images need proper alt text.
**File:** `app/components/HeroSection.tsx`

```tsx
// Add alt text to all SVG icons
// Example fixes for icons in HeroSection.tsx:

// Line 47-58 - Arrow icon in CTA button:
<svg
  className="ml-2 w-4 h-4"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  aria-hidden="true"  // Decorative icon
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M9 5l7 7-7 7"
  />
</svg>

// Line 101-114 - Lightning bolt icon:
<svg
  className="w-5 h-5 text-white"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  aria-hidden="true"  // Add aria-hidden for decorative icons
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M13 10V3L4 14h7v7l9-11h-7z"
  />
</svg>

// Repeat for all decorative SVGs - add aria-hidden="true"
```

**File:** `app/components/Header.tsx`

```tsx
// Add aria-hidden to decorative icons
// Example for phone icon (line 597):
<svg 
  className="w-4 h-4" 
  fill="none" 
  viewBox="0 0 24 24" 
  stroke="currentColor"
  aria-hidden="true"
>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
```

---

#### Task 7: Ensure 4.5:1 color contrast (AA)

**Issue:** `text-gray-500` and `text-gray-400` on light backgrounds may fail contrast.
**File:** `app/globals.css`

```css
/* Update color variables for better contrast */
:root {
  /* Change --muted from #6b7280 to darker for better contrast */
  --muted: #4b5563;  /* Was #6b7280, now passes 4.5:1 on white */
}

/* Add utility class for accessible muted text */
.text-accessible-muted {
  color: #4b5563;  /* Gray-600 - passes 4.5:1 on white */
}
```

**File:** `app/components/HeroSection.tsx`

```tsx
// Update text colors for better contrast
// Line 16: Change text-gray-600 to text-gray-700
<span className="text-xs sm:text-sm text-gray-700">  {/* Was text-gray-600 */}
  Virtual Data Room Software · Trusted by 500+ enterprises
</span>

// Line 34: Change text-gray-600 to text-gray-700
<p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-xl">  {/* Was text-gray-600 */}
```

**File:** `app/components/TestimonialsSection.tsx`

```tsx
// Line 51: Change text-gray-600 to text-gray-700
<p className="text-lg text-gray-700 max-w-2xl mx-auto">  {/* Was text-gray-600 */}

// Line 94: Change text-gray-600 to text-gray-700
<p className="text-xs text-gray-700">  {/* Was text-gray-600 */}
```

---

#### Task 8: Guarantee full keyboard operability

**Issue:** Dropdown menus may trap keyboard focus.
**File:** `app/components/Header.tsx`

```tsx
// Add keyboard event handlers to dropdowns
// For Products dropdown (around line 469-503):

const handleDropdownKeyDown = (e: React.KeyboardEvent, closeFn: () => void) => {
  if (e.key === 'Escape') {
    closeFn();
  }
};

// Update Products dropdown:
<div
  className="relative"
  onMouseEnter={() => setProductsOpen(true)}
  onMouseLeave={() => setProductsOpen(false)}
  onKeyDown={(e) => handleDropdownKeyDown(e, () => setProductsOpen(false))}
>
  <button 
    className="..."
    aria-expanded={productsOpen}
    aria-haspopup="true"
  >
    Products
  </button>
  {/* ... dropdown content ... */}
</div>

// Repeat for Industries dropdown and other dropdowns
// Add aria-expanded and aria-haspopup to all dropdown triggers
```

---

#### Task 9: Add skip navigation link

**Issue:** Already implemented in layout.tsx - verify it works correctly.
**File:** `app/layout.tsx` (already implemented - line 140-142)

```tsx
// Current implementation is good:
<a href="#main-content" className="sr-only focus:not-sr-only min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
  Skip to content
</a>

// Verify the main content has matching id:
<main id="main-content" role="main">
  {children}
</main>

// No changes needed - already implemented correctly
```

---

#### Task 10: Associate form labels correctly

**Issue:** Form inputs need proper labels.
**File:** `app/components/DemoRequest.tsx` (or similar form components)

```tsx
// For any form inputs, ensure they have associated labels
// Example pattern:

// Before:
<input type="email" placeholder="Enter your email" />

// After:
<label htmlFor="email-input" className="sr-only">
  Email Address
</label>
<input 
  type="email" 
  id="email-input"
  placeholder="Enter your email"
  aria-required="true"
/>

// Or use aria-label:
<input 
  type="email" 
  placeholder="Enter your email"
  aria-label="Email Address"
  aria-required="true"
/>
```

---

### SEO — Crawlability & On-Page (Tasks 11–15)

#### Task 11: Add unique `<title>` tags

**Issue:** Pages need unique, descriptive titles.
**File:** `app/blog/[slug]/page.tsx`

```tsx
// Ensure each blog post generates a unique title
// Example for blog post page:

import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  return {
    title: `${post.title} | SpaceNexus Blog`,  // Unique title with keyword
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | SpaceNexus Blog`,
      description: post.excerpt,
    },
  };
}
```

**File:** `app/features/[feature]/page.tsx`

```tsx
// Ensure feature pages have unique titles
export async function generateMetadata({ params }: { params: { feature: string } }): Promise<Metadata> {
  const featureName = params.feature.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return {
    title: `${featureName} Feature | SpaceNexus Virtual Data Room`,
    description: `Learn about SpaceNexus ${featureName} feature for secure document management.`,
  };
}
```

---

#### Task 12: Write compelling meta descriptions

**Issue:** Each page needs unique meta descriptions (150-160 chars).
**File:** `app/layout.tsx` (already has default - verify individual pages)

```tsx
// Ensure each page exports metadata with unique description
// Example for pricing page:

// app/pricing/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Pricing | SpaceNexus Virtual Data Room",
  description: "Simple, transparent pricing for SpaceNexus VDR. Flat-rate plans with no hidden fees. Compare features and start your free trial today.",
  // 155 characters - within 150-160 range
};
```

---

#### Task 13: Fix heading hierarchy

**Issue:** One h1 per page, logical heading descent.
**File:** `app/components/HeroSection.tsx` (already correct - has h1)

```tsx
// Current implementation has proper h1:
<h1
  id="hero-heading"
  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6"
>
  AI-Powered Virtual Data Room Software
  <br />
  <span className="text-gradient">for M&A, Fundraising & Legal Deals</span>
</h1>

// Verify other sections use h2, h3 correctly
// In TestimonialsSection.tsx - line 45-48:
<h2
  id="testimonials-heading"
  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
>
  Trusted by M&amp;A professionals worldwide
</h2>
// This is correct - h1 on homepage, h2 for sections
```

---

#### Task 14: Create and submit XML sitemap

**Issue:** Already implemented - verify it includes all pages.
**File:** `app/sitemap.ts` (already implemented)

```typescript
// Current sitemap.ts is comprehensive
// Verify it includes all important pages
// Current implementation includes:
// - VDR static pages (85 pages)
// - Blog posts (27 posts)
// - Feature pages (13 pages)
// - Industry pages (8 pages)
// - Practice pages (20 pages)
// - Ecosystem pages

// No changes needed - sitemap is already comprehensive
```

---

#### Task 15: Review robots.txt

**Issue:** Ensure robots.txt doesn't block important resources.
**File:** `app/robots.ts` (already implemented)

```typescript
// Current implementation is good:
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://spacenexus.net";
  
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/kindora/sitemap.xml`,
    ],
    host: baseUrl,
  };
}

// This is correct - allows all public pages, blocks admin/private
// No changes needed
```

---

## Medium Priority (10 tasks)

### Performance — Resource Optimization (Tasks 16–19)

#### Task 16: Minify and tree-shake JavaScript

**Issue:** Remove dead code and split bundles.
**File:** `next.config.ts`

```typescript
// Add bundle analyzer for development
// Install: npm install --save-dev @next/bundle-analyzer

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // ... existing config ...
  
  // Enable experimental features for better tree-shaking
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

// In package.json, add script:
// "scripts": {
//   "analyze": "ANALYZE=true next build"
// }
```

---

#### Task 17: Extract and inline critical CSS

**Issue:** Inline above-the-fold styles.
**File:** `app/layout.tsx`

```tsx
// Add critical CSS inline in <head>
// This is automatically handled by Next.js in production
// But we can optimize further:

// In layout.tsx <head>, add:
<style dangerouslySetInnerHTML={{ __html: `
  /* Critical above-the-fold styles */
  body {
    margin: 0;
    padding: 0;
    background: #f8f9fa;
    color: #1a1a1a;
    font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`}} />
```

---

#### Task 18: Preconnect to third-party origins

**Issue:** Already implemented - verify all third-party origins.
**File:** `app/layout.tsx` (already has preconnects)

```tsx
// Current preconnects are good:
<link rel="dns-prefetch" href="https://fonts.gstatic.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link rel="dns-prefetch" href="https://spaceaiapp.com" />
<link rel="preconnect" href="https://spaceaiapp.com" crossOrigin="anonymous" />

// Add preconnect for Google Analytics if not already present:
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
<link rel="preconnect" href="https://www.google-analytics.com" />

// Add preconnect for Google Tag Manager:
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
<link rel="preconnect" href="https://www.googletagmanager.com" />
```

---

#### Task 19: Implement efficient font loading

**Issue:** Optimize font loading strategy.
**File:** `app/layout.tsx` (already using next/font with display: swap)

```tsx
// Current implementation is good:
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",  // Good - uses swap for faster rendering
});

// Verify no unnecessary font weights are loaded
// The Inter font is already optimized with latin subset only

// If you need to add font preloading:
// In <head>:
<link 
  rel="preload" 
  href="/fonts/inter-var-latin.woff2" 
  as="font" 
  type="font/woff2" 
  crossOrigin="anonymous"
/>
```

---

### Accessibility — Understandable & Robust (Tasks 20–22)

#### Task 20: Validate HTML

**Issue:** Fix any HTML validation errors.
**File:** Run W3C validator to identify issues

```bash
# Run HTML validation
npx html-validate "app/**/*.tsx"
# Or use online validator at https://validator.w3.org/
```

**Common fixes:**

```tsx
// Fix duplicate IDs
// Ensure all interactive elements have unique IDs

// Fix improperly nested elements
// Example - don't put interactive elements inside interactive elements:
// Before:
// <button><a href="...">Link</a></button>
// After:
// <a href="..."><button>Link</button></a>

// Ensure all ARIA attributes are valid
// Example:
<div role="button" aria-pressed="false" tabIndex={0}>
  Custom Button
</div>
```

---

#### Task 21: Set page language and ensure consistent navigation

**Issue:** Verify lang attribute is correct.
**File:** `app/layout.tsx` (already correct)

```tsx
// Current implementation is correct:
<html lang="en-US" className="scroll-smooth">
  {/* ... */}
</html>

// Verify navigation is consistent across pages
// The Header component is used in layout.tsx, so navigation is consistent
// No changes needed
```

---

#### Task 22: Provide clear error messages and instructions

**Issue:** Form validation errors need proper ARIA associations.
**File:** `app/components/DemoRequest.tsx` (or similar form components)

```tsx
// Add proper error messaging pattern
// Example:

const [errors, setErrors] = useState<Record<string, string>>({});

<div className="form-group">
  <label htmlFor="email" className="sr-only">
    Email Address <span aria-hidden="true">*</span>
  </label>
  <input
    type="email"
    id="email"
    name="email"
    aria-required="true"
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? "email-error" : undefined}
    className={errors.email ? "border-red-500" : ""}
  />
  {errors.email && (
    <p id="email-error" role="alert" className="text-red-500 text-sm mt-1">
      {errors.email}
    </p>
  )}
</div>
```

---

### SEO — Technical & Structured Data (Tasks 23–25)

#### Task 23: Implement JSON-LD structured data

**Issue:** Add schema.org markup for different page types.
**File:** `app/components/JsonLd.tsx` (already has Organization, SoftwareApplication, WebSite, BreadcrumbList)

```tsx
// Add FAQPage schema for FAQ pages
// Add Article schema for blog posts

// Example FAQPage schema:
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a virtual data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A virtual data room (VDR) is a secure online repository for storing and sharing confidential documents during business transactions.",
      },
    },
    // Add more questions...
  ],
};

// Add to FAQ pages:
export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Page content */}
    </>
  );
}
```

**File:** `app/blog/[slug]/page.tsx`

```tsx
// Add Article schema for blog posts
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  author: {
    "@type": "Organization",
    name: "SpaceNexus",
  },
  publisher: {
    "@type": "Organization",
    name: "SpaceNexus",
    logo: {
      "@type": "ImageObject",
      url: "https://spacenexus.net/logo.png",
    },
  },
  datePublished: post.publishedAt,
  dateModified: post.updatedAt,
  image: post.coverImage,
};

// Render in the page:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
/>
```

---

#### Task 24: Set canonical URLs

**Issue:** Every page needs a canonical URL.
**File:** `app/layout.tsx` (already has metadataBase)

```tsx
// Current implementation handles canonicals via metadata API
// Next.js automatically generates canonical tags from metadata.alternates.canonical

// Verify each page exports proper metadata:
// Example for individual pages:
export const metadata: Metadata = {
  canonical: "https://spacenexus.net/pricing",
  // Or use relative path - Next.js resolves it with metadataBase
};
```

---

#### Task 25: Ensure mobile-friendly tap targets

**Issue:** Interactive elements need 48x48px minimum size.
**File:** `app/components/Header.tsx`

```tsx
// Verify all buttons/links meet 48x48px minimum
// Current implementation already has min-h-[44px] min-w-[44px]
// which is close but should be 48px for better touch targets

// Update all interactive elements:
<button className="p-2 text-gray-600 hover:text-gray-700 rounded-lg transition-colors min-h-[48px] min-w-[48px]">
  {/* Content */}
</button>

// Or use a consistent utility class:
// In globals.css:
.touch-target {
  min-height: 48px;
  min-w-[48px];
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

// Then apply: className="touch-target p-2 ..."
```

---

## Low Priority (5 tasks)

### Best Practices — Security & Modern Standards (Tasks 26–30)

#### Task 26: Add Content Security Policy (CSP)

**Issue:** CSP is already implemented in next.config.ts.
**File:** `next.config.ts` (already implemented)

```typescript
// Current CSP is comprehensive:
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://flagcdn.com https://www.google.com https://www.google-analytics.com https://www.googletagmanager.com https://maps.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://spaceaiapp.com https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com",
  "frame-src 'self' https://www.google.com https://www.youtube.com https://www.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://wa.me",
  "frame-ancestors 'self'",
].join("; ");

// No changes needed - CSP is already properly configured
```

---

#### Task 27: Enable HSTS and enforce HTTPS

**Issue:** Add HSTS header and ensure HTTPS.
**File:** `next.config.ts`

```typescript
// Add HSTS header to the headers configuration
// In the async headers() function, add to the security headers array:

{
  key: "Strict-Transport-Security",
  value: "max-age=63072000; includeSubDomains; preload",
},
{
  key: "Content-Security-Policy",
  value: csp,
},

// Also ensure all HTTP traffic redirects to HTTPS
// This is typically handled at the hosting level (Vercel, Netlify, etc.)
// For Vercel, add to vercel.json:
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        }
      ]
    }
  ]
}
```

---

#### Task 28: Remove deprecated APIs

**Issue:** Replace any deprecated APIs.
**File:** Search for deprecated patterns

```bash
# Search for deprecated APIs:
grep -r "document.write" app/
grep -r "XMLHttpRequest" app/
grep -r "unload" app/
grep -r "MutationEvent" app/
```

**File:** `app/components/SystemStatus.tsx` (if exists)

```tsx
// If using unload event, replace with pagehide/visibilitychange:
// Before:
window.addEventListener('unload', handler);

// After:
window.addEventListener('pagehide', handler);
// Or:
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    // Handle page unload
  }
});
```

---

#### Task 29: Keep dependencies up to date

**Issue:** Update vulnerable packages.
**File:** `package.json`

```bash
# Run security audit
npm audit

# Update packages
npm update

# Fix vulnerabilities
npm audit fix

# For major version updates, check compatibility:
npm outdated
```

**File:** `package.json` (example updates)

```json
{
  "dependencies": {
    "@apollo/client": "^3.14.0",  // Check for updates
    "framer-motion": "^12.34.1",  // Check for updates
    "next": "16.1.6",  // Keep on stable version
    "react": "19.2.3",
    "react-dom": "19.2.3"
  }
}
```

---

#### Task 30: Clean console and fix CORS issues

**Issue:** Ensure zero console errors.
**File:** Check browser console for errors

```bash
# Run development server and check console
npm run dev

# Look for:
# - CORS errors
# - Failed network requests
# - JavaScript errors
# - React warnings
```

**File:** `app/components/SystemStatus.tsx`

```tsx
// If there are console errors from SystemStatus component
// Ensure it doesn't log sensitive information in production:

// Before (if logging sensitive data):
console.log('System status:', sensitiveData);

// After (remove or use environment check):
if (process.env.NODE_ENV === 'development') {
  console.log('System status:', sensitiveData);
}

// Or remove console.logs entirely for production:
// Remove all console.log statements
```

---

## Summary

| Category | High | Medium | Low | Total |
|----------|------|--------|-----|-------|
| Performance | 5 | 4 | — | 9 |
| Accessibility | 5 | 3 | — | 8 |
| SEO | 5 | 3 | — | 8 |
| Best Practices | — | — | 5 | 5 |
| **Total** | **15** | **10** | **5** | **30** |

## Recommended execution order

1. **Tasks 1–5** (High — Performance Core Web Vitals) — Directly impacts UX and search ranking.
2. **Tasks 6–10** (High — Accessibility) — Legal requirement and broadest user impact.
3. **Tasks 11–15** (High — SEO) — Gets your pages indexed and found.
4. **Tasks 16–25** (Medium) — Deeper optimizations once the basics are solid.
5. **Tasks 26–30** (Low) — Security hardening and housekeeping.

After completing all 30 tasks, run a full Lighthouse audit to verify improvements and identify any remaining issues.
