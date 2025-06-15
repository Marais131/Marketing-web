
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Play } from "lucide-react";
import { useState } from "react";

// 使用你的 logo，作為 Hero 區大圖示（非水印）
const LOGO = "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      className="
        relative w-full min-h-[75vh] md:min-h-[88vh] bg-slate-900
        flex flex-col md:flex-row items-stretch overflow-hidden
        pt-4 md:pt-0
      "
    >
      {/* 左側 LOGO 區：電腦版明顯、手機版適中 */}
      <div className="absolute z-20 left-4 top-4 md:static md:relative flex flex-col justify-center items-center md:items-start md:w-[420px] max-w-xs md:max-w-none">
        <img
          src={LOGO}
          alt="Logo"
          className="
            w-24 h-auto md:w-32 lg:w-40
            mb-3 md:mb-6
            drop-shadow-md
            rounded-lg bg-white/70
            border-2 border-white/70
            p-1
          "
          // Logo 自然醒目但非浮水印、不會跟其他內容疊加
        />
        <div className="hidden md:block">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-sm flex items-center gap-3">
            <Badge className="bg-gradient-to-r from-teal-500/35 to-blue-500/45 text-teal-200 border border-teal-400/20 rounded-full px-5 py-1 my-1 text-base font-semibold flex items-center">
              <Sparkles className="w-5 h-5 mr-1" />
              創新行銷思維
              <Zap className="w-5 h-5 ml-1" />
            </Badge>
          </h1>
          <div className="text-lg md:text-xl text-slate-200/90 font-medium mt-2 max-w-xs drop-shadow">
            在這裡，我們不只學習行銷，
            <span className="block text-teal-100/90 font-semibold mt-1">
              我們創造未來商業的無限可能
            </span>
          </div>
        </div>
      </div>
      {/* 右側/主要區：影片區 */}
      <div
        className="
          flex-1 relative z-10 flex flex-col justify-end
          max-h-[88vh]
        "
        style={{ minWidth: 0 }}
      >
        {/* 背景漸層增加高級感 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/70 to-slate-900/80 z-0 pointer-events-none" />
        <div
          className="
            relative w-full h-[40vw] max-h-[88vh] flex items-center justify-center
            rounded-b-3xl md:rounded-bl-none md:rounded-tr-3xl overflow-hidden
            z-10
          "
        >
          {!showVideo ? (
            <>
              <img
                src="https://img.youtube.com/vi/kcLHZOMzuXE/maxresdefault.jpg"
                alt="系所介紹影片"
                className="
                  w-full h-full object-cover object-center transition-opacity
                  min-h-[260px] max-h-[88vh]
                  aspect-video
                "
                style={{ borderRadius: "0 0 2.5rem 2.5rem", width: "100%" }}
              />
              {/* Play按鈕置中，美觀且不擋文字 */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 transition z-20 group">
                <button
                  onClick={() => setShowVideo(true)}
                  aria-label="播放介紹影片"
                  className="
                    bg-white/25 hover:bg-white/40 text-white border-2 border-white/30 backdrop-blur-md
                    rounded-full w-28 h-28 flex items-center justify-center hover:scale-105 group transition-all duration-200
                  "
                >
                  <Play className="w-14 h-14 group-hover:scale-110 transition-transform" fill="currentColor" />
                </button>
              </div>
            </>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/kcLHZOMzuXE?autoplay=1"
              title="系所介紹影片"
              className="
                w-full h-full rounded-b-3xl md:rounded-bl-none md:rounded-tr-3xl
                aspect-video
              "
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
        {/* 移動端主要標題+內文下拉到影片下方 */}
        <div
          className="
            md:hidden px-6 py-5 bg-gradient-to-t from-slate-900/95 via-slate-800/50 to-transparent
            z-30 relative rounded-b-3xl
            -mt-16
          "
        >
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <Badge className="bg-gradient-to-r from-teal-500/35 to-blue-500/45 text-teal-200 border border-teal-400/20 rounded-full px-5 py-1 my-1 font-semibold flex items-center">
              <Sparkles className="w-5 h-5 mr-1" />
              創新行銷思維
              <Zap className="w-5 h-5 ml-1" />
            </Badge>
          </h1>
          <div className="text-base text-slate-200/90 font-medium mt-2">
            在這裡，我們不只學習行銷，
            <span className="block text-teal-100/90 font-semibold mt-1">
              我們創造未來商業的無限可能
            </span>
          </div>
        </div>
        {/* 影片下方介紹 */}
        <div
          className="
            px-6 md:px-12 py-5 bg-white bg-opacity-80 backdrop-blur-xl
            border-b border-slate-100/70
            rounded-b-3xl
            flex flex-col items-start gap-1
          "
        >
          <div className="text-slate-800 font-bold text-base md:text-xl">系所介紹影片</div>
          <div className="text-slate-600 text-sm md:text-base">發現我們的創新教學與無限潛力</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
