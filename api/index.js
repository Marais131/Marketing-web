const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// 演示數據
const demoContent = [
  {
    id: 1,
    title: "行銷系2024年度招生說明會",
    content: "歡迎各位同學參加我們的招生說明會，了解行銷系的課程特色和未來發展方向。",
    author: "行銷系辦公室",
    date: "2024-01-15",
    category: "招生資訊",
    image: "/api/placeholder/400/300",
    views: 1250
  },
  {
    id: 2,
    title: "學生實習成果分享",
    content: "本學期實習同學在各大企業的優秀表現，展現了行銷系學生的專業能力。",
    author: "實習輔導組",
    date: "2024-01-10",
    category: "學生活動",
    image: "/api/placeholder/400/300",
    views: 890
  },
  {
    id: 3,
    title: "數位行銷趨勢講座",
    content: "邀請業界專家分享2024年數位行銷最新趨勢和實戰經驗。",
    author: "學術組",
    date: "2024-01-08",
    category: "學術活動",
    image: "/api/placeholder/400/300",
    views: 1450
  },
  {
    id: 4,
    title: "行銷系學生會選舉結果公告",
    content: "恭喜新任學生會幹部當選，期待為同學們提供更好的服務。",
    author: "學生會",
    date: "2024-01-05",
    category: "學生事務",
    image: "/api/placeholder/400/300",
    views: 670
  },
  {
    id: 5,
    title: "企業參訪活動報名開始",
    content: "即將參訪知名企業，了解實際工作環境和職場文化。",
    author: "職涯發展組",
    date: "2024-01-03",
    category: "職涯發展",
    image: "/api/placeholder/400/300",
    views: 1120
  },
  {
    id: 6,
    title: "品牌思維：從概念到實踐的完整指南",
    content: "在現代商業環境中，品牌不僅僅是一個標誌或名稱，它代表著企業的核心價值、文化理念以及與消費者之間的情感連結。成功的品牌策略需要深入了解目標受眾的需求和期望，並透過一致的品牌體驗來建立信任和忠誠度。",
    author: "品牌策略研究室",
    date: "2024-01-12",
    category: "品牌策略",
    image: "/api/placeholder/400/300",
    views: 2100
  },
  {
    id: 7,
    title: "消費者行為分析：數據驅動的洞察力",
    content: "了解消費者行為是行銷成功的關鍵。透過數據分析工具，我們可以深入挖掘消費者的購買模式、偏好趨勢以及決策過程。這些洞察不僅幫助企業優化產品和服務，更能精準定位目標市場，提升行銷效果。",
    author: "消費者研究中心",
    date: "2024-01-18",
    category: "市場研究",
    image: "/api/placeholder/400/300",
    views: 1850
  },
  {
    id: 8,
    title: "AI與大數據在行銷中的應用",
    content: "人工智慧和大數據技術正在重塑行銷領域。從個性化推薦系統到預測分析，AI技術讓行銷人員能夠更精準地觸及目標客群，提供個人化的購物體驗，並即時調整行銷策略以獲得最佳效果。",
    author: "數位行銷實驗室",
    date: "2024-01-20",
    category: "數位科技",
    image: "/api/placeholder/400/300",
    views: 2350
  }
];

const app = express();

// 中間件
app.use(cors());
app.use(express.json());

// 健康檢查端點
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: '文化大學行銷系後端API'
  });
});

