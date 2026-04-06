/*
 * HeroSection — 育毛の学校 LP
 * Design: Full-viewport dark hero with champagne gold typography
 * Background: Generated luxury salon image with dark overlay
 * Layout: Asymmetric — large left-aligned display text
 */

import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/hero-bg-HPFA36v5B9oD3KgYZwKzDb.webp";

export default function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      titleRef.current?.classList.add("visible");
    }, 200);
    const timer2 = setTimeout(() => {
      subtitleRef.current?.classList.add("visible");
    }, 600);
    const timer3 = setTimeout(() => {
      ctaRef.current?.classList.add("visible");
    }, 1000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay — gradient from left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.06_0.005_60/0.95)] via-[oklch(0.08_0.005_60/0.80)] to-[oklch(0.10_0.005_60/0.50)]" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.10_0.005_60)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 container py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            ref={titleRef}
            className="fade-up mb-6"
          >
            <span
              className="inline-block text-xs tracking-[0.4em] text-gold uppercase border border-gold/30 px-4 py-2"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              For Salon Owners
            </span>
          </div>

          {/* Main Title */}
          <div ref={subtitleRef} className="fade-up mb-8">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span className="block text-gradient-gold">育毛の</span>
              <span className="block">学校</span>
            </h1>
            <div className="gold-line w-24 my-6" />
            <p
              className="text-base md:text-lg text-[oklch(0.75_0.008_60)] leading-relaxed max-w-xl"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              サロンオーナーのための、科学と技術が融合した<br className="hidden md:block" />
              最高峰の育毛専門教育プログラム。<br className="hidden md:block" />
              あなたのサロンに、圧倒的な差別化をもたらす。
            </p>
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="fade-up flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-[oklch(0.10_0.005_60)] text-sm tracking-[0.2em] font-medium hover:bg-gold-light transition-all duration-300 group"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              無料相談・お問い合わせ
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center px-8 py-4 border border-[oklch(0.50_0.008_60)] text-[oklch(0.75_0.008_60)] text-sm tracking-[0.2em] hover:border-gold hover:text-gold transition-all duration-300"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              詳しく見る
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
