import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

/**
 * useCinematicTextReveal
 * Creates a cinematic text reveal animation with stagger effect
 * Characters fade in and slide up sequentially
 */
export function useCinematicTextReveal(delay = 0): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const text = element.textContent || '';
    
    // Split text into characters while preserving spaces
    element.innerHTML = text
      .split('')
      .map((char) => {
        if (char === ' ') return '<span style="display: inline-block; width: 0.25em;">&nbsp;</span>';
        return `<span style="display: inline-block; opacity: 0;">${char}</span>`;
      })
      .join('');

    const chars = element.querySelectorAll('span');

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 50,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'back.out(1.7)',
        delay,
      }
    );
  }, [delay]);

  return ref;
}

/**
 * useScrollReveal3D
 * Reveals element with 3D transform on scroll
 * Adds depth and dimensionality to sections
 */
export function useScrollReveal3D(): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 100,
        rotationX: 45,
        z: -100,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        z: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return ref;
}

/**
 * useParallaxScroll
 * Creates smooth parallax scrolling effect
 * Elements move at different speeds creating depth
 */
export function useParallaxScroll(speed = 0.5): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [speed]);

  return ref;
}

/**
 * useGlowPulse
 * Adds a pulsing glow animation to elements
 * Perfect for CTAs and important buttons
 */
export function useGlowPulse(): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Use CSS class animation instead of GSAP for box-shadow
    ref.current.classList.add('animate-glow-pulse');
  }, []);

  return ref;
}

/**
 * useHoverTilt3D
 * Adds 3D tilt effect on mouse hover
 * Creates interactive depth perception
 */
export function useHoverTilt3D(): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(element, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}

/**
 * useMagneticButton
 * Buttons that follow cursor with magnetic effect
 * Creates engaging micro-interactions
 */
export function useMagneticButton(strength = 0.3): RefObject<HTMLButtonElement> {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const button = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
