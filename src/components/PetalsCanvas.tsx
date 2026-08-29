import React, { useEffect, useRef } from 'react';

export const PetalsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle definition for rose & marigold petals + golden dust
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
      opacity: number;
      type: 'petal' | 'goldDust';
    }

    const particles: Particle[] = [];
    const colors = [
      'rgba(239, 68, 68, 0.7)',   // Crimson Rose
      'rgba(244, 114, 182, 0.6)',  // Soft Pink
      'rgba(245, 158, 11, 0.8)',  // Marigold Orange
      'rgba(253, 224, 71, 0.7)',  // Golden Yellow
    ];

    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      const isGold = Math.random() > 0.6;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isGold ? Math.random() * 3 + 1 : Math.random() * 12 + 8,
        speedX: Math.random() * 1.5 - 0.75,
        speedY: isGold ? Math.random() * 0.5 + 0.2 : Math.random() * 1.2 + 0.8,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: isGold ? 'rgba(251, 191, 36, 0.8)' : colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.3,
        type: isGold ? 'goldDust' : 'petal',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.5;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'petal') {
          // Draw petal shape
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, p.size / 2, p.size);
          ctx.bezierCurveTo(0, p.size, -p.size / 2, p.size / 2, 0, 0);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          // Draw glowing golden particle
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(251, 191, 36, 0.9)';
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
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
    />
  );
};
