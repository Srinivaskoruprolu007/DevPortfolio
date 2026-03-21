import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education, profile } from "@/data/portfolio";
import {
  useAppleParallax,
  useScrollAnimation,
} from "@/hooks/use-gsap-animations";
import { Download, ExternalLink, GraduationCap } from "lucide-react";

export function About() {
  const sectionRef = useScrollAnimation();
  const backgroundRef = useAppleParallax(0.3);

  return (
    <section
      id="about"
      className="relative py-14 md:py-18"
      aria-labelledby="about-heading"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div
          ref={sectionRef}
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              About
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-3xl"
            >
              Building practical interfaces and dependable product experiences.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              {profile.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="outline">
                <a
                  href={profile.resumeViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  View Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Education
            </h3>
            <div className="grid gap-4">
              {education.map((edu, index) => (
                <Card key={index} className="border-border/60 bg-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <GraduationCap className="h-4 w-4" />
                      {edu.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
