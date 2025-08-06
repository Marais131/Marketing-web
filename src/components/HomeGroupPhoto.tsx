/**
 * 團體合照元件放在首頁 Hero 下方，圖片+溫馨短句
 */

import { Link } from 'react-router-dom';
import { FadeInSection } from "@/components/ui/fade-in-section";
import { ElegantImage } from "@/components/ui/elegant-image";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const HomeGroupPhoto = () => (
  <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
    
    {/* 高級專業背景裝飾 */}
    {/* 主背景漸變 */}
    <div className="absolute inset-0 bg-gradient-to-br from-white via-[#1A4C7A]/2 to-[#3CB1B6]/3"></div>
    
    {/* 網格背景 */}
    <div className="absolute inset-0 opacity-[0.02]">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(#1A4C7A 1px, transparent 1px),
          linear-gradient(90deg, #1A4C7A 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}></div>
    </div>
    
    {/* 大型幾何圖形 */}
    <div className="absolute top-20 right-10 w-80 h-80 opacity-[0.03]">
      <div className="w-full h-full border-4 border-[#1A4C7A] rounded-full transform rotate-12"></div>
      <div className="absolute top-10 left-10 w-60 h-60 border-2 border-[#2A7DB1] rounded-full"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#3CB1B6]/20 to-[#1A4C7A]/20 rounded-full"></div>
    </div>
    
    <div className="absolute bottom-20 left-10 w-96 h-96 opacity-[0.04]">
      <div className="w-full h-full transform rotate-45">
        <div className="w-full h-full border-4 border-[#2A7DB1] rounded-3xl"></div>
        <div className="absolute top-8 left-8 w-80 h-80 border-2 border-[#3CB1B6] rounded-2xl"></div>
        <div className="absolute top-16 left-16 w-64 h-64 bg-gradient-to-tr from-[#1A4C7A]/15 to-transparent rounded-xl"></div>
      </div>
    </div>
    
    {/* 浮動粒子效果 */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#3CB1B6] rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#2A7DB1] rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#1A4C7A] rounded-full animate-pulse opacity-25" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-[#3CB1B6] rounded-full animate-pulse opacity-35" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/3 right-2/3 w-2 h-2 bg-[#2A7DB1] rounded-full animate-pulse opacity-30" style={{animationDelay: '1.5s'}}></div>
    </div>
    
    {/* 科技感光線 */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3CB1B6]/20 to-transparent transform -rotate-12"></div>
      <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2A7DB1]/15 to-transparent transform rotate-6"></div>
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1A4C7A]/18 to-transparent transform -rotate-3"></div>
    </div>
    
    {/* 智慧光暈效果 */}
    <div className="absolute top-10 right-20 w-60 h-60 bg-gradient-radial from-[#3CB1B6]/8 via-[#2A7DB1]/4 to-transparent rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-[#1A4C7A]/6 via-[#2A7DB1]/3 to-transparent rounded-full blur-3xl"></div>
    
    {/* 抽象圖形元素 */}
    <div className="absolute top-40 left-1/4 opacity-[0.04]">
      <svg width="120" height="120" viewBox="0 0 120 120" className="text-[#1A4C7A]">
        <path d="M60 10 L110 60 L60 110 L10 60 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="60" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="60" cy="60" r="5" fill="currentColor"/>
      </svg>
    </div>

    <div className="absolute bottom-40 right-1/4 opacity-[0.03]">
      <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#2A7DB1]">
        <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="currentColor" strokeWidth="2"/>
        <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" fill="none" stroke="currentColor" strokeWidth="1"/>
      </svg>
    </div>

    <div className="container mx-auto px-6 relative z-20">
      {/* 標題區域 */}
      <FadeInSection className="text-center mb-16">
        <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-black text-[#1A4C7A] mb-6 leading-[0.9] tracking-tight">
          我們的團隊
        </h2>
        <p className="text-xl md:text-2xl text-[#2A7DB1] font-medium max-w-3xl mx-auto">
          具備邏輯與行動力的品牌行銷人，專精消費心理與數據分析
        </p>
      </FadeInSection>

      {/* 主要內容區域 */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* 團體合照 */}
        <FadeInSection delay={200} direction="left" className="flex-1 relative">
          <ElegantImage
            src="/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png"
            alt="品牌行銷系團體合照"
            variant="card"
            overlay={true}
            className="w-full h-auto object-cover"
            containerClassName="magnetic-hover max-h-[500px]"
          />
        </FadeInSection>
        
        {/* 文字內容區域 */}
        <FadeInSection delay={400} direction="right" className="flex-1 text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A4C7A] leading-tight">
              團結 · 多元 · 嚴謹
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              我們相信每個人都能以知識與邏輯解決品牌挑戰，專注消費心理與數據分析，創造精準行銷成果。
            </p>
          </div>

          {/* 特色標籤 */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {[
              { icon: "🎯", text: "目標導向", color: "bg-[#1A4C7A]" },
              { icon: "📊", text: "數據分析", color: "bg-[#2A7DB1]" },
              { icon: "🤝", text: "團隊合作", color: "bg-[#3CB1B6]" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`${item.color} text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA 按鈕 */}
          <div className="pt-4">
            <EnhancedButton
              variant="gradient" 
              size="lg"
              animation="shine"
              asChild
            >
              <Link to="/contact">
                加入我們的團隊
              </Link>
            </EnhancedButton>
          </div>
        </FadeInSection>
      </div>

      {/* 底部裝飾線 */}
      <div className="mt-20 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-[#1A4C7A] via-[#2A7DB1] to-[#3CB1B6] rounded-full"></div>
      </div>
    </div>
  </section>
);

export default HomeGroupPhoto;
