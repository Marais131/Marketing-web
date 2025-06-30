const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { demoContent, demoStats } = require('./demo-data');

const app = express();
const PORT = process.env.PORT || 3001;

// 中間件
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// 模擬資料庫 - 使用演示數據
let publishedContent = [...demoContent];

// 檔案上傳設定
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('只允許上傳圖片檔案'));
    }
  }
});

// 簡單認證中間件
const simpleAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === 'Bearer demo-token') {
    next();
  } else {
    res.status(401).json({ error: '未授權' });
  }
};

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
  
  // 查找匹配的管理員帳號
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

// 獲取已發布內容
app.get('/api/admin/content', simpleAuth, (req, res) => {
  res.json(publishedContent);
});

// 發布內容
app.post('/api/publish', (req, res) => {
  try {
    const { type, title, content, images, category, displayPage, isSticky, priority } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ error: '標題和內容不能為空' });
    }

    const newArticle = {
      id: Date.now(),
      type: type || 'news',
      title,
      content,
      images: images || [],
      category: category || '一般公告',
      displayPage: displayPage || 'home',
      isSticky: isSticky || false,
      priority: priority || 'normal',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('zh-TW', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      author: '系統管理員',
      views: 0
    };

         // 根據優先級和置頂設置確定插入位置
     if (isSticky || priority === 'high') {
       // 置頂或高優先級文章插入到開頭
       publishedContent.unshift(newArticle);
     } else if (priority === 'low') {
       // 低優先級文章插入到末尾
       publishedContent.push(newArticle);
     } else {
       // 普通優先級文章插入到開頭（但在置頂文章後面）
       const stickyCount = publishedContent.filter(article => article.isSticky).length;
       publishedContent.splice(stickyCount, 0, newArticle);
     }

     console.log(`✅ 新內容已發布: ${title} (顯示位置: ${displayPage})`);
     res.json({ 
       success: true, 
       message: '內容發布成功！',
       article: newArticle
     });
   } catch (error) {
     console.error('發布內容時出錯:', error);
     res.status(500).json({ error: '發布失敗，請稍後再試' });
   }
 });
// 發布新內容
app.post('/api/admin/publish', simpleAuth, upload.array('images', 5), (req, res) => {
  const { type, title, content, category } = req.body;
  const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];
  
  const newContent = {
    id: Date.now(),
    type,
    title,
    content,
    category,
    date: new Date().toISOString().split('T')[0],
    views: 0,
    status: 'published',
    images
  };
  
  publishedContent.unshift(newContent);
  
  res.json({ 
    message: '發布成功！',
    content: newContent
  });
});

// 檔案上傳
app.post('/api/admin/upload', simpleAuth, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: '沒有檔案上傳' });
  }
  
  res.json({ 
    filename: req.file.filename,
    url: `/uploads/${req.file.filename}`
  });
});

// 獲取網站內容（給前端使用）
app.get('/api/content', (req, res) => {
  // 返回所有已發布的內容，按日期排序
  const sortedContent = publishedContent
    .filter(item => item.status === 'published')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  res.json(sortedContent);
});

