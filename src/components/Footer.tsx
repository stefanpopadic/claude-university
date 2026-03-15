import Logo from "@/app/logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Logo height={24} />
            <p className="footer-tagline">
              The Claude AI Academy. Learn to use Claude like it&apos;s the only employee you&apos;ll ever need.
            </p>
          </div>

          {/* Learn */}
          <div className="footer-section">
            <h4 className="footer-heading">Learn</h4>
            <a href="/courses" className="footer-link">Courses</a>
            <a href="/free" className="footer-link">Free Resources</a>
            <a href="/blog" className="footer-link">Blog</a>
            <a href="/faq" className="footer-link">FAQ</a>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <a href="/about" className="footer-link">About</a>
            <a href="/pricing" className="footer-link">Pricing</a>
            <a href="/contact" className="footer-link">Contact</a>
            <a href="/newsletter" className="footer-link">Newsletter</a>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <a href="/terms" className="footer-link">Terms of Service</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Clauni</span>
          <span className="mono-label" style={{ opacity: 0.4, fontSize: "0.6rem" }}>
            Built with Claude Code
          </span>
        </div>
      </div>
    </footer>
  );
}
