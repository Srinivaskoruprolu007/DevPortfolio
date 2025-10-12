import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/use-gsap-animations";

export function Skills() {
  const titleRef = useScrollAnimation();

  return (
    <section
      id="skills"
      className="py-12 md:py-16"
      aria-labelledby="skills-heading"
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div ref={titleRef}>
          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center"
          >
            Skills
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.frontend.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.dataAnalysis.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.tools.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill }: { skill: { name: string; level: number } }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <Progress value={skill.level} className="h-2" />
    </div>
  );
}
