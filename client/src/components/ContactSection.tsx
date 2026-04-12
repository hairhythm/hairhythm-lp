/*
 * ContactSection — 改訂版（予約フォーム削除）
 * - Googleマップ埋め込み
 * - LINE・電話ボタンのみのシンプルな構成
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LINE_URL = "https://lin.ee/oV9r3at";
const TEL = "0795-44-1099";
const MAP_SEARCH_URL = "https://maps.google.com/?q=兵庫県加東市下久米880-3+育毛専門美容室ヘアリズム";

function calcRemainingSlots(): number {
  const day = new Date().getDate();
  if (day <= 3) return 10;
  if (day <= 6) return 6;
  if (day <= 9) return 5;
  if (day <= 12) return 4;
  if (day <= 16) return 3;
  if (day <= 20) return 2;
  return 1;
}

export default function ContactSection() {
  const { ref } = useScrollAnimation();
  const { ref: mapRef } = useScrollAnimation();
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

            {/* LINE・電話ボタン */}
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
                LINEで「無料相談・予約」をする
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

            {/* 残り枠 */}
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

            {/* サロン情報 */}
            <div ref={mapRef} className="fade-up mt-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-2" style={{ fontFamily: "'Shippori Mincho', serif" }}>育毛専門美容室ヘアリズム</h4>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.82 0.03 148)", fontWeight: 300 }}>
                      〒673-1402<br />
                      兵庫県加東市下久米880-3<br />
                      （社町駅から車で約10分／駐車場完備）
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2" style={{ fontFamily: "'Shippori Mincho', serif" }}>営業時間</h4>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.82 0.03 148)", fontWeight: 300 }}>
                      10:00 〜 19:00<br />
                      定休日：毎週月曜日・日曜日
                    </p>
                  </div>
                  <a
                    href={MAP_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs underline"
                    style={{ color: "oklch(0.65 0.12 80)" }}
                  >
                    Googleマップでルートを確認する →
                  </a>
                </div>
                <div className="rounded-lg overflow-hidden border border-white/10 h-64 md:h-full min-h-[250px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.213264356454!2d134.9658586763433!3d34.90111107284851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3555376993685555%3A0x7864478797777777!2z6IKy5q-b5bCC6ZaA576O5a655a6k44OY44Ki44Oq44K644Og!5e0!3m2!1sja!2sjp!4v1712810000000!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
