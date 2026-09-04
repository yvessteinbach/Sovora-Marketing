import type { ReactNode } from "react";
import Link from "next/link";

type LegalSection = {
  title: string;
  children: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  description,
  updatedAt,
  sections,
}: LegalPageProps) {
  return (
    <main className="flex-1" id="top">
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 px-5 sm:px-8 lg:grid-cols-[minmax(210px,1fr)_minmax(0,3fr)] lg:px-10">
          <div className="border-b border-[var(--color-border)] py-7 lg:border-r lg:border-b-0 lg:py-12 lg:pr-10">
            <p className="text-[12px] font-medium tracking-[-0.1px] text-[var(--color-brand)]">
              {eyebrow}
            </p>
          </div>
          <div className="py-12 lg:px-16 lg:py-[88px]">
            <h1 className="max-w-[760px] text-[48px] leading-[.9] tracking-[-2.6px] sm:text-[74px] sm:tracking-[-4px]">
              {title}
            </h1>
            <p className="mt-7 max-w-[530px] text-[17px] leading-[1.55] text-[var(--color-text-muted)]">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1360px] grid-cols-1 px-5 sm:px-8 lg:grid-cols-[minmax(210px,1fr)_minmax(0,3fr)] lg:px-10">
        <aside className="border-b border-[var(--color-border)] py-7 lg:border-r lg:border-b-0 lg:py-12 lg:pr-10">
          <p className="text-[12px] font-medium text-[var(--color-text-subtle)]">
            Last updated
          </p>
          <time className="mt-1 block text-[14px] text-[var(--color-text)]">
            {updatedAt}
          </time>
        </aside>
        <article className="max-w-[790px] py-12 lg:px-16 lg:py-[88px]">
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-[27px] leading-[1] tracking-[-1.25px] sm:text-[34px]">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-[15px] leading-[1.65] text-[var(--color-text-muted)] [&_a]:font-medium [&_a]:text-[var(--color-brand)] [&_a]:underline [&_a]:decoration-[var(--color-brand-200)] [&_a]:underline-offset-4 hover:[&_a]:decoration-[var(--color-brand)]">
                  {section.children}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-16 border-t border-[var(--color-border)] pt-7">
            <Link
              href="/"
              className="text-[14px] font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-brand)]"
            >
              Back to home
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
