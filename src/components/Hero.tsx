
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Play } from "lucide-react";
import { useState } from "react";

// Logo 檔案（建議為長條型標準橫式Logo, 如你給的圖）
const LOGO = "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png"; // 如有橫式長條型Logo可改
// 你上傳的圖檔有需要可直接改路徑（若有橫幅Logo請補圖）

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-20">
        {/* 左側 Logo + 標語 */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl md:pr-8 mb-8 md:mb-0">
          {/* 長條型Logo，明顯放大且下移 */}
          <img
            src={LOGO}
            alt="Logo"
            className="w-48 md:w-64 mb-6 md:mb-8"
            style={{ background: "none", boxShadow: "none", border: "none", display: "block" }}
          />

          {/* 創新行銷思維徽章 */}
          <Badge className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 border border-teal-200 rounded-full px-5 py-2 mb-5 text-base flex items-center font-semibold">
            <Sparkles className="w-5 h-5 mr-2" />
            創新行銷思維
            <Zap className="w-5 h-5 ml-2" />
          </Badge>

          <h1 className="font-black text-3xl md:text-5xl text-slate-800 leading-tight mb-4">
            打造未來品牌行銷人才
          </h1>
          <div className="text-lg md:text-xl text-slate-600 font-medium mb-4">
            我們不只學行銷，
            <br />
            <span className="block text-blue-600 font-bold text-xl md:text-2xl mt-2">
              更讓你成為企業最想要的領袖型人才！
            </span>
          </div>
        </div>
        {/* 右側 影片/主視覺，與Logo距離加大 */}
        <div className="flex-1 flex items-center justify-center max-w-2xl w-full mt-4 md:mt-0">
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
                      bg-white/90 hover:bg-blue-100 text-teal-600
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
