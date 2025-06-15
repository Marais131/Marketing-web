
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Play } from "lucide-react";
import { useState } from "react";

const LOGO = "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* 圓弧色塊裝飾 */}
      <div className="absolute -z-10 top-0 -left-24 w-[34rem] h-[38rem] bg-orange-100/50 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-2 md:px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-5">
        {/* 左側 Logo + 標語區塊，加上色塊和圓角陰影 */}
        <div className="flex-[4] flex flex-col items-start justify-center w-full max-w-lg md:max-w-xl lg:max-w-2xl mb-8 md:mb-0">
          <div className="w-full h-full bg-gradient-to-br from-orange-100/70 via-white to-blue-100/80 rounded-3xl shadow-lg p-7 md:p-10">
            {/* Logo */}
            <img
              src={LOGO}
              alt="Logo"
              className="w-full max-w-[320px] md:max-w-[370px] h-[72px] md:h-[98px] object-contain mb-4 md:mb-6"
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
            <Badge className="bg-gradient-to-r from-orange-100 to-blue-100 text-blue-800 border border-blue-200 rounded-full px-6 py-2 mb-4 text-base flex items-center font-semibold shadow-sm">
              <Sparkles className="w-5 h-5 mr-2" />
              ブランド新世代整合者
              <Zap className="w-5 h-5 ml-2" />
            </Badge>
            {/* 主標題 */}
            <h1 className="font-black text-2xl md:text-4xl lg:text-5xl text-blue-900 leading-snug mb-3 md:mb-4 drop-shadow">
              以品牌端視野，<br className="hidden md:inline" />
              培養行銷決策型人才
            </h1>
            {/* 副標題 */}
            <div className="text-[17px] md:text-xl text-teal-700 font-semibold mb-3">
              不只是學行銷，更培養你成為
              <span className="inline md:block ml-1 md:ml-0">
                整合創新、數據、心理與美感的領導者
              </span>
            </div>
            {/* 補充敘述分段 */}
            <div className="text-base md:text-lg text-slate-700/90 mb-2">
              在專業深度與跨界協作中，
              <span className="block text-blue-700 font-bold text-lg md:text-xl mt-2 drop-shadow-sm">
                贏得未來市場的關鍵主導力。
              </span>
            </div>
          </div>
        </div>
        {/* 右側 影片區：約6成寬，留白更協調 */}
        <div className="flex-[6] flex items-center justify-center w-full max-w-full mt-2 md:mt-0">
          <div className="relative w-full max-w-[540px] md:max-w-[650px] aspect-[16/9] rounded-3xl shadow-2xl overflow-hidden bg-slate-50 border border-slate-100 min-h-[170px] md:min-h-[240px]">
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
                    className="bg-white/90 hover:bg-blue-100 text-teal-600 border-2 border-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-105 transition shadow-xl"
                  >
                    <Play className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" />
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
      {/* 理念敘述文案卡片維持（可微調間距） */}
      <div className="container mx-auto px-2 md:px-6 mt-1 md:mt-7">
        <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 border border-orange-200 rounded-2xl shadow flex flex-col md:flex-row items-center justify-between px-6 py-7 md:py-8 gap-y-4 md:gap-x-8">
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center mb-1">
              <span className="font-semibold text-orange-600 tracking-wide text-base">
                品牌端決策型人才培育搖籃
              </span>
            </div>
            <div className="text-slate-700 text-base md:text-lg leading-relaxed">
              文化大學行銷系專注培養具備品牌專業深度與跨領域整合思維的行銷新世代，
              所有課程設計強調「專業力 × 創新 × 數據 × 美感 × 心理」的全方位養成。
              學生不僅掌握市場策略，更有能力聯合多元工具與團隊，以品牌視野引領未來行銷變革。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
