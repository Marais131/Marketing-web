import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "獨特課程架構",
    subtitle: "結合心理學、邏輯學與電商實戰",
    description: "我們打造了獨一無二的課程體系，以心理學洞察消費者、以邏輯學建構嚴謹策略，並透過電商實戰課程，讓學生在真實市場中學習，培養全方位的品牌行銷能力。",
    points: [
      "心理學打底：洞察消費者與商機",
      "邏輯學思維：改造思想方式",
      "電商實戰：業師帶領，邊做邊學",
    ],
    // 圖片路徑改用使用者上傳正確圖檔
    image: "/lovable-uploads/d3bb2780-7b61-43e4-b4e3-972e02c9080f.png",
    imageAlt: "課程架構圖",
    align: "right"
  },
  {
    title: "明確職涯發展",
    subtitle: "五年學碩一貫，直通理想職位",
    description: "我們提供「4+1學碩一貫」計畫與清晰的「職業角色定位」，幫助學生無縫接軌研究所，並在五年內取得碩士學位，快速成為業界渴求的品牌經理、產品經理或數位行銷專家。",
    points: [
        "4+1計畫：5年完成學士+碩士",
        "職業角色定位：聚焦品牌端(甲方)人才",
        "高就業率：畢業即戰力",
    ],
    image: "/lovable-uploads/d765d1d6-444b-4bfe-9856-74ed5e61a8ef.png",
    imageAlt: "職涯發展路徑圖",
    align: "left"
  }
];

const KeyFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-orange-50 relative overflow-hidden">
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
      
      <div className="container mx-auto px-6 relative z-10">
        {/* 教育理念/核心能力融入敘述 */}
        <div className="max-w-3xl mx-auto mb-10 animate-fade-in">
          <div className="flex flex-col gap-2 md:items-center md:text-center">
            <h3 className="text-xl font-bold text-blue-700 mb-1">專業跨域 × 創新整合 × 智慧商業</h3>
            <div className="text-base md:text-lg text-slate-700 mb-1">
              我們的課程以品牌端所需的核心職能為藍本，強化「品牌管理、消費洞察、策略企劃、創意傳播」等專業深度，
              並結合心理學、美感素養、邏輯規劃與電商實作，讓同學同時具備統整創新、精準決策、多方協作的能力，
              成為能引領市場、打造影響力的行銷整合型人才。
            </div>
          </div>
          {/* 四大核心能... */}
          <ul className="mt-4 grid gap-2 md:gap-0 grid-cols-1 md:grid-cols-2">
            {/* ... keep existing core abilities li內容 the same ... */}
            <li className="flex items-start gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <span>
                <b>行銷基石知能</b>：品牌管理、促銷設計、通路經營等策略規劃能力
              </span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <span>
                <b>消費者洞察力</b>：心理行為研究、需求挖掘、數據分析
              </span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <span>
                <b>企劃與執行力</b>：邏輯規劃、專案管理、資源協作落實品牌專案
              </span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <span>
                <b>邏輯推演</b>：消費心理、數據分析、策略規劃
              </span>
            </li>
          </ul>
        </div>
        {/* 原本的標題區與features區塊-含動畫 */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            打造你的<span className="text-blue-600">品牌行銷競爭力</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            我們提供的不僅是知識，更是一條實證專業與跨界價值兼備的成長路徑。
          </p>
        </div>

        {/* 特色卡片加入動畫和hover */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in`}>
              <div className={`relative ${feature.align === 'left' ? 'lg:order-2' : ''}`}>
                 <img src={feature.image} alt={feature.imageAlt} className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 hover:shadow-3xl transition-transform duration-300" />
              </div>
              <div className={`space-y-6 ${feature.align === 'left' ? 'lg:order-1' : ''}`}>
                <Badge className="bg-blue-100 text-blue-700 text-base px-4 py-1 rounded-full shadow">{feature.subtitle}</Badge>
                <h3 className="text-3xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
