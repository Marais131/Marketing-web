"use client";
import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn, type Testimonial } from "./testimonials-columns-1";

const partnersData: Testimonial[] = [
  {
    text: "文化大學行銷系培養的學生具備扎實的理論基礎與實務能力，是我們優先合作的對象。",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200",
    name: "統一企業",
    role: "策略合作夥伴",
  },
  {
    text: "行銷系學生在實習期間展現優秀的創意發想與執行能力，為我們帶來新的視角。",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200",
    name: "奧美廣告",
    role: "實習合作企業",
  },
  {
    text: "與文化大學行銷系的產學合作，讓我們能接觸到最前沿的行銷思維與人才。",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=200",
    name: "蝦皮購物",
    role: "電商合作夥伴",
  },
  {
    text: "行銷系畢業生在我們公司表現優異，具備完整的品牌管理與市場分析能力。",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200",
    name: "可口可樂",
    role: "品牌合作夥伴",
  },
  {
    text: "文化大學行銷系是我們重要的學術合作夥伴，共同推動行銷教育的創新發展。",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=200",
    name: "麥肯錫",
    role: "策略顧問夥伴",
  },
  {
    text: "行銷系學生在實務專案中展現的專業素養，讓我們對台灣行銷教育充滿信心。",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200",
    name: "微軟",
    role: "科技合作夥伴",
  },
];

const PartnersTestimonials = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-[#1A4C7A]/5 to-[#3CB1B6]/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A4C7A] mb-3">
            合作夥伴與媒體背書
          </h3>
          <p className="text-lg text-[#2A7DB1] max-w-2xl mx-auto">
            與知名企業建立長期合作關係，獲得業界一致肯定
          </p>
        </motion.div>

        <div className="flex justify-center [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[400px] overflow-hidden">
          <TestimonialsColumn testimonials={partnersData} duration={25} />
        </div>
      </div>
    </div>
  );
};

export default PartnersTestimonials;
export type { Testimonial };



