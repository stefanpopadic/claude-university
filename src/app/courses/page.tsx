import type { Metadata } from "next";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export const metadata: Metadata = {
  title: "Courses — Clauni | Learn Claude AI",
  description:
    "Browse Claude AI courses for solopreneurs and freelancers. From free quickstart guides to advanced automation — learn to use Claude like a pro.",
};

export default function Courses() {
  return (
    <div className="page-container page-body">
      <div className="page-header">
        <div className="mono-label" style={{ marginBottom: 16 }}>Courses</div>
        <h1>Master Claude AI</h1>
        <p>
          Hands-on courses that teach you real workflows — not theory.
          Start free, go deep when you&apos;re ready.
        </p>
      </div>

      <div className="features-grid" style={{ gap: 16 }}>
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>

      <div className="sep-line" style={{ margin: "48px 0 32px" }} />

      <div style={{ maxWidth: 540 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          Not sure where to start?
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 20 }}>
          The Claude Quickstart is free, takes 30 minutes, and gives you a solid
          foundation. Start there.
        </p>
        <a href="/courses/claude-quickstart" className="cta-button" style={{ display: "inline-block", lineHeight: "48px", textDecoration: "none" }}>
          Start free course
        </a>
      </div>
    </div>
  );
}
