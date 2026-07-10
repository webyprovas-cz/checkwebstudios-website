"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, animate } from "motion/react";

export function Counter({
  to,
  suffix = "",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      if (ref.current) ref.current.textContent = `${to}${suffix}`;
      return;
    }
    const controls = animate(count, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        if (ref.current) ref.current.textContent = `${Math.round(value)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [isInView, to, suffix, shouldReduceMotion, count]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
