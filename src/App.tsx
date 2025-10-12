import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CursorEffect } from "@/components/effects/CursorEffect";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { ThreeBackground } from "@/components/three/ThreeBackground";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen">
        {/* Three.js Animated Background */}
        <ThreeBackground />

        {/* Cursor Effect */}
        <CursorEffect />

        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" role="main" aria-label="Main content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>

        <Toaster aria-live="polite" />
      </div>
    </>
  );
}

export default App;
