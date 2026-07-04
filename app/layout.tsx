// app/layout.tsx
import { Fraunces, Work_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });
const ibmPlexMono = IBM_Plex_Mono({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-ibm' });

export const metadata = {
  title: 'Jejak Kaldera — Jelajahi Gunung Jawa Timur',
  description: 'Jelajahi keindahan wisata dataran tinggi Jawa Timur.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-theme="dark" className={`${workSans.variable} ${fraunces.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Set theme before first paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            const t = localStorage.getItem('theme') || 'dark';
            document.documentElement.setAttribute('data-theme', t);
          } catch(e) {}
        `}} />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
