"use client";
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark' : true;
    setDark(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const val = next ? 'dark' : 'light';
    localStorage.setItem('theme', val);
    document.documentElement.setAttribute('data-theme', val);
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle tema">
      {dark ? '☀' : '☾'}
    </button>
  );
}
