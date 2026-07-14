import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}

export default function Section({
  id,
  children,
  className,
  as: Comp = "section",
}: SectionProps) {
  return (
    <Comp id={id} className={cn("relative py-24 md:py-32", className)}>
      {children}
    </Comp>
  );
}
