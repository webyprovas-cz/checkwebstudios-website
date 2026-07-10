import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function Cta() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,color-mix(in_srgb,var(--color-accent)_25%,transparent),transparent_60%)]"
            />
            <h2 className="relative font-heading text-3xl font-semibold text-on-primary sm:text-4xl">
              Máte nápad na projekt? Pojďme to probrat.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/70">
              Domluvme si nezávaznou konzultaci a proberme, jak by mohl
              vypadat váš nový web.
            </p>
            <div className="relative mt-8 flex justify-center">
              <Button href="#kontakt" variant="primary" className="bg-accent hover:bg-accent-hover">
                Domluvit konzultaci
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
