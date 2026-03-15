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

        <div
          className="feature-card"
          style={{
            textAlign: "center",
            padding: "48px 32px",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>
            {"\u2728"}
          </div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
            Be the first
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, maxWidth: 400, margin: "0 auto" }}>
            Clauni is launching soon. Join the waitlist to get early access,
            and you could be our first success story.
          </p>
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
