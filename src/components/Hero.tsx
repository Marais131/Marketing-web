
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Sparkles, Play } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Sophisticated background pattern */}
      <div className="absolute inset-0">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(59,130,246,0.02)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.02)_87.5%,rgba(59,130,246,0.02)),linear-gradient(150deg,rgba(59,130,246,0.02)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.02)_87.5%,rgba(59,130,246,0.02)),linear-gradient(30deg,rgba(59,130,246,0.02)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.02)_87.5%,rgba(59,130,246,0.02)),linear-gradient(150deg,rgba(59,130,246,0.02)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.02)_87.5%,rgba(59,130,246,0.02))] bg-[length:80px_80px]"></div>
        
        {/* Elegant floating elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/5 w-1 h-1 bg-orange-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-blue-500/25 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Refined header badge */}
          <div className="mb-12">
            <Badge className="mb-4 bg-blue-900/5 text-blue-800 border border-blue-200/50 hover:bg-blue-900/10 text-sm px-8 py-3 rounded-full font-medium transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              全台唯一品牌端甲方思維
            </Badge>
          </div>

          {/* Clean, professional typography */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 leading-tight tracking-tight">
              中國文化大學
            </h1>
            <div className="text-2xl md:text-4xl lg:text-5xl font-light text-slate-700 mb-8 tracking-wide">
              行銷學系 <span className="text-orange-600 font-medium">/ 行銷研究所</span>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                培養具備消費者心理學與數位行銷素養的
                <span className="text-orange-600 font-medium">專業人才</span>
              </p>
              <p className="text-lg md:text-xl text-slate-500 font-light">
                打造品牌思維 × 創新行銷的未來領袖
              </p>
            </div>
          </div>

          {/* Professional feature highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["消費者心理學", "數位行銷素養", "品牌策略思維", "學碩一貫方案"].map((feature, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="border-slate-300 text-slate-700 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm hover:bg-slate-50 transition-all duration-300 shadow-sm"
              >
                {feature}
              </Badge>
            ))}
          </div>

          {/* Clean CTA section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button 
              size="lg" 
              className="bg-blue-900 hover:bg-blue-800 text-white px-12 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
            >
              了解招生資訊
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-900 text-blue-900 bg-white hover:bg-blue-50 px-12 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Play className="w-5 h-5 mr-2" />
              觀看系所介紹
            </Button>
          </div>

          {/* Professional statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {[
              { number: "20+", label: "專業師資", color: "text-blue-600" },
              { number: "500+", label: "在校學生", color: "text-orange-600" },
              { number: "95%", label: "就業率", color: "text-green-600" },
              { number: "10+", label: "產學合作", color: "text-purple-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="group flex flex-col items-center text-slate-400 hover:text-slate-600 transition-all duration-300"
        >
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center mb-3 group-hover:border-slate-400 transition-colors">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse group-hover:bg-slate-600"></div>
          </div>
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="text-xs mt-2 font-medium tracking-wide">探索更多</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
