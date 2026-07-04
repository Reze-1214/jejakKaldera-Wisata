"use client";
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const rows = [
  {
    num: 'A',
    icon: <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>,
    title: 'Berburu Matahari Terbit',
    desc: 'Jeep berangkat pukul 3 pagi menuju titik pandang terbaik.',
  },
  {
    num: 'B',
    icon: <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M3 19l5-9 3 4 4-7 6 12H3z"/><circle cx="18" cy="6" r="1.4"/></svg>,
    title: 'Ekspedisi Jeep 4x4',
    desc: 'Menyusuri lautan pasir dengan pemandu lokal Tengger.',
  },
  {
    num: 'C',
    icon: <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M4 20l5-11 3 6 2-4 6 9H4z"/><path d="M9 9l2-4"/></svg>,
    title: 'Trekking Kawah',
    desc: 'Jalur ringan menuju bibir kawah, sekitar 45–90 menit.',
  },
  {
    num: 'D',
    icon: <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M4 20c2-4 3-9 7-9s3 5 7 5"/><circle cx="17" cy="7" r="2"/></svg>,
    title: 'Menunggang Kuda',
    desc: 'Alternatif menyeberangi pasir bersama warga setempat.',
  },
  {
    num: 'E',
    icon: <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M4 20h16M8 20l4-14 4 14M6 14h12"/></svg>,
    title: 'Berkemah di Ketinggian',
    desc: 'Bermalam di bawah langit bintang, jauh dari cahaya kota.',
  },
];

export default function Aktivitas() {
  return (
    <section id="aktivitas" className="activities">
      <div className="wrap">
        <motion.div
          className="act-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div>
            <span className="sec-eyebrow" style={{ color: '#f0c9a0' }}>Di Sepanjang Jalur</span>
            <h2>Lima cara mengalami dataran tinggi.</h2>
          </div>
          <p>Setiap titik pemberhentian punya ritme sendiri — sebagian butuh bangun jam 2 pagi, sebagian lain baru terasa penuh saat malam tiba.</p>
        </motion.div>

        <div className="act-list">
          {rows.map((row, i) => (
            <motion.div
              key={row.num}
              className="act-row"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
            >
              <span className="num">{row.num}</span>
              <h3>{row.icon}{row.title}</h3>
              <span className="desc">{row.desc}</span>
              <span className="arrow">↗</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
