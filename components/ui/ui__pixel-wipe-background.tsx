"use client";

import { useEffect, useRef } from "react";

const PIXEL_SIZE = 18;
const CYCLE_DURATION = 6800;
const CURSOR_BURST_DURATION = 720;

type CursorBurst = {
  x: number;
  y: number;
  startedAt: number;
};

const fract = (value: number) => value - Math.floor(value);

function createThresholds(columns: number, rows: number) {
  const thresholds = new Float32Array(columns * rows);

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const noise = fract(
        Math.sin(column * 12.9898 + row * 78.233) * 43758.5453,
      );

      // This is the same directional, noise-offset threshold used by the button.
      thresholds[row * columns + column] =
        (column + row * 0.32) / (columns + rows * 0.32) + noise * 0.18;
    }
  }

  return thresholds;
}

/** An ambient, canvas-rendered version of the pixel wipe interaction. */
export function PixelWipeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;

    if (!canvas || !section) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let width = 0;
    let height = 0;
    let columns = 0;
    let rows = 0;
    let thresholds = new Float32Array();
    let frameId: number | undefined;
    let startTime: number | undefined;
    let bursts: CursorBurst[] = [];
    let lastBurstTime = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const drawCursorBursts = (time: number) => {
      bursts = bursts.filter(
        (burst) => time - burst.startedAt < CURSOR_BURST_DURATION,
      );

      for (const burst of bursts) {
        const age = time - burst.startedAt;
        const spread = Math.min(1, age / 360);
        const radius = 28 + spread * 108;
        const opacity = Math.max(0, 1 - age / CURSOR_BURST_DURATION);
        const startColumn = Math.max(
          0,
          Math.floor((burst.x - radius) / PIXEL_SIZE),
        );
        const endColumn = Math.min(
          columns - 1,
          Math.ceil((burst.x + radius) / PIXEL_SIZE),
        );
        const startRow = Math.max(
          0,
          Math.floor((burst.y - radius) / PIXEL_SIZE),
        );
        const endRow = Math.min(
          rows - 1,
          Math.ceil((burst.y + radius) / PIXEL_SIZE),
        );

        for (let row = startRow; row <= endRow; row += 1) {
          for (let column = startColumn; column <= endColumn; column += 1) {
            const centerX = column * PIXEL_SIZE + PIXEL_SIZE / 2;
            const centerY = row * PIXEL_SIZE + PIXEL_SIZE / 2;
            const distance = Math.hypot(centerX - burst.x, centerY - burst.y);
            const pixelNoise = fract(
              Math.sin(column * 19.19 + row * 37.31) * 43758.5453,
            );

            if (distance > radius * (0.36 + pixelNoise * 0.64)) continue;

            context.globalAlpha =
              opacity * Math.max(0, 1 - distance / radius) * 0.34;
            context.fillStyle = pixelNoise > 0.73 ? "#c3eee8" : "#4db7ab";
            context.fillRect(
              column * PIXEL_SIZE,
              row * PIXEL_SIZE,
              PIXEL_SIZE - 1,
              PIXEL_SIZE - 1,
            );
          }
        }
      }
    };

    const paint = (
      progress: number,
      isReducedMotion: boolean,
      time: number,
    ) => {
      context.clearRect(0, 0, width, height);

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const threshold = thresholds[row * columns + column];
          const distance = progress - threshold;

          // A short sweep band leaves a deliberate trail rather than a filled grid.
          if (distance < 0 || (!isReducedMotion && distance > 0.24)) continue;

          const leadingEdge = Math.max(0, 1 - distance / 0.24);
          context.globalAlpha = isReducedMotion
            ? 0.12
            : 0.05 + leadingEdge * 0.17;
          context.fillStyle = leadingEdge > 0.72 ? "#a1ded6" : "#249f94";
          context.fillRect(
            column * PIXEL_SIZE,
            row * PIXEL_SIZE,
            PIXEL_SIZE - 1,
            PIXEL_SIZE - 1,
          );
        }
      }

      if (!isReducedMotion) drawCursorBursts(time);

      context.globalAlpha = 1;
    };

    const resize = () => {
      const bounds = section.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = Math.ceil(bounds.width);
      height = Math.ceil(bounds.height);
      columns = Math.ceil(width / PIXEL_SIZE) + 1;
      rows = Math.ceil(height / PIXEL_SIZE) + 1;
      thresholds = createThresholds(columns, rows);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const tick = (time: number) => {
      startTime ??= time;
      const elapsed = (time - startTime) % CYCLE_DURATION;
      const progress = -0.24 + (elapsed / CYCLE_DURATION) * 1.48;

      paint(progress, false, time);
      frameId = requestAnimationFrame(tick);
    };

    const updateMotion = () => {
      if (frameId !== undefined) {
        cancelAnimationFrame(frameId);
        frameId = undefined;
      }

      if (reducedMotion.matches) {
        paint(0.76, true, performance.now());
        return;
      }

      startTime = undefined;
      frameId = requestAnimationFrame(tick);
    };

    const observer = new ResizeObserver(() => {
      resize();
      updateMotion();
    });

    observer.observe(section);
    reducedMotion.addEventListener("change", updateMotion);

    const addCursorBurst = (event: PointerEvent) => {
      if (reducedMotion.matches || event.pointerType === "touch") return;

      const time = performance.now();

      if (time - lastBurstTime < 32) return;

      const bounds = section.getBoundingClientRect();
      bursts.push({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        startedAt: time,
      });
      lastBurstTime = time;
    };

    section.addEventListener("pointermove", addCursorBurst);
    resize();
    updateMotion();

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", updateMotion);
      section.removeEventListener("pointermove", addCursorBurst);

      if (frameId !== undefined) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 size-full"
      aria-hidden="true"
    />
  );
}
