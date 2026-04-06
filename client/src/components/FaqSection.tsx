/*
 * FaqSection — 育毛の学校 LP
 * Design: Dark luxury accordion FAQ
 * Layout: Single column with gold expand indicators
 */

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "美容師・理容師の資格がなくても受講できますか？",
    a: "はい、受講いただけます。育毛の学校では、美容師・理容師の資格の有無に関わらず、サロンオーナーや育毛に関わる業務に従事されている方を広く受け入れています。ただし、施術を行う場合は各都道府県の法令に従ってください。",
  },
  {
    q: "受講形式はオンラインですか？対面ですか？",
    a: "オンラインと対面の両方をご用意しています。理論学習はオンラインで自分のペースで進め、実技講習は少人数制の対面セミナーで行います。全国各地で開催していますので、お近くの会場をお選びいただけます。",
  },
  {
    q: "受講期間はどのくらいですか？",
    a: "基本コースは約3ヶ月間です。週1〜2回のペースで学習を進め、実技セミナーは月1回程度開催されます。お仕事をしながら無理なく学べるスケジュール設計になっています。",
  },
  {
    q: "受講後のサポートはありますか？",
    a: "受講後も継続的なサポートを提供しています。専用のオンラインコミュニティへのアクセス、月次のフォローアップセミナー、個別相談（月2回まで）など、学んだ知識を実践に活かせるよう継続的にサポートします。",
  },
  {
    q: "受講料金はいくらですか？",
    a: "コースによって異なります。詳細な料金はお問い合わせフォームよりご連絡いただくか、無料相談にてご説明いたします。分割払いにも対応していますので、お気軽にご相談ください。",
  },
  {
    q: "受講後に何か資格・認定証は取得できますか？",
    a: "全カリキュラムを修了された方には、「育毛の学校 認定スペシャリスト」の認定証を発行しています。この認定はサロンのウェブサイトや名刺に掲載でき、専門性のアピールに活用いただけます。",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b border-[oklch(0.22_0.008_60)] last:border-b-0"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <button
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        onClick={() => setOpen(!open)}
      >
        <div className="flex gap-4 items-start">
          <span
            className="text-gold text-sm flex-shrink-0 mt-0.5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Q.
          </span>
          <span
            className="text-sm md:text-base text-[oklch(0.85_0.008_60)] group-hover:text-white transition-colors duration-300 leading-relaxed"
            style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 400 }}
          >
            {q}
          </span>
        </div>
        <span
          className={`flex-shrink-0 w-5 h-5 border border-gold/40 flex items-center justify-center text-gold text-xs transition-all duration-300 mt-0.5 ${open ? "rotate-45 bg-gold/10" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex gap-4 pb-6">
          <span
            className="text-[oklch(0.50_0.008_60)] text-sm flex-shrink-0"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A.
          </span>
          <p
            className="text-sm text-muted-foreground leading-relaxed"
            style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const headerRef = useScrollAnimation();
  const listRef = useScrollAnimation();

  return (
    <section id="faq" className="py-24 md:py-36 bg-[oklch(0.12_0.005_60)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left header */}
          <div ref={headerRef} className="fade-up lg:col-span-4">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4"
              style={{ fontFamily: "'Noto Serif JP', serif" }}>
              FAQ
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              よくある<br />ご質問
            </h2>
            <div className="gold-line w-16 mb-6" />
            <p
              className="text-sm text-muted-foreground leading-relaxed"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
          </div>

          {/* Right FAQ list */}
          <div ref={listRef} className="fade-up lg:col-span-8">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
