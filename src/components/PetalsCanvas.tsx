import React, { useEffect, useRef } from 'react';

export const PetalsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mobile detection — fewer particles, no shadowBlur
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 18 : 45;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    interface Particle {
      x: number; y: number; size: number;
      speedX: number; speedY: number;
      rotation: number; rotationSpeed: number;
      color: string; opacity: number;
      type: 'petal' | 'goldDust';
    }

    const colors = [
      'rgba(239, 68, 68, 0.7)',
      'rgba(244, 114, 182, 0.6)',
      'rgba(245, 158, 11, 0.8)',
      'rgba(253, 224, 71, 0.7)',
    ];

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const isGold = Math.random() > 0.65;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isGold ? Math.random() * 2 + 1 : Math.random() * 10 + 6,
        speedX: Math.random() * 1.2 - 0.6,
        speedY: isGold ? Math.random() * 0.4 + 0.15 : Math.random() * 1 + 0.6,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: isGold ? 'rgba(251, 191, 36, 0.75)' : colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.25,
        type: isGold ? 'goldDust' : 'petal',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.35;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) { p.y = -20; p.x = Math.random() * width; }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'petal') {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, p.size / 2, p.size);
          ctx.bezierCurveTo(0, p.size, -p.size / 2, p.size / 2, 0, 0);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          // No shadowBlur on mobile — very expensive GPU op
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          if (!isMobile) {
            ctx.shadowBlur = 6;
            ctx.shadowColor = 'rgba(251, 191, 36, 0.8)';
          }
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-60"
      style={{ willChange: 'transform' }}
    />
  );
};

