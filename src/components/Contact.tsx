import { profile } from "@/data/portfolio";
import {
  useAppleParallax,
  useScrollAnimation,
} from "@/hooks/use-gsap-animations";
import { ContactForm } from "./contact/contact-form";
import { SectionHeading } from "./contact/section-heading";

export function Contact() {
  const sectionRef = useScrollAnimation();
  const backgroundRef = useAppleParallax(0.5);

  return (
    <section
      id="contact"
      className="relative py-16 md:py-20"
      aria-labelledby="contact-heading"
    >
      <div ref={backgroundRef} className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div
          ref={sectionRef}
          className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start"
        >
          <div className="space-y-6">
            <SectionHeading />
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Based in {profile.location}. I am open to full-time roles,
              freelance projects, and product-focused frontend or full-stack
              work.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
