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
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !hasFinePointer) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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

      if (particlesRef.current.length > 100) {
        particlesRef.current.shift();
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastTimeRef.current > 30) {
        createParticle(event.clientX, event.clientY);
        lastTimeRef.current = now;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 1;

        const lifeRatio = 1 - particle.life / particle.maxLife;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2 * lifeRatio, 0, Math.PI * 2);
        const alpha = lifeRatio * 0.6;
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.fill();

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

      frameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40"
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
}
