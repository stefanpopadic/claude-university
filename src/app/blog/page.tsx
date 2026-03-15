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

      {/* Featured post */}
      {sorted.length > 0 && (
        <a
          href={`/blog/${sorted[0].slug}`}
          className="feature-card"
          style={{
            display: "block",
            padding: "32px 28px",
            marginBottom: 32,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span className="mono-label" style={{ color: "var(--accent)" }}>Featured</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", color: "var(--text-muted)" }}>
              {sorted[0].readTime}
            </span>
          </div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.25 }}>
            {sorted[0].title}
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.6, maxWidth: 560 }}>
            {sorted[0].excerpt}
          </p>
          <span style={{ display: "inline-block", marginTop: 16, color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}>
            Read article →
          </span>
        </a>
      )}

      {/* Remaining posts */}
      <div className="features-grid" style={{ gap: 16 }}>
        {sorted.slice(1).map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
