/*
 * DiagnosisSection — 頭皮診断チェックシート（改善版）
 * 改善A: 1問1タイプの専用設計
 * 改善B: 複合型診断結果の追加
 * 改善C: 改善期間目安・ワンポイントアドバイス・緊急度バッジの追加
 */
import { useState } from "react";

const LINE_URL = "https://lin.ee/oV9r3at";

type ScoreKey = "dry" | "blood" | "stress" | "hormone";

// 改善A: 1問1タイプの専用設計
const QUESTIONS = [
  {
    id: 1,
    text: "薄毛・ボリューム不足が気になる場所はどこですか？",
    note: "最も気になる場所を選んでください",
    options: [
      { label: "頭頂部・つむじ周辺が透けてきた", score: { hormone: 2 } },
      { label: "生え際・前頭部が後退してきた", score: { blood: 2 } },
      { label: "全体的にペタンとしてボリュームがなくなった", score: { dry: 1, stress: 1 } },
    ],
  },
  {
    id: 2,
    text: "頭皮の状態はどちらに近いですか？",
    note: "触ったときの感触で選んでください",
    options: [
      { label: "乾燥してかゆみ・フケが出やすい", score: { dry: 2 } },
      { label: "べたつきやすく、臭いが気になる", score: { blood: 1, stress: 1 } },
      { label: "特に気にならないが、最近髪が細くなった気がする", score: { hormone: 1 } },
    ],
  },
  {
    id: 3,
    text: "頭皮を指で押したとき、どんな感触ですか？",
    note: "耳の上あたりを指で押してみてください",
    options: [
      { label: "硬くて動かしにくい・押すと痛い", score: { blood: 2 } },
      { label: "柔らかいが、乾燥している感じがある", score: { dry: 2 } },
      { label: "普通（特に気にならない）", score: { hormone: 1 } },
    ],
  },
  {
    id: 4,
    text: "最近、睡眠・食欲・気力の変化はありますか？",
    note: "3ヶ月以内の変化で選んでください",
    options: [
      { label: "かなりある（眠れない・食欲がない・やる気が出ない）", score: { stress: 2 } },
      { label: "少しある（時々眠れない・疲れやすい）", score: { stress: 1 } },
      { label: "あまりない", score: { dry: 1 } },
    ],
  },
  {
    id: 5,
    text: "更年期・生理不順・産後など、ホルモンの変化を感じていますか？",
    note: "40代以上の方に多い原因のひとつです",
    options: [
      { label: "強く感じている（のぼせ・発汗・不眠など）", score: { hormone: 2 } },
      { label: "少し感じている", score: { hormone: 1, stress: 1 } },
      { label: "あまり感じていない", score: { blood: 1 } },
    ],
  },
  {
    id: 6,
    text: "肩こり・首こりはありますか？",
    note: "頭皮の血流と深く関係しています",
    options: [
      { label: "毎日ひどい・慢性的に悩んでいる", score: { blood: 2 } },
      { label: "時々ある", score: { blood: 1, stress: 1 } },
      { label: "あまりない", score: { dry: 1 } },
    ],
  },
  {
    id: 7,
    text: "髪のパサつき・枝毛・切れ毛は気になりますか？",
    note: "頭皮の乾燥状態を確認します",
    options: [
      { label: "かなり気になる（広がりやすく、まとまらない）", score: { dry: 2 } },
      { label: "少し気になる", score: { dry: 1, hormone: 1 } },
      { label: "あまり気にならない", score: { blood: 1 } },
    ],
  },
];

