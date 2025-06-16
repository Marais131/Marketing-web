
import Hero from "@/components/Hero";
import PhotoWall from "@/components/PhotoWall";
import HomeGroupPhoto from "@/components/HomeGroupPhoto";
import CareerSalaryHighlight from "@/components/CareerSalaryHighlight";
import HomeFeed from "@/components/HomeFeed";
import StudentFeedback from "@/components/StudentFeedback";
import SEOHead from "@/components/SEOHead";

const Home = () => {
  return (
    <div className="relative">
      <SEOHead 
        title="中國文化大學行銷學系 | 培養品牌端視野的新世代行銷人才"
        description="文化大學行銷學系專注培養具有品牌專業與跨領域整合力的新世代行銷人才，課程結合創新、數據、心理與美感，引領行銷新變革。畢業起薪最高月薪10萬，多元職涯選擇。"
        keywords="文化大學,行銷學系,品牌行銷,數位行銷,行銷碩士,台北行銷系所,行銷教育,品牌策略,消費者行為,市場研究,行銷人才培育"
        url={window.location.href}
      />
      {/* Hero 首屏形象 */}
      <Hero />
      {/* 校園真實照片流動牆 */}
      <PhotoWall />
      {/* 團體合照 */}
      <HomeGroupPhoto />
      {/* 學生/畢業生心得區塊 */}
      <StudentFeedback />
      {/* 最新動態區（新聞＋活動精選） */}
      <HomeFeed />
      {/* 薪資/職涯亮點（尾段） */}
      <CareerSalaryHighlight />
    </div>
  );
};

export default Home;