// 網站內容管理
let websiteContent = {
  hero: {
    mainTitle: '品牌端行銷新世代',
    subtitle: '以現代品牌視野，培養跨域行銷領袖',
    tagline: '專業 × 創新 × 數據 × 美感 × 心理',
    videoTitle: '系所介紹影片'
  },
  photoWall: {
    title: '校園現場',
    subtitle: '用鏡頭記錄真實的學習與成長',
    ctaTitle: '探索更多校園精彩',
    ctaSubtitle: '加入我們，親身體驗豐富多元的學習環境與無限可能',
    images: [
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        title: "創新思維工作坊",
        category: "學習實戰"
      },
      {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop",
        title: "團隊協作專案",
        category: "實務演練"
      },
      {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=900&auto=format&fit=crop",
        title: "品牌策略研討",
        category: "學術交流"
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=900&auto=format&fit=crop",
        title: "數位行銷實作",
        category: "技能培養"
      },
      {
        src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format&fit=crop",
        title: "產學合作成果",
        category: "實習體驗"
      },
      {
        src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        title: "校園生活點滴",
        category: "多元發展"
      }
    ]
  },
  teamPhoto: {
    title: '我們的團隊',
    subtitle: '充滿創意與行動力的品牌行銷人',
    description: '我們相信每個人都有獨特的創意火花，在這裡，不同背景的同學聚在一起，用多元的視角解決品牌挑戰，創造無限可能。',
    ctaText: '加入我們的團隊'
  },
  studentFeedback: {
    title: '真實聲音',
    subtitle: '畢業學長姐、在校生的親身經驗分享',
    ctaTitle: '想了解更多學習心得？',
    ctaSubtitle: '與我們的學長姐直接對話，獲得第一手的學習經驗分享',
    feedbacks: [
      {
        name: "吳佳蓉",
        identity: "行銷學系 111級畢業生",
        type: "畢業生",
        content: "在文化行銷系的學習，讓我在行銷策略、消費者洞察、數據實作等多方面全面成長。五年一貫學碩制度讓我能提早進入職場，連結企業實作真的很有價值！",
        position: "品牌經理 @ 知名電商",
        course: "五年一貫專案實作",
        rating: 5
      },
      {
        name: "林子豪",
        identity: "行銷學系大四",
        type: "在校生",
        content: "最棒的是有許多跨領域課程和實作機會，像是心理學、邏輯學都對品牌行銷有很大幫助，同學彼此氣氛超好，老師也會給很多職涯建議。",
        position: "學生會行銷部長",
        course: "消費者心理學",
        rating: 5
      },
      {
        name: "Chen Grace",
        identity: "行銷學系 110級畢業生",
        type: "畢業生",
        content: "文化的行銷系讓我對品牌管理和創意策略產生濃厚興趣，同時學會數據分析，實際上線電商專案很有成就感！非常推薦給想要跨足數位行銷的同學。",
        position: "數位行銷專員 @ 新創公司",
        course: "品牌管理與電商專案",
        rating: 5
      }
    ]
  }
};

// 獲取網站內容配置
app.get('/api/website-content', (req, res) => {
  res.json(websiteContent);
});

// 更新網站內容配置
app.post('/api/website-content', (req, res) => {
  try {
    websiteContent = { ...websiteContent, ...req.body };
    res.json({ 
      success: true, 
      message: '網站內容已更新',
      content: websiteContent
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: '更新失敗', 
      error: error.message 
    });
  }
});

// 發布內容的新 API（支持前端直接調用）
app.post('/api/content', (req, res) => {
  const { type, title, content, category, images } = req.body;
  
  const newContent = {
    id: Date.now(),
    type: type || 'news',
    title,
    content,
    category: category || '一般公告',
    date: new Date().toISOString().split('T')[0],
    views: 0,
    status: 'published',
    images: images || []
  };
  
  publishedContent.unshift(newContent);
  
  res.json({ 
    message: '發布成功！',
    id: newContent.id,
    content: newContent
  });
});

// 媒體管理
let uploadedMedia = [];

// 獲取已上傳的媒體文件
app.get('/api/media', (req, res) => {
  res.json(uploadedMedia);
});

// 媒體文件上傳
app.post('/api/media/upload', upload.array('files', 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: '沒有文件上傳' });
  }
  
  const files = req.files.map(file => ({
    originalName: file.originalname,
    filename: file.filename,
    url: `/uploads/${file.filename}`,
    size: file.size,
    type: file.mimetype,
    uploadDate: new Date().toISOString().split('T')[0]
  }));
  
  // 添加到媒體列表
  uploadedMedia.push(...files);
  
  res.json({ 
    message: `成功上傳 ${files.length} 個文件`,
    files: files
  });
});

