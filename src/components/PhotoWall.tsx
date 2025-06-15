
import React from "react";

const images = [
  // 用高質感 unsplash placeholder 圖片
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
];

const PhotoWall = () => {
  return (
    <section className="w-full py-10 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">校園現場・多元互動</h2>
          <p className="text-lg text-slate-600">用鏡頭記錄真實的學習與成長</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in">
          {images.map((src, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl
                ${i % 3 === 0 ? "w-72 h-56 md:w-80 md:h-56" :
                  i % 3 === 1 ? "w-80 h-44 md:w-96 md:h-52" :
                  "w-56 h-72 md:w-56 md:h-80"}
                `}
              style={{ animation: `fade-in 0.6s ${i * 0.15 + 0.1}s both` }}
            >
              <img
                src={src}
                alt={`校園生活 ${i + 1}`}
                className="object-cover w-full h-full"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoWall;

