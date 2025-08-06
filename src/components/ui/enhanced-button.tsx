import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#1A4C7A] to-[#2A7DB1] text-white shadow-lg hover:shadow-2xl hover:shadow-[#1A4C7A]/30 hover:scale-105 active:scale-95",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-red-500/30",
        outline:
          "border-2 border-[#1A4C7A] text-[#1A4C7A] bg-white hover:bg-[#1A4C7A] hover:text-white shadow-md hover:shadow-lg hover:shadow-[#1A4C7A]/20",
        secondary:
          "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300 shadow-sm hover:shadow-md",
        ghost: 
          "text-[#1A4C7A] hover:bg-gradient-to-r hover:from-[#1A4C7A]/10 hover:to-[#3CB1B6]/10 hover:text-[#1A4C7A]",
        link: 
          "text-[#2A7DB1] underline-offset-4 hover:underline hover:text-[#1A4C7A]",
        gradient:
          "bg-gradient-to-r from-[#3CB1B6] via-[#2A7DB1] to-[#1A4C7A] text-white shadow-lg hover:shadow-2xl hover:shadow-[#2A7DB1]/40 hover:scale-105 active:scale-95",
        glow:
          "bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6] text-white shadow-lg shadow-[#2A7DB1]/30 hover:shadow-2xl hover:shadow-[#2A7DB1]/50 hover:scale-105"
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 py-1.5 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        ripple: "before:absolute before:inset-0 before:rounded-lg before:bg-white/20 before:scale-0 before:transition-transform before:duration-500 hover:before:scale-100",
        shine: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full",
        pulse: "animate-pulse hover:animate-none"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "shine"
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, asChild = false, loading = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* 載入狀態 */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-lg">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <div className={cn("flex items-center gap-2", loading && "opacity-0")}>
          {leftIcon}
          {children}
          {rightIcon}
        </div>

        {/* 背景特效 */}
        {variant === "glow" && (
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1A4C7A] to-[#3CB1B6] rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity -z-10" />
        )}
      </Comp>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton, buttonVariants };