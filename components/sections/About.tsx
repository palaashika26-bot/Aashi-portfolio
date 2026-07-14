"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import { site } from "@/data/site";
import { heroStats, interests } from "@/data/stats";
import { EASE } from "@/lib/constants";
import { GraduationCap, MapPin, Coffee, Code } from "lucide-react";

export default function About() {
  return (
    <Section id="about">
      <Container size="lg">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Left: Portrait card + meta */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE.out }}
              className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0D0D10]/60 p-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0F1230] via-[#0B0B14] to-[#160B26]">
                <div className="absolute inset-0 bg-grid-fine opacity-40 mask-radial-fade" />
                <div
                  className="absolute -left-16 top-16 h-72 w-72 rounded-full opacity-70 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(59,130,246,0.45), transparent 70%)",
                  }}
                />
                <div
                  className="absolute -right-16 bottom-10 h-72 w-72 rounded-full opacity-70 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(139,92,246,0.45), transparent 70%)",
                  }}
                />
              </div>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE.out }}
              className="mt-6 grid grid-cols-2 gap-2 rounded-2xl border border-white/8 bg-white/[0.02] p-4"
            >
              <MetaRow icon={MapPin} label="Location" value={site.location} />
              <MetaRow icon={Code} label="Role" value="Full Stack Developer" />
              <MetaRow icon={Coffee} label="College" value="Mithibai College" />
              <MetaRow icon={GraduationCap} label="Degree" value="B.Sc Computer Science" />
            </motion.dl>
          </div>

          {/* Right: Story + stats + timeline + education + interests */}
          <div className="md:col-span-7">
            <SectionHeading
              eyebrow="About"
              title="Who I am."
              description=""
            />

            {/* Who I Am */}
            <div className="mt-6 space-y-5 text-[15px] leading-[1.8] text-white/70">
              <p>
                I&apos;m Aashika Pal — a second year B.Sc Computer Science student at Mithibai College, Mumbai.
                I build full-stack web applications, work with modern JavaScript frameworks, and enjoy understanding
                how complete systems come together.
              </p>
              <p>
                I started with the basics of programming, building small frontend projects and gradually moving into
                full-stack development. Every project has taught me something new — debugging, database design,
                deployment workflows, and writing code that&apos;s easier to maintain. I learn by building, and
                each project pushes me a step further.
              </p>
              <p>
                What I enjoy most is working on projects that combine a clean interface with real functionality —
                something people actually use. I like understanding the full picture, not just the frontend or the
                backend, but how everything fits together.
              </p>
              <p>
                Right now I&apos;m strengthening my skills in Next.js, TypeScript, backend architecture, database
                design, and deployment. I want to become a software engineer who builds reliable, scalable, and
                meaningful software.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((s, i) => (
                <StatCard key={s.label} stat={s} index={i} />
              ))}
            </div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE.out }}
              className="mt-6 rounded-2xl border border-white/8 bg-white/[0.02] p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
                Interests
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/75 transition-colors hover:border-white/20 hover:text-white"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function MetaRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl px-3 py-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 bg-white/[0.02] text-white/60">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-white/40">
          {label}
        </p>
        <p className="truncate text-[13px] text-white/85">{value}</p>
      </div>
    </div>
  );
}
