
import { Lightbulb, TrendingUp, Briefcase, Layers3 } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "創意與影響力兼備",
    desc: "行銷是驅動創新、扭轉市場的關鍵。你能將想法變現實，影響品牌、社會甚至世界。",
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
    desc: "培養數據、邏輯、溝通、設計等多樣能力，未來可轉戰企劃、產品、廣告、創業等多領域。",
    bg: "from-blue-100 via-purple-100 to-pink-100",
  },
];

const WhyChooseMarketing = () => (
  <section className="w-full relative z-10">
    <div className="mx-auto py-14 md:py-20 max-w-5xl px-4 md:px-6 mb-2">
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
    </div>
  </section>
);

export default WhyChooseMarketing;
