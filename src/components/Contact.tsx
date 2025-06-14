
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      title: "系辦公室",
      details: [
        "地址：台北市士林區華岡路55號 大典館5樓",
        "電話：02-2861-0511 分機 31301",
        "傳真：02-2861-8050",
        "Email：marketing@pccu.edu.tw"
      ]
    },
    {
      title: "研究所辦公室",
      details: [
        "地址：台北市士林區華岡路55號 大典館5樓",
        "電話：02-2861-0511 分機 31302",
        "Email：mktresearch@pccu.edu.tw"
      ]
    }
  ];

  const socialMedia = [
    { name: "Facebook", icon: Facebook, url: "#", color: "from-blue-600 to-blue-700", followers: "5.2K" },
    { name: "Instagram", icon: Instagram, url: "#", color: "from-pink-500 to-purple-600", followers: "3.8K" },
    { name: "YouTube", icon: Youtube, url: "#", color: "from-red-500 to-red-600", followers: "2.1K" }
  ];

  const upcomingEvents = [
    {
      title: "線上家長座談會",
      date: "2024年12月15日",
      time: "14:00-16:00",
      type: "線上會議"
    },
    {
      title: "招生說明會",
      date: "2024年12月20日",
      time: "10:00-12:00",
      type: "實體活動"
    },
    {
      title: "系所參訪日",
      date: "2024年12月25日",
      time: "09:00-17:00",
      type: "校園參訪"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              聯絡<span className="text-orange-500">我們</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              有任何問題或想了解更多資訊？歡迎透過以下方式與我們聯繫
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Contact information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">聯絡資訊</h3>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-800">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-slate-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Office hours */}
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">辦公時間</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-slate-600 text-sm">週一至週五：08:30 - 17:00</p>
                    <p className="text-slate-600 text-sm">週六：09:00 - 12:00</p>
                    <p className="text-slate-600 text-sm">週日及國定假日：休息</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Map placeholder and directions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">交通位置</h3>
              
              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <p className="text-slate-600 font-medium">中國文化大學</p>
                  <p className="text-slate-500 text-sm">台北市士林區華岡路55號</p>
                </div>
              </div>

              {/* Transportation */}
              <Card className="border-0 bg-gradient-to-br from-orange-50 to-white">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">交通方式</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-blue-500 text-white text-xs">公車</Badge>
                      <div>
                        <p className="text-slate-700 text-sm font-medium">紅5、260、681</p>
                        <p className="text-slate-600 text-xs">至「文化大學」站下車</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-green-500 text-white text-xs">捷運</Badge>
                      <div>
                        <p className="text-slate-700 text-sm font-medium">淡水信義線</p>
                        <p className="text-slate-600 text-xs">劍潭站轉乘公車</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-orange-500 text-white text-xs">開車</Badge>
                      <div>
                        <p className="text-slate-700 text-sm font-medium">校內停車場</p>
                        <p className="text-slate-600 text-xs">提供來賓停車位</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Social media section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
              追蹤我們的社群媒體
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {socialMedia.map((social, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">{social.name}</h4>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                      {social.followers} 關注者
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming events */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
              近期活動
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-b from-white to-slate-50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-slate-800">{event.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                    <CardDescription>
                      <div className="space-y-1">
                        <p className="text-slate-600">{event.date}</p>
                        <p className="text-slate-500 text-sm">{event.time}</p>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      立即報名
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <Card className="bg-gradient-to-r from-blue-900 to-slate-800 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">還有其他問題嗎？</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                我們的專業團隊隨時為您服務，歡迎來電或透過Email與我們聯繫
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                  立即聯繫
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                  預約參訪
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
