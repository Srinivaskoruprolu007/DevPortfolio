import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import {
  useAppleParallax,
  useFadeInUp,
} from "@/hooks/use-gsap-animations";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import { Link } from "react-scroll";
import HeroImage from "../Assets/Hero_Image.png";

export function Hero() {
  const badgeRef = useFadeInUp(0);
  const headingRef = useFadeInUp(0.2);
  const descRef = useFadeInUp(0.4);
  const buttonsRef = useFadeInUp(0.6);
  const linksRef = useFadeInUp(0.8);
  const imageRef = useFadeInUp(0.5);

  const backgroundDecoRef = useAppleParallax(0.25);
  const contentRef = useAppleParallax(0.1);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden px-4 pb-14 pt-24 sm:pt-28 lg:min-h-screen lg:pb-20 lg:pt-32"
      aria-labelledby="hero-heading"
    >
      <div ref={backgroundDecoRef} className="absolute inset-0 -z-10">
        <div className="absolute left-8 top-24 h-56 w-56 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute bottom-16 right-6 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div
        ref={contentRef}
        className="container relative z-10 mx-auto max-w-6xl py-8 md:py-12"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,430px)] lg:gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <div
              ref={badgeRef}
              className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {profile.location}
              </span>
            </div>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">
              {profile.role}
            </p>
            <h1
              ref={headingRef}
              id="hero-heading"
              className="mb-5 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Building clean, responsive web products with React, TypeScript,
              and Node.js.
            </h1>

            <p
              ref={descRef}
              className="mb-7 text-base leading-7 text-muted-foreground sm:text-lg"
            >
              {profile.summary}
            </p>

            <div
              ref={buttonsRef}
              className="mb-6 flex flex-col flex-wrap justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button asChild size="lg" className="px-6">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="cursor-pointer px-6 py-3"
                >
                  View projects
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild className="px-6">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="cursor-pointer px-6 py-3"
                >
                  Contact
                </Link>
              </Button>
            </div>

            <div
              ref={linksRef}
              className="flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              <Button variant="ghost" size="sm" asChild className="px-3">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="px-3 py-2"
                >
                  <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              </Button>

              <Button variant="ghost" size="sm" asChild className="px-3">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with me on LinkedIn"
                  className="px-3 py-2"
                >
                  <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </Button>

              <Button variant="ghost" size="sm" asChild className="px-3">
                <a
                  href={profile.resumeDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download my resume as PDF"
                  download="Srinivas_Koruprolu_Resume.pdf"
                  className="px-3 py-2"
                >
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  Resume
                </a>
              </Button>
            </div>
          </div>

          <div
            ref={imageRef}
            className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[36px] border border-border bg-card p-2 shadow-custom-lg sm:rounded-[42px]">
              <img
                src={HeroImage}
                alt="Portrait of Srinivas Koruprolu"
                className="h-full w-full rounded-[30px] object-cover object-top sm:rounded-[36px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
