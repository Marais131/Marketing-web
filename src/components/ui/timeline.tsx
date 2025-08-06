import * as React from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  children: React.ReactNode;
  date: string;
  title: string;
  isLast?: boolean;
  className?: string;
}

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  date,
  title,
  isLast = false,
  className
}) => {
  return (
    <div className={cn("relative flex gap-6", className)}>
      {/* 時間線 */}
      <div className="flex flex-col items-center">
        {/* 節點 */}
        <div className="relative">
          {/* 外圈 - 動畫效果 */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1A4C7A] to-[#3CB1B6] p-[2px] shadow-lg">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#1A4C7A] to-[#3CB1B6]" />
            </div>
          </div>
          
          {/* 脈衝效果 */}
          <div className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#1A4C7A]/30 to-[#3CB1B6]/30 animate-ping" />
        </div>
        
        {/* 連接線 */}
        {!isLast && (
          <div className="w-[2px] h-full mt-2 bg-gradient-to-b from-[#1A4C7A]/40 via-[#2A7DB1]/30 to-[#3CB1B6]/20" />
        )}
      </div>

      {/* 內容區域 */}
      <div className="flex-1 pb-8">
        {/* 日期標籤 */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#1A4C7A]/10 to-[#3CB1B6]/10 text-[#1A4C7A] border border-[#1A4C7A]/20 mb-2">
          {date}
        </div>
        
        {/* 標題 */}
        <h3 className="text-xl font-bold text-[#1A4C7A] mb-3 group-hover:text-[#2A7DB1] transition-colors duration-300">
          {title}
        </h3>
        
        {/* 內容 */}
        <div className="text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ children, className }) => {
  return (
    <div className={cn("space-y-0", className)}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<TimelineItemProps>, {
            isLast: index === React.Children.count(children) - 1
          });
        }
        return child;
      })}
    </div>
  );
};

export { Timeline, TimelineItem };