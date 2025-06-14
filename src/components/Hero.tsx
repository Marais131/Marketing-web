
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Sparkles, Play, Star } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 精緻的背景漸層 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      
      {/* 高級幾何背景圖案 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.01)_0%,transparent_25%,transparent_75%,rgba(249,115,22,0.01)_100%)]"></div>
        
        {/* 浮動裝飾元素 */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-orange-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-orange-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* 精緻的網格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-7xl mx-auto">
          {/* 精緻的頂部標章 */}
          <div className="mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-orange-50 text-blue-800 border border-blue-200/30 hover:shadow-lg hover:scale-105 transition-all duration-500 text-base px-10 py-4 rounded-full font-medium backdrop-blur-sm">
              <Sparkles className="w-5 h-5 mr-3 text-orange-500" />
              全台唯一品牌端甲方思維
            </Badge>
          </div>

          {/* 主標題區域 */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight tracking-tight">
              中國文化大學
            </h1>
            <div className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-700 mb-10 tracking-wide">
              行銷學系 <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text font-medium">/ 行銷研究所</span>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              <p className="text-2xl md:text-3xl text-slate-600 font-light leading-relaxed">
                培養具備消費者心理學與數位行銷素養的
                <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text font-medium">專業人才</span>
              </p>
              <p className="text-xl md:text-2xl text-slate-500 font-light">
                打造品牌思維 × 創新行銷的未來領袖
              </p>
            </div>
          </div>

          {/* 特色標籤 */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {["消費者心理學", "數位行銷素養", "品牌策略思維", "學碩一貫方案"].map((feature, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="border-slate-300/50 text-slate-700 bg-white/90 backdrop-blur-sm px-8 py-4 text-lg hover:bg-slate-50 hover:shadow-lg transition-all duration-300 rounded-full"
              >
                {feature}
              </Badge>
            ))}
          </div>

          {/* CTA 按鈕區 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-16 py-6 text-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl hover:scale-105"
            >
              了解招生資訊
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-900/20 text-blue-900 bg-white/80 backdrop-blur-sm hover:bg-blue-50 px-16 py-6 text-xl font-medium rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Play className="w-6 h-6 mr-3" />
              觀看系所介紹
            </Button>
          </div>

          {/* 統計數據 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-6xl mx-auto">
            {[
              { number: "20+", label: "專業師資", color: "from-blue-600 to-blue-700", icon: "👨‍🏫" },
              { number: "500+", label: "在校學生", color: "from-orange-600 to-red-600", icon: "🎓" },
              { number: "95%", label: "就業率", color: "from-green-600 to-emerald-600", icon: "💼" },
              { number: "10+", label: "產學合作", color: "from-purple-600 to-violet-600", icon: "🤝" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 text-4xl">{stat.icon}</div>
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium tracking-wide text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 精緻的滾動指示器 */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="group flex flex-col items-center text-slate-400 hover:text-slate-600 transition-all duration-500"
        >
          <div className="w-8 h-12 border-2 border-slate-300 rounded-full flex justify-center mb-4 group-hover:border-slate-400 transition-colors backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-slate-400 rounded-full mt-3 animate-pulse group-hover:bg-slate-600"></div>
          </div>
          <ArrowDown className="w-5 h-5 animate-bounce" />
          <span className="text-sm mt-3 font-medium tracking-wide">探索更多</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
