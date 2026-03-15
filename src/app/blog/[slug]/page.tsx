import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import BlogPostCard from "@/components/BlogPostCard";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Clauni`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  // Simple markdown-like rendering: split by double newlines for paragraphs,
  // detect ## headers, ``` code blocks, and **bold**
  const blocks = content.split("\n\n");
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return <h2 key={i}>{trimmed.slice(3)}</h2>;
    }
    if (trimmed.startsWith("### ")) {
      return <h3 key={i}>{trimmed.slice(4)}</h3>;
    }
    if (trimmed.startsWith("```")) {
      const code = trimmed.replace(/^```\w*\n?/, "").replace(/```$/, "");
      return <pre key={i}><code>{code}</code></pre>;
    }
    // Bold text
    const parts = trimmed.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={i}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j}>{part}</strong> : part
        )}
      </p>
    );
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="page-container page-body">
      <article style={{ maxWidth: 720 }}>
        {/* Header */}
        <div style={{ marginBottom: 40, paddingTop: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span className="mono-label">{post.category}</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", color: "var(--text-muted)" }}>
              {post.readTime}
            </span>
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 12 }}>
            {post.title}
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            {post.excerpt}
          </p>
        </div>

        <div className="sep-line" style={{ marginBottom: 40 }} />

        {/* Body */}
        <div className="content-prose">
          {renderContent(post.content)}
        </div>
      </article>

      {/* Newsletter CTA */}
      <div style={{ maxWidth: 720, marginTop: 56 }}>
        <div className="sep-line" style={{ marginBottom: 40 }} />
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          Get more like this
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 20 }}>
          Weekly Claude tips, workflows, and strategies. Free. No spam.
        </p>
        <EmailCaptureForm source="blog" buttonText="Subscribe" />
      </div>

      {/* Read next */}
      {otherPosts.length > 0 && (
        <div style={{ maxWidth: 720, marginTop: 56 }}>
          <div className="sep-line" style={{ marginBottom: 32 }} />
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 20 }}>Read next</h2>
          <div className="features-grid" style={{ gap: 16 }}>
            {otherPosts.map((p) => (
              <BlogPostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
