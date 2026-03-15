import type { Metadata } from "next";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export const metadata: Metadata = {
  title: "Newsletter — Clauni | Weekly Claude AI Tips",
  description:
    "Get weekly Claude AI tips, workflows, and strategies delivered to your inbox. Free. No spam. Built for solopreneurs and freelancers.",
};

export default function Newsletter() {
  const benefits = [
    "Weekly",
    "Real workflows",
    "Copy-paste prompts",
    "No spam",
  ];

  return (
    <div className="page-container page-body">
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: 16,
        }}>
          The Clauni Playbook
        </h1>
        <p style={{
          color: "var(--text-secondary)",
          fontSize: "1.125rem",
          lineHeight: 1.6,
          marginBottom: 40,
        }}>
          Weekly Claude AI tips, workflows, and strategies for solopreneurs
          who want to get more done with less. Free. No spam.
        </p>

        <div style={{ marginBottom: 40 }}>
          <EmailCaptureForm
            source="newsletter"
            variant="stacked"
            buttonText="Subscribe — it's free"
            placeholder="your@email.com"
          />
        </div>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 12,
        }}>
          {benefits.map((benefit) => (
            <span
              key={benefit}
              className="mono-label"
              style={{
                padding: "6px 14px",
                border: "1px solid var(--border)",
                borderRadius: 4,
                fontSize: "0.6875rem",
              }}
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