// 改善C: 期間目安・ワンポイント・緊急度を追加
const RESULTS: Record<ScoreKey, {
  type: string;
  emoji: string;
  desc: string;
  approach: string;
  color: string;
  urgency: "high" | "medium" | "normal";
  duration: string;
  tip: string;
}> = {
  dry: {
    type: "乾燥・栄養不足型",
    emoji: "🌿",
    desc: "頭皮が乾燥し、毛根に必要な栄養が届きにくくなっています。土壌が乾いた畑のように、いくら良い成分を与えても浸透しない状態です。パサつきやフケが多い方に多く見られるタイプです。",
    approach: "「フルボ酸」配合の特殊シャンプーで頭皮の保湿環境を整え、栄養が届く土台を作るところからスタートします。初回に正しいシャンプー法を直接指導します。",
    color: "oklch(0.42 0.12 148)",
    urgency: "medium",
    duration: "このタイプは平均2〜3ヶ月でハリ・コシの変化を実感される方が多いです。",
    tip: "今夜から試せること：シャンプー前に乾いた状態で、指の腹を使って頭皮を2分間やさしくほぐしてから洗うと、汚れが落ちやすくなります。",
  },
  blood: {
    type: "血行不良・毛根疲弊型",
    emoji: "💧",
    desc: "頭皮が硬く、血流が滞っています。毛根への酸素・栄養供給が不足し、髪が細くなったり抜けやすくなっている状態です。肩こりや首こりが慢性化している方に多く見られます。",
    approach: "育毛専用の循環器と60分の極上ヘッドスパで、頭皮の血流を根本から改善します。マイクロスコープで毛細血管の状態を目で確認できます。",
    color: "oklch(0.40 0.12 220)",
    urgency: "high",
    duration: "このタイプは血流が改善されると比較的早く変化が出やすく、平均1〜2ヶ月で頭皮の柔らかさを実感される方が多いです。",
    tip: "今夜から試せること：お風呂上がりに、両手の指を頭皮に当てて「頭皮を動かす」ように1分間マッサージしてください。頭皮が動けば血流が戻ってきているサインです。",
  },
  stress: {
    type: "ストレス・自律神経型",
    emoji: "✨",
    desc: "ストレスや睡眠不足が自律神経を乱し、頭皮の血流低下と抜け毛増加を引き起こしています。心と髪の健康は深くつながっています。「最近急に抜け毛が増えた」という方に多いタイプです。",
    approach: "施術中に寝落ちしてしまうほどの深いリラクゼーションで自律神経を整えながら、育毛ケアを同時に行います。「癒し」と「育毛」を両立できるのがヘアリズムの強みです。",
    color: "oklch(0.45 0.12 50)",
    urgency: "high",
    duration: "このタイプはストレスの原因が続く限り悪化しやすいため、早めのケアをおすすめします。施術後から抜け毛が減ったと感じる方も多いです。",
    tip: "今夜から試せること：就寝前に、ぬるめのお湯（38〜40℃）で10分間入浴し、副交感神経を優位にしてから眠ると、頭皮への血流が改善されます。",
  },
  hormone: {
    type: "ホルモンバランス型",
    emoji: "🌸",
    desc: "更年期や加齢によるホルモンバランスの変化が、頭頂部やつむじ周辺の薄毛に影響しています。40代以上の女性に最も多いタイプです。薬に頼らず自然な方法で改善できます。",
    approach: "「ヒト幹細胞培養上清液」を毛根にダイレクト導入し、休止している毛母細胞を活性化します。薬ではなく自身の「育つ力」を引き出すアプローチで副作用ゼロです。",
    color: "oklch(0.45 0.12 330)",
    urgency: "medium",
    duration: "このタイプは3ヶ月を目安に、頭頂部のボリュームや産毛の変化を実感される方が多いです。継続ケアで着実に改善します。",
    tip: "今夜から試せること：大豆製品（豆腐・納豆・豆乳）を積極的に摂ることで、植物性エストロゲンが女性ホルモンの低下を緩やかにサポートします。",
  },
};

