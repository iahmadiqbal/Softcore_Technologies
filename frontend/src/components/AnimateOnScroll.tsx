import { useEffect, useRef, useState } from "react";

type AnimationDirection = "left" | "right" | "top" | "bottom" | "fade-up" | "scale";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  className?: string;
}

const directionClassMap: Record<AnimationDirection, string> = {
  left: "animate-from-left",
  right: "animate-from-right",
  top: "animate-from-top",
  bottom: "animate-from-bottom",
  "fade-up": "animate-fade-in-up",
  scale: "animate-scale-in",
};

export const AnimateOnScroll = ({ children, direction = "bottom", delay = 0, className = "" }: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? directionClassMap[direction] : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
