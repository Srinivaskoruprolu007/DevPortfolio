import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Create particles on mouse move
      const now = Date.now();
      if (now - lastTimeRef.current > 30) {
        // Throttle particle creation
        createParticle(e.clientX, e.clientY);
        lastTimeRef.current = now;
      }
    };

    const createParticle = (x: number, y: number) => {
      const particle: Particle = {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 1,
        maxLife: 60 + Math.random() * 60,
      };
      particlesRef.current.push(particle);

      // Limit particle count
      if (particlesRef.current.length > 100) {
        particlesRef.current.shift();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        const lifeRatio = 1 - particle.life / particle.maxLife;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2 * lifeRatio, 0, Math.PI * 2);

        // Gradient color based on theme
        const alpha = lifeRatio * 0.6;
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`; // Primary blue
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          10 * lifeRatio
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${alpha * 0.5})`);
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(
          particle.x - 10 * lifeRatio,
          particle.y - 10 * lifeRatio,
          20 * lifeRatio,
          20 * lifeRatio
        );

        return particle.life < particle.maxLife;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
}
