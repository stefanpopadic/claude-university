import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import BlogPostCard from "@/components/BlogPostCard";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
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

function extractHeadings(content: string): string[] {
  return content
    .split("\n")
    .filter((line) => line.trim().startsWith("## "))
    .map((line) => line.trim().slice(3));
}

function headingToId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderContentWithIds(content: string) {
  const blocks = content.split("\n\n");
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3);
      return <h2 key={i} id={headingToId(text)}>{text}</h2>;
    }
    if (trimmed.startsWith("### ")) {
      return <h3 key={i}>{trimmed.slice(4)}</h3>;
    }
    if (trimmed.startsWith("```")) {
      const code = trimmed.replace(/^```\w*\n?/, "").replace(/```$/, "");
      return <pre key={i}><code>{code}</code></pre>;
    }
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const headings = extractHeadings(post.content);

  const publishDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="page-container page-body">
      <article style={{ maxWidth: 720 }}>
        {/* Header */}
        <div style={{ marginBottom: 32, paddingTop: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span className="mono-label">{post.category}</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", color: "var(--text-muted)" }}>
              {post.readTime}
            </span>
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 12 }}>
            {post.title}
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 20 }}>
            {post.excerpt}
          </p>

          {/* Author & date */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "#000",
                flexShrink: 0,
              }}
            >
              SP
            </div>
            <div>
              <div style={{ fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.3 }}>Stefan Popadic</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{publishDate}</div>
            </div>
          </div>
        </div>

        {/* Author bio */}
        <div
          style={{
            padding: "16px 20px",
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            marginBottom: 32,
            fontSize: "0.8125rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          Stefan is a freelance web designer and Webflow developer who runs his entire
          business with Claude AI. He built Clauni to teach other solopreneurs and
          freelancers how to do the same.
        </div>

        {/* Table of contents */}
        {headings.length > 0 && (
          <nav
            style={{
              padding: "20px 24px",
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              marginBottom: 40,
            }}
          >
            <div
              className="mono-label"
              style={{ marginBottom: 12 }}
            >
              In this article
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {headings.map((heading) => (
                <li key={heading}>
                  <a
                    href={`#${headingToId(heading)}`}
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="sep-line" style={{ marginBottom: 40 }} />

        {/* Body */}
        <div className="content-prose">
          {renderContentWithIds(post.content)}
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
