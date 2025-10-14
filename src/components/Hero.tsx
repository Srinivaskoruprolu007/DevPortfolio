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
  useCinematicTextReveal,
  useGlowPulse,
  useMagneticButton,
} from "@/hooks/use-enhanced-gsap";
import {
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import { EnhancedThreeBackground } from "./three/EnhancedThreeBackground";

export function Hero() {
  const [show3DBackground, setShow3DBackground] = useState(true);

  // Enhanced animations
  const badgeRef = useFadeInUp(0);
  const titleRef = useFadeInUp(0.3);
  const subtitleRef = useFadeInUp(0.5);
  const descRef = useFadeInUp(0.7);
  const buttonsRef = useFadeInUp(0.9);
  const linksRef = useFadeInUp(1.1);
  const scrollIndicatorRef = useFadeInUp(1.3);

  // Parallax effects
  const backgroundDecoRef = useAppleParallax(0.5);
  const contentRef = useAppleParallax(0.2);


  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden animated-background"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Enhanced 3D Cosmic Background - Commented out for now, user can enable later */}
      {/* {show3DBackground && <EnhancedThreeBackground />} */}

      {/* Background decoration with parallax - cosmic nebula orbs */}
      <div ref={backgroundDecoRef} className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow glow-blue"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000 glow-purple"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl glow-teal"></div>
      </div>

      <div
        ref={contentRef}
        className="container py-8 md:py-16 max-w-7xl mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-1 gap-8 lg:gap-12 items-center justify-items-center max-w-5xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div
              ref={badgeRef}
              className="mb-8 flex flex-col sm:flex-row gap-3 items-center justify-center"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 glass-strong text-primary rounded-full text-sm font-medium border border-primary/30 glow-blue">
                <Sparkles className="w-4 h-4" />
                Digital Universe Portfolio
              </span>

              {/* Toggle 3D Background Button */}
              <button
                onClick={() => setShow3DBackground(!show3DBackground)}
                className="inline-flex items-center gap-2 px-4 py-2 glass text-accent-foreground rounded-full text-sm font-medium border border-accent/20 hover:glass-strong transition-all duration-300"
                aria-label="Toggle 3D cosmic background"
              >
                <span>{show3DBackground ? "✨" : "🌟"}</span>
                <span className="hidden sm:inline">
                  {show3DBackground ? "3D On" : "3D Off"}
                </span>
              </button>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight"
            >
              <span ref={titleRef as any} className="block text-gradient-cosmic">
                Creative Developer
              </span>
              <span ref={subtitleRef as any} className="block text-foreground mt-2">
                & Digital Innovator
              </span>
            </h1>

            <p
              ref={descRef}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 leading-relaxed font-light max-w-3xl mx-auto"
            >
              Crafting{" "}
              <span className="text-gradient-cosmic font-bold">
                immersive digital experiences
              </span>{" "}
              through code, design, and{" "}
              <span className="text-gradient-cosmic font-bold">
                cutting-edge technology
              </span>
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      size="lg"
                      className="cosmic-gradient text-white font-bold px-10 py-7 text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl animate-glow-pulse"
                    >
                      <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-64}
                        duration={800}
                        className="cursor-pointer"
                      >
                        <Sparkles className="mr-2 h-5 w-5" />
                        Start a Project
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="glass-strong">
                    <p>Let's build something amazing together</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="glass-strong hover:glow-blue border-primary/30 px-8 py-7 text-lg rounded-full transition-all duration-300"
                    >
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View GitHub profile"
                      >
                        <Github className="mr-2 h-5 w-5" aria-hidden="true" />
                        View Work
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="glass-strong">
                    <p>Explore my projects and code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div
              ref={linksRef}
              className="flex flex-wrap justify-center gap-3"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="glass hover:glow-blue transition-all duration-300"
                    >
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Connect on LinkedIn"
                        className="px-4 py-2"
                      >
                        <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                        LinkedIn
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="glass-strong">
                    <p>Professional network</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="glass hover:glow-purple transition-all duration-300"
                    >
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View resume"
                        className="px-4 py-2"
                      >
                        <ExternalLink
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Resume
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="glass-strong">
                    <p>View credentials</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="glass hover:glow-teal transition-all duration-300"
                    >
                      <a
                        href="#"
                        download
                        aria-label="Download resume"
                        className="px-4 py-2"
                      >
                        <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                        Download
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="glass-strong">
                    <p>Get PDF version</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div
          ref={scrollIndicatorRef}
          className="flex justify-center mt-20 animate-bounce-slow"
        >
          <Link to="about" spy={true} smooth={true} offset={-64} duration={800}>
            <div className="glass-strong p-4 rounded-full hover:glow-blue transition-all duration-300 cursor-pointer group">
              <ChevronDown className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
