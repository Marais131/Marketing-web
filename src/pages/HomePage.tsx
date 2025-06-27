
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
        title="文化大學行銷系 | 全台唯一品牌端行銷系所 - 中國文化大學行銷學系"
        description="文化大學行銷系是全台唯一專注培養品牌端思維的行銷系所。行銷系課程結合心理學、數據分析與創意實戰，培育新世代行銷專業人才。行銷系畢業生就業率高，起薪優渥。"
        keywords="文化大學行銷系,行銷系,台北行銷系,行銷學系,品牌行銷系,數位行銷系,行銷系推薦,行銷系出路,行銷系課程,文化行銷系"
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
