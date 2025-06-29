import { BookOpen, Star, LayoutGrid, Target, Users, Lightbulb, TrendingUp } from "lucide-react";

// 四環能力核心架構
const coreAbilities = [
  {
    title: "行銷基石專業",
    description: "奠定策略語言與管理思維，從行銷學、品牌管理到策略管理，建構完整的行銷理論框架。",
    icon: Target,
    color: "blue",
    courses: ["行銷學", "品牌管理", "策略管理", "服務行銷"]
  },
  {
    title: "消費者洞察力",
    description: "透過普通心理學→消費者心理學→認知心理學三連修，深度理解消費者行為。",
    icon: Users,
    color: "green",
    courses: ["普通心理學", "消費者心理學", "認知心理學", "市場調查"]
  },
  {
    title: "企劃與執行力",
    description: "透過數位實戰課程在真實情境中反覆演練KPI設定與成效追蹤。",
    icon: TrendingUp,
    color: "purple",
    courses: ["行銷企劃實務", "網路廣告投放", "社群行銷實戰", "跨境電商實戰"]
  },
  {
    title: "創新創意思維",
    description: "從創意思考到美學素養，培養與設計團隊「說同一種語言」的能力。",
    icon: Lightbulb,
    color: "orange",
    courses: ["創意文案設計", "故事行銷", "影像敘事", "行銷美學素養"]
  }
];

// 學年配置路徑
const yearlyPath = [
  {
    year: "大一",
    focus: "認知輸入",
    description: "建立「市場×人心」語言，啟動創意與美感感知",
    icon: BookOpen
  },
  {
    year: "大二", 
    focus: "技術深化",
    description: "將品牌與服務串入心理機制，用邏輯拆解策略",
    icon: Star
  },
  {
    year: "大三",
    focus: "策略成形", 
    description: "把洞察轉成跨媒體策略並以研究驗證",
    icon: TrendingUp
  },
  {
    year: "大四",
    focus: "整合實戰",
    description: "產出「洞察→策略→素材→投放→成效」閉環專案",
    icon: LayoutGrid
  }
];

const CurriculumHighlightsGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white w-full">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* 標題區 - 簡化 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            四環能力導向課程設計
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            以「品牌／產品端（甲方）思維」為唯一定位
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            將行銷人應具備的專業拆解為四大核心能力，所有課程皆環繞這四環能力鋪排
          </p>
        </div>

        {/* 四環能力核心 - 簡化 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            四大核心能力模組
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coreAbilities.map((ability, index) => (
              <div
                key={ability.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-${ability.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                    <ability.icon className={`w-6 h-6 text-${ability.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{ability.title}</h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {ability.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700 mb-3">代表課程：</p>
                  <div className="flex flex-wrap gap-2">
                    {ability.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-50 rounded-full text-sm text-slate-700 border border-slate-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 縱向學年配置 - 簡化 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            學年配置路徑
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {yearlyPath.map((year, index) => (
              <div
                key={year.year}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                  index === 0 ? 'bg-blue-100 text-blue-600' :
                  index === 1 ? 'bg-green-100 text-green-600' :
                  index === 2 ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <year.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2">{year.year}</h3>
                <p className="text-sm font-semibold text-slate-600 mb-3">{year.focus}</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {year.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 特色制度 - 簡化 */}
        <div className="text-center">
          <div className="bg-slate-900 rounded-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">進階制度</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">4+1 學碩一貫</h3>
                <p className="text-slate-300 leading-relaxed">
                  大三下達指定成績門檻即可申請預修碩士課程，五年同時取得學士、碩士學位
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">國際鏈結</h3>
                <p className="text-slate-300 leading-relaxed">
                  鼓勵高年級生利用交換或雙聯機會，把海外行銷個案帶回作為專題素材
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CurriculumHighlightsGrid;
