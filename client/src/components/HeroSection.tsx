/*
 * HeroSection — 育毛専門美容室ヘアリズム LP
 * Design: Deep Forest Green x Gold — 40代以上女性向け薄毛専門サロン
 */
import { useEffect, useRef, useState } from "react";

const HERO_IMAGE_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/rbscufLHeibbVSph.jpg";
const LINE_URL = "https://lin.ee/oV9r3at";

function getMonthEnd(): string {
  const now = new Date();
  const month = now.getMonth() + 1;
  return `${month}月末`;
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(0.15 0.06 148)" }}
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE_URL}
          alt="育毛専門美容室ヘアリズム"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.55 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, oklch(0.15 0.08 148 / 0.85) 0%, oklch(0.20 0.07 148 / 0.60) 50%, oklch(0.18 0.06 148 / 0.75) 100%)"
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to top, oklch(0.15 0.06 148) 0%, transparent 100%)" }}
        />
      </div>
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{ background: "linear-gradient(to bottom, transparent, oklch(0.72 0.12 80 / 0.6), transparent)" }}
      />
      <div
        className="absolute top-16 md:top-20 left-0 right-0 z-20"
        style={{ background: "linear-gradient(90deg, oklch(0.28 0.09 148 / 0.95) 0%, oklch(0.32 0.10 148 / 0.95) 100%)", borderBottom: "1px solid oklch(0.65 0.12 80 / 0.5)" }}
      >
        <div className="container py-2.5 flex items-center justify-center gap-3 flex-wrap">
          <span
            className="inline-block px-2 py-0.5 text-[10px] font-bold rounded-sm"
            style={{ background: "oklch(0.65 0.12 80)", color: "oklch(0.18 0.06 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            期間限定
          </span>
          <p className="text-xs font-medium text-white" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {getMonthEnd()}までのお申し込みに限り、初回体験が<strong style={{ color: "oklch(0.88 0.12 80)" }}>4,980円</strong>でご体感いただけます
          </p>
        </div>
      </div>
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            <div className="w-8 h-px" style={{ background: "oklch(0.72 0.12 80)" }} />
            <span
              className="text-[11px] tracking-[0.3em] uppercase"
              style={{ color: "oklch(0.80 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              育毛専門美容室 · 兵庫県加東市
            </span>
          </div>
          <h1
            className="mb-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s"
            }}
          >
            <span
              className="block text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white"
              style={{ fontFamily: "'Shippori Mincho', serif", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              髪が変わると
            </span>
            <span
              className="block text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mt-1"
              style={{ fontFamily: "'Shippori Mincho', serif", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              人は10歳若く見える
            </span>
          </h1>
          <p
            className="text-base md:text-lg mb-3 font-medium"
            style={{
              color: "oklch(0.88 0.08 80)",
              fontFamily: "'Shippori Mincho', serif",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              textShadow: "0 1px 8px rgba(0,0,0,0.3)"
            }}
          >
            整う頭皮　変わる髪
          </p>
          <p
            className="text-sm md:text-base leading-relaxed mb-8 max-w-lg"
            style={{
              color: "oklch(0.90 0.03 148)",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"
            }}
          >
            40代からの薄毛・抜け毛・頭皮の悩みに特化した専門サロン。<br />
            マイクロスコープ頭皮診断と育毛ヘッドスパで、<br />
            あなたの髪と頭皮の本当の状態を知るところから始めましょう。
          </p>
          <div
            className="mb-8 p-5 max-w-md"
            style={{
              background: "oklch(0.20 0.08 148 / 0.85)",
              border: "1px solid oklch(0.65 0.12 80 / 0.6)",
              borderRadius: "2px",
              backdropFilter: "blur(8px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s"
            }}
          >
            <p className="text-xs mb-3" style={{ color: "oklch(0.80 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: "0.1em" }}>
              初回体験コース（{getMonthEnd()}まで）
            </p>
            <div className="flex flex-col gap-1.5 mb-3">
              {[
                { label: "初回カウンセリング", price: "10,780円" },
                { label: "潤うヘッドスパ", price: "18,150円" },
                { label: "ホームケア頭皮用化粧水", price: "4,180円" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "oklch(0.85 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>
                    ✓ {item.label}
                  </span>
                  <span className="text-xs line-through" style={{ color: "oklch(0.65 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-baseline gap-2 pt-2" style={{ borderTop: "1px solid oklch(0.65 0.12 80 / 0.3)" }}>
              <span className="text-xs" style={{ color: "oklch(0.85 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>すべて込みで</span>
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.88 0.12 80)" }}
              >
                4,980円
              </span>
              <span className="text-xs" style={{ color: "oklch(0.80 0.06 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>（税込）</span>
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s"
            }}
          >
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)",
                border: "1px solid oklch(0.65 0.12 80)",
                fontFamily: "'Noto Sans JP', sans-serif",
                boxShadow: "0 4px 20px oklch(0.28 0.08 148 / 0.5)"
              }}
            >
              <svg width="18" height="18" viewBox="0 0 48 48" fill="white">
                <path d="M24 4C12.95 4 4 11.82 4 21.5c0 5.84 3.17 11.02 8.12 14.38L10 38l4.8-2.4c2.88.88 5.96 1.4 9.2 1.4 11.05 0 20-7.82 20-17.5S35.05 4 24 4z"/>
              </svg>
              LINEで予約する（無料）
            </a>
            <a
              href="#curriculum"
              onClick={scrollTo("#curriculum")}
              className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-sm transition-all duration-200 hover:opacity-90"
              style={{
                background: "oklch(1 0 0 / 0.08)",
                border: "1px solid oklch(1 0 0 / 0.3)",
                color: "white",
                fontFamily: "'Noto Sans JP', sans-serif",
                backdropFilter: "blur(4px)"
              }}
            >
              初めての方へ
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div
            className="flex flex-wrap items-center gap-5 mt-8 pt-6"
            style={{
              borderTop: "1px solid oklch(1 0 0 / 0.15)",
              opacity: visible ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.55s"
            }}
          >
            {["女性専門サロン", "完全予約制", "マイクロスコープ診断"].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(0.65 0.12 80 / 0.3)", border: "1px solid oklch(0.65 0.12 80 / 0.6)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4l2 2 3-3" stroke="oklch(0.88 0.12 80)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs" style={{ color: "oklch(0.85 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-[10px] tracking-widest" style={{ color: "oklch(0.72 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif" }}>
          SCROLL
        </span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 7l5 5 5-5" stroke="oklch(0.72 0.10 80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
