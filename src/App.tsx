import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CursorEffect } from "@/components/effects/CursorEffect";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import gsap from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import "./App.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      // Initialize smooth scrolling - Apple-style
      const smoother = ScrollSmoother.create({
        smooth: 1.5, // Smoothness amount (0-3, higher = smoother)
        effects: true, // Enable data-speed attributes
        smoothTouch: 0.1, // Enable smooth scrolling on touch devices
        normalizeScroll: true, // Prevent address bar showing/hiding from affecting the scroll position
      });

      // Cleanup on unmount
      return () => {
        smoother?.kill();
      };
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CursorEffect />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="py-8 bg-muted/50 border-t border-border/50">
            <div className="container px-4 text-center text-muted-foreground">
              <p className="text-sm">
                © {new Date().getFullYear()} Srinivas Koruprolu. All rights
                reserved.
              </p>
              <p className="text-xs mt-2">
                Built with React, TypeScript, GSAP & Three.js
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
