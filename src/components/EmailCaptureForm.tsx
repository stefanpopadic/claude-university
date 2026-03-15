"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface EmailCaptureFormProps {
  variant?: "inline" | "stacked";
  placeholder?: string;
  buttonText?: string;
  source?: string;
}

export default function EmailCaptureForm({
  variant = "inline",
  placeholder = "you@email.com",
  buttonText = "Get early access",
  source = "homepage",
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    const { error } = await supabase.from("waitlist").insert({ email, source });

    if (error) {
      if (error.code === "23505") {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Try again.");
      }
    } else {
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="success-message">
        <svg
          style={{ width: 20, height: 20, color: "#34d399", flexShrink: 0 }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span style={{ color: "#34d399", fontWeight: 500 }}>
          You&apos;re in. We&apos;ll let you know when we launch.
        </span>
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={variant === "stacked" ? "waitlist-form waitlist-form--stacked" : "waitlist-form"}
      >
        <input
          type="email"
          required
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <button type="submit" disabled={status === "loading"} className="cta-button">
          {status === "loading" ? "Joining..." : buttonText}
        </button>
      </form>
      {status === "error" && (
        <p style={{ marginTop: 12, fontSize: "0.875rem", color: "#f87171", fontFamily: "var(--font-mono)" }}>
          {errorMsg}
        </p>
      )}
    </div>
  );
}
