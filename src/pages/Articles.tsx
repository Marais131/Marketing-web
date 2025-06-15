
import { ArticlePreviewCard, sampleArticles } from "@/components/ArticlePreviewCard";

const Articles = () => {
  return (
    <section className="py-12 min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      <div className="container max-w-4xl mx-auto px-3">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700 bg-clip-text text-transparent drop-shadow text-center">專欄文章</h1>
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
