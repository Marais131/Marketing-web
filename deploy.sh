#!/bin/bash

# 📦 Marketing Web 自動儲存腳本
# 使用方法: ./deploy.sh "提交訊息"

echo "📦 開始自動儲存 Marketing Web..."
echo "=================================="

# 檢查是否有提交訊息
if [ -z "$1" ]; then
    echo "⚠️  請提供提交訊息"
    echo "使用方法: ./deploy.sh \"你的提交訊息\""
    exit 1
fi

# 檢查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
    echo "📝 發現未提交的更改，正在提交..."
    git add .
    git commit -m "$1"
else
    echo "✅ 沒有新的更改需要提交"
fi

# 推送到 GitHub
echo "📤 推送到 GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ 成功推送到 GitHub"
    echo ""
    echo "📋 接下來的步驟："
    echo "   1. 前往 Vercel Dashboard"
    echo "   2. 點擊你的 marketing-web 項目"
    echo "   3. 點擊 'Redeploy' 按鈕"
    echo "   4. 等待 2-3 分鐘完成部署"
    echo ""
    echo "🌐 部署後的網址:"
    echo "   📱 網站: https://marketing-web-three.vercel.app"
    echo "   🔐 管理後台: https://marketing-web-three.vercel.app/admin/login"
    echo ""
    echo "🎯 可用帳號:"
    echo "   👨‍💼 admin / admin123 (系統管理員)"
    echo "   🎯 mkt / mkt123 (行銷系管理員)"
    echo "   🎭 demo / demo (演示模式)"
else
    echo "❌ 推送失敗，請檢查網路連接或 Git 設置"
    exit 1
fi

echo ""
echo "🎊 儲存完成！請手動部署到 Vercel" 