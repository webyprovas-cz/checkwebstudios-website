import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { projects } from "@/lib/projects";
import { withBasePath } from "@/lib/basePath";

export function Portfolio() {
  return (
    <section id="reference" className="bg-muted/40 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Naše práce"
          title="Ukázky projektů"
          description="Výběr webů, které jsme navrhli a postavili pro naše klienty."
        />

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
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
                      src={withBasePath(project.imageSrc)}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
