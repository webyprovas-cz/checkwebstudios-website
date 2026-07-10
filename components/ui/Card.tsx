"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 25px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "rounded-xl border border-border bg-surface p-6 shadow-sm cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
