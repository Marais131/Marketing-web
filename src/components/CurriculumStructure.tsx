import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Lightbulb, TrendingUp, Users, BookOpen, Zap } from "lucide-react";
import { useState } from "react";

const CurriculumStructure = () => {
  const [activeCore, setActiveCore] = useState<number | null>(null);

  const coreAbilities = [
    {
      id: 1,
      title: "行銷基石專業",
      icon: BookOpen,
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      description: "深厚的行銷理論基礎與實務操作能力",
      courses: ["行銷學", "品牌管理", "定價策略", "通路與零售管理", "促銷管理", "廣告概論"],
      position: "top-20 left-20"
    },
    {
      id: 2,
      title: "消費者洞察力",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      description: "透過心理學深入理解消費者行為與需求",
      courses: ["普通心理學", "消費者心理學", "認知心理學", "市場調查", "實驗設計"],
      position: "top-20 right-20"
    },
    {
      id: 3,
      title: "企劃與執行力",
      icon: Target,
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      description: "從策略規劃到執行落地的完整能力",
      courses: ["新產品開發", "事件行銷", "故事行銷", "文案設計", "網路直播企劃與實作"],
      position: "bottom-20 left-20"
    },
    {
      id: 4,
      title: "創新與創意思維",
      icon: Lightbulb,
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      description: "突破框架的創新思考與美學素養",
      courses: ["創新創意思考能力", "行銷美學素養", "行銷美學", "影像敘事", "邏輯學"],
      position: "bottom-20 right-20"
    }
  ];

  const specialFeatures = [
    {
      title: "心理學打底",
      subtitle: "洞察消費者與商機",
      icon: Brain,
      description: "從普通心理學到認知心理學的三部曲學習路徑",
      highlight: "孫慶文教授（芝加哥大學心理學博士）親自教授",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "邏輯學在行銷",
      subtitle: "改造思想方式",
      icon: Zap,
      description: "「邏輯好，做什麼都好」的理念，首創在商學院教導行銷人邏輯學",
      highlight: "傅皓政教授/所長權威教學",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "電商實戰",
      subtitle: "業師純實戰邊做邊學",
      icon: TrendingUp,
      description: "把貴森森秘技課程直接搬到校園內，全部第一線業界教師",
      highlight: "網路廣告投放、微商實戰、社群行銷實戰",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* T型人才養成總論導言 */}
        <div className="max-w-5xl mx-auto mb-12 text-xl text-slate-800 font-medium text-center">
          <div className="font-bold text-orange-600 text-2xl mb-2">「T 型人才」養成系統 × 全面課程設計</div>
          <p>
            本系以品牌端T型人才為教育藍圖，設計垂直（專精行銷、心理學、數據、企劃與創新）與水平（跨域整合、專案協作、美學素養、電商實戰）兼備的課程結構。
            <br className="hidden md:block" />
            打造從基礎到高階，一步步實踐專業＋跨域的完整成長路徑，讓每位同學畢業即成為業界渴求的全方位品牌人！
          </p>
        </div>
        {/* 標題區 */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200/30 px-8 py-3 rounded-full mb-8 font-medium text-lg">
            <Target className="w-5 h-5 mr-3" />
            課程架構與核心能力
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            四大核心能力
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            好的「品牌行銷人」必須具備四項行銷核心能力，本系所課程設計即是以這四個主軸來發展
          </p>
        </div>

        {/* 互動式核心能力圓形架構 */}
        <div className="relative max-w-6xl mx-auto mb-32">
          <div className="relative aspect-square max-w-4xl mx-auto">
            {/* 中心圓 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-slate-900 to-blue-900 rounded-full flex items-center justify-center shadow-2xl z-20">
              <div className="text-center">
                <Users className="w-12 h-12 text-white mx-auto mb-2" />
                <div className="text-white font-bold text-lg">品牌行銷人</div>
                <div className="text-blue-200 text-sm">四大核心能力</div>
              </div>
            </div>

            {/* 四個核心能力區塊 */}
            {coreAbilities.map((ability, index) => (
              <div
                key={ability.id}
                className={`absolute ${ability.position} transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group`}
                onClick={() => setActiveCore(activeCore === ability.id ? null : ability.id)}
              >
                <Card className={`w-80 h-80 border-0 bg-gradient-to-br ${ability.bgColor} hover:shadow-2xl transition-all duration-500 hover:scale-110 ${activeCore === ability.id ? 'scale-110 shadow-2xl' : ''}`}>
                  <CardContent className="p-8 text-center h-full flex flex-col justify-center relative overflow-hidden">
                    <div className={`w-20 h-20 bg-gradient-to-br ${ability.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <ability.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{ability.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{ability.description}</p>
                    
                    {activeCore === ability.id && (
                      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 flex flex-col justify-center animate-fade-in">
                        <h4 className="font-bold text-lg mb-4 text-slate-900">核心課程</h4>
                        <div className="space-y-2">
                          {ability.courses.map((course, i) => (
                            <div key={i} className="flex items-center text-sm text-slate-700">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                              {course}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* 連接線 */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 10}}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgb(147 51 234)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <line x1="50%" y1="25%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" />
              <line x1="75%" y1="50%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" />
              <line x1="50%" y1="75%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" />
              <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* 特色課程展示 */}
        <div className="grid lg:grid-cols-3 gap-8">
          {specialFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <CardHeader className="relative z-10 p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900 mb-2">{feature.title}</CardTitle>
                <div className="text-lg font-medium text-slate-600 mb-4">{feature.subtitle}</div>
                <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>
                <Badge className={`bg-gradient-to-r ${feature.color} text-white px-4 py-2`}>
                  {feature.highlight}
                </Badge>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumStructure;
