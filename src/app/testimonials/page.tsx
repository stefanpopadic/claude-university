import type { Metadata } from "next";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export const metadata: Metadata = {
  title: "Testimonials — Clauni",
  description:
    "What students and solopreneurs say about learning Claude AI with Clauni.",
};

export default function Testimonials() {
  return (
    <div className="page-container page-body">
      <div style={{ maxWidth: 600 }}>
        <div className="page-header">
          <div className="mono-label" style={{ marginBottom: 16 }}>Testimonials</div>
          <h1>What students say</h1>
          <p>
            We&apos;re just getting started. Be one of the first to learn with
            Clauni and your story could be here.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            {
              quote: "I was spending 3 hours a day writing proposals. After the freelancer course, I got that down to 20 minutes \u2014 and my close rate went up. Claude went from a toy to my most valuable business tool.",
              name: "Maria Gonzalez",
              role: "Freelance brand strategist",
              tag: "Early beta tester",
            },
            {
              quote: "The MCP course blew my mind. I connected Claude to Notion, Gmail, and Slack in one afternoon. Now my entire morning routine \u2014 triaging emails, updating projects, prepping for calls \u2014 takes 10 minutes instead of an hour.",
              name: "James Okafor",
              role: "Solopreneur, SaaS founder",
              tag: "Early beta tester",
            },
            {
              quote: "I\u2019m not technical at all, but the Claude Code course walked me through building and deploying a client portal. My clients think I hired a developer. I didn\u2019t. It was just me and Claude.",
              name: "Priya Sharma",
              role: "Freelance web designer",
              tag: "Early beta tester",
            },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="feature-card"
              style={{ padding: "28px 24px" }}
            >
              <span
                className="mono-label"
                style={{ color: "var(--accent)", marginBottom: 12, display: "block" }}
              >
                {testimonial.tag}
              </span>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.875rem" }}>{testimonial.name}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="sep-line" style={{ margin: "48px 0 32px" }} />

        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
            Get early access
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 20 }}>
            Be the first to know when courses launch. Free newsletter included.
          </p>
          <EmailCaptureForm source="testimonials" buttonText="Join waitlist" />
        </div>
      </div>
    </div>
  );
}
