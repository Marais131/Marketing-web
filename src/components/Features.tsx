
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const features = [
    {
      title: "行銷美學",
      description: "結合美學設計與行銷策略，培養學生的視覺行銷素養",
      highlights: ["視覺設計", "品牌美學", "創意思維"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "學術研討會 (CMR)",
      description: "定期舉辦學術研討會，與業界專家交流最新行銷趨勢",
      highlights: ["學術交流", "趨勢分析", "研究發表"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "職人講座",
      description: "邀請業界專家分享實務經驗，拓展學生的視野與人脈",
      highlights: ["業界交流", "實務分享", "職涯規劃"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "線上家長座談",
      description: "定期舉辦家長座談會，讓家長了解學生學習狀況與系所發展",
      highlights: ["親師溝通", "學習追蹤", "家庭支持"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "消費者心理學",
      description: "深入探討消費者行為與心理，建立科學化行銷決策基礎",
      highlights: ["行為分析", "心理研究", "決策科學"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "數位行銷實務",
      description: "結合最新數位工具與平台，培養學生的數位行銷技能",
      highlights: ["社群媒體", "數據分析", "內容行銷"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              教學<span className="text-orange-500">特色</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              多元化的教學內容與創新的學習模式，培養學生成為具備全方位行銷能力的專業人才
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Special programs section */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900 to-slate-800 text-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-400">學碩一貫方案</CardTitle>
                <CardDescription className="text-blue-200">
                  五年完成學士與碩士學位，提早進入研究領域
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-blue-100">縮短修業年限，提早進入職場</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-blue-100">深化專業知識，培養研究能力</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-blue-100">優先選課權，彈性學習安排</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl">產學合作計畫</CardTitle>
                <CardDescription className="text-orange-100">
                  與知名企業合作，提供實習與就業機會
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-orange-100">實習機會媒合，累積實務經驗</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-orange-100">業界導師制度，職涯指導</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-orange-100">就業媒合服務，無縫接軌職場</span>
                  </div>
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
