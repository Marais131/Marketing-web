import React from "react";
import { Link } from "react-router-dom";

const images = [
  {
    src: "/lovable-uploads/student-activity-1.jpg",
    title: "創新思維工作坊",
    category: "學習實戰"
  },
  {
    src: "/lovable-uploads/student-gathering-bg.jpg",
    title: "團隊協作專案",
    category: "實務演練"
  },
  {
    src: "/lovable-uploads/student-activity-2.jpg",
    title: "品牌策略研討",
    category: "學術交流"
  },
  {
    src: "/lovable-uploads/student-activity-3.jpg",
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
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* 學生活動照片背景 */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/student-gathering-bg.jpg"
          alt="學生活動現場"
          className="w-full h-full object-cover opacity-20"
          style={{objectPosition: 'center'}}
        />
      </div> */}
      {/* 背景裝飾 */}
      <div className="absolute inset-0 z-10">
        {/* 移除白色背景，使用透明背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
        
        {/* 裝飾圓形 - 調整透明度 */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-radial from-[#3CB1B6]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-radial from-[#1A4C7A]/6 to-transparent rounded-full blur-3xl"></div>
        
        {/* 幾何裝飾點 */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-[#2A7DB1]/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-[#3CB1B6]/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 left-1/6 w-3 h-3 bg-[#1A4C7A]/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* 網格背景 - 更細膩 */}
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

        {/* CTA 區域 - 增強視覺效果 */}
        <div className="text-center bg-gradient-to-br from-white/60 via-white/40 to-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A4C7A] mb-4">
            探索更多校園精彩
          </h3>
          <p className="text-lg text-[#2A7DB1] mb-6 max-w-2xl mx-auto">
            加入我們，親身體驗豐富多元的學習環境與無限可能
          </p>
          <Link 
            to="/activities"
            className="inline-block bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] hover:from-[#2A7DB1] hover:to-[#3CB1B6] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            了解更多活動
          </Link>
        </div>
      </div>

      {/* 自定義動畫 */}
      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
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

