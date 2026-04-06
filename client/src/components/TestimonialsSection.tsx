/*
 * TestimonialsSection — 育毛の学校 LP
 * Design: Dark luxury testimonial cards with salon owner image background
 * Layout: 3-column testimonial cards with gold quote marks
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TESTIMONIAL_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/testimonial-bg-SfPrDdLoCPKNLegnewdgoN.webp";

const testimonials = [
  {
    name: "田中 美咲",
    role: "ヘアサロン オーナー",
    location: "東京都・渋谷区",
    years: "受講歴 2年",
    quote: "受講前は「育毛メニュー」を導入しても売上に繋がるか不安でした。しかし、科学的な知識を身につけたことで自信を持って顧客に提案できるようになり、育毛コースの売上が受講前の3.2倍になりました。",
    result: "売上 3.2倍",
  },
  {
    name: "山本 健太",
    role: "理容サロン オーナー",
    location: "大阪府・梅田",
    years: "受講歴 1年半",
    quote: "男性の薄毛に悩む顧客が多く、何か力になりたいと思っていました。育毛の学校で学んだカウンセリング技術と施術法を組み合わせることで、リピート率が大幅に向上。今では育毛専門サロンとして認知されています。",
    result: "リピート率 +45%",
  },
  {
    name: "佐藤 由香里",
    role: "ヘッドスパ専門店 オーナー",
    location: "愛知県・名古屋",
    years: "受講歴 3年",
    quote: "育毛の学校での学びは、私のサロンの方向性を根本から変えました。単なるリラクゼーションから、科学的根拠に基づく育毛専門店へ。客単価が2倍以上になり、遠方からのご来店も増えています。",
    result: "客単価 2.1倍",
  },
];

export default function TestimonialsSection() {
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();

  return (
    <section id="testimonials" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${TESTIMONIAL_BG})` }}
      />
      <div className="absolute inset-0 bg-[oklch(0.08_0.005_60/0.90)]" />

      <div className="relative z-10 container">
        {/* Header */}
        <div ref={headerRef} className="fade-up text-center mb-16">
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}>
            Testimonials
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            受講者の声
          </h2>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p
            className="text-sm text-muted-foreground max-w-xl mx-auto"
            style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
          >
            全国500名以上のサロンオーナーが、育毛の学校で学び、サロンを変革しました。
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-[oklch(0.12_0.005_60/0.85)] border border-[oklch(0.22_0.008_60)] p-8 hover:border-gold/40 transition-all duration-500"
            >
              {/* Quote mark */}
              <span
                className="block text-7xl text-gold/20 leading-none mb-4 -mt-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "
              </span>

              {/* Quote */}
              <p
                className="text-sm text-[oklch(0.72_0.008_60)] leading-relaxed mb-6"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
              >
                {t.quote}
              </p>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 bg-[oklch(0.18_0.008_60)] border border-gold/30 px-4 py-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span
                  className="text-xs text-gold tracking-wider"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {t.result}
                </span>
              </div>

              {/* Author */}
              <div className="border-t border-[oklch(0.22_0.008_60)] pt-5">
                <p
                  className="text-sm text-white font-medium mb-1"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs text-muted-foreground"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                >
                  {t.role} / {t.location}
                </p>
                <p
                  className="text-xs text-gold/60 mt-1"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {t.years}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
