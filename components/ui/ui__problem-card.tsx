"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState, type ReactNode } from "react";

type ProblemCardProps = {
  className?: string;
  backgroundImage?: string;
  description: string;
  icon?: ReactNode;
  title: string;
  title2: string;
  revealDelay?: number;
};

const transition = { duration: 0.42, ease: [0.22, 1, 0.36, 1] } as const;

export function ProblemCard({
  className,
  backgroundImage,
  description,
  icon,
  title,
  title2,
  revealDelay = 0,
}: ProblemCardProps) {
  const reduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.article
      className={`relative isolate flex min-h-[175px] min-w-0 flex-col justify-between overflow-hidden border-b border-[var(--color-dark-border)] bg-[var(--color-ink)] p-7 outline-none last:border-b-0 focus-visible:shadow-[inset_0_0_0_1px_var(--color-brand-accent)] sm:min-h-0 sm:border-r sm:border-b-0 sm:p-[38px_37px_33px] sm:last:border-r-0 ${className ?? ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      animate={{
        backgroundColor: isActive
          ? "var(--color-ink-strong)"
          : "var(--color-ink)",
      }}
      transition={
        reduceMotion ? { duration: 0 } : { ...transition, delay: revealDelay }
      }
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
    >
      {backgroundImage && (
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
          initial={false}
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.035 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={backgroundImage} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(10_11_12_/_0.3)_0%,rgb(10_11_12_/_0.08)_38%,rgb(10_11_12_/_0.8)_71%,var(--color-ink)_100%)]" />
        </motion.div>
      )}
      {icon && (
        <div
          className="size-32 overflow-hidden [&>svg]:size-full"
          aria-hidden="true"
        >
          {icon}
        </div>
      )}
      <div className="min-h-[72px] text-[#eee]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.h3
            key={isActive ? title2 : title}
            className="m-0"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: isActive ? -5 : 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
            transition={reduceMotion ? { duration: 0 } : transition}
          >
            {isActive ? title2 : title}
          </motion.h3>
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.p
              className="m-0 mt-[15px] max-w-[355px]"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 5 }}
              transition={reduceMotion ? { duration: 0 } : transition}
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
