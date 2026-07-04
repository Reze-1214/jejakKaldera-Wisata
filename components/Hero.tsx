"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 1.6, ease: EASE }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1666887799869-4fbeda25d17f?fm=jpg&q=80&w=2200&auto=format&fit=crop"
            alt="Gunung Bromo saat matahari terbit diselimuti awan"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>
      </div>

      <div className="hero-inner wrap">
        <motion.span className="eyebrow" {...fadeUp(0.2)}>
          Rute Tengger–Semeru · 2.329–3.676 MDPL
        </motion.span>

        <motion.h1 {...fadeUp(0.35)}>
          Jelajahi keajaiban<br /><em>dataran tinggi</em><br />Indonesia.
        </motion.h1>

        <motion.div
          className="hero-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <div>
            <motion.p className="hero-desc" {...fadeUp(0.6)}>
              Temukan lanskap vulkanik paling memukau di Jawa Timur — dari matahari terbit Gunung Bromo hingga fenomena api biru Kawah Ijen yang dikenal dunia. Dirancang untuk menginspirasi wisatawan menjelajahi keindahan Indonesia.
            </motion.p>
            <motion.div className="hero-actions" {...fadeUp(0.72)}>
              <Link href="#destinasi" className="btn btn-solid">
                Jelajahi Destinasi
              </Link>
              <Link href="#catatan" className="btn btn-line">
                Lihat Pengalaman Wisatawan
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="waypoints"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.75 }}
          >
            {[
              { num: '01 / TITIK TERTINGGI', val: '3.676m' },
              { num: '02 / TITIK DIPETAKAN', val: '120+' },
              { num: '03 / JALUR AKTIF',     val: '35' },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                className="wp-item"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.82 + i * 0.1 }}
              >
                <span className="num">{item.num}</span>
                <span className="val">{item.val}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
