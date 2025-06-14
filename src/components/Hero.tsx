
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 -left-8 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-400/30 hover:bg-orange-500/30 text-sm px-4 py-2">
            全台唯一品牌端甲方思維
          </Badge>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent">
              中國文化大學
            </span>
            <br />
            <span className="text-3xl md:text-5xl font-medium text-blue-200">
              行銷學系 / 行銷研究所
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            培養具備消費者心理學與數位行銷素養的專業人才<br />
            <span className="text-orange-300 font-medium">打造品牌思維 × 創新行銷的未來領袖</span>
          </p>

          {/* Key features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-4 py-2">
              消費者心理學
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-4 py-2">
              數位行銷素養
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-4 py-2">
              品牌策略思維
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-4 py-2">
              學碩一貫方案
            </Badge>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-3 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              了解招生資訊
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-3 text-lg font-medium"
            >
              觀看系所介紹
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">20+</div>
              <div className="text-sm text-blue-200">專業師資</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">500+</div>
              <div className="text-sm text-blue-200">在校學生</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">95%</div>
              <div className="text-sm text-blue-200">就業率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">10+</div>
              <div className="text-sm text-blue-200">產學合作</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
        <span className="block text-sm mt-2">了解更多</span>
      </button>
    </section>
  );
};

export default Hero;
