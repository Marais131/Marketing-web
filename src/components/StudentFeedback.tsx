
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { School, GraduationCap, Star } from "lucide-react";

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
  },
];

function getTypeBadge(type: string) {
  return (
    <Badge
      className={
        type === "畢業生"
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
          : "bg-gradient-to-r from-teal-500 to-green-400 text-white"
      }
    >
      {type === "畢業生" ? <GraduationCap className="w-3 h-3 mr-1" /> : <School className="w-3 h-3 mr-1" />}
      {type}
    </Badge>
  );
}

const StudentFeedback = () => (
  <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative z-10">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <Badge className="bg-gradient-to-r from-purple-100 to-teal-100 text-teal-700 border border-teal-200/40 px-5 py-3 rounded-full mb-5 text-sm font-medium shadow-sm">
          <Star className="w-4 h-4 mr-2" />
          學長姊／同學心得回饋
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-2">
          品牌行銷人的真實聲音
        </h2>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          畢業學長姐、在校生的親身經驗分享，領略課程亮點與成長收穫
        </p>
      </div>
      {/* 輪播卡片 */}
      <Carousel className="w-full max-w-3xl mx-auto">
        <CarouselContent>
          {feedbacks.map((fb) => (
            <CarouselItem key={fb.id}>
              <Card className="shadow-md p-6 flex flex-col gap-3 bg-white border-0 rounded-2xl">
                <div className="flex items-center gap-4 mb-2">
                  <Avatar>
                    {fb.avatar ? (
                      <AvatarImage src={fb.avatar} alt={fb.name} />
                    ) : (
                      <AvatarFallback>
                        {fb.name.slice(0, 2)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <div className="font-bold text-base text-slate-800 flex items-center gap-1">
                      {fb.name} {getTypeBadge(fb.type)}
                    </div>
                    <div className="text-xs text-slate-500">{fb.identity}</div>
                  </div>
                </div>
                <div className="text-slate-700 font-medium text-base mb-2 font-serif">
                  「{fb.content}」
                </div>
                <div className="flex gap-3 items-center text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Book className="w-3 h-3" /> {fb.course}
                  </span>
                  <span>／{fb.year}</span>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

function Book(props: React.SVGProps<SVGSVGElement>) {
  // 簡易小書本icon
  return (
    <svg {...props} viewBox="0 0 16 16" fill="none">
      <rect x="2" y="3" width="12" height="10" rx="2" fill="#4fd1c5" />
      <path d="M8 3v10" stroke="#2b6cb0" strokeWidth={1.2}/>
    </svg>
  );
}

export default StudentFeedback;
