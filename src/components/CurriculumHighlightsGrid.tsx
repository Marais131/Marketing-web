import { BookOpen, Star, Target, Users, Lightbulb, TrendingUp, Award, Briefcase, Zap, Brain, Palette, Code, Globe, CheckCircle, ArrowRight, Play, Heart, Sparkles, BarChart3, DollarSign, Building2, Rocket, Eye, MousePointer, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// 為什麼選擇行銷 - 數據支撐
const marketingStats = [
  {
    number: "85%",
    label: "企業增加行銷預算",
    description: "2024年企業數位轉型趨勢",
    icon: TrendingUp,
    color: "blue"
  },
  {
    number: "67%",
    label: "行銷職缺成長率",
    description: "數位行銷人才需求激增",
    icon: Rocket,
    color: "green"
  },
  {
    number: "50K+",
    label: "起薪中位數",
    description: "行銷相關職位薪資水準",
    icon: DollarSign,
    color: "purple"
  },
  {
    number: "500+",
    label: "合作企業",
    description: "提供實習與就業機會",
    icon: Building2,
    color: "orange"
  }
];

// 核心特色 - 簡化版
const highlights = [
  {
    title: "品牌思維",
    subtitle: "站在甲方角度思考",
    description: "不只是執行廣告，更要懂品牌策略",
    detailText: "深入學習品牌策略規劃、消費者洞察、跨部門溝通等核心技能，培養從品牌角度思考問題的能力。",
    icon: Target,
    color: "blue",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
    linkText: "了解品牌課程"
  },
  {
    title: "科學方法",
    subtitle: "心理學 × 數據分析", 
    description: "用研究驗證每個行銷決策",
    detailText: "結合心理學理論與數據分析工具，學會用科學方法驗證行銷假設，做出精準決策。",
    icon: Brain,
    color: "purple",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    linkText: "探索研究方法"
  },
  {
    title: "實戰經驗",
    subtitle: "真實專案操作",
    description: "在學期間就累積專業作品集",
    detailText: "與真實品牌合作專案，從策劃到執行全程參與，累積豐富的實戰經驗和專業作品集。",
    icon: Zap,
    color: "green",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=center",
    linkText: "查看專案案例"
  }
];

// 學習體驗
const learningExperience = [
  {
    title: "創意工作坊",
    description: "腦力激盪，發想創意點子",
    detailDescription: "在專業的創意空間中，與同學一起進行頭腦風暴，學習設計思維方法論，培養創新思考能力。每次工作坊都會有實際的創意產出，讓理論與實踐完美結合。",
    image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=500&h=300&fit=crop&crop=center",
    tags: ["創意思考", "團隊合作", "設計思維"],
    stats: { participants: "25人", duration: "3小時", projects: "5個專案" }
  },
  {
    title: "數據分析實驗室", 
    description: "解讀消費者行為數據",
    detailDescription: "使用專業的數據分析工具，學習如何收集、清理和分析消費者數據。從數據中發現洞察，為行銷決策提供科學依據。",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
    tags: ["數據分析", "消費心理", "市場研究"],
    stats: { tools: "10種工具", datasets: "1000+筆", accuracy: "95%準確率" }
  },
  {
    title: "品牌專案實作",
    description: "與真實品牌合作專案",
    detailDescription: "直接與知名品牌合作，參與真實的行銷專案。從市場調研到策略制定，從創意發想到執行落地，體驗完整的品牌行銷流程。",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&h=300&fit=crop&crop=center",
    tags: ["專案管理", "客戶溝通", "成果展示"],
    stats: { brands: "20+品牌", success: "90%成功率", budget: "百萬預算" }
  }
];

// 四年學習路徑
const learningPath = [
  {
    year: "大一",
    title: "基礎建立",
    description: "行銷理論與心理學基礎",
    icon: BookOpen,
    color: "blue",
    subjects: ["行銷學原理", "消費者心理學", "統計學", "創意思考"],
    highlight: "建立行銷思維框架",
    detailInfo: {
      credits: "32學分",
      core: "8門核心課程",
      skills: ["邏輯思維", "數據素養", "創意基礎"]
    }
  },
  {
    year: "大二",
    title: "深度學習",
    description: "專業知識與研究方法",
    icon: Brain,
    color: "green",
    subjects: ["市場研究", "品牌管理", "廣告學", "數位行銷"],
    highlight: "掌握科學研究方法",
    detailInfo: {
      credits: "36學分",
      core: "9門專業課程",
      skills: ["研究方法", "品牌思維", "數位技能"]
    }
  },
  {
    year: "大三",
    title: "實戰應用",
    description: "專案實作與工具應用",
    icon: Zap,
    color: "purple",
    subjects: ["社群行銷", "數據分析", "專案管理", "實習課程"],
    highlight: "累積實戰經驗",
    detailInfo: {
      credits: "30學分",
      core: "實戰專案",
      skills: ["專案管理", "實戰操作", "團隊協作"]
    }
  },
  {
    year: "大四",
    title: "專業整合",
    description: "畢業專題與職涯準備",
    icon: Award,
    color: "orange",
    subjects: ["畢業專題", "職涯規劃", "創業實務", "國際行銷"],
    highlight: "完成專業作品集",
    detailInfo: {
      credits: "30學分",
      core: "畢業專題",
      skills: ["整合能力", "作品集", "職涯規劃"]
    }
  }
];

// 核心技能 - 視覺化
const coreSkills = [
  {
    skill: "策略規劃",
    icon: Target,
    color: "blue",
    description: "品牌定位與市場策略",
    level: 85,
    courses: ["品牌管理", "市場策略", "競爭分析"]
  },
  {
    skill: "數據分析",
    icon: TrendingUp, 
    color: "green",
    description: "消費者行為洞察",
    level: 90,
    courses: ["統計分析", "消費者研究", "數據視覺化"]
  },
  {
    skill: "創意執行",
    icon: Palette,
    color: "purple",
    description: "視覺設計與內容創作",
    level: 80,
    courses: ["創意思考", "視覺設計", "內容行銷"]
  },
  {
    skill: "數位工具",
    icon: Code,
    color: "orange",
    description: "廣告投放與社群經營",
    level: 95,
    courses: ["數位廣告", "社群媒體", "行銷自動化"]
  }
];

const CurriculumHighlightsGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleStats, setVisibleStats] = useState<boolean[]>([false, false, false, false]);
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const [expandedPath, setExpandedPath] = useState<number | null>(null);

  // 數字動畫效果
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleStats([true, true, true, true]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 w-full overflow-hidden">
      {/* 添加 CSS 動畫 */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-countUp {
          animation: countUp 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
      `}</style>

      <div className="container max-w-6xl mx-auto px-6">
        
        {/* 主標題區 - 添加動畫 */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-medium mb-6 animate-float">
            課程特色
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            在文化行銷
            <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">學什麼？</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            不只是學理論，更要學會實戰<br/>
            用品牌思維解決真實商業問題
          </p>
        </div>

        {/* 為什麼選擇行銷 - 數據支撐 */}
        <div className="mb-24">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              為什麼現在要學行銷？
            </h2>
            <p className="text-lg text-slate-600">
              數據告訴你行銷人才的市場需求
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingStats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`bg-white rounded-xl p-6 text-center shadow-md hover-lift cursor-pointer group ${
                  visibleStats[index] ? 'animate-countUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${stat.color}-200 transition-colors duration-300`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600 group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-600 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{stat.label}</h3>
                <p className={`text-sm text-slate-600 transition-all duration-300 ${
                  hoveredCard === index ? 'opacity-100 transform translate-y-0' : 'opacity-70'
                }`}>
                  {stat.description}
                </p>
                {hoveredCard === index && (
                  <div className="mt-3 flex items-center justify-center text-blue-600 text-sm font-medium animate-fadeInUp">
                    <Eye className="w-4 h-4 mr-1" />
                    點擊了解更多
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 三大特色 - 圖文並茂 */}
        <div className="mb-24">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              文化行銷的三大特色
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title} 
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift cursor-pointer ${
                  index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* 圖片區 */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-${highlight.color}-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* 懸停時顯示的詳細信息 */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm mb-4">{highlight.detailText}</p>
                      <button className={`bg-${highlight.color}-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-${highlight.color}-600 transition-colors flex items-center mx-auto`}>
                        {highlight.linkText}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* 內容區 */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className={`text-${highlight.color}-600 font-medium mb-3`}>{highlight.subtitle}</p>
                  <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                  
                  {/* 懸停提示 */}
                  <div className="mt-4 flex items-center text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MousePointer className="w-4 h-4 mr-1" />
                    懸停查看詳細信息
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 學習體驗 - 互動式 */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              實際學習體驗
            </h2>
            <p className="text-lg text-slate-600">
              在真實情境中學習，累積實戰經驗
            </p>
          </div>
          
          <div className="space-y-12">
            {learningExperience.map((experience, index) => (
              <div 
                key={experience.title} 
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* 圖片 */}
                <div className="lg:w-1/2">
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                    onClick={() => setActiveExperience(activeExperience === index ? null : index)}
                  >
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
                    
                    {/* 點擊提示 */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      點擊查看詳情
                    </div>
                    
                    {/* Play 按鈕 */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 內容 */}
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{experience.title}</h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {activeExperience === index ? experience.detailDescription : experience.description}
                  </p>
                  
                  {/* 標籤 */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {experience.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* 統計數據 - 點擊後顯示 */}
                  {activeExperience === index && (
                    <div className="bg-slate-50 rounded-lg p-4 animate-fadeInUp">
                      <h4 className="font-semibold text-slate-900 mb-3">課程數據</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {Object.entries(experience.stats).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-3">
                            <div className="text-lg font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-slate-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* 展開/收起按鈕 */}
                  <button 
                    onClick={() => setActiveExperience(activeExperience === index ? null : index)}
                    className="mt-4 text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                  >
                    {activeExperience === index ? '收起詳情' : '查看詳情'}
                    <ChevronRight className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                      activeExperience === index ? 'rotate-90' : ''
                    }`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 四年學習路徑 - 可展開 */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              四年學習路徑
            </h2>
            <p className="text-lg text-slate-600">
              循序漸進，從理論到實戰的完整培育
            </p>
          </div>
          
          <div className="space-y-8">
            {learningPath.map((path, index) => (
              <div 
                key={path.year} 
                className={`bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover-lift cursor-pointer animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setExpandedPath(expandedPath === index ? null : index)}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* 年級標識 */}
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-${path.color}-100 rounded-full flex items-center justify-center group-hover:bg-${path.color}-200 transition-colors duration-300`}>
                      <path.icon className={`w-8 h-8 text-${path.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{path.year}</h3>
                      <p className={`text-${path.color}-600 font-medium`}>{path.title}</p>
                    </div>
                  </div>
                  
                  {/* 內容區 */}
                  <div className="flex-1">
                    <p className="text-slate-600 mb-4">{path.description}</p>
                    
                    {/* 重點亮點 */}
                    <div className={`bg-${path.color}-50 rounded-lg p-4 mb-4`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className={`w-4 h-4 text-${path.color}-600`} />
                        <span className={`text-${path.color}-800 font-medium text-sm`}>學習重點</span>
                      </div>
                      <p className={`text-${path.color}-700 font-medium`}>{path.highlight}</p>
                    </div>
                    
                    {/* 課程科目 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {path.subjects.map((subject, idx) => (
                        <div 
                          key={idx} 
                          className="bg-slate-50 rounded-lg p-3 text-center hover:bg-slate-100 transition-colors cursor-pointer"
                        >
                          <span className="text-slate-700 text-sm font-medium">{subject}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* 詳細信息 - 點擊展開 */}
                    {expandedPath === index && (
                      <div className="bg-slate-50 rounded-lg p-4 animate-fadeInUp">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className={`text-2xl font-bold text-${path.color}-600`}>
                              {path.detailInfo.credits}
                            </div>
                            <div className="text-sm text-slate-600">總學分</div>
                          </div>
                          <div className="text-center">
                            <div className={`text-2xl font-bold text-${path.color}-600`}>
                              {path.detailInfo.core}
                            </div>
                            <div className="text-sm text-slate-600">核心課程</div>
                          </div>
                          <div className="text-center">
                            <div className="flex flex-wrap gap-1 justify-center">
                              {path.detailInfo.skills.map((skill, idx) => (
                                <span key={idx} className={`text-xs bg-${path.color}-100 text-${path.color}-700 px-2 py-1 rounded`}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="text-sm text-slate-600 mt-1">核心技能</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* 展開指示器 */}
                  <div className="flex items-center text-slate-400">
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                      expandedPath === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 核心技能 - 進度條動畫 */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              四大核心技能
            </h2>
            <p className="text-lg text-slate-600">
              畢業後你會具備的專業能力
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSkills.map((skill, index) => (
              <div 
                key={skill.skill} 
                className={`bg-white rounded-xl p-6 text-center shadow-md hover-lift animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-${skill.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-float`}
                     style={{ animationDelay: `${index * 0.5}s` }}>
                  <skill.icon className={`w-8 h-8 text-${skill.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.skill}</h3>
                <p className="text-slate-600 text-sm mb-4">{skill.description}</p>
                
                {/* 技能等級進度條 */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-slate-600 mb-1">
                    <span>掌握程度</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`bg-${skill.color}-500 h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: visibleStats[0] ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
                
                {/* 相關課程 */}
                <div className="text-left">
                  <div className="text-sm font-medium text-slate-700 mb-2">相關課程：</div>
                  <div className="space-y-1">
                    {skill.courses.map((course, idx) => (
                      <div key={idx} className="text-xs text-slate-600 bg-slate-50 rounded px-2 py-1">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 最終行動呼籲 - 更有吸引力 */}
        <div className="text-center animate-fadeInUp">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white relative overflow-hidden">
            {/* 背景裝飾 */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_60%)]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-400 mr-3 animate-float" />
                <Sparkles className="w-8 h-8 text-yellow-400 animate-float" style={{ animationDelay: '0.5s' }} />
                <Star className="w-8 h-8 text-blue-300 ml-3 animate-float" style={{ animationDelay: '1s' }} />
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                準備好開始你的行銷之旅了嗎？
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                加入文化行銷，用創意和數據驅動的思維改變世界<br/>
                成為下一個行銷領域的創新者
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  探索完整課程
                </button>
                <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-400 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                  預約校園參觀
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              
              <div className="mt-8 text-blue-200 text-sm">
                💡 點擊任何區塊都可以獲得更多詳細資訊
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CurriculumHighlightsGrid;
