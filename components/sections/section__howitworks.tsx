"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const stickyTransition = { duration: 0.82, ease: [0.22, 1, 0.36, 1] } as const;

const steps = [
  {
    title: "Give Sovora your code. Get production infrastructure.",
    body: "Connect your repository and Sovora turns your application architecture into a production environment, including services, networking, domains and data.",
    image: "/gradients/gradient1.png",
  },
  {
    title: "Everything your application needs, in one project.",
    body: "Frontends, APIs, workers, databases and caches belong to one application. Sovora deploys and operates them as one system instead of making you assemble infrastructure service by service.",
    image: "/gradients/gradient2.png",
  },
  {
    title: "Your infrastructure should tell you what's wrong.",
    body: "Sovora Autopilot understands your application, deployments and infrastructure. It investigates incidents, identifies likely causes and prepares safe actions instead of leaving you with another dashboard full of logs.",
    image: "/gradients/gradient3.png",
  },
] as const;

export function HowItWorksSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let frame = 0;
    const updateActiveStep = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        if (distance < closestDistance) {
          closestIndex = index;
          closestDistance = distance;
        }
      });

      setActiveIndex((current) => current === closestIndex ? current : closestIndex);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveStep);
    };

    updateActiveStep();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="workflow" className="overflow-clip bg-[var(--color-white)] py-[90px] text-[var(--color-dark-border)]" aria-labelledby="workflow-title">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1360px] sm:w-[calc(100%-48px)]">
        <div className="relative mx-auto mt-[60px] grid max-w-[1450px] gap-16 sm:mt-[70px] lg:grid-cols-[minmax(0,800px)_minmax(320px,1fr)] lg:gap-16">
          <WorkflowVisual activeIndex={activeIndex} reduceMotion={reduceMotion} />
          <div>
            {steps.map((step, index) => <WorkflowStep step={step} index={index} active={activeIndex === index} reduceMotion={reduceMotion} stepRef={(node) => { stepRefs.current[index] = node; }} key={step.title} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowVisual({ activeIndex, reduceMotion }: { activeIndex: number; reduceMotion: boolean | null }) {
  return (
    <div className="lg:sticky lg:top-[calc(50svh-375px)] lg:h-fit lg:w-full lg:max-w-[800px]">
      <motion.div
        className="relative h-[430px] w-full lg:h-[750px]"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={reduceMotion ? { duration: 0 } : stickyTransition}
      >
        {steps.map((step, index) => (
          <motion.div key={step.title} className="absolute inset-0" initial={false} animate={{ opacity: index === activeIndex ? 1 : 0, scale: index === activeIndex ? 1 : 0.965, y: index === activeIndex ? 0 : 14 }} transition={reduceMotion ? { duration: 0 } : stickyTransition} aria-hidden={index !== activeIndex}>
            <Image src={step.image} alt="" fill priority={index === 0} sizes="(min-width: 1024px) 800px, 100vw" className="object-cover" />
            {index === 0 && (
              <Image
                src="/images/deployment.png"
                alt=""
                width={1549}
                height={1123}
                sizes="(min-width: 1024px) 640px, 80vw"
                className="pointer-events-none absolute top-1/2 left-1/2 z-10 w-[70%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_18px_28px_rgba(82,55,72,0.14)]"
              />
            )}
            {index === 1 && (
              <Image
                src="/images/aio.png"
                alt=""
                width={1549}
                height={1123}
                sizes="(min-width: 1024px) 640px, 80vw"
                className="pointer-events-none absolute top-1/2 left-1/2 z-10 w-[70%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_18px_28px_rgba(82,55,72,0.14)]"
              />
            )}
            {index === 2 && (
              <Image
                src="/images/autopilot.png"
                alt=""
                width={466}
                height={368}
                sizes="(min-width: 1024px) 466px, 58vw"
                className="pointer-events-none absolute top-1/2 left-1/2 z-10 w-[65%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_18px_28px_rgba(82,55,72,0.14)]"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function WorkflowStep({ step, index, active, reduceMotion, stepRef }: { step: (typeof steps)[number]; index: number; active: boolean; reduceMotion: boolean | null; stepRef: (node: HTMLElement | null) => void }) {
  return (
    <article
      ref={stepRef}
      data-step-index={index}
      className="flex min-h-[390px] items-center overflow-hidden py-5 sm:min-h-[430px] lg:h-[750px] lg:min-h-0 lg:py-0"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <motion.div
        className="max-w-full"
        initial={false}
        animate={{ opacity: active ? 1 : 0, y: active ? 0 : 28 }}
        transition={reduceMotion ? { duration: 0 } : stickyTransition}
        style={{ pointerEvents: active ? "auto" : "none" }}
        aria-hidden={!active}
      >
        <motion.h3
          className="m-0 text-[clamp(30px,3.2vw,46px)] font-medium leading-[0.98] tracking-[-0.055em]"
          initial={false}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 18 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.54, ease: [0.22, 1, 0.36, 1] }}
        >
          {step.title}
        </motion.h3>
        <motion.p
          className="m-[18px_0_0] max-w-full text-[15px] leading-[1.6]"
          initial={false}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 18 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.54, delay: active ? 0.14 : 0, ease: [0.22, 1, 0.36, 1] }}
        >
          {step.body}
        </motion.p>
      </motion.div>
    </article>
  );
}
