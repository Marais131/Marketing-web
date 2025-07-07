import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { School, GraduationCap, Star, Quote } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    name: "吳佳蓉",
    identity: "行銷學系 111級畢業生",
    type: "畢業生",
    avatar: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
    content:
      "在文化行銷系的學習，讓我在行銷策略、消費者洞察、數據實作等多方面全面成長。五年一貫學碩制度讓我能提早進入職場，連結企業實作真的很有價值！",
    course: "五年一貫專案實作",
    year: "2024",
    rating: 5,
    position: "品牌經理 @ 知名電商"
  },
  {
    id: 2,
    name: "林子豪",
    identity: "行銷學系大四",
    type: "在校生",
    avatar: "",
    content:
      "最棒的是有許多跨領域課程和實作機會，像是心理學、邏輯學都對品牌行銷有很大幫助，同學彼此氣氛超好，老師也會給很多職涯建議。",
    course: "消費者心理學",
    year: "2024",
    rating: 5,
    position: "學生會行銷部長"
  },
  {
    id: 3,
    name: "Chen Grace",
    identity: "行銷學系 110級畢業生",
    type: "畢業生",
    avatar: "",
    content:
      "文化的行銷系讓我對品牌管理和創意策略產生濃厚興趣，同時學會數據分析，實際上線電商專案很有成就感！非常推薦給想要跨足數位行銷的同學。",
    course: "品牌管理與電商專案",
    year: "2023",
    rating: 5,
    position: "數位行銷專員 @ 新創公司"
  },
  {
    id: 4,
    name: "張雅婷",
    identity: "行銷學系大三",
    type: "在校生",
    avatar: "",
    content:
      "行銷系的課程讓我學會用數據分析消費者行為，邏輯推理能力大幅提升。老師會帶我們實作市場調查，讓理論與實務結合，對未來職涯很有幫助。",
    course: "數據分析與市場調查",
    year: "2024",
    rating: 5,
    position: "行銷競賽校隊成員"
  },
  {
    id: 5,
    name: "李承諺",
    identity: "行銷學系 109級畢業生",
    type: "畢業生",
    avatar: "",
    content:
      "文化行銷系強調消費心理與嚴謹決策，讓我在職場上能精準分析市場趨勢。學期間參與專案實作，累積了寶貴經驗，畢業後很快就找到理想工作。",
    course: "消費心理與決策分析",
    year: "2022",
    rating: 5,
    position: "行銷分析師 @ 金融科技公司"
  },
];

function getTypeBadge(type: string) {
  return (
    <Badge
      className={
        type === "畢業生"
          ? "bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] text-white border-0"
          : "bg-gradient-to-r from-[#2A7DB1] to-[#3CB1B6] text-white border-0"
      }
    >
      {type === "畢業生" ? <GraduationCap className="w-3 h-3 mr-1" /> : <School className="w-3 h-3 mr-1" />}
      {type}
    </Badge>
  );
}

