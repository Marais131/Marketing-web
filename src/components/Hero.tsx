
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Play } from "lucide-react";
import { useState } from "react";

const LOGO = "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 via-white to-orange-50 overflow-hidden pb-8 md:pb-14 pt-10 md:pt-20">
      <div className="absolute -z-10 top-0 -left-24 w-[34rem] h-[38rem] bg-orange-100/50 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-2 md:px-8 flex flex-col md:flex-row items-stretch justify-between gap-y-8 md:gap-x-12 lg:gap-x-16">
        {/* 左側 Logo + 標語大卡片 */}
        <div className="flex-[4] flex flex-col justify-stretch w-full max-w-2xl">
          <div className="flex h-full">
            <div className="w-full h-full bg-gradient-to-br from-orange-100/95 via-white to-blue-100/90 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-7 justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[440px] max-h-[600px]">
              {/* Logo */}
              <img
                src={LOGO}
                alt="Logo"
                className="w-full max-w-[260px] md:max-w-[285px] h-[58px] md:h-[78px] object-contain mb-5"
                style={{
                  background: "none",
                  border: "none",
                  boxShadow: "none",
                  filter: "none",
                  display: "block"
                }}
              />
              {/* 條狀特色Badge */}
              <Badge className="bg-gradient-to-r from-blue-100 to-orange-50 text-blue-900 border border-blue-200 rounded-full px-8 py-2 mb-4 text-lg md:text-xl flex items-center font-bold shadow">
                <Sparkles className="w-6 h-6 mr-2" />
                ブランド新世代整合者
                <Zap className="w-6 h-6 ml-2" />
              </Badge>
              {/* 主標題 (斷行，大字) */}
              <h1 className="font-black text-3xl md:text-5xl lg:text-6xl text-blue-900 leading-tight mb-4 tracking-tight">
                <span className="block">
                  以 <span className="text-teal-600 font-extrabold">品牌端視野</span>，
                </span>
                <span className="block">培養新世代行銷人才</span>
              </h1>
              {/* 副標題 (放大、明顯) */}
              <div className="text-xl md:text-2xl text-slate-700 font-semibold mb-1">
                你不只是學行銷，
                <span className="text-orange-600 font-bold">我們培養領導者</span>
              </div>
              {/* 精簡說明 (單行顯眼、放大、著重跳色) */}
              <div className="text-base md:text-xl text-slate-700 font-medium leading-relaxed whitespace-normal">
                整合
                <span className="text-blue-700 font-bold mx-1">創新</span>、數據、心理、美感，
                善用團隊與數位工具、
                <span className="text-blue-700 font-bold mx-1">主導市場未來</span>
              </div>
            </div>
          </div>
        </div>
        {/* 右側 影片區（60%比例） */}
        <div className="flex-[6] flex items-center justify-center w-full max-w-full mt-2 md:mt-0">
          <div className="relative w-full max-w-[520px] md:max-w-[680px] aspect-[16/9] rounded-3xl shadow-2xl overflow-hidden bg-slate-50 border border-slate-100 min-h-[170px] md:min-h-[400px] h-full flex">
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
                  maxHeight: "420px"
                }}
              />
            )}
          </div>
        </div>
      </div>
      {/* 理念敘述卡片維持不變 */}
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
