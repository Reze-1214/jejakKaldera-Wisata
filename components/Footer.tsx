import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link href="/" className="brand">
              <svg className="brand-mark" viewBox="0 0 32 32" fill="none">
                <path d="M2 26L11 10L15 17L20 8L30 26H2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <circle cx="20" cy="8" r="1.4" fill="currentColor" />
              </svg>
              <span><span className="brand-name">Jejak Kaldera</span></span>
            </Link>
            <p>Memetakan jalur pendakian dan titik pandang terbaik di dataran tinggi Jawa Timur — satu koordinat, satu ketinggian pada satu waktu.</p>
          </div>
          <div className="foot-col">
            <h4>Navigasi</h4>
            <ul>
              <li><Link href="#destinasi">Destinasi</Link></li>
              <li><Link href="#aktivitas">Aktivitas</Link></li>
              <li><Link href="#galeri">Galeri</Link></li>
              <li><Link href="#catatan">Catatan Pendaki</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Titik Populer</h4>
            <ul>
              <li><Link href="#">Gunung Bromo</Link></li>
              <li><Link href="#">Kawah Ijen</Link></li>
              <li><Link href="#">King Kong Hill</Link></li>
              <li><Link href="#">Penanjakan Point</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Kontak</h4>
            <ul>
              <li><a href="#">+62 812 3456 7890</a></li>
              <li><a href="mailto:basecamp@jejakkaldera.id">basecamp@jejakkaldera.id</a></li>
              <li><a href="#">Cemoro Lawang, Jawa Timur</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Jejak Kaldera. Seluruh hak cipta dilindungi.</span>
          <div className="foot-social">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}