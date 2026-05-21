/*
 * JapanMapSection — インタラクティブ日本地図（修正版）
 * 正確な日本地図形状 + 全サロンをピン表示（リンク有無で色分け）
 * リンクあり: 赤ピン / リンク準備中: グレーピン
 */
import { useState } from "react";

// ─── 全サロンデータ（都道府県 + リンク有無） ────────────────────────────────
const SALONS = [
  { name: "elm.hair", prefecture: "北海道", url: "https://beauty.hotpepper.jp/slnH000287222/" },
  { name: "hairsalon K-mix", prefecture: "宮城県", url: "https://www.hairsalonk-mix.com/" },
  { name: "頭皮ケア育毛専門リオーシャン", prefecture: "山形県", url: "https://reocean.hp.peraichi.com/" },
  { name: "HAIR LABO RADITE", prefecture: "山形県", url: "http://hair-labo-radite.jp/" },
  { name: "mizuma", prefecture: "群馬県", url: "https://beauty.hotpepper.jp/slnH000341785/" },
  { name: "headspasalon Lindo", prefecture: "群馬県", url: "https://lit.link/headspasalonlindo" },
  { name: "美容室BRIOCHE", prefecture: "群馬県", url: "https://www.brioche-hair.com/" },
  { name: "CREATE SALON forYou", prefecture: "埼玉県", url: "https://for-you1999.com/" },
  { name: "eluma", prefecture: "埼玉県", url: "https://beauty.hotpepper.jp/slnH000438139/" },
  { name: "ヘアサロンNico", prefecture: "埼玉県", url: "https://yoyaku-beauty.jp/reserve/top?CODE=eb5a097b1ffc709e5581bf86a47b2b40c930a2447107bc4829b789fe652dd868" },
  { name: "ビーハーツ", prefecture: "埼玉県", url: "https://behearts.net/" },
  { name: "Hair Salon OGATA", prefecture: "東京都", url: "https://beauty.hotpepper.jp/slnH000362449/" },
  { name: "Hacchi hair 仙川", prefecture: "東京都", url: "https://sengawa-hacchihair.net/" },
  { name: "しゅくるイスナーニ", prefecture: "東京都", url: "https://syukuru.com/" },
  { name: "SHINA for hair", prefecture: "東京都", url: "https://shina-for-hair.com/" },
  { name: "HairLife KONIKONI", prefecture: "新潟県", url: "https://www.hairlife-konikoni.com/home" },
  { name: "SALON DE MIYASHITA", prefecture: "山梨県", url: "https://salonde-miyashita.com/sp/" },
  { name: "しゅくるithnani伊那店", prefecture: "長野県", url: "https://syukuru-ina.com/" },
  { name: "オンリエドヘアデザイン", prefecture: "岐阜県", url: "https://beauty.hotpepper.jp/slnH000448037/" },
  { name: "corvivid", prefecture: "愛知県", url: "https://cor-vivid.com/" },
  { name: "QUNON", prefecture: "愛知県", url: "https://www.qunon.jp/" },
  { name: "BeautyAir YUKI", prefecture: "三重県", url: "http://www.beauty-air-yuki.com/" },
  { name: "Carame", prefecture: "三重県", url: "https://beauty.hotpepper.jp/kr/slnH000297042/" },
  { name: "a:r", prefecture: "滋賀県", url: "https://www.lespace-confortable-ar.com/" },
  { name: "美容室ヨリソウ", prefecture: "大阪府", url: "http://yorisou-kami.com/" },
  { name: "hitotema‐salon", prefecture: "大阪府", url: "https://hitotema-salon.com/" },
  { name: "アクアレラ", prefecture: "兵庫県", url: "https://beauty.hotpepper.jp/slnH000170647/" },
  { name: "髪心", prefecture: "兵庫県", url: "https://kamigokoro.jimdofree.com/" },
  { name: "(m)arble", prefecture: "兵庫県", url: "http://marble-a-hair-salon.com/" },
  { name: "美容室ごゆるりと", prefecture: "広島県", url: "https://koti-ikumou.com/" },
  { name: "Creativebase age", prefecture: "広島県", url: "http://age-group.net/" },
  { name: "LIBRE.", prefecture: "広島県", url: "https://stylelog.tokyo/r/detail/H000600600" },
  { name: "bobhair恵美須店", prefecture: "愛媛県", url: "https://nico-amo.jp/" },
  { name: "キーライム", prefecture: "長崎県", url: "https://key-rhyme.com/" },
  { name: "ヘアメイクナチュラル", prefecture: "宮崎県", url: "https://hairmake-natural.net/" },
  { name: "トータス", prefecture: "宮崎県", url: "http://hatumou-kaizen.com/" },
  { name: "Lampsi hair", prefecture: "鹿児島県", url: "https://beauty.hotpepper.jp/slnH000419997/" },
  { name: "hair＆spa glue.", prefecture: "沖縄県", url: "https://beauty.hotpepper.jp/slnH000645058/" },
  { name: "circus", prefecture: "沖縄県", url: "https://circushair2015.com/" },
  { name: "circus銘苅店", prefecture: "沖縄県", url: "https://beauty.hotpepper.jp/slnH000681787/" },
];

