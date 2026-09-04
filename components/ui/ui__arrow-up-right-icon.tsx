type ArrowUpRightIconProps = { className?: string };

export function ArrowUpRightIcon({ className }: ArrowUpRightIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}
