
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Avatar } from "@/components/ui/avatar";
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
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=600&auto=format&fit=crop"
];

const TeacherCarousel: React.FC<TeacherCarouselProps> = ({ teachers }) => {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: true });

  return (
    <div className="overflow-hidden relative w-full">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-800 text-center w-full">師資人物</h3>
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="flex gap-8">
          {teachers.map((teacher, idx) => (
            <div
              key={teacher.name}
              className={cn(
                "relative flex-shrink-0 w-[300px] h-[410px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              )}
              tabIndex={0}
            >
              {/* 背景大圖 */}
              <img
                src={teacher.imgUrl || placeholderImages[idx % placeholderImages.length]}
                alt={teacher.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* 文字蒙版 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* 姓名&職稱overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pt-4 pb-5 text-white">
                <div className="text-xl font-bold mb-1 drop-shadow">{teacher.name}</div>
                <div className="text-orange-300 text-sm mb-1 drop-shadow">{teacher.role}</div>
                <div className="text-white/90 text-sm drop-shadow">{teacher.title}</div>
              </div>
              {/* 描述區－hover時顯示 */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-300"
              >
                <div className="text-white text-sm">{teacher.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 提示線 */}
      <div className="flex justify-center mt-3">
        <span className="text-xs text-slate-400">可左右滑動查看更多老師</span>
      </div>
    </div>
  );
};

export default TeacherCarousel;
