import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Trophy, Users, Target, BookOpen, CheckCircle, Lightbulb, TrendingUp, Award, Globe, Briefcase, Building, Zap, Rocket, Brain, Eye, Palette, BarChart3, Star, ArrowRight, Play, Pause, Volume2, Factory, Map, GraduationCap, PieChart, AlertTriangle, Calendar, Users2 } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    marketingDemand: 0,
    talentGap: 0,
    industryNeed: 0,
    yearEstablished: 0
  });

  // 數字動畫效果
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      const animateCounter = (key: keyof typeof counters, target: number) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 20);
      };

      animateCounter('marketingDemand', 122);
      animateCounter('talentGap', 51);
      animateCounter('industryNeed', 82);
      animateCounter('yearEstablished', 2020);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      
      {/* 沉浸式 Hero 區域 - 系所使命 */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* 動態背景 */}
      <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm mb-6">
                <Factory className="w-4 h-4 mr-2" />
                台灣產業升級的使命
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                行銷系所緣起
                <br />
                <span className="text-4xl md:text-6xl">與國家願景</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                從<span className="font-bold text-cyan-300">微笑曲線</span>的代工困境，到
                <span className="font-bold text-purple-300">品牌創新</span>的價值突破
              </p>
            </div>

            {/* 關鍵數據展示 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-300 mb-2">{counters.marketingDemand}K</div>
                <div className="text-sm text-blue-200">行銷職缺需求</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-red-300 mb-2">{counters.talentGap}%</div>
                <div className="text-sm text-blue-200">人才缺口比例</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-300 mb-2">{counters.industryNeed}%</div>
                <div className="text-sm text-blue-200">大學學歷需求</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-orange-300 mb-2">{counters.yearEstablished}</div>
                <div className="text-sm text-blue-200">本系成立年份</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Map className="w-5 h-5 mr-2 inline" />
                探索發展歷程
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 border border-white/30 backdrop-blur-sm">
                了解教育目標
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </div>
          </div>
        </div>

        {/* 滾動提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">探索緣起</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 台灣產業困境與轉型 */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              產業轉型契機
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              從代工到品牌的必然轉型
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              過去數十年來，台灣產業多致力於微笑曲線中相對價值較低的生產與代工項目上
            </p>
          </div>

          {/* 微笑曲線視覺化 */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
              <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">微笑曲線：價值分佈圖</h3>
              
              <div className="relative">
                {/* 曲線背景 */}
                <div className="flex items-end justify-between h-32 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-700 mb-1">研發創新</div>
                      <div className="text-sm text-slate-600">高附加價值</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center mb-12 transform hover:scale-110 transition-transform duration-300">
                      <Factory className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-700 mb-1">生產代工</div>
                      <div className="text-sm text-slate-600">低附加價值</div>
                      <Badge className="bg-red-100 text-red-800 text-xs mt-2">台灣現況</Badge>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-purple-700 mb-1">品牌行銷</div>
                      <div className="text-sm text-slate-600">高附加價值</div>
                      <Badge className="bg-purple-100 text-purple-800 text-xs mt-2">轉型目標</Badge>
                    </div>
                  </div>
                </div>
                
                {/* 轉型箭頭 */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-to-r from-red-500 to-purple-500 rounded-full p-3 animate-pulse">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-slate-700 mb-4">
                  <span className="font-bold text-purple-700">產業升級與加值</span>就是要將發展重心往微笑曲線兩端移動
                </p>
                <p className="text-slate-600">
                  一邊是研發、專利與技術的知識經濟，另一邊是透過<span className="font-bold text-purple-700">【行銷】</span>將產品賦予更高價值
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 國家政策支持 */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50 relative">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm mb-6">
              <Globe className="w-4 h-4 mr-2" />
              國家願景
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              政府政策的強力支持
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              行政院「黃金十年 國家願景」計畫明確指出<span className="font-bold text-blue-700">「品牌創新」</span>為我國未來經濟發展的重要驅動力
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 國家願景 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">國家願景目標</h3>
                  <p className="text-slate-600">亞太區域品牌管理中心</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>品牌創新為經濟發展驅動力</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>產業和企業品牌強化</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>提升國家競爭力</span>
                </li>
              </ul>
      </div>
      
            {/* 品牌台灣計畫 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">品牌台灣發展計畫</h3>
                  <p className="text-slate-600">經濟部五大重點策略</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>目標企業診斷輔導，擘劃品牌策略與願景</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>全員品牌管理升級，堅實企業品牌利基</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>品牌人才培訓紮根，儲備全方位種子堅兵</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 人才缺口危機 */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900/30 to-orange-900/30"></div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-red-100/10 text-red-300 border-red-300/30 px-4 py-2 text-sm mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              人才危機
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              行銷人才的嚴重短缺
            </h2>
            <p className="text-xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              有願景就必須要有人才來實踐，但行銷專業人力的缺口很大
            </p>
          </div>

          {/* 數據展示 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <PieChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">12.2%</h3>
                <p className="text-red-200">行銷專業占整體人力需求</p>
              </div>
              <p className="text-sm text-red-100 text-center">
                國發會調查30項重點產業，行銷人才需求持續上升
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">51.3%</h3>
                <p className="text-red-200">非5+2產業行銷人才缺額</p>
              </div>
              <p className="text-sm text-red-100 text-center">
                觀光、會展、電影、電視等產業招募困難
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">122K</h3>
                <p className="text-red-200">104人力銀行行銷職缺</p>
              </div>
              <p className="text-sm text-red-100 text-center">
                六大類職務需求排名第1，維持十年之久
              </p>
            </div>
          </div>

          {/* 人才短缺原因 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">人才短缺的主要原因</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-orange-300 mb-4">5+2數位經濟相關產業</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-white">人才供給不足</span>
                    <span className="text-orange-300 font-bold">34.4%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-white">在職人員技能不符</span>
                    <span className="text-orange-300 font-bold">22.8%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-red-300 mb-4">其他重點產業</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-white">人才供給不足</span>
                    <span className="text-red-300 font-bold">28.5%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-white">在職人員技能不符</span>
                    <span className="text-red-300 font-bold">10.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 教育系統的責任 */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-sm mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              教育使命
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              完整知識架構的必要性
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              過去數十年來，台灣行銷教育的知識都是包藏在企管系、國貿系的零星科目中
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">過去的教育困境</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-600 text-sm font-bold">✗</span>
                  </div>
                  <div>
                    <p className="text-slate-700 font-semibold">零星必/選修科目</p>
                    <p className="text-slate-600 text-sm">行銷知識散佈在各系所中</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-600 text-sm font-bold">✗</span>
                      </div>
                  <div>
                    <p className="text-slate-700 font-semibold">缺乏完整架構</p>
                    <p className="text-slate-600 text-sm">學生難以獲得聚焦的專業訓練</p>
                      </div>
                    </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-600 text-sm font-bold">✗</span>
                  </div>
                  <div>
                    <p className="text-slate-700 font-semibold">產業需求落差</p>
                    <p className="text-slate-600 text-sm">企業無法取得行銷科班人力</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">國際標準參照</h3>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">美國標準</h4>
                </div>
                <p className="text-slate-700 mb-4">
                  在大學的管理學院或商學院中，<span className="font-bold text-blue-700">行銷是最重要的獨立系所之一</span>
                </p>
                <p className="text-slate-600">
                  就工商實務業界而言，行銷亦是企業經營之骨幹
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 本系成立歷程與目標 */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/10 text-white px-4 py-2 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              歷史里程碑
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              中國文化大學行銷系的誕生
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              商學院瞭解到台灣產業發展對於行銷人才的迫切需求
            </p>
          </div>

          {/* 發展時間軸 */}
          <div className="relative mb-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-16">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-2">2014年 (103學年度)</h3>
                    <p className="text-blue-200">設立行銷研究所</p>
                    <p className="text-sm text-blue-100 mt-2">開始培養行銷碩士人才</p>
                  </div>
                </div>
                
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center relative z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center flex-row-reverse">
                <div className="w-1/2 pl-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-2">2020年 (109學年度)</h3>
                    <p className="text-purple-200">獲教育部核准成立行銷系</p>
                    <p className="text-sm text-purple-100 mt-2">完整大學部行銷教育體系</p>
                  </div>
                </div>
                
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center relative z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <div className="w-1/2 pr-8"></div>
              </div>
            </div>
          </div>

          {/* 教育目標 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">教育目標</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto"></div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20">
              <p className="text-xl md:text-2xl text-white text-center leading-relaxed font-medium">
                為產業培育具備
                <span className="font-bold text-cyan-300"> 專業消費者洞察能力</span>、
                <span className="font-bold text-green-300">企劃與執行能力</span>、
                <span className="font-bold text-purple-300">決策經營能力</span>、
                <span className="font-bold text-orange-300">消費心理與數據分析能力</span>
                之品牌／產品行銷專業人員
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <p className="text-cyan-300 font-semibold">消費者洞察</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <p className="text-green-300 font-semibold">企劃執行</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <p className="text-purple-300 font-semibold">決策經營</p>
                    </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                <p className="text-orange-300 font-semibold">消費心理與數據分析</p>
              </div>
            </div>
          </div>

          {/* 行動呼籲 */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-white mb-6">
              加入我們，成為台灣產業升級的
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                {" "}推動力量
              </span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                立即申請入學
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 border border-white/30 backdrop-blur-sm">
                了解課程設計
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default About;
