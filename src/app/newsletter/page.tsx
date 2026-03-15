import type { Metadata } from "next";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export const metadata: Metadata = {
  title: "Newsletter — Clauni | Weekly Claude AI Tips",
  description:
    "Get weekly Claude AI tips, workflows, and strategies delivered to your inbox. Free. No spam. Built for solopreneurs and freelancers.",
};

export default function Newsletter() {
  return (
    <div className="page-container page-body">
      <div style={{ maxWidth: 600 }}>
        <div className="page-header">
          <div className="mono-label" style={{ marginBottom: 16 }}>Newsletter</div>
          <h1>The Clauni Playbook</h1>
          <p>
            Weekly Claude AI tips, workflows, and strategies for solopreneurs
            who want to get more done with less. Free. No spam.
          </p>
        </div>

        <EmailCaptureForm
          source="newsletter"
          variant="stacked"
          buttonText="Subscribe — it's free"
          placeholder="your@email.com"
        />

        <div className="sep-line" style={{ margin: "48px 0 32px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
              What you get
            </h2>
            <ul style={{ color: "var(--text-secondary)", lineHeight: 1.8, paddingLeft: 20 }}>
              <li>One email per week — never more</li>
              <li>Real Claude workflows from a real business</li>
              <li>Prompt templates you can copy and use immediately</li>
              <li>Early access to new courses and resources</li>
              <li>No fluff, no hype — just what works</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
              Who it&apos;s for
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Solopreneurs, freelancers, and small team founders who use (or want
              to use) Claude AI to run their business. Whether you&apos;re just
              getting started or already deep into Claude Code and MCP — there&apos;s
              something here for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
