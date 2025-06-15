
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookUser, Users } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "大學部",
    bg: "bg-gradient-to-br from-[#2965d6] to-[#123a99]",
    iconBg: "bg-gradient-to-br from-[#3279ef] to-[#174ec8]",
    textColor: "text-blue-900",
    bulletColor: "bg-white/80",
    points: [
      "品牌端思維教學，全台唯一",
      "四年完整學程與國際接軌",
      "高產學實習、海內外交換",
      "升學直通車、就業率高"
    ]
  },
  {
    icon: BookUser,
    title: "研究所",
    bg: "bg-gradient-to-br from-[#19bb8f] to-[#0d7557]",
    iconBg: "bg-gradient-to-br from-[#12e3ae] to-[#10976a]",
    textColor: "text-emerald-900",
    bulletColor: "bg-white/80",
    points: [
      "專注研究、實作並重",
      "論文與產業專題並行",
      "碩士學歷提升職場競爭力",
      "業界專題&國際期刊指導"
    ]
  },
  {
    icon: Users,
    title: "4+1學碩一貫",
    bg: "bg-gradient-to-br from-[#fe6337] to-[#be1e1e]",
    iconBg: "bg-gradient-to-br from-[#ff935e] to-[#b22e25]",
    textColor: "text-orange-900",
    bulletColor: "bg-white/80",
    points: [
      "五年獲雙學位、縮短年限",
      "大四即可抵免碩士課程學費",
      "學歷/競爭力一次升等",
      "碩士接軌職場，進路明確"
    ]
  }
];

const AdmissionHighlight = () => (
  <section className="relative py-14 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-slate-900 via-orange-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
          成就未來起點，為家長把關
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          從學士到碩士，提供全方位進路，助力學子「學歷+競爭力」雙提升<br />
          <span className="font-semibold text-orange-500">– 首重家長與學生最在乎的實用發展 –</span>
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-8">
        {highlights.map((item, i) => (
          <Card
            key={i}
            className={`${item.bg} rounded-3xl shadow-2xl border-0 group transition-all duration-300 min-h-[420px] flex flex-col items-center justify-start`}
            style={{ boxShadow: "0 8px 36px 0 rgba(44,75,150,.25)" }}
          >
            <CardContent className="w-full flex-1 flex flex-col items-center pt-8 px-8 pb-10">
              {/* Icon Block */}
              <div
                className={`w-20 h-20 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl`}
                style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.20))" }}
              >
                <item.icon className="w-10 h-10 text-white" />
              </div>
              {/* Title */}
              <div
                className={`font-black text-[2rem] md:text-[2.6rem] mb-7 ${item.textColor} drop-shadow-xl`}
                style={{
                  letterSpacing: "0.01em",
                  textShadow: "0 2px 10px #ffffff99, 0 .5px 0 #f5f6fa"
                }}
              >
                {item.title}
              </div>
              {/* Points */}
              <ul className="w-full text-left space-y-5">
                {item.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-lg font-bold text-blue-900 tracking-wide"
                  >
                    <span className={`w-2 h-2 mt-2 rounded-full ${item.bulletColor} flex-shrink-0 border border-blue-300`}></span>
                    <span className="">{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default AdmissionHighlight;
