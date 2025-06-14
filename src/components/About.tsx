
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Trophy, Users, Target, BookOpen, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-40 bg-white relative overflow-hidden">
      {/* 精緻背景 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.008)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-8xl mx-auto">
          {/* 精緻標題區 */}
          <div className="text-center mb-32">
            <Badge className="bg-gradient-to-r from-blue-50 to-orange-50 text-blue-700 border border-blue-200/30 px-10 py-4 rounded-full mb-10 font-medium text-lg">
              <BookOpen className="w-5 h-5 mr-3" />
              系所定位與特色
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
              系所定位
            </h2>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-6xl mx-auto leading-relaxed font-light">
              全台唯一聚焦於品牌端行銷的學系，我們培養學生具備甲方思維，
              深入理解消費者心理學與數位行銷的核心素養
            </p>
          </div>

          {/* 主要內容區 */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            {/* 左側內容 */}
            <div className="space-y-16">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 leading-tight">
                  為什麼選擇文化行銷？
                </h3>
                
                <div className="space-y-10">
                  {[
                    {
                      icon: Target,
                      title: "品牌端甲方思維",
                      desc: "從品牌方角度思考行銷策略，培養學生成為企業內部行銷專家",
                      color: "text-orange-600",
                      bg: "from-orange-50 to-red-50",
                      border: "border-orange-200/30"
                    },
                    {
                      icon: Users,
                      title: "消費者心理學導向", 
                      desc: "深入探討消費者行為與心理，建立科學化的行銷決策基礎",
                      color: "text-blue-600",
                      bg: "from-blue-50 to-indigo-50",
                      border: "border-blue-200/30"
                    },
                    {
                      icon: Sparkles,
                      title: "數位行銷素養",
                      desc: "結合傳統行銷理論與最新數位工具，培養全方位行銷專業",
                      color: "text-green-600",
                      bg: "from-green-50 to-emerald-50",
                      border: "border-green-200/30"
                    },
                    {
                      icon: Trophy,
                      title: "實務與理論並重",
                      desc: "透過產學合作與實習機會，讓學生在學習中累積實戰經驗",
                      color: "text-purple-600",
                      bg: "from-purple-50 to-violet-50",
                      border: "border-purple-200/30"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`group flex items-start space-x-8 p-10 rounded-3xl bg-gradient-to-r ${item.bg} border ${item.border} hover:shadow-xl transition-all duration-500 hover:scale-105`}>
                      <div className={`w-20 h-20 bg-white rounded-3xl flex items-center justify-center ${item.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <item.icon className="w-10 h-10" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-4 text-2xl">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 右側視覺區 */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-[3rem] p-20 h-[700px] flex items-center justify-center shadow-2xl border border-slate-200/50 overflow-hidden">
                {/* 背景圖案 */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                <div className="text-center relative z-10">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-[2rem] mx-auto mb-10 flex items-center justify-center shadow-2xl relative overflow-hidden">
                    <span className="text-white text-5xl font-bold relative z-10">CCU</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-slate-700 font-semibold text-2xl mb-4">系所形象展示</p>
                  <p className="text-slate-500 text-lg">師生互動 × 教學環境</p>
                </div>

                {/* 浮動元素 */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full animate-pulse delay-1000"></div>
              </div>
              
              {/* 浮動統計卡片 */}
              <Card className="absolute -bottom-8 -left-8 bg-white shadow-2xl border-0 hover:scale-110 transition-transform duration-500 rounded-2xl overflow-hidden">
                <CardContent className="p-10">
                  <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">全台唯一</div>
                  <div className="text-slate-600 font-medium text-lg">品牌端行銷學系</div>
                </CardContent>
              </Card>
              
              <Card className="absolute -top-8 -right-8 bg-white shadow-2xl border-0 hover:scale-110 transition-transform duration-500 rounded-2xl overflow-hidden">
                <CardContent className="p-10">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">40年</div>
                  <div className="text-slate-600 font-medium text-lg">教育傳承</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 使命宣言區 */}
          <Card className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white border-0 shadow-2xl relative overflow-hidden rounded-[3rem]">
            {/* 背景效果 */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
            
            <CardContent className="p-20 text-center relative z-10">
              <Badge className="bg-white/10 backdrop-blur-md text-orange-300 border border-white/20 px-10 py-4 rounded-full mb-12 font-medium text-lg">
                <Trophy className="w-5 h-5 mr-3" />
                我們的使命
              </Badge>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">我們的使命</h3>
              <p className="text-2xl md:text-3xl text-blue-100 max-w-7xl mx-auto leading-relaxed mb-20 font-light">
                培養具備品牌思維、消費者洞察力與數位行銷技能的專業人才，
                成為企業內部行銷團隊的核心力量，推動品牌成長與市場創新
              </p>
              <div className="grid md:grid-cols-3 gap-16">
                {[
                  { title: "品牌思維", subtitle: "Brand Mindset", icon: Target, color: "from-orange-400 to-red-400" },
                  { title: "消費者洞察", subtitle: "Consumer Insights", icon: Users, color: "from-blue-400 to-indigo-400" },
                  { title: "數位創新", subtitle: "Digital Innovation", icon: Sparkles, color: "from-green-400 to-emerald-400" }
                ].map((item, index) => (
                  <div key={index} className="group text-center">
                    <div className={`w-24 h-24 bg-gradient-to-br ${item.color}/20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10`}>
                      <item.icon className="w-12 h-12 text-orange-300" />
                    </div>
                    <div className="text-orange-400 font-bold text-3xl mb-3">{item.title}</div>
                    <div className="text-blue-200 font-light tracking-wide text-lg">{item.subtitle}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
