import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, ChevronRight, Users, Award, Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sampleArticles } from "@/components/ArticlePreviewCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// 新聞項目類型定義
interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  icon: any;
  color: string;
  location: string;
  time: string;
  isFromAdmin?: boolean;
}

// 靜態新聞數據（作為備用）
const staticNews: NewsItem[] = [
  {
    id: 1,
    title: "113學年度碩士班甄試入學招生",
    category: "招生訊息",
    date: "2024-10-15",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&q=80",
    description: "歡迎優秀學子加入我們的行銷研究所大家庭，共同探索消費者行為與數位行銷的奧秘",
    icon: Users,
    color: "from-[#1A4C7A] to-[#2A7DB1]",
    location: "大恩館",
    time: "09:00-17:00"
  },
  {
    id: 2,
    title: "產學合作專案成果發表會",
    category: "學術活動",
    date: "2024-10-20",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80",
    description: "學生與企業合作專案精彩成果展示，展現理論與實務結合的學習成效",
    icon: Briefcase,
    color: "from-[#2A7DB1] to-[#3CB1B6]",
    location: "曉峰紀念館",
    time: "14:00-16:30"
  },
  {
    id: 3,
    title: "全國行銷競賽榮獲第一名",
    category: "榮譽消息",
    date: "2024-10-12",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&q=80",
    description: "恭喜本系學生團隊在全國行銷競賽中脫穎而出，展現卓越的創意思維與執行能力",
    icon: Award,
    color: "from-[#3CB1B6] to-[#1A4C7A]",
    location: "台北世貿",
    time: "全天"
  }
];

// 圖標映射
const iconMap = {
  "招生訊息": Users,
  "學術活動": Briefcase,
  "榮譽消息": Award,
  "一般公告": Calendar,
  "活動": Camera,
  "新聞": Award
};

// 顏色映射
const colorMap = {
  "招生訊息": "from-[#1A4C7A] to-[#2A7DB1]",
  "學術活動": "from-[#2A7DB1] to-[#3CB1B6]",
  "榮譽消息": "from-[#3CB1B6] to-[#1A4C7A]",
  "一般公告": "from-[#1A4C7A] to-[#3CB1B6]",
  "活動": "from-[#2A7DB1] to-[#1A4C7A]",
  "新聞": "from-[#3CB1B6] to-[#2A7DB1]"
};

const activities = [
  {
    id: 1,
    title: "學術研討會盛況",
    description: "師生齊聚一堂，共同探討行銷學術前沿議題，促進知識交流與創新思維碰撞",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
    participants: "80+",
    year: "2024"
  },
  {
    id: 2,
    title: "產學合作成果展",
    description: "學生團隊展示與企業合作的創新專案成果，展現理論與實務完美結合的學習成效",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&q=80",
    participants: "120+",
    year: "2024"
  }
];

