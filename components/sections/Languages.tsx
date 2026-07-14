"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { topLanguages } from "@/data/github";
import { EASE } from "@/lib/constants";

export default function Languages() {
  return (
    <Section id="languages">
      <Container size="lg">
        <SectionHeading
          eyebrow="Languages"
          title="Technologies I work with."
          description="A breakdown of the languages I use across my projects."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE.out }}
          className="mt-14 overflow-hidden rounded-2xl border border-white/8 bg-[#0D0D10]/60 p-6 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              Most-used languages
            </p>
            <p className="hidden font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/40 sm:inline">
              by estimated usage
            </p>
          </div>

          <div className="mt-5">
            <div className="relative flex h-2 w-full overflow-hidden rounded-full bg-white/[0.05]">
              {topLanguages.map((l, i) => (
                <motion.span
                  key={l.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08, ease: EASE.out }}
                  className="h-full"
                  style={{ background: l.color }}
                />
              ))}
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-6">
              {topLanguages.map((l) => (
                <li key={l.name} className="flex items-center gap-2 text-[13px] text-white/75">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: l.color }}
                  />
                  {l.name}
                  <span className="font-mono text-[11px] text-white/40">{l.percent}%</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
