export default function Aktivitas() {
  return (
    <section id="aktivitas" className="activities">
      <div className="wrap">
        <div className="act-head">
          <div>
            <span className="sec-eyebrow" style={{ color: '#f0c9a0' }}>Di Sepanjang Jalur</span>
            <h2>Lima cara mengalami dataran tinggi.</h2>
          </div>
          <p>Setiap titik pemberhentian punya ritme sendiri — sebagian butuh bangun jam 2 pagi, sebagian lain baru terasa penuh saat malam tiba.</p>
        </div>
        <div className="act-list">
          <div className="act-row">
            <span className="num">A</span>
            <h3>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
              </svg>
              Berburu Matahari Terbit
            </h3>
            <span className="desc">Jeep berangkat pukul 3 pagi menuju titik pandang terbaik.</span>
            <span className="arrow">↗</span>
          </div>
          <div className="act-row">
            <span className="num">B</span>
            <h3>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M3 19l5-9 3 4 4-7 6 12H3z"/><circle cx="18" cy="6" r="1.4"/>
              </svg>
              Ekspedisi Jeep 4x4
            </h3>
            <span className="desc">Menyusuri lautan pasir dengan pemandu lokal Tengger.</span>
            <span className="arrow">↗</span>
          </div>
          <div className="act-row">
            <span className="num">C</span>
            <h3>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M4 20l5-11 3 6 2-4 6 9H4z"/><path d="M9 9l2-4"/>
              </svg>
              Trekking Kawah
            </h3>
            <span className="desc">Jalur ringan menuju bibir kawah, sekitar 45–90 menit.</span>
            <span className="arrow">↗</span>
          </div>
          <div className="act-row">
            <span className="num">D</span>
            <h3>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M4 20c2-4 3-9 7-9s3 5 7 5"/><circle cx="17" cy="7" r="2"/>
              </svg>
              Menunggang Kuda
            </h3>
            <span className="desc">Alternatif menyeberangi pasir bersama warga setempat.</span>
            <span className="arrow">↗</span>
          </div>
          <div className="act-row">
            <span className="num">E</span>
            <h3>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M4 20h16M8 20l4-14 4 14M6 14h12"/>
              </svg>
              Berkemah di Ketinggian
            </h3>
            <span className="desc">Bermalam di bawah langit bintang, jauh dari cahaya kota.</span>
            <span className="arrow">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}