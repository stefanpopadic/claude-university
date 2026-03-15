import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import BlogPostCard from "@/components/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog — Clauni | Claude AI Tips, Tutorials & Workflows",
  description:
    "Practical guides on using Claude AI for business. Tutorials, comparisons, workflows, and strategies for solopreneurs and freelancers.",
};

export default function Blog() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="page-container page-body">
      <div className="page-header">
        <div className="mono-label" style={{ marginBottom: 16 }}>Blog</div>
        <h1>The Clauni Playbook</h1>
        <p>
          Claude AI tutorials, workflows, and strategies for solopreneurs
          who want to get more done with less.
        </p>
      </div>

      <div className="features-grid" style={{ gap: 16 }}>
        {sorted.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
