'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [phase, setPhase] = useState<'loading' | 'leaving' | 'hidden'>('loading');

  useEffect(() => {
    const startedAt = performance.now();
    let leaveTimer: number | undefined;
    let hideTimer: number | undefined;

    const finishLoading = () => {
      const remainingTime = Math.max(0, 1050 - (performance.now() - startedAt));
      leaveTimer = window.setTimeout(() => {
        setPhase('leaving');
        hideTimer = window.setTimeout(() => setPhase('hidden'), 420);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener('load', finishLoading);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div className={`page-loader ${phase === 'leaving' ? 'page-loader--leaving' : ''}`} role="status" aria-live="polite" aria-label="Loading STARMED website">
      <div className="page-loader__content">
        <div className="page-loader__halo" aria-hidden="true" />
        <div className="page-loader__logo-wrap">
          <img src="/images/logos/starmed-official.png" alt="STARMED" className="page-loader__logo" />
        </div>
        <div className="page-loader__bar" aria-hidden="true"><span /></div>
        <p>Loading STARMED</p>
      </div>
    </div>
  );
}
