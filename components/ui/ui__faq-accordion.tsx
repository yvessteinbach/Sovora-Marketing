"use client";

import { useId, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();

  return (
    <div className="border-t border-[var(--color-border)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${id}-panel-${index}`;

        return (
          <article
            className="border-b border-[var(--color-border)]"
            key={item.question}
          >
            <h3 className="m-0">
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 py-[23px] text-left outline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand-bright)] sm:py-[25px]"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                <h3>{item.question}</h3>
                <span
                  aria-hidden="true"
                  className={`relative size-5 shrink-0 transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? "rotate-45" : ""}`}
                >
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                  <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              id={panelId}
              inert={!isOpen || undefined}
              role="region"
            >
              <div className="overflow-hidden">
                <p className="m-0 max-w-[690px] pb-[25px] sm:pb-[28px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
