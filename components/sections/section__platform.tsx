"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";
import { SectionEyebrow } from "@/components/ui/ui__section-eyebrow";

type PlatformFeature = {
  title: string;
  visual?: string;
  className: string;
  backgroundColor: string;
  titleColor?: string;
  imagePosition?: string;
  imageScale?: number;
  imageOffset?: { x?: number; y?: number };
};

const features: readonly PlatformFeature[] = [
  // Adjust each card's color and illustration placement here.
  { title: "Autoscaling", visual: "/illustrations/autoscaling.png", className: "lg:col-start-2 lg:row-start-1", backgroundColor: "#1b1b1b", titleColor: "#f5f5f5", imagePosition: "center", imageScale: 1.5, imageOffset: { x: 50, y: 30 } },
  { title: "Managed data", visual: "/illustrations/data.png", className: "lg:col-start-1 lg:row-start-3 lg:row-span-2", backgroundColor: "#31343a", titleColor: "#f5f5f5", imagePosition: "center", imageScale: 1.1, imageOffset: { x: 25, y: 5 } },
  { title: "Sora Autopilot", visual: "/illustrations/sora.png", className: "lg:col-start-1 lg:row-start-1 lg:row-span-2", backgroundColor: "#00605a", titleColor: "#f5f5f5", imagePosition: "center", imageScale: 1, imageOffset: { x: 0, y: -10 } },
  { title: "Infrastructure control", visual: "/illustrations/infracontrol.png", className: "lg:col-start-2 lg:row-start-2 lg:row-span-2", backgroundColor: "#3d424a", titleColor: "#f5f5f5", imagePosition: "center", imageScale: 1.2, imageOffset: { x: -55, y: -40 } },
  { title: "MCP, API & CLI", visual: "/illustrations/mcp.png", className: "lg:col-start-2 lg:row-start-4", backgroundColor: "#00605a", titleColor: "#f5f5f5", imagePosition: "center", imageScale: 1.4, imageOffset: { x: 50, y: 20 } },
  { title: "Team collaboration", visual: "/illustrations/team.png", className: "lg:col-start-3 lg:row-start-1 lg:row-span-2", backgroundColor: "#00605a", titleColor: "#f5f5f5", imagePosition: "center", imageScale: 1.25, imageOffset: { x: 0, y: -20 } },
  { title: "Audit trails", visual: "/illustrations/audittrails.png", className: "lg:col-start-3 lg:row-start-3 lg:row-span-2", backgroundColor: "#31343a", titleColor: "#f5f5f5", imagePosition: "center", imageScale: 1.4, imageOffset: { x: 80, y: 20 } },
];

const transition = { duration: 0.42, ease: [0.22, 1, 0.36, 1] } as const;

function PlatformCard({ feature, index }: { feature: PlatformFeature; index: number }) {
  const reduceMotion = useReducedMotion();
  const imageStyle: CSSProperties = {
    objectPosition: feature.imagePosition ?? "center",
    transform: `translate(${feature.imageOffset?.x ?? 0}px, ${feature.imageOffset?.y ?? 0}px) scale(${feature.imageScale ?? 1})`,
  };

  return (
    <motion.article
      className={`relative isolate flex min-h-[248px] overflow-hidden rounded-lg p-7 sm:min-h-[285px] sm:p-9 lg:min-h-0 ${feature.className}`}
      style={{ backgroundColor: feature.backgroundColor }}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={reduceMotion ? { duration: 0 } : { ...transition, delay: index * 0.045 }}
    >
      {feature.visual && (
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0" aria-hidden="true">
          <Image src={feature.visual} alt="" fill sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw" className="object-contain opacity-95" style={imageStyle} />
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24" aria-hidden="true" style={{ background: `linear-gradient(0deg, ${feature.backgroundColor} 0%, ${feature.backgroundColor} 5%, transparent 100%)` }} />
      <h3 className="relative z-10 mt-auto max-w-[220px]" style={{ color: feature.titleColor ?? "var(--color-on-dark)" }}>{feature.title}</h3>
    </motion.article>
  );
}

export function ProductDetailsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="platform" className="bg-[var(--color-ink)] py-[90px] text-[var(--color-on-dark)]" aria-labelledby="platform-title">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1360px] sm:w-[calc(100%-48px)]">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={reduceMotion ? { duration: 0 } : transition}>
          <SectionEyebrow className="justify-start">Built into Sovora</SectionEyebrow>
          <h2 id="platform-title" className="m-0 max-w-[660px]">The platform work, already handled.</h2>
        </motion.div>

        <div className="mt-[55px] grid grid-cols-1 gap-3 text-left sm:mt-[81px] sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[178px]">
          {features.map((feature, index) => <PlatformCard key={feature.title} feature={feature} index={index} />)}
        </div>
      </div>
    </section>
  );
}
