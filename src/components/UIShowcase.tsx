import React from "react";
import { GradientCard } from "@/components/ui/gradient-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { QuoteBlock } from "@/components/ui/quote-block";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { ElegantImage } from "@/components/ui/elegant-image";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Heart, Star, Trophy, Users, GraduationCap, Sparkles } from "lucide-react";

const UIShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="container mx-auto px-6 space-y-20">
        
        {/* 標題區域 */}
        <FadeInSection className="text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6] bg-clip-text text-transparent mb-4">
            全新 UI 組件展示
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            精心打造的優雅組件，提升使用者體驗的每一個細節
          </p>
        </FadeInSection>

        {/* 卡片組件展示 */}
        <FadeInSection delay={200}>
          <h2 className="text-3xl font-bold text-[#1A4C7A] mb-8 text-center">漸層邊框卡片</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GradientCard variant="default" className="p-6">
              <div className="text-center">
                <Star className="w-12 h-12 text-[#2A7DB1] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#1A4C7A] mb-2">預設樣式</h3>
                <p className="text-gray-600">柔和的漸層邊框，適合一般內容展示</p>
              </div>
            </GradientCard>
            
            <GradientCard variant="highlight" className="p-6">
              <div className="text-center">
                <Trophy className="w-12 h-12 text-[#3CB1B6] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#1A4C7A] mb-2">高亮樣式</h3>
                <p className="text-gray-600">更明顯的視覺效果，適合重點內容</p>
              </div>
            </GradientCard>
            
            <GradientCard variant="subtle" className="p-6">
              <div className="text-center">
                <Heart className="w-12 h-12 text-[#1A4C7A] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#1A4C7A] mb-2">微妙樣式</h3>
                <p className="text-gray-600">低調優雅，適合大量資訊展示</p>
              </div>
            </GradientCard>
          </div>
        </FadeInSection>

        {/* 數字計數器展示 */}
        <FadeInSection delay={400}>
          <h2 className="text-3xl font-bold text-[#1A4C7A] mb-8 text-center">動畫數字計數器</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <GradientCard className="p-6 text-center">
              <Users className="w-8 h-8 text-[#2A7DB1] mx-auto mb-2" />
              <AnimatedCounter value={1500} className="text-3xl mb-2" suffix="+" />
              <p className="text-sm text-gray-600">在校學生</p>
            </GradientCard>
            
            <GradientCard className="p-6 text-center">
              <GraduationCap className="w-8 h-8 text-[#3CB1B6] mx-auto mb-2" />
              <AnimatedCounter value={95} className="text-3xl mb-2" suffix="%" />
              <p className="text-sm text-gray-600">就業率</p>
            </GradientCard>
            
            <GradientCard className="p-6 text-center">
              <Trophy className="w-8 h-8 text-[#1A4C7A] mx-auto mb-2" />
              <AnimatedCounter value={50} className="text-3xl mb-2" suffix="+" />
              <p className="text-sm text-gray-600">合作企業</p>
            </GradientCard>
            
            <GradientCard className="p-6 text-center">
              <Star className="w-8 h-8 text-[#2A7DB1] mx-auto mb-2" />
              <AnimatedCounter value={4.8} decimals={1} className="text-3xl mb-2" />
              <p className="text-sm text-gray-600">學生滿意度</p>
            </GradientCard>
          </div>
        </FadeInSection>

        {/* 時間軸展示 */}
        <FadeInSection delay={600}>
          <h2 className="text-3xl font-bold text-[#1A4C7A] mb-8 text-center">發展時間軸</h2>
          <GradientCard className="p-8">
            <Timeline>
              <TimelineItem date="2020年" title="系所成立">
                <p>中國文化大學行銷學系正式成立，開始招收第一屆學生，致力於培養現代行銷人才。</p>
              </TimelineItem>
              <TimelineItem date="2021年" title="課程革新">
                <p>引進數位行銷、消費者心理學等前沿課程，與業界接軌，提供學生最新的專業知識。</p>
              </TimelineItem>
              <TimelineItem date="2022年" title="產學合作">
                <p>與多家知名企業建立合作關係，提供學生實習機會，增強實務經驗。</p>
              </TimelineItem>
              <TimelineItem date="2023年" title="國際交流">
                <p>開始與海外學府進行學術交流，拓展學生的國際視野。</p>
              </TimelineItem>
            </Timeline>
          </GradientCard>
        </FadeInSection>

        {/* 引用區塊展示 */}
        <FadeInSection delay={800}>
          <h2 className="text-3xl font-bold text-[#1A4C7A] mb-8 text-center">引用文字區塊</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <QuoteBlock 
              author="張雅婷" 
              role="行銷學系大三學生"
              variant="default"
            >
              行銷系的課程讓我學會用數據分析消費者行為，邏輯推理能力大幅提升。老師會帶我們實作市場調查，讓理論與實務結合。
            </QuoteBlock>
            
            <QuoteBlock 
              author="李承諺" 
              role="109級畢業生・行銷分析師"
              variant="highlight"
            >
              文化行銷系強調消費心理與嚴謹決策，讓我在職場上能精準分析市場趨勢。學習期間參與的專案實作，累積了寶貴經驗。
            </QuoteBlock>
          </div>
        </FadeInSection>

        {/* 進度指示器展示 */}
        <FadeInSection delay={1000}>
          <h2 className="text-3xl font-bold text-[#1A4C7A] mb-8 text-center">進度指示器</h2>
          <GradientCard className="p-8 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-[#1A4C7A]">課程完成度</span>
                <span className="text-sm text-gray-500">85%</span>
              </div>
              <ProgressIndicator value={85} variant="default" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-[#1A4C7A]">實習進度</span>
                <span className="text-sm text-gray-500">70%</span>
              </div>
              <ProgressIndicator value={70} variant="gradient" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-[#1A4C7A]">專題研究</span>
                <span className="text-sm text-gray-500">92%</span>
              </div>
              <ProgressIndicator value={92} variant="glow" />
            </div>
          </GradientCard>
        </FadeInSection>

        {/* 按鈕組件展示 */}
        <FadeInSection delay={1200}>
          <h2 className="text-3xl font-bold text-[#1A4C7A] mb-8 text-center">增強版按鈕</h2>
          <GradientCard className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <EnhancedButton variant="default">
                預設按鈕
              </EnhancedButton>
              
              <EnhancedButton variant="gradient" leftIcon={<Sparkles className="w-4 h-4" />}>
                漸層按鈕
              </EnhancedButton>
              
              <EnhancedButton variant="glow" animation="pulse">
                發光按鈕
              </EnhancedButton>
              
              <EnhancedButton variant="outline" animation="ripple">
                外框按鈕
              </EnhancedButton>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <EnhancedButton variant="default" size="sm">
                小尺寸
              </EnhancedButton>
              
              <EnhancedButton variant="gradient" size="lg">
                大尺寸按鈕
              </EnhancedButton>
              
              <EnhancedButton variant="glow" size="xl">
                超大尺寸按鈕
              </EnhancedButton>
            </div>
          </GradientCard>
        </FadeInSection>

        {/* 圖片組件展示 */}
        <FadeInSection delay={1400}>
          <h2 className="text-3xl font-bold text-[#1A4C7A] mb-8 text-center">優雅圖片組件</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-[#1A4C7A] mb-4 text-center">圓角樣式</h3>
              <ElegantImage
                src="/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png"
                alt="範例圖片"
                variant="rounded"
                className="aspect-[4/3]"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[#1A4C7A] mb-4 text-center">卡片樣式</h3>
              <ElegantImage
                src="/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png"
                alt="範例圖片"
                variant="card"
                overlay={true}
                className="aspect-[4/3]"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[#1A4C7A] mb-4 text-center">圓形樣式</h3>
              <ElegantImage
                src="/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png"
                alt="範例圖片"
                variant="circle"
                className="w-48 h-48 mx-auto"
              />
            </div>
          </div>
        </FadeInSection>

      </div>
    </div>
  );
};

export default UIShowcase;