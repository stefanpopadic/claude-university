"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

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
    <div className="relative min-h-screen dot-grid">
      <div className="noise-overlay" />

      {/* Glow orbs */}
      <div className="glow-orb" style={{ top: "-250px", right: "-200px" }} />
      <div className="glow-orb-secondary" style={{ bottom: "0", left: "-200px" }} />

      {/* ===== NAV ===== */}
      <nav className="relative z-10 page-container py-6 flex items-center justify-between">
        <div className="animate-slide-in">
          <span className="text-[var(--text-primary)] font-semibold tracking-tight text-lg">
            Claude University
          </span>
        </div>
        <div className="animate-fade-in-up-1 mono-label opacity-60">
          est. 2026
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative z-10 page-container flex items-center min-h-[calc(100vh-88px)]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-16 lg:py-0">
          {/* Left column */}
          <div className="lg:col-span-6">
            {/* Status badge */}
            <div className="animate-fade-in-up-1 mono-label mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-glow-pulse" />
              <span>Waitlist open</span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.08] mb-6">
              One person.
              <br />
              <span className="text-[var(--accent)]">
                Ten people&apos;s output
                <span className="cursor-blink" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up-3 text-lg text-[var(--text-secondary)] leading-relaxed mb-10 max-w-[480px]">
              Learn the AI workflows that let solopreneurs and freelancers
              outperform entire teams.{" "}
              <span className="text-[var(--text-primary)] font-medium">
                Claude is your unfair advantage.
              </span>
            </p>

            {/* Form */}
            <div className="animate-fade-in-up-4">
              {status === "success" ? (
                <div className="inline-flex items-center gap-3 px-5 py-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
                  <svg
                    className="w-5 h-5 text-emerald-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-emerald-400 font-medium">
                    You&apos;re in. We&apos;ll let you know when we launch.
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-[440px]"
                >
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field flex-1 px-4 py-3.5 rounded-lg"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="cta-button px-7 py-3.5 rounded-lg cursor-pointer whitespace-nowrap"
                  >
                    {status === "loading" ? "Joining..." : "Get early access"}
                  </button>
                </form>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-red-400 font-[family-name:var(--font-mono)]">
                  {errorMsg}
                </p>
              )}
            </div>
          </div>

          {/* Right column - Terminal */}
          <div className="animate-fade-in-up-5 lg:col-span-6">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden shadow-2xl shadow-black/50">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-[var(--text-muted)] font-[family-name:var(--font-mono)]">
                  your-business
                </span>
              </div>
              {/* Terminal content */}
              <div className="p-6 font-[family-name:var(--font-mono)] text-sm leading-loose">
                <div className="text-[var(--text-muted)]">
                  $ claude &quot;run my business today&quot;
                </div>
                <div className="mt-4 space-y-2">
                  <div className="text-[var(--accent)]">
                    {"\u25B8"} Writing 3 client proposals...
                  </div>
                  <div className="text-[var(--accent)]">
                    {"\u25B8"} Building landing page from scratch...
                  </div>
                  <div className="text-[var(--accent)]">
                    {"\u25B8"} Automating invoices + follow-ups...
                  </div>
                  <div className="text-[var(--accent)]">
                    {"\u25B8"} Scheduling content for the week...
                  </div>
                  <div className="text-emerald-400 mt-4 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Done. That was 10 people&apos;s work in 10 minutes.
                  </div>
                </div>
                <div className="mt-4 text-[var(--text-muted)] flex items-center">
                  $<span className="cursor-blink ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative z-10 page-container py-24">
        <div className="sep-line mb-16" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="animate-fade-in-up-3 feature-card rounded-xl p-7">
            <div className="mono-label mb-4">01 / Multiply</div>
            <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-3">
              10x Your Output
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Real AI workflows that compress 50-hour weeks into 5-hour
              sprints. Not theory. Actual systems you deploy today.
            </p>
          </div>
          <div className="animate-fade-in-up-4 feature-card rounded-xl p-7">
            <div className="mono-label mb-4">02 / Build</div>
            <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-3">
              Ship Without a Team
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Build apps, automate ops, launch products -- all with Claude
              Code. No developers, no managers, no overhead.
            </p>
          </div>
          <div className="animate-fade-in-up-5 feature-card rounded-xl p-7">
            <div className="mono-label mb-4">03 / Dominate</div>
            <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-3">
              Outperform Everyone
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              While competitors hire and manage, you ship faster alone.
              The unfair advantage nobody sees coming.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 page-container py-10">
        <div className="sep-line mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[var(--text-muted)] text-sm">
            &copy; {new Date().getFullYear()} Claude University
          </span>
          <span className="mono-label opacity-40 text-[0.65rem]">
            Built with Claude Code
          </span>
        </div>
      </footer>
    </div>
  );
}
