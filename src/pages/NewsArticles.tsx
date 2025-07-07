import { useState, useEffect } from "react";
import { ArticlePreviewCard, sampleArticles, Article } from "@/components/ArticlePreviewCard";
import SEOHead from "@/components/SEOHead";
import { Calendar, User } from "lucide-react";
import { apiConfig } from "../lib/api";

// 定義後端內容介面
interface BackendContent {
  id: number;
  title: string;
  content: string;
  author?: string;
  date: string;
  category: string;
  images?: string[];
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // 從後端API獲取所有內容
        const response = await fetch(`${apiConfig.baseURL}${apiConfig.endpoints.content}`);
        if (response.ok) {
          const publishedContent: BackendContent[] = await response.json();
          
          // 轉換後端內容為文章格式
          const backendArticles: Article[] = publishedContent.map((item: BackendContent) => ({
            id: item.id,
            title: item.title,
            excerpt: item.content,
            author: item.author || "行銷系",
            date: item.date,
            category: item.category,
            image: item.images?.[0] || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
          }));
          
          // 只使用後端文章，統一管理
          setArticles(backendArticles);
        } else {
          console.log('API 不可用，使用靜態文章作為備用');
          setArticles(sampleArticles);
        }
      } catch (error) {
        console.log('無法連接後端，使用靜態文章作為備用:', error);
        setArticles(sampleArticles);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section className="py-12 min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
        <div className="container max-w-4xl mx-auto px-3">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-blue-600">載入文章中...</p>
          </div>
        </div>
      </section>
    );
  }

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
        {/* 標題區域 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700 bg-clip-text text-transparent drop-shadow">
            行銷系專欄文章
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            探索行銷專業知識，洞察產業趨勢，分享學習心得
          </p>
        </div>

        {/* 文章統計 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{articles.length}</div>
              <div className="text-sm text-slate-500">總文章數</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {articles.filter(article => {
                  const articleDate = new Date(article.date);
                  const thisMonth = new Date();
                  return articleDate.getMonth() === thisMonth.getMonth() && 
                         articleDate.getFullYear() === thisMonth.getFullYear();
                }).length}
              </div>
              <div className="text-sm text-slate-500">本月新增</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {[...new Set(articles.map(article => article.category))].length}
              </div>
              <div className="text-sm text-slate-500">文章分類</div>
            </div>
          </div>
        </div>

        {/* 文章列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="relative">
              <ArticlePreviewCard article={article} />
            </div>
          ))}
        </div>

        {/* 如果沒有文章 */}
        {articles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">暫無文章</h3>
            <p className="text-gray-500">請稍後再來查看最新文章</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
