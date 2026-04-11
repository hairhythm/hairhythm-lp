/*
 * CurriculumSection — 育毛専門美容室ヘアリズム LP
 * Design: Deep Forest Green x Gold — 初回体験コース詳細
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LINE_URL = "https://lin.ee/oV9r3at";

function getMonthEnd(): string {
  const now = new Date();
  const month = now.getMonth() + 1;
  return `${month}月末`;
}

const steps = [
  {
    num: "01",
    title: "ご予約",
    desc: "LINEまたはお電話でご予約ください。完全予約制のため、ゆったりとした空間でご対応できます。",
    icon: "📱",
  },
  {
    num: "02",
    title: "初回カウンセリング",
    desc: "お悩みや生活習慣、これまでのケア方法などを丁寧にヒアリング。マイクロスコープで頭皮と毛根の状態を診断します。",
    icon: "🔬",
    price: "通常 10,780円",
  },
  {
    num: "03",
    title: "潤うヘッドスパ",
    desc: "頭皮の血流を促進し、毛根に栄養を届ける専門的なヘッドスパ施術。頭皮がすっきりし、髪にハリと艶が戻ります。",
    icon: "💆",
    price: "通常 18,150円",
  },
  {
    num: "04",
    title: "ホームケア化粧水プレゼント",
    desc: "サロンケアの効果を持続させるための頭皮用化粧水をお持ち帰りいただけます。自宅でのケア方法も丁寧にご説明します。",
    icon: "🌿",
    price: "通常 4,180円",
  },
  {
    num: "05",
    title: "今後のケアプランご提案",
    desc: "診断結果をもとに、あなたに最適なケアプランをご提案します。無理な押し売りは一切ありません。",
    icon: "📋",
  },
];

export default function CurriculumSection() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: stepsRef } = useScrollAnimation();
  const { ref: priceRef } = useScrollAnimation();

  return (
    <section
      id="curriculum"
      className="py-20 md:py-28"
      style={{ background: "oklch(0.99 0.005 90)" }}
    >
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="fade-up text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="sage-line" />
            <span className="section-label">First Visit</span>
            <div className="sage-line" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
          >
            初めての方へ
          </h2>
          <p
            className="text-sm leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
          >
            ヘアリズムでは、まずはじめにカウンセリングからスタートしています。<br />
            あなたの髪と頭皮の状態を正確に把握することが、効果的なケアへの第一歩です。
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="fade-up mb-16">
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-8 top-8 bottom-8 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, oklch(0.72 0.12 80 / 0.5), oklch(0.38 0.09 148 / 0.3))" }}
            />
            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-5 items-start"
                  style={{
                    opacity: 1,
                    animation: `fadeInUp 0.5s ease ${i * 0.1}s both`
                  }}
                >
                  {/* Step number circle */}
                  <div
                    className="w-16 h-16 rounded-full flex-shrink-0 flex flex-col items-center justify-center relative z-10"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)",
                      border: "2px solid oklch(0.65 0.12 80 / 0.6)",
                      boxShadow: "0 4px 16px oklch(0.28 0.08 148 / 0.3)"
                    }}
                  >
                    <span className="text-lg" role="img" aria-label={step.title}>{step.icon}</span>
                    <span
                      className="text-[9px] font-bold"
                      style={{ color: "oklch(0.80 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      STEP {step.num}
                    </span>
                  </div>
                  {/* Content */}
                  <div
                    className="flex-1 p-5"
                    style={{
                      background: "white",
                      border: "1px solid oklch(0.88 0.04 148)",
                      borderRadius: "4px",
                      boxShadow: "0 2px 12px oklch(0.38 0.09 148 / 0.06)"
                    }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3
                        className="text-base font-semibold"
                        style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.28 0.09 148)" }}
                      >
                        {step.title}
                      </h3>
                      {step.price && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-sm flex-shrink-0"
                          style={{
                            background: "oklch(0.95 0.03 148)",
                            color: "oklch(0.38 0.09 148)",
                            fontFamily: "'Noto Sans JP', sans-serif",
                            border: "1px solid oklch(0.85 0.05 148)"
                          }}
                        >
                          {step.price}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price highlight */}
        <div ref={priceRef} className="fade-up">
          <div
            className="max-w-2xl mx-auto p-8 text-center"
            style={{
              background: "linear-gradient(135deg, oklch(0.22 0.08 148) 0%, oklch(0.28 0.09 148) 100%)",
              border: "1px solid oklch(0.65 0.12 80 / 0.6)",
              borderRadius: "4px",
              boxShadow: "0 8px 32px oklch(0.22 0.08 148 / 0.4)"
            }}
          >
            <p
              className="text-xs tracking-[0.2em] mb-3"
              style={{ color: "oklch(0.72 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {getMonthEnd()}まで限定
            </p>
            <p
              className="text-base mb-4"
              style={{ color: "oklch(0.90 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              初回カウンセリング＋潤うヘッドスパ＋ホームケア化粧水
            </p>
            <div className="flex items-center justify-center gap-4 mb-2">
              <span
                className="text-base line-through"
                style={{ color: "oklch(0.60 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                通常 33,110円
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-sm"
                style={{ background: "oklch(0.65 0.12 80)", color: "oklch(0.18 0.06 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                期間限定
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-2 mb-6">
              <span
                className="text-5xl md:text-6xl font-bold"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.88 0.12 80)" }}
              >
                4,980
              </span>
              <span
                className="text-xl"
                style={{ color: "oklch(0.80 0.10 80)", fontFamily: "'Shippori Mincho', serif" }}
              >
                円
              </span>
              <span
                className="text-sm"
                style={{ color: "oklch(0.70 0.06 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                （税込）
              </span>
            </div>
            <p
              className="text-xs mb-6"
              style={{ color: "oklch(0.70 0.06 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              ※ 2026年5月末まで。まずはあなたの髪と頭皮の状態を知っていただきたいので、気軽にお越しいただける金額に設定しました。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: "white",
                color: "oklch(0.28 0.09 148)",
                border: "1px solid oklch(0.65 0.12 80)",
                fontFamily: "'Noto Sans JP', sans-serif",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)"
              }}
            >
              <svg width="18" height="18" viewBox="0 0 48 48" fill="oklch(0.28 0.09 148)">
                <path d="M24 4C12.95 4 4 11.82 4 21.5c0 5.84 3.17 11.02 8.12 14.38L10 38l4.8-2.4c2.88.88 5.96 1.4 9.2 1.4 11.05 0 20-7.82 20-17.5S35.05 4 24 4z"/>
              </svg>
              <span style={{ color: "oklch(0.28 0.09 148)" }}>LINEで予約する（無料）</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
