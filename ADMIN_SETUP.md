# Marketing Web 管理後台設置指南

這是文化大學行銷系網站的管理後台系統，讓你可以輕鬆管理網站內容。

## 🚀 快速啟動

使用一鍵啟動腳本：
```bash
./start-admin.sh
```

或者手動啟動：
```bash
# 1. 啟動前端
npm start

# 2. 啟動後端（新終端）
cd server && npm start
```

## 🌐 訪問地址

- **前端網站**：http://localhost:8081/
- **管理後台**：http://localhost:8081/admin/login
- **後端 API**：http://localhost:3001/

## 🔐 管理員帳號

- `admin` / `admin123` (系統管理員) 👨‍💼
- `mkt` / `mkt123` (行銷系管理員) 🎯

## 📋 功能特色

### ✨ 超簡單發布系統
- **一鍵發布** - 像發朋友圈一樣簡單
- **拖拽上傳** - 直接拖圖片到頁面
- **即時預覽** - 所見即所得
- **智能分類** - 預設常用分類

### 🔐 安全認證
- JWT Token 驗證
- 管理員權限控制
- 自動登出保護

### 📱 響應式設計
- 手機、平板、電腦都可用
- 現代化介面設計
- 品牌色系統一

## 🛠 安裝步驟

### 1. 安裝後端依賴
```bash
cd server
npm install
```

### 2. 啟動後端服務器
```bash
# 開發模式
npm run dev

# 生產模式
npm start
```

### 3. 啟動前端
```bash
# 回到根目錄
cd ..

# 啟動前端開發服務器
npm run dev
```

## 🎯 使用方法

### 管理員登入
1. 訪問：`http://localhost:8081/admin/login`
2. 可用帳號：
   - **系統管理員**：`admin` / `admin123` 👨‍💼
   - **行銷系管理員**：`mkt` / `mkt123` 🎯

### 發布內容
1. 登入管理後台
2. 點擊「🚀 一鍵發布」
3. 選擇內容類型（新聞/活動/公告）
4. 填寫標題和內容
5. 上傳圖片（可選）
6. 點擊「🚀 一鍵發布」

### 管理內容
- **查看統計** - 總覽頁面查看發布數據
- **編輯內容** - 內容管理頁面編輯已發布內容
- **媒體管理** - 上傳和管理圖片檔案

## 📝 API 端點

### 認證
- `POST /api/admin/login` - 管理員登入

### 內容管理
- `GET /api/admin/content` - 獲取已發布內容
- `POST /api/admin/publish` - 發布新內容
- `POST /api/admin/upload` - 上傳檔案

### 公開內容
- `GET /api/content` - 獲取網站內容（給前端使用）

## 🔧 自定義設置

### 修改管理員帳號
編輯 `server/index.js` 第 58-68 行：
```javascript
if (username === 'your-username' && password === 'your-password') {
  // ...
}
```

### 添加新的內容分類
編輯 `src/pages/AdminDashboard.tsx` 第 126-131 行：
```javascript
<option value="新分類">🎯 新分類</option>
```

### 修改上傳限制
編輯 `server/index.js` 第 38-46 行：
```javascript
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 改為 20MB
  // ...
});
```

## 🚨 注意事項

1. **生產環境部署**
   - 修改 JWT 密鑰
   - 使用真實資料庫
   - 設置 HTTPS

2. **安全性**
   - 定期更換管理員密碼
   - 限制檔案上傳類型
   - 設置 IP 白名單

3. **備份**
   - 定期備份上傳的檔案
   - 備份內容資料

## 🎉 完成！

現在您可以：
1. ✅ 安全登入管理後台
2. ✅ 一鍵發布新聞、活動、公告
3. ✅ 上傳和管理圖片
4. ✅ 即時預覽發布效果
5. ✅ 管理所有已發布內容

**可用帳號：**
- **👨‍💼 admin / admin123** (系統管理員)
- **🎯 mkt / mkt123** (行銷系管理員)

**管理後台：http://localhost:8081/admin/login** 