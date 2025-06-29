/**
 * 團體合照元件放在首頁 Hero 下方，圖片+溫馨短句
 */

const HomeGroupPhoto = () => (
  <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
    {/* 背景裝飾 */}
    <div className="absolute inset-0">
      {/* 大型圓形背景 */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1A4C7A]/3 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#3CB1B6]/3 rounded-full blur-3xl"></div>
      {/* 幾何圖形 */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-[#2A7DB1] rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-6 h-6 bg-[#3CB1B6] rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-[#1A4C7A] rounded-full animate-pulse delay-700"></div>
      {/* 線條裝飾 */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2A7DB1]/20 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3CB1B6]/20 to-transparent"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      {/* 標題區域 */}
      <div className="text-center mb-16">
        <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-black text-[#1A4C7A] mb-6 leading-[0.9] tracking-tight">
          我們的團隊
        </h2>
        <p className="text-xl md:text-2xl text-[#2A7DB1] font-medium max-w-3xl mx-auto">
          充滿創意與行動力的品牌行銷人
        </p>
      </div>

      {/* 主要內容區域 */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* 團體合照 */}
        <div className="flex-1 relative group">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/lovable-uploads/5b1142c5-30f6-4b6a-882f-adfab212c822.png"
              alt="品牌行銷系團體合照"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              onError={(e) => {
                console.log('圖片載入失敗，已切換到備用圖片');
                e.currentTarget.src = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop';
              }}
            />
            {/* 光暈效果 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A4C7A]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* 邊框裝飾 */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#1A4C7A] via-[#2A7DB1] to-[#3CB1B6] rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
        
        {/* 文字內容區域 */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A4C7A] leading-tight">
              團結 · 多元 · 創新
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              我們相信每個人都有獨特的創意火花，在這裡，不同背景的同學聚在一起，
              用多元的視角解決品牌挑戰，創造無限可能。
            </p>
          </div>

          {/* 特色標籤 */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {[
              { icon: "🎯", text: "目標導向", color: "bg-[#1A4C7A]" },
              { icon: "🚀", text: "創新思維", color: "bg-[#2A7DB1]" },
              { icon: "🤝", text: "團隊合作", color: "bg-[#3CB1B6]" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`${item.color} text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA 按鈕 */}
          <div className="pt-4">
            <button className="bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] hover:from-[#2A7DB1] hover:to-[#3CB1B6] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              加入我們的團隊
            </button>
          </div>
        </div>
      </div>

      {/* 底部裝飾線 */}
      <div className="mt-20 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-[#1A4C7A] via-[#2A7DB1] to-[#3CB1B6] rounded-full"></div>
      </div>
    </div>
  </section>
);

export default HomeGroupPhoto;
