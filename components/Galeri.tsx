// components/Galeri.tsx

export default function Galeri() {
  return (
    <section id="galeri">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-eyebrow">Dari Lensa Pendaki</span>
            <h2>Galeri lanskap dataran tinggi.</h2>
          </div>
        </div>
        
        <div className="gallery-grid">
          <div className="g-item g1">
            <img 
              loading="lazy" 
              src="https://images.unsplash.com/photo-1666887799869-4fbeda25d17f?fm=jpg&q=75&w=1200&auto=format&fit=crop" 
              alt="Bromo diselimuti awan" 
            />
          </div>
          <div className="g-item g2">
            <img 
              loading="lazy" 
              src="https://images.unsplash.com/photo-1749731630653-d9b3f00573ed?fm=jpg&q=75&w=800&auto=format&fit=crop" 
              alt="Kaldera Bromo saat fajar" 
            />
          </div>
          <div className="g-item g3">
            <img 
              loading="lazy" 
              src="https://images.unsplash.com/photo-1693576588093-7244ecec24c9?fm=jpg&q=75&w=500&auto=format&fit=crop" 
              alt="Danau kawah Ijen" 
            />
          </div>
          <div className="g-item g4">
            <img 
              loading="lazy" 
              src="https://images.unsplash.com/photo-1518043610038-064362b44076?fm=jpg&q=75&w=500&auto=format&fit=crop" 
              alt="Pemandangan udara volcano" 
            />
          </div>
          <div className="g-item g5">
            <img 
              loading="lazy" 
              src="https://images.unsplash.com/photo-1698663676293-0c7f3365f67f?fm=jpg&q=75&w=800&auto=format&fit=crop" 
              alt="Bromo pagi berkabut" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}