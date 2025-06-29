import { BookOpen, Star, LayoutGrid, Target, Users, Lightbulb, TrendingUp } from "lucide-react";

// 四環能力核心架構
const coreAbilities = [
  {
    title: "行銷基石專業",
    subtitle: "Marketing Foundation",
    description: "奠定策略語言與管理思維，從行銷學、品牌管理到策略管理，建構完整的行銷理論框架與商業思維。",
    icon: Target,
    background: "from-blue-100 via-blue-50 to-indigo-100",
    text: "text-blue-900",
    courses: ["行銷學", "品牌管理", "策略管理", "服務行銷", "定價策略"],
    color: "blue"
  },
  {
    title: "消費者洞察力",
    subtitle: "Consumer Insights",
    description: "從心理機制到研究方法，透過普通心理學→消費者心理學→認知心理學三連修，深度理解消費者行為。",
    icon: Users,
    background: "from-green-100 via-green-50 to-emerald-100",
    text: "text-green-900",
    courses: ["普通心理學", "消費者心理學", "認知心理學", "市場調查", "實驗設計"],
    color: "green"
  },
  {
    title: "企劃與執行力",
    subtitle: "Planning & Execution",
    description: "把洞察轉化為可衡量的行動，透過數位實戰課程在真實情境中反覆演練KPI設定與成效追蹤。",
    icon: LayoutGrid,
    background: "from-purple-100 via-purple-50 to-violet-100",
    text: "text-purple-900",
    courses: ["行銷企劃實務", "網路廣告投放", "社群行銷實戰", "跨境電商實戰", "Google廣告投放"],
    color: "purple"
  },
  {
    title: "創新創意思維",
    subtitle: "Innovation & Creativity",
    description: "用差異化內容與美感放大價值，從創意思考到美學素養，培養與設計團隊「說同一種語言」的能力。",
    icon: Lightbulb,
    background: "from-orange-100 via-orange-50 to-red-100",
    text: "text-orange-900",
    courses: ["創意文案設計", "故事行銷", "影像敘事", "行銷美學素養", "網路直播企劃"],
    color: "orange"
  }
];

// 學年配置路徑
const yearlyPath = [
  {
    year: "大一",
    focus: "認知輸入",
    description: "建立「市場×人心」語言，啟動創意與美感感知",
    icon: BookOpen,
    courses: ["行銷學", "普通心理學", "創意思考", "美學素養"]
  },
  {
    year: "大二", 
    focus: "技術深化",
    description: "將品牌與服務串入心理機制，用邏輯拆解策略",
    icon: Star,
    courses: ["服務行銷", "品牌管理", "消費者心理學", "邏輯學"]
  },
  {
    year: "大三",
    focus: "策略成形", 
    description: "把洞察轉成跨媒體策略並以研究驗證",
    icon: TrendingUp,
    courses: ["定價策略", "認知心理學", "影像敘事", "市場調查", "實驗設計"]
  },
  {
    year: "大四",
    focus: "整合實戰",
    description: "產出「洞察→策略→素材→投放→成效」閉環專案",
    icon: LayoutGrid,
    courses: ["行銷專題製作", "社群實戰", "電商實戰", "投放系列課程"]
  }
];

const CurriculumHighlightsGrid = () => {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 w-full">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* 標題區 */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
            四環能力導向課程設計
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 font-medium mb-4">
            以「品牌／產品端（甲方）思維」為唯一定位
          </p>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            將行銷人應具備的專業拆解為四大核心能力，所有課程皆環繞這四環能力鋪排，
            象徵能力環環相扣的完整培育體系。
          </p>
        </div>

        {/* 四環能力核心 */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
            四大核心能力模組
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coreAbilities.map((ability, index) => (
              <div
                key={ability.title}
                className={`group relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br ${ability.background} hover:shadow-2xl transition-all duration-500 hover:scale-105`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <ability.icon className={`w-8 h-8 text-${ability.color}-600`} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${ability.text} mb-1`}>{ability.title}</h3>
                      <p className="text-slate-600 font-medium">{ability.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className={`${ability.text} text-lg mb-6 leading-relaxed`}>
                    {ability.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700 mb-3">代表課程：</p>
                    <div className="flex flex-wrap gap-2">
                      {ability.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-white/50"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 縱向學年配置 */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
            縱向學年配置路徑
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {yearlyPath.map((year, index) => (
              <div
                key={year.year}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200/50"
              >
                {/* 年份標籤 */}
                <div className={`h-2 bg-gradient-to-r ${
                  index === 0 ? 'from-blue-500 to-blue-600' :
                  index === 1 ? 'from-green-500 to-green-600' :
                  index === 2 ? 'from-purple-500 to-purple-600' :
                  'from-orange-500 to-orange-600'
                }`}></div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-3 ${
                      index === 0 ? 'bg-blue-100 text-blue-600' :
                      index === 1 ? 'bg-green-100 text-green-600' :
                      index === 2 ? 'bg-purple-100 text-purple-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      <year.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{year.year}</h3>
                      <p className="text-sm font-semibold text-slate-600">{year.focus}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                    {year.description}
                  </p>
                  
                  <div className="space-y-1">
                    {year.courses.map((course, idx) => (
                      <div key={idx} className="text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 特色制度 */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">進階制度與國際視野</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-blue-300">4+1 學碩一貫</h3>
                <p className="text-blue-100 leading-relaxed">
                  大三下達指定成績門檻即可申請預修碩士課程，於大四並修，五年同時取得學士、碩士學位，
                  直達職涯高峰。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-green-300">國際鏈結</h3>
                <p className="text-green-100 leading-relaxed">
                  鼓勵高年級生利用交換或雙聯機會，把海外行銷個案帶回作為專題素材，
                  培養全球視野。
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