// ─── 都道府県の地図上の座標（より正確な配置） ────────────────────────────────
const PREFECTURE_COORDS: Record<string, { x: number; y: number }[]> = {
  "北海道": [{ x: 750, y: 80 }],
  "青森県": [{ x: 700, y: 200 }],
  "岩手県": [{ x: 720, y: 240 }],
  "宮城県": [{ x: 710, y: 280 }],
  "秋田県": [{ x: 680, y: 240 }],
  "山形県": [{ x: 680, y: 280 }, { x: 690, y: 290 }],
  "福島県": [{ x: 700, y: 320 }],
  "茨城県": [{ x: 680, y: 360 }],
  "栃木県": [{ x: 650, y: 340 }],
  "群馬県": [{ x: 620, y: 340 }, { x: 630, y: 350 }, { x: 610, y: 350 }],
  "埼玉県": [{ x: 640, y: 370 }, { x: 650, y: 375 }, { x: 630, y: 375 }, { x: 645, y: 365 }],
  "千葉県": [{ x: 680, y: 380 }],
  "東京都": [{ x: 650, y: 385 }, { x: 660, y: 390 }, { x: 640, y: 390 }],
  "神奈川県": [{ x: 640, y: 400 }],
  "新潟県": [{ x: 630, y: 290 }],
  "富山県": [{ x: 580, y: 320 }],
  "石川県": [{ x: 560, y: 310 }],
  "福井県": [{ x: 550, y: 340 }],
  "山梨県": [{ x: 620, y: 370 }],
  "長野県": [{ x: 590, y: 350 }],
  "岐阜県": [{ x: 560, y: 370 }],
  "静岡県": [{ x: 610, y: 400 }],
  "愛知県": [{ x: 570, y: 390 }, { x: 575, y: 395 }],
  "三重県": [{ x: 555, y: 410 }, { x: 560, y: 415 }],
  "滋賀県": [{ x: 530, y: 380 }],
  "京都府": [{ x: 510, y: 385 }],
  "大阪府": [{ x: 505, y: 405 }, { x: 510, y: 410 }],
  "兵庫県": [{ x: 480, y: 400 }, { x: 485, y: 405 }, { x: 475, y: 405 }],
  "奈良県": [{ x: 520, y: 410 }],
  "和歌山県": [{ x: 510, y: 435 }],
  "鳥取県": [{ x: 470, y: 370 }],
  "島根県": [{ x: 440, y: 375 }],
  "岡山県": [{ x: 475, y: 400 }],
  "広島県": [{ x: 450, y: 410 }, { x: 455, y: 415 }, { x: 445, y: 415 }],
  "山口県": [{ x: 420, y: 420 }],
  "徳島県": [{ x: 510, y: 435 }],
  "香川県": [{ x: 490, y: 425 }],
  "愛媛県": [{ x: 460, y: 440 }],
  "高知県": [{ x: 480, y: 460 }],
  "福岡県": [{ x: 390, y: 440 }],
  "佐賀県": [{ x: 370, y: 450 }],
  "長崎県": [{ x: 345, y: 460 }],
  "熊本県": [{ x: 390, y: 470 }],
  "大分県": [{ x: 420, y: 450 }],
  "宮崎県": [{ x: 420, y: 490 }, { x: 425, y: 495 }],
  "鹿児島県": [{ x: 390, y: 510 }],
  "沖縄県": [{ x: 370, y: 600 }, { x: 375, y: 605 }, { x: 365, y: 605 }],
};

// エリア定義
const AREAS = [
  {
    label: "北海道",
    prefectures: ["北海道"],
    labelPos: { x: 800, y: 50 },
  },
  {
    label: "東北",
    prefectures: ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
    labelPos: { x: 820, y: 260 },
  },
  {
    label: "関東・甲信越",
    prefectures: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "山梨県", "長野県"],
    labelPos: { x: 820, y: 370 },
  },
  {
    label: "東海",
    prefectures: ["岐阜県", "静岡県", "愛知県", "三重県"],
    labelPos: { x: 620, y: 460 },
  },
  {
    label: "近畿",
    prefectures: ["滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"],
    labelPos: { x: 430, y: 460 },
  },
  {
    label: "中国・四国",
    prefectures: ["鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県"],
    labelPos: { x: 330, y: 480 },
  },
  {
    label: "九州・沖縄",
    prefectures: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"],
    labelPos: { x: 260, y: 530 },
  },
];

