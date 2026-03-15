import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Clauni — The Claude AI Academy",
  description:
    "Clauni is the academy for solopreneurs and freelancers who want to master Claude AI. Learn the workflows, systems, and techniques that turn one person into an entire team.",
};

export default function About() {
  return (
    <div className="page-container page-body">
      <div style={{ maxWidth: 720 }}>
        {/* Page title */}
        <div className="page-header" style={{ paddingBottom: 32 }}>
          <div className="mono-label" style={{ marginBottom: 16 }}>About</div>
          <h1>Clauni is the Claude AI Academy.</h1>
          <p>
            We teach solopreneurs and freelancers how to use Claude AI to replace
            an entire team.
          </p>
        </div>

        <div className="sep-line" style={{ marginBottom: 56 }} />

        {/* Numbers */}
        <section style={{ marginBottom: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { number: "5", label: "Courses" },
              { number: "15+", label: "Hours of content" },
              { number: "30-day", label: "Money-back guarantee" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="feature-card"
                style={{ textAlign: "center", padding: "28px 16px" }}
              >
                <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--accent)", marginBottom: 4 }}>
                  {stat.number}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What makes Clauni different */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
            What makes Clauni different
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="feature-card">
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                Claude-only focus
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                We don&apos;t cover every AI tool under the sun. Clauni is 100%
                dedicated to Claude — the models, Claude Code, MCP, the API, and
                the full Anthropic ecosystem. Depth beats breadth.
              </p>
            </div>
            <div className="feature-card">
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                Built by a practitioner, not a guru
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                Stefan runs a real freelance business with Claude every day.
                No fake screenshots, no inflated income claims. Just the workflows
                and systems from someone in the trenches.
              </p>
            </div>
            <div className="feature-card">
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                Workflows from a real business
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                Every course, tutorial, and template comes from an actual business
                — proposals that won projects, automations that saved hours, and
                systems that replaced hiring. Nothing hypothetical.
              </p>
            </div>
            <div className="feature-card">
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                No fluff, no theory
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                You won&apos;t find 45-minute lectures about &quot;the future of
                AI&quot; here. Every lesson is practical, actionable, and designed
                to save you time or make you money — ideally both.
              </p>
            </div>
          </div>
        </section>

        {/* What is Clauni */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
            What is Clauni?
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16 }}>
            Clauni (short for Claude University) is an online academy dedicated
            entirely to Claude AI — Anthropic&apos;s AI assistant. We create
            workflows, tutorials, and courses that show you exactly how to use
            Claude to run your business, ship products, and get more done than
            people with 10-person teams.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            This isn&apos;t another generic &quot;intro to AI&quot; platform. Everything here
            is built around Claude specifically — Claude.ai, Claude Code, the
            API, MCP servers, and the full ecosystem. If it involves Claude,
            we teach it.
          </p>
        </section>

        {/* Who it's for */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Who is this for?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="feature-card">
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                Solopreneurs
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                You&apos;re running a business alone and need to move fast. Claude
                becomes your copywriter, developer, strategist, and ops manager
                — all at once.
              </p>
            </div>
            <div className="feature-card">
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                Freelancers
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                You sell your time for money. Claude helps you deliver 5x the
                output in the same hours — better proposals, faster delivery,
                higher margins.
              </p>
            </div>
            <div className="feature-card">
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                Small team founders
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                You have a lean team and can&apos;t afford to hire for every role.
                Claude fills the gaps — from content to code to customer
                support.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Our mission
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16 }}>
            We believe the future belongs to one-person businesses powered by
            AI. The old model — hire more people to grow — is being replaced by
            something better: learn the right tools and do it yourself, faster.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Clauni exists to make Claude the most valuable employee you&apos;ve
            ever had. Not by selling you another subscription — by teaching you
            the skills, workflows, and systems to get extraordinary results
            from the AI that&apos;s already on your screen.
          </p>
        </section>

        {/* Behind Clauni */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Behind Clauni
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16 }}>
            Clauni is built by Stefan Popadic — a freelance web designer and
            developer who runs his entire business with Claude. Every workflow
            taught here is one he uses daily: writing proposals, building
            client websites, creating content, managing operations.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            This isn&apos;t theory. It&apos;s the playbook of someone who
            replaced hiring with AI and never looked back.
          </p>
        </section>

        <div className="sep-line" style={{ marginBottom: 40 }} />

        {/* CTA */}
        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 12 }}>
            Join the waitlist
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 24 }}>
            We&apos;re launching soon. Get early access to courses, workflows,
            and tutorials before anyone else.
          </p>
          <a href="/#waitlist" className="cta-button" style={{ display: "inline-block", lineHeight: "48px", textDecoration: "none" }}>
            Join the waitlist
          </a>
        </section>
      </div>
    </div>
  );
}
