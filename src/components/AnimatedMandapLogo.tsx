// Animated SVG Mandap Logo — Header decoration
export function AnimatedMandapLogo() {
  return (
    <div className="flex justify-center my-2">
      <svg
        viewBox="0 0 200 120"
        width="200"
        height="120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <radialGradient id="mandapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#92400e" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pillarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
          <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient glow behind mandap */}
        <ellipse cx="100" cy="80" rx="80" ry="30" fill="url(#mandapGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
        </ellipse>

        {/* === GROUND BASE === */}
        <rect x="20" y="98" width="160" height="5" rx="2.5" fill="url(#pillarGrad)" opacity="0.7" />

        {/* === LEFT PILLAR === */}
        <rect x="28" y="50" width="12" height="48" rx="3" fill="url(#pillarGrad)" />
        {/* Pillar cap left */}
        <rect x="24" y="46" width="20" height="6" rx="2" fill="#fde68a" />
        {/* Pillar base decor left */}
        <rect x="25" y="88" width="18" height="4" rx="1" fill="#fbbf24" opacity="0.8" />

        {/* === RIGHT PILLAR === */}
        <rect x="160" y="50" width="12" height="48" rx="3" fill="url(#pillarGrad)" />
        {/* Pillar cap right */}
        <rect x="156" y="46" width="20" height="6" rx="2" fill="#fde68a" />
        {/* Pillar base decor right */}
        <rect x="157" y="88" width="18" height="4" rx="1" fill="#fbbf24" opacity="0.8" />

        {/* === CENTER PILLARS (smaller) === */}
        <rect x="70" y="60" width="8" height="38" rx="2" fill="url(#pillarGrad)" opacity="0.9" />
        <rect x="66" y="56" width="16" height="5" rx="2" fill="#fde68a" opacity="0.9" />

        <rect x="122" y="60" width="8" height="38" rx="2" fill="url(#pillarGrad)" opacity="0.9" />
        <rect x="118" y="56" width="16" height="5" rx="2" fill="#fde68a" opacity="0.9" />

        {/* === ARCH === */}
        <path
          d="M 34 50 Q 100 5 166 50"
          fill="none"
          stroke="url(#archGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        {/* Arch inner decorative line */}
        <path
          d="M 40 54 Q 100 15 160 54"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeDasharray="5,4"
          opacity="0.5"
        />

        {/* === ARCH ORNAMENT DOTS === */}
        {[0, 0.2, 0.4, 0.5, 0.6, 0.8, 1].map((t, i) => {
          const x = 34 + (166 - 34) * t;
          const yOffset = Math.sin(Math.PI * t) * 45;
          const cy = 50 - yOffset;
          return (
            <circle key={i} cx={x} cy={cy} r={i === 3 ? 4 : 2.5} fill="#fde68a" filter="url(#glow)">
              <animate
                attributeName="opacity"
                values={i % 2 === 0 ? '0.5;1;0.5' : '1;0.5;1'}
                dur={`${1.5 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

        {/* === TOP FINIAL / DIYA FLAME === */}
        {/* Diya pot */}
        <ellipse cx="100" cy="14" rx="7" ry="4" fill="#ca8a04" />
        <path d="M93 14 Q100 20 107 14" fill="#a16207" />
        {/* Wick */}
        <line x1="100" y1="10" x2="100" y2="14" stroke="#fde68a" strokeWidth="1.5" />
        {/* Flame */}
        <path d="M100 10 C97 6 94 2 100 0 C106 2 103 6 100 10Z" fill="#f59e0b" filter="url(#softGlow)">
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1,1; 0.9,1.15; 1.05,0.9; 1,1"
            dur="0.8s"
            repeatCount="indefinite"
            additive="sum"
          />
          <animate attributeName="fill" values="#f59e0b;#ef4444;#f97316;#f59e0b" dur="1.2s" repeatCount="indefinite" />
        </path>
        {/* Inner flame */}
        <path d="M100 9 C98.5 7 98 4 100 3 C102 4 101.5 7 100 9Z" fill="#fef08a" opacity="0.9" />

        {/* === FLOATING STARS / SPARKLES === */}
        <g filter="url(#glow)">
          <text x="15" y="35" fontSize="10" fill="#fbbf24">✦
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-4; 0,0" dur="2s" repeatCount="indefinite" />
          </text>
          <text x="173" y="35" fontSize="10" fill="#fbbf24">✦
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.7s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-4; 0,0" dur="2s" begin="0.7s" repeatCount="indefinite" />
          </text>
          <text x="50" y="22" fontSize="7" fill="#fde68a">✦
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
          </text>
          <text x="140" y="22" fontSize="7" fill="#fde68a">✦
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="1s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="2.5s" begin="1s" repeatCount="indefinite" />
          </text>
        </g>

        {/* === GARLAND BETWEEN PILLARS (scalloped line) === */}
        <path
          d="M34 52 Q46 60 58 52 Q70 60 82 52 Q94 60 100 52 Q106 60 118 52 Q130 60 142 52 Q154 60 166 52"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        >
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
        </path>

        {/* === TITLE TEXT === */}
        <text
          x="100"
          y="112"
          textAnchor="middle"
          fontSize="7"
          fontFamily="serif"
          letterSpacing="2"
          fill="#fde68a"
          opacity="0.85"
        >
          SACRED WEDDING
        </text>
      </svg>
    </div>
  );
}
