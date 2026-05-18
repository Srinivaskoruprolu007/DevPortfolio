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
