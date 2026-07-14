import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
}

export default function Card({
  children,
  className,
  hover = true,
  as: Comp = "div",
}: CardProps) {
  return (
    <Comp
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/8 bg-[#0D0D10]/60 backdrop-blur-sm transition-colors",
        hover && "hover:border-white/20",
        className
      )}
    >
      {children}
    </Comp>
  );
}
