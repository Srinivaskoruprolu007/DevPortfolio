import { Card, CardContent } from "@/components/ui/card";
import { useSanityTestimonials } from "@/hooks/use-sanity-testimonials";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

const localTestimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager at TechCorp",
    content:
      "Srinivas delivered exceptional data analysis that helped us identify key market trends. His insights led to a 20% increase in our quarterly revenue.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Lead Developer at StartupXYZ",
    content:
      "Working with Srinivas on the frontend development was amazing. His attention to detail and modern React skills really impressed our team.",
    rating: 5,
  },
  {
    name: "Dr. Amanda Roberts",
    role: "Research Director",
    content:
      "The machine learning model Srinivas developed for our housing price predictions exceeded our accuracy expectations. Professional and thorough work.",
    rating: 5,
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { testimonials: sanityTestimonials, error } = useSanityTestimonials();

  // Use Sanity data if available, otherwise fall back to local data
  const testimonials = sanityTestimonials && sanityTestimonials.length > 0
    ? sanityTestimonials
    : localTestimonials;

  if (error) {
    console.warn('Error loading testimonials from Sanity, using local data:', error);
  }

  return (
    <section
      className="py-12 md:py-16 bg-muted/30"
      aria-labelledby="testimonials-heading"
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center"
          >
            What People Say
          </h2>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div
                      className="flex mb-4"
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
                    <blockquote className="text-muted-foreground mb-4 italic">
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
