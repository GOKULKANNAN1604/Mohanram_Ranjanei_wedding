// Animated SVG Floral Divider — between sections
export function FloralDivider({ color = 'amber' }: { color?: 'amber' | 'rose' | 'emerald' }) {
  const c = {
    amber: { main: '#f59e0b', light: '#fde68a', dark: '#92400e' },
    rose: { main: '#f43f5e', light: '#fda4af', dark: '#9f1239' },
    emerald: { main: '#10b981', light: '#6ee7b7', dark: '#065f46' },
  }[color];

  return (
    <div className="flex justify-center items-center w-full my-1 px-4">
      <svg viewBox="0 0 320 36" width="100%" height="36" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={`glow-${color}`}>
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === LEFT LINE === */}
        <line x1="8" y1="18" x2="116" y2="18" stroke={c.main} strokeWidth="0.8" opacity="0.4" />
        <line x1="8" y1="18" x2="116" y2="18" stroke={c.light} strokeWidth="0.4" opacity="0.5" strokeDasharray="4,6" />

        {/* === LEFT PETAL CLUSTER === */}
        {/* Top petal */}
        <ellipse cx="120" cy="13" rx="7" ry="4" fill={c.main} opacity="0.0" transform="rotate(-20,120,13)">
          <animate attributeName="opacity" values="0;0.7;0.5;0.7;0" dur="4s" repeatCount="indefinite" begin="0.2s" />
        </ellipse>
        <ellipse cx="124" cy="15" rx="6" ry="3.5" fill={c.main} opacity="0" transform="rotate(15,124,15)">
          <animate attributeName="opacity" values="0;0.6;0.4;0.6;0" dur="4s" repeatCount="indefinite" begin="0.5s" />
        </ellipse>
        <ellipse cx="116" cy="22" rx="6" ry="3.5" fill={c.light} opacity="0" transform="rotate(-15,116,22)">
          <animate attributeName="opacity" values="0;0.6;0.4;0.6;0" dur="4s" repeatCount="indefinite" begin="0.8s" />
        </ellipse>
        <ellipse cx="122" cy="22" rx="6" ry="3.5" fill={c.main} opacity="0" transform="rotate(20,122,22)">
          <animate attributeName="opacity" values="0;0.6;0.4;0.6;0" dur="4s" repeatCount="indefinite" begin="1.1s" />
        </ellipse>
        {/* Center dot */}
        <circle cx="120" cy="18" r="3.5" fill={c.light} filter={`url(#glow-${color})`}>
          <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* === CENTER PIECE === */}
        {/* Main center flower */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={i}
            cx={160 + Math.cos((angle * Math.PI) / 180) * 9}
            cy={18 + Math.sin((angle * Math.PI) / 180) * 9}
            rx="5"
            ry="3"
            fill={i % 2 === 0 ? c.main : c.light}
            transform={`rotate(${angle},${160 + Math.cos((angle * Math.PI) / 180) * 9},${18 + Math.sin((angle * Math.PI) / 180) * 9})`}
            opacity="0.8"
          >
            <animate
              attributeName="opacity"
              values={i % 2 === 0 ? '0.5;0.9;0.5' : '0.8;0.5;0.8'}
              dur={`${2 + i * 0.3}s`}
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${angle} ${160 + Math.cos((angle * Math.PI) / 180) * 9} ${18 + Math.sin((angle * Math.PI) / 180) * 9}`}
              to={`${angle + 360} ${160 + Math.cos((angle * Math.PI) / 180) * 9} ${18 + Math.sin((angle * Math.PI) / 180) * 9}`}
              dur="8s"
              repeatCount="indefinite"
              additive="replace"
            />
          </ellipse>
        ))}
        {/* Center glow dot */}
        <circle cx="160" cy="18" r="5" fill={c.light} filter={`url(#glow-${color})`}>
          <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="18" r="2.5" fill="white" opacity="0.9" />

        {/* === RIGHT PETAL CLUSTER === (mirror of left) */}
        <ellipse cx="200" cy="13" rx="7" ry="4" fill={c.main} opacity="0" transform="rotate(20,200,13)">
          <animate attributeName="opacity" values="0;0.7;0.5;0.7;0" dur="4s" repeatCount="indefinite" begin="0.3s" />
        </ellipse>
        <ellipse cx="196" cy="15" rx="6" ry="3.5" fill={c.main} opacity="0" transform="rotate(-15,196,15)">
          <animate attributeName="opacity" values="0;0.6;0.4;0.6;0" dur="4s" repeatCount="indefinite" begin="0.6s" />
        </ellipse>
        <ellipse cx="204" cy="22" rx="6" ry="3.5" fill={c.light} opacity="0" transform="rotate(15,204,22)">
          <animate attributeName="opacity" values="0;0.6;0.4;0.6;0" dur="4s" repeatCount="indefinite" begin="0.9s" />
        </ellipse>
        <ellipse cx="198" cy="22" rx="6" ry="3.5" fill={c.main} opacity="0" transform="rotate(-20,198,22)">
          <animate attributeName="opacity" values="0;0.6;0.4;0.6;0" dur="4s" repeatCount="indefinite" begin="1.2s" />
        </ellipse>
        <circle cx="200" cy="18" r="3.5" fill={c.light} filter={`url(#glow-${color})`}>
          <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </circle>

        {/* === RIGHT LINE === */}
        <line x1="204" y1="18" x2="312" y2="18" stroke={c.main} strokeWidth="0.8" opacity="0.4" />
        <line x1="204" y1="18" x2="312" y2="18" stroke={c.light} strokeWidth="0.4" opacity="0.5" strokeDasharray="4,6" />

        {/* === TINY FLOATING STARS === */}
        <text x="140" y="10" fontSize="8" fill={c.light} opacity="0">✦
          <animate attributeName="opacity" values="0;0.8;0" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </text>
        <text x="174" y="10" fontSize="8" fill={c.light} opacity="0">✦
          <animate attributeName="opacity" values="0;0.8;0" dur="3s" begin="1.2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="3s" begin="1.2s" repeatCount="indefinite" />
        </text>
      </svg>
    </div>
  );
}
