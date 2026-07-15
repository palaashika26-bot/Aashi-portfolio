"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, examScores } from "@/data/stats";
import { EASE } from "@/lib/constants";

export default function Education() {
  return (
    <Section id="education">
      <Container size="lg">
        <SectionHeading
          eyebrow="Education"
          title="Academics & achievements."
          description=""
        />

        <div className="mt-14 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE.out }}
            className="w-full max-w-lg rounded-2xl border border-white/8 bg-[#0D0D10]/60 p-6 backdrop-blur-sm transition-colors hover:border-white/20"
          >
            {education.map((e) => (
              <div key={e.school} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/85">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[20px] font-semibold tracking-tight text-white">
                    {e.school}
                  </h3>
                  <p className="mt-1 text-[15px] text-white/70">{e.degree}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-white/50">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {e.location}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                      {e.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6 border-t border-white/[0.06] pt-6 space-y-4">
              {examScores.map((exam) => (
                <div key={exam.name} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/70">
                    <Award className="h-4 w-4" />
                  </span>
                  <div className="flex flex-1 items-center justify-between gap-2">
                    <p className="text-[14px] text-white/85">{exam.name}</p>
                    <p className="whitespace-nowrap font-mono text-[12px] text-white/60">
                      {exam.score}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
