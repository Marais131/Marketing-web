import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, BookOpen, Clock, Eye, Heart, MessageSquare, Star, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { apiConfig } from "../lib/api";

interface ArticleDetail {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  images?: string[];
  views: number;
  type?: string;
}

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<ArticleDetail | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<ArticleDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        
        // 並行獲取文章詳細內容和相關文章
        const [articleResponse, relatedResponse] = await Promise.all([
          fetch(`${apiConfig.baseURL}/api/content/${id}`),
          fetch(`${apiConfig.baseURL}/api/content/${id}/related`)
        ]);

        if (articleResponse.ok) {
          const articleData = await articleResponse.json();
          setArticle(articleData);
        } else {
          throw new Error('文章不存在');
        }

        if (relatedResponse.ok) {
          const relatedData = await relatedResponse.json();
          setRelatedArticles(relatedData);
        }
      } catch (error) {
        console.error('獲取文章失敗:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article?.title,
          text: article?.content?.substring(0, 100) + '...',
          url: window.location.href,
        });
      } catch (error) {
        console.log('分享取消');
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('🔗 連結已複製到剪貼簿！');
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-600 mx-auto"></div>
            <div className="absolute inset-0 rounded-full bg-purple-100 opacity-20 animate-pulse"></div>
          </div>
          <div className="space-y-2">
            <p className="text-purple-600 font-medium">載入精彩內容中...</p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="text-6xl">📄</div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-800">文章不存在</h2>
            <p className="text-gray-600">您查找的文章可能已被移除或不存在</p>
          </div>
          <Link to="/articles">
            <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回文章列表
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const readingTime = Math.ceil(article.content.length / 200);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
      <SEOHead 
        title={`${article.title} - 文化大學行銷學系`}
        description={article.content.substring(0, 160)}
        keywords={`${article.category},行銷專欄,${article.author}`}
        url={window.location.href}
        type="article"
      />
      
      {/* 頂部導航區 */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/articles">
              <Button variant="ghost" className="hover:bg-purple-50 text-purple-700 transition-all duration-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回專欄
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Button
                onClick={handleLike}
                variant="ghost"
                className={`transition-all duration-300 ${isLiked ? 'text-red-500 hover:bg-red-50' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <Heart className={`w-4 h-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? '已喜歡' : '喜歡'}
              </Button>
              <Button onClick={handleShare} variant="ghost" className="hover:bg-blue-50 text-blue-600">
                <Share2 className="w-4 h-4 mr-1" />
                分享
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 文章主體 */}
      <article className="container max-w-4xl mx-auto px-4 py-8">
        {/* 文章頭圖 */}
        {article.images && article.images[0] && (
          <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={article.images[0]}
              alt={article.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        )}

        {/* 文章資訊卡片 */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            {/* 分類與統計資訊 */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-4 py-2 rounded-full font-medium shadow-lg">
                  <Sparkles className="w-4 h-4 mr-1" />
                  {article.category}
                </Badge>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                  <Eye className="w-4 h-4 text-blue-500" />
                  {article.views} 瀏覽
                </span>
                <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4 text-green-500" />
                  {readingTime} 分鐘閱讀
                </span>
              </div>
            </div>

            {/* 文章標題 */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight bg-gradient-to-r from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-transparent">
              {article.title}
            </h1>

            {/* 作者資訊 */}
            <div className="flex items-center gap-4 mb-8 p-6 bg-gradient-to-r from-purple-50 to-orange-50 rounded-2xl border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {article.author.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="font-bold text-xl text-gray-900">{article.author}</div>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString('zh-TW', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600">專欄作者</span>
              </div>
            </div>

            {/* 文章內容 */}
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
              {article.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-8 first-letter:text-4xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 文章底部互動區 */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    onClick={handleLike}
                    className={`transition-all duration-300 rounded-full px-6 py-3 ${
                      isLiked 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600'
                    }`}
                  >
                    <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                    {isLiked ? '已喜歡' : '喜歡這篇文章'}
                  </Button>
                  <Button variant="outline" className="rounded-full px-6 py-3">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    留言討論
                  </Button>
                </div>
                <Button 
                  onClick={handleShare}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  分享文章
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 相關文章推薦 */}
        {relatedArticles.length > 0 && (
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">相關文章推薦</h3>
                  <p className="text-gray-600">探索更多精彩內容</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link key={related.id} to={`/article/${related.id}`} className="group">
                    <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden group-hover:scale-105">
                      {related.images && related.images[0] && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={related.images[0]}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-white/90 text-purple-700 border-0 shadow-md">
                              {related.category}
                            </Badge>
                          </div>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <h4 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                          {related.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {related.content.substring(0, 100)}...
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{related.author}</span>
                          </div>
                          <div className="flex items-center gap-1 text-purple-600 group-hover:text-purple-700">
                            <span>閱讀更多</span>
                            <ChevronRight className="w-3 h-3" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </article>
    </div>
  );
};

export default ArticleDetail; 