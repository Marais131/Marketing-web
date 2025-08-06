import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "highlight" | "subtle";
  animated?: boolean;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  ({ className, children, variant = "default", animated = true, ...props }, ref) => {
    const variants = {
      default: "from-[#1A4C7A]/20 via-[#2A7DB1]/15 to-[#3CB1B6]/20",
      highlight: "from-[#3CB1B6]/25 via-[#2A7DB1]/20 to-[#1A4C7A]/25", 
      subtle: "from-[#1A4C7A]/10 via-[#2A7DB1]/8 to-[#3CB1B6]/12"
    };

    return (
      <div
        ref={ref}
        className={cn(
          // 基本樣式
          "relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm",
          // 邊框漸層
          "before:absolute before:inset-0 before:rounded-2xl before:p-[1px]",
          `before:bg-gradient-to-br before:${variants[variant]}`,
          "before:content-[''] before:z-0",
          // 內容區域
          "after:absolute after:inset-[1px] after:rounded-[15px] after:bg-white/98 after:z-0",
          // 陰影效果
          "shadow-lg shadow-[#1A4C7A]/5",
          // 懸浮效果
          animated && [
            "transition-all duration-500 ease-out",
            "hover:shadow-2xl hover:shadow-[#1A4C7A]/10",
            "hover:scale-[1.02] hover:-translate-y-1"
          ],
          className
        )}
        {...props}
      >
        {/* 內容容器 */}
        <div className="relative z-10 h-full">
          {children}
        </div>
        
        {/* 背景紋理 */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #1A4C7A 1px, transparent 1px),
                linear-gradient(-45deg, #2A7DB1 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        {/* 光暈效果（僅在 highlight 變體顯示）*/}
        {variant === "highlight" && (
          <div className="absolute -inset-2 bg-gradient-to-br from-[#3CB1B6]/20 to-[#1A4C7A]/20 rounded-3xl blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />
        )}
      </div>
    );
  }
);

GradientCard.displayName = "GradientCard";

export { GradientCard };