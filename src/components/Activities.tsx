
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Activities = () => {
  const activities = [
    {
      title: "電商人妻講座",
      description: "知名網紅「電商人妻」分享電商經營心得與社群行銷策略",
      date: "2024年3月",
      type: "名人講座",
      highlights: ["電商經營", "社群行銷", "個人品牌"],
      image: "speaker-1",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "AIGC 行銷長工作坊",
      description: "探討AI生成內容在行銷領域的應用與未來趨勢",
      date: "2024年4月",
      type: "專題工作坊",
      highlights: ["AI行銷", "內容生成", "數位轉型"],
      image: "workshop-1",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "消費者行為研究發表",
      description: "學生研究成果發表會，展現學術研究與實務應用能力",
      date: "2024年5月",
      type: "學術發表",
      highlights: ["研究發表", "實證分析", "學術交流"],
      image: "research-1",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "品牌策略競賽",
      description: "校內外學生組隊參與品牌策略競賽，展現創意與實力",
      date: "2024年6月",
      type: "競賽活動",
      highlights: ["品牌策略", "團隊合作", "創意提案"],
      image: "competition-1",
      color: "from-orange-500 to-red-500"
    }
  ];

  const speakers = [
    { name: "電商人妻", title: "知名電商專家", expertise: "電商經營 × 社群行銷" },
    { name: "AIGC 行銷長", title: "AI行銷專家", expertise: "AI應用 × 數位創新" },
    { name: "品牌策略顧問", title: "資深顧問", expertise: "品牌定位 × 市場策略" },
    { name: "消費者研究專家", title: "學者專家", expertise: "消費心理 × 行為分析" }
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              活動<span className="text-orange-500">成果</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              豐富多元的學術活動與業界交流，為學生創造實務學習與人脈拓展的機會
            </p>
          </div>

          {/* Featured activities */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {activities.map((activity, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                {/* Activity image placeholder */}
                <div className={`h-48 bg-gradient-to-br ${activity.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center text-white">
                    <div className="text-3xl mb-2">📸</div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm opacity-90">活動精彩瞬間</p>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white/20 text-white border-white/30">
                    {activity.type}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-slate-800 group-hover:text-orange-600 transition-colors">
                      {activity.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-slate-600">
                      {activity.date}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {activity.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Speaker highlights */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
              重量級講師陣容
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {speakers.map((speaker, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-b from-white to-slate-50">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {speaker.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-1">{speaker.name}</h4>
                    <p className="text-slate-600 text-sm mb-2">{speaker.title}</p>
                    <Badge variant="outline" className="text-xs text-slate-600">
                      {speaker.expertise}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Activity stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-slate-600">年度活動場次</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">學生參與人次</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
              <div className="text-slate-600">業界講師</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-slate-600">學生滿意度</div>
            </div>
          </div>

          {/* Upcoming events */}
          <Card className="bg-gradient-to-r from-blue-900 to-slate-800 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-400 text-center">即將舉辦</CardTitle>
              <CardDescription className="text-blue-200 text-center">
                更多精彩活動等你參與
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-orange-500/20 rounded-lg p-4 mb-3">
                    <div className="text-2xl mb-2">🎯</div>
                    <h4 className="font-semibold text-orange-400">品牌定位工作坊</h4>
                  </div>
                  <p className="text-blue-200 text-sm">2024年12月</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-lg p-4 mb-3">
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="font-semibold text-blue-400">數據分析講座</h4>
                  </div>
                  <p className="text-blue-200 text-sm">2025年1月</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 rounded-lg p-4 mb-3">
                    <div className="text-2xl mb-2">🌟</div>
                    <h4 className="font-semibold text-green-400">校友分享會</h4>
                  </div>
                  <p className="text-blue-200 text-sm">2025年2月</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Activities;
