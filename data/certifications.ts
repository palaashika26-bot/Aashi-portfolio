import type { Certification } from "@/types";
import { withBasePath } from "@/lib/utils";

export const certifications: Certification[] = [
  {
    id: "c-anthropic",
    name: "Claude Code in Action",
    issuer: "Anthropic",
    year: "2025",
    credentialUrl: withBasePath("/certificates/anthropic_certificate.pdf"),
    accent: "blue",
  },
  {
    id: "c-deloitte",
    name: "Technology Job Simulation",
    issuer: "Deloitte",
    year: "2025",
    credentialUrl: withBasePath("/certificates/deloitte_certificate.pdf"),
    accent: "emerald",
  },
  {
    id: "c-tata",
    name: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata",
    year: "2025",
    credentialUrl: withBasePath("/certificates/TATA_CERTIFICATE (1).pdf"),
    accent: "violet",
  },
];
