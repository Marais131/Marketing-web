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

// 啟動服務器
app.listen(PORT, () => {
  console.log(`🚀 管理後台服務器運行在 http://localhost:${PORT}`);
  console.log(`📝 可用管理員帳號：`);
  console.log(`   • admin / admin123 (系統管理員)`);
  console.log(`   • mkt / mkt123 (行銷系管理員)`);
  console.log(`🌐 管理後台：http://localhost:8081/admin/login`);
}); 