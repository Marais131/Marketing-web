import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
    <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#1A4C7A]/10 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo 區域 */}
          <Link
            to="/"
            className="flex items-center group hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png" 
              alt="文化大學行銷系"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* 桌面導航 */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 ${
                  isActive(item.path) 
                    ? 'text-white bg-[#1A4C7A] shadow-lg' 
                    : 'text-[#1A4C7A] hover:text-white hover:bg-[#2A7DB1]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 移動端菜單按鈕 */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2 hover:bg-[#3CB1B6]/10 text-[#1A4C7A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* 移動端菜單 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-[#1A4C7A]/10 shadow-xl">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                      isActive(item.path) 
                        ? 'text-white bg-[#1A4C7A] shadow-lg' 
                        : 'text-[#1A4C7A] hover:text-white hover:bg-[#2A7DB1]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
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