const HomeFeed = () => {
  const [news, setNews] = useState(staticNews);
  const [loading, setLoading] = useState(true);

  // 獲取管理後台發布的內容
  useEffect(() => {
    const fetchPublishedContent = async () => {
      try {
        // 嘗試從後端 API 獲取數據
        const response = await fetch('http://localhost:3001/api/content');
        if (response.ok) {
          const publishedContent = await response.json();
          
          // 轉換格式並合併數據
          const formattedContent = publishedContent.map((item: any) => ({
            id: item.id,
            title: item.title,
            category: item.category,
            date: item.date,
            image: item.images?.[0] || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80",
            description: item.content,
            icon: iconMap[item.category as keyof typeof iconMap] || Calendar,
            color: colorMap[item.category as keyof typeof colorMap] || "from-[#1A4C7A] to-[#2A7DB1]",
            location: "文化大學",
            time: "詳見內容",
            isFromAdmin: true
          }));
          
          // 合併管理後台內容和靜態內容，管理後台內容優先顯示
          const combinedNews = [...formattedContent, ...staticNews].slice(0, 6);
          setNews(combinedNews);
        } else {
          // 如果 API 不可用，使用靜態數據
          console.log('API 不可用，使用靜態數據');
          setNews(staticNews);
        }
      } catch (error) {
        // 如果無法連接後端，使用靜態數據
        console.log('無法連接後端，使用靜態數據:', error);
        setNews(staticNews);
      } finally {
        setLoading(false);
      }
    };

    fetchPublishedContent();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A4C7A] mx-auto"></div>
            <p className="mt-4 text-[#2A7DB1]">載入最新動態中...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3CB1B6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1A4C7A]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* 主標題區 - 大膽現代 */}
        <div className="text-center mb-20">
          <h2 className="text-[4rem] md:text-[5rem] lg:text-[6rem] font-black text-[#1A4C7A] mb-6 leading-[0.9] tracking-tight">
            最新動態
          </h2>
          <p className="text-xl md:text-2xl text-[#2A7DB1] font-medium max-w-2xl mx-auto">
            掌握系所脈動，不錯過任何精彩時刻
          </p>
          {/* 顯示數據來源提示 */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>即時更新 • 來自管理後台</span>
          </div>
        </div>

        {/* 新聞卡片 - 單排大卡片設計 */}
        <div className="space-y-8 mb-20">
          {news.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex relative`}>
                {/* 管理後台內容標識 */}
                {item.isFromAdmin && (
                  <div className="absolute top-4 right-4 z-10 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    最新發布
                  </div>
                )}
                
                {/* 圖片區域 */}
                <div className="relative md:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <Badge className={`absolute top-6 left-6 bg-gradient-to-r ${item.color} text-white border-0 px-4 py-2 text-sm font-semibold`}>
                    <Icon className="w-4 h-4 mr-2" />
                    {item.category}
                  </Badge>
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold text-[#1A4C7A]">
                    {new Date(item.date).toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
                
                {/* 內容區域 */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A4C7A] mb-4 group-hover:text-[#2A7DB1] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </span>
                  </div>
                  <Button className="bg-[#1A4C7A] hover:bg-[#2A7DB1] text-white px-6 py-3 rounded-xl w-fit group">
                    了解更多
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* 專欄文章區塊 - 重新設計 */}
        <div className="bg-gradient-to-br from-[#1A4C7A]/5 to-[#3CB1B6]/5 rounded-3xl p-8 md:p-12 mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A4C7A] mb-2">專欄精選</h3>
              <p className="text-lg text-[#2A7DB1]">產學觀點 × 專業見解</p>
            </div>
            <Link 
              to="/articles" 
              className="hidden md:flex items-center gap-2 text-[#1A4C7A] hover:text-[#2A7DB1] font-semibold transition-colors group"
            >
              查看全部
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleArticles.slice(0, 3).map(article => (
              <Card key={article.id} className="group border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {article.image && (
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                )}
                <CardContent className="p-6">
                  <Badge className="bg-[#3CB1B6]/10 text-[#3CB1B6] border-0 mb-3 text-xs font-semibold">
                    {article.category}
                  </Badge>
                  <h4 className="text-lg font-bold text-[#1A4C7A] mb-2 line-clamp-2 group-hover:text-[#2A7DB1] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* 移動端查看全部按鈕 */}
          <div className="md:hidden mt-8 text-center">
            <Link 
              to="/articles" 
              className="inline-flex items-center gap-2 bg-[#1A4C7A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2A7DB1] transition-colors"
            >
              查看全部專欄
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CTA 區域 - 簡化設計 */}
        <div className="text-center bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            想了解更多校園動態？
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            關注我們的最新消息，不錯過任何精彩活動
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#1A4C7A] hover:bg-white/90 px-8 py-4 text-lg rounded-xl font-bold shadow-lg hover:scale-105 transition-all">
              <Camera className="w-5 h-5 mr-2" />
              校園活動相簿
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl font-bold hover:scale-105 transition-all">
              聯絡我們
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeed;
