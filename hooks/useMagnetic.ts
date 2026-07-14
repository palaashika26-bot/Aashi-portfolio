"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

interface UseMagneticReturn {
  ref: React.RefObject<HTMLElement | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

export function useMagnetic(strength = 0.25): UseMagneticReturn {
  const ref = useRef<HTMLElement | null>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const x = useSpring(mvX, { stiffness: 250, damping: 20, mass: 0.4 });
  const y = useSpring(mvY, { stiffness: 250, damping: 20, mass: 0.4 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    mvX.set(dx * strength);
    mvY.set(dy * strength);
  };

  const onMouseLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return { ref, x, y, onMouseMove, onMouseLeave };
}
