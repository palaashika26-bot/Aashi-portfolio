"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { EASE } from "@/lib/constants";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Container size="lg">
        <SectionHeading
          eyebrow="Kind words"
          title="From people I've built with."
          description="A few notes from teammates, founders, and collaborators — collected across launches and long-nights."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE.out }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0D0D10]/60 p-6 backdrop-blur-sm transition-colors hover:border-white/20 md:p-8"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-white/[0.05]" />
              <blockquote className="relative text-[15px] leading-relaxed text-white/80 md:text-[16px]">
                "{t.quote}"
              </blockquote>
              <figcaption className="relative mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] font-display text-[13px] font-semibold text-white shadow-lg shadow-blue-500/10">
                  {t.initials}
                </span>
                <div>
                  <p className="text-[14px] font-medium text-white/90">{t.name}</p>
                  <p className="text-[12.5px] text-white/50">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
