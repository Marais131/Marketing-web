
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] bg-slate-900 overflow-hidden flex items-center py-8 md:py-0">
      {/* 主背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900/25 to-blue-900/50 z-0" />
      {/* 柔和藍綠光暈 */}
      <div className="absolute top-24 left-10 w-36 h-36 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-2xl z-0" />
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl" />

      {/* 主內容區塊 */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-0 md:gap-8">
        {/* 左側文字區 */}
        <div className="md:w-[42%] w-full flex flex-col md:items-start items-center gap-6 md:gap-10 mb-10 md:mb-0">
          {/* Badge 小標 */}
          <Badge className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 border border-teal-400/30 px-7 py-2 rounded-full mb-1 text-base font-semibold flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            創新行銷思維
            <Zap className="w-5 h-5 ml-2" />
          </Badge>
          {/* 主標大字 */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.06] text-left text-white drop-shadow mb-2 md:mb-2.5">
            重塑未來
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              行銷新境界
            </span>
          </h1>
          {/* 副標一行 */}
          <p className="text-base md:text-xl text-slate-300 font-medium text-left max-w-md mt-1">
            在這裡，我們不只學習行銷，
            <span className="block text-teal-200/90 font-semibold mt-2">我們創造未來商業的無限可能</span>
          </p>
        </div>

        {/* 右側影片區（加大，較緊湊） */}
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <div
            className="relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden shadow-2xl group border-[2.5px] border-white/10"
            style={{
              minHeight: "240px",
              maxHeight: "65vh",
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
                {/* 播放按鈕覆蓋層 */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/35 to-transparent flex items-center justify-center z-10">
                  <button
                    onClick={() => setShowVideo(true)}
                    aria-label="播放介紹影片"
                    className="group bg-white/25 hover:bg-white/40 text-white border-2 border-white/30 backdrop-blur-md rounded-full w-24 h-24 p-0 hover:scale-110 flex items-center justify-center transition"
                  >
                    <Play className="w-12 h-12 group-hover:scale-110 transition-transform" fill="currentColor" />
                  </button>
                </div>
                {/* 底標文字 */}
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
                  maxHeight: "65vh",
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* 底部 softer 波浪 */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white opacity-80">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
