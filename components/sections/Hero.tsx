"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import CodeEditor from "@/components/ui/CodeEditor";
import DeveloperNetwork from "@/components/ui/DeveloperNetwork";
import { site, socialLinks } from "@/data/site";
import { EASE } from "@/lib/constants";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[85svh] items-center justify-center overflow-hidden pt-28"
    >
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.28),transparent_70%)] blur-2xl" />
        <div className="absolute right-[8%] top-[20%] h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.28),transparent_70%)] blur-2xl animate-float" />
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE.out }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12.5px] text-white/80 backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {site.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE.out }}
              className="mt-6 font-display text-display-xl font-semibold tracking-tight text-gradient"
              style={{ fontSize: "clamp(2.25rem, 4vw + 0.75rem, 4.25rem)" }}
            >
              Building scalable web applications{" "}
              <span className="text-gradient-brand">with modern technologies.</span>
            </motion.h1>

            <div className="mt-6">
              <CodeEditor />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE.out }}
              className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-white/60 md:text-[17.5px]"
            >
              Every project begins with curiosity and grows through problem-solving. Scroll through my journey—from writing my first lines of code to building production-ready applications for real clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE.out }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14.5px] font-medium text-black transition-all hover:bg-white/90 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)]"
              >
                Resume
              </a>
              <MagneticButton href="#contact" variant="ghost">
                Let's Talk
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: EASE.out }}
              className="mt-8 flex items-center gap-1.5"
            >
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/[0.02] text-white/60 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                >
                  <Icon className="h-[15px] w-[15px]" />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <DeveloperNetwork />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mx-auto mt-14 flex flex-col items-center gap-3 text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">
            Quick Information
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 text-white/45">
            <span className="font-display text-[14px] tracking-tight text-white/40">
              Aashika Pal
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="font-display text-[14px] tracking-tight text-white/40">
              Full Stack Developer
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="font-display text-[14px] tracking-tight text-white/40">
              B.Sc CS @ Mithibai
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="font-display text-[14px] tracking-tight text-white/40">
              Mumbai
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
