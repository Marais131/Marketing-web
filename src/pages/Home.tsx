
import Hero from "@/components/Hero";
import AdmissionHighlight from "@/components/AdmissionHighlight";
import PhotoWall from "@/components/PhotoWall";
import PhotoGallery from "@/components/PhotoGallery";
import NewsSection from "@/components/NewsSection";
import KeyFeatures from "@/components/KeyFeatures";
import Faculty from "@/components/Faculty";
import HomeGroupPhoto from "@/components/HomeGroupPhoto";
import CareerSalaryHighlight from "@/components/CareerSalaryHighlight";

const Home = () => {
  return (
    <div className="relative">
      <Hero />

      {/* 薪資/職涯亮點新區塊 */}
      <CareerSalaryHighlight />

      {/* 圖片流動牆 PhotoWall（新）：呈現真實校園面貌 */}
      <PhotoWall />

      {/* 團體合照區塊 */}
      <HomeGroupPhoto />

      {/* 招生導向亮點 */}
      <AdmissionHighlight />
      
      {/* 整合後的重點特色 */}
      <KeyFeatures />
      
      {/* 師資陣容 */}
      <Faculty />
      
      {/* 活動錦集與最新消息 */}
      <PhotoGallery />
      <NewsSection />
    </div>
  );
};

export default Home;

