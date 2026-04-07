/*
 * TestimonialsSection — 育毛の学校 LP
 * Design: Natural Elegant Green — White cards on sage bg
 * Content: 参考サイトの実際の受講者の声（頼兼・中尾・Lampsi・庄子・中島）
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const YORIKANE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/testimonial-yorikane_d3a7db12.webp";
const NAKAO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/testimonial-nakao_d80f0105.webp";
const LAMPSI_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/testimonial-lampsi_601f41a8.webp";
const SHOJI_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/testimonial-shoji-dl_2376b9c8.jpg";
const NAKAJIMA_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/testimonial-nakajima-dl_2c2f1810.jpg";
const SALON_COLLAGE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/salon-collage_f528377b.webp";

const testimonials = [
  {
    image: YORIKANE_URL,
    name: "頼兼 未笑 オーナー",
    salon: "一人サロン",
    result: "月商270万円達成",
    quote: "育毛の学校で学んでから、お客様への提案が自信を持ってできるようになりました。売り込みなしで高額商品が自然に売れるようになり、月商270万円を達成。おひとりのお客様から100万円以上のご契約をいただいたこともあります。",
  },
  {
    image: NAKAO_URL,
    name: "中尾 沙織 オーナー",
    salon: "美容室オーナー",
    result: "月商240万円達成",
    quote: "以前は育毛メニューを導入しても売れるか不安でした。でも橋本先生のクロージング方法を実践したら、月商240万円を達成できました。おひとりのお客様から100万円以上のご契約もいただいています！",
  },
  {
    image: LAMPSI_URL,
    name: "Lampsiヘアー",
    salon: "グループサロン",
    result: "月商300万円アップ",
    quote: "スタッフ全員で受講し、チーム全体で育毛メニューに取り組めるようになりました。導入後は月商300万円アップを達成し、今では毎月安定して高い売上を維持しています。",
  },
];

const extraTestimonials = [
  {
    image: SHOJI_URL,
    name: "庄子 堅哉さん・麻佑子さん ご夫妻",
    salon: "ご夫婦サロンオーナー",
    result: "導入3ヶ月で売上40％アップ",
    quote: "導入からわずか3ヶ月で売上が40％アップしました。夫婦で一緒に受講したことで、サロン全体として育毛に取り組む体制が整い、お客様からの信頼も大きく高まりました。",
  },
  {
    image: NAKAJIMA_URL,
    name: "中島 和晃 オーナー",
    salon: "しゅくるithnani（東京・長野）",
    result: "月商1,600万円・2店舗目も月商650万円",
    quote: "一人サロンで月商1,600万円を達成し、2店舗目を出店。2店舗目でも月商650万円を達成しています。育毛の学校で学んだノウハウが、サロン拡大の大きな原動力になっています。",
  },
];

export default function TestimonialsSection() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: cardsRef } = useScrollAnimation();
  const { ref: extraRef } = useScrollAnimation();

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "oklch(0.99 0.005 90)" }}
    >
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="sage-line" />
            <span className="section-label">Testimonials</span>
            <div className="sage-line" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
          >
            受講者の声
          </h2>
          <p
            className="text-sm max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
          >
            全国のサロンオーナーが育毛の学校で学び、サロンを変革しました。
          </p>
        </div>

        {/* Main 3 cards */}
        <div
          ref={cardsRef}
          className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-natural overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Result badge */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3"
                  style={{ background: "linear-gradient(to top, oklch(0.48 0.10 148 / 0.9) 0%, transparent 100%)" }}
                >
                  <p
                    className="text-xs font-medium text-white"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    ✓ {t.result}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className="block text-5xl leading-none mb-3"
                  style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.80 0.06 148)" }}
                >
                  "
                </span>

                <p
                  className="text-sm leading-[1.9] mb-5"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.42 0.02 60)", fontWeight: 300 }}
                >
                  {t.quote}
                </p>

                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid oklch(0.90 0.03 148)" }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.38 0.09 148)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 60)" }}
                  >
                    {t.salon}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra 2 testimonials — horizontal cards with real photos */}
        <div
          ref={extraRef}
          className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {extraTestimonials.map((t) => (
            <div
              key={t.name}
              className="card-natural overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                {/* Result badge */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3"
                  style={{ background: "linear-gradient(to top, oklch(0.48 0.10 148 / 0.9) 0%, transparent 100%)" }}
                >
                  <p
                    className="text-xs font-medium text-white"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    ✓ {t.result}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className="block text-5xl leading-none mb-3"
                  style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.80 0.06 148)" }}
                >
                  "
                </span>
                <p
                  className="text-sm leading-[1.9] mb-4"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.42 0.02 60)", fontWeight: 300 }}
                >
                  {t.quote}
                </p>
                <div
                  className="pt-3"
                  style={{ borderTop: "1px solid oklch(0.90 0.03 148)" }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.38 0.09 148)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 60)" }}
                  >
                    {t.salon}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Salon collage */}
        <div
          className="overflow-hidden"
          style={{ borderRadius: "8px", boxShadow: "0 8px 32px oklch(0.52 0.09 148 / 0.12)" }}
        >
          <img
            src={SALON_COLLAGE_URL}
            alt="全国導入サロン"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div
            className="px-6 py-4 text-center"
            style={{ background: "oklch(0.97 0.02 148)" }}
          >
            <p
              className="text-sm font-medium"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.38 0.09 148)" }}
            >
              全国70店舗以上のサロンが育毛の学校を導入
            </p>
            <p
              className="text-xs mt-1"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.03 60)" }}
            >
              北海道から沖縄まで、全国各地のサロンオーナーが活躍中
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
