import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, Award, BookOpen, ExternalLink, Bell } from "lucide-react";

const Activities = () => {
  const [activeTab, setActiveTab] = useState("regular");

  // 定期活動介紹
  const regularActivities = [
    {
      title: "行銷研討會",
      frequency: "每年 3 次",
      description: "邀請業界專家與學者分享最新行銷趨勢、案例分析與實務經驗",
      features: ["業界專家演講", "案例研討", "Q&A互動", "人脈交流"],
      nextDate: "2024年12月15日",
      icon: "📊",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "校友回娘家",
      frequency: "每年 1 次",
      description: "邀請行銷系校友回校分享職場經驗，提供學弟妹就業指導與人生建議",
      features: ["校友經驗分享", "職涯諮詢", "求職建議", "校友聯誼"],
      nextDate: "2025年3月20日",
      icon: "🎓",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "系內破冰活動",
      frequency: "每學期 2 次",
      description: "增進同學感情，建立班級凝聚力，包含迎新、送舊等各類聯誼活動",
      features: ["迎新活動", "送舊聚餐", "班級聯誼", "團康遊戲"],
      nextDate: "2024年12月8日",
      icon: "🎉",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "行銷策略競賽",
      frequency: "每年 1 次",
      description: "系內最重要的競賽活動，學生組隊提出完整行銷策略，展現學習成果",
      features: ["策略提案", "團隊競賽", "評審講評", "獎金獎品"],
      nextDate: "2025年5月10日",
      icon: "🏆",
      color: "from-orange-500 to-red-600"
    }
  ];

  // 近期活動消息
  const recentActivities = [
    {
      title: "AI行銷工具應用講座",
      date: "2024年12月20日",
      type: "專題講座",
      status: "報名中",
      description: "邀請業界專家分享ChatGPT、Midjourney等AI工具在行銷領域的實際應用",
      location: "大典館201教室",
      capacity: "80人",
      registration: true
    },
    {
      title: "期末專題發表會",
      date: "2024年12月25日",
      type: "學術活動",
      status: "即將開始",
      description: "行銷系大四學生期末專題成果發表，歡迎學弟妹觀摩學習",
      location: "大典館國際會議廳",
      capacity: "150人",
      registration: false
    },
    {
      title: "寒假實習說明會",
      date: "2025年1月8日",
      type: "就業輔導",
      status: "開放報名",
      description: "介紹寒假實習機會，包含履歷撰寫、面試技巧等求職準備",
      location: "大典館301教室",
      capacity: "60人",
      registration: true
    }
  ];

  // 行政消息
  const adminNews = [
    {
      title: "113學年度第2學期選課公告",
      date: "2024年12月1日",
      type: "選課公告",
      urgent: true,
      description: "第二學期選課時間：12月15日-12月22日，請同學注意選課時程",
      link: "https://www.pccu.edu.tw/course",
      department: "教務處"
    },
    {
      title: "行銷系獎學金申請開始",
      date: "2024年11月25日",
      type: "獎學金",
      urgent: false,
      description: "113學年度行銷系優秀學生獎學金開始申請，申請期限至12月31日",
      link: "https://www.pccu.edu.tw/scholarship",
      department: "行銷系辦"
    },
    {
      title: "畢業論文格式說明",
      date: "2024年11月20日",
      type: "學術公告",
      urgent: false,
      description: "113學年度畢業論文格式規範與繳交時程說明",
      link: "https://www.pccu.edu.tw/thesis",
      department: "行銷系辦"
    },
    {
      title: "期末考試時程公告",
      date: "2024年11月15日",
      type: "考試公告",
      urgent: false,
      description: "113學年度第1學期期末考試時程表已公布",
      link: "https://www.pccu.edu.tw/exam",
      department: "教務處"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "報名中":
        return "bg-green-100 text-green-800 border-green-200";
      case "即將開始":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "開放報名":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              活動<span className="text-blue-600">消息</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              掌握最新活動資訊與行政公告，參與豐富多元的學習活動
            </p>
          </div>

          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="regular" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                定期活動
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                近期活動
              </TabsTrigger>
              <TabsTrigger value="admin" className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                行政消息
              </TabsTrigger>
            </TabsList>

            {/* 定期活動 */}
            <TabsContent value="regular">
              <div className="grid lg:grid-cols-2 gap-8">
                {regularActivities.map((activity, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                    <div className={`h-32 bg-gradient-to-br ${activity.color} flex items-center justify-center relative`}>
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">{activity.icon}</div>
                        <p className="font-semibold text-lg">{activity.title}</p>
                      </div>
                      <Badge className="absolute top-4 right-4 bg-white/20 text-white border-white/30">
                        {activity.frequency}
                      </Badge>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                        {activity.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {activity.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-700 mb-2">活動特色：</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {activity.features.map((feature, i) => (
                            <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 justify-start">
                              • {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="text-sm text-slate-600">下次舉辦：</span>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                          {activity.nextDate}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 近期活動 */}
            <TabsContent value="recent">
              <div className="space-y-6">
                {recentActivities.map((activity, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl text-slate-800">
                              {activity.title}
                            </CardTitle>
                            <Badge className={getStatusColor(activity.status)}>
                              {activity.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {activity.date}
                            </span>
                            <Badge variant="outline">{activity.type}</Badge>
                          </div>
                          <CardDescription className="text-slate-600 leading-relaxed mb-4">
                            {activity.description}
                          </CardDescription>
                          <div className="flex items-center gap-6 text-sm text-slate-600">
                            <span>📍 {activity.location}</span>
                            <span>👥 限額 {activity.capacity}</span>
                          </div>
                        </div>
                        {activity.registration && (
                          <Button className="ml-4 bg-blue-600 hover:bg-blue-700">
                            立即報名
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 行政消息 */}
            <TabsContent value="admin">
              <div className="space-y-4">
                {adminNews.map((news, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-lg text-slate-800">
                              {news.title}
                            </CardTitle>
                            {news.urgent && (
                              <Badge className="bg-red-100 text-red-800 border-red-200">
                                🔥 重要
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-xs">
                              {news.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                            <span>{news.date}</span>
                            <span>發布單位：{news.department}</span>
                          </div>
                          <CardDescription className="text-slate-600 leading-relaxed">
                            {news.description}
                          </CardDescription>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="ml-4 flex items-center gap-2"
                          onClick={() => window.open(news.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          查看詳情
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* 聯絡資訊 */}
          <Card className="bg-gradient-to-r from-blue-900 to-slate-800 text-white border-0 mt-12">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400 text-center">活動報名與諮詢</CardTitle>
              <CardDescription className="text-blue-200 text-center">
                有任何問題歡迎聯絡系辦公室
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">📞</div>
                  <h4 className="font-semibold text-blue-400 mb-1">電話諮詢</h4>
                  <p className="text-blue-200 text-sm">(02) 2861-0511 #123</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">✉️</div>
                  <h4 className="font-semibold text-green-400 mb-1">電子信箱</h4>
                  <p className="text-blue-200 text-sm">marketing@pccu.edu.tw</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">💬</div>
                  <h4 className="font-semibold text-orange-400 mb-1">粉絲專頁</h4>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900"
                    onClick={() => window.open('https://www.facebook.com/pccu.marketing', '_blank')}
                  >
                    立即聯絡
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Activities;
