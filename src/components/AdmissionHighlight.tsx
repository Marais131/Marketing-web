
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Calendar, Award, BookOpen, TrendingUp, DollarSign, Target } from "lucide-react";
import { Link } from "react-router-dom";

const AdmissionHighlight = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "4+1學碩一貫",
      description: "5年取得學士+碩士雙學位",
      benefits: ["少一年學費", "少一年時間", "學歷升級"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Target,
      title: "明確就業導向",
      description: "培養品牌端思維人才",
      benefits: ["品牌經理", "產品經理", "數位行銷"],
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Award,
      title: "全台唯一定位",
      description: "聚焦甲方思維培養",
      benefits: ["產學合作", "實習保證", "業師指導"],
      color: "from-orange-600 to-red-600"
    }
  ];

  const admissionInfo = [
    { label: "招生名額", value: "學士班 50名", icon: Users },
    { label: "申請期間", value: "113學年度開放中", icon: Calendar },
    { label: "就業率", value: "95%以上", icon: TrendingUp },
    { label: "學費優惠", value: "多項獎學金", icon: DollarSign }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* 針對家長的標題 */}
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border border-orange-200/50 px-8 py-4 rounded-full mb-8 text-lg font-medium shadow-sm">
              <GraduationCap className="w-5 h-5 mr-3" />
              給家長的重要資訊
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-orange-700 to-slate-900 bg-clip-text text-transparent">
              為什麼選擇我們？
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              全台唯一專注培養「品牌端思維」的行銷系所
              <br />
              <span className="text-orange-600 font-bold">給您的孩子最具競爭力的未來</span>
            </p>
          </div>

          {/* 核心優勢展示 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <CardHeader className="text-center pt-8">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800 mb-4">{item.title}</CardTitle>
                  <p className="text-slate-600 font-medium">{item.description}</p>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <div className="space-y-2">
                    {item.benefits.map((benefit, i) => (
                      <Badge key={i} variant="outline" className="mx-1 text-slate-700 border-slate-300">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 招生重點資訊 */}
          <Card className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white border-0 shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            
            <CardContent className="p-12 relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 text-orange-300">113學年度招生資訊</h3>
                <p className="text-xl text-blue-200">現在就為孩子的未來做最好的選擇</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                {admissionInfo.map((info, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-orange-300 mb-2">{info.value}</div>
                    <div className="text-blue-200 text-sm">{info.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                    <Link to="/admissions">
                      <BookOpen className="w-5 h-5 mr-2" />
                      立即了解招生詳情
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 px-12 py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300">
                    <Calendar className="w-5 h-5 mr-2" />
                    預約校園參訪
                  </Button>
                </div>
                
                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <p className="text-blue-100 text-lg">
                    <span className="font-bold text-orange-300">特別提醒：</span>
                    早鳥申請享有獎學金優惠，4+1學碩一貫名額有限，建議儘早規劃！
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdmissionHighlight;
