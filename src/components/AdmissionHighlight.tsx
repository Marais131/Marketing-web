
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Book, Users } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "大學部",
    bg: "bg-gradient-to-br from-[#2563eb] to-[#1647a3]", // 更明顯藍底
    iconBg: "bg-gradient-to-br from-[#388bfd] to-[#1e40af]", // 同時加強icon背景
    titleColor: "text-[#1346b8]", // 以深藍強顯
    shadow: "shadow-[0_2px_24px_#2563eb99]", // 對主標題用色陰影
    bulletColor: "text-[#19498e] font-bold",
  },
  {
    icon: Book,
    title: "研究所",
    bg: "bg-gradient-to-br from-[#18b68a] to-[#076c46]", // 更飽和綠底
    iconBg: "bg-gradient-to-br from-[#27d7a7] to-[#0e6356]",
    titleColor: "text-[#077a4a]",
    shadow: "shadow-[0_2px_24px_#08987e99]",
    bulletColor: "text-[#10745a] font-bold",
  },
  {
    icon: Users,
    title: "4+1學碩一貫",
    bg: "bg-gradient-to-br from-[#ff502a] to-[#c02c06]",
    iconBg: "bg-gradient-to-br from-[#ff8255] to-[#bc2915]",
    titleColor: "text-[#b7361c]",
    shadow: "shadow-[0_2px_24px_#ff502a99]",
    bulletColor: "text-[#b8231d] font-bold",
  }
];

const AdmissionHighlight = () => (
  <section className="relative py-14 bg-gradient-to-br from-slate-50 via-white to-blue-100 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-slate-900 via-orange-600 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(32,56,126,.18)]">
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
            className={`${item.bg} rounded-[2.8rem] shadow-2xl border-0 transition-all duration-300 min-h-[470px] flex flex-col items-center justify-start`}
            style={{ boxShadow: "0 12px 50px 0 rgba(40,64,205,0.18), 0 1.5px 0 #fff" }}
          >
            <CardContent className="w-full flex-1 flex flex-col items-center pt-12 px-10 pb-12">
              {/* Icon Block (雙重陰影 + 更大圓角) */}
              <div
                className={`w-24 h-24 ${item.iconBg} rounded-3xl flex items-center justify-center mb-7 mx-auto`}
                style={{
                  filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.21)) drop-shadow(0 0px 0 #fff7)",
                  boxShadow: "0 8px 44px 0 #ffffffcc, 0 .5px 0 #fff7"
                }}
              >
                <item.icon className="w-12 h-12 text-white" />
              </div>
              {/* Title (大字/粗體/主題色/深陰影) */}
              <div
                className={`font-extrabold text-4xl md:text-5xl mb-8 ${item.titleColor} ${item.shadow}`}
                style={{
                  letterSpacing: "0.04em",
                  textShadow: "0 4px 22px #fff8, 0 .5px 0 #f9fafd, 0 2px 12px #0004"
                }}
              >
                {item.title}
              </div>
              {/* Points (明顯主色/粗體/大字) */}
              <ul className="w-full text-left space-y-7">
                {[
                  "品牌端思維教學，全台唯一",
                  "四年完整學程與國際接軌",
                  "高產學實習、海內外交換",
                  "升學直通車、就業率高"
                ].map((p, idx) =>
                  i === 0 ? (
                    <li key={idx} className="flex items-start gap-3 text-[1.22rem] leading-relaxed font-[650] text-[#2257bc]">
                      <span className="w-2.5 h-2.5 mt-2 rounded-full bg-white/90 flex-shrink-0 border border-blue-100"></span>
                      <span>{p}</span>
                    </li>
                  ) : null
                )}
                {[
                  "專注研究、實作並重",
                  "論文與產業專題並行",
                  "碩士學歷提升職場競爭力",
                  "業界專題&國際期刊指導"
                ].map((p, idx) =>
                  i === 1 ? (
                    <li key={idx} className="flex items-start gap-3 text-[1.22rem] leading-relaxed font-[670] text-[#07795a]">
                      <span className="w-2.5 h-2.5 mt-2 rounded-full bg-white/90 flex-shrink-0 border border-emerald-100"></span>
                      <span>{p}</span>
                    </li>
                  ) : null
                )}
                {[
                  "五年獲雙學位、縮短年限",
                  "大四即可抵免碩士課程學費",
                  "學歷/競爭力一次升等",
                  "碩士接軌職場，進路明確"
                ].map((p, idx) =>
                  i === 2 ? (
                    <li key={idx} className="flex items-start gap-3 text-[1.22rem] leading-relaxed font-[670] text-[#bd351c]">
                      <span className="w-2.5 h-2.5 mt-2 rounded-full bg-white/90 flex-shrink-0 border border-orange-100"></span>
                      <span>{p}</span>
                    </li>
                  ) : null
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
