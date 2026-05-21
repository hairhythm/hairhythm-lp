/*
 * JapanMapSection — インタラクティブ日本地図
 * 全国の導入サロンをピンで表示し、エリアラベルに引き出し線を引く
 * サロン名クリックで各サロンのサイトへ遷移
 */
import { useState } from "react";

// ─── サロンデータ（都道府県の地図座標付き）────────────────────────────────
// 座標はSVGビューポート(0 0 950 1000)内のおおよその都道府県中心位置
const PREFECTURE_COORDS: Record<string, { x: number; y: number }> = {
  "北海道": { x: 760, y: 110 },
  "青森県": { x: 720, y: 220 },
  "岩手県": { x: 740, y: 265 },
  "宮城県": { x: 720, y: 300 },
  "秋田県": { x: 695, y: 255 },
  "山形県": { x: 695, y: 295 },
  "福島県": { x: 700, y: 335 },
  "茨城県": { x: 680, y: 380 },
  "栃木県": { x: 655, y: 360 },
  "群馬県": { x: 625, y: 360 },
  "埼玉県": { x: 650, y: 390 },
  "千葉県": { x: 685, y: 405 },
  "東京都": { x: 660, y: 405 },
  "神奈川県": { x: 650, y: 420 },
  "新潟県": { x: 640, y: 305 },
  "富山県": { x: 590, y: 335 },
  "石川県": { x: 565, y: 330 },
  "福井県": { x: 555, y: 360 },
  "山梨県": { x: 625, y: 390 },
  "長野県": { x: 600, y: 370 },
  "岐阜県": { x: 565, y: 385 },
  "静岡県": { x: 620, y: 420 },
  "愛知県": { x: 575, y: 410 },
  "三重県": { x: 560, y: 430 },
  "滋賀県": { x: 530, y: 400 },
  "京都府": { x: 510, y: 400 },
  "大阪府": { x: 505, y: 420 },
  "兵庫県": { x: 480, y: 415 },
  "奈良県": { x: 520, y: 425 },
  "和歌山県": { x: 510, y: 450 },
  "鳥取県": { x: 470, y: 390 },
  "島根県": { x: 440, y: 390 },
  "岡山県": { x: 480, y: 415 },
  "広島県": { x: 455, y: 420 },
  "山口県": { x: 420, y: 430 },
  "徳島県": { x: 510, y: 450 },
  "香川県": { x: 490, y: 440 },
  "愛媛県": { x: 460, y: 455 },
  "高知県": { x: 480, y: 475 },
  "福岡県": { x: 390, y: 450 },
  "佐賀県": { x: 370, y: 460 },
  "長崎県": { x: 345, y: 470 },
  "熊本県": { x: 390, y: 480 },
  "大分県": { x: 420, y: 460 },
  "宮崎県": { x: 420, y: 500 },
  "鹿児島県": { x: 390, y: 520 },
  "沖縄県": { x: 370, y: 620 },
};

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

