"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Docker,
  Github,
  Gitlab,
  Mongodb,
  Nextjs,
  Nodejs,
  Postgresql,
  Python,
  _React as React,
  Redis,
} from "@dev.icons/react";
import type { Icon } from "@dev.icons/react";
import { SectionEyebrow } from "@/components/ui/ui__section-eyebrow";
import styles from "./section__compatibility.module.css";

const revealTransition = { duration: 0.42, ease: [0.22, 1, 0.36, 1] } as const;

const rows = [
  [
    { name: "Next.js", Icon: Nextjs },
    { name: "React", Icon: React },
    { name: "Node.js", Icon: Nodejs },
    { name: "Docker", Icon: Docker },
  ],
  [
    { name: "PostgreSQL", Icon: Postgresql },
    { name: "GitHub", Icon: Github },
    { name: "Python", Icon: Python },
    { name: "Redis", Icon: Redis },
  ],
  [
    { name: "GitLab", Icon: Gitlab },
    { name: "MongoDB", Icon: Mongodb },
    { name: "Next.js", Icon: Nextjs },
    { name: "React", Icon: React },
  ],
] as const;

export function CompatibilitySection() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? false : { opacity: 0, y: 24 };

  return (
    <section id="compatibility" className="overflow-hidden bg-[var(--color-white)] py-[90px] text-[var(--color-text)]" aria-labelledby="compatibility-title">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1360px] sm:w-[calc(100%-48px)]">
        <div className={`relative isolate overflow-hidden px-0 py-16 sm:py-20 lg:py-24 ${styles.gridFade}`}>
          <motion.div
            className="relative mx-auto max-w-[650px] px-5 text-center sm:px-10"
            initial={reveal}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={reduceMotion ? { duration: 0 } : revealTransition}
          >
            <SectionEyebrow>Compatible by design</SectionEyebrow>
            <h2 id="compatibility-title" className="m-0 text-balance text-[clamp(42px,5vw,64px)] leading-[0.91] tracking-[-0.06em]">
              Bring your stack.
            </h2>
            <p className="mx-auto mt-6 max-w-[510px] text-[15px] leading-[1.55] text-[var(--color-text-subtle)] sm:text-[16px]">
              From the framework in your repository to the data services behind it, Sovora understands the application as one connected system.
            </p>
          </motion.div>

          <div className={`relative mt-14 overflow-hidden sm:mt-16 ${styles.fadeEdges}`} aria-label="Compatible technologies">
            {rows.map((technologies, index) => (
              <motion.div
                key={index}
                className="mb-7 last:mb-0 sm:mb-10"
                initial={reveal}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={reduceMotion ? { duration: 0 } : { ...revealTransition, delay: 0.16 + index * 0.1 }}
              >
                <div className={`${styles.track} ${index === 1 ? styles.right : styles.left}`}>
                  <TechnologySet technologies={technologies} />
                  <TechnologySet technologies={technologies} ariaHidden />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologySet({ technologies, ariaHidden = false }: { technologies: readonly { name: string; Icon: Icon }[]; ariaHidden?: boolean }) {
  const repeatedTechnologies = Array.from({ length: 5 }, () => technologies).flat();

  return (
    <div className={styles.set} aria-hidden={ariaHidden}>
      {repeatedTechnologies.map((technology, index) => (
        <div className={styles.tile} key={`${technology.name}-${index}`} aria-label={technology.name}>
          <span className={styles.icon} aria-hidden="true">
            <technology.Icon size={46} />
          </span>
        </div>
      ))}
    </div>
  );
}
