import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export default function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-6", sizes[size], className)}>
      {children}
    </div>
  );
}
