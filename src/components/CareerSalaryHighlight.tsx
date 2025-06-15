
import { Badge } from "@/components/ui/badge";
import { Briefcase, DollarSign } from "lucide-react";

const CAREERS = [
  {
    title: "品牌行銷專員",
    company: "消費品牌",
    salary: "35K-50K",
  },
  {
    title: "數位行銷經理",
    company: "電商平台",
    salary: "45K-70K",
  },
  {
    title: "市場研究分析師",
    company: "市調公司",
    salary: "40K-60K",
  },
  {
    title: "行銷企劃主管",
    company: "大型企業",
    salary: "60K-100K",
  },
  {
    title: "品牌策略顧問",
    company: "顧問公司",
    salary: "50K-80K",
  },
  {
    title: "社群媒體經理",
    company: "新創公司",
    salary: "35K-55K",
  }
];

const CareerSalaryHighlight = () => {
  return (
    <section className="py-9 md:py-12 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-6 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
            <Briefcase className="w-6 h-6 text-orange-500" />
            <span className="text-lg md:text-xl font-semibold text-orange-600">
              行銷專業職涯 × 薪資亮點
            </span>
            <DollarSign className="w-5 h-5 text-yellow-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-3">
            多元行銷職涯選擇，畢業起薪最高<span className="text-teal-600"> 月薪10萬</span>
          </h2>
          <div className="text-base md:text-lg text-slate-600">
            本系畢業生涵蓋消費品牌、科技平台、大型企管等各領域，職涯薪資水準領先業界
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-7">
          {CAREERS.map((career, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/80 border border-orange-100 shadow hover:shadow-lg transition p-5 flex flex-col items-center"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-blue-700 text-lg">{career.title}</span>
                <Badge variant="outline" className="border-teal-200 text-teal-600 text-xs px-2">
                  {career.company}
                </Badge>
              </div>
              <div className="text-[15px] text-slate-600 mb-1">畢業起薪區間</div>
              <div className="text-2xl font-extrabold text-orange-500 flex items-center">
                <DollarSign className="w-4 h-4 mr-1" />
                {career.salary}
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm text-slate-500 text-center mt-5">
          * 薪資數據參考於過去畢業生調查及業界招募行情，實際待遇會因職缺、地區、公司規模及個人表現不同
        </div>
      </div>
    </section>
  );
};

export default CareerSalaryHighlight;

