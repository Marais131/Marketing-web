
import { BookOpen, Star, LayoutGrid } from "lucide-react";

const highlights = [
  {
    title: "獨特跨域課程",
    subtitle: "行銷 × 心理 × 邏輯 × 實戰",
    description:
      "以心理學、邏輯學打底，強化你的消費者洞察與策略思維，搭配業界導師真實電商專案實作，課程內容更跨界且緊貼產業最新脈動。",
    icon: BookOpen,
    background: "from-cyan-100 via-blue-50 to-purple-100",
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
    background: "from-purple-100 via-pink-50 to-cyan-100",
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
    background: "from-teal-100 via-orange-50 to-blue-50",
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
        <div className="text-center mb-14 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700 bg-clip-text text-transparent drop-shadow">
            課程亮點 Highlights
          </h1>
          <p className="text-lg md:text-xl text-slate-700/90 font-medium mb-6">
            現代品牌行銷 × 跨域專業 × 五年一貫學碩 × 協作創新
          </p>
        </div>

        {/* 新版三大 highlight 卡片，等高、圖片固定寬度 */}
        <div className="flex flex-col gap-10">
          {highlights.map((item, idx) => (
            <div
              key={item.title}
              className={`
                bg-gradient-to-br ${item.background} 
                rounded-2xl shadow-lg px-0 py-0
                flex flex-col md:flex-row items-stretch
                overflow-hidden animate-fade-in
                ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* 圖片區（左或右） */}
              <div className="md:w-[40%] w-full flex items-center justify-center bg-white/40 min-h-[230px] md:min-h-[260px]">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="object-contain w-full h-full max-h-[220px] md:max-h-[300px] p-5 rounded-2xl"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex w-full h-full items-center justify-center">
                    <span className="rounded-full bg-white/80 shadow p-8">
                      <item.icon className="w-14 h-14 text-blue-600" />
                    </span>
                  </div>
                )}
              </div>
              {/* 內容區（右或左） */}
              <div
                className={`flex-1 min-w-0 px-6 py-8 md:px-10 md:py-10 flex flex-col justify-center ${item.text}`}
              >
                <span className="flex items-center gap-2 mb-2">
                  <item.icon className="w-8 h-8 text-blue-600" />
                  <span className="font-semibold text-lg md:text-xl tracking-wide">{item.subtitle}</span>
                </span>
                <h2 className="font-extrabold text-2xl md:text-3xl mb-2">{item.title}</h2>
                <p className="text-base md:text-lg mb-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 四大能力條，維持橫向 */}
        <div className="mt-16 mb-8 flex justify-center items-center gap-6 md:gap-10 animate-fade-in flex-wrap">
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
