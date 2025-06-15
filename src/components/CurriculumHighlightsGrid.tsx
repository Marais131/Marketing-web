
import { BookOpen, Star, LayoutGrid } from "lucide-react";

const highlights = [
  {
    title: "獨特跨域課程",
    subtitle: "行銷 × 心理 × 邏輯 × 實戰",
    description:
      "以心理學、邏輯學打底，強化你的消費者洞察與策略思維，搭配業界導師真實電商專案實作，課程內容更跨界且緊貼產業最新脈動。",
    icon: BookOpen,
    background: "bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-100",
    text: "text-cyan-900",
    image: "/lovable-uploads/d3bb2780-7b61-43e4-b4e3-972e02c9080f.png",
    imageAlt: "課程架構示意",
  },
  {
    title: "五年學碩一貫",
    subtitle: "4+1計畫，直達職涯高峰",
    description:
      "五年完成學士及碩士，職場競爭力全面提升！針對「品牌經理」、「產品經理」、「數位行銷」設有明確職涯路徑與專業培育。",
    icon: Star,
    background: "bg-gradient-to-br from-purple-100 via-pink-50 to-cyan-100",
    text: "text-purple-900",
    image: "/lovable-uploads/d765d1d6-444b-4bfe-9856-74ed5e61a8ef.png",
    imageAlt: "職涯發展路徑圖",
  },
  {
    title: "品牌端核心職能",
    subtitle: "四大能力全方位培養",
    description:
      "品牌管理、消費者洞察、策略企劃、創意執行，學會領導團隊、協作跨域、精準決策，成為市場引領者。",
    icon: LayoutGrid,
    background: "bg-gradient-to-br from-teal-100 via-orange-50 to-blue-50",
    text: "text-teal-900",
    image: "",
    imageAlt: "",
  },
];

const abilityIcons = [
  { icon: BookOpen, label: "品牌管理" },
  { icon: LayoutGrid, label: "企劃與執行" },
  { icon: Star, label: "數據洞察" },
  // 保留代表性
];

const CurriculumHighlightsGrid = () => {
  return (
    <section className="py-14 min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 w-full">
      <div className="container max-w-6xl mx-auto px-3">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700 bg-clip-text text-transparent drop-shadow">
            課程亮點 Highlights
          </h1>
          <p className="text-lg md:text-xl text-slate-700/90 font-medium mb-6">
            現代品牌行銷 × 跨域專業 × 五年一貫學碩 × 協作創新
          </p>
        </div>
        {/* 新Z字型/色塊分明版面 */}
        <div className="flex flex-col gap-12">
          {highlights.map((item, idx) => (
            <div
              key={item.title}
              className={`${item.background} rounded-3xl shadow-xl px-6 py-8 md:py-14 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-fade-in ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* ICON區塊 */}
              <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4 w-full md:w-[210px]">
                <span className="rounded-full bg-white/80 shadow p-5 mb-2 animate-scale-in">
                  <item.icon className="w-11 h-11 text-blue-600" />
                </span>
                <div className="font-bold text-base md:text-lg text-blue-800/80 tracking-wide">{item.subtitle}</div>
              </div>
              {/* 內容描述區塊 */}
              <div className={`flex-1 w-full ${item.text}`}>
                <h2 className="font-extrabold text-2xl md:text-3xl mb-2 drop-shadow">{item.title}</h2>
                <p className="text-base md:text-lg mb-3">{item.description}</p>
                {/* 圖片區塊（有圖才顯示） */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="rounded-xl shadow-md my-3 w-full max-w-xs md:max-w-sm object-contain mx-auto md:mx-0"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        {/* 四大能力條，現代橫向展示 */}
        <div className="mt-20 mb-8 flex justify-center items-center gap-6 md:gap-10 animate-fade-in flex-wrap">
          {abilityIcons.map(({ icon: Icon, label }, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <span className="rounded-full p-3 bg-gradient-to-tr from-blue-200 via-cyan-200 to-purple-200 shadow mb-2">
                <Icon className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
              </span>
              <div className="text-slate-700 font-medium text-sm">{label}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-2 mb-5 text-base text-slate-600">
          完整訓練品牌端人才 ‧ 掌握未來行銷趨勢 ‧ 由實戰到學術一條龍
        </div>
      </div>
    </section>
  );
};

export default CurriculumHighlightsGrid;
