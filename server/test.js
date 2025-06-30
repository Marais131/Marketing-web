const express = require('express');
const app = express();

// 簡單的根路由
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>測試 - 文化大學行銷系後端</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          max-width: 600px; 
          margin: 50px auto; 
          padding: 20px; 
          background: #f0f9ff; 
        }
        .container { 
          background: white; 
          padding: 30px; 
          border-radius: 10px; 
          box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
          text-align: center;
        }
        h1 { color: #1e40af; }
        .success { 
          background: #10b981; 
          color: white; 
          padding: 10px 20px; 
          border-radius: 5px; 
          margin: 20px 0; 
        }
        .test-link { 
          background: #3b82f6; 
          color: white; 
          padding: 10px 20px; 
          text-decoration: none; 
          border-radius: 5px; 
          margin: 10px; 
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🎉 後端部署成功！</h1>
        <div class="success">✅ Vercel 部署正常工作</div>
        <p>這是文化大學行銷系的後端API服務測試頁面</p>
        <p>部署時間：${new Date().toLocaleString('zh-TW')}</p>
        <a href="/api/test" class="test-link">測試API</a>
      </div>
    </body>
    </html>
  `);
});

// 測試API
app.get('/api/test', (req, res) => {
  res.json({
    status: 'success',
    message: '後端API正常工作！',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// 導出應用
module.exports = app; 