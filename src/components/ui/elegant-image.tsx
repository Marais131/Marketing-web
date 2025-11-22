import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ElegantImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "rounded" | "card" | "circle";
  overlay?: boolean;
  zoom?: boolean;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "high" | "low" | "auto";
}

const ElegantImage: React.FC<ElegantImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
  variant = "default",
  overlay = false,
  zoom = true,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const variantClasses = {
    default: "rounded-lg",
    rounded: "rounded-2xl",
    card: "rounded-xl shadow-lg",
    circle: "rounded-full aspect-square object-cover"
  };

  const containerVariants = {
    default: "",
    rounded: "rounded-2xl overflow-hidden",
    card: "rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300",
    circle: "rounded-full overflow-hidden aspect-square"
  };

  return (
    <div className={cn(
      "relative group overflow-hidden bg-gray-100",
      containerVariants[variant],
      zoom && "hover:scale-105 transition-transform duration-500 ease-out",
      containerClassName
    )}>
      {/* 載入佔位符 */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-shimmer" />
        </div>
      )}

      {/* 主要圖片 */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding={decoding}
          // React 不識別駝峰寫法到 DOM，改為小寫屬性傳遞
          {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out",
            variantClasses[variant],
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
            zoom && "group-hover:scale-110",
            className
          )}
          {...props}
        />
      )}

      {/* 錯誤狀態 */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs">載入失敗</p>
          </div>
        </div>
      )}

      {/* 覆蓋層 */}
      {overlay && isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* 邊框光效 */}
      {variant === "card" && (
        <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-[#1A4C7A]/20 via-[#2A7DB1]/20 to-[#3CB1B6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </div>
  );
};

export { ElegantImage };