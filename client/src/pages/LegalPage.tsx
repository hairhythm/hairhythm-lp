/*
 * LegalPage — 特定商取引法に基づく表記
 * Design: 育毛の学校 LP — Natural Elegant Green
 * Color: Sage Green × Cream White × Warm Taupe
 * Typography: Shippori Mincho (headings) + Noto Sans JP (body)
 */

import { Link } from "wouter";

const legalItems = [
  {
    label: "販売者名",
    value: "育毛専門美容室ヘアリズム",
  },
  {
    label: "代表責任者",
    value: "橋本　光弘",
  },
  {
    label: "所在地",
    value: "兵庫県加東市下久米８８０－３",
  },
  {
    label: "電話番号",
    value: "０７９－５４４－１０９９",
  },
  {
    label: "メールアドレス",
    value: "ihatov0303@yahoo.co.jp",
  },
  {
    label: "ホームページURL",
    value: "https://ikumounogakkou.hp.peraichi.com/",
    isLink: true,
  },
  {
    label: "販売価格",
    value: "商品紹介ページをご覧ください",
  },
  {
    label: "商品代金以外に必要な費用",
    value: "消費税",
  },
  {
    label: "引き渡し時期",
    value: "支払い完了後　１〜２日で発送　宅配便",
  },
  {
    label: "代金のお支払時期および方法",
    value: "クレジットカード　銀行振込\nなお、銀行振込の場合の送金手数料はお客さま負担とさせていただきます。",
  },
  {
    label: "セミナー開始時期",
    value: "支払確認後１〜２日後に連絡し、開始時期を調整。",
  },
  {
    label: "セミナー開始時期・セミナー方法",
    value: "支払確認後１〜２日後に連絡し、開始時期を調整。\n\nZOOM又は対面にて実施。",
  },
  {
    label: "返品の取扱条件／返品期限、返品時の送料負担 または中途解約や退会条件",
    value: "キャンセルにつきましては次のような規定となっており、当社にて受付した日をキャンセル受付日とします。\n※セミナーの前日を1日前と数えます。\n1) 開催前日までのキャンセル ⇒ 参加費の50%を頂きます\n2) 開催当日キャンセル ⇒ 参加費全額を頂きます\n当日セミナーを欠席された場合は、当日キャンセルに該当するものとします\nご入金がクレジットカード決済であった場合は、返金手数料は頂きません。\nご入金が銀行振込であった場合は、返金の際、振込手数料の実費を差引いた額をお振込いたします。",
  },
];

export default function LegalPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.98 0.008 140)", fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "oklch(0.98 0.008 140)",
          borderColor: "oklch(0.88 0.04 148)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/">
            <span
              className="text-sm font-medium flex items-center gap-1.5 transition-colors hover:opacity-70"
              style={{ color: "oklch(0.42 0.09 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              ← トップページへ戻る
            </span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Page title */}
        <div className="mb-12 text-center">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-3"
            style={{ color: "oklch(0.55 0.07 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Legal Notice
          </p>
          <h1
            className="text-3xl md:text-4xl"
            style={{
              fontFamily: "'Shippori Mincho', serif",
              color: "oklch(0.28 0.06 148)",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            特定商取引法に基づく表記
          </h1>
          <div
            className="mx-auto mt-4"
            style={{
              width: "48px",
              height: "2px",
              background: "oklch(0.55 0.10 148)",
            }}
          />
        </div>

        {/* Table */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid oklch(0.88 0.04 148)",
            background: "white",
            boxShadow: "0 4px 24px oklch(0.55 0.10 148 / 0.08)",
          }}
        >
          {legalItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row"
              style={{
                borderBottom: index < legalItems.length - 1 ? "1px solid oklch(0.92 0.03 148)" : "none",
              }}
            >
              {/* Label */}
              <div
                className="px-6 py-5 md:w-64 flex-shrink-0"
                style={{
                  background: "oklch(0.96 0.012 148)",
                  borderRight: "1px solid oklch(0.90 0.04 148)",
                }}
              >
                <p
                  className="text-sm font-medium leading-relaxed"
                  style={{
                    color: "oklch(0.35 0.08 148)",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </p>
              </div>
              {/* Value */}
              <div className="px-6 py-5 flex-1">
                {item.isLink ? (
                  <a
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-relaxed underline underline-offset-2"
                    style={{ color: "oklch(0.45 0.10 148)" }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link href="/">
            <span
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80"
              style={{
                background: "oklch(0.42 0.10 148)",
                color: "white",
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              ← トップページへ戻る
            </span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="py-8 text-center border-t mt-16"
        style={{
          borderColor: "oklch(0.88 0.04 148)",
          background: "oklch(0.96 0.012 148)",
        }}
      >
        <p
          className="text-xs"
          style={{ color: "oklch(0.55 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          © 2024 育毛の学校 / 育毛専門美容室ヘアリズム. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
