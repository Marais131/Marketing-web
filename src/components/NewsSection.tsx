
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Briefcase, ChevronRight, MapPin, Clock } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
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
    },
    {
      id: 4,
      title: "數位行銷趨勢講座",
      category: "學術講座",
      date: "2024-10-25",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&q=80",
      description: "邀請業界專家分享最新數位行銷趨勢，包括AI行銷、社群媒體策略等前沿議題",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      location: "國際會議廳",
      time: "19:00-21:00"
    },
    {
      id: 5,
      title: "學生實習媒合說明會",
      category: "就業輔導",
      date: "2024-11-01",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&h=300&fit=crop&q=80",
      description: "協助學生與優質企業建立實習合作關係，提供豐富的職場實戰經驗",
      icon: Briefcase,
      color: "from-indigo-500 to-indigo-600",
      location: "就業輔導中心",
      time: "13:00-15:00"
    },
    {
      id: 6,
      title: "消費者行為研究論文發表",
      category: "學術成果",
      date: "2024-10-30",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&q=80",
      description: "本系教授最新研究成果於國際期刊發表，深入探討後疫情時代的消費模式變化",
      icon: Award,
      color: "from-teal-500 to-cyan-600",
      location: "學術研討室",
      time: "10:00-12:00"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* 標題區域 */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 border border-teal-200/50 px-6 py-3 rounded-full mb-6 text-sm font-medium shadow-sm">
            <Calendar className="w-4 h-4 mr-2" />
            最新消息
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            系所動態
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            掌握系所最新資訊，不錯過任何重要活動與機會
            <br />
            <span className="text-teal-600 font-medium">與我們一起見證學術與實務的完美結合</span>
          </p>
        </div>

        {/* 新聞卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden">
                {/* 圖片區域 */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  {/* 類別標籤 */}
                  <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${item.color} text-white border-0 text-xs font-medium px-3 py-1 shadow-lg`}>
                    <IconComponent className="w-3 h-3 mr-1" />
                    {item.category}
                  </Badge>
                  
                  {/* 日期 */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium text-slate-700 shadow-sm">
                    {new Date(item.date).toLocaleDateString('zh-TW', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>

                {/* 內容區域 */}
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-teal-600 transition-colors line-clamp-2 leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0 space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* 活動資訊 */}
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-700 transition-colors cursor-pointer">
                      <span>了解更多</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 查看更多按鈕 */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-xl border-0 rounded-xl group">
            <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            查看更多消息
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
