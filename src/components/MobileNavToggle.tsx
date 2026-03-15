"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "/courses", label: "Courses" },
  { href: "/blog", label: "Blog" },
  { href: "/free", label: "Free" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function MobileNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-mobile">
      <button
        className="nav-mobile-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className="nav-hamburger" data-open={open}>
          <span />
          <span />
          <span />
        </span>
      </button>
      {open && (
        <div className="nav-mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="/#waitlist" className="cta-button nav-mobile-cta" onClick={() => setOpen(false)}>
            Join waitlist
          </a>
        </div>
      )}
    </div>
  );
}