// 改善B: 複合型診断結果
const COMBINED_RESULTS: Record<string, {
  type: string;
  emoji: string;
  desc: string;
  approach: string;
  color: string;
  urgency: "high" | "medium" | "normal";
  duration: string;
  tip: string;
}> = {
  "hormone+stress": {
    type: "更年期×ストレス複合型",
    emoji: "🌸✨",
    desc: "ホルモン変化とストレスが重なっている、40代以上の女性に最も多いパターンです。どちらか一方だけにアプローチしても改善しにくく、両方を同時にケアすることが重要です。",
    approach: "ヒト幹細胞培養上清液による細胞活性と、深いリラクゼーションヘッドスパを組み合わせた複合アプローチを行います。薬に頼らず、自身の力を引き出します。",
    color: "oklch(0.42 0.12 10)",
    urgency: "high",
    duration: "複合型は単独型より時間がかかることもありますが、2〜4ヶ月でボリュームの変化を実感される方が多いです。",
    tip: "今夜から試せること：就寝前に温かい飲み物（ノンカフェイン）を飲みながら、5分間だけ「今日よかったこと」を3つ書き出してみてください。自律神経が整い、ホルモンバランスにも好影響です。",
  },
  "dry+blood": {
    type: "乾燥×血行不良複合型",
    emoji: "🌿💧",
    desc: "頭皮が乾燥して硬くなっているパターンです。乾燥により頭皮が固まり、さらに血流が悪化するという悪循環に陥っています。土壌改良と血流改善を同時に行うことが重要です。",
    approach: "フルボ酸による保湿と、循環器を使った血流改善を組み合わせた施術を行います。頭皮が柔らかくなることで、栄養が行き届くようになります。",
    color: "oklch(0.40 0.12 180)",
    urgency: "medium",
    duration: "このタイプは頭皮の柔らかさが戻ると変化が出やすく、平均2〜3ヶ月で実感される方が多いです。",
    tip: "今夜から試せること：シャンプー後にドライヤーで完全に乾かすことが重要です。半乾きのまま寝ると頭皮の雑菌が繁殖し、乾燥と血行不良を悪化させます。",
  },
  "stress+blood": {
    type: "ストレス×血行不良複合型",
    emoji: "✨💧",
    desc: "ストレスが血管を収縮させ、頭皮の血流を悪化させているパターンです。緊張状態が続くことで頭皮が硬くなり、毛根への栄養供給が慢性的に不足しています。",
    approach: "深いリラクゼーションで交感神経の緊張を解きほぐしながら、育毛専用の循環器で血流を促進します。施術後に「頭が軽くなった」と感じる方が多いです。",
    color: "oklch(0.40 0.12 260)",
    urgency: "high",
    duration: "このタイプは施術後から頭皮の軽さを実感される方が多く、1〜2ヶ月で抜け毛の減少を感じる方が多いです。",
    tip: "今夜から試せること：肩と首を10秒かけてゆっくり回すストレッチを、1日3回行ってください。肩こりが緩むと頭皮への血流が改善されます。",
  },
  "dry+hormone": {
    type: "乾燥×ホルモンバランス複合型",
    emoji: "🌿🌸",
    desc: "ホルモン変化によって頭皮が乾燥しているパターンです。女性ホルモンの低下は頭皮の保湿機能を低下させるため、乾燥と薄毛が同時に進行しやすい状態です。",
    approach: "保湿環境を整えるホームケアと、ヒト幹細胞培養上清液による細胞活性を組み合わせます。頭皮の潤いが戻ることで、毛根が栄養を受け取りやすくなります。",
    color: "oklch(0.42 0.12 0)",
    urgency: "medium",
    duration: "このタイプは保湿ケアを継続することで、2〜3ヶ月でハリとボリュームの変化を実感される方が多いです。",
    tip: "今夜から試せること：頭皮用化粧水を就寝前に頭頂部に数滴つけて、指の腹でやさしくなじませてください。朝のパサつきが変わってきます。",
  },
};

