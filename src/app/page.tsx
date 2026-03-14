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
      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Glow orbs */}
      <div className="glow-orb" style={{ top: "-200px", right: "-100px" }} />
      <div
        className="glow-orb-secondary"
        style={{ bottom: "10%", left: "-150px" }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="animate-slide-in flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-[var(--accent)] flex items-center justify-center">
            <span className="text-[#050505] font-bold text-sm font-[family-name:var(--font-mono)]">
              CU
            </span>
          </div>
          <span className="text-[var(--text-primary)] font-semibold tracking-tight text-lg">
            Claude University
          </span>
        </div>
        <div className="animate-fade-in-up-1 mono-label opacity-60">
          est. 2026
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex items-center min-h-[calc(100vh-200px)] px-6 md:px-12">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <div className="lg:col-span-7">
              {/* Terminal-style status */}
              <div className="animate-fade-in-up-1 mono-label mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-glow-pulse" />
                <span>Waitlist open</span>
              </div>

              {/* Headline */}
              <h1 className="animate-fade-in-up-2 text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
                Master Claude.
                <br />
                <span className="text-[var(--accent)]">
                  Scale solo
                  <span className="cursor-blink" />
                </span>
              </h1>

              {/* Sub */}
              <p className="animate-fade-in-up-3 text-lg md:text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed mb-10">
                Courses, workflows, and tools to help freelancers and
                solopreneurs use AI to do the work of a{" "}
                <span className="text-[var(--text-primary)]">
                  5-person team
                </span>
                .
              </p>

              {/* Email Form */}
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
                      You&apos;re on the list. We&apos;ll be in touch.
                    </span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 max-w-lg"
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
                      {status === "loading"
                        ? "Joining..."
                        : "Join the waitlist"}
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

            {/* Right - Terminal window */}
            <div className="animate-fade-in-up-5 lg:col-span-5 hidden lg:block">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden shadow-2xl shadow-black/50">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs text-[var(--text-muted)] font-[family-name:var(--font-mono)]">
                    claude-university
                  </span>
                </div>
                {/* Terminal content */}
                <div className="p-5 font-[family-name:var(--font-mono)] text-sm leading-relaxed">
                  <div className="text-[var(--text-muted)]">
                    $ claude --version
                  </div>
                  <div className="text-[var(--text-secondary)] mt-1">
                    claude-code v1.0.28
                  </div>
                  <div className="mt-4 text-[var(--text-muted)]">
                    $ claude &quot;build my business&quot;
                  </div>
                  <div className="mt-2 space-y-1.5">
                    <div className="text-[var(--accent)]">
                      {"\u25B8"} Analyzing your revenue streams...
                    </div>
                    <div className="text-[var(--accent)]">
                      {"\u25B8"} Generating proposals...
                    </div>
                    <div className="text-[var(--accent)]">
                      {"\u25B8"} Automating client onboarding...
                    </div>
                    <div className="text-[var(--accent)]">
                      {"\u25B8"} Building landing page...
                    </div>
                    <div className="text-emerald-400 mt-3 flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
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
                      Done. You just saved 40 hours.
                    </div>
                  </div>
                  <div className="mt-4 text-[var(--text-muted)] flex items-center">
                    $<span className="cursor-blink ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-24 lg:mt-32">
            <div className="sep-line mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="animate-fade-in-up-3 feature-card rounded-xl p-6">
                <div className="mono-label mb-3">01 / Workflows</div>
                <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2">
                  AI Workflows
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Step-by-step systems to automate proposals, client onboarding,
                  content, and ops with Claude.
                </p>
              </div>
              <div className="animate-fade-in-up-4 feature-card rounded-xl p-6">
                <div className="mono-label mb-3">02 / Build</div>
                <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2">
                  Build Without Code
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Ship apps, tools, and automations using Claude Code. Design to
                  deployment, no developer needed.
                </p>
              </div>
              <div className="animate-fade-in-up-5 feature-card rounded-xl p-6">
                <div className="mono-label mb-3">03 / Scale</div>
                <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2">
                  Scale Solo
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Replace a 5-person team with AI. Real frameworks from a
                  solopreneur doing it with zero employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-10 mt-20">
        <div className="sep-line mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
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
