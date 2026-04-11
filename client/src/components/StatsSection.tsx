/*
 * StatsSection — LP最終確定版 実績数字
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const statsData = [
  { value: "96.8%", label: "変化を実感した割合", sub: "施術後アンケートより" },
  { value: "2,847名", label: "累計施術実績", sub: "2026年1月時点" },
  { value: "98.3%", label: "リピート率", sub: "継続ケアの証" },
  { value: "4.8", label: "Googleレビュー評価", sub: "" },
];

export default function StatsSection() {
  const { ref } = useScrollAnimation();

  return (
    <section
      id="stats"
      className="py-16 px-4"
      style={{ background: "oklch(0.28 0.08 148)" }}
    >
      <div className="container max-w-4xl mx-auto">
        <div ref={ref} className="fade-up">
          <p
            className="text-center text-xs tracking-[0.3em] uppercase mb-8"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.12 80)" }}
          >
            ── RESULTS ──
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.88 0.14 80)" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-xs font-medium mb-1 text-white"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {s.label}
                </p>
                <p
                  className="text-[10px]"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.03 148)" }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
          <div
            className="mt-8 p-4 rounded-lg text-center"
            style={{ background: "oklch(0.18 0.06 148 / 0.8)", border: "1px solid oklch(0.65 0.12 80 / 0.3)" }}
          >
            <p
              className="text-sm text-white"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              「ただの美容室ではありません。<strong style={{ color: "oklch(0.88 0.14 80)" }}>人生が変わる場所です</strong>」（50代女性）
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
