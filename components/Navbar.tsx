"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu saat halaman di-scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="wrap">
        <nav>
          <Link href="/" className="brand" onClick={closeMenu}>
            <svg className="brand-mark" viewBox="0 0 32 32" fill="none">
              <path d="M2 26L11 10L15 17L20 8L30 26H2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <circle cx="20" cy="8" r="1.4" fill="currentColor" />
            </svg>
            <span>
              <span className="brand-name">Jejak Kaldera</span>
              <span className="brand-sub">Jawa Timur, Indonesia</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="nav-links">
            <li><Link href="#destinasi">Destinasi</Link></li>
            <li><Link href="#aktivitas">Aktivitas</Link></li>
            <li><Link href="#galeri">Galeri</Link></li>
            <li><Link href="#catatan">Catatan Pendaki</Link></li>
          </ul>

          <div className="nav-right">
            <ThemeToggle />
            <Link href="#rencana" className="nav-cta nav-cta-desktop">Rencanakan Perjalanan</Link>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className={`nav-burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div className={`nav-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          <li><Link href="#destinasi" onClick={closeMenu}>Destinasi</Link></li>
          <li><Link href="#aktivitas" onClick={closeMenu}>Aktivitas</Link></li>
          <li><Link href="#galeri" onClick={closeMenu}>Galeri</Link></li>
          <li><Link href="#catatan" onClick={closeMenu}>Catatan Pendaki</Link></li>
        </ul>
        <Link href="#rencana" className="btn btn-solid nav-cta-mobile" onClick={closeMenu}>
          Rencanakan Perjalanan
        </Link>
      </div>
    </header>
  );
}
