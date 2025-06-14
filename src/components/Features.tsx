
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, BookOpen, Users, Video, Brain, Smartphone, GraduationCap, Building, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "行銷美學",
      description: "結合美學設計與行銷策略，培養學生的視覺行銷素養",
      highlights: ["視覺設計", "品牌美學", "創意思維"],
      color: "text-pink-600",
      bg: "from-pink-50 to-rose-50",
      border: "border-pink-200/30",
      icon: Palette
    },
    {
      title: "學術研討會 (CMR)",
      description: "定期舉辦學術研討會，與業界專家交流最新行銷趨勢",
      highlights: ["學術交流", "趨勢分析", "研究發表"],
      color: "text-blue-600",
      bg: "from-blue-50 to-indigo-50",
      border: "border-blue-200/30",
      icon: BookOpen
    },
    {
      title: "職人講座",
      description: "邀請業界專家分享實務經驗，拓展學生的視野與人脈",
      highlights: ["業界交流", "實務分享", "職涯規劃"],
      color: "text-green-600",
      bg: "from-green-50 to-emerald-50",
      border: "border-green-200/30",
      icon: Users
    },
    {
      title: "線上家長座談",
      description: "定期舉辦家長座談會，讓家長了解學生學習狀況與系所發展",
      highlights: ["親師溝通", "學習追蹤", "家庭支持"],
      color: "text-orange-600",
      bg: "from-orange-50 to-red-50",
      border: "border-orange-200/30",
      icon: Video
    },
    {
      title: "消費者心理學",
      description: "深入探討消費者行為與心理，建立科學化行銷決策基礎",
      highlights: ["行為分析", "心理研究", "決策科學"],
      color: "text-purple-600",
      bg: "from-purple-50 to-violet-50",
      border: "border-purple-200/30",
      icon: Brain
    },
    {
      title: "數位行銷實務",
      description: "結合最新數位工具與平台，培養學生的數位行銷技能",
      highlights: ["社群媒體", "數據分析", "內容行銷"],
      color: "text-teal-600",
      bg: "from-teal-50 to-cyan-50",
      border: "border-teal-200/30",
      icon: Smartphone
    }
  ];

  return (
    <section id="features" className="py-40 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      {/* 精緻背景 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.008)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-8xl mx-auto">
          {/* 精緻標題區 */}
          <div className="text-center mb-32">
            <Badge className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200/30 px-10 py-4 rounded-full mb-10 font-medium text-lg">
              <GraduationCap className="w-5 h-5 mr-3" />
              教學特色與優勢
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
              教學特色
            </h2>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-6xl mx-auto leading-relaxed font-light">
              多元化的教學內容與創新的學習模式，培養學生成為具備全方位行銷能力的專業人才
            </p>
          </div>

          {/* 特色網格 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {features.map((feature, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-700 border ${feature.border} bg-gradient-to-br ${feature.bg} hover:scale-105 relative overflow-hidden rounded-3xl`}>
                <CardHeader className="pb-8 relative z-10 p-10">
                  <div className={`w-20 h-20 rounded-3xl bg-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <feature.icon className={`w-10 h-10 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-2xl text-slate-900 group-hover:text-blue-600 transition-colors duration-500 mb-4 leading-tight">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-lg">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 p-10 pt-0">
                  <div className="flex flex-wrap gap-3">
                    {feature.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="bg-white/80 text-slate-700 hover:bg-white transition-colors px-4 py-2 rounded-full">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 特別計畫區 */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white border-0 shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-500 rounded-[2rem]">
              {/* 背景效果 */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
              
              <CardHeader className="relative z-10 p-12">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl flex items-center justify-center mb-8 border border-orange-400/30">
                  <GraduationCap className="w-10 h-10 text-orange-300" />
                </div>
                <CardTitle className="text-4xl text-orange-400 mb-6 font-bold">學碩一貫方案</CardTitle>
                <CardDescription className="text-blue-200 text-xl leading-relaxed">
                  五年完成學士與碩士學位，提早進入研究領域
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 p-12 pt-0">
                <div className="space-y-6">
                  {[
                    "縮短修業年限，提早進入職場",
                    "深化專業知識，培養研究能力", 
                    "優先選課權，彈性學習安排"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-6">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex-shrink-0"></div>
                      <span className="text-blue-100 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600 via-red-600 to-red-700 text-white border-0 shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-500 rounded-[2rem]">
              {/* 背景效果 */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
              
              <CardHeader className="relative z-10 p-12">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8 border border-white/30">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-4xl mb-6 font-bold">產學合作計畫</CardTitle>
                <CardDescription className="text-orange-100 text-xl leading-relaxed">
                  與知名企業合作，提供實習與就業機會
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 p-12 pt-0">
                <div className="space-y-6">
                  {[
                    "實習機會媒合，累積實務經驗",
                    "業界導師制度，職涯指導",
                    "就業媒合服務，無縫接軌職場"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-6">
                      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-orange-100 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
