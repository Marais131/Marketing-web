
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Sparkles, Zap, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900/35 to-blue-900/55 z-0"></div>
      {/* 幾何裝飾 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-400/30 to-blue-400/20 rounded-full blur-xl animate-pulse z-0"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-lg"></div>

      <div className="relative z-20 container mx-auto px-3 pt-8 pb-2 md:pt-12 md:pb-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-7">
          {/* 左側LOGO與文字 */}
          <div className="lg:w-1/2 flex flex-col gap-7 items-center lg:items-start mt-4 lg:mt-0">
            <img
              src="/lovable-uploads/603de662-92e7-46c2-b6f8-d3f7e42e804e.png"
              alt="系所 Logo"
              className="w-48 md:w-60 lg:w-64 rounded-xl drop-shadow-lg mb-2 mt-1"
            />
            <Badge className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 border border-teal-400/30 px-7 py-2 rounded-full mb-2 text-base font-semibold flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              創新行銷思維
              <Zap className="w-5 h-5 ml-2" />
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow mb-2">
              重塑未來
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                行銷新境界
              </span>
            </h1>
            <p className="text-base md:text-xl text-slate-300 leading-normal md:leading-relaxed mb-3 font-medium max-w-lg">
              在這裡，我們不只學習行銷
              <span className="block text-teal-300 font-bold mt-2">我們創造未來商業的無限可能</span>
            </p>
            {/* CTA 按鈕 */}
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button 
                size="lg" 
                asChild
                className="group bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 hover:from-teal-700 hover:via-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-2xl rounded-2xl hover:scale-105 transition-all"
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
                className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm rounded-2xl hover:scale-105 transition"
              >
                <Link to="/about">系所深度探索</Link>
              </Button>
            </div>
          </div>

          {/* 右側主視覺影片（放大＆壓縮上下空間＋提升畫面美感） */}
          <div className="lg:w-1/2 w-full flex items-center justify-center mt-0">
            <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-2xl group"
              style={{
                minHeight: "240px",
                maxHeight: "68vh", // 桌機時最多快佔滿螢幕
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              {!showVideo ? (
                <>
                  <img 
                    src="https://img.youtube.com/vi/kcLHZOMzuXE/maxresdefault.jpg"
                    alt="系所介紹影片"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/35 to-transparent flex items-center justify-center z-10">
                    <Button
                      onClick={() => setShowVideo(true)}
                      size="lg"
                      className="group bg-white/25 hover:bg-white/40 text-white border-2 border-white/30 backdrop-blur-md rounded-full w-24 h-24 p-0 hover:scale-110 transition"
                    >
                      <Play className="w-12 h-12 group-hover:scale-110 transition-transform" fill="currentColor" />
                    </Button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 className="text-white font-bold text-2xl mb-2 drop-shadow">系所介紹影片</h3>
                    <p className="text-slate-300 text-base">發現我們的創新教學與無限潛力</p>
                  </div>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/kcLHZOMzuXE?autoplay=1"
                  title="系所介紹影片"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    minHeight: "240px",
                    maxHeight: "68vh",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* 底部波浪過渡 */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white opacity-90">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
