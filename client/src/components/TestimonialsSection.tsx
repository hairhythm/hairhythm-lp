/*
 * TestimonialsSection — 改訂版
 * - 事例画像をスライダー形式で大量追加
 * - ホワイトボード画像：object-contain で全体表示・重複削除
 * - Googleレビュー4.8（件数なし）
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

// 事例ビフォーアフター画像（スライダー）
const CASE_PAIRS = [
  {
    title: "事例①",
    age: "50代女性",
    period: "育毛コース6ヶ月",
    images: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/bjixZaSZWUlFeBuP.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/FaQWFeRBuwhzewHF.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/zecGIctIchpZVIWS.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/ydiygPITqLvRmuvI.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/vHcMxNLDwjZubNLs.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/lGZPNMgrAbVCvOCJ.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/xnFDZRXyMBVMaeOe.jpg",
    ],
    quote: "美容室に行くのが、10年ぶりに楽しみになりました",
  },
  {
    title: "事例②",
    age: "70代女性",
    period: "育毛コース4ヶ月",
    images: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/dwNAEGBnFNDbBfQJ.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/nCQwbJYyHRPnAQzY.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/qzUxkJapQsuIvzls.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/UUzTaIcQONbBSvhT.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/oYiguKmSZOQiWbtx.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/hnatvrWXahyoQBke.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/wiYTCWwGAaIAkuYF.jpg",
    ],
    quote: "孫から「おばあちゃん若くなった」と言われました",
  },
  {
    title: "事例③",
    age: "40代女性",
    period: "産後ケアから継続",
    images: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/DxowyRLtPRUnCrpC.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/GPSxhuRRbEftZCXU.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/BrPAwgPQrpfSiDUG.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/MZDxgpxHrMrDYCno.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/OhwJdSsszCzBwlxR.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/zVqwpXNlOXdurVjJ.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/ykFaDjDXPfpstXFE.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/AajyBxVuWKEStvyL.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/RJqygsvvdinufsKc.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/TvJSiSDgbRRFmxEf.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/crKniYUhFrlWwqel.jpg",
    ],
    quote: "もっと早く相談すればよかった、その一言に尽きます",
  },
];

// ホワイトボード写真（重複削除：2枚目を削除）
const WHITEBOARD_IMAGES = [
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/gzWSUtyykEoreVKe.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/FgNqzIMZOghFzlZU.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/EblFuvXJKSsEbKKi.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/MnZrTArwpNbyuWHv.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/CINEoofCFMkoBNkf.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/HnJOzzloCMyNPcIK.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/FFqhAuazTNQApcGa.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/jxrPTmTYGcFeZzYn.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663498872949/QlFFRxXWWWihHrzu.jpg",
];

const reviews = [
  { text: "ただの美容室ではありません。人生が変わる場所です", age: "50代女性" },
  { text: "大手の高額サロンでダメだった私が、ここで救われました", age: "40代女性" },
  { text: "個室で誰にも会わずに相談できるのが嬉しかった", age: "30代女性" },
];

// 各事例のスライダーコンポーネント
function CaseSlider({ caseData }: { caseData: typeof CASE_PAIRS[0] }) {
  const [current, setCurrent] = useState(0);
  const total = caseData.images.length;

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid oklch(0.88 0.03 148)", boxShadow: "0 4px 20px oklch(0.88 0.03 148 / 0.4)", background: "#fff" }}
    >
      {/* 画像スライダー */}
      <div className="relative" style={{ background: "#f5f5f5" }}>
        <img
          src={caseData.images[current]}
          alt={`${caseData.title} ${current + 1}枚目`}
          className="w-full"
          style={{ height: "260px", objectFit: "contain", display: "block", margin: "0 auto" }}
        />
        {/* 前後ナビゲーション */}
        {total > 1 && (
          <>
            <button
              onClick={() => setCurrent((c) => (c - 1 + total) % total)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-opacity hover:opacity-90"
              style={{ background: "oklch(0.28 0.08 148 / 0.85)", fontSize: "18px", lineHeight: 1 }}
              aria-label="前の画像"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % total)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-opacity hover:opacity-90"
              style={{ background: "oklch(0.28 0.08 148 / 0.85)", fontSize: "18px", lineHeight: 1 }}
              aria-label="次の画像"
            >
              ›
            </button>
            {/* ドットインジケーター */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {caseData.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === current ? "oklch(0.65 0.12 80)" : "oklch(0.65 0.12 80 / 0.35)" }}
                  aria-label={`画像 ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
        {/* 枚数バッジ */}
        <div
          className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs"
          style={{ background: "oklch(0.15 0.05 148 / 0.75)", color: "white", fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          {current + 1} / {total}
        </div>
      </div>
      {/* テキスト */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded"
            style={{ background: "oklch(0.38 0.10 148)", color: "white", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {caseData.title}
          </span>
          <span className="text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.02 60)" }}>
            {caseData.age}・{caseData.period}
          </span>
        </div>
        <p
          className="text-sm italic"
          style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.30 0.02 60)", borderLeft: "3px solid oklch(0.65 0.12 80)", paddingLeft: "10px" }}
        >
          「{caseData.quote}」
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: casesRef } = useScrollAnimation();
  const { ref: whiteboardRef } = useScrollAnimation();
  const { ref: reviewRef } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 px-4" style={{ background: "oklch(0.93 0.02 148)" }}>
      <div className="container max-w-5xl mx-auto">

        {/* ヘッダー */}
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
          <p className="text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.02 60)", fontWeight: 300 }}>
            「本当に変わるの？」という不安に、実績でお答えします。
          </p>
        </div>

        {/* 事例スライダー */}
        <div ref={casesRef} className="fade-up mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_PAIRS.map((c) => (
              <CaseSlider key={c.title} caseData={c} />
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {WHITEBOARD_IMAGES.map((src, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden flex items-center justify-center"
                style={{
                  border: "1px solid oklch(0.88 0.03 148)",
                  boxShadow: "0 2px 12px oklch(0.88 0.03 148 / 0.4)",
                  background: "#fafafa",
                  minHeight: "180px",
                }}
              >
                <img
                  src={src}
                  alt={`お客様の声 ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "300px",
                    objectFit: "contain",
                    display: "block",
                  }}
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
                <p className="text-white font-bold text-lg" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  Googleレビュー <span style={{ color: "oklch(0.88 0.14 80)" }}>4.8</span>
                </p>
                <p className="text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.75 0.03 148)" }}>
                  Google マップ 実際のお客様の評価
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg"
                  style={{ background: "oklch(0.15 0.06 148 / 0.6)", border: "1px solid oklch(0.65 0.12 80 / 0.2)" }}
                >
                  <p className="text-xs mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.88 0.14 80)" }}>
                    ⭐⭐⭐⭐⭐
                  </p>
                  <p className="text-sm text-white mb-2" style={{ fontFamily: "'Shippori Mincho', serif" }}>
                    「{r.text}」
                  </p>
                  <p className="text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.03 148)" }}>
                    ── {r.age}
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
