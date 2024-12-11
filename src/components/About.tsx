import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            I'm a passionate Data Analyst and Frontend Developer with expertise in turning complex data into actionable insights
            and creating engaging web experiences. With a background in both data science and web development,
            I bring a unique perspective to every project.
          </p>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Education</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card>
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}