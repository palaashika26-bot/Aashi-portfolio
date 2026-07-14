"use client";

import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import { ACCENT_MAP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const statusAccents = {
  blue: "text-[#60A5FA] border-[#3B82F6]/30 bg-[#3B82F6]/10",
  violet: "text-[#C084FC] border-[#8B5CF6]/30 bg-[#8B5CF6]/10",
  cyan: "text-[#22D3EE] border-[#06B6D4]/30 bg-[#06B6D4]/10",
  amber: "text-[#FBBF24] border-[#D97706]/30 bg-[#D97706]/10",
  rose: "text-[#F87171] border-[#F43F5E]/30 bg-[#F43F5E]/10",
  emerald: "text-[#34D399] border-[#10B981]/30 bg-[#10B981]/10",
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Modal
      open={Boolean(project)}
      onClose={onClose}
      ariaLabel={project?.title ?? "Project"}
    >
      {project && (
        <div className="max-h-[85vh] overflow-y-auto">
          {/* Hero */}
          <div className="relative aspect-[16/8] overflow-hidden">
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-70 mix-blend-screen",
                ACCENT_MAP[project.accent]
              )}
            />
            <img
              src={project.cover}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="mono">{project.year}</Badge>
                {project.status && (
                  <Badge
                    variant="mono"
                    className={cn("normal-case tracking-normal px-2.5 font-sans font-medium", statusAccents[project.accent])}
                  >
                    {project.status}
                  </Badge>
                )}
                <Badge variant="mono">{project.role}</Badge>
                <Badge variant="mono">{project.duration}</Badge>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-white/70">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-3 md:p-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <SectionTitle>Overview</SectionTitle>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/70">
                  {project.overview}
                </p>
              </section>

              <section>
                <SectionTitle>Highlights</SectionTitle>
                <ul className="mt-3 space-y-2.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] text-white/75">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/45" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionTitle>Challenges</SectionTitle>
                <ul className="mt-3 space-y-2.5">
                  {project.challenges.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-[14px] text-white/75"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/45" />
                      {c}
                    </li>
                  ))}
                </ul>
              </section>

              {project.gallery.length > 1 && (
                <section>
                  <SectionTitle>Gallery</SectionTitle>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {project.gallery.map((g, i) => (
                      <div
                        key={i}
                        className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/8"
                      >
                        <img
                          src={g}
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                <SectionTitle>Technologies</SectionTitle>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                <SectionTitle>Links</SectionTitle>
                <div className="mt-3 flex flex-col gap-2">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2 text-[13px] text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.05]"
                    >
                      <span className="inline-flex items-center gap-2">
                        <ExternalLink className="h-3.5 w-3.5" /> Live site
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2 text-[13px] text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.05]"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Github className="h-3.5 w-3.5" /> Source
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.links?.caseStudy && (
                    <a
                      href={project.links.caseStudy}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2 text-[13px] text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.05]"
                    >
                      <span className="inline-flex items-center gap-2">
                        Full case study
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </Modal>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/45">
      {children}
    </p>
  );
}
