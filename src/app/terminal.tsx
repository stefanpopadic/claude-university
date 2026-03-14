"use client";

import { useState, useEffect } from "react";

interface TerminalLine {
  text: string;
  type: "command" | "task" | "timer" | "done";
  delay: number; // ms after previous line
}

const LINES: TerminalLine[] = [
  { text: '$ claude "handle my business today"', type: "command", delay: 500 },
  { text: "\u25B8 Drafting proposal for $8K Webflow redesign...", type: "task", delay: 1200 },
  { text: "\u25B8 Writing cold outreach for 12 leads on LinkedIn...", type: "task", delay: 1400 },
  { text: "\u25B8 Building waitlist landing page from scratch...", type: "task", delay: 1300 },
  { text: "\u25B8 Setting up automated invoice reminders...", type: "task", delay: 1200 },
  { text: "\u25B8 Scheduling 5 social posts for the week...", type: "task", delay: 1100 },
  { text: "\u25B8 Analyzing last month's revenue pipeline...", type: "task", delay: 1400 },
  { text: "", type: "timer", delay: 800 },
  { text: "", type: "done", delay: 600 },
];

function TypewriterText({ text, onDone }: { text: string; onDone: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const speed = text[charIndex] === " " ? 15 : 25 + Math.random() * 20;
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      onDone();
    }
  }, [charIndex, text, onDone]);

  return <>{displayed}</>;
}

export default function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [linesDone, setLinesDone] = useState<Set<number>>(new Set());
  const [timerValue, setTimerValue] = useState(0);
  const [timerDone, setTimerDone] = useState(false);
  const [cycle, setCycle] = useState(0);

  // Show lines sequentially
  useEffect(() => {
    if (visibleLines === 0) {
      setVisibleLines(1);
      return;
    }
  }, [visibleLines]);

  // When a line finishes typing, queue the next one
  function handleLineDone(index: number) {
    setLinesDone((prev) => new Set(prev).add(index));

    if (index + 1 < LINES.length) {
      const nextDelay = LINES[index + 1].delay;
      setTimeout(() => {
        setVisibleLines((v) => Math.max(v, index + 2));
      }, nextDelay);
    }
  }

  // Timer animation
  useEffect(() => {
    const timerLineIndex = LINES.findIndex((l) => l.type === "timer");
    if (!linesDone.has(timerLineIndex - 1)) return;
    if (visibleLines <= timerLineIndex) return;

    const target = 160; // 2:40 in seconds
    const interval = setInterval(() => {
      setTimerValue((v) => {
        if (v >= target) {
          clearInterval(interval);
          setTimerDone(true);
          // Show the done line
          setTimeout(() => {
            setVisibleLines((vl) => Math.max(vl, LINES.length));
          }, 600);
          return target;
        }
        return v + 1;
      });
    }, 12); // Fast count-up
    return () => clearInterval(interval);
  }, [linesDone, visibleLines]);

  // Restart loop after completion
  useEffect(() => {
    const doneLineIndex = LINES.findIndex((l) => l.type === "done");
    if (linesDone.has(doneLineIndex)) {
      const timeout = setTimeout(() => {
        setVisibleLines(0);
        setLinesDone(new Set());
        setTimerValue(0);
        setTimerDone(false);
        setCycle((c) => c + 1);
        setTimeout(() => setVisibleLines(1), 300);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [linesDone]);

  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  return (
    <div
      key={cycle}
      className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden shadow-2xl shadow-black/50"
    >
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
      <div className="p-5 font-[family-name:var(--font-mono)] text-[13px] leading-relaxed min-h-[280px]">
        {LINES.map((line, i) => {
          if (i >= visibleLines) return null;

          if (line.type === "command") {
            return (
              <div key={i} className="text-[var(--text-muted)]">
                <TypewriterText
                  text={line.text}
                  onDone={() => handleLineDone(i)}
                />
              </div>
            );
          }

          if (line.type === "task") {
            return (
              <div key={i} className="text-[var(--accent)] mt-1.5">
                <TypewriterText
                  text={line.text}
                  onDone={() => handleLineDone(i)}
                />
                {linesDone.has(i) && (
                  <span className="text-emerald-400 ml-2 text-xs">done</span>
                )}
              </div>
            );
          }

          if (line.type === "timer") {
            return (
              <div
                key={i}
                className="text-[var(--text-muted)] mt-3 flex items-center gap-2"
              >
                <span className="text-[var(--text-secondary)]">
                  {timerDone ? (
                    `Completed in ${formatTime(timerValue)}`
                  ) : (
                    <>Running... {formatTime(timerValue)}</>
                  )}
                </span>
                {!timerDone && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-glow-pulse" />
                )}
              </div>
            );
          }

          if (line.type === "done") {
            return (
              <div
                key={i}
                className="text-emerald-400 mt-3 flex items-center gap-2"
              >
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
                <TypewriterText
                  text="All done. 6 tasks completed. That's a team's full day in under 3 minutes."
                  onDone={() => handleLineDone(i)}
                />
              </div>
            );
          }

          return null;
        })}

        {/* Cursor at the bottom when done */}
        {linesDone.has(LINES.length - 1) && (
          <div className="mt-3 text-[var(--text-muted)] flex items-center">
            $<span className="cursor-blink ml-1" />
          </div>
        )}
      </div>
    </div>
  );
}