const StudentFeedback = () => (
  <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden w-full">
    {/* 背景裝飾 */}
    <div className="absolute inset-0">
      {/* 大型背景圓 */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#3CB1B6]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1A4C7A]/3 rounded-full blur-3xl"></div>
      {/* 網格背景 */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#2A7DB1 1px, transparent 1px),
            linear-gradient(90deg, #2A7DB1 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      {/* 浮動元素 */}
      <div className="absolute top-32 left-20 w-3 h-3 bg-[#3CB1B6] rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-32 w-4 h-4 bg-[#2A7DB1] rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 right-16 w-2 h-2 bg-[#1A4C7A] rounded-full animate-pulse delay-700"></div>
    </div>

    <div className="container mx-auto px-2 md:px-8 lg:px-16 max-w-[100vw] w-full relative z-10">
      {/* 標題區域 */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-gradient-to-r from-[#1A4C7A]/10 to-[#3CB1B6]/10 px-6 py-3 rounded-full mb-6 border border-[#2A7DB1]/20">
          <Star className="w-5 h-5 mr-2 text-[#2A7DB1]" />
          <span className="text-[#1A4C7A] font-semibold">學長姊・同學心得回饋</span>
        </div>
        <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black text-[#1A4C7A] mb-6 leading-[0.9] tracking-tight">
          真實聲音
        </h2>
        <p className="text-xl md:text-2xl text-[#2A7DB1] font-medium max-w-3xl mx-auto">
          畢業學長姐、在校生的親身經驗分享
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6] rounded-full mx-auto mt-6"></div>
      </div>

      {/* 輪播卡片 */}
      <div className="w-full max-w-[1800px] mx-auto px-0 md:px-4 lg:px-8 relative">
        {/* 卡片區域下方大面積漸層光暈，聚焦融合 */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[98%] h-[85%] bg-gradient-to-br from-blue-100/40 via-white/60 to-blue-50/30 rounded-3xl blur-2xl opacity-70 -z-10"></div>
        <Carousel className="w-full">
          <CarouselContent className="gap-0 py-4 md:py-8">
            {feedbacks.map((fb) => (
              <CarouselItem key={fb.id} className="w-full md:basis-1/2 lg:basis-1/2 block">
                <Card className="h-full max-w-[420px] w-full bg-white/70 backdrop-blur-md border border-blue-100/60 rounded-3xl shadow-[0_8px_32px_0_rgba(44,180,200,0.10)] hover:shadow-[0_12px_40px_0_rgba(44,180,200,0.16)] hover:ring-2 hover:ring-blue-200/30 transition-all duration-500 hover:-translate-y-2 overflow-visible group relative mx-0 my-1">
                  {/* 柔和光暈 */}
                  <div className="absolute -inset-2 z-0 pointer-events-none rounded-3xl bg-blue-100/20 blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    {/* 引號裝飾 */}
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-[#3CB1B6]/20 group-hover:text-[#3CB1B6]/40 transition-colors duration-300" />
                    </div>
                    {/* 評分星星 */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(fb.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#3CB1B6] text-[#3CB1B6]" />
                      ))}
                    </div>
                    {/* 心得內容 */}
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                      {fb.content}
                    </blockquote>
                    {/* 用戶信息 */}
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-14 h-14 border-2 border-[#3CB1B6]/20">
                        {fb.avatar ? (
                          <AvatarImage src={fb.avatar} alt={fb.name} />
                        ) : (
                          <AvatarFallback className="bg-gradient-to-br from-[#1A4C7A] to-[#3CB1B6] text-white font-bold text-lg">
                            {fb.name.slice(0, 2)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-lg text-[#1A4C7A]">{fb.name}</h4>
                          {getTypeBadge(fb.type)}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{fb.identity}</p>
                        <p className="text-xs text-[#2A7DB1] font-medium">{fb.position}</p>
                      </div>
                    </div>
                    {/* 課程與年份 */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-2 h-2 bg-[#3CB1B6] rounded-full"></div>
                        <span>{fb.course}</span>
                      </div>
                      <span className="text-sm text-gray-400">{fb.year}</span>
                    </div>
                    {/* 主色系漸層線條 */}
                    <div className="mt-8 h-1 w-2/3 mx-auto bg-gradient-to-r from-[#1A4C7A] via-[#2A7DB1] to-[#3CB1B6] rounded-full"></div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative left-0 top-0 border-2 border-[#2A7DB1] text-[#2A7DB1] hover:bg-[#2A7DB1] hover:text-white" />
            <CarouselNext className="relative right-0 top-0 border-2 border-[#2A7DB1] text-[#2A7DB1] hover:bg-[#2A7DB1] hover:text-white" />
          </div>
        </Carousel>
      </div>

      {/* CTA 區域 - 優化銜接 */}
      <div className="text-center mt-16 bg-gradient-to-br from-[#1A4C7A]/8 to-[#3CB1B6]/8 rounded-3xl p-8 md:p-12 border border-[#2A7DB1]/10 max-w-[1200px] mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1A4C7A] mb-4">
          想了解更多學習心得？
        </h3>
        <p className="text-lg text-[#2A7DB1] mb-6">
          與我們的學長姐直接對話，獲得第一手的學習經驗分享
        </p>
        <a 
          href="https://www.facebook.com/pccu.marketing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] hover:from-[#2A7DB1] hover:to-[#3CB1B6] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          聯絡學長姐
        </a>
      </div>
      
      {/* 底部過渡到最新消息 */}
      <div className="mt-16 text-center">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#2A7DB1]/30 to-transparent mx-auto mb-4"></div>
        <p className="text-[#2A7DB1]/60 text-sm font-medium">接下來看看我們的最新動態</p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#3CB1B6]/20 to-transparent mx-auto mt-2"></div>
      </div>
    </div>
  </section>
);

export default StudentFeedback;
