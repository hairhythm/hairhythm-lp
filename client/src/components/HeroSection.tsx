/*
 * HeroSection — 育毛の学校 LP
 * Design: Natural Elegant Green — Light cream bg, sage green accents
 * Layout: Asymmetric — text left, image right
 */

import { useEffect, useState } from "react";

// 現在の月の末日を「M月末日」形式で返す関数
function getMonthEnd(): string {
  const now = new Date();
  const month = now.getMonth() + 1;
  return `${month}月末日`;
}

const HEADSPA_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/headspa-main_6cf84ce3.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/ikumou-logo_193d602f.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20"
      style={{
        background: "linear-gradient(150deg, oklch(0.97 0.02 148) 0%, oklch(0.99 0.005 90) 55%, oklch(0.96 0.025 148) 100%)"
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.80 0.06 148 / 0.18) 0%, transparent 65%)",
          transform: "translate(25%, -25%)"
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.07 148 / 0.12) 0%, transparent 65%)",
          transform: "translate(-35%, 35%)"
        }}
      />

      {/* 期間限定バナー */}
      <div
        className="absolute top-16 md:top-20 left-0 right-0 z-20"
        style={{
          background: "linear-gradient(90deg, oklch(0.42 0.10 148) 0%, oklch(0.50 0.12 148) 100%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.3s"
        }}
      >
        <div className="container py-2.5 flex items-center justify-center gap-3 flex-wrap">
          <span
            className="text-[10px] tracking-widest uppercase font-medium"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.88 0.06 148)" }}
          >
            Limited Offer
          </span>
          <div
            className="w-px h-3 hidden sm:block"
            style={{ background: "oklch(0.75 0.06 148 / 0.5)" }}
          />
          <p
            className="text-xs font-medium text-white text-center"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            <span
              className="inline-block px-2 py-0.5 mr-2 text-[10px] font-bold rounded-sm"
              style={{ background: "oklch(0.88 0.08 80)", color: "oklch(0.25 0.05 60)" }}
            >
              期間限定
            </span>
            {getMonthEnd()}までのお申し込みに限り、割引価格で受講可能です
          </p>
          <a
            href="#faq"
            onClick={(e) => { e.preventDefault(); document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-[10px] underline underline-offset-2 transition-opacity hover:opacity-75"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.90 0.06 148)" }}
          >
            詳細を見る
          </a>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-24">

          {/* Left: Text */}
          <div
            className="flex flex-col gap-7"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="sage-line" />
              <span className="section-label">For Salon Owners</span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.35]"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
            >
              大人女性に
              <span style={{ color: "oklch(0.48 0.10 148)" }}>育毛</span>を。
              <br />
              サロンの売上を
              <br />
              <span style={{ color: "oklch(0.48 0.10 148)" }}>変える</span>講座。
            </h1>

            {/* Body */}
            <p
              className="text-sm md:text-base leading-[2] max-w-md"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)", fontWeight: 300 }}
            >
              育毛メニュー導入でお悩みのサロン様へ。<br />
              全国70店舗以上が実証した
              <strong style={{ fontWeight: 600, color: "oklch(0.38 0.09 148)" }}>育毛の学校</strong>で、
              あなたのサロンに新たな収益の柱を作りましょう。
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3">
              {[
                { num: "月商1,600万円", label: "4人サロン最高実績" },
                { num: "70+", label: "店舗が導入済み" },
                { num: "2日間", label: "集中講座" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline gap-1.5 px-4 py-2.5"
                  style={{
                    background: "white",
                    border: "1px solid oklch(0.88 0.04 148)",
                    borderRadius: "4px",
                    boxShadow: "0 2px 10px oklch(0.52 0.09 148 / 0.08)"
                  }}
                >
                  <span
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.48 0.10 148)" }}
                  >
                    {item.num}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "oklch(0.50 0.03 60)", fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" onClick={scrollTo("#contact")} className="btn-sage text-sm">
                無料で相談する
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#about" onClick={scrollTo("#about")} className="btn-outline-sage text-sm">
                詳しく見る
              </a>
            </div>

            {/* Trust */}
            <div
              className="flex flex-wrap items-center gap-5 pt-4"
              style={{ borderTop: "1px solid oklch(0.90 0.03 148)" }}
            >
              {["全国出張対応", "ZOOM受講可能", "修了後サポート無料"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="oklch(0.52 0.09 148)" strokeWidth="1.2"/>
                    <path d="M4.5 7l2 2 3-3" stroke="oklch(0.52 0.09 148)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xs" style={{ color: "oklch(0.48 0.03 60)", fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s"
            }}
          >
            {/* Logo badge */}
            <div className="absolute -top-6 right-4 z-10 hidden lg:flex flex-col items-center">
              <img src={LOGO_URL} alt="育毛の学校" className="w-20 h-20 object-contain drop-shadow-md" />
            </div>

            {/* Main image */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "8px 8px 80px 8px",
                boxShadow: "0 24px 64px oklch(0.52 0.09 148 / 0.18)"
              }}
            >
              <img
                src={HEADSPA_URL}
                alt="育毛ヘッドスパ施術"
                className="w-full h-[380px] md:h-[500px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 55%, oklch(0.38 0.09 148 / 0.45) 100%)" }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <p
                  className="text-white text-sm font-medium"
                  style={{ fontFamily: "'Shippori Mincho', serif", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
                >
                  育毛ヘッドスパ — 結果の出る施術技術
                </p>
              </div>
            </div>

            {/* Floating achievement card */}
            <div
              className="absolute -bottom-5 -left-5 px-5 py-4 hidden md:block"
              style={{
                background: "white",
                borderRadius: "4px",
                boxShadow: "0 8px 32px oklch(0.52 0.09 148 / 0.15)",
                border: "1px solid oklch(0.88 0.04 148)"
              }}
            >
              <p className="text-[11px]" style={{ color: "oklch(0.55 0.03 60)", fontFamily: "'Noto Sans JP', sans-serif" }}>
                導入後の実績
              </p>
              <p
                className="text-2xl font-bold mt-0.5"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.48 0.10 148)" }}
              >
                月商 <span className="text-3xl">1,600</span>万円
              </p>
              <p className="text-[11px] mt-0.5" style={{ color: "oklch(0.55 0.03 60)", fontFamily: "'Noto Sans JP', sans-serif" }}>
                4人サロン・育毛導入後最高実績
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-[10px] tracking-widest" style={{ color: "oklch(0.60 0.05 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>
          SCROLL
        </span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 7l5 5 5-5" stroke="oklch(0.52 0.09 148)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
