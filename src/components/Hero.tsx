import { useState } from "react";

const LOGO = "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full bg-white min-h-[80vh] flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden">
      {/* 高級專業智慧背景設計 */}
      {/* 主背景漸變 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#1A4C7A]/2 to-[#3CB1B6]/3"></div>
      
      {/* 網格背景 */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#1A4C7A 1px, transparent 1px),
            linear-gradient(90deg, #1A4C7A 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* 大型幾何圖形 */}
      <div className="absolute top-20 right-10 w-80 h-80 opacity-[0.04]">
        <div className="w-full h-full border-4 border-[#1A4C7A] rounded-full transform rotate-12"></div>
        <div className="absolute top-10 left-10 w-60 h-60 border-2 border-[#2A7DB1] rounded-full"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#3CB1B6]/20 to-[#1A4C7A]/20 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-20 left-10 w-96 h-96 opacity-[0.05]">
        <div className="w-full h-full transform rotate-45">
          <div className="w-full h-full border-4 border-[#2A7DB1] rounded-3xl"></div>
          <div className="absolute top-8 left-8 w-80 h-80 border-2 border-[#3CB1B6] rounded-2xl"></div>
          <div className="absolute top-16 left-16 w-64 h-64 bg-gradient-to-tr from-[#1A4C7A]/15 to-transparent rounded-xl"></div>
        </div>
      </div>
      
      {/* 浮動粒子效果 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#3CB1B6] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#2A7DB1] rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#1A4C7A] rounded-full animate-pulse opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-[#3CB1B6] rounded-full animate-pulse opacity-50" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 right-2/3 w-2 h-2 bg-[#2A7DB1] rounded-full animate-pulse opacity-40" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* 科技感光線 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3CB1B6]/30 to-transparent transform -rotate-12"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2A7DB1]/20 to-transparent transform rotate-6"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1A4C7A]/25 to-transparent transform -rotate-3"></div>
      </div>
      
      {/* 智慧光暈效果 */}
      <div className="absolute top-10 right-20 w-60 h-60 bg-gradient-radial from-[#3CB1B6]/10 via-[#2A7DB1]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-[#1A4C7A]/8 via-[#2A7DB1]/4 to-transparent rounded-full blur-3xl"></div>
      
      {/* 抽象圖形元素 */}
      <div className="absolute top-40 left-1/4 opacity-[0.06]">
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-[#1A4C7A]">
          <path d="M60 10 L110 60 L60 110 L10 60 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="60" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="60" cy="60" r="5" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="absolute bottom-40 right-1/4 opacity-[0.05]">
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#2A7DB1]">
          <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="currentColor" strokeWidth="2"/>
          <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      {/* Logo 與主標題區塊 */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
          {/* Logo 浮動動畫 */}
          <img
            src={LOGO}
            alt="文化大學行銷系 Logo"
            className="h-[110px] md:h-[140px] w-auto mb-2 md:mb-0 animate-float relative z-10"
            style={{ minWidth: "120px", maxWidth: "240px" }}
          />
          {/* 主標題，淡入上移動畫 */}
          <h1
            className="text-[8vw] md:text-[6vw] lg:text-[5vw] font-black leading-[1.05] tracking-tight text-[#1A4C7A] text-center md:text-left drop-shadow-none opacity-0 translate-y-8 animate-heroTitle relative z-10"
            style={{ letterSpacing: "-0.04em" }}
          >
            品牌端
            <span className="text-[#2A7DB1]">行銷</span>
            <span className="text-[#3CB1B6]">新世代</span>
          </h1>
        </div>
        {/* 副標題，滑入動畫 */}
        <div className="text-[1.5rem] md:text-3xl font-bold text-[#2A7DB1] text-center max-w-2xl mt-2 mb-2 opacity-0 -translate-x-8 animate-slideInLeft relative z-10">
          以現代品牌視野，培養跨域行銷領袖
        </div>
        {/* 特色標語色塊，滑入動畫 */}
        <div className="inline-block rounded-full bg-[#3CB1B6]/10 px-10 py-4 text-[#3CB1B6] font-semibold text-xl shadow-sm mb-4 opacity-0 translate-x-8 animate-slideInRight relative z-10 backdrop-blur-sm border border-[#3CB1B6]/20">
          專業 × 創新 × 數據 × 美感 × 心理
        </div>
        {/* 影片區塊，scale-in 動畫 */}
        <div className="w-full flex items-center justify-center mt-6 relative z-10">
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
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default Hero;
