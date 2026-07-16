"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/constants";

const NODES = [
  { id: "developer", x: 80, y: 40, label: "Developer" },
  { id: "code", x: 200, y: 40, label: "Code" },
  { id: "git", x: 320, y: 40, label: "Git" },
  { id: "github", x: 320, y: 110, label: "GitHub" },
  { id: "actions", x: 320, y: 180, label: "Actions" },
  { id: "api", x: 320, y: 250, label: "API" },
  { id: "database", x: 200, y: 290, label: "Database" },
  { id: "render", x: 80, y: 250, label: "Render" },
  { id: "vercel", x: 80, y: 180, label: "Vercel" },
  { id: "browser", x: 80, y: 110, label: "Browser" },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [5, 6], [6, 7], [7, 8], [8, 9], [9, 0],
];

const NUM_PARTICLES = 6;

export default function DeveloperNetwork() {
  const [hovered, setHovered] = useState(false);

  const particleDuration = hovered ? 5 : 8;
  const glowIntensity = hovered ? 0.35 : 0.15;
  const labelBrightness = hovered ? "0.5" : "0.3";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: EASE.out }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0D0D10]/30 backdrop-blur-sm cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/4 via-transparent to-purple-500/4" />

      <svg
        viewBox="0 0 400 340"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="nodeBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </radialGradient>
          <filter id="particleGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform="translate(200,165)">
          <circle
            cx="0" cy="0" r="135"
            fill="none" stroke="rgba(59,130,246,0.035)"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="ring-spin"
          />
          <circle
            cx="0" cy="0" r="105"
            fill="none" stroke="rgba(139,92,246,0.03)"
            strokeWidth="0.8"
            strokeDasharray="2 6"
            className="ring-spin-reverse"
            style={{ animationDuration: "25s" }}
          />
        </g>

        {EDGES.map(([fi, ti], i) => {
          const f = NODES[fi];
          const t = NODES[ti];
          const d = `M ${f.x} ${f.y} L ${t.x} ${t.y}`;
          return (
            <g key={i}>
              <path
                d={d}
                stroke="rgba(59,130,246,0.06)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d={d}
                stroke={`rgba(59,130,246,${glowIntensity})`}
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="3 9"
                className="dash-flow"
                style={{ transition: "stroke 0.4s ease" }}
              />
            </g>
          );
        })}

        {Array.from({ length: NUM_PARTICLES }).map((_, i) => (
          <circle
            key={i}
            r="2"
            fill="#60A5FA"
            className="particle"
            style={{
              animationDuration: `${particleDuration}s`,
              animationDelay: `${(i / NUM_PARTICLES) * particleDuration}s`,
              transition: "animation-duration 0.4s ease",
            }}
            filter="url(#particleGlow)"
          />
        ))}

        {NODES.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r="13" fill="url(#nodeBg)" />
            <circle
              cx={node.x}
              cy={node.y}
              r="3.5"
              fill="#3B82F6"
              className="node-pulse"
              style={{
                transition: "fill 0.4s ease, filter 0.4s ease",
              }}
            />
            <text
              x={node.x}
              y={node.y + 20}
              textAnchor="middle"
              fill={`rgba(255,255,255,${labelBrightness})`}
              fontSize="7.5"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              style={{ transition: "fill 0.4s ease" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      <style>{`
        .particle {
          animation: particle-flow linear infinite;
          will-change: transform;
        }
        .node-pulse {
          animation: node-pulse-kf 3s ease-in-out infinite;
        }
        .dash-flow {
          animation: dash-flow-kf 1s linear infinite;
        }
        .ring-spin {
          animation: spin-slow 30s linear infinite;
          transform-origin: center;
        }
        .ring-spin-reverse {
          animation: spin-reverse 20s linear infinite;
          transform-origin: center;
        }
        @keyframes particle-flow {
          0%   { transform: translate(80px, 40px); }
          10%  { transform: translate(200px, 40px); }
          20%  { transform: translate(320px, 40px); }
          30%  { transform: translate(320px, 110px); }
          40%  { transform: translate(320px, 180px); }
          50%  { transform: translate(320px, 250px); }
          60%  { transform: translate(200px, 290px); }
          70%  { transform: translate(80px, 250px); }
          80%  { transform: translate(80px, 180px); }
          90%  { transform: translate(80px, 110px); }
          100% { transform: translate(80px, 40px); }
        }
        @keyframes node-pulse-kf {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes dash-flow-kf {
          to { stroke-dashoffset: -12; }
        }
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </motion.div>
  );
}
