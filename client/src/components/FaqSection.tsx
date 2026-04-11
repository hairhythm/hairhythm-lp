/*
 * FaqSection — 育毛専門美容室ヘアリズム LP
 * Design: Deep Forest Green x Gold — よくある質問
 */
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LINE_URL = "https://lin.ee/oV9r3at";

function getMonthEnd(): string {
  const now = new Date();
  const month = now.getMonth() + 1;
  return `${month}月末`;
}

const faqs = [
  {
    q: "初回体験の4,980円には何が含まれますか？",
    a: `初回カウンセリング（通常10,780円）、潤うヘッドスパ（通常18,150円）、ホームケア頭皮用化粧水（通常4,180円）の3つがすべて含まれています。通常合計33,110円の内容が4,980円でご体験いただけます。この価格は${getMonthEnd()}までの期間限定です。`,
  },
  {
    q: "男性でも利用できますか？",
    a: "ヘアリズムは女性専門のサロンです。40代以上の女性の薄毛・抜け毛に特化したサービスをご提供しています。",
  },
  {
    q: "どのくらいで効果が出ますか？",
    a: "個人差がありますが、多くのお客様は2〜3ヶ月で変化を実感されています。頭皮の状態や薄毛の原因によって異なりますので、まずはカウンセリングでご自身の状態を把握することをお勧めします。",
  },
  {
    q: "予約はどうすればいいですか？",
    a: "LINEまたはお電話（0795-44-1099）でご予約ください。完全予約制のため、ゆったりとした空間でご対応できます。",
  },
  {
    q: "サロンはどこにありますか？",
    a: "兵庫県加東市下久米880-3にございます。お車でお越しの方は駐車場もご利用いただけます。詳しいアクセス方法はLINEにてお問い合わせください。",
  },
  {
    q: "営業時間を教えてください。",
    a: "火曜日〜土曜日の10:00〜19:00です。日曜日・月曜日は定休日となっております。",
  },
  {
    q: "初回体験後、無理に契約を勧められますか？",
    a: "一切ありません。初回体験はあなたの髪と頭皮の状態を知っていただくためのものです。その後のケアプランはご提案しますが、ご契約はお客様のご意思に完全にお任せしています。",
  },
  {
    q: "どんな薄毛に対応していますか？",
    a: "女性の薄毛全般に対応しています。特に40代以降のホルモンバランスの変化による薄毛、産後の抜け毛、ストレスによる抜け毛、頭皮環境の悪化による薄毛などに実績があります。",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: "oklch(0.88 0.04 148)" }}
    >
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-start gap-3">
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
            style={{
              background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)",
              color: "oklch(0.88 0.12 80)",
              fontFamily: "'Shippori Mincho', serif"
            }}
          >
            Q
          </span>
          <span
            className="text-sm font-medium leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.28 0.09 148)" }}
          >
            {q}
          </span>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="flex-shrink-0 mt-1 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M3 6l5 5 5-5" stroke="oklch(0.38 0.09 148)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="pb-5 pl-9">
          <p
            className="text-sm leading-[2]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
          >
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: faqRef } = useScrollAnimation();

  return (
    <section
      id="faq"
      className="py-20 md:py-28"
      style={{ background: "oklch(0.99 0.005 90)" }}
    >
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="sage-line" />
            <span className="section-label">FAQ</span>
            <div className="sage-line" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
          >
            よくあるご質問
          </h2>
        </div>

        {/* FAQ list */}
        <div ref={faqRef} className="fade-up max-w-2xl mx-auto mb-14">
          <div
            className="p-6 md:p-8"
            style={{
              background: "white",
              border: "1px solid oklch(0.88 0.04 148)",
              borderRadius: "4px",
              boxShadow: "0 4px 20px oklch(0.38 0.09 148 / 0.06)"
            }}
          >
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p
            className="text-sm mb-5"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)" }}
          >
            その他のご質問はLINEからお気軽にどうぞ
          </p>
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
            LINEで質問する
          </a>
        </div>
      </div>
    </section>
  );
}
