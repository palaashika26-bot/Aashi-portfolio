"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories, learningTopics } from "@/data/skills";
import { ACCENT_DOT, ACCENT_MAP, EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/types";

const BADGE_STYLES: Record<SkillLevel, string> = {
  comfortable:
    "border-green-500/20 bg-green-500/10 text-green-400",
  familiar:
    "border-amber-500/20 bg-amber-500/10 text-amber-400",
  learning:
    "border-blue-500/20 bg-blue-500/10 text-blue-400",
};

const BADGE_LABELS: Record<SkillLevel, string> = {
  comfortable: "🟢 Comfortable",
  familiar: "🟡 Familiar",
  learning: "🔵 Currently Learning",
};

function StatusBadge({ level }: { level: SkillLevel }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em]",
        BADGE_STYLES[level]
      )}
    >
      {BADGE_LABELS[level]}
    </span>
  );
}

export default function Skills() {
  return (
    <Section id="skills">
      <Container size="lg">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Technologies I work with."
          description="Technologies I've learned through academics, personal projects, freelance work, and continuous learning."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.article
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE.out }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0D0D10]/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]"
              >
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60",
                    ACCENT_MAP[cat.accent]
                  )}
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/85">
                      <Icon className="h-[16px] w-[16px]" />
                    </span>
                    <h3 className="font-display text-[18px] font-semibold tracking-tight text-white">
                      {cat.title}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      ACCENT_DOT[cat.accent]
                    )}
                  />
                </div>

                <ul className="relative mt-6 space-y-3.5">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="text-[13.5px] text-white/80">
                        {s.name}
                      </span>
                      <StatusBadge level={s.level} />
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE.out }}
          className="mt-20"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/85">
              <Sparkles className="h-[16px] w-[16px]" />
            </span>
            <div>
              <h3 className="font-display text-[20px] font-semibold tracking-tight text-white">
                Currently Learning
              </h3>
              <p className="mt-1 text-[13px] text-white/45">
                Technologies and concepts I'm actively exploring.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {learningTopics.map((topic, i) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  ease: EASE.out,
                }}
                className="inline-flex items-center rounded-xl border border-white/8 bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-white/65 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] hover:text-white/90"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
