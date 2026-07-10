import { Code2, Palette, ShoppingCart, Search, RefreshCw, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const SERVICES = [
  {
    icon: Code2,
    title: "Tvorba webových stránek",
    description:
      "Firemní weby na míru postavené na moderních technologiích — rychlé, responzivní a snadno spravovatelné.",
  },
  {
    icon: Palette,
    title: "UI/UX design",
    description:
      "Návrh uživatelského rozhraní, který je přehledný, esteticky čistý a vede návštěvníka k akci.",
  },
  {
    icon: ShoppingCart,
    title: "E-shopy na míru",
    description:
      "Kompletní e-commerce řešení od katalogu produktů po platební bránu a správu objednávek.",
  },
  {
    icon: Search,
    title: "SEO optimalizace",
    description:
      "Technické i obsahové SEO od základu, aby vás zákazníci našli tam, kde vás hledají.",
  },
  {
    icon: RefreshCw,
    title: "Redesign webu",
    description:
      "Modernizace stávajícího webu — nový vzhled, lepší výkon a vyšší konverze beze ztráty obsahu.",
  },
  {
    icon: LifeBuoy,
    title: "Údržba a podpora",
    description:
      "Pravidelné aktualizace, monitoring a technická podpora, abyste se mohli soustředit na byznys.",
  },
];

export function Services() {
  return (
    <section id="sluzby" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Co děláme"
          title="Služby, které posunou váš web dál"
          description="Od prvního nápadu po spuštění a dlouhodobou péči — všechno pod jednou střechou."
        />

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <Card className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <service.icon size={24} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
