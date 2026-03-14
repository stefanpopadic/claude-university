"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import AnimatedTerminal from "./terminal";

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
    <div className="relative h-screen overflow-hidden dot-grid flex flex-col">
      <div className="noise-overlay" />

      {/* Glow orbs */}
      <div className="glow-orb" style={{ top: "-250px", right: "-200px" }} />
      <div className="glow-orb-secondary" style={{ bottom: "0", left: "-200px" }} />

      {/* ===== NAV ===== */}
      <nav className="relative z-10 page-container" style={{ paddingTop: 20, paddingBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div className="animate-slide-in">
          <span style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.125rem", letterSpacing: "-0.01em" }}>
            Claude University
          </span>
        </div>
        <div className="animate-fade-in-up-1 mono-label" style={{ opacity: 0.6 }}>
          est. 2026
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 page-container" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 48 }}>
        {/* Hero row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Left column */}
          <div>
            {/* Status badge */}
            <div className="animate-fade-in-up-1 mono-label" style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span className="animate-glow-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
              <span>Waitlist open</span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up-2" style={{ fontSize: "3.5rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 24 }}>
              Learn Claude.
              <br />
              <span style={{ color: "var(--accent)" }}>
                The only hire you&apos;ll ever need.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up-3" style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 32, maxWidth: 440 }}>
              Tutorials, workflows, and courses that teach solopreneurs
              how to use Claude to do the work of an entire team.
            </p>

            {/* Form */}
            <div className="animate-fade-in-up-4">
              {status === "success" ? (
                <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "12px 20px", borderRadius: 10, border: "1px solid rgba(16, 185, 129, 0.2)", background: "rgba(16, 185, 129, 0.05)" }}>
                  <svg style={{ width: 20, height: 20, color: "#34d399", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ color: "#34d399", fontWeight: 500 }}>
                    You&apos;re in. We&apos;ll let you know when we launch.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    style={{ width: 260 }}
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <div className="feature-card">
              <div className="mono-label" style={{ marginBottom: 8 }}>01 / Multiply</div>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                10x Your Output
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                AI workflows that compress 50-hour weeks into 5-hour sprints. Actual systems you deploy today.
              </p>
            </div>
            <div className="feature-card">
              <div className="mono-label" style={{ marginBottom: 8 }}>02 / Build</div>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                Ship Without a Team
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                Build apps, automate ops, launch products -- all with Claude Code. No developers, no overhead.
              </p>
            </div>
            <div className="feature-card">
              <div className="mono-label" style={{ marginBottom: 8 }}>03 / Dominate</div>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                Outperform Everyone
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                While competitors hire and manage, you ship faster alone. The unfair advantage nobody sees coming.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 page-container" style={{ paddingTop: 16, paddingBottom: 16, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
          &copy; {new Date().getFullYear()} Claude University
        </span>
        <span className="mono-label" style={{ opacity: 0.4, fontSize: "0.6rem" }}>
          Built with Claude Code
        </span>
      </footer>
    </div>
  );
}
