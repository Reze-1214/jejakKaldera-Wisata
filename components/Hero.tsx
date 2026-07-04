import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <Image 
          src="https://images.unsplash.com/photo-1666887799869-4fbeda25d17f?fm=jpg&q=80&w=2200&auto=format&fit=crop" 
          alt="Gunung Bromo saat matahari terbit diselimuti awan"
          fill
          style={{ objectFit: 'cover' }}
          priority // Prioritas loading tinggi untuk elemen pertama di layar
        />
      </div>
      
      <div className="hero-inner wrap">
        <span className="eyebrow">Rute Tengger–Semeru · 2.329–3.676 MDPL</span>
        <h1>Jelajahi keajaiban<br /><em>dataran tinggi</em><br />Indonesia.</h1>
        
        <div className="hero-grid">
          <div>
            <p className="hero-desc">
              Temukan lanskap vulkanik paling memukau di Jawa Timur — dari matahari terbit Gunung Bromo hingga fenomena api biru Kawah Ijen yang dikenal dunia. Dirancang untuk menginspirasi wisatawan menjelajahi keindahan Indonesia.
            </p>
            <div className="hero-actions">
              <Link href="#destinasi" className="btn btn-solid">
                Jelajahi Destinasi
              </Link>
              <Link href="#catatan" className="btn btn-line">
                Lihat Pengalaman Wisatawan
              </Link>
            </div>
          </div>
          
          <div className="waypoints">
            <div className="wp-item">
              <span className="num">01 / TITIK TERTINGGI</span>
              <span className="val">3.676m</span>
            </div>
            <div className="wp-item">
              <span className="num">02 / TITIK DIPETAKAN</span>
              <span className="val">120+</span>
            </div>
            <div className="wp-item">
              <span className="num">03 / JALUR AKTIF</span>
              <span className="val">35</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}