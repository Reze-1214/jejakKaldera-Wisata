"use client";
import { useEffect, useState } from 'react';

type WeatherData = { temp: number; desc: string; wind: number; humidity: number; icon: string };

const SPOTS = [
  { name: 'Gunung Bromo', lat: -7.9425, lon: 112.953 },
  { name: 'Kawah Ijen',   lat: -8.0581, lon: 114.2422 },
  { name: 'Semeru',       lat: -8.108,  lon: 112.922 },
];

async function fetchWeather(lat: number, lon: number): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m&timezone=Asia%2FJakarta`;
  const r = await fetch(url, { next: { revalidate: 1800 } });
  const d = await r.json();
  const c = d.current;
  const code: number = c.weathercode;
  const descs: Record<number, string> = {
    0: 'Cerah', 1: 'Sebagian Cerah', 2: 'Berawan', 3: 'Mendung',
    45: 'Berkabut', 48: 'Kabut Beku', 51: 'Gerimis', 61: 'Hujan Ringan',
    63: 'Hujan Sedang', 65: 'Hujan Lebat', 71: 'Salju Ringan', 80: 'Hujan Lokal',
    95: 'Badai', 99: 'Badai Besar',
  };
  const icons: Record<number, string> = {
    0: '☀', 1: '🌤', 2: '⛅', 3: '☁', 45: '🌫', 48: '🌫',
    51: '🌧', 61: '🌧', 63: '🌧', 65: '🌧', 71: '❄', 80: '🌦', 95: '⛈', 99: '⛈',
  };
  return {
    temp: Math.round(c.temperature_2m),
    desc: descs[code] ?? 'Tidak diketahui',
    wind: Math.round(c.windspeed_10m),
    humidity: c.relativehumidity_2m,
    icon: icons[code] ?? '🌡',
  };
}

export default function Cuaca() {
  const [data, setData] = useState<(WeatherData | null)[]>([null, null, null]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(SPOTS.map(s => fetchWeather(s.lat, s.lon)))
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="cuaca" className="cuaca">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-eyebrow">Kondisi Terkini</span>
            <h2>Cuaca di titik pendakian.</h2>
          </div>
          <span className="weather-note">Diperbarui setiap 30 menit · Open-Meteo</span>
        </div>
        <div className="weather-grid">
          {SPOTS.map((spot, i) => (
            <div key={spot.name} className="weather-card">
              <div className="weather-icon">{loading ? '…' : data[i]?.icon}</div>
              <h3>{spot.name}</h3>
              {loading ? (
                <p className="weather-loading">Memuat data…</p>
              ) : data[i] ? (
                <>
                  <div className="weather-temp">{data[i]!.temp}°C</div>
                  <div className="weather-desc">{data[i]!.desc}</div>
                  <div className="weather-meta">
                    <span>💨 {data[i]!.wind} km/h</span>
                    <span>💧 {data[i]!.humidity}%</span>
                  </div>
                </>
              ) : (
                <p className="weather-loading">Gagal memuat</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
