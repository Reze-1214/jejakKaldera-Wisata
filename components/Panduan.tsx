"use client";
import { useState } from 'react';

const categories = [
  {
    label: 'Perlengkapan Wajib',
    items: ['Jaket windproof & fleece', 'Sepatu hiking anti-slip', 'Headlamp + baterai cadangan', 'Air minum 2L', 'Masker & buff leher', 'Sunscreen SPF 50+', 'P3K dasar'],
  },
  {
    label: 'Dokumen & Tiket',
    items: ['KTP/Paspor (wajib)', 'Bukti pemesanan tiket online', 'Asuransi perjalanan', 'Nomor darurat TNBTS: 0335-541019', 'Screenshot peta offline'],
  },
  {
    label: 'Tips Transportasi',
    items: ['Dari Malang: 3 jam ke Cemoro Lawang', 'Sewa jeep lokal Rp 500K–750K/unit', 'Booking jeep H-1 saat peak season', 'Parkir motor tersedia di Cemoro Lawang', 'Ojek kuda tersedia di lautan pasir'],
  },
];

export default function Panduan() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (key: string) =>
    setChecked(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const total = categories.flatMap(c => c.items).length;
  const done = checked.size;

  return (
    <section id="panduan" className="panduan">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-eyebrow">Panduan Persiapan</span>
            <h2>Checklist sebelum berangkat.</h2>
          </div>
          <span className="checklist-progress">{done}/{total} siap</span>
        </div>
        <div className="checklist-grid">
          {categories.map(cat => (
            <div key={cat.label} className="checklist-col">
              <h4 className="checklist-cat">{cat.label}</h4>
              <ul>
                {cat.items.map(item => {
                  const key = `${cat.label}:${item}`;
                  const isChecked = checked.has(key);
                  return (
                    <li key={key} className={`check-item${isChecked ? ' done' : ''}`} onClick={() => toggle(key)}>
                      <span className="check-box">{isChecked ? '✓' : ''}</span>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
