import { BookOpen, Star, LayoutGrid, Target, Users, Lightbulb, TrendingUp, Award, Briefcase, Clock, CheckCircle, BarChart3, PieChart, Zap, Brain, Palette, Code, Globe } from "lucide-react";

// 核心數據統計
const coreStats = [
  { number: "4", label: "核心能力", icon: Target, color: "blue" },
  { number: "8", label: "學期完整培育", icon: Clock, color: "green" },
  { number: "12+", label: "選修學分自由組合", icon: LayoutGrid, color: "purple" },
  { number: "5", label: "年學碩一貫", icon: Award, color: "orange" }
];

// 四環能力 - 圖示化
const coreAbilities = [
  {
    title: "行銷基石專業",
    icon: Target,
    color: "blue",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    features: [
      { icon: BookOpen, text: "理論框架" },
      { icon: BarChart3, text: "策略思維" },
      { icon: Briefcase, text: "管理語言" }
    ],
    courses: 8,
    percentage: "25%"
  },
  {
    title: "消費者洞察力",
    icon: Brain,
    color: "green",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    features: [
      { icon: Users, text: "心理機制" },
      { icon: PieChart, text: "研究方法" },
      { icon: Zap, text: "行為分析" }
    ],
    courses: 6,
    percentage: "25%"
  },
  {
    title: "企劃與執行力",
    icon: TrendingUp,
    color: "purple",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    features: [
      { icon: LayoutGrid, text: "企劃架構" },
      { icon: Code, text: "數位實戰" },
      { icon: CheckCircle, text: "成效追蹤" }
    ],
    courses: 10,
    percentage: "25%"
  },
  {
    title: "創新創意思維",
    icon: Lightbulb,
    color: "orange",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    features: [
      { icon: Palette, text: "美學素養" },
      { icon: Star, text: "創意發想" },
      { icon: Globe, text: "內容創新" }
    ],
    courses: 7,
    percentage: "25%"
  }
];

// 學年路徑 - 數據化
const yearlyPath = [
  {
    year: "大一",
    phase: "輸入期",
    icon: BookOpen,
    color: "blue",
    courses: 8,
    focus: ["基礎理論", "心理學", "創意啟發"],
    completion: "100%"
  },
  {
    year: "大二", 
    phase: "深化期",
    icon: Brain,
    color: "green",
    courses: 9,
    focus: ["服務品牌", "消費心理", "邏輯思維"],
    completion: "100%"
  },
  {
    year: "大三",
    phase: "策略期",
    icon: TrendingUp,
    color: "purple",
    courses: 10,
    focus: ["跨媒體整合", "數據分析", "實驗驗證"],
    completion: "75%"
  },
  {
    year: "大四",
    phase: "實戰期",
    icon: Award,
    color: "orange",
    courses: 6,
    focus: ["專題整合", "投放實戰", "成效閉環"],
    completion: "25%"
  }
];

// 選修模組數據
const moduleStats = [
  { title: "數位投放", courses: 4, certifications: 3, jobs: 5, color: "blue", icon: Code },
  { title: "社群內容", courses: 3, certifications: 2, jobs: 4, color: "green", icon: Users },
  { title: "電商經營", courses: 5, certifications: 4, jobs: 6, color: "purple", icon: TrendingUp },
  { title: "數據研究", courses: 4, certifications: 3, jobs: 4, color: "orange", icon: BarChart3 },
  { title: "策略管理", courses: 3, certifications: 2, jobs: 5, color: "red", icon: Target }
];

const CurriculumHighlightsGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white w-full">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* 標題區 + 核心數據 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            四環能力導向課程設計
          </h1>
          <p className="text-lg text-slate-600 mb-8">品牌端（甲方）思維 × 系統化培育</p>
          
          {/* 核心數據展示 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {coreStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-600 mb-1`}>{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 四環能力 - 圖示化設計 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            四大核心能力模組
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coreAbilities.map((ability, index) => (
              <div key={ability.title} className={`${ability.bgColor} rounded-xl p-6 border border-slate-100`}>
                
                {/* 標題與數據 */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm`}>
                      <ability.icon className={`w-6 h-6 ${ability.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{ability.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <span>{ability.courses} 門課程</span>
                        <span>•</span>
                        <span>{ability.percentage} 比重</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 特色功能 - 圖示化 */}
                <div className="grid grid-cols-3 gap-3">
                  {ability.features.map((feature, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3 text-center shadow-sm">
                      <feature.icon className={`w-5 h-5 ${ability.textColor} mx-auto mb-2`} />
                      <div className="text-xs font-medium text-slate-700">{feature.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 學年路徑 - 進度條設計 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            四年學習路徑
          </h2>
          <div className="space-y-4">
            {yearlyPath.map((year, index) => (
              <div key={year.year} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-${year.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                      <year.icon className={`w-6 h-6 text-${year.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{year.year}</h3>
                      <p className="text-sm text-slate-600">{year.phase}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-800">{year.courses}</div>
                    <div className="text-sm text-slate-600">門課程</div>
                  </div>
                </div>
                
                {/* 進度條 */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>學習進度</span>
                    <span>{year.completion}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`bg-${year.color}-500 h-2 rounded-full transition-all duration-500`}
                      style={{width: year.completion}}
                    ></div>
                  </div>
                </div>
                
                {/* 學習重點 */}
                <div className="flex flex-wrap gap-2">
                  {year.focus.map((item, idx) => (
                    <span key={idx} className={`px-3 py-1 bg-${year.color}-50 text-${year.color}-700 rounded-full text-sm font-medium`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 選修模組 - 數據儀表板 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            專業選修模組數據
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {moduleStats.map((module, index) => (
              <div key={module.title} className="bg-white rounded-xl p-4 shadow-md border border-slate-100 text-center">
                <div className={`w-12 h-12 bg-${module.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <module.icon className={`w-6 h-6 text-${module.color}-600`} />
                </div>
                <h3 className="font-bold text-slate-800 mb-3">{module.title}</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">課程</span>
                    <span className="font-medium">{module.courses} 門</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">證照</span>
                    <span className="font-medium">{module.certifications} 項</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">職位</span>
                    <span className="font-medium">{module.jobs} 種</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="bg-slate-100 rounded-xl p-6">
              <div className="text-2xl font-bold text-slate-800 mb-2">12+ 學分</div>
              <div className="text-slate-600">最低選修要求，可自由組合</div>
            </div>
          </div>
        </div>

        {/* 特色制度 - 數據卡片 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">4+1 學碩一貫</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">5</div>
                <div className="text-blue-100">年完成</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2</div>
                <div className="text-blue-100">個學位</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">國際鏈結</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-green-100">合作學校</div>
              </div>
              <div>
                <div className="text-3xl font-bold">∞</div>
                <div className="text-green-100">海外個案</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CurriculumHighlightsGrid;
