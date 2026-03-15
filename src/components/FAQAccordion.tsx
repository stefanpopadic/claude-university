"use client";

import { useState } from "react";
import { FAQ } from "@/types";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
