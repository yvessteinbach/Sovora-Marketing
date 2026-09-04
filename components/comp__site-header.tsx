"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/ui__button";

type MenuItem = {
  title: string;
  description: string;
  href: string;
  badge?: string;
};

type MenuGroup = {
  label: string;
  items: MenuItem[];
};

const menus: Record<"Products" | "Resources", MenuGroup[]> = {
  Products: [
    {
      label: "Platform",
      items: [
        {
          title: "Sovora Platform",
          description: "The autonomous application platform.",
          href: "/platform",
        },
        {
          title: "Deploy",
          description: "From repository to production infrastructure.",
          href: "/deploy",
        },
        {
          title: "Autopilot",
          description: "AI-powered infrastructure operations.",
          href: "/autopilot",
          badge: "New",
        },
      ],
    },
    {
      label: "Control",
      items: [
        {
          title: "Control",
          description: "Sovereignty, policies and governance.",
          href: "/control",
        },
        {
          title: "Infrastructure",
          description: "Regions, providers and application residency.",
          href: "/infrastructure",
        },
      ],
    },
    {
      label: "Start",
      items: [
        {
          title: "Start building",
          description: "Create your Sovora workspace.",
          href: "#start",
        },
        {
          title: "Talk to an expert",
          description: "Discuss your platform requirements.",
          href: "#contact",
        },
      ],
    },
  ],
  Resources: [
    {
      label: "Learn",
      items: [
        {
          title: "Documentation",
          description: "Guides for building and shipping on Sovora.",
          href: "#workflow",
        },
        {
          title: "Changelog",
          description: "See what’s new on the platform.",
          href: "#platform",
        },
        {
          title: "Status",
          description: "Current availability of Sovora services.",
          href: "#platform",
        },
      ],
    },
    {
      label: "Explore",
      items: [
        {
          title: "Customers",
          description: "How European teams ship with Sovora.",
          href: "#industries",
        },
        {
          title: "Industries",
          description: "Infrastructure for regulated industries.",
          href: "#industries",
        },
      ],
    },
    {
      label: "Get started",
      items: [
        {
          title: "Talk to an expert",
          description: "Discuss your platform requirements.",
          href: "#start",
        },
        {
          title: "Start building",
          description: "Create your Sovora workspace.",
          href: "#start",
        },
      ],
    },
  ],
};

const revealTransition = { duration: 0.42, ease: [0.22, 1, 0.36, 1] } as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="m3 4.5 3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5 text-[color:var(--color-ink)]/45"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4 12 12 4M6 4h6v6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<keyof typeof menus | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setOpenMenu(null)}
      className="sticky top-0 z-50 border-b border-[var(--color-ink-09)] bg-[color:var(--color-white)]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center gap-3 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Sovora home"
          onClick={closeAll}
        >
          <Image
            src="/logo_icon_text.svg"
            alt="Sovora"
            width={610}
            height={175}
            className="h-7 w-auto"
          />
        </Link>

        <nav
          className="ml-3 flex h-full shrink-0 items-center gap-1 sm:ml-9"
          aria-label="Main navigation"
        >
          {(Object.keys(menus) as Array<keyof typeof menus>).map((menu) => {
            const isOpen = openMenu === menu;
            return (
              <button
                key={menu}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${menu.toLowerCase()}-menu`}
                onMouseEnter={() => setOpenMenu(menu)}
                onFocus={() => setOpenMenu(menu)}
                onClick={() => setOpenMenu(isOpen ? null : menu)}
                className={`flex h-full items-center gap-1.5 px-3 text-[13px] transition-colors ${isOpen ? "text-[var(--color-ink)]" : "text-[color:var(--color-ink)]/60 hover:text-[var(--color-ink)]"}`}
              >
                <span>{menu}</span>
                <Chevron open={isOpen} />
              </button>
            );
          })}
          <a
            href="#enterprise"
            className="px-3 text-[13px] text-[color:var(--color-ink)]/60 transition-colors hover:text-[var(--color-ink)]"
          >
            Company
          </a>
          <a
            href="#pricing"
            className="px-3 text-[13px] text-[color:var(--color-ink)]/60 transition-colors hover:text-[var(--color-ink)]"
          >
            Pricing
          </a>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Button href="#login" variant="text-dark" onClick={closeAll}>
            Log In
          </Button>
          <Button href="#start" onClick={closeAll}>
            Start building
          </Button>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hidden"
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-transform ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-current transition-transform ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            key={openMenu}
            id={`${openMenu.toLowerCase()}-menu`}
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={reduceMotion ? { duration: 0 } : revealTransition}
            className="absolute inset-x-0 top-full block border-b border-[var(--color-ink-09)] bg-[var(--color-white)] shadow-[0_16px_35px_var(--color-ink-07)]"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: reduceMotion ? 0 : 0.06,
                    delayChildren: reduceMotion ? 0 : 0.06,
                  },
                },
              }}
              className="mx-auto grid w-full max-w-[1440px] grid-cols-3 px-10 py-7"
            >
              {menus[openMenu].map((group, groupIndex) => (
                <motion.section
                  key={group.label}
                  variants={{
                    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: reduceMotion
                        ? { duration: 0 }
                        : revealTransition,
                    },
                  }}
                  className={`px-7 ${groupIndex ? "border-l border-[var(--color-ink-09)]" : ""}`}
                  aria-labelledby={`${openMenu}-${group.label}`}
                >
                  <h3
                    id={`${openMenu}-${group.label}`}
                    className="mb-3 text-[11px] font-medium tracking-normal text-[color:var(--color-ink)]/45"
                  >
                    {group.label}
                  </h3>
                  <ul className="space-y-1">
                    {group.items.map((item, itemIndex) => (
                      <motion.li
                        key={item.title}
                        variants={{
                          hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: reduceMotion
                              ? { duration: 0 }
                              : {
                                  ...revealTransition,
                                  delay: itemIndex * 0.035,
                                },
                          },
                        }}
                      >
                        <a
                          href={item.href}
                          onClick={closeAll}
                          className="group block rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--color-ink-04)]"
                        >
                          <div className="flex items-center gap-2">
                            <h3 className="text-[13px] font-medium tracking-normal">
                              {item.title}
                            </h3>
                            {item.badge && (
                              <span className="rounded-full bg-[var(--color-surface-blue-muted)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--color-brand-deep)]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 text-[12px] leading-5 text-[color:var(--color-ink)]/55">
                            {item.description}
                          </p>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.section>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {mobileOpen && (
        <nav
          className="border-t border-[var(--color-ink-09)] bg-[var(--color-white)] px-5 py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          {["Products", "Resources", "Enterprise", "Pricing"].map((item) => (
            <a
              key={item}
              href={
                item === "Enterprise"
                  ? "#enterprise"
                  : item === "Pricing"
                    ? "#pricing"
                    : "#platform"
              }
              onClick={closeAll}
              className="flex items-center justify-between border-b border-[var(--color-ink-07)] py-3.5 text-[15px]"
            >
              {item}
              <ArrowUpRight />
            </a>
          ))}
          <div className="flex gap-2 py-4">
            <Button href="#login" variant="text-dark" onClick={closeAll}>
              Log In
            </Button>
            <Button href="#start" onClick={closeAll}>
              Start building
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
