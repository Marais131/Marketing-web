
import Activities from "@/components/Activities";
import SEOHead from "@/components/SEOHead";

const ActivitiesPage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="行銷系活動 | 學術研討×產業實習×競賽得獎 - 文化大學行銷學系"
        description="文化大學行銷系豐富活動成果，行銷系學生參與學術研討會、產業實習、行銷競賽等多元學習活動。行銷系重視實務經驗與理論結合。"
        keywords="行銷系活動,學術研討會,產業實習,行銷競賽,校外參訪,行銷系成果,學生活動,行銷實務"
        url={window.location.href}
      />
      <Activities />
    </div>
  );
};

export default ActivitiesPage;
