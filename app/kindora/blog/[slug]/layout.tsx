import type { Metadata } from "next";
import { getPostBySlug } from "../data/posts";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      alternates: { canonical: "https://spacenexus.net/kindora/blog" },
    };
  }

  const canonical = `https://spacenexus.net/kindora/blog/${slug}`;

  return {
    title: `${post.title}`,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogSlugLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
