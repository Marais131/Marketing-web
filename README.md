# 品牌視覺中心網站

這是一個基於現代化技術棧構建的品牌視覺中心網站。

## 技術棧

- **前端框架**: React 18 + TypeScript
- **構建工具**: Vite
- **UI 組件**: shadcn/ui + Radix UI
- **樣式**: Tailwind CSS
- **路由**: React Router DOM
- **狀態管理**: TanStack Query

## 本地開發

### 環境要求

- Node.js 18+ 
- npm 或 yarn

### 安裝和運行

```bash
# 1. 克隆專案
git clone <YOUR_REPOSITORY_URL>
cd brand-vision-hub-demo

# 2. 安裝依賴
npm install

# 3. 啟動開發服務器
npm run dev
```

開發服務器將在 `http://localhost:8080` 啟動。

### 可用的腳本

- `npm run dev` - 啟動開發服務器
- `npm run build` - 構建生產版本
- `npm run preview` - 預覽生產構建
- `npm run lint` - 運行 ESLint 檢查

## 部署

### Vercel 部署（推薦）

1. 將代碼推送到 GitHub
2. 在 [Vercel](https://vercel.com) 創建新專案
3. 連接 GitHub 倉庫
4. Vercel 會自動檢測 Vite 專案並部署

### Netlify 部署

1. 將代碼推送到 GitHub
2. 在 [Netlify](https://netlify.com) 創建新專案
3. 連接 GitHub 倉庫
4. 構建命令：`npm run build`
5. 發布目錄：`dist`

### 其他平台

您也可以部署到任何支持靜態網站的平台，如：
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- 阿里雲 OSS
- 騰訊雲 COS

## 專案結構

```
src/
├── components/     # 可重用組件
│   ├── ui/        # shadcn/ui 組件
│   └── ...        # 自定義組件
├── pages/         # 頁面組件
├── hooks/         # 自定義 Hooks
├── lib/           # 工具函數
└── ...
```

## 自定義域名

部署後，您可以在部署平台設置自定義域名。

## 貢獻

歡迎提交 Issue 和 Pull Request！
