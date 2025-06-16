
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";

const ContactPage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="聯絡我們 | 中國文化大學行銷學系"
        description="聯絡文化大學行銷學系，獲取更多招生資訊、課程諮詢或合作機會。我們位於台北市士林區，歡迎來電或來信洽詢。"
        keywords="文化大學行銷系聯絡方式,行銷系電話,行銷系地址,招生諮詢,課程諮詢"
        url={window.location.href}
      />
      <Contact />
    </div>
  );
};

export default ContactPage;
