import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, ChevronRight, Users, Award, Briefcase, MapPin, Clock, ArrowRight, Star, Pin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sampleArticles } from "@/components/ArticlePreviewCard";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
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
  icon?: React.ComponentType<{ className?: string }>;
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

  // 默認演示數據 - 使用 useMemo 避免每次渲染都重新創建
  const defaultArticles: NewsItem[] = useMemo(() => [
    {
      id: 1,
      title: "行銷系2024年度招生說明會",
      content: "歡迎各位同學參加我們的招生說明會，了解行銷系的課程特色和未來發展方向。",
      author: "行銷系辦公室",
      date: "2024-01-15",
      category: "招生資訊",
      views: 1250,
      description: "了解行銷系的課程特色和未來發展方向",
      isSticky: true,
      priority: "high"
    },
    {
      id: 2,
      title: "學生實習成果分享",
      content: "本學期實習同學在各大企業的優秀表現，展現了行銷系學生的專業能力。",
      author: "實習輔導組",
      date: "2024-01-10",
      category: "學生活動",
      views: 890,
      description: "展現了行銷系學生的專業能力"
    },
    {
      id: 3,
      title: "數位行銷趨勢講座",
      content: "邀請業界專家分享2024年數位行銷最新趨勢和實戰經驗。",
      author: "學術組",
      date: "2024-01-08",
      category: "學術活動",
      views: 1450,
      description: "分享2024年數位行銷最新趨勢和實戰經驗"
    },
    {
      id: 4,
      title: "品牌管理課程創新教學",
      content: "結合實際案例分析，讓學生深入了解品牌管理的核心概念。",
      author: "教務組",
      date: "2024-01-05",
      category: "教學活動",
      views: 720,
      description: "深入了解品牌管理的核心概念"
    },
    {
      id: 5,
      title: "企業參訪活動報名開始",
      content: "安排參訪知名企業，讓學生實地了解行銷實務運作。",
      author: "學生事務組",
      date: "2024-01-03",
      category: "活動公告",
      views: 980,
      description: "實地了解行銷實務運作"
    },
    {
      id: 6,
      title: "行銷競賽獲獎名單公布",
      content: "恭喜獲獎同學在全國行銷競賽中展現優異表現。",
      author: "競賽組",
      date: "2024-01-01",
      category: "榮譽消息",
      views: 1100,
      description: "全國行銷競賽優異表現",
      priority: "high"
    }
  ], []);

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
        console.log('API 不可用，使用默認演示數據:', err);
        // 使用默認演示數據
        setArticles(defaultArticles);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [defaultArticles]);

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

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      {/* 背景美化 */}
      <div className="absolute inset-0">
        {/* 主背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/60 via-white/80 to-slate-50/60"></div>
        
        {/* 裝飾圓形 */}
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-gradient-radial from-[#3CB1B6]/4 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-gradient-radial from-[#1A4C7A]/3 to-transparent rounded-full blur-2xl"></div>
        
        {/* 幾何裝飾 */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#2A7DB1]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-[#3CB1B6]/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-[#1A4C7A]/35 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 標題區域 - 與上方呼應 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-[#1A4C7A]/10 to-[#3CB1B6]/10 px-6 py-3 rounded-full mb-6 border border-[#2A7DB1]/20">
            <Calendar className="w-5 h-5 mr-2 text-[#2A7DB1]" />
            <span className="text-[#1A4C7A] font-semibold">系所動態・重要資訊</span>
          </div>
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black text-[#1A4C7A] mb-6 leading-[0.9] tracking-tight">
            最新消息
          </h2>
          <p className="text-xl md:text-2xl text-[#2A7DB1] font-medium max-w-3xl mx-auto">
            掌握系所最新動態與重要資訊
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6] rounded-full mx-auto mt-6"></div>
        </div>
        
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暫無最新消息</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={article.id || index} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 relative border border-white/20">
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
          <Link 
            to="/articles" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] hover:from-[#2A7DB1] hover:to-[#3CB1B6] text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            查閱更多消息
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      
      {/* 自定義樣式 */}
      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default HomeFeed;
