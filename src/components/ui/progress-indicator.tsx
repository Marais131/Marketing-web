import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  value: number;
  max?: number;
  className?: string;
  showValue?: boolean;
  animated?: boolean;
  variant?: "default" | "gradient" | "glow";
  size?: "sm" | "md" | "lg";
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  value,
  max = 100,
  className,
  showValue = false,
  animated = true,
  variant = "default",
  size = "md"
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  };

  const variantClasses = {
    default: "bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6]",
    gradient: "bg-gradient-to-r from-[#3CB1B6] via-[#2A7DB1] to-[#1A4C7A]",
    glow: "bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6] shadow-lg shadow-[#2A7DB1]/30"
  };

  return (
    <div className={cn("w-full", className)}>
      {/* 進度條容器 */}
      <div className={cn(
        "relative overflow-hidden rounded-full bg-gray-100 border border-gray-200",
        sizeClasses[size]
      )}>
        {/* 背景網格紋理 */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(90deg, #1A4C7A 1px, transparent 1px)`,
              backgroundSize: '8px 100%'
            }}
          />
        </div>

        {/* 進度條 */}
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            variantClasses[variant],
            animated && "animate-pulse"
          )}
          style={{ width: `${percentage}%` }}
        >
          {/* 高光效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          
          {/* 流動動畫 */}
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse" />
          )}
        </div>

        {/* 光暈效果（僅 glow 變體） */}
        {variant === "glow" && (
          <div 
            className="absolute -inset-1 bg-gradient-to-r from-[#1A4C7A]/20 to-[#3CB1B6]/20 rounded-full blur-sm -z-10"
            style={{ width: `${percentage + 2}%` }}
          />
        )}
      </div>

      {/* 數值顯示 */}
      {showValue && (
        <div className="flex justify-between items-center mt-2 text-sm">
          <span className="font-medium text-[#1A4C7A]">
            {Math.round(percentage)}%
          </span>
          <span className="text-gray-500">
            {value} / {max}
          </span>
        </div>
      )}
    </div>
  );
};

export { ProgressIndicator };