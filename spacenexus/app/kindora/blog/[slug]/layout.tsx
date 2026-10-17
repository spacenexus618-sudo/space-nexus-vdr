import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://spacenexus.net"),
};

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return children;
}