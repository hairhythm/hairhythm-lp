/*
 * StatsSection — 育毛の学校 LP
 * Design: Natural Elegant Green — Sage green bg with white numbers
 * Layout: 4-column horizontal stats bar with count-up animation
 */

import { useCountUp } from "@/hooks/useScrollAnimation";

function StatItem({ value, suffix, label, sublabel, note }: { value: number; suffix: string; label: string; sublabel: string; note?: string }) {
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
      {note && (
        <p
          className="text-xs mt-2 px-2 py-1 rounded"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            color: "oklch(0.98 0.02 90)",
            background: "oklch(0.38 0.09 148 / 0.5)",
            lineHeight: "1.6",
          }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

function StatItemText({ main, suffix, label, sublabel }: { main: string; suffix?: string; label: string; sublabel: string }) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      <div className="flex items-baseline gap-1 flex-wrap justify-center">
        <span
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{ fontFamily: "'Shippori Mincho', serif", color: "white" }}
        >
          {main}
        </span>
        {suffix && (
          <span
            className="text-lg font-medium"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.90 0.04 148)" }}
          >
            {suffix}
          </span>
        )}
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
          <StatItem value={70} suffix="+" label="導入サロン数" sublabel="全国各地で活躍中" />
          <StatItem value={1600} suffix="万円" label="月商達成実績" sublabel="4人サロンの最高実績" />
          <StatItem value={500} suffix="万円" label="一人サロン2月売上" sublabel="月商達成事例" note="2月・8月はサロンの閑散期。でも抜け毛が増えるこの時期こそ、育毛メニューの需要が急増します。" />
          <StatItemText main="200%" suffix="以上多数" label="売上アップ事例" sublabel="導入後の達成実績" />
        </div>
      </div>
    </section>
  );
}
