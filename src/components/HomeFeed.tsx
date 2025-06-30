import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, ChevronRight, Users, Award, Briefcase, MapPin, Clock, ArrowRight, Star, Pin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sampleArticles } from "@/components/ArticlePreviewCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiConfig } from "../lib/api";

// 新聞項目類型定義
interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image?: string;
  description?: string;
  content?: string;
  icon?: any;
  color?: string;
  location?: string;
  time?: string;
  type?: string;
  author?: string;
  isSticky?: boolean;
  priority?: string;
  views?: number;
  displayPage?: string;
}

// 圖標映射
const iconMap = {
  "招生訊息": Users,
  "招生資訊": Users,
  "學術活動": Briefcase,
  "榮譽消息": Award,
  "競賽成果": Award,
  "一般公告": Calendar,
  "活動": Camera,
  "講座": Briefcase,
  "工作坊": Users,
  "競賽": Award,
  "行銷觀點": Users,
  "產業分析": Briefcase,
  "學習心得": Award,
  "專業知識": Calendar,
  "重要公告": Award,
  "系統公告": Calendar,
  "緊急通知": Award,
  "新聞": Award,
  "教師專欄": Users,
  "產業分享": Briefcase,
  "實習": Briefcase
};

// 顏色映射
const colorMap = {
  "招生訊息": "from-[#1A4C7A] to-[#2A7DB1]",
  "招生資訊": "from-[#1A4C7A] to-[#2A7DB1]",
  "學術活動": "from-[#2A7DB1] to-[#3CB1B6]",
  "榮譽消息": "from-[#3CB1B6] to-[#1A4C7A]",
  "競賽成果": "from-[#3CB1B6] to-[#1A4C7A]",
  "一般公告": "from-[#1A4C7A] to-[#3CB1B6]",
  "活動": "from-[#2A7DB1] to-[#1A4C7A]",
  "講座": "from-[#2A7DB1] to-[#3CB1B6]",
  "工作坊": "from-[#3CB1B6] to-[#1A4C7A]",
  "競賽": "from-[#1A4C7A] to-[#2A7DB1]",
  "行銷觀點": "from-[#1A4C7A] to-[#2A7DB1]",
  "產業分析": "from-[#2A7DB1] to-[#3CB1B6]",
  "學習心得": "from-[#3CB1B6] to-[#1A4C7A]",
  "專業知識": "from-[#1A4C7A] to-[#3CB1B6]",
  "重要公告": "from-[#2A7DB1] to-[#1A4C7A]",
  "系統公告": "from-[#3CB1B6] to-[#2A7DB1]",
  "緊急通知": "from-[#1A4C7A] to-[#2A7DB1]",
  "新聞": "from-[#3CB1B6] to-[#2A7DB1]",
  "教師專欄": "from-[#2A7DB1] to-[#3CB1B6]",
  "產業分享": "from-[#3CB1B6] to-[#1A4C7A]",
  "實習": "from-[#1A4C7A] to-[#2A7DB1]"
};

const HomeFeed = () => {
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        // 獲取首頁顯示的內容，限制6篇
        const response = await fetch(`${apiConfig.baseURL}${apiConfig.endpoints.contentByPage}/home?limit=6`);
        if (!response.ok) {
          throw new Error('無法載入文章');
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        console.error('載入文章失敗:', err);
        setError(err.message);
        // 使用默認數據作為後備
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const getPriorityIcon = (priority?: string) => {
    switch (priority) {
      case 'high':
        return <Star className="w-3 h-3 text-red-500" />;
      case 'low':
        return <Star className="w-3 h-3 text-gray-400" />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">最新消息</h2>
            <p className="text-gray-600">掌握系所最新動態與重要資訊</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                <div className="h-20 bg-gray-200 rounded mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">最新消息</h2>
          <p className="text-red-600 mb-4">載入失敗：{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            重新載入
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">最新消息</h2>
          <p className="text-gray-600">掌握系所最新動態與重要資訊</p>
        </div>
        
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暫無最新消息</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={article.id || index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 relative">
                {/* 置頂標識 */}
                {article.isSticky && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-red-600 text-white text-xs">
                      <Pin className="w-3 h-3 mr-1" />
                      置頂
                    </Badge>
                  </div>
                )}
                
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-blue-600 text-white text-xs">
                    {article.category}
                  </Badge>
                  {getPriorityIcon(article.priority)}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.content || article.description}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {article.author || '系統管理員'}
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {article.views || 0}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="/news" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            查看更多消息
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeFeed;
