import React, { useState, useImperativeHandle, forwardRef, useCallback } from 'react';

export interface FloatingHeartsHandle {
  spawnHearts: (e?: React.MouseEvent) => void;
}

interface HeartParticle {
  id: number;
  x: number; // percentage from left (0 to 100)
  size: number; // in pixels
  colorType: 'ruby' | 'roseGold' | 'golden' | 'pinkGlow' | 'magenta';
  duration: number; // animation duration in seconds
  swayDistance: number; // px of horizontal sway
  rotation: number; // initial tilt
  delay: number; // staggered delay
}

const COLOR_GRADIENTS = {
  ruby: {
    start: '#ff2a6d',
    end: '#c40047',
    glow: 'rgba(255, 42, 109, 0.7)',
  },
  roseGold: {
    start: '#ff758c',
    end: '#ff7eb3',
    glow: 'rgba(255, 117, 140, 0.7)',
  },
  golden: {
    start: '#fde047',
    end: '#d97706',
    glow: 'rgba(251, 191, 36, 0.65)',
  },
  pinkGlow: {
    start: '#f472b6',
    end: '#db2777',
    glow: 'rgba(244, 114, 182, 0.75)',
  },
  magenta: {
    start: '#fb7185',
    end: '#e11d48',
    glow: 'rgba(251, 113, 133, 0.7)',
  },
};

export const FloatingHearts = forwardRef<FloatingHeartsHandle>((_, ref) => {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  const spawnHearts = useCallback((e?: React.MouseEvent) => {
    // Base center from click or center of mobile screen
    let baseX = 50;
    if (e) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const xPercent = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
      baseX = Math.max(15, Math.min(85, xPercent));
    }

    const count = 18;
    const newHearts: HeartParticle[] = [];
    const colorTypes: HeartParticle['colorType'][] = ['ruby', 'roseGold', 'golden', 'pinkGlow', 'magenta'];

    for (let i = 0; i < count; i++) {
      newHearts.push({
        id: Date.now() + Math.random() * 10000 + i,
        x: baseX + (Math.random() * 30 - 15), // spread around button
        size: Math.floor(Math.random() * 18) + 20, // 20px to 38px
        colorType: colorTypes[Math.floor(Math.random() * colorTypes.length)],
        duration: 2.2 + Math.random() * 1.2, // 2.2s to 3.4s
        swayDistance: (Math.random() - 0.5) * 80, // sway left/right
        rotation: (Math.random() - 0.5) * 40,
        delay: Math.random() * 0.35, // staggered launch
      });
    }

    setHearts((prev) => [...prev, ...newHearts]);
  }, []);

  useImperativeHandle(ref, () => ({
    spawnHearts,
  }));

  const removeHeart = (id: number) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* SVG Filters for soft 3D glow & shine */}
      <svg className="hidden">
        <defs>
          {Object.entries(COLOR_GRADIENTS).map(([name, grad]) => (
            <linearGradient key={name} id={`heart-grad-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={grad.start} />
              <stop offset="100%" stopColor={grad.end} />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {hearts.map((heart) => {
        const grad = COLOR_GRADIENTS[heart.colorType];
        return (
          <div
            key={heart.id}
            onAnimationEnd={() => removeHeart(heart.id)}
            className="absolute bottom-16 floating-heart-wrapper"
            style={{
              left: `${heart.x}%`,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
              transform: `rotate(${heart.rotation}deg)`,
              // Custom CSS property for horizontal drift
              ['--sway-x' as string]: `${heart.swayDistance}px`,
            }}
          >
            <div
              className="heart-glow-container transition-transform"
              style={{
                filter: `drop-shadow(0 0 10px ${grad.glow}) drop-shadow(0 4px 12px rgba(0,0,0,0.4))`,
              }}
            >
              <svg
                width={heart.size}
                height={heart.size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill={`url(#heart-grad-${heart.colorType})`}
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="0.8"
                />
                {/* Subtle specular shine highlight on top-left of heart */}
                <ellipse
                  cx="7.5"
                  cy="7"
                  rx="2.5"
                  ry="1.5"
                  transform="rotate(-25 7.5 7)"
                  fill="rgba(255, 255, 255, 0.55)"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
});
