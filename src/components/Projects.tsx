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
import { useFetchProjects } from "@/hooks/use-contentful-data-fetch";
import { LocalProject, ProjectSkeleton } from "@/types/project";
import { motion } from "framer-motion";
import { CheckCircle, ExternalLink, Github } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function Projects() {
  // Try to fetch from Contentful, fallback to local data
  const { projects: contentfulProjects, loading, error } = useFetchProjects();
  const projectsData =
    contentfulProjects && contentfulProjects.length > 0
      ? contentfulProjects
      : projects;

  console.log(
    "Projects data:",
    projectsData,
    "Loading:",
    loading,
    "Error:",
    error
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      className="py-12 md:py-16 bg-muted/50"
      aria-labelledby="projects-heading"
    >
      <div className="container px-4 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center"
          >
            Projects
          </h2>

          {loading && <p className="text-center">Loading projects...</p>}
          {error && (
            <p className="text-center text-red-500">
              Error loading projects: {error.message}
            </p>
          )}

          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => {
              // Handle both Contentful and local data structures
              const isContentful = "fields" in project;
              let projectData: LocalProject;

              if (isContentful) {
                const contentfulProject = project as ProjectSkeleton;
                const imageAsset = contentfulProject.fields.image as
                  | { fields?: { file?: { url?: string } } }
                  | undefined;
                const imageUrl: string = imageAsset?.fields?.file?.url || "";

                projectData = {
                  title: contentfulProject.fields.title,
                  description: contentfulProject.fields.description,
                  image: imageUrl,
                  imageAlt: contentfulProject.fields.title,
                  github: contentfulProject.fields.githubLink,
                  demo: contentfulProject.fields.demoLink,
                  tags: contentfulProject.fields.tags || [],
                  achievements: contentfulProject.fields.achievements || [],
                };
              } else {
                projectData = project as LocalProject;
              }

              return (
                <motion.div
                  key={projectData.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <div className="aspect-video overflow-hidden rounded-lg mb-4">
                        <img
                          src={projectData.image}
                          alt={
                            projectData.imageAlt ||
                            `${projectData.title} project screenshot`
                          }
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <CardTitle className="text-xl">
                        {projectData.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {projectData.description}
                      </p>

                      {/* Key Achievements */}
                      {projectData.achievements &&
                        projectData.achievements.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-sm mb-2 text-primary">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-1">
                              {projectData.achievements.map(
                                (achievement, achievementIndex) => (
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
                      {projectData.tags && projectData.tags.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-sm mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {projectData.tags.map((tag) => (
                              <Badge
                                key={tag}
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
                                  href={projectData.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`View ${projectData.title} source code on GitHub`}
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
                                  href={projectData.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`View ${projectData.title} live demo`}
                                >
                                  <ExternalLink
                                    className="mr-2 h-4 w-4"
                                    aria-hidden="true"
                                  />
                                  {projectData.demo.includes("github.com")
                                    ? "Notebook"
                                    : "Demo"}
                                </a>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                {projectData.demo.includes("github.com")
                                  ? "View Jupyter notebook"
                                  : "View live application"}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </TooltipProvider>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
