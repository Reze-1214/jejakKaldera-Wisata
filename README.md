# Jejak Kaldera

Website panduan wisata pendakian dataran tinggi Jawa Timur — memetakan jalur, titik pandang, dan informasi perjalanan di kawasan Tengger–Semeru, dari Gunung Bromo hingga Kawah Ijen.

![Jejak Kaldera](https://images.unsplash.com/photo-1666887799869-4fbeda25d17f?fm=jpg&q=80&w=1200&auto=format&fit=crop)

---

## Tentang Website

Jejak Kaldera adalah landing page informatif yang dirancang untuk menginspirasi dan mempersiapkan wisatawan sebelum menjelajahi lanskap vulkanik Jawa Timur. Website ini bukan platform booking, melainkan panduan referensi visual dengan data koordinat, elevasi, aktivitas, dan estimasi biaya perjalanan.

**Cakupan destinasi:**
- Gunung Bromo (2.329 MDPL) — Probolinggo
- Kawah Ijen (2.799 MDPL) — Banyuwangi
- King Kong Hill (2.770 MDPL) — Pasuruan
- Penanjakan Point (2.600 MDPL) — Pasuruan

---

## Fitur

| Fitur | Deskripsi |
|---|---|
| **Hero Section** | Foto fullscreen Bromo dengan statistik jalur (120+ titik, 35 jalur aktif) |
| **Destinasi** | Grid kartu destinasi dengan koordinat GPS dan elevasi, dilengkapi filter tag & pencarian |
| **Aktivitas** | Lima cara menikmati dataran tinggi — sunrise, jeep, trekking, kuda, berkemah |
| **Galeri** | Grid foto masonry dari lensa pendaki |
| **Peta Interaktif** | Peta OpenStreetMap dengan pin lokasi tiap destinasi (Leaflet.js) |
| **Cuaca Real-time** | Kondisi cuaca terkini di tiga titik pendakian via Open-Meteo API |
| **Panduan Persiapan** | Checklist interaktif perlengkapan, dokumen, dan tips transportasi |
| **Catatan Pendaki** | Testimonial dari pendaki dengan opsi share kutipan |
| **FAQ** | Pertanyaan umum dengan accordion animasi |
| **Kalkulator Biaya** | Estimasi biaya perjalanan berdasarkan kota asal, destinasi, jumlah orang, dan lama menginap |
| **Dark / Light Mode** | Toggle tema dengan persistensi `localStorage`, anti-flash via inline script |
| **Scroll Progress Bar** | Indikator progres baca di bagian atas halaman |
| **Back to Top** | Tombol kembali ke atas yang muncul setelah scroll 600px |
| **Social Share** | Bagikan destinasi atau kutipan pendaki via Web Share API (fallback: clipboard) |

---

## Teknologi

| Kategori | Teknologi |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Bahasa | [TypeScript](https://www.typescriptlang.org/) |
| Styling | CSS murni (custom properties, tidak ada Tailwind utility classes) |
| Font | [Google Fonts](https://fonts.google.com/) — Fraunces (serif), Work Sans, IBM Plex Mono |
| Peta | [Leaflet.js](https://leafletjs.com/) + OpenStreetMap tiles |
| Cuaca API | [Open-Meteo](https://open-meteo.com/) — gratis, tanpa API key |
| Gambar | [Unsplash](https://unsplash.com/) via `next/image` dengan remote pattern |
| Favicon | SVG inline (logo gunung brand) |
| Build | Turbopack (bundler bawaan Next.js 16) |

---

## Struktur Proyek

```
jejak-kaldera/
├── app/
│   ├── layout.tsx          # Root layout, font, metadata, theme script
│   ├── page.tsx            # Halaman utama — menyusun semua section
│   └── globals.css         # Semua styling (variables, components, dark mode)
├── components/
│   ├── Navbar.tsx          # Navigasi sticky + mobile drawer
│   ├── ElevationRail.tsx   # Indikator scroll samping kanan
│   ├── ScrollProgress.tsx  # Progress bar atas
│   ├── Hero.tsx            # Section hero fullscreen
│   ├── Destinasi.tsx       # Grid destinasi + filter + share
│   ├── Aktivitas.tsx       # Daftar aktivitas
│   ├── Galeri.tsx          # Grid foto masonry
│   ├── Peta.tsx            # Peta Leaflet (client-only)
│   ├── PetaClient.tsx      # Wrapper dynamic import SSR-safe
│   ├── Cuaca.tsx           # Widget cuaca real-time
│   ├── Panduan.tsx         # Checklist persiapan interaktif
│   ├── Catatan.tsx         # Testimonial pendaki + share
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── Kalkulator.tsx      # Estimasi biaya perjalanan
│   ├── ThemeToggle.tsx     # Toggle dark/light mode
│   ├── Cta.tsx             # Call to action
│   ├── BackToTop.tsx       # Tombol kembali ke atas
│   └── Footer.tsx          # Footer dengan navigasi & kontak
├── public/
│   └── favicon.svg         # Favicon SVG logo gunung
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Menjalankan Secara Lokal

Pastikan sudah ada **Node.js 18+** dan **npm**.

```bash
# Clone repositori
git clone <repo-url>
cd jejak-kaldera

# Install dependensi
npm install

# Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

```bash
# Build production
npm run build

# Jalankan production build
npm start
```

---

## Dependensi Utama

```json
{
  "next": "16.2.10",
  "react": "19.2.4",
  "leaflet": "^1.9.4",
  "@types/leaflet": "^1.9.x"
}
```

---

## Catatan Pengembangan

- **Dark mode** diimplementasikan dengan `data-theme` attribute di `<html>`, bukan class. Inline script di `<head>` mencegah flash of wrong theme (FOUT) saat pertama load.
- **Peta Leaflet** tidak kompatibel dengan SSR, dibungkus `dynamic(() => import(...), { ssr: false })` di dalam Client Component (`PetaClient.tsx`).
- **Cuaca** menggunakan [Open-Meteo](https://open-meteo.com/) yang sepenuhnya gratis tanpa perlu API key, dengan `revalidate: 1800` (30 menit).
- **Styling** sepenuhnya menggunakan CSS custom properties — tidak ada dependency UI library atau utility framework.

---

## Lisensi

© 2026 Jejak Kaldera. Seluruh hak cipta dilindungi.
