import { useEffect, useState } from "react";

export default function Header({ name, navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect current section in view
      const sections = ["hero", ...navLinks.map((l) => l.id)];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container header-inner">
        <button
          type="button"
          className="logo-brand"
          onClick={() => scrollTo("hero")}
          aria-label="Back to top"
        >
          
<div className="logo-avatar">
  <svg
    viewBox="0 0 64 64"
    width="34"
    height="34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 5 L36 25 L56 32 L36 36 L32 58 L27 36 L7 32 L27 25 Z"
      fill="#60A5FA"
    />
    <path
      d="M43 7 L45 15 L53 17 L45 19 L43 27 L41 19 L33 17 L41 15 Z"
      fill="#C4B5FD"
    />
  </svg>
</div>

          <div className="logo-text">
            <span className="logo-name">{name}</span>
            <span className="logo-sub">Building ideas into reality.</span>
          </div>
        </button>

        <nav aria-label="Main Navigation">
          <ul className="nav-desktop">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={activeSection === link.id ? "active" : ""}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <button
            type="button"
            className="btn-header"
            onClick={() => scrollTo("contact")}
          >
            Get in touch
          </button>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}
        <button
          type="button"
          style={{ color: "var(--accent-primary)", fontWeight: 700 }}
          onClick={() => scrollTo("contact")}
        >
          Contact Me →
        </button>
      </div>
    </header>
  );
}
