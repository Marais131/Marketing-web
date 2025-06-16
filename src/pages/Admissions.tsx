
import Admissions from "@/components/Admissions";
import SEOHead from "@/components/SEOHead";

const AdmissionsPage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="行銷系入學 | 招生簡章×未來出路 - 文化大學行銷學系"
        description="文化大學行銷系招生資訊，行銷系入學管道多元，包含大學部、研究所及學碩一貫。行銷系畢業生出路廣泛，就業率高，薪資優渥。"
        keywords="行銷系入學,行銷系招生,行銷系申請,行銷系出路,行銷系未來,行銷系工作,行銷碩士,行銷系薪水"
        url={window.location.href}
      />
      <Admissions />
    </div>
  );
};

export default AdmissionsPage;
