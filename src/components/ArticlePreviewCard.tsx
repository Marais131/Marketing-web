
import { Calendar, User } from "lucide-react";

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image?: string;
}

export const sampleArticles: Article[] = [
  {
    id: 1,
    title: "品牌思維如何打造高競爭力行銷人？",
    excerpt: "從產業實戰分享品牌經營的關鍵，結合行銷心理與數據洞察，打開嶄新職涯視角。",
    author: "王大明 教授",
    date: "2024-05-30",
    category: "教師專欄",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&q=80",
  },
  {
    id: 2,
    title: "掌握消費者行為的三大心理技巧",
    excerpt: "用案例解析如何破解消費者行為迷思，精準行銷策略大公開。",
    author: "李小美 老師",
    date: "2024-06-10",
    category: "教師專欄",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  },
  {
    id: 3,
    title: "AI大數據驅動的行銷產學研新未來",
    excerpt: "產學合作案例，揭秘產學如何聯動AI和數據思維帶來行銷新局。",
    author: "產研團隊",
    date: "2024-06-12",
    category: "產業分享",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
  }
];

export function ArticlePreviewCard({ article }: { article: Article }) {
  return (
    <div className="bg-white/90 border border-slate-200 rounded-2xl shadow group overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
          <span className="px-2 py-0.5 rounded bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700">{article.category}</span>
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {article.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(article.date).toLocaleDateString('zh-TW')}
          </span>
        </div>
        <h2 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-teal-700">{article.title}</h2>
        <p className="text-slate-600 text-sm line-clamp-3">{article.excerpt}</p>
      </div>
    </div>
  );
}
