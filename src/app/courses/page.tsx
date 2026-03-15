import type { Metadata } from "next";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export const metadata: Metadata = {
  title: "Courses — Clauni | Learn Claude AI",
  description:
    "Browse Claude AI courses for solopreneurs and freelancers. From free quickstart guides to advanced automation — learn to use Claude like a pro.",
};

export default function Courses() {
  const freeCourse = courses.find((c) => c.price === 0);
  const paidCourses = courses.filter((c) => c.price > 0);

  return (
    <div className="page-container page-body">
      {/* Left-aligned intro */}
      <div style={{ maxWidth: 640, paddingTop: 48, marginBottom: 40 }}>
        <div className="mono-label" style={{ marginBottom: 12 }}>Courses</div>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
          Master Claude AI
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
          Hands-on courses that teach you real workflows — not theory.
          Start free, go deep when you&apos;re ready. Every course includes
          hands-on exercises, real-world workflows, and lifetime access.
        </p>
      </div>

      {/* Free course — highlighted full-width treatment */}
      {freeCourse && (
        <a
          href={`/courses/${freeCourse.slug}`}
          style={{
            display: "block",
            borderLeft: "3px solid var(--accent)",
            background: "rgba(255, 255, 255, 0.02)",
            padding: "24px 28px",
            marginBottom: 32,
            textDecoration: "none",
            color: "inherit",
            borderRadius: "0 8px 8px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span className="mono-label" style={{ color: "var(--accent)" }}>Free</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", color: "var(--text-muted)" }}>
              {freeCourse.lessonCount} lessons &middot; {freeCourse.duration}
            </span>
          </div>
          <h2 style={{ fontSize: "1.375rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 6, lineHeight: 1.25 }}>
            {freeCourse.title}
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.6, maxWidth: 560 }}>
            {freeCourse.description}
          </p>
          <span style={{ display: "inline-block", marginTop: 12, color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}>
            Start free →
          </span>
        </a>
      )}

      {/* Remaining courses grid */}
      <div className="features-grid" style={{ gap: 16 }}>
        {paidCourses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>

      {/* Not sure where to start — subtle inline note */}
      <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: 1.6, marginTop: 24 }}>
        Not sure where to start? The{" "}
        <a href="/courses/claude-quickstart" style={{ color: "var(--accent)", textDecoration: "none" }}>
          Claude Quickstart
        </a>{" "}
        is free, takes 30 minutes, and gives you a solid foundation.
      </p>
    </div>
  );
}
