
import { ArticlePreviewCard, sampleArticles } from "@/components/ArticlePreviewCard";
import SEOHead from "@/components/SEOHead";

const Articles = () => {
  return (
    <section className="py-12 min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      <SEOHead 
        title="行銷系專欄 | 品牌策略×消費者行為×數位行銷 - 文化大學行銷學系"
        description="文化大學行銷系教師與專家專欄文章，深入探討行銷系相關議題：品牌策略、消費者行為、數位行銷趨勢等行銷專業知識。"
        keywords="行銷系專欄,品牌策略文章,消費者行為分析,數位行銷趨勢,行銷案例研究,行銷學術文章,行銷系知識"
        url={window.location.href}
        type="article"
      />
      <div className="container max-w-4xl mx-auto px-3">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700 bg-clip-text text-transparent drop-shadow text-center">行銷系專欄文章</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleArticles.map(article => (
            <ArticlePreviewCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
