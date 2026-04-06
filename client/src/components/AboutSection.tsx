/*
 * AboutSection — 育毛の学校 LP
 * Design: Asymmetric 2-column — large image left, text right
 * Background: About section image with gold accent details
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/about-section-ZjmoTmucFCam2mzXqdbnbp.webp";

export default function AboutSection() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — left */}
          <div ref={leftRef} className="fade-up relative">
            <div className="relative overflow-hidden">
              <img
                src={ABOUT_IMG}
                alt="育毛の専門的な研究・施術"
                className="w-full h-[400px] md:h-[520px] object-cover"
              />
              {/* Gold corner accent */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-gold" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-gold" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.005_60/0.4)] to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[oklch(0.13_0.005_60)] border border-gold/30 p-6 hidden md:block">
              <p className="text-xs tracking-[0.3em] text-gold uppercase mb-1">Since</p>
              <p
                className="text-4xl font-light text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                2012
              </p>
            </div>
          </div>

          {/* Text — right */}
          <div ref={rightRef} className="fade-up">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4"
              style={{ fontFamily: "'Noto Serif JP', serif" }}>
              About
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              育毛の学校とは
            </h2>
            <div className="gold-line w-16 mb-8" />

            <div
              className="space-y-5 text-[oklch(0.70_0.008_60)] leading-relaxed"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.9rem" }}
            >
              <p>
                「育毛の学校」は、サロンオーナーが本物の育毛技術を習得するための専門教育機関です。単なるテクニックの伝授ではなく、毛髪科学・頭皮生理学・栄養学を体系的に学ぶことで、顧客に対して真の価値を提供できる専門家を育成します。
              </p>
              <p>
                2012年の創設以来、500名を超えるサロンオーナーが受講し、育毛専門メニューを導入することで平均3倍の売上向上を実現してきました。
              </p>
              <p>
                私たちが目指すのは、「育毛」を単なるサービスではなく、サロンの核となる専門性として確立することです。科学的根拠に基づいた施術と、顧客に寄り添うカウンセリング技術を両立させた、唯一無二の教育プログラムをご提供します。
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "毛髪科学に基づく", desc: "最新の毛髪・頭皮研究を反映したカリキュラム" },
                { title: "即実践可能", desc: "翌日からサロンで活用できる実践的な技術" },
                { title: "継続サポート", desc: "受講後も専門家によるフォローアップ体制" },
                { title: "少人数制", desc: "一人ひとりに丁寧に対応する少人数クラス" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start">
                  <div className="w-1 h-full min-h-[2rem] bg-gold mt-1 flex-shrink-0" />
                  <div>
                    <p
                      className="text-sm text-white mb-1"
                      style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 500 }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-xs text-muted-foreground leading-relaxed"
                      style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
