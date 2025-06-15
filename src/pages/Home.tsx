import Hero from "@/components/Hero";
import PhotoWall from "@/components/PhotoWall";
import HomeGroupPhoto from "@/components/HomeGroupPhoto";
import CareerSalaryHighlight from "@/components/CareerSalaryHighlight";
import HomeFeed from "@/components/HomeFeed";
import StudentFeedback from "@/components/StudentFeedback";

const Home = () => {
  return (
    <div className="relative">
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
