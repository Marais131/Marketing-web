
/**
 * 團體合照元件放在首頁 Hero 下方，圖片+溫馨短句
 */

const HomeGroupPhoto = () => (
  <section className="py-12 md:py-20 bg-white relative z-20">
    <div className="container mx-auto px-6 flex flex-col items-center gap-6">
      <img
        src="/lovable-uploads/603de662-92e7-46c2-b6f8-d3f7e42e804e.png"
        alt="團體合照"
        className="w-full max-w-3xl rounded-3xl shadow-xl object-cover border-4 border-white"
        style={{ maxHeight: '520px', objectFit: 'cover' }}
      />
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 text-center mt-4">
        我們是一個充滿創意與行動力的團隊 <br className="hidden md:inline" />
        <span className="text-blue-600">品牌行銷人</span> = 團結 &middot; 多元 &middot; 創新！
      </h2>
    </div>
  </section>
);

export default HomeGroupPhoto;
