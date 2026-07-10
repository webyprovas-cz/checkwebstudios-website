import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Counter } from "@/components/motion/Counter";

const STATS = [
  { value: 20, suffix: "+", label: "Realizovaných projektů" },
  { value: 100, suffix: "%", label: "Responzivní weby" },
  { value: 98, suffix: "%", label: "Skóre výkonu" },
  { value: 48, suffix: "h", label: "Průměrná reakční doba" },
];

const POINTS = [
  {
    title: "Design od základu na míru",
    description: "Žádné šablony — každý web navrhujeme podle vaší značky.",
  },
  {
    title: "Rychlost a výkon",
    description: "Weby stavíme tak, aby se načítaly bleskově rychle.",
  },
  {
    title: "SEO připravenost",
    description: "Optimalizace pro vyhledávače je součástí každého projektu.",
  },
];

export function WhyUs() {
  return (
    <section id="proc-my" className="bg-primary py-24 text-on-primary sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Proč my"
          title="Weby, kterým můžete věřit"
          className="[&_h2]:text-on-primary [&_p]:text-white/70 [&_span]:text-accent"
        />

        <StaggerGroup className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-bold text-accent sm:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <StaggerGroup className="mt-20 grid gap-8 sm:grid-cols-3">
          {POINTS.map((point) => (
            <StaggerItem key={point.title}>
              <h3 className="font-heading text-lg font-semibold text-on-primary">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {point.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
