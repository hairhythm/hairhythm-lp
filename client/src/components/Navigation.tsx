/*
 * Navigation — 育毛専門美容室ヘアリズム LP
 * Design: Deep Forest Green × Gold — Premium hair salon
 */
import { useEffect, useState } from "react";

const LINE_URL = "https://lin.ee/oV9r3at";

const navLinks = [
  { label: "当店について", href: "#about" },
  { label: "施術動画", href: "#video" },
  { label: "初めての方へ", href: "#curriculum" },
  { label: "薄毛診断", href: "#diagnosis" },
  { label: "お客様の声", href: "#testimonials" },
  { label: "料金・FAQ", href: "#faq" },
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
        scrolled ? "bg-white/97 backdrop-blur-sm shadow-sm" : "bg-white/90 backdrop-blur-sm"
      }`}
      style={{ borderBottom: scrolled ? "1px solid oklch(0.82 0.06 148)" : "none" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)", border: "1px solid oklch(0.72 0.10 80)" }}
            >
              <span style={{ color: "oklch(0.88 0.10 80)", fontSize: "14px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600 }}>H</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-sm font-semibold"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.28 0.09 148)" }}
              >
                ヘアリズム
              </span>
              <span
                className="text-[9px] tracking-[0.15em] mt-0.5"
                style={{ color: "oklch(0.55 0.05 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                育毛専門美容室
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
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.40 0.03 60)", fontWeight: 400 }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "oklch(0.65 0.12 80)" }}
                />
              </a>
            ))}
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)",
                border: "1px solid oklch(0.65 0.12 80)",
                fontFamily: "'Noto Sans JP', sans-serif",
                boxShadow: "0 2px 8px oklch(0.38 0.10 148 / 0.3)"
              }}
            >
              <svg width="14" height="14" viewBox="0 0 48 48" fill="white">
                <path d="M24 4C12.95 4 4 11.82 4 21.5c0 5.84 3.17 11.02 8.12 14.38L10 38l4.8-2.4c2.88.88 5.96 1.4 9.2 1.4 11.05 0 20-7.82 20-17.5S35.05 4 24 4z"/>
              </svg>
              LINEで無料相談
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "oklch(0.28 0.09 148)" }} />
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ background: "oklch(0.28 0.09 148)" }} />
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "oklch(0.28 0.09 148)" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t" style={{ borderColor: "oklch(0.88 0.04 148)" }}>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3 px-2 text-sm transition-colors duration-200"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.40 0.03 60)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 py-3 text-sm font-medium text-white rounded-sm"
                style={{
                  background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)",
                  fontFamily: "'Noto Sans JP', sans-serif"
                }}
              >
                LINEで無料相談する
              </a>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
