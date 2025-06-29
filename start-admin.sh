#!/bin/bash

# Marketing Web 管理後台一鍵啟動腳本
# 文化大學行銷系網站管理系統

echo "🚀 啟動 Marketing Web 管理後台..."
echo "=================================="

# 檢查Node.js是否安裝
if ! command -v node &> /dev/null; then
    echo "❌ 請先安裝 Node.js"
    exit 1
fi

# 檢查npm是否安裝
if ! command -v npm &> /dev/null; then
    echo "❌ 請先安裝 npm"
    exit 1
fi

echo "📦 安裝後端依賴..."
cd server
if [ ! -d "node_modules" ]; then
    npm install
fi

echo "🌐 啟動後端服務器..."
npm start &
BACKEND_PID=$!

echo "⏰ 等待後端啟動..."
sleep 3

cd ..

echo "🎨 啟動前端服務器..."
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ 系統啟動成功！"
echo "=================================="
echo "🌐 網站首頁：http://localhost:8080"
echo "🔐 管理後台：http://localhost:8080/admin/login"
echo "📝 測試帳號：admin / admin123"
echo "🔧 後端API：http://localhost:3001"
echo "=================================="
echo ""
echo "按 Ctrl+C 停止所有服務"

# 等待用戶中斷
trap 'echo ""; echo "🛑 正在停止服務..."; kill $BACKEND_PID $FRONTEND_PID; exit' INT
wait 