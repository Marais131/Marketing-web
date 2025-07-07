import Activities from "@/components/Activities";
import SEOHead from "@/components/SEOHead";

const ActivitiesPage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="活動消息 | 定期活動×近期活動×行政公告 - 文化大學行銷學系"
        description="文化大學行銷系活動消息中心，包含行銷研討會、校友回娘家、系內活動、行銷策略競賽等定期活動，以及最新行政公告與選課資訊。"
        keywords="行銷系活動,行銷研討會,校友回娘家,行銷競賽,選課公告,獎學金,行政消息,系內活動,活動報名"
        url={window.location.href}
      />
      <Activities />
    </div>
  );
};

export default ActivitiesPage;
