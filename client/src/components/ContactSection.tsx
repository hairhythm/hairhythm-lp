/*
 * ContactSection — LP最終確定版
 * クロージングCTA + サロン情報
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LINE_URL = "https://lin.ee/oV9r3at";
const TEL = "0795-44-1099";

function calcRemainingSlots(): number {
  const day = new Date().getDate();
  if (day <= 3) return 10;   // 1〜3日：10名（チラシ配布直後）
  if (day <= 6) return 6;    // 4〜6日：6名（チラシ効果で早期に減少）
  if (day <= 9) return 5;    // 7〜9日：5名
  if (day <= 12) return 4;   // 10〜12日：4名
  if (day <= 16) return 3;   // 13〜16日：3名
  if (day <= 20) return 2;   // 17〜20日：2名
  return 1;                  // 21日以降：1名（残りわずか）
}

export default function ContactSection() {
  const { ref } = useScrollAnimation();
  const remainingSlots = calcRemainingSlots();

  return (
    <section id="contact" style={{ background: "oklch(0.28 0.07 148)" }}>
      <div className="py-20 px-4">
        <div className="container max-w-3xl mx-auto">
          <div ref={ref} className="fade-up">

            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                ── CONTACT ──
              </p>
              <h2
                className="text-2xl md:text-3xl font-semibold mb-4 text-white"
                style={{ fontFamily: "'Shippori Mincho', serif" }}
              >
                「あの時、勇気を出してよかった」<br />
                <span style={{ color: "oklch(0.88 0.14 80)" }}>3ヶ月後、鏡の前でそう笑う未来を選びませんか？</span>
              </h2>
              <div
                className="max-w-xl mx-auto p-5 rounded-lg mb-6"
                style={{ background: "oklch(0.28 0.08 148 / 0.9)", border: "1px solid oklch(0.65 0.12 80 / 0.3)" }}
              >
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.82 0.03 148)", fontWeight: 300 }}>
                  何もしなければ、髪は今のまま、あるいは少しずつ減っていきます。<br />
                  悩んでいる時間は、髪にとってもマイナスでしかありません。<br /><br />
                  リスクはありません。<br />
                  <strong style={{ color: "oklch(0.88 0.14 80)" }}>4,980円、ランチ2回分の投資で、「人生を変えるきっかけ」が掴めます。</strong><br /><br />
                  あなたが本来持っている「髪の力」を、私と一緒に取り戻しましょう。
                </p>
                <p className="text-right text-sm mt-4" style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.88 0.14 80)" }}>
                  育毛専門美容室ヘアリズム<br />
                  オーナー　橋本 光弘
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-w-md mx-auto mb-10">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-5 px-6 text-base font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)",
                  border: "2px solid oklch(0.65 0.12 80)",
                  fontFamily: "'Noto Sans JP', sans-serif",
                  boxShadow: "0 6px 30px oklch(0.28 0.08 148 / 0.6)"
                }}
              >
                <svg width="22" height="22" viewBox="0 0 48 48" fill="white">
                  <path d="M24 4C12.95 4 4 11.82 4 21.5c0 5.84 3.17 11.02 8.12 14.38L10 38l4.8-2.4c2.88.88 5.96 1.4 9.2 1.4 11.05 0 20-7.82 20-17.5S35.05 4 24 4z"/>
                </svg>
                まずはLINEで「無料相談・予約」をする
              </a>
              <p className="text-center text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.60 0.03 148)" }}>
                （空き状況もこちらから確認できます）
              </p>
              <a
                href={"tel:" + TEL}
                className="flex items-center justify-center gap-3 py-4 px-6 text-sm font-medium rounded-sm transition-all duration-200 hover:opacity-90"
                style={{
                  background: "transparent",
                  border: "1px solid oklch(0.65 0.12 80 / 0.6)",
                  color: "oklch(0.88 0.14 80)",
                  fontFamily: "'Noto Sans JP', sans-serif"
                }}
              >
                📞 電話で相談・予約する：{TEL}
              </a>
              <p className="text-center text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 148)" }}>
                10:00〜19:00／月・日定休
              </p>
            </div>

            <div
              className="max-w-md mx-auto p-4 rounded-lg text-center mb-10"
              style={{ background: "oklch(0.65 0.12 80 / 0.15)", border: "1px solid oklch(0.65 0.12 80 / 0.5)" }}
            >
              <p className="text-sm font-bold" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.88 0.14 80)" }}>
                ⚠️ 今月の残り枠：あと{remainingSlots}名様
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.70 0.03 148)" }}>
                丁寧な診断を行うため、枠数には限りがございます
              </p>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{ background: "oklch(0.28 0.08 148 / 0.9)", border: "1px solid oklch(0.65 0.12 80 / 0.3)" }}
            >
              <p className="text-xs font-semibold mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)", letterSpacing: "0.2em" }}>
                SALON INFO
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: "サロン名", value: "育毛専門美容室ヘアリズム（hairhythm）" },
                  { label: "住所", value: "兵庫県加東市下久米880-3" },
                  { label: "アクセス", value: "JR社町駅より車で１５分／駐車場完備" },
                  { label: "電話", value: TEL },
                  { label: "営業時間", value: "10:00〜19:00" },
                  { label: "定休日", value: "月・日曜日" },
                  { label: "予約方法", value: "完全予約制（LINE・電話）" },
                  { label: "プライバシー", value: "完全個室・看板には「美容室」とのみ表記" },
                ].map((row) => (
                  <div key={row.label} className="flex gap-3">
                    <span className="flex-shrink-0 text-xs font-medium w-20" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                      {row.label}
                    </span>
                    <span className="text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.82 0.03 148)", fontWeight: 300 }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
