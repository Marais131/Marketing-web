#!/bin/bash

# 🎯 文化大學行銷系網站 - 快速示範腳本

echo "🚀 文化大學行銷系網站示範開始..."
echo "=================================="

# 檢查後端服務
echo "📡 檢查後端服務狀態..."
if curl -s http://localhost:3001/health > /dev/null; then
    echo "✅ 後端服務正常運行 (http://localhost:3001)"
else
    echo "❌ 後端服務未運行，請先啟動: cd server && node index.js"
    exit 1
fi

# 檢查前端服務
echo "🌐 檢查前端服務狀態..."
if curl -s http://localhost:5173 > /dev/null; then
    echo "✅ 前端服務正常運行 (http://localhost:5173)"
else
    echo "❌ 前端服務未運行，請先啟動: npm run dev"
    exit 1
fi

echo ""
echo "🎉 所有服務正常運行！"
echo ""

# 測試後端API
echo "🔧 測試後端API..."
echo "=================================="

echo "📊 獲取所有內容數量..."
TOTAL_COUNT=$(curl -s http://localhost:3001/api/content | jq '. | length')
echo "✅ 共有 $TOTAL_COUNT 篇內容"

echo ""
echo "📝 測試特色文章..."

# 測試教師專欄
echo "📖 教師專欄 - 品牌思維 (ID: 6)"
ARTICLE_6=$(curl -s http://localhost:3001/api/content/6 | jq -r '.title')
echo "   標題: $ARTICLE_6"

echo "📖 教師專欄 - 消費者行為 (ID: 7)"
ARTICLE_7=$(curl -s http://localhost:3001/api/content/7 | jq -r '.title')
echo "   標題: $ARTICLE_7"

echo "📖 產業分析 - AI大數據 (ID: 8)"
ARTICLE_8=$(curl -s http://localhost:3001/api/content/8 | jq -r '.title')
echo "   標題: $ARTICLE_8"

echo "📖 行銷觀點 - 數位轉型 (ID: 12)"
ARTICLE_12=$(curl -s http://localhost:3001/api/content/12 | jq -r '.title')
echo "   標題: $ARTICLE_12"

echo ""
echo "📢 測試重要公告..."

echo "🎉 招生公告 (ID: 1)"
ARTICLE_1=$(curl -s http://localhost:3001/api/content/1 | jq -r '.title')
echo "   標題: $ARTICLE_1"

echo "📚 工作坊活動 (ID: 2)"
ARTICLE_2=$(curl -s http://localhost:3001/api/content/2 | jq -r '.title')
echo "   標題: $ARTICLE_2"

echo "🏆 競賽成果 (ID: 3)"
ARTICLE_3=$(curl -s http://localhost:3001/api/content/3 | jq -r '.title')
echo "   標題: $ARTICLE_3"

echo ""
echo "📋 測試行政訊息..."

echo "📋 選課通知 (ID: 9)"
ARTICLE_9=$(curl -s http://localhost:3001/api/content/9 | jq -r '.title')
echo "   標題: $ARTICLE_9"

echo "📋 系務會議 (ID: 10)"
ARTICLE_10=$(curl -s http://localhost:3001/api/content/10 | jq -r '.title')
echo "   標題: $ARTICLE_10"

echo "📋 畢業手續 (ID: 11)"
ARTICLE_11=$(curl -s http://localhost:3001/api/content/11 | jq -r '.title')
echo "   標題: $ARTICLE_11"

echo ""
echo "🌟 測試相關文章推薦..."
RELATED_COUNT=$(curl -s http://localhost:3001/api/content/6/related | jq '. | length')
echo "✅ 文章 ID:6 有 $RELATED_COUNT 篇相關文章推薦"

echo ""
echo "🎯 示範連結"
echo "=================================="
echo "🏠 首頁: http://localhost:5173/"
echo "📰 文章列表: http://localhost:5173/articles"
echo ""
echo "📖 精選文章詳情頁:"
echo "   • 品牌思維專欄: http://localhost:5173/article/6"
echo "   • 消費者行為: http://localhost:5173/article/7"
echo "   • AI大數據: http://localhost:5173/article/8"
echo "   • 數位轉型: http://localhost:5173/article/12"
echo ""
echo "📢 重要公告:"
echo "   • 招生開始: http://localhost:5173/article/1"
echo "   • 品牌工作坊: http://localhost:5173/article/2"
echo "   • 競賽冠軍: http://localhost:5173/article/3"
echo ""
echo "📋 行政訊息:"
echo "   • 選課通知: http://localhost:5173/article/9"
echo "   • 系務會議: http://localhost:5173/article/10"
echo "   • 畢業手續: http://localhost:5173/article/11"
echo ""
echo "🛠️ 管理後台:"
echo "   • 登入頁面: http://localhost:5173/admin/login"
echo "   • 帳號: admin / 密碼: admin123"
echo "   • 帳號: mkt / 密碼: mkt123"
echo ""
echo "🎉 示範完成！請訪問上述連結體驗豐富的示範內容。"
echo ""
echo "💡 提示："
echo "   • 每篇文章都有完整的內容、作者資訊和高質量圖片"
echo "   • 支援點讚、分享、相關文章推薦等互動功能"
echo "   • 所有頁面都採用漸變色背景和現代化設計"
echo "   • 完整支援行動設備和響應式布局"
echo ""
echo "📞 如有問題，請檢查 DEMO_GUIDE.md 獲取詳細說明" 