// Animated SVG Mandala Logo — Premium Header decoration
export function AnimatedMandapLogo() {
  return (
    <div className="flex justify-center my-4">
      <svg
        viewBox="0 0 200 200"
        width="160"
        height="160"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <filter id="mandalaGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Back Glow */}
        <circle cx="100" cy="100" r="70" fill="#f59e0b" opacity="0.15" filter="url(#mandalaGlow)">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Slowly Spinning Mandala Group */}
        <g transform="translate(100, 100)" filter="url(#mandalaGlow)">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="0 100 100" 
            to="360 100 100" 
            dur="40s" 
            repeatCount="indefinite" 
            additive="replace"
            // Wait, SVG animateTransform rotation is relative to its own origin if we just do from="0" to="360" when translated.
            // Actually, `from="0"` to="360"` rotates around (0,0) of the current coordinate system, which is (100,100) because of the translate!
          />
          {/* I will use a wrapper <g> for translation, and inner <g> for rotation to be safe. */}
        </g>

        <g transform="translate(100, 100)" filter="url(#mandalaGlow)">
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="45s" repeatCount="indefinite" />
            
            {/* Outer Decorative Scallops */}
            {[...Array(16)].map((_, i) => (
              <path 
                key={`out_${i}`} 
                transform={`rotate(${i * 22.5})`} 
                d="M 0 -85 C 20 -85 25 -65 0 -55 C -25 -65 -20 -85 0 -85" 
                fill="url(#goldGrad)" 
                fillOpacity="0.15" 
                stroke="url(#goldGrad)" 
                strokeWidth="1.5" 
              />
            ))}

            {/* Mid Diamond Petals */}
            {[...Array(8)].map((_, i) => (
              <path 
                key={`mid_${i}`} 
                transform={`rotate(${i * 45})`} 
                d="M 0 -65 L 18 -35 L 0 -20 L -18 -35 Z" 
                fill="url(#goldGrad)" 
                fillOpacity="0.4" 
                stroke="url(#goldGrad)" 
                strokeWidth="1.5" 
              />
            ))}
            
            {/* Inner Star/Lotus Petals */}
            {[...Array(8)].map((_, i) => (
              <path 
                key={`in_${i}`} 
                transform={`rotate(${i * 45 + 22.5})`} 
                d="M 0 -40 Q 12 -15 0 -5 Q -12 -15 0 -40" 
                fill="url(#goldGrad)" 
                opacity="0.9"
              />
            ))}
            
            {/* Center Core */}
            <circle cx="0" cy="0" r="12" fill="#fde68a" />
            <circle cx="0" cy="0" r="6" fill="#92400e" />
            <circle cx="0" cy="0" r="2" fill="#fef08a" />
            
            {/* Dots */}
            {[...Array(8)].map((_, i) => (
              <circle key={`dot_${i}`} cx={Math.cos((i*45) * Math.PI / 180) * 48} cy={Math.sin((i*45) * Math.PI / 180) * 48} r="2.5" fill="#fef08a" />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
