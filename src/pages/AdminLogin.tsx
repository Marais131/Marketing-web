import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, AlertCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // 檢查是否為有效的演示帳號
    const validCredentials = [
      { username: 'demo', password: 'demo', name: '演示用戶', avatar: '🎭', role: 'demo' },
      { username: 'admin', password: 'admin123', name: '系統管理員', avatar: '👨‍💼', role: 'admin' },
      { username: 'mkt', password: 'mkt123', name: '行銷系管理員', avatar: '🎯', role: 'editor' }
    ];

    const validAccount = validCredentials.find(
      cred => cred.username === formData.username && cred.password === formData.password
    );

    if (validAccount) {
      // 直接進入演示模式
      const demoUser = {
        username: validAccount.username,
        name: validAccount.name,
        avatar: validAccount.avatar,
        role: validAccount.role,
        isDemo: true
      };
      
      localStorage.setItem('adminToken', 'demo-token-' + Date.now());
      localStorage.setItem('adminUser', JSON.stringify(demoUser));
      
      // 延遲一下讓用戶看到載入效果
      setTimeout(() => {
        window.location.href = '/admin/dashboard';
      }, 1000);
      return;
    }

    // 如果不是有效帳號，顯示錯誤
    setError('帳號或密碼錯誤！請使用以下演示帳號：admin/admin123、mkt/mkt123 或 demo/demo');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A4C7A] via-[#2A7DB1] to-[#3CB1B6] flex items-center justify-center p-4">
      {/* 背景動畫 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl relative z-10">
        <CardHeader className="text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#1A4C7A] to-[#3CB1B6] rounded-2xl flex items-center justify-center mb-4 animate-bounce">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-[#1A4C7A]">
            智慧管理後台
          </CardTitle>
          <p className="text-gray-600 mt-2">
            文化大學行銷系 - 一鍵發布系統
          </p>
        </CardHeader>

        <CardContent>
          {error && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-600">
                {error}
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                管理員帳號
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="請輸入管理員帳號"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="pl-10 h-12 border-gray-200 focus:border-[#2A7DB1] focus:ring-[#2A7DB1]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                管理員密碼
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="請輸入管理員密碼"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10 h-12 border-gray-200 focus:border-[#2A7DB1] focus:ring-[#2A7DB1]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] hover:from-[#2A7DB1] hover:to-[#3CB1B6] text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {isLoading ? '登入中...' : '🚀 進入管理後台'}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-600 text-center font-semibold mb-2">
              📝 可用管理員帳號：
            </p>
            <div className="text-xs text-blue-600 text-center space-y-1">
              <div>👨‍💼 admin / admin123 (系統管理員)</div>
              <div>🎯 mkt / mkt123 (行銷系管理員)</div>
              <div className="mt-2 pt-2 border-t border-blue-200">
                <div>🎭 demo / demo (演示模式)</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin; 