"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";
import { ACCENT_MAP, EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Certifications() {
  return (
    <Section id="certifications">
      <Container size="lg">
        <SectionHeading
          eyebrow="Certifications"
          title="Paper trail, receipts, credentials."
          description="A short list of the credentials I've picked up along the way — mostly practical, none decorative."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.a
              key={c.id}
              href={c.credentialUrl ?? "#"}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: EASE.out }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0D0D10]/60 p-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/20"
            >
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-gradient-to-br opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-50",
                  ACCENT_MAP[c.accent]
                )}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/85">
                    <ShieldCheck className="h-[16px] w-[16px]" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                      {c.issuer}
                    </p>
                    <p className="mt-0.5 text-[11px] text-white/40">{c.year}</p>
                  </div>
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <h3 className="relative mt-4 font-display text-[16px] font-semibold leading-snug tracking-tight text-white">
                {c.name}
              </h3>

              <div className="relative mt-4 flex items-center gap-1.5 text-[12px] font-medium text-white/50 transition-colors group-hover:text-white/80">
                <span>View Certificate</span>
                <ArrowUpRight className="h-3 w-3" />
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
