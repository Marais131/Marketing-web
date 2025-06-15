
/**
 * 團體合照元件放在首頁 Hero 下方，圖片+溫馨短句
 */

const HomeGroupPhoto = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative z-20">
    <div className="container mx-auto px-6 flex flex-col items-center gap-8">
      {/* 團體合照 */}
      <div className="relative group">
        <img
          src="/lovable-uploads/d3bb2780-7b61-43e4-b4e3-972e02c9080f.png"
          alt="品牌行銷系團體合照"
          className="w-full max-w-4xl rounded-3xl shadow-2xl object-cover border-8 border-white group-hover:scale-105 transition-transform duration-500"
          style={{ maxHeight: '600px', objectFit: 'cover' }}
          onError={(e) => {
            console.log('主要圖片載入失敗，使用備用圖片');
            e.currentTarget.src = 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200&auto=format&fit=crop';
          }}
        />
        {/* 光暈效果 */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* 標語文字 */}
      <div className="text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
          我們是一個充滿創意與行動力的團隊
        </h2>
        <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
          品牌行銷人 = 團結 &middot; 多元 &middot; 創新！
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeGroupPhoto;
