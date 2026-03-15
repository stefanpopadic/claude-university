import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Clauni",
  description: "Clauni terms of service. Rules and guidelines for using our platform and courses.",
};

export default function Terms() {
  return (
    <div className="page-container page-body">
      <div style={{ maxWidth: 720 }}>
        <div className="page-header" style={{ paddingBottom: 32 }}>
          <div className="mono-label" style={{ marginBottom: 16 }}>Legal</div>
          <h1>Terms of Service</h1>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Last updated: March 15, 2026
          </p>
        </div>

        <div className="content-prose">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the Clauni website
            and services operated by Stephn LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
            accessing or using clauni.com, you agree to be bound by these Terms.
          </p>

          <h2>1. Account &amp; Access</h2>
          <p>
            You must provide accurate information when creating an account or purchasing a
            course. You are responsible for maintaining the security of your account
            credentials. One account per person — sharing login credentials is not permitted.
          </p>

          <h2>2. Courses &amp; Content</h2>
          <p>
            When you purchase a course, you receive a personal, non-transferable,
            non-exclusive license to access and view the course content for your own
            educational use. You may not redistribute, resell, or share course materials
            with others. Lifetime access means access for the lifetime of the platform —
            we will provide at least 12 months&apos; notice before discontinuing any course.
          </p>

          <h2>3. Free Content</h2>
          <p>
            Blog posts, free courses, and newsletter content are provided at no cost. We
            reserve the right to modify or remove free content at any time. Free content
            is for personal use — commercial redistribution requires written permission.
          </p>

          <h2>4. Payments &amp; Refunds</h2>
          <p>
            All prices are listed in USD. Payments are processed securely by Stripe. We
            offer a 30-day money-back guarantee on all paid courses and the All Access
            Pass. To request a refund, email us at hello@clauni.com within 30 days of
            purchase.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on Clauni — including courses, blog posts, graphics, code examples,
            and the Clauni brand — is owned by Stephn LLC and protected by copyright law.
            You may use code examples from courses in your own projects. You may not
            reproduce course content for commercial distribution.
          </p>

          <h2>6. Disclaimer</h2>
          <p>
            Clauni is an independent educational platform. We are not affiliated with,
            endorsed by, or sponsored by Anthropic (the maker of Claude AI). Course
            content reflects our experience and opinions — results may vary. We do our
            best to keep content accurate and up to date, but AI tools evolve rapidly
            and some information may become outdated.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Clauni provides educational content &quot;as is.&quot; We are not liable for any
            damages arising from your use of our courses or content, including but not
            limited to lost revenue, data loss, or business interruption. Our total
            liability is limited to the amount you paid for the specific course or service
            in question.
          </p>

          <h2>8. Acceptable Use</h2>
          <p>
            You agree not to: use our platform for any unlawful purpose, attempt to gain
            unauthorized access to our systems, scrape or bulk-download course content,
            or interfere with other users&apos; access to the platform.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of significant
            changes by email or by posting a notice on our website. Continued use of the
            platform after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Wyoming, United States.
            Any disputes will be resolved in the courts of Wyoming.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Contact us at{" "}
            <a href="mailto:hello@clauni.com" style={{ color: "var(--accent)" }}>
              hello@clauni.com
            </a>.
          </p>
          <p>
            Stephn LLC<br />
            701 Tillery St Unit 12 3006<br />
            Austin, TX 78702
          </p>
        </div>
      </div>
    </div>
  );
}
