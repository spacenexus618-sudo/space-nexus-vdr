import type { Metadata } from "next";
import Script from "next/script";
import { getPostBySlug, blogPosts } from "../data/posts";
import BlogPostContent from "./BlogPostContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The article you are looking for could not be found.",
    };
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `/kindora/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://spacenexus.net/kindora/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const blogPostingSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        author: {
          "@type": "Person",
          name: post.author.name,
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://spacenexus.net/kindora/#organization",
          name: "Kindora",
        },
        url: `https://spacenexus.net/kindora/blog/${slug}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://spacenexus.net/kindora/blog/${slug}`,
        },
      }
    : null;

  return (
    <>
      {blogPostingSchema && (
        <Script
          id={`blog-${slug}-jsonld`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
      )}
      <BlogPostContent slug={slug} />
    </>
  );
}
