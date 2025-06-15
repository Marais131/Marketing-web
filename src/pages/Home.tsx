import Hero from "@/components/Hero";
import AdmissionHighlight from "@/components/AdmissionHighlight";
import PhotoGallery from "@/components/PhotoGallery";
import NewsSection from "@/components/NewsSection";
import KeyFeatures from "@/components/KeyFeatures";
import Faculty from "@/components/Faculty";
import HomeGroupPhoto from "@/components/HomeGroupPhoto";

const Home = () => {
  return (
    <div className="relative">
      <Hero />

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
