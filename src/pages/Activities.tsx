
import Activities from "@/components/Activities";
import SEOHead from "@/components/SEOHead";

const ActivitiesPage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="活動成果 | 中國文化大學行銷學系"
        description="探索文化大學行銷學系豐富的活動成果，包含學術研討會、產業實習、競賽得獎、校外參訪等多元學習活動。"
        keywords="行銷系活動,學術研討會,產業實習,行銷競賽,校外參訪,學生成果展示"
        url={window.location.href}
      />
      <Activities />
    </div>
  );
};

export default ActivitiesPage;
