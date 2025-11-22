# 網站按鈕類型總結

## 🎯 按鈕組件架構

### 1. 基礎按鈕組件 (`Button`)
**位置**: `/src/components/ui/button.tsx`

#### 變體 (Variants)
- **default**: 主要按鈕，使用主題色彩
- **destructive**: 危險操作按鈕，紅色系
- **outline**: 外框按鈕，透明背景
- **secondary**: 次要按鈕，灰色系
- **ghost**: 幽靈按鈕，無背景
- **link**: 連結樣式按鈕

#### 尺寸 (Sizes)
- **default**: 標準尺寸 (h-10 px-4 py-2)
- **sm**: 小尺寸 (h-9 px-3)
- **lg**: 大尺寸 (h-11 px-8)
- **icon**: 圖標按鈕 (h-10 w-10)

### 2. 增強版按鈕組件 (`EnhancedButton`)
**位置**: `/src/components/ui/enhanced-button.tsx`

#### 變體 (Variants)
- **default**: 品牌漸層按鈕 (#1A4C7A → #2A7DB1)
- **destructive**: 危險操作按鈕
- **outline**: 外框按鈕，懸停時填充
- **secondary**: 灰色漸層按鈕
- **ghost**: 幽靈按鈕，懸停時顯示漸層背景
- **link**: 連結樣式
- **gradient**: 三色漸層 (#3CB1B6 → #2A7DB1 → #1A4C7A)
- **glow**: 發光效果按鈕

#### 尺寸 (Sizes)
- **default**: 標準尺寸 (h-10 px-6 py-2)
- **sm**: 小尺寸 (h-8 px-4 py-1.5)
- **lg**: 大尺寸 (h-12 px-8 py-3)
- **xl**: 超大尺寸 (h-14 px-10 py-4)
- **icon**: 圖標按鈕 (h-10 w-10)

#### 動畫效果 (Animation)
- **none**: 無動畫
- **ripple**: 漣漪效果
- **shine**: 光澤掃過效果
- **pulse**: 脈衝動畫

## 📍 各頁面按鈕使用情況

### 1. 導航欄 (`Navbar.tsx`)
```tsx
// 移動端菜單按鈕
<Button variant="ghost" size="sm" className="md:hidden">
  {isMobileMenuOpen ? <X /> : <Menu />}
</Button>
```

### 2. 聯絡頁面 (`Contact.tsx`)
```tsx
// 報名按鈕
<Button size="sm" className="w-full bg-gradient-to-r from-orange-500 to-red-500">
  立即報名
</Button>

// 主要行動按鈕
<Button size="lg" className="bg-orange-500 hover:bg-orange-600">
  立即聯繫
</Button>

// 次要按鈕
<Button size="lg" variant="outline" className="border-white text-white">
  預約參訪
</Button>
```

### 3. 入學資訊頁面 (`Admissions.tsx`)
```tsx
// 報名按鈕
<Button className="w-full bg-gradient-to-r from-orange-500 to-red-500">
  立即報名
</Button>

// 主要按鈕
<Button size="lg" className="bg-orange-500 hover:bg-orange-600">
  立即聯繫
</Button>
```

### 4. 活動頁面 (`Activities.tsx`)
```tsx
// 篩選按鈕
<Button className="ml-4 bg-blue-600 hover:bg-blue-700">
  篩選活動
</Button>

// 活動類型按鈕
<Button variant="outline" className="border-blue-500 text-blue-500">
  研討會
</Button>
```

### 5. 課程亮點頁面 (`CurriculumHighlightsGrid.tsx`)
```tsx
// 動態顏色按鈕
<button className={`bg-${highlight.color}-500 text-white px-4 py-2 rounded-lg`}>
  了解更多
</button>

// 主要行動按鈕
<button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold">
  探索課程
</button>
```

### 6. 首頁群組照片 (`HomeGroupPhoto.tsx`)
```tsx
// 增強版按鈕
<EnhancedButton
  variant="gradient"
  size="lg"
  leftIcon={<ArrowRight className="w-5 h-5" />}
>
  查看更多照片
</EnhancedButton>
```

### 7. 頁尾 (`Footer.tsx`)
```tsx
// 社群媒體按鈕
<Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
  <Facebook className="w-5 h-5" />
</Button>
```

### 8. 管理後台 (`AdminDashboard.tsx`)
```tsx
// 操作按鈕
<Button onClick={handleViewWebsite} variant="outline">
  查看網站
</Button>

// 表單提交按鈕
<Button type="submit" className="w-full">
  儲存變更
</Button>
```

### 9. 關於頁面 (`About.tsx`)
```tsx
// 主要行動按鈕
<button className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white font-bold py-4 px-8 rounded-full">
  探索更多
</button>

// 次要按鈕
<button className="bg-white/15 hover:bg-white/25 text-white font-bold py-4 px-8 rounded-full border border-white/30">
  了解更多
</button>
```

## 🎨 按鈕樣式特色

### 1. 品牌色彩系統
- **主色**: #1A4C7A (深藍)
- **次色**: #2A7DB1 (中藍)
- **強調色**: #3CB1B6 (青藍)
- **輔助色**: 橙色系 (用於行動呼籲)

### 2. 漸層效果
```css
/* 品牌漸層 */
bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1]

/* 三色漸層 */
bg-gradient-to-r from-[#3CB1B6] via-[#2A7DB1] to-[#1A4C7A]

/* 行動呼籲漸層 */
bg-gradient-to-r from-orange-500 to-red-500
```

### 3. 互動效果
- **懸停**: 顏色變化、陰影增強、縮放效果
- **點擊**: 縮放回饋 (active:scale-95)
- **焦點**: 環形外框 (focus-visible:ring-2)
- **載入**: 旋轉動畫 (loading spinner)

### 4. 動畫效果
- **漣漪**: 點擊時的波紋擴散
- **光澤**: 懸停時的光線掃過
- **脈衝**: 持續的呼吸動畫
- **縮放**: 懸停時的放大效果

## 📱 響應式設計

### 按鈕尺寸適配
- **桌面**: 標準尺寸，完整文字
- **平板**: 適中尺寸，保持可讀性
- **手機**: 小尺寸，可能簡化文字

### 佈局調整
- **桌面**: 水平排列多個按鈕
- **手機**: 垂直堆疊，全寬按鈕

## 🔧 使用建議

### 1. 按鈕選擇指南
- **主要行動**: 使用 `default` 或 `gradient` 變體
- **次要行動**: 使用 `outline` 或 `secondary` 變體
- **危險操作**: 使用 `destructive` 變體
- **導航連結**: 使用 `ghost` 或 `link` 變體

### 2. 尺寸選擇
- **重要行動**: 使用 `lg` 或 `xl` 尺寸
- **一般操作**: 使用 `default` 尺寸
- **輔助功能**: 使用 `sm` 尺寸
- **圖標按鈕**: 使用 `icon` 尺寸

### 3. 動畫效果
- **吸引注意**: 使用 `pulse` 動畫
- **互動回饋**: 使用 `ripple` 動畫
- **視覺增強**: 使用 `shine` 動畫

## 📊 按鈕統計

### 按鈕類型分布
- **基礎按鈕 (Button)**: ~60%
- **增強按鈕 (EnhancedButton)**: ~25%
- **自定義按鈕**: ~15%

### 常用變體
1. **default**: 主要操作
2. **outline**: 次要操作
3. **ghost**: 導航和輔助功能
4. **gradient**: 特殊強調

### 常用尺寸
1. **default**: 一般操作
2. **lg**: 主要行動
3. **sm**: 輔助功能
4. **icon**: 圖標按鈕

---

*最後更新: 2024年12月*
*按鈕類型版本: v1.0*
