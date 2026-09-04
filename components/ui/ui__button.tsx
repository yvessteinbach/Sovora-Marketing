import { Button as BaseButton } from "@base-ui/react/button";
import type { ComponentProps } from "react";

import { ArrowUpRightIcon } from "@/components/ui/ui__arrow-up-right-icon";
import { PixelWipeButton } from "@/components/ui/ui__pixel-wipe-button";

type ButtonVariant = "primary" | "secondary" | "text-dark" | "text-light";
type ButtonProps = ComponentProps<typeof BaseButton> & {
  href?: string;
  showArrow?: boolean;
  variant?: ButtonVariant;
};

export function Button({
  children,
  className = "",
  href,
  showArrow = false,
  variant = "primary",
  ...props
}: ButtonProps) {
  if (variant === "primary" || variant === "secondary") {
    return (
      <PixelWipeButton
        className={className}
        href={href}
        showArrow={showArrow}
        variant={variant}
        {...props}
      >
        {children}
      </PixelWipeButton>
    );
  }

  const variants: Record<ButtonVariant, string> = {
    primary: "button-primary min-w-[169px]",
    secondary: "button-secondary",
    "text-dark": "button-text-dark h-auto p-0",
    "text-light": "button-text-light h-auto p-0",
  };
  const content = (
    <>
      {showArrow && <ArrowUpRightIcon className="size-[18px]" />}
      <span className="font-[600]">{children}</span>
    </>
  );
  const buttonClassName =
    `inline-flex h-[46px] cursor-pointer items-center justify-center gap-[14px] capitalize rounded-full px-5 transition-[transform,background-color,border-color,color] duration-150 ${variants[variant]} ${className}`.trim();

  if (href)
    return (
      <BaseButton
        className={buttonClassName}
        render={<a href={href} />}
        nativeButton={false}
        {...props}
      >
        {content}
      </BaseButton>
    );
  return (
    <BaseButton className={buttonClassName} {...props}>
      {content}
    </BaseButton>
  );
}
