import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/portfolio";
import {
  useAppleParallax,
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/use-gsap-animations";
import { ExternalLink, Github, LockKeyhole } from "lucide-react";

export function Projects() {
  const titleRef = useScrollAnimation();
  const gridRef = useStaggerAnimation(".project-card", 0.1);
  const backgroundRef = useAppleParallax(0.4);

  return (
    <section
      id="projects"
      className="relative py-14 md:py-18"
      aria-labelledby="projects-heading"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute right-20 top-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div ref={titleRef}>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Selected Work
          </p>
          <h2
            id="projects-heading"
            className="mb-8 mt-3 text-center text-2xl font-semibold sm:text-3xl"
          >
            Projects
          </h2>
        </div>

        <div ref={gridRef} className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const hasGithub = Boolean(project.github);
            const hasDemo = Boolean(project.demo);

            return (
              <div key={project.title} className="project-card">
                <Card className="group flex h-full flex-col overflow-hidden border-border/60 bg-card">
                  <CardHeader className="pb-4">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge
                        variant="outline"
                        className="rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {project.eyebrow}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {project.impact}
                      </span>
                    </div>
                    <div className="mb-4 aspect-video overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.imageAlt || `${project.title} project screenshot`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-4 text-sm leading-7 text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={`${project.title}-${tag}-${index}`}
                          variant="secondary"
                          className="rounded-full px-3 py-1 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-3 border-t border-border/60 pt-5">
                    <div className="flex w-full flex-wrap gap-3">
                      {hasGithub && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="min-w-[140px] flex-1"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code on GitHub`}
                          >
                            <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                            Code
                          </a>
                        </Button>
                      )}

                      {hasDemo && (
                        <Button asChild size="sm" className="min-w-[140px] flex-1">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} ${project.demoLabel?.toLowerCase() || "demo"}`}
                          >
                            <ExternalLink
                              className="mr-2 h-4 w-4"
                              aria-hidden="true"
                            />
                            {project.demoLabel || "Demo"}
                          </a>
                        </Button>
                      )}
                    </div>
                    {!hasGithub && (
                      <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                        Private enterprise work
                      </p>
                    )}
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
