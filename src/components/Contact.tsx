import { useScrollAnimation } from "@/hooks/use-gsap-animations";
import { ContactForm } from "./contact/contact-form";
import { SectionHeading } from "./contact/section-heading";

export function Contact() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="contact"
      className="py-20 md:py-24 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          <SectionHeading />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
