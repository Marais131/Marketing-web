import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Users, 
  Calendar,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Upload,
  Save,
  X,
  Sparkles,
  Globe,
  Bell,
  TrendingUp,
  CheckCircle,
  Clock,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('publish');
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishForm, setPublishForm] = useState({
    type: 'news',
    title: '',
    content: '',
    images: [],
    category: '一般公告'
  });

  const [publishedItems, setPublishedItems] = useState([
    {
      id: 1,
      type: 'news',
      title: '🎉 2024年行銷系招生開始！',
      content: '歡迎對行銷有興趣的同學加入我們...',
      category: '招生資訊',
      date: '2024-01-15',
      views: 156,
      status: 'published'
    },
    {
      id: 2,
      type: 'event',
      title: '📚 品牌策略工作坊',
      content: '邀請業界專家分享品牌建立經驗...',
      category: '活動',
      date: '2024-01-10',
      views: 89,
      status: 'published'
    }
  ]);

  // 檢查登入狀態
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      window.location.href = '/admin/login';
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    window.location.href = '/admin/login';
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    
    // 模擬發布過程
    setTimeout(() => {
      const newItem = {
        id: Date.now(),
        type: publishForm.type,
        title: publishForm.title,
        content: publishForm.content,
        category: publishForm.category,
        date: new Date().toISOString().split('T')[0],
        views: 0,
        status: 'published'
      };
      
      setPublishedItems([newItem, ...publishedItems]);
      setPublishForm({
        type: 'news',
        title: '',
        content: '',
        images: [],
        category: '一般公告'
      });
      setIsPublishing(false);
      
      // 顯示成功訊息
      alert('✅ 發布成功！內容已更新到網站首頁');
    }, 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setPublishForm({ ...publishForm, images: [...publishForm.images, ...imageUrls] });
  };

  const getAdminUser = () => {
    const userStr = localStorage.getItem('adminUser');
    return userStr ? JSON.parse(userStr) : { name: '管理員', avatar: '👨‍💼' };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 側邊欄 */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1A4C7A] to-[#3CB1B6] rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-[#1A4C7A]">智慧後台</h1>
              <p className="text-xs text-gray-500">一鍵發布系統</p>
            </div>
          </div>

          {/* 管理員資訊 */}
          <div className="mb-6 p-4 bg-gradient-to-r from-[#1A4C7A]/10 to-[#3CB1B6]/10 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{getAdminUser().avatar}</div>
              <div>
                <p className="font-semibold text-[#1A4C7A]">{getAdminUser().name}</p>
                <p className="text-xs text-gray-500">已登入</p>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('publish')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'publish' 
                  ? 'bg-[#1A4C7A] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Plus className="w-5 h-5" />
              🚀 一鍵發布
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-[#1A4C7A] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              📊 總覽
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'content' 
                  ? 'bg-[#1A4C7A] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-5 h-5" />
              📝 內容管理
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'media' 
                  ? 'bg-[#1A4C7A] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Image className="w-5 h-5" />
              🖼️ 媒體管理
            </button>
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              登出
            </button>
          </div>
        </div>
      </div>

      {/* 主要內容區 */}
      <div className="ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* 標題欄 */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1A4C7A]">
                {activeTab === 'publish' && '🚀 一鍵發布'}
                {activeTab === 'overview' && '📊 總覽'}
                {activeTab === 'content' && '📝 內容管理'}
                {activeTab === 'media' && '🖼️ 媒體管理'}
              </h2>
              <p className="text-gray-600 mt-1">
                {activeTab === 'publish' && '像發朋友圈一樣簡單，一鍵發布到網站'}
                {activeTab === 'overview' && '網站整體狀況與統計數據'}
                {activeTab === 'content' && '管理所有已發布的內容'}
                {activeTab === 'media' && '上傳和管理圖片、影片檔案'}
              </p>
            </div>
          </div>

          {/* 內容區域 */}
          {activeTab === 'publish' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 發布表單 */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#3CB1B6]" />
                    快速發布
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 發布類型選擇 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      發布類型
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: 'news', label: '📰 新聞', icon: '📰' },
                        { value: 'event', label: '🎉 活動', icon: '🎉' },
                        { value: 'notice', label: '📢 公告', icon: '📢' },
                        { value: 'achievement', label: '🏆 成就', icon: '🏆' }
                      ].map((type) => (
                        <button
                          key={type.value}
                          onClick={() => setPublishForm({ ...publishForm, type: type.value })}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            publishForm.type === type.value
                              ? 'border-[#3CB1B6] bg-[#3CB1B6]/10'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-2xl mb-1">{type.icon}</div>
                          <div className="text-sm font-medium">{type.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 分類選擇 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      分類
                    </label>
                    <select
                      value={publishForm.category}
                      onChange={(e) => setPublishForm({ ...publishForm, category: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#2A7DB1] focus:ring-[#2A7DB1]"
                    >
                      <option value="一般公告">📢 一般公告</option>
                      <option value="招生資訊">🎓 招生資訊</option>
                      <option value="活動">🎉 活動</option>
                      <option value="學術">📚 學術</option>
                      <option value="實習">💼 實習</option>
                      <option value="競賽">🏆 競賽</option>
                    </select>
                  </div>

                  {/* 標題 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      標題
                    </label>
                    <Input
                      value={publishForm.title}
                      onChange={(e) => setPublishForm({ ...publishForm, title: e.target.value })}
                      placeholder="輸入標題..."
                      className="text-lg"
                    />
                  </div>

                  {/* 內容 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      內容
                    </label>
                    <Textarea
                      value={publishForm.content}
                      onChange={(e) => setPublishForm({ ...publishForm, content: e.target.value })}
                      placeholder="輸入內容..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  {/* 圖片上傳 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      添加圖片（可選）
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#3CB1B6] transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">點擊上傳或拖拽圖片到這裡</p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload">
                        <Button variant="outline" className="cursor-pointer">
                          <Image className="w-4 h-4 mr-2" />
                          選擇圖片
                        </Button>
                      </label>
                    </div>
                  </div>

                  {/* 發布按鈕 */}
                  <Button
                    onClick={handlePublish}
                    disabled={isPublishing || !publishForm.title || !publishForm.content}
                    className="w-full h-12 bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6] hover:from-[#2A7DB1] hover:to-[#3CB1B6] text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {isPublishing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        發布中...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        🚀 一鍵發布
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* 即時預覽 */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#3CB1B6]" />
                    即時預覽
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-[#3CB1B6] text-white">
                        {publishForm.category}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1A4C7A] mb-2">
                      {publishForm.title || '標題預覽'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {publishForm.content || '內容預覽...'}
                    </p>
                    {publishForm.images.length > 0 && (
                      <div className="mt-4 flex gap-2">
                        {publishForm.images.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt="預覽"
                            className="w-16 h-16 object-cover rounded"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">總發布數</p>
                      <p className="text-2xl font-bold text-[#1A4C7A]">{publishedItems.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">今日瀏覽</p>
                      <p className="text-2xl font-bold text-[#1A4C7A]">1,234</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">熱門文章</p>
                      <p className="text-2xl font-bold text-[#1A4C7A]">8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">系統狀態</p>
                      <p className="text-2xl font-bold text-green-600">正常</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-[#1A4C7A]">已發布內容</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Globe className="w-4 h-4 mr-2" />
                    查看網站
                  </Button>
                </div>
              </div>
              
              <div className="grid gap-4">
                {publishedItems.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-lg">{item.title}</h4>
                            <Badge className="bg-[#3CB1B6] text-white">
                              {item.category}
                            </Badge>
                            <Badge variant="outline" className="text-green-600 border-green-200">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              已發布
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{item.content.substring(0, 100)}...</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {item.views} 次瀏覽
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4 mr-1" />
                            編輯
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4 mr-1" />
                            刪除
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>媒體檔案管理</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">拖拽檔案到這裡或點擊上傳</p>
                    <Button className="bg-[#1A4C7A] hover:bg-[#2A7DB1]">
                      <Plus className="w-4 h-4 mr-2" />
                      上傳檔案
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 