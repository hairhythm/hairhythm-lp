/*
 * StatsSection — 育毛専門美容室ヘアリズム LP
 * Design: Deep Forest Green x Gold — 実績数字
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { num: "15", unit: "年", label: "育毛専門の経験" },
  { num: "500", unit: "名以上", label: "施術実績" },
  { num: "4.9", unit: "/ 5.0", label: "お客様満足度" },
  { num: "3", unit: "ヶ月", label: "平均実感期間" },
];

export default function StatsSection() {
  const { ref } = useScrollAnimation();

  return (
    <section
      className="py-14 md:py-20"
      style={{
        background: "linear-gradient(135deg, oklch(0.22 0.08 148) 0%, oklch(0.28 0.09 148) 100%)",
        borderTop: "1px solid oklch(0.65 0.12 80 / 0.3)",
        borderBottom: "1px solid oklch(0.65 0.12 80 / 0.3)"
      }}
    >
      <div className="container">
        <div
          ref={ref}
          className="fade-up grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span
                  className="text-3xl md:text-4xl font-bold"
                  style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.88 0.12 80)" }}
                >
                  {s.num}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "oklch(0.80 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {s.unit}
                </span>
              </div>
              <p
                className="text-xs"
                style={{ color: "oklch(0.78 0.05 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
