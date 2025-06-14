
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Users, Award, ChevronRight } from "lucide-react";

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      title: "學術研討會盛況",
      description: "師生齊聚一堂，共同探討行銷學術前沿議題，促進知識交流與創新思維碰撞",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
      category: "學術活動",
      participants: "80+",
      year: "2024"
    },
    {
      id: 2,
      title: "產學合作成果展",
      description: "學生團隊展示與企業合作的創新專案成果，展現理論與實務完美結合的學習成效",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&q=80",
      category: "產學合作",
      participants: "120+",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-teal-100/30 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-gradient-to-l from-blue-100/30 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* 標題區域 */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 border border-teal-200/50 px-6 py-3 rounded-full mb-6 text-sm font-medium shadow-sm">
            <Camera className="w-4 h-4 mr-2" />
            活動紀實
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            精彩時刻
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            記錄系所的每一個重要時刻
            <br />
            <span className="text-teal-600 font-medium">見證師生共同成長的美好回憶</span>
          </p>
        </div>

        {/* 照片展示 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {photos.map((photo, index) => (
            <div key={photo.id} className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50/50 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  {/* 統計數據覆蓋 */}
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <Badge className="bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                      <Users className="w-3 h-3 mr-1" />
                      {photo.participants} 參與
                    </Badge>
                    <Badge className="bg-teal-500/80 text-white border-0 backdrop-blur-sm">
                      {photo.year}
                    </Badge>
                  </div>
                  
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white border-0 text-xs">
                    {photo.category}
                  </Badge>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {photo.description}
                  </p>
                  <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors cursor-pointer">
                    <Award className="w-4 h-4 mr-2" />
                    <span>查看更多活動照片</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA 區域 */}
        <div className="text-center bg-gradient-to-r from-slate-50 to-teal-50/50 rounded-2xl p-12 border border-slate-200/50">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            想要了解更多系所活動？
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            關注我們的社群媒體，第一時間獲得最新活動資訊與精彩照片分享
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg">
              <Camera className="w-4 h-4 mr-2" />
              瀏覽相簿
            </Button>
            <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-xl">
              聯絡我們
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
