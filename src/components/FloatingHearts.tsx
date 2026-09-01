import React, { useState, useImperativeHandle, forwardRef, useCallback } from 'react';

export interface FloatingHeartsHandle {
  spawnHearts: (e?: React.MouseEvent) => void;
}

type HeartDirection = 'ascend' | 'rain' | 'fountain';

interface HeartParticle {
  id: number;
  x: number; // percentage from left (0 to 100)
  startY?: number; // percentage for fountain
  size: number; // in pixels
  colorType: 'vibrantRed' | 'deepCrimson' | 'hotPink' | 'blushRose' | 'coralLove' | 'goldenRose';
  direction: HeartDirection;
  duration: number; // animation duration in seconds
  swayDistance: number; // px of horizontal sway
  rotation: number; // initial tilt
  delay: number; // staggered delay in seconds
  fountainAngle?: number;
}

const COLOR_GRADIENTS = {
  vibrantRed: {
    start: '#ff1e56',
    end: '#c70039',
    glow: 'rgba(255, 30, 86, 0.85)',
  },
  deepCrimson: {
    start: '#e11d48',
    end: '#881337',
    glow: 'rgba(225, 29, 72, 0.8)',
  },
  hotPink: {
    start: '#ff4b8b',
    end: '#be123c',
    glow: 'rgba(255, 75, 139, 0.85)',
  },
  blushRose: {
    start: '#fb7185',
    end: '#e11d48',
    glow: 'rgba(251, 113, 133, 0.75)',
  },
  coralLove: {
    start: '#ff3366',
    end: '#ff0844',
    glow: 'rgba(255, 51, 102, 0.9)',
  },
  goldenRose: {
    start: '#ff4d6d',
    end: '#c9184a',
    glow: 'rgba(255, 77, 109, 0.8)',
  },
};

