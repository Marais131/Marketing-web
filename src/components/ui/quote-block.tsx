import * as React from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  children: React.ReactNode;
  author?: string;
  role?: string;
  className?: string;
  variant?: "default" | "highlight" | "minimal";
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({
  children,
  author,
  role,
  className,
  variant = "default"
}) => {
  const variants = {
    default: {
      container: "bg-gradient-to-br from-[#1A4C7A]/5 to-[#3CB1B6]/10 border-l-4 border-[#2A7DB1]",
      quote: "text-[#1A4C7A]/80",
      icon: "text-[#2A7DB1]"
    },
    highlight: {
      container: "bg-gradient-to-br from-[#3CB1B6]/10 to-[#1A4C7A]/5 border border-[#2A7DB1]/20",
      quote: "text-[#1A4C7A]",
      icon: "text-[#3CB1B6]"
    },
    minimal: {
      container: "bg-white/50 border-l-2 border-[#1A4C7A]/30",
      quote: "text-gray-700",
      icon: "text-[#1A4C7A]/60"
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className={cn(
      "relative rounded-lg p-6 shadow-sm backdrop-blur-sm",
      currentVariant.container,
      className
    )}>
      {/* 背景裝飾 */}
      <div className="absolute top-4 right-4 opacity-10">
        <Quote className="w-16 h-16" />
      </div>

      {/* 引用圖標 */}
      <div className="flex items-start gap-4">
        <Quote className={cn("w-6 h-6 mt-1 flex-shrink-0", currentVariant.icon)} />
        
        <div className="flex-1">
          {/* 引用內容 */}
          <blockquote className={cn(
            "text-lg italic leading-relaxed mb-4",
            currentVariant.quote
          )}>
            {children}
          </blockquote>

          {/* 作者資訊 */}
          {(author || role) && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6]" />
              <div>
                {author && (
                  <div className="font-semibold text-[#1A4C7A] text-sm">
                    {author}
                  </div>
                )}
                {role && (
                  <div className="text-[#2A7DB1] text-xs">
                    {role}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 底部裝飾線 */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2A7DB1]/30 to-transparent" />
    </div>
  );
};

export { QuoteBlock };