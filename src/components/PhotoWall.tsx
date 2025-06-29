import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    title: "創新思維工作坊",
    category: "學習實戰"
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop",
    title: "團隊協作專案",
    category: "實務演練"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=900&auto=format&fit=crop",
    title: "品牌策略研討",
    category: "學術交流"
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=900&auto=format&fit=crop",
    title: "數位行銷實作",
    category: "技能培養"
  },
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format&fit=crop",
    title: "產學合作成果",
    category: "實習體驗"
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    title: "校園生活點滴",
    category: "多元發展"
  }
];

const PhotoWall = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#3CB1B6]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1A4C7A]/5 rounded-full blur-3xl"></div>
        {/* 網格背景 */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(#2A7DB1 1px, transparent 1px),
              linear-gradient(90deg, #2A7DB1 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 標題區 */}
        <div className="text-center mb-16">
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black text-[#1A4C7A] mb-6 leading-[0.9] tracking-tight">
            校園現場
          </h2>
          <p className="text-xl md:text-2xl text-[#2A7DB1] font-medium max-w-2xl mx-auto mb-4">
            用鏡頭記錄真實的學習與成長
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6] rounded-full mx-auto"></div>
        </div>

        {/* 圖片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ 
                animation: `fadeInUp 0.8s ${index * 0.1}s both`,
                height: index % 3 === 0 ? '320px' : index % 3 === 1 ? '280px' : '360px'
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* 漸變遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* 內容覆蓋層 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-block bg-[#3CB1B6]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  {image.category}
                </div>
                <h3 className="text-lg font-bold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 區域 */}
        <div className="text-center bg-gradient-to-br from-[#1A4C7A]/5 to-[#3CB1B6]/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A4C7A] mb-4">
            探索更多校園精彩
          </h3>
          <p className="text-lg text-[#2A7DB1] mb-6 max-w-2xl mx-auto">
            加入我們，親身體驗豐富多元的學習環境與無限可能
          </p>
          <button className="bg-[#1A4C7A] hover:bg-[#2A7DB1] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            了解更多活動
          </button>
        </div>
      </div>

      {/* 自定義動畫 */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PhotoWall;

