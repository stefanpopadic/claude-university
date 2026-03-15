import AnimatedTerminal from "./terminal";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export default function Home() {
  return (
    <div className="page-container main-content">
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
          <div id="waitlist" className="animate-fade-in-up-4">
            <EmailCaptureForm source="homepage" />
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
  );
}
