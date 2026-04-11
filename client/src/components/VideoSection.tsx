/*
 * VideoSection — 施術動画・サロン紹介動画の埋め込み
 * YouTube動画（潤うヘッドスパ 行程 前半）を埋め込み
 */

const LINE_URL = "https://lin.ee/oV9r3at";

export default function VideoSection() {
  return (
    <section
      id="video"
      style={{ background: "oklch(0.22 0.07 148)" }}
      className="py-20 px-4"
    >
      <div className="container max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-10">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}
          >
            ── MOVIE ──
          </p>
          <h2
            className="text-2xl md:text-3xl font-semibold mb-4 text-white"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            実際の施術をご覧ください
          </h2>
          <p
            className="text-sm max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.80 0.03 148)", fontWeight: 300 }}
          >
            「どんな施術なの？」「どんな雰囲気のサロンなの？」<br />
            百聞は一見にしかず。実際の潤うヘッドスパの様子をご覧ください。
          </p>
        </div>

        {/* メイン動画 */}
        <div className="mb-8">
          <div
            className="relative w-full rounded-xl overflow-hidden"
            style={{
              paddingBottom: "56.25%", /* 16:9 */
              border: "2px solid oklch(0.65 0.12 80 / 0.5)",
              boxShadow: "0 8px 40px oklch(0 0 0 / 0.4)",
            }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ljg6YXjXUy4"
              title="潤うヘッドスパ 行程 前半"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p
            className="text-center text-xs mt-3"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.03 148)", fontWeight: 300 }}
          >
            潤うヘッドスパ 行程（前半）
          </p>
        </div>

        {/* 後半動画 */}
        <div className="mb-10">
          <div
            className="relative w-full rounded-xl overflow-hidden"
            style={{
              paddingBottom: "56.25%", /* 16:9 */
              border: "2px solid oklch(0.65 0.12 80 / 0.5)",
              boxShadow: "0 8px 40px oklch(0 0 0 / 0.4)",
            }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/TW__3CAhybA"
              title="潤うヘッドスパ行程 後半"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p
            className="text-center text-xs mt-3"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.03 148)", fontWeight: 300 }}
          >
            潤うヘッドスパ 行程（後半）
          </p>
        </div>

        {/* 動画の補足ポイント */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: "🔬",
              title: "マイクロスコープ診断",
              desc: "施術前後に頭皮・毛根の状態を映像で確認。変化が目で見てわかります。",
            },
            {
              icon: "💆",
              title: "完全個室・完全予約制",
              desc: "他のお客様と顔を合わせることなく、プライベートな空間でリラックスできます。",
            },
            {
              icon: "🌿",
              title: "60分の極上ヘッドスパ",
              desc: "施術中に寝落ちしてしまうほどの心地よさ。ストレス解消も薄毛改善に効果的です。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl text-center"
              style={{
                background: "oklch(0.28 0.07 148)",
                border: "1px solid oklch(0.65 0.12 80 / 0.25)",
              }}
            >
              <p className="text-3xl mb-3">{item.icon}</p>
              <h3
                className="text-sm font-semibold mb-2 text-white"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.03 148)", fontWeight: 300 }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p
            className="text-sm mb-5"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.80 0.03 148)", fontWeight: 300 }}
          >
            実際に体験してみませんか？
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 py-4 px-8 text-sm font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
            style={{
              background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)",
              border: "2px solid oklch(0.65 0.12 80)",
              fontFamily: "'Noto Sans JP', sans-serif",
              boxShadow: "0 4px 20px oklch(0 0 0 / 0.3)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 48 48" fill="white">
              <path d="M24 4C12.95 4 4 11.82 4 21.5c0 5.84 3.17 11.02 8.12 14.38L10 38l4.8-2.4c2.88.88 5.96 1.4 9.2 1.4 11.05 0 20-7.82 20-17.5S35.05 4 24 4z"/>
            </svg>
            LINEで初回4,980円の予約をする →
          </a>
        </div>
      </div>
    </section>
  );
}
