
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-[75vh] md:min-h-[88vh] bg-slate-900 flex items-end overflow-hidden">
      {/* 彩色光暈/背景層延伸品牌色 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-tr from-teal-600/30 to-blue-700/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-br from-blue-300/30 to-purple-500/25 blur-2xl" />
      </div>

      {/* 影片區直接滿版（含Play按鈕/覆蓋層） */}
      <div className="relative w-full h-[46vw] max-h-[88vh] flex items-center justify-center z-10">
        {!showVideo ? (
          <>
            <img
              src="https://img.youtube.com/vi/kcLHZOMzuXE/maxresdefault.jpg"
              alt="系所介紹影片"
              className="w-full h-full object-cover object-center transition-opacity"
              style={{
                borderRadius: "0 0 2.5rem 2.5rem",
                minHeight: "260px",
                maxHeight: "88vh",
                width: "100%",
              }}
            />
            {/* Play 按鈕居中 */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/45 transition z-20 group">
              <button
                onClick={() => setShowVideo(true)}
                aria-label="播放介紹影片"
                className="bg-white/25 hover:bg-white/40 text-white border-2 border-white/30 backdrop-blur-md rounded-full w-28 h-28 flex items-center justify-center hover:scale-105 group transition-all duration-200"
              >
                <Play className="w-14 h-14 group-hover:scale-110 transition-transform" fill="currentColor" />
              </button>
            </div>
            {/* 影片最下方，半透明介紹文疊加 */}
            <div className="absolute bottom-0 left-0 right-0 py-5 px-6 md:px-12 bg-gradient-to-t from-slate-900/90 via-slate-800/60 to-transparent z-30 rounded-b-3xl">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-sm flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-teal-500/35 to-blue-500/45 text-teal-200 border border-teal-400/20 rounded-full px-5 py-1 my-1 text-base font-semibold flex items-center">
                      <Sparkles className="w-5 h-5 mr-1" />
                      創新行銷思維
                      <Zap className="w-5 h-5 ml-1" />
                    </Badge>
                  </h1>
                  <div className="text-lg md:text-xl text-slate-200/90 font-medium mt-2 max-w-xl drop-shadow">
                    在這裡，我們不只學習行銷，
                    <span className="block text-teal-100/90 font-semibold mt-1">我們創造未來商業的無限可能</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  {/* 可加 Logo 半透明水印(選擇性) */}
                </div>
              </div>
              {/* 底標題 */}
              <div className="mt-4">
                <div className="text-white font-bold text-xl md:text-2xl drop-shadow">系所介紹影片</div>
                <div className="text-slate-300 text-base">發現我們的創新教學與無限潛力</div>
              </div>
            </div>
          </>
        ) : (
          <iframe
            src="https://www.youtube.com/embed/kcLHZOMzuXE?autoplay=1"
            title="系所介紹影片"
            className="w-full h-full rounded-b-3xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              minHeight: "260px",
              maxHeight: "88vh",
              width: "100%",
              borderRadius: "0 0 2.5rem 2.5rem",
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
