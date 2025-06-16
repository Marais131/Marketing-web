
import WhyChooseMarketing from "@/components/WhyChooseMarketing";
import CurriculumHighlightsGrid from "@/components/CurriculumHighlightsGrid";
import SEOHead from "@/components/SEOHead";

const CurriculumHighlights = () => (
  <>
    <SEOHead 
      title="課程亮點 | 中國文化大學行銷學系"
      description="探索文化大學行銷學系的創新課程設計，從品牌策略、心理學洞察、數據分析到美感創意與電商實戰，全方位培養行銷專業技能。"
      keywords="行銷課程,品牌策略課程,數位行銷課程,消費者心理學,市場研究方法,行銷實務,電商行銷"
      url={window.location.href}
    />
    <WhyChooseMarketing />
    <CurriculumHighlightsGrid />
  </>
);

export default CurriculumHighlights;
