/*
 * DiagnosisSection — 頭皮診断チェックシート
 * 7問の質問に答えると薄毛タイプを診断し、LINE予約CTAへ誘導
 */
import { useState } from "react";

const LINE_URL = "https://lin.ee/oV9r3at";

const QUESTIONS = [
  {
    id: 1,
    text: "シャンプーのとき、抜け毛が気になりますか？",
    options: [
      { label: "毎回50本以上抜ける気がする", score: { stress: 1, blood: 1 } },
      { label: "以前より増えた気がする", score: { dry: 1, hormone: 1 } },
      { label: "あまり気にならない", score: {} },
    ],
  },
  {
    id: 2,
    text: "頭皮の状態はどちらに近いですか？",
    options: [
      { label: "乾燥してかゆみやフケが出やすい", score: { dry: 2 } },
      { label: "べたつきやすく臭いが気になる", score: { blood: 1, stress: 1 } },
      { label: "特に気にならない", score: { hormone: 1 } },
    ],
  },
  {
    id: 3,
    text: "最近、睡眠や食事の乱れ・強いストレスを感じていますか？",
    options: [
      { label: "かなり感じている", score: { stress: 2 } },
      { label: "少し感じている", score: { stress: 1 } },
      { label: "あまり感じていない", score: { dry: 1 } },
    ],
  },
  {
    id: 4,
    text: "薄毛が気になる部位はどこですか？",
    options: [
      { label: "頭頂部・つむじ周辺", score: { hormone: 2 } },
      { label: "生え際・前頭部", score: { blood: 2 } },
      { label: "全体的にボリュームが減った", score: { dry: 1, stress: 1 } },
    ],
  },
  {
    id: 5,
    text: "頭皮を触ったとき、どんな感触ですか？",
    options: [
      { label: "硬くて動かしにくい", score: { blood: 2 } },
      { label: "柔らかいが乾燥している", score: { dry: 2 } },
      { label: "普通（特に気にならない）", score: { hormone: 1 } },
    ],
  },
  {
    id: 6,
    text: "更年期・ホルモンバランスの変化を感じていますか？",
    options: [
      { label: "強く感じている", score: { hormone: 2 } },
      { label: "少し感じている", score: { hormone: 1, stress: 1 } },
      { label: "あまり感じていない", score: { blood: 1 } },
    ],
  },
  {
    id: 7,
    text: "これまで育毛ケアを試したことがありますか？",
    options: [
      { label: "市販の育毛剤を使ったが効果がなかった", score: { dry: 1, blood: 1 } },
      { label: "シャンプーを変えたが変化がなかった", score: { stress: 1, hormone: 1 } },
      { label: "何もしていない", score: { blood: 1 } },
    ],
  },
];

type ScoreKey = "dry" | "blood" | "stress" | "hormone";

const RESULTS: Record<ScoreKey, { type: string; emoji: string; desc: string; approach: string; color: string }> = {
  dry: {
    type: "乾燥・栄養不足型",
    emoji: "🌿",
    desc: "頭皮が乾燥し、毛根に必要な栄養が届きにくくなっています。土壌が乾いた畑のように、いくら良い成分を与えても浸透しない状態です。",
    approach: "「フルボ酸」配合の特殊シャンプーで頭皮の保湿環境を整え、栄養が届く土台を作るところからスタートします。初回に正しいシャンプー法を直接指導します。",
    color: "oklch(0.55 0.12 148)",
  },
  blood: {
    type: "血行不良・毛根疲弊型",
    emoji: "💧",
    desc: "頭皮が硬く、血流が滞っています。毛根への酸素・栄養供給が不足し、髪が細くなったり抜けやすくなっている状態です。",
    approach: "育毛専用の循環器と60分の極上ヘッドスパで、頭皮の血流を根本から改善します。マイクロスコープで毛細血管の状態を目で確認できます。",
    color: "oklch(0.45 0.12 220)",
  },
  stress: {
    type: "ストレス・自律神経型",
    emoji: "✨",
    desc: "ストレスや睡眠不足が自律神経を乱し、頭皮の血流低下と抜け毛増加を引き起こしています。心と髪の健康は深くつながっています。",
    approach: "施術中に寝落ちしてしまうほどの深いリラクゼーションで自律神経を整えながら、育毛ケアを同時に行います。「癒し」と「育毛」を両立できるのがヘアリズムの強みです。",
    color: "oklch(0.50 0.12 50)",
  },
  hormone: {
    type: "ホルモンバランス型",
    emoji: "🌸",
    desc: "更年期や加齢によるホルモンバランスの変化が、頭頂部やつむじ周辺の薄毛に影響しています。40代以上の女性に最も多いタイプです。",
    approach: "「ヒト幹細胞培養上清液」を毛根にダイレクト導入し、休止している毛母細胞を活性化します。薬ではなく自身の「育つ力」を引き出すアプローチで副作用ゼロです。",
    color: "oklch(0.50 0.12 330)",
  },
};

