import type { Metadata } from "next";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export const metadata: Metadata = {
  title: "Pricing — Clauni | Claude AI Courses",
  description:
    "Simple pricing for Claude AI courses. Start free, go deep when you're ready. Individual courses from $49 or get everything with the All Access Pass.",
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Start learning Claude — no credit card required.",
    features: [
      "Claude Quickstart course (5 lessons)",
      "All blog content",
      "Weekly newsletter",
      "Community access",
    ],
    cta: "Start free",
    ctaHref: "/courses/claude-quickstart",
    featured: false,
  },
  {
    name: "Individual Course",
    price: "$49–79",
    description: "Go deep on one topic. Lifetime access included.",
    features: [
      "Full course access",
      "Lifetime updates",
      "Hands-on exercises",
      "Downloadable resources",
      "Certificate of completion",
    ],
    cta: "Browse courses",
    ctaHref: "/courses",
    featured: false,
  },
  {
    name: "All Access Pass",
    price: "$249",
    description: "Every course — current and future. Best value.",
    features: [
      "All current courses",
      "Every future course included",
      "Lifetime access",
      "Priority support",
      "Early access to new content",
      "Team-friendly licensing",
    ],
    cta: "Join waitlist",
    ctaHref: null,
    featured: true,
  },
];

export default function Pricing() {
  return (
    <div className="page-container page-body">
      <div className="page-header">
        <div className="mono-label" style={{ marginBottom: 16 }}>Pricing</div>
        <h1>Simple, honest pricing</h1>
        <p>
          Start free. Go deep when you&apos;re ready. No subscriptions, no
          recurring fees — pay once, learn forever.
        </p>
      </div>

      <div className="pricing-grid">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`pricing-card${tier.featured ? " pricing-card--featured" : ""}`}
          >
            {tier.featured && (
              <span className="mono-label" style={{ color: "var(--accent)", marginBottom: 8, display: "block" }}>
                Best value
              </span>
            )}
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 4 }}>
              {tier.name}
            </h2>
            <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)", marginBottom: 8 }}>
              {tier.price}
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 24 }}>
              {tier.description}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
              {tier.features.map((feature) => (
                <li key={feature} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 600, flexShrink: 0 }}>{"\u2713"}</span>
                  <span style={{ color: "var(--text-secondary)" }}>{feature}</span>
                </li>
              ))}
            </ul>
            {tier.ctaHref ? (
              <a
                href={tier.ctaHref}
                className="cta-button"
                style={{ display: "block", textAlign: "center", lineHeight: "48px", textDecoration: "none" }}
              >
                {tier.cta}
              </a>
            ) : (
              <EmailCaptureForm source="pricing-all-access" buttonText="Join waitlist" />
            )}
          </div>
        ))}
      </div>

      <div className="sep-line" style={{ margin: "56px 0 32px" }} />

      <div style={{ maxWidth: 600 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          Teams &amp; enterprise
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 20 }}>
          Need training for your team? We offer team licenses starting at $499
          for up to 5 seats. For larger teams or custom training, reach out.
        </p>
        <a
          href="mailto:hello@clauni.com"
          style={{ color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}
        >
          Contact us for team pricing &rarr;
        </a>
      </div>

      <div className="sep-line" style={{ margin: "48px 0 32px" }} />

      <div style={{ maxWidth: 600 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          30-day money-back guarantee
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Not satisfied? Email us within 30 days and we&apos;ll refund you — no
          questions asked. We want you to be confident in your investment.
        </p>
      </div>
    </div>
  );
}
