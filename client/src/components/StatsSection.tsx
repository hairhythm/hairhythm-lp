/*
 * StatsSection — 育毛の学校 LP
 * Design: Dark luxury — large gold numbers with count-up animation
 * Layout: 4-column horizontal stats bar
 */

import { useCountUp, useScrollAnimation } from "@/hooks/useScrollAnimation";

function StatItem({ value, unit, label, delay }: { value: number; unit: string; label: string; delay: string }) {
  const numRef = useCountUp(value);

  return (
    <div
      className="flex flex-col items-center text-center px-6 py-8 border-r border-[oklch(0.22_0.008_60)] last:border-r-0"
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-end gap-1 mb-2">
        <span
          ref={numRef}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-gradient-gold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          0
        </span>
        <span
          className="text-xl md:text-2xl text-gold mb-1"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {unit}
        </span>
      </div>
      <p
        className="text-xs tracking-[0.2em] text-muted-foreground"
        style={{ fontFamily: "'Noto Serif JP', serif" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="bg-[oklch(0.12_0.005_60)] border-y border-[oklch(0.22_0.008_60)]">
      <div className="container">
        <div
          ref={sectionRef}
          className="fade-up grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-[oklch(0.22_0.008_60)]"
        >
          <StatItem value={500} unit="+" label="受講サロンオーナー数" delay="0s" />
          <StatItem value={95} unit="%" label="受講後の顧客満足度" delay="0.1s" />
          <StatItem value={12} unit="年" label="育毛専門教育の実績" delay="0.2s" />
          <StatItem value={3} unit="倍" label="平均売上向上率" delay="0.3s" />
        </div>
      </div>
    </section>
  );
}
