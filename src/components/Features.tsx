
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building } from "lucide-react";

const features = [
  {
    title: "行銷美學",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    color: "from-pink-400/70 to-rose-400/10",
    accent: "bg-pink-100/60 text-pink-700",
    oneLiner: "視覺設計融合創意，打造品牌美學。",
    tags: ["美感設計", "創意思考", "品牌視覺"],
  },
  {
    title: "數位行銷實務",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    color: "from-cyan-400/60 to-blue-400/5",
    accent: "bg-cyan-100/70 text-cyan-700",
    oneLiner: "結合最新工具與平台，社群實作一把罩。",
    tags: ["社群經營", "內容行銷", "數據分析"],
  },
  {
    title: "消費者心理學",
    img: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=800&auto=format&fit=crop",
    color: "from-purple-400/70 to-violet-400/10",
    accent: "bg-purple-100/80 text-purple-700",
    oneLiner: "洞察消費動機，科學化決策才是真行銷。",
    tags: ["行為分析", "心理洞察", "市場研究"],
  },
  {
    title: "學術研討・業界連結",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-400/70 to-teal-400/10",
    accent: "bg-blue-100/60 text-blue-700",
    oneLiner: "學研業界並進，實踐與理論同步走。",
    tags: ["學術交流", "企業導師", "實習媒合"],
  },
];

const specialPrograms = [
  {
    icon: GraduationCap,
    title: "學碩一貫方案",
    subtitle: "五年拿雙學位，領先規劃職涯",
    bg: "from-orange-400/90 to-red-400/70",
    bullets: [
      "縮短修業年限，提早進入職場",
      "彈性選課，研究力養成",
      "校推薦優錄，獨家保障"
    ]
  },
  {
    icon: Building,
    title: "產學合作計畫",
    subtitle: "業界攜手，專案實戰經驗",
    bg: "from-blue-400/90 to-slate-700/80",
    bullets: [
      "大廠/新創專案合作",
      "實習媒合，職涯銜接",
      "企業導師一對一輔導"
    ]
  }
];

const Features = () => {
  return (
    <section className="py-24 md:py-40 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      {/* 動態背景 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(249,115,22,0.045),transparent_60%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-8xl mx-auto">
          {/* 精簡大標 */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-gradient-to-r from-teal-100 to-blue-50 text-teal-700 border border-teal-200/30 px-8 py-3 rounded-full mb-7 font-medium text-lg">
              教學特色精華
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-teal-800 bg-clip-text text-transparent tracking-tight">
              色彩・活潑・實戰
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
              精選特色內容、豐富圖像，讓你一眼看懂本系精髓
            </p>
          </div>

          {/* 教學特色－大圖拼貼 */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-24">
            {features.map((f, idx) => (
              <div
                key={f.title}
                className={`group flex flex-col-reverse md:flex-col ${idx % 2 === 1 ? "md:justify-end" : ""} relative animate-fade-in`}
                style={{ animationDelay: `${0.05 + idx * 0.13}s`, animationFillMode: "both" }}
              >
                <Card className={`relative overflow-hidden border-0 bg-gradient-to-br ${f.color} shadow-xl group-hover:scale-105 transition-transform duration-500 min-h-[315px]`}>
                  <div className="absolute inset-0">
                    <img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent"></div>
                  </div>
                  <CardHeader className="relative z-10 p-8 pb-6">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 drop-shadow">{f.title}</CardTitle>
                    <div className="text-[1.09rem] text-slate-800 mb-6 font-medium">{f.oneLiner}</div>
                  </CardHeader>
                  <CardContent className="relative z-10 px-8 pb-7 flex flex-wrap gap-3">
                    {f.tags.map((tag, i) => (
                      <Badge key={i} className={`rounded-full text-base ${f.accent} px-5 py-2 font-semibold`}>{tag}</Badge>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* 主計畫區塊 */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            {specialPrograms.map((s, i) => (
              <Card key={i} className={`relative border-0 text-white rounded-[2rem] overflow-hidden bg-gradient-to-br ${s.bg} shadow-2xl hover:scale-105 transition-transform duration-500`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.07),transparent_67%)]"></div>
                <CardHeader className="relative z-10 p-10 pb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 border border-white/25">
                    <s.icon className="w-9 h-9 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-2 drop-shadow">{s.title}</CardTitle>
                  <div className="text-lg text-white/90 mb-4">{s.subtitle}</div>
                </CardHeader>
                <CardContent className="relative z-10 p-10 pt-0">
                  <div className="space-y-3">
                    {s.bullets.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <div className="w-2.5 h-2.5 bg-white rounded-full" />
                        <span className="text-white/90 text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
