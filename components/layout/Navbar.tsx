"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const IDS = navLinks.map((n) => n.id);

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrolled } = useScrollPosition(24);
  const active = useActiveSection(IDS, "home");
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4"
    >
      <motion.nav
        animate={{
          width: scrolled ? "min(880px, 94%)" : "min(1180px, 96%)",
          paddingTop: scrolled ? 8 : 14,
          paddingBottom: scrolled ? 8 : 14,
          marginTop: scrolled ? 12 : 18,
          borderColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
          backgroundColor: scrolled ? "rgba(12,12,14,0.72)" : "rgba(12,12,14,0.30)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center justify-between rounded-full border px-4 backdrop-blur-xl md:px-5"
        style={{ boxShadow: "0 8px 32px -12px rgba(0,0,0,0.5)" }}
      >
        {/* Logo */}
        <a href={isHome ? "#home" : "/"} className="flex items-center gap-2" aria-label="Home">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-[13px] font-semibold shadow-lg shadow-blue-500/20">
            <span className="font-display">{site.name.charAt(0)}</span>
            <span className="absolute -inset-px rounded-md ring-1 ring-white/20" />
          </span>
          <span className="hidden text-[15px] font-medium tracking-tight text-white/90 sm:inline">
            {site.name}
          </span>
        </a>

        {/* Center nav */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="relative flex items-center gap-1 rounded-full p-1">
            {navLinks.map((n) => {
              const isActive = isHome && active === n.id;
              const href = isHome ? n.href : n.href.startsWith("#") ? `/${n.href}` : n.href;
              return (
                <li key={n.id}>
                  <a
                    href={href}
                    target={n.id === "resume" ? "_blank" : undefined}
                    rel={n.id === "resume" ? "noreferrer" : undefined}
                    className="relative rounded-full px-3.5 py-1.5 text-[13.5px] font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        className="absolute inset-0 -z-10 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                      />
                    )}
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-white/85 transition-all hover:border-white/20 hover:bg-white/[0.07] md:inline-flex"
          >
            <Download className="h-3.5 w-3.5 opacity-80" />
            Resume
          </a>
          <a
            href={isHome ? "#contact" : "/#contact"}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Let's talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-4 right-4 top-[74px] rounded-2xl border border-white/10 bg-[#0C0C0E]/95 p-3 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((n) => {
                const href = isHome ? n.href : n.href.startsWith("#") ? `/${n.href}` : n.href;
                return (
                  <a
                    key={n.id}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-[15px] text-white/85 hover:bg-white/5"
                  >
                    {n.label}
                  </a>
                );
              })}
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[14px]"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
