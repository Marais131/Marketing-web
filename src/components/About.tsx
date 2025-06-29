import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Trophy, Users, Target, BookOpen, CheckCircle, Lightbulb, TrendingUp, Award, Globe, Briefcase, Building } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 w-full">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* 主標題區 - 簡化 */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            中國文化大學行銷學士學位學程
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            四環能力導向課程設計
          </p>
          <div className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            <p>
              本系以<span className="font-bold text-blue-700">「品牌／產品端（甲方）思維」</span>為唯一定位，
              將行銷人應具備的專業拆解為四大核心能力，所有課程皆環繞這四環能力鋪排。
            </p>
          </div>
        </div>

        {/* 四大核心能力 - 簡化設計 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            四大核心能力
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "行銷基石專業",
                description: "奠定策略語言與管理思維",
                icon: Target,
                color: "blue"
              },
              {
                title: "消費者洞察力", 
                description: "從心理機制到研究方法",
                icon: Users,
                color: "green"
              },
              {
                title: "企劃與執行力",
                description: "把洞察轉化為可衡量的行動", 
                icon: TrendingUp,
                color: "purple"
              },
              {
                title: "創新創意思維",
                description: "用差異化內容與美感放大價值",
                icon: Lightbulb,
                color: "orange"
              }
            ].map((ability, index) => (
              <div
                key={ability.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${ability.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                    <ability.icon className={`w-6 h-6 text-${ability.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{ability.title}</h3>
                    <p className="text-slate-600">{ability.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 教學特色 - 簡化 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            教學特色
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "PBL 問題導向", desc: "實務題解決", icon: BookOpen },
              { title: "RBL 研究導向", desc: "數據分析能力", icon: Target },
              { title: "EBL 體驗導向", desc: "實戰操作訓練", icon: TrendingUp },
              { title: "Rubric 評量", desc: "能力量化檢核", icon: Award }
            ].map((method, index) => (
              <div key={method.title} className="text-center p-6 bg-white rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{method.title}</h3>
                <p className="text-sm text-slate-600">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 就業前景 - 替換原來的課程成果展示 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            就業前景與發展
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">核心職位</h3>
              </div>
              <div className="space-y-3">
                {[
                  "品牌經理 Brand Manager",
                  "產品經理 Product Manager", 
                  "行銷企劃主管 Marketing Manager",
                  "數位行銷經理 Digital Marketing Manager",
                  "市場研究分析師 Market Research Analyst"
                ].map((job, idx) => (
                  <div key={idx} className="flex items-center text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    <span>{job}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">產業領域</h3>
              </div>
              <div className="space-y-3">
                {[
                  "消費品牌企業 FMCG",
                  "科技與電商平台 Tech & E-commerce",
                  "金融服務業 Financial Services", 
                  "零售通路業 Retail",
                  "廣告代理商 Advertising Agency"
                ].map((industry, idx) => (
                  <div key={idx} className="flex items-center text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 選修模組 - 簡化 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            專業選修模組
          </h2>
          
          <div className="bg-slate-50 rounded-xl p-8">
            <p className="text-center text-lg text-slate-700 mb-8">
              學生必須在以下模組自由組合至少 <span className="font-bold text-blue-700">12 學分</span>
            </p>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: "數位投放", color: "blue" },
                { title: "社群內容", color: "green" },
                { title: "電商經營", color: "purple" },
                { title: "數據研究", color: "orange" },
                { title: "策略管理", color: "red" }
              ].map((module, index) => (
                <div key={module.title} className="bg-white rounded-lg p-4 text-center shadow-sm border border-slate-100">
                  <div className={`w-8 h-8 bg-${module.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <span className={`text-${module.color}-600 font-bold text-sm`}>{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-slate-800">{module.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 結語 - 簡化 */}
        <div className="text-center">
          <div className="bg-slate-900 rounded-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">完整培育體系</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              透過四環能力模型與系統化課程設計，培養具備品牌端思維的專業行銷人才
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 rounded-full px-4 py-2 text-slate-200">品牌端思維</span>
              <span className="bg-white/10 rounded-full px-4 py-2 text-slate-200">核心素養</span>
              <span className="bg-white/10 rounded-full px-4 py-2 text-slate-200">實戰能力</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
