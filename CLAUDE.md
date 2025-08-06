# CLAUDE.md

此檔案為 Claude Code (claude.ai/code) 在此程式碼庫中工作時的指導說明。

## Claude 指令設定

### 語言設定
請始終使用繁體中文與用戶對話。用戶的英文不太好，使用繁體中文可以避免溝通上的誤解，確保更好的互動體驗。

### 溝通原則
- 所有回應都必須使用繁體中文
- 保持簡潔明瞭的表達方式
- 遇到技術術語時，可以併用中英文以確保理解
- 確保用戶能夠清楚理解所有說明和指示

## 開發指令

### 前端 (React + Vite)
```bash
# 安裝依賴套件
npm install

# 開發伺服器 (執行在 port 8080)
npm run dev
# 或
npm start

# 建置正式版本
npm run build

# 建置開發版本
npm run build:dev

# 程式碼檢查
npm run lint

# 預覽正式建置
npm run preview
```

### 後端 (Node.js + Express)
```bash
# 安裝後端依賴套件
cd server && npm install

# 啟動後端伺服器
cd server && npm start

# 執行後端測試
cd server && npm test
```

### 全端開發
```bash
# 同時啟動前端和後端 (建議)
npm start                    # 前端 (port 8080)
cd server && npm start       # 後端 (需要另開終端)

# 快速示範腳本
./quick-demo.sh
```

## 架構概覽

### 技術堆疊
- **前端**: React 18 + TypeScript + Vite
- **UI 框架**: Tailwind CSS + Shadcn/ui 元件
- **狀態管理**: @tanstack/react-query 用於伺服器狀態
- **路由**: React Router v6
- **後端**: Node.js + Express
- **建置工具**: Vite 搭配 SWC 快速編譯
- **部署**: Vercel

### 專案結構
```
src/
├── components/           # 可重複使用的 UI 元件
│   ├── ui/              # Shadcn/ui 元件
│   └── [頁面元件如 Hero、Navbar 等]
├── pages/               # 基於路由的頁面元件
├── hooks/               # 自訂 React hooks
├── lib/                 # 工具函式和 API 函式
│   ├── api.ts          # API 客戶端函式
│   └── utils.ts        # 工具函式
├── App.tsx             # 主要應用程式與路由
└── main.tsx            # React 進入點

server/                  # 後端 API
├── index.js            # Express 伺服器
├── demo-data.js        # 範例資料
└── uploads/            # 檔案上傳
```

### 關鍵架構決策

1. **元件組織**: 
   - UI 元件放在 `/components/ui/` (Shadcn/ui)
   - 頁面特定元件放在 `/components/`
   - 頁面放在 `/pages/` 目錄

2. **路由結構**:
   - 使用 Layout 包裝器搭配巢狀路由
   - 管理後台路由與主要 layout 分離
   - 基於檔案的組織結構在 pages 目錄中

3. **建置最佳化**:
   - 手動 chunk 分割以提升載入效能
   - 分別為 vendor、UI、utils、charts 和 forms 建立獨立bundle
   - Vite 設定為最佳開發體驗

4. **狀態管理**:
   - React Query 用於伺服器狀態和快取
   - 本地元件狀態用於 UI 狀態
   - 無全域狀態管理函式庫

5. **樣式系統**:
   - Tailwind CSS 搭配自訂設計 token
   - CSS-in-JS 動畫用於複雜效果
   - 全面響應式設計

## 開發工作流程

### 使用 UI 元件
- 使用 `/components/ui/` 中現有的 Shadcn/ui 元件
- 遵循既有模式建立新元件
- 維持 Tailwind CSS 類別的一致性

### API 整合
- 透過 `/lib/api.ts` 存取後端端點
- 使用 React Query 進行資料取得和快取
- 伺服器執行在不同 port，已設定 CORS

### 程式碼風格
- 啟用 TypeScript 嚴格模式
- ESLint 設定為 React/TypeScript
- 使用 `@/` 別名一致性匯入模式至 src 目錄

### 測試
- 目前未設定特定測試框架
- 建議透過開發伺服器進行手動測試

## 重要提醒

### 管理系統
- 管理後台登入位置：`/admin/login`
- 預設帳號密碼：`admin`/`admin123` 或 `mkt`/`mkt123`
- 管理後台路由繞過主要 layout

### 部署
- 設定為 Vercel 部署
- 建置檔案在 `/dist/`
- 靜態檔案在 `/public/`

### 開發環境
- Vite 開發伺服器搭配 HMR
- 檔案上傳由後端處理
- 已為本地開發設定 CORS