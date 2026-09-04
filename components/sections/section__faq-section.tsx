import { FAQAccordion } from "@/components/ui/ui__faq-accordion";
import { SectionEyebrow } from "@/components/ui/ui__section-eyebrow";
import { ScrollReveal } from "@/components/ui/ui__scroll-reveal";

const questions = [
  {
    question: "What is Sovora?",
    answer:
      "Sovora is an autonomous application platform for deploying, operating and governing modern applications. It turns application code into production infrastructure, helps operate that infrastructure and keeps workloads under European control.",
  },
  {
    question: "Does Sovora replace AWS or other cloud infrastructure?",
    answer:
      "Sovora sits above the infrastructure layer. Instead of configuring individual servers, networks and managed services, teams deploy and operate complete applications through Sovora.",
  },
  {
    question: "Where does Sovora run applications?",
    answer:
      "Sovora is designed around selected infrastructure providers and locations in Switzerland and Europe.",
  },
  {
    question: "What does sovereign mean in Sovora?",
    answer:
      "Sovora exposes and controls where application infrastructure, data and supporting services operate. Sovereignty policies can restrict workloads to approved regions and infrastructure providers.",
  },
  {
    question: "What does Sovora Autopilot do?",
    answer:
      "Autopilot understands application deployments, logs, metrics and infrastructure state. It can investigate problems, recommend operational changes and execute actions after approval.",
  },
  {
    question: "Is Sovora available now?",
    answer:
      "Sovora is being developed and opened progressively through its pilot program.",
  },
];

export function FAQSection() {
  return (
    <section
      aria-labelledby="faq-title"
      className="bg-[var(--color-white)] py-[90px]"
    >
      <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1360px] grid-cols-1 gap-[42px] sm:w-[calc(100%-48px)] sm:grid-cols-[.88fr_1.6fr] sm:gap-[84px]">
        <ScrollReveal amount={0.45}>
          <SectionEyebrow className="justify-start">FAQs</SectionEyebrow>
          <h2 id="faq-title" className="m-0">
            Have questions?
            <br />
            Find answers.
          </h2>
          <p className="mt-5 max-w-[285px]">
            We&apos;re here to help you get started.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <FAQAccordion items={questions} />
        </ScrollReveal>
      </div>
    </section>
  );
}
