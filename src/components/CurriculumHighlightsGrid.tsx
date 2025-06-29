import { BookOpen, Star, Target, Users, Lightbulb, TrendingUp, Award, Briefcase, Zap, Brain, Palette, Code, Globe, CheckCircle, ArrowRight } from "lucide-react";

// 核心特色賣點
const highlights = [
  {
    title: "全台唯一品牌端思維",
    subtitle: "培養甲方行銷人才",
    description: "不只是學廣告投放，更要學會站在品牌角度思考策略",
    icon: Target,
    color: "blue",
    benefits: ["品牌策略規劃", "消費者洞察", "跨部門溝通"]
  },
  {
    title: "心理學 × 行銷學",
    subtitle: "科學化理解消費者",
    description: "從心理機制出發，用研究方法驗證行銷假設",
    icon: Brain,
    color: "green", 
    benefits: ["消費者研究", "行為預測", "數據分析"]
  },
  {
    title: "實戰導向課程",
    subtitle: "真實專案經驗",
    description: "與業界合作，操作真實品牌專案，累積作品集",
    icon: Zap,
    color: "purple",
    benefits: ["投放實戰", "社群經營", "成效優化"]
  }
];

// 學習歷程 - 簡化版
const learningPath = [
  {
    stage: "大一大二",
    title: "打基礎",
    description: "行銷理論 + 心理學 + 創意思維",
    skills: ["行銷4P", "消費心理", "創意發想", "邏輯思考"],
    icon: BookOpen,
    color: "blue"
  },
  {
    stage: "大三大四", 
    title: "練實戰",
    description: "數位工具 + 真實專案 + 跨媒體整合",
    skills: ["廣告投放", "社群經營", "數據分析", "專案管理"],
    icon: TrendingUp,
    color: "green"
  }
];

// 畢業能力
const graduateSkills = [
  {
    category: "策略思維",
    icon: Target,
    skills: ["品牌定位", "市場分析", "競爭策略", "消費者洞察"]
  },
  {
    category: "執行能力", 
    icon: Code,
    skills: ["廣告投放", "社群經營", "內容創作", "數據分析"]
  },
  {
    category: "創意美感",
    icon: Palette,
    skills: ["視覺設計", "文案撰寫", "影像敘事", "品牌美學"]
  },
  {
    category: "跨域整合",
    icon: Globe,
    skills: ["專案管理", "跨部門溝通", "國際視野", "創新思維"]
  }
];

// 就業出路
const careerPaths = [
  {
    title: "品牌經理",
    company: "消費品牌企業",
    salary: "50-80萬",
    description: "負責品牌策略規劃與執行",
    icon: Award
  },
  {
    title: "數位行銷經理", 
    company: "科技/電商公司",
    salary: "45-70萬",
    description: "管理線上行銷活動與投放",
    icon: TrendingUp
  },
  {
    title: "產品行銷經理",
    company: "新創/科技公司", 
    salary: "60-90萬",
    description: "新產品上市策略與推廣",
    icon: Lightbulb
  }
];

const CurriculumHighlightsGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white w-full">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* 標題區 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            為什麼選擇文化行銷？
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            全台唯一培養「品牌端思維」的行銷學程
          </p>
        </div>

        {/* 三大特色亮點 */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={highlight.title} className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 bg-${highlight.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                  <highlight.icon className={`w-8 h-8 text-${highlight.color}-600`} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{highlight.title}</h3>
                <p className={`text-${highlight.color}-600 font-medium mb-4`}>{highlight.subtitle}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{highlight.description}</p>
                
                <div className="space-y-2">
                  {highlight.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className={`w-4 h-4 text-${highlight.color}-500 mr-3 flex-shrink-0`} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 學習歷程 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            四年學什麼？
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {learningPath.map((path, index) => (
              <div key={path.stage} className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-${path.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                    <path.icon className={`w-6 h-6 text-${path.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{path.stage}</h3>
                    <p className={`text-${path.color}-600 font-medium`}>{path.title}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6">{path.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {path.skills.map((skill, idx) => (
                    <div key={idx} className={`bg-${path.color}-50 rounded-lg p-3 text-center`}>
                      <span className={`text-${path.color}-700 font-medium text-sm`}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 畢業後具備的能力 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            畢業後你會具備什麼能力？
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {graduateSkills.map((category, index) => (
              <div key={category.category} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-slate-600" />
                </div>
                
                <h3 className="font-bold text-slate-900 mb-4">{category.category}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="text-sm text-slate-600 bg-slate-50 rounded px-3 py-2">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 就業出路與薪資 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            畢業後能做什麼工作？
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {careerPaths.map((career, index) => (
              <div key={career.title} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <career.icon className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{career.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{career.company}</p>
                <p className="text-2xl font-bold text-green-600 mb-4">{career.salary}</p>
                <p className="text-slate-600">{career.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">還有更多職業選擇...</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["市場研究員", "社群經理", "廣告企劃", "電商營運", "創業家"].map((job, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                  {job}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 行動呼籲 */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">準備好成為下一個行銷專家了嗎？</h2>
          <p className="text-xl text-blue-100 mb-8">
            加入文化行銷，用品牌思維改變世界
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              了解入學資訊
            </button>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-400 transition-colors">
              預約校園參觀
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CurriculumHighlightsGrid;
