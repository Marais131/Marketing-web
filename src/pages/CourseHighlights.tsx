
import WhyChooseMarketing from "@/components/WhyChooseMarketing";
import CurriculumHighlightsGrid from "@/components/CurriculumHighlightsGrid";
import SEOHead from "@/components/SEOHead";

const CurriculumHighlights = () => (
  <>
    <SEOHead 
      title="行銷系課程 | 品牌策略×心理學×數據分析 - 文化大學行銷學系"
      description="文化大學行銷系創新課程設計，行銷系學生學習品牌策略、消費者心理學、數據分析與電商實戰。行銷系課程結合理論與實務，培養全方位行銷專業技能。"
      keywords="行銷系課程,行銷系學什麼,品牌策略課程,消費者心理學,數位行銷課程,行銷系實習,電商課程,市場研究課程"
      url={window.location.href}
    />
    <WhyChooseMarketing />
    <CurriculumHighlightsGrid />
  </>
);

export default CurriculumHighlights;
