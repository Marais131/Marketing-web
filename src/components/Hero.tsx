
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Play } from "lucide-react";
import { useState } from "react";

// Logo 檔案
const LOGO = "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full bg-white">
      <div className="container mx-auto px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between">
        {/* 左側 Logo + 標語 */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl md:pr-10 mb-10 md:mb-0">
          <img
            src={LOGO}
            alt="Logo"
            className="w-24 md:w-32 mb-6 md:mb-10 rounded-xl bg-white border shadow"
            style={{ boxShadow: "0 4px 24px 0 rgba(24, 126, 179, 0.06)" }}
          />
          <Badge className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 border border-teal-200 rounded-full px-5 py-2 mb-4 text-base flex items-center font-semibold">
            <Sparkles className="w-5 h-5 mr-2" />
            創新行銷思維
            <Zap className="w-5 h-5 ml-2" />
          </Badge>
          <h1 className="font-black text-3xl md:text-4xl lg:text-5xl text-slate-800 leading-tight mb-4">
            打造未來品牌行銷人才
          </h1>
          <div className="text-lg md:text-xl text-slate-600 font-medium mb-6 md:mb-10">
            我們不只學行銷，<br />
            <span className="block text-blue-600 font-bold text-xl md:text-2xl mt-2">
              更讓你成為企業最想要的領袖型人才！
            </span>
          </div>
          {/* 行動按鈕預留空間（可以加入聯絡、了解更多等） */}
        </div>
        {/* 右側 影片/主視覺 */}
        <div className="flex-1 flex items-center justify-center max-w-2xl w-full">
          <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden bg-slate-50 border border-slate-100">
            {!showVideo ? (
              <>
                <img
                  src="https://img.youtube.com/vi/kcLHZOMzuXE/maxresdefault.jpg"
                  alt="系所介紹影片"
                  className="w-full h-full object-cover object-center min-h-[200px] aspect-video transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/30">
                  <button
                    onClick={() => setShowVideo(true)}
                    aria-label="播放介紹影片"
                    className="
                      bg-white/80 hover:bg-blue-100 text-teal-600
                      border-2 border-white rounded-full
                      w-20 h-20 flex items-center justify-center hover:scale-105 transition shadow-xl
                    "
                  >
                    <Play className="w-12 h-12" fill="currentColor" />
                  </button>
                </div>
              </>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/kcLHZOMzuXE?autoplay=1"
                title="系所介紹影片"
                className="w-full h-full aspect-video rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  minHeight: "200px",
                  width: "100%",
                  borderRadius: "1rem",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
