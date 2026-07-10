import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Konzultace",
    description:
      "Probereme vaše cíle, cílovou skupinu a představu o webu, abychom navrhli řešení přesně na míru.",
  },
  {
    number: "02",
    title: "Návrh & design",
    description:
      "Vytvoříme drátěné modely a vizuální design, který odráží identitu vaší značky.",
  },
  {
    number: "03",
    title: "Vývoj",
    description:
      "Web postavíme na moderních technologiích s důrazem na rychlost, responzivitu a SEO.",
  },
  {
    number: "04",
    title: "Spuštění & podpora",
    description:
      "Web nasadíme, otestujeme a dál se staráme o jeho aktualizace a rozvoj.",
  },
];

export function Process() {
  return (
    <section id="proces" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Jak pracujeme"
          title="Jasný proces od nápadu po launch"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <div className="relative">
                <span className="font-heading text-4xl font-bold text-accent/25">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