// 刪除媒體文件
app.delete('/api/media/:filename', (req, res) => {
  const { filename } = req.params;
  const fs = require('fs');
  const path = require('path');
  
  // 從列表中移除
  uploadedMedia = uploadedMedia.filter(file => file.filename !== filename);
  
  // 刪除實際文件
  const filePath = path.join(__dirname, 'uploads', filename);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log('刪除文件失敗:', err);
    }
  });
  
  res.json({ message: '文件已刪除' });
});

// 用戶操作記錄數據
let operationLogs = [
  {
    id: 1,
    userId: 'admin',
    userName: '系統管理員',
    action: 'create',
    actionText: '發布文章',
    target: '🎉 2024年行銷系招生開始！',
    targetType: 'article',
    targetId: 1,
    timestamp: '2024-01-15 14:30:00',
    details: '新增招生資訊文章，包含完整的系介紹和課程說明',
    ipAddress: '127.0.0.1'
  },
  {
    id: 2,
    userId: 'mkt',
    userName: '行銷系管理員',
    action: 'create',
    actionText: '發布活動',
    target: '📚 品牌策略工作坊',
    targetType: 'event',
    targetId: 2,
    timestamp: '2024-01-10 09:15:00',
    details: '新增品牌策略工作坊活動，邀請業界專家分享',
    ipAddress: '127.0.0.1'
  },
  {
    id: 3,
    userId: 'admin',
    userName: '系統管理員',
    action: 'edit',
    actionText: '編輯文章',
    target: '🏆 學生獲得全國行銷競賽冠軍',
    targetType: 'article',
    targetId: 3,
    timestamp: '2024-01-08 16:45:00',
    details: '更新競賽成果內容，添加獲獎照片和詳細報導',
    ipAddress: '127.0.0.1'
  },
  {
    id: 4,
    userId: 'mkt',
    userName: '行銷系管理員',
    action: 'create',
    actionText: '發布公告',
    target: '📢 期末考試時程公告',
    targetType: 'notice',
    targetId: 4,
    timestamp: '2024-01-05 11:20:00',
    details: '發布期末考試時程，提醒學生注意考試安排',
    ipAddress: '127.0.0.1'
  },
  {
    id: 5,
    userId: 'admin',
    userName: '系統管理員',
    action: 'upload',
    actionText: '上傳媒體',
    target: '活動照片_2024.jpg',
    targetType: 'media',
    targetId: 'media_001',
    timestamp: '2024-01-03 13:10:00',
    details: '上傳系上活動照片，用於網站展示',
    ipAddress: '127.0.0.1'
  },
  {
    id: 6,
    userId: 'mkt',
    userName: '行銷系管理員',
    action: 'delete',
    actionText: '刪除過期內容',
    target: '舊版招生簡章',
    targetType: 'document',
    targetId: 'doc_old_001',
    timestamp: '2024-01-02 10:30:00',
    details: '清理過期的招生文件，保持內容更新',
    ipAddress: '127.0.0.1'
  }
];

// 獲取操作記錄
app.get('/api/operation-logs', (req, res) => {
  try {
    const { userId, action, limit = 50, offset = 0 } = req.query;
    
    let filteredLogs = [...operationLogs];
    
    // 按用戶篩選
    if (userId) {
      filteredLogs = filteredLogs.filter(log => log.userId === userId);
    }
    
    // 按操作類型篩選
    if (action) {
      filteredLogs = filteredLogs.filter(log => log.action === action);
    }
    
    // 按時間排序（最新的在前）
    filteredLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    // 分頁
    const total = filteredLogs.length;
    const paginatedLogs = filteredLogs.slice(parseInt(offset), parseInt(offset) + parseInt(limit));
    
    res.json({
      logs: paginatedLogs,
      total,
      hasMore: parseInt(offset) + parseInt(limit) < total
    });
  } catch (error) {
    console.error('獲取操作記錄失敗:', error);
    res.status(500).json({ error: '服務器錯誤' });
  }
});

