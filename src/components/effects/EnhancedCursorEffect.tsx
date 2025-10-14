import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * EnhancedCursorEffect Component
 * Creates a custom cursor with particle trail
 * Responds to hover states and creates cosmic feel
 */
export function EnhancedCursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Only show on desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (isMobile) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Immediate dot follow
      gsap.to(cursorDot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
      });

      // Create particle trail occasionally
      if (Math.random() > 0.85) {
        createParticle(mouseX, mouseY);
      }
    };

    // Smooth cursor follow animation
    const animateCursor = () => {
      const distance = Math.sqrt(
        Math.pow(mouseX - cursorX, 2) + Math.pow(mouseY - cursorY, 2)
      );

      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      gsap.set(cursor, {
        x: cursorX,
        y: cursorY,
      });

      requestAnimationFrame(animateCursor);
    };

    // Create particle effect
    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      // Random cosmic color
      const colors = ['#3b82f6', '#8b5cf6', '#06b6d4'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      document.body.appendChild(particle);
      particlesRef.current.push(particle);

      gsap.to(particle, {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          particle.remove();
          particlesRef.current = particlesRef.current.filter(p => p !== particle);
        },
      });
    };

    // Hover effects on interactive elements
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        duration: 0.3,
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      particlesRef.current.forEach(p => p.remove());
    };
  }, []);

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="cursor-ring"
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '2px solid rgba(59, 130, 246, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s',
        }}
      />
      
      {/* Center dot */}
      <div
        ref={cursorDotRef}
        className="cursor-dot"
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          backgroundColor: '#3b82f6',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
        }}
      />

      {/* Particle styles */}
      <style>{`
        .cursor-particle {
          position: fixed;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px currentColor;
        }

        /* Hide default cursor on interactive elements */
        body {
          cursor: none;
        }

        a, button, [role="button"] {
          cursor: none;
        }

        @media (max-width: 768px) {
          .cursor-ring, .cursor-dot {
            display: none;
          }
          body, a, button, [role="button"] {
            cursor: auto;
          }
        }
      `}</style>
    </>
  );
}
