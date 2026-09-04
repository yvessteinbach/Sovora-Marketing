import { Button } from "@/components/ui/ui__button";

type ProductPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
  note: string;
};

export function ProductPage({
  eyebrow,
  title,
  description,
  capabilities,
  note,
}: ProductPageProps) {
  return (
    <main className="bg-[var(--color-white)]">
      <section className="mx-auto grid min-h-[620px] max-w-[1360px] place-items-center px-5 py-[90px] text-center sm:px-10">
        <div className="max-w-[830px]">
          <p className="text-[12px] font-semibold tracking-[.08em] text-[var(--color-brand)] uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-balance">{title}</h1>
          <p className="mx-auto mt-7 max-w-[670px] text-[17px] leading-[1.6]">
            {description}
          </p>
          <Button href="#start" showArrow className="mt-8">
            Start building
          </Button>
        </div>
      </section>
      <section className="bg-[var(--color-ink)] px-5 py-[90px] text-[var(--color-on-dark)] sm:px-10">
        <div className="mx-auto max-w-[1130px]">
          <p className="text-[12px] font-semibold tracking-[.08em] text-[var(--color-brand-100)] uppercase">
            What it does
          </p>
          <div className="mt-7 grid grid-cols-1 border border-[var(--color-dark-border-soft)] sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                className={`min-h-[142px] p-6 ${index < capabilities.length - 1 ? "border-b border-[var(--color-dark-border-soft)] sm:border-r sm:border-b-0" : ""}`}
                key={capability}
              >
                <span className="text-[var(--color-brand-200)]">
                  0{index + 1}
                </span>
                <h2 className="mt-5 text-[21px] leading-tight tracking-[-.8px]">
                  {capability}
                </h2>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-[660px] text-[16px] leading-[1.6] text-[var(--color-dark-text-muted)]">
            {note}
          </p>
        </div>
      </section>
    </main>
  );
}
