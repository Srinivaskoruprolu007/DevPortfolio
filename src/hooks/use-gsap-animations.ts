import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function cleanupTween(tween?: gsap.core.Tween | null) {
  tween?.scrollTrigger?.kill();
  tween?.kill();
}

export function useFadeInUp(delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const tween = gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
      }
    );

    return () => cleanupTween(tween);
  }, [delay]);

  return ref;
}

export function useScaleIn(delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const tween = gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay,
        ease: "back.out(1.7)",
      }
    );

    return () => cleanupTween(tween);
  }, [delay]);

  return ref;
}

export function useStaggerAnimation(selector: string, delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll(selector);
    const tween = gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay,
        stagger: 0.1,
        ease: "power2.out",
      }
    );

    return () => cleanupTween(tween);
  }, [selector, delay]);

  return ref;
}

export function useScrollAnimation(options?: gsap.TweenVars) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const tween = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        ...options,
      }
    );

    return () => cleanupTween(tween);
  }, [options]);

  return ref;
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const tween = gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => cleanupTween(tween);
  }, [speed]);

  return ref;
}

export function useCountUp(
  target: number,
  duration: number = 2,
  delay: number = 0
) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const obj = { value: 0 };
    const tween = gsap.to(obj, {
      value: target,
      duration,
      delay,
      ease: "power2.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.round(obj.value).toString();
        }
      },
    });

    return () => cleanupTween(tween);
  }, [target, duration, delay]);

  return ref;
}

export function useProgressAnimation(value: number, delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const tween = gsap.fromTo(
      ref.current,
      {
        width: "0%",
      },
      {
        width: `${value}%`,
        duration: 1.5,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => cleanupTween(tween);
  }, [value, delay]);

  return ref;
}

export function useTextReveal(delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const words = ref.current.querySelectorAll(".word");
    const tween = gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay,
        stagger: 0.05,
        ease: "power2.out",
      }
    );

    return () => cleanupTween(tween);
  }, [delay]);

  return ref;
}

export function useRotateOnScroll(rotation: number = 360) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const tween = gsap.to(ref.current, {
      rotation,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => cleanupTween(tween);
  }, [rotation]);

  return ref;
}

export function useAppleParallax(
  speed: number = 0.5,
  reverse: boolean = false
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const direction = reverse ? -1 : 1;
    const tween = gsap.to(element, {
      y: () => direction * window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    return () => cleanupTween(tween);
  }, [speed, reverse]);

  return ref;
}

export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const sections = gsap.utils.toArray(".horizontal-section", container);

    if (sections.length === 0) return;

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${container.offsetWidth}`,
      },
    });

    return () => cleanupTween(scrollTween);
  }, []);

  return containerRef;
}

export function useScaleOnScroll(
  startScale: number = 0.8,
  endScale: number = 1
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const tween = gsap.fromTo(
      ref.current,
      { scale: startScale },
      {
        scale: endScale,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    return () => cleanupTween(tween);
  }, [startScale, endScale]);

  return ref;
}

export function usePinOnScroll(duration: number = 1000) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      end: `+=${duration}`,
      pin: true,
      pinSpacing: true,
    });

    return () => trigger.kill();
  }, [duration]);

  return ref;
}

export function useClipPathReveal(delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const tween = gsap.fromTo(
      ref.current,
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => cleanupTween(tween);
  }, [delay]);

  return ref;
}
