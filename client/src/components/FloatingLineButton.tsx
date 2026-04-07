/*
 * FloatingLineButton — 育毛の学校 LP
 * Design: Fixed bottom-right LINE CTA button with pulse animation
 */

import { useState, useEffect } from "react";

export default function FloatingLineButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1.5 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Tooltip label */}
      <span
        className="text-xs font-medium px-2.5 py-1 rounded-full shadow-md whitespace-nowrap"
        style={{
          background: "white",
          color: "oklch(0.38 0.09 148)",
          fontFamily: "'Noto Sans JP', sans-serif",
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
        }}
      >
        LINEで相談する
      </span>

      {/* LINE button */}
      <a
        href="https://lin.ee/SxOndg6"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LINEで相談する"
        className="relative flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{
          width: "60px",
          height: "60px",
          background: "#06C755",
          boxShadow: "0 4px 20px rgba(6, 199, 85, 0.50)",
        }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            background: "rgba(6, 199, 85, 0.30)",
            animationDuration: "2s",
          }}
        />
        {/* LINE icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 4C12.95 4 4 11.82 4 21.5c0 5.84 3.17 11.02 8.12 14.38L10 38l4.8-2.4c2.88.88 5.96 1.4 9.2 1.4 11.05 0 20-7.82 20-17.5S35.05 4 24 4zm2 24H14v-2.5h12V28zm4-5H14v-2.5h16V23zm0-5H14v-2.5h16V18z"/>
        </svg>
      </a>
    </div>
  );
}
