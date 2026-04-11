/*
 * TestimonialsSection — LP最終確定版
 * - 事例①②③に画像を追加
 * - ホワイトボード写真をお客様の声として追加
 * - Googleレビュー4.8（件数なし）
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CASE_IMAGES = {
  case1: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/bjixZaSZWUlFeBuP.jpg",
  case2: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/dwNAEGBnFNDbBfQJ.jpg",
  case3: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/DxowyRLtPRUnCrpC.jpg",
};

const WHITEBOARD_IMAGES = [
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/gzWSUtyykEoreVKe.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/jgSNVvMQGreTHfhb.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/FgNqzIMZOghFzlZU.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/EblFuvXJKSsEbKKi.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/MnZrTArwpNbyuWHv.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/CINEoofCFMkoBNkf.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/HnJOzzloCMyNPcIK.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/FFqhAuazTNQApcGa.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/jxrPTmTYGcFeZzYn.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/QlFFRxXWWWihHrzu.jpg",
];

const cases = [
  {
    title: "事例①",
    age: "50代女性",
    period: "育毛コース6ヶ月",
    image: CASE_IMAGES.case1,
    before: "頭頂部の透け感が気になり、外出がおっくうだった",
    after: "3ヶ月目で根本が立ち上がり、6ヶ月後にはウィッグ不要のボリューム感へ。",
    quote: "美容室に行くのが、10年ぶりに楽しみになりました",
  },
  {
    title: "事例②",
    age: "70代女性",
    period: "育毛コース4ヶ月",
    image: CASE_IMAGES.case2,
    before: "年齢的に無理だと思っていた",
    after: "専門機器での頭皮改善を経て、4ヶ月目には美容師も驚くほどのハリ・コシが出現。",
    quote: "孫から「おばあちゃん若くなった」と言われました",
  },
  {
    title: "事例③",
    age: "40代女性",
    period: "産後ケアから継続",
    image: CASE_IMAGES.case3,
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
  const { ref: whiteboardRef } = useScrollAnimation();
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

        {/* 事例①②③（画像付き） */}
        <div ref={casesRef} className="fade-up mb-14">
          <div className="space-y-6">
            {cases.map((c) => (
              <div
                key={c.title}
                className="rounded-lg overflow-hidden"
                style={{ background: "#fff", border: "1px solid oklch(0.88 0.03 148)", boxShadow: "0 2px 20px oklch(0.88 0.03 148 / 0.5)" }}
              >
                <div className="flex items-center gap-3 px-5 pt-5 pb-3">
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

                <div className="px-5 pb-4">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={c.image}
                      alt={`${c.title} 施術実績`}
                      className="w-full object-cover object-top"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-5 pb-4">
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
                  className="mx-5 mb-5 p-3 rounded"
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

        {/* ホワイトボード・お客様の声写真 */}
        <div ref={whiteboardRef} className="fade-up mb-14">
          <div className="text-center mb-6">
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
              ── VOICE ──
            </p>
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
            >
              お客様から届いた生の声
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {WHITEBOARD_IMAGES.map((src, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden"
                style={{ border: "1px solid oklch(0.88 0.03 148)", boxShadow: "0 2px 12px oklch(0.88 0.03 148 / 0.4)" }}
              >
                <img
                  src={src}
                  alt={`お客様の声 ${i + 1}`}
                  className="w-full object-cover"
                  style={{ aspectRatio: "1 / 1" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Googleレビュー（4.8・件数なし） */}
        <div ref={reviewRef} className="fade-up">
          <div
            className="p-6 rounded-lg"
            style={{ background: "linear-gradient(135deg, oklch(0.22 0.08 148) 0%, oklch(0.28 0.09 148) 100%)", border: "1px solid oklch(0.65 0.12 80 / 0.4)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              <div>
                <p className="text-lg font-bold text-white" style={{ fontFamily: "'Shippori Mincho', serif" }}>
                  Googleレビュー 4.8
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
