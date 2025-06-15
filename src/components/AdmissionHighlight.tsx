
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Book, Users } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "大學部",
    border: "border-blue-400",
    iconBg: "bg-gradient-to-br from-blue-100 to-blue-200",
    iconRing: "ring-2 ring-blue-400/60",
    text: "text-slate-800",
    bullet: "text-slate-700",
    accent: "text-blue-700",
  },
  {
    icon: Book,
    title: "研究所",
    border: "border-emerald-400",
    iconBg: "bg-gradient-to-br from-green-100 to-green-200",
    iconRing: "ring-2 ring-emerald-400/60",
    text: "text-slate-800",
    bullet: "text-slate-700",
    accent: "text-emerald-700",
  },
  {
    icon: Users,
    title: "4+1學碩一貫",
    border: "border-orange-400",
    iconBg: "bg-gradient-to-br from-orange-100 to-orange-200",
    iconRing: "ring-2 ring-orange-400/60",
    text: "text-slate-800",
    bullet: "text-slate-700",
    accent: "text-orange-700",
  }
];

const points = [
  [
    "品牌端思維教學，全台唯一",
    "四年完整學程與國際接軌",
    "高產學實習、海內外交換",
    "升學直通車、就業率高"
  ],
  [
    "專注研究、實作並重",
    "論文與產業專題並行",
    "碩士學歷提升職場競爭力",
    "業界專題&國際期刊指導"
  ],
  [
    "五年獲雙學位、縮短年限",
    "大四即可抵免碩士課程學費",
    "學歷/競爭力一次升等",
    "碩士接軌職場，進路明確"
  ]
];

const AdmissionHighlight = () => (
  <section className="relative py-14 bg-gradient-to-br from-slate-50 via-white to-blue-100 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-6xl font-black mb-4 text-slate-900 drop-shadow-[0_4px_20px_rgba(40,40,40,0.15)]">
          成就未來起點，為家長把關
        </h2>
        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
          從學士到碩士，提供全方位進路，助力學子「學歷+競爭力」雙提升<br />
          <span className="font-semibold text-orange-500">– 首重家長與學生最在乎的實用發展 –</span>
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-8">
        {highlights.map((item, i) => (
          <Card
            key={i}
            className={`
              bg-white 
              ${item.border}
              border-2
              rounded-[2.2rem] 
              shadow-xl 
              flex flex-col items-center 
              transition-transform duration-300 min-h-[440px]
              hover:scale-105
            `}
            style={{ boxShadow: "0 8px 40px 0 rgba(40,64,205,0.11), 0 1.5px 0 #fff" }}
          >
            <CardContent className="w-full flex-1 flex flex-col items-center pt-10 pb-10 px-8">
              {/* Icon Block with color shadow */}
              <div
                className={`
                  w-20 h-20 ${item.iconBg} ${item.iconRing}
                  rounded-2xl flex items-center justify-center mb-7 mx-auto shadow-lg
                `}
                style={{
                  boxShadow: "0 6px 28px 0 #526bfa18, 0 .5px 0 #fff7"
                }}
              >
                <item.icon className="w-10 h-10 text-slate-700" />
              </div>
              {/* Title */}
              <div
                className={`font-extrabold text-3xl md:text-4xl mb-6 ${item.text} transition-colors`}
                style={{
                  letterSpacing: "0.03em",
                  textShadow: "0 2px 12px #fff6, 0 .5px 0 #f9fafc"
                }}
              >
                {item.title}
              </div>
              {/* Points */}
              <ul className="w-full text-left space-y-5 mt-1">
                {points[i].map((p, idx) =>
                  <li key={idx} className={`flex items-start gap-3 text-lg md:text-xl leading-relaxed font-bold ${item.bullet}`}>
                    <span className={`w-2.5 h-2.5 mt-2 rounded-full
                        ${item.accent} bg-opacity-80 bg-opacity-30 flex-shrink-0 border border-gray-200`}
                          style={{ background: "white" }}
                        ></span>
                    <span>
                      {p.includes("品牌") || p.includes("雙學位") || p.includes("論文")
                        ? <span className={item.accent}>{p}</span>
                        : p}
                    </span>
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default AdmissionHighlight;
