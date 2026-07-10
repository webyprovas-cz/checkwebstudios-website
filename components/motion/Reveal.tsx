"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

const OFFSET = 28;

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const isHorizontal = direction === "left" || direction === "right";
  const sign = direction === "down" || direction === "right" ? -1 : 1;
  const offset = direction === "none" ? 0 : OFFSET * sign;

  const transition = {
    duration: shouldReduceMotion ? 0.3 : 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const variants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition },
      }
    : isHorizontal
      ? {
          hidden: { opacity: 0, x: offset },
          visible: { opacity: 1, x: 0, transition },
        }
      : {
          hidden: { opacity: 0, y: offset },
          visible: { opacity: 1, y: 0, transition },
        };

  const MotionTag = motion[as];

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
