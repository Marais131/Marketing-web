import { Lightbulb, TrendingUp, Briefcase, Layers3 } from "lucide-react";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Lightbulb,
    title: "邏輯與影響力兼備",
    desc: "行銷是驅動嚴謹決策、精準市場的關鍵。你能以知識、邏輯與消費心理制定策略，影響品牌、社會甚至世界。",
    bg: "from-yellow-100 via-yellow-50 to-blue-50",
  },
  {
    icon: TrendingUp,
    title: "薪資與職涯成長快速",
    desc: "數位時代帶來大量行銷職缺與高薪機會，業界急需全方位行銷人才，升遷與轉職機會多。",
    bg: "from-pink-100 via-blue-100 to-teal-100",
  },
  {
    icon: Briefcase,
    title: "各產業皆需行銷",
    desc: "無論科技、時尚、醫療或社會企業，行銷都是不可或缺的人才，未來選擇彈性大。",
    bg: "from-teal-100 via-violet-50 to-orange-100",
  },
  {
    icon: Layers3,
    title: "技能多元，跨界發展",
    desc: "培養消費心理、數據分析、邏輯推演、策略規劃等多樣能力，未來可轉戰企劃、產品、廣告、創業等多領域。",
    bg: "from-blue-100 via-purple-100 to-pink-100",
  },
];

const testimonials: Testimonial[] = [
  {
    text: "沒有能夠觸達與說服的策略，再好的產品也不會被看見。行銷是成長槓桿。",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200",
    name: "科技新創 CEO",
    role: "創辦人",
  },
  {
    text: "當我們真正理解用戶，轉化自然發生。資料與洞察是行銷的燃料。",
    image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=200",
    name: "資深行銷顧問",
    role: "Growth Advisor",
  },
  {
    text: "品牌不只是識別，它是每一次互動的承諾與體驗。",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    name: "品牌總監",
    role: "Brand Director",
  },
  {
    text: "行銷把商業語言轉譯成顧客價值，讓策略真正落地。",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200",
    name: "消費品業務負責人",
    role: "BU Head",
  },
  {
    text: "內容、通路、產品三者合一時，成長就被系統化。這是行銷的力量。",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200",
    name: "電商營運長",
    role: "COO",
  },
  {
    text: "好的行銷是讓顧客成為品牌故事的一部分。",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200",
    name: "內容策略主管",
    role: "Content Lead",
  },
  {
    text: "行銷與產品相輔相成。洞察需求、快速實驗，才是競爭優勢。",
    image: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=200",
    name: "產品經理",
    role: "PM",
  },
  {
    text: "沒有市場驗證的創意只是靈感；被驗證的創意才是生意。",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    name: "廣告策略總監",
    role: "Strategy Director",
  },
  {
    text: "在資源有限的條件下，行銷讓每一分投入都能產生最大影響。",
    image: "https://images.unsplash.com/photo-1543966888-7c1dc482a810?q=80&w=200",
    name: "中小企業主",
    role: "Owner",
  },
];

const testiFirst = testimonials.slice(0, 3);
const testiSecond = testimonials.slice(3, 6);
const testiThird = testimonials.slice(6, 9);

const WhyChooseMarketing = () => (
  <section className="w-full relative z-10 overflow-hidden">
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
    
    <div className="mx-auto py-14 md:py-20 max-w-5xl px-4 md:px-6 mb-2 relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-700 via-teal-600 to-purple-700 bg-clip-text text-transparent drop-shadow animate-fade-in">
        為什麼要選行銷？
      </h1>
      <p className="text-lg md:text-xl text-slate-700/90 text-center max-w-2xl mx-auto mb-10 animate-fade-in">
        行銷產業充滿無限可能，<b className="text-blue-700">創意</b>、<b className="text-teal-600">數據</b>、<b className="text-purple-600">產業洞察</b>並重，無論你想挑戰高薪、渴望影響力、或追求多元跨界發展——
        行銷都是現在與未來的最佳選擇。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 animate-fade-in">
        {reasons.map((r, i) => (
          <div
            key={i}
            className={`flex gap-4 items-start rounded-2xl shadow-lg p-6 md:p-8 bg-gradient-to-br ${r.bg} transition hover:scale-105 duration-200`}
          >
            <span className="flex-shrink-0 rounded-full bg-white/70 p-3 shadow">
              <r.icon className="w-8 h-8 text-blue-700" />
            </span>
            <div>
              <h3 className="font-bold text-lg md:text-xl mb-1 text-teal-700">{r.title}</h3>
              <p className="text-slate-700/90 text-base">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 行銷很重要：來自企業主與專家的一致聲音 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A4C7A] mb-4">
          為什麼行銷這麼重要？
        </h2>
        <p className="text-center text-[#2A7DB1] mb-8">
          坊間許多行銷專家與企業主都認為：行銷是推動成長的核心引擎。
        </p>
        <div className="flex justify-center gap-6 mt-4 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[540px] overflow-hidden">
          <TestimonialsColumn testimonials={testiFirst} duration={15} />
          <TestimonialsColumn testimonials={testiSecond} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={testiThird} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseMarketing;
