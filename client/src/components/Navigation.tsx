/*
 * Navigation — 育毛の学校 LP
 * Design: Natural Elegant Green — White nav with sage green accents
 * Logo: 女性マーク（ikumou-logo.webp）
 */

import { useEffect, useState } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/ikumou-logo_193d602f.webp";

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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/97 backdrop-blur-sm shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
      style={{ borderBottom: scrolled ? "1px solid oklch(0.92 0.02 148)" : "none" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3"
          >
            <img
              src={LOGO_URL}
              alt="育毛の学校"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span
                className="text-base font-semibold"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.38 0.09 148)" }}
              >
                育毛の学校
              </span>
              <span
                className="text-[10px] tracking-[0.25em] mt-0.5"
                style={{ color: "oklch(0.58 0.04 60)", fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                Hair Growth Academy
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs tracking-wider relative group transition-colors duration-200"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.35 0.02 60)" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ background: "oklch(0.52 0.09 148)" }}
                />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-sage text-xs py-2.5 px-5 ml-2"
            >
              無料相談する
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ background: "oklch(0.52 0.09 148)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ background: "oklch(0.52 0.09 148)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ background: "oklch(0.52 0.09 148)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ background: "white", borderTop: "1px solid oklch(0.92 0.02 148)" }}
      >
        <div className="container py-5 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm py-2.5 transition-colors"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                color: "oklch(0.35 0.02 60)",
                borderBottom: "1px solid oklch(0.95 0.02 148)"
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-sage text-sm text-center mt-2"
          >
            無料相談する
          </a>
        </div>
      </div>
    </nav>
  );
}
