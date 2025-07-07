import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Star, TrendingUp } from "lucide-react";
import TeacherCarousel from "./TeacherCarousel";

const featuredTeachers = [
  {
    name: "駱少康",
    title: "行銷學博士／行銷所所長",
    role: "系主任",
    imgUrl: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
    description: "行銷管理、消費者行為、行銷數量法、市場調查研究，品牌管理權威，推動產學創新。"
  },
  {
    name: "謝艾芸",
    title: "行銷學博士",
    role: "副所長",
    imgUrl: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
    description: "線上產品與價格策略、電腦媒介溝通、社群行銷、網路廣告、網路拍賣等數位行銷領域。"
  },
  {
    name: "周建亨",
    title: "行銷學博士",
    role: "教授",
    imgUrl: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
    description: "行銷管理、消費者行為、行銷數量法，Journal of Marketing Research等頂尖期刊發表。"
  },
  {
    name: "齊德彰",
    title: "財務學博士",
    role: "教授",
    imgUrl: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
    description: "創業財務規劃、財務會計、管理會計、財務模型，跨領域專家結合財務與行銷。"
  },
  {
    name: "孫慶文",
    title: "心理學博士",
    role: "副教授",
    imgUrl: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
    description: "消費者心理學、認知心理學、行銷心理學應用，專精消費者行為研究。"
  },
  {
    name: "林彩梅",
    title: "國際企業管理博士",
    role: "教授",
    imgUrl: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
    description: "國際企業管理、多國籍企業研究、國際行銷策略，國際化經營專家。"
  },
  {
    name: "游慧茹",
    title: "行銷學博士",
    role: "副教授",
    imgUrl: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
    description: "品牌管理、消費者行為分析、行銷策略規劃，理論與實務並重的教學專家。"
  },
  {
    name: "林隆儀",
    title: "管理學博士",
    role: "副教授",
    imgUrl: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
    description: "服務行銷、關係行銷、行銷管理，專注於服務業行銷策略研究。"
  },
  {
    name: "劉美琪",
    title: "傳播學博士",
    role: "副教授",
    imgUrl: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
    description: "整合行銷傳播、廣告學、媒體策略，傳播與行銷跨領域研究專家。"
  },
  {
    name: "黃識銘",
    title: "資訊管理博士",
    role: "副教授",
    imgUrl: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
    description: "數位行銷、電子商務、行銷資訊系統，科技與行銷整合應用專家。"
  },
  {
    name: "蔡旻璋",
    title: "統計學博士",
    role: "副教授",
    imgUrl: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
    description: "市場調查、行銷研究方法、統計分析，量化行銷研究方法專家。"
  },
  {
    name: "吳師豪",
    title: "行銷學博士",
    role: "助理教授",
    imgUrl: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
    description: "創新行銷、新產品開發、創業行銷，新世代行銷趨勢研究專家。"
  }
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-32 bg-gradient-to-br from-white via-slate-50/50 to-orange-50/30">
      <div className="container mx-auto px-6">
        {/* 主要介紹區域 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <img 
              src="/lovable-uploads/e29a8a81-d10a-47d0-a7d5-244e43e72f91.png" 
              alt="中國文化大學行銷系師資陣容" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border border-white/20"
            />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-orange-500" />
                <span className="text-orange-600 font-semibold text-lg">頂尖師資陣容</span>
              </div>
              <h2 className="text-5xl font-bold text-slate-800 leading-tight">
                頂尖師資，<br/>
                <span className="text-orange-500">實戰引航</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                我們的教授不僅是學者，更是經驗豐富的業界專家。他們將帶領你走在行銷最前線，學習最真實的商業戰略。
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 pb-6 flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">學術與實務並重</h3>
                    <p className="text-slate-600 leading-relaxed">教授具備博士學位與豐富業界經驗，理論實務完美結合。</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 pb-6 flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-xl">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">產學緊密連結</h3>
                    <p className="text-slate-600 leading-relaxed">提供大量實習機會與企業合作案，直接對接職場需求。</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 新增成就統計 */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-3xl font-bold text-slate-800">95%</span>
                </div>
                <p className="text-sm text-slate-600">博士學位師資</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-3xl font-bold text-slate-800">12+</span>
                </div>
                <p className="text-sm text-slate-600">專業師資</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Briefcase className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-3xl font-bold text-slate-800">10+</span>
                </div>
                <p className="text-sm text-slate-600">年業界經驗</p>
              </div>
            </div>
          </div>
        </div>

        {/* 師資展示區域 */}
        <div className="relative">
          {/* 裝飾性背景元素 */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <TeacherCarousel teachers={featuredTeachers} />
        </div>
      </div>
    </section>
  );
};

export default Faculty;
