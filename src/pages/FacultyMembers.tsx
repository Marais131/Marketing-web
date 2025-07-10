
import Faculty from "@/components/Faculty";
import SEOHead from "@/components/SEOHead";

const FacultyPage = () => {
  return (
    <div>
      <SEOHead 
        title="行銷系師資 | 業界專家×學術權威 - 文化大學行銷學系"
        description="文化大學行銷系擁有優秀師資陣容，行銷系教授具備豐富學術背景與實務經驗。行銷系師資專精品牌管理、消費者行為、數位行銷等領域。"
        keywords="行銷系師資,行銷系教授,品牌專家,數位行銷專家,消費者行為專家,行銷學者,文化大學行銷系老師"
        url={window.location.href}
      />
      <Faculty />
    </div>
  );
};

export default FacultyPage;
