import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";
import TeacherCarousel from "./TeacherCarousel";

const featuredTeachers = [
  {
    name: "駱少康",
    title: "行銷學博士／行銷所所長",
    role: "系主任",
    imgUrl: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
    description: "品牌管理權威，推動「品牌端行銷人才」培育與產學創新，強調實戰與理論並重。"
  },
  {
    name: "孫慶文",
    title: "心理學博士",
    role: "教授",
    imgUrl: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
    description: "美國芝加哥大學心理學博士，專精消費者心理與認知、行銷心理學應用。"
  },
  {
    name: "傅皓政",
    title: "邏輯學專家",
    role: "教授 / 前所長",
    imgUrl: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
    description: "國內邏輯學教學權威，首創將邏輯學納入行銷決策養成、導正行銷職人思維。"
  }
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/e29a8a81-d10a-47d0-a7d5-244e43e72f91.png" 
              alt="師資團隊" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-800">
              頂尖師資，<span className="text-orange-500">實戰引航</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              我們的教授不僅是學者，更是經驗豐富的業界專家。他們將帶領你走在行銷最前線，學習最真實的商業戰略。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <Card className="bg-orange-50/50 border-orange-200/50">
                <CardContent className="pt-6 flex items-start space-x-4">
                  <GraduationCap className="w-8 h-8 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">學術與實務並重</h3>
                    <p className="text-slate-600">教授具備博士學位與豐富業界經驗。</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-50/50 border-blue-200/50">
                <CardContent className="pt-6 flex items-start space-x-4">
                  <Briefcase className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">產學緊密連結</h3>
                    <p className="text-slate-600">提供大量實習機會與企業合作案。</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* 特色教師－新版圖片動態區塊 */}
        <div className="mt-20">
          <TeacherCarousel teachers={featuredTeachers} />
        </div>
      </div>
    </section>
  );
};

export default Faculty;
