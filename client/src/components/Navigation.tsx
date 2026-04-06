/*
 * Navigation — 育毛の学校 LP
 * Design: Dark Luxury — Transparent → Solid on scroll
 * Fixed top nav with gold accent logo and smooth scroll links
 */

import { useEffect, useState } from "react";

const navLinks = [
  { label: "育毛の学校とは", href: "#about" },
  { label: "カリキュラム", href: "#curriculum" },
  { label: "受講者の声", href: "#testimonials" },
  { label: "よくある質問", href: "#faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.10_0.005_60/0.97)] backdrop-blur-md border-b border-[oklch(0.25_0.008_60)]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col leading-none group"
          >
            <span
              className="text-xl md:text-2xl font-light tracking-widest text-gold-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              育毛の学校
            </span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-0.5">
              Hair Growth Academy
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm tracking-wider text-muted-foreground hover:text-gold transition-colors duration-300 relative group"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-4 px-5 py-2 border border-gold text-gold text-sm tracking-wider hover:bg-gold hover:text-[oklch(0.10_0.005_60)] transition-all duration-300"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              お問い合わせ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[oklch(0.10_0.005_60/0.98)] backdrop-blur-md border-t border-[oklch(0.25_0.008_60)]`}
      >
        <div className="container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm tracking-wider text-muted-foreground hover:text-gold transition-colors py-2 border-b border-[oklch(0.20_0.005_60)]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-2 px-5 py-3 border border-gold text-gold text-sm tracking-wider text-center hover:bg-gold hover:text-[oklch(0.10_0.005_60)] transition-all duration-300"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </nav>
  );
}
