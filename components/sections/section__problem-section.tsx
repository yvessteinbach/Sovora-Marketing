"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ProblemCard } from "@/components/ui/ui__problem-card";
import { SectionEyebrow } from "@/components/ui/ui__section-eyebrow";

const revealTransition = { duration: 0.42, ease: [0.22, 1, 0.36, 1] } as const;

const problems = [
  {
    title: "Deploy",
    title2: "From repository to production",
    description:
      "Sovora understands your application and provisions the services it needs.",
    icon: <Image src="/illustrations/deploy.png" alt="" width={256} height={256} />,
  },
  {
    title: "Operate",
    title2: "Without becoming your own platform team",
    description:
      "Monitoring, diagnostics and infrastructure operations happen in one place.",
    icon: <Image src="/illustrations/operate.png" alt="" width={256} height={256} />,
  },
  {
    title: "Govern",
    title2: "Without losing control",
    description:
      "Define where workloads, data and supporting infrastructure are allowed to run.",
    icon: <Image src="/illustrations/govern.png" alt="" width={256} height={256} />,
  },
];

export function ProblemSection() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? false : { opacity: 0, y: 24 };

  return (
    <section
      className="flex min-h-[720px] w-full justify-center rounded-lg bg-[var(--color-ink)] py-[90px] text-[var(--color-on-dark-strong)] sm:min-h-[925px]"
      aria-labelledby="problem-title"
    >
      <div className="w-full max-w-[1360px] text-center">
        <motion.div
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={reduceMotion ? { duration: 0 } : revealTransition}
        >
          <SectionEyebrow className="mb-[29px]">One platform</SectionEyebrow>
          <h2 id="problem-title" className="m-0 px-5 sm:px-0">
            Everything handled <br/>
            as one application platform.
          </h2>
        </motion.div>
        <div className="mx-auto mt-[55px] grid w-full max-w-[1360px] grid-cols-1 border border-[var(--color-dark-border)] text-left sm:mt-[81px] sm:h-[365px] sm:grid-cols-3">
          {problems.map((problem, index) => (
            <ProblemCard
              key={problem.title}
              {...problem}
              revealDelay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
