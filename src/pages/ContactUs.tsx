
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";

const ContactPage = () => {
  return (
    <div>
      <SEOHead 
        title="行銷系聯絡 | 招生諮詢×課程資訊 - 文化大學行銷學系"
        description="聯絡文化大學行銷系，獲取行銷系招生資訊、行銷系課程諮詢。行銷系位於台北市士林區，歡迎來電或來信洽詢行銷系相關問題。"
        keywords="行銷系聯絡,行銷系電話,行銷系地址,行銷系諮詢,招生諮詢,課程諮詢,文化大學行銷系聯絡方式"
        url={window.location.href}
      />
      <Contact />
    </div>
  );
};

export default ContactPage;
