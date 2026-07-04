"use client";
import { useEffect, useRef } from 'react';

const PINS = [
  { name: 'Gunung Bromo',    lat: -7.9425, lng: 112.953,  elev: '2.329m', color: '#b95f2b' },
  { name: 'Kawah Ijen',      lat: -8.0581, lng: 114.2422, elev: '2.799m', color: '#3f9c93' },
  { name: 'King Kong Hill',  lat: -7.9391, lng: 112.9505, elev: '2.770m', color: '#6d7248' },
  { name: 'Penanjakan Point',lat: -7.9317, lng: 112.950,  elev: '2.600m', color: '#8a4620' },
];

export default function Peta() {
  const mapRef = useRef<HTMLDivElement>(null);
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current || !mapRef.current) return;
    initRef.current = true;

    import('leaflet').then(L => {
      // Fix default icon path issue with webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(mapRef.current!, {
        center: [-7.99, 113.2],
        zoom: 9,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      PINS.forEach(pin => {
        const icon = L.divIcon({
          className: '',
          html: `<div class="map-pin" style="background:${pin.color}"><span>${pin.elev}</span></div>`,
          iconSize: [12, 12],
          iconAnchor: [6, 6],
        });
        L.marker([pin.lat, pin.lng], { icon })
          .addTo(map)
          .bindPopup(`<b>${pin.name}</b><br><small>${pin.elev} MDPL</small>`);
      });
    });
  }, []);

  return (
    <section id="peta">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-eyebrow">Navigasi</span>
            <h2>Peta titik pendakian.</h2>
          </div>
        </div>
        <div ref={mapRef} className="map-container" />
      </div>
    </section>
  );
}
