import Image from "next/image";
import { Button } from "@/components/ui/ui__button";
import { ScrollReveal } from "@/components/ui/ui__scroll-reveal";

const footerLinkClassName =
  "relative block w-fit after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none";

export function FooterSection() {
  return (
    <footer
      id="enterprise"
      className="bg-[var(--color-ink)] text-[var(--color-on-dark)]"
    >
      <section
        className="flex min-h-[420px] items-center justify-center px-4 py-[90px] text-center sm:min-h-[520px]"
        aria-labelledby="cta-title"
      >
        <ScrollReveal amount={0.45}>
          <h2
            id="cta-title"
            className="m-0 text-[44px] leading-[.94] tracking-[-2.7px] sm:text-[54px] sm:tracking-[-3.6px]"
          >
            You build the application.
            <br />
            Sovora runs the rest.
          </h2>
          <div className="mt-[38px] flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#start" className="min-w-[124px]" variant="primary">
              Start building
            </Button>
            <Button href="#mcp" className="min-w-[205px]" variant="secondary">
              Explore Sovora Autopilot
            </Button>
          </div>
        </ScrollReveal>
      </section>
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1360px] sm:w-[calc(100%-48px)]">
        <ScrollReveal
          className="grid grid-cols-1 gap-[35px] border-t border-[var(--color-dark-border-strong)] py-[70px] sm:grid-cols-[2fr_repeat(3,1fr)] sm:gap-[30px] sm:pb-[95px]"
          amount={0.2}
        >
          <div>
            <Image
              src="/logo_icon_text.svg"
              alt="Sovora"
              width={600}
              height={175}
              className="h-8 w-auto brightness-0 invert sm:h-10"
            />
          </div>
          <div>
            <span className="font-semibold">Products</span>
            <a className={footerLinkClassName} href="/deploy">
              Deploy
            </a>
            <a className={footerLinkClassName} href="/autopilot">
              Autopilot
            </a>
            <a className={footerLinkClassName} href="/control">
              Control
            </a>
          </div>
          <div>
            <span className="font-semibold">Resources</span>
            <a className={footerLinkClassName} href="/platform">
              Platform
            </a>
            <a className={footerLinkClassName} href="#workflow">
              Documentation
            </a>
            <a className={footerLinkClassName} href="#platform">
              Status
            </a>
          </div>
          <div>
            <span className="font-semibold">Legal</span>
            <a className={footerLinkClassName} href="/imprint">
              Imprint
            </a>
            <a className={footerLinkClassName} href="/terms-of-service">
              Terms of Service
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal className="overflow-hidden" amount={0.1} offset={16}>
          <Image
            src="/logo_text.svg"
            alt=""
            width={1360}
            height={288}
            className="h-auto w-full translate-y-[18%] opacity-[0.13] brightness-0 invert sm:translate-y-[20%]"
          />
        </ScrollReveal>
      </div>
    </footer>
  );
}
