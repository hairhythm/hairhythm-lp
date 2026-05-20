/*
 * SalonsSection — 育毛の学校 卒業生サロン一覧
 * トップページ下部に組み込む全国導入サロンセクション
 * SEO相互リンク効果を狙い、各サロンURLをリンクとして設置
 */
import { useState } from "react";

// ─── サロンデータ ───────────────────────────────────────────────────────────
const SALONS = [
  // 北海道
  { name: "elm.hair", prefecture: "北海道", address: "北海道旭川市4条通9丁目 アポロニアビル 1階", url: "" },
  // 青森
  { name: "THE ADDORESS hachinohe", prefecture: "青森県", address: "青森県八戸市六日町31 ホテルイルヴィアーレ八戸アネックス1F", url: "" },
  // 宮城
  { name: "hairsalon K-mix", prefecture: "宮城県", address: "宮城県仙台市青葉区愛子東6丁目2-30", url: "" },
  // 山形
  { name: "頭皮ケア育毛専門リオーシャン", prefecture: "山形県", address: "山形県鶴岡市大宝寺日本国378-45", url: "" },
  { name: "HAIR LABO RADITE", prefecture: "山形県", address: "山形県米沢市中田町568-6", url: "" },
  { name: "RADITE２SHIOI", prefecture: "山形県", address: "山形県米沢市塩井町塩野1492-17", url: "" },
  // 群馬
  { name: "mizuma", prefecture: "群馬県", address: "群馬県前橋市城東町1-10-14", url: "" },
  { name: "headspasalon Lindo", prefecture: "群馬県", address: "群馬県高崎市上豊岡町934-1 グランノーブルA棟", url: "" },
  { name: "美容室BRIOCHE", prefecture: "群馬県", address: "群馬県高崎市貝沢町424-2 ラ・メール101", url: "" },
  // 埼玉
  { name: "CREATE SALON forYou", prefecture: "埼玉県", address: "埼玉県志木市柏町6-29-65 クリエイトビル1F", url: "" },
  { name: "eluma", prefecture: "埼玉県", address: "埼玉県川口市並木2-13-8 カーサー並木1F", url: "" },
  { name: "ヘアサロンNico", prefecture: "埼玉県", address: "埼玉県羽生市南羽生3-6-1", url: "" },
  { name: "ビーハーツ", prefecture: "埼玉県", address: "埼玉県さいたま市南区南浦和2丁目32-5 アルファ南浦和102", url: "" },
  { name: "DOLL美容室", prefecture: "埼玉県", address: "埼玉県川越市月吉町19-27 2F", url: "" },
  // 千葉
  { name: "NEXUS-Garden船橋日大", prefecture: "千葉県", address: "千葉県船橋市坪井東3-7-1 メゾングレイス1F", url: "" },
  { name: "NEXUS-ing宮野木店", prefecture: "千葉県", address: "千葉県千葉市稲毛区宮野木町1730-27", url: "" },
  { name: "NEXUS-lot八千代台", prefecture: "千葉県", address: "千葉県八千代市八千代台南2丁目1-3", url: "" },
  { name: "Luna Ease", prefecture: "千葉県", address: "千葉県野田市野田", url: "" },
  // 東京
  { name: "SALON MARL", prefecture: "東京都", address: "東京都文京区小石川5-1-4", url: "" },
  { name: "Hair Salon OGATA", prefecture: "東京都", address: "東京都杉並区桃井1-3-1", url: "" },
  { name: "Hacchi hair 仙川", prefecture: "東京都", address: "東京都調布市仙川町3丁目2-4 ウィステリア2F-B", url: "" },
  { name: "しゅくるイスナーニ", prefecture: "東京都", address: "東京都江戸川区南篠崎町2丁目7-7", url: "" },
  { name: "SHINA for hair", prefecture: "東京都", address: "東京都江東区大島4-6-24", url: "" },
  // 新潟
  { name: "HairLife KONIKONI", prefecture: "新潟県", address: "新潟県新発田市緑町1丁目5番9号", url: "" },
  // 山梨
  { name: "SALON DE MIYASHITA", prefecture: "山梨県", address: "山梨県富士吉田市上吉田東2-1-30 鈴木ビル102号室", url: "" },
  { name: "Galanterie", prefecture: "山梨県", address: "山梨県富士吉田市上吉田東2-1-30 鈴木ビル202A", url: "" },
  // 長野
  { name: "しゅくるithnani伊那店", prefecture: "長野県", address: "長野県伊那市荒井3472-1F", url: "" },
  // 岐阜
  { name: "オンリエドヘアデザイン", prefecture: "岐阜県", address: "岐阜県本巣郡北方町高屋伊勢田2-36", url: "" },
  // 静岡
  { name: "a-rt hairSUGAO美容室", prefecture: "静岡県", address: "静岡県富士市松本87-10", url: "" },
  { name: "ピアチューレ", prefecture: "静岡県", address: "静岡県浜松市東区西ケ崎町158-2", url: "" },
  // 愛知
  { name: "ルアナヘアープラス", prefecture: "愛知県", address: "愛知県名古屋市中村区名駅3-22-4 名駅前みどりビル8F", url: "" },
  { name: "corvivid", prefecture: "愛知県", address: "愛知県名古屋市東区泉1-13-33 ユトリロ栄ビル3C", url: "" },
  { name: "KOBAYASHI", prefecture: "愛知県", address: "愛知県豊橋市小向町北小向30-8", url: "" },
  { name: "QUNON", prefecture: "愛知県", address: "愛知県豊橋市南牛川1丁目22-11", url: "" },
  // 三重
  { name: "BeautyAir YUKI", prefecture: "三重県", address: "三重県鈴鹿市南江島町23-10", url: "" },
  { name: "Carame", prefecture: "三重県", address: "三重県鈴鹿市稲生3丁目8-30", url: "" },
  // 滋賀
  { name: "a:r", prefecture: "滋賀県", address: "滋賀県栗東市綣6丁目9-10", url: "" },
  { name: "BEAUING", prefecture: "滋賀県", address: "滋賀県大津市京町3丁目3-16 イクスコート大津駅前1階", url: "" },
  // 京都
  { name: "太郎＆花子", prefecture: "京都府", address: "京都府綾部市岡町西角3-5", url: "" },
  // 大阪
  { name: "美容室ヨリソウ", prefecture: "大阪府", address: "大阪府富田林市藤沢台5-4-14-102", url: "" },
  { name: "hitotema‐salon", prefecture: "大阪府", address: "大阪府大阪市鶴見区鶴見4丁目12-40", url: "" },
  // 兵庫
  { name: "アクアレラ", prefecture: "兵庫県", address: "兵庫県神戸市須磨区須磨浦通4丁目6-18", url: "" },
  { name: "髪心", prefecture: "兵庫県", address: "兵庫県神戸市須磨区月見山本町1丁目8-24", url: "" },
  { name: "(m)arble", prefecture: "兵庫県", address: "兵庫県神戸市東灘区岡本2-10-15", url: "" },
  // 奈良
  { name: "beauty.studio.efumi", prefecture: "奈良県", address: "奈良県天理市柳本町72-1", url: "" },
  // 岡山
  { name: "QUEUEMOU", prefecture: "岡山県", address: "岡山県倉敷市鶴形1丁目2-15 鶴形ビル209", url: "" },
  // 広島
  { name: "美容室ごゆるりと", prefecture: "広島県", address: "広島県福山市柳津町2丁目7-5 田頭ビル102", url: "" },
  { name: "Creativebase age", prefecture: "広島県", address: "広島県竹原市新庄町1396-2", url: "" },
  { name: "LIBRE.", prefecture: "広島県", address: "広島県福山市西新涯町2丁目", url: "" },
  // 愛媛
  { name: "bobhair恵美須店", prefecture: "愛媛県", address: "愛媛県宇和島市恵美須町2丁目3-28", url: "" },
  // 高知
  { name: "賦活化サロンbeaute", prefecture: "高知県", address: "高知県高知市北本町4丁目5-33-703", url: "" },
  // 長崎
  { name: "キーライム", prefecture: "長崎県", address: "長崎県長崎市竹の久保町5-1 佐々野ビル", url: "" },
  { name: "moe", prefecture: "長崎県", address: "長崎県長崎市平間町", url: "" },
  // 宮崎
  { name: "ヘアメイクナチュラル", prefecture: "宮崎県", address: "宮崎県延岡市土々呂町4丁目4152", url: "" },
  { name: "トータス", prefecture: "宮崎県", address: "宮崎県延岡市土々呂町4丁目4152", url: "" },
  // 鹿児島
  { name: "Lampsi hair", prefecture: "鹿児島県", address: "鹿児島県薩摩川内市東向田町2-29", url: "" },
  // 沖縄
  { name: "hair＆spa glue.", prefecture: "沖縄県", address: "沖縄県那覇市松川402-6", url: "" },
  { name: "circus", prefecture: "沖縄県", address: "沖縄県島尻郡南風原町兼城298-1", url: "" },
  { name: "circus銘苅店", prefecture: "沖縄県", address: "沖縄県那覇市銘苅1-10-45 チェリスH 102", url: "" },
];

