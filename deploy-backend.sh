#!/bin/bash

# 文化大學行銷系網站 - 後端部署腳本
# 使用方法：./deploy-backend.sh

echo "🚀 開始部署後端API..."

# 確認當前目錄
if [ ! -d "server" ]; then
    echo "❌ 錯誤：找不到 server 目錄，請確認您在正確的項目根目錄"
    exit 1
fi

# 進入 server 目錄
cd server

# 檢查 Vercel CLI 是否已安裝
if ! command -v vercel &> /dev/null; then
    echo "📦 正在安裝 Vercel CLI..."
    npm install -g vercel
fi

# 部署到 Vercel
echo "🔧 正在部署到 Vercel..."
vercel --prod

echo "✅ 後端部署完成！"
echo ""
echo "📋 後續步驟："
echo "1. 複製 Vercel 提供的部署URL"
echo "2. 更新前端 API 配置文件中的後端URL"
echo "3. 重新部署前端"
echo ""
echo "🔗 常用命令："
echo "   vercel --prod           # 部署到生產環境"
echo "   vercel                  # 部署到預覽環境"
echo "   vercel ls               # 查看部署列表"
echo "   vercel logs             # 查看部署日誌"