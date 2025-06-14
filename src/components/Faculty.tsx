
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const Faculty = () => {
  return (
    <section id="faculty" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/e29a8a81-d10a-47d0-a7d5-244e43e72f91.png" 
              alt="師資團隊" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-800">
              頂尖師資，<span className="text-orange-500">實戰引航</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              我們的教授不僅是學者，更是經驗豐富的業界專家。他們將帶領你走在行銷最前線，學習最真實的商業戰略。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <Card className="bg-orange-50/50 border-orange-200/50">
                <CardContent className="pt-6 flex items-start space-x-4">
                  <GraduationCap className="w-8 h-8 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">學術與實務並重</h3>
                    <p className="text-slate-600">教授具備博士學位與豐富業界經驗。</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-50/50 border-blue-200/50">
                <CardContent className="pt-6 flex items-start space-x-4">
                  <Briefcase className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">產學緊密連結</h3>
                    <p className="text-slate-600">提供大量實習機會與企業合作案。</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;

