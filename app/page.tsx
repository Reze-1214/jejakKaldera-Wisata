// app/page.tsx
import ElevationRail from '@/components/ElevationRail';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Destinasi from '@/components/Destinasi';
import Aktivitas from '@/components/Aktivitas';
import Galeri from '@/components/Galeri';
import PetaClient from '@/components/PetaClient';
import Cuaca from '@/components/Cuaca';
import Panduan from '@/components/Panduan';
import Catatan from '@/components/Catatan';
import FAQ from '@/components/FAQ';
import Kalkulator from '@/components/Kalkulator';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ElevationRail />
      <Navbar />
      <main>
        <Hero />
        <Destinasi />
        <Aktivitas />
        <Galeri />
        <PetaClient />
        <Cuaca />
        <Panduan />
        <Catatan />
        <FAQ />
        <Kalkulator />
        <Cta />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
