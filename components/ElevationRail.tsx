"use client";
import { useState, useEffect } from 'react';

export default function ElevationRail() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.min(window.scrollY / h, 1) : 0;
      setScrollPct(pct * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="rail">
      <div className="rail-line">
        <div className="rail-dot" style={{ top: `${scrollPct}%` }}></div>
      </div>
    </div>
  );
}