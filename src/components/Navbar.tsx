import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ElegantImage } from "@/components/ui/elegant-image";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/curriculum', label: '課程亮點' },
    { path: '/about', label: '系所介紹' },
    { path: '/faculty', label: '師資陣容' },
    { path: '/activities', label: '活動成果' },
    { path: '/articles', label: '專欄文章' },
    { path: '/admissions', label: '入學與未來' },
    { path: '/contact', label: '聯絡我們' }
  ];

  return (
    <nav className="sticky top-0 w-full glass-effect border-b border-[#1A4C7A]/20 z-50 shadow-lg">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo 區域 */}
          <Link
            to="/"
            className="flex items-center group magnetic-hover"
          >
            <ElegantImage
              src="/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png" 
              alt="文化大學行銷系"
              variant="default"
              zoom={false}
              containerClassName="h-12 md:h-14 w-auto group-hover:animate-gentle-bounce"
              className="object-contain"
            />
          </Link>

          {/* 桌面導航 - 顯示在中大螢幕 */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 magnetic-hover ${
                  isActive(item.path) 
                    ? 'text-white bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] shadow-lg shadow-[#1A4C7A]/30' 
                    : 'text-[#1A4C7A] hover:text-white hover:bg-gradient-to-r hover:from-[#2A7DB1] hover:to-[#3CB1B6]'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] rounded-lg blur opacity-20 animate-soft-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* 移動端菜單按鈕 - 只在小螢幕顯示 */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 hover:bg-[#3CB1B6]/10 text-[#1A4C7A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* 移動端菜單 */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-b border-[#1A4C7A]/20 shadow-2xl animate-fade-in-scale">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 magnetic-hover ${
                      isActive(item.path) 
                        ? 'text-white bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] shadow-lg shadow-[#1A4C7A]/30' 
                        : 'text-[#1A4C7A] hover:text-white hover:bg-gradient-to-r hover:from-[#2A7DB1] hover:to-[#3CB1B6]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
