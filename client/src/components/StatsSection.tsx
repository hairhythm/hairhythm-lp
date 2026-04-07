/*
 * StatsSection — 育毛の学校 LP
 * Design: Natural Elegant Green — Sage green bg with white numbers
 * Layout: 4-column horizontal stats bar with count-up animation
 */

import { useCountUp } from "@/hooks/useScrollAnimation";

function StatItem({ value, suffix, label, sublabel }: { value: number; suffix: string; label: string; sublabel: string }) {
  const numRef = useCountUp(value);

  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      <div className="flex items-baseline gap-1">
        <span
          ref={numRef}
          className="text-5xl md:text-6xl font-bold"
          style={{ fontFamily: "'Shippori Mincho', serif", color: "white" }}
        >
          0
        </span>
        <span
          className="text-xl font-medium"
          style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.90 0.04 148)" }}
        >
          {suffix}
        </span>
      </div>
      <p
        className="text-sm font-medium mt-2"
        style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "white" }}
      >
        {label}
      </p>
      <p
        className="text-xs mt-1"
        style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.85 0.04 148)" }}
      >
        {sublabel}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "oklch(0.48 0.10 148)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[oklch(0.60_0.08_148)]">
          <StatItem value={50} suffix="+" label="導入サロン数" sublabel="全国各地で活躍中" />
          <StatItem value={270} suffix="万円" label="月商達成実績" sublabel="一人サロンの事例" />
          <StatItem value={100} suffix="%" label="受講者満足度" sublabel="アンケート調査より" />
          <StatItem value={6} suffix="ヶ月" label="継続サポート" sublabel="修了後も安心" />
        </div>
      </div>
    </section>
  );
}