// 地方区分
const REGIONS: { label: string; prefectures: string[] }[] = [
  { label: "北海道・東北", prefectures: ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"] },
  { label: "関東", prefectures: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"] },
  { label: "中部・北陸", prefectures: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"] },
  { label: "近畿", prefectures: ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"] },
  { label: "中国・四国", prefectures: ["鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県"] },
  { label: "九州・沖縄", prefectures: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"] },
];

export default function SalonsSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>("すべて");

  // 表示するサロン
  const filtered = SALONS.filter((s) => {
    if (selectedRegion === "すべて") return true;
    const region = REGIONS.find((r) => r.label === selectedRegion);
    return region ? region.prefectures.includes(s.prefecture) : true;
  });

  // 地方ごとにグループ化
  const groupedByRegion = REGIONS.map((region) => ({
    ...region,
    salons: filtered.filter((s) => region.prefectures.includes(s.prefecture)),
  })).filter((r) => r.salons.length > 0);

  return (
    <section
      id="salons"
      style={{ background: "oklch(0.96 0.01 148)" }}
      className="py-16 md:py-24"
    >
      <div className="container">
        {/* セクションヘッダー */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-px" style={{ background: "oklch(0.72 0.12 80)" }} />
            <span
              className="text-[11px] tracking-[0.3em] uppercase"
              style={{ color: "oklch(0.55 0.08 80)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              Nationwide Partner Salons
            </span>
            <div className="w-8 h-px" style={{ background: "oklch(0.72 0.12 80)" }} />
          </div>
          <h2
            className="text-2xl md:text-3xl font-semibold mb-3"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.22 0.08 148)" }}
          >
            全国の導入サロン
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.45 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif", lineHeight: "1.9" }}
          >
            「育毛の学校」で学んだ技術を持つスパニストが在籍する、全国<strong>{SALONS.length}店舗</strong>のパートナーサロンです。
            お近くのサロンでも、ヘアリズムと同じ育毛メソッドをご体験いただけます。
          </p>
        </div>

        {/* 地方フィルター */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["すべて", ...REGIONS.map((r) => r.label)].map((label) => (
            <button
              key={label}
              onClick={() => setSelectedRegion(label)}
              className="px-4 py-1.5 text-xs rounded-full transition-all duration-200"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                background: selectedRegion === label
                  ? "linear-gradient(135deg, oklch(0.38 0.10 148) 0%, oklch(0.28 0.08 148) 100%)"
                  : "white",
                color: selectedRegion === label ? "white" : "oklch(0.40 0.04 148)",
                border: selectedRegion === label
                  ? "1px solid oklch(0.65 0.12 80)"
                  : "1px solid oklch(0.82 0.04 148)",
                fontWeight: selectedRegion === label ? 500 : 400,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* サロン一覧（地方別） */}
        <div className="space-y-10">
          {groupedByRegion.map((region) => (
            <div key={region.label}>
              {/* 地方ヘッダー */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 rounded-full" style={{ background: "oklch(0.65 0.12 80)" }} />
                <h3
                  className="text-sm font-semibold"
                  style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.28 0.09 148)" }}
                >
                  {region.label}
                </h3>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    background: "oklch(0.65 0.12 80 / 0.12)",
                    color: "oklch(0.45 0.08 80)",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    border: "1px solid oklch(0.65 0.12 80 / 0.25)"
                  }}
                >
                  {region.salons.length}店舗
                </span>
              </div>

              {/* サロンカード */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {region.salons.map((salon) => {
                  const hasUrl = salon.url && salon.url !== "";
                  const Tag = hasUrl ? "a" : "div";
                  const tagProps = hasUrl
                    ? { href: salon.url, target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  return (
                    <Tag
                      key={salon.name}
                      {...(tagProps as any)}
                      className={`p-3 rounded-sm ${hasUrl ? "hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer" : ""}`}
                      style={{
                        background: "white",
                        border: "1px solid oklch(0.88 0.03 148)",
                        boxShadow: "0 1px 3px oklch(0.28 0.08 148 / 0.05)"
                      }}
                    >
                      <div className="flex items-start gap-2">
                        <div className="flex-1 min-w-0">
                          {/* 都道府県バッジ */}
                          <span
                            className="inline-block text-[9px] px-1.5 py-0.5 rounded-sm mb-1"
                            style={{
                              background: "oklch(0.65 0.12 80 / 0.10)",
                              color: "oklch(0.45 0.08 80)",
                              fontFamily: "'Noto Sans JP', sans-serif",
                              border: "1px solid oklch(0.65 0.12 80 / 0.25)"
                            }}
                          >
                            {salon.prefecture}
                          </span>
                          {/* サロン名 */}
                          <p
                            className="text-xs font-medium leading-snug mb-1"
                            style={{
                              fontFamily: "'Shippori Mincho', serif",
                              color: hasUrl ? "oklch(0.28 0.09 148)" : "oklch(0.35 0.05 148)"
                            }}
                          >
                            {salon.name}
                          </p>
                          {/* 住所 */}
                          <p
                            className="text-[10px] leading-relaxed"
                            style={{ color: "oklch(0.58 0.03 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
                          >
                            {salon.address}
                          </p>
                        </div>
                        {hasUrl && (
                          <div
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                            style={{ background: "oklch(0.65 0.12 80 / 0.12)" }}
                          >
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                              <path d="M2 8L8 2M8 2H4M8 2V6" stroke="oklch(0.55 0.10 80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )}
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 下部注記 */}
        <p
          className="text-center text-xs mt-10"
          style={{ color: "oklch(0.62 0.03 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          ※ 各サロンへのご予約・お問い合わせは、各サロンへ直接お願いいたします。
        </p>
      </div>
    </section>
  );
}
