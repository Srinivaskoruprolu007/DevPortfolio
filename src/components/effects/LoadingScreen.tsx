import gsap from "gsap";
import { useEffect, useRef } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const progress = progressRef.current;
    const percent = percentRef.current;

    if (!container || !progress || !percent) return;

    // Create timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out loading screen
        gsap.to(container, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    // Animate progress bar
    const progressObj = { value: 0 };
    tl.to(progressObj, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        const val = Math.round(progressObj.value);
        if (progress) {
          gsap.to(progress, {
            width: `${val}%`,
            duration: 0.1,
          });
        }
        if (percent) {
          percent.textContent = `${val}%`;
        }
      },
    });

    // Animate logo/title
    tl.from(
      ".loading-title",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      0
    );

    // Animate particles
    tl.from(
      ".loading-particle",
      {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      0.5
    );
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10 backdrop-blur-xl"
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="loading-particle absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-md w-full">
        {/* Logo/Title */}
        <div className="loading-title mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Srinivas Koruprolu
          </h1>
          <p className="text-muted-foreground text-lg">
            Crafting Digital Experiences
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-4">
          <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm border border-primary/20">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 bg-gradient-primary rounded-full transition-all duration-300"
              style={{ width: "0%" }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>

          {/* Percentage */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Loading assets...</span>
            <span
              ref={percentRef}
              className="text-primary font-bold tabular-nums"
            >
              0%
            </span>
          </div>
        </div>

        {/* Loading dots animation */}
        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              style={{
                animation: `pulse 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
