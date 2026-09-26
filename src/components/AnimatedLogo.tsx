import { useEffect, useRef } from 'react';

/**
 * Mascotte animée du hero, construite comme celle d'Aken :
 * un dessin SVG (pas une image) dont chaque partie est animée séparément —
 * - la pupille suit le curseur (variables CSS --pupil-x/--pupil-y)
 * - le reflet lumineux accompagne la pupille (x1.35)
 * - l'œil tout seul cligne (paupière naturelle, le reste est immobile)
 * - inclinaison 3D perspective(rotateX/rotateY) suivant la souris + scale au survol
 * - flottement doux, halo pulsant et anneaux orbitaux autour
 */
export default function AnimatedLogo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / window.innerWidth;
        const dy = (e.clientY - cy) / window.innerHeight;
        el.style.setProperty('--pupil-x', `${(dx * 9).toFixed(2)}px`);
        el.style.setProperty('--pupil-y', `${(dy * 9).toFixed(2)}px`);
        el.style.setProperty('--tilt-x', `${(-dy * 7).toFixed(2)}deg`);
        el.style.setProperty('--tilt-y', `${(dx * 7).toFixed(2)}deg`);
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="animated-logo relative inline-flex items-center justify-center">
      {/* Halo pulsant */}
      <span aria-hidden="true" className="logo-glow pointer-events-none absolute -inset-8 rounded-[3rem]" />

      {/* Anneaux orbitaux avec points lumineux */}
      <span aria-hidden="true" className="logo-orbit" />
      <span aria-hidden="true" className="logo-orbit logo-orbit-2" />

      {/* Mascotte : œil dessiné en SVG */}
      <div className="mascot-float">
        <svg
          className="logo-mascot-svg"
          viewBox="0 0 240 180"
          role="img"
          aria-label="EyesTechnology — œil animé"
        >
          <defs>
            <linearGradient id="eyesIrisGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1551e0" />
              <stop offset="55%" stopColor="#3385fc" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* Décorations pixels (signature du logo) */}
          <g aria-hidden="true">
            <rect x="26" y="58" width="8" height="8" rx="2" fill="#3385fc" opacity="0.9" />
            <rect x="38" y="58" width="6" height="6" rx="1.5" fill="#06b6d4" opacity="0.8" />
            <rect x="26" y="70" width="6" height="6" rx="1.5" fill="#06b6d4" opacity="0.65" />
            <rect x="206" y="112" width="7" height="7" rx="1.75" fill="#3385fc" opacity="0.7" />
            <rect x="196" y="122" width="5" height="5" rx="1.25" fill="#06b6d4" opacity="0.55" />
          </g>

          {/* Œil : paupière (contour), sclère, iris, pupille, reflet */}
          <g className="mascot-eye">
            <path
              d="M 48 96 Q 120 42 192 96 Q 120 150 48 96 Z"
              fill="#ffffff"
              stroke="#1551e0"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <circle className="mascot-iris" cx="120" cy="96" r="31" fill="url(#eyesIrisGrad)" />
            <circle className="logo-pupil" cx="120" cy="96" r="13.5" fill="#0a0e17" />
            <circle className="logo-spark" cx="113.5" cy="89.5" r="4.5" fill="#ffffff" opacity="0.95" />
          </g>
        </svg>
      </div>
    </div>
  );
}
