"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { ACCENT_DOT, ACCENT_MAP, EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Skills() {
  return (
    <Section id="skills">
      <Container size="lg">
        <SectionHeading
          eyebrow="Toolbox"
          title={
            <>
              Battle-tested tools, <br />
              chosen for their taste.
            </>
          }
          description="Six categories, deep across a few and fluent across the rest. Percentages are self-assessed and biased toward the last two years of active shipping."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.article
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE.out }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0D0D10]/60 p-6 backdrop-blur-sm transition-colors hover:border-white/20"
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

                <ul className="relative mt-6 space-y-3">
                  {cat.skills.map((s, si) => (
                    <li key={s.name}>
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="text-white/80">{s.name}</span>
                        <span className="font-mono text-[11px] text-white/40">
                          {s.level}
                        </span>
                      </div>
                      <div className="relative mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/[0.05]">
                        <motion.span
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.1,
                            delay: 0.15 + si * 0.05,
                            ease: EASE.out,
                          }}
                          className={cn(
                            "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r",
                            ACCENT_MAP[cat.accent]
                          )}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
