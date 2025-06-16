
import Faculty from "@/components/Faculty";
import SEOHead from "@/components/SEOHead";

const FacultyPage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="師資陣容 | 中國文化大學行銷學系"
        description="認識文化大學行銷學系的優秀師資團隊，擁有豐富的學術背景與實務經驗，致力於培養下一代行銷領導人才。"
        keywords="行銷系師資,行銷教授,行銷學者,品牌專家,數位行銷專家,消費者行為專家"
        url={window.location.href}
      />
      <Faculty />
    </div>
  );
};

export default FacultyPage;
