
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Faculty = () => {
  const facultyHighlights = [
    {
      category: "學術專精",
      description: "具備博士學位與豐富研究經驗的教授陣容",
      icon: "🎓",
      color: "from-blue-500 to-indigo-500"
    },
    {
      category: "業界經驗",
      description: "曾任職知名企業的實務專家",
      icon: "💼",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "國際視野",
      description: "具備海外學習與研究背景",
      icon: "🌍",
      color: "from-purple-500 to-violet-500"
    },
    {
      category: "創新教學",
      description: "運用最新教學方法與數位工具",
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    {
      title: "校友傑出表現",
      items: [
        "知名品牌行銷總監",
        "新創公司創辦人",
        "數位行銷專家",
        "消費者研究專家"
      ]
    },
    {
      title: "產學合作成果",
      items: [
        "10+ 企業合作案例",
        "50+ 實習機會媒合",
        "多項產學研究計畫",
        "業界講座與工作坊"
      ]
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              師資<span className="text-orange-500">陣容</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              兼具學術深度與實務經驗的優秀師資團隊，為學生提供最專業的指導與支持
            </p>
          </div>

          {/* Faculty highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {facultyHighlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <CardContent className="pt-8 pb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.category}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Faculty photo placeholder */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">師資</span>
                  </div>
                  <p className="text-slate-600 font-medium">師資團隊合影</p>
                  <p className="text-slate-500 text-sm">學術與實務並重的教學陣容</p>
                </div>
              </div>

              {/* Faculty stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center bg-blue-50 border-blue-200">
                  <CardContent className="pt-6 pb-4">
                    <div className="text-2xl font-bold text-blue-600">20+</div>
                    <div className="text-sm text-slate-600">專任教師</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-orange-50 border-orange-200">
                  <CardContent className="pt-6 pb-4">
                    <div className="text-2xl font-bold text-orange-600">15+</div>
                    <div className="text-sm text-slate-600">業界專家</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right: Faculty features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">師資特色</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">學術與實務並重</h4>
                      <p className="text-slate-600 text-sm">教師具備博士學位與豐富業界經驗</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">國際化教學</h4>
                      <p className="text-slate-600 text-sm">具備海外研究經驗與國際視野</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">創新教學方法</h4>
                      <p className="text-slate-600 text-sm">運用數位工具與互動式教學</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">個人化指導</h4>
                      <p className="text-slate-600 text-sm">提供學生專業的學習與職涯輔導</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements section */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-slate-50 to-white">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievement.items.map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <Card className="mt-12 bg-gradient-to-r from-blue-900 to-slate-800 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">與我們的師資團隊交流</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                想了解更多關於我們的師資陣容和教學特色嗎？歡迎參加我們的座談會或直接聯繫我們
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm">
                  預約系所參訪
                </Badge>
                <Badge className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-2 text-sm">
                  線上座談會報名
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
