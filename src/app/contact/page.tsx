import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Clauni",
  description:
    "Get in touch with the Clauni team. Questions about courses, partnerships, or anything else — we'd love to hear from you.",
};

export default function Contact() {
  return (
    <div className="page-container page-body">
      <div style={{ maxWidth: 520 }}>
        <div style={{ marginBottom: 48 }}>
          <div className="mono-label" style={{ marginBottom: 12 }}>Contact</div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 12 }}>
            Get in touch
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem", lineHeight: 1.6 }}>
            Have a question, partnership idea, or just want to say hi?
          </p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <a
            href="mailto:hello@clauni.com"
            style={{
              color: "var(--accent)",
              fontSize: "1.5rem",
              fontWeight: 700,
              textDecoration: "none",
              display: "block",
              marginBottom: 8,
            }}
          >
            hello@clauni.com
          </a>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
            We reply within 24 hours.
          </p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 24 }}>
            <a
              href="https://linkedin.com/in/stefanpopadic"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none" }}
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/pfrfrfr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none" }}
            >
              Twitter / X
            </a>
          </div>
        </div>

        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>
          For partnerships, sponsorships, or team training — email us with
          details and we&apos;ll get back to you.
        </p>
      </div>
    </div>
  );
}
