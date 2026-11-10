import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let isVisible = true;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse coordinates for subtle interactive reaction (desktop only)
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Calculate responsive particle parameters
    const getParticleSettings = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      // Lightweight particle counts to ensure zero mobile stutter
      const count = isMobile ? 32 : isTablet ? 55 : 75;
      const connectionDist = isMobile ? 85 : 115;
      const maxDistSq = connectionDist * connectionDist;

      return { count, connectionDist, maxDistSq, isMobile };
    };

    let settings = getParticleSettings();

    // Resize canvas to match window viewport with safe devicePixelRatio
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      settings = getParticleSettings();
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const speedScale = prefersReducedMotion ? 0.08 : settings.isMobile ? 0.22 : 0.32;

      for (let i = 0; i < settings.count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speedScale,
          vy: (Math.random() - 0.5) * speedScale,
          radius: Math.random() * 1.0 + 1.1, // delicate small cyan dots
          baseAlpha: Math.random() * 0.25 + 0.2, // subtle, low opacity
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    // Listen to tab visibility to pause animation when tab is inactive
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !animationFrameId) {
        lastTime = performance.now();
        render();
      }
    };

    let lastTime = performance.now();

    const render = () => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      const len = particles.length;

      // 1. Draw connecting lines between particles close to each other
      for (let i = 0; i < len; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < settings.maxDistSq) {
            const dist = Math.sqrt(distSq);
            // Non-linear fade for soft organic fading
            const proximity = 1 - dist / settings.connectionDist;
            const lineAlpha = proximity * 0.16; // delicate low opacity

            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Optional subtle interactive connection to mouse on desktop
        if (mouse.active && !settings.isMobile) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mDistSq = mdx * mdx + mdy * mdy;
          const mouseMaxDist = 130;
          const mouseMaxDistSq = mouseMaxDist * mouseMaxDist;

          if (mDistSq < mouseMaxDistSq) {
            const mDist = Math.sqrt(mDistSq);
            const mProximity = 1 - mDist / mouseMaxDist;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 242, 254, ${mProximity * 0.25})`;
            ctx.lineWidth = 0.9;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // 2. Draw & update particles
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Soft screen wraparound
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;

        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        // Subtle pulsing glow
        p.pulsePhase += p.pulseSpeed;
        const currentAlpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.1;
        const finalAlpha = Math.max(0.12, Math.min(0.48, currentAlpha));

        // Draw particle dot with soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${finalAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Initialize
    handleResize();
    render();

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-1000"
    />
  );
};
