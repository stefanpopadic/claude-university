export default function NotFound() {
  return (
    <div className="page-container page-body" style={{ textAlign: "center", paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "4rem", fontWeight: 700, color: "var(--accent)", marginBottom: 16 }}>
        404
      </div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: 8 }}>
        Page not found
      </h1>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: 32, maxWidth: 400, margin: "0 auto 32px" }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a
        href="/"
        className="cta-button"
        style={{ display: "inline-block", lineHeight: "48px", textDecoration: "none" }}
      >
        Back to home
      </a>
    </div>
  );
}
