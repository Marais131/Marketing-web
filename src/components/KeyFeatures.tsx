import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "獨特課程架構",
    subtitle: "結合心理學、邏輯學與電商實戰",
    description: "我們打造了獨一無二的課程體系，以心理學洞察消費者、以邏輯學建構嚴謹策略，並透過電商實戰課程，讓學生在真實市場中學習，培養全方位的品牌行銷能力。",
    points: [
      "心理學打底：洞察消費者與商機",
      "邏輯學思維：改造思想方式",
      "電商實戰：業師帶領，邊做邊學",
    ],
    // 圖片路徑改用使用者上傳正確圖檔
    image: "/lovable-uploads/d3bb2780-7b61-43e4-b4e3-972e02c9080f.png",
    imageAlt: "課程架構圖",
    align: "right"
  },
  {
    title: "明確職涯發展",
    subtitle: "五年學碩一貫，直通理想職位",
    description: "我們提供「4+1學碩一貫」計畫與清晰的「職業角色定位」，幫助學生無縫接軌研究所，並在五年內取得碩士學位，快速成為業界渴求的品牌經理、產品經理或數位行銷專家。",
    points: [
        "4+1計畫：5年完成學士+碩士",
        "職業角色定位：聚焦品牌端(甲方)人才",
        "高就業率：畢業即戰力",
    ],
    image: "/lovable-uploads/d765d1d6-444b-4bfe-9856-74ed5e61a8ef.png",
    imageAlt: "職涯發展路徑圖",
    align: "left"
  }
];

const KeyFeatures = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* T型人才區說明＋四大能力條列 */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex flex-col gap-2 md:items-center md:text-center">
            <h3 className="text-xl font-bold text-orange-600 mb-1">什麼是 T 型人才？</h3>
            <div className="text-base md:text-lg text-slate-700 mb-1">
              T 型人才意指同時擁有一項專精領域（垂直能力）與多元廣度知能（水平能力），
              是新時代決策型品牌行銷人的最佳典範。<br />
              <span className="font-semibold text-blue-600">本系以 T 型養成為主軸，聚焦四大核心能力：</span>
            </div>
          </div>
          {/* 四大能力條列 */}
          <ul className="mt-4 grid gap-2 md:gap-0 grid-cols-1 md:grid-cols-2">
            <li className="flex items-start gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <span>
                <b>行銷基石知能</b>：品牌管理、促銷設計、通路經營等策略規劃能力
              </span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <span>
                <b>消費者洞察力</b>：心理行為研究、需求挖掘、數據分析
              </span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <span>
                <b>企劃與執行力</b>：邏輯規劃、專案管理、資源協作落實品牌專案
              </span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <span>
                <b>創新／創意思維</b>：美感訓練、內容敘事、跨界創新
              </span>
            </li>
          </ul>
        </div>
        {/* 原本的標題區與 features 區塊 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            打造你的<span className="text-blue-600">行銷超能力</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            我們提供的不僅是知識，更是一套讓你脫穎而出的完整裝備。
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <div className={`relative ${feature.align === 'left' ? 'lg:order-2' : ''}`}>
                 <img src={feature.image} alt={feature.imageAlt} className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
              </div>
              <div className={`space-y-6 ${feature.align === 'left' ? 'lg:order-1' : ''}`}>
                <Badge className="bg-blue-100 text-blue-700 text-base px-4 py-1 rounded-full">{feature.subtitle}</Badge>
                <h3 className="text-3xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
