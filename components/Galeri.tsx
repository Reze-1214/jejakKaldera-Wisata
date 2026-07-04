"use client";
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const images = [
  { cls: 'g-item g1', src: 'https://images.unsplash.com/photo-1666887799869-4fbeda25d17f?fm=jpg&q=75&w=1200&auto=format&fit=crop', alt: 'Bromo diselimuti awan' },
  { cls: 'g-item g2', src: 'https://images.unsplash.com/photo-1749731630653-d9b3f00573ed?fm=jpg&q=75&w=800&auto=format&fit=crop', alt: 'Kaldera Bromo saat fajar' },
  { cls: 'g-item g3', src: 'https://images.unsplash.com/photo-1693576588093-7244ecec24c9?fm=jpg&q=75&w=500&auto=format&fit=crop', alt: 'Danau kawah Ijen' },
  { cls: 'g-item g4', src: 'https://images.unsplash.com/photo-1518043610038-064362b44076?fm=jpg&q=75&w=500&auto=format&fit=crop', alt: 'Pemandangan udara volcano' },
  { cls: 'g-item g5', src: 'https://images.unsplash.com/photo-1698663676293-0c7f3365f67f?fm=jpg&q=75&w=800&auto=format&fit=crop', alt: 'Bromo pagi berkabut' },
];

export default function Galeri() {
  return (
    <section id="galeri">
      <div className="wrap">
        <motion.div
          className="sec-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div>
            <span className="sec-eyebrow">Dari Lensa Pendaki</span>
            <h2>Galeri lanskap dataran tinggi.</h2>
          </div>
        </motion.div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <motion.div
              key={img.cls}
              className={img.cls}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
            >
              <img loading="lazy" src={img.src} alt={img.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
