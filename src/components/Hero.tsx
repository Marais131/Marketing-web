
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Users, BookOpen, Award, TrendingUp, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 動態背景 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-teal-900/85 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop&q=80" 
          alt="校園環境"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左側內容 */}
            <div className="text-white space-y-8">
              <div>
                <Badge className="bg-teal-500/20 text-teal-300 border border-teal-400/30 px-6 py-2 rounded-full mb-6 text-sm font-medium backdrop-blur-sm">
                  Department of Marketing
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  中國文化大學
                  <br />
                  <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                    行銷學系
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
                  培養具備消費者心理學與數位行銷素養的專業人才
                  <br />
                  <span className="text-teal-400 font-medium">打造品牌思維與創新行銷的未來領袖</span>
                </p>
              </div>

              {/* CTA 按鈕 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-xl border-0 rounded-xl"
                >
                  <Link to="/admissions">
                    了解招生資訊
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm rounded-xl"
                >
                  <Link to="/about">系所介紹</Link>
                </Button>
              </div>

              {/* 統計數據 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {[
                  { number: "20+", label: "專業師資", icon: Users, color: "text-teal-400" },
                  { number: "500+", label: "在校學生", icon: BookOpen, color: "text-blue-400" },
                  { number: "95%", label: "就業率", icon: TrendingUp, color: "text-green-400" },
                  { number: "10+", label: "產學合作", icon: Award, color: "text-orange-400" }
                ].map((stat, index) => (
                  <div key={index} className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10">
                    <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右側影片區域 */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-800/50 backdrop-blur-sm border border-white/10">
                {!showVideo ? (
                  <>
                    <img 
                      src="https://img.youtube.com/vi/kcLHZOMzuXE/maxresdefault.jpg"
                      alt="系所介紹影片"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-center justify-center">
                      <Button
                        onClick={() => setShowVideo(true)}
                        size="lg"
                        className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 backdrop-blur-sm rounded-full w-20 h-20 p-0"
                      >
                        <Play className="w-8 h-8 ml-1" fill="currentColor" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">系所介紹影片</h3>
                      <p className="text-slate-300 text-sm">了解我們的教學理念與學習環境</p>
                    </div>
                  </>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/kcLHZOMzuXE?autoplay=1"
                    title="系所介紹影片"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
              
              {/* 裝飾元素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
