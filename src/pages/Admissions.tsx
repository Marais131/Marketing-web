
import Admissions from "@/components/Admissions";
import SEOHead from "@/components/SEOHead";

const AdmissionsPage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="入學與未來 | 中國文化大學行銷學系"
        description="了解文化大學行銷學系的入學資訊、招生簡章、未來出路與職涯發展。畢業生廣泛任職於各大企業，起薪優渥，發展前景看好。"
        keywords="行銷系入學,行銷碩士招生,行銷系出路,行銷職涯,行銷系未來發展,行銷工作機會"
        url={window.location.href}
      />
      <Admissions />
    </div>
  );
};

export default AdmissionsPage;
