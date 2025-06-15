
import CurriculumStructure from "@/components/CurriculumStructure";
import KeyFeatures from "@/components/KeyFeatures";

const CurriculumPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50 pb-16">
    <section className="container mx-auto px-6 py-14 md:py-20">
      <div className="max-w-3xl mx-auto text-center animate-fade-in mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 drop-shadow">
          系所課程培養路徑
        </h1>
        <div className="text-xl md:text-2xl text-slate-700/95 font-medium mb-3">
          發掘品牌、行銷、心理學、數據與創新實戰的全新可能性
        </div>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
          文化大學行銷學系堅持以產業需求為本，發展一條專業深度與多元廣度兼備的課程地圖，
          從品牌策略、心理學洞察、數據分析到美感創意與電商實戰，培養學生以決策力和整合力引領未來市場。
          <br />
          <span className="text-teal-600 font-bold">了解我們如何從核心課程到跨界實作，助你成為新世代行銷專業人才。</span>
        </p>
      </div>
      <KeyFeatures />
      <CurriculumStructure />
    </section>
  </div>
);

export default CurriculumPage;
