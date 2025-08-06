import { Card, CardContent } from "@/components/ui/card";
import { GradientCard } from "@/components/ui/gradient-card";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { School, GraduationCap, Star, Quote, Briefcase } from "lucide-react";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";

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

const getTypeBadge = (type: string) => {
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
};

const StudentFeedback = () => {
  const [api, setApi] = useState<CarouselApi>();
  const autoplayRef = useRef(
    Autoplay({ 
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      stopOnFocusIn: true
    })
  );

  const handleUserInteraction = useCallback(() => {
    const resetAutoplay = () => {
      setTimeout(() => {
        autoplayRef.current?.reset();
      }, 8000);
    };
    resetAutoplay();
  }, []);

  useEffect(() => {
    if (!api) return;

    api.on('pointerDown', handleUserInteraction);
    api.on('select', handleUserInteraction);

    return () => {
      api.off('pointerDown', handleUserInteraction);
      api.off('select', handleUserInteraction);
    };
  }, [api, handleUserInteraction]);

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden w-full">
      {/* 背景網格 */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#1A4C7A 1px, transparent 1px),
            linear-gradient(90deg, #1A4C7A 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
    </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* 標題區域 - 依照截圖優化 */}
      <FadeInSection className="text-center mb-16">
          {/* 膠囊標籤 */}
          <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-blue-200 bg-white/80 shadow-sm mb-8 text-blue-800 text-lg font-semibold" style={{letterSpacing: '0.02em'}}>
            <svg className="w-6 h-6 text-blue-400 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            學長姊・同學心得回饋
          </div>
          {/* 主標題 */}
          <h2 className="text-[4rem] md:text-[5rem] font-extrabold text-[#1A4C7A] mb-4 leading-[0.95] tracking-tight">真實聲音</h2>
          {/* 副標題 */}
          <div className="text-2xl md:text-3xl text-[#2A7DB1] font-medium mb-6">畢業學長姐、在校生的親身經驗分享</div>
          {/* 裝飾橫線 */}
          <div className="w-32 h-1 bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6] rounded-full mx-auto mb-2"></div>
      </FadeInSection>

        <div className="relative w-screen max-w-none px-0 overflow-visible">
          {/* 卡片區域下方大面積漸層光暈，更柔和的融合 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[99vw] h-[90%] bg-gradient-to-br from-blue-100/30 via-white/80 to-blue-50/30 rounded-3xl blur-3xl opacity-70 -z-10 pointer-events-none"></div>
          <Carousel 
            className="w-full overflow-visible relative"
            plugins={[autoplayRef.current]}
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,  // 無限循環
              dragFree: false,  // 每次滑動一頁
              containScroll: "trimSnaps"  // 優化滑動體驗
            }}
          >
            <CarouselContent className="flex overflow-visible py-4 md:py-8">
              {feedbacks.map((fb, idx) => (
                <CarouselItem
                  key={fb.id}
                  className="basis-full md:basis-1/3 lg:basis-1/3 overflow-visible px-4"
                >
                  <div className="relative overflow-visible">
                    <GradientCard variant="subtle" className="p-8 group magnetic-hover">
                  <div className="relative z-10">
                        {/* 學生頭像和資訊 */}
                        <div className="flex items-center mb-6">
                          <Avatar className="w-16 h-16 mr-4 border-4 border-white shadow-lg">
                            <AvatarImage 
                              src={fb.avatar || "/lovable-uploads/student-activity-2.jpg"} 
                              alt={fb.name}
                            />
                          <AvatarFallback className="bg-gradient-to-br from-[#1A4C7A] to-[#3CB1B6] text-white font-bold text-lg">
                              {fb.name.charAt(0)}
                          </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                            <h3 className="text-lg font-bold text-[#1A4C7A] mb-1">{fb.name}</h3>
                            <p className="text-sm text-[#2A7DB1] mb-1">{fb.identity}</p>
                            <div className="flex items-center gap-2">
                              <Badge className={`text-xs px-2 py-1 ${
                                fb.type === '畢業生' 
                                  ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200' 
                                  : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200'
                              }`}>
                                {fb.type}
                              </Badge>
                              <div className="flex items-center gap-1">
                                {[...Array(fb.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 回饋內容 */}
                        <div className="mb-6">
                          <Quote className="w-8 h-8 text-[#3CB1B6]/60 mb-3" />
                          <p className="text-gray-700 leading-relaxed italic">"{fb.content}"</p>
                      </div>
                        {/* 課程和職位資訊 */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-[#2A7DB1]">
                            <School className="w-4 h-4" />
                            <span className="font-medium">{fb.course}</span>
                        </div>
                          {fb.position && (
                            <div className="flex items-center gap-2 text-sm text-[#1A4C7A]">
                              <Briefcase className="w-4 h-4" />
                              <span className="font-medium">{fb.position}</span>
                    </div>
                          )}
                    </div>
                  </div>
                </GradientCard>
                  </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            {/* 將箭頭放在 Carousel 內部，並用絕對定位顯示在最下方中央 */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex justify-center gap-6 z-40 pb-2">
              <CarouselPrevious
                className="!w-14 !h-14 !rounded-full !bg-white/90 !border-2 !border-[#1A4C7A]/30 !shadow-lg !flex !items-center !justify-center group transition-all duration-200 disabled:opacity-50 disabled:cursor-default hover:!bg-[#1A4C7A] hover:!border-[#1A4C7A]"
              >
                <svg className="w-7 h-7 text-[#1A4C7A] group-hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
              </CarouselPrevious>
              <CarouselNext
                className="!w-14 !h-14 !rounded-full !bg-white/90 !border-2 !border-[#1A4C7A]/30 !shadow-lg !flex !items-center !justify-center group transition-all duration-200 disabled:opacity-50 disabled:cursor-default hover:!bg-[#1A4C7A] hover:!border-[#1A4C7A]"
              >
                <svg className="w-7 h-7 text-[#1A4C7A] group-hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  </section>
);
};

export default StudentFeedback;
