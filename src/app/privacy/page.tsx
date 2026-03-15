import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Clauni",
  description: "Clauni privacy policy. How we collect, use, and protect your data.",
};

export default function Privacy() {
  return (
    <div className="page-container page-body">
      <div style={{ maxWidth: 720 }}>
        <div className="page-header" style={{ paddingBottom: 32 }}>
          <div className="mono-label" style={{ marginBottom: 16 }}>Legal</div>
          <h1>Privacy Policy</h1>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Last updated: March 15, 2026
          </p>
        </div>

        <div className="content-prose">
          <p>
            Clauni (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is operated by Stephn LLC, a Wyoming limited
            liability company. This privacy policy explains how we collect, use, and protect
            your information when you use our website and services at clauni.com.
          </p>

          <h2>Information We Collect</h2>
          <p>
            <strong>Information you provide:</strong> When you sign up for our newsletter, join a
            waitlist, or purchase a course, we collect your email address and, for purchases,
            your name and payment information.
          </p>
          <p>
            <strong>Information collected automatically:</strong> We collect standard web analytics
            data including pages visited, referral sources, browser type, and device information.
            We do not use cookies for tracking. We use privacy-friendly analytics.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <p>
            Deliver courses and educational content you&apos;ve purchased or signed up for. Send
            our newsletter if you&apos;ve subscribed. Notify you about new courses or resources
            you&apos;ve expressed interest in. Improve our website and course content. Process
            payments and prevent fraud.
          </p>

          <h2>Data Storage</h2>
          <p>
            Your data is stored securely using Supabase (hosted on AWS infrastructure).
            Payment processing is handled by Stripe — we never store your full credit
            card details on our servers.
          </p>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <p>
            <strong>Supabase</strong> — database and authentication.{" "}
            <strong>Stripe</strong> — payment processing.{" "}
            <strong>Vercel</strong> — website hosting.
            These services have their own privacy policies governing your data.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <p>
            Access the personal data we hold about you. Request correction or deletion of your
            data. Unsubscribe from our newsletter at any time (every email has an unsubscribe
            link). Request a copy of your data in a portable format.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your data for as long as your account is active or as needed to provide
            you with our services. If you request deletion, we will remove your data within
            30 days, except where we are required by law to retain it.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Clauni is not intended for children under 16. We do not knowingly collect personal
            information from children under 16. If you believe a child has provided us with
            personal data, please contact us.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. We will notify you of significant
            changes by posting a notice on our website or sending you an email.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related questions or requests, contact us at{" "}
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
