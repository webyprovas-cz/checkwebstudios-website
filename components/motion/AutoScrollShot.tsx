"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const PIXELS_PER_SECOND = 45;
const MIN_DURATION = 5;
const PAUSE_AT_EDGES = 1.2;

export function AutoScrollShot({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [maxOffset, setMaxOffset] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function measure() {
      if (!frameRef.current || !imgRef.current) return;
      setMaxOffset(
        Math.max(imgRef.current.clientHeight - frameRef.current.clientHeight, 0)
      );
    }
    measure();
    const img = imgRef.current;
    img?.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    return () => {
      img?.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const isAnimated = !shouldReduceMotion && maxOffset > 0;
  const duration = Math.max(maxOffset / PIXELS_PER_SECOND, MIN_DURATION);

  return (
    <div ref={frameRef} className={className} style={{ overflow: "hidden", position: "relative" }}>
      <motion.img
        ref={imgRef}
        src={src}
        alt={alt}
        className="block w-full h-auto"
        animate={isAnimated ? { y: -maxOffset } : { y: 0 }}
        transition={
          isAnimated
            ? {
                duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: PAUSE_AT_EDGES,
              }
            : { duration: 0 }
        }
      />
    </div>
  );
}
