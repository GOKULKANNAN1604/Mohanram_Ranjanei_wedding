// Animated SVG Lotus Logo — Header decoration
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
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#881337" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lotusGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="50%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#9f1239" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Glow */}
        <circle cx="100" cy="55" r="50" fill="url(#glowGrad)" filter="url(#strongGlow)">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Floating Sparks / Stars */}
        <g fill="#fbbf24" filter="url(#glow)">
          {[...Array(10)].map((_, i) => {
            const angle = (i * Math.PI) / 5;
            const r = i % 2 === 0 ? 35 : 55;
            const x = 100 + Math.cos(angle) * r;
            const y = 55 + Math.sin(angle) * (r * 0.7);
            const delay = i * 0.3;
            return (
              <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.5 : 1}>
                <animate attributeName="opacity" values="0;1;0" dur="2s" begin={`${delay}s`} repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="3s" begin={`${delay}s`} repeatCount="indefinite" />
              </circle>
            );
          })}
        </g>

        {/* Lotus Motif */}
        <g transform="translate(100, 75)" filter="url(#glow)">
          {/* Back Outer Petals */}
          <path d="M 0 0 C -35 -5 -45 -25 -30 -40 C -15 -30 -10 -10 0 0 Z" fill="url(#lotusGrad)" opacity="0.4">
            <animateTransform attributeName="transform" type="rotate" values="0; -3; 0" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M 0 0 C 35 -5 45 -25 30 -40 C 15 -30 10 -10 0 0 Z" fill="url(#lotusGrad)" opacity="0.4">
            <animateTransform attributeName="transform" type="rotate" values="0; 3; 0" dur="3s" repeatCount="indefinite" />
          </path>
          
          {/* Mid Petals */}
          <path d="M 0 0 C -25 -15 -30 -40 -15 -55 C -5 -40 -5 -15 0 0 Z" fill="url(#lotusGrad)" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" values="0; -2; 0" dur="3.5s" repeatCount="indefinite" />
          </path>
          <path d="M 0 0 C 25 -15 30 -40 15 -55 C 5 -40 5 -15 0 0 Z" fill="url(#lotusGrad)" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" values="0; 2; 0" dur="3.5s" repeatCount="indefinite" />
          </path>
          
          {/* Front Center Petal */}
          <path d="M 0 2 C -12 -20 -12 -50 0 -65 C 12 -50 12 -20 0 2 Z" fill="url(#lotusGrad)" />
          
          {/* Golden details on front petal */}
          <path d="M 0 0 L 0 -55" stroke="#fde68a" strokeWidth="1" strokeDasharray="4 3" opacity="0.8" />
          <circle cx="0" cy="-55" r="1.5" fill="#fde68a" />
          
          {/* Golden Base Leaves */}
          <path d="M 0 5 C -25 5 -40 -5 -50 -12 C -30 -3 -15 10 0 5 Z" fill="url(#goldGrad)" opacity="0.9" />
          <path d="M 0 5 C 25 5 40 -5 50 -12 C 30 -3 15 10 0 5 Z" fill="url(#goldGrad)" opacity="0.9" />
          
          {/* Center Base Jewel */}
          <circle cx="0" cy="4" r="3.5" fill="#fef08a" />
          <circle cx="0" cy="4" r="1.5" fill="#b45309" />
        </g>

        {/* Title Text */}
        <text 
          x="100" 
          y="108" 
          textAnchor="middle" 
          fontSize="9" 
          fontFamily="serif" 
          letterSpacing="4" 
          fill="#fde68a" 
          fontWeight="700"
          filter="url(#glow)"
        >
          SACRED WEDDING
        </text>
        
        {/* Elegant Underline */}
        <path d="M 50 118 L 150 118" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.6" />
        <circle cx="100" cy="118" r="2.5" fill="#fbbf24" filter="url(#glow)" />
        <circle cx="50" cy="118" r="1.5" fill="#fbbf24" opacity="0.6" />
        <circle cx="150" cy="118" r="1.5" fill="#fbbf24" opacity="0.6" />
      </svg>
    </div>
  );
}
