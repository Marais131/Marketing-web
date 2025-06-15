
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookUser, Users } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "大學部",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-400/50",
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
    color: "from-green-500 to-emerald-600",
    shadow: "shadow-emerald-400/50",
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
    color: "from-orange-500 to-red-500",
    shadow: "shadow-orange-400/50",
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
        <Badge className="bg-gradient-to-r from-orange-50 to-blue-50 text-orange-700 border border-orange-200/50 px-6 py-2 rounded-full mb-6 font-medium text-lg">
          招生亮點一覽
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-slate-900 via-orange-600 to-blue-600 bg-clip-text text-transparent">
          成就未來起點，為家長把關
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          從學士到碩士，提供全方位進路，助力學子「學歷+競爭力」雙提升<br />
          <span className="font-semibold text-orange-500">– 首重家長與學生最在乎的實用發展 –</span>
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-6">
        {highlights.map((item, i) => (
          <Card
            key={i}
            className={`
              group border-0 rounded-3xl
              bg-gradient-to-br ${item.color} shadow-2xl ${item.shadow} 
              hover:scale-105 transition-transform duration-300 min-h-[430px]
            `}
          >
            <CardContent className="flex flex-col items-center pt-10 px-8 pb-8 h-full">
              <div
                className={`
                  w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-7
                  bg-white bg-opacity-15
                  backdrop-blur-[2px]
                  shadow-xl ${item.shadow}
                  `}
                style={{
                  background:
                    item.color === "from-blue-500 to-indigo-600"
                      ? "linear-gradient(135deg, #3b82f6 30%, #6366f1 100%)"
                      : item.color === "from-green-500 to-emerald-600"
                      ? "linear-gradient(135deg, #22c55e 30%, #10b981 100%)"
                      : "linear-gradient(135deg, #f97316 30%, #ef4444 100%)"
                }}
              >
                <item.icon className="w-11 h-11 md:w-12 md:h-12 text-white drop-shadow-lg" />
              </div>
              <div className="font-black text-2xl md:text-3xl mb-4 text-white drop-shadow-lg">
                {item.title}
              </div>
              <ul className="text-white text-left space-y-3 text-lg font-semibold list-disc list-inside drop-shadow-md">
                {item.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
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

