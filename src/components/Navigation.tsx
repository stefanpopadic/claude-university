import Logo from "@/app/logo";
import MobileNavToggle from "./MobileNavToggle";

const NAV_LINKS = [
  { href: "/courses", label: "Courses" },
  { href: "/blog", label: "Blog" },
  { href: "/free", label: "Free" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  return (
    <nav className="nav-container">
      <div className="page-container nav-inner">
        <a href="/" className="nav-logo">
          <Logo height={32} />
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
        <a href="/#waitlist" className="cta-button nav-cta">
          Join waitlist
        </a>
        <MobileNavToggle />
      </div>
    </nav>
  );
}
