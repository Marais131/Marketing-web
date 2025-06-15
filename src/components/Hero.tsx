
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Play } from "lucide-react";
import { useState } from "react";

// 扁平長條去背Logo檔案（與Navbar一致）
const LOGO = "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* 圓弧色塊裝飾 */}
      <div className="absolute -z-10 top-0 -left-24 w-[34rem] h-[38rem] bg-orange-100/50 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-2 md:px-6 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-y-10 md:gap-x-16">
        {/* 左側 Logo + 標語 */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl w-full md:pr-0 lg:pr-6 mb-10 md:mb-0">
          {/* 去背扁平型Logo，左對齊且更大更扁 */}
          <img
            src={LOGO}
            alt="Logo"
            className="w-full max-w-[480px] md:max-w-[580px] h-[105px] md:h-[145px] object-contain mb-7 transition-all duration-300"
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
          {/* 品牌識別特色 */}
          <Badge className="bg-gradient-to-r from-orange-100 to-blue-100 text-blue-800 border border-blue-200 rounded-full px-5 py-2 mb-5 text-base flex items-center font-semibold shadow">
            <Sparkles className="w-5 h-5 mr-2" />
            ブランド新世代整合者
            <Zap className="w-5 h-5 ml-2" />
          </Badge>
          <h1 className="font-black text-3xl md:text-5xl text-blue-900 leading-tight mb-4 drop-shadow">
            以品牌端視野，培養行銷決策型人才
          </h1>
          <div className="text-lg md:text-xl text-slate-700/90 font-medium mb-4">
            不只是學行銷，更培養你成為能整合創新、數據、心理與美感的領導者，
            在專業深度與跨界協作中，
            <span className="block text-blue-700 font-bold text-xl md:text-2xl mt-2 drop-shadow">
              贏得未來市場的關鍵主導力。
            </span>
          </div>
        </div>
        {/* 右側 影片區：容器放大並嚴格維持16:9，最大寬度/高度調整，永遠不被切 */}
        <div className="flex-[1.15] flex items-center justify-center w-full max-w-full mt-2 md:mt-0">
          <div className="relative w-full max-w-[760px] md:max-w-[880px] lg:max-w-[950px] aspect-[16/9] rounded-3xl shadow-2xl overflow-hidden bg-slate-50 border border-slate-100 min-h-[220px] md:min-h-[380px]">
            {!showVideo ? (
              <>
                <img
                  src="https://img.youtube.com/vi/kcLHZOMzuXE/maxresdefault.jpg"
                  alt="系所介紹影片"
                  className="w-full h-full object-cover object-center aspect-[16/9] transition-opacity"
                  style={{
                    minHeight: "220px",
                    borderRadius: "1.5rem",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/25">
                  <button
                    onClick={() => setShowVideo(true)}
                    aria-label="播放介紹影片"
                    className="bg-white/90 hover:bg-blue-100 text-teal-600 border-2 border-white rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center hover:scale-105 transition shadow-xl"
                  >
                    <Play className="w-10 h-10 md:w-16 md:h-16" fill="currentColor" />
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
                  minHeight: "220px",
                  width: "100%",
                  borderRadius: "1.5rem",
                  height: "100%",
                  maxHeight: "520px"
                }}
              />
            )}
          </div>
        </div>
      </div>
      {/* 理念敘述文案卡片 */}
      <div className="container mx-auto px-2 md:px-6 mt-0 md:mt-7">
        <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 border border-orange-200 rounded-2xl shadow flex flex-col md:flex-row items-center justify-between px-6 py-6 md:py-7 gap-y-4 md:gap-x-8">
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
