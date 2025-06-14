
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Trophy, Users, Target, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Clean background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.015)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Professional header */}
          <div className="text-center mb-24">
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-8 py-3 rounded-full mb-8 font-medium">
              <BookOpen className="w-4 h-4 mr-2" />
              系所定位
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              系所定位
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
              全台唯一聚焦於品牌端行銷的學系，我們培養學生具備甲方思維，
              深入理解消費者心理學與數位行銷的核心素養
            </p>
          </div>

          {/* Main content layout */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            {/* Left content */}
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
                  為什麼選擇文化行銷？
                </h3>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: Target,
                      title: "品牌端甲方思維",
                      desc: "從品牌方角度思考行銷策略，培養學生成為企業內部行銷專家",
                      color: "text-orange-600",
                      bg: "bg-orange-50"
                    },
                    {
                      icon: Users,
                      title: "消費者心理學導向", 
                      desc: "深入探討消費者行為與心理，建立科學化的行銷決策基礎",
                      color: "text-blue-600",
                      bg: "bg-blue-50"
                    },
                    {
                      icon: Sparkles,
                      title: "數位行銷素養",
                      desc: "結合傳統行銷理論與最新數位工具，培養全方位行銷專業",
                      color: "text-green-600",
                      bg: "bg-green-50"
                    },
                    {
                      icon: Trophy,
                      title: "實務與理論並重",
                      desc: "透過產學合作與實習機會，讓學生在學習中累積實戰經驗",
                      color: "text-purple-600",
                      bg: "bg-purple-50"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start space-x-6 p-8 rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-200">
                      <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-3 text-xl">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right content - image area */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-16 h-[600px] flex items-center justify-center shadow-xl border border-slate-200/50 overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                
                <div className="text-center relative z-10">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-xl relative overflow-hidden">
                    <span className="text-white text-4xl font-bold relative z-10">CCU</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                  <p className="text-slate-700 font-semibold text-xl mb-3">系所形象展示</p>
                  <p className="text-slate-500 text-lg">師生互動 × 教學環境</p>
                </div>
              </div>
              
              {/* Floating stats cards */}
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-orange-600 mb-3">全台唯一</div>
                  <div className="text-slate-600 font-medium">品牌端行銷學系</div>
                </CardContent>
              </Card>
              
              <Card className="absolute -top-6 -right-6 bg-white shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-3">40年</div>
                  <div className="text-slate-600 font-medium">教育傳承</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission section */}
          <Card className="bg-gradient-to-r from-blue-900 to-slate-900 text-white border-0 shadow-2xl relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
            
            <CardContent className="p-16 text-center relative z-10">
              <Badge className="bg-white/10 backdrop-blur-md text-orange-300 border border-white/20 px-8 py-3 rounded-full mb-8 font-medium">
                <Trophy className="w-4 h-4 mr-2" />
                我們的使命
              </Badge>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 tracking-tight">我們的使命</h3>
              <p className="text-xl md:text-2xl text-blue-100 max-w-6xl mx-auto leading-relaxed mb-16 font-light">
                培養具備品牌思維、消費者洞察力與數位行銷技能的專業人才，
                成為企業內部行銷團隊的核心力量，推動品牌成長與市場創新
              </p>
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { title: "品牌思維", subtitle: "Brand Mindset", icon: Target },
                  { title: "消費者洞察", subtitle: "Consumer Insights", icon: Users },
                  { title: "數位創新", subtitle: "Digital Innovation", icon: Sparkles }
                ].map((item, index) => (
                  <div key={index} className="group text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                      <item.icon className="w-10 h-10 text-orange-300" />
                    </div>
                    <div className="text-orange-400 font-bold text-2xl mb-2">{item.title}</div>
                    <div className="text-blue-200 font-light tracking-wide">{item.subtitle}</div>
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
