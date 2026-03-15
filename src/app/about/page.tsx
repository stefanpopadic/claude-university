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
        {/* Hero */}
        <div style={{ paddingTop: 64, paddingBottom: 24 }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Clauni is the Claude AI Academy.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 16 }}>
            We teach solopreneurs and freelancers how to use Claude AI to replace
            an entire team.
          </p>
        </div>

        {/* What is Clauni — editorial flowing text */}
        <div style={{ marginTop: 40, marginBottom: 56 }}>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.0625rem", marginBottom: 16 }}>
            <span style={{ color: "var(--accent)", fontWeight: 600 }}>Clauni (short for Claude University)</span>{" "}
            is an online academy dedicated entirely to Claude AI — Anthropic&apos;s
            AI assistant. We create workflows, tutorials, and courses that show you
            exactly how to use Claude to run your business, ship products, and get
            more done than people with 10-person teams.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.0625rem" }}>
            This isn&apos;t another generic &quot;intro to AI&quot; platform. Everything here
            is built around Claude specifically — Claude.ai, Claude Code, the
            API, MCP servers, and the full ecosystem. If it involves Claude,
            we teach it.
          </p>
        </div>

        {/* Numbers — inline flowing text */}
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: "1.125rem", lineHeight: 2, color: "var(--text-secondary)" }}>
            <span style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)" }}>5</span>{" "}
            courses.{" "}
            <span style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)" }}>15+</span>{" "}
            hours of content.{" "}
            <span style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)" }}>30-day</span>{" "}
            money-back guarantee.
          </p>
        </div>

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

        {/* Who is this for — definition list layout */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Who is this for?
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              {
                name: "Solopreneurs",
                desc: "You\u2019re running a business alone and need to move fast. Claude becomes your copywriter, developer, strategist, and ops manager \u2014 all at once.",
              },
              {
                name: "Freelancers",
                desc: "You sell your time for money. Claude helps you deliver 5x the output in the same hours \u2014 better proposals, faster delivery, higher margins.",
              },
              {
                name: "Small team founders",
                desc: "You have a lean team and can\u2019t afford to hire for every role. Claude fills the gaps \u2014 from content to code to customer support.",
              },
            ].map((persona, i, arr) => (
              <div
                key={persona.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 24,
                  padding: "20px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "baseline",
                }}
              >
                <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9375rem" }}>
                  {persona.name}
                </span>
                <span style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.9375rem" }}>
                  {persona.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Mission — pull-quote style */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Our mission
          </h2>
          <div
            style={{
              borderLeft: "3px solid var(--accent)",
              paddingLeft: 24,
            }}
          >
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
          </div>
        </section>

        {/* Behind Clauni — simple prose */}
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

        {/* CTA — clean, left-aligned */}
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
