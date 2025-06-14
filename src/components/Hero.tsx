
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-orange-900/30"></div>
        
        {/* Floating orbs with glass morphism */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-12 w-80 h-80 bg-gradient-to-br from-blue-400/25 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Glass morphism container */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Premium badge with glass effect */}
          <div className="mb-8 flex justify-center">
            <Badge className="mb-2 bg-white/10 backdrop-blur-xl text-orange-300 border border-white/20 hover:bg-white/15 text-sm px-6 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2" />
              全台唯一品牌端甲方思維
            </Badge>
          </div>

          {/* Premium typography with enhanced styling */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent drop-shadow-2xl">
              中國文化大學
            </span>
            <br />
            <span className="text-4xl md:text-6xl font-light text-slate-200 tracking-wide">
              行銷學系 <span className="text-orange-300 font-medium">/ 行銷研究所</span>
            </span>
          </h1>

          {/* Enhanced subtitle with better typography */}
          <div className="mb-12 space-y-4">
            <p className="text-2xl md:text-3xl text-blue-100 font-light leading-relaxed">
              培養具備消費者心理學與數位行銷素養的
              <span className="text-orange-300 font-medium">專業人才</span>
            </p>
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto">
              打造品牌思維 × 創新行銷的未來領袖
            </p>
          </div>

          {/* Premium feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["消費者心理學", "數位行銷素養", "品牌策略思維", "學碩一貫方案"].map((feature, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="border-white/20 text-white bg-white/5 backdrop-blur-md px-6 py-3 text-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {feature}
              </Badge>
            ))}
          </div>

          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 px-10 py-4 text-lg font-medium shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 rounded-full"
            >
              了解招生資訊
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 px-10 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
            >
              觀看系所介紹
            </Button>
          </div>

          {/* Premium stats with enhanced styling */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "20+", label: "專業師資" },
              { number: "500+", label: "在校學生" },
              { number: "95%", label: "就業率" },
              { number: "10+", label: "產學合作" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-orange-400/20 blur-sm group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                </div>
                <div className="text-sm text-slate-300 mt-2 font-light tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="group flex flex-col items-center text-white/80 hover:text-white transition-all duration-300"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mb-3 group-hover:border-white/50 transition-colors">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse group-hover:bg-white/70"></div>
          </div>
          <ArrowDown className="w-5 h-5 animate-bounce" />
          <span className="text-xs mt-2 font-light tracking-wide">了解更多</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
