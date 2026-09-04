"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionEyebrow } from "@/components/ui/ui__section-eyebrow";

const revealTransition = { duration: 0.42, ease: [0.22, 1, 0.36, 1] } as const;

const stats = [
  { value: "100%", label: "European infrastructure", mark: <InfrastructureMark /> },
  { value: "Up to 2.6×", label: "Faster to production than traditional cloud*", mark: <VelocityMark /> },
  { value: "0", label: "Manual infrastructure setup", mark: <SetupMark /> },
] as const;

export function StatsSection() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? false : { opacity: 0, y: 24 };

  return (
    <section
      className="bg-[var(--color-white)] py-[90px] text-[var(--color-text)]"
      aria-labelledby="stats-title"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1360px] sm:w-[calc(100%-48px)]">
        <motion.div
          className="max-w-[650px] pt-[80px] pb-[88px] sm:pt-[112px] sm:pb-[116px]"
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={reduceMotion ? { duration: 0 } : revealTransition}
        >
          <SectionEyebrow className="justify-start">
            Less infrastructure work
          </SectionEyebrow>
          <h2 id="stats-title" className="m-0 max-w-[590px]">
            More time building.<br/>Less time managing.
          </h2>
        </motion.div>

        <div className="grid gap-y-14 pb-16 md:grid-cols-3 md:gap-x-10 md:gap-y-0 md:pb-20">
          {stats.map((stat, index) => (
            <motion.article
              className="group relative min-h-[220px] overflow-hidden px-5 sm:min-h-[240px] sm:px-10"
              key={stat.value}
              initial={reveal}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { ...revealTransition, delay: index * 0.08 }
              }
            >
              <div className="mb-[52px] h-10 w-14 text-[var(--color-brand)] opacity-75 transition-opacity duration-300 group-hover:opacity-100">
                {stat.mark}
              </div>
              <p className="m-0 text-[42px] leading-[0.9] font-medium tracking-[-2.5px] text-[var(--color-text-strong)] sm:text-[50px] sm:tracking-[-3px]">
                {stat.value}
              </p>
              <p className="mt-3 mb-0 max-w-[255px] text-[14px] leading-[1.4] text-[var(--color-text-subtle)]">
                {stat.label}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          className="m-0 max-w-[780px] px-5 pb-10 text-[11px] leading-[1.45] text-[var(--color-text-faint)] sm:px-10 sm:pb-14"
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { ...revealTransition, delay: stats.length * 0.08 }
          }
        >
          *Based on internal Sovora deployment benchmarks against manual provisioning on traditional cloud infrastructure. Results vary by workload.
        </motion.p>
      </div>
    </section>
  );
}

function InfrastructureMark() {
  return (
    <svg viewBox="0 0 56 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="13.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="20" r="5.5" stroke="currentColor" strokeWidth="1" />
      <path d="M40 20h15M47.5 12.5v15" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function VelocityMark() {
  return (
    <svg viewBox="0 0 56 40" fill="none" aria-hidden="true">
      <path d="M9 20h38M15 13h26M15 27h26" stroke="currentColor" strokeWidth="1" />
      <path d="m39 7 9 13-9 13" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function SetupMark() {
  return (
    <svg viewBox="0 0 56 40" fill="none" aria-hidden="true">
      <path d="M8 30 25 12l8 8 15-15" stroke="currentColor" strokeWidth="1" />
      <path d="M48 13V5h-8" stroke="currentColor" strokeWidth="1" />
      <path d="M8 34h40" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
