"use client";
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const ALL = [
  { name: 'Gunung Bromo',    loc: 'Probolinggo, Jawa Timur', elev: 2329, coord: '7.9425°S, 112.9530°E', tag: 'Kaldera', img: 'https://images.unsplash.com/photo-1698663676293-0c7f3365f67f?fm=jpg&q=80&w=900&auto=format&fit=crop', alt: 'Gunung Bromo pagi berkabut', desc: 'Kaldera aktif dengan lautan pasir seluas 10 km² dan matahari terbit paling dicari di Jawa.' },
  { name: 'Kawah Ijen',      loc: 'Banyuwangi, Jawa Timur',  elev: 2799, coord: '8.0581°S, 114.2422°E', tag: 'Kawah',  img: 'https://images.unsplash.com/photo-1693576588093-7244ecec24c9?fm=jpg&q=80&w=900&auto=format&fit=crop', alt: 'Kawah Ijen dengan danau kawah', desc: 'Rumah bagi danau asam terbesar di dunia dan fenomena api biru yang hanya tampak sebelum fajar.' },
  { name: 'King Kong Hill',  loc: 'Pasuruan, Jawa Timur',    elev: 2770, coord: '7.9391°S, 112.9505°E', tag: 'Panorama', img: 'https://images.unsplash.com/photo-1749731630653-d9b3f00573ed?fm=jpg&q=80&w=900&auto=format&fit=crop', alt: 'Pemandangan dari King Kong Hill Bromo', desc: 'Titik pandang lebih sepi dari Penanjakan, dengan garis pandang penuh ke tiga puncak sekaligus.' },
  { name: 'Penanjakan Point',loc: 'Pasuruan, Jawa Timur',    elev: 2600, coord: '7.9317°S, 112.9500°E', tag: 'Panorama', img: 'https://images.unsplash.com/photo-1518043610038-064362b44076?fm=jpg&q=80&w=900&auto=format&fit=crop', alt: 'Pemandangan udara kaldera Bromo', desc: 'Panorama klasik kaldera Tengger dari udara — kabut mengisi lembah seperti sungai putih.' },
];

const TAGS = ['Semua', 'Kaldera', 'Kawah', 'Panorama'];

const share = (name: string) => {
  const text = `Lihat destinasi ${name} di Jejak Kaldera!`;
  if (navigator.share) {
    navigator.share({ title: name, text, url: window.location.href });
  } else {
    navigator.clipboard.writeText(`${text} ${window.location.href}`);
    alert('Link disalin!');
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

export default function Destinasi() {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('Semua');

  const filtered = useMemo(() =>
    ALL.filter(d =>
      (tag === 'Semua' || d.tag === tag) &&
      d.name.toLowerCase().includes(query.toLowerCase())
    ), [query, tag]);

  return (
    <section id="destinasi">
      <div className="wrap">
        {/* Header */}
        <motion.div
          className="sec-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div>
            <span className="sec-eyebrow">Titik Pemberhentian</span>
            <h2>Sembilan lanskap yang mengubah arah perjalanan.</h2>
          </div>
          <a href="#" className="sec-link">Lihat Semua Destinasi →</a>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          className="dest-filters"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        >
          <input
            className="dest-search"
            type="search"
            placeholder="Cari destinasi…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Cari destinasi"
          />
          <div className="dest-tags">
            {TAGS.map(t => (
              <button key={t} className={`tag-btn${tag === t ? ' active' : ''}`} onClick={() => setTag(t)}>{t}</button>
            ))}
          </div>
        </motion.div>

        {filtered.length === 0 ? (
          <p className="dest-empty">Tidak ada destinasi yang cocok.</p>
        ) : (
          <div className="dest-grid" style={{ gridTemplateColumns: `repeat(${Math.min(filtered.length, 4)}, 1fr)` }}>
            {filtered.map((d, i) => (
              <motion.div
                key={d.name}
                className="dest-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className="dest-photo">
                  <img loading="lazy" src={d.img} alt={d.alt} />
                  <span className="dest-coord">{d.coord}</span>
                  <span className="dest-elev">MDPL<b>{d.elev.toLocaleString('id-ID')}</b></span>
                </div>
                <div className="dest-body">
                  <h3>{d.name}</h3>
                  <div className="dest-loc">{d.loc}</div>
                  <p>{d.desc}</p>
                  <button className="dest-share" onClick={() => share(d.name)} aria-label={`Bagikan ${d.name}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                      <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49"/>
                    </svg>
                    Bagikan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