// 記錄用戶操作
app.post('/api/operation-logs', (req, res) => {
  try {
    const { userId, userName, action, actionText, target, targetType, targetId, details } = req.body;
    
    const newLog = {
      id: operationLogs.length + 1,
      userId: userId || 'unknown',
      userName: userName || '未知用戶',
      action: action || 'unknown',
      actionText: actionText || '未知操作',
      target: target || '',
      targetType: targetType || 'unknown',
      targetId: targetId || '',
      timestamp: new Date().toLocaleString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }),
      details: details || '',
      ipAddress: req.ip || req.connection.remoteAddress || '127.0.0.1'
    };
    
    operationLogs.unshift(newLog); // 添加到開頭
    
    // 保持記錄數量在合理範圍內（最多1000條）
    if (operationLogs.length > 1000) {
      operationLogs = operationLogs.slice(0, 1000);
    }
    
    res.json({ success: true, log: newLog });
  } catch (error) {
    console.error('記錄操作失敗:', error);
    res.status(500).json({ error: '服務器錯誤' });
  }
});

// 獲取用戶活動統計
app.get('/api/user-activity-stats', (req, res) => {
  try {
    const stats = {};
    
    // 統計每個用戶的操作次數
    operationLogs.forEach(log => {
      if (!stats[log.userId]) {
        stats[log.userId] = {
          userId: log.userId,
          userName: log.userName,
          totalOperations: 0,
          actions: {
            create: 0,
            edit: 0,
            delete: 0,
            upload: 0,
            login: 0,
            other: 0
          },
          lastActivity: log.timestamp,
          recentOperations: []
        };
      }
      
      stats[log.userId].totalOperations++;
      stats[log.userId].actions[log.action] = (stats[log.userId].actions[log.action] || 0) + 1;
      
      // 更新最後活動時間
      if (new Date(log.timestamp) > new Date(stats[log.userId].lastActivity)) {
        stats[log.userId].lastActivity = log.timestamp;
      }
      
      // 保存最近5個操作
      if (stats[log.userId].recentOperations.length < 5) {
        stats[log.userId].recentOperations.push({
          action: log.actionText,
          target: log.target,
          timestamp: log.timestamp
        });
      }
    });
    
    res.json(Object.values(stats));
  } catch (error) {
    console.error('獲取用戶活動統計失敗:', error);
    res.status(500).json({ error: '服務器錯誤' });
  }
});

// 根據頁面位置獲取內容
app.get('/api/content/by-page/:page', (req, res) => {
  try {
    const { page } = req.params;
    const { limit } = req.query;
    
    // 篩選指定頁面的內容
    let filteredContent = publishedContent.filter(article => 
      article.displayPage === page || !article.displayPage // 兼容舊數據
    );
    
    // 排序：置頂文章優先，然後按優先級和時間排序
    filteredContent.sort((a, b) => {
      // 置頂文章優先
      if (a.isSticky && !b.isSticky) return -1;
      if (!a.isSticky && b.isSticky) return 1;
      
      // 優先級排序
      const priorityOrder = { high: 3, normal: 2, low: 1 };
      const aPriority = priorityOrder[a.priority] || 2;
      const bPriority = priorityOrder[b.priority] || 2;
      
      if (aPriority !== bPriority) return bPriority - aPriority;
      
      // 時間排序（新的在前）
      return new Date(b.date) - new Date(a.date);
    });
    
    // 限制數量
    if (limit) {
      filteredContent = filteredContent.slice(0, parseInt(limit));
    }
    
    res.json(filteredContent);
  } catch (error) {
    console.error('獲取頁面內容時出錯:', error);
    res.status(500).json({ error: '獲取內容失敗' });
  }
});

// 啟動服務器
app.listen(PORT, () => {
  console.log(`🚀 管理後台服務器運行在 http://localhost:${PORT}`);
  console.log(`📝 可用管理員帳號：`);
  console.log(`   • admin / admin123 (系統管理員)`);
  console.log(`   • mkt / mkt123 (行銷系管理員)`);
  console.log(`🌐 管理後台：http://localhost:8081/admin/login`);
}); 