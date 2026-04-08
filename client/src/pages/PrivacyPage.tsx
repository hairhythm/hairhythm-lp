/*
 * PrivacyPage — 育毛の学校 LP
 * Design: Natural Elegant Green — Light bg, clean typography
 */

import { Link } from "wouter";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.98 0.01 148)" }}>
      {/* Header */}
      <header
        className="py-5 px-6 border-b"
        style={{ background: "white", borderColor: "oklch(0.88 0.04 148)" }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/">
            <span
              className="text-base font-semibold cursor-pointer hover:opacity-75 transition-opacity"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.35 0.08 148)" }}
            >
              育毛の学校
            </span>
          </Link>
          <Link href="/">
            <span
              className="text-xs cursor-pointer hover:opacity-75 transition-opacity flex items-center gap-1"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.08 148)" }}
            >
              ← トップページへ戻る
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-14">
        <h1
          className="text-2xl md:text-3xl font-semibold mb-2"
          style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.02 60)" }}
        >
          プライバシーポリシー
        </h1>
        <p
          className="text-xs mb-10"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.60 0.03 60)", fontWeight: 300 }}
        >
          Privacy Policy
        </p>

        <div
          className="space-y-10 text-sm leading-[2]"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.38 0.02 60)", fontWeight: 300 }}
        >
          <section>
            <h2
              className="text-base font-semibold mb-3 pb-2 border-b"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.30 0.02 60)", borderColor: "oklch(0.88 0.04 148)" }}
            >
              基本方針
            </h2>
            <p>
              育毛専門美容室ヘアリズム（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、個人情報の保護に関する法律（個人情報保護法）をはじめとする関連法令を遵守し、適切な取り扱いに努めます。
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3 pb-2 border-b"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.30 0.02 60)", borderColor: "oklch(0.88 0.04 148)" }}
            >
              収集する個人情報
            </h2>
            <p>当社は、以下の個人情報を収集することがあります。</p>
            <ul className="mt-3 space-y-1 pl-4 list-disc list-outside">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>サロン名・所在地</li>
              <li>お問い合わせ内容</li>
              <li>その他、サービス提供に必要な情報</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3 pb-2 border-b"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.30 0.02 60)", borderColor: "oklch(0.88 0.04 148)" }}
            >
              個人情報の利用目的
            </h2>
            <p>収集した個人情報は、以下の目的のために利用します。</p>
            <ul className="mt-3 space-y-1 pl-4 list-disc list-outside">
              <li>講座・セミナーの申し込み受付および運営</li>
              <li>お問い合わせへの回答・対応</li>
              <li>サービスに関するご案内・情報提供</li>
              <li>受講後のサポート・フォローアップ</li>
              <li>サービス改善のための分析・調査</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3 pb-2 border-b"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.30 0.02 60)", borderColor: "oklch(0.88 0.04 148)" }}
            >
              第三者への提供
            </h2>
            <p>
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供・開示することはありません。
            </p>
            <ul className="mt-3 space-y-1 pl-4 list-disc list-outside">
              <li>お客様本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体・財産の保護のために必要な場合</li>
              <li>業務委託先（守秘義務契約締結済み）に提供する場合</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3 pb-2 border-b"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.30 0.02 60)", borderColor: "oklch(0.88 0.04 148)" }}
            >
              個人情報の管理
            </h2>
            <p>
              当社は、個人情報の紛失・破壊・改ざん・漏洩などを防止するため、適切なセキュリティ対策を実施します。個人情報へのアクセスは必要な担当者に限定し、適切に管理します。
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3 pb-2 border-b"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.30 0.02 60)", borderColor: "oklch(0.88 0.04 148)" }}
            >
              Cookieの使用について
            </h2>
            <p>
              当サイトでは、サービス向上を目的としてCookieを使用する場合があります。Cookieはお客様のブラウザ設定により無効にすることが可能ですが、一部のサービスが利用できなくなる場合があります。
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3 pb-2 border-b"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.30 0.02 60)", borderColor: "oklch(0.88 0.04 148)" }}
            >
              開示・訂正・削除のご請求
            </h2>
            <p>
              お客様ご自身の個人情報について、開示・訂正・削除・利用停止をご希望の場合は、下記の連絡先までお申し出ください。ご本人確認の上、合理的な期間内に対応いたします。
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3 pb-2 border-b"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.30 0.02 60)", borderColor: "oklch(0.88 0.04 148)" }}
            >
              プライバシーポリシーの変更
            </h2>
            <p>
              当社は、必要に応じて本ポリシーを改定することがあります。重要な変更がある場合は、当サイト上でお知らせします。
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3 pb-2 border-b"
              style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.30 0.02 60)", borderColor: "oklch(0.88 0.04 148)" }}
            >
              お問い合わせ先
            </h2>
            <div className="space-y-1">
              <p>育毛専門美容室ヘアリズム</p>
              <p>代表者：橋本 光弘</p>
              <p>所在地：兵庫県加東市下久米880－3</p>
              <p>電話番号：079－544－1099</p>
              <p>メールアドレス：ihatov0303@yahoo.co.jp</p>
            </div>
          </section>

          <p
            className="text-xs pt-6 border-t"
            style={{ borderColor: "oklch(0.88 0.04 148)", color: "oklch(0.60 0.03 60)" }}
          >
            制定日：2024年1月1日
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="py-6 border-t text-center"
        style={{ borderColor: "oklch(0.88 0.04 148)", background: "white" }}
      >
        <Link href="/">
          <span
            className="text-xs cursor-pointer hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.48 0.08 148)" }}
          >
            ← トップページへ戻る
          </span>
        </Link>
        <p
          className="text-[10px] mt-3"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.65 0.03 60)" }}
        >
          © 2024 育毛の学校. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
