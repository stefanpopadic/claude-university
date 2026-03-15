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
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="sep-line" style={{ marginBottom: 48 }} />
        <p className="mono-label" style={{ textAlign: "center", marginBottom: 40 }}>
          Trusted by solopreneurs and freelancers worldwide
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {[
            { value: "5", label: "Courses" },
            { value: "1,000+", label: "Students" },
            { value: "30-day", label: "Guarantee" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center", minWidth: 120 }}>
              <div style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--accent)" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: 4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="sep-line" style={{ marginTop: 48 }} />
      </section>

      {/* ===== What You'll Learn ===== */}
      <section style={{ paddingTop: 16, paddingBottom: 64 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="mono-label" style={{ marginBottom: 16 }}>What you&apos;ll learn</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Everything you need to run your business with Claude
          </h2>
        </div>

        <div className="features-grid-2col">
          {[
            { num: "01", title: "AI Workflows", desc: "Build repeatable systems that compress 50-hour weeks into focused sprints. Real workflows, not theory." },
            { num: "02", title: "Claude Code", desc: "Ship apps, websites, and tools from your terminal. No CS degree required -- just a goal and a prompt." },
            { num: "03", title: "Prompt Engineering", desc: "Write prompts that get the right output on the first try. Stop guessing, start directing." },
            { num: "04", title: "Automations with MCP", desc: "Connect Claude to Notion, Gmail, Slack, Stripe, and every tool you use. Build your AI-first stack." },
            { num: "05", title: "Business Operations", desc: "Proposals, invoices, client comms, project management -- automate the work you hate doing." },
            { num: "06", title: "Content Creation", desc: "Create LinkedIn posts, email newsletters, and thought leadership content at 10x speed." },
          ].map((item) => (
            <div key={item.num} className="feature-card">
              <div className="mono-label" style={{ marginBottom: 8 }}>{item.num}</div>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
                {item.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Featured Courses ===== */}
      <section style={{ paddingTop: 16, paddingBottom: 64 }}>
        <div className="sep-line" style={{ marginBottom: 48 }} />
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="mono-label" style={{ marginBottom: 16 }}>Featured courses</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Start learning today
          </h2>
        </div>

        <div className="features-grid">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a
            href="/courses"
            className="cta-button"
            style={{ display: "inline-block", textDecoration: "none", lineHeight: "48px", background: "transparent", color: "var(--accent)", border: "1px solid var(--border-accent)" }}
          >
            View all courses
          </a>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section style={{ paddingTop: 16, paddingBottom: 64 }}>
        <div className="sep-line" style={{ marginBottom: 48 }} />
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="mono-label" style={{ marginBottom: 16 }}>How it works</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Three steps to your AI-powered business
          </h2>
        </div>

        <div className="features-grid">
          {[
            { num: "01", title: "Pick a course", desc: "Choose the course that matches where you are right now. Start free, go deep when you're ready." },
            { num: "02", title: "Follow the workflows", desc: "Every lesson is a hands-on workflow you can apply immediately. No fluff, no filler -- just results." },
            { num: "03", title: "Deploy to your business", desc: "Take what you learned and ship it. Proposals, automations, apps -- all live in your business by end of day." },
          ].map((step) => (
            <div key={step.num} className="feature-card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)", marginBottom: 12 }}>
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
        <div className="sep-line" style={{ marginBottom: 48 }} />
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="mono-label" style={{ marginBottom: 16 }}>Who is this for</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Built for people who build alone
          </h2>
        </div>

        <div className="features-grid">
          {[
            { title: "Solopreneurs", desc: "You wear every hat in your business. Claude becomes your team -- marketing, ops, dev, and strategy, all from one tool." },
            { title: "Freelancers", desc: "You sell your time for money. Learn how to 10x your output so you can raise your rates and take on more clients without burning out." },
            { title: "Small Team Founders", desc: "You have a small team but big ambitions. Use Claude to eliminate busywork and focus your team on what actually moves the needle." },
          ].map((persona) => (
            <div key={persona.title} className="feature-card">
              <h3 style={{ color: "var(--accent)", fontWeight: 600, fontSize: "1.125rem", marginBottom: 8 }}>
                {persona.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                {persona.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Instructor ===== */}
      <section style={{ paddingTop: 16, paddingBottom: 64 }}>
        <div className="sep-line" style={{ marginBottom: 48 }} />
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <p className="mono-label" style={{ marginBottom: 16 }}>Your instructor</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 20 }}>
            Stefan Popadic
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 16 }}>
            Freelance web designer and Webflow developer who runs his entire business with Claude.
            Not theory -- real workflows from a real business.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>
            Expert-Vetted on Upwork. Built production apps, automated operations, and shipped client projects --
            all with Claude as the only &quot;employee.&quot; Clauni teaches exactly what works, nothing that doesn&apos;t.
          </p>
        </div>
      </section>

      {/* ===== Newsletter CTA ===== */}
      <section style={{ paddingTop: 16, paddingBottom: 64 }}>
        <div className="sep-line" style={{ marginBottom: 48 }} />
        <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
          <p className="mono-label" style={{ marginBottom: 16 }}>The Clauni Playbook</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 12 }}>
            Weekly AI workflows for your business
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: 28 }}>
            One email per week. Real Claude workflows, prompt templates, and automation ideas you can use immediately. Free forever.
          </p>
          <EmailCaptureForm
            variant="stacked"
            source="homepage-newsletter"
            buttonText="Subscribe free"
            placeholder="you@email.com"
          />
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section style={{ paddingTop: 16, paddingBottom: 80 }}>
        <div className="sep-line" style={{ marginBottom: 48 }} />
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
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
