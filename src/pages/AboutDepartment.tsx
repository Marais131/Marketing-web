
import About from "@/components/About";
import SEOHead from "@/components/SEOHead";

const AboutPage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="行銷系介紹 | 全台唯一品牌端行銷系 - 文化大學行銷學系"
        description="文化大學行銷系是全台唯一專注品牌端思維的行銷學系。行銷系以心理學為基礎，培養具備消費者洞察、策略思維的行銷專業人才。了解行銷系特色與發展方向。"
        keywords="行銷系介紹,文化大學行銷系,行銷學系特色,品牌行銷系,行銷系課程,行銷系師資,台北行銷系,行銷系推薦"
        url={window.location.href}
      />
      <About />
    </div>
  );
};

export default AboutPage;
