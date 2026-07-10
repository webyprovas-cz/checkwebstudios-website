import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { projects } from "@/lib/projects";

export function Portfolio() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="reference" className="bg-muted/40 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Naše práce"
          title="Ukázky projektů"
          description="Výběr webů, které jsme navrhli a postavili pro naše klienty."
        />

        {featured && (
          <Reveal className="mt-16">
            <a href={featured.href} target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden !p-0 lg:grid lg:grid-cols-2 lg:items-stretch">
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <Image
                    src={featured.imageSrc}
                    alt={featured.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Hlavní ukázka · {featured.category}
                  </span>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{featured.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Zobrazit web <ExternalLink size={16} />
                  </span>
                </div>
              </Card>
            </a>
          </Reveal>
        )}

        <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((project) => (
            <StaggerItem key={project.slug}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full overflow-hidden !p-0">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
