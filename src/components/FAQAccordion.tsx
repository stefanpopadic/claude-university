"use client";

import { useState } from "react";
import { FAQ } from "@/types";

export default function FAQAccordion({ faqs, variant = "default" }: { faqs: FAQ[]; variant?: "default" | "editorial" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isEditorial = variant === "editorial";

  if (isEditorial) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {faqs.map((faq, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid var(--border)",
              borderRadius: 0,
              padding: "20px 0",
              cursor: "pointer",
              color: "inherit",
              font: "inherit",
            }}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === i ? "\u2212" : "+"}</span>
            </div>
            {openIndex === i && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <button
          key={i}
          className={`faq-item ${openIndex === i ? "faq-item--open" : ""}`}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
          aria-expanded={openIndex === i}
        >
          <div className="faq-question">
            <span>{faq.question}</span>
            <span className="faq-icon">{openIndex === i ? "\u2212" : "+"}</span>
          </div>
          {openIndex === i && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </button>
      ))}
    </div>
  );
}
