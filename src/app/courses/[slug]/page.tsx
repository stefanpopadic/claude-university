import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import StatusBadge from "@/components/StatusBadge";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return {};
  return {
    title: `${course.title} — Clauni`,
    description: course.description,
  };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  const badgeStatus = course.price === 0 ? "free" : course.status;

  return (
    <div className="page-container page-body">
      {/* Hero */}
      <div className="page-header">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <StatusBadge status={badgeStatus} />
          <span className="mono-label">{course.level}</span>
        </div>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 20 }}>
          <span style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)" }}>
            {course.price === 0 ? "Free" : `$${course.price}`}
          </span>
          <span style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8125rem" }}>
            {course.lessonCount} lessons &middot; {course.duration}
          </span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, maxWidth: 900 }}>
        {/* What you'll learn */}
        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
            What you&apos;ll learn
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {course.outcomes.map((outcome, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", fontWeight: 600, flexShrink: 0 }}>{"\u2713"}</span>
                <span style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{outcome}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum */}
        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Curriculum
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {course.lessons.map((lesson, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "14px 20px",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--text-muted)", minWidth: 24 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "0.9375rem" }}>{lesson.title}</span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", color: "var(--text-muted)", flexShrink: 0 }}>
                  {lesson.duration}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Instructor */}
        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Your instructor
          </h2>
          <div className="feature-card">
            <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
              Stefan Popadic
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
              Freelance web designer and developer who runs his entire business with Claude.
              Every workflow taught here is one he uses daily — proposals, client delivery,
              content, operations. Not theory. Real systems from a real business.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="sep-line" style={{ marginBottom: 32 }} />
          {course.status === "coming-soon" ? (
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
                Join the waitlist
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 20 }}>
                This course is coming soon. Drop your email and we&apos;ll notify you the moment it launches.
              </p>
              <EmailCaptureForm source={`course-${course.slug}`} buttonText="Notify me" />
            </div>
          ) : (
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
                Start learning — free
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 20 }}>
                Get started with Claude in 30 minutes. No credit card required.
              </p>
              <EmailCaptureForm source={`course-${course.slug}`} buttonText="Get free access" />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
