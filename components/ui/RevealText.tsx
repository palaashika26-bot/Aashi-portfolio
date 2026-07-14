"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/constants";
import type { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
}

export default function RevealText({
  children,
  className,
  delay = 0,
  y = 24,
  blur = true,
  once = true,
}: RevealTextProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y,
      filter: blur ? "blur(10px)" : "blur(0px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: EASE.out, delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
