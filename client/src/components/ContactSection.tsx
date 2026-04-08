/*
 * ContactSection — 育毛の学校 LP
 * Design: Natural Elegant Green — Sage bg with formzu iframe
 * Layout: 2-column — left copy + LINE CTA, right formzu iframe
 */

import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trackLineClick, trackFormSubmit } from "@/lib/analytics";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/ikumou-logo_193d602f.webp";

export default function ContactSection() {
  const { ref: leftRef } = useScrollAnimation();
  const { ref: rightRef } = useScrollAnimation();

  // FormzuのpostMessageでフォーム送信を検知しGA4に送信
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Formzuは送信完了時に"complete"や"thanks"を含むメッセージを送る
      if (
        event.origin.includes("formzu.net") &&
        (
          (typeof event.data === "string" && /(complete|thanks|submit|sent)/i.test(event.data)) ||
          (typeof event.data === "object" && event.data !== null && /(complete|thanks|submit|sent)/i.test(JSON.stringify(event.data)))
        )
      ) {
        trackFormSubmit();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section
      id="contact"
      className="py-20 md:py-28 overflow-hidden relative"
      style={{ background: "oklch(0.48 0.10 148)" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 15% 50%, white 1px, transparent 1px), radial-gradient(circle at 85% 50%, white 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Copy */}
          <div ref={leftRef} className="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "oklch(0.85 0.04 148)" }} />
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.85 0.04 148)" }}
              >
                Contact
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-semibold text-white mb-5 leading-tight"
              style={{ fontFamily: "'Shippori Mincho', serif" }}
            >
              まずは
              <br />
              無料相談から
            </h2>

            <p
              className="text-sm leading-[2] mb-8"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.90 0.04 148)", fontWeight: 300 }}
            >
              育毛の学校への入学に関するご質問、カリキュラムの詳細、料金のご相談など、どんな小さなことでもお気軽にお問い合わせください。専門のスタッフが丁寧にご対応いたします。
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: "✓", title: "無料相談実施中", desc: "入学前の疑問・不安を解消する無料個別相談を随時受付中" },
                { icon: "✓", title: "48時間以内に返信", desc: "お問い合わせいただいた翌営業日以内にご連絡いたします" },
                { icon: "✓", title: "しつこい営業なし", desc: "ご要望がない限り、過度な営業活動は一切行いません" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ background: "oklch(0.60 0.08 148)", color: "white" }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p
                      className="text-sm font-medium text-white mb-0.5"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-xs"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.85 0.04 148)", fontWeight: 300 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* LINE CTA */}
            <a
              href="https://lin.ee/SxOndg6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLineClick("contact_section")}
              className="flex items-center justify-center gap-3 w-full py-4 text-sm font-medium transition-all duration-200 hover:opacity-90 mb-8"
              style={{
                background: "#06C755",
                color: "white",
                borderRadius: "4px",
                fontFamily: "'Noto Sans JP', sans-serif",
                boxShadow: "0 4px 20px rgba(6, 199, 85, 0.35)"
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.02 2 11c0 3.07 1.61 5.77 4.08 7.45L5 21l2.8-1.4C9.1 20.18 10.52 20.5 12 20.5c5.52 0 10-4.02 10-9S17.52 2 12 2zm1 13H7v-1.5h6V15zm2-3H7v-1.5h8V12zm0-3H7V7.5h8V9z"/>
              </svg>
              <span>まずはLINEで気軽に相談する</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px" style={{ background: "oklch(0.60 0.08 148)" }} />
              <span className="text-xs" style={{ color: "oklch(0.80 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>またはフォームから</span>
              <div className="flex-1 h-px" style={{ background: "oklch(0.60 0.08 148)" }} />
            </div>

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="育毛の学校" className="w-12 h-12 object-contain" />
              <div>
                <p
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "'Shippori Mincho', serif" }}
                >
                  育毛の学校
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.85 0.04 148)" }}
                >
                  Ikumou no Gakkou
                </p>
              </div>
            </div>
          </div>

          {/* Right — Formzu iframe */}
          <div ref={rightRef} className="fade-up">
            <div
              className="overflow-hidden"
              style={{
                borderRadius: "4px",
                boxShadow: "0 20px 60px oklch(0.38 0.09 148 / 0.25)",
                background: "white",
              }}
            >
              <div
                className="px-6 py-4"
                style={{ background: "oklch(0.96 0.02 148)", borderBottom: "1px solid oklch(0.90 0.04 148)" }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.38 0.09 148)" }}
                >
                  お問い合わせフォーム
                </p>
              </div>
              <iframe
                src="https://ws.formzu.net/dist/S97178066/"
                title="お問い合わせフォーム"
                width="100%"
                height="700"
                style={{ border: "none", display: "block" }}
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
