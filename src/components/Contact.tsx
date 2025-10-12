import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContactForm } from "./contact/contact-form";
import { SectionHeading } from "./contact/section-heading";

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      className="py-12 md:py-16"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <SectionHeading />
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
