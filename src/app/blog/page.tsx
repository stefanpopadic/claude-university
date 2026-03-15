import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Clauni | Claude AI Tips, Tutorials & Workflows",
  description:
    "Practical guides on using Claude AI for business. Tutorials, comparisons, workflows, and strategies for solopreneurs and freelancers.",
};

export default function Blog() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="page-container page-body">
      {/* Featured post — full-width editorial hero */}
      {sorted.length > 0 && (
        <a
          href={`/blog/${sorted[0].slug}`}
          style={{
            display: "block",
            maxWidth: 720,
            marginBottom: 56,
            paddingTop: 48,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span className="mono-label" style={{ color: "var(--accent)" }}>Featured</span>
            <span className="mono-label">{sorted[0].category}</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", color: "var(--text-muted)" }}>
              {sorted[0].readTime}
            </span>
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 12 }}>
            {sorted[0].title}
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem", lineHeight: 1.7, maxWidth: 600 }}>
            {sorted[0].excerpt}
          </p>
          <span style={{ display: "inline-block", marginTop: 16, color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}>
            Read article →
          </span>
        </a>
      )}

      <div className="sep-line" style={{ marginBottom: 32 }} />

      {/* Remaining posts — list layout */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {sorted.slice(1).map((post, i, arr) => {
          const postDate = new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          return (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr auto",
                gap: 24,
                padding: "20px 0",
                borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                textDecoration: "none",
                color: "inherit",
                alignItems: "baseline",
              }}
            >
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                {postDate}
              </span>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.3, marginBottom: 4 }}>
                  {post.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.5 }}>
                  {post.excerpt}
                </p>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", color: "var(--text-muted)", whiteSpace: "nowrap", flexShrink: 0 }}>
                {post.readTime}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
