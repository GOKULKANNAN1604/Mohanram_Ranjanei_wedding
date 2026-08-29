// Animated SVG Blessing / Namaste Footer Symbol
export function AnimatedBlessingSymbol() {
  return (
    <div className="flex flex-col items-center gap-2 py-2">
      <svg
        viewBox="0 0 160 130"
        width="160"
        height="130"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <radialGradient id="blessGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#92400e" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="handGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
          <linearGradient id="lotusPetal" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#fda4af" />
          </linearGradient>
          <filter id="blessGlowFilter">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background radial glow */}
        <circle cx="80" cy="65" r="55" fill="url(#blessGlow)">
          <animate attributeName="r" values="45;58;45" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* === LOTUS FLOWER (base) === */}
        {/* Outer petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 80 + Math.cos(rad) * 22;
          const cy = 90 + Math.sin(rad) * 14;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="10"
              ry="5"
              fill={i % 2 === 0 ? '#f43f5e' : '#fb7185'}
              opacity="0.7"
              transform={`rotate(${angle},${cx},${cy})`}
            >
              <animate
                attributeName="opacity"
                values={i % 2 === 0 ? '0.5;0.9;0.5' : '0.7;0.4;0.7'}
                dur={`${2 + i * 0.2}s`}
                repeatCount="indefinite"
              />
            </ellipse>
          );
        })}
        {/* Inner petals */}
        {[22, 67, 112, 157, 202, 247, 292, 337].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 80 + Math.cos(rad) * 14;
          const cy = 90 + Math.sin(rad) * 9;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="7"
              ry="4"
              fill={i % 2 === 0 ? '#fda4af' : '#f43f5e'}
              opacity="0.8"
              transform={`rotate(${angle},${cx},${cy})`}
            >
              <animate
                attributeName="opacity"
                values={i % 2 === 0 ? '0.6;1;0.6' : '0.8;0.5;0.8'}
                dur={`${1.8 + i * 0.2}s`}
                repeatCount="indefinite"
              />
            </ellipse>
          );
        })}
        {/* Lotus center */}
        <circle cx="80" cy="90" r="8" fill="#fde68a" filter="url(#blessGlowFilter)">
          <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="90" r="4" fill="#fef3c7" />
        <circle cx="80" cy="90" r="2" fill="#f59e0b" />

        {/* === NAMASTE HANDS === */}
        {/* Left hand */}
        <g>
          <path
            d="M 72 85 C 68 80 64 72 63 65 C 62 60 63 57 65 57 C 67 57 68 60 69 65 L 70 70"
            stroke="url(#handGrad)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Left fingers */}
          <path d="M 69 65 C 67 58 67 52 69 50 C 71 50 71 56 71 63" stroke="url(#handGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 71 63 C 70 56 70 49 72 47 C 74 47 74 53 74 60" stroke="url(#handGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 74 60 C 73 53 74 47 76 46 C 78 46 78 52 77 59" stroke="url(#handGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* Right hand (mirror) */}
        <g>
          <path
            d="M 88 85 C 92 80 96 72 97 65 C 98 60 97 57 95 57 C 93 57 92 60 91 65 L 90 70"
            stroke="url(#handGrad)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M 91 65 C 93 58 93 52 91 50 C 89 50 89 56 89 63" stroke="url(#handGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 89 63 C 90 56 90 49 88 47 C 86 47 86 53 86 60" stroke="url(#handGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 86 60 C 87 53 86 47 84 46 C 82 46 82 52 83 59" stroke="url(#handGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* Hands gentle sway animation wrapper */}
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 80 70; 2 80 70; 0 80 70; -2 80 70; 0 80 70"
          dur="4s"
          repeatCount="indefinite"
        />

        {/* === OM SYMBOL above hands === */}
        <text
          x="80"
          y="42"
          textAnchor="middle"
          fontSize="22"
          fill="#fbbf24"
          fontFamily="serif"
          fontWeight="bold"
          filter="url(#blessGlowFilter)"
        >
          ॐ
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.08;1"
            dur="2.5s"
            repeatCount="indefinite"
            additive="sum"
          />
        </text>

        {/* === FLOATING SPARKLES === */}
        {[
          { x: 20, y: 30, delay: '0s', size: 10 },
          { x: 135, y: 28, delay: '0.8s', size: 10 },
          { x: 10, y: 60, delay: '1.3s', size: 8 },
          { x: 145, y: 58, delay: '0.4s', size: 8 },
          { x: 40, y: 15, delay: '1.8s', size: 7 },
          { x: 115, y: 18, delay: '2.2s', size: 7 },
        ].map((s, i) => (
          <text key={i} x={s.x} y={s.y} fontSize={s.size} fill="#fde68a" opacity="0" textAnchor="middle">
            ✦
            <animate attributeName="opacity" values="0;0.9;0" dur="2.5s" begin={s.delay} repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="2.5s" begin={s.delay} repeatCount="indefinite" />
          </text>
        ))}

        {/* === RADIATING LINES from OM === */}
        {[30, 60, 90, 120, 150, 210, 240, 270, 300, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={80 + Math.cos(rad) * 15}
              y1={30 + Math.sin(rad) * 15}
              x2={80 + Math.cos(rad) * 25}
              y2={30 + Math.sin(rad) * 25}
              stroke="#fbbf24"
              strokeWidth="1"
              opacity="0"
            >
              <animate attributeName="opacity" values="0;0.7;0" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            </line>
          );
        })}
      </svg>

      {/* Label */}
      <p className="text-[9px] font-cinzel tracking-[0.3em] text-amber-400/70 uppercase">
        Vanakkam 🙏
      </p>
    </div>
  );
}
