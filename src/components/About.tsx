import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/data/portfolio";
import {
  useAppleParallax,
  useScrollAnimation,
} from "@/hooks/use-gsap-animations";
import { GraduationCap } from "lucide-react";

export function About() {
  const sectionRef = useScrollAnimation();
  const backgroundRef = useAppleParallax(0.3);

  return (
    <section
      id="about"
      className="py-12 md:py-16 bg-muted/50 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Parallax background decoration */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-center"
          >
            About Me
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 text-center leading-relaxed">
            I'm a passionate Data Analyst and Frontend Developer with expertise
            in turning complex data into actionable insights and creating
            engaging web experiences. With a background in both data science and
            web development, I bring a unique perspective to every project.
          </p>

          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">
              Education
            </h3>
            <div className="grid gap-4 md:gap-6 sm:grid-cols-1 md:grid-cols-2">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      {edu.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                    <p className="mt-2 text-sm">{edu.description}</p>
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
