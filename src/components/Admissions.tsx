
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  const admissionTypes = [
    {
      title: "大學部招生",
      description: "培養具備品牌思維的行銷專業人才",
      features: [
        "四年完整學程規劃",
        "產學合作實習機會",
        "海外交換學習計畫",
        "專業證照輔導"
      ],
      color: "from-blue-500 to-indigo-600",
      highlight: "學士學位"
    },
    {
      title: "研究所招生",
      description: "深化行銷理論與研究能力",
      features: [
        "論文指導與研究訓練",
        "學術研討會參與",
        "業界專題合作",
        "國際期刊發表指導"
      ],
      color: "from-green-500 to-emerald-600",
      highlight: "碩士學位"
    },
    {
      title: "學碩一貫方案",
      description: "五年取得學士與碩士雙學位",
      features: [
        "縮短修業年限",
        "連貫學習規劃",
        "優先選課權利",
        "研究能力培養"
      ],
      color: "from-orange-500 to-red-600",
      highlight: "雙學位"
    }
  ];

  const careerPaths = [
    { title: "品牌行銷專員", company: "知名消費品牌", salary: "35K-50K" },
    { title: "數位行銷經理", company: "電商平台", salary: "45K-70K" },
    { title: "市場研究分析師", company: "市調公司", salary: "40K-60K" },
    { title: "行銷企劃主管", company: "大型企業", salary: "60K-100K" },
    { title: "品牌策略顧問", company: "顧問公司", salary: "50K-80K" },
    { title: "社群媒體經理", company: "新創公司", salary: "35K-55K" }
  ];

  const scholarships = [
    {
      name: "優秀新生獎學金",
      amount: "NT$ 50,000",
      criteria: "學測成績優異"
    },
    {
      name: "清寒助學金",
      amount: "NT$ 30,000",
      criteria: "家庭經濟需要"
    },
    {
      name: "研究獎助金",
      amount: "NT$ 20,000/月",
      criteria: "研究生專用"
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              入學與未來<span className="text-orange-500"></span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              多元的入學管道與完善的教育資源，為你的行銷職涯奠定堅實基礎
            </p>
          </div>

          {/* Admission types */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {admissionTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className={`h-32 bg-gradient-to-br ${type.color} flex items-center justify-center relative`}>
                  <div className="text-center text-white">
                    <Badge className="bg-white/20 text-white border-white/30 mb-2">
                      {type.highlight}
                    </Badge>
                    <h3 className="text-xl font-bold">{type.title}</h3>
                  </div>
                </div>
                
                <CardHeader>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                    了解更多
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Career paths */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
              職涯發展方向
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerPaths.map((career, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-b from-white to-slate-50">
                  <CardContent className="pt-6 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-800">{career.title}</h4>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {career.salary}
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm">{career.company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Scholarships and support */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">獎助學金</CardTitle>
                <CardDescription>多元的財務支援方案</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scholarships.map((scholarship, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <h4 className="font-medium text-slate-800">{scholarship.name}</h4>
                        <p className="text-slate-600 text-sm">{scholarship.criteria}</p>
                      </div>
                      <Badge className="bg-blue-500 text-white">
                        {scholarship.amount}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">入學支援</CardTitle>
                <CardDescription>完善的新生輔導機制</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-slate-800">學長姐輔導制度</h4>
                      <p className="text-slate-600 text-sm">一對一新生輔導與生活協助</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-slate-800">職涯規劃諮詢</h4>
                      <p className="text-slate-600 text-sm">專業的職涯發展指導服務</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-slate-800">實習媒合服務</h4>
                      <p className="text-slate-600 text-sm">與知名企業合作的實習機會</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-slate-800">就業輔導活動</h4>
                      <p className="text-slate-600 text-sm">履歷撰寫與面試技巧指導</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA section */}
          <Card className="bg-gradient-to-r from-blue-900 to-slate-800 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">準備好加入我們了嗎？</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                立即報名參加我們的招生說明會，深入了解系所特色與未來發展機會
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                  立即報名說明會
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                  下載招生簡章
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
