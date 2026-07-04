"use client";
import { useState } from 'react';

const CITIES = ['Jakarta', 'Surabaya', 'Malang', 'Yogyakarta', 'Bandung', 'Semarang'];
const DESTS = ['Bromo', 'Kawah Ijen', 'Bromo + Ijen (paket)'];
const TRANSPORT: Record<string, Record<string, number>> = {
  Jakarta:    { Bromo: 650000, 'Kawah Ijen': 750000, 'Bromo + Ijen (paket)': 900000 },
  Surabaya:   { Bromo: 150000, 'Kawah Ijen': 200000, 'Bromo + Ijen (paket)': 280000 },
  Malang:     { Bromo: 80000,  'Kawah Ijen': 180000, 'Bromo + Ijen (paket)': 220000 },
  Yogyakarta: { Bromo: 400000, 'Kawah Ijen': 500000, 'Bromo + Ijen (paket)': 650000 },
  Bandung:    { Bromo: 600000, 'Kawah Ijen': 700000, 'Bromo + Ijen (paket)': 850000 },
  Semarang:   { Bromo: 350000, 'Kawah Ijen': 450000, 'Bromo + Ijen (paket)': 580000 },
};
const ENTRY: Record<string, number> = { Bromo: 34000, 'Kawah Ijen': 50000, 'Bromo + Ijen (paket)': 84000 };
const JEEP = 600000;
const LODGE_PER_NIGHT = 250000;
const MEAL_PER_DAY = 80000;

export default function Kalkulator() {
  const [city, setCity] = useState('Malang');
  const [dest, setDest] = useState('Bromo');
  const [nights, setNights] = useState(1);
  const [pax, setPax] = useState(2);

  const transport = (TRANSPORT[city]?.[dest] ?? 0) * pax;
  const entry = ENTRY[dest] * pax;
  const jeep = dest.includes('+') ? JEEP * 2 : JEEP;
  const lodge = LODGE_PER_NIGHT * nights;
  const meal = MEAL_PER_DAY * (nights + 1) * pax;
  const total = transport + entry + jeep + lodge + meal;

  const fmt = (n: number) =>
    'Rp ' + n.toLocaleString('id-ID');

  const rows = [
    ['Transportasi', fmt(transport)],
    ['Tiket Masuk', fmt(entry)],
    ['Sewa Jeep', fmt(jeep)],
    ['Penginapan', fmt(lodge)],
    ['Makan', fmt(meal)],
  ];

  return (
    <section id="kalkulator" className="kalkulator">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-eyebrow">Estimasi Biaya</span>
            <h2>Kalkulator perjalanan.</h2>
          </div>
        </div>
        <div className="calc-layout">
          <div className="calc-inputs">
            <label className="calc-label">
              Kota Asal
              <select value={city} onChange={e => setCity(e.target.value)}>
                {CITIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label className="calc-label">
              Destinasi
              <select value={dest} onChange={e => setDest(e.target.value)}>
                {DESTS.map(d => <option key={d}>{d}</option>)}
              </select>
            </label>
            <label className="calc-label">
              Jumlah Malam
              <div className="counter">
                <button onClick={() => setNights(n => Math.max(1, n - 1))}>−</button>
                <span>{nights}</span>
                <button onClick={() => setNights(n => Math.min(7, n + 1))}>+</button>
              </div>
            </label>
            <label className="calc-label">
              Jumlah Orang
              <div className="counter">
                <button onClick={() => setPax(n => Math.max(1, n - 1))}>−</button>
                <span>{pax}</span>
                <button onClick={() => setPax(n => Math.min(10, n + 1))}>+</button>
              </div>
            </label>
          </div>

          <div className="calc-result">
            <div className="calc-rows">
              {rows.map(([label, val]) => (
                <div key={label} className="calc-row">
                  <span>{label}</span><span>{val}</span>
                </div>
              ))}
            </div>
            <div className="calc-total">
              <span>Estimasi Total</span>
              <span>{fmt(total)}</span>
            </div>
            <p className="calc-note">*Estimasi kasar. Harga bisa berbeda tergantung musim dan ketersediaan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
