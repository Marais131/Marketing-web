
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Brain, Zap, Building, Star, Users, Award } from "lucide-react";
import { useState } from "react";

const FeaturedFaculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<number | null>(null);

  const starFaculty = [
    {
      id: 1,
      name: "孫慶文教授",
      title: "心理學博士",
      university: "美國芝加哥大學",
      specialty: "消費者心理學專家",
      courses: ["普通心理學", "認知心理學"],
      description: "以深厚的心理學背景，為學生建立洞察消費者心理的堅實基礎",
      achievement: "將心理學與行銷完美結合，培養學生成為真正能夠洞察人心的行銷專家",
      color: "from-purple-600 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
      icon: Brain
    },
    {
      id: 2,
      name: "傅皓政教授/所長",
      title: "邏輯學權威",
      university: "國內最權威邏輯學專家",
      specialty: "邏輯學在行銷決策",
      courses: ["邏輯學"],
      description: "首創在商學院教導行銷人邏輯學，徹底改變學生的決策思路",
      achievement: "「邏輯好，做什麼都好」理念的推動者，教學最獲好評",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      icon: Zap
    },
    {
      id: 3,
      name: "駱少康教授",
      title: "行銷所所長",
      university: "行銷學專家",
      specialty: "品牌管理與行銷策略",
      courses: ["行銷學", "品牌管理"],
      description: "與心理學教授協作，為心理與行銷間關係打下堅實基礎",
      achievement: "深厚的品牌管理實務經驗，指導學生建立品牌端思維",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      icon: GraduationCap
    },
    {
      id: 4,
      name: "王翔郁教授",
      title: "大傳系教授",
      university: "影像敘事專家",
      specialty: "視覺傳播與影像敘事",
      courses: ["影像敘事"],
      description: "教導行銷人如何透過靜態或動態影像來傳遞故事的能力",
      achievement: "讓行銷人能在相同頻率上與視覺專業者協同工作",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      icon: Building
    }
  ];

  const facultyStats = [
    { number: "20+", label: "專任教師", description: "博士學位與豐富研究經驗" },
    { number: "15+", label: "業界專家", description: "第一線實務經驗分享" },
    { number: "100%", label: "大神師資", description: "各各都是擔任總經理、系主任、所長的師資" },
    { number: "∞", label: "知名品牌", description: "實際操作過的知名品牌無數" }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-8xl mx-auto">
          {/* 標題區 */}
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border border-purple-200/30 px-8 py-3 rounded-full mb-8 font-medium text-lg">
              <Star className="w-5 h-5 mr-3" />
              明星師資陣容
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              各各都是大神
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              站在品牌經理/產品經理的思維，各專項領域最專業的師資，實際操作過的知名品牌無數
            </p>
          </div>

          {/* 師資統計 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {facultyStats.map((stat, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-xl font-bold text-slate-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 明星師資卡片 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {starFaculty.map((faculty, index) => (
              <Card 
                key={faculty.id} 
                className={`group cursor-pointer border-0 bg-gradient-to-br ${faculty.bgColor} hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden ${selectedFaculty === faculty.id ? 'scale-105 shadow-2xl' : ''}`}
                onClick={() => setSelectedFaculty(selectedFaculty === faculty.id ? null : faculty.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${faculty.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${faculty.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <faculty.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {faculty.name}
                      </CardTitle>
                      <div className="text-lg font-semibold text-slate-700 mb-1">{faculty.title}</div>
                      <div className="text-slate-600 mb-3">{faculty.university}</div>
                      <Badge className={`bg-gradient-to-r ${faculty.color} text-white px-4 py-1`}>
                        {faculty.specialty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 p-8 pt-0">
                  <p className="text-slate-700 leading-relaxed mb-4">{faculty.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-slate-800 mb-2">主授課程：</div>
                    <div className="flex flex-wrap gap-2">
                      {faculty.courses.map((course, i) => (
                        <Badge key={i} variant="secondary" className="bg-white/80 text-slate-700">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {selectedFaculty === faculty.id && (
                    <div className="animate-fade-in">
                      <div className="border-t border-slate-200 pt-4 mt-4">
                        <div className="text-sm font-semibold text-slate-800 mb-2">教學成就：</div>
                        <p className="text-slate-600 text-sm leading-relaxed italic">
                          "{faculty.achievement}"
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 業界師資團隊 */}
          <Card className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white border-0 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            
            <CardContent className="p-12 text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-orange-400/30">
                <Building className="w-10 h-10 text-orange-300" />
              </div>
              <h3 className="text-4xl font-bold mb-6 text-orange-400">電商實戰業界師資團隊</h3>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed mb-8">
                全台灣電商教育最火、最猛的業界大師合作，把貴森森秘技課程直接搬到校園內！
                全部第一線業界教師，純實戰邊做邊學
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  "網路廣告投放",
                  "微商實戰", 
                  "社群行銷實戰",
                  "跨境電商實戰"
                ].map((course, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="text-orange-300 font-semibold text-lg">{course}</div>
                    <div className="text-blue-200 text-sm mt-2">業界實戰課程</div>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg">
                了解更多師資資訊
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFaculty;
