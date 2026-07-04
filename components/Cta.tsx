"use client";
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Cta() {
  return (
    <section id="rencana" className="cta">
      <div className="cta-media">
        <img loading="lazy" src="https://images.unsplash.com/photo-1518043610038-064362b44076?fm=jpg&q=80&w=2000&auto=format&fit=crop" alt="Kaldera saat senja" />
      </div>
      <div className="wrap">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <motion.span
            className="eyebrow"
            style={{ color: '#f0c9a0' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            Titik Keberangkatan
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
          >
            Indonesia menyimpan pemandangan yang layak masuk daftar perjalananmu.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
          >
            Gunung, kaldera, lautan pasir, dan panorama matahari terbit bukan sekadar tempat wisata — tetapi pengalaman yang sulit dilupakan.
          </motion.p>

          <motion.a
            href="#"
            className="btn btn-solid"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.44 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Mulai Jelajahi Indonesia
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
