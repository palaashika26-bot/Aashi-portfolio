"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { EASE } from "@/lib/constants";
import { withBasePath } from "@/lib/utils";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="relative overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${withBasePath("/images/projects/photo-ground-texture-pattern.jpg")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/95 via-black/80 to-[#09090B]/95" />
      </div>

      <Container size="lg">
        <SectionHeading
          eyebrow="Path so far"
          title="My journey."
          description="From learning the basics of programming to building full-stack applications."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE.out }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/experience"
            className="group relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/8 bg-[#0D0D10]/60 p-8 backdrop-blur-sm transition-all hover:border-white/20"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              Path so far
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">
              Started with programming fundamentals in 2023, built frontend projects, moved into full-stack development, and completed my first freelance project — Elios Wholesale.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">
              Currently focused on deepening my skills in modern web technologies and software engineering.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-blue-400 transition-all group-hover:gap-3">
              View full journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
