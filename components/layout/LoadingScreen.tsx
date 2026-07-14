"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulated progress
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(100, current + Math.random() * 18 + 6);
      setProgress(Math.floor(current));
      if (current >= 100) {
        clearInterval(interval);
        // Brief pause at 100% before exiting
        setTimeout(() => setVisible(false), 350);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[200] grid place-items-center bg-[#09090B]"
        >
          <div className="flex w-[280px] flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)]">
                <span className="font-display text-lg font-semibold">
                  {site.name.charAt(0)}
                </span>
                <span className="absolute -inset-px rounded-xl ring-1 ring-white/20" />
              </div>
            </motion.div>

            <div className="w-full space-y-2">
              <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#3B82F6] via-white to-[#8B5CF6]"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                />
              </div>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">
                <span>Loading</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
