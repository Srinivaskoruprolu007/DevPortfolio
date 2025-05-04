import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/portfolio";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15, // Slightly adjusted delay for smoother staggering
      },
    }),
  };

  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants} // Use defined variants
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index} // Pass index to variants
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants} // Use card variants
                whileHover={{ scale: 1.03, y: -5 }} // Add hover effect
                transition={{ type: "spring", stiffness: 300 }} // Spring transition for hover
              >
                <Card className="h-full flex flex-col overflow-hidden">
                  {" "}
                  {/* Added overflow-hidden */}
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <motion.img // Animate image on hover too
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }} // Scale image slightly more on hover
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {" "}
                    {/* Ensure content grows */}
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>{" "}
                    {/* Limit description lines */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {" "}
                      {/* Add margin bottom */}
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    {" "}
                    {/* Ensure footer is at bottom */}
                    <div className="flex gap-4">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.demo && ( // Conditionally render demo button
                        <Button asChild size="sm">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
