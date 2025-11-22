"use client";
import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn, type Testimonial } from "./testimonials-columns-1";

const alumniData: Testimonial[] = [
  {
    text: "畢業後直接進入電商龍頭，擔任品牌行銷專員。系上教的消費心理學讓我更懂用戶。",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200",
    name: "林雅婷",
    role: "品牌行銷專員 | 蝦皮購物",
  },
  {
    text: "現在在顧問公司做策略分析，行銷系的邏輯訓練讓我快速上手各種產業。",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    name: "王建志",
    role: "策略分析師 | 麥肯錫",
  },
  {
    text: "從實習到正職，現在負責社群媒體營運。數據分析能力是最大優勢。",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    name: "陳美玲",
    role: "社群經理 | 統一企業",
  },
  {
    text: "創業做電商品牌，行銷系的品牌管理課程給了我很多啟發。",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    name: "張志豪",
    role: "創辦人 | 自有品牌",
  },
  {
    text: "在科技公司做產品行銷，跨領域整合能力讓我脫穎而出。",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    name: "李佳穎",
    role: "產品行銷經理 | 微軟",
  },
  {
    text: "畢業後進入廣告公司，創意發想與策略規劃能力備受肯定。",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    name: "黃俊傑",
    role: "創意總監 | 奧美廣告",
  },
  {
    text: "現在負責國際品牌在台行銷，語言能力與文化洞察是關鍵。",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200",
    name: "劉雅文",
    role: "國際行銷經理 | 可口可樂",
  },
  {
    text: "從實習生到主管，行銷系培養的領導力讓我快速晉升。",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200",
    name: "吳佩珊",
    role: "行銷主管 | 全家便利商店",
  },
  {
    text: "創業做數位行銷公司，系上的人脈與實務經驗是最大資產。",
    image: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=200",
    name: "郭志明",
    role: "創辦人 | 數位行銷公司",
  },
];

const AlumniTestimonials = () => {
  const firstColumn = alumniData.slice(0, 3);
  const secondColumn = alumniData.slice(3, 6);
  const thirdColumn = alumniData.slice(6, 9);

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[#1A4C7A] mb-4">
            校友就業成果
          </h3>
          <p className="text-xl text-[#2A7DB1] max-w-3xl mx-auto">
            畢業生遍布各產業，展現行銷專業的多元發展潛力
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[540px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </div>
    </div>
  );
};

export default AlumniTestimonials;
export type { Testimonial };



