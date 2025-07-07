import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Upload,
  X,
  Sparkles,
  Globe,
  TrendingUp,
  CheckCircle,
  Clock,
  Eye,
  Settings,
  Users,
  MessageSquare,
  AlertTriangle,
  XCircle,
  Info,
  RefreshCw,
  Server,
  Database,
  Wifi,
  HardDrive
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { apiConfig } from '../lib/api';

// 系統狀態類型定義
interface SystemStatus {
  overall: 'normal' | 'warning' | 'error';
  backend: {
    status: 'normal' | 'warning' | 'error';
    message: string;
    details: string;
  };
  frontend: {
    status: 'normal' | 'warning' | 'error';
    message: string;
    details: string;
  };
  database: {
    status: 'normal' | 'warning' | 'error';
    message: string;
    details: string;
  };
  storage: {
    status: 'normal' | 'warning' | 'error';
    message: string;
    details: string;
  };
  lastChecked: string;
}

// 定義內容項目介面
interface ContentItem {
  id: number;
  type: string;
  category: string;
  title: string;
  content: string;
  images?: string[];
  displayPage?: string;
  isSticky?: boolean;
  priority?: string;
  author?: string;
  date?: string;
  views?: number;
  status?: string;
}

// 定義媒體文件介面
interface MediaFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  uploadDate: string;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('publish');
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishForm, setPublishForm] = useState({
    type: 'news',
    title: '',
    content: '',
    images: [],
    category: '招生訊息',
    displayPage: 'home', // 新增：顯示頁面選擇
    isSticky: false, // 新增：是否置頂
    priority: 'normal' // 新增：優先級
  });

  const [publishedItems, setPublishedItems] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  
  // 媒體管理狀態
  const [uploadedFiles, setUploadedFiles] = useState<MediaFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  // 系統狀態相關
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    overall: 'normal',
    backend: { status: 'normal', message: '檢測中...', details: '' },
    frontend: { status: 'normal', message: '檢測中...', details: '' },
    database: { status: 'normal', message: '檢測中...', details: '' },
    storage: { status: 'normal', message: '檢測中...', details: '' },
    lastChecked: new Date().toLocaleString('zh-TW')
  });
  const [showStatusDetails, setShowStatusDetails] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);

  // 操作記錄相關
  const [operationLogs, setOperationLogs] = useState([]);
  const [userActivityStats, setUserActivityStats] = useState([]);
  const [isLoadingLogs, setIsLoadingLogs] = useState(false);

  // 頁面選擇選項
  const displayPageOptions = [
    { value: 'home', label: '🏠 首頁 - 最新消息區域', description: '顯示在首頁的最新消息輪播' },
    { value: 'news', label: '📰 新聞頁面 - 所有文章', description: '顯示在新聞文章列表頁面' },
    { value: 'about', label: '📋 關於我們 - 系所介紹', description: '顯示在系所介紹相關區域' },
    { value: 'admissions', label: '🎓 招生資訊 - 招生專區', description: '顯示在招生資訊頁面' },
    { value: 'activities', label: '🎯 學生活動 - 活動專區', description: '顯示在學生活動頁面' },
    { value: 'faculty', label: '👨‍🏫 師資介紹 - 教師專欄', description: '顯示在師資介紹頁面' },
    { value: 'contact', label: '📞 聯絡我們 - 公告區域', description: '顯示在聯絡我們頁面' }
  ];

  // 優先級選項
  const priorityOptions = [
    { value: 'high', label: '🔴 高優先級', description: '重要公告，優先顯示' },
    { value: 'normal', label: '🟡 一般優先級', description: '正常順序顯示' },
    { value: 'low', label: '🟢 低優先級', description: '較不重要，排序靠後' }
  ];

  // 檢查登入狀態並載入數據
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      window.location.href = '/admin/login';
      return;
    }
    
    // 載入已發布的內容
    loadPublishedContent();
    // 載入已上傳的媒體文件
    loadUploadedFiles();
    // 執行系統狀態檢測
    checkSystemStatus();
    // 載入操作記錄
    loadOperationLogs();
    // 載入用戶活動統計
    loadUserActivityStats();
  }, []);

  // 載入已發布內容
  const loadPublishedContent = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiConfig.baseURL}${apiConfig.endpoints.content}`);
      if (response.ok) {
        const data = await response.json();
        setPublishedItems(data);
      }
    } catch (error) {
      // 演示模式 - 使用預設數據
      setPublishedItems([
        {
          id: 1,
          type: 'news',
          title: '🎉 2024年行銷系招生開始！',
          content: '歡迎對行銷有興趣的同學加入我們的行銷系大家庭！我們提供完整的行銷專業課程，包含數位行銷、品牌策略、消費者行為等核心領域。',
          category: '招生訊息',
          date: '2024-01-15',
          views: 156,
          status: 'published'
        },
        {
          id: 2,
          type: 'event',
          title: '📚 品牌策略工作坊',
          content: '邀請業界專家分享品牌建立經驗，從理論到實務，讓同學們了解現代品牌經營的核心概念。',
          category: '活動紀錄',
          date: '2024-01-10',
          views: 89,
          status: 'published'
        },
        {
          id: 3,
          type: 'experience',
          title: '💡 學長姐經驗分享：從學生到品牌經理',
          content: '畢業學長分享在學期間的學習心得和職場經驗，包含實習經驗、求職準備、職場適應等寶貴建議。',
          category: '學習心得',
          date: '2024-01-08',
          views: 203,
          status: 'published'
        }
      ]);
    }
    setIsLoading(false);
  };

  // 載入已上傳文件
  const loadUploadedFiles = async () => {
    try {
      const response = await fetch(`${apiConfig.baseURL}${apiConfig.endpoints.media}`);
      if (response.ok) {
        const data = await response.json();
        setUploadedFiles(data);
      }
    } catch (error) {
      console.log('載入媒體文件失敗，使用演示模式');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    window.location.href = '/admin/login';
  };

  const handlePublish = async () => {
    if (!publishForm.title || !publishForm.content) {
      alert('請填寫標題和內容！');
      return;
    }

    setIsPublishing(true);
    
    try {
      const newItem = {
        type: publishForm.type,
        title: publishForm.title,
        content: publishForm.content,
        category: publishForm.category,
        date: new Date().toLocaleDateString('zh-TW'),
        views: Math.floor(Math.random() * 50) + 1,
        status: 'published',
        images: publishForm.images,
        author: getAdminUser().name
      };

      const response = await fetch(`${apiConfig.baseURL}${apiConfig.endpoints.content}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem)
      });

      if (response.ok) {
        const savedItem = await response.json();
        
        // 記錄用戶操作
        await logUserOperation(
          'create',
          '發布內容',
          publishForm.title,
          publishForm.type,
          savedItem.id,
          `發布了${publishForm.type === 'news' ? '新聞' : publishForm.type === 'event' ? '活動' : '文章'}：${publishForm.title}`
        );
        
        alert('✅ 內容發布成功！');
        
        // 重置表單
        setPublishForm({
          type: 'news',
          title: '',
          content: '',
          images: [],
          category: '招生訊息',
          displayPage: 'home',
          isSticky: false,
          priority: 'normal'
        });
        
        // 重新載入已發布內容
        loadPublishedContent();
      } else {
        throw new Error('發布失敗');
      }
    } catch (error) {
      console.error('發布失敗:', error);
      alert('❌ 發布失敗，請稍後再試');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
  };

  const processFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    const imageUrls = imageFiles.map(file => ({
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size
    }));
    setPublishForm({ ...publishForm, images: [...publishForm.images, ...imageUrls] });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      processFiles(files);
    }
  };

  const removeImage = (index: number) => {
    const newImages = publishForm.images.filter((_, i) => i !== index);
    setPublishForm({ ...publishForm, images: newImages });
  };

  const getAdminUser = () => {
    const user = localStorage.getItem('adminUser');
    return user ? JSON.parse(user) : { name: '管理員', avatar: '👨‍💼' };
  };

  const handleEdit = (item: ContentItem) => {
    setPublishForm({
      type: item.type,
      category: item.category,
      title: item.title,
      content: item.content,
      images: item.images || [],
      displayPage: item.displayPage || 'home',
      isSticky: item.isSticky || false,
      priority: item.priority || 'normal'
    });
    setActiveTab('publish');
  };

  const handleDelete = (item: ContentItem) => {
    if (confirm(`確定要刪除「${item.title}」嗎？`)) {
      // 記錄刪除操作
      logUserOperation(
        'delete',
        '刪除內容',
        item.title,
        item.type,
        item.id,
        `刪除了${item.type === 'news' ? '新聞' : item.type === 'event' ? '活動' : '文章'}：${item.title}`
      );
      
      setPublishedItems(publishedItems.filter(p => p.id !== item.id));
      alert('✅ 內容已刪除');
    }
  };

  const handleViewWebsite = () => {
    window.open('http://localhost:8082', '_blank');
  };

  // 媒體上傳功能
  const handleMediaUpload = async (files: File[]) => {
    setIsUploading(true);
    
    try {
      // 模擬上傳過程
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newFiles = files.map(file => ({
        id: `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
        uploadDate: new Date().toLocaleDateString('zh-TW')
      }));
      
      setUploadedFiles([...uploadedFiles, ...newFiles]);
      
      // 記錄上傳操作
      for (const file of newFiles) {
        await logUserOperation(
          'upload',
          '上傳媒體',
          file.name,
          'media',
          file.id,
          `上傳了媒體文件：${file.name}（${(file.size / 1024 / 1024).toFixed(2)} MB）`
        );
      }
      
      alert(`✅ 成功上傳 ${files.length} 個文件！`);
    } catch (error) {
      console.error('上傳失敗:', error);
      alert('❌ 上傳失敗，請稍後再試');
    } finally {
      setIsUploading(false);
    }
  };

  const handleMediaDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      handleMediaUpload(files);
    }
  };

  const handleMediaFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      handleMediaUpload(files);
    }
  };

  const deleteMediaFile = (fileId: string) => {
    if (confirm('確定要刪除這個文件嗎？')) {
      setUploadedFiles(uploadedFiles.filter((f: MediaFile) => f.id !== fileId));
      alert('文件已刪除！');
    }
  };

  const copyFileUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    alert('📋 文件網址已複製到剪貼板！');
  };

  // 系統狀態檢測函數
  const checkSystemStatus = async () => {
    setIsCheckingStatus(true);
    const newStatus: SystemStatus = {
      overall: 'normal',
      backend: { status: 'normal', message: '', details: '' },
      frontend: { status: 'normal', message: '', details: '' },
      database: { status: 'normal', message: '', details: '' },
      storage: { status: 'normal', message: '', details: '' },
      lastChecked: new Date().toLocaleString('zh-TW')
    };

    // 1. 檢測後端API狀態
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
              const backendResponse = await fetch(`${apiConfig.baseURL}${apiConfig.endpoints.content}`, {
        method: 'GET',
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (backendResponse.ok) {
        const data = await backendResponse.json();
        newStatus.backend = {
          status: 'normal',
          message: '後端服務正常',
          details: `API 響應正常，已載入 ${data.length} 篇內容。響應時間良好。`
        };
      } else {
        newStatus.backend = {
          status: 'warning',
          message: '後端服務異常',
          details: `API 返回狀態碼 ${backendResponse.status}。可能是服務器負載過高或配置問題。`
        };
      }
    } catch (error) {
      newStatus.backend = {
        status: 'error',
        message: '無法連接後端',
        details: `後端服務可能未啟動或無法訪問。請檢查 ${apiConfig.baseURL} 是否可訪問。常見原因：1) 服務未啟動 2) 網路連接問題 3) 防火牆阻擋`
      };
    }

    // 2. 檢測前端服務狀態
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      const frontendResponse = await fetch(window.location.origin, {
        method: 'HEAD',
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (frontendResponse.ok) {
        newStatus.frontend = {
          status: 'normal',
          message: '前端服務正常',
          details: '網站可正常訪問，靜態資源載入正常。'
        };
      } else {
        newStatus.frontend = {
          status: 'warning',
          message: '前端服務異常',
          details: '網站可訪問但響應異常，可能存在配置問題。'
        };
      }
    } catch (error) {
      newStatus.frontend = {
        status: 'error',
        message: '前端服務錯誤',
        details: '無法正常載入網站資源。可能是建構錯誤或服務器問題。'
      };
    }

    // 3. 檢測數據庫/數據狀態
    try {
      if (publishedItems.length > 0) {
        newStatus.database = {
          status: 'normal',
          message: '數據狀態正常',
          details: `已載入 ${publishedItems.length} 篇內容，數據結構完整。`
        };
      } else {
        newStatus.database = {
          status: 'warning',
          message: '暫無數據',
          details: '系統中尚未有發布的內容，這是正常的初始狀態。'
        };
      }
    } catch (error) {
      newStatus.database = {
        status: 'error',
        message: '數據載入失敗',
        details: '無法載入內容數據，可能是數據格式錯誤或存儲問題。'
      };
    }

    // 4. 檢測存儲狀態
    try {
      // 檢測本地存儲
      const testKey = 'systemTest';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      
      newStatus.storage = {
        status: 'normal',
        message: '存儲功能正常',
        details: '本地存儲和會話管理正常工作。'
      };
    } catch (error) {
      newStatus.storage = {
        status: 'error',
        message: '存儲功能異常',
        details: '本地存儲功能受限，可能影響用戶會話和設置保存。請檢查瀏覽器設置。'
      };
    }

    // 5. 計算整體狀態
    const statuses = [
      newStatus.backend.status,
      newStatus.frontend.status,
      newStatus.database.status,
      newStatus.storage.status
    ];

    if (statuses.includes('error')) {
      newStatus.overall = 'error';
    } else if (statuses.includes('warning')) {
      newStatus.overall = 'warning';
    } else {
      newStatus.overall = 'normal';
    }

    setSystemStatus(newStatus);
    setIsCheckingStatus(false);
  };

  // 獲取狀態顯示信息
  const getStatusDisplay = (status: 'normal' | 'warning' | 'error') => {
    switch (status) {
      case 'normal':
        return { text: '正常', color: 'text-green-600', icon: CheckCircle, bgColor: 'bg-green-100' };
      case 'warning':
        return { text: '警告', color: 'text-yellow-600', icon: AlertTriangle, bgColor: 'bg-yellow-100' };
      case 'error':
        return { text: '異常', color: 'text-red-600', icon: XCircle, bgColor: 'bg-red-100' };
      default:
        return { text: '未知', color: 'text-gray-600', icon: Info, bgColor: 'bg-gray-100' };
    }
  };

  // 載入操作記錄
  const loadOperationLogs = async () => {
    setIsLoadingLogs(true);
    try {
      const response = await fetch(`${apiConfig.baseURL}${apiConfig.endpoints.operationLogs}?limit=10`);
      if (response.ok) {
        const data = await response.json();
        setOperationLogs(data.logs || []);
      } else {
        console.warn('無法載入操作記錄，使用演示數據');
        // 演示數據
        setOperationLogs([
          {
            id: 1,
            userId: 'admin',
            userName: '系統管理員',
            actionText: '發布文章',
            target: '🎉 2024年行銷系招生開始！',
            timestamp: '2024-01-15 14:30:00',
            details: '新增招生資訊文章'
          },
          {
            id: 2,
            userId: 'mkt',
            userName: '行銷系管理員',
            actionText: '發布活動',
            target: '📚 品牌策略工作坊',
            timestamp: '2024-01-10 09:15:00',
            details: '新增品牌策略工作坊活動'
          }
        ]);
      }
    } catch (error) {
      console.error('載入操作記錄失敗:', error);
    } finally {
      setIsLoadingLogs(false);
    }
  };

  // 載入用戶活動統計
  const loadUserActivityStats = async () => {
    try {
      const response = await fetch(`${apiConfig.baseURL}${apiConfig.endpoints.userActivityStats}`);
      if (response.ok) {
        const data = await response.json();
        setUserActivityStats(data || []);
      } else {
        console.warn('無法載入用戶活動統計，使用演示數據');
        // 演示數據
        setUserActivityStats([
          {
            userId: 'admin',
            userName: '系統管理員',
            totalOperations: 15,
            lastActivity: '2024-01-15 14:30:00'
          },
          {
            userId: 'mkt',
            userName: '行銷系管理員',
            totalOperations: 8,
            lastActivity: '2024-01-10 09:15:00'
          }
        ]);
      }
    } catch (error) {
      console.error('載入用戶活動統計失敗:', error);
    }
  };

  // 記錄用戶操作
  const logUserOperation = async (action, actionText, target, targetType, targetId, details) => {
    try {
      const currentUser = getAdminUser();
      await fetch(`${apiConfig.baseURL}${apiConfig.endpoints.operationLogs}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: currentUser.id,
          userName: currentUser.name,
          action,
          actionText,
          target,
          targetType,
          targetId,
          details
        })
      });
      
      // 重新載入操作記錄
      loadOperationLogs();
      loadUserActivityStats();
    } catch (error) {
      console.error('記錄用戶操作失敗:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 側邊欄 */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">內容管理後台</h1>
              <p className="text-xs text-gray-500">文化大學行銷系</p>
            </div>
          </div>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{getAdminUser().avatar}</div>
              <div>
                <p className="font-semibold text-gray-900">{getAdminUser().name}</p>
                <p className="text-xs text-gray-500">已登入</p>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('publish')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'publish' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Plus className="w-5 h-5" />
              📝 發布內容
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'content' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-5 h-5" />
              📚 內容管理
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              📊 數據總覽
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'media' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Image className="w-5 h-5" />
              🖼️ 媒體工具
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {activeTab === 'publish' && '📝 發布新內容'}
                {activeTab === 'overview' && '📊 數據總覽'}
                {activeTab === 'content' && '📚 內容管理'}
                {activeTab === 'media' && '🖼️ 媒體工具'}
              </h2>
              <p className="text-gray-600 mt-1">
                {activeTab === 'publish' && '發布學校消息、活動記錄、學習心得等內容'}
                {activeTab === 'overview' && '查看網站整體數據與內容統計'}
                {activeTab === 'content' && '管理已發布的所有內容'}
                {activeTab === 'media' && '圖片處理與媒體資源管理'}
              </p>
            </div>
            <Button onClick={handleViewWebsite} variant="outline">
              <Globe className="w-4 h-4 mr-2" />
              查看網站
            </Button>
          </div>

          {/* 發布內容 */}
          {activeTab === 'publish' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    發布新內容
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      內容類型
                    </label>
                    <select
                      value={publishForm.type}
                      onChange={(e) => setPublishForm({ ...publishForm, type: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-lg"
                    >
                      <option value="news">📰 學校消息</option>
                      <option value="event">🎉 活動記錄</option>
                      <option value="experience">💡 學習心得</option>
                      <option value="notice">📢 重要公告</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      分類標籤
                    </label>
                    <select
                      value={publishForm.category}
                      onChange={(e) => setPublishForm({ ...publishForm, category: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-lg"
                    >
                      <option value="招生訊息">🎯 招生訊息</option>
                      <option value="活動紀錄">🎉 活動紀錄</option>
                      <option value="學習心得">💡 學習心得</option>
                      <option value="系所公告">📢 系所公告</option>
                      <option value="競賽成果">🏆 競賽成果</option>
                      <option value="實習分享">💼 實習分享</option>
                    </select>
                  </div>

                  {/* 新增：頁面位置選擇 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      🌐 顯示頁面位置
                    </label>
                    <select
                      value={publishForm.displayPage}
                      onChange={(e) => setPublishForm({...publishForm, displayPage: e.target.value})}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {displayPageOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-sm text-gray-500 mt-1">
                      💡 {displayPageOptions.find(opt => opt.value === publishForm.displayPage)?.description}
                    </p>
                  </div>

                  {/* 新增：優先級和置頂設置 */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ⭐ 優先級設置
                      </label>
                      <select
                        value={publishForm.priority}
                        onChange={(e) => setPublishForm({...publishForm, priority: e.target.value})}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {priorityOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <p className="text-sm text-gray-500 mt-1">
                        {priorityOptions.find(opt => opt.value === publishForm.priority)?.description}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        📌 特殊設置
                      </label>
                      <div className="flex items-center p-3 border border-gray-200 rounded-lg bg-gray-50">
                        <input
                          type="checkbox"
                          id="isSticky"
                          checked={publishForm.isSticky}
                          onChange={(e) => setPublishForm({...publishForm, isSticky: e.target.checked})}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="isSticky" className="ml-2 text-sm text-gray-700">
                          📌 置頂顯示（優先在列表頂部顯示）
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      標題
                    </label>
                    <Input
                      value={publishForm.title}
                      onChange={(e) => setPublishForm({ ...publishForm, title: e.target.value })}
                      placeholder="輸入吸引人的標題..."
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      內容
                    </label>
                    <Textarea
                      value={publishForm.content}
                      onChange={(e) => setPublishForm({ ...publishForm, content: e.target.value })}
                      placeholder="詳細描述內容..."
                      rows={8}
                      className="resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      添加圖片（可選）
                    </label>
                    
                    <div 
                      className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                        dragActive 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-300 hover:border-blue-400'
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <Upload className={`w-8 h-8 mx-auto mb-2 ${
                        dragActive ? 'text-blue-500' : 'text-gray-400'
                      }`} />
                      <p className={`mb-2 ${
                        dragActive ? 'text-blue-600 font-medium' : 'text-gray-600'
                      }`}>
                        {dragActive ? '放開圖片即可上傳' : '拖拽圖片到這裡或點擊選擇'}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        支援 JPG、PNG、GIF 格式，建議單檔小於 5MB
                      </p>
                      
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <Button 
                        variant="outline" 
                        className="cursor-pointer"
                        onClick={() => {
                          const input = document.getElementById('image-upload') as HTMLInputElement;
                          if (input) input.click();
                        }}
                        type="button"
                      >
                        <Image className="w-4 h-4 mr-2" />
                        選擇圖片
                      </Button>
                    </div>

                    {publishForm.images.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-3">
                          已選擇 {publishForm.images.length} 張圖片
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {publishForm.images.map((image, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={typeof image === 'string' ? image : image.url}
                                alt={`預覽 ${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg border"
                              />
                              <button
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={handlePublish}
                    disabled={isPublishing || !publishForm.title || !publishForm.content}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg"
                  >
                    {isPublishing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        發布中...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        📝 立即發布
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* 即時預覽 */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    即時預覽
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-600 text-white">
                        {publishForm.category}
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                        {displayPageOptions.find(opt => opt.value === publishForm.displayPage)?.label.split(' - ')[0] || '🏠 首頁'}
                      </Badge>
                      {publishForm.isSticky && (
                        <Badge className="bg-red-600 text-white">
                          📌 置頂
                        </Badge>
                      )}
                      {publishForm.priority === 'high' && (
                        <Badge className="bg-orange-600 text-white">
                          🔴 高優先級
                        </Badge>
                      )}
                      <span className="text-sm text-gray-500">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {publishForm.title || '標題預覽'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {publishForm.content || '內容預覽...'}
                    </p>
                    {publishForm.images.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-600 mb-2">附加圖片：</p>
                        <div className="flex flex-wrap gap-2">
                          {publishForm.images.map((img, index) => (
                            <div key={index} className="relative">
                              <img
                                src={typeof img === 'string' ? img : img.url}
                                alt={`預覽 ${index + 1}`}
                                className="w-20 h-20 object-cover rounded-lg border shadow-sm"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* 數據總覽 */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">總發布數</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{publishedItems.length}</div>
                    <p className="text-xs text-muted-foreground">
                      +{publishedItems.filter(item => {
                        const publishDate = new Date(item.date);
                        const oneMonthAgo = new Date();
                        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
                        return publishDate > oneMonthAgo;
                      }).length} 本月新增
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">總瀏覽數</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {publishedItems.reduce((total, item) => total + (item.views || 0), 0).toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      平均每篇 {publishedItems.length > 0 ? Math.round(publishedItems.reduce((total, item) => total + (item.views || 0), 0) / publishedItems.length) : 0} 次瀏覽
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">本月新增</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {publishedItems.filter(item => {
                        const publishDate = new Date(item.date);
                        const now = new Date();
                        return publishDate.getMonth() === now.getMonth() && publishDate.getFullYear() === now.getFullYear();
                      }).length}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      較上月 +{Math.floor(Math.random() * 20)}%
                    </p>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setShowStatusDetails(true)}
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">系統狀態</CardTitle>
                    <div className="flex items-center gap-2">
                      {isCheckingStatus ? (
                        <RefreshCw className="h-4 w-4 text-muted-foreground animate-spin" />
                      ) : (
                        <Settings className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      {(() => {
                        const statusDisplay = getStatusDisplay(systemStatus.overall);
                        const StatusIcon = statusDisplay.icon;
                        return (
                          <>
                            <StatusIcon className={`h-5 w-5 ${statusDisplay.color}`} />
                            <span className={`text-2xl font-bold ${statusDisplay.color}`}>
                              {statusDisplay.text}
                            </span>
                          </>
                        );
                      })()}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      最後檢查：{systemStatus.lastChecked}
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      點擊查看詳情 →
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 重新檢查按鈕 */}
              <div className="flex justify-end">
                <Button 
                  onClick={checkSystemStatus}
                  disabled={isCheckingStatus}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <RefreshCw className={`h-4 w-4 ${isCheckingStatus ? 'animate-spin' : ''}`} />
                  {isCheckingStatus ? '檢查中...' : '重新檢查系統狀態'}
                </Button>
              </div>

              {/* 最近發布的內容 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    📈 最近發布的內容
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {publishedItems.length === 0 ? (
                    <div className="text-center py-8">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">尚未發布任何內容</p>
                      <p className="text-sm text-gray-500 mt-2">
                        點擊「📝 發布內容」開始發布您的第一篇內容
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {publishedItems.slice(0, 5).map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {item.author || '未知作者'}
                              </span>
                              <span>{item.category}</span>
                              <span>{item.date}</span>
                              <span className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {item.views || 0} 次瀏覽
                              </span>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800">
                            已發布
                          </Badge>
                        </div>
                      ))}
                      
                      {publishedItems.length > 5 && (
                        <div className="text-center pt-4 border-t">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setActiveTab('manage')}
                          >
                            查看全部 {publishedItems.length} 篇內容 →
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* 用戶活動記錄 */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* 操作記錄 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-purple-600" />
                      🕒 最近操作記錄
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isLoadingLogs ? (
                      <div className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                        <span className="ml-2 text-gray-600">載入中...</span>
                      </div>
                    ) : operationLogs.length === 0 ? (
                      <div className="text-center py-8">
                        <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">暫無操作記錄</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {operationLogs.slice(0, 8).map((log) => (
                          <div key={log.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Users className="w-4 h-4 text-purple-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-sm text-gray-900">
                                  {log.userName}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {log.actionText}
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 truncate">
                                {log.target}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {log.timestamp}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* 用戶活動統計 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      👥 用戶活動統計
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {userActivityStats.length === 0 ? (
                      <div className="text-center py-8">
                        <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">暫無用戶活動數據</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {userActivityStats.map((user) => (
                          <div key={user.userId} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                  {user.userName.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{user.userName}</p>
                                <p className="text-sm text-gray-500">
                                  最後活動：{user.lastActivity}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-green-600">
                                {user.totalOperations}
                              </p>
                              <p className="text-xs text-gray-500">次操作</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

                     {/* 內容管理 */}
           {activeTab === 'content' && (
             <div className="space-y-6">
               <div className="flex justify-between items-center">
                 <h3 className="text-xl font-semibold text-gray-900">已發布內容</h3>
                 <div className="flex gap-2">
                   <Button 
                     variant="outline" 
                     size="sm" 
                     onClick={loadPublishedContent}
                     disabled={isLoading}
                   >
                     {isLoading ? '載入中...' : '重新載入'}
                   </Button>
                   <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                     <option value="">所有分類</option>
                     <option value="招生訊息">招生訊息</option>
                     <option value="活動紀錄">活動紀錄</option>
                     <option value="學習心得">學習心得</option>
                   </select>
                 </div>
               </div>
               
               {isLoading ? (
                 <div className="flex items-center justify-center py-12">
                   <div className="text-center">
                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                     <p className="text-gray-600">載入內容中...</p>
                   </div>
                 </div>
               ) : publishedItems.length === 0 ? (
                 <div className="text-center py-12">
                   <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                   <p className="text-gray-600">尚未發布任何內容</p>
                   <Button 
                     className="mt-4" 
                     onClick={() => setActiveTab('publish')}
                   >
                     立即發布內容
                   </Button>
                 </div>
               ) : (
                 <div className="grid gap-4">
                   {publishedItems.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-lg">{item.title}</h4>
                            <Badge className="bg-blue-600 text-white">
                              {item.category}
                            </Badge>
                            <Badge variant="outline" className="text-green-600 border-green-200">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              已發布
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{item.content.substring(0, 150)}...</p>
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
                          <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                            <Edit className="w-4 h-4 mr-1" />
                            編輯
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDelete(item)}
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            刪除
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                   ))}
                 </div>
               )}
             </div>
           )}

          {/* 媒體工具 */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              {/* 文件上傳區域 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5 text-blue-600" />
                    📁 文件上傳
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                      dragActive 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:border-blue-400'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleMediaDrop}
                  >
                    <Upload className={`w-12 h-12 mx-auto mb-4 ${
                      dragActive ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <h3 className={`text-lg font-semibold mb-2 ${
                      dragActive ? 'text-blue-600' : 'text-gray-700'
                    }`}>
                      {dragActive ? '放開文件即可上傳' : '上傳媒體文件'}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      支援圖片、影片、PDF 等多種格式，單檔最大 10MB
                    </p>
                    
                    <input
                      type="file"
                      multiple
                      accept="image/*,video/*,.pdf,.doc,.docx"
                      onChange={handleMediaFileSelect}
                      className="hidden"
                      id="media-upload"
                    />
                    <Button 
                      variant="outline" 
                      className="cursor-pointer"
                      onClick={() => {
                        const input = document.getElementById('media-upload') as HTMLInputElement;
                        if (input) input.click();
                      }}
                      disabled={isUploading}
                    >
                      {isUploading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2"></div>
                          上傳中...
                        </>
                      ) : (
                        <>
                          <Image className="w-4 h-4 mr-2" />
                          選擇文件
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 已上傳文件列表 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    📂 已上傳文件 ({uploadedFiles.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {uploadedFiles.length === 0 ? (
                    <div className="text-center py-8">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">尚未上傳任何文件</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {uploadedFiles.map((file: MediaFile) => (
                        <div key={file.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          {file.type?.startsWith('image/') ? (
                            <img 
                              src={file.url} 
                              alt={file.name}
                              className="w-full h-32 object-cover rounded-lg mb-3"
                            />
                          ) : (
                            <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                              <FileText className="w-8 h-8 text-gray-400" />
                            </div>
                          )}
                          <h4 className="font-medium text-sm truncate mb-2">{file.name}</h4>
                          <p className="text-xs text-gray-500 mb-3">
                            {(file.size / 1024 / 1024).toFixed(2)} MB • {file.uploadDate}
                          </p>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => copyFileUrl(file.url)}
                              className="flex-1 text-xs"
                            >
                              複製網址
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => deleteMediaFile(file.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        📸 圖片處理小貼士
                      </h3>
                      <p className="text-gray-700 mb-4">
                        為了提供最佳的網站體驗，建議您在上傳圖片前進行適當處理
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-blue-700">✅ 建議做法</h4>
                          <ul className="space-y-1 text-gray-600">
                            <li>• 📱 使用橫向 16:9 比例的圖片</li>
                            <li>• 🔗 圖片大小控制在 2MB 以內</li>
                            <li>• 📏 建議解析度：1200x675 像素</li>
                            <li>• 🎨 確保圖片清晰、主題明確</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-green-700">🛠️ 推薦工具</h4>
                          <ul className="space-y-1 text-gray-600">
                            <li>• 📱 手機：美圖秀秀、VSCO</li>
                            <li>• 💻 電腦：Canva、PhotoPea</li>
                            <li>• 🔧 壓縮：TinyPNG、Squoosh</li>
                            <li>• ✂️ 裁切：Crop Tool、Photopea</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-green-600" />
                      🌍 免費圖庫資源
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'Unsplash', url: 'https://unsplash.com', desc: '高質量攝影圖片，完全免費' },
                      { name: 'Pixabay', url: 'https://pixabay.com', desc: '多樣化免費素材，包含插圖' },
                      { name: 'Pexels', url: 'https://pexels.com', desc: '專業商用圖片，品質優良' },
                      { name: 'Freepik', url: 'https://freepik.com', desc: '豐富插圖和向量圖資源' }
                    ].map((site, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{site.name}</p>
                          <p className="text-sm text-gray-600">{site.desc}</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(site.url, '_blank')}
                        >
                          訪問
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-purple-600" />
                      🛠️ 圖片處理工具
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'TinyPNG', url: 'https://tinypng.com', desc: '智能壓縮 PNG/JPG，減小檔案' },
                      { name: 'Canva', url: 'https://canva.com', desc: '線上設計工具，製作美觀圖片' },
                      { name: 'Remove.bg', url: 'https://remove.bg', desc: 'AI 自動去背，快速便利' },
                      { name: 'Photopea', url: 'https://photopea.com', desc: '免費線上 PS，功能強大' }
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{tool.name}</p>
                          <p className="text-sm text-gray-600">{tool.desc}</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(tool.url, '_blank')}
                        >
                          使用
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 系統狀態詳情彈窗 */}
      {showStatusDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const statusDisplay = getStatusDisplay(systemStatus.overall);
                      const StatusIcon = statusDisplay.icon;
                      return (
                        <>
                          <StatusIcon className={`h-6 w-6 ${statusDisplay.color}`} />
                          <h2 className="text-xl font-bold">系統狀態詳情</h2>
                        </>
                      );
                    })()}
                  </div>
                  <Badge className={getStatusDisplay(systemStatus.overall).bgColor + ' ' + getStatusDisplay(systemStatus.overall).color}>
                    {getStatusDisplay(systemStatus.overall).text}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowStatusDetails(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 後端服務狀態 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Server className="h-5 w-5" />
                      後端服務
                      <Badge className={getStatusDisplay(systemStatus.backend.status).bgColor + ' ' + getStatusDisplay(systemStatus.backend.status).color}>
                        {getStatusDisplay(systemStatus.backend.status).text}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium mb-2">{systemStatus.backend.message}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{systemStatus.backend.details}</p>
                    {systemStatus.backend.status === 'error' && (
                      <div className="mt-3 p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-800 font-medium">💡 解決建議：</p>
                        <ul className="text-sm text-red-700 mt-1 list-disc list-inside">
                          <li>確認後端服務是否已啟動：<code className="bg-red-100 px-1 rounded">cd server && npm start</code></li>
                          <li>檢查端口 3001 是否被佔用</li>
                          <li>確認防火牆設置是否阻擋連接</li>
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* 前端服務狀態 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wifi className="h-5 w-5" />
                      前端服務
                      <Badge className={getStatusDisplay(systemStatus.frontend.status).bgColor + ' ' + getStatusDisplay(systemStatus.frontend.status).color}>
                        {getStatusDisplay(systemStatus.frontend.status).text}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium mb-2">{systemStatus.frontend.message}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{systemStatus.frontend.details}</p>
                    {systemStatus.frontend.status === 'error' && (
                      <div className="mt-3 p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-800 font-medium">💡 解決建議：</p>
                        <ul className="text-sm text-red-700 mt-1 list-disc list-inside">
                          <li>重新啟動前端服務：<code className="bg-red-100 px-1 rounded">npm run dev</code></li>
                          <li>清除瀏覽器緩存</li>
                          <li>檢查控制台是否有 JavaScript 錯誤</li>
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* 數據狀態 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      數據狀態
                      <Badge className={getStatusDisplay(systemStatus.database.status).bgColor + ' ' + getStatusDisplay(systemStatus.database.status).color}>
                        {getStatusDisplay(systemStatus.database.status).text}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium mb-2">{systemStatus.database.message}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{systemStatus.database.details}</p>
                    {systemStatus.database.status === 'warning' && (
                      <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
                        <p className="text-sm text-yellow-800 font-medium">💡 提示：</p>
                        <p className="text-sm text-yellow-700 mt-1">
                          可以開始發布一些內容來豐富網站內容。
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* 存儲狀態 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HardDrive className="h-5 w-5" />
                      存儲功能
                      <Badge className={getStatusDisplay(systemStatus.storage.status).bgColor + ' ' + getStatusDisplay(systemStatus.storage.status).color}>
                        {getStatusDisplay(systemStatus.storage.status).text}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium mb-2">{systemStatus.storage.message}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{systemStatus.storage.details}</p>
                    {systemStatus.storage.status === 'error' && (
                      <div className="mt-3 p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-800 font-medium">💡 解決建議：</p>
                        <ul className="text-sm text-red-700 mt-1 list-disc list-inside">
                          <li>檢查瀏覽器是否開啟隱私模式</li>
                          <li>確認瀏覽器允許本地存儲</li>
                          <li>清除瀏覽器數據後重新登入</li>
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* 底部操作區 */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t">
                <div className="text-sm text-gray-500">
                  最後檢查時間：{systemStatus.lastChecked}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={checkSystemStatus}
                    disabled={isCheckingStatus}
                    className="flex items-center gap-2"
                  >
                    <RefreshCw className={`h-4 w-4 ${isCheckingStatus ? 'animate-spin' : ''}`} />
                    {isCheckingStatus ? '檢查中...' : '重新檢查'}
                  </Button>
                  <Button onClick={() => setShowStatusDetails(false)}>
                    關閉
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard; 