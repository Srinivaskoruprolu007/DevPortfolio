import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";
import { Link } from "react-scroll";
import { DataAnalystIllustration } from "./illustrations/data-analyst";
import { FrontendDevIllustration } from "./illustrations/frontend-dev";

export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center pt-16 px-4"
      aria-labelledby="hero-heading"
      role="banner"
    >
      <div className="container py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            >
              Data Analyst & Frontend Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed"
            >
              Transforming data into insights and creating beautiful web
              experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-8 md:mb-12"
            >
              <TooltipProvider>
                <Button asChild className="w-full sm:w-auto">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="cursor-pointer px-6 py-2.5"
                  >
                    Contact Me
                  </Link>
                </Button>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      asChild
                      className="w-full sm:w-auto"
                    >
                      <a
                        href="https://github.com/Srinivaskoruprolu007"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                        className="px-4 py-2.5"
                      >
                        <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                        GitHub
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      View my code repositories and open source contributions
                    </p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      asChild
                      className="w-full sm:w-auto"
                    >
                      <a
                        href="https://www.linkedin.com/in/srinivas-koruprolu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Connect with me on LinkedIn"
                        className="px-4 py-2.5"
                      >
                        <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                        LinkedIn
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with me professionally on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      asChild
                      className="bg-indigo-600 text-white hover:bg-indigo-700 w-full sm:w-auto"
                    >
                      <a
                        href="https://docs.google.com/document/d/1bfuztmRBf2ui-MKKQLHYhWwsxROIPbnE/edit?usp=sharing&ouid=103175391586875038607&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View my resume online (Google Docs)"
                        className="px-4 py-2.5 text-sm"
                      >
                        <ExternalLink
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        <span className="hidden sm:inline">
                          View Resume (Online)
                        </span>
                        <span className="sm:hidden">View Resume</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View my resume online in Google Docs format</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      asChild
                      className="bg-green-600 text-white hover:bg-green-700 w-full sm:w-auto"
                    >
                      <a
                        href="https://docs.google.com/document/d/1bfuztmRBf2ui-MKKQLHYhWwsxROIPbnE/export?format=pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download my resume as PDF file"
                        download="Srinivas_Koruprolu_Resume.pdf"
                        className="px-4 py-2.5 text-sm"
                      >
                        <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                        <span className="hidden sm:inline">
                          Download Resume (PDF)
                        </span>
                        <span className="sm:hidden">Download PDF</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download my resume as a PDF file (≈ 200KB)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-first md:order-last">
            <div className="flex justify-center">
              <DataAnalystIllustration />
            </div>
            <div className="flex justify-center">
              <FrontendDevIllustration />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-6 md:mt-8 animate-bounce"
        >
          <Link to="about" spy={true} smooth={true} offset={-64} duration={500}>
            <ChevronDown className="h-6 w-6 md:h-8 md:w-8 cursor-pointer hover:text-primary transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
