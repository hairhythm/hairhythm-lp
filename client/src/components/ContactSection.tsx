/*
 * ContactSection — 育毛の学校 LP
 * Design: Natural Elegant Green — Sage bg, LINE CTA only (no form)
 * Layout: Centered single-column with LINE CTA prominent
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trackLineClick } from "@/lib/analytics";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/ikumou-logo_193d602f.webp";

export default function ContactSection() {
  const { ref: sectionRef } = useScrollAnimation();

  return (
    <section
      id="contact"
      className="py-20 md:py-28 overflow-hidden relative"
      style={{ background: "oklch(0.48 0.10 148)" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 15% 50%, white 1px, transparent 1px), radial-gradient(circle at 85% 50%, white 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container relative z-10">
        <div ref={sectionRef} className="fade-up max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "oklch(0.85 0.04 148)" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.85 0.04 148)" }}
            >
              Contact
            </span>
            <div className="w-8 h-px" style={{ background: "oklch(0.85 0.04 148)" }} />
          </div>

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-semibold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            まずは
            <br />
            無料相談から
          </h2>

          <p
            className="text-sm leading-[2] mb-10"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.90 0.04 148)", fontWeight: 300 }}
          >
            育毛の学校への入学に関するご質問、カリキュラムの詳細、料金のご相談など、<br className="hidden md:block" />
            どんな小さなことでもお気軽にお問い合わせください。<br className="hidden md:block" />
            専門のスタッフが丁寧にご対応いたします。
          </p>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            {[
              { icon: "✓", title: "無料相談実施中", desc: "入学前の疑問・不安を解消" },
              { icon: "✓", title: "48時間以内に返信", desc: "翌営業日以内にご連絡" },
              { icon: "✓", title: "しつこい営業なし", desc: "過度な営業は一切なし" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-1.5">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "oklch(0.60 0.08 148)", color: "white" }}
                >
                  {item.icon}
                </span>
                <p
                  className="text-sm font-medium text-white"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.85 0.04 148)", fontWeight: 300 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* LINE CTA — large & prominent */}
          <a
            href="https://lin.ee/SxOndg6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLineClick("contact_section")}
            className="inline-flex items-center justify-center gap-3 w-full max-w-md mx-auto py-5 text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "#06C755",
              color: "white",
              borderRadius: "4px",
              fontFamily: "'Noto Sans JP', sans-serif",
              boxShadow: "0 6px 28px rgba(6, 199, 85, 0.45)"
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.02 2 11c0 3.07 1.61 5.77 4.08 7.45L5 21l2.8-1.4C9.1 20.18 10.52 20.5 12 20.5c5.52 0 10-4.02 10-9S17.52 2 12 2zm1 13H7v-1.5h6V15zm2-3H7v-1.5h8V12zm0-3H7V7.5h8V9z"/>
            </svg>
            <span>LINEで無料相談する</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p
            className="text-xs mt-4"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.82 0.04 148)" }}
          >
            LINEアプリが開きます。友だち追加後にメッセージをお送りください。
          </p>

          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mt-12 pt-8" style={{ borderTop: "1px solid oklch(0.58 0.09 148)" }}>
            <img src={LOGO_URL} alt="育毛の学校" className="w-10 h-10 object-contain" />
            <div className="text-left">
              <p
                className="text-sm font-semibold text-white"
                style={{ fontFamily: "'Shippori Mincho', serif" }}
              >
                育毛の学校
              </p>
              <p
                className="text-xs"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.85 0.04 148)" }}
              >
                Ikumou no Gakkou
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
