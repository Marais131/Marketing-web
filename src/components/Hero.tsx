import { useState } from "react";

const LOGO = "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full bg-white min-h-[80vh] flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden">
      {/* Logo 與主標題區塊 */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
          {/* Logo 浮動動畫 */}
          <img
            src={LOGO}
            alt="文化大學行銷系 Logo"
            className="h-[110px] md:h-[140px] w-auto mb-2 md:mb-0 animate-float"
            style={{ minWidth: "120px", maxWidth: "240px" }}
          />
          {/* 主標題，淡入上移動畫 */}
          <h1
            className="text-[8vw] md:text-[6vw] lg:text-[5vw] font-black leading-[1.05] tracking-tight text-[#1A4C7A] text-center md:text-left drop-shadow-none opacity-0 translate-y-8 animate-heroTitle"
            style={{ letterSpacing: "-0.04em" }}
          >
            品牌端
            <span className="text-[#2A7DB1]">行銷</span>
            <span className="text-[#3CB1B6]">新世代</span>
          </h1>
        </div>
        {/* 副標題，滑入動畫 */}
        <div className="text-[1.5rem] md:text-3xl font-bold text-[#2A7DB1] text-center max-w-2xl mt-2 mb-2 opacity-0 -translate-x-8 animate-slideInLeft">
          以現代品牌視野，培養跨域行銷領袖
        </div>
        {/* 特色標語色塊，滑入動畫 */}
        <div className="inline-block rounded-full bg-[#3CB1B6]/10 px-10 py-4 text-[#3CB1B6] font-semibold text-xl shadow-sm mb-4 opacity-0 translate-x-8 animate-slideInRight">
          專業 × 創新 × 數據 × 美感 × 心理
        </div>
        {/* 影片區塊，scale-in 動畫 */}
        <div className="w-full flex items-center justify-center mt-6">
          <div className="relative w-full max-w-[900px] aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100 border-4 border-[#1A4C7A]/20 shadow-2xl animate-scaleIn">
            {!showVideo ? (
              <>
                <img
                  src="https://img.youtube.com/vi/kcLHZOMzuXE/maxresdefault.jpg"
                  alt="系所介紹影片"
                  className="w-full h-full object-cover object-center aspect-[16/9]"
                />
                <button
                  onClick={() => setShowVideo(true)}
                  aria-label="播放介紹影片"
                  className="absolute inset-0 flex items-center justify-center bg-white/80 hover:bg-[#2A7DB1]/20 transition"
                >
                  <svg className="w-20 h-20 text-[#1A4C7A]" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              </>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/kcLHZOMzuXE?autoplay=1"
                title="系所介紹影片"
                className="w-full h-full aspect-[16/9] rounded-3xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ minHeight: "170px", width: "100%", borderRadius: "1.5rem", height: "100%", maxHeight: "520px" }}
              />
            )}
          </div>
        </div>
      </div>
      {/* 自定義動畫 keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        @keyframes heroTitle {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-heroTitle {
          animation: heroTitle 1.1s cubic-bezier(.4,0,.2,1) 0.1s both;
        }
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-32px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1.1s cubic-bezier(.4,0,.2,1) 0.5s both;
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(32px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 1.1s cubic-bezier(.4,0,.2,1) 0.7s both;
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 1.1s cubic-bezier(.4,0,.2,1) 1s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;
