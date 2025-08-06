import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  threshold?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 800,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const getTransformClasses = () => {
    const baseClasses = "transition-all ease-out";
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-x-0 translate-y-0`;
    }

    const transformMap = {
      up: "opacity-0 translate-y-8",
      down: "opacity-0 -translate-y-8", 
      left: "opacity-0 translate-x-8",
      right: "opacity-0 -translate-x-8",
      fade: "opacity-0"
    };

    return `${baseClasses} ${transformMap[direction]}`;
  };

  return (
    <div
      ref={elementRef}
      className={cn(getTransformClasses(), className)}
      style={{
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export { FadeInSection };