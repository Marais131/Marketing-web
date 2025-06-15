import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, ChevronRight, Users, Award, Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sampleArticles, ArticlePreviewCard } from "@/components/ArticlePreviewCard";

const news = [
  {
    id: 1,
    title: "113學年度碩士班甄試入學招生",
    category: "招生訊息",
    date: "2024-10-15",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&q=80",
    description: "歡迎優秀學子加入我們的行銷研究所大家庭，共同探索消費者行為與數位行銷的奧秘",
    icon: Users,
    color: "from-teal-500 to-teal-600",
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
    color: "from-blue-500 to-blue-600",
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
    color: "from-green-500 to-green-600",
    location: "台北世貿",
    time: "全天"
  }
];

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

const HomeFeed = () => (
  <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-teal-100/40 to-transparent rounded-full blur-2xl"></div>
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-2xl"></div>
    <div className="container mx-auto px-6 z-10 relative">
      {/* 標題 */}
      <div className="text-center mb-14">
        <Badge className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 border border-teal-200/40 px-6 py-3 rounded-full mb-6 text-sm font-medium shadow-sm">
          <Calendar className="w-4 h-4 mr-2" />
          最新動態
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
          消息 & 活動精選
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          換個角度感受行銷系的脈動！<br />
          實況消息 x 亮點活動搶先看
        </p>
      </div>

      {/* 內容：消息 News */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mb-10">
        {/* 左：消息 News */}
        <div className="flex flex-col gap-6">
          {news.map(item => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="hover:shadow-2xl transition">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${item.color} text-white border-0 text-xs`}>
                    <Icon className="w-3 h-3 mr-1" />
                    {item.category}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-lg text-xs font-medium text-slate-700 shadow">
                    {new Date(item.date).toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-slate-800 line-clamp-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-2">
                  <p className="text-slate-600 text-sm line-clamp-3">{item.description}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />{item.time}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        {/* 右：活動照片 */}
        <div className="flex flex-col gap-6">
          {activities.map(activity => (
            <Card key={activity.id} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50/50">
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 flex gap-3">
                  <Badge className="bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                    <Users className="w-3 h-3 mr-1" />
                    {activity.participants} 參與
                  </Badge>
                  <Badge className="bg-teal-500/80 text-white border-0 backdrop-blur-sm">
                    {activity.year}
                  </Badge>
                </div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white border-0 text-xs">
                  活動精華
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-md font-bold text-slate-800 mb-2 group-hover:text-teal-600">
                  {activity.title}
                </h3>
                <p className="text-slate-600 text-sm mb-2">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 專欄精選卡片加在這裡 */}
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-4 text-teal-700 flex items-center gap-2">
          <span className="inline-block bg-gradient-to-r from-blue-100 to-teal-100 text-teal-700 px-3 py-1 rounded-full text-base">專欄精選</span>
          <span className="text-slate-500 text-sm">老師與產學團隊獨家分享</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleArticles.slice(0, 3).map(article => (
            <ArticlePreviewCard key={article.id} article={article} />
          ))}
        </div>
        <div className="mt-5 text-right">
          <a
            href="/articles"
            className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow transition-all"
          >
            看所有專欄文章
          </a>
        </div>
      </div>
      
      {/* CTA 區域 */}
      <div className="text-center bg-gradient-to-r from-slate-50 to-teal-50/50 rounded-2xl p-10 border border-slate-200/50">
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          想看更多繽紛校園/活動消息？
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg">
            <Camera className="w-4 h-4 mr-2" />
            校園活動相簿
          </Button>
          <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-xl">
            聯絡我們
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HomeFeed;
