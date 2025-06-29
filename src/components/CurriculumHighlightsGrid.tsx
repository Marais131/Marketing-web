import { BookOpen, Star, Target, Users, Lightbulb, TrendingUp, Award, Briefcase, Zap, Brain, Palette, Code, Globe, CheckCircle, ArrowRight, Play, Heart, Sparkles } from "lucide-react";

// 核心特色 - 簡化版
const highlights = [
  {
    title: "品牌思維",
    subtitle: "站在甲方角度思考",
    description: "不只是執行廣告，更要懂品牌策略",
    icon: Target,
    color: "blue",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "科學方法",
    subtitle: "心理學 × 數據分析", 
    description: "用研究驗證每個行銷決策",
    icon: Brain,
    color: "purple",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "實戰經驗",
    subtitle: "真實專案操作",
    description: "在學期間就累積專業作品集",
    icon: Zap,
    color: "green",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=center"
  }
];

// 學習體驗
const learningExperience = [
  {
    title: "創意工作坊",
    description: "腦力激盪，發想創意點子",
    image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=500&h=300&fit=crop&crop=center",
    tags: ["創意思考", "團隊合作", "設計思維"]
  },
  {
    title: "數據分析實驗室", 
    description: "解讀消費者行為數據",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
    tags: ["數據分析", "消費心理", "市場研究"]
  },
  {
    title: "品牌專案實作",
    description: "與真實品牌合作專案",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&h=300&fit=crop&crop=center",
    tags: ["專案管理", "客戶溝通", "成果展示"]
  }
];

// 核心技能 - 視覺化
const coreSkills = [
  {
    skill: "策略規劃",
    icon: Target,
    color: "blue",
    description: "品牌定位與市場策略"
  },
  {
    skill: "數據分析",
    icon: TrendingUp, 
    color: "green",
    description: "消費者行為洞察"
  },
  {
    skill: "創意執行",
    icon: Palette,
    color: "purple",
    description: "視覺設計與內容創作"
  },
  {
    skill: "數位工具",
    icon: Code,
    color: "orange",
    description: "廣告投放與社群經營"
  }
];

// 學習成果展示
const achievements = [
  {
    title: "專業證照",
    count: "10+",
    description: "Google、Facebook 等國際認證",
    icon: Award,
    color: "gold"
  },
  {
    title: "實戰專案",
    count: "20+", 
    description: "與業界合作真實案例",
    icon: Briefcase,
    color: "blue"
  },
  {
    title: "作品集",
    count: "完整",
    description: "畢業即具備求職作品",
    icon: Star,
    color: "purple"
  }
];

const CurriculumHighlightsGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 w-full">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* 主標題區 */}
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-medium mb-6">
            課程特色
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            在文化行銷
            <span className="text-blue-600">學什麼？</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            不只是學理論，更要學會實戰<br/>
            用品牌思維解決真實商業問題
          </p>
        </div>

        {/* 三大特色 - 圖文並茂 */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={highlight.title} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* 圖片區 */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-${highlight.color}-500 rounded-full flex items-center justify-center`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* 內容區 */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{highlight.title}</h3>
                  <p className={`text-${highlight.color}-600 font-medium mb-3`}>{highlight.subtitle}</p>
                  <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 學習體驗 */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              實際學習體驗
            </h2>
            <p className="text-lg text-slate-600">
              在真實情境中學習，累積實戰經驗
            </p>
          </div>
          
          <div className="space-y-12">
            {learningExperience.map((experience, index) => (
              <div key={experience.title} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* 圖片 */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  </div>
                </div>
                
                {/* 內容 */}
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{experience.title}</h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">{experience.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {experience.tags.map((tag, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 核心技能 - 簡潔版 */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              四大核心技能
            </h2>
            <p className="text-lg text-slate-600">
              畢業後你會具備的專業能力
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSkills.map((skill, index) => (
              <div key={skill.skill} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-${skill.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <skill.icon className={`w-8 h-8 text-${skill.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.skill}</h3>
                <p className="text-slate-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 學習成果 */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-8">學習成果一覽</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{achievement.count}</div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-blue-100 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 簡潔的行動呼籲 */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-red-500 mr-2" />
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              準備好開始學習了嗎？
            </h2>
            <p className="text-slate-600 mb-6">
              加入我們，用創意改變世界
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center">
              了解更多
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CurriculumHighlightsGrid;
