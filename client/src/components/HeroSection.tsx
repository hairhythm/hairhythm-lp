/*
 * HeroSection — 育毛専門美容室ヘアリズム LP（最終確定版）
 * Design: Deep Forest Green x Gold — 40代以上女性向け薄毛専門サロン
 */
import { useEffect, useRef, useState } from "react";

// 森の背景画像
const HERO_IMAGE_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/pIjdufqETvfXRAmu.png";
const LINE_URL = "https://lin.ee/oV9r3at";
const TEL = "0795-44-1099";

// 月初から経過日数に基づいて残り枠を計算（10名→自然に減少）
function calcRemainingSlots(): number {
  const day = new Date().getDate();
  if (day <= 3) return 10;   // 1〜3日：10名（チラシ配布直後）
  if (day <= 6) return 6;    // 4〜6日：6名（チラシ効果で早期に減少）
  if (day <= 9) return 5;    // 7〜9日：5名
  if (day <= 12) return 4;   // 10〜12日：4名
  if (day <= 16) return 3;   // 13〜16日：3名
  if (day <= 20) return 2;   // 17〜20日：2名
  return 1;                  // 21日以降：1名（残りわずか）
}

// 当月末の日付を「○月末まで」形式で返す
function getMonthEndLabel(): string {
  const month = new Date().getMonth() + 1;
  return `${month}月末まで`;
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [remainingSlots] = useState(calcRemainingSlots);
  const [monthEndLabel] = useState(getMonthEndLabel);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(0.15 0.06 148)" }}
    >
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE_URL}
          alt="育毛専門美容室ヘアリズム"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.90 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, oklch(0.12 0.08 148 / 0.35) 0%, oklch(0.18 0.07 148 / 0.15) 50%, oklch(0.15 0.06 148 / 0.45) 100%)"
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to top, oklch(0.15 0.06 148) 0%, transparent 100%)" }}
        />
      </div>

      {/* 左側ゴールドライン */}
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{ background: "linear-gradient(to bottom, transparent, oklch(0.72 0.12 80 / 0.6), transparent)" }}
      />

      {/* 残り枠バナー */}
      <div
        className="absolute top-16 md:top-20 left-0 right-0 z-20"
        style={{
          background: "linear-gradient(90deg, oklch(0.28 0.09 148 / 0.97) 0%, oklch(0.32 0.10 148 / 0.97) 100%)",
          borderBottom: "1px solid oklch(0.65 0.12 80 / 0.5)"
        }}
      >
        <div className="container py-2.5 flex items-center justify-center gap-3 flex-wrap">
          <span
            className="inline-block px-2 py-0.5 text-[10px] font-bold rounded-sm"
            style={{ background: "oklch(0.65 0.12 80)", color: "oklch(0.18 0.06 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            ⚠️ 残り枠
          </span>
          <p className="text-xs font-medium text-white" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            今月の残り枠：<strong style={{ color: "oklch(0.88 0.12 80)" }}>あと{remainingSlots}名様</strong>　毎月10名様限定・定員に達し次第終了
          </p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container relative z-10 pt-36 pb-20">
        <div className="max-w-2xl">

          {/* ラベル */}
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

          {/* メインキャッチコピー */}
          <h1
            className="mb-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s"
            }}
          >
            <span
              className="block text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white"
              style={{ fontFamily: "'Shippori Mincho', serif", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              もう、鏡の前で
            </span>
            <span
              className="block text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white mt-1"
              style={{ fontFamily: "'Shippori Mincho', serif", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              ため息をつくのは
            </span>
            <span
              className="block text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mt-1"
              style={{
                fontFamily: "'Shippori Mincho', serif",
                textShadow: "0 2px 20px rgba(0,0,0,0.4)",
                color: "oklch(0.88 0.14 80)"
              }}
            >
              終わりにしませんか？
            </span>
          </h1>

          {/* サブコピー */}
          <div
            className="mb-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"
            }}
          >
            <p
              className="text-sm md:text-base leading-relaxed mb-2"
              style={{ color: "oklch(0.92 0.04 80)", fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}
            >
              その悩み、<strong style={{ color: "oklch(0.88 0.14 80)" }}>3ヶ月</strong>あれば「希望」に変えられます。
            </p>
            <p
              className="text-xs md:text-sm leading-relaxed"
              style={{ color: "oklch(0.82 0.03 148)", fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              【再生医療分野の技術 × 専任美容師の寄り添い】<br />
              兵庫県加東市で<strong style={{ color: "oklch(0.88 0.12 80)" }}>96.8％が変化を実感した</strong>、<br />
              「髪の力を呼び覚ます」独自の育毛メソッド
            </p>
          </div>

          {/* 料金ボックス */}
          <div
            className="mb-8 p-5 max-w-md"
            style={{
              background: "oklch(0.18 0.08 148 / 0.90)",
              border: "1px solid oklch(0.65 0.12 80 / 0.6)",
              borderRadius: "4px",
              backdropFilter: "blur(8px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"
            }}
          >
            <p className="text-xs mb-3 tracking-wider" style={{ color: "oklch(0.80 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif" }}>
              【毎月10名様限定】頭皮診断＆育毛スパ体験
            </p>
            <div className="flex flex-col gap-1.5 mb-3">
              {[
                { label: "初回カウンセリング・診断料", price: "10,780円" },
                { label: "育毛ヘッドスパ（60分）", price: "16,500円" },
                { label: "ホームケア用頭皮化粧水", price: "4,180円" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs line-through" style={{ color: "oklch(0.65 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {item.label}
                  </span>
                  <span className="text-xs line-through" style={{ color: "oklch(0.60 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-baseline gap-2 pt-2 mb-1" style={{ borderTop: "1px solid oklch(0.65 0.12 80 / 0.3)" }}>
              <span className="text-xs" style={{ color: "oklch(0.85 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>
                通常 33,110円 → 初回限定
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className="text-4xl font-bold"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.88 0.12 80)" }}
              >
                4,980円
              </span>
              <span className="text-sm" style={{ color: "oklch(0.80 0.06 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>（税込）</span>
              <span
                className="ml-auto text-xs px-2 py-0.5 rounded"
                style={{
                  background: "oklch(0.65 0.12 80 / 0.2)",
                  border: "1px solid oklch(0.65 0.12 80 / 0.5)",
                  color: "oklch(0.88 0.12 80)",
                  fontFamily: "'Noto Sans JP', sans-serif"
                }}
              >
                85%OFF
              </span>
            </div>
            <p className="text-[10px] mt-2" style={{ color: "oklch(0.58 0.02 60)", fontFamily: "'Noto Sans JP', sans-serif" }}>
              ※{monthEndLabel}・定員に達し次第終了
            </p>
          </div>

          {/* CTAボタン */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s"
            }}
          >
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
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
              今すぐLINEで空き状況を確認する
            </a>
            <a
              href={`tel:${TEL}`}
              className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium rounded-sm transition-all duration-200 hover:opacity-90"
              style={{
                background: "oklch(1 0 0 / 0.08)",
                border: "1px solid oklch(1 0 0 / 0.3)",
                color: "white",
                fontFamily: "'Noto Sans JP', sans-serif",
                backdropFilter: "blur(4px)"
              }}
            >
              📞 電話で相談する：{TEL}
            </a>
          </div>

          {/* 安心バッジ */}
          <div
            className="flex flex-wrap items-center gap-5 mt-8 pt-6"
            style={{
              borderTop: "1px solid oklch(1 0 0 / 0.15)",
              opacity: visible ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s"
            }}
          >
            {["完全個室・完全予約制", "強引な勧誘なし", "マイクロスコープ診断"].map((badge) => (
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

      {/* スクロール */}
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
