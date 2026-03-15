"use client";

import { useState, useEffect, useCallback } from "react";

interface Step {
  type: "command" | "task" | "timer" | "done";
  text: string;
}

const STEPS: Step[] = [
  { type: "command", text: '$ claude "I need to send 3 proposals, update my landing page, and schedule this week\'s content"' },
  { type: "task", text: "\u25B8 Writing proposal for Sarah\u2019s e-commerce redesign ($6K)..." },
  { type: "task", text: "\u25B8 Writing proposal for Mark\u2019s SaaS dashboard ($12K)..." },
  { type: "task", text: "\u25B8 Writing proposal for Apex Co. brand refresh ($4.5K)..." },
  { type: "task", text: "\u25B8 Updating hero copy and adding testimonial section..." },
  { type: "task", text: "\u25B8 Drafting 5 LinkedIn posts from this week\u2019s wins..." },
  { type: "timer", text: "" },
  { type: "done", text: "\u2713 Done. 3 proposals sent, landing page updated, 5 posts scheduled." },
];

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AnimatedTerminal() {
  const [lines, setLines] = useState<{ text: string; type: string }[]>([]);
  const [currentChar, setCurrentChar] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "timer" | "idle">("pause");
  const [cycle, setCycle] = useState(0);

  // Start first step after mount
  useEffect(() => {
    const t = setTimeout(() => setPhase("typing"), 600);
    return () => clearTimeout(t);
  }, [cycle]);

  // Typing phase
  useEffect(() => {
    if (phase !== "typing") return;
    if (stepIndex >= STEPS.length) return;

    const step = STEPS[stepIndex];

    // Timer step -- switch to timer phase
    if (step.type === "timer") {
      setPhase("timer");
      return;
    }

    // Done step or regular step -- type it out
    const fullText = step.text;
    if (currentChar.length < fullText.length) {
      const nextChar = fullText[currentChar.length];
      const speed = nextChar === " " ? 15 : 20 + Math.random() * 15;
      const t = setTimeout(() => {
        setCurrentChar(fullText.slice(0, currentChar.length + 1));
      }, speed);
      return () => clearTimeout(t);
    } else {
      // Line done typing -- commit it
      setLines((prev) => [...prev, { text: fullText, type: step.type }]);
      setCurrentChar("");
      setStepIndex((i) => i + 1);
      setPhase("pause");
    }
  }, [phase, stepIndex, currentChar]);

  // Pause between lines
  useEffect(() => {
    if (phase !== "pause") return;
    if (stepIndex >= STEPS.length) {
      // All done -- restart after 4 seconds
      const t = setTimeout(() => {
        setLines([]);
        setCurrentChar("");
        setStepIndex(0);
        setTimerSeconds(0);
        setCycle((c) => c + 1);
      }, 4000);
      return () => clearTimeout(t);
    }
    const delay = stepIndex === 0 ? 300 : 800 + Math.random() * 400;
    const t = setTimeout(() => setPhase("typing"), delay);
    return () => clearTimeout(t);
  }, [phase, stepIndex]);

  // Timer phase -- count from 0:00 to 2:40
  useEffect(() => {
    if (phase !== "timer") return;
    if (timerSeconds >= 160) {
      // Timer done -- commit timer line, move to done step
      setLines((prev) => [...prev, { text: `Completed in ${formatTime(160)}`, type: "timer" }]);
      setStepIndex((i) => i + 1);
      setPhase("pause");
      return;
    }
    const t = setTimeout(() => {
      setTimerSeconds((s) => s + 1);
    }, 10);
    return () => clearTimeout(t);
  }, [phase, timerSeconds]);

  return (
    <div
      key={cycle}
      style={{
        borderRadius: 12,
        border: "1px solid var(--border)",
        background: "var(--bg-elevated)",
        overflow: "hidden",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 16px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
        <span
          style={{
            marginLeft: 12,
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          your-business
        </span>
      </div>

      {/* Terminal body */}
      <div className="terminal-body">
        {/* Committed lines */}
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              color:
                line.type === "command"
                  ? "var(--text-muted)"
                  : line.type === "task"
                  ? "var(--accent)"
                  : line.type === "timer"
                  ? "var(--text-secondary)"
                  : "#34d399",
              marginTop: line.type === "timer" || line.type === "done" ? 12 : 4,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {line.type === "task" && (
              <span style={{ color: "#34d399", fontSize: "0.7rem" }}>done</span>
            )}
            {line.type !== "task" && line.text}
            {line.type === "task" && (
              <span style={{ color: "var(--accent)", opacity: 0.6 }}>
                {line.text}
              </span>
            )}
          </div>
        ))}

        {/* Currently typing line */}
        {currentChar && (
          <div
            style={{
              color:
                STEPS[stepIndex]?.type === "done"
                  ? "#34d399"
                  : STEPS[stepIndex]?.type === "command"
                  ? "var(--text-muted)"
                  : "var(--accent)",
              marginTop: STEPS[stepIndex]?.type === "done" ? 12 : 4,
            }}
          >
            {currentChar}
            <span className="cursor-blink" />
          </div>
        )}

        {/* Timer counting */}
        {phase === "timer" && (
          <div style={{ color: "var(--text-secondary)", marginTop: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <span className="animate-glow-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
            Running... {formatTime(timerSeconds)}
          </div>
        )}

        {/* Final cursor when all done */}
        {stepIndex >= STEPS.length && lines.length > 0 && (
          <div style={{ color: "var(--text-muted)", marginTop: 12, display: "flex", alignItems: "center" }}>
            $<span className="cursor-blink" style={{ marginLeft: 4 }} />
          </div>
        )}
      </div>
    </div>
  );
}
