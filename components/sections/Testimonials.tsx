import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const TESTIMONIALS = [
  {
    quote:
      "Nový web nám za první měsíc přinesl víc poptávek než starý web za celý rok. Komunikace s týmem byla od začátku do konce naprosto bezproblémová.",
    name: "Tomáš Novák",
    role: "Majitel, Kavárna Na Rohu",
  },
  {
    quote:
      "Konečně máme web, který vypadá profesionálně a na mobilu funguje stejně dobře jako na počítači. Doporučuji všem, kdo řeší podobnou situaci.",
    name: "Petra Svobodová",
    role: "Jednatelka, Květinářství Petra",
  },
  {
    quote:
      "Oceňuji hlavně to, jak nám vše trpělivě vysvětlili a nechali nás rozhodovat. Výsledek předčil naše očekávání a SEO se zlepšilo prakticky hned.",
    name: "Lukáš Dvořák",
    role: "Provozovatel, Fitness Studio Impuls",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Reference" title="Co o nás říkají klienti" />

        <StaggerGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <StaggerItem key={index}>
              <Card className="h-full">
                <Quote className="text-accent/40" size={28} />
                <p className="mt-4 text-sm leading-relaxed text-secondary">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
