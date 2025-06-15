
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200/40 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo 區域 */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png" 
                alt="文化大學行銷所 Logo"
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
          
          {/* 桌面導航 */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { path: '/about', label: '系所介紹' },
              { path: '/features', label: '教學特色' },
              { path: '/faculty', label: '師資陣容' },
              { path: '/activities', label: '活動成果' },
              { path: '/admissions', label: '招生資訊' },
              { path: '/contact', label: '聯絡我們' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-all duration-300 group ${
                  isActive(item.path) 
                    ? 'text-teal-600' 
                    : 'text-slate-700 hover:text-teal-600'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 transform origin-left transition-transform duration-300 ${
                  isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
              </Link>
            ))}
          </div>

          {/* 移動端菜單按鈕 */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* 移動端菜單 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-6 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-xl">
            <div className="flex flex-col space-y-4">
              {[
                { path: '/about', label: '系所介紹' },
                { path: '/features', label: '教學特色' },
                { path: '/faculty', label: '師資陣容' },
                { path: '/activities', label: '活動成果' },
                { path: '/admissions', label: '招生資訊' },
                { path: '/contact', label: '聯絡我們' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'text-teal-600 bg-teal-50' 
                      : 'text-slate-700 hover:text-teal-600 hover:bg-teal-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* 移除手機 CTA 按鈕 */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

