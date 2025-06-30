import Hero from "@/components/Hero";
import PhotoWall from "@/components/PhotoWall";
import HomeGroupPhoto from "@/components/HomeGroupPhoto";
import CareerSalaryHighlight from "@/components/CareerSalaryHighlight";
import HomeFeed from "@/components/HomeFeed";
import StudentFeedback from "@/components/StudentFeedback";
import SEOHead from "@/components/SEOHead";
import { useState, useEffect } from "react";

const Home = () => {
  const [backendStatus, setBackendStatus] = useState<'checking' | 'connected' | 'offline'>('checking');

  // 檢查後端連接狀態
  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/content');
        if (response.ok) {
          setBackendStatus('connected');
        } else {
          setBackendStatus('offline');
        }
      } catch (error) {
        setBackendStatus('offline');
      }
    };

    checkBackendStatus();
  }, []);

  return (
    <div className="relative">
      <SEOHead 
        title="文化大學行銷系 | 全台唯一品牌端行銷系所 - 中國文化大學行銷學系"
        description="文化大學行銷系是全台唯一專注培養品牌端思維的行銷系所。行銷系課程結合心理學、數據分析與創意實戰，培育新世代行銷專業人才。行銷系畢業生就業率高，起薪優渥。"
        keywords="文化大學行銷系,行銷系,台北行銷系,行銷學系,品牌行銷系,數位行銷系,行銷系推薦,行銷系出路,行銷系課程,文化行銷系"
        url={window.location.href}
      />
      {/* 後端狀態指示器 */}
      <div className="fixed top-4 right-4 z-50">
        <div className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
          backendStatus === 'connected' 
            ? 'bg-green-100 text-green-800' 
            : backendStatus === 'offline'
            ? 'bg-red-100 text-red-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            backendStatus === 'connected' 
              ? 'bg-green-500 animate-pulse' 
              : backendStatus === 'offline'
              ? 'bg-red-500'
              : 'bg-yellow-500 animate-pulse'
          }`}></div>
          {backendStatus === 'connected' && '管理後台已連接'}
          {backendStatus === 'offline' && '管理後台離線'}
          {backendStatus === 'checking' && '檢查連接中...'}
        </div>
      </div>
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
