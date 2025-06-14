
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Trophy, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium header */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <Badge className="bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 border border-orange-200 px-6 py-2 rounded-full">
                <Sparkles className="w-4 h-4 mr-2" />
                系所定位
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 tracking-tight">
              系所<span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">定位</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              全台唯一聚焦於品牌端行銷的學系，我們培養學生具備甲方思維，
              深入理解消費者心理學與數位行銷的核心素養
            </p>
          </div>

          {/* Premium content layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Enhanced left content */}
            <div className="space-y-10">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-8">
                  為什麼選擇文化行銷？
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Target,
                      title: "品牌端甲方思維",
                      desc: "從品牌方角度思考行銷策略，培養學生成為企業內部行銷專家",
                      gradient: "from-orange-500 to-red-500"
                    },
                    {
                      icon: Users,
                      title: "消費者心理學導向", 
                      desc: "深入探討消費者行為與心理，建立科學化的行銷決策基礎",
                      gradient: "from-blue-500 to-indigo-500"
                    },
                    {
                      icon: Sparkles,
                      title: "數位行銷素養",
                      desc: "結合傳統行銷理論與最新數位工具，培養全方位行銷專業",
                      gradient: "from-green-500 to-emerald-500"
                    },
                    {
                      icon: Trophy,
                      title: "實務與理論並重",
                      desc: "透過產學合作與實習機會，讓學生在學習中累積實戰經驗",
                      gradient: "from-purple-500 to-pink-500"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 mb-3 text-lg group-hover:text-orange-600 transition-colors">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium right content with enhanced image area */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 h-[500px] flex items-center justify-center shadow-2xl overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl relative overflow-hidden">
                    <span className="text-white text-3xl font-bold relative z-10">CCU</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                  <p className="text-slate-700 font-semibold text-lg mb-2">系所形象照片</p>
                  <p className="text-slate-500">師生互動 × 教學環境</p>
                </div>
              </div>
              
              {/* Premium floating cards */}
              <Card className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl shadow-2xl border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">全台唯一</div>
                  <div className="text-sm text-slate-600 font-medium">品牌端行銷學系</div>
                </CardContent>
              </Card>
              
              <Card className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-xl shadow-2xl border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">40年</div>
                  <div className="text-sm text-slate-600 font-medium">教育傳承</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Premium mission section */}
          <Card className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white border-0 shadow-2xl relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
            
            <CardContent className="p-12 text-center relative z-10">
              <div className="flex justify-center mb-6">
                <Badge className="bg-white/10 backdrop-blur-md text-orange-300 border border-white/20 px-6 py-2 rounded-full">
                  <Trophy className="w-4 h-4 mr-2" />
                  我們的使命
                </Badge>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">我們的使命</h3>
              <p className="text-xl text-blue-100 max-w-5xl mx-auto leading-relaxed mb-12 font-light">
                培養具備品牌思維、消費者洞察力與數位行銷技能的專業人才，
                成為企業內部行銷團隊的核心力量，推動品牌成長與市場創新
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "品牌思維", subtitle: "Brand Mindset", icon: Target },
                  { title: "消費者洞察", subtitle: "Consumer Insights", icon: Users },
                  { title: "數位創新", subtitle: "Digital Innovation", icon: Sparkles }
                ].map((item, index) => (
                  <div key={index} className="group text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                      <item.icon className="w-8 h-8 text-orange-300" />
                    </div>
                    <div className="text-orange-400 font-bold text-xl mb-1">{item.title}</div>
                    <div className="text-blue-200 text-sm font-light tracking-wide">{item.subtitle}</div>
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
