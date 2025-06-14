
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              CCU
            </div>
            <span className="font-bold text-slate-800 text-lg">行銷系所</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-blue-900' : 'text-slate-700 hover:text-blue-900'
              }`}
            >
              系所介紹
            </Link>
            <Link 
              to="/features"
              className={`font-medium transition-colors ${
                isActive('/features') ? 'text-blue-900' : 'text-slate-700 hover:text-blue-900'
              }`}
            >
              教學特色
            </Link>
            <Link 
              to="/faculty"
              className={`font-medium transition-colors ${
                isActive('/faculty') ? 'text-blue-900' : 'text-slate-700 hover:text-blue-900'
              }`}
            >
              師資陣容
            </Link>
            <Link 
              to="/activities"
              className={`font-medium transition-colors ${
                isActive('/activities') ? 'text-blue-900' : 'text-slate-700 hover:text-blue-900'
              }`}
            >
              活動成果
            </Link>
            <Link 
              to="/admissions"
              className={`font-medium transition-colors ${
                isActive('/admissions') ? 'text-blue-900' : 'text-slate-700 hover:text-blue-900'
              }`}
            >
              招生資訊
            </Link>
            <Link 
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-900' : 'text-slate-700 hover:text-blue-900'
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
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
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
