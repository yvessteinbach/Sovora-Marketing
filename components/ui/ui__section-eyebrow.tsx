import type { ReactNode } from "react";

type SectionEyebrowProps = { children: ReactNode; className?: string };

export function SectionEyebrow({
  children,
  className = "",
}: SectionEyebrowProps) {
  return (
    <p className={`mb-5 flex items-center justify-center gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className="block h-[5px] w-[15px] -skew-x-[27deg] bg-[var(--color-brand-accent)]"
      />
      {children}
    </p>
  );
}
