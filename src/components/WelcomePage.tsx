import { Typewriter } from "@/components/ui/typewriter"
import { Link } from "react-router-dom"
import { ArrowRight, Sparkles, Target, Brain, BarChart3, Heart } from "lucide-react"

const WelcomePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#1A4C7A]/5 to-[#3CB1B6]/10 relative overflow-hidden">
      {/* 背景裝飾元素 */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#1A4C7A 1px, transparent 1px),
            linear-gradient(90deg, #1A4C7A 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* 浮動幾何圖形 */}
      <div className="absolute top-20 right-10 w-80 h-80 opacity-[0.04]">
        <div className="w-full h-full border-4 border-[#1A4C7A] rounded-full transform rotate-12 animate-spin-slow"></div>
      </div>
      
      <div className="absolute bottom-20 left-10 w-96 h-96 opacity-[0.05]">
        <div className="w-full h-full transform rotate-45 animate-pulse">
          <div className="w-full h-full border-4 border-[#2A7DB1] rounded-3xl"></div>
        </div>
      </div>

      {/* 主要內容區域 */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-12 animate-float">
          <img
            src="/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png"
            alt="中國文化大學行銷學系"
            className="h-32 md:h-40 w-auto mx-auto"
            width={160}
            height={160}
            decoding="async"
            // DOM 屬性需要小寫寫法
            fetchpriority="high"
            loading="eager"
          />
        </div>

        {/* 歡迎標題 */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-[#3CB1B6] mr-3" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1A4C7A]">
              歡迎來到
            </h1>
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-[#3CB1B6] ml-3" />
          </div>
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6] text-transparent bg-clip-text">
              中國文化大學行銷學系
            </span>
          </div>
          <p className="text-lg md:text-xl text-[#2A7DB1] mt-4 font-medium">
            全台唯一專注品牌端思維的行銷學系
          </p>
        </div>

        {/* Typewriter 效果區域 */}
        <div className="mb-12">
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1A4C7A]">
            我們致力於培養
          </div>
          
          <div className="min-h-[120px] md:min-h-[160px] flex items-center justify-center">
            <Typewriter
              text={[
                "具備品牌端視野的行銷專才",
                "掌握數據分析的行銷領袖", 
                "理解消費心理的策略專家",
                "跨域整合的創新人才",
                "具備國際視野的行銷菁英",
                "驅動品牌價值的未來領袖"
              ]}
              speed={80}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3CB1B6]"
              waitTime={2500}
              deleteSpeed={50}
              cursorChar="▌"
              cursorClassName="text-[#2A7DB1] ml-2"
            />
          </div>
        </div>

        {/* 核心特色 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {[
            { 
              icon: Target, 
              text: "品牌端視野", 
              desc: "專注品牌價值創造",
              color: "from-[#1A4C7A] to-[#2A7DB1]"
            },
            { 
              icon: Brain, 
              text: "消費心理學", 
              desc: "深入理解消費者行為",
              color: "from-[#2A7DB1] to-[#3CB1B6]"
            },
            { 
              icon: BarChart3, 
              text: "數據分析", 
              desc: "精準決策與策略規劃",
              color: "from-[#3CB1B6] to-[#1A4C7A]"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#3CB1B6]/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-[#1A4C7A] font-bold text-lg mb-2">{item.text}</div>
              <div className="text-[#2A7DB1] text-sm opacity-80">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* 系所特色標語 */}
        <div className="mb-8 p-6 bg-gradient-to-r from-[#1A4C7A]/10 to-[#3CB1B6]/10 rounded-2xl border border-[#3CB1B6]/20">
          <div className="flex items-center justify-center mb-3">
            <Heart className="w-6 h-6 text-[#3CB1B6] mr-2" />
            <span className="text-xl md:text-2xl font-bold text-[#1A4C7A]">專業 × 邏輯 × 數據 × 消費心理</span>
            <Heart className="w-6 h-6 text-[#3CB1B6] ml-2" />
          </div>
          <p className="text-[#2A7DB1] text-lg">
            以現代品牌視野，培養跨域行銷領袖
          </p>
        </div>

        {/* 行動呼籲 */}
        <div className="space-y-6">
          <div className="text-xl md:text-2xl text-[#2A7DB1] font-medium">
            準備好開啟你的行銷職涯了嗎？
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about"
              className="bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              了解系所特色
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/curriculum"
              className="bg-gradient-to-r from-[#2A7DB1] to-[#3CB1B6] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              探索課程亮點
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* 自定義動畫樣式 */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default WelcomePage