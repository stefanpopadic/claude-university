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
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Coming soon
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Master Claude.{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent animate-gradient">
              Scale your business.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-white/50 max-w-lg mx-auto mb-10 leading-relaxed">
            Courses, workflows, and tools to help freelancers and solopreneurs
            use AI to do the work of a 5-person team. No coding required.
          </p>

          {/* Email Form */}
          <div className="animate-fade-in-up-delay-3">
            {status === "success" ? (
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <svg
                  className="w-5 h-5 shrink-0"
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
                <span>You&apos;re on the list. We&apos;ll be in touch.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold hover:from-amber-400 hover:to-orange-400 transition-all disabled:opacity-50 cursor-pointer whitespace-nowrap"
                >
                  {status === "loading" ? "Joining..." : "Join the waitlist"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
            )}
          </div>

          {/* Value props */}
          <div className="animate-fade-in-up-delay-4 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="text-amber-400 font-semibold text-sm mb-2">
                AI Workflows
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Step-by-step systems to automate proposals, client onboarding,
                content, and ops with Claude.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="text-amber-400 font-semibold text-sm mb-2">
                Build Without Code
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Ship apps, tools, and automations using Claude Code. Design to
                deployment, no developer needed.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="text-amber-400 font-semibold text-sm mb-2">
                Scale Solo
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Replace a 5-person team with AI. Real frameworks from a
                solopreneur doing it with zero employees.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-white/20 text-sm">
        &copy; {new Date().getFullYear()} Claude University. All rights
        reserved.
      </footer>
    </div>
  );
}
