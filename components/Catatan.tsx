"use client";
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const logs = [
  { trail: 'BROMO · SUNRISE TREK', date: 'Dicatat Maret 2026', quote: '"Titik pandang di jam 4 pagi itu dingin sekali, tapi begitu cahaya pertama menyentuh kaldera, semua rasa kantuk hilang seketika."', name: 'Andi Pratama', city: 'Jakarta' },
  { trail: 'IJEN · BLUE FIRE',     date: 'Dicatat Februari 2026', quote: '"Masker gas terasa berat, jalurnya menanjak — tapi begitu api biru itu terlihat, semuanya jadi masuk akal."', name: 'Rina Lestari', city: 'Surabaya' },
  { trail: 'TENGGER · JEEP TOUR',  date: 'Dicatat Januari 2026', quote: '"Catatan koordinat di setiap titik ternyata sangat membantu menyusun rute sendiri tanpa harus ikut rombongan besar."', name: 'Dika Mahendra', city: 'Malang' },
];

const share = (name: string, quote: string) => {
  const text = `${quote} — ${name} via Jejak Kaldera`;
  if (navigator.share) {
    navigator.share({ title: 'Jejak Kaldera', text, url: window.location.href });
  } else {
    navigator.clipboard.writeText(text);
    alert('Kutipan disalin!');
  }
};

export default function Catatan() {
  return (
    <section id="catatan">
      <div className="wrap">
        <motion.div
          className="sec-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div>
            <span className="sec-eyebrow">Buku Catatan</span>
            <h2>Yang ditulis pendaki setelah turun gunung.</h2>
          </div>
        </motion.div>

        <div className="log-grid">
          {logs.map((log, i) => (
            <motion.div
              key={log.name}
              className="log-card"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
            >
              <div className="log-top">
                <span className="log-meta">{log.trail}<span>{log.date}</span></span>
              </div>
              <p>{log.quote}</p>
              <div className="log-footer">
                <div className="log-user">
                  <div className="log-avatar" />
                  <div><b>{log.name}</b><span>{log.city}</span></div>
                </div>
                <button className="log-share" onClick={() => share(log.name, log.quote)} aria-label="Bagikan catatan">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                    <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
