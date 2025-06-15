
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Teacher = {
  name: string;
  title: string;
  role: string;
  imgUrl?: string;
  description: string;
};

interface FeaturedTeachersCardProps {
  teachers: Teacher[];
}

const FeaturedTeachersCard = ({ teachers }: FeaturedTeachersCardProps) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
    {teachers.map((teacher, idx) => (
      <Card key={teacher.name} className="border-orange-200 bg-white shadow hover:shadow-lg transition">
        <CardContent className="flex flex-col items-center py-8 px-6">
          <Avatar className="w-24 h-24 mb-4 border-4 border-orange-100 shadow">
            {teacher.imgUrl ? (
              <AvatarImage
                src={teacher.imgUrl}
                alt={teacher.name}
                className="object-cover"
              />
            ) : (
              <AvatarFallback className="text-2xl bg-orange-200">{teacher.name[0]}</AvatarFallback>
            )}
          </Avatar>
          <div className="text-xl font-bold text-slate-800 mb-1">{teacher.name}</div>
          <div className="text-orange-600 mb-1">{teacher.role}</div>
          <div className="text-slate-500 mb-2">{teacher.title}</div>
          <div className="text-sm text-slate-600 text-center">{teacher.description}</div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default FeaturedTeachersCard;
