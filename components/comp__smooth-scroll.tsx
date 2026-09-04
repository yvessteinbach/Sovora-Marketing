"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Keeps wheel scrolling gently eased without changing touch scrolling. */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12,
      wheelMultiplier: 0.9,
      syncTouch: false,
      respectReducedMotion: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
