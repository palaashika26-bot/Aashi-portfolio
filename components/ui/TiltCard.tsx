"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  spotlight?: boolean;
}

export default function TiltCard({
  children,
  className,
  intensity = 8,
  spotlight = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rX = useMotionValue(0);
  const rY = useMotionValue(0);
  const srX = useSpring(rX, { stiffness: 180, damping: 18, mass: 0.4 });
  const srY = useSpring(rY, { stiffness: 180, damping: 18, mass: 0.4 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rY.set((px - 0.5) * intensity);
    rX.set((0.5 - py) * intensity);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const onLeave = () => {
    rX.set(0);
    rY.set(0);
  };

  const bgGradient = useTransform(
    [gx, gy],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}% ${y}%, rgba(255,255,255,0.08), transparent 40%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srX, rotateY: srY, transformPerspective: 1200 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0D0D10]/60 backdrop-blur-sm transition-colors hover:border-white/20",
        className
      )}
    >
      {spotlight && (
        <motion.div
          aria-hidden
          style={{ background: bgGradient }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
      {children}
    </motion.div>
  );
}
