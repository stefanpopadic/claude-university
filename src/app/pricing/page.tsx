import type { Metadata } from "next";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import HoverTableRow from "@/components/HoverTableRow";

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
      <div style={{ marginBottom: 48 }}>
        <div className="mono-label" style={{ marginBottom: 12 }}>Pricing</div>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 12 }}>
          Simple, honest pricing
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem", lineHeight: 1.6, maxWidth: 520 }}>
          Start free. Go deep when you&apos;re ready. No subscriptions, no
          recurring fees — pay once, learn forever.
        </p>
      </div>

      <div className="pricing-grid">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`pricing-card${tier.featured ? " pricing-card--featured" : ""}`}
            style={tier.featured ? { transform: "scale(1.02)" } : undefined}
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

      {/* Comparison table */}
      <div style={{ marginTop: 56, overflowX: "auto" }}>
        <div className="mono-label" style={{ marginBottom: 16 }}>Compare</div>
        <table
          className="comparison-table"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.875rem",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "1px solid var(--border)", color: "var(--text-muted)", fontWeight: 500, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Feature</th>
              <th style={{ textAlign: "center", padding: "12px 16px", borderBottom: "1px solid var(--border)", color: "var(--text-muted)", fontWeight: 500 }}>Free</th>
              <th style={{ textAlign: "center", padding: "12px 16px", borderBottom: "1px solid var(--border)", color: "var(--text-muted)", fontWeight: 500 }}>Individual</th>
              <th style={{ textAlign: "center", padding: "12px 16px", borderBottom: "1px solid var(--border)", color: "var(--accent)", fontWeight: 600 }}>All Access</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: "Claude Quickstart course", free: true, individual: true, all: true },
              { feature: "Blog & tutorials", free: true, individual: true, all: true },
              { feature: "Weekly newsletter", free: true, individual: true, all: true },
              { feature: "Full course access", free: false, individual: "1 course", all: true },
              { feature: "Hands-on exercises", free: false, individual: true, all: true },
              { feature: "Downloadable resources", free: false, individual: true, all: true },
              { feature: "Certificate of completion", free: false, individual: true, all: true },
              { feature: "All future courses", free: false, individual: false, all: true },
              { feature: "Priority support", free: false, individual: false, all: true },
              { feature: "Early access to new content", free: false, individual: false, all: true },
            ].map((row) => (
              <HoverTableRow key={row.feature}>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>{row.feature}</td>
                {[row.free, row.individual, row.all].map((val, i) => (
                  <td key={i} style={{ textAlign: "center", padding: "10px 16px", borderBottom: "1px solid var(--border)", color: val === true ? "var(--accent)" : val === false ? "var(--text-muted)" : "var(--text-secondary)" }}>
                    {val === true ? "\u2713" : val === false ? "\u2014" : val}
                  </td>
                ))}
              </HoverTableRow>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQs */}
      <div style={{ marginTop: 56, maxWidth: 640 }}>
        <div className="mono-label" style={{ marginBottom: 24 }}>FAQ</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {[
            {
              q: "Is there a subscription or recurring fee?",
              a: "No. Every purchase is a one-time payment. You get lifetime access to whatever you buy \u2014 no monthly charges, no surprise renewals.",
            },
            {
              q: "What if I buy a course and it\u2019s not for me?",
              a: "You\u2019re covered by a 30-day money-back guarantee. If you\u2019re not satisfied, email us and we\u2019ll refund you \u2014 no questions asked.",
            },
            {
              q: "Does the All Access Pass include future courses?",
              a: "Yes. When we launch new courses, they\u2019re automatically included in your All Access Pass at no extra cost. Buy once, learn everything.",
            },
            {
              q: "Can I start with a free course and upgrade later?",
              a: "Absolutely. Start with the free Claude Quickstart, and when you\u2019re ready to go deeper, buy individual courses or upgrade to All Access. No pressure.",
            },
          ].map((faq) => (
            <div key={faq.q}>
              <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, marginBottom: 8 }}>{faq.q}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sep-line" style={{ margin: "56px 0 32px" }} />

      <div style={{ maxWidth: 600, borderLeft: "3px solid var(--accent)", paddingLeft: 24 }}>
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

      <div style={{ maxWidth: 600, borderLeft: "3px solid var(--accent)", paddingLeft: 24 }}>
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
