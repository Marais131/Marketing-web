
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Facebook, Instagram, Youtube } from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Faculty from "@/components/Faculty";
import Activities from "@/components/Activities";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                CCU
              </div>
              <span className="font-bold text-slate-800 text-lg">行銷系所</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
              >
                系所介紹
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
              >
                教學特色
              </button>
              <button 
                onClick={() => scrollToSection('faculty')}
                className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
              >
                師資陣容
              </button>
              <button 
                onClick={() => scrollToSection('activities')}
                className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
              >
                活動成果
              </button>
              <button 
                onClick={() => scrollToSection('admissions')}
                className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
              >
                招生資訊
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
              >
                聯絡我們
              </button>
            </div>

            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToSection('admissions')}
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              >
                立即報名
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <About />
        <Features />
        <Faculty />
        <Activities />
        <Admissions />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                  CCU
                </div>
                <div>
                  <h3 className="font-bold text-lg">中國文化大學</h3>
                  <p className="text-slate-400 text-sm">行銷學系 / 行銷研究所</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                全台唯一聚焦品牌端行銷思維的學系<br/>
                培養具備消費者心理學與數位行銷素養的專業人才
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-orange-400">快速連結</h4>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">系所介紹</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">師資陣容</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">課程規劃</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">招生資訊</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-orange-400">聯絡資訊</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>台北市士林區華岡路55號</p>
                <p>電話：02-2861-0511</p>
                <p>Email: marketing@pccu.edu.tw</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 中國文化大學行銷學系. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-8 right-8 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Index;
