
import About from "@/components/About";
import SEOHead from "@/components/SEOHead";

const AboutPage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="系所介紹 | 中國文化大學行銷學系"
        description="深入了解文化大學行銷學系的教育理念、發展歷程與特色優勢。我們以品牌端視野培養新世代行銷專業人才，結合理論與實務，打造業界領先的行銷教育。"
        keywords="文化大學行銷系介紹,系所特色,行銷教育理念,品牌行銷專業,行銷系發展歷程"
        url={window.location.href}
      />
      <About />
    </div>
  );
};

export default AboutPage;
