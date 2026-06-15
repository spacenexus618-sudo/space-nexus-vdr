import type { Metadata } from "next";
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
      title: "Article Not Found | Kindora Blog",
      description: "The article you are looking for could not be found.",
    };
  }

  return {
    title: `${post.title} | Kindora Blog`,
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
  return <BlogPostContent slug={slug} />;
}
