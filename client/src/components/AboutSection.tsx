/*
 * AboutSection — 育毛の学校 LP
 * Design: Natural Elegant Green — Asymmetric 2-column
 * Content: 育毛の学校の特徴・橋本式プログラムの説明
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HAIR_THEORY_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/curriculum-hair-theory_fa9fa4c8.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/ikumou-logo_193d602f.webp";

const features = [
  { icon: "🌿", title: "正しい毛髪理論", desc: "科学的根拠に基づいた毛髪知識で、お客様に正しい指導ができる専門家になります。" },
  { icon: "💆", title: "育毛ヘッドスパ技術", desc: "健康・育毛・体調を整えることに特化した独自技術。スタッフにも落とし込みやすい。" },
  { icon: "🔬", title: "マイクロスコープ・血流スコープ実習", desc: "250倍マイクロスコープで頭皮・抜け毛を診断。血流スコープで頭皮・指・肌の血流状態も確認できます。" },
  { icon: "💰", title: "高額商品の販売ノウハウ", desc: "売り込みなしで高額商品が売れる心理学とクロージング技術を伝授します。" },
];

export default function AboutSection() {
  const { ref: leftRef, isVisible } = useScrollAnimation();
  const { ref: rightRef } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 overflow-hidden" style={{ background: "oklch(0.99 0.005 90)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image */}
          <div
            ref={leftRef}
            className="fade-up relative"
          >
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "80px 8px 8px 8px", boxShadow: "0 20px 60px oklch(0.52 0.09 148 / 0.15)" }}
            >
              <img
                src={HAIR_THEORY_URL}
                alt="育毛の学校 施術風景"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, oklch(0.48 0.10 148 / 0.3) 0%, transparent 50%)" }}
              />
            </div>

            {/* Logo badge */}
            <div
              className="absolute -bottom-6 -right-4 flex items-center justify-center"
              style={{
                background: "white",
                borderRadius: "50%",
                width: "96px",
                height: "96px",
                boxShadow: "0 8px 24px oklch(0.52 0.09 148 / 0.2)",
                border: "2px solid oklch(0.88 0.04 148)"
              }}
            >
              <img src={LOGO_URL} alt="育毛の学校" className="w-14 h-14 object-contain" />
            </div>

            {/* Decorative circle */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full"
              style={{ background: "oklch(0.92 0.04 148)", zIndex: -1 }}
            />
          </div>

          {/* Right: Text */}
          <div ref={rightRef} className="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="sage-line" />
              <span className="section-label">About</span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-semibold mb-5"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
            >
              育毛の学校とは
            </h2>

            <p
              className="text-sm leading-[2] mb-4"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)", fontWeight: 300 }}
            >
              「育毛の学校」は、サロンオーナーが育毛メニューを導入し、
              <strong style={{ fontWeight: 600, color: "oklch(0.38 0.09 148)" }}>売り込みなしで高額商品を販売できる</strong>
              ようになるための専門プログラムです。
            </p>

            <p
              className="text-sm leading-[2] mb-8"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)", fontWeight: 300 }}
            >
              年間100万人も人口が減少する日本では、サロンのお客様もどんどん減っています。
              パーマ・カラー・縮毛矯正に並んで、
              <strong style={{ fontWeight: 600, color: "oklch(0.38 0.09 148)" }}>育毛が美容室のメニューとして定着する時代</strong>
              が来ています。今こそ、あなたのサロンに育毛という新たな柱を作りましょう。
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-4 rounded-sm"
                  style={{
                    background: "oklch(0.97 0.02 148)",
                    border: "1px solid oklch(0.90 0.03 148)"
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">{f.icon}</span>
                    <h3
                      className="text-sm font-semibold"
                      style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.38 0.09 148)" }}
                    >
                      {f.title}
                    </h3>
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