// エリア定義（地図上のラベル位置と引き出し先）
const AREAS = [
  {
    label: "北海道エリア",
    prefectures: ["北海道"],
    labelPos: { x: 720, y: 60 },
    lineEnd: { x: 760, y: 110 },
  },
  {
    label: "東北エリア",
    prefectures: ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
    labelPos: { x: 830, y: 270 },
    lineEnd: { x: 720, y: 290 },
  },
  {
    label: "関東・甲信越エリア",
    prefectures: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "山梨県", "長野県"],
    labelPos: { x: 820, y: 390 },
    lineEnd: { x: 660, y: 390 },
  },
  {
    label: "東海エリア",
    prefectures: ["岐阜県", "静岡県", "愛知県", "三重県"],
    labelPos: { x: 620, y: 480 },
    lineEnd: { x: 580, y: 420 },
  },
  {
    label: "近畿エリア",
    prefectures: ["滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"],
    labelPos: { x: 430, y: 480 },
    lineEnd: { x: 510, y: 420 },
  },
  {
    label: "中国・四国エリア",
    prefectures: ["鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県"],
    labelPos: { x: 330, y: 490 },
    lineEnd: { x: 460, y: 440 },
  },
  {
    label: "九州・沖縄エリア",
    prefectures: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"],
    labelPos: { x: 260, y: 540 },
    lineEnd: { x: 390, y: 490 },
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

        {/* 地図エリア */}
        <div className="relative w-full max-w-4xl mx-auto">
          <svg
            viewBox="0 0 950 700"
            className="w-full h-auto"
            style={{ overflow: "visible" }}
          >
            {/* ─── 日本地図（簡略SVGパス） ─── */}
            {/* 北海道 */}
            <path d="M680,80 L720,70 L780,75 L820,90 L830,120 L800,150 L760,155 L730,145 L700,130 L680,110 Z" fill="oklch(0.85 0.04 148)" stroke="white" strokeWidth="1.5" />
            {/* 本州（簡略） */}
            <path d="M420,200 L480,195 L540,200 L600,210 L650,220 L700,230 L730,240 L740,260 L730,280 L720,300 L710,320 L700,340 L690,360 L680,375 L670,390 L660,400 L650,415 L640,430 L630,440 L615,450 L600,455 L580,450 L560,440 L540,430 L520,420 L500,415 L480,420 L460,425 L440,420 L420,410 L400,400 L390,385 L385,370 L390,355 L400,340 L410,320 L415,300 L410,280 L405,260 L410,240 L415,220 Z" fill="oklch(0.82 0.04 148)" stroke="white" strokeWidth="1.5" />
            {/* 四国 */}
            <path d="M455,435 L490,430 L520,435 L535,445 L530,465 L510,475 L480,478 L455,470 L445,455 Z" fill="oklch(0.80 0.04 148)" stroke="white" strokeWidth="1.5" />
            {/* 九州 */}
            <path d="M355,440 L395,435 L425,440 L435,455 L430,475 L415,490 L395,500 L370,505 L345,495 L330,475 L335,458 Z" fill="oklch(0.80 0.04 148)" stroke="white" strokeWidth="1.5" />
            {/* 沖縄（小さい島） */}
            <ellipse cx="370" cy="615" rx="18" ry="10" fill="oklch(0.80 0.04 148)" stroke="white" strokeWidth="1" />
            <ellipse cx="340" cy="625" rx="10" ry="6" fill="oklch(0.80 0.04 148)" stroke="white" strokeWidth="1" />

            {/* ─── エリアラベルと引き出し線 ─── */}
            {AREAS.map((area) => {
              const count = areaCount(area);
              if (count === 0) return null;
              return (
                <g key={area.label}>
                  {/* 引き出し線 */}
                  <line
                    x1={area.labelPos.x + (area.labelPos.x < area.lineEnd.x ? 80 : -5)}
                    y1={area.labelPos.y + 20}
                    x2={area.lineEnd.x}
                    y2={area.lineEnd.y}
                    stroke="oklch(0.45 0.06 148)"
                    strokeWidth="1"
                    strokeDasharray="3,2"
                  />
                  {/* ラベル背景 */}
                  <rect
                    x={area.labelPos.x - (area.labelPos.x < area.lineEnd.x ? 5 : 85)}
                    y={area.labelPos.y - 8}
                    width="90"
                    height="36"
                    rx="4"
                    fill="white"
                    fillOpacity="0.92"
                    stroke="oklch(0.82 0.06 148)"
                    strokeWidth="0.8"
                  />
                  {/* エリア名 */}
                  <text
                    x={area.labelPos.x + (area.labelPos.x < area.lineEnd.x ? 40 : 0)}
                    y={area.labelPos.y + 5}
                    textAnchor="middle"
                    fontSize="9"
                    fontFamily="'Noto Sans JP', sans-serif"
                    fill="oklch(0.28 0.09 148)"
                    fontWeight="600"
                  >
                    {area.label}
                  </text>
                  {/* 店舗数 */}
                  <text
                    x={area.labelPos.x + (area.labelPos.x < area.lineEnd.x ? 40 : 0)}
                    y={area.labelPos.y + 20}
                    textAnchor="middle"
                    fontSize="10"
                    fontFamily="'Noto Sans JP', sans-serif"
                    fill="oklch(0.55 0.08 80)"
                    fontWeight="700"
                  >
                    {count} 店舗
                  </text>
                </g>
              );
            })}

            {/* ─── サロンピン ─── */}
            {activePrefectures.map((pref) => {
              const coord = PREFECTURE_COORDS[pref];
              if (!coord) return null;
              const salons = salonsByPref[pref];
              const isHovered = hoveredPref === pref;
              return (
                <g
                  key={pref}
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
                    y2={coord.y + 14}
                    stroke={isHovered ? "oklch(0.45 0.15 30)" : "oklch(0.35 0.18 25)"}
                    strokeWidth="1.5"
                  />
                  {/* ピン丸 */}
                  <circle
                    cx={coord.x}
                    cy={coord.y}
                    r={isHovered ? 7 : 5.5}
                    fill={isHovered ? "oklch(0.55 0.20 30)" : "oklch(0.45 0.22 25)"}
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  {/* 複数店舗の場合は数字表示 */}
                  {salons.length > 1 && (
                    <text
                      x={coord.x}
                      y={coord.y + 4}
                      textAnchor="middle"
                      fontSize="6"
                      fill="white"
                      fontWeight="700"
                      fontFamily="sans-serif"
                    >
                      {salons.length}
                    </text>
                  )}
                </g>
              );
            })}

            {/* ─── ホバー時ツールチップ ─── */}
            {tooltip && (
              <g>
                <rect
                  x={tooltip.x + 10}
                  y={tooltip.y - 10}
                  width={Math.max(...tooltip.salons.map((s) => s.name.length)) * 8 + 20}
                  height={tooltip.salons.length * 22 + 12}
                  rx="6"
                  fill="oklch(0.18 0.08 148)"
                  fillOpacity="0.95"
                />
                {tooltip.salons.map((salon, i) => (
                  <text
                    key={salon.name}
                    x={tooltip.x + 20}
                    y={tooltip.y + 8 + i * 22}
                    fontSize="10"
                    fill={salon.url ? "oklch(0.85 0.12 80)" : "white"}
                    fontFamily="'Noto Sans JP', sans-serif"
                    fontWeight={salon.url ? "600" : "400"}
                  >
                    {salon.url ? "▶ " : "  "}{salon.name}
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
                  <span className="ml-auto text-[9px]" style={{ color: "oklch(0.65 0.12 80)" }}>
                    {salon.prefecture.replace("県", "").replace("都", "").replace("府", "").replace("道", "")}
                  </span>
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
                    style={{ background: "oklch(0.70 0.04 148)" }}
                  />
                  <span className="leading-tight">{salon.name}</span>
                  <span className="ml-auto text-[9px]" style={{ color: "oklch(0.65 0.04 148)" }}>
                    {salon.prefecture.replace("県", "").replace("都", "").replace("府", "").replace("道", "")}
                  </span>
                </div>
              );
            })}
          </div>
          <p
            className="text-center text-xs mt-4"
            style={{ color: "oklch(0.60 0.04 148)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            ※ 赤丸ピンのサロンはリンクあり。グレーのサロンは準備中です。
          </p>
        </div>
      </div>
    </section>
  );
}
