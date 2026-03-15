import type { Metadata } from "next";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export const metadata: Metadata = {
  title: "Free Resources — Clauni | Learn Claude AI for Free",
  description:
    "Start learning Claude AI for free. Free courses, tutorials, and resources for solopreneurs and freelancers.",
};

export default function Free() {
  const freeCourses = courses.filter((c) => c.price === 0);

  return (
    <div className="page-container page-body">
      <div style={{ marginBottom: 48 }}>
        <div className="mono-label" style={{ marginBottom: 12 }}>Free Resources</div>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 12 }}>
          Start learning for free
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem", lineHeight: 1.6, maxWidth: 520 }}>
          No credit card. No catch. Learn Claude AI fundamentals with our
          free courses and resources.
        </p>
      </div>

      {/* Featured free course */}
      <section style={{ marginBottom: 48 }}>
        <div className="mono-label" style={{ marginBottom: 16 }}>Free Course</div>
        {freeCourses.map((course) => (
          <div
            key={course.slug}
            style={{
              borderLeft: "3px solid var(--accent)",
              paddingLeft: 24,
              marginBottom: 24,
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 8 }}>
              <a href={`/courses/${course.slug}`} style={{ color: "var(--text-primary)", textDecoration: "none" }}>
                {course.title}
              </a>
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: 12, maxWidth: 560 }}>
              {course.description}
            </p>
            <a
              href={`/courses/${course.slug}`}
              style={{ color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}
            >
              Start learning &rarr;
            </a>
          </div>
        ))}
      </section>

      <div className="sep-line" style={{ margin: "0 0 32px" }} />

      {/* Blog and FAQ links */}
      <section style={{ marginBottom: 48, maxWidth: 600 }}>
        <div className="mono-label" style={{ marginBottom: 16 }}>More Resources</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <a href="/blog" style={{ color: "var(--text-primary)", fontSize: "1.0625rem", fontWeight: 600, textDecoration: "none" }}>
              Blog &rarr;
            </a>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginTop: 4 }}>
              In-depth articles on Claude AI — tutorials, comparisons, and practical guides.
            </p>
          </div>
          <div>
            <a href="/faq" style={{ color: "var(--text-primary)", fontSize: "1.0625rem", fontWeight: 600, textDecoration: "none" }}>
              FAQ &rarr;
            </a>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginTop: 4 }}>
              Answers to the most common questions about Claude AI, courses, and getting started.
            </p>
          </div>
        </div>
      </section>

      <div className="sep-line" style={{ margin: "0 0 32px" }} />

      {/* Newsletter */}
      <section style={{ maxWidth: 600 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 8 }}>
          Free weekly newsletter
        </h2>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 20, fontSize: "0.875rem" }}>
          Get Claude tips, workflows, and strategies delivered to your inbox
          every week. No spam. Unsubscribe anytime.
        </p>
        <EmailCaptureForm source="free-page" buttonText="Subscribe free" />
      </section>
    </div>
  );
}