// 根路由 - 提供API信息頁面
app.get('/', (req, res) => {
  const apiInfo = {
    name: '文化大學行銷系 - 後端API服務',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  };

  // 如果是瀏覽器請求，返回HTML頁面
  if (req.headers.accept && req.headers.accept.includes('text/html')) {
    res.send(`
      <!DOCTYPE html>
      <html lang="zh-TW">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>文化大學行銷系 - 後端API服務</title>
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px; 
            background: #f5f5f5; 
            color: #333;
          }
          .container { 
            background: white; 
            padding: 30px; 
            border-radius: 10px; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
          }
          h1 { 
            color: #1e40af; 
            border-bottom: 3px solid #3b82f6; 
            padding-bottom: 10px; 
          }
          .status { 
            background: #10b981; 
            color: white; 
            padding: 5px 15px; 
            border-radius: 20px; 
            display: inline-block; 
            margin: 10px 0; 
          }
          .endpoint { 
            background: #f8fafc; 
            padding: 8px 12px; 
            margin: 5px 0; 
            border-left: 4px solid #3b82f6; 
            font-family: monospace; 
          }
          .test-links a {
            color: #2563eb;
            text-decoration: none;
            margin-right: 15px;
            display: inline-block;
            margin-bottom: 10px;
          }
          .test-links a:hover {
            text-decoration: underline;
          }
          .footer { 
            text-align: center; 
            margin-top: 30px; 
            color: #64748b; 
            font-size: 14px; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 文化大學行銷系 - 後端API服務</h1>
          <div class="status">✅ 服務正常運行</div>
          
          <h2>🔗 可用的API端點</h2>
          <div class="endpoint">GET /api/content - 獲取所有內容</div>
          <div class="endpoint">GET /api/content/by-page/:page - 按頁面獲取內容</div>
          <div class="endpoint">POST /api/publish - 發布新內容</div>
          <div class="endpoint">POST /api/admin/login - 管理員登入</div>

          <h2>🔧 測試API</h2>
          <div class="test-links">
            <a href="/api/content" target="_blank">📄 查看所有內容</a>
            <a href="/api/content/by-page/home?limit=6" target="_blank">🏠 查看首頁內容</a>
            <a href="/api/health" target="_blank">💚 健康檢查</a>
          </div>

          <div class="footer">
            <p>🕐 最後更新：${new Date().toLocaleString('zh-TW')}</p>
            <p>💻 文化大學行銷系 內容管理系統</p>
            <p>🌍 環境：${apiInfo.environment}</p>
          </div>
        </div>
      </body>
      </html>
    `);
  } else {
    // API請求返回JSON
    res.json(apiInfo);
  }
});

// 模擬資料庫
let publishedContent = [...demoContent];

// 管理員帳號列表
const adminAccounts = [
  {
    username: 'admin',
    password: 'admin123',
    name: '系統管理員',
    avatar: '👨‍💼'
  },
  {
    username: 'mkt',
    password: 'mkt123',
    name: '行銷系管理員',
    avatar: '🎯'
  }
];

// 登入 API
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  const admin = adminAccounts.find(account => 
    account.username === username && account.password === password
  );
  
  if (admin) {
    res.json({ 
      token: 'demo-token',
      user: { 
        name: admin.name, 
        avatar: admin.avatar,
        username: admin.username
      }
    });
  } else {
    res.status(401).json({ error: '帳號或密碼錯誤' });
  }
});

// 獲取所有內容
app.get('/api/content', (req, res) => {
  res.json(publishedContent);
});

// 按頁面獲取內容
app.get('/api/content/by-page/:page', (req, res) => {
  const { page } = req.params;
  const limit = parseInt(req.query.limit) || 10;
  
  let filteredContent = publishedContent;
  
  if (page === 'home') {
    filteredContent = publishedContent.slice(0, limit);
  }
  
  res.json(filteredContent);
});

// 發布內容 API
app.post('/api/publish', (req, res) => {
  try {
    const { title, content, category, author } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ error: '標題和內容為必填項目' });
    }
    
    const newContent = {
      id: Date.now(),
      title,
      content,
      category: category || '一般消息',
      author: author || '匿名',
      date: new Date().toISOString().split('T')[0],
      image: '/api/placeholder/400/300',
      views: 0
    };
    
    publishedContent.unshift(newContent);
    
    res.json({ 
      message: '內容發布成功', 
      content: newContent 
    });
  } catch (error) {
    res.status(500).json({ error: '發布失敗' });
  }
});

// 系統狀態檢查
app.get('/api/system-status', (req, res) => {
  res.json({
    backend: { status: 'healthy', message: '後端服務正常' },
    frontend: { status: 'healthy', message: '前端服務正常' },
    database: { status: 'healthy', message: '數據庫連接正常' },
    storage: { status: 'healthy', message: '存儲功能正常' }
  });
});

// 操作記錄 API
app.get('/api/operation-logs', (req, res) => {
  const mockLogs = [
    {
      id: 1,
      userId: 'admin',
      action: 'LOGIN',
      target: '系統登入',
      timestamp: new Date().toISOString(),
      ipAddress: '127.0.0.1'
    },
    {
      id: 2,
      userId: 'mkt',
      action: 'PUBLISH',
      target: '發布文章',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      ipAddress: '127.0.0.1'
    }
  ];
  
  res.json(mockLogs);
});

// 用戶活動統計
app.get('/api/user-activity-stats', (req, res) => {
  res.json({
    totalUsers: 2,
    activeUsers: 1,
    totalOperations: 15,
    recentActivity: [
      { user: 'admin', count: 8 },
      { user: 'mkt', count: 7 }
    ]
  });
});

// 導出應用供 Vercel 使用
module.exports = app; 