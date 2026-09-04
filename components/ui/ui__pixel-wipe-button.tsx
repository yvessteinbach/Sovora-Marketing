"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import type { ComponentProps } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon } from "@/components/ui/ui__arrow-up-right-icon";

type PixelWipeVariant = "primary" | "secondary";

type PixelWipeButtonProps = ComponentProps<typeof BaseButton> & {
  href?: string;
  showArrow?: boolean;
  variant?: PixelWipeVariant;
};

const PIXEL_SIZE = 10;
const SWEEP_SPEED = 0.45;

const fract = (value: number) => value - Math.floor(value);

function createThresholds(columns: number, rows: number) {
  const thresholds = new Float32Array(columns * rows);

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const noise = fract(
        Math.sin(column * 12.9898 + row * 78.233) * 43758.5453,
      );

      thresholds[row * columns + column] = column / columns + noise * 0.25;
    }
  }

  return thresholds;
}

/** A canvas-rendered pixel-sweep button. */
export function PixelWipeButton({
  children = "Descargar kit",
  className = "",
  href,
  onPointerEnter,
  onPointerLeave,
  showArrow = false,
  variant = "primary",
  ...props
}: PixelWipeButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const setTargetRef = useRef<(target: number) => void>(() => undefined);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    const canvas = canvasRef.current;

    if (!button || !canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let width = 169;
    let height = 46;

    let columns = Math.ceil(width / PIXEL_SIZE);
    let rows = Math.ceil(height / PIXEL_SIZE);

    let thresholds = createThresholds(columns, rows);

    let progress = 0;
    let target = 0;

    let baseColor = "";
    let fillColor = "";
    let shimmerColor = "";

    let frameId: number | undefined;
    let previousTime: number | undefined;

    const paint = () => {
      context.clearRect(0, 0, width, height);

      if (baseColor !== "transparent") {
        context.fillStyle = baseColor;
        context.fillRect(0, 0, width, height);
      }

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const threshold = thresholds[row * columns + column];

          if (threshold >= progress) continue;

          context.fillStyle =
            progress - threshold < 0.12 ? shimmerColor : fillColor;

          context.fillRect(
            column * PIXEL_SIZE,
            row * PIXEL_SIZE,
            PIXEL_SIZE,
            PIXEL_SIZE,
          );
        }
      }
    };

    const tick = (time: number) => {
      const delta =
        previousTime === undefined ? 0 : (time - previousTime) / 1000;

      previousTime = time;

      progress += (target - progress) * Math.min(1, delta / SWEEP_SPEED);

      if (Math.abs(target - progress) < 0.001) {
        progress = target;
      }

      paint();

      if (progress !== target) {
        frameId = requestAnimationFrame(tick);
      } else {
        frameId = undefined;
        previousTime = undefined;
      }
    };

    const setTarget = (nextTarget: number) => {
      target = nextTarget;

      if (frameId === undefined) {
        frameId = requestAnimationFrame(tick);
      }
    };

    setTargetRef.current = setTarget;

    const resize = () => {
      const bounds = button.getBoundingClientRect();

      width = Math.round(bounds.width);
      height = Math.round(bounds.height);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const styles = window.getComputedStyle(button);

      baseColor =
        styles.getPropertyValue("--pixel-sweep-base").trim() || baseColor;

      fillColor =
        styles.getPropertyValue("--pixel-sweep-fill").trim() || fillColor;

      shimmerColor =
        styles.getPropertyValue("--pixel-sweep-shimmer").trim() || shimmerColor;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.ceil(width / PIXEL_SIZE);
      rows = Math.ceil(height / PIXEL_SIZE);

      thresholds = createThresholds(columns, rows);

      paint();
    };

    const observer = new ResizeObserver(resize);

    observer.observe(button);
    resize();

    return () => {
      observer.disconnect();

      if (frameId !== undefined) {
        cancelAnimationFrame(frameId);
      }

      setTargetRef.current = () => undefined;
    };
  }, []);

  const handlePointerEnter: NonNullable<
    ComponentProps<typeof BaseButton>["onPointerEnter"]
  > = (event) => {
    setIsHovered(true);
    setTargetRef.current(1.25);

    onPointerEnter?.(event);
  };

  const handlePointerLeave: NonNullable<
    ComponentProps<typeof BaseButton>["onPointerLeave"]
  > = (event) => {
    setIsHovered(false);
    setTargetRef.current(0);

    onPointerLeave?.(event);
  };

  const buttonClassName = `
    pixel-sweep-button
    pixel-sweep-button--${variant}
    relative
    inline-flex
    h-[46px]
    min-w-[169px]
    cursor-pointer
    items-center
    justify-center
    gap-[14px]
    overflow-hidden
    rounded-full
    px-5
    ${className}
  `.trim();

  const textColor =
    variant === "primary"
      ? "text-[var(--color-white)]"
      : isHovered
        ? "text-[var(--color-ink)]"
        : "text-[var(--color-white)]";

  const content = (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 size-full"
        aria-hidden="true"
      />

      {showArrow && (
        <ArrowUpRightIcon
          className={`
            relative
            z-10
            size-[18px]
            transition-colors
            ${textColor}
          `}
        />
      )}

      <span
        className={`
          relative
          z-10
          text-[15px]
          font-semibold
          transition-colors
          ${textColor}
        `}
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <BaseButton
        ref={buttonRef}
        className={buttonClassName}
        render={<a href={href} />}
        nativeButton={false}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        {content}
      </BaseButton>
    );
  }

  return (
    <BaseButton
      ref={buttonRef}
      className={buttonClassName}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {content}
    </BaseButton>
  );
}
