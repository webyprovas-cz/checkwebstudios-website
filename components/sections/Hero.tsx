"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/basePath";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_srgb,var(--color-accent)_12%,transparent),transparent_55%)]"
      />
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          <div>
            <motion.span
              variants={item}
              className="inline-block rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-secondary"
            >
              Webdesignové studio
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Weby, které vaší značce{" "}
              <span className="text-accent">sluší a prodávají</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              CheckWeb Studios navrhuje a vyvíjí moderní webové stránky a
              e-shopy — od prvního návrhu až po SEO optimalizovaný, rychlý
              web, který přináší výsledky.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <Button href="#kontakt" variant="primary">
                Domluvit konzultaci
                <ArrowRight size={18} />
              </Button>
              <Button href="#reference" variant="secondary">
                Naše práce
              </Button>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative">
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, -12, 0] }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl"
            >
              <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src={withBasePath("/portfolio/sablona3.png")}
                  alt="Náhled webu Barber Elite — ukázka naší práce"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
            <motion.div
              animate={
                shouldReduceMotion ? undefined : { y: [0, 10, 0] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -left-8 hidden w-40 rounded-xl border border-border bg-surface p-4 shadow-lg sm:block"
            >
              <p className="font-heading text-2xl font-bold text-accent">98%</p>
              <p className="text-xs text-muted-foreground">
                Rychlost načítání
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
