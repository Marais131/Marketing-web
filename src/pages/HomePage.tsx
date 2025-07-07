import Hero from "@/components/Hero";
import HomeFeed from "@/components/HomeFeed";
import PhotoWall from "@/components/PhotoWall";
import HomeGroupPhoto from "@/components/HomeGroupPhoto";
import StudentFeedback from "@/components/StudentFeedback";

const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 全局背景美化 */}
      <div className="fixed inset-0 -z-10">
        {/* 主背景漸變 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
        
        {/* 大型裝飾圓形 */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-radial from-[#3CB1B6]/8 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 -left-60 w-80 h-80 bg-gradient-radial from-[#1A4C7A]/6 to-transparent rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-radial from-[#2A7DB1]/7 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        
        {/* 網格背景 */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(#1A4C7A 1px, transparent 1px),
              linear-gradient(90deg, #1A4C7A 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* 浮動粒子 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#3CB1B6]/40 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#2A7DB1]/30 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#1A4C7A]/25 rounded-full animate-pulse-slow" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#3CB1B6]/35 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 right-2/3 w-2.5 h-2.5 bg-[#2A7DB1]/20 rounded-full animate-pulse-slow" style={{animationDelay: '3s'}}></div>
        </div>
        
        {/* 科技感線條 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3CB1B6]/15 to-transparent transform -rotate-12"></div>
          <div className="absolute top-2/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2A7DB1]/10 to-transparent transform rotate-6"></div>
          <div className="absolute top-3/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1A4C7A]/12 to-transparent transform -rotate-3"></div>
          <div className="absolute bottom-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3CB1B6]/8 to-transparent transform rotate-2"></div>
        </div>
      </div>

      {/* 頁面內容 */}
      <div className="relative z-10">
        {/* Hero 區塊 */}
        <div className="relative">
          <Hero />
          {/* Hero 底部過渡 */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-50/50"></div>
        </div>

        {/* PhotoWall 區塊 */}
        <div className="relative">
          <PhotoWall />
          {/* 區塊間過渡裝飾 */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-50/40"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3CB1B6] via-[#2A7DB1] to-[#1A4C7A] rounded-full opacity-25"></div>
        </div>

        {/* HomeFeed 區塊 - 移到這裡 */}
        <div className="relative">
          <HomeFeed />
          {/* 區塊間過渡裝飾 */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white/20"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-[#2A7DB1] via-[#3CB1B6] to-[#1A4C7A] rounded-full opacity-35"></div>
        </div>

        {/* HomeGroupPhoto 區塊 */}
        <div className="relative">
          <HomeGroupPhoto />
          {/* 區塊間過渡裝飾 */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50/50"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#1A4C7A] via-[#2A7DB1] to-[#3CB1B6] rounded-full opacity-30"></div>
        </div>

        {/* StudentFeedback 區塊 */}
        <StudentFeedback />
      </div>

      {/* 自定義動畫樣式 */}
      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        @keyframes float-reverse {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
          }
          50% { 
            transform: translateY(15px) rotate(-180deg); 
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.2); 
          }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
