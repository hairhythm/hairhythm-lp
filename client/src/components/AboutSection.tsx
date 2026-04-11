/*
 * AboutSection — 育毛専門美容室ヘアリズム LP
 * Design: Deep Forest Green x Gold — サロン紹介・院長プロフィール
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PROFILE_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/iIMxzTEWmJmVKXYP.png";
const LINE_URL = "https://lin.ee/oV9r3at";

const concerns = [
  "最近、髪のボリュームが減ってきた気がする",
  "分け目が目立つようになってきた",
  "抜け毛が多くて不安",
  "頭皮がかゆい・べたつく",
  "市販の育毛剤を試したが効果を感じない",
  "40代になってから急に髪が細くなった",
];

const features = [
  {
    icon: "🔬",
    title: "マイクロスコープ頭皮診断",
    desc: "高精度のマイクロスコープで頭皮と毛根の状態を詳しく診断。あなたの薄毛の原因を正確に把握します。",
  },
  {
    icon: "💆",
    title: "潤うヘッドスパ",
    desc: "頭皮の血流を促進し、毛根に栄養を届ける専門的なヘッドスパ。施術後は頭皮がすっきり、髪にハリが出ます。",
  },
  {
    icon: "🌿",
    title: "ホームケア指導",
    desc: "サロンケアだけでなく、ご自宅でのケア方法も丁寧にご指導。毎日のケアで効果を持続させます。",
  },
  {
    icon: "👩",
    title: "女性専門・完全予約制",
    desc: "女性の薄毛に特化した専門サロン。完全予約制でプライバシーを守りながら、ゆったりとした空間でケアを受けられます。",
  },
];

export default function AboutSection() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: concernsRef } = useScrollAnimation();
  const { ref: profileRef } = useScrollAnimation();
  const { ref: featuresRef } = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "oklch(0.97 0.02 148)" }}
    >
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="fade-up text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="sage-line" />
            <span className="section-label">About</span>
            <div className="sage-line" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
          >
            こんなお悩みはありませんか？
          </h2>
          <p
            className="text-sm leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
          >
            40代以降、女性ホルモンの変化とともに髪のお悩みが増えてきます。<br />
            ヘアリズムでは、そんなあなたの悩みに真剣に向き合います。
          </p>
        </div>

        {/* Concerns list */}
        <div ref={concernsRef} className="fade-up mb-16">
          <div
            className="max-w-2xl mx-auto p-8"
            style={{
              background: "white",
              border: "1px solid oklch(0.88 0.04 148)",
              borderRadius: "4px",
              boxShadow: "0 4px 24px oklch(0.38 0.09 148 / 0.08)"
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {concerns.map((concern) => (
                <div key={concern} className="flex items-start gap-3">
                  <div
                    className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: "oklch(0.38 0.09 148 / 0.12)", border: "1px solid oklch(0.38 0.09 148 / 0.3)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5 3.5-4" stroke="oklch(0.38 0.09 148)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.35 0.03 60)" }}
                  >
                    {concern}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="mt-6 pt-5 text-center"
              style={{ borderTop: "1px solid oklch(0.90 0.03 148)" }}
            >
              <p
                className="text-sm font-medium"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.38 0.09 148)" }}
              >
                ひとつでも当てはまる方は、ぜひヘアリズムにご相談ください。
              </p>
            </div>
          </div>
        </div>

        {/* Profile section */}
        <div ref={profileRef} className="fade-up mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Profile image */}
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "4px",
                  boxShadow: "0 16px 48px oklch(0.28 0.09 148 / 0.20)"
                }}
              >
                <img
                  src={PROFILE_URL}
                  alt="ヘアリズム オーナー 橋本"
                  className="w-full max-w-sm mx-auto block object-cover"
                  style={{ aspectRatio: "3/4", objectPosition: "top" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 70%, oklch(0.22 0.06 148 / 0.5) 100%)" }}
                />
              </div>
              {/* Gold accent border */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full -z-10"
                style={{
                  border: "2px solid oklch(0.72 0.12 80 / 0.4)",
                  borderRadius: "4px",
                  maxWidth: "384px",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </div>

            {/* Profile text */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="sage-line" />
                <span className="section-label">Owner Profile</span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-semibold"
                style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
              >
                育毛専門美容室<br />
                <span style={{ color: "oklch(0.38 0.09 148)" }}>ヘアリズム</span>
              </h3>
              <p
                className="text-sm leading-[2] max-w-md"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)", fontWeight: 300 }}
              >
                兵庫県加東市で育毛専門美容室を営んでいます。<br /><br />
                「髪が変わると、人は10歳若く見える」という信念のもと、
                40代以上の女性の薄毛・抜け毛のお悩みに真剣に向き合ってきました。<br /><br />
                マイクロスコープによる頭皮診断から、育毛ヘッドスパ、ホームケア指導まで、
                あなたの髪と頭皮の状態に合わせたオーダーメイドのケアをご提供します。<br /><br />
                まずはカウンセリングで、あなたの髪と頭皮の本当の状態を知ることから始めましょう。
              </p>
              <div
                className="flex flex-col gap-2 p-4"
                style={{
                  background: "oklch(0.95 0.03 148)",
                  borderRadius: "2px",
                  borderLeft: "3px solid oklch(0.72 0.12 80)"
                }}
              >
                <p className="text-xs font-medium" style={{ color: "oklch(0.38 0.09 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>
                  サロン情報
                </p>
                <div className="grid grid-cols-2 gap-1 text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)" }}>
                  <span>住所</span><span>兵庫県加東市下久米880-3</span>
                  <span>電話</span><span>0795-44-1099</span>
                  <span>営業時間</span><span>火〜土 10:00〜19:00</span>
                  <span>定休日</span><span>日・月曜日</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div ref={featuresRef} className="fade-up">
          <div className="text-center mb-10">
            <h3
              className="text-2xl md:text-3xl font-semibold"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
            >
              ヘアリズムの4つの特徴
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-natural p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
                    style={{ background: "oklch(0.38 0.09 148 / 0.10)", border: "1px solid oklch(0.72 0.12 80 / 0.4)" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4
                      className="text-base font-semibold mb-2"
                      style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.28 0.09 148)" }}
                    >
                      {f.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)",
              border: "1px solid oklch(0.65 0.12 80)",
              fontFamily: "'Noto Sans JP', sans-serif",
              boxShadow: "0 4px 20px oklch(0.28 0.08 148 / 0.3)"
            }}
          >
            <svg width="18" height="18" viewBox="0 0 48 48" fill="white">
              <path d="M24 4C12.95 4 4 11.82 4 21.5c0 5.84 3.17 11.02 8.12 14.38L10 38l4.8-2.4c2.88.88 5.96 1.4 9.2 1.4 11.05 0 20-7.82 20-17.5S35.05 4 24 4z"/>
            </svg>
            LINEで無料相談する
          </a>
        </div>
      </div>
    </section>
  );
}
