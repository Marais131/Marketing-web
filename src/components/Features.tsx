
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, BookOpen, Users, Video, Brain, Smartphone, GraduationCap, Building } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "行銷美學",
      description: "結合美學設計與行銷策略，培養學生的視覺行銷素養",
      highlights: ["視覺設計", "品牌美學", "創意思維"],
      gradient: "from-pink-500 to-rose-500",
      icon: Palette
    },
    {
      title: "學術研討會 (CMR)",
      description: "定期舉辦學術研討會，與業界專家交流最新行銷趨勢",
      highlights: ["學術交流", "趨勢分析", "研究發表"],
      gradient: "from-blue-500 to-indigo-500",
      icon: BookOpen
    },
    {
      title: "職人講座",
      description: "邀請業界專家分享實務經驗，拓展學生的視野與人脈",
      highlights: ["業界交流", "實務分享", "職涯規劃"],
      gradient: "from-green-500 to-emerald-500",
      icon: Users
    },
    {
      title: "線上家長座談",
      description: "定期舉辦家長座談會，讓家長了解學生學習狀況與系所發展",
      highlights: ["親師溝通", "學習追蹤", "家庭支持"],
      gradient: "from-orange-500 to-red-500",
      icon: Video
    },
    {
      title: "消費者心理學",
      description: "深入探討消費者行為與心理，建立科學化行銷決策基礎",
      highlights: ["行為分析", "心理研究", "決策科學"],
      gradient: "from-purple-500 to-violet-500",
      icon: Brain
    },
    {
      title: "數位行銷實務",
      description: "結合最新數位工具與平台，培養學生的數位行銷技能",
      highlights: ["社群媒體", "數據分析", "內容行銷"],
      gradient: "from-teal-500 to-cyan-500",
      icon: Smartphone
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium header */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <Badge className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 border border-blue-200 px-6 py-2 rounded-full">
                <GraduationCap className="w-4 h-4 mr-2" />
                教學特色
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 tracking-tight">
              教學<span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">特色</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              多元化的教學內容與創新的學習模式，培養學生成為具備全方位行銷能力的專業人才
            </p>
          </div>

          {/* Premium features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 relative overflow-hidden">
                {/* Card background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-orange-600 transition-colors duration-300 mb-3">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors px-3 py-1">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Premium special programs */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white border-0 shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
              {/* Background effects */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
              
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 border border-orange-400/30">
                  <GraduationCap className="w-6 h-6 text-orange-300" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-orange-400 mb-4">學碩一貫方案</CardTitle>
                <CardDescription className="text-blue-200 text-lg">
                  五年完成學士與碩士學位，提早進入研究領域
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {[
                    "縮短修業年限，提早進入職場",
                    "深化專業知識，培養研究能力", 
                    "優先選課權，彈性學習安排"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                      <span className="text-blue-100">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 via-red-500 to-red-600 text-white border-0 shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
              {/* Background effects */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>
              
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 border border-white/30">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-4">產學合作計畫</CardTitle>
                <CardDescription className="text-orange-100 text-lg">
                  與知名企業合作，提供實習與就業機會
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {[
                    "實習機會媒合，累積實務經驗",
                    "業界導師制度，職涯指導",
                    "就業媒合服務，無縫接軌職場"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-orange-100">{item}</span>
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
