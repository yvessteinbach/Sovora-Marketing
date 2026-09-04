import { Button } from "@/components/ui/ui__button";
import { SectionEyebrow } from "@/components/ui/ui__section-eyebrow";
import { ScrollReveal } from "@/components/ui/ui__scroll-reveal";

type Plan = {
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  usage?: string;
  action: string;
  href: string;
  features: string[];
  includes?: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    description: "For exploring Sovora and personal projects.",
    price: "CHF 0",
    priceSuffix: "/ month",
    action: "Start for free",
    href: "#start",
    features: [
      "1 user",
      "2 projects",
      "Preview deployments",
      "Basic logs & monitoring",
      "Community support",
      "Shared compute allowance",
    ],
  },
  {
    name: "Pro",
    description:
      "For developers, startups and small teams shipping production software.",
    price: "CHF 20",
    priceSuffix: "/ user / month",
    usage: "+ infrastructure usage",
    action: "Start building",
    href: "#start",
    featured: true,
    features: [
      "Unlimited projects",
      "Production environments",
      "Custom domains",
      "Git deployments",
      "Preview environments",
      "Advanced logs & observability",
      "Secrets & environment management",
      "Sovora Autopilot",
      "MCP, API & CLI access",
      "Team collaboration",
      "Email support",
    ],
  },
  {
    name: "Business",
    description:
      "For organisations that need more control, security and governance.",
    price: "CHF 45",
    priceSuffix: "/ user / month",
    usage: "+ infrastructure usage",
    action: "Contact us",
    href: "#contact",
    includes: "Everything in Pro, plus:",
    features: [
      "Advanced RBAC",
      "Audit logs",
      "Approval workflows",
      "Multiple organisations",
      "Extended observability",
      "Infrastructure policies",
      "Priority support",
      "Sovereign region controls",
      "AI governance controls",
      "Higher platform limits",
    ],
  },
  {
    name: "Enterprise",
    description:
      "For larger and regulated organisations with specific infrastructure requirements.",
    price: "Custom",
    action: "Talk to us",
    href: "#contact",
    includes: "Everything in Business, plus:",
    features: [
      "Dedicated environments",
      "Custom infrastructure architecture",
      "Dedicated or isolated compute",
      "Custom regions/providers",
      "SSO / SAML",
      "SLA options",
      "Compliance support",
      "Custom security policies",
      "Migration assistance",
      "Dedicated support",
    ],
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="bg-[var(--color-white)] py-[90px]"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1360px] sm:w-[calc(100%-48px)]">
        <ScrollReveal amount={0.45}>
          <SectionEyebrow className="justify-start">Pricing</SectionEyebrow>
          <h2 id="pricing-title" className="m-0">
            Flexible pricing for any scale.
          </h2>
          <p className="mt-[18px] max-w-[620px]">
            Start free, then choose the level of control and support your team
            needs as you ship.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-[62px]" delay={0.08}>
          <div className="grid grid-cols-1 border border-[var(--color-border)] lg:grid-cols-4">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                id={plan.name === "Enterprise" ? "enterprise" : undefined}
                className={`relative flex flex-col border-[var(--color-border)] p-[25px] lg:p-[32px] ${index < plans.length - 1 ? "border-b lg:border-r lg:border-b-0" : ""} ${plan.featured ? "bg-[var(--color-brand)] text-white" : ""}`}
              >
                <h3 className="m-0 text-[28px]">{plan.name}</h3>
                <p
                  className={`m-[9px_0_0] min-h-[60px] ${plan.featured ? "text-[var(--color-brand-50)]" : "text-[var(--color-text-subtle)]"}`}
                >
                  {plan.description}
                </p>
                <div className="mt-[35px] min-h-[57px]">
                  <strong className="text-[36px] leading-none font-medium tracking-[-2px]">
                    {plan.price}
                  </strong>
                  {plan.priceSuffix && (
                    <span className="ml-2 text-[17px] font-medium">
                      {plan.priceSuffix}
                    </span>
                  )}
                  {plan.usage && (
                    <em
                      className={`mt-1 block text-[13px] ${plan.featured ? "text-[var(--color-brand-50)]" : "text-[var(--color-text-subtle)]"}`}
                    >
                      {plan.usage}
                    </em>
                  )}
                </div>
                <Button
                  className="mt-[30px] w-full sm:w-auto sm:self-start"
                  href={plan.href}
                  variant={plan.featured ? "secondary" : "primary"}
                >
                  {plan.action}
                </Button>
                <div
                  className={`mt-[32px] border-t pt-[25px] ${plan.featured ? "border-[var(--color-brand-200)]" : "border-[var(--color-border)]"}`}
                >
                  {plan.includes && (
                    <span
                      className={`text-[14px] ${plan.featured ? "text-[var(--color-brand-50)]" : "text-[var(--color-text-faint)]"}`}
                    >
                      {plan.includes}
                    </span>
                  )}
                  <ul
                    className={`m-0 list-square space-y-[13px] pl-[18px] text-[14px] ${plan.includes ? "mt-[20px]" : ""} ${plan.featured ? "marker:text-white" : "marker:text-[var(--color-brand)]"}`}
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="pl-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