// 都道府県ごとのサロン集計
function getSalonsByPrefecture() {
  const map: Record<string, typeof SALONS> = {};
  SALONS.forEach((s) => {
    if (!map[s.prefecture]) map[s.prefecture] = [];
    map[s.prefecture].push(s);
  });
  return map;
}

export default function JapanMapSection() {
  const [hoveredPref, setHoveredPref] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; salons: typeof SALONS } | null>(null);

  const salonsByPref = getSalonsByPrefecture();
  const activePrefectures = Object.keys(salonsByPref);

  // エリアごとの店舗数
  const areaCount = (area: typeof AREAS[0]) =>
    SALONS.filter((s) => area.prefectures.includes(s.prefecture)).length;

  return (
    <section
      id="salons-map"
      className="py-16 md:py-24"
      style={{ background: "oklch(0.97 0.008 148)" }}
    >
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
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
            「育毛の学校」で学んだ技術を持つスパニストが在籍する、全国
            <strong>{SALONS.length}店舗</strong>のパートナーサロンです。
            <br />
            地図上のピンをクリックして、お近くのサロンをご確認ください。
          </p>
        </div>

        {/* 凡例 */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "oklch(0.45 0.22 25)" }}
            />
            <span className="text-xs" style={{ color: "oklch(0.45 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>
              リンク有り
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "oklch(0.72 0.04 148)" }}
            />
            <span className="text-xs" style={{ color: "oklch(0.45 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}>
              準備中
            </span>
          </div>
        </div>

        {/* 地図エリア */}
        <div className="relative w-full max-w-4xl mx-auto bg-white rounded-lg p-4 shadow-sm" style={{ border: "1px solid oklch(0.90 0.04 148)" }}>
          <svg
            viewBox="0 0 950 650"
            className="w-full h-auto"
            style={{ overflow: "visible" }}
          >
            {/* ─── 日本地図（より正確な形状） ─── */}
            {/* 北海道 */}
            <path
              d="M 750 50 L 800 45 L 820 60 L 830 90 L 810 120 L 770 125 L 740 110 Z"
              fill="oklch(0.88 0.02 148)"
              stroke="oklch(0.75 0.04 148)"
              strokeWidth="1"
            />
            {/* 本州 */}
            <path
              d="M 420 200 L 500 195 L 560 200 L 620 210 L 680 220 L 720 230 L 740 250 L 745 280 L 740 310 L 730 340 L 720 360 L 710 380 L 700 400 L 680 410 L 660 415 L 640 420 L 620 425 L 600 420 L 580 410 L 560 400 L 540 395 L 520 390 L 500 395 L 480 400 L 460 395 L 440 385 L 420 375 L 400 365 L 385 350 L 380 330 L 385 310 L 395 290 L 405 270 L 410 250 L 415 230 L 420 210 Z"
              fill="oklch(0.85 0.02 148)"
              stroke="oklch(0.75 0.04 148)"
              strokeWidth="1"
            />
            {/* 四国 */}
            <path
              d="M 455 420 L 495 415 L 520 425 L 530 445 L 510 460 L 475 465 L 445 450 Z"
              fill="oklch(0.85 0.02 148)"
              stroke="oklch(0.75 0.04 148)"
              strokeWidth="1"
            />
            {/* 九州 */}
            <path
              d="M 355 430 L 400 425 L 430 435 L 440 460 L 425 485 L 400 500 L 370 505 L 340 490 L 330 460 Z"
              fill="oklch(0.85 0.02 148)"
              stroke="oklch(0.75 0.04 148)"
              strokeWidth="1"
            />
            {/* 沖縄 */}
            <ellipse cx="370" cy="600" rx="20" ry="12" fill="oklch(0.85 0.02 148)" stroke="oklch(0.75 0.04 148)" strokeWidth="1" />

            {/* ─── エリアラベル ─── */}
            {AREAS.map((area) => {
              const count = areaCount(area);
              if (count === 0) return null;
              return (
                <g key={area.label}>
                  {/* ラベル背景 */}
                  <rect
                    x={area.labelPos.x - 50}
                    y={area.labelPos.y - 12}
                    width="100"
                    height="32"
                    rx="4"
                    fill="white"
                    fillOpacity="0.95"
                    stroke="oklch(0.72 0.08 80)"
                    strokeWidth="1"
                  />
                  {/* エリア名 */}
                  <text
                    x={area.labelPos.x}
                    y={area.labelPos.y + 3}
                    textAnchor="middle"
                    fontSize="10"
                    fontFamily="'Noto Sans JP', sans-serif"
                    fill="oklch(0.28 0.09 148)"
                    fontWeight="600"
                  >
                    {area.label}
                  </text>
                  {/* 店舗数 */}
                  <text
                    x={area.labelPos.x}
                    y={area.labelPos.y + 18}
                    textAnchor="middle"
                    fontSize="11"
                    fontFamily="'Noto Sans JP', sans-serif"
                    fill="oklch(0.65 0.12 80)"
                    fontWeight="700"
                  >
                    {count} 店舗
                  </text>
                </g>
              );
            })}

            {/* ─── サロンピン（全店舗） ─── */}
            {activePrefectures.map((pref) => {
              const coords = PREFECTURE_COORDS[pref] || [];
              const salons = salonsByPref[pref];
              const hasUrl = salons.some((s) => s.url);
              const isHovered = hoveredPref === pref;

              return coords.map((coord, idx) => {
                const salon = salons[idx] || salons[0];
                const pinColor = salon.url ? "oklch(0.45 0.22 25)" : "oklch(0.72 0.04 148)";
                const pinColorHover = salon.url ? "oklch(0.55 0.25 25)" : "oklch(0.78 0.06 148)";

                return (
                  <g
                    key={`${pref}-${idx}`}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => {
                      setHoveredPref(pref);
                      setTooltip({ x: coord.x, y: coord.y, salons });
                    }}
                    onMouseLeave={() => {
                      setHoveredPref(null);
                      setTooltip(null);
                    }}
                  >
                    {/* ピン棒 */}
                    <line
                      x1={coord.x}
                      y1={coord.y}
                      x2={coord.x}
                      y2={coord.y + 12}
                      stroke={isHovered ? pinColorHover : pinColor}
                      strokeWidth="1.5"
                    />
                    {/* ピン丸 */}
                    <circle
                      cx={coord.x}
                      cy={coord.y}
                      r={isHovered ? 6.5 : 5}
                      fill={isHovered ? pinColorHover : pinColor}
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </g>
                );
              });
            })}

            {/* ─── ホバー時ツールチップ ─── */}
            {tooltip && (
              <g>
                <rect
                  x={tooltip.x + 12}
                  y={tooltip.y - 8}
                  width={Math.max(...tooltip.salons.map((s) => s.name.length)) * 7 + 16}
                  height={tooltip.salons.length * 18 + 10}
                  rx="4"
                  fill="oklch(0.18 0.08 148)"
                  fillOpacity="0.96"
                />
                {tooltip.salons.map((salon, i) => (
                  <text
                    key={salon.name}
                    x={tooltip.x + 18}
                    y={tooltip.y + 6 + i * 18}
                    fontSize="9"
                    fill={salon.url ? "oklch(0.85 0.12 80)" : "oklch(0.75 0.04 148)"}
                    fontFamily="'Noto Sans JP', sans-serif"
                    fontWeight={salon.url ? "600" : "400"}
                  >
                    {salon.url ? "●" : "○"} {salon.name}
                  </text>
                ))}
              </g>
            )}
          </svg>
        </div>

        {/* ─── サロン一覧（クリッカブルリスト）─── */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3
            className="text-center text-lg font-semibold mb-6"
            style={{ fontFamily: "'Shippori Mincho', serif", color: "oklch(0.28 0.09 148)" }}
          >
            導入サロン一覧
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {SALONS.map((salon) => {
              const hasUrl = !!salon.url;
              return hasUrl ? (
                <a
                  key={salon.name}
                  href={salon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all duration-150"
                  style={{
                    background: "white",
                    border: "1px solid oklch(0.88 0.04 148)",
                    color: "oklch(0.28 0.09 148)",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.95 0.04 148)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(0.65 0.12 80)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "white";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(0.88 0.04 148)";
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "oklch(0.45 0.22 25)" }}
                  />
                  <span className="leading-tight">{salon.name}</span>
                </a>
              ) : (
                <div
                  key={salon.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
                  style={{
                    background: "oklch(0.94 0.02 148)",
                    border: "1px solid oklch(0.90 0.02 148)",
                    color: "oklch(0.55 0.04 148)",
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "oklch(0.72 0.04 148)" }}
                  />
                  <span className="leading-tight">{salon.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
