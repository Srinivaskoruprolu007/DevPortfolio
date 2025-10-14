import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/data/portfolio";
import {
  useAppleParallax,
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/use-gsap-animations";
import { useSanityProjects } from "@/hooks/use-sanity-projects";
import { CheckCircle, ExternalLink, Github } from "lucide-react";

export function Projects() {
  // Try to fetch from Sanity, fallback to local data
  const { projects: sanityProjects, loading, error } = useSanityProjects();
  const projectsData = sanityProjects.length > 0 ? sanityProjects : projects;

  const titleRef = useScrollAnimation();
  const gridRef = useStaggerAnimation(".project-card", 0.1);
  const backgroundRef = useAppleParallax(0.4); // Parallax background

  console.log(
    "Using projects from:",
    sanityProjects.length > 0 ? "Sanity" : "Local data"
  );

  return (
    <section
      id="projects"
      className="py-12 md:py-16 bg-muted/50 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Parallax background decoration */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 max-w-7xl mx-auto relative z-10">
        <div ref={titleRef}>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center"
          >
            Projects
          </h2>

          {loading && (
            <div className="text-center mb-8">
              <p>Loading projects from Sanity...</p>
            </div>
          )}

          {error && (
            <div className="text-center mb-8 text-yellow-600">
              <p>Unable to load from Sanity, using local data</p>
            </div>
          )}
        </div>

        <div
          ref={gridRef}
          className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => {
            return (
              <div key={project.title} className="project-card">
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <img
                        src={project.image}
                        alt={
                          project.imageAlt ||
                          `${project.title} project screenshot`
                        }
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Achievements */}
                    {project.achievements &&
                      project.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2 text-primary">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {project.achievements.map(
                              (
                                achievement: string,
                                achievementIndex: number
                              ) => (
                                <li
                                  key={achievementIndex}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <CheckCircle
                                    className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0"
                                    aria-hidden="true"
                                  />
                                  <span>{achievement}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    {/* Tech Stack */}
                    {project.tags && project.tags.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-sm mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag: string, tagIndex: number) => (
                            <Badge
                              key={`${project.title}-${tag}-${tagIndex}`}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="pt-4">
                    <TooltipProvider>
                      <div className="flex gap-3 w-full">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="flex-1"
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} source code on GitHub`}
                              >
                                <Github
                                  className="mr-2 h-4 w-4"
                                  aria-hidden="true"
                                />
                                Code
                              </a>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View source code and documentation</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button asChild size="sm" className="flex-1">
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} live demo`}
                              >
                                <ExternalLink
                                  className="mr-2 h-4 w-4"
                                  aria-hidden="true"
                                />
                                {project.demo?.includes("github.com")
                                  ? "Notebook"
                                  : "Demo"}
                              </a>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              {project.demo?.includes("github.com")
                                ? "View Jupyter notebook"
                                : "View live application"}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TooltipProvider>
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
