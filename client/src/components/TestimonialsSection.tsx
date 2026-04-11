/*
 * TestimonialsSection — LP最終確定版
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cases = [
  {
    title: "事例①",
    age: "50代女性",
    period: "育毛コース6ヶ月",
    before: "頭頂部の透け感が気になり、外出がおっくうだった",
    after: "3ヶ月目で根本が立ち上がり、6ヶ月後にはウィッグ不要のボリューム感へ。",
    quote: "美容室に行くのが、10年ぶりに楽しみになりました",
  },
  {
    title: "事例②",
    age: "70代女性",
    period: "育毛コース4ヶ月",
    before: "年齢的に無理だと思っていた",
    after: "専門機器での頭皮改善を経て、4ヶ月目には美容師も驚くほどのハリ・コシが出現。",
    quote: "孫から「おばあちゃん若くなった」と言われました",
  },
  {
    title: "事例③",
    age: "40代女性",
    period: "産後ケアから継続",
    before: "産後の抜け毛が戻らず、ずっと悩んでいた",
    after: "正しいケアを知り、2ヶ月目から抜け毛が激減。",
    quote: "もっと早く相談すればよかった、その一言に尽きます",
  },
];

const reviews = [
  { text: "ただの美容室ではありません。人生が変わる場所です", age: "50代女性" },
  { text: "大手の高額サロンでダメだった私が、ここで救われました", age: "40代女性" },
  { text: "個室で誰にも会わずに相談できるのが嬉しかった", age: "30代女性" },
];

export default function TestimonialsSection() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: casesRef } = useScrollAnimation();
  const { ref: reviewRef } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 px-4" style={{ background: "oklch(0.93 0.02 148)" }}>
      <div className="container max-w-4xl mx-auto">

        <div ref={headerRef} className="fade-up text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
            ── TESTIMONIALS ──
          </p>
          <h2
            className="text-2xl md:text-3xl font-semibold mb-3"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
          >
            【実感度96.8％】<br />
            論より証拠。これが「ヘアリズム」の実績です。
          </h2>
        </div>

        <div ref={casesRef} className="fade-up mb-12">
          <div className="space-y-5">
            {cases.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-lg"
                style={{ background: "#fff", border: "1px solid oklch(0.88 0.03 148)", boxShadow: "0 2px 16px oklch(0.88 0.03 148 / 0.4)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-2 py-0.5 text-xs font-bold rounded"
                    style={{ background: "oklch(0.38 0.10 148 / 0.12)", color: "oklch(0.28 0.09 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {c.title}
                  </span>
                  <span className="text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.02 60)" }}>
                    {c.age}／{c.period}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div
                    className="p-3 rounded"
                    style={{ background: "oklch(0.55 0.15 25 / 0.06)", border: "1px solid oklch(0.55 0.15 25 / 0.2)" }}
                  >
                    <p className="text-[10px] font-bold mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.15 25)" }}>
                      BEFORE
                    </p>
                    <p className="text-xs leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.40 0.02 60)" }}>
                      「{c.before}」
                    </p>
                  </div>
                  <div
                    className="p-3 rounded"
                    style={{ background: "oklch(0.38 0.10 148 / 0.08)", border: "1px solid oklch(0.38 0.10 148 / 0.3)" }}
                  >
                    <p className="text-[10px] font-bold mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.38 0.10 148)" }}>
                      AFTER ➡
                    </p>
                    <p className="text-xs leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.40 0.02 60)" }}>
                      {c.after}
                    </p>
                  </div>
                </div>
                <div
                  className="p-3 rounded"
                  style={{ background: "oklch(0.22 0.08 148 / 0.06)", borderLeft: "3px solid oklch(0.65 0.12 80)" }}
                >
                  <p className="text-sm italic" style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.28 0.09 148)" }}>
                    「{c.quote}」
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={reviewRef} className="fade-up">
          <div
            className="p-6 rounded-lg"
            style={{ background: "linear-gradient(135deg, oklch(0.22 0.08 148) 0%, oklch(0.28 0.09 148) 100%)", border: "1px solid oklch(0.65 0.12 80 / 0.4)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              <div>
                <p className="text-lg font-bold text-white" style={{ fontFamily: "'Shippori Mincho', serif" }}>
                  Googleレビュー 4.9
                </p>
                <p className="text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.03 148)" }}>
                  153件の評価
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {reviews.map((r) => (
                <div
                  key={r.text}
                  className="p-3 rounded"
                  style={{ background: "oklch(0.18 0.06 148 / 0.8)", border: "1px solid oklch(0.65 0.12 80 / 0.2)" }}
                >
                  <p className="text-xs leading-relaxed italic mb-2 text-white" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>
                    「{r.text}」
                  </p>
                  <p className="text-[10px]" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                    — {r.age}
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
