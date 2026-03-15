import type { Metadata } from "next";
import Logo from "../logo";

export const metadata: Metadata = {
  title: "About Clauni — The Claude AI Academy",
  description:
    "Clauni is the academy for solopreneurs and freelancers who want to master Claude AI. Learn the workflows, systems, and techniques that turn one person into an entire team.",
};

export default function About() {
  return (
    <div className="relative min-h-screen overflow-x-hidden dot-grid flex flex-col">
      <div className="noise-overlay" />

      {/* Glow orbs */}
      <div className="glow-orb" style={{ top: "-250px", right: "-200px" }} />
      <div className="glow-orb-secondary" style={{ bottom: "0", left: "-200px" }} />

      {/* ===== NAV ===== */}
      <nav
        className="relative z-10 page-container"
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <a href="/" style={{ color: "var(--text-primary)" }}>
          <Logo height={38} />
        </a>
        <a href="/" className="nav-link">
          Home
        </a>
      </nav>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 page-container" style={{ flex: 1, paddingTop: 40, paddingBottom: 80 }}>
        <div style={{ maxWidth: 720 }}>
          {/* Page title */}
          <div className="mono-label" style={{ marginBottom: 16 }}>
            About
          </div>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Clauni is the Claude AI Academy.
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: 56,
            }}
          >
            We teach solopreneurs and freelancers how to use Claude AI to replace
            an entire team.
          </p>

          <div className="sep-line" style={{ marginBottom: 56 }} />

          {/* What is Clauni */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
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
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Who is this for?
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="feature-card">
                <h3
                  style={{
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    fontSize: "1.0625rem",
                    marginBottom: 6,
                  }}
                >
                  Solopreneurs
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  You&apos;re running a business alone and need to move fast. Claude
                  becomes your copywriter, developer, strategist, and ops manager
                  — all at once.
                </p>
              </div>
              <div className="feature-card">
                <h3
                  style={{
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    fontSize: "1.0625rem",
                    marginBottom: 6,
                  }}
                >
                  Freelancers
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  You sell your time for money. Claude helps you deliver 5x the
                  output in the same hours — better proposals, faster delivery,
                  higher margins.
                </p>
              </div>
              <div className="feature-card">
                <h3
                  style={{
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    fontSize: "1.0625rem",
                    marginBottom: 6,
                  }}
                >
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
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
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

          {/* What you'll learn */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              What you&apos;ll learn
            </h2>
            <div className="features-grid" style={{ gap: 16 }}>
              {[
                {
                  label: "Workflows",
                  title: "Production-ready AI systems",
                  desc: "Step-by-step workflows for proposals, content, client delivery, automations, and more — all built around Claude.",
                },
                {
                  label: "Claude Code",
                  title: "Build real software",
                  desc: "Ship apps, websites, and tools using Claude Code. From idea to deployed product, without a dev team.",
                },
                {
                  label: "Automation",
                  title: "Connect everything",
                  desc: "MCP servers, Make.com, Zapier — learn to wire Claude into your entire business stack.",
                },
                {
                  label: "Strategy",
                  title: "Think in AI-first",
                  desc: "Restructure how you work so Claude handles 80% of the execution. You focus on decisions and growth.",
                },
              ].map((item) => (
                <div key={item.label} className="feature-card">
                  <div className="mono-label" style={{ marginBottom: 8 }}>
                    {item.label}
                  </div>
                  <h3
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: 600,
                      fontSize: "1.0625rem",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.8125rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Behind Clauni */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
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
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              Join the waitlist
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              We&apos;re launching soon. Get early access to courses, workflows,
              and tutorials before anyone else.
            </p>
            <a href="/" className="cta-button" style={{ display: "inline-block", lineHeight: "48px", textDecoration: "none" }}>
              Back to waitlist
            </a>
          </section>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer
        className="relative z-10 page-container"
        style={{
          paddingTop: 16,
          paddingBottom: 16,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
