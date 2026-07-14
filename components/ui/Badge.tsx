import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "mono" | "solid";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const styles = {
    default:
      "border border-white/8 bg-white/[0.03] text-white/70 font-mono text-[10.5px] uppercase tracking-[0.14em]",
    mono: "border border-white/12 bg-black/30 text-white/85 font-mono text-[10.5px] uppercase tracking-[0.18em] backdrop-blur",
    solid:
      "bg-white text-black font-medium text-[11px]",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
