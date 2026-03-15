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
      <div className="page-header">
        <div className="mono-label" style={{ marginBottom: 16 }}>Free Resources</div>
        <h1>Start learning for free</h1>
        <p>
          No credit card. No catch. Learn Claude AI fundamentals with our
          free courses and resources.
        </p>
      </div>

      {/* Free courses */}
      <section>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
          Free courses
        </h2>
        <div className="features-grid" style={{ gap: 16 }}>
          {freeCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <div className="sep-line" style={{ margin: "48px 0 32px" }} />

      {/* Free newsletter */}
      <section style={{ maxWidth: 600 }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 8 }}>
          Free weekly newsletter
        </h2>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 20 }}>
          Get Claude tips, workflows, and strategies delivered to your inbox
          every week. No spam. Unsubscribe anytime.
        </p>
        <EmailCaptureForm source="free-page" buttonText="Subscribe free" />
      </section>

      <div className="sep-line" style={{ margin: "48px 0 32px" }} />

      {/* Free resources list */}
      <section style={{ maxWidth: 600 }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
          Free resources
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="feature-card">
            <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
              Blog
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 12 }}>
              In-depth articles on Claude AI — tutorials, comparisons, and
              practical guides. All free, no login required.
            </p>
            <a href="/blog" style={{ color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}>
              Read the blog &rarr;
            </a>
          </div>
          <div className="feature-card">
            <h3 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.0625rem", marginBottom: 6 }}>
              FAQ
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 12 }}>
              Answers to the most common questions about Claude AI, our
              courses, pricing, and getting started.
            </p>
            <a href="/faq" style={{ color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}>
              Browse FAQ &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