export const FloatingHearts = forwardRef<FloatingHeartsHandle>((_, ref) => {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);
  const [showCenterPulse, setShowCenterPulse] = useState(false);

  const spawnHearts = useCallback((e?: React.MouseEvent) => {
    // Trigger central romantic heartbeat pulse
    setShowCenterPulse(true);
    setTimeout(() => setShowCenterPulse(false), 2200);

    let clickX = 50;
    let clickY = 50;
    if (e) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      clickX = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
      clickY = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
    }

    const newHearts: HeartParticle[] = [];
    const colorKeys: HeartParticle['colorType'][] = [
      'vibrantRed',
      'deepCrimson',
      'hotPink',
      'blushRose',
      'coralLove',
      'goldenRose',
    ];

    // 1. TOP RAIN HEARTS (Raining down softly like love shower from above)
    const topRainCount = 14;
    for (let i = 0; i < topRainCount; i++) {
      newHearts.push({
        id: Date.now() + Math.random() * 100000 + i,
        x: Math.random() * 92 + 4, // Spread across screen width
        size: Math.floor(Math.random() * 16) + 20, // 20px - 36px
        colorType: colorKeys[Math.floor(Math.random() * colorKeys.length)],
        direction: 'rain',
        duration: 2.8 + Math.random() * 1.4, // 2.8s - 4.2s gentle fall
        swayDistance: (Math.random() - 0.5) * 100,
        rotation: (Math.random() - 0.5) * 60,
        delay: Math.random() * 0.6,
      });
    }

    // 2. BOTTOM ASCENDING HEARTS (Rising from bottom to the heavens)
    const bottomAscendCount = 14;
    for (let i = 0; i < bottomAscendCount; i++) {
      newHearts.push({
        id: Date.now() + Math.random() * 100000 + i + 50,
        x: Math.random() * 92 + 4,
        size: Math.floor(Math.random() * 18) + 22, // 22px - 40px
        colorType: colorKeys[Math.floor(Math.random() * colorKeys.length)],
        direction: 'ascend',
        duration: 2.6 + Math.random() * 1.2, // 2.6s - 3.8s
        swayDistance: (Math.random() - 0.5) * 90,
        rotation: (Math.random() - 0.5) * 50,
        delay: Math.random() * 0.5,
      });
    }

    // 3. FOUNTAIN BURST (Radial burst near button)
    const fountainCount = 12;
    for (let i = 0; i < fountainCount; i++) {
      const angle = (i / fountainCount) * 360 + (Math.random() * 20 - 10);
      newHearts.push({
        id: Date.now() + Math.random() * 100000 + i + 100,
        x: clickX,
        startY: clickY,
        size: Math.floor(Math.random() * 14) + 18,
        colorType: colorKeys[Math.floor(Math.random() * colorKeys.length)],
        direction: 'fountain',
        duration: 2.2 + Math.random() * 0.8,
        swayDistance: (Math.random() - 0.5) * 60,
        rotation: (Math.random() - 0.5) * 30,
        delay: Math.random() * 0.2,
        fountainAngle: angle,
      });
    }

    setHearts((prev) => [...prev, ...newHearts]);

    // Batch clear after animations complete (prevents per-particle React re-renders)
    setTimeout(() => {
      setHearts([]);
    }, 4500);
  }, []);

  useImperativeHandle(ref, () => ({
    spawnHearts,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* SVG Gradient definitions for rich Red & Pink glowing hearts */}
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

      {/* CENTERPIECE ROMANTIC HEARTBEAT PULSE BLOOM */}
      {showCenterPulse && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="animate-center-heart-bloom flex flex-col items-center justify-center">
            <div className="relative">
              {/* Outer Golden Aura Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-600/30 to-pink-500/30 blur-2xl transform scale-150 animate-pulse" />
              
              {/* Center Heart SVG */}
              <svg
                width="90"
                height="90"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: 'drop-shadow(0 0 25px rgba(255, 30, 86, 0.9)) drop-shadow(0 0 50px rgba(225, 29, 72, 0.6))',
                }}
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="url(#heart-grad-coralLove)"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="0.8"
                />
                {/* 3D Curved Specular Highlight */}
                <ellipse
                  cx="7.5"
                  cy="7"
                  rx="3"
                  ry="1.8"
                  transform="rotate(-25 7.5 7)"
                  fill="rgba(255, 255, 255, 0.7)"
                />
              </svg>
            </div>
            <p className="mt-2 text-sm font-serif-royal font-bold text-rose-200 tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] uppercase">
              Lots of Love ❤️
            </p>
          </div>
        </div>
      )}

      {/* ALL MULTI-DIRECTIONAL HEARTS (Top Rain + Bottom Ascend + Fountain) */}
      {hearts.map((heart) => {
        const grad = COLOR_GRADIENTS[heart.colorType];

        let animationClass = 'animate-heart-ascend';
        let styleObj: React.CSSProperties = {
          left: `${heart.x}%`,
          animationDuration: `${heart.duration}s`,
          animationDelay: `${heart.delay}s`,
          transform: `rotate(${heart.rotation}deg)`,
          ['--sway-x' as string]: `${heart.swayDistance}px`,
        };

        if (heart.direction === 'rain') {
          animationClass = 'animate-heart-rain';
          styleObj = {
            ...styleObj,
            top: '-60px',
          };
        } else if (heart.direction === 'ascend') {
          animationClass = 'animate-heart-ascend';
          styleObj = {
            ...styleObj,
            bottom: '-60px',
          };
        } else if (heart.direction === 'fountain') {
          animationClass = 'animate-heart-fountain';
          const rad = ((heart.fountainAngle || 0) * Math.PI) / 180;
          const burstDist = 120 + Math.random() * 100;
          const burstX = Math.cos(rad) * burstDist;
          const burstY = Math.sin(rad) * burstDist;
          styleObj = {
            ...styleObj,
            left: `${heart.x}%`,
            top: `${heart.startY || 50}%`,
            ['--burst-x' as string]: `${burstX}px`,
            ['--burst-y' as string]: `${burstY}px`,
          };
        }

        return (
          <div
            key={heart.id}
            className={`absolute ${animationClass}`}
            style={styleObj}
          >
            <div
              className="transition-transform animate-heart-wobble"
              style={{
                filter: `drop-shadow(0 0 12px ${grad.glow}) drop-shadow(0 4px 10px rgba(0,0,0,0.5))`,
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
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="0.75"
                />
                {/* 3D Specular Highlight */}
                <ellipse
                  cx="7.5"
                  cy="7"
                  rx="2.4"
                  ry="1.4"
                  transform="rotate(-25 7.5 7)"
                  fill="rgba(255, 255, 255, 0.6)"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
});
