/*
 * TestimonialsSection — 育毛専門美容室ヘアリズム LP
 * Design: Deep Forest Green x Gold — お客様の声
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LINE_URL = "https://lin.ee/oV9r3at";

const testimonials = [
  {
    name: "K.M様",
    age: "46歳",
    result: "3ヶ月で分け目が目立たなくなった",
    quote: "40代に入ってから急に分け目が気になり始め、市販の育毛剤を試しても効果がなく悩んでいました。ヘアリズムでマイクロスコープ診断を受けたところ、頭皮の状態が原因だとわかり、ヘッドスパを続けたところ3ヶ月で分け目が目立たなくなりました。",
    stars: 5,
  },
  {
    name: "T.Y様",
    age: "52歳",
    result: "抜け毛が明らかに減った",
    quote: "更年期の影響で抜け毛がひどく、毎朝の洗髪が怖かったです。橋本先生のカウンセリングで原因を丁寧に説明していただき、ホームケアも続けた結果、2ヶ月後には抜け毛が明らかに減りました。先生の親身な対応に感謝しています。",
    stars: 5,
  },
  {
    name: "A.N様",
    age: "44歳",
    result: "髪にハリとコシが戻ってきた",
    quote: "産後から髪が細くなり、ボリュームが出なくて悩んでいました。初回体験の4,980円で試してみたところ、ヘッドスパ後すぐに頭皮がすっきりして、翌朝から髪のハリが違うと感じました。今では毎月通っています。",
    stars: 5,
  },
  {
    name: "M.O様",
    age: "49歳",
    result: "頭皮のかゆみが解消された",
    quote: "長年頭皮のかゆみとフケに悩んでいました。皮膚科に行っても改善せず、ヘアリズムに相談したところ、頭皮環境の改善から取り組んでいただきました。今ではかゆみもなく、髪も以前より元気になった気がします。",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="oklch(0.72 0.12 80)">
          <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: cardsRef } = useScrollAnimation();

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "oklch(0.97 0.02 148)" }}
    >
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="sage-line" />
            <span className="section-label">Testimonials</span>
            <div className="sage-line" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
          >
            お客様の声
          </h2>
          <p
            className="text-sm max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
          >
            ヘアリズムで薄毛・抜け毛の悩みを解決されたお客様の声をご紹介します。
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-natural p-6"
              style={{
                background: "white",
                border: "1px solid oklch(0.88 0.04 148)",
                borderRadius: "4px",
                boxShadow: "0 4px 20px oklch(0.38 0.09 148 / 0.08)"
              }}
            >
              {/* Stars */}
              <StarRating count={t.stars} />
              {/* Result badge */}
              <div
                className="inline-block mt-3 mb-3 px-3 py-1 text-xs font-medium rounded-sm"
                style={{
                  background: "oklch(0.38 0.09 148 / 0.10)",
                  color: "oklch(0.38 0.09 148)",
                  border: "1px solid oklch(0.38 0.09 148 / 0.2)",
                  fontFamily: "'Noto Sans JP', sans-serif"
                }}
              >
                ✓ {t.result}
              </div>
              {/* Quote */}
              <p
                className="text-sm leading-[2] mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.42 0.03 60)", fontWeight: 300 }}
              >
                「{t.quote}」
              </p>
              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid oklch(0.92 0.02 148)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)" }}
                >
                  <span style={{ color: "oklch(0.88 0.12 80)", fontSize: "16px" }}>👩</span>
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.35 0.03 60)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 60)" }}
                  >
                    {t.age}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className="text-center text-xs mb-10"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.60 0.03 60)" }}
        >
          ※ お客様個人の感想です。効果には個人差があります。
        </p>

        {/* CTA */}
        <div className="text-center">
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
            あなたも体験してみませんか？
          </a>
        </div>
      </div>
    </section>
  );
}
