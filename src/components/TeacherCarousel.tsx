import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Award, BookOpen, Users, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Teacher = {
  name: string;
  title: string;
  role: string;
  imgUrl?: string;
  description: string;
};

interface TeacherCarouselProps {
  teachers: Teacher[];
}

const placeholderImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
];

const TeacherCarousel: React.FC<TeacherCarouselProps> = ({ teachers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 每次顯示3位老師，更大的卡片尺寸
  const teachersPerView = 3;
  const totalSlides = Math.ceil(teachers.length / teachersPerView);

  // 自動輪播
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // 延長到10秒

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="relative w-full bg-white">
      {/* 標題區域 - 簡潔設計 */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
          <Star className="w-6 h-6 text-orange-500" />
          <h3 className="text-4xl font-light text-slate-800 tracking-wide">師資陣容</h3>
          <Star className="w-6 h-6 text-orange-500" />
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
        </div>
        <p className="text-lg text-slate-500 font-light">頂尖學者 · 實務專家 · 學術領袖</p>
      </div>

      {/* 主要展示區域 */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-600 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }, (_, slideIndex) => {
            const slideTeachers = teachers.slice(
              slideIndex * teachersPerView, 
              slideIndex * teachersPerView + teachersPerView
            );
            
            return (
              <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {slideTeachers.map((teacher, teacherIndex) => {
                    const globalIndex = slideIndex * teachersPerView + teacherIndex;
                    return (
                      <div
                        key={teacher.name}
                        className="group relative bg-white overflow-hidden"
                        style={{
                          animationDelay: `${teacherIndex * 150}ms`
                        }}
                      >
                        {/* 主要卡片容器 */}
                        <div className="relative">
                          {/* 教師照片 - 大尺寸圓形 */}
                          <div className="relative w-80 h-80 mx-auto mb-8 overflow-hidden rounded-full border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                            <img
                              src={teacher.imgUrl || placeholderImages[globalIndex % placeholderImages.length]}
                              alt={teacher.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* 職稱標籤 - 浮動設計 */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                {teacher.role}
                              </span>
                            </div>
                          </div>

                          {/* 教師資訊 - 居中對齊 */}
                          <div className="text-center space-y-4">
                            <h4 className="text-2xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                              {teacher.name}
                            </h4>
                            
                            <p className="text-lg text-slate-600 font-medium">
                              {teacher.title}
                            </p>
                            
                            {/* 專長描述 */}
                            <div className="max-w-sm mx-auto">
                              <p className="text-slate-500 leading-relaxed text-center line-clamp-3">
                                {teacher.description}
                              </p>
                            </div>

                            {/* 裝飾線條 */}
                            <div className="flex justify-center pt-4">
                              <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 opacity-60"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 導航按鈕 - 極簡設計 */}
      {totalSlides > 1 && (
        <>
          <Button
            variant="ghost"
            size="lg"
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg border-0 text-slate-600 hover:text-orange-600 transition-all duration-300"
            onClick={handlePrev}
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg border-0 text-slate-600 hover:text-orange-600 transition-all duration-300"
            onClick={handleNext}
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* 指示器 - 極簡點狀 */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-16 space-x-3">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-orange-500 scale-150"
                  : "bg-slate-300 hover:bg-slate-400"
              )}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
            />
          ))}
        </div>
      )}

      {/* 底部統計 */}
      <div className="text-center mt-12">
        <span className="text-sm text-slate-400 font-light">
          {currentIndex + 1} / {totalSlides} · 共 {teachers.length} 位專業師資
        </span>
      </div>
    </div>
  );
};

export default TeacherCarousel;