const URGENCY_LABELS = {
  high: { label: "早めのケアをおすすめします", color: "oklch(0.55 0.18 30)", bg: "oklch(0.97 0.04 30)" },
  medium: { label: "継続ケアで改善できます", color: "oklch(0.42 0.12 148)", bg: "oklch(0.96 0.03 148)" },
  normal: { label: "予防ケアを始めましょう", color: "oklch(0.45 0.08 220)", bg: "oklch(0.96 0.02 220)" },
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

  // 改善B: 複合型判定ロジック
  const getResult = () => {
    const sorted = (Object.keys(scores) as ScoreKey[]).sort((a, b) => scores[b] - scores[a]);
    const top1 = sorted[0];
    const top2 = sorted[1];
    const diff = scores[top1] - scores[top2];

    // 1位と2位の差が1以内なら複合型
    if (diff <= 1 && scores[top1] > 0) {
      const key1 = [top1, top2].sort().join("+");
      if (COMBINED_RESULTS[key1]) {
        return { combined: true, result: COMBINED_RESULTS[key1] };
      }
    }
    return { combined: false, result: RESULTS[top1] };
  };

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
                5つの薄毛タイプから<br />あなたに合ったケアを診断
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-4 text-left">
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
              <div
                className="flex items-center gap-2 p-3 rounded-lg mb-6"
                style={{ background: "oklch(0.95 0.03 10)" }}
              >
                <span className="text-xl">🌸✨</span>
                <span
                  className="text-xs font-medium"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.35 0.08 10)" }}
                >
                  複合型（2つの原因が重なっているケース）
                </span>
              </div>
              <p
                className="text-xs mb-6"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 148)" }}
              >
                診断結果に合わせた改善期間の目安と、<br />今夜からできるホームケアアドバイスをお伝えします。
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
                className="text-base md:text-lg font-medium mb-2 leading-relaxed"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.07 148)" }}
              >
                Q{currentQ + 1}. {QUESTIONS[currentQ].text}
              </p>
              {QUESTIONS[currentQ].note && (
                <p
                  className="text-xs mb-5"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.60 0.04 148)", fontWeight: 300 }}
                >
                  ※ {QUESTIONS[currentQ].note}
                </p>
              )}
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
          const { combined, result } = getResult();
          const urgencyInfo = URGENCY_LABELS[result.urgency];
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
                {/* タイプ表示 */}
                <div className="text-center mb-5">
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-2"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: result.color }}
                  >
                    {combined ? "あなたの薄毛タイプ（複合型）" : "あなたの薄毛タイプ"}
                  </p>
                  <div className="text-3xl mb-2">{result.emoji}</div>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-3"
                    style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.07 148)" }}
                  >
                    {result.type}
                  </h3>

                  {/* 改善C: 緊急度バッジ */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                    style={{
                      background: urgencyInfo.bg,
                      color: urgencyInfo.color,
                      border: `1px solid ${urgencyInfo.color}44`,
                      fontFamily: "'Noto Sans JP', sans-serif",
                    }}
                  >
                    {result.urgency === "high" ? "⚠️" : "✅"} {urgencyInfo.label}
                  </div>
                </div>

                {/* 頭皮の状態 */}
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

                {/* 改善C: 改善期間の目安 */}
                <div
                  className="p-4 rounded-lg mb-4"
                  style={{ background: "oklch(0.65 0.12 80 / 0.08)", border: "1px solid oklch(0.65 0.12 80 / 0.3)" }}
                >
                  <p
                    className="text-xs font-semibold mb-2"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.42 0.10 80)" }}
                  >
                    🗓 改善までの目安期間
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.35 0.04 148)", fontWeight: 300 }}
                  >
                    {result.duration}
                  </p>
                </div>

                {/* ヘアリズムでのアプローチ */}
                <div
                  className="p-4 rounded-lg mb-4"
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

                {/* 改善C: ワンポイントアドバイス */}
                <div
                  className="p-4 rounded-lg mb-6"
                  style={{ background: "oklch(0.95 0.04 148)", border: "1px solid oklch(0.55 0.12 148 / 0.3)" }}
                >
                  <p
                    className="text-xs font-semibold mb-2"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.38 0.10 148)" }}
                  >
                    💡 今夜からできるホームケアアドバイス
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.35 0.04 148)", fontWeight: 300 }}
                  >
                    {result.tip}
                  </p>
                </div>

                {/* カウンセリング案内 */}
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
