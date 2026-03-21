import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

const localTestimonials = [
  {
    name: "Somesh Nautiyal",
    role: "Senior Architect at Capgemini",
    content:
      "Srinivas is a high-performing full-stack developer whose work on large-scale enterprise modules improved performance and reduced deployment risk. As a mentor, I saw him take ownership, lead architecture discussions, and drive successful deliveries across teams.",
    rating: 5,
  },
  {
    name: "Soham Debnath",
    role: "Technical Lead at Capgemini",
    content:
      "Srinivas consistently delivered production-grade code and cross-team collaboration with strong communication. His focus on TypeScript safety, API design, and test automation made a measurable difference in our release quality.",
    rating: 5,
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="bg-muted/30 py-14 md:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="testimonials-heading"
            className="mb-4 text-center text-3xl font-bold sm:text-4xl"
          >
            Recommendations from teammates
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-7 text-muted-foreground">
            Feedback from people I have worked with in delivery-heavy
            environments where code quality, collaboration, and ownership
            mattered every week.
          </p>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {localTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full border-border/60 bg-card/80">
                  <CardContent className="p-6">
                    <Quote
                      className="mb-4 h-8 w-8 text-primary/70"
                      aria-hidden="true"
                    />
                    <div
                      className="mb-4 flex"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <blockquote className="mb-5 text-muted-foreground italic leading-7">
                      "{testimonial.content}"
                    </blockquote>
                    <footer>
                      <cite className="font-semibold not-italic">
                        {testimonial.name}
                      </cite>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </footer>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
