import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Clauni",
  description:
    "Get in touch with the Clauni team. Questions about courses, partnerships, or anything else — we'd love to hear from you.",
};

export default function Contact() {
  return (
    <div className="page-container page-body">
      <div style={{ maxWidth: 600 }}>
        <div className="page-header">
          <div className="mono-label" style={{ marginBottom: 16 }}>Contact</div>
          <h1>Get in touch</h1>
          <p>
            Have a question, partnership idea, or just want to say hi?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div className="feature-card">
            <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
              Email
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 12 }}>
              Best way to reach us. We reply within 24 hours.
            </p>
            <a
              href="mailto:hello@clauni.com"
              style={{ color: "var(--accent)", fontSize: "0.9375rem", fontWeight: 500 }}
            >
              hello@clauni.com
            </a>
          </div>

          <div className="feature-card">
            <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
              Social
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 12 }}>
              Follow along and DM us anytime.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              <a
                href="https://linkedin.com/in/stefanpopadic"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/pfrfrfr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}
              >
                Twitter / X
              </a>
            </div>
          </div>

          <div className="feature-card">
            <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
              Business inquiries
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
              For partnerships, sponsorships, or team training — email us at{" "}
              <a href="mailto:hello@clauni.com" style={{ color: "var(--accent)" }}>
                hello@clauni.com
              </a>{" "}
              with details and we&apos;ll get back to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
