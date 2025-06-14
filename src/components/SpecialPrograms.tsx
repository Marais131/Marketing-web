import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, DollarSign, TrendingUp, CheckCircle, Award, Target } from "lucide-react";

const SpecialPrograms = () => {
  const programs = [
    {
      title: "4+1學碩一貫",
      subtitle: "課程銜接、少一年學費、少一年時間、學歷升級",
      icon: GraduationCap,
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      benefits: [
        { icon: Clock, text: "5年完成學士+碩士學位" },
        { icon: DollarSign, text: "大四修碩一課程只繳一份學費" },
        { icon: TrendingUp, text: "提早進入研究領域" },
        { icon: Award, text: "學歷升級競爭優勢" }
      ],
      description: "因為本系研究所在城區部上課，為顧及學碩一貫方便性，本系規劃高年級課程在城區部上課"
    },
    {
      title: "職業角色定位",
      subtitle: "設定未來職業角色明確目標",
      icon: Target,
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      careers: [
        "品牌經理", "產品經理", "行銷企劃主管", 
        "市場研究分析師", "數位行銷經理", "促銷企劃經理",
        "通路行銷經理", "電商經營管理", "自媒體經營者", "社群經營管理師"
      ],
      description: "全台唯一設定聚焦培育「品牌端(甲方)思維行銷人才」之系所"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-8xl mx-auto">
          {/* 標題區 */}
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border border-green-200/30 px-8 py-3 rounded-full mb-8 font-medium text-lg">
              <Award className="w-5 h-5 mr-3" />
              特色計畫與未來發展
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 bg-clip-text text-transparent">
              升級你的未來
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              創新的學習路徑與明確的職涯目標，為學生打造最佳的成長軌道
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {programs.map((program, index) => {
              const ProgramIcon = program.icon;
              return (
                <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${program.bgColor} hover:scale-105 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10 p-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <ProgramIcon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl text-slate-900 mb-4">{program.title}</CardTitle>
                    <div className="text-lg font-medium text-slate-600 mb-6">{program.subtitle}</div>
                  </CardHeader>
    
                  <CardContent className="relative z-10 p-10 pt-0">
                    {program.benefits && (
                      <div className="space-y-6 mb-8">
                        {program.benefits.map((benefit, benefitIndex) => {
                          const BenefitIcon = benefit.icon;
                          return (
                            <div key={benefitIndex} className="flex items-center space-x-4 group-hover:translate-x-2 transition-transform duration-300">
                              <div className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                <BenefitIcon className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-slate-700 font-medium text-lg">{benefit.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {program.careers && (
                       <div className="grid grid-cols-2 gap-4 mb-8">
                        {program.careers.map((career, careerIndex) => (
                          <div key={careerIndex} className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-slate-700 font-medium">{career}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                      <p className="text-slate-600 leading-relaxed italic">
                        {program.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA 區塊 */}
          <Card className="mt-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white border-0 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
            
            <CardContent className="p-16 text-center relative z-10">
              <h3 className="text-4xl font-bold mb-6 text-orange-400">準備好加入我們了嗎？</h3>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed mb-10">
                成為全台唯一聚焦「品牌端思維」的行銷專業人才，開啟你的行銷職涯新篇章
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  了解招生資訊
                </Button>
                <Button variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300">
                  預約系所參訪
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecialPrograms;
