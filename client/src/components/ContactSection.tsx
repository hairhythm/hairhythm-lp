/*
 * ContactSection — 育毛の学校 LP
 * Design: Dark luxury CTA with contact form
 * Background: Dark gold dust CTA image
 * Layout: 2-column — left copy, right form
 */

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498872949/HZXqpWWosYX3kh9VGf9bpq/cta-bg-XtVEbTLjerwjemHHAUhcei.webp";

export default function ContactSection() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  const [form, setForm] = useState({
    name: "",
    salon: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with a form service (e.g., Formspree, Netlify Forms)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CTA_BG})` }}
      />
      <div className="absolute inset-0 bg-[oklch(0.07_0.005_60/0.92)]" />

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Copy */}
          <div ref={leftRef} className="fade-up">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4"
              style={{ fontFamily: "'Noto Serif JP', serif" }}>
              Contact
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              まずは<br />無料相談から
            </h2>
            <div className="gold-line w-16 mb-8" />

            <p
              className="text-sm text-[oklch(0.70_0.008_60)] leading-relaxed mb-10"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              育毛の学校への入学に関するご質問、カリキュラムの詳細、料金のご相談など、どんな小さなことでもお気軽にお問い合わせください。専門のスタッフが丁寧にご対応いたします。
            </p>

            <div className="space-y-6">
              {[
                { icon: "✦", title: "無料相談実施中", desc: "入学前の疑問・不安を解消する無料個別相談を随時受付中" },
                { icon: "✦", title: "48時間以内に返信", desc: "お問い合わせいただいた翌営業日以内にご連絡いたします" },
                { icon: "✦", title: "しつこい営業なし", desc: "ご要望がない限り、過度な営業活動は一切行いません" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="text-gold text-xs mt-1 flex-shrink-0">{item.icon}</span>
                  <div>
                    <p
                      className="text-sm text-white mb-1"
                      style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 500 }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div ref={rightRef} className="fade-up">
            <div className="bg-[oklch(0.12_0.005_60/0.90)] border border-[oklch(0.25_0.008_60)] p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-6">
                    <span className="text-gold text-2xl">✓</span>
                  </div>
                  <h3
                    className="text-xl text-white mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    送信が完了しました
                  </h3>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                  >
                    48時間以内にご連絡いたします。<br />
                    しばらくお待ちください。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3
                    className="text-lg text-white mb-6"
                    style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 500 }}
                  >
                    お問い合わせフォーム
                  </h3>

                  {/* Name */}
                  <div>
                    <label
                      className="block text-xs tracking-wider text-muted-foreground mb-2"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      お名前 <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="山田 太郎"
                      className="w-full bg-[oklch(0.16_0.005_60)] border border-[oklch(0.25_0.008_60)] text-white text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-muted-foreground/50"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    />
                  </div>

                  {/* Salon name */}
                  <div>
                    <label
                      className="block text-xs tracking-wider text-muted-foreground mb-2"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      サロン名
                    </label>
                    <input
                      type="text"
                      name="salon"
                      value={form.salon}
                      onChange={handleChange}
                      placeholder="〇〇ヘアサロン"
                      className="w-full bg-[oklch(0.16_0.005_60)] border border-[oklch(0.25_0.008_60)] text-white text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-muted-foreground/50"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block text-xs tracking-wider text-muted-foreground mb-2"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      メールアドレス <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@salon.jp"
                      className="w-full bg-[oklch(0.16_0.005_60)] border border-[oklch(0.25_0.008_60)] text-white text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-muted-foreground/50"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      className="block text-xs tracking-wider text-muted-foreground mb-2"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="090-0000-0000"
                      className="w-full bg-[oklch(0.16_0.005_60)] border border-[oklch(0.25_0.008_60)] text-white text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-muted-foreground/50"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-xs tracking-wider text-muted-foreground mb-2"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      お問い合わせ内容
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="カリキュラムの詳細を知りたい、料金について相談したい、など..."
                      className="w-full bg-[oklch(0.16_0.005_60)] border border-[oklch(0.25_0.008_60)] text-white text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-muted-foreground/50 resize-none"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-[oklch(0.10_0.005_60)] text-sm tracking-[0.2em] font-medium hover:bg-gold-light transition-all duration-300 group flex items-center justify-center gap-3"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    無料相談を申し込む
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>

                  <p
                    className="text-[10px] text-muted-foreground text-center leading-relaxed"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    送信いただいた個人情報は、お問い合わせへの返信のみに使用し、<br />
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
