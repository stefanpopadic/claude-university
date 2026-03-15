"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import AnimatedTerminal from "./terminal";
import Logo from "./logo";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    const { error } = await supabase.from("waitlist").insert({ email });

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

  return (
    <div className="relative min-h-screen overflow-x-hidden dot-grid flex flex-col">
      <div className="noise-overlay" />

      {/* Glow orbs */}
      <div className="glow-orb" style={{ top: "-250px", right: "-200px" }} />
      <div className="glow-orb-secondary" style={{ bottom: "0", left: "-200px" }} />

      {/* ===== NAV ===== */}
      <nav className="relative z-10 page-container" style={{ paddingTop: 20, paddingBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div className="animate-slide-in" style={{ color: "var(--text-primary)" }}>
          <Logo height={38} />
        </div>
        <a href="/about" className="animate-fade-in-up-1 nav-link">
          About
        </a>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 page-container main-content">
        {/* Hero row */}
        <div className="hero-grid">
          {/* Left column */}
          <div>
            {/* Status badge */}
            <div className="animate-fade-in-up-1 mono-label" style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span className="animate-glow-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
              <span>Waitlist open</span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up-2 hero-headline">
              Learn Claude.
              <br />
              <span style={{ color: "var(--accent)" }}>
                The only employee you&apos;ll ever need.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up-3 hero-subheadline">
              Workflows, tutorials, and courses that teach you how to use
              Claude AI to do the work of an entire team.
            </p>

            {/* Form */}
            <div className="animate-fade-in-up-4">
              {status === "success" ? (
                <div className="success-message">
                  <svg style={{ width: 20, height: 20, color: "#34d399", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ color: "#34d399", fontWeight: 500 }}>
                    You&apos;re in. We&apos;ll let you know when we launch.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="waitlist-form">
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                  />
                  <button type="submit" disabled={status === "loading"} className="cta-button">
                    {status === "loading" ? "Joining..." : "Get early access"}
                  </button>
                </form>
              )}
              {status === "error" && (
                <p style={{ marginTop: 12, fontSize: "0.875rem", color: "#f87171", fontFamily: "var(--font-mono)" }}>
                  {errorMsg}
                </p>
              )}
            </div>
          </div>

          {/* Right column - Animated Terminal */}
          <div className="animate-fade-in-up-5">
            <AnimatedTerminal />
          </div>
        </div>

        {/* Feature cards */}
        <div>
          <div className="sep-line" style={{ marginBottom: 24 }} />
          <div className="features-grid">
            <div className="feature-card">
              <div className="mono-label" style={{ marginBottom: 8 }}>01 / Multiply</div>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                10x Your Output
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                Learn AI workflows that compress 50-hour weeks into 5-hour sprints. Real systems you can deploy today.
              </p>
            </div>
            <div className="feature-card">
              <div className="mono-label" style={{ marginBottom: 8 }}>02 / Build</div>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                Ship Without a Team
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                Build apps, automate operations, launch products — all with Claude. No developers, no overhead, no hiring.
              </p>
            </div>
            <div className="feature-card">
              <div className="mono-label" style={{ marginBottom: 8 }}>03 / Dominate</div>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                Outperform Everyone
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                While others hire and manage, you ship faster alone. Claude is the unfair advantage nobody sees coming.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 page-container" style={{ paddingTop: 16, paddingBottom: 16, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
          &copy; {new Date().getFullYear()} Clauni
        </span>
        <span className="mono-label" style={{ opacity: 0.4, fontSize: "0.6rem" }}>
          Built with Claude Code
        </span>
      </footer>
    </div>
  );
}
