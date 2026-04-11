/*
 * CurriculumSection — LP最終確定版
 * 初めての方へ：6ステップ施術フロー + 特別価格 + 3大特典
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LINE_URL = "https://lin.ee/oV9r3at";
const TEL = "0795-44-1099";

const steps = [
  {
    num: "STEP 1",
    title: "原因解明カウンセリング（30分）",
    desc: "まずは、あなたの生活習慣、食生活、過去のケア歴などをじっくり伺います。「遺伝だから」と諦めていたことが、実は生活習慣の乱れが原因だった…というケースも少なくありません。",
  },
  {
    num: "STEP 2",
    title: "マイクロスコープ頭皮精密診断",
    desc: "200倍に拡大できる特殊なスコープで、あなたの頭皮をモニターに映し出します。「毛穴が皮脂でどう詰まっているか」「髪が細くなっている部分の状態」をご自身の目で確認していただきます。多くの方が「えっ、こんなになってるの？」と驚かれます。",
  },
  {
    num: "STEP 3",
    title: "毛根＆血流チェック",
    desc: "お持ちいただいた抜け毛の毛根の形から危険度を判定。さらに、専用スコープで頭皮の血流を確認します。血が通っていなければ、栄養は届きません。現状を客観的な数値と映像で分析します。",
  },
  {
    num: "STEP 4",
    title: "育毛専用ヘッドスパ体験（90分）",
    desc: "フルボ酸洗浄で毛穴の奥の汚れを優しく除去。育毛循環器ケアで頭皮を芯から温めほぐします。深層マッサージで頭だけでなく、首・肩・肩甲骨までアプローチし、血流のダムを解放します。あまりの気持ちよさに、9割以上の方が眠ってしまわれます。",
  },
  {
    num: "STEP 5",
    title: "「抜け毛が止まる」魔法の洗い方指導",
    desc: "実は、ほとんどの方が「髪が抜けるシャンプーの仕方」をしています。当日は、プロが実践している頭皮を守りながら洗う方法を実演指導します。これを知るだけでも、明日からの抜け毛が変わります。",
  },
  {
    num: "STEP 6",
    title: "診断結果とプランのご提案",
    desc: "全てのデータを元に、あなたの髪を復活させるための最短ルートをご提案します。あなたに必要のないコースは一切提案しません。また、強引な勧誘も絶対にいたしません。",
  },
];

const bonuses = [
  { icon: "📖", title: "「自宅でできる育毛バイブル」（非売品PDF）", desc: "食事・睡眠・マッサージの秘訣を凝縮。" },
  { icon: "💬", title: "LINE無制限サポート権（30日間）", desc: "小さな不安もすぐプロに相談できます。" },
  { icon: "🎟️", title: "次回割引チケット（5,000円分）", desc: "継続ケアを応援します。" },
];

export default function CurriculumSection() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: stepsRef } = useScrollAnimation();
  const { ref: priceRef } = useScrollAnimation();
  const { ref: bonusRef } = useScrollAnimation();

  return (
    <section id="curriculum">

      {/* 初めての方へ ヘッダー */}
      <div className="py-16 px-4" style={{ background: "oklch(0.97 0.01 148)" }}>
        <div className="container max-w-4xl mx-auto">
          <div ref={headerRef} className="fade-up text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
              ── FIRST VISIT ──
            </p>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
            >
              「でも、いきなり高額な契約は怖い…」<br />
              <span style={{ color: "oklch(0.38 0.10 148)" }}>そう思うのは当然ですよね。</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.02 60)", fontWeight: 300 }}>
              だからこそ、あなたの髪が薄くなっている原因を解明し、解決策を持ち帰っていただくための<br />
              オリジナル検査と育毛体験をご用意しました。
            </p>
          </div>
        </div>
      </div>

      {/* 6ステップ */}
      <div className="pb-16 px-4" style={{ background: "oklch(0.97 0.01 148)" }}>
        <div className="container max-w-4xl mx-auto">
          <div ref={stepsRef} className="fade-up">
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className="flex gap-4 p-5 rounded-lg"
                  style={{ background: "#fff", border: "1px solid oklch(0.88 0.03 148)", boxShadow: "0 2px 12px oklch(0.88 0.03 148 / 0.4)" }}
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "linear-gradient(135deg, oklch(0.22 0.08 148) 0%, oklch(0.38 0.10 148) 100%)",
                        color: "oklch(0.88 0.14 80)",
                        fontFamily: "'Noto Sans JP', sans-serif",
                        border: "1px solid oklch(0.65 0.12 80 / 0.4)"
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold tracking-wider mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                      {s.num}
                    </p>
                    <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}>
                      {s.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.02 60)", fontWeight: 300 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 特別価格 */}
      <div className="py-16 px-4" style={{ background: "oklch(0.14 0.06 148)" }}>
        <div className="container max-w-3xl mx-auto">
          <div ref={priceRef} className="fade-up">
            <div className="text-center mb-8">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                ── SPECIAL OFFER ──
              </p>
              <h2
                className="text-2xl md:text-3xl font-semibold mb-3 text-white"
                style={{ fontFamily: "'Shippori Mincho', serif" }}
              >
                【2026年3月末までの特別オファー】
              </h2>
              <p className="text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.03 148)", fontWeight: 300 }}>
                本来、これだけの精密な検査と90分の施術を行うには、以下の費用がかかります。
              </p>
            </div>

            <div
              className="p-6 md:p-8 rounded-lg"
              style={{ background: "oklch(0.20 0.08 148 / 0.9)", border: "1px solid oklch(0.65 0.12 80 / 0.5)" }}
            >
              <div className="space-y-2 mb-5">
                {[
                  { label: "初回カウンセリング・診断料", price: "10,780円" },
                  { label: "育毛ヘッドスパ（90分）", price: "16,500円" },
                  { label: "ホームケア用頭皮化粧水", price: "4,180円" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-sm line-through" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.60 0.03 148)" }}>
                      {item.label}
                    </span>
                    <span className="text-sm line-through" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 148)" }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="pt-4 mb-5"
                style={{ borderTop: "1px solid oklch(0.65 0.12 80 / 0.3)" }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm line-through" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.60 0.03 148)" }}>
                    合計（正規料金）
                  </span>
                  <span className="text-sm line-through" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 148)" }}>
                    33,110円（税込）
                  </span>
                </div>
              </div>

              <div
                className="p-5 rounded-lg text-center"
                style={{ background: "linear-gradient(135deg, oklch(0.28 0.10 148) 0%, oklch(0.35 0.11 148) 100%)", border: "1px solid oklch(0.65 0.12 80 / 0.6)" }}
              >
                <p className="text-xs mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.80 0.10 80)" }}>
                  毎月10名様限定 モニター特別価格
                </p>
                <p
                  className="text-5xl font-bold mb-1"
                  style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.88 0.14 80)" }}
                >
                  4,980円
                </p>
                <p className="text-sm text-white mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  （税込）なんと<strong style={{ color: "oklch(0.88 0.14 80)" }}>85%OFF</strong>
                </p>
                <p className="text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.03 148)" }}>
                  ※2026年3月末まで・定員に達し次第終了
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.80 0.10 80)" }}>
                  ＜この価格に含まれるもの＞
                </p>
                {[
                  "精密頭皮診断（マイクロスコープ・血流・毛根）",
                  "生活習慣・ケア方法の個別アドバイス",
                  "90分育毛ヘッドスパ体験（フルコース）",
                  "ホームケア用頭皮化粧水（現品プレゼント）",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 mb-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" fill="oklch(0.65 0.12 80 / 0.3)" stroke="oklch(0.65 0.12 80)" strokeWidth="1"/>
                      <path d="M4 7l2 2 4-4" stroke="oklch(0.88 0.14 80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs text-white" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-5 p-3 rounded text-center"
                style={{ background: "oklch(0.65 0.12 80 / 0.15)", border: "1px solid oklch(0.65 0.12 80 / 0.4)" }}
              >
                <p className="text-xs font-bold" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.88 0.14 80)" }}>
                  ⚠️ 今月の残り枠：あと5名様
                </p>
                <p className="text-[10px] mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.03 148)" }}>
                  ※予約が埋まり次第、今月の受付は終了します
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
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
                まずはLINEで「無料相談・予約」をする
              </a>
              <a
                href={"tel:" + TEL}
                className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-sm transition-all duration-200 hover:opacity-90"
                style={{
                  background: "transparent",
                  border: "1px solid oklch(0.65 0.12 80 / 0.6)",
                  color: "oklch(0.88 0.14 80)",
                  fontFamily: "'Noto Sans JP', sans-serif"
                }}
              >
                📞 電話で相談・予約する：{TEL}
              </a>
            </div>
            <p className="text-center text-xs mt-2" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 148)" }}>
              10:00〜19:00／月・日定休
            </p>
          </div>
        </div>
      </div>

      {/* 3大特典 */}
      <div className="py-16 px-4" style={{ background: "oklch(0.97 0.01 148)" }}>
        <div className="container max-w-3xl mx-auto">
          <div ref={bonusRef} className="fade-up">
            <div className="text-center mb-8">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                ── BONUS ──
              </p>
              <h2
                className="text-2xl md:text-3xl font-semibold"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
              >
                さらに今だけ！<span style={{ color: "oklch(0.38 0.10 148)" }}>3大特典</span>
              </h2>
              <p className="text-sm mt-2" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.02 60)", fontWeight: 300 }}>
                勇気を出して予約された方に、プレゼントをご用意しました。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {bonuses.map((b, i) => (
                <div
                  key={b.title}
                  className="p-5 rounded-lg text-center"
                  style={{ background: "#fff", border: "1px solid oklch(0.88 0.03 148)", boxShadow: "0 2px 12px oklch(0.88 0.03 148 / 0.4)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl mx-auto mb-3"
                    style={{ background: "oklch(0.38 0.10 148 / 0.10)", border: "1px solid oklch(0.65 0.12 80 / 0.4)" }}
                  >
                    {b.icon}
                  </div>
                  <p className="text-[10px] font-bold mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                    特典 {i + 1}
                  </p>
                  <p className="text-xs font-semibold mb-2" style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}>
                    {b.title}
                  </p>
                  <p className="text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.02 60)", fontWeight: 300 }}>
                    {b.desc}
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
