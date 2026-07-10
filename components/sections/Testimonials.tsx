import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const TESTIMONIALS = [
  {
    quote:
      "Zástupná reference — sem doplníme skutečné hodnocení od spokojeného klienta.",
    name: "Jméno Příjmení",
    role: "Pozice, Firma",
  },
  {
    quote:
      "Zástupná reference — sem doplníme skutečné hodnocení od spokojeného klienta.",
    name: "Jméno Příjmení",
    role: "Pozice, Firma",
  },
  {
    quote:
      "Zástupná reference — sem doplníme skutečné hodnocení od spokojeného klienta.",
    name: "Jméno Příjmení",
    role: "Pozice, Firma",
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
