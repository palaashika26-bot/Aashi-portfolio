"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Info } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { ACCENT_MAP, EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const MotionLink = motion(Link);

export default function Projects() {
  return (
    <Section id="work">
      <Container size="lg">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work — 2025 / 2026"
            title="Featured Projects"
            description="A focused collection of real-world freelance platforms, AI-powered applications, and interactive web games built end-to-end."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

/* Accent color map for the hover overlay circular buttons */
const OVERLAY_BTN_COLORS: Record<string, { bg: string; hover: string; shadow: string }> = {
  blue:    { bg: "bg-[#3B82F6]", hover: "hover:bg-[#2563EB]", shadow: "shadow-[0_4px_20px_rgba(59,130,246,0.5)]" },
  violet:  { bg: "bg-[#8B5CF6]", hover: "hover:bg-[#7C3AED]", shadow: "shadow-[0_4px_20px_rgba(139,92,246,0.5)]" },
  cyan:    { bg: "bg-[#22D3EE]", hover: "hover:bg-[#06B6D4]", shadow: "shadow-[0_4px_20px_rgba(34,211,238,0.5)]" },
  amber:   { bg: "bg-[#F59E0B]", hover: "hover:bg-[#D97706]", shadow: "shadow-[0_4px_20px_rgba(245,158,11,0.5)]" },
  rose:    { bg: "bg-[#F43F5E]", hover: "hover:bg-[#E11D48]", shadow: "shadow-[0_4px_20px_rgba(244,63,94,0.5)]" },
  emerald: { bg: "bg-[#10B981]", hover: "hover:bg-[#059669]", shadow: "shadow-[0_4px_20px_rgba(16,185,129,0.5)]" },
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const isHero = project.id === "p-elios";
  const [isHovered, setIsHovered] = useState(false);

  const hoverBorders: Record<string, string> = {
    blue: "hover:border-[#3B82F6]/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]",
    violet: "hover:border-[#8B5CF6]/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]",
    cyan: "hover:border-[#22D3EE]/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]",
    amber: "hover:border-[#F59E0B]/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]",
    rose: "hover:border-[#F43F5E]/30 hover:shadow-[0_0_30px_rgba(244,63,94,0.08)]",
    emerald: "hover:border-[#10B981]/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]",
  };

  const statusAccents: Record<string, string> = {
    blue: "text-[#60A5FA] border-[#3B82F6]/30 bg-[#3B82F6]/10",
    violet: "text-[#C084FC] border-[#8B5CF6]/30 bg-[#8B5CF6]/10",
    cyan: "text-[#22D3EE] border-[#06B6D4]/30 bg-[#06B6D4]/10",
    amber: "text-[#FBBF24] border-[#D97706]/30 bg-[#D97706]/10",
    rose: "text-[#F87171] border-[#F43F5E]/30 bg-[#F43F5E]/10",
    emerald: "text-[#34D399] border-[#10B981]/30 bg-[#10B981]/10",
  };

  const btnColors = OVERLAY_BTN_COLORS[project.accent] ?? OVERLAY_BTN_COLORS.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: EASE.out }}
      className={cn(
        project.featured ? "md:col-span-2" : "col-span-1",
        "h-full"
      )}
    >
      <TiltCard
        className={cn(
          "flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5",
          isHero
            ? "border-[#3B82F6]/25 shadow-[0_0_40px_rgba(59,130,246,0.12)] bg-[#0E0E12]/80 hover:border-[#3B82F6]/45"
            : cn("border-white/8 bg-[#0D0D10]/60 hover:border-white/20", hoverBorders[project.accent])
        )}
      >
        <div className="flex flex-col h-full flex-1">
          {/* Card layout */}
          <div
            className={cn(
              "w-full text-left flex flex-col flex-1",
              isHero ? "md:flex-row md:items-stretch" : "flex-col"
            )}
          >
            {/* Image container with hover overlay */}
            <div
              className={cn(
                "relative overflow-hidden shrink-0",
                isHero
                  ? "w-full md:w-[43%] aspect-[16/10] md:aspect-auto"
                  : "w-full aspect-[16/10]"
              )}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-50 mix-blend-screen",
                  ACCENT_MAP[project.accent]
                )}
              />
              <img
                src={project.cover}
                alt={project.title}
                loading="lazy"
                className={cn(
                  "h-full w-full object-cover transition-all duration-[600ms] ease-out",
                  isHovered ? "scale-[1.06] blur-[2px]" : "scale-100"
                )}
              />
              {isHero ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent md:hidden" />
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-[#09090B]/10 to-[#0E0E12]" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent" />
              )}

              {/* Badges */}
              <div className="absolute left-4 top-4 flex items-center gap-2 z-10">
                <Badge variant="mono">{project.year}</Badge>
                {project.status && (
                  <Badge
                    variant="mono"
                    className={cn("normal-case tracking-normal px-2.5 font-sans font-medium", statusAccents[project.accent])}
                  >
                    {project.status}
                  </Badge>
                )}
                {isHero && (
                  <Badge variant="solid" className="bg-[#3B82F6] text-white font-mono text-[9px] uppercase tracking-[0.12em] px-2 py-0.5">
                    Featured
                  </Badge>
                )}
              </div>

              {/* ===== Hover Overlay with 3 Circular Buttons ===== */}
              <div
                className={cn(
                  "absolute inset-0 z-20 flex items-center justify-center gap-5 bg-black/60 backdrop-blur-[3px] transition-all duration-300",
                  isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                {/* Live site Button */}
                {project.links?.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    title="Visit site"
                    initial={false}
                    animate={isHovered ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.5, opacity: 0, y: 15 }}
                    transition={{ duration: 0.3, delay: 0 }}
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200",
                      btnColors.bg,
                      btnColors.hover,
                      btnColors.shadow
                    )}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.a>
                )}
                {/* GitHub Repo Button */}
                {project.links?.github && (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub Repository"
                    initial={false}
                    animate={isHovered ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.5, opacity: 0, y: 15 }}
                    transition={{ duration: 0.3, delay: 0.07 }}
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200",
                      btnColors.bg,
                      btnColors.hover,
                      btnColors.shadow
                    )}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                )}
                {/* Case Study Button */}
                <MotionLink
                  href={`/projects/${project.slug}`}
                  title="Case Study"
                  initial={false}
                  animate={isHovered ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.5, opacity: 0, y: 15 }}
                  transition={{ duration: 0.3, delay: 0.14 }}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200",
                    btnColors.bg,
                    btnColors.hover,
                    btnColors.shadow
                  )}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Info className="h-5 w-5" />
                </MotionLink>
              </div>
            </div>

            {/* Body */}
            <Link
              href={`/projects/${project.slug}`}
              className="relative flex flex-col flex-1 p-6 md:p-7 justify-between cursor-pointer text-left"
              aria-label={`Open ${project.title} case study`}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-[22px] font-semibold tracking-tight text-white md:text-[26px]">
                    {project.title}
                  </h3>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-[10deg]" />
                  </div>
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/55">
                  {project.tagline}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap items-center gap-1.5">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    className="transition-all duration-300 group-hover:translate-y-[-1px] group-hover:border-white/20 group-hover:bg-white/[0.06]"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
