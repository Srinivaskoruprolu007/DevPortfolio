import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EnhancedCursorEffect } from "@/components/effects/EnhancedCursorEffect";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
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
      // Initialize smooth scrolling - Enhanced cinematic feel
      const smoother = ScrollSmoother.create({
        smooth: 2, // Increased smoothness for cinematic effect
        effects: true, // Enable data-speed attributes
        smoothTouch: 0.1, // Enable smooth scrolling on touch devices
        normalizeScroll: true, // Prevent address bar showing/hiding from affecting scroll
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
      <EnhancedCursorEffect />

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

          {/* Footer - Cosmic theme */}
          <footer className="py-12 glass-strong border-t border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 cosmic-gradient-radial opacity-50" />
            <div className="container px-4 text-center text-muted-foreground relative z-10">
              <p className="text-sm font-medium">
                © {new Date().getFullYear()} Digital Universe Portfolio. Crafted with passion.
              </p>
              <p className="text-xs mt-3 flex items-center justify-center gap-2">
                <span className="text-primary">⚡</span>
                Built with React, TypeScript, GSAP & Three.js
                <span className="text-secondary">✨</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
