"use client";

import type { ButtonHTMLAttributes } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
> & {
  variant?: ButtonVariant;
  href?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-secondary focus-visible:ring-primary",
  secondary:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-on-primary focus-visible:ring-primary",
  ghost:
    "bg-transparent text-primary hover:bg-muted focus-visible:ring-primary",
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-heading font-semibold cursor-pointer transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantClasses[variant],
    className
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
