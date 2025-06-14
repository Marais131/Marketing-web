import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Briefcase, ChevronRight } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "113學年度碩士班甄試入學招生",
      category: "招生訊息",
      date: "2024-10-15",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop",
      description: "歡迎優秀學子加入我們的行銷研究所大家庭",
      icon: Users,
      color: "bg-teal-100 text-teal-700"
    },
    {
      id: 2,
      title: "產學合作專案成果發表會",
      category: "學術活動",
      date: "2024-10-20",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop",
      description: "學生與企業合作專案精彩成果展示",
      icon: Briefcase,
      color: "bg-blue-100 text-blue-700"
    },
    {
      id: 3,
      title: "全國行銷競賽榮獲第一名",
      category: "榮譽消息",
      date: "2024-10-12",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop",
      description: "恭喜本系學生團隊在全國行銷競賽中脫穎而出",
      icon: Award,
      color: "bg-green-100 text-green-700"
    },
    {
      id: 4,
      title: "數位行銷趨勢講座",
      category: "學術講座",
      date: "2024-10-25",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop",
      description: "邀請業界專家分享最新數位行銷趨勢",
      icon: Calendar,
      color: "bg-purple-100 text-purple-700"
    },
    {
      id: 5,
      title: "學生實習媒合說明會",
      category: "就業輔導",
      date: "2024-11-01",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&h=200&fit=crop",
      description: "協助學生與優質企業建立實習合作關係",
      icon: Briefcase,
      color: "bg-indigo-100 text-indigo-700"
    },
    {
      id: 6,
      title: "消費者行為研究論文發表",
      category: "學術成果",
      date: "2024-10-30",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop",
      description: "本系教授最新研究成果於國際期刊發表",
      icon: Award,
      color: "bg-teal-100 text-teal-700"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* 標題區域 */}
        <div className="text-center mb-12">
          <Badge className="bg-teal-100 text-teal-700 border border-teal-200 px-4 py-2 rounded-full mb-4">
            最新消息
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            系所動態
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            掌握系所最新資訊，不錯過任何重要活動與機會
          </p>
        </div>

        {/* 新聞卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {newsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300 border border-slate-200 bg-white">
                {/* 圖片區域 */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-3 left-3 ${item.color} border-0 text-xs`}>
                    <IconComponent className="w-3 h-3 mr-1" />
                    {item.category}
                  </Badge>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-slate-600">
                    {new Date(item.date).toLocaleDateString('zh-TW')}
                  </div>
                </div>

                {/* 內容區域 */}
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-slate-800 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-700 transition-colors">
                    <span>了解更多</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 查看更多按鈕 */}
        <div className="text-center">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 shadow-lg">
            <Calendar className="w-4 h-4 mr-2" />
            查看更多消息
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
