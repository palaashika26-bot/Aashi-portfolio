"use client";

import { useEffect, useState } from "react";

export function useScrollPosition(threshold = 24): {
  scrollY: number;
  scrolled: boolean;
} {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      setScrollY(y);
      setScrolled(y > threshold);
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [threshold]);

  return { scrollY, scrolled };
}
