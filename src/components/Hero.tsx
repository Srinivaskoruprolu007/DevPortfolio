import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { DataAnalystIllustration } from './illustrations/data-analyst';
import { FrontendDevIllustration } from './illustrations/frontend-dev';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Data Analyst & Frontend Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Transforming data into insights and creating beautiful web experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
            >
              <Button asChild>
                <Link to="contact" spy={true} smooth={true} offset={-64} duration={500} className='cursor-pointer'>
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/Srinivaskoruprolu007" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/srinivas-koruprolu/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a
                  href="https://docs.google.com/document/d/1bfuztmRBf2ui-MKKQLHYhWwsxROIPbnE/edit?usp=sharing&ouid=103175391586875038607&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Open My CV
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://docs.google.com/document/d/1bfuztmRBf2ui-MKKQLHYhWwsxROIPbnE/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Download My CV
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <DataAnalystIllustration />
            <FrontendDevIllustration />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-8 animate-bounce"
        >
          <Link to="about" spy={true} smooth={true} offset={-64} duration={500}>
            <ChevronDown className="h-8 w-8 cursor-pointer" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
