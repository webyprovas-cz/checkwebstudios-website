import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ProjectMockup } from "@/components/ui/ProjectMockup";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { projects } from "@/lib/projects";

export function Portfolio() {
  return (
    <section id="reference" className="bg-muted/40 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Naše práce"
          title="Ukázky projektů"
          description="Zástupné ukázky — brzy je nahradíme skutečnými realizacemi z našeho portfolia."
        />

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem key={project.slug}>
              <Card className="h-full !p-0 overflow-hidden">
                <ProjectMockup index={index} />
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
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
