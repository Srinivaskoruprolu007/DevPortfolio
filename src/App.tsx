import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CursorEffect } from "@/components/effects/CursorEffect";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { Toaster } from "@/components/ui/toaster";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isLargeViewport = window.matchMedia("(min-width: 1024px)").matches;

    if (!prefersReducedMotion && hasFinePointer && isLargeViewport) {
      const smoother = ScrollSmoother.create({
        smooth: 1.3,
        effects: true,
        smoothTouch: 0,
        normalizeScroll: true,
      });

      return () => {
        smoother?.kill();
      };
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CursorEffect />
      <Toaster />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
          </main>

          <footer className="border-t border-border/60 bg-background/80 py-8">
            <div className="container px-4 text-center text-muted-foreground">
              <p className="text-sm">
                © {new Date().getFullYear()} Srinivas Koruprolu. All rights
                reserved.
              </p>
              <p className="mt-2 text-xs">
                Built with React, TypeScript, GSAP, and a focus on polished
                developer experiences.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
