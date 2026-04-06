/*
 * Footer — 育毛の学校 LP
 * Design: Minimal dark footer with gold logo and links
 */

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.08_0.005_60)] border-t border-[oklch(0.18_0.008_60)]">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-light tracking-widest text-gold-light mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              育毛の学校
            </h3>
            <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Hair Growth Academy
            </p>
            <p
              className="text-xs text-muted-foreground leading-relaxed"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              サロンオーナーのための<br />
              育毛専門教育プログラム
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs tracking-[0.3em] text-gold uppercase mb-4"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              Menu
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "育毛の学校とは", href: "#about" },
                { label: "カリキュラム", href: "#curriculum" },
                { label: "受講者の声", href: "#testimonials" },
                { label: "よくある質問", href: "#faq" },
                { label: "お問い合わせ", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs text-muted-foreground hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p
              className="text-xs tracking-[0.3em] text-gold uppercase mb-4"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              Contact
            </p>
            <div
              className="space-y-3 text-xs text-muted-foreground"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              <p>受付時間: 平日 10:00 〜 18:00</p>
              <p>土日祝: お問い合わせフォームのみ</p>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 mt-2"
              >
                <span>お問い合わせはこちら</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[10px] text-muted-foreground"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            © 2024 育毛の学校. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["プライバシーポリシー", "特定商取引法に基づく表記"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] text-muted-foreground hover:text-gold transition-colors duration-300"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
