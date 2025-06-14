
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Users, BookOpen, Award, TrendingUp, Play, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* 創新背景設計 */}
      <div className="absolute inset-0">
        {/* 動態幾何背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900/40 to-blue-900/60"></div>
        
        {/* 浮動幾何元素 */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-teal-300/40 to-cyan-300/40 rounded-full blur-md"></div>
        
        {/* 網格背景 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPHN2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="relative z-20 container mx-auto px-6 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* 創新佈局：對角線設計 */}
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            
            {/* 左側內容區 - 斜角設計 */}
            <div className="lg:col-span-7 space-y-8 transform lg:rotate-1">
              <div className="transform lg:-rotate-1">
                <Badge className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 border border-teal-400/30 px-8 py-3 rounded-full mb-8 text-sm font-medium backdrop-blur-sm inline-flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  創新行銷思維
                  <Zap className="w-4 h-4 ml-2" />
                </Badge>
                
                <div className="relative">
                  <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                    <span className="block text-white mb-2">重塑未來</span>
                    <span className="block bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      行銷新境界
                    </span>
                  </h1>
                  
                  {/* 裝飾線條 */}
                  <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-teal-400 to-blue-400 rounded-full"></div>
                </div>
                
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  在這裡，我們不只學習行銷
                  <br />
                  <span className="text-teal-400 font-bold">我們創造未來商業的無限可能</span>
                </p>
              </div>

              {/* 動態統計卡片 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { number: "20+", label: "頂尖師資", icon: Users, color: "from-teal-400 to-cyan-400" },
                  { number: "500+", label: "在校菁英", icon: BookOpen, color: "from-blue-400 to-indigo-400" },
                  { number: "95%", label: "就業率", icon: TrendingUp, color: "from-green-400 to-emerald-400" },
                  { number: "∞", label: "創新力", icon: Award, color: "from-purple-400 to-pink-400" }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-rotate-2">
                      <div className={`w-8 h-8 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform`}>
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.number}
                      </div>
                      <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA 按鈕 - 創新佈局 */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  size="lg" 
                  asChild
                  className="group bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 hover:from-teal-700 hover:via-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg shadow-2xl border-0 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/admissions">
                    <span>探索無限可能</span>
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild
                  className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-6 text-lg backdrop-blur-sm rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/about">系所深度探索</Link>
                </Button>
              </div>
            </div>

            {/* 右側影片區域 - 創新懸浮設計 */}
            <div className="lg:col-span-5 relative">
              <div className="relative transform lg:rotate-3 hover:rotate-1 transition-transform duration-700">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-800/50 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-500">
                  {!showVideo ? (
                    <>
                      <img 
                        src="https://img.youtube.com/vi/kcLHZOMzuXE/maxresdefault.jpg"
                        alt="系所介紹影片"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-center justify-center">
                        <Button
                          onClick={() => setShowVideo(true)}
                          size="lg"
                          className="group bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 backdrop-blur-sm rounded-full w-24 h-24 p-0 hover:scale-110 transition-all duration-300"
                        >
                          <Play className="w-10 h-10 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                        </Button>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white font-bold text-xl mb-2">系所介紹影片</h3>
                        <p className="text-slate-300 text-sm">發現我們的創新教學與無限潛力</p>
                      </div>
                    </>
                  ) : (
                    <iframe
                      src="https://www.youtube.com/embed/kcLHZOMzuXE?autoplay=1"
                      title="系所介紹影片"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
                
                {/* 裝飾元素 */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部波浪過渡 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
