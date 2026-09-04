import { SectionEyebrow } from "@/components/ui/ui__section-eyebrow";
import { ScrollReveal } from "@/components/ui/ui__scroll-reveal";
const industries = [
  {
    title: "Startups & SaaS",
    body: "Ship production software without hiring a platform team.",
    icon: "rocket" as const,
  },
  {
    title: "Product teams",
    body: "Give every application the same path from repository to production.",
    icon: "window" as const,
  },
  {
    title: "Regulated organisations",
    body: "Combine developer experience with infrastructure policies and European control.",
    icon: "shield" as const,
  },
  {
    title: "AI-native teams",
    body: "Give developers and agents controlled infrastructure APIs for deploying and operating software.",
    icon: "spark" as const,
  },
];
export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="bg-[var(--color-white)] py-[90px]"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1130px] sm:w-[calc(100%-48px)]">
        <ScrollReveal amount={0.45}>
          <SectionEyebrow className="justify-start">Use cases</SectionEyebrow>
          <h2 className="m-0">Built for teams that ship.</h2>
        </ScrollReveal>
        <ScrollReveal className="mt-[58px]" delay={0.08}>
          <div className="grid grid-cols-1 border border-[var(--color-border)] sm:grid-cols-2">
            {industries.map((industry, index) => (
              <article
                className={`min-h-[286px] border-b border-[var(--color-border)] p-[31px] sm:min-h-[300px] sm:p-[31px] ${index % 2 === 0 ? "sm:border-r" : ""} ${index >= 2 ? "sm:border-b-0" : ""}`}
                key={industry.title}
              >
                <IndustryIcon kind={industry.icon} />
                <h3 className="m-[24px_0_0] text-[23px] font-medium tracking-[-1.15px]">
                  {industry.title}
                </h3>
                <p className="m-[12px_0_0] max-w-[290px] text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                  {industry.body}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

type IndustryIconKind =
  | "rocket"
  | "window"
  | "spark"
  | "shield"
  | "building"
  | "globe";

function IndustryIcon({ kind }: { kind: IndustryIconKind }) {
  return (
    <div className="flex size-[96px] items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--color-brand-750)_0%,var(--color-brand-500)_53%,var(--color-brand-200)_100%)] shadow-[inset_0_0_0_1px_var(--color-white-14)]">
      <svg
        aria-hidden="true"
        className="size-[45px] text-[var(--color-white)]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
        viewBox="0 0 48 48"
      >
        {kind === "rocket" && (
          <>
            <path d="M28.5 8.5c-6.2 2-11 7.1-12.6 13.4l-3.9 3.9 10.7 10.7 3.9-3.9c6.3-1.6 11.4-6.4 13.4-12.6l-6.4-6.4c-1.8-1.8-3.2-3.2-5.1-5.1Z" />
            <path d="m15.3 29.8-4.7 5.9 2.4 2.4 5.9-4.7M20.3 35.3l-2.7 5.1M12.7 27.7l-5.1 2.7" />
            <circle cx="30.5" cy="17.5" r="2.5" />
          </>
        )}
        {kind === "window" && (
          <>
            <rect x="8.5" y="10" width="31" height="27" rx="1" />
            <path d="M8.5 17h31M15 13.5h.01M20 13.5h.01M25 13.5h.01M15 24h8M15 29h17" />
          </>
        )}
        {kind === "spark" && (
          <>
            <path d="m24 7 2.9 10.1L37 20l-10.1 2.9L24 33l-2.9-10.1L11 20l10.1-2.9L24 7Z" />
            <path d="m36.5 31 .9 3.1 3.1.9-3.1.9-.9 3.1-.9-3.1-3.1-.9 3.1-.9.9-3.1ZM12 31l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
          </>
        )}
        {kind === "shield" && (
          <>
            <path d="M24 7.5 38 13v9.2c0 8.3-5.7 14.6-14 18.3-8.3-3.7-14-10-14-18.3V13l14-5.5Z" />
            <path d="m17.5 24 4.2 4.2 8.8-8.8" />
          </>
        )}
        {kind === "building" && (
          <>
            <path d="M12 39V12h24v27M8 39h32M17 18h3M28 18h3M17 24h3M28 24h3M17 30h3M28 30h3M22 39v-5h4v5" />
            <path d="M16 12V8h16v4" />
          </>
        )}
        {kind === "globe" && (
          <>
            <circle cx="24" cy="24" r="16" />
            <path d="M8 24h32M24 8c4.5 4.4 6.7 9.7 6.7 16S28.5 35.6 24 40c-4.5-4.4-6.7-9.7-6.7-16S19.5 12.4 24 8Z" />
          </>
        )}
      </svg>
    </div>
  );
}
