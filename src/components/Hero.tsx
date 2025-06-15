
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Play } from "lucide-react";
import { useState } from "react";

const LOGO = "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 via-white to-orange-50 overflow-hidden">
      <div className="absolute -z-10 top-0 -left-24 w-[34rem] h-[38rem] bg-orange-100/50 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-2 md:px-6 py-8 md:py-14 flex flex-col md:flex-row items-center justify-between gap-y-6 md:gap-x-8">
        {/* 左側 Logo + 標語區塊 */}
        <div className="flex-[4] flex flex-col items-start justify-center w-full max-w-2xl mb-6 md:mb-0">
          <div className="w-full h-full bg-gradient-to-br from-orange-100/80 via-white to-blue-100/70 rounded-3xl shadow-lg p-4 md:p-7">
            {/* Logo */}
            <img
              src={LOGO}
              alt="Logo"
              className="w-full max-w-[230px] md:max-w-[270px] h-[48px] md:h-[68px] object-contain mb-2 md:mb-3"
              style={{
                background: "none",
                border: "none",
                marginLeft: 0,
                marginRight: 0,
                boxShadow: "none",
                filter: "none",
                display: "block"
              }}
            />
            {/* 特色Badge */}
            <Badge className="bg-gradient-to-r from-orange-100 to-blue-100 text-blue-800 border border-blue-200 rounded-full px-5 py-1.5 mb-2 text-sm flex items-center font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              ブランド新世代整合者
              <Zap className="w-4 h-4 ml-2" />
            </Badge>
            {/* 主標題 單行呈現並縮小字體 */}
            <h1 className="font-black text-xl md:text-2xl lg:text-3xl text-blue-900 leading-tight mb-2 md:mb-3 drop-shadow">
              以 <span className="text-teal-600 font-extrabold">品牌端視野</span>，培養新世代行銷人才
            </h1>
            {/* 副標題，間距壓縮 */}
            <div className="text-sm md:text-base text-slate-700 font-semibold mb-1">
              你不只是學行銷，<span className="text-orange-600 font-bold">我們培養領導者</span>
            </div>
            {/* 精簡說明，全部單行、壓縮字體、只保留一兩處跳色 */}
            <div className="text-xs md:text-sm text-slate-600 font-medium whitespace-nowrap overflow-x-auto">
              整合
              <span className="text-blue-700 font-bold mx-1">創新</span>、
              數據、心理、美感，善用團隊與數位工具、
              <span className="text-blue-700 font-bold mx-1">主導市場未來</span>
            </div>
          </div>
        </div>
        {/* 右側 影片區（60%比例） */}
        <div className="flex-[6] flex items-center justify-center w-full max-w-full mt-2 md:mt-0">
          <div className="relative w-full max-w-[520px] md:max-w-[680px] aspect-[16/9] rounded-3xl shadow-2xl overflow-hidden bg-slate-50 border border-slate-100 min-h-[170px] md:min-h-[240px]">
            {!showVideo ? (
              <>
                <img
                  src="https://img.youtube.com/vi/kcLHZOMzuXE/maxresdefault.jpg"
                  alt="系所介紹影片"
                  className="w-full h-full object-cover object-center aspect-[16/9] transition-opacity"
                  style={{
                    minHeight: "170px",
                    borderRadius: "1.5rem"
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/25">
                  <button
                    onClick={() => setShowVideo(true)}
                    aria-label="播放介紹影片"
                    className="bg-white/90 hover:bg-blue-100 text-teal-600 border-2 border-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center hover:scale-105 transition shadow-xl"
                  >
                    <Play className="w-7 h-7 md:w-10 md:h-10" fill="currentColor" />
                  </button>
                </div>
              </>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/kcLHZOMzuXE?autoplay=1"
                title="系所介紹影片"
                className="w-full h-full aspect-[16/9] rounded-3xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  minHeight: "170px",
                  width: "100%",
                  borderRadius: "1.5rem",
                  height: "100%",
                  maxHeight: "360px"
                }}
              />
            )}
          </div>
        </div>
      </div>
      {/* 理念敘述卡片維持，微調間距 */}
      <div className="container mx-auto px-2 md:px-6 mt-1 md:mt-7">
        <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 border border-orange-200 rounded-2xl shadow flex flex-col md:flex-row items-center justify-between px-6 py-7 md:py-8 gap-y-4 md:gap-x-8">
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center mb-1">
              <span className="font-semibold text-orange-600 tracking-wide text-base">
                品牌端決策型人才培育搖籃
              </span>
            </div>
            <div className="text-slate-700 text-base md:text-lg leading-relaxed">
              文化大學行銷系專注培養具有品牌專業與跨領域整合力的新世代，課程著重
              <span className="font-semibold text-blue-700">「專業 × 創新 × 數據 × 美感 × 心理」</span>
              ，學會策略與團隊協作，引領行銷新變革。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