export default function DiagnosisSection() {
  const [step, setStep] = useState<"intro" | "quiz" | "result">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<ScoreKey, number>>({ dry: 0, blood: 0, stress: 0, hormone: 0 });

  const handleAnswer = (scoreAdd: Partial<Record<ScoreKey, number>>) => {
    const newScores = { ...scores };
    for (const key of Object.keys(scoreAdd) as ScoreKey[]) {
      newScores[key] = (newScores[key] || 0) + (scoreAdd[key] || 0);
    }
    setScores(newScores);
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setStep("result");
    }
  };

  const getTopType = (): ScoreKey => {
    return (Object.keys(scores) as ScoreKey[]).reduce((a, b) => (scores[a] >= scores[b] ? a : b));
  };

  const progress = ((currentQ) / QUESTIONS.length) * 100;

  return (
    <section
      id="diagnosis"
      style={{ background: "oklch(0.97 0.02 148)" }}
      className="py-20 px-4"
    >
      <div className="container max-w-2xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-10">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.38 0.10 148)" }}
          >
            ── DIAGNOSIS ──
          </p>
          <h2
            className="text-2xl md:text-3xl font-semibold mb-3"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.07 148)" }}
          >
            あなたの薄毛タイプを<br />無料で診断します
          </h2>
          <p
            className="text-sm"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.04 148)", fontWeight: 300 }}
          >
            7問に答えるだけ。約1分で完了します。
          </p>
        </div>

        {/* イントロ */}
        {step === "intro" && (
          <div className="text-center">
            <div
              className="p-8 rounded-xl mb-8"
              style={{
                background: "white",
                border: "2px solid oklch(0.65 0.12 148 / 0.3)",
                boxShadow: "0 4px 30px oklch(0.38 0.10 148 / 0.08)",
              }}
            >
              <p className="text-4xl mb-4">🔍</p>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.07 148)" }}
              >
                4つの薄毛タイプから<br />あなたに合ったケアを診断
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-6 text-left">
                {[
                  { emoji: "🌿", label: "乾燥・栄養不足型" },
                  { emoji: "💧", label: "血行不良・毛根疲弊型" },
                  { emoji: "✨", label: "ストレス・自律神経型" },
                  { emoji: "🌸", label: "ホルモンバランス型" },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-2 p-3 rounded-lg"
                    style={{ background: "oklch(0.95 0.03 148)" }}
                  >
                    <span className="text-xl">{t.emoji}</span>
                    <span
                      className="text-xs font-medium"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.30 0.08 148)" }}
                    >
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="text-xs mb-6"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 148)" }}
              >
                診断結果に合わせた最適なアドバイスをお伝えします。
              </p>
              <button
                onClick={() => setStep("quiz")}
                className="w-full py-4 px-6 text-base font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                style={{
                  background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)",
                  border: "2px solid oklch(0.65 0.12 80)",
                  fontFamily: "'Noto Sans JP', sans-serif",
                  boxShadow: "0 4px 20px oklch(0.28 0.08 148 / 0.3)",
                }}
              >
                診断スタート →
              </button>
            </div>
          </div>
        )}

        {/* クイズ */}
        {step === "quiz" && (
          <div>
            {/* プログレスバー */}
            <div className="mb-6">
              <div className="flex justify-between text-xs mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 148)" }}>
                <span>質問 {currentQ + 1} / {QUESTIONS.length}</span>
                <span>{Math.round(((currentQ + 1) / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full h-2 rounded-full" style={{ background: "oklch(0.90 0.03 148)" }}>
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${((currentQ + 1) / QUESTIONS.length) * 100}%`,
                    background: "linear-gradient(90deg, oklch(0.38 0.10 148), oklch(0.55 0.12 148))",
                  }}
                />
              </div>
            </div>

            <div
              className="p-6 md:p-8 rounded-xl"
              style={{
                background: "white",
                border: "1px solid oklch(0.65 0.12 148 / 0.2)",
                boxShadow: "0 4px 30px oklch(0.38 0.10 148 / 0.08)",
              }}
            >
              <p
                className="text-base md:text-lg font-medium mb-6 leading-relaxed"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.07 148)" }}
              >
                Q{currentQ + 1}. {QUESTIONS[currentQ].text}
              </p>
              <div className="space-y-3">
                {QUESTIONS[currentQ].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.score)}
                    className="w-full text-left px-5 py-4 rounded-lg text-sm transition-all duration-150 hover:scale-[1.01]"
                    style={{
                      background: "oklch(0.97 0.02 148)",
                      border: "1px solid oklch(0.65 0.12 148 / 0.25)",
                      fontFamily: "'Noto Sans JP', sans-serif",
                      color: "oklch(0.30 0.06 148)",
                      fontWeight: 300,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.92 0.05 148)";
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "oklch(0.38 0.10 148)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.97 0.02 148)";
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "oklch(0.65 0.12 148 / 0.25)";
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 結果 */}
        {step === "result" && (() => {
          const topType = getTopType();
          const result = RESULTS[topType];
          return (
            <div>
              <div
                className="p-6 md:p-8 rounded-xl mb-6"
                style={{
                  background: "white",
                  border: `2px solid ${result.color}`,
                  boxShadow: `0 8px 40px ${result.color}22`,
                }}
              >
                <div className="text-center mb-6">
                  <p className="text-5xl mb-3">{result.emoji}</p>
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-2"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: result.color }}
                  >
                    あなたの薄毛タイプ
                  </p>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-1"
                    style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.07 148)" }}
                  >
                    {result.type}
                  </h3>
                </div>

                <div
                  className="p-4 rounded-lg mb-4"
                  style={{ background: "oklch(0.96 0.02 148)" }}
                >
                  <p
                    className="text-xs font-semibold mb-2"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: result.color }}
                  >
                    ▶ あなたの頭皮の状態
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.35 0.04 148)", fontWeight: 300 }}
                  >
                    {result.desc}
                  </p>
                </div>

                <div
                  className="p-4 rounded-lg mb-6"
                  style={{ background: `${result.color}11`, border: `1px solid ${result.color}44` }}
                >
                  <p
                    className="text-xs font-semibold mb-2"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: result.color }}
                  >
                    ▶ ヘアリズムでのアプローチ
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.35 0.04 148)", fontWeight: 300 }}
                  >
                    {result.approach}
                  </p>
                </div>

                <div
                  className="p-4 rounded-lg mb-6 text-center"
                  style={{ background: "oklch(0.65 0.12 80 / 0.10)", border: "1px solid oklch(0.65 0.12 80 / 0.4)" }}
                >
                  <p
                    className="text-sm font-bold mb-1"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.38 0.10 148)" }}
                  >
                    初回カウンセリングで詳しく診断できます
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.50 0.04 148)", fontWeight: 300 }}
                  >
                    マイクロスコープで頭皮・毛根を実際に確認し、<br />あなたに最適なプランをご提案します。
                  </p>
                </div>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 px-6 text-sm font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.01] mb-3"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)",
                    border: "2px solid oklch(0.65 0.12 80)",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    boxShadow: "0 4px 20px oklch(0.28 0.08 148 / 0.3)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 48 48" fill="white">
                    <path d="M24 4C12.95 4 4 11.82 4 21.5c0 5.84 3.17 11.02 8.12 14.38L10 38l4.8-2.4c2.88.88 5.96 1.4 9.2 1.4 11.05 0 20-7.82 20-17.5S35.05 4 24 4z"/>
                  </svg>
                  LINEで初回4,980円の予約をする →
                </a>

                <button
                  onClick={() => { setStep("intro"); setCurrentQ(0); setScores({ dry: 0, blood: 0, stress: 0, hormone: 0 }); }}
                  className="w-full py-3 text-xs transition-opacity hover:opacity-70"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.60 0.03 148)" }}
                >
                  もう一度診断する
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
