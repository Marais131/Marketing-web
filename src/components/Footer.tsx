import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Settings } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">中國文化大學</h3>
                <p className="text-slate-400 text-sm">行銷學系 / 行銷研究所</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              培養具備消費者心理學與數位行銷素養的專業人才<br/>
              打造品牌思維與創新行銷的未來領袖
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
            <h4 className="font-semibold mb-4 text-teal-400">快速連結</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-slate-400 hover:text-white transition-colors">系所介紹</Link>
              <Link to="/faculty" className="block text-slate-400 hover:text-white transition-colors">師資陣容</Link>
              <Link to="/features" className="block text-slate-400 hover:text-white transition-colors">課程規劃</Link>
              <Link to="/admissions" className="block text-slate-400 hover:text-white transition-colors">招生資訊</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-teal-400">聯絡資訊</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>台北市士林區華岡路55號</p>
              <p>電話：02-2861-0511</p>
              <p>Email: marketing@pccu.edu.tw</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">&copy; 2024 中國文化大學行銷學系. All rights reserved.</p>
            
            {/* 管理後台入口 */}
            <Link
              to="/admin/login"
              className="flex items-center space-x-1 text-slate-500 hover:text-slate-300 transition-colors text-xs mt-2 md:mt-0"
            >
              <Settings className="w-3 h-3" />
              <span>管理後台</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
