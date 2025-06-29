#!/bin/bash

# 顏色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# 獲取提交訊息
COMMIT_MESSAGE="$1"
if [ -z "$COMMIT_MESSAGE" ]; then
    COMMIT_MESSAGE="更新網站內容"
fi

echo -e "${BLUE}📦 開始儲存 Marketing Web...${NC}"
echo "=================================="

# 檢查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}📝 發現未提交的更改，正在提交...${NC}"
    git add .
    git commit -m "$COMMIT_MESSAGE"
else
    echo -e "${GREEN}✅ 沒有未提交的更改${NC}"
fi

# 推送到 GitHub
echo -e "${BLUE}📤 推送到 GitHub...${NC}"
git push origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 成功推送到 GitHub${NC}"
    echo ""
    echo -e "${PURPLE}📋 接下來請手動部署：${NC}"
    echo -e "${CYAN}   1. 前往 Vercel Dashboard${NC}"
    echo -e "${CYAN}   2. 點擊你的 marketing-web 項目${NC}"
    echo -e "${CYAN}   3. 點擊 'Redeploy' 按鈕${NC}"
    echo -e "${CYAN}   4. 等待 2-3 分鐘完成部署${NC}"
    echo ""
    echo -e "${BLUE}🌐 網站地址:${NC}"
    echo -e "${CYAN}   📱 網站: https://marketing-web-three.vercel.app${NC}"
    echo -e "${CYAN}   🔐 管理後台: https://marketing-web-three.vercel.app/admin/login${NC}"
    echo ""
    echo -e "${YELLOW}🎯 可用帳號:${NC}"
    echo -e "${CYAN}   👨‍💼 admin / admin123 (系統管理員)${NC}"
    echo -e "${CYAN}   🎯 mkt / mkt123 (行銷系管理員)${NC}"
    echo -e "${CYAN}   🎭 demo / demo (演示模式)${NC}"
    echo ""
    echo -e "${GREEN}🎊 代碼已儲存！請手動部署到 Vercel${NC}"
else
    echo -e "${RED}❌ 推送失敗${NC}"
    exit 1
fi 