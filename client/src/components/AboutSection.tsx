/*
 * AboutSection — LP最終確定版
 * ① 見えない不安チェックリスト
 * ② 3ヶ月後のビジョン
 * ③ オーナーストーリー（橋本光弘）
 * ④ 競合比較（大手 vs クリニック vs 自己流 vs ヘアリズム）
 * ⑤ 3層育毛メソッド
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LINE_URL = "https://lin.ee/oV9r3at";
const OWNER_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/kejSQYpwGySSBYgn.png";

const worries = [
  "シャンプーのたび、指に絡まる髪を見て胸がざわつく",
  "排水溝に溜まった髪を、見なかったことにして捨てている",
  "視線が気になって、エレベーターや電車で座るのが怖い",
  "隠すための髪型ばかり探して、本当はしたい髪型ができない",
  "美容師さんの「少し透けますね」という言葉に傷ついたことがある",
  "高級な育毛剤を試したけれど、効果がわからずやめてしまった",
  "「もう歳だし…」と自分に言い聞かせているけれど、本当は諦めたくない",
];

const visionItems = [
  "朝、鏡の前でセットが決まり、「よし！」と思える自分",
  "風が吹いても、手で押さえずに堂々と歩ける清々しさ",
  "「あれ？最近なんか雰囲気変わった？」「若々しくなったね」と言われる瞬間",
  "「自信」という、かけがえのない宝物を取り戻す物語",
];

const competitors = [
  {
    label: "❌ 大手育毛サロン",
    isGood: false,
    points: [
      "莫大な広告費のため料金が非常に高額（数百万円単位も）",
      "「絶対に生えます」といった強引な営業への不安",
    ],
  },
  {
    label: "❌ 医療機関（クリニック）",
    isGood: false,
    points: [
      "飲み薬が中心で、副作用（多毛症や肝機能負担）のリスクがある",
      "薬をやめると元に戻るため、一生飲み続ける必要がある",
      "頭皮のケアまではしてくれない",
    ],
  },
  {
    label: "❌ 自己流ケア（市販品）",
    isGood: false,
    points: [
      "自分の薄毛の原因に合っていないものを使い続けてしまう",
      "効果が出る前に挫折してしまう",
    ],
  },
  {
    label: "⭕ ヘアリズムが選ばれる理由",
    isGood: true,
    points: [
      "副作用ゼロ。薬ではなく自身の「育つ力」を引き出すアプローチ",
      "再生医療分野の成分（ヒト幹細胞培養上清液）を適正価格で提供",
      "最短3ヶ月。終わりが見える明確なプログラム",
    ],
  },
];

const methods = [
  {
    num: "第1層",
    title: "土壌改良（ホームケア）",
    sub: "まずは、髪が育つ「土」を作る",
    icon: "🌱",
    desc: "どれだけ良い栄養を入れても、頭皮（土壌）が汚れていては意味がありません。「フルボ酸」配合の特殊シャンプーと独自の頭皮用化粧水で、酸化した皮脂を取り除き、潤いで満たされた頭皮を作ります。初回に「抜け毛が劇的に減るシャンプー法」を実演指導します。",
  },
  {
    num: "第2層",
    title: "深層浄化（サロンケア）",
    sub: "毛穴の奥の大掃除",
    icon: "💧",
    desc: "普段のシャンプーでは落ちない毛穴の奥の汚れを、育毛専用の循環器と高濃度フルボ酸温水で洗い流します。血流を促す60分の極上ヘッドスパは、施術中に寝落ちしなかった人はいないほどの心地よさ。ストレスも、薄毛の大敵です。",
  },
  {
    num: "第3層",
    title: "細胞活性（スペシャル導入）",
    sub: "眠っている力を呼び覚ます",
    icon: "✨",
    desc: "キレイになった毛穴の奥へ、「ヒト幹細胞培養上清液」をダイレクトに導入。成長因子（サイトカイン）が、休止している毛母細胞に「起きろ！」と指令を出します。血流スコープを使えば、毛細血管が元気に活動し始める様子を目で見て確認できます。",
  },
];

export default function AboutSection() {
  const { ref: worriesRef } = useScrollAnimation();
  const { ref: visionRef } = useScrollAnimation();
  const { ref: ownerRef } = useScrollAnimation();
  const { ref: compRef } = useScrollAnimation();
  const { ref: methodRef } = useScrollAnimation();

  return (
    <section id="about">

      {/* ① 見えない不安チェックリスト */}
      <div className="py-20 px-4" style={{ background: "oklch(0.97 0.01 148)" }}>
        <div className="container max-w-3xl mx-auto">
          <div ref={worriesRef} className="fade-up">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                ── ABOUT ──
              </p>
              <h2
                className="text-2xl md:text-3xl font-semibold mb-4"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
              >
                あなたは今、こんな「見えない不安」を<br className="hidden sm:block" />抱えていませんか？
              </h2>
            </div>

            <div
              className="p-6 md:p-8 rounded-lg mb-8"
              style={{ background: "#fff", border: "1px solid oklch(0.88 0.03 148)", boxShadow: "0 2px 20px oklch(0.88 0.03 148 / 0.5)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {worries.map((w) => (
                  <div key={w} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "oklch(0.38 0.10 148 / 0.12)", border: "1px solid oklch(0.38 0.10 148 / 0.4)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5 3.5-4" stroke="oklch(0.38 0.10 148)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.35 0.02 60)", fontWeight: 400 }}>
                      {w}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="mt-6 pt-5 text-center"
                style={{ borderTop: "1px solid oklch(0.88 0.03 148)" }}
              >
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.38 0.10 148)", fontWeight: 500 }}>
                  そのお気持ち、痛いほどよくわかります。
                </p>
                <p className="text-sm leading-relaxed mt-2" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.02 60)", fontWeight: 300 }}>
                  なぜなら、当サロン『ヘアリズム』を訪れるお客様の多くが、<br />
                  最初は深く帽子を被り、伏し目がちに同じ悩みを打ち明けられるからです。
                </p>
              </div>
            </div>

            {/* 真実のメッセージ */}
            <div
              className="p-6 rounded-lg text-center"
              style={{
                background: "linear-gradient(135deg, oklch(0.28 0.08 148) 0%, oklch(0.28 0.09 148) 100%)",
                border: "1px solid oklch(0.65 0.12 80 / 0.4)"
              }}
            >
              <p className="text-base md:text-lg font-medium mb-3 text-white" style={{ fontFamily: "'Shippori Mincho', serif" }}>
                髪が痩せていくのは、単なる老化現象ではありません。
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.85 0.03 148)", fontWeight: 300 }}>
                頭皮が「栄養を受け取れない状態」になっているだけなのです。<br />
                畑に例えるなら、土がカチカチに固まり、肥料を撒いても浸透しない状態。<br />
                <strong style={{ color: "oklch(0.88 0.12 80)" }}>逆に言えば、土壌さえ整えれば、髪は何歳からでも応えてくれます。</strong>
              </p>
              <p className="text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.78 0.08 80)" }}>
                実際に、当サロンでは80代のお客様でも、わずか3ヶ月で髪のハリと笑顔を取り戻されています。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ② 3ヶ月後のビジョン */}
      <div className="py-16 px-4" style={{ background: "oklch(0.28 0.07 148)" }}>
        <div className="container max-w-3xl mx-auto">
          <div ref={visionRef} className="fade-up text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
              ── VISION ──
            </p>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-6 text-white"
              style={{ fontFamily: "'Shippori Mincho', serif" }}
            >
              想像してみてください。<br />
              <span style={{ color: "oklch(0.88 0.14 80)" }}>3ヶ月後のあなたの姿</span>を。
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
              {visionItems.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg flex items-start gap-3"
                  style={{ background: "oklch(0.28 0.08 148 / 0.9)", border: "1px solid oklch(0.65 0.12 80 / 0.3)" }}
                >
                  <span style={{ color: "oklch(0.88 0.14 80)", fontSize: "1.2rem" }}>✦</span>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.88 0.03 148)", fontWeight: 300 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="text-base md:text-lg font-medium"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.88 0.14 80)" }}
            >
              ただ髪が増えるだけではありません。<br />
              「自信」という、かけがえのない宝物を取り戻す物語。<br />
              それは決して夢物語ではなく、<br />
              当サロンのお客様が体験されている「現実」です。
            </p>
          </div>
        </div>
      </div>

      {/* ③ オーナーストーリー */}
      <div className="py-20 px-4" style={{ background: "oklch(0.97 0.01 148)" }}>
        <div className="container max-w-4xl mx-auto">
          <div ref={ownerRef} className="fade-up">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                ── OWNER STORY ──
              </p>
              <h2
                className="text-2xl md:text-3xl font-semibold"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
              >
                なぜ、一介の美容師である私が、<br />
                これほどまでに「育毛」に執着するのか。
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-full md:w-64">
                <img
                  src={OWNER_IMAGE}
                  alt="オーナー 橋本光弘"
                  className="w-full md:w-64 h-64 md:h-80 object-cover rounded-lg"
                  style={{ border: "2px solid oklch(0.65 0.12 80 / 0.4)" }}
                />
                <div
                  className="mt-3 p-3 rounded text-center"
                  style={{ background: "#fff", border: "1px solid oklch(0.88 0.03 148)" }}
                >
                  <p className="text-xs font-semibold" style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.28 0.09 148)" }}>
                    育毛専門美容室ヘアリズム
                  </p>
                  <p className="text-sm font-bold mt-1" style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}>
                    オーナー　橋本 光弘
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.40 0.02 60)", fontWeight: 300 }}>
                  私は元々、デザインを作るのが大好きな普通の美容師でした。お客様を可愛く、かっこよくする。それが私の天職だと思っていました。
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.40 0.02 60)", fontWeight: 300 }}>
                  しかし、ある時、無力感に打ちのめされました。長年通ってくださっている常連様たちの髪が、年齢とともに細くなり、元気がなくなっていく。「最近、ここが薄くなってきて…」「どう隠せばいいかしら？」そんな切実な相談に対し、私は「パーマでふんわりさせましょう」「分け目を変えてごまかしましょう」そんな「一時しのぎ」の提案しかできなかったのです。
                </p>
                <div
                  className="p-4 rounded-lg"
                  style={{ background: "oklch(0.38 0.10 148 / 0.08)", border: "1px solid oklch(0.38 0.10 148 / 0.2)", borderLeft: "3px solid oklch(0.65 0.12 80)" }}
                >
                  <p className="text-sm leading-relaxed italic" style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.28 0.09 148)" }}>
                    「私は髪のプロとして、本当にお客様を救えているのか？」<br />
                    その悔しさが、私の原動力になりました。
                  </p>
                </div>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.40 0.02 60)", fontWeight: 300 }}>
                  そこから私は、徹底的に育毛を学び直しました。毛髪科学、頭皮のメカニズム、栄養学、そして再生医療分野の最新技術。師匠につき、来る日も来る日も研究を重ねました。そしてたどり着いたのが、「医療レベルの科学的アプローチ」と「美容室の癒やし」を融合させた、独自のメソッドでした。
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.40 0.02 60)", fontWeight: 300 }}>
                  今では、この技術を全国の美容師に伝える「育毛の学校」を主宰し、<strong style={{ color: "oklch(0.28 0.09 148)" }}>200名以上の同志を輩出</strong>するまでになりました。でも、私の想いは変わりません。目の前のあなたの悩みを、解決したい。ただそれだけです。
                </p>
                <div
                  className="p-4 rounded-lg"
                  style={{ background: "linear-gradient(135deg, oklch(0.28 0.08 148) 0%, oklch(0.28 0.09 148) 100%)", border: "1px solid oklch(0.65 0.12 80 / 0.4)" }}
                >
                  <p className="text-sm font-medium text-white" style={{ fontFamily: "'Shippori Mincho', serif" }}>
                    「隠すのはやめましょう。一緒に、髪を育てましょう」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ④ 競合比較 */}
      <div className="py-20 px-4" style={{ background: "oklch(0.93 0.02 148)" }}>
        <div className="container max-w-4xl mx-auto">
          <div ref={compRef} className="fade-up">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                ── WHY HAIRHYTHM ──
              </p>
              <h2
                className="text-2xl md:text-3xl font-semibold mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
              >
                なぜ、大手サロンやクリニックではなく、<br />
                地方の「小さな美容室」が選ばれるのか？
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competitors.map((c) => (
                <div
                  key={c.label}
                  className="p-5 rounded-lg"
                  style={{
                    background: c.isGood ? "oklch(0.38 0.10 148 / 0.10)" : "oklch(0.55 0.15 25 / 0.08)",
                    border: c.isGood ? "1px solid oklch(0.65 0.12 80 / 0.5)" : "1px solid oklch(0.55 0.15 25 / 0.3)"
                  }}
                >
                  <p className="text-sm font-bold mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: c.isGood ? "oklch(0.38 0.10 148)" : "oklch(0.55 0.15 25)" }}>
                    {c.label}
                  </p>
                  <ul className="space-y-2">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.40 0.02 60)" }}>
                        <span className="mt-0.5 flex-shrink-0">・</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ⑤ 3層育毛メソッド */}
      <div className="py-20 px-4" style={{ background: "oklch(0.28 0.07 148)" }}>
        <div className="container max-w-4xl mx-auto">
          <div ref={methodRef} className="fade-up">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                ── METHOD ──
              </p>
              <h2
                className="text-2xl md:text-3xl font-semibold mb-3 text-white"
                style={{ fontFamily: "'Shippori Mincho', serif" }}
              >
                これが、96.8％が納得した<br />
                <span style={{ color: "oklch(0.88 0.14 80)" }}>ヘアリズム独自【3層育毛メソッド】</span>
              </h2>
              <p className="text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.03 148)", fontWeight: 300 }}>
                なぜ、結果が出るのか。それは「耕し」「種を蒔き」「育てる」すべてを行うからです。
              </p>
            </div>

            <div className="space-y-5">
              {methods.map((m) => (
                <div
                  key={m.num}
                  className="p-6 rounded-lg flex gap-5"
                  style={{
                    background: "oklch(0.28 0.08 148 / 0.9)",
                    border: "1px solid oklch(0.65 0.12 80 / 0.3)"
                  }}
                >
                  <div className="flex-shrink-0 text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-1"
                      style={{ background: "oklch(0.65 0.12 80 / 0.2)", border: "1px solid oklch(0.65 0.12 80 / 0.5)" }}
                    >
                      {m.icon}
                    </div>
                    <p className="text-[10px] tracking-wider" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                      {m.num}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold mb-1 text-white" style={{ fontFamily: "'Shippori Mincho', serif" }}>
                      {m.title}
                    </h3>
                    <p className="text-xs mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)", fontStyle: "italic" }}>
                      ～{m.sub}～
                    </p>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.82 0.03 148)", fontWeight: 300 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
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
                LINEで無料相談する
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
