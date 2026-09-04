import { Button } from "@/components/ui/ui__button";
import { PixelWipeBackground } from "@/components/ui/ui__pixel-wipe-background";
import { SectionEyebrow } from "@/components/ui/ui__section-eyebrow";
import { ScrollReveal } from "@/components/ui/ui__scroll-reveal";

export function HeroSection() {
  return (
    <main
      id="top"
      className="mx-auto w-full max-w-[1360px] overflow-hidden bg-[var(--color-white)] sm:my-[32px]"
    >
      <section
        className="relative isolate grid h-[80vh] place-items-center overflow-hidden rounded-lg bg-[linear-gradient(180deg,#003b37_0%,#00554e_45%,#00605a_100%)] py-[90px]"
        aria-labelledby="hero-title"
      >
        <PixelWipeBackground />
        <div
          className="hero-grain absolute inset-0 -z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-[186px] left-1/2 -z-10 h-[482px] w-[1160px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,var(--color-hero-glow-start)_0%,var(--color-hero-glow-middle)_30%,var(--color-hero-glow-end)_72%)] blur-[18px]"
          aria-hidden="true"
        />
        <ScrollReveal
          className="flex w-full flex-col items-center pt-[2px] text-center text-[var(--color-white)]"
          amount={0.45}
        >
          <SectionEyebrow>The autonomous application platform</SectionEyebrow>
          <h1 id="hero-title" className="m-0 text-balance">
            You build the application.
            <br />
            Sovora runs it.
          </h1>
          <p className="m-[37px_0_28px] px-6 sm:px-0">
            Deploy complete application stacks without managing the
            infrastructure behind them.
            <br className="hidden sm:block" />
            Sovora understands your architecture, operates your workloads and
            keeps everything under European control.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="#start" showArrow>
              Start building
            </Button>
            <Button href="/platform" variant="secondary">
              Explore the platform
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
