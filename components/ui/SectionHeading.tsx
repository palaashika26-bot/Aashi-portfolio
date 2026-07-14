"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/constants";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE.out }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-1 w-1 rounded-full bg-[#3B82F6] shadow-[0_0_12px_2px_rgba(59,130,246,0.65)]" />
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="mt-4 font-display text-display-lg font-semibold text-gradient">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-white/55">
          {description}
        </p>
      )}
    </motion.div>
  );
}
