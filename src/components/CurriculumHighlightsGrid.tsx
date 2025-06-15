
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Star, LayoutGrid, ArrowDown, ArrowUp } from "lucide-react";

const highlights = [
  {
    title: "獨特跨域課程",
    subtitle: "行銷 × 心理 × 邏輯 × 實戰",
    description:
      "以心理學、邏輯學打底，強化你的消費者洞察與策略思維，搭配業界導師真實電商專案實作，課程內容更跨界且緊貼產業最新脈動。",
    icon: BookOpen,
    color: "from-cyan-500 via-blue-400 to-violet-400",
    accent: "bg-cyan-100 text-cyan-700",
    image: "/lovable-uploads/d3bb2780-7b61-43e4-b4e3-972e02c9080f.png",
    imageAlt: "課程架構示意",
  },
  {
    title: "五年學碩一貫",
    subtitle: "4+1計畫，直達職涯高峰",
    description:
      "五年完成學士及碩士，職場競爭力全面提升！針對「品牌經理」、「產品經理」、「數位行銷」設有明確職涯路徑與專業培育。",
    icon: Star,
    color: "from-purple-500 via-indigo-400 to-cyan-400",
    accent: "bg-purple-100 text-purple-700",
    image: "/lovable-uploads/d765d1d6-444b-4bfe-9856-74ed5e61a8ef.png",
    imageAlt: "職涯發展路徑圖",
  },
  {
    title: "品牌端核心職能",
    subtitle: "四大能力全方位培養",
    description:
      "品牌管理、消費者洞察、策略企劃、創意執行，學會領導團隊、協作跨域、精準決策，成為市場引領者。",
    icon: LayoutGrid,
    color: "from-teal-500 via-orange-300 to-blue-400",
    accent: "bg-teal-100 text-teal-700",
    image: "",
    imageAlt: "",
  },
];

const abilityIcons = [
  { icon: BookOpen, label: "品牌管理" },
  { icon: ArrowUp, label: "數據洞察" },
  { icon: LayoutGrid, label: "企劃與執行" },
  { icon: ArrowDown, label: "創新創意" },
];

const CurriculumHighlightsGrid = () => {
  return (
    <div className="py-14 min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 w-full">
      <div className="container max-w-6xl mx-auto px-3">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700 bg-clip-text text-transparent drop-shadow">
            課程亮點 Highlights
          </h1>
          <p className="text-lg md:text-xl text-slate-700/90 font-medium mb-6">
            現代品牌行銷 × 跨域專業 × 五年一貫學碩 × 協作創新
          </p>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            用跨界課程、完整學程結構與業界實戰鍛鍊最強「品牌行銷人」！藍色系、紫色系與活力橘色點綴，打造全新學習體驗。
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 animate-fade-in">
          {highlights.map((highlight, i) => (
            <Card
              className={`group shadow-xl border-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${highlight.color} relative overflow-hidden`}
              key={i}
            >
              <div className="absolute right-3 top-4 z-0 opacity-10 w-36 h-36 rounded-full bg-white blur-2xl"></div>
              <CardContent className="p-8 md:p-10 flex flex-col gap-5 relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <span className={`rounded-xl px-4 py-1 font-semibold text-base shadow ${highlight.accent}`}>
                    {highlight.subtitle}
                  </span>
                  <highlight.icon className="w-9 h-9 text-slate-700 drop-shadow" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 drop-shadow mb-1">{highlight.title}</h3>
                <p className="text-slate-700/90 text-base md:text-lg">{highlight.description}</p>
                {highlight.image && (
                  <img
                    src={highlight.image}
                    alt={highlight.imageAlt}
                    className="rounded-2xl shadow-lg w-full max-w-md mx-auto object-contain my-3"
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* 四大能力圖標條 */}
        <div className="mt-20 mb-8 flex justify-center items-center gap-6 md:gap-10 animate-fade-in">
          {abilityIcons.map(({ icon: Icon, label }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group"
            >
              <span className={`rounded-full p-3 bg-gradient-to-tr from-blue-200 via-cyan-200 to-purple-200 shadow mb-2`}>
                <Icon className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
              </span>
              <div className="text-slate-700 font-medium text-sm">{label}</div>
            </div>
          ))}
        </div>
        {/* 結尾強調 */}
        <div className="text-center mt-2 mb-5 text-base text-slate-600">
          完整訓練品牌端人才 ‧ 掌握未來行銷趨勢 ‧ 由實戰到學術一條龍
        </div>
      </div>
    </div>
  );
};
export default CurriculumHighlightsGrid;
