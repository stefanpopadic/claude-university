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

function extractPullQuote(content: string): string | null {
  const blocks = content.split("\n\n");
  // Find the first ~3 content blocks that are paragraphs, then take the first sentence of the 4th
  let paragraphCount = 0;
  for (const block of blocks) {
    const trimmed = block.trim();
    if (trimmed.startsWith("##") || trimmed.startsWith("###") || trimmed.startsWith("```")) continue;
    paragraphCount++;
    if (paragraphCount === 4) {
      // Strip bold markers for clean quote text
      const clean = trimmed.replace(/\*\*(.*?)\*\*/g, "$1");
      const firstSentence = clean.match(/^[^.!?]+[.!?]/);
      return firstSentence ? firstSentence[0] : clean.slice(0, 120);
    }
  }
  return null;
}

function renderContentWithPullQuote(content: string) {
  const blocks = content.split("\n\n");
  const pullQuote = extractPullQuote(content);
  const elements: React.ReactNode[] = [];
  let paragraphCount = 0;
  let pullQuoteInserted = false;

  for (let i = 0; i < blocks.length; i++) {
    const trimmed = blocks[i].trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3);
      elements.push(<h2 key={i} id={headingToId(text)}>{text}</h2>);
    } else if (trimmed.startsWith("### ")) {
      elements.push(<h3 key={i}>{trimmed.slice(4)}</h3>);
    } else if (trimmed.startsWith("```")) {
      const code = trimmed.replace(/^```\w*\n?/, "").replace(/```$/, "");
      elements.push(<pre key={i}><code>{code}</code></pre>);
    } else {
      paragraphCount++;
      const parts = trimmed.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
        </p>
      );

      // Insert pull quote after 3rd paragraph
      if (paragraphCount === 3 && pullQuote && !pullQuoteInserted) {
        pullQuoteInserted = true;
        elements.push(
          <blockquote
            key="pull-quote"
            style={{
              borderLeft: "3px solid var(--accent)",
              paddingLeft: 24,
              margin: "32px 0",
              fontSize: "1.25rem",
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "var(--text-primary)",
            }}
          >
            {pullQuote}
          </blockquote>
        );
      }
    }
  }
  return elements;
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

        {/* Author bio — text with border-bottom separator, no card bg */}
        <div
          style={{
            paddingBottom: 20,
            marginBottom: 32,
            borderBottom: "1px solid var(--border)",
            fontSize: "0.8125rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          Stefan is a freelance web designer and Webflow developer who runs his entire
          business with Claude AI. He built Clauni to teach other solopreneurs and
          freelancers how to do the same.
        </div>

        {/* Table of contents — clean text links with numbers, no box */}
        {headings.length > 0 && (
          <nav
            style={{
              marginBottom: 40,
              paddingBottom: 24,
            }}
          >
            <div
              className="mono-label"
              style={{ marginBottom: 12 }}
            >
              In this article
            </div>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {headings.map((heading, i) => (
                <li key={heading}>
                  <a
                    href={`#${headingToId(heading)}`}
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      lineHeight: 1.4,
                      display: "flex",
                      alignItems: "baseline",
                      gap: 10,
                    }}
                  >
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--text-muted)", minWidth: 20 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="sep-line" style={{ marginBottom: 40 }} />

        {/* Body with pull quote */}
        <div className="content-prose">
          {renderContentWithPullQuote(post.content)}
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
