# 🚀 文化大學行銷系網站 - Vercel 部署指南

## 📋 項目概述

這是一個完整的文化大學行銷系網站，包含：
- **前端**: React + TypeScript + Vite + Tailwind CSS
- **後端**: Node.js + Express
- **管理後台**: 完整的內容管理系統

## 🌐 在線演示

- **前端網站**: 部署後將顯示在您的Vercel域名
- **管理後台**: `您的域名/admin/login`

### 🔐 管理員帳號
- **系統管理員**: `admin` / `admin123`
- **行銷系管理員**: `mkt` / `mkt123`

## 📦 Vercel 部署步驟

### 1️⃣ 前端部署 (主要網站)

1. **登入Vercel**
   - 前往 [vercel.com](https://vercel.com)
   - 使用GitHub帳號登入

2. **導入項目**
   - 點擊 "New Project"
   - 選擇您的GitHub倉庫: `brand-vision-hub-demo`
   - 點擊 "Import"

3. **配置前端設置**
   ```
   Framework Preset: Vite
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **環境變數設置**
   在Vercel項目設置中添加：
   ```
   VITE_API_BASE_URL=https://您的後端域名.vercel.app
   ```

5. **部署**
   - 點擊 "Deploy"
   - 等待部署完成

### 2️⃣ 後端部署 (API服務)

1. **創建新項目**
   - 在Vercel再次點擊 "New Project"
   - 選擇同一個GitHub倉庫
   - 點擊 "Import"

2. **配置後端設置**
   ```
   Framework Preset: Other
   Root Directory: ./server
   Build Command: npm install
   Output Directory: ./
   Install Command: npm install
   ```

3. **創建 vercel.json**
   確保server目錄下有vercel.json文件：
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "index.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/index.js"
       }
     ]
   }
   ```

4. **部署後端**
   - 點擊 "Deploy"
   - 記錄後端域名

### 3️⃣ 更新前端環境變數

1. **回到前端項目設置**
2. **更新環境變數**
   ```
   VITE_API_BASE_URL=https://您的後端域名.vercel.app
   ```
3. **重新部署前端**

## 🔧 本地開發

### 前端開發
```bash
npm install
npm run dev
# 前端運行在 http://localhost:8082
```

### 後端開發
```bash
cd server
npm install
npm start
# 後端運行在 http://localhost:3001
```

## 📁 項目結構

```
brand-vision-hub-demo/
├── src/                    # 前端源碼
│   ├── components/         # React組件
│   ├── pages/             # 頁面組件
│   └── ...
├── server/                # 後端源碼
│   ├── index.js           # 主服務器文件
│   ├── demo-data.js       # 演示數據
│   └── uploads/           # 上傳文件
├── public/                # 靜態資源
└── ...
```

## ✨ 主要功能

### 🎯 前端功能
- 響應式網站設計
- 動態內容顯示
- 文章列表和詳情
- 學系介紹
- 聯絡資訊

### 🛠️ 管理後台功能
- **📝 發布內容**: 發布文章、活動、公告
- **📚 內容管理**: 編輯、刪除、篩選內容
- **📊 數據總覽**: 統計數據和系統狀態
- **🖼️ 媒體管理**: 圖片上傳和管理
- **👥 用戶操作**: 操作記錄和用戶統計

### 🔄 動態功能
- 頁面位置選擇 (7個不同位置)
- 優先級管理 (高/中/低)
- 置頂功能
- 即時預覽
- 系統狀態監控

## 🚨 注意事項

1. **環境變數**: 確保正確設置API基礎URL
2. **CORS設置**: 後端已配置CORS允許跨域請求
3. **文件上傳**: 上傳的文件會存儲在server/uploads目錄
4. **數據持久化**: 目前使用內存存儲，重啟會重置數據

## 🔍 故障排除

### 常見問題

1. **API連接失敗**
   - 檢查VITE_API_BASE_URL是否正確
   - 確認後端服務正常運行

2. **圖片無法顯示**
   - 檢查圖片路徑是否正確
   - 確認uploads目錄權限

3. **管理後台無法訪問**
   - 確認路由配置正確
   - 檢查登入憑證

## 📞 支援

如有問題，請檢查：
1. Vercel部署日誌
2. 瀏覽器開發者工具
3. 網絡連接狀態

---

🎉 **部署完成後，您將擁有一個完整的行銷系網站和管理系統！** 