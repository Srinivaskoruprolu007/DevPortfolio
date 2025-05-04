import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/portfolio";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="skills" className="py-16">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Frontend Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.frontend.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      custom={index}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={skillItemVariants}
                    >
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          custom={skill.level}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          variants={progressVariants}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Data Analysis Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Data Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.dataAnalysis.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      custom={index}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={skillItemVariants}
                    >
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          custom={skill.level}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          variants={progressVariants}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Tools & Technologies Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.tools.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      custom={index}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={skillItemVariants}
                    >
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          custom={skill.level}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          variants={progressVariants}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
