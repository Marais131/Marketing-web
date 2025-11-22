"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href?: string;
  image: string;
  role?: string;
  name?: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "luo-shaokang",
    name: "駱少康",
    title: "行銷學博士／行銷所所長",
    role: "系主任",
    description:
      "行銷管理、消費者行為、行銷數量法、市場調查研究，品牌管理權威，推動產學創新。",
    href: "/faculty",
    image: "/lovable-uploads/luo-shaokang.png",
  },
  {
    id: "xie-aiyun",
    name: "謝艾芸",
    title: "行銷學博士",
    role: "副所長",
    description:
      "線上產品與價格策略、電腦媒介溝通、社群行銷、網路廣告、網路拍賣等數位行銷領域。",
    href: "/faculty",
    image: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
  },
  {
    id: "zhou-jianheng",
    name: "周建亨",
    title: "行銷學博士",
    role: "教授",
    description:
      "行銷管理、消費者行為、行銷數量法，Journal of Marketing Research等頂尖期刊發表。",
    href: "/faculty",
    image: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
  },
  {
    id: "qi-dezhang",
    name: "齊德彰",
    title: "財務學博士",
    role: "教授",
    description:
      "創業財務規劃、財務會計、管理會計、財務模型，跨領域專家結合財務與行銷。",
    href: "/faculty",
    image: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
  },
  {
    id: "sun-qingwen",
    name: "孫慶文",
    title: "心理學博士",
    role: "副教授",
    description:
      "消費者心理學、認知心理學、行銷心理學應用，專精消費者行為研究。",
    href: "/faculty",
    image: "/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png",
  },
  {
    id: "lin-caimei",
    name: "林彩梅",
    title: "國際企業管理博士",
    role: "教授",
    description:
      "國際企業管理、多國籍企業研究、國際行銷策略，國際化經營專家。",
    href: "/faculty",
    image: "/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png",
  },
];

const Gallery4 = ({
  title = "師資陣容",
  description = "認識我們優秀的師資團隊，每位教授都具備豐富的學術背景與實務經驗，致力於培養具備品牌端視野的新世代行銷人才。",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32 bg-gradient-to-br from-white via-slate-50/50 to-orange-50/30">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl text-[#1A4C7A]">
              {title}
            </h2>
            <p className="max-w-lg text-[#2A7DB1] text-lg">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto hover:bg-[#1A4C7A]/10 text-[#1A4C7A]"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto hover:bg-[#1A4C7A]/10 text-[#1A4C7A]"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.name || item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      {item.role && (
                        <div className="mb-2 inline-block bg-[#3CB1B6] text-white px-3 py-1 rounded-full text-sm font-medium">
                          {item.role}
                        </div>
                      )}
                      <div className="mb-2 pt-2 text-xl font-semibold md:mb-3 md:pt-2 lg:pt-2">
                        {item.name || item.title}
                      </div>
                      <div className="mb-4 text-sm text-white/90 font-medium">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9 text-white/80">
                        {item.description}
                      </div>
                      {item.href && (
                        <div className="flex items-center text-sm text-white/90">
                          了解更多{" "}
                          <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#1A4C7A]" : "bg-[#1A4C7A]/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
