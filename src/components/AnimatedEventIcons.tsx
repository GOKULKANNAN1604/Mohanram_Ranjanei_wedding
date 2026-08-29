// Animated SVG icons for each event type on the timeline cards

// Animated Ring icon — Engagement
export function AnimatedRingIcon() {
  return (
    <svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0" />
        </radialGradient>
        <filter id="ringGlowF">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Outer glow pulse */}
      <circle cx="20" cy="24" r="14" fill="url(#ringGlow)" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
        <animate attributeName="r" values="10;16;10" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* Ring band */}
      <circle cx="20" cy="24" r="10" fill="none" stroke="#f59e0b" strokeWidth="4" filter="url(#ringGlowF)">
        <animate attributeName="stroke" values="#f59e0b;#fde68a;#f59e0b" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* Diamond on top */}
      <polygon points="20,5 24,12 20,15 16,12" fill="#93c5fd" stroke="#fde68a" strokeWidth="0.8">
        <animate attributeName="fill" values="#93c5fd;#c7d2fe;#93c5fd" dur="1.5s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="1s" repeatCount="indefinite" additive="sum" />
      </polygon>
      {/* Diamond shine */}
      <polygon points="20,6 21.5,10 20,9" fill="white" opacity="0.7" />
      {/* Sparkles */}
      <text x="5" y="12" fontSize="7" fill="#fde68a">✦
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.2s" repeatCount="indefinite" />
      </text>
      <text x="28" y="10" fontSize="5" fill="#fde68a">✦
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.9s" repeatCount="indefinite" />
      </text>
    </svg>
  );
}

// Animated Mandap/Temple icon — Wedding
export function AnimatedWeddingIcon() {
  return (
    <svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wIconGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="wGlowF">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Arch */}
      <path d="M 6 28 Q 20 6 34 28" fill="none" stroke="url(#wIconGrad)" strokeWidth="2.5" strokeLinecap="round" filter="url(#wGlowF)" />
      {/* Left pillar */}
      <rect x="5" y="22" width="4" height="10" rx="1" fill="#f59e0b" />
      {/* Right pillar */}
      <rect x="31" y="22" width="4" height="10" rx="1" fill="#f59e0b" />
      {/* Ground */}
      <rect x="3" y="32" width="34" height="2.5" rx="1.2" fill="#ca8a04" opacity="0.8" />
      {/* Flame at top */}
      <path d="M20 8 C17 4 16 1 20 0 C24 1 23 4 20 8Z" fill="#f97316">
        <animate attributeName="fill" values="#f97316;#ef4444;#f59e0b;#f97316" dur="0.9s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="scale" values="1,1;0.9,1.2;1,1" dur="0.9s" repeatCount="indefinite" additive="sum" />
      </path>
      <path d="M20 7 C18.5 5 18 2 20 1 C22 2 21.5 5 20 7Z" fill="#fef08a" opacity="0.9" />
      {/* Heart center */}
      <path d="M17.5 18 C17.5 16.5 18.5 15.5 20 17 C21.5 15.5 22.5 16.5 22.5 18 C22.5 20 20 22 20 22 C20 22 17.5 20 17.5 18Z" fill="#f43f5e">
        <animate attributeName="fill" values="#f43f5e;#fb7185;#f43f5e" dur="1.2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="scale" values="1;1.15;1" dur="1.2s" repeatCount="indefinite" additive="sum" />
      </path>
      {/* Arch dots */}
      <circle cx="20" cy="7.5" r="1.5" fill="#fde68a">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// Animated Star/Party icon — Reception
export function AnimatedReceptionIcon() {
  return (
    <svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rGlowF">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Rotating outer stars */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="6s" repeatCount="indefinite" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <circle
              key={i}
              cx={20 + Math.cos(rad) * 14}
              cy={20 + Math.sin(rad) * 14}
              r="2.5"
              fill={['#10b981', '#34d399', '#6ee7b7', '#10b981', '#a7f3d0', '#34d399'][i]}
              opacity="0.85"
            >
              <animate attributeName="r" values="2;3;2" dur={`${1 + i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          );
        })}
      </g>
      {/* Center star */}
      <path
        d="M20 8 L21.8 14.5 L28.5 14.5 L23 18.5 L24.8 25 L20 21 L15.2 25 L17 18.5 L11.5 14.5 L18.2 14.5 Z"
        fill="#10b981"
        filter="url(#rGlowF)"
      >
        <animate attributeName="fill" values="#10b981;#6ee7b7;#34d399;#10b981" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="1.5s" repeatCount="indefinite" additive="sum" />
      </path>
      <path
        d="M20 11 L21.2 15 L25.2 15 L22 17.5 L23.2 21.5 L20 19 L16.8 21.5 L18 17.5 L14.8 15 L18.8 15 Z"
        fill="#a7f3d0"
        opacity="0.8"
      />
      {/* Burst lines */}
      {[15, 75, 105, 165, 195, 255, 285, 345].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={20 + Math.cos(rad) * 16}
            y1={20 + Math.sin(rad) * 16}
            x2={20 + Math.cos(rad) * 20}
            y2={20 + Math.sin(rad) * 20}
            stroke="#6ee7b7"
            strokeWidth="1.2"
            opacity="0"
          >
            <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" begin={`${i * 0.18}s`} repeatCount="indefinite" />
          </line>
        );
      })}
      {/* Confetti dots */}
      <circle cx="8" cy="8" r="2" fill="#f43f5e">
        <animate attributeName="cy" values="8;5;8" dur="1s" begin="0.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="32" cy="7" r="1.5" fill="#fbbf24">
        <animate attributeName="cy" values="7;4;7" dur="1.2s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="32" r="1.5" fill="#818cf8">
        <animate attributeName="cy" values="32;29;32" dur="0.9s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="0.9s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="33" cy="33" r="2" fill="#fb7185">
        <animate attributeName="cy" values="33;30;33" dur="1.1s" begin="0.3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.1s" begin="0.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
