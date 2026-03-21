import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/portfolio";
import {
  useAppleParallax,
  useScrollAnimation,
} from "@/hooks/use-gsap-animations";
import { Code, Database, Server, Wrench, Zap } from "lucide-react";

export function Skills() {
  const titleRef = useScrollAnimation();
  const backgroundRef = useAppleParallax(0.35);

  const categoryMeta = {
    frontend: {
      icon: Code,
      title: "Frontend",
    },
    backend: {
      icon: Server,
      title: "Backend",
    },
    databases: {
      icon: Database,
      title: "Databases",
    },
    devops: {
      icon: Zap,
      title: "DevOps",
    },
    tools: {
      icon: Wrench,
      title: "Tools",
    },
  };

  return (
    <section
      id="skills"
      className="relative py-14 md:py-18"
      aria-labelledby="skills-heading"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div ref={titleRef}>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Skills
          </p>
          <h2
            id="skills-heading"
            className="mb-8 mt-3 text-center text-2xl font-semibold sm:text-3xl"
          >
            Skills
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(skills).map(([category, skillList]) => {
            const meta = categoryMeta[category as keyof typeof categoryMeta];
            const IconComponent = meta.icon;

            return (
              <Card
                key={category}
                className="h-full border-border/60 bg-card"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <IconComponent className="h-5 w-5" />
                    {meta.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-sm"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
