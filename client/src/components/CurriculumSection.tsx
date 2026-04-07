/*
 * CurriculumSection — 育毛の学校 LP
 * Design: Natural Elegant Green — Light sage bg with card grid
 * Content: 参考サイトのタイムテーブルをベースに3カテゴリ
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MICROSCOPE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/curriculum-microscope_1d67f0e3.webp";
const HEADSPA_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/curriculum-headspa_6bd6a831.webp";

const curriculum = [
  {
    phase: "総論",
    phaseEn: "Foundation",
    color: "oklch(0.52 0.09 148)",
    items: [
      "発毛理論（メカニズム）",
      "正しい育毛シャンプーの基礎知識と実技",
      "ホームケアの学習と実技",
      "サロンケアの学習と実技（育毛ヘッドスパ）",
      "マイクロスコープ操作指導（頭皮/抜け毛診断）",
    ]
  },
  {
    phase: "実践",
    phaseEn: "Practice",
    color: "oklch(0.44 0.10 148)",
    items: [
      "問診（カウンセリング）の流れ",
      "育毛の知識",
      "8割がご契約！究極クロージング方法",
      "再生医療技術（間葉系幹細胞培養上清液）理論と実技指導",
      "高額商品から売れる心理学",
      "カタヨリ理論",
      "終了証・ディプロマ発行",
    ]
  },
  {
    phase: "付録",
    phaseEn: "Appendix",
    color: "oklch(0.38 0.09 148)",
    items: [
      "カウンセリングの流れ",
      "クロージング",
      "頭度診断方法",
      "抜け毛診断方法",
      "チラシ・POP",
      "商品の効果・効能",
      "コース終了後",
      "一生涯サポート",
    ]
  },
];

const benefits = [
  "年末12月に売り上げを2倍にする方法（当店は70万円が最高480万円になりました）",
  "1年間、お客様に安定的にサロンに通って頂ける方法",
  "無理に集客しなくても売り上げがグンと上がる方法（既存顧客だけで売り上げ50万円アップくらいは楽勝）",
  "明日から使える！1日で0円から10万円を売り上げる方法",
  "広告費0円！明日から即導入可能！客単価を2.5倍にする方法",
];

export default function CurriculumSection() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: gridRef } = useScrollAnimation();

  return (
    <section
      id="curriculum"
      className="py-20 md:py-28"
      style={{ background: "oklch(0.97 0.02 148)" }}
    >
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="fade-up text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="sage-line" />
            <span className="section-label">Curriculum</span>
            <div className="sage-line" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
          >
            カリキュラム
          </h2>
          <p
            className="text-sm leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
          >
            2日間の集中講座で、育毛の知識から販売ノウハウまで
            <br className="hidden md:block" />
            クロージングまで丁寧に指導いたします。
          </p>
        </div>

        {/* Curriculum cards */}
        <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {curriculum.map((cat) => (
            <div
              key={cat.phase}
              className="rounded-sm overflow-hidden"
              style={{
                background: "white",
                border: "1px solid oklch(0.88 0.04 148)",
                boxShadow: "0 4px 20px oklch(0.52 0.09 148 / 0.08)"
              }}
            >
              {/* Card header */}
              <div className="px-6 py-4" style={{ background: cat.color }}>
                <p
                  className="text-[10px] tracking-widest mb-1"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.85 0.04 148)" }}
                >
                  {cat.phaseEn}
                </p>
                <h3
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "'Shippori Mincho', serif" }}
                >
                  {cat.phase}
                </h3>
              </div>

              {/* Card body */}
              <ul className="px-6 py-5 space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" fill="oklch(0.92 0.04 148)"/>
                      <path d="M4.5 7l2 2 3-3" stroke="oklch(0.48 0.10 148)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span
                      className="text-xs leading-relaxed"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.40 0.02 60)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits box */}
        <div
          className="rounded-sm p-8 md:p-10 mb-12"
          style={{
            background: "white",
            border: "2px solid oklch(0.85 0.05 148)",
            boxShadow: "0 8px 32px oklch(0.52 0.09 148 / 0.10)"
          }}
        >
          <h3
            className="text-xl md:text-2xl font-semibold text-center mb-6"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
          >
            この講座を受講すると、こんなノウハウが手に入ります
          </h3>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <svg className="mt-0.5 flex-shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect width="18" height="18" rx="2" fill="oklch(0.48 0.10 148)"/>
                  <path d="M5 9l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.38 0.02 60)" }}
                >
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { url: MICROSCOPE_URL, title: "マイクロスコープ実習", desc: "250倍に拡大できるマイクロスコープで頭皮を診断" },
            { url: HEADSPA_URL, title: "育毛ヘッドスパ実技", desc: "健康・育毛・体調を整える独自のヘッドスパ技術" },
          ].map((img) => (
            <div
              key={img.title}
              className="overflow-hidden"
              style={{ borderRadius: "8px", boxShadow: "0 8px 24px oklch(0.52 0.09 148 / 0.12)" }}
            >
              <img src={img.url} alt={img.title} className="w-full h-56 object-cover" />
              <div className="px-5 py-3" style={{ background: "white", borderTop: "1px solid oklch(0.90 0.03 148)" }}>
                <p className="text-sm font-medium" style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.38 0.09 148)" }}>
                  {img.title}
                </p>
                <p className="text-xs mt-0.5" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 60)" }}>
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
