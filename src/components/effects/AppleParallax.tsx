import { useAppleParallax } from "@/hooks/use-gsap-animations";
import { ReactNode } from "react";

interface AppleParallaxProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Apple-style parallax wrapper component
 * Wraps content and applies smooth parallax scrolling effect
 */
export function AppleParallax({
  children,
  speed = 0.3,
  reverse = false,
  className = "",
}: AppleParallaxProps) {
  const parallaxRef = useAppleParallax(speed, reverse);

  return (
    <div ref={parallaxRef} className={className}>
      {children}
    </div>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  backgroundSpeed?: number;
  contentSpeed?: number;
}

/**
 * Full section with multi-layer parallax effect
 * Background and content move at different speeds
 */
export function ParallaxSection({
  children,
  id,
  className = "",
  backgroundSpeed = 0.5,
  contentSpeed = 0.2,
}: ParallaxSectionProps) {
  const bgRef = useAppleParallax(backgroundSpeed);
  const contentRef = useAppleParallax(contentSpeed);

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background layer - moves slower */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-128 h-128 bg-accent/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
      </div>

      {/* Content layer - moves faster */}
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
    </section>
  );
}
