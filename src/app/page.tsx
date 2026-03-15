import AnimatedTerminal from "./terminal";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="page-container main-content">
      {/* ===== Hero ===== */}
      <section>
        <div className="hero-grid">
          <div>
            <div className="animate-fade-in-up-1 mono-label" style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span className="animate-glow-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
              <span>Waitlist open</span>
            </div>

            <h1 className="animate-fade-in-up-2 hero-headline">
              Learn Claude.
              <br />
              <span style={{ color: "var(--accent)" }}>
                The only employee you&apos;ll ever need.
              </span>
            </h1>

            <p className="animate-fade-in-up-3 hero-subheadline">
              Workflows, tutorials, and courses that teach you how to use
              Claude AI to do the work of an entire team.
            </p>

            <div id="waitlist" className="animate-fade-in-up-4">
              <EmailCaptureForm source="homepage" />
            </div>
          </div>

          <div className="animate-fade-in-up-5">
            <AnimatedTerminal />
          </div>
        </div>
      </section>

      {/* ===== Social Proof ===== */}
      <section className="accent-band" style={{ marginTop: 64 }}>
        <p className="mono-label" style={{ textAlign: "center", letterSpacing: "0.12em" }}>
          5 courses{" "}
          <span style={{ color: "var(--text-muted)", margin: "0 12px" }}>/</span>
          {" "}1,000+ students{" "}
          <span style={{ color: "var(--text-muted)", margin: "0 12px" }}>/</span>
          {" "}30-day guarantee
        </p>
      </section>

      {/* ===== What You'll Learn ===== */}
      <section style={{ paddingTop: 80, paddingBottom: 64 }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 48, maxWidth: 560 }}>
          Everything you need to run your business with Claude
        </h2>

        <div className="features-grid-2col learn-grid">
          {[
            { num: "01", title: "AI Workflows", desc: "Build repeatable systems that compress 50-hour weeks into focused sprints. Real workflows, not theory." },
            { num: "02", title: "Claude Code", desc: "Ship apps, websites, and tools from your terminal. No CS degree required -- just a goal and a prompt." },
            { num: "03", title: "Prompt Engineering", desc: "Write prompts that get the right output on the first try. Stop guessing, start directing." },
            { num: "04", title: "Automations with MCP", desc: "Connect Claude to Notion, Gmail, Slack, Stripe, and every tool you use. Build your AI-first stack." },
            { num: "05", title: "Business Operations", desc: "Proposals, invoices, client comms, project management -- automate the work you hate doing." },
            { num: "06", title: "Content Creation", desc: "Create LinkedIn posts, email newsletters, and thought leadership content at 10x speed." },
          ].map((item) => (
            <div key={item.num} className="learn-item">
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 6 }}>
                <span className="mono-label" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>
                  {item.num}
                </span>
                <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem" }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.6, paddingLeft: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Featured Courses ===== */}
      <section style={{ paddingTop: 16, paddingBottom: 64 }}>
        <div className="section-eyebrow">
          <div>
            <p className="mono-label" style={{ marginBottom: 8 }}>Featured courses</p>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Start learning today
            </h2>
          </div>
          <a
            href="/courses"
            className="mono-label"
            style={{ textDecoration: "none", fontSize: "0.8125rem", whiteSpace: "nowrap" }}
          >
            View all &rarr;
          </a>
        </div>

        <div className="features-grid">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section style={{ paddingTop: 16, paddingBottom: 64 }}>
        <p className="mono-label" style={{ marginBottom: 12 }}>How it works</p>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 40, maxWidth: 480 }}>
          Three steps to your AI-powered business
        </h2>

        <div className="steps-grid">
          {[
            { num: "01", title: "Pick a course", desc: "Choose the course that matches where you are right now. Start free, go deep when you're ready." },
            { num: "02", title: "Follow the workflows", desc: "Every lesson is a hands-on workflow you can apply immediately. No fluff, no filler -- just results." },
            { num: "03", title: "Deploy to your business", desc: "Take what you learned and ship it. Proposals, automations, apps -- all live in your business by end of day." },
          ].map((step) => (
            <div key={step.num} className="step-item">
              <div style={{ fontSize: "3rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1, marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
                {step.num}
              </div>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 8 }}>
                {step.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Who Is This For ===== */}
      <section style={{ paddingTop: 16, paddingBottom: 64 }}>
        <p className="mono-label" style={{ marginBottom: 12 }}>Who is this for</p>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 40, maxWidth: 480 }}>
          Built for people who build alone
        </h2>

        <div>
          {[
            { title: "Solopreneurs", desc: "You wear every hat in your business. Claude becomes your team -- marketing, ops, dev, and strategy, all from one tool." },
            { title: "Freelancers", desc: "You sell your time for money. Learn how to 10x your output so you can raise your rates and take on more clients without burning out." },
            { title: "Small Team Founders", desc: "You have a small team but big ambitions. Use Claude to eliminate busywork and focus your team on what actually moves the needle." },
          ].map((persona) => (
            <div key={persona.title} className="def-row">
              <h3 style={{ color: "var(--accent)", fontWeight: 600, fontSize: "1.125rem", margin: 0 }}>
                {persona.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>
                {persona.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Instructor ===== */}
      <section style={{ paddingTop: 16, paddingBottom: 64 }}>
        <p className="mono-label" style={{ marginBottom: 24 }}>Your instructor</p>
        <div style={{ maxWidth: 640 }}>
          <div className="pull-quote" style={{ marginBottom: 24 }}>
            I run my entire business with Claude. Not theory -- real workflows from a real business.
          </div>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 16 }}>
            Stefan Popadic
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
            Freelance web designer and Webflow developer. Expert-Vetted on Upwork. Built production apps, automated operations, and shipped client projects --
            all with Claude as the only &quot;employee.&quot; Clauni teaches exactly what works, nothing that doesn&apos;t.
          </p>
        </div>
      </section>

      {/* ===== Newsletter CTA ===== */}
      <section className="accent-band" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="split-section">
          <div>
            <p className="mono-label" style={{ marginBottom: 12 }}>The Clauni Playbook</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 12 }}>
              Weekly AI workflows for your business
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
              One email per week. Real Claude workflows, prompt templates, and automation ideas you can use immediately. Free forever.
            </p>
          </div>
          <div>
            <EmailCaptureForm
              variant="stacked"
              source="homepage-newsletter"
              buttonText="Subscribe free"
              placeholder="you@email.com"
            />
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 16 }}>
            Ready to make Claude your{" "}
            <span style={{ color: "var(--accent)" }}>unfair advantage</span>?
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginBottom: 32 }}>
            Join the waitlist and be the first to know when courses launch.
          </p>
          <div style={{ maxWidth: 400, margin: "0 auto" }}>
            <EmailCaptureForm source="homepage-final-cta" />
          </div>
        </div>
      </section>
    </div>
  );
}
