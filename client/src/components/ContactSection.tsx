/*
 * ContactSection — 育毛専門美容室ヘアリズム LP
 * Design: Deep Forest Green x Gold — お問い合わせ・予約
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LINE_URL = "https://lin.ee/oV9r3at";

function getMonthEnd(): string {
  const now = new Date();
  const month = now.getMonth() + 1;
  return `${month}月末`;
}

export default function ContactSection() {
  const { ref } = useScrollAnimation();

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, oklch(0.18 0.08 148) 0%, oklch(0.24 0.09 148) 100%)"
      }}
    >
      <div className="container">
        <div ref={ref} className="fade-up max-w-2xl mx-auto text-center">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px" style={{ background: "oklch(0.65 0.12 80 / 0.6)" }} />
            <span
              className="text-[11px] tracking-[0.3em] uppercase"
              style={{ color: "oklch(0.72 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              Reservation
            </span>
            <div className="w-12 h-px" style={{ background: "oklch(0.65 0.12 80 / 0.6)" }} />
          </div>

          <h2
            className="text-3xl md:text-4xl font-semibold mb-4 text-white"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            まずは気軽に<br />ご相談ください
          </h2>

          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "oklch(0.82 0.05 148)", fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            {getMonthEnd()}まで限定の初回体験4,980円をぜひご活用ください。<br />
            LINEでのご予約・お問い合わせを受け付けています。
          </p>

          {/* Price reminder */}
          <div
            className="inline-block px-6 py-4 mb-8"
            style={{
              background: "oklch(0.28 0.09 148 / 0.6)",
              border: "1px solid oklch(0.65 0.12 80 / 0.5)",
              borderRadius: "2px",
              backdropFilter: "blur(8px)"
            }}
          >
            <p
              className="text-xs mb-1"
              style={{ color: "oklch(0.72 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              初回体験コース（{getMonthEnd()}まで）
            </p>
            <p
              className="text-2xl font-bold"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.88 0.12 80)" }}
            >
              4,980円（税込）
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "oklch(0.70 0.06 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              カウンセリング＋ヘッドスパ＋化粧水 すべて込み
            </p>
          </div>

          {/* LINE CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 text-base font-medium rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: "white",
                color: "oklch(0.28 0.09 148)",
                border: "1px solid oklch(0.65 0.12 80)",
                fontFamily: "'Noto Sans JP', sans-serif",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)"
              }}
            >
              <svg width="22" height="22" viewBox="0 0 48 48" fill="oklch(0.28 0.09 148)">
                <path d="M24 4C12.95 4 4 11.82 4 21.5c0 5.84 3.17 11.02 8.12 14.38L10 38l4.8-2.4c2.88.88 5.96 1.4 9.2 1.4 11.05 0 20-7.82 20-17.5S35.05 4 24 4z"/>
              </svg>
              <span style={{ color: "oklch(0.28 0.09 148)" }}>LINEで予約する（無料）</span>
            </a>
            <a
              href="tel:0795441099"
              className="flex items-center justify-center gap-3 px-8 py-4 text-base font-medium rounded-sm transition-all duration-200 hover:opacity-90"
              style={{
                background: "oklch(0.28 0.09 148 / 0.5)",
                color: "white",
                border: "1px solid oklch(0.65 0.12 80 / 0.5)",
                fontFamily: "'Noto Sans JP', sans-serif",
                backdropFilter: "blur(4px)"
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="white"/>
              </svg>
              0795-44-1099
            </a>
          </div>

          {/* Business info */}
          <div
            className="mt-10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
            style={{ borderTop: "1px solid oklch(0.65 0.12 80 / 0.2)" }}
          >
            {[
              { label: "住所", value: "兵庫県加東市下久米880-3" },
              { label: "電話", value: "0795-44-1099" },
              { label: "営業時間", value: "火〜土 10:00〜19:00" },
              { label: "定休日", value: "日・月曜日" },
            ].map((info) => (
              <div key={info.label}>
                <p
                  className="text-[10px] tracking-widest mb-1"
                  style={{ color: "oklch(0.65 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {info.label}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.82 0.05 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
