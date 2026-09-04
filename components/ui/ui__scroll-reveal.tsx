"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const transition = { duration: 0.42, ease: [0.22, 1, 0.36, 1] } as const;

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  offset?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  amount = 0.25,
  offset = 24,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={reduceMotion ? { duration: 0 } : { ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
