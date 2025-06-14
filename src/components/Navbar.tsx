
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/60 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-800 text-lg leading-tight">文化大學</span>
                <span className="text-sm text-teal-600 font-medium">行銷學系</span>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              系所介紹
            </Link>
            <Link 
              to="/features"
              className={`font-medium transition-colors ${
                isActive('/features') ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              教學特色
            </Link>
            <Link 
              to="/faculty"
              className={`font-medium transition-colors ${
                isActive('/faculty') ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              師資陣容
            </Link>
            <Link 
              to="/activities"
              className={`font-medium transition-colors ${
                isActive('/activities') ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              活動成果
            </Link>
            <Link 
              to="/admissions"
              className={`font-medium transition-colors ${
                isActive('/admissions') ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              招生資訊
            </Link>
            <Link 
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              聯絡我們
            </Link>
          </div>

          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
            >
              <Link to="/admissions">立即報名</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
