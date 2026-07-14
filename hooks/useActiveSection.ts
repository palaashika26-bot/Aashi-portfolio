"use client";

import { useEffect, useState } from "react";

/**
 * Track which section id is currently in the viewport.
 */
export function useActiveSection(ids: string[], defaultId?: string): string {
  const [active, setActive] = useState<string>(defaultId ?? ids[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
