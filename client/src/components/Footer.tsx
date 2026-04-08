/*
 * Footer — 育毛の学校 LP
 * Design: Natural Elegant Green — Dark sage footer
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/ikumou-logo_193d602f.webp";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "oklch(0.28 0.06 148)" }}>
      <div className="container py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={LOGO_URL} alt="育毛の学校" className="w-10 h-10 object-contain" />
              <div>
                <h3
                  className="text-base font-semibold text-white"
                  style={{ fontFamily: "'Shippori Mincho', serif" }}
                >
                  育毛の学校
                </h3>
                <p
                  className="text-[10px] tracking-widest"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.72 0.06 148)" }}
                >
                  Hair Growth Academy
                </p>
              </div>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.05 148)", fontWeight: 300 }}
            >
              サロンオーナーのための
              <br />
              育毛専門教育プログラム
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.80 0.05 148)" }}
            >
              Menu
            </p>
            <nav className="flex flex-col gap-2.5">
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
                  className="text-xs transition-colors duration-200 hover:text-white"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.72 0.05 148)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.80 0.05 148)" }}
            >
              Contact
            </p>
            <div
              className="space-y-2 text-xs"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.72 0.05 148)", fontWeight: 300 }}
            >
              <p>受付時間: 平日 10:00 〜 18:00</p>
              <p>土日祝: お問い合わせフォームのみ</p>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center gap-1.5 mt-3 text-white hover:opacity-80 transition-opacity duration-200"
              >
                <span>お問い合わせはこちら</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid oklch(0.40 0.07 148)" }} className="pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-[10px]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.60 0.05 148)" }}
            >
              © 2024 育毛の学校. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a
                href="/privacy"
                className="text-[10px] transition-colors duration-200 hover:text-white"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.60 0.05 148)" }}
              >
                プライバシーポリシー
              </a>
              <a
                href="/legal"
                className="text-[10px] transition-colors duration-200 hover:text-white"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.60 0.05 148)" }}
              >
                特定商取引法に基づく表記
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
