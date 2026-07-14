"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  ariaLabel?: string;
}

export default function MagneticButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: MagneticButtonProps) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(0.25);

  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14.5px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/95 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)]"
      : "border border-white/12 bg-white/[0.03] text-white/90 hover:border-white/25 hover:bg-white/[0.06]";

  const commonProps = {
    style: { x, y },
    onMouseMove,
    onMouseLeave,
    className: cn(base, styles, className),
    "aria-label": ariaLabel,
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        {...commonProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      type="button"
      {...commonProps}
    >
      {children}
    </motion.button>
  );
}
