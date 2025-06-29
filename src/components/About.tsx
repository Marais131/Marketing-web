import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Trophy, Users, Target, BookOpen, CheckCircle, Lightbulb, TrendingUp, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50 w-full">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* 主標題區 */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
            中國文化大學行銷學士學位學程
          </h1>
          <p className="text-2xl md:text-3xl text-slate-700 font-medium mb-6">
            四環能力導向課程設計全貌
          </p>
          <div className="max-w-4xl mx-auto text-lg text-slate-600 leading-relaxed">
            <p className="mb-4">
              本系以<span className="font-bold text-blue-700">「品牌／產品端（甲方）思維」</span>為唯一定位，
              將行銷人應具備的專業拆解為四大核心能力。
            </p>
            <p>
              所有課程皆環繞這四環能力鋪排，象徵能力環環相扣的完整培育體系。
            </p>
          </div>
        </div>

        {/* 核心理念 */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">課程設計的核心理念</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-blue-300">行銷基石專業</h3>
                        <p className="text-blue-100">奠定策略語言與管理思維</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-green-300">消費者洞察力</h3>
                        <p className="text-green-100">從心理機制到研究方法</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-purple-300">企劃與執行力</h3>
                        <p className="text-purple-100">把洞察轉化為可衡量的行動</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-orange-300">創新與創意思維</h3>
                        <p className="text-orange-100">用差異化內容與美感放大價值</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="relative">
                    {/* 四環能力視覺化 */}
                    <div className="w-80 h-80 mx-auto relative">
                      <div className="absolute inset-0 rounded-full border-4 border-blue-400/30"></div>
                      <div className="absolute inset-4 rounded-full border-4 border-green-400/30"></div>
                      <div className="absolute inset-8 rounded-full border-4 border-purple-400/30"></div>
                      <div className="absolute inset-12 rounded-full border-4 border-orange-400/30"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-md rounded-full w-32 h-32 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">行銷人</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-200 mt-6 text-lg">
                    四環能力環環相扣，打造完整行銷專業人才
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 教學方法與評量機制 */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
            教學方法與評量機制
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">PBL 問題導向學習</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                核心必修課均嵌入實務題，要求學生用行銷流程解題，培養實戰思維。
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">RBL 研究導向學習</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                研究方法課須完成問卷設計、實驗方案、數據分析報告，培養研究能力。
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">EBL 體驗導向學習</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                數位實戰課程採「理論—實操—簡報」三段制，以投放轉換指標評分。
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Rubric 評量</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                四環能力拆解為若干指標，在專題、簡報、作品集中量化檢核。
              </p>
            </div>
          </div>
        </div>

        {/* 橫向彈性選修模組 */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
            橫向彈性：選修模組化策略
          </h2>
          
          <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl p-8">
            <p className="text-center text-lg text-slate-700 mb-8">
              學生必須在以下模組自由組合至少 <span className="font-bold text-blue-700">12 學分</span>，
              每門課均標註可能銜接的證照與職務
            </p>
            
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { title: "數位投放", color: "blue", courses: ["Google廣告投放", "FB廣告投放", "網路廣告投放"] },
                { title: "社群內容", color: "green", courses: ["社群行銷實戰", "創意文案設計", "網路直播企劃"] },
                { title: "電商經營", color: "purple", courses: ["跨境電商實戰", "微商實戰", "顧客關係管理"] },
                { title: "數據研究", color: "orange", courses: ["網路數據分析", "市場調查", "實驗設計"] },
                { title: "策略管理", color: "red", courses: ["策略管理", "新產品開發", "品牌管理"] }
              ].map((module, index) => (
                <div key={module.title} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50">
                  <div className={`w-12 h-12 bg-${module.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                    <span className={`text-${module.color}-600 font-bold text-lg`}>{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-800">{module.title}</h3>
                  <div className="space-y-1">
                    {module.courses.map((course, idx) => (
                      <div key={idx} className="text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 課程成果展示 */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
            課程成果展示與學習歷程
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200/50">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">實戰課程作品</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                每門實戰課至少產生一次公開簡報或作品集條目，累積完整學習歷程。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">作品集</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">公開簡報</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200/50">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">行銷專題製作</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                整合洞察、策略、創意、執行、成效報表為完整商業企畫書。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">10分鐘簡報</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">5分鐘QA</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200/50">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">成果展 Week</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                系上定期舉辦成果展，大三至大四學生展示研究或專案，低年級觀摩學習。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">研究展示</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">專案分享</span>
              </div>
            </div>
          </div>
        </div>

        {/* 結語 */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">完整閉環培育體系</h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                透過「基石—洞察—執行—創意」四環模型與縱橫交織的課程設計，
                在八學期中完成「理論輸入→研究驗證→實戰演練→專題整合」的完整閉環。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-100">品牌端行銷思維</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-100">核心素養培育</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-100">落地執行能力</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
