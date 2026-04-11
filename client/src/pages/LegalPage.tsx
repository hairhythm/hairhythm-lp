/*
 * LegalPage — 特定商取引法に基づく表記
 * Design: 育毛専門美容室ヘアリズム LP — Deep Forest Green x Gold
 */
import { Link } from "wouter";

const legalItems = [
  { label: "販売者名", value: "育毛専門美容室ヘアリズム" },
  { label: "代表責任者", value: "橋本　光弘" },
  { label: "所在地", value: "兵庫県加東市下久米８８０－３" },
  { label: "電話番号", value: "０７９５－４４－１０９９" },
  { label: "メールアドレス", value: "ihatov0303@yahoo.co.jp" },
  { label: "営業時間", value: "火曜日〜土曜日　10:00〜19:00" },
  { label: "定休日", value: "日曜日・月曜日" },
  { label: "サービス内容", value: "育毛専門美容室サービス（頭皮診断・育毛ヘッドスパ・ホームケア指導）" },
  { label: "料金", value: "初回体験コース 4,980円（税込）※2026年5月末まで\n通常料金は別途お問い合わせください" },
  { label: "支払方法", value: "現金・クレジットカード（VISA・MasterCard・JCB・AMEX）" },
  { label: "支払時期", value: "施術終了後にお支払いいただきます" },
  { label: "キャンセルポリシー", value: "ご予約の24時間前までにご連絡ください。当日キャンセルはキャンセル料（施術料金の50%）が発生する場合があります。" },
  { label: "返品・返金について", value: "施術サービスの性質上、施術後の返金はお受けできません。ご不満の場合はお気軽にご相談ください。" },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.02 148)" }}>
      <header
        className="py-5 px-6 border-b"
        style={{ background: "white", borderColor: "oklch(0.88 0.04 148)" }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/">
            <span
              className="text-base font-semibold cursor-pointer hover:opacity-75 transition-opacity"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.28 0.09 148)" }}
            >
              ヘアリズム
            </span>
          </Link>
          <Link href="/">
            <span
              className="text-xs cursor-pointer hover:opacity-75 transition-opacity flex items-center gap-1"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.38 0.09 148)" }}
            >
              ← トップページへ戻る
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1
          className="text-2xl md:text-3xl font-semibold mb-8"
          style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
        >
          特定商取引法に基づく表記
        </h1>

        <div
          className="overflow-hidden"
          style={{
            background: "white",
            border: "1px solid oklch(0.88 0.04 148)",
            borderRadius: "4px",
            boxShadow: "0 2px 12px oklch(0.38 0.09 148 / 0.06)"
          }}
        >
          {legalItems.map((item, i) => (
            <div
              key={item.label}
              className="grid grid-cols-3 gap-4 px-6 py-4 border-b last:border-b-0"
              style={{ borderColor: "oklch(0.92 0.02 148)", background: i % 2 === 0 ? "white" : "oklch(0.98 0.01 148)" }}
            >
              <dt
                className="text-sm font-medium col-span-1"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.35 0.03 60)" }}
              >
                {item.label}
              </dt>
              <dd
                className="text-sm col-span-2 whitespace-pre-line"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.45 0.03 60)", fontWeight: 300 }}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
