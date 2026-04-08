/*
 * FaqSection — 育毛の学校 LP
 * Design: Natural Elegant Green — Light bg accordion FAQ
 * Content: 参考サイトの内容ベース
 */

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 現在の月の末日を「YYYY年M月末日」形式で返す関数
function getMonthEndLabel(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1-indexed
  return `${year}年${month}月末日`;
}

const monthEnd = getMonthEndLabel();

const faqs = [
  {
    q: "受講形式はどのようになっていますか？",
    a: "2日間（計2日間、10:00〜17:00、昼食時間込み）の集中講座です。ご希望の日時に開催し、ご家族の都合など時間の調整も可能です。ZOOM受講・動画での受講も選択できます。",
  },
  {
    q: "開催場所はどこですか？",
    a: "兵庫県です。伊丹空港、神戸空港、新神戸駅まで送迎いたします。また、全国どこへでも出張対応しております。",
  },
  {
    q: "参加費用はいくらですか？",
    a: `ノーマルプランは698,000円（税抜）です。${monthEnd}までのお申し込みに限り割引価格659,800円（税抜）で受講可能です（ZOOMのみの受講、動画での受講も可能）。マスタープランは1,219,800円税抜（上記講座＋機材）。${monthEnd}までのお申し込みに限り1,119,800円（税抜）で受講可能です。クレジットカードでの分割払いは24回まで対応可能です。`,
  },
  {
    q: "商材のみの利用は可能ですか？",
    a: "はい、商材のみの利用（無料）も可能です。サロン登録後、【育毛の学校】よりお得に発注可能。ご登録の前に商品の使い方をZOOMで説明させていただきます。",
  },
  {
    q: "受講後のサポートはありますか？",
    a: "講座終了後も継続サポート。電話・LINE・FBなどを通じて一生「無料」でサポートいたします。集客方法指導（チラシ・ポップなど）、カウンセリング指導（随時）、抜け毛診断の指導、取扱い商品の知識・効果効能指導など幅広くサポートします。※修得講習後の訪問指導のみ、有料となります。",
  },
  {
    q: "修了証・ディプロマはもらえますか？",
    a: "はい、全カリキュラムを修了された方には終了証・ディプロマを発行いたします。サロンのウェブサイトや名刺に掲載でき、専門性のアピールに活用いただけます。",
  },
  {
    q: "潤うヘッドスパ習得コースとは何ですか？",
    a: "実際に育毛コースで行っているヘッドスパを習得していただくコースです。19,800円（税込）。潤うヘッドスパ手順動画のみ（19,800円税込）のご購入も可能です。",
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
      >
        <div className="flex gap-3 items-start">
          <span
            className="text-sm font-bold flex-shrink-0 mt-0.5"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.48 0.10 148)" }}
          >
            Q.
          </span>
          <span
            className="text-sm leading-relaxed transition-colors duration-200"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              color: open ? "oklch(0.38 0.09 148)" : "oklch(0.30 0.02 60)",
              fontWeight: 400
            }}
          >
            {q}
          </span>
        </div>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-lg font-light transition-all duration-300 mt-0.5"
          style={{
            color: "oklch(0.52 0.09 148)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)"
          }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? "400px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="flex gap-3 pb-5 pl-0">
          <span
            className="text-sm font-bold flex-shrink-0"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.65 0.07 148)" }}
          >
            A.
          </span>
          <p
            className="text-sm leading-[1.9]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: listRef } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 md:py-28" style={{ background: "oklch(0.97 0.02 148)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left header */}
          <div ref={headerRef} className="fade-up lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="sage-line" />
              <span className="section-label">FAQ</span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4 leading-tight"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
            >
              よくある
              <br />
              ご質問
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
            >
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
          </div>

          {/* Right FAQ list */}
          <div
            ref={listRef}
            className="fade-up lg:col-span-8 bg-white rounded-sm p-6 md:p-8"
            style={{ border: "1px solid oklch(0.88 0.04 148)", boxShadow: "0 4px 20px oklch(0.52 0.09 148 / 0.07)" }}
          >
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
