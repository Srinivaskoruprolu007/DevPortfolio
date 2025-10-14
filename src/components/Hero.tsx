import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  useAppleParallax,
  useFadeInUp,
  useScaleIn
} from "@/hooks/use-gsap-animations";
import {
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import { DataAnalystIllustration } from "./illustrations/data-analyst";
import { FrontendDevIllustration } from "./illustrations/frontend-dev";

export function Hero() {
  const [show3DModels, setShow3DModels] = useState(true); // Toggle 3D models

  const badgeRef = useFadeInUp(0);
  const headingRef = useFadeInUp(0.2);
  const descRef = useFadeInUp(0.4);
  const buttonsRef = useFadeInUp(0.6);
  const linksRef = useFadeInUp(0.8);
  const illustrationsRef = useScaleIn(0.4);
  const scrollIndicatorRef = useFadeInUp(1);

  // Apple-style parallax effects
  const backgroundDecoRef = useAppleParallax(0.5); // Background moves slower
  const contentRef = useAppleParallax(0.2); // Content moves slightly
   // Zoom effect on scroll

  // Your AI-generated images - Replace with your actual images!


  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden animated-background"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* 3D AI Models Scene (Optional - Desktop Only) */}

      {/* Background decoration with parallax */}
      <div ref={backgroundDecoRef} className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div
        ref={contentRef}
        className="container py-8 md:py-16 max-w-7xl mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-items-center">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div
              ref={badgeRef}
              className="mb-6 flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                👋 Welcome to my portfolio
              </span>

              {/* Toggle 3D Models Button */}
              <button
                onClick={() => setShow3DModels(!show3DModels)}
                className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-all duration-300"
                aria-label="Toggle 3D AI models"
              >
                <span>{show3DModels ? "🎨" : "✨"}</span>
                <span>
                  {show3DModels ? "Hide 3D Models" : "Show 3D AI Models"}
                </span>
              </button>
            </div>

            <h1
              ref={headingRef}
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            >
              Data Analyst &{" "}
              <span className="block gradient-primary bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>

            <p
              ref={descRef}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed font-light"
            >
              Transforming{" "}
              <span className="text-primary font-semibold">
                data into insights
              </span>{" "}
              and creating{" "}
              <span className="text-primary font-semibold">
                beautiful web experiences
              </span>
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      size="lg"
                      className="btn-gradient shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-64}
                        duration={500}
                        className="cursor-pointer px-8 py-3 text-lg font-semibold"
                      >
                        Let's Connect ✨
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="glass">
                    <p>Get in touch for projects and collaborations</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="glass hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 shadow-custom-md hover:shadow-custom-lg"
                    >
                      <a
                        href="https://github.com/Srinivaskoruprolu007"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                        className="px-6 py-3 text-base font-medium"
                      >
                        <Github className="mr-2 h-5 w-5" aria-hidden="true" />
                        GitHub
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="glass">
                    <p>
                      View my code repositories and open source contributions
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div
              ref={linksRef}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="glass hover:bg-primary/10 transition-all duration-300"
                    >
                      <a
                        href="https://www.linkedin.com/in/srinivas-koruprolu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Connect with me on LinkedIn"
                        className="px-4 py-2"
                      >
                        <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                        LinkedIn
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="glass">
                    <p>Connect with me professionally</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="glass hover:bg-green-500/10 text-green-600 hover:text-green-700 transition-all duration-300"
                    >
                      <a
                        href="https://docs.google.com/document/d/1bfuztmRBf2ui-MKKQLHYhWwsxROIPbnE/edit?usp=sharing&ouid=103175391586875038607&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View my resume online"
                        className="px-4 py-2"
                      >
                        <ExternalLink
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        <span className="hidden sm:inline">View Resume</span>
                        <span className="sm:hidden">Resume</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="glass">
                    <p>View my resume online</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="glass hover:bg-blue-500/10 text-blue-600 hover:text-blue-700 transition-all duration-300"
                    >
                      <a
                        href="https://docs.google.com/document/d/1bfuztmRBf2ui-MKKQLHYhWwsxROIPbnE/export?format=pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download my resume as PDF"
                        download="Srinivas_Koruprolu_Resume.pdf"
                        className="px-4 py-2"
                      >
                        <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                        <span className="hidden sm:inline">Download PDF</span>
                        <span className="sm:hidden">PDF</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="glass">
                    <p>Download resume as PDF (≈ 200KB)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div
            ref={illustrationsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-first lg:order-last max-w-2xl mx-auto"
          >
            <div className="flex justify-center group">
              <div className="glass p-6 rounded-2xl shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 hover:scale-105 hover:rotate-2">
                <DataAnalystIllustration />
              </div>
            </div>
            <div className="flex justify-center group">
              <div className="glass p-6 rounded-2xl shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 hover:scale-105 hover:-rotate-2">
                <FrontendDevIllustration />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={scrollIndicatorRef}
          className="flex justify-center mt-16 animate-bounce-slow"
        >
          <Link to="about" spy={true} smooth={true} offset={-64} duration={500}>
            <div className="glass p-3 rounded-full hover:bg-primary/10 transition-all duration-300 cursor-pointer group">
              <ChevronDown className="h-6 w-6 md:h-8 md:w-8 text-primary group-hover:text-primary/80 transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
