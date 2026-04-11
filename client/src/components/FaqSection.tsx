/*
 * FaqSection — LP最終確定版 FAQ
 */
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LINE_URL = "https://lin.ee/oV9r3at";

const faqs = [
  {
    q: "本当に4,980円以外にお金はかかりませんか？",
    a: "はい、一切かかりません。当日の診断料、施術料、プレゼントする化粧水代、すべて含まれております。高額なコースを無理やり契約させるようなことも絶対にありませんので、安心してお財布一つでお越しください。",
  },
  {
    q: "他のお客さんに会いたくないのですが…",
    a: "完全個室・完全予約制ですのでご安心ください。他のお客様と顔を合わせることがないよう、予約時間を調整しております。また、店舗看板や駐車場も配慮しており、外からは「美容室に行っている」ようにしか見えません。",
  },
  {
    q: "男性でも利用できますか？",
    a: "もちろん大歓迎です。現在は女性のお客様が多いですが、30代〜60代の男性のお客様も多数通われており、素晴らしい結果を出されています。「美容室は入りにくい」という男性も、個室ですので気兼ねなくお越しください。",
  },
  {
    q: "どのくらいで変化を実感できますか？",
    a: "早い方で1ヶ月、平均して3ヶ月で変化を感じられます。まずは「抜け毛が減る」「髪にコシが出る」ことから始まり、3ヶ月目あたりで「ボリューム感」の変化に気づかれる方が多いです。マイクロスコープで見れば、頭皮の変化はその場ですぐに分かります。",
  },
  {
    q: "かつらや植毛とは何が違うのですか？",
    a: "「自分の髪」を生やす点が最大の違いです。かつらや増毛は即効性がありますが、メンテナンス費用がかかり続け、根本的な解決にはなりません。ヘアリズムのメソッドは、あなたの眠っている細胞を呼び覚まし、自分の髪を取り戻すことを目的としています。",
  },
  {
    q: "敏感肌なのですが、施術を受けられますか？",
    a: "はい、大丈夫です。当サロンで使用する薬剤は、薬ではなく「フルボ酸」や「ヒト幹細胞培養上清液」など、体に優しい成分が中心です。副作用のリスクもありません。カウンセリング時に肌の状態をしっかり確認してから施術を行います。",
  },
  {
    q: "駐車場はありますか？",
    a: "はい、店舗前に無料駐車場を完備しています。お車でも安心してお越しいただけます。（加東市外、小野市、三木市、西脇市からも多数ご来店いただいております）",
  },
  {
    q: "本当に生えるの？と不安なのですが…",
    a: "まずは、無料のLINE相談で、今の悩みをつぶやいてみてください。オーナーの橋本が直接、お返事させていただきます。「本当に生えるの？」と不安なままでも構いません。",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ background: "#fff", border: "1px solid oklch(0.88 0.03 148)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-5 text-left transition-colors hover:bg-gray-50"
      >
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
          style={{ background: "oklch(0.38 0.10 148 / 0.12)", color: "oklch(0.28 0.09 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          Q
        </span>
        <span className="flex-1 text-sm font-medium" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.22 0.02 60)" }}>
          {q}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="flex-shrink-0 mt-0.5 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M4 6l4 4 4-4" stroke="oklch(0.65 0.12 80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div
          className="px-5 pb-5 flex gap-3"
          style={{ borderTop: "1px solid oklch(0.92 0.02 148)" }}
        >
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-3"
            style={{ background: "oklch(0.65 0.12 80 / 0.2)", color: "oklch(0.65 0.12 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            A
          </span>
          <p className="text-sm leading-relaxed pt-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.02 60)", fontWeight: 300 }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  const { ref } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 px-4" style={{ background: "oklch(0.97 0.01 148)" }}>
      <div className="container max-w-3xl mx-auto">
        <div ref={ref} className="fade-up">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}>
              ── FAQ ──
            </p>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-3"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
            >
              迷われているあなたへ<br />
              よくいただくご質問にお答えします
            </h2>
          </div>
          <div className="space-y-3 mb-10">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <div
            className="p-6 rounded-lg text-center"
            style={{ background: "linear-gradient(135deg, oklch(0.22 0.08 148) 0%, oklch(0.28 0.09 148) 100%)", border: "1px solid oklch(0.65 0.12 80 / 0.4)" }}
          >
            <p className="text-base font-medium text-white mb-2" style={{ fontFamily: "'Shippori Mincho', serif" }}>
              「本当に生えるの？」と不安なままでも構いません。
            </p>
            <p className="text-sm mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.82 0.03 148)", fontWeight: 300 }}>
              まずは、無料のLINE相談で、今の悩みをつぶやいてみてください。<br />
              私が直接、お返事させていただきます。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90"
              style={{
                background: "oklch(0.38 0.10 148 / 0.8)",
                border: "1px solid oklch(0.65 0.12 80)",
                fontFamily: "'Noto Sans JP', sans-serif"
              }}
            >
              <svg width="16" height="16" viewBox="0 0 48 48" fill="white">
                <path d="M24 4C12.95 4 4 11.82 4 21.5c0 5.84 3.17 11.02 8.12 14.38L10 38l4.8-2.4c2.88.88 5.96 1.4 9.2 1.4 11.05 0 20-7.82 20-17.5S35.05 4 24 4z"/>
              </svg>
              LINE相談ボタン
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
