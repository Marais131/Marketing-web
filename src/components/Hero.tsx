
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Users, BookOpen, Award, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-teal-50/30">
      {/* 簡潔背景 */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop&q=80" 
          alt="校園環境"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-teal-50/95"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* 主標題區域 */}
          <div className="mb-12">
            <Badge className="bg-teal-100 text-teal-700 border border-teal-200 px-6 py-2 rounded-full mb-6 text-sm font-medium">
              Department of Marketing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 leading-tight">
              中國文化大學
              <br />
              <span className="text-teal-600">行銷學系 / 行銷研究所</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              培養具備消費者心理學與數位行銷素養的專業人才
            </p>
          </div>

          {/* CTA 按鈕 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              asChild
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg shadow-lg"
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
              className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg"
            >
              <Link to="/about">系所介紹</Link>
            </Button>
          </div>

          {/* 統計數據 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "20+", label: "專業師資", icon: Users, color: "text-teal-600" },
              { number: "500+", label: "在校學生", icon: BookOpen, color: "text-blue-600" },
              { number: "95%", label: "就業率", icon: TrendingUp, color: "text-green-600" },
              { number: "10+", label: "產學合作", icon: Award, color: "text-orange-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
