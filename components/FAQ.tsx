"use client";
import { useState } from 'react';

const items = [
  { q: 'Berapa biaya masuk kawasan Bromo?', a: 'Tiket masuk TNBTS untuk wisatawan domestik sekitar Rp 29.000 (hari biasa) dan Rp 34.000 (akhir pekan). Wisatawan mancanegara Rp 220.000–320.000.' },
  { q: 'Kapan waktu terbaik mengunjungi Bromo?', a: 'Musim kemarau April–Oktober adalah waktu ideal. Langit paling jernih Mei–Agustus. Hindari musim hujan (Nov–Mar) karena jarak pandang terbatas.' },
  { q: 'Apakah perlu izin khusus untuk mendaki?', a: 'Untuk Bromo tidak perlu izin mendaki khusus, cukup tiket masuk TNBTS. Untuk Semeru wajib mendaftar secara online melalui portal resmi TNBTS dan kuota terbatas.' },
  { q: 'Berapa lama waktu trekking ke kawah Bromo?', a: 'Dari parkiran Cemoro Lawang sekitar 45–60 menit jalan kaki, atau 15 menit dengan jeep + 20 menit jalan kaki dari lautan pasir. Kondisi jalur cukup baik.' },
  { q: 'Apakah ada penginapan dekat lokasi?', a: 'Ada banyak guesthouse dan hotel di Cemoro Lawang (Bromo) dan Banyuwangi (Ijen). Rekomendasi booking jauh hari terutama saat high season.' },
  { q: 'Perlengkapan apa yang wajib dibawa?', a: 'Jaket tebal, masker/buff, sepatu anti-slip, senter headlamp, air minum 1–2L, dan sunscreen. Untuk Ijen tambahkan masker gas (bisa sewa di lokasi).' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-eyebrow">Yang Sering Ditanya</span>
            <h2>Pertanyaan umum pendaki.</h2>
          </div>
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="faq-icon">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="faq-a"><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
