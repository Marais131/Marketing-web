
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              系所<span className="text-orange-500">定位</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              全台唯一聚焦於品牌端行銷的學系，我們培養學生具備甲方思維，
              深入理解消費者心理學與數位行銷的核心素養
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  為什麼選擇文化行銷？
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">品牌端甲方思維</h4>
                      <p className="text-slate-600">從品牌方角度思考行銷策略，培養學生成為企業內部行銷專家</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">消費者心理學導向</h4>
                      <p className="text-slate-600">深入探討消費者行為與心理，建立科學化的行銷決策基礎</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">數位行銷素養</h4>
                      <p className="text-slate-600">結合傳統行銷理論與最新數位工具，培養全方位行銷專業</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">實務與理論並重</h4>
                      <p className="text-slate-600">透過產學合作與實習機會，讓學生在學習中累積實戰經驗</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content - Image placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">CCU</span>
                  </div>
                  <p className="text-slate-600 font-medium">系所形象照片</p>
                  <p className="text-slate-500 text-sm">師生互動 × 教學環境</p>
                </div>
              </div>
              
              {/* Floating stats cards */}
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-orange-500">全台唯一</div>
                  <div className="text-sm text-slate-600">品牌端行銷學系</div>
                </CardContent>
              </Card>
              
              <Card className="absolute -top-6 -right-6 bg-white shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-600">40年</div>
                  <div className="text-sm text-slate-600">教育傳承</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom highlight */}
          <Card className="bg-gradient-to-r from-blue-900 to-slate-800 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">我們的使命</h3>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
                培養具備品牌思維、消費者洞察力與數位行銷技能的專業人才，
                成為企業內部行銷團隊的核心力量，推動品牌成長與市場創新
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-orange-400 font-bold text-lg">品牌思維</div>
                  <div className="text-blue-200 text-sm">Brand Mindset</div>
                </div>
                <div>
                  <div className="text-orange-400 font-bold text-lg">消費者洞察</div>
                  <div className="text-blue-200 text-sm">Consumer Insights</div>
                </div>
                <div>
                  <div className="text-orange-400 font-bold text-lg">數位創新</div>
                  <div className="text-blue-200 text-sm">Digital Innovation</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
