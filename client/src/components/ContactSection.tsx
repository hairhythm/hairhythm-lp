/*
 * ContactSection — 育毛の学校 LP
 * Design: Natural Elegant Green — Sage bg with white form card
 * Layout: 2-column — left copy, right form
 */

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/ikumou-logo_193d602f.webp";

export default function ContactSection() {
  const { ref: leftRef } = useScrollAnimation();
  const { ref: rightRef } = useScrollAnimation();

  const [form, setForm] = useState({
    name: "",
    salon: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "oklch(0.48 0.10 148)" }}
    >
      {/* Subtle pattern */}
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

          {/* Right — Form */}
          <div ref={rightRef} className="fade-up">
            <div
              className="rounded-sm p-7 md:p-9"
              style={{ background: "white", boxShadow: "0 20px 60px oklch(0.38 0.09 148 / 0.25)" }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "oklch(0.92 0.04 148)" }}
                  >
                    <span className="text-2xl" style={{ color: "oklch(0.48 0.10 148)" }}>✓</span>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
                  >
                    送信が完了しました
                  </h3>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.03 60)", fontWeight: 300 }}
                  >
                    48時間以内にご連絡いたします。
                    <br />
                    しばらくお待ちください。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3
                    className="text-lg font-semibold mb-5"
                    style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
                  >
                    お問い合わせフォーム
                  </h3>

                  {/* Name */}
                  <div>
                    <label className="block text-xs mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)" }}>
                      お名前 <span style={{ color: "oklch(0.52 0.09 148)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="山田 花子"
                      className="w-full text-sm px-4 py-2.5 focus:outline-none transition-colors duration-200"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        border: "1px solid oklch(0.88 0.04 148)",
                        borderRadius: "2px",
                        color: "oklch(0.30 0.02 60)",
                        background: "oklch(0.99 0.005 90)"
                      }}
                    />
                  </div>

                  {/* Salon */}
                  <div>
                    <label className="block text-xs mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)" }}>
                      サロン名
                    </label>
                    <input
                      type="text"
                      name="salon"
                      value={form.salon}
                      onChange={handleChange}
                      placeholder="〇〇ヘアサロン"
                      className="w-full text-sm px-4 py-2.5 focus:outline-none transition-colors duration-200"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        border: "1px solid oklch(0.88 0.04 148)",
                        borderRadius: "2px",
                        color: "oklch(0.30 0.02 60)",
                        background: "oklch(0.99 0.005 90)"
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)" }}>
                      メールアドレス <span style={{ color: "oklch(0.52 0.09 148)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@salon.jp"
                      className="w-full text-sm px-4 py-2.5 focus:outline-none transition-colors duration-200"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        border: "1px solid oklch(0.88 0.04 148)",
                        borderRadius: "2px",
                        color: "oklch(0.30 0.02 60)",
                        background: "oklch(0.99 0.005 90)"
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)" }}>
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="090-0000-0000"
                      className="w-full text-sm px-4 py-2.5 focus:outline-none transition-colors duration-200"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        border: "1px solid oklch(0.88 0.04 148)",
                        borderRadius: "2px",
                        color: "oklch(0.30 0.02 60)",
                        background: "oklch(0.99 0.005 90)"
                      }}
                    />
                  </div>

                  {/* Inquiry type */}
                  <div>
                    <label className="block text-xs mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)" }}>
                      お問い合わせ種別
                    </label>
                    <select
                      name="inquiry"
                      value={form.inquiry}
                      onChange={handleChange}
                      className="w-full text-sm px-4 py-2.5 focus:outline-none transition-colors duration-200"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        border: "1px solid oklch(0.88 0.04 148)",
                        borderRadius: "2px",
                        color: form.inquiry ? "oklch(0.30 0.02 60)" : "oklch(0.65 0.03 60)",
                        background: "oklch(0.99 0.005 90)"
                      }}
                    >
                      <option value="">選択してください</option>
                      <option value="curriculum">カリキュラムについて</option>
                      <option value="price">料金について</option>
                      <option value="schedule">開催日程について</option>
                      <option value="material">商材のみの利用</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)" }}>
                      お問い合わせ内容
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="ご質問・ご要望をご記入ください"
                      className="w-full text-sm px-4 py-2.5 focus:outline-none transition-colors duration-200 resize-none"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        border: "1px solid oklch(0.88 0.04 148)",
                        borderRadius: "2px",
                        color: "oklch(0.30 0.02 60)",
                        background: "oklch(0.99 0.005 90)"
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-medium text-white flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90"
                    style={{
                      background: "oklch(0.48 0.10 148)",
                      fontFamily: "'Noto Sans JP', sans-serif",
                      borderRadius: "2px"
                    }}
                  >
                    無料相談を申し込む
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <p
                    className="text-[10px] text-center leading-relaxed"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.60 0.03 60)" }}
                  >
                    送信いただいた個人情報は、お問い合わせへの返信のみに使用し、
                    <br />
                    第三者への提供は一切行いません。
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
