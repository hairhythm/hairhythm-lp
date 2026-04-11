/*
 * ContactSection — 改訂版
 * - Googleマップ埋め込み追加
 * - 予約フォームCTA（LP内完結型）追加
 * - クロージングCTA + サロン情報
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

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

function getDeadlineMonth(): string {
  const now = new Date();
  const month = now.getMonth() + 1;
  return `${month}月末`;
}

function ReservationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 入力内容をLINEメッセージに包めて送信
    const lines = [
      "【初回カウンセリング予約】",
      `お名前：${name}`,
      `お電話番号：${phone}`,
    ];
    if (date) lines.push(`ご希望日時：${date}`);
    if (concern) lines.push(`現在のお悩み：${concern}`);
    const message = encodeURIComponent(lines.join("\n"));
    // LINE公式アカウントID: hrc7378e（%40hrc7378eは@hrc7378eのエンコード）
    window.open(`https://line.me/R/oaMessage/%40hrc7378e/?${message}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="p-8 rounded-lg text-center"
        style={{ background: "oklch(0.22 0.08 148 / 0.8)", border: "1px solid oklch(0.65 0.12 80 / 0.5)" }}
      >
        <p className="text-2xl mb-3">✅</p>
        <p className="text-white font-bold mb-2" style={{ fontFamily: "'Shippori Mincho', serif" }}>
          ありがとうございます
        </p>
        <p className="text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.82 0.03 148)", fontWeight: 300 }}>
          LINEにてご予約の詳細をご確認ください。<br />
          担当者より折り返しご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.03 148)" }}>
          お名前 <span style={{ color: "oklch(0.65 0.12 80)" }}>*</span>
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="例：山田 花子"
          className="w-full px-4 py-3 rounded text-sm outline-none"
          style={{
            background: "oklch(0.22 0.06 148 / 0.6)",
            border: "1px solid oklch(0.55 0.06 148 / 0.5)",
            color: "white",
            fontFamily: "'Noto Sans JP', sans-serif",
          }}
        />
      </div>
      <div>
        <label className="block text-xs mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.03 148)" }}>
          お電話番号 <span style={{ color: "oklch(0.65 0.12 80)" }}>*</span>
        </label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="例：090-0000-0000"
          className="w-full px-4 py-3 rounded text-sm outline-none"
          style={{
            background: "oklch(0.22 0.06 148 / 0.6)",
            border: "1px solid oklch(0.55 0.06 148 / 0.5)",
            color: "white",
            fontFamily: "'Noto Sans JP', sans-serif",
          }}
        />
      </div>
      <div>
        <label className="block text-xs mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.03 148)" }}>
          ご希望日時（第1・第2希望）
        </label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="例：4/20(土)午後、4/22(火)午前"
          className="w-full px-4 py-3 rounded text-sm outline-none"
          style={{
            background: "oklch(0.22 0.06 148 / 0.6)",
            border: "1px solid oklch(0.55 0.06 148 / 0.5)",
            color: "white",
            fontFamily: "'Noto Sans JP', sans-serif",
          }}
        />
      </div>
      <div>
        <label className="block text-xs mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.03 148)" }}>
          現在のお悩み（任意）
        </label>
        <select
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
          className="w-full px-4 py-3 rounded text-sm outline-none"
          style={{
            background: "oklch(0.22 0.06 148)",
            border: "1px solid oklch(0.55 0.06 148 / 0.5)",
            color: concern ? "white" : "oklch(0.60 0.03 148)",
            fontFamily: "'Noto Sans JP', sans-serif",
          }}
        >
          <option value="">選択してください（任意）</option>
          <option value="頭頂部の薄毛">頭頂部の薄毛・透け感</option>
          <option value="全体的なボリューム不足">全体的なボリューム不足</option>
          <option value="産後の抜け毛">産後の抜け毛・薄毛</option>
          <option value="生え際の後退">生え際の後退</option>
          <option value="頭皮のかゆみ・フケ">頭皮のかゆみ・フケ</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-4 px-6 text-sm font-medium text-white rounded transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
        style={{
          background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)",
          border: "2px solid oklch(0.65 0.12 80)",
          fontFamily: "'Noto Sans JP', sans-serif",
          boxShadow: "0 4px 20px oklch(0.28 0.08 148 / 0.5)",
        }}
      >
        この内容でLINEに送って予約する →
      </button>
      <p className="text-center text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 148)" }}>
        ※ LINEが開きます。メッセージを送信して予約完了です。
      </p>
    </form>
  );
}

export default function ContactSection() {
  const { ref } = useScrollAnimation();
  const { ref: mapRef } = useScrollAnimation();
  const remainingSlots = calcRemainingSlots();
  const deadline = getDeadlineMonth();

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

            {/* ===== 予約フォームCTA ===== */}
            <div className="mb-10">
              <div
                className="p-6 rounded-xl"
                style={{ background: "oklch(0.22 0.07 148 / 0.9)", border: "2px solid oklch(0.65 0.12 80 / 0.5)", boxShadow: "0 8px 40px oklch(0.15 0.05 148 / 0.5)" }}
              >
                <div className="text-center mb-6">
                  <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
                    ── RESERVATION ──
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "'Shippori Mincho', serif" }}>
                    初回カウンセリング予約フォーム
                  </h3>
                  <p className="text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.03 148)" }}>
                    入力後、LINEに自動転送されます。1分で完了。
                  </p>
                </div>
                <ReservationForm />
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
            <div
              className="p-6 rounded-lg mb-8"
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

            {/* ===== Googleマップ ===== */}
            <div ref={mapRef} className="fade-up">
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid oklch(0.65 0.12 80 / 0.3)", boxShadow: "0 4px 20px oklch(0.15 0.05 148 / 0.4)" }}
              >
                <div
                  className="px-4 py-3 flex items-center justify-between"
                  style={{ background: "oklch(0.22 0.07 148 / 0.9)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">📍</span>
                    <span className="text-sm font-medium text-white" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                      育毛専門美容室ヘアリズム
                    </span>
                  </div>
                  <a
                    href={MAP_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 rounded transition-opacity hover:opacity-80"
                    style={{
                      background: "oklch(0.65 0.12 80 / 0.25)",
                      color: "oklch(0.88 0.14 80)",
                      border: "1px solid oklch(0.65 0.12 80 / 0.4)",
                      fontFamily: "'Noto Sans JP', sans-serif",
                    }}
                  >
                    Googleマップで開く →
                  </a>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5!2d134.9856!3d34.9423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e5a0b5e9b5c5%3A0x0!2z5YW25bqX55yM5Yqg5p2x5biC5LiL5LmX57-U77yY77yY77yQ4oiS77yT!5e0!3m2!1sja!2sjp!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="育毛専門美容室ヘアリズム 地図"
                />
                <div
                  className="px-4 py-3 text-center"
                  style={{ background: "oklch(0.22 0.07 148 / 0.9)" }}
                >
                  <p className="text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.03 148)" }}>
                    兵庫県加東市下久米880-3 ／ JR社町駅より車で15分 ／ 駐車場完備
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
