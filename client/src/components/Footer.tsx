/*
 * Footer — 育毛専門美容室ヘアリズム LP
 * Design: Deep Forest Green x Gold
 */
import { Link } from "wouter";

const LINE_URL = "https://lin.ee/oV9r3at";

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        background: "oklch(0.12 0.05 148)",
        borderTop: "1px solid oklch(0.65 0.12 80 / 0.2)"
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)", border: "1px solid oklch(0.72 0.10 80)" }}
              >
                <span style={{ color: "oklch(0.88 0.10 80)", fontSize: "14px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600 }}>H</span>
              </div>
              <div>
                <p style={{ color: "white", fontFamily: "'Shippori Mincho', serif", fontSize: "14px", fontWeight: 600 }}>ヘアリズム</p>
                <p style={{ color: "oklch(0.65 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif", fontSize: "10px" }}>育毛専門美容室</p>
              </div>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "oklch(0.65 0.05 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              40代からの薄毛・抜け毛に特化した<br />
              育毛専門美容室。兵庫県加東市。
            </p>
          </div>

          {/* Info */}
          <div>
            <h4
              className="text-xs tracking-widest mb-4"
              style={{ color: "oklch(0.65 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              サロン情報
            </h4>
            <div className="flex flex-col gap-2 text-xs" style={{ color: "oklch(0.65 0.05 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>
              <p>兵庫県加東市下久米880-3</p>
              <p>TEL: 0795-44-1099</p>
              <p>火〜土 10:00〜19:00</p>
              <p>定休日: 日・月曜日</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-xs tracking-widest mb-4"
              style={{ color: "oklch(0.65 0.10 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              リンク
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-opacity hover:opacity-75"
                style={{ color: "oklch(0.65 0.05 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                LINEで予約・相談
              </a>
              <Link
                href="/privacy"
                className="text-xs transition-opacity hover:opacity-75"
                style={{ color: "oklch(0.65 0.05 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/legal"
                className="text-xs transition-opacity hover:opacity-75"
                style={{ color: "oklch(0.65 0.05 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                特定商取引法に基づく表記
              </Link>
            </div>
          </div>
        </div>

        <div
          className="pt-6 text-center"
          style={{ borderTop: "1px solid oklch(0.65 0.12 80 / 0.15)" }}
        >
          <p
            className="text-xs"
            style={{ color: "oklch(0.50 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            © {new Date().getFullYear()} 育毛専門美容室ヘアリズム. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
