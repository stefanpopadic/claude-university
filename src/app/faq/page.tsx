import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ — Clauni | Frequently Asked Questions",
  description:
    "Answers to common questions about Clauni, Claude AI courses, pricing, and getting started.",
};

const categoryLabels: Record<string, string> = {
  general: "General",
  courses: "Courses",
  pricing: "Pricing & Access",
  technical: "Technical",
};

const categoryOrder = ["general", "courses", "pricing", "technical"];

export default function FAQ() {
  const grouped = categoryOrder.map((cat) => ({
    label: categoryLabels[cat],
    items: faqs.filter((f) => f.category === cat),
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="page-container page-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ maxWidth: 720 }}>
        <div style={{ marginBottom: 48 }}>
          <div className="mono-label" style={{ marginBottom: 12 }}>FAQ</div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 12 }}>
            Frequently asked questions
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem", lineHeight: 1.6, maxWidth: 520 }}>
            Everything you need to know about Clauni, our courses, and getting
            started with Claude AI.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {grouped.map((group) => (
            <section key={group.label}>
              <h2 style={{
                fontSize: "1.125rem",
                fontWeight: 600,
                marginBottom: 16,
                borderLeft: "2px solid var(--accent)",
                paddingLeft: 16,
              }}>
                {group.label}
              </h2>
              <FAQAccordion faqs={group.items} variant="editorial" />
            </section>
          ))}
        </div>

        <div className="sep-line" style={{ margin: "48px 0 32px" }} />

        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Still have questions? Reach out at{" "}
          <a href="mailto:hello@clauni.com" style={{ color: "var(--accent)" }}>
            hello@clauni.com
          </a>{" "}
          and we&apos;ll get back to you within 24 hours.
        </p>
      </div>
    </div>
  );
}
