
import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import NewsSection from "@/components/NewsSection";
import CurriculumStructure from "@/components/CurriculumStructure";
import FeaturedFaculty from "@/components/FeaturedFaculty";
import SpecialPrograms from "@/components/SpecialPrograms";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      
      {/* 創新過渡區塊 */}
      <section className="relative py-20 bg-gradient-to-br from-white via-slate-50 to-teal-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-800 via-teal-600 to-blue-600 bg-clip-text text-transparent mb-8 leading-tight">
              突破傳統邊界
              <br />
              <span className="text-2xl md:text-3xl font-medium text-slate-600">創造行銷新典範</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              全台唯一設定聚焦培育「品牌端(甲方)思維行銷人才」之系所
            </p>
          </div>
        </div>
      </section>
      
      {/* 課程架構展示 */}
      <CurriculumStructure />
      
      {/* 明星師資展示 */}
      <FeaturedFaculty />
      
      {/* 特色計畫 */}
      <SpecialPrograms />
      
      <PhotoGallery />
      <NewsSection />
    </div>
  );
};

export default Home;
