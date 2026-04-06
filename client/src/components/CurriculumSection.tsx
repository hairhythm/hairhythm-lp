/*
 * CurriculumSection — 育毛の学校 LP
 * Design: Dark Art Deco background with numbered curriculum cards
 * Layout: 3-column grid with gold accent numbers
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CURRICULUM_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/curriculum-bg-emqRB3Z2N2Ef87Gg3WVafd.webp";

const modules = [
  {
    number: "01",
    title: "毛髪・頭皮の基礎科学",
    desc: "毛髪の構造、成長サイクル、頭皮の生理機能を科学的に理解。薄毛・脱毛の原因を正確に把握し、適切なアプローチを選択する基盤を築きます。",
    tags: ["毛髪科学", "頭皮生理学", "脱毛メカニズム"],
  },
  {
    number: "02",
    title: "育毛カウンセリング技術",
    desc: "顧客の悩みを深く理解し、信頼関係を構築するカウンセリング手法を習得。問診・頭皮診断・カルテ作成まで、プロとしての対応力を磨きます。",
    tags: ["問診技術", "頭皮診断", "カルテ管理"],
  },
  {
    number: "03",
    title: "頭皮ケア施術技術",
    desc: "科学的根拠に基づいた頭皮マッサージ、スカルプトリートメント、育毛剤の正しい使用法を実践的に学びます。即日サロンで活用可能な技術です。",
    tags: ["頭皮マッサージ", "スカルプケア", "育毛剤"],
  },
  {
    number: "04",
    title: "栄養学・生活習慣指導",
    desc: "育毛に影響する栄養素、食事指導、睡眠・ストレス管理のアドバイス方法を習得。顧客の生活全体をサポートする総合的な専門家を目指します。",
    tags: ["栄養学", "食事指導", "生活習慣"],
  },
  {
    number: "05",
    title: "育毛メニュー設計・販売",
    desc: "高単価育毛メニューの設計、価格設定、コース販売の手法を学びます。サロンの収益を最大化するビジネス戦略も含めた実践的な内容です。",
    tags: ["メニュー設計", "価格戦略", "コース販売"],
  },
  {
    number: "06",
    title: "集客・マーケティング",
    desc: "育毛専門サロンとしてのブランディング、SNS活用、口コミ集客の具体的な方法を習得。継続的に顧客が集まる仕組みを構築します。",
    tags: ["ブランディング", "SNS集客", "リピート戦略"],
  },
];

export default function CurriculumSection() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  return (
    <section
      id="curriculum"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${CURRICULUM_BG})` }}
      />
      <div className="absolute inset-0 bg-[oklch(0.10_0.005_60/0.85)]" />

      <div className="relative z-10 container">
        {/* Header */}
        <div ref={headerRef} className="fade-up text-center mb-16 md:mb-20">
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}>
            Curriculum
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            カリキュラム
          </h2>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p
            className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
          >
            6つのモジュールで構成された体系的なプログラム。<br />
            科学的知識から実践技術、ビジネス戦略まで網羅します。
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="group relative bg-[oklch(0.13_0.005_60/0.80)] border border-[oklch(0.22_0.008_60)] p-8 hover:border-gold/50 transition-all duration-500 hover:bg-[oklch(0.15_0.005_60/0.90)]"
            >
              {/* Number */}
              <span
                className="block text-5xl font-light text-gradient-gold mb-4 leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {mod.number}
              </span>
              <div className="gold-line w-8 mb-5 transition-all duration-300 group-hover:w-16" />

              {/* Title */}
              <h3
                className="text-lg text-white mb-3 leading-snug"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 500 }}
              >
                {mod.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs text-muted-foreground leading-relaxed mb-5"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
              >
                {mod.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {mod.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-wider text-gold/70 border border-gold/20 px-2 py-1"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/0 group-hover:border-gold/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
