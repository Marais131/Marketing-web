import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Trophy, Users, Target, BookOpen, CheckCircle, Lightbulb, TrendingUp, Award, Globe, Briefcase, Building, Zap, Rocket, Brain, Eye, Palette, BarChart3, Star, ArrowRight, Play, Pause, Volume2, Factory, Map, GraduationCap, PieChart, AlertTriangle, Calendar, Users2, ArrowRightCircle } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-black overflow-hidden">
      
      {/* 沉浸式 Hero 區域 - 無縫融入主背景 */}
      <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-16">
        {/* 背景點綴元素 */}
        <div className="absolute inset-0 pointer-events-none">
          {/* 大型柔和光暈 */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-2xl"></div>
          {/* 幾何圓點 */}
          <div className="absolute top-24 left-24 w-6 h-6 bg-purple-400/60 rounded-full blur-md animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-4 h-4 bg-blue-400/60 rounded-full blur-md animate-pulse delay-300"></div>
          {/* 斜線條 */}
          <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-400/40 to-transparent rotate-2"></div>
          <div className="absolute bottom-10 right-0 w-1/3 h-1 bg-gradient-to-l from-blue-400/40 to-transparent -rotate-3"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto -mt-40">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-base mb-6 backdrop-blur-sm">
                <Factory className="w-5 h-5 mr-2" />
                台灣產業升級的使命
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight">
                行銷系所緣起
                <br />
                <span className="text-4xl md:text-6xl">與國家願景</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                從<span className="font-bold text-blue-300">微笑曲線</span>的代工困境，到
                <span className="font-bold text-purple-300">品牌創新</span>的價值突破
              </p>
            </div>

            {/* 關鍵數據展示 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/25">
                <div className="text-3xl font-bold text-blue-300 mb-2">{counters.marketingDemand}K</div>
                <div className="text-sm text-blue-200">行銷職缺需求</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/25">
                <div className="text-3xl font-bold text-purple-300 mb-2">{counters.talentGap}%</div>
                <div className="text-sm text-blue-200">人才缺口比例</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/25">
                <div className="text-3xl font-bold text-blue-300 mb-2">{counters.industryNeed}%</div>
                <div className="text-sm text-blue-200">大學學歷需求</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/25">
                <div className="text-3xl font-bold text-purple-300 mb-2">{counters.yearEstablished}</div>
                <div className="text-sm text-blue-200">本系成立年份</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-700/90 hover:to-purple-700/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm">
                <Map className="w-5 h-5 mr-2 inline" />
                探索發展歷程
              </button>
              <button className="bg-white/15 hover:bg-white/25 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 border border-white/30 backdrop-blur-sm">
                了解教育目標
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </div>
          </div>
        </div>

        {/* 滾動提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">探索緣起</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 台灣產業困境與轉型 - 無縫融入主背景 */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        {/* 過渡背景層 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/12 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-base mb-6 backdrop-blur-sm">
              <AlertTriangle className="w-5 h-5 mr-2" />
              產業轉型契機
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              從代工到品牌的必然轉型
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              過去數十年來，台灣產業多致力於微笑曲線中相對價值較低的生產與代工項目上
            </p>
          </div>

          {/* 微笑曲線視覺化 - 全新抽象化設計 */}
          <div className="mb-20">
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">

              {/* 抽象背景輝光 */}
              <div className="absolute inset-0 opacity-50 pointer-events-none">
                <div className="absolute -left-48 -top-48 w-96 h-96 bg-radial-gradient from-blue-600/40 to-transparent blur-3xl animate-pulse"></div>
                <div className="absolute -right-48 -top-48 w-96 h-96 bg-radial-gradient from-purple-600/40 to-transparent blur-3xl animate-pulse delay-500"></div>
                    </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-center mb-4 text-white drop-shadow-lg">價值升級的微笑曲線</h3>
                <p className="text-center text-purple-200 mb-16 max-w-2xl mx-auto">從低附加價值的代工，邁向高附加價值的研發與品牌，是台灣產業的必然之路。</p>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                  
                  {/* 1. 研發創新 (High Value) */}
                  <div className="md:col-span-2 text-center p-8 bg-black/20 rounded-2xl border border-blue-400/40 shadow-2xl shadow-blue-500/10 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-blue-200 mb-2">研發創新</h4>
                    <p className="font-semibold text-sm text-white bg-blue-500/40 rounded-full px-4 py-1 inline-block">高附加價值</p>
                  </div>
                  
                  {/* Transition Arrow */}
                    <div className="text-center">
                    <ArrowRightCircle className="w-12 h-12 text-slate-500 mx-auto transform -rotate-90 md:rotate-0" />
                  </div>
                  
                  {/* 2. 品牌行銷 (High Value) */}
                  <div className="md:col-span-2 text-center p-8 bg-black/20 rounded-2xl border border-purple-400/40 shadow-2xl shadow-purple-500/10 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-purple-200 mb-2">品牌行銷</h4>
                    <p className="font-semibold text-sm text-white bg-purple-500/40 rounded-full px-4 py-1 inline-block">高附加價值</p>
                  </div>
                </div>
                
                {/* The "dip" of the curve */}
                <div className="flex justify-center mt-8">
                  <div className="text-center p-4 bg-slate-800/60 rounded-xl border border-slate-700 w-full md:w-auto">
                    <div className="flex items-center justify-center gap-4">
                      <Factory className="w-6 h-6 text-slate-400" />
                      <div>
                        <h4 className="text-lg font-bold text-slate-300">生產代工</h4>
                        <p className="text-sm text-slate-400">低附加價值 (台灣現況)</p>
                      </div>
                  </div>
                </div>
              </div>
              
                <div className="text-center mt-16">
                  <p className="text-lg text-white/90 max-w-3xl mx-auto">
                    <span className="font-bold text-purple-300">【行銷】</span>是實現價值躍升、打造自有品牌的關鍵力量。
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 國家政策支持 - 無縫融入主背景 */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        {/* 過渡背景層 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-indigo-800/25 to-transparent"></div>
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/12 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/25 text-white border-white/40 px-6 py-3 text-base mb-6 backdrop-blur-sm">
              <Globe className="w-5 h-5 mr-2" />
              國家願景
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              政府政策的強力支持
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              行政院「黃金十年 國家願景」計畫明確指出<span className="font-bold text-purple-200">「品牌創新」</span>為我國未來經濟發展的重要驅動力
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 黃金十年計畫 */}
            <div className="bg-white/15 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-6">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">黃金十年國家願景</h3>
                  <p className="text-blue-200">三大面向・十大主軸</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start text-blue-100">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>活力經濟：全球創新中心、產業多元發展</span>
                </li>
                <li className="flex items-start text-blue-100">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>公義社會：兼顧成長與分配</span>
                </li>
                <li className="flex items-start text-blue-100">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>廉能政府、和平兩岸、友善國際</span>
                </li>
              </ul>
      </div>
      
            {/* 品牌台灣計畫 */}
            <div className="bg-white/15 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center mr-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">品牌台灣發展計畫</h3>
                  <p className="text-purple-200">經濟部五大重點策略</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start text-purple-100">
                  <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>目標企業診斷輔導，擘劃品牌策略與願景</span>
                </li>
                <li className="flex items-start text-purple-100">
                  <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>全員品牌管理升級，堅實企業品牌利基</span>
                </li>
                <li className="flex items-start text-purple-100">
                  <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>品牌人才培訓紮根，儲備全方位種子堅兵</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 人才缺口危機 - 無縫融入主背景 */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        {/* 過渡背景層 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-purple-800/30 to-transparent"></div>
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-600/12 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-red-500/30 text-red-200 border-red-300/40 px-6 py-3 text-base mb-6 backdrop-blur-sm">
              <AlertTriangle className="w-5 h-5 mr-2" />
              人才危機
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              行銷人才的嚴重短缺
            </h2>
            <p className="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              有願景就必須要有人才來實踐，但行銷專業人力的缺口很大
            </p>
          </div>

          {/* 數據展示 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <PieChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">12.2%</h3>
                <p className="text-red-200">行銷專業占整體人力需求</p>
              </div>
              <p className="text-sm text-purple-100 text-center">
                國發會調查30項重點產業，行銷人才需求持續上升
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">51.3%</h3>
                <p className="text-red-200">非5+2產業行銷人才缺額</p>
              </div>
              <p className="text-sm text-purple-100 text-center">
                觀光、會展、電影、電視等產業招募困難
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">122K</h3>
                <p className="text-red-200">104人力銀行行銷職缺</p>
              </div>
              <p className="text-sm text-purple-100 text-center">
                六大類職務需求排名第1，維持十年之久
              </p>
            </div>
          </div>

          {/* 人才短缺原因 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">人才短缺的主要原因</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-blue-300 mb-4">5+2數位經濟相關產業</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg backdrop-blur-sm">
                    <span className="text-white">人才供給不足</span>
                    <span className="text-blue-300 font-bold">34.4%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg backdrop-blur-sm">
                    <span className="text-white">在職人員技能不符</span>
                    <span className="text-blue-300 font-bold">22.8%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-300 mb-4">其他重點產業</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg backdrop-blur-sm">
                    <span className="text-white">人才供給不足</span>
                    <span className="text-purple-300 font-bold">28.5%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg backdrop-blur-sm">
                    <span className="text-white">在職人員技能不符</span>
                    <span className="text-purple-300 font-bold">10.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 教育系統的責任 - 無縫融入主背景 */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-black/30 to-transparent"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/25 text-white border-white/40 px-6 py-3 text-base mb-6 backdrop-blur-sm">
              <GraduationCap className="w-5 h-5 mr-2" />
              教育使命
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              完整知識架構的必要性
            </h2>
            <p className="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              過去數十年來，台灣行銷教育的知識都是包藏在企管系、國貿系的零星科目中
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">過去的教育困境</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500/30 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-200 text-sm font-bold">✗</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">零星必/選修科目</p>
                    <p className="text-purple-200 text-sm">行銷知識散佈在各系所中</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500/30 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-200 text-sm font-bold">✗</span>
                      </div>
                  <div>
                    <p className="text-white font-semibold">缺乏完整架構</p>
                    <p className="text-purple-200 text-sm">學生難以獲得聚焦的專業訓練</p>
                      </div>
                    </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500/30 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-200 text-sm font-bold">✗</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">產業需求落差</p>
                    <p className="text-purple-200 text-sm">企業無法取得行銷科班人力</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-6">國際標準參照</h3>
              <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">美國標準</h4>
                </div>
                <p className="text-white mb-4">
                  在大學的管理學院或商學院中，<span className="font-bold text-blue-300">行銷是最重要的獨立系所之一</span>
                </p>
                <p className="text-purple-200">
                  就工商實務業界而言，行銷亦是企業經營之骨幹
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 本系成立歷程與目標 - 無縫融入主背景 */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        {/* 學生活動照片背景 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-15">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfACgDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABAUCAwYBAAf/xAAvEAACAQMDAgQEBQUAAAAAAAABAgMABBEFEiExQVEGE2FxIjKBkQcjobHRFELB8P/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAICAQMEAgMAAAAAAAAAAAABAhEDEiExE0FRYQQjInGR/9oADAMBAAIRAxEAPwDITRmEGHy7PGc5znPpXEvx0JUhsRhgfcfpUsWBJgXDggDxMgxhS2B+Q4VUKNFt5IvdweJ5BUHOFhHIJ6nI3eYxoFXbJzjjPQ0xT80S0rbHYDt2cIpEfGcg56Y9K16mR4oljlUnRN1vpANtbCWJGOOUXrk8Z7c0rkj3jy5iOwwpOem0npW78JVdvCUXBwJU2j5sc8j1GcGtyeozUFMhSx9GQsXmk8GySs4d9xWNTwWI5P0JNGWEKCOF85w88kOKKsb4uxX9/K3yRshwBjdnJx3rO8PQRq7MylTt8rj/AN1aTt4A8DGPeAYAwoGDXp3UhQ6jcV4GeQPWrI4gJCrFCG6gn0ptfMU3KRJVsV3Lkm2kZcSDw3dXELTLIqq5XAK7Sg7kkA1x/BN8s8U7u6qvMbMcRv6Ej7jn3rZA9xNJ61U9lJHJnhOCCzZdOFPrg/xqeNNEp3YtsNPe4jjaT4WjwqsuCpyQeDuHOO9LaA2EJV4eMYOMfSrz2omjjJwxxV0zLEGOPqNPp7RTlySCkdlWJ+ZhkkE5BGcgjH2zTjQtLtruR5riJZBGSNykELkYGckHIxWn8GeBxdajZwahbnbJIqbzGdyyZGNhPY8Y65461s/EXh61s9PuLizt47eXd5azohRZFztYYP8AjjnPatHOCi0J4Ym9yPLc78e9W0gVirS7A9xXlAVBpAGSCnGMfpVQxSq8l4kGNrYK4xnJGKO4NR6WaJhkjB5xRJ8MrqPfWfBGcMSNvp7+tFeCvDMN9N/V3C+XCqFQQpJJz2rXLbwCd0AGFJOAceg7VNuNaFjhJdGf0bwxaW8O6JFjdQJGCjA4HFcGgLPKqozShjjjBP8AtWn0yzgt4MLHtZecjPGO/wBqmYj4jhD7iuwHIWg5IOAfTPvVyyZZtjRhQYLgjOPnlwQxQnr0GefvU7WwtLJdqMYVz1IGNv8A6HnGe1LLaZo3KjO7PU/7VNz2iGW4iYK8OGgDW72+HtuFYSgE5Y7zzxkk9TT1gWR2UZO7BB9Ps0j9TUEG7qSGOSQPrWxM+nBxhv6eUH+GXLjT6UMHJ5xRAQjdPJ3b1g7A8fD8JwfR1FKOr5Uj7e9RRuBJIFDIqyDCnOeDz1pLYX1QCWRucDtSjTfiKAKuDgY3Y71pY7G0lh3BF3N0PPetmDHNJ6kwS1wUcZ5GMDAqV4DI1wz26bjuuzkfEyWUwQ9PpVa4lsJdSSZZDRjRlkU/F9zWxSQ7B7QKFjwvqfX3rI24O2eO2VXKHavH6+tJPDEtvdaXJqF3qEcDFxHGsUhDE5yTx0zQ/hsW1xP4puUEOzUdQE6r1YOsTJnjux+9K2GiM1yFI/CnjO4+JZDJqP8AWJbXdqzSJO0bR/2MGIDEYw2QOgOehpvq0jGGSKEKEk8vMpGe6FtvXH9tRDGVkOp6dpGlzw+HLyXS1tb0ILm6d5TNLMSCzsD8O5sCrgqngsqwK3hO91KK02WYW62K5JAyTu+3bNDlVtMlJNWKPGPikz2k8Vhd3EcQUyBLO7uINpGT8KZ+EepY9azMRJwzqRnsBSrRtFmnlmeTp5YU/M3IZsP6j1olGwCCazbt7l67N/2eKiAV4Ejms1dWSRIziAGRe50qPNSF2pK8gcJJkFd2DjFZSDXta+GdLy8dSwDPqDbywGAAN5BIx6nNayNSYVYMSzDP5ycVNh0N7jV/Hd9cQlr6a3a2HmW9nGhI2c8scZz6kmo654pngsJYRKI7gsDKkLgIqcMQexGCD9KLB/DKCTRrBDGpXL5yJ5AzOz7gzgKMkd+BjjHNIsN1GqaYAONtwGUc9YvAGo/Ed4lGr2DXKhfsG6YxgVoPw88WalrGLfU2jM2Hd5BHuQhBkHjIGOOhNPfEGiwL4SujGwL3NqbCGMnJOV2hfpyQT70FrSQeWFUUyJOWYFfcRlT+lHILvRJlGPNfKjfuKRJAzaZrOtXllZL9nVUKGcvGRJ18xcdOcjgGl0qiKR5rVRdXJeVUd02g/Ekfy45xnYWwxc9NXHA0enXN+kCPOEtZJklHlKO5DEBwfpRdDDLJxBpRnjLx2tqsjlU3YCjOF6+lZGWR5LIkAR4BAAYZyDt+1ILOOJZ7qQRCJo7y+L7nzKEWaZcKF4zjGCeuT6VrPCbTSeH9Hut2B5CjCrKjnrkrkZ5z60G3K2M47Z+ug2o3sKQzQRu4ltpJzBvOe7q2Pf6VK8sUtJFaMeYYoIwh5ULwVP7Vz8f3g1PTn0qJbKJx5m1Y93/jtJwNrfLxHJnB/u9q02l6uOJ0fJlJwfPQg4O+Ppu6deK0abJT0r9jf8UdU8RaBpx1PS9NfxLa6VpcVvqEqPGsG6cAICq5cOZY+u0dPkBrG2fiO4t7WQ/0P4gS3BRLVWnuW8wOCj/CGPyHOfcGtnqXjfwr4q0KXVPE+m6wtnCIlWSF7OOZWhOxl+K4A6EEelJ9T/GSz8Sx2dj4ZOjJJbSSK1+tqtvctLiX5S7KcFQpHJyc8UT6DQVqOmQ/0FhqV/oupeLv6+zkawt/MRNNGo3D+bCSUdAQ8nDYj+UGNB38s2AeFZG07iEr6tZ6P8v8ASrWi8Y3/AIZ8LsqeFbfwz4X1CGPUI7qZo2sdJt5VeQypIGVlwz8YyGhAxnBNLJPw38VamFm8ZatPqUEaQRQedIhvBGoWXfHHGqpLGJCxEccZG2M4VAJzWWkpuOl2l9nDhKSVrcm0g/EWKfXo7uLU9I1i11K3gljXUVtJZmuVJeMbiyojEqhAZjndGI5kmnZWdoUGtXGk3Ud3caTBrltrElqltdW0F2LVruJYkR1KhEOGijZlAbJc4Y1mItd8QaL9t8UaO1r4fubmC8FnqaT6k3l28MQBKlHEe1ZjmZlCjacRKr7LrTk0DS9DudOmns5HjtLqe7a6ikZYJHgmd0lWaQjcNhYOrJsOAJELn0f6T4s8Lal4ssLvRbvw74t1rW9Hihhs7iOyWayaZUt/OjtrrYRCu4rJA7YGVCqMfpWn6/b6nY2V1qVnbXq3fz26S4bMfZuO+K1Fnq3iTwlpvgKa1i067tPEVjNLpUcNoEt9NuJ7vZI1+m4JG0bLGgZdklxhfMy/qfhq88aHxQ2oXp8L+IrqyW30uzlIuE0aBGE7rMhCBLaFjKjyLG6QzEhcqGMQSvdlbUqOo+xGT0LS+N7eKJdOudQmtZJ7Aw7dWjJjdJ8Aom52yoY4kOfRcZxPa9X/AB/v9Kk0XTNO023t4Y5rp/Eq3UtjeRRrNJcG6nYXBIEpLCMlWwFUGNhJa6VdCy1a98QatYTN5VkdOm0221JYRNcWgdZGMbJHEqfJnzFAzwjHM/gLwl4LXxToR8QQ6Q+qwx/07Xl9Y36/7y8fGHbPNYf+POLSk34s0I9O9/GHBVnNPLZm+/p2kSbQj71QBMEoWEIhyBKEUVpdT8Y6rq/h5tP8Q+HZdR04QK82nT3QutsjAHfFjdjB7jjpms/4g/EiTSrqGz0m0tdTTT9Rtrh5Z/MPmxRMyFArDJKqG+M5VdpCg5Ls2+lajea7e65qGozaBeeFNPs4LfUNMvrl7e4j8rLLd+e/lzOZHzJsG6MyJ8QKXuNu6vHg34iX/h/4g6fdrFPqtvqJ8RTJLiB45Y7Qx3CnAX8yZjH5g3DBGRBtpx+jXvgrwf4b/DjwpoXhfU9AuNNXXLPxDe6vcWksjrp1xHYvO8DJEodhHvZ4wNp3Y+PKnNJLbW7g6VdaRJq1jpElzeSWyT6hF59w5eMJCYY4t6yM3JIzCqsQCGQ8fwT4f8Q+F/wpuvFNtp154dvdKNt/Q6hpfiC21NdPvLvMYnWSMlZo3VCZG8xfJY7DjMUXFzFRTUl6k2q5LDNu6OnLdjxJoF/r0VomN8lv0hbvtHQDH9vNT9zWqPh3/AB4e14EfhRcTa2x0TTV8OXupXVoqaFbJJ5Nuqz3Lm3RFV7clY8lRHGWwYUgcYlj8L/hH4PfwBbaJ4b8Kalp+mxSpMLPS9F8MzarNNLLI3npqOtOXWVYJDbNscfC5c7Z3q1HxBb6zp/jbxP4kl8C+K/D0XhTVZYNc8MS6H4h/r8WRu9MVLqzWAw/lcKR+XSKWLJp6nE9RcKs3vhnRX0PwvNa3l5b6hrLTGAatbZ3G0lAL7N2eJF+GTBO8xSL1XZQV/wDhFqOnanZXej2+qQzQyO09i7IjLGHH+FzE+w/IG+PePcdOcWMNVlA88Hue4OEI3YPB+1JJBbOgWkY2x7chMFVCY447Z6VIo3UlFMhWrOp8KxXHhO413QNNTTrO20QQyOLmBLu43SKXxGgAh8qRfLMZ3bnkZuAHI9w8LX2t6H4e0Sy8SaNr+t3mifEINTshHc6VqLiEwS6fO7mMzSPBJIpjx8qW0iqVYoOKJR9kSUvHdGFOr2j3F2dUgsrS9mlknRbNFhimXOBKZGR1k4KgFYIXI+IPuyK8KSyweOvC13dSedLaXH9NOY1Zm3IpWXaMjJJ3Yya3uueGbPVX/wCRfEfiC5sLy+/q7HVdJ0vVbPJ+xd+XFEZJo8YACFfMGQ0W7dqfgfTrPw7o+lxW0h0QLGPEcNpeRQatHMLe4eNXOd8jJGS6OCAx3K33p/lfoNdGV1/RPDej6RYWc+iWOtTaRrGmXCazDbJFp8Mcyx2EV1cxnzGClnlZwuRLtZRlnOoPBPg7wHZahqGk+D9C0y60+4geCOC0RluzOI8SRSz5aSRiCGX4vl3YG3bny/E+p+M5G8S6EfFEdxqfgyz0K6hs7y/toY7ZoLa51CaLdFDBjdtjdRwjYPl8KuZvGQ/h/wCM9S8R3FeJNBhkfSL7Qta8XaQotdIIhivCgjxkzIVdR5uQNx4bJxM6eLCOHaOWjZt+G3iiXTLTw3oNz4y8KahJJGLmy8MQXd8ktzZSyKsyTQxO8kUaRmRzh4h5eR8LqY9Nt4K0zTIL3WE/p7u5ht3v5ZG81R+YJfhOcthCVaMOcYjY8Yp+IFhL4N8J2Gi+HdP1n4hpI9zr7xwKNKMNj4g1aW4kkW8mQJ+W7JCMFRjeGcRiC28J3uta34y8X+KLrTbe20Xw3a6Zp0dxf6dLaweZbW95LPdFkV4zcMzZzgYEzjDZNZxyqCtvo8fVjLd7L3t/Q3+nwOdV8UqSBp1s8QjcHGPMIOD6jnuOa9oZ38QaDq3iCHVp/B8d6b2S8nsLR4Lh1a2kKt8TqwVQy7mZhNINhJZs0tp3jHwJ/wApeOJ9W8J+F9S1LSNJhEOnaJbalY3VuPLgmfZLNJGyzEsWxA2e+2PnhpvGer+C/Eei6PpfhLxfpXgvXNNhvtWOo6feCNJr6YbU2Wyhkz5LsrqRICc7BHIcb43vWOL0xfstNBrdFJ8X+PfB/wDysIbfxN4t0fX9a12wjgNjpMOn3Nv5LxWHkeW8UYbEkWOXZwGPpjO78M/wzl8H6tqeuaheXOo30dvDFo9jczPpmnRXHmDKxICkrb+I0LEqvJRGLKd4lw8TaGNJ0/xNNZXt9rN/4X1O31G+vHaZbqGOOW2ikKPPIJOFO5xjdx90GcPGNroeh+KdA0e10yaxfWpLi4vJJI2SztoHiZLhGYhdhEzRIcAKrDaSRHujNbVWjTtgL6zo9p4fk8a+KLWa8/q4TpfhLSPJ1HUrYKZQkj75W8nOLdAJApgYoWIB2o3hzr/jC7n8MzXXhiC0fVNUNuvhi1uNQjtZbdJJNNilnZPIWQLAJZIh5jrGYVfEYJXJO2r4rP4S5tn07HKdKB6fNEy6Tdy/K5CfY58I64Nl8aWEkhfZ4hkxMHfHTfJuIDgn0O4V1/jr4ZSaXa+GdQsJbi006ZIZobRxm10ZWikWSZVPNvLGnlxpLhQdqyKOKp8S+Mv6qWZZtKu5byaQO13bPHbNrHYmQN8YzyeW+U5yF5ij0O28N3OteFNJ/wCULf6oLHV9VtNM8L6tYadDPJ4glguoL6G9ufL+0l5LfckqKUMfAYEjjILdpfY6OD8HTFiVFNJJV9nTrFYPCkOhpLc29t4DnIvpryG0sJJ9p8nZJeKYTLDG0pOA6+7JOQNLql9pVlokGm6nZx69az2n9TZanJIr2TzBlSLcjeG3g/MIEllcHHwjO8e6vYt4Y0TUbjU7Mz6brC6ZNqcyGS5aS2trO9ilQ4cCKOJm2eYx4UFn2nO1nT/EfhqPxXpVne65YLoUsN4dTntr+Vr/AO7Wc8KrCXAbmGQ7JIjhcncOA7+3i3d7k26ot1nxlq2raJbabr2lafqepR3L3YvFumhQ7lbygjcxjfA4B5BZskjBcUDHovhix+MWur3jO9bZgSRLxOzKF4GcfQdq0Fzo97qGqaj4Y8Sazcahqnh6dBf2Fy5itLqcQmHzIYwhVRHIEi3KFywVf3aq2+C5R4b1nWxrmveDtE0PS7L+ssd7I32RqN1FkLJ8Y+UfGoZlHwdScBtO18YjTdT8QQ20M2tWd3Y6TJLrGvXZtdYG/Dy8ksGBZVVcKfuX1rN+JL7VLrwV4zXWnuWnv7OOGMy6OscXw/BFjOzA4HHTXP28G3sHH6J63fX3hPVNdTSfNWWG0ubqyMHlvJbuIV8vOOjJlhj+YCo1s4pLOAytJKSsJYd8ZP6CpX+oWV/eCa8k0BLu0ULKtytyjZJwF2/L7kD1GWBtEsXN9bq1vkgRkMSSe+QSfXn1rDxhUUdJg2KeB9Av5vDOj+Lbjw9JJb+HtG1WG9VnEd1fJbSQXFqQRIBGzFZGwOShQn5I1q+Jds73JMbI63MKa8vGPF5GXMUA8KlDNrE82p6rpa6fcaf4b0Cx0aRrEXE95DaTC2nTBPyHJxJJFwjJD5kWQx3YbtHhP8ADbQPHH4i69r2pJEukWOn6hNKsj7nkDGOKPBIyMBFGRtX+zHzr1HUfA/hz8Pdb8L3fhyV9Y8Ha1c2Fh4W06KWHytQjiQ29xqF7bSFlVrOa5tYEfG1JhGHaS5yY66nK3a+NJ5OlnR9s+kZ/4NeIL3QPgW4sPE2iat4P1O70rUX1a4itE1K6k1OKSKSVgbYhf6k/wBKVK7YjvQNlKx2Gh6TDFq2bPa30clvrmgaMy6vY6hq2n6ZbTXWzfJbXAjM6ujuyeHNc0XR/Bh8K6V4T0+JNPh1PS7sQqx/K8uNg2ZRGYsYz9eaAuoYrhG8+3a4dYFOGClI92f3pz+b8FyOMr/7UEf6SfkOKm9jLlb2rOazPl1cP7fNuwZYc+mdvNJ7u0kZPMl2q3UgL0qKhMILYqkmCQeM4FHzSXFxdSGPydpDBQoO7A6CvOH6Xy2PYYFABx0xXMhK8NKe9YJwOe1KgNrfAFfS4JO3H1rO5KNyv5mEYwT1yelOLkS3gQQBCQjY70umQSABh8yJ/iKc7QXOT8GDjkfJg8HNKdIh8yOKVjgbPkJ3Y59BRM/hUTMLlbmKUjkZPUeu6h7awjtZQ5lxwPNLR4Ap2YOAVb4gCT3Hf61ktZvr42ckN3O02RhAW/+3u/trU+JJFhkf+mjhEiSJGQgLn/CCfXtn0pyiqhJhafGHFzlFtD8AJsxyY2+pP1zy9sAx0yNi3vNqkRIYhQ6gLkkKvGcmtPNs8EaZcSLZNe28YV1VCG5PK7e/QnOB7EGstoP4W+Kr/VJ9O1rT9M0lHDSWsy/HM0aqzNtTO5eFlUYOCODjCO5n4lvdF8c6Rqnhie1u4b6GO4E5kt2eUOEOGOCCOR1BI5yD2rFTzZnqQ1O14VG3z/cBz+GNt4I8J3Pi5/GOqX0Oka9p3hqLX/J0ue8WLzFgGrPBcTWLMEjJnkjGBK0RVFJL1j/APh9Y+ItA/Duft7K60zxNbaHqNq2oad/XG3UrZJLOWNllkj/ABO/lPGwKj4GdGtFUn4NobE/hleLaL/h6y8FNJ4qfXn8K6trPiPRb2fVb2a8m1CNLK5S1hufPheKxRBMzuNwOzZI8m32L0Tc6j4c1xP+Sn8K9Y8Ef8v+G9Ps7m38J+MPDHh3V/DF+1vFu8N29wJ4Xji+AyKKZd3p7P8AaWqy6wY3xjOl8IwOL1V7xLaOeLa11BfF1z4lLXUGnp+F/hNPAd3FJHd6lPY3stvpvhnUbm42xNdWk8crRZd8gAhHULkLF8Q1J5vGurW9x4R1Hxn4d1fXQfDkmjCTa6LHJHewWbr5Udx/fBGCxwCwB7Y96kh8HeCNJttO8M674V0WTVdV+03Or2Nn4W8T3Mh09WlKG7gtrlGJzJBa3CMPiPxKMbgRRa8LadfeIvAM/i7xKdV/qLMafr+o6v8AZrPxGxUtCjQwK21TKRKfOZlNu5LFUbfITxn7aFLy9N2/CJL7CRd+K5QJLnXyQhyJzGG2BhwQcV7S4tdOvaQ2h1u6vLOJJ1u4J45YVlUYWQqOHxwrKF6kHuc1yLxtFY6RrOi3n4ieLNOsvL3aVquoT69YWGmEoGxJbq9iBBuBLFVXdxkcWj8UQadHcax4g8VaiNNjcW99FqN3PLc3SyDMaBSTJJ8LbOGBAHJOBFbHs7vdFPTGb6Pq94WuZf6FXyI3ntdRFJ4XkzGg6gOwOO4GazT+I9Z0vUfF9zYam95p1nJpnhqPVGWS5hnazWd7eS4ibAMM73KOAQdkSNGG5g9vXemkOw/VdU8b6t4j8Sp4q1fUNV8R3+lz6beTTXH9SzSW6MIgWXLbf9TtGXbuC9K7Y2mveBrjXLHTvE8Z8Q67o0XiG1uo9T1Jbd3LQ/bBdPJBZXTKrqSs88DSSCPAI8tZWKJ/Dek+KfE5jtpLqzg8c6PetDNbaEJo5LMQpJJE+xJLiKP8yGNJASdxaYSKd7EGt0r8Mbi3vPC/jL+p8Y/07WzaZ4p/qbq6SfZOYpLeGIFzBGplZTHKdsgMcxRUZtfqJcV5T+hLo36x4ovdUjs5vFg1fWzJHeD7Hcak1qzRz3k/nMrwtsIVpdrpJGAWIJ+8VLx1eXHiz4kz+H4dW8Ty+B9JubWfUI9UeSwnHmLGftHnybYdvJaKV2HQbhUf7f8ACKKPVPDvhe68CeE9J+01dtY5QrCTCHGWjhZlBYjJ4/T+r8V6j4m1LQ7f+v0nxP8A0t8bU3A8K6ddIYZGMC23/wDNlPJEe9QvKDcMnNWWpGBvNOu/7lLeGEEoNp+XlVyS5ycfMNuMZz8WOc24/EhNJOl+HPDcV4Ylvp3trWGzaNE8QyXCxb2x5PEMaFn2c8YJxRGnaHYa34fOmahc6m9nqMKz3el6ha2ixWJTGwRzPKJQXU5jL4AO5lGNlvPxG0/wHr/hzS9OU6L4b8M3eo3S+LpEuoNQNrO7xpa3kUJWZY2VJGJVh5GD8S4KTWW4Uz4S3bff8HJqfh/QdT8DftR1Hw14Y+26PJ4TubfT9YF5q11qt1d3N1DdXTz/AJX8vfLLKM8Lv+x9aXeFfD934I8IfivNYaF4Y1O38fQwHWZtYtfMeO0v1A3NvfOVe1RwwbB9mzjh7Pw/Y+NvF3hDX/H3gnw54stb/VrSWz1+5uP6i+1C3uFk2OwGSJ1dWGAASMjZnFKpvDXhO6t7xPDNha/8XNJ4kWzd9y2+teGL+O6ieWOEhY5LaTLbh/bKD12jfZjrFxlJfqh4+r+IvCer/wBH/wAzG+0ePbpum6rfa8oim0uScJ5Yl5aNsOOm5epJ+1MfwF8X6Bp/hyys9Y8H2Wn6PevcMVgjCo4CZIGeQ7YzlS3b1FDbLFrJrfha8vLLV7+SLT7K4tpLaSKWylSSLd9t2uq7TLGnmNlgTuyBgkHBdN4D1ux1KWGxvYpJdQh8RTPOLaLYxtXuHRcbW2Dax5+UdcY+ZHI2zNtdGxKUVvT/AAOdQ/Dnw1q19Pd6OuveE9QtLgw6L4Yv7xLzT9Mc8qkG5lc7XdTGHJKNggMOjE91nwvLrvh+20b4GnXiTTNJv9L1LxtpkV9ca/ommQs1lE6b/MdFwqFHO5tqBmKRlPr3wxrH4P2/gLSvAHhJ9O8T+GNYuLPWLXwAZ5b5Lt4FY6jcyN8ItbJ7bBZFKAyOEDtJ6b4g8LfhgureO/EGr/iJoWkrpWj3I1Eane/1Pl2yLKZJJLOQnK/zNxaQ9AAQKSuUvKSvz/w9VDhQl4NqKR21UNIeIwQqYJyMYBxzk1k7LQtT0jx94/8ATmNPEOlXFrLpOo6qktl9nuNKjuBCJDdMm3a1yUU4OVELhQr7Kx+neLfGf/Jt8fwNa2fhKxsdS8SW+j3Ftp8xXVEu9JgdnVonKkQSKu1ldgQGYEdqu1jw/wCJ/AniHQrf4MeI7yG40XQdN1D7Zq2jWTw3VrFeqxtQ0NjdRb1ePDHey55Jz4rO5RSb6r0LzI0D+DdJ8O6ZfatreKJ8TaJJ4i1Ce8vdSl8zVbe8k8/yluJpmjllhCwiBVnaN8/Ex3MJJY5PwM8P6n4Y8P6TrWk2/jCTw7aQ6xpj7tSa4vRG87GJBKpuGO4qVxtUnJPQK+j8OeF7C88R6p40n8KeBJPCvhbSI9D8R3V7OPteqXXmFLRdQKYZbeJwwCnK/EChLllzPF4Nv/E1tYeI/FeqaNb6FpmiabY6A2pRvqlz9kiVEhvrkKnlwyEYO8krIoKkkglfuaeMjV9jKPqSb6J9e5ov+cTYz6jp1v8AiDpn4b2N7Bq+n6hqNu1xpt1fAK9ne3cpNuFVh8F3LcIOxjV9yqwP4d+FfwUu/B3g9dG8K+HNP8UXvjjR9DWG5i8gW73N9CJbmeNRiMvKyrhlEq/ARuqWi/hTqOp+GNSvtK8V+P49X07xJfm4gvPH/nT2VnawQSJdLpcSS2r7riQzKgQKBs+IHdt7rxv+Fg8PeHdN/wCVL8NPFGieQs9n4w8P/b2WXdD5kd79qeSQy8rjkjcMhfgFfYy1+pNI/PT4lfs/+Gfww1i/vvCOn+B/B2m6J4mt7XXfE3ihru7ulkvdFmhnhg025mMZvLVLhSm1F8gEYGfxDqv4JfhV+O/4J6zreg+H/BejyX9xJJN468LaqdVWG9hht1FpfWMSw/Y7pIx5ZVyzkRZLIqCK/iTIlVo9l4aPJeO3vN+/JrfF5+DcP/LO8efhV4g8JaLq2h+HfhXBo/ge+0q+kkbxAjOtrp6xaJcnBBiIe8e3+E8KYd3+1N7Tw7+FvhHXfFPwy8I+BfG/g/8ADrxLqfh/xLpb6tLF4q1XxFFLpul2y20VlaXWl6dFDJJfTTXEFoqM8Hl6bJLWbSSTdLcnSqPVH7J/+Dv6V4f8U+BbTxDbaCmoy6eo/A97BZLjjudXtX22OOVKRGTGp5L4YDv8QP45/iD/AMNOeMbXwxf6/L4m0DUf/9k="
              alt="學生活動照片"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/10 text-white px-4 py-2 text-sm mb-6 backdrop-blur-sm">
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
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-50"></div>
            
            <div className="space-y-16">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-2">2014年 (103學年度)</h3>
                    <p className="text-blue-200">設立行銷研究所</p>
                    <p className="text-sm text-blue-100 mt-2">開始培養行銷碩士人才</p>
                  </div>
                </div>
                
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-slate-800 shadow-lg flex items-center justify-center relative z-10">
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
                
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full border-4 border-slate-800 shadow-lg flex items-center justify-center relative z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <div className="w-1/2 pr-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
  );
};

export default About;
