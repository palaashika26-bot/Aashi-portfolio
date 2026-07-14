"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/constants";
import type { Stat } from "@/types";

interface StatCardProps {
  stat: Stat;
  index?: number;
}

export default function StatCard({ stat, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE.out }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors hover:border-white/20"
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fine opacity-30 mask-fade-b"
      />
      <div className="relative">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {stat.value}
          </span>
          {stat.suffix && (
            <span className="font-display text-lg font-medium text-white/60 md:text-xl">
              {stat.suffix}
            </span>
          )}
        </div>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}
