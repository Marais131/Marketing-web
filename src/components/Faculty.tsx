import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Star, TrendingUp } from "lucide-react";
import TeacherCarousel from "./TeacherCarousel";
import { Gallery4 } from "@/components/ui/gallery4";

const featuredTeachers = [
  {
    name: "駱少康",
    title: "行銷學博士／行銷所所長",
    role: "系主任",
    imgUrl: "/lovable-uploads/luo-shaokang.png",
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

// 轉換為 Gallery4 格式的資料
const gallery4Teachers = [
  {
    id: "luo-shaokang",
    name: "駱少康",
    title: "行銷學博士／行銷所所長",
    role: "系主任",
    description: "行銷管理、消費者行為、行銷數量法、市場調查研究，品牌管理權威，推動產學創新。",
    href: "/faculty",
    image: "/lovable-uploads/luo-shaokang.png",
  },
  {
    id: "xie-aiyun",
    name: "謝艾芸",
    title: "行銷學博士",
    role: "副所長",
    description: "線上產品與價格策略、電腦媒介溝通、社群行銷、網路廣告、網路拍賣等數位行銷領域。",
    href: "/faculty",
    image: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
  },
  {
    id: "zhou-jianheng",
    name: "周建亨",
    title: "行銷學博士",
    role: "教授",
    description: "行銷管理、消費者行為、行銷數量法，Journal of Marketing Research等頂尖期刊發表。",
    href: "/faculty",
    image: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
  },
  {
    id: "qi-dezhang",
    name: "齊德彰",
    title: "財務學博士",
    role: "教授",
    description: "創業財務規劃、財務會計、管理會計、財務模型，跨領域專家結合財務與行銷。",
    href: "/faculty",
    image: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
  },
  {
    id: "sun-qingwen",
    name: "孫慶文",
    title: "心理學博士",
    role: "副教授",
    description: "消費者心理學、認知心理學、行銷心理學應用，專精消費者行為研究。",
    href: "/faculty",
    image: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
  },
  {
    id: "lin-caimei",
    name: "林彩梅",
    title: "國際企業管理博士",
    role: "教授",
    description: "國際企業管理、多國籍企業研究、國際行銷策略，國際化經營專家。",
    href: "/faculty",
    image: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
  },
  {
    id: "you-huiru",
    name: "游慧茹",
    title: "行銷學博士",
    role: "副教授",
    description: "品牌管理、消費者行為分析、行銷策略規劃，理論與實務並重的教學專家。",
    href: "/faculty",
    image: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
  },
  {
    id: "lin-longyi",
    name: "林隆儀",
    title: "管理學博士",
    role: "副教授",
    description: "服務行銷、關係行銷、行銷管理，專注於服務業行銷策略研究。",
    href: "/faculty",
    image: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
  },
  {
    id: "liu-meiqi",
    name: "劉美琪",
    title: "傳播學博士",
    role: "副教授",
    description: "整合行銷傳播、廣告學、媒體策略，傳播與行銷跨領域研究專家。",
    href: "/faculty",
    image: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
  },
  {
    id: "huang-shiming",
    name: "黃識銘",
    title: "資訊管理博士",
    role: "副教授",
    description: "數位行銷、電子商務、行銷資訊系統，科技與行銷整合應用專家。",
    href: "/faculty",
    image: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
  },
  {
    id: "cai-minzhang",
    name: "蔡旻璋",
    title: "統計學博士",
    role: "副教授",
    description: "市場調查、行銷研究方法、統計分析，量化行銷研究方法專家。",
    href: "/faculty",
    image: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
  },
  {
    id: "wu-shihao",
    name: "吳師豪",
    title: "行銷學博士",
    role: "助理教授",
    description: "創新行銷、新產品開發、創業行銷，新世代行銷趨勢研究專家。",
    href: "/faculty",
    image: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
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
              src="/lovable-uploads/student-gathering-bg.jpg"
              alt="師資團隊"
              className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
            />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500"></div>
              <Star className="w-6 h-6 text-orange-500" />
              <h2 className="text-4xl font-bold text-slate-800">師資陣容</h2>
            </div>
            
            <h3 className="text-2xl font-semibold text-slate-700">
              頂尖學者 · 實務專家 · 學術領袖
            </h3>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              我們的師資團隊匯集了行銷學、心理學、財務學、統計學等多領域的專業人才，
              每位教授都具備豐富的學術背景與實務經驗，致力於培養具備品牌端視野的新世代行銷人才。
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">12位</div>
                  <div className="text-sm text-slate-600">專業師資</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">15+</div>
                  <div className="text-sm text-slate-600">研究領域</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 使用新的 Gallery4 組件 */}
        <Gallery4 
          title="師資陣容"
          description="認識我們優秀的師資團隊，每位教授都具備豐富的學術背景與實務經驗，致力於培養具備品牌端視野的新世代行銷人才。"
          items={gallery4Teachers}
        />

        {/* 師資特色統計 */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">
          <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-2">12位</h4>
              <p className="text-slate-600">專業師資</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-2">100%</h4>
              <p className="text-slate-600">博士學位</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-2">15+</h4>
              <p className="text-slate-600">研究領域</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-2">20+</h4>
              <p className="text-slate-600">年實務經驗</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
